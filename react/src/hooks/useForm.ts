import { ChangeEvent, FormEvent, useState } from "react";
import { TAlert } from "../components/Alert";

const useForm = <T>(initState: T, submitFunction: () => Promise<void>) => {
  const [state, setState] = useState(initState);
  const [alert, setAlert] = useState<TAlert | null>(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitFunction();
  };

  return {
    state,
    onChange,
    onSubmit,
    alert,
    setAlert,
    isShowPassword,
    setIsShowPassword,
  };
};

export default useForm;
