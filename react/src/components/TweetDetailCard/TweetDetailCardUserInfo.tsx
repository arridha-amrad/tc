import Avatar from "../Avatar";

const TweetDetailCardUserInfo = () => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <Avatar url="http://localhost:3000/img-3.jpeg" />
      <div>
        <h1 className="font-semibold">Marcus Rashford</h1>
        <p className="font-light text-sm">@rashford10</p>
      </div>
    </div>
  );
};

export default TweetDetailCardUserInfo;
