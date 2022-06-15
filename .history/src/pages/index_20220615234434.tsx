import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { workerProfile, workerMatchingJobs } = useSelector(
    (state: ReduxState) => state.worker
  );

  const dispatch: Dispatch<any> = useDispatch();

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