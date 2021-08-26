import Logic from "./Logic";
import SpecialButton from "../SpecialButton/SpecialButton";
import "./index.css";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Icon } from "semantic-ui-react";

function Technologies({ content }) {
  const { setUnfold, unfold, unfoldAnimation, rotationAnimation } = Logic();

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div animate={unfoldAnimation} className="technologies-panel">
        <AnimatePresence>
          <motion.div layoutId={1} className="content-container-dropdown">
            {unfold ? content : ""}
          </motion.div>
          <motion.div className="dropdown-case">
            <motion.div animate={rotationAnimation}>
              <Icon
                onClick={() => setUnfold(!unfold)}
                name="chevron down"
                link={true}
                color="grey"
                size="big"
              />
            </motion.div>
          </motion.div>
          {unfold ? (
            <motion.div
              className="contact-buttons-dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <SpecialButton
                color="red"
                title="GMAIl"
                secondaryTitle="COPY"
                icon="mail"
              />
              <SpecialButton
                link="https://www.instagram.com/juan_e9/"
                color="purple"
                title="INSTAGRAM"
                secondaryTitle="Go to IG"
                icon="instagram"
              />
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default Technologies;
