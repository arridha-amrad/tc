import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutAPI } from "../../api/auth.api";

const useLogout = () => {
  const qc = useQueryClient();
  const query = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      qc.removeQueries();
    },
  });
  return query;
};

export default useLogout;
