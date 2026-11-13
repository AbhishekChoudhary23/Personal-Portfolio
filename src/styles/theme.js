const fonts = {
  display: '"Space Grotesk", "Inter", system-ui, sans-serif',
  body: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
};

const radius = { sm: "8px", md: "14px", lg: "20px", pill: "999px" };

export const darkTheme = {
  bg: "#06080c",
  bgElevated: "#0b0f15",
  surface: "rgba(255, 255, 255, 0.03)",
  surfaceHover: "rgba(255, 255, 255, 0.055)",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  primary: "#34e3a0",
  primarySoft: "rgba(52, 227, 160, 0.12)",
  primaryGlow: "rgba(52, 227, 160, 0.35)",
  secondary: "#38bdf8",
  gradient: "linear-gradient(120deg, #34e3a0 0%, #38bdf8 100%)",
  text: "#e8eef4",
  textMuted: "#9ba8b6",
  textDim: "#66727f",
  onPrimary: "#04130d",
  danger: "#ff7b7b",
  white: "#ffffff",
  fonts,
  radius,
};

export const lightTheme = {
  bg: "#f7f9fb",
  bgElevated: "#ffffff",
  surface: "rgba(10, 20, 30, 0.03)",
  surfaceHover: "rgba(10, 20, 30, 0.06)",
  border: "rgba(10, 20, 30, 0.1)",
  borderStrong: "rgba(10, 20, 30, 0.2)",
  primary: "#0a9d68",
  primarySoft: "rgba(10, 157, 104, 0.12)",
  primaryGlow: "rgba(10, 157, 104, 0.3)",
  secondary: "#0284c7",
  gradient: "linear-gradient(120deg, #0a9d68 0%, #0284c7 100%)",
  text: "#0d141b",
  textMuted: "#475463",
  textDim: "#7a8795",
  onPrimary: "#ffffff",
  danger: "#d43c3c",
  white: "#ffffff",
  fonts,
  radius,
};
