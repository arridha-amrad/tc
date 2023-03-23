import Avatar from "../Avatar";
import timeSetter from "../../utils/timeSetter";

import CheckIcon from "@heroicons/react/24/solid/CheckBadgeIcon";
import TweetCardParentsAuthor from "./TweetCardParentsAuthor";
import TweetCardCommentFeature from "../../features/CreateReplyFeature/TweetCardReplyFeature";
import TweetCardLikeFeature from "../../features/LikeTweetFeature/TweetCardLikeFeature";
import TweetCardRetweetFeature from "../../features/RetweetFeature/TweetCardRetweetFeature";
import TweetCardOptions from "./TweetCardOptions";
import { useNavigate } from "react-router-dom";

const TweetCard = () => {
  const date = timeSetter(new Date().toString());
  const navigate = useNavigate();
  return (
    <section
      className="relative p-3 flex items-start gap-4 cursor-pointer hover:bg-slate-200 hover:dark:bg-gray-900 transition-all duration-100 ease-linear"
      onClick={() => navigate("/tweet/1")}
    >
      <Avatar
        className="border border-slate-700 w-14 h-14"
        url="./img-1.jpeg"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-start gap-1 w-full">
          <h1 className="font-bold">Jadon Sancho</h1>
          <CheckIcon className="w-5 h-5 text-blue-500 -ml-1" />
          <p className="font-light text-sm">@jadon_sancho10</p>
          <div className="text-xs">&bull;</div>
          <p className="text-sm font-light flex-1">{date}</p>
          <TweetCardOptions />
        </div>
        <TweetCardParentsAuthor
          authors={["ari", "alex", "james", "marko", "jane"]}
        />
        <p className="mt-3 grayscale">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eos
          sed reiciendis minus, fugit est at voluptas nihil. Voluptas facilis
          dolore at commodi sit earum officiis amet aut iste ex hic repellendus
          quos error, harum aperiam, perferendis tempora sunt? Nam temporibus ab
          ea esse fugiat sit quos sunt alias quas!
        </p>
        <img
          className="w-full h-auto object-cover mt-3"
          src="./img-4.jpeg"
          alt="media"
        />
        <div className="mt-3 flex justify-between mr-12">
          <TweetCardCommentFeature />
          <TweetCardLikeFeature />
          <TweetCardRetweetFeature />
        </div>
      </div>
    </section>
  );
};

export default TweetCard;
