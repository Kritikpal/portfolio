import React from "react";
import FollowMe from "../Social/FollowMe";
import Teaser from "../Teaser/Teaser";
import { Typography } from "@mui/material";

function Welcome() {
    return (
        <div className="welcome">
            <div className="d-flex justify-content-between custom-container">
                <div>
                    <div className="lineStyle" />
                    <Typography variant="h3" className="welcome-content mt-5">
                        I’m Kritik, a Web Developer
                    </Typography>
                    <Typography variant="body1" className="text-white welcome-subhead">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
                    </Typography>
                </div>
                <div>
                    <Teaser title="About Me" />
                    <Teaser className="mt-4" title="My Work" />
                    <FollowMe />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
