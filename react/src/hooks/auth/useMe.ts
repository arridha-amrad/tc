import { useQuery, useQueryClient } from "@tanstack/react-query";
import { meAPI } from "../../api/auth.api";
import { User } from "../../api/response/user.response";

const useMe = () => {
  const qc = useQueryClient();
  const authenticatedUser = qc.getQueryData<User>(["auth"]);
  const query = useQuery({
    enabled: !authenticatedUser,
    queryFn: meAPI,
    retry: 0,
    queryKey: ["auth"],
    onSuccess(data) {
      qc.setQueryData(["auth"], data);
    },
    onSettled: (data) => {
      qc.setQueryData(["auth"], data);
    },
    initialData: authenticatedUser,
  });
  return query;
};

export default useMe;
