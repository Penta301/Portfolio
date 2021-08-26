import "./index.css";
import { Card, Image, Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
function CustomCard({ img, title, date, time, description, id, cb }) {
  return (
    <motion.div className="custom-card" layoutId={id} onClick={() => cb(id)}>
      <Card>
        <Image src={img} wrapped size="small" ui={false} />
        <Card.Content>
          <Card.Header>
            <h3>{title}</h3>
          </Card.Header>
          <Card.Meta>
            <span>Did it in: {date}</span>
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

export default CustomCard;
