import { useAuth } from "../auth/authContext";

export function useIsOwner(userId: string) {
  const { user } = useAuth();
  return { isOwner: userId === user?.id };
}
