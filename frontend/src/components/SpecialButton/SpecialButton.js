import { Button, Label, Icon } from "semantic-ui-react";

function SpecialButton({ link, color, title, secondaryTitle, icon }) {
  return (
    <Button as="div" labelPosition="right">
      <Button basic color={color}>
        <Icon name={icon} />
        {title}
      </Button>
      <Label as="a" href={link} basic color={color} pointing="left">
        {secondaryTitle}
      </Label>
    </Button>
  );
}

export default SpecialButton;
