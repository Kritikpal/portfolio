import { Typography } from "@mui/material";
import ProgressButton from "./ProgressButton";


function TeaserContent(props) {
    return (
        <div className="teaser-content">
            <Typography variant="h5" gutterBottom>
                {props.title}
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
            </Typography>
            <ProgressButton text="Learn More" />
            <hr />
        </div>
    );
}

export default TeaserContent;
