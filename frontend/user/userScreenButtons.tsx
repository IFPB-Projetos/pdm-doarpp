import { View } from "react-native";
import { LogoutButton } from "./logoutButton";
import { UserEditLink } from "./userEditLink";
import UserOptions from "./userOptions";

export function UserScreenButtons() {
  return (
    <View
      style={{
        gap: 10,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <UserOptions />
      <LogoutButton />
      <UserEditLink />
    </View>
  );
}
