import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateKeySkillComponent.css";

//TemplateKeySkillComponent that renders a list item holding a skill.
const TemplateKeySkillComponent = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkillComponent;
