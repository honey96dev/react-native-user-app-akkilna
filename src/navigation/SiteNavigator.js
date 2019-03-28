import { createStackNavigator } from "react-navigation";

import Notifaction from "../component/common/Notification";
import Result from "../component/Result";
import EditAddress from "../component/Products/EditAddress";
import ManageAddress from "../component/Products/ManageAddress";
import EditProfile from "../component/AccountScreen/EditProfile";
import ChangePassword from "../component/AccountScreen/ChangePassword";
import SavedCards from "../component/AccountScreen/SavedCards";

export default createStackNavigator(
  {
    Notify: { screen: Notifaction },
    Result: { screen: Result},
    EditAddress: { screen: EditAddress},
    ManageAddress: { screen: ManageAddress},
    EditProfile: { screen: EditProfile},
    ChangePassword: { screen: ChangePassword},
    SavedCards: { screen: SavedCards},

  },
  {
    headerMode: "none"
  }
);
