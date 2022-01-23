import { StyleSheet } from "react-native";
import { color } from "@storybook/addon-knobs";

import { Layout } from "constant";
import { platform } from "utils";

import { Font } from "../font";
import { Colors } from "../colors";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
  },
  containerWithGradient: {
    flex: 1,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
  },
  androidNavTitle: {
    // paddingLeft: platform.isAndroid ? 6 : 0,
    fontFamily: Font.FontFamily.Poppin,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#1D2234",
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerTitle: {
    paddingLeft: platform.isAndroid ? 6 : 0,
    fontFamily: Font.FontFamily.Poppin,
    fontSize: Font.FontSize.H1,
    lineHeight: Font.FontLineHeight.Header,
    fontWeight: Font.FontWeight.Header,
    fontStyle: Font.FontStyle.Header,
    color: Colors.headerColor,
  },
  separator: {
    width: Layout.PADDING_HORIZONTAL,
  },
});
