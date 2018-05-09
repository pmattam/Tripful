import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-paper-plane-outline", 30),
    Icon.getImageSource("md-person", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
            screen: "tripful.TripsScreen",
            label: "Trips",
            title: "Trips",
            icon: sources[0]
        },
        {
            screen: "tripful.ProfileScreen",
            label: "Profile",
            title: "Profile",
            icon: sources[1]
        }
      ]
    });
  })
}

export default startMainTabs;