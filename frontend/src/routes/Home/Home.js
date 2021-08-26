import ContinerCard from "../../components/CardComponent/ContinerCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import Filter from "../../helpers/Filter/Filter";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import "./index.css";

import { Header, Placeholder, Segment } from "semantic-ui-react";

function Home({ data, location }) {
  return (
    <div>
      <HeaderPage location={location}></HeaderPage>
      <section>
        <Header size="huge" textAlign="center" style={{ padding: 20 }}>
          Proyectos
        </Header>
        <div className="grid-cards">
          {data[0].title ? (
            <ContinerCard data={data} />
          ) : (
            <Segment raised style={{ width: 400, height: 400 }}>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          )}
        </div>
      </section>
      <footer className="footer">
        <Dropdown content={<Filter data={data} />} />
      </footer>
    </div>
  );
}

export default Home;
