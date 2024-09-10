import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { GiftPage } from "../pages/gift.page";
import { App } from "../pages/main.page";

console.log(process.env.REACT_APP_BASEURL);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/rostics/" Component={App}>
      <Route path="gift" Component={GiftPage} />
    </Route>
  )
);
