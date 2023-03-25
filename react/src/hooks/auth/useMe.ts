import { useQuery, useQueryClient } from "@tanstack/react-query";
import { meAPI } from "../../api/auth.api";

const useMe = () => {
  const qc = useQueryClient();
  const authenticatedUser = qc.getQueryData(["auth"]);
  const query = useQuery({
    enabled: !authenticatedUser,
    queryFn: meAPI,
    queryKey: ["auth"],
    retry: 0,
    onSuccess(data) {
      qc.setQueryData(["auth"], data);
    },
  });
  return query;
};

export default useMe;
