import { Divider, Typography } from "@mui/material";
import CircularImageView from "../About/CircularImageView";
import FollowMe from "../Social/FollowMe";
import ProgressButton from "../Teaser/ProgressButton";

const Footer = () => {
    return <div className="bg-dark p-5">
        <div className="row">
            <div className="col-lg-6 col-sm-12">{footerleft()}</div>
            <div className="col-lg-6 col-sm-12 ">{footerright()}</div>
        </div>
        <Divider className="mt-5" color={'gray'} />
        <div className="text-center">
            <Typography
                variant="caption"
                color={'white'}
            >Copyright © Developer X | Designed by KRITIK PAL - Powered by REACT</Typography>
        </div>

    </div>;
}

const footerright = () => {
    return <div>
        <ProgressButton text="Get in Touch" />
        <div className="row mt-5">
            <div className="col-6">
                <Typography variant="h5" color={"GrayText"} fontWeight={"bold"}>Email Me:</Typography>
                <Typography variant="h6" color={"white"} fontWeight={"bold"}>kritikpal123@gmail.com</Typography>
            </div>
            <div className="col-6">
                <Typography variant="h5" color={"GrayText"} fontWeight={"bold"}>Call Me:</Typography>
                <Typography variant="h6" color={"white"} fontWeight={"bold"}>+917327873132</Typography>
            </div>
        </div>
    </div>
}
const footerleft = () => {
    return <div>
        <div className="d-flex align-items-center">
            <div>
                <CircularImageView borderRadius={'50%'}
                    radius={'150px'}
                    altText={"My Image"}
                    imageUrl={'https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62327a2fb00126408cd587f2_john-carter-avatar-big-developer-webflow-ecommerce-template.jpg'} />
            </div>
            <div className="mx-5">
                <Typography fontWeight={"bold"} color={"white"} variant="h2" className="footer-name">
                    Kritik Pal
                </Typography>
                <Typography color={"GrayText"} variant="h5" className="footer-subtitle">
                    Assistance Software Developer
                </Typography>
            </div>

        </div>
        <FollowMe />
    </div>
}

export default Footer;