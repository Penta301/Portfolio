import Home from "./routes/Home/Home";
import KnowMore from "./routes/KnowMore/KnowMore";
import Calls from "./Calls";

import { AnimatePresence } from "framer-motion";
import { Route, useLocation, Switch } from "react-router-dom";

function App() {
  const { data } = Calls();

  const location = useLocation();
  return (
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
  );
}

export default App;
