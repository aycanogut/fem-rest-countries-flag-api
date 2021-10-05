// breakpoints
const size = {
  xs: "320px",
  sm: "375px",
  md: "768px",
  lg: "1200px",
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

// typography
const fontWeight = {
  thin: "300",
  semiBold: "600",
  extraBold: "800",
};

export default { size, device, fontWeight };
