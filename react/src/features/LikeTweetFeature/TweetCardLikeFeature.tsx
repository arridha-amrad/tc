import TweetCardButton from "../../components/TweetCard/TweetCardButton";
import LikeIcon from "@heroicons/react/24/outline/HeartIcon";

const TweetCardLikeFeature = () => {
  const like = () => {
    console.log("like tweet");
  };
  return (
    <TweetCardButton
      onClick={(e) => {
        e.stopPropagation();
        like();
      }}
    >
      <LikeIcon className="group-hover:text-blue-500 w-5 h-5" />
    </TweetCardButton>
  );
};

export default TweetCardLikeFeature;
