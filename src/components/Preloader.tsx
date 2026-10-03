import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [stage, setStage] = useState<"forming" | "flying" | "hidden">("forming");
  const [runId, setRunId] = useState(0);
  const stageRef = useRef<"forming" | "flying" | "hidden">("forming");
  stageRef.current = stage;

  const flightWrapperRef = useRef<HTMLDivElement>(null);
  const [flightTransform, setFlightTransform] = useState("translate3d(0px, 0px, 0px) scale(1)");

  const flightTimerRef = useRef<NodeJS.Timeout | null>(null);
  const unmountTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerFlight = () => {
    if (stageRef.current !== "forming") return;
    stageRef.current = "flying";

    // 1. Measure header logo target rect
    const headerLogoImg = document.getElementById("header-brand-logo-img");
    const flightEl = flightWrapperRef.current;

    if (headerLogoImg && flightEl) {
      const targetRect = headerLogoImg.getBoundingClientRect();
      const currentRect = flightEl.getBoundingClientRect();

      if (targetRect.width > 0 && targetRect.height > 0 && currentRect.height > 0) {
        // Center-to-center delta and scale ratio
        const scale = targetRect.height / currentRect.height;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const currentCenterX = currentRect.left + currentRect.width / 2;
        const currentCenterY = currentRect.top + currentRect.height / 2;

        const deltaX = Math.round((targetCenterX - currentCenterX) * 100) / 100;
        const deltaY = Math.round((targetCenterY - currentCenterY) * 100) / 100;

        setFlightTransform(`translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`);
      }
    }

    setStage("flying");

    // 2. Restore scroll as website appears
    document.body.style.overflow = "";

    // 3. Clean landing & unmount
    unmountTimerRef.current = setTimeout(() => {
      document.documentElement.classList.remove("preloader-active");
      setStage("hidden");
    }, 900);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stage === "forming") {
      triggerFlight();
    } else if (stage === "flying") {
      // Immediate skip if clicked during flight
      if (flightTimerRef.current) clearTimeout(flightTimerRef.current);
      if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
      document.documentElement.classList.remove("preloader-active");
      document.body.style.overflow = "";
      setStage("hidden");
    }
  };

  // Launch preloader cycle
  const startPreloader = () => {
    if (flightTimerRef.current) clearTimeout(flightTimerRef.current);
    if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("preloader-active");
    setFlightTransform("translate3d(0px, 0px, 0px) scale(1)");
    setRunId((id) => id + 1);
    setStage("forming");

    flightTimerRef.current = setTimeout(() => {
      triggerFlight();
    }, 2850);
  };

  // Listen to Home clicks / router navigation to "/"
  useEffect(() => {
    startPreloader();

    const onTrigger = () => {
      startPreloader();
    };

    window.addEventListener("trigger-preloader", onTrigger);

    return () => {
      window.removeEventListener("trigger-preloader", onTrigger);
      if (flightTimerRef.current) clearTimeout(flightTimerRef.current);
      if (unmountTimerRef.current) clearTimeout(unmountTimerRef.current);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <div
      key={runId}
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none ${
        stage === "flying" ? "pointer-events-none" : "cursor-pointer pointer-events-auto"
      }`}
      aria-label="Loading S.A Packaging"
      role="status"
    >
      {/* 1. Backdrop Overlay (Solid White with isolated GPU dot matrix, fades smoothly during flight) */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-700 ease-out will-change-[opacity] ${
          stage === "flying" ? "opacity-0" : "opacity-100"
        }`}
        style={{ contain: "paint" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#0b63ce14_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>

      {/* 2. Main Stage (Responsive centered container) */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-full">
        {/* Flight Motion Wrapper (glides across viewport directly into header logo) */}
        <div
          ref={flightWrapperRef}
          style={{ transform: flightTransform }}
          className="anim-flight-wrapper relative"
        >
          {/* Layer Container matching 1051 x 779 logo aspect ratio */}
          <div className="anim-char-container relative w-[min(290px,82vw)] sm:w-[350px] aspect-[1051/779]">
            {/* 1. Top Blue Part (S and A Upper Half) */}
            <div className="anim-char-blue absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-blue.webp"
                alt="S A Logo Blue Part"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>

            {/* 2. Bottom Black Part (S and A Lower Half) */}
            <div className="anim-char-black absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-black.webp"
                alt="S A Logo Black Part"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>

            {/* 3. PACKAGING Bottom Blue Text */}
            <div className="anim-char-packaging absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-text.webp"
                alt="PACKAGING"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>
        </div>

        {/* Clean Subtitle & Status Track (disappears immediately as logo flight begins) */}
        {stage === "forming" && (
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 font-geist text-[10px] sm:text-[11.5px] font-bold tracking-[0.16em] sm:tracking-[0.24em] text-ink-600 uppercase text-center px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0 animate-pulse" />
              <span>Aluminium Foil Lids · Sakinaka, Mumbai</span>
            </div>

            <div className="mt-0.5 sm:mt-1 h-0.5 w-24 sm:w-32 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full bg-brand-500 rounded-full animate-[progress_2.7s_cubic-bezier(0.16,1,0.3,1)_both]" />
            </div>
          </div>
        )}
      </div>

      {/* Skip Button */}
      {stage === "forming" && (
        <button
          onClick={handleSkip}
          className="pointer-events-auto absolute bottom-5 right-5 sm:bottom-6 sm:right-6 font-geist text-[10px] sm:text-[11px] font-semibold text-ink-400 hover:text-ink-700 transition-all duration-200 uppercase tracking-widest bg-slate-100/90 hover:bg-slate-200/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-ink-200/60 shadow-2xs"
        >
          Skip ✕
        </button>
      )}
    </div>
  );
}
