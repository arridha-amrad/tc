import { Fragment } from "react";
import CreateTweetFeature from "../features/CreateTweetFeature";
import LoadTweetFeature from "../features/LoadTweetsFeature";

const HomePage = () => {
  return (
    <Fragment>
      <CreateTweetFeature />
      <LoadTweetFeature />
    </Fragment>
  );
};

export default HomePage;
