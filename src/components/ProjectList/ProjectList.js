import { useState } from "react";
import Project from "./Project";
import { Button } from "react-bootstrap";
import ProgressButton from "../Teaser/ProgressButton";

function ProjectList(props) {

    const [blured, setBlured] = useState(-1);

    const getBlurStyle = (index) => {
        if (blured == -1) {
            return '0px'
        } else {
            if (blured == index) {
                return '0px'
            } else {
                return '3px'
            }
        }
    }

    const onMouseEnter = (index) => {
        setBlured(index);
    }

    const onMouseLeave = () => {
        setBlured(-1);
    }


    return <div>
        <h1 className="text-white m-2">
            Take a look at the latest projects I’ve done
        </h1>
        <div className="p-4">
            <ProgressButton text='Browse All Project' />
        </div>

        <div className="row d-flex align-items-center p-5">
            <div className="col-lg-6 col-sm-12" >
                <div
                    style={{ filter: `blur(${getBlurStyle(1)})` }}
                    onMouseEnter={() => onMouseEnter(1)}
                    onMouseLeave={() => onMouseLeave()}
                >
                    <Project image='https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/6232276ecb324b5c3d0c3276_dev-thumbnail-image-developer-webflow-ecommerce-template-p-500.png' />
                </div>

            </div>
            <div className="col-lg-6 col-sm-12">
                <div
                    style={{ filter: `blur(${getBlurStyle(2)})` }}
                    onMouseEnter={() => onMouseEnter(2)}
                    onMouseLeave={() => onMouseLeave()}
                >
                    <Project image='https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template-p-500.png' />
                </div>
                <div
                    style={{ filter: `blur(${getBlurStyle(3)})` }}
                    onMouseEnter={() => onMouseEnter(3)}
                    onMouseLeave={() => onMouseLeave()}
                >
                    <Project image='https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png' />
                </div>
            </div>

        </div>
    </div>

}

export default ProjectList;