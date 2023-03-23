import { forwardRef } from "react";
import Avatar from "../../components/Avatar";
import IconButton from "../../components/IconButton";
import TextArea from "../../components/TextArea";
import SendIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";

type TProps = {
  username: string;
};

const TweetDetailCardReplyFeature = forwardRef<HTMLTextAreaElement, TProps>(
  (props, ref) => {
    return (
      <div className="my-3 flex w-full gap-5">
        <Avatar url="http://localhost:3000/img-3.jpeg" />
        <div className="flex-1">
          <p className="text-sm mb-3">
            Replying to <span className="text-blue-500">@{props.username}</span>
          </p>
          <form className="relative">
            <TextArea ref={ref} className="pr-8" />
            <div className="absolute right-1 bottom-3">
              <IconButton tooltip="Send" className="group">
                <SendIcon className="w-5 h-5 group-hover:text-blue-500" />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default TweetDetailCardReplyFeature;
