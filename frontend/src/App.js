import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, useLocation, Switch } from "react-router-dom";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Calls from "./Calls";

const Home = lazy(() => import("./routes/Home/Home"));
const KnowMore = lazy(() => import("./routes/KnowMore/KnowMore"));

function App() {
  const { data } = Calls();

  const location = useLocation();
  return (
    <Suspense
      fallback={
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      }
    >
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home data={data} location={location}></Home>
          </Route>
          <Route path="/know-more">
            <KnowMore location={location}></KnowMore>
          </Route>
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
