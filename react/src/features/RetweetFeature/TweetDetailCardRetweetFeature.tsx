import RetweetIcon from "@heroicons/react/24/outline/ArrowPathRoundedSquareIcon";
import IconButton from "../../components/IconButton";

const TweetDetailCardRetweetFeature = () => {
  return (
    <IconButton tooltip="Retweet" className="group hover:bg-transparent">
      <RetweetIcon className="w-6 h-6 group-hover:text-blue-500 text-slate-500" />
    </IconButton>
  );
};

export default TweetDetailCardRetweetFeature;
