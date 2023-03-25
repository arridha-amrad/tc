import { RegisterDTO } from "../api/dtos/user.dto";
import { registerAPI } from "../api/user.api";
import Alert from "../components/Alert";
import Button from "../components/Button";
import FloatingLabelInput from "../components/FloatingLabelInput";
import LabeledCheckBox from "../components/LabeledCheckBox";
import useForm from "../hooks/useForm";
import setButtonStatus from "../utils/setButtonStatus";

const RegisterFeature = () => {
  const register = async () => {
    try {
      setIsLoading(true);
      const result = await registerAPI(state);
      setAlert({
        message: result.message,
        type: "success",
      });
      setState({ ...state, email: "", password: "", username: "" });
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
    isLoading,
    setIsLoading,
    onChange,
    onSubmit,
    state,
    alert,
    setAlert,
    isShowPassword,
    setIsShowPassword,
    setState,
  } = useForm<RegisterDTO>(
    {
      username: "",
      email: "",
      password: "",
    },
    register
  );
  const { email, password, username } = state;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      {!!alert && <Alert type={alert.type}>{alert.message}</Alert>}

      <FloatingLabelInput
        labelText="Email Address"
        type="email"
        onChange={onChange}
        value={state.email}
        name="email"
      />
      <FloatingLabelInput
        labelText="Username"
        type="text"
        onChange={onChange}
        value={state.username}
        name="username"
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
        disabled={!email || !username || !password}
        size="normal"
        variant="fill-primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default RegisterFeature;
