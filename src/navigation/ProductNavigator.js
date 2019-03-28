import { createStackNavigator } from "react-navigation";

import Kitchen from "../component/Products/Kitchen";
import Product from "../component/Products/Product";
import Bag from "../component/Products/Bag";
import Checkout from "../component/Products/Checkout";
import OrderPlaced from "../component/Products/OrderPlaced";
import EditAddress from "../component/Products/EditAddress";
import ManageAddress from "../component/Products/ManageAddress";
import KitchenProfile from "../component/Products/KitchenProfile";

export default createStackNavigator(
  {
    Kitchen: { screen: Kitchen },
    Product: { screen: Product},
    Bag: { screen: Bag },
    Checkout: { screen: Checkout},
    OrderPlaced: { screen: OrderPlaced },
    EditAddress: { screen: EditAddress },
    ManageAddress: { screen: ManageAddress},
    KitchenProfile: { screen: KitchenProfile },
  },
  {
    headerMode: "none"
  }
);
