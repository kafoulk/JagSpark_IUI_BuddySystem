import { createBrowserRouter } from "react-router";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { SelectRecipient } from "../components/SelectRecipient";
import { WriteCompliment } from "../components/WriteCompliment";
import { Confirmation } from "../components/Confirmation";
import { UserProfile } from "../components/UserProfile";
import { ViewCompliment } from "../components/ViewCompliment";
import { Profile } from "../components/Profile";
import { ForgotPassword } from "../components/ForgotPassword";
import { SignUp } from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/select-recipient",
    Component: SelectRecipient,
  },
  {
    path: "/write-compliment/:userId",
    Component: WriteCompliment,
  },
  {
    path: "/confirmation/:recipientName",
    Component: Confirmation,
  },
  {
    path: "/profile/:userId",
    Component: UserProfile,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/view-compliment/:complimentId",
    Component: ViewCompliment,
  },
]);