import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import IconButton from "../../components/IconButton";

const TweetDetailCardLikeFeature = () => {
  return (
    <IconButton tooltip="Like" className="group hover:bg-transparent">
      <HeartIcon className="w-6 h-6 group-hover:text-blue-500 text-slate-500" />
    </IconButton>
  );
};

export default TweetDetailCardLikeFeature;
