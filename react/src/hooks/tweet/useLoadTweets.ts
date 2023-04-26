import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTweetsAPI } from "../../api/tweet.api";

const useLoadTweets = () => {
  const qc = useQueryClient();
  const query = useQuery({
    queryKey: ["tweets"],
    queryFn: fetchTweetsAPI,
    onSuccess(data) {
      console.log("tweets : ", data);
    },
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useLoadTweets;
