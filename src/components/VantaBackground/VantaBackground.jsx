// Animated rings behind the whole site (Vanta.js, MIT licensed).
//
// three and vanta are pinned in package.json (three@0.134.0, vanta@0.5.24):
// Vanta only works with the three.js r134 era and breaks on modern three,
// so don't let a dependency bot bump them.

import { useEffect, useRef } from 'react'
import './VantaBackground.css'

function VantaBackground() {
  const hostRef = useRef(null)

  useEffect(() => {
    if (!hostRef.current) return

    // Skip the animation for anyone who asked their OS to reduce motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let effect = null
    let cancelled = false

    // three.js is large (~600 KB), so it's loaded in a separate file after the
    // page has rendered: the content appears first, then the rings fade in.
    Promise.all([import('three'), import('vanta/dist/vanta.rings.min')]).then(
      ([THREE, ringsModule]) => {
        if (cancelled || !hostRef.current) return
        // The Vanta file is an old-style (UMD) bundle; the effect may sit under .default
        const RINGS = ringsModule.default?.default || ringsModule.default || ringsModule
        effect = RINGS({
          el: hostRef.current, // the node itself, not a selector string
          THREE, // required: the bundled three isn't on window
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // Transparent, so the site's own light / dark background shows through
          backgroundAlpha: 0,
        })
        hostRef.current.classList.add('vanta-bg--ready')
      },
    )

    // Runs on unmount and between React StrictMode's double-mount in dev.
    // Without it, every remount leaks a WebGL context.
    return () => {
      cancelled = true
      effect?.destroy()
    }
  }, [])

  return <div ref={hostRef} className="vanta-bg" aria-hidden="true" />
}

export default VantaBackground
