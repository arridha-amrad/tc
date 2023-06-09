import FloatingLabelInput from "../components/FloatingLabelInput";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import LabeledCheckBox from "../components/LabeledCheckBox";
import Alert from "../components/Alert";
import useLogin from "../hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../api/dtos/auth.dto";

const LoginFeature = () => {
  const { isLoading, mutateAsync } = useLogin();
  const navigate = useNavigate();
  const login = async () => {
    try {
      await mutateAsync(state);
      navigate("/", { replace: true });
    } catch (err: any) {
      setAlert({
        message: err.response.data.message,
        type: "danger",
      });
    }
  };

  const {
    onChange,
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
        id="loginIdentity"
        labelText="Email or Username"
        type="text"
        onChange={onChange}
        value={state.identity}
        name="identity"
      />
      <FloatingLabelInput
        id="loginPassword"
        labelText="Password"
        type={`${isShowPassword ? "text" : "password"}`}
        onChange={onChange}
        value={state.password}
        name="password"
      />
      <LabeledCheckBox
        checked={isShowPassword}
        onChange={() => setIsShowPassword((val) => !val)}
      >
        Show Password
      </LabeledCheckBox>

      <Button
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
