import Spinner from "../components/Spinner";
import useLoadTweets from "../hooks/tweet/useLoadTweets";

const LoadTweetFeature = () => {
  const { data, isPaused, isLoading } = useLoadTweets();

  if (isLoading || isPaused) {
    return (
      <div className="h-screen, w-full flex items-center justify-center mt-10">
        <Spinner className="w-12 h-12" />
      </div>
    );
  }
  if (data.length <= 0) return null;

  return (
    <div className="w-full border dark:border-slate-700 mt-5 rounded-lg">
      {/* <TweetCard />
      <hr className="-p-2 dark:border-slate-700 border-slate-300" />
      <TweetCard /> */}
    </div>
  );
};

export default LoadTweetFeature;
