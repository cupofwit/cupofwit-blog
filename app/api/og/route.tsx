import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const STOP_WORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of',
  'with','by','from','is','it','its','as','not','this','that','here',
  'why','how','what','when','where','who','i','my','your','their','our',
  'does','did','do','have','had','has','been','was','were','be','are',
  "it's","here's","why","here","its","its",
]);

function getGhostWord(title: string): string {
  const words = title.split(/\s+/);
  const significant = words.find(
    (w) => !STOP_WORDS.has(w.toLowerCase().replace(/[^a-z]/g, ''))
  );
  return (significant ?? words[0] ?? 'AI').replace(/[^a-zA-Z]/g, '').toUpperCase();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Cup of Wit';
  const ghostWord = getGhostWord(title);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#F5F0E8',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ghost word — absolute, right side, vertically centred */}
        <div
          style={{
            position: 'absolute',
            right: -30,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 310,
              fontWeight: 900,
              color: '#EAE6F5',
              lineHeight: 1,
              letterSpacing: -12,
              fontFamily: 'serif',
            }}
          >
            {ghostWord}
          </div>
        </div>

        {/* Foreground content column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Badge */}
          <div style={{ display: 'flex' }}>
            <div
              style={{
                background: '#1C2B4A',
                color: '#F5F0E8',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                padding: '8px 16px',
                borderRadius: 4,
                fontFamily: 'sans-serif',
              }}
            >
              CUP OF WIT
            </div>
          </div>

          {/* Spacer pushes title to vertical centre */}
          <div style={{ flex: 1, display: 'flex' }} />

          {/* Amber accent line */}
          <div
            style={{
              width: 56,
              height: 5,
              background: '#C2652A',
              borderRadius: 3,
            }}
          />

          {/* Spacer */}
          <div style={{ flex: 1, display: 'flex' }} />

          {/* Bottom row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2.5,
                color: '#9B8A78',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              AI STRATEGY · LEADERSHIP · SHARP THINKING
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#9B8A78',
                fontFamily: 'sans-serif',
              }}
            >
              cupofwit.substack.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
