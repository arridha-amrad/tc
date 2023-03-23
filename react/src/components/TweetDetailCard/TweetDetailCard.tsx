import Navbar from "../Navbar";
import TweetDetailCardUserInfo from "./TweetDetailCardUserInfo";
import IconButton from "../IconButton";
import ChatBubbleLeftIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon";
import TweetDetailCardLikeFeature from "../../features/LikeTweetFeature/TweetDetailCardLikeFeature";
import TweetDetailCardRetweetFeature from "../../features/RetweetFeature/TweetDetailCardRetweetFeature";
import TweetDetailCardReplyFeature from "../../features/CreateReplyFeature/TweetDetailCardReplyFeature";
import { useRef } from "react";

const TweetDetailCard = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const focusToReplyFeature = () => ref.current?.focus();
  return (
    <div className="border-l border-r px-3 dark:border-slate-700 border-slate-200 min-h-screen">
      <Navbar />
      <TweetDetailCardUserInfo />
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
        quos maxime velit, recusandae corporis ex provident, aliquam odit
        officiis qui tenetur earum. Ducimus, optio quaerat et voluptatibus nihil
        obcaecati eveniet velit corrupti nobis voluptatem? A accusantium
        adipisci, deserunt voluptates vero velit nihil porro! Voluptates,
        asperiores! Cupiditate quas quos repellat!
      </p>
      <TweetDate />
      <Divider />
      <div className="flex items-center my-5">
        <Info title="Retweets" total={5} />
        <Info title="Replies" total={20} />
        <Info title="Likes" total={100} />
      </div>
      <Divider />
      <div className="flex items-center my-1 justify-around">
        <IconButton
          onClick={focusToReplyFeature}
          tooltip="Reply"
          className="hover:bg-transparent group"
        >
          <ChatBubbleLeftIcon className="w-6 h-6 group-hover:text-blue-500 text-slate-500" />
        </IconButton>
        <TweetDetailCardLikeFeature />
        <TweetDetailCardRetweetFeature />
      </div>
      <Divider />
      <TweetDetailCardReplyFeature ref={ref} username="alex" />
    </div>
  );
};

export default TweetDetailCard;

const Divider = () => <hr className="dark:border-slate-700 border-slate-300" />;

const TweetDate = () => {
  return (
    <p className="font-light text-slate-500 my-3">4:55 PM · Mar 14, 2023</p>
  );
};

const Info = (data: { total: number; title: string }) => {
  return (
    <div className="flex-1 text-sm">
      <span className="font-bold">{data.total}</span> {data.title}
    </div>
  );
};
