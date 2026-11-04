export type FullscreenResult = {
  success: boolean;
  error: string | null;
};

export async function enterFullscreen(
  canvas: HTMLElement,
): Promise<FullscreenResult> {
  if (!canvas.requestFullscreen) {
    return {
      success: false,
      error: "Fullscreen API is not supported",
    };
  }

  try {
    await canvas.requestFullscreen();

    return {
      success: true,
      error: null,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to enter fullscreen",
    };
  }
}

export async function exitFullscreen(): Promise<FullscreenResult> {
  if (!document.exitFullscreen) {
    return {
      success: false,
      error: "Fullscreen API is not supported",
    };
  }

  try {
    await document.exitFullscreen();

    return {
      success: true,
      error: null,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to exit fullscreen",
    };
  }
}

export function isFullscreen(): boolean {
  return document.fullscreenElement !== null;
}

export function getFullscreenElement(): Element | null {
  return document.fullscreenElement;
}
