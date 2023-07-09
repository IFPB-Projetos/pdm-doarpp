import { useEffect, useState } from "react";
import { api } from "../../../../common/api";
import { LoadingScreen } from "../../../../common/loadingScreen";
import { User } from "../../../../types/user";
import { UserEditScreen } from "../../../../user/userEditScreen";

export default function () {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const res = await api.get(`/users/me`);
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <LoadingScreen />;
  }

  return <UserEditScreen user={user} />;
}
