import { Card, CardContent } from "@mui/material";
import FollowMe from "../Social/FollowMe";
import "./Contact.css";
import ContactForm from "./ContactForm";
const ContactMePage = (props) => {
  return (
    <div className="m-5 p-5 text-white">
      <div className="lineStyle"></div>
      <div className="contact-heading">Let’s work together</div>
      <div className="row">
        <div className="col">
          <div className="contact-small-heading">Get in touch with me</div>
          <div className="contact-sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisci elit donec faucibus
            adipiscing mauris.
          </div>
          <br />
          <FollowMe />
        </div>
        <div className="col">
          <Card className="bg-dark">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
