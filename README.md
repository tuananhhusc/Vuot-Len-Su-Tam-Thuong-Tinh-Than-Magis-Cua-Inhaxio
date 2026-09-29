# Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô
### Năng Động Biến Đổi Toàn Diện, Một Báo Cáo Nghiên Cứu Chuyên Sâu

> **Ad Majorem Dei Gloriam (AMDG)**  
> *Để Thiên Chúa được vinh quang lớn lao hơn.*

---

## 📖 1. Giới Thiệu Dự Án (Overview)

**Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô** là trang web đọc nghiên cứu học thuật đơn trang (Single-Page Long-form Reading Website) chuyên sâu về linh đạo Inhaxiô và di sản Dòng Tên (*Societas Iesu - S.J.*). 

Trang web được thiết kế theo phong cách mỹ học học thuật hàn lâm (*Academic Aesthetic*) kết hợp với ngôn ngữ thị giác thiêng liêng, tĩnh tâm của truyền thống Công giáo Rôma. Dự án tập trung mang lại trải nghiệm đọc kéo dài êm dịu cho thị giác, khả năng điều hướng thông minh và tính chính xác tuyệt đối về thuật ngữ thần học Công giáo Việt Nam.

---

## ✨ 2. Tính Năng Nổi Bật (Key Features)

### 📚 Trải Nghiệm Đọc Học Thuật Chuyên Sâu (Academic Reading Experience)
* **Kiểu chữ cổ điển (Typography):** Sử dụng sự phối hợp hài hòa giữa font chữ có chân học thuật:
  * **Playfair Display:** Dành cho các tiêu đề chính, mang lại nét trang trọng, tôn kính và uy nghiêm.
  * **Lora:** Dành cho nội dung bài viết, tối ưu hóa khả năng đọc chữ tiếng Việt liền mạch với khoảng cách dòng (*leading*) lý tưởng `1.85`.
* **Thước đo tiến trình đọc (Reading Progress Bar):** Thanh tiến trình mảnh mai nằm sát đỉnh màn hình, tự động tính toán tỷ lệ cuộn trang thực tế giúp độc giả dễ dàng định lượng thời gian đọc bài.
* **Tối ưu hóa bản in học thuật (`@media print`):** Tự động ẩn toàn bộ thanh điều hướng, nút chuyển theme và mục lục khi in ra giấy hoặc xuất file PDF; bảng biểu và chú thích được định dạng đen trắng chuẩn bài báo khoa học.

### 🧭 Mục Lục Thông Minh & Điều Hướng Trực Quan (Smart Table of Contents)
* **Cố định theo màn hình trên Desktop (`Sticky Sidebar`):** Nằm gọn gàng bên trái bài viết, giữ nguyên vị trí (`top-24`) khi cuộn trang và tích hợp thanh cuộn riêng độc lập nếu nội dung bài viết quá dài.
* **Theo dõi vị trí đọc chủ động (`Active Heading Tracking`):** Sử dụng thuật toán `IntersectionObserver` tự động đánh dấu và đổi màu nổi bật đề mục tương ứng với đoạn văn người đọc đang theo dõi trên màn hình.
* **Mục lục di động công thái học (`Mobile Drawer`):** Nút mở mục lục dạng viên thuốc (*Pill button*) đặt ở góc dưới bên trái (`bottom-6 left-4`), hỗ trợ thao tác bằng ngón tay cái thuận tiện. Tích hợp cơ chế khóa cuộn trang nền (`Body scroll lock`) và đóng nhanh bằng phím `Escape` hoặc chạm ngoài.

### 🔗 Hệ Thống Chú Thích & Nguồn Tham Khảo Hai Chiều (Bi-directional Citations)
* Toàn bộ **81 nguồn tài liệu học thuật** được mã hóa thành các số chú thích dạng chỉ số trên (`<sup>[N]</sup>`).
* Khi nhấn vào số chú thích trong văn bản, trang web sẽ cuộn mượt mà đến tài liệu tham khảo tương ứng ở cuối bài kèm hiệu ứng đổi màu nổi bật (`:target highlight`).
* Cuối mỗi tài liệu tham khảo đều có nút quay lại (`↩`) đưa người đọc về chính xác vị trí câu văn đang đọc dở.

### 🎨 Hệ Thống Giao Diện Kép (Dual Theme System)
Hệ thống chuyển đổi giao diện Sáng / Tối (*Light / Dark Theme*) được thiết kế độc quyền dựa trên bảng màu di sản Công giáo:
* **Chế độ Giấy Da Cổ Điển (Parchment Light Mode):**
  * Màu nền: Nền giấy da ngà cổ kính (`#F9F6F0`).
  * Màu chữ: Mực in cổ xám đen (`#2D3748`).
  * Điểm nhấn: Màu đỏ rượu Dòng Tên (*Jesuit Burgundy* `#7A1B1E`) và Vàng kim cổ điển (*Antique Gold* `#D4AF37`).
* **Chế độ Đêm Tĩnh Tâm (Jesuit Midnight Dark Mode):**
  * Màu nền: Nền màn đêm tĩnh mịch (`#0F141C`) phối hợp xanh đen thâm trầm (`#161D27`).
  * Màu chữ: Xám bạc thanh thoát (`#E2E8F0`), triệt tiêu hoàn toàn ánh sáng xanh chói mắt.
  * Điểm nhấn: Ánh vàng kim phát sáng (*Luminous Antique Gold* `#F3D377`) và xanh lam trời (*Sky Blue* `#93C5FD`).

### 📱 Tối Ưu Hóa Giao Diện Di Động Toàn Diện (Mobile Responsive Mastery)
* Loại bỏ triệt để hiện tượng vỡ layout và khoảng trắng bên phải do các link URL tài liệu tham khảo dài gây ra bằng cơ chế `overflow-wrap: anywhere; word-break: break-all;`.
* Bố cục công thái học đối xứng: Nút **Mục Lục** ở góc dưới bên trái và nút **Lên đầu trang** ở góc dưới bên phải, không bao giờ bị đè lấn nhau.
* Bảng biểu đa cột phức tạp được bọc trong khung cuộn ngang mượt mà kèm gợi ý trực quan `← Cuộn ngang →`.

### 🇻🇳 Chuẩn Hóa 100% Thuật Ngữ Công Giáo Rôma
* Ngôn ngữ bài viết được rà soát và đối chiếu nghiêm ngặt với các văn kiện chính thức của Giáo hội Công giáo Việt Nam và Dòng Tên:
  * Sử dụng **"ơn cứu độ" / "cứu độ"** thay cho "cứu rỗi" (vốn là cách dùng của Tin Lành).
  * Sử dụng **"cuộc Khổ Nạn và Tử Nạn"** thay cho cách gọi thế tục.
  * Sử dụng **"Nước Thiên Chúa"** thay cho "vương quốc của Ngài".
  * Sử dụng **"Dân Thiên Chúa"** (*Populus Dei*) chuẩn danh xưng Vatican II.
  * Loại bỏ hoàn toàn các cụm tiếng Anh kèm sát tiếng Việt và các dấu gạch nối thừa trong câu văn.

### 🚀 Tối Ưu Hóa SEO & Chia Sẻ Mạng Xã Hội (Advanced SEO & Open Graph)
* **Ảnh xem trước động (`app/opengraph-image.tsx`):** Tự động sinh ảnh card mạng xã hội kích thước `1200x630px` chuẩn thẩm mỹ Dòng Tên với huy hiệu IHS và phương châm AMDG.
* **Favicon động (`app/icon.tsx`):** Biểu tượng IHS vàng kim trên nền đỏ Burgundy sắc nét.
* **Dữ liệu có cấu trúc Google (`JSON-LD`):** Định dạng chuẩn `ScholarlyArticle` khai báo đầy đủ tác giả, chủ đề nghiên cứu và nhà xuất bản cho Google Bot.
* **Tự động sinh `robots.txt` & `sitemap.xml`:** Cấu hình chuẩn xác cho các công cụ tìm kiếm cào dữ liệu và xếp hạng.

---

## 🛠️ 3. Công Nghệ Sử Dụng (Tech Stack)

| Lĩnh vực | Công nghệ | Phiên bản | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.5+` | Tối ưu hóa Static Page Generation & Dynamic Image Response |
| **Thư viện UI** | React / React DOM | `19.0` | Server Components & Client Hooks |
| **Ngôn ngữ** | TypeScript | `5.6+` | Kiểm soát kiểu dữ liệu an toàn và chặt chẽ |
| **CSS Framework** | Tailwind CSS | `3.4+` | Tùy biến bảng màu di sản và biến thể Dark Mode |
| **Xử lý văn bản** | `@tailwindcss/typography` | `0.5+` | Tinh chỉnh giao diện bài viết học thuật (`prose-ignatian`) |
| **Markdown Engine** | `react-markdown` | `9.0+` | Render bài viết nghiên cứu từ file Markdown |
| **Plugin Markdown**| `remark-gfm` & `rehype-raw` | Mới nhất | Hỗ trợ định dạng bảng biểu và thẻ HTML chú thích |
| **Quản lý Theme** | `next-themes` | `0.4+` | Chuyển đổi Dark/Light theme không chớp màn hình |
| **Icon System** | `lucide-react` | `1.48+` | Bộ icon SVG nhẹ và hiện đại |
| **Font chữ** | `next/font/google` | Built-in | Tải trước font Playfair Display & Lora hỗ trợ tiếng Việt |

---

## 📂 4. Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
d:/Magis/
├── app/
│   ├── globals.css           # Cấu hình CSS toàn cục, tùy biến thanh cuộn, font chữ và responsive
│   ├── icon.tsx              # Tự sinh Favicon IHS bằng Next.js ImageResponse
│   ├── layout.tsx            # Bố cục gốc: Tích hợp Google Fonts, Providers, SEO Metadata
│   ├── opengraph-image.tsx   # Tự sinh ảnh thẻ xem trước Open Graph 1200x630
│   ├── page.tsx              # Trang chủ: Render bài viết, nạp JSON-LD Schema và giao diện chính
│   ├── robots.ts             # Tự sinh file robots.txt
│   └── sitemap.ts            # Tự sinh file sitemap.xml
├── components/
│   ├── BackToTop.tsx         # Nút nổi cuộn nhanh về đầu trang (góc dưới phải)
│   ├── Footer.tsx            # Chân trang: Bản quyền học thuật, seal IHS và tước hiệu AMDG
│   ├── HeroSection.tsx       # Khối tiêu đề bài viết: Hiệu ứng vầng hào quang, hoa văn chữ thập
│   ├── MarkdownRenderer.tsx  # Bộ render Markdown: Xử lý tiêu đề neo, bảng cuộn ngang, link ngoài
│   ├── ProgressBar.tsx       # Thanh thước đo tiến trình đọc bài viết
│   ├── Providers.tsx         # Bọc ThemeProvider quản lý chế độ sáng/tối
│   ├── TableOfContents.tsx   # Thanh mục lục: Cố định trên Desktop & Drawer trên Mobile
│   └── ThemeToggle.tsx       # Nút chuyển đổi giao diện Sáng / Tối phong cách viên thuốc
├── content/
│   └── article.ts            # Hàm đọc nội dung file Markdown từ đĩa hệ thống
├── magis_formatted.md        # Văn bản gốc bài nghiên cứu chuyên sâu về Tinh Thần Magis
├── package.json              # Khai báo gói thư viện và script thực thi
├── tailwind.config.ts        # Cấu hình bảng màu Parchment, Burgundy, Gold và Typography presets
└── tsconfig.json             # Cấu hình trình biên dịch TypeScript
```

---

## 🚀 5. Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)

### Yêu cầu hệ thống
* **Node.js:** Phiên bản `18.18.0` trở lên (Khuyến nghị dùng bản LTS `20.x` hoặc `22.x`).
* **Trình quản lý gói:** `npm`, `yarn` hoặc `pnpm`.

### Các bước khởi chạy môi trường phát triển (Development)

1. **Di chuyển vào thư mục dự án:**
   ```bash
   cd d:/Magis
   ```

2. **Cài đặt toàn bộ thư viện phụ thuộc:**
   ```bash
   npm install
   ```

3. **Chạy máy chủ phát triển (Development Server):**
   ```bash
   npm run dev
   ```

4. **Truy cập trang web:**
   Mở trình duyệt và truy cập vào địa chỉ:
   ```text
   http://localhost:3000
   ```

### Đóng gói và chạy phiên bản sản xuất (Production Build)

1. **Biên dịch và tối ưu hóa dự án:**
   ```bash
   npm run build
   ```

2. **Khởi chạy ứng dụng sản xuất:**
   ```bash
   npm run start
   ```

---

## 🌐 6. Hướng Dẫn Triển Khai (Deployment)

Dự án sử dụng Next.js tiêu chuẩn và hoàn toàn sẵn sàng để đưa lên các nền tảng đám mây:

* **Vercel (Khuyến nghị tốt nhất):**
  * Đẩy mã nguồn lên kho chứa GitHub / GitLab.
  * Đăng nhập Vercel, chọn **Import Project** và chọn repository này.
  * Vercel sẽ tự động phát hiện Next.js và triển khai trong vòng chưa đầy 1 phút.
* **Triển khai máy chủ riêng (VPS / Docker):**
  * Chạy `npm run build`.
  * Khởi chạy dịch vụ thông qua `PM2` hoặc tạo `Dockerfile` Node.js tiêu chuẩn lắng nghe tại cổng `3000`.

---

## 📜 7. Bản Quyền & Ý Nghĩa Học Thuật (License & Dedication)

Dự án được biên soạn và xây dựng phục vụ mục đích nghiên cứu học thuật, giáo dục triết học và suy niệm tâm linh về Linh Đạo Inhaxiô và Dòng Tên.

**A.M.D.G. — Ad Majorem Dei Gloriam**  
*Mọi sự xin quy hướng về Vinh Quang Lớn Lao Hơn của Thiên Chúa.*
