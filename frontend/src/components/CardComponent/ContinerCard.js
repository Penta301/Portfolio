import CustomCard from "./CustomCard";
import DisplayedCard from "./DisplayedCard";

import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

function ContinerCard({ data }) {
  const [contentId, setContentId] = useState(false);

  const handleClick = (value, setter, content) => {
    if (content) {
      setter(false);
      return;
    }
    setter(value);
  };

  const handleAnimation = () => {
    if (window.innerWidth >= 1100) {
      console.log("executed");
      return { y: -350, x: 500, opacity: 1 };
    }
    return { opacity: 1 };
  };

  return (
    <>
      <AnimateSharedLayout type={"crossfade"}>
        <AnimatePresence>
          {contentId &&
            data
              .filter((card) => card.title === contentId)
              .map((card, index) => {
                const {
                  title,
                  date,
                  description,
                  time,
                  history,
                  imgs,
                  technologies,
                } = card;
                let id = title + index;
                return (
                  <DisplayedCard
                    key={id}
                    title={title}
                    date={date}
                    description={description}
                    history={history}
                    time={time}
                    cb={(value) => {
                      handleClick(value, setContentId, contentId);
                    }}
                    id={title}
                    imgs={imgs}
                    technologies={technologies}
                    animation={handleAnimation}
                  />
                );
              })}
          {data.map((card) => {
            const { mainImg, title, date, description, time } = card;
            return (
              <CustomCard
                key={title}
                img={mainImg}
                title={title}
                date={date}
                description={description}
                time={time}
                cb={(value) => {
                  handleClick(value, setContentId, contentId);
                }}
                id={title}
              />
            );
          })}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default ContinerCard;
