import { useState } from "react";
import Project from "./Project";
import { Button } from "react-bootstrap";
import ProgressButton from "../Teaser/ProgressButton";

function ProjectList(props) {
  const [blured, setBlured] = useState(-1);

  const getBlurStyle = (index) => {
    if (blured === -1 || blured === index) {
      return "0px";
    } else {
      return "3px";
    }
  };

  const onMouseEnter = (index) => {
    setBlured(index);
  };

  const onMouseLeave = () => {
    setBlured(-1);
  };

  const projectImages = [
    "https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/6232276ecb324b5c3d0c3276_dev-thumbnail-image-developer-webflow-ecommerce-template-p-500.png",
    "https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template-p-500.png",
    "https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png",
  ];

  return (
    <div className="row m-5">
      <div className="col-lg-6 col-sm-12">
        <h1 className="text-white">
          Take a look at the latest projects I’ve done
        </h1>
        <ProgressButton text="Browse All Project" />
        <div key={0}>
          <div
            style={{ filter: `blur(${getBlurStyle(0)})` }}
            onMouseEnter={() => onMouseEnter(0)}
            onMouseLeave={() => onMouseLeave()}
          >
            <Project image={projectImages[0]} />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div key={0}>
          <div
            style={{ filter: `blur(${getBlurStyle(1)})` }}
            onMouseEnter={() => onMouseEnter(1)}
            onMouseLeave={() => onMouseLeave()}
          >
            <Project image={projectImages[1]} />
          </div>
        </div>
        <div key={0}>
          <div
            style={{ filter: `blur(${getBlurStyle(2)})` }}
            onMouseEnter={() => onMouseEnter(2)}
            onMouseLeave={() => onMouseLeave()}
          >
            <Project image={projectImages[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
