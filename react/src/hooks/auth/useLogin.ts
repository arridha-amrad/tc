import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TLoginDTO } from "../../features/LoginFeature";
import axiosInstance from "../../utils/axiosInterceptor";

const login = async (body: TLoginDTO) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", body);
    return data;
  } catch (err) {
    throw err;
  }
};

const useLogin = () => {
  const qc = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: (body: TLoginDTO) => login(body),
    onSuccess(data, variables, context) {
      console.log("data : ", data);
      console.log("context : ", context);

      qc.setQueryData(["auth"], data.user);
      qc.invalidateQueries({ queryKey: ["auth"] });
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
