interface VantaEffect {
  destroy: () => void;
}

interface VantaGlobeOptions {
  el: HTMLElement;
  THREE: unknown;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number;
  backgroundColor?: number;
}

declare global {
  interface Window {
    VANTA?: {
      GLOBE: (options: VantaGlobeOptions) => VantaEffect;
    };
  }
}

export {};
