// Music-player frame, converted from public/player-frame.svg so the progress bar
// can move. `progress` goes from 0 (top of the story) to 1 (end of the story).
// The art window is a transparent hole: x=42 y=42 w=316 h=316 in viewBox units.

const TRACK_X = 42
const TRACK_WIDTH = 316
const TOTAL_SECONDS = 193 // 3:13, the length of the original 1:53 / −1:20 artwork

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

function PlayerFrame({ progress, className }) {
  const p = Math.min(Math.max(progress, 0), 1)
  const filled = TRACK_WIDTH * p
  const elapsed = TOTAL_SECONDS * p
  const remaining = TOTAL_SECONDS - elapsed

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 680"
      aria-hidden="true"
      focusable="false"
    >
      {/* body with the window cut out (fillRule="evenodd") */}
      <path
        fill="#6E7276"
        fillRule="evenodd"
        d="M44 10 H356 A34 34 0 0 1 390 44 V626 A34 34 0 0 1 356 670 H44 A34 34 0 0 1 10 626 V44 A34 34 0 0 1 44 10 Z
           M60 42 H340 A18 18 0 0 1 358 60 V340 A18 18 0 0 1 340 358 H60 A18 18 0 0 1 42 340 V60 A18 18 0 0 1 60 42 Z"
      />

      <g fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
        <text x="42" y="400" fill="#fff" fillOpacity=".95" fontSize="18" fontWeight="600">
          Software Engineer
        </text>
        <text x="42" y="424" fill="#fff" fillOpacity=".55" fontSize="14">
          Borys Solorzano
        </text>

        {/* scrubber: follows the story's scroll position */}
        <rect x={TRACK_X} y="468" width={TRACK_WIDTH} height="4" rx="2" fill="#fff" fillOpacity=".3" />
        <rect x={TRACK_X} y="468" width={filled} height="4" rx="2" fill="#fff" fillOpacity=".92" />
        <circle cx={TRACK_X + filled} cy="470" r="5.5" fill="#fff" />
        <text x="42" y="494" fill="#fff" fillOpacity=".65" fontSize="12">
          {formatTime(elapsed)}
        </text>
        <text x="358" y="494" fill="#fff" fillOpacity=".65" fontSize="12" textAnchor="end">
          −{formatTime(remaining)}
        </text>
      </g>

      {/* transport controls */}
      <g fill="#fff">
        <path d="M144 530 V560 L123 545 Z" />
        <path d="M123 530 V560 L102 545 Z" />
        <rect x="189" y="529" width="7" height="32" rx="2.5" />
        <rect x="204" y="529" width="7" height="32" rx="2.5" />
        <path d="M256 530 V560 L277 545 Z" />
        <path d="M277 530 V560 L298 545 Z" />
      </g>

      {/* volume */}
      <g fill="#fff" fillOpacity=".9">
        <path d="M44 610 H48 L53.6 604.4 V623.6 L48 618 H44 Z" />
        <rect x="72" y="612" width="254" height="4" rx="2" fill="#fff" fillOpacity=".3" />
        <rect x="72" y="612" width="203" height="4" rx="2" fill="#fff" fillOpacity=".92" />
        <circle cx="275" cy="614" r="9" fill="#fff" fillOpacity="1" />
        <path d="M336 610 H340 L345.6 604.4 V623.6 L340 618 H336 Z" />
        <path
          d="M348.8 609.2 a7.2 7.2 0 0 1 0 9.6"
          fill="none"
          stroke="#fff"
          strokeOpacity=".9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M352.8 605.2 a12.8 12.8 0 0 1 0 17.6"
          fill="none"
          stroke="#fff"
          strokeOpacity=".9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default PlayerFrame
