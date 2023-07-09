import { LoginScreen } from "../../auth/loginScreen";
import { NavbarLayout } from "../../common/navbarLayout";

export default function () {
  return (
    <NavbarLayout selected="user">
      <LoginScreen></LoginScreen>
    </NavbarLayout>
  );
}
