import ContinerCard from "../../components/CardComponent/ContinerCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import Filter from "../../helpers/Filter/Filter";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import "./index.css";

import { Header } from "semantic-ui-react";

function Home({ data, location }) {
  return (
    <div>
      <HeaderPage location={location}></HeaderPage>
      <section>
        <Header size="huge" textAlign="center" style={{ padding: 20 }}>
          Proyectos
        </Header>
        <div className="grid-cards">
          <ContinerCard data={data}></ContinerCard>
        </div>
      </section>
      <footer className="footer">
        <Dropdown content={<Filter data={data} />} />
      </footer>
    </div>
  );
}

export default Home;
