/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */

/* push */
const openProblemScreen = (navigation) => (props = {}) => {
  navigation.push("Problem", props);
};
const openCheckScreen = (navigation) => (props = {}) => {
  navigation.push("CheckScreen", props);
};
const openCorrectScreen = (navigation) => (props = {}) => {
  navigation.push("CorrectScreen", props);
};
const openWrongScreen = (navigation) => (props = {}) => {
  navigation.push("WrongScreen", props);
};
const openEndScreen = (navigation) => (props = {}) => {
  navigation.push("EndScreen", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openProblemScreen:navigateOneTime(openProblemScreen(navigation)),
  openCheckScreen:navigateOneTime(openCheckScreen(navigation)),
  openCorrectScreen:navigateOneTime(openCorrectScreen(navigation)),
  openWrongScreen:navigateOneTime(openWrongScreen(navigation)),
  openEndScreen:navigateOneTime(openEndScreen(navigation)),
});

export default navigate;
