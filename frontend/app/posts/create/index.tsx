import { useAuth } from "../../../auth/authContext";
import { LoginScreen } from "../../../auth/loginScreen";
import { NavbarLayout } from "../../../common/navbarLayout";
import { PostEditScreen } from "../../../post/postEditScreen";

export default function () {
  const { user } = useAuth();
  if (!user) {
    return (
      <NavbarLayout selected="post">
        <LoginScreen></LoginScreen>
      </NavbarLayout>
    );
  }

  return <PostEditScreen></PostEditScreen>;
}
