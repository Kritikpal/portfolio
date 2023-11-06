import React from "react";
import skillData from "../../Models/Skills";
import "./About.css";
const Skills = () => {
  return (
    <div className="text-light m-5">
      <div className="skill-title">Skills</div>
      <div className="lineStyle" />
      <p className="skill-subtitle">
        Here are some of the technical skills and tools I'm proficient in:
      </p>
      <div className="row">
        {skillData.map((skill) => (
          <div key={skill.id} className="col-6 ">
            <div className="m-2 d-flex align-items-center">
              <i className={skill.icon}></i>
              <div className="skill-item mx-2">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
