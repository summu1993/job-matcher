import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <HomePageContainer
      workerProfile={workerProfile}
      jobsData={workerMatchingJobs}
    />
  );
};

export default Home;
