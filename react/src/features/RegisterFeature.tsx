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
      setState({
        ...state,
        email: "",
        password: "",
        username: "",
        firstName: "",
        lastName: "",
      });
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
      firstName: "",
      lastName: "",
    },
    register
  );
  const { email, password, username, firstName, lastName } = state;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      {!!alert && <Alert type={alert.type}>{alert.message}</Alert>}

      <div className="flex flex-1 gap-3">
        <FloatingLabelInput
          labelText="First Name"
          type="text"
          onChange={onChange}
          value={firstName}
          name="firstName"
        />
        <FloatingLabelInput
          labelText="Last Name"
          type="text"
          onChange={onChange}
          value={lastName}
          name="lastName"
        />
      </div>

      <FloatingLabelInput
        labelText="Email Address"
        type="email"
        onChange={onChange}
        value={email}
        name="email"
      />
      <FloatingLabelInput
        labelText="Username"
        type="text"
        onChange={onChange}
        value={username}
        name="username"
      />
      <FloatingLabelInput
        labelText="Password"
        type={`${isShowPassword ? "text" : "password"}`}
        onChange={onChange}
        value={password}
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
        Register
      </Button>
    </form>
  );
};

export default RegisterFeature;
