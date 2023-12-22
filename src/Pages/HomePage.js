import React, { Suspense } from "react";
import Banner from "../components/Banner/Banner";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "../components/ErrorBoundary";
const CoinsTable = React.lazy(() => import('../components/CoinsTable'))
const Homepage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary fallbackRender={fallbackRender} onReset={() => {}}>
      <Suspense fallback={<div>Loading...</div>}>
      <CoinsTable />
      </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Homepage;
