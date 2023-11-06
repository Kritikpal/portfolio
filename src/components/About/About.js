import { Divider } from "@mui/material";
import AboutTitle from "./AboutTitle";
import CircularImageView from "./CircularImageView";

function About(props) {
    return <div>
        <div className="d-flex justify-content-around m-5">
            <AboutTitle />
            <CircularImageView
                imageUrl="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62327a2fb00126408cd587f2_john-carter-avatar-big-developer-webflow-ecommerce-template.jpg"
                altText="User Profile"
                borderRadius="50%"
                radius="500px"
            />
        </div>
        <Divider />

    </div>;
}

export default About;