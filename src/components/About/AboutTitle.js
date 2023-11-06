import { Typography } from "@mui/material";
import { Accordion, Card } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function AboutTitle() {
    const textStyle = {
        fontWeight: 'bold',
        color: 'white',
        maxWidth: '400px',
        fontSize: '50px',

    };
    return <div className="mt-5">
        <div>
            <div className="lineStyle" />
            <h1 style={textStyle} className='welcome-content mt-5'>
                Nice to meet you, I’m Kritik Pal
            </h1>
            <Typography variant="body1" className="text-white" maxWidth={'700px'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </div>


    </div>;
}

export default AboutTitle;