import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../api/auth.api";
import { LoginDTO } from "../../api/dtos/auth.dto";
import { setToken } from "../../utils/axiosInterceptor";

const useLogin = () => {
  const qc = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: (body: LoginDTO) => loginAPI(body),
    onSuccess(data) {
      setToken(data.token);
      qc.setQueryData(["auth"], data.user);
    },
  });
  return mutation;
};

export default useLogin;
