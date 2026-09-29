import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô - Báo Cáo Nghiên Cứu';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F141C',
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.15), transparent 70%)',
          padding: '60px 80px',
          fontFamily: 'serif',
          position: 'relative',
          border: '12px solid #161D27',
        }}
      >
        {/* Inner gold frame */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: '2px solid rgba(212, 175, 55, 0.35)',
            display: 'flex',
          }}
        />

        {/* IHS watermark */}
        <div
          style={{
            position: 'absolute',
            fontSize: 260,
            fontWeight: 900,
            color: 'rgba(212, 175, 55, 0.04)',
            letterSpacing: '0.1em',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          IHS
        </div>

        {/* Motto */}
        <div
          style={{
            fontSize: 20,
            letterSpacing: '0.35em',
            color: '#D4AF37',
            textTransform: 'uppercase',
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          Ad Majorem Dei Gloriam
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#F3D377',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 16,
            maxWidth: 1000,
          }}
        >
          Vượt Lên Sự Tầm Thường
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: '#93C5FD',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Tinh Thần Magis Của Inhaxiô
        </div>

        {/* Description line */}
        <div
          style={{
            fontSize: 22,
            color: '#CBD5E1',
            textAlign: 'center',
            maxWidth: 850,
            lineHeight: 1.5,
            fontStyle: 'italic',
            marginBottom: 36,
          }}
        >
          Báo Cáo Nghiên Cứu Chuyên Sâu Về Linh Đạo Inhaxiô Và Dòng Tên
        </div>

        {/* Academic badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '10px 28px',
            borderRadius: 50,
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            fontSize: 16,
            color: '#E5DDD0',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>Linh Đạo Inhaxiô</span>
          <span style={{ color: '#D4AF37', margin: '0 8px' }}>•</span>
          <span>Dòng Tên</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
