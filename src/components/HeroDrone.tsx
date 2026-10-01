import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

/**
 * ============================================================================
 * HeroDrone Component
 * ============================================================================
 * Minimal geometric multirotor drone animated with anime.js.
 * Independent of Framer Motion, suitable for dropping into hero sections.
 *
 * HOW TO ADJUST:
 * - Hover / Bobbing Amplitude: Change `translateY: [-12, 12]` in `hoverTimeline`
 * - Hover Speed: Change `duration: 2500` in `hoverTimeline`
 * - Yaw Rotation Angle: Change `rotate: [-3.5, 3.5]` in `yawAnimation`
 * - Propeller Spin Speed: Change `duration: 450` in propeller loop
 * - LED Flash Speed / Brightness: Change `duration: 800` & `opacity: [0.35, 1]` in `ledAnimations`
 * - Colors:
 *    Body / Arms: #979C9F (accented with #C4C6C5)
 *    Propellers: rgba(241, 240, 236, 0.65)
 *    LEDs: #F15A32
 * ============================================================================
 */

export default function HeroDrone() {
  // Container & SVG element refs
  const bodyRef = useRef<SVGGElement | null>(null);
  const propRef1 = useRef<SVGGElement | null>(null);
  const propRef2 = useRef<SVGGElement | null>(null);
  const propRef3 = useRef<SVGGElement | null>(null);
  const propRef4 = useRef<SVGGElement | null>(null);
  const ledRef1 = useRef<SVGCircleElement | null>(null);
  const ledRef2 = useRef<SVGCircleElement | null>(null);
  const ledRef3 = useRef<SVGCircleElement | null>(null);
  const ledRef4 = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // References array for cleanup tracking
    const animInstances: (anime.AnimeInstance | anime.AnimeTimelineInstance)[] = [];

    if (bodyRef.current) {
      if (prefersReducedMotion) {
        // Subtle, minimal static state or very slow gentle hover for accessibility
        const reducedHover = anime({
          targets: bodyRef.current,
          translateY: [-2, 2],
          duration: 4000,
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
        });
        animInstances.push(reducedHover);
      } else {
        // 1. Idle Hover Bobbing (translateY ±12px over 2.5s)
        const hoverTimeline = anime.timeline({
          loop: true,
          direction: 'alternate',
        });

        hoverTimeline.add({
          targets: bodyRef.current,
          translateY: [-12, 12],
          duration: 2500,
          easing: 'easeInOutSine',
        });
        animInstances.push(hoverTimeline);

        // 2. Slow Yaw Rotation (±3.5deg over ~5s around drone center 200, 140)
        const yawAnimation = anime({
          targets: bodyRef.current,
          rotate: [-3.5, 3.5],
          duration: 5000,
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
          transformOrigin: '200px 140px',
        });
        animInstances.push(yawAnimation);
      }
    }

    // 3. Realistic High-Speed Propeller Spinning
    // In SVG, animating `transform: rotate(N)` via anime directly on the element's transform attribute
    // guarantees pure 360-degree rotation around local origin (0, 0).
    const propConfigs = [
      { ref: propRef1, dir: 1 },
      { ref: propRef2, dir: -1 },
      { ref: propRef3, dir: -1 },
      { ref: propRef4, dir: 1 },
    ];

    propConfigs.forEach(({ ref, dir }) => {
      const el = ref.current;
      if (!el) return;

      const obj = { angle: 0 };
      const duration = prefersReducedMotion ? 1800 : 450;

      const propAnim = anime({
        targets: obj,
        angle: dir > 0 ? [0, 360] : [360, 0],
        duration,
        easing: 'linear',
        loop: true,
        update: () => {
          if (el) {
            el.setAttribute('transform', `rotate(${obj.angle})`);
          }
        },
      });

      animInstances.push(propAnim);
    });

    // 4. Staggered LED Blinking (opacity 0.35 to 1 over 800ms)
    const ledElements = [
      ledRef1.current,
      ledRef2.current,
      ledRef3.current,
      ledRef4.current,
    ].filter(Boolean) as SVGCircleElement[];

    if (ledElements.length > 0) {
      const ledAnim = anime({
        targets: ledElements,
        opacity: [0.35, 1],
        duration: 800,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        delay: anime.stagger(180),
      });
      animInstances.push(ledAnim);
    }

    // Clean up on unmount: pause and remove anime targets
    return () => {
      animInstances.forEach((instance) => {
        instance.pause();
      });
      if (bodyRef.current) anime.remove(bodyRef.current);
      propConfigs.forEach(({ ref }) => {
        if (ref.current) anime.remove(ref.current);
      });
      ledElements.forEach((led) => {
        anime.remove(led);
      });
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-full max-w-[420px] aspect-[4/3] select-none pointer-events-none"
      aria-label="Interactive multirotor drone illustration"
      role="img"
    >
      <svg
        viewBox="0 0 400 280"
        className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle radial glow under motors */}
          <radialGradient id="ledGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F15A32" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F15A32" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Floating Drone Body Container (Controlled by anime.js) */}
        <g ref={bodyRef}>
          {/* ----------------- Carbon Fiber / Aluminum Arms ----------------- */}
          {/* Front-Left Arm */}
          <line
            x1="200"
            y1="140"
            x2="110"
            y2="75"
            stroke="#979C9F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="200"
            y1="140"
            x2="110"
            y2="75"
            stroke="#C4C6C5"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Front-Right Arm */}
          <line
            x1="200"
            y1="140"
            x2="290"
            y2="75"
            stroke="#979C9F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="200"
            y1="140"
            x2="290"
            y2="75"
            stroke="#C4C6C5"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Rear-Left Arm */}
          <line
            x1="200"
            y1="140"
            x2="90"
            y2="185"
            stroke="#979C9F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="200"
            y1="140"
            x2="90"
            y2="185"
            stroke="#C4C6C5"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Rear-Right Arm */}
          <line
            x1="200"
            y1="140"
            x2="310"
            y2="185"
            stroke="#979C9F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="200"
            y1="140"
            x2="310"
            y2="185"
            stroke="#C4C6C5"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* ----------------- Motor Pods ----------------- */}
          {/* Front-Left Motor Pod (110, 75) */}
          <circle cx="110" cy="75" r="14" fill="#22252A" stroke="#979C9F" strokeWidth="2.5" />
          <circle cx="110" cy="75" r="6" fill="#C4C6C5" />

          {/* Front-Right Motor Pod (290, 75) */}
          <circle cx="290" cy="75" r="14" fill="#22252A" stroke="#979C9F" strokeWidth="2.5" />
          <circle cx="290" cy="75" r="6" fill="#C4C6C5" />

          {/* Rear-Left Motor Pod (90, 185) */}
          <circle cx="90" cy="185" r="14" fill="#22252A" stroke="#979C9F" strokeWidth="2.5" />
          <circle cx="90" cy="185" r="6" fill="#C4C6C5" />

          {/* Rear-Right Motor Pod (310, 185) */}
          <circle cx="310" cy="185" r="14" fill="#22252A" stroke="#979C9F" strokeWidth="2.5" />
          <circle cx="310" cy="185" r="6" fill="#C4C6C5" />

          {/* ----------------- Nav LEDs (#F15A32) ----------------- */}
          {/* Front-Left LED */}
          <circle cx="110" cy="75" r="16" fill="url(#ledGlow)" opacity="0.6" />
          <circle ref={ledRef1} cx="110" cy="94" r="3.5" fill="#F15A32" />

          {/* Front-Right LED */}
          <circle cx="290" cy="75" r="16" fill="url(#ledGlow)" opacity="0.6" />
          <circle ref={ledRef2} cx="290" cy="94" r="3.5" fill="#F15A32" />

          {/* Rear-Left LED */}
          <circle cx="90" cy="185" r="16" fill="url(#ledGlow)" opacity="0.6" />
          <circle ref={ledRef3} cx="90" cy="204" r="3.5" fill="#F15A32" />

          {/* Rear-Right LED */}
          <circle cx="310" cy="185" r="16" fill="url(#ledGlow)" opacity="0.6" />
          <circle ref={ledRef4} cx="310" cy="204" r="3.5" fill="#F15A32" />

          {/* ----------------- Central Avionics Fuselage ----------------- */}
          {/* Main geometric chassis plate */}
          <polygon
            points="170,110 230,110 248,135 236,170 164,170 152,135"
            fill="#22252A"
            stroke="#979C9F"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Top Canopy / Battery module */}
          <polygon
            points="176,118 224,118 238,137 228,162 172,162 162,137"
            fill="#2B2E33"
            stroke="#C4C6C5"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Flight controller / GPS puck */}
          <circle cx="200" cy="138" r="10" fill="#191B1F" stroke="#979C9F" strokeWidth="1.5" />
          <circle cx="200" cy="138" r="4" fill="#F15A32" opacity="0.9" />

          {/* Orientation chevron marker (pointing forward) */}
          <path
            d="M 194 124 L 200 119 L 206 124"
            stroke="#C4C6C5"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ----------------- Rotating Propellers ----------------- */}
          {/*
            Each motor point has a translation group:
              - Motor 1: translate(110, 75)
              - Motor 2: translate(290, 75)
              - Motor 3: translate(90, 185)
              - Motor 4: translate(310, 185)
            Inside, the propeller blade pair has 2 counter-balanced aerodynamic blades plus a high-speed motion blur rotor disk,
            all centered at (0,0) and rotating via SVG transform="rotate(...)".
          */}

          {/* Propeller 1: Front-Left Hub (110, 75) */}
          <g transform="translate(110, 75)">
            <g ref={propRef1}>
              {/* Semi-transparent rotor wash disk (creates the realistic spinning blur effect) */}
              <circle cx="0" cy="0" r="44" fill="#F1F0EC" fillOpacity="0.12" stroke="#F1F0EC" strokeWidth="0.5" strokeOpacity="0.25" />
              {/* Blade 1 */}
              <ellipse cx="0" cy="0" rx="44" ry="5.5" fill="#F1F0EC" fillOpacity="0.7" stroke="#979C9F" strokeWidth="0.5" />
              {/* Blade 2 (Perpendicular cross-blade for realistic multi-blade quad appearance) */}
              <ellipse cx="0" cy="0" rx="5.5" ry="44" fill="#F1F0EC" fillOpacity="0.4" stroke="#979C9F" strokeWidth="0.5" />
              {/* Motor Shaft Nut */}
              <circle cx="0" cy="0" r="4" fill="#22252A" stroke="#C4C6C5" strokeWidth="1" />
            </g>
          </g>

          {/* Propeller 2: Front-Right Hub (290, 75) */}
          <g transform="translate(290, 75)">
            <g ref={propRef2}>
              {/* Semi-transparent rotor wash disk */}
              <circle cx="0" cy="0" r="44" fill="#F1F0EC" fillOpacity="0.12" stroke="#F1F0EC" strokeWidth="0.5" strokeOpacity="0.25" />
              {/* Blade 1 */}
              <ellipse cx="0" cy="0" rx="44" ry="5.5" fill="#F1F0EC" fillOpacity="0.7" stroke="#979C9F" strokeWidth="0.5" />
              {/* Blade 2 */}
              <ellipse cx="0" cy="0" rx="5.5" ry="44" fill="#F1F0EC" fillOpacity="0.4" stroke="#979C9F" strokeWidth="0.5" />
              {/* Motor Shaft Nut */}
              <circle cx="0" cy="0" r="4" fill="#22252A" stroke="#C4C6C5" strokeWidth="1" />
            </g>
          </g>

          {/* Propeller 3: Rear-Left Hub (90, 185) */}
          <g transform="translate(90, 185)">
            <g ref={propRef3}>
              {/* Semi-transparent rotor wash disk */}
              <circle cx="0" cy="0" r="44" fill="#F1F0EC" fillOpacity="0.12" stroke="#F1F0EC" strokeWidth="0.5" strokeOpacity="0.25" />
              {/* Blade 1 */}
              <ellipse cx="0" cy="0" rx="44" ry="5.5" fill="#F1F0EC" fillOpacity="0.7" stroke="#979C9F" strokeWidth="0.5" />
              {/* Blade 2 */}
              <ellipse cx="0" cy="0" rx="5.5" ry="44" fill="#F1F0EC" fillOpacity="0.4" stroke="#979C9F" strokeWidth="0.5" />
              {/* Motor Shaft Nut */}
              <circle cx="0" cy="0" r="4" fill="#22252A" stroke="#C4C6C5" strokeWidth="1" />
            </g>
          </g>

          {/* Propeller 4: Rear-Right Hub (310, 185) */}
          <g transform="translate(310, 185)">
            <g ref={propRef4}>
              {/* Semi-transparent rotor wash disk */}
              <circle cx="0" cy="0" r="44" fill="#F1F0EC" fillOpacity="0.12" stroke="#F1F0EC" strokeWidth="0.5" strokeOpacity="0.25" />
              {/* Blade 1 */}
              <ellipse cx="0" cy="0" rx="44" ry="5.5" fill="#F1F0EC" fillOpacity="0.7" stroke="#979C9F" strokeWidth="0.5" />
              {/* Blade 2 */}
              <ellipse cx="0" cy="0" rx="5.5" ry="44" fill="#F1F0EC" fillOpacity="0.4" stroke="#979C9F" strokeWidth="0.5" />
              {/* Motor Shaft Nut */}
              <circle cx="0" cy="0" r="4" fill="#22252A" stroke="#C4C6C5" strokeWidth="1" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
