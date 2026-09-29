'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks for slug
    .replace(/[đ]/g, 'd')
    .replace(/[Đ]/g, 'd')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Process citation numbers that appear as bare superscript numbers
 * at the end of sentences (e.g., "...text1." or "...text13.")
 * Pattern: a number (1-3 digits) immediately before punctuation or end of text
 */
function processCitations(text: string): React.ReactNode[] {
  // Match numbers that are citations: digits appearing right before . , ; : ) or end of string
  // but NOT numbers that are part of dates, measurements, etc.
  const parts = text.split(/(\d{1,3})(?=[.,:;)\]\s]|$)/g);
  
  if (parts.length <= 1) return [text];
  
  const result: React.ReactNode[] = [];
  let i = 0;
  
  while (i < parts.length) {
    if (i + 1 < parts.length) {
      const textPart = parts[i];
      const numPart = parts[i + 1];
      const num = parseInt(numPart, 10);
      
      // Only treat as citation if:
      // 1. The number is between 1 and 82 (valid ref range)
      // 2. The preceding text doesn't end with common non-citation patterns
      const isLikelyCitation = num >= 1 && num <= 82 && 
        textPart.length > 0 &&
        !textPart.match(/\b(năm|ngày|tháng|số|thế kỷ|LT|Quy tắc|từ|đến|gồm|khoảng|circa)\s*$/i) &&
        !textPart.match(/\d\s*[-–]\s*$/) && // Not part of a range like "1521-"
        !textPart.match(/\(\s*$/) && // Not after opening parenthesis
        !textPart.endsWith(' ') || // Usually citations are directly after text
        (textPart.endsWith(')') || textPart.endsWith('"') || textPart.endsWith('\"'));
      
      if (isLikelyCitation && numPart.match(/^\d{1,2}$/)) {
        result.push(textPart);
        result.push(
          <a
            key={`cite-${i}-${num}`}
            href={`#ref-${num}`}
            className="citation-link"
            title={`Xem nguồn tham khảo ${num}`}
          >
            [{num}]
          </a>
        );
        i += 2;
        continue;
      }
    }
    
    result.push(parts[i]);
    i++;
  }
  
  return result;
}

function processChildrenForCitations(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return children; // Don't auto-process - too risky with Vietnamese text numbers
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as { children?: React.ReactNode };
        return React.cloneElement(
          child as React.ReactElement<{ children?: React.ReactNode }>,
          { key: i },
          processChildrenForCitations(childProps.children)
        );
      }
      return child;
    });
  }
  if (React.isValidElement(children)) {
    const childProps = children.props as { children?: React.ReactNode };
    return React.cloneElement(
      children as React.ReactElement<{ children?: React.ReactNode }>,
      {},
      processChildrenForCitations(childProps.children)
    );
  }
  return children;
}

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-ignatian dark:prose-ignatian-dark w-full max-w-full min-w-0 break-words print:!text-black" data-article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ node, children, ...props }) => {
            const text = typeof children === 'string' ? children : 
              React.Children.toArray(children)
                .map(child => typeof child === 'string' ? child : '')
                .join('');
            const id = slugify(text);
            return (
              <h2 id={id} className="group relative" {...props}>
                {children}
                <a href={`#${id}`} data-toc-ignore="true" className="opacity-0 group-hover:opacity-100 absolute -left-6 top-1/2 -translate-y-1/2 text-gold/60 hover:text-burgundy dark:hover:text-gold transition-opacity no-underline text-xl font-normal print:hidden" aria-hidden="true">
                  #
                </a>
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            const text = typeof children === 'string' ? children : 
              React.Children.toArray(children)
                .map(child => typeof child === 'string' ? child : '')
                .join('');
            const id = slugify(text);
            return (
              <h3 id={id} className="group relative" {...props}>
                {children}
                <a href={`#${id}`} data-toc-ignore="true" className="opacity-0 group-hover:opacity-100 absolute -left-5 top-1/2 -translate-y-1/2 text-gold/60 hover:text-burgundy dark:hover:text-gold transition-opacity no-underline text-lg font-normal print:hidden" aria-hidden="true">
                  #
                </a>
              </h3>
            );
          },
          p: ({ node, children, ...props }) => {
            return <p {...props}>{children}</p>;
          },
          li: ({ node, children, ...props }) => {
            return <li {...props}>{children}</li>;
          },
          blockquote: ({ node, children, ...props }) => {
            return (
              <blockquote {...props}>
                {children}
              </blockquote>
            );
          },
          table: ({ node, children, ...props }) => {
            return (
              <div className="my-8 w-full max-w-full">
                <div className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-ink-lighter/70 dark:text-slate-500 mb-1.5 print:hidden">
                  <span>← Cuộn ngang →</span>
                </div>
                <div className="overflow-x-auto rounded-lg border border-parchment-300 dark:border-slate-800/80 shadow-sm bg-parchment-50/60 dark:bg-[#121822]/50">
                  <table className="w-full" {...props}>{children}</table>
                </div>
              </div>
            );
          },
          span: ({ node, children, className, id, ...props }) => {
            return (
              <span id={id} className={className} {...props}>
                {children}
              </span>
            );
          },
          a: ({ node, href, children, ...props }) => {
            return (
              <a
                href={href}
                {...props}
                className="break-all"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
