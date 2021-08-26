import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Segment, Header, Image, Divider, Icon } from "semantic-ui-react";
import Logic from "./Logic";
import "./index.css";

function HeaderPage({ location }) {
  const { evaluationRender } = Logic();
  const history = useHistory();

  const src =
    "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1629384728/162075162_965618190870570_2873432039017907345_n_hkg18a.jpg";

  return (
    <motion.header className="header-main-content">
      <Segment.Group raised>
        <Segment inverted>
          <Image src={src} circular size="medium" centered />
          <Header size="medium" textAlign="center">
            I am Juan, a passionate developer who aims to build great
            applications using multiple technologies.
          </Header>
        </Segment>
        <Divider />
        <Segment inverted>
          <p className="para">
            I started programming around my 15/16 years, using Java, this did
            not last long, since I did not see progress with that language, so I
            gave it up. After a few years I got to know CSS and web development,
            from there I started to experiment a bit in this and to try JS, then
            I focused only on python and once I mastered it I went back to JS to
            master React.
          </p>
          {evaluationRender(location) ? (
            <motion.div
              style={{
                display: "flex",
                justifycontent: "center",
                width: "100%",
                justifyContent: "center",
              }}
              animate={{ height: "auto" }}
              exit={{ height: "100vh" }}
              transition={{ duration: 2 }}
            >
              <Icon
                name="chevron down"
                size="large"
                link={true}
                onClick={() => history.push("/know-more")}
              />
            </motion.div>
          ) : (
            ""
          )}
        </Segment>
      </Segment.Group>
    </motion.header>
  );
}

export default HeaderPage;
