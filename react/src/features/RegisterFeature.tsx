import Alert from "../components/Alert";
import Button from "../components/Button";
import FloatingLabelInput from "../components/FloatingLabelInput";
import LabeledCheckBox from "../components/LabeledCheckBox";
import useForm from "../hooks/useForm";

const RegisterFeature = () => {
  const register = async () => {
    setAlert({
      message: "register success",
      type: "success",
    });
  };

  const {
    onChange,
    onSubmit,
    state,
    alert,
    setAlert,
    isShowPassword,
    setIsShowPassword,
  } = useForm(
    {
      username: "",
      email: "",
      password: "",
    },
    register
  );

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

      <Button size="normal" variant="fill-primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default RegisterFeature;
