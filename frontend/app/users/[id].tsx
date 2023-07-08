import { useLocalSearchParams } from "expo-router";
import { UserScreen } from "../../user/userScreen";

export default function () {
  const { id } = useLocalSearchParams();
  return <UserScreen id={id as string} />;
}
