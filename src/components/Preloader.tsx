import { useEffect, useRef, useState, useCallback } from "react";

export default function Preloader() {
  const [stage, setStage] = useState<"loading" | "forming" | "flying" | "hidden">("loading");
  const [settleActive, setSettleActive] = useState(false);
  const [flightTransform, setFlightTransform] = useState("translate3d(0px, 0px, 0px) scale(1)");

  const stageRef = useRef<"loading" | "forming" | "flying" | "hidden">("loading");
  stageRef.current = stage;

  const flightWrapperRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const addTimer = (cb: () => void, ms: number) => {
    const timer = setTimeout(cb, ms);
    timersRef.current.push(timer);
    return timer;
  };

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const finishImmediately = useCallback(() => {
    clearAllTimers();
    document.documentElement.classList.remove("preloader-active");
    document.body.style.overflow = "";
    setStage("hidden");
  }, [clearAllTimers]);

  const triggerFlight = useCallback(() => {
    if (stageRef.current === "flying" || stageRef.current === "hidden") return;
    stageRef.current = "flying";
    setStage("flying");

    // 1. Measure header logo target rect
    const headerLogoImg = document.getElementById("header-brand-logo-img");
    const flightEl = flightWrapperRef.current;

    if (headerLogoImg && flightEl) {
      const targetRect = headerLogoImg.getBoundingClientRect();
      const currentRect = flightEl.getBoundingClientRect();

      if (targetRect.width > 0 && targetRect.height > 0 && currentRect.height > 0) {
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

    // 2. Clean landing & unmount after flight animation completes (650ms)
    addTimer(() => {
      document.documentElement.classList.remove("preloader-active");
      document.body.style.overflow = "";
      setStage("hidden");
    }, 650);
  }, []);

  const startPreloaderCycle = useCallback(() => {
    clearAllTimers();

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("preloader-active");
    setFlightTransform("translate3d(0px, 0px, 0px) scale(1)");
    setSettleActive(false);
    setStage("forming");

    // 700ms: Two halves meet, tactile settle lock + metallic sheen sweep
    addTimer(() => {
      setSettleActive(true);
    }, 700);

    // 1350ms: Snappy flight directly into header logo
    addTimer(() => {
      triggerFlight();
    }, 1350);
  }, [clearAllTimers, triggerFlight]);

  // Preload preloader images before starting animations to guarantee zero glitching/pop-in
  useEffect(() => {
    const urls = [
      "/logo-anim-blue.webp",
      "/logo-anim-black.webp",
      "/logo-anim-text.webp",
      "/logo-transparent.png",
    ];

    let isMounted = true;

    const preloadImages = Promise.all(
      urls.map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = url;
            if (img.complete) {
              resolve();
            } else {
              img.onload = () => resolve();
              img.onerror = () => resolve(); // Don't block on network errors
            }
          }),
      ),
    );

    // Safety timeout: max 200ms wait for images, then start immediately
    const fallbackTimeout = new Promise((resolve) => setTimeout(resolve, 200));

    Promise.race([preloadImages, fallbackTimeout]).then(() => {
      if (isMounted) {
        startPreloaderCycle();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishImmediately();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isMounted = false;
      window.removeEventListener("keydown", handleKeyDown);
      clearAllTimers();
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
    };
  }, [startPreloaderCycle, clearAllTimers, finishImmediately]);

  if (stage === "hidden") return null;

  return (
    <div
      onClick={finishImmediately}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none ${
        stage === "flying" ? "pointer-events-none" : "cursor-pointer pointer-events-auto"
      }`}
      aria-label="Loading S.A Packaging"
      role="status"
    >
      {/* 1. Backdrop Overlay (Solid White with subtle GPU dot grid, fades smoothly on flight) */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 ease-out will-change-[opacity] ${
          stage === "flying" ? "opacity-0" : "opacity-100"
        }`}
        style={{ contain: "paint" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#0b63ce14_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>

      {/* 2. Main Centered Stage */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-full">
        {/* Flight Motion Wrapper */}
        <div
          ref={flightWrapperRef}
          style={{ transform: flightTransform }}
          className="anim-flight-wrapper relative"
        >
          {/* Layer Container matching 1051 x 779 logo aspect ratio */}
          <div
            className={`anim-char-container relative w-[min(280px,80vw)] sm:w-[340px] aspect-[1051/779] ${
              settleActive ? "settle-active" : ""
            }`}
          >
            {/* 1. Top Blue Part (S and A Upper Half) */}
            <div className="anim-char-blue absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-blue.webp"
                alt="S A Logo Blue Part"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>

            {/* 2. Bottom Black Part (S and A Lower Half) */}
            <div className="anim-char-black absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-black.webp"
                alt="S A Logo Black Part"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>

            {/* 3. PACKAGING Bottom Text */}
            <div className="anim-char-packaging absolute inset-0 w-full h-full">
              <img
                src="/logo-anim-text.webp"
                alt="PACKAGING"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>

            {/* 4. Metallic Foil Reflection Glint */}
            {settleActive && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="anim-sheen-bar absolute -inset-y-6 -inset-x-24 w-20 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              </div>
            )}
          </div>
        </div>

        {/* Clean Subtitle & Status Track (smoothly fades out when flight starts) */}
        <div
          className={`mt-5 sm:mt-6 flex flex-col items-center gap-2 transition-opacity duration-200 ${
            stage === "flying" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 font-geist text-[10px] sm:text-[11.5px] font-bold tracking-[0.16em] sm:tracking-[0.24em] text-ink-600 uppercase text-center px-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0 animate-pulse" />
            <span>Aluminium Foil Lids · Sakinaka, Mumbai</span>
          </div>

          <div className="mt-0.5 sm:mt-1 h-0.5 w-24 sm:w-32 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-full bg-brand-500 rounded-full animate-[progress_1.3s_cubic-bezier(0.16,1,0.3,1)_both]" />
          </div>
        </div>
      </div>
    </div>
  );
}
