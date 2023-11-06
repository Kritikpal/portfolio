import { Divider } from "@mui/material";
import AboutTitle from "./AboutTitle";
import CircularImageView from "./CircularImageView";
import Story from "../MyStory/Story";
import Skills from "./SkillTable";

function About(props) {
  return (
    <div>
      <div className="row m-5 p-5">
        <div className="col-lg-6 col-md-12">
          <AboutTitle />
          <div className="d-flex text-light me-5">
            <div
              className="d-flex align-items-center me-5"
              style={{
                maxWidth: "150px",
              }}
            >
              <div style={expHeadText()}>2</div>
              <div style={expHeadText()} className="text-primary">
                +
              </div>
              <div style={expSubText()} className="mx-2">
                Years Of Experiences
              </div>
            </div>

            <div
              className="d-flex align-items-center mx-5"
              style={{
                maxWidth: "150px",
              }}
            >
              <div style={expHeadText()} className="display-2">
                50
              </div>
              <div style={expHeadText()} className="h1 text-primary">
                +
              </div>
              <div style={expSubText()} className="mx-2">
                Successful Projects
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-between">
          <CircularImageView
            imageUrl="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62327a2fb00126408cd587f2_john-carter-avatar-big-developer-webflow-ecommerce-template.jpg"
            altText="User Profile"
            borderRadius="50%"
            radius="500px"
          />
        </div>
      </div>
      <div className="row m-5">
        <div className="col-lg-6 col-md-12">
          <Story
            title={"How I started as a web developer"}
            body={
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
              "officia deserunt mollit anim id est laborum aute irure dolor in" +
              "reprehenderit in voluptate velit esse cillum dolore eu fugiat."
            }
            image={
              "https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62335be970b9542f0f60b9c6_my-story-image-2-developer-webflow-ecommerce-template.jpg"
            }
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <Story
            title={"My first website design back in 2001"}
            body={
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
            }
            image={
              "https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62335be9ecc98ad8c7535a00_my-story-image-1-developer-webflow-ecommerce-template.jpg"
            }
          />
        </div>
      </div>
      <Skills />
    </div>
  );

  function expHeadText() {
    return {
      fontSize: "60px",
      fontWeight: "bolder",
    };
  }
  function expSubText() {
    return {
      fontSize: "20px",
      fontWeight: "bold",
    };
  }
}

export default About;
