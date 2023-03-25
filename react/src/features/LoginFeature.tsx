import FloatingLabelInput from "../components/FloatingLabelInput";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import LabeledCheckBox from "../components/LabeledCheckBox";
import Alert from "../components/Alert";
import setButtonStatus from "../utils/setButtonStatus";
import useLogin from "../hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../api/dtos/auth.dto";

const LoginFeature = () => {
  const mutation = useLogin();
  const navigate = useNavigate();
  const login = async () => {
    setIsLoading(true);
    try {
      await mutation.mutateAsync(state);
      navigate("/", { replace: true });
    } catch (err: any) {
      setAlert({
        message: err.response.data.message,
        type: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const {
    onChange,
    isLoading,
    setIsLoading,
    setState,
    onSubmit,
    state,
    alert,
    isShowPassword,
    setAlert,
    setIsShowPassword,
  } = useForm<LoginDTO>(
    {
      identity: "",
      password: "",
    },
    login
  );

  const { identity, password } = state;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      {!!alert && <Alert type={alert.type}>{alert.message}</Alert>}

      <FloatingLabelInput
        labelText="Email or Username"
        type="text"
        onChange={onChange}
        value={state.identity}
        name="identity"
      />
      <FloatingLabelInput
        labelText="Password"
        type={`${isShowPassword ? "text" : "password"}`}
        onChange={onChange}
        value={state.password}
        name="password"
      />
      <LabeledCheckBox
        checked={isShowPassword}
        onChange={(e) => setIsShowPassword((val) => !val)}
      >
        Show Password
      </LabeledCheckBox>

      <Button
        status={setButtonStatus(state, isLoading)}
        disabled={!identity || !password}
        size="normal"
        variant="fill-primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginFeature;
