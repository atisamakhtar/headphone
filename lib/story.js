export const FRAME_COUNT = 240;

export function frameSrc(index) {
  const n = String(index + 1).padStart(3, "0");
  return `/frames/ezgif-frame-${n}.jpg`;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function smoothstep(t) {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

/**
 * The source film only disassembles. Scroll plays it forward through the
 * engineering story, then reverses it so the headphones reassemble.
 */
export function progressToFrame(progress) {
  const last = FRAME_COUNT - 1;
  const p = clamp(progress, 0, 1);

  if (p < 0.1) return (p / 0.1) * 8;
  if (p < 0.4) return 8 + ((p - 0.1) / 0.3) * (108 - 8);
  if (p < 0.65) return 108 + ((p - 0.4) / 0.25) * (186 - 108);
  if (p < 0.84) return 186 + ((p - 0.65) / 0.19) * (last - 186);

  const t = smoothstep((p - 0.84) / 0.16);
  return last * (1 - t);
}

export function sequenceProgress(section) {
  if (!section) return 0;
  const scrollable = section.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  const scrolled = -section.getBoundingClientRect().top;
  return clamp(scrolled / scrollable, 0, 1);
}

export function windowOpacity(progress, fadeIn, holdIn, holdOut, fadeOut) {
  if (progress <= fadeIn || progress >= fadeOut) return 0;
  if (progress < holdIn) return smoothstep((progress - fadeIn) / (holdIn - fadeIn));
  if (progress > holdOut) return 1 - smoothstep((progress - holdOut) / (fadeOut - holdOut));
  return 1;
}

export const CHAPTERS = [
  { id: "overview", label: "Overview", at: 0.04 },
  { id: "technology", label: "Technology", at: 0.26 },
  { id: "noise", label: "Noise Cancelling", at: 0.52 },
  { id: "sound", label: "Sound", at: 0.72 },
];
