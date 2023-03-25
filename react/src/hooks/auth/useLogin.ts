import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../api/auth.api";
import { LoginDTO } from "../../api/dtos/auth.dto";
import { setToken } from "../../utils/axiosInterceptor";

const useLogin = () => {
  const qc = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: (body: LoginDTO) => loginAPI(body),
    onSuccess({ data }, variables, context) {
      console.log("result : ", data);
      console.log("context : ", context);
      setToken(data.accessToken);
    },
    onError(error, variables, context) {
      console.log("on error");
    },
    onSettled(data, error, variables, context) {
      console.log("on settled");
      console.log(data);
      console.log(error);
    },
  });
  return mutation;
};

export default useLogin;
