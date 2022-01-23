import React from "react";
import SvgIcon from "react-native-svg-icon";

import { Colors } from "style";

import svgs from "../../../assets/svgs";

const Icon = (props) => <SvgIcon {...props} svgs={svgs} />;

export default Icon;
