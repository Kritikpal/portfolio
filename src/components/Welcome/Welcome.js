import FollowMe from "../Social/FollowMe";
import Teaser from "../Teaser/Teaser";

function Welcome() {

    return <div className="welcome">
        <div className="d-flex justify-content-between custom-container">
            <div>
                <div className="lineStyle" />
                <h1 className="welcome-content mt-5">
                    I’m Kritik,a Web Developer
                </h1>
                <p className="text-white h6 welcome-subhead">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    elit leo quis ullamcorper quis id elementum convallis lacus gravida
                </p>
            </div>
            <div>
                <Teaser title="About Me" />
                <Teaser className='mt-4' title="My Work" />
                <FollowMe />
            </div>
        </div>
    </div>
}

export default Welcome;