import HeaderPage from "../../components/HeaderPage/HeaderPage";
import SpecialButton from "../../components/SpecialButton/SpecialButton";
import { Header, Divider } from "semantic-ui-react";
import { motion } from "framer-motion";
import "./index.css";

function KnowMore({ location }) {
  return (
    <motion.div
      className="know-more-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderPage location={location}></HeaderPage>
      <div className="content-know-more">
        <Header>What I'm doing, and what I did</Header>
        <Divider></Divider>
        <p className="information-know-more">
          I am currently learning multiple technologies, such as: Redux,
          Semantic UI, etc. Also, I am trying to master the concepts of
          functional programming, and extrapolate these (where possible) to
          Frontend development with React, and Backend.
        </p>
        <p className="information-know-more">
          To achieve this, I am developing some personal projects and recently I
          started working within "Fiver", a freelancer platform, to gain more
          experience.
        </p>
        <Header textAlign="left" size="large">
          Job:
        </Header>
        <Divider></Divider>
        <p className="information-know-more">
          As regards my work, I am teaching programming courses, in which I seek
          that people acquire the basics of programming in web development and
          especially in the Frontend, ranging from HTML to React.
        </p>
        <SpecialButton
          link="https://www.instagram.com/p/CR3zktnjyke/"
          color="purple"
          title="Institute"
          secondaryTitle="Go to IG"
          icon="instagram"
        />
        <Header textAlign="left" size="large">
          Who I am?
        </Header>
        <Divider></Divider>
        <p className="information-know-more">
          My name is Juan, I am from Argentina and I am currently 18 years old.
          In my spare time I enjoy learning to code and improve my skills as a
          developer, in the meantime I do some work creating projects on demand.
        </p>
      </div>
    </motion.div>
  );
}

export default KnowMore;
