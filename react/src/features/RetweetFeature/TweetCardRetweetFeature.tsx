import TweetCardButton from "../../components/TweetCard/TweetCardButton";
import RetweetIcon from "@heroicons/react/24/outline/ArrowPathRoundedSquareIcon";

const TweetCardRetweetFeature = () => {
  const retweet = async () => {
    console.log("retweet");
  };

  return (
    <TweetCardButton
      onClick={(e) => {
        e.stopPropagation();
        retweet();
      }}
    >
      <RetweetIcon className="group-hover:text-blue-500 w-5 h-5" />
    </TweetCardButton>
  );
};

export default TweetCardRetweetFeature;
