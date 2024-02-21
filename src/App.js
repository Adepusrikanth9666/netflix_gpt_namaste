import { Suspense } from "react";
import Body from "./components/Body";
import Loading from "./components/Loading";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </Suspense>
  );
}

export default App;
