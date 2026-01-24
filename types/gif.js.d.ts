declare module "gif.js" {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
    repeat?: number;
    background?: string;
    transparent?: string | null;
    debug?: boolean;
    dither?: boolean;
  }

  interface FrameOptions {
    delay?: number;
    copy?: boolean;
    transparent?: string | null;
  }

  class GIF {
    constructor(options?: GIFOptions);
    addFrame(
      image: CanvasRenderingContext2D | ImageData | HTMLCanvasElement | HTMLImageElement,
      options?: FrameOptions
    ): void;
    render(): void;
    on(event: "finished", callback: (blob: Blob) => void): void;
    on(event: "progress", callback: (progress: number) => void): void;
    on(event: "start" | "abort", callback: () => void): void;
    abort(): void;
    running: boolean;
    options: GIFOptions;
    frames: unknown[];
  }

  export default GIF;
}
