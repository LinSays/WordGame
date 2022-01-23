import { StyleSheet } from "react-native";

import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
  },
  drawerHeader: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    flexDirection: "row",
    display: "flex",
  },
});
