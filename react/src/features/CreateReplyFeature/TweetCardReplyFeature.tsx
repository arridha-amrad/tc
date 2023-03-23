import CommentIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon";
import TweetCardButton from "../../components/TweetCard/TweetCardButton";

const TweetCardCommentFeature = () => {
  const openModal = () => {
    console.log("open modal");
  };
  return (
    <TweetCardButton
      onClick={(e) => {
        e.stopPropagation();
        openModal();
      }}
    >
      <CommentIcon className="group-hover:text-blue-500 w-5 h-5" />
    </TweetCardButton>
  );
};

export default TweetCardCommentFeature;
