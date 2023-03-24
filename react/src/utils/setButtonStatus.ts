import { TBtnStatus } from "../components/Button";

const setButtonStatus = <T extends Object>(
  state: T,
  isLoading: boolean
): TBtnStatus => {
  if (Object.values(state).some((v) => v === "")) {
    return "not-allowed";
  }
  if (isLoading) return "loading";
  return "ok";
};

export default setButtonStatus;
