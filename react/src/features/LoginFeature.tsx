import FloatingLabelInput from "../components/FloatingLabelInput";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import LabeledCheckBox from "../components/LabeledCheckBox";
import Alert from "../components/Alert";

const LoginFeature = () => {
  const login = async () => {
    console.log(state);
    setAlert({
      message: "login failure",
      type: "danger",
    });
  };

  const {
    onChange,
    onSubmit,
    state,
    alert,
    isShowPassword,
    setAlert,
    setIsShowPassword,
  } = useForm(
    {
      identity: "",
      password: "",
    },
    login
  );

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

      <Button size="normal" variant="fill-primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginFeature;