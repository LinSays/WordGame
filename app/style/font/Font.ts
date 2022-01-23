import { Layout } from "constant";

const FontFamily = {
  Poppin: "Poppins",
};

const FontWeight = {
  Header: "500",
  Normal: "400",
};

const FontStyle = {
  Header: "normal",
};

const FontSizeNormalDevice = {
  Header: 24,
  H1: 24,
  H2: 26,
  H3: 16,
  Primary: 14,
  Secondary: 12,
  Tertiary: 10,
  Small: 8,
};

const FontSizeSmallDevice = {
  Header: 22,
  H1: 24,
  H2: 20,
  H3: 18,
  Primary: 12,
  Secondary: 10,
  Tertiary: 8,
  Small: 6,
};

const FontLineHeight = {
  Header: 36,
  H1: 28,
  H2: 26,
  H3: 24,
  Primary: 24,
  Secondary: 22,
  Tertiary: 18,
};

const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize, FontFamily, FontLineHeight, FontStyle };

export { Font };
