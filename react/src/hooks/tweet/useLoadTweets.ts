import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTweetsAPI } from "../../api/tweet.api";
import { User } from "../../api/response/user.response";

const useLoadTweets = () => {
  const qc = useQueryClient();
  const authUser = qc.getQueryData<User>(["auth"]);
  const query = useQuery({
    queryKey: ["tweets"],
    queryFn: fetchTweetsAPI,
    onSuccess(data) {
      console.log("tweets : ", data);
    },
  });
  return query;
};

export default useLoadTweets;
