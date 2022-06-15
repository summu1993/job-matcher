import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  

  useEffect(() => {
    dispatch(getWorkerProfile());
    dispatch(getWorkerMatchingJobs());
  }, [dispatch]);

  return (
    <HomePageContainer
      workerProfile={workerProfile}
      jobsData={workerMatchingJobs}
    />
  );
};

export default Home;
