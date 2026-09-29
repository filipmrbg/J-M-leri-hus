import React from 'react';
import { Star } from 'lucide-react';

export interface Review {
  name: string;
  location?: string;
  text?: string;
  stars: number;
  date?: string;
  authorSub?: string;
  avatarBg?: string;
  avatarUrl?: string;
  isLocalGuide?: boolean;
}

interface ReviewCardProps {
  review: Review;
}

// Google default avatar colors
const getAvatarColor = (name: string) => {
  const colors = [
    '#4285F4', // Google Blue
    '#EA4335', // Google Red
    '#FBBC05', // Google Yellow
    '#34A853', // Google Green
    '#795548', // Brown
    '#455A64', // Slate
    '#00897B', // Teal
    '#5C6BC0', // Indigo
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { name, location, text, stars, date, authorSub, avatarBg, avatarUrl, isLocalGuide } = review;
  const initial = name.charAt(0).toUpperCase();
  const avatarBgColor = avatarBg || getAvatarColor(name);

  return (
    <div 
      className="google-review-card" 
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        textAlign: 'left',
        height: '100%',
        justifyContent: 'space-between',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.08)';
        e.currentTarget.style.borderColor = '#d1d5db';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      <div>
        {/* Header: Avatar, Name/Source, Google Logo */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Avatar with optional Local Guide badge */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: avatarBgColor,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  userSelect: 'none',
                }}>
                  {initial}
                </div>
              )}
              {isLocalGuide && (
                <div
                  title="Lokal guide på Google"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#f97316',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Star size={9} fill="#ffffff" color="#ffffff" />
                </div>
              )}
            </div>

            <div>
              <h4 style={{ margin: 0, fontWeight: 700, fontSize: '0.96rem', color: '#111827', lineHeight: '1.25' }}>
                {name}
              </h4>
              <p style={{ margin: '3px 0 0 0', fontSize: '0.78rem', color: '#6b7280', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                {authorSub || (location ? `${location}, Sverige` : 'Recension från Google')}
              </p>
            </div>
          </div>

          {/* Google G Logo */}
          <div style={{ flexShrink: 0, padding: '2px' }} title="Verifierad Google-recension">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.13h4.01c2.34-2.16 3.69-5.32 3.69-8.75z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-4.01-3.13c-1.11.75-2.53 1.19-3.95 1.19-3.04 0-5.61-2.05-6.53-4.82H1.31v3.23A12 12 0 0 0 12 24z"/>
              <path fill="#FBBC05" d="M5.47 14.33A7.16 7.16 0 0 1 5 12c0-.8.14-1.58.39-2.33V6.44H1.31A11.96 11.96 0 0 0 0 12c0 2.05.52 4 1.31 5.67l4.16-3.34z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0A12 12 0 0 0 1.31 6.44l4.16 3.23a7.18 7.18 0 0 1 6.53-4.92z"/>
            </svg>
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: text ? '12px' : '0' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < stars ? '#FBBC05' : 'none'}
                color={i < stars ? '#FBBC05' : '#d1d5db'}
                strokeWidth={i < stars ? 1 : 2}
              />
            ))}
          </div>
          {date && (
            <span style={{ fontSize: '0.75rem', color: '#888888' }}>
              {date}
            </span>
          )}
        </div>

        {/* Review Text */}
        {text && (
          <p style={{
            margin: 0,
            fontSize: '0.92rem',
            lineHeight: '1.65',
            color: '#374151',
            fontWeight: 400,
          }}>
            "{text}"
          </p>
        )}
      </div>

      {/* Verified Google Badge footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: '1px solid #f3f4f6',
        fontSize: '0.75rem',
        color: '#9ca3af',
      }}>
        <span>Google-verifierad</span>
        <span style={{ color: '#16a34a', fontWeight: 600 }}>5/5 Betyg</span>
      </div>
    </div>
  );
};

export default ReviewCard;
