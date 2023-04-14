import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweetAPI } from "../../api/tweet.api";

const useCreateTweet = () => {
  const qc = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["posts"],
    mutationFn: (body: FormData) => createTweetAPI(body),
    onSuccess(data, variables, context) {
      console.log("data : ", data);
    },
  });
  return mutation;
};

export default useCreateTweet;
