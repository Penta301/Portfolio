import "./index.css";
import { Card, Image, Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
function DisplayedCard({
  imgs,
  title,
  date,
  time,
  description,
  id,
  cb,
  history,
  technologies,
}) {
  return (
    <motion.div
      className=" showed-card-custom"
      animate={{ y: -350, x: 500, opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId={id}
      onClick={() => cb(false)}
    >
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <h3>{title}</h3>
          </Card.Header>
          <p>{history}</p>
          <Card.Content>
            <div style={{ display: "flex", gap: "10px" }}>
              {imgs.map((image) => (
                <Image src={image} size="small" />
              ))}
            </div>
          </Card.Content>
          <Card.Meta>
            <span>Did it in: {date}</span>
          </Card.Meta>
          <Card.Meta>
            <span>Technologies: {technologies.join(" ").toString()}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p href="#test">
            <Icon name="time" />
            Time to build this app: {time}hrs
          </p>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

export default DisplayedCard;
