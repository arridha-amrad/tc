import TweetCard from "../components/TweetCard/TweetCard";

const LoadTweetFeature = () => {
  return (
    <div className="w-full border dark:border-slate-700 mt-5 rounded-lg">
      <TweetCard />
      <hr className="-p-2 dark:border-slate-700 border-slate-300" />
      <TweetCard />
    </div>
  );
};

export default LoadTweetFeature;
