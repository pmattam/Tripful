import { Navigation } from "react-native-navigation";

import LoginScreen from "./src/screens/Login";
import ProfileScreen from "./src/screens/ProfileScreen";
import TripsScreen from "./src/screens/TripsScreen";

// Register Screens
Navigation.registerComponent("tripful.LoginScreen", () => LoginScreen);
Navigation.registerComponent("tripful.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent("tripful.TripsScreen", () => TripsScreen);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "tripful.LoginScreen",
        title: "Login"
    }
})