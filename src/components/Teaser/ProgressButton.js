import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
function ProgressButton(props) {
    const [progress, setProgress] = useState(0);
    const [margin, setMagin] = useState('5px');

    const arrowStyle = {
        transition: 'margin 0.3s',
        marginLeft: margin
    };
    const handelMouse = () => {
        setProgress(100)
        setMagin('10px')
    }
    const removeProgress = () => {
        setProgress(0)
        setMagin('5px')
    }

    return <div>
        <Button
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none' }}
            className='teaser-btn mt-2'
            onMouseEnter={handelMouse}
            onMouseLeave={removeProgress} >
            <h5>
                {props.text}
                <i style={arrowStyle} className="fa-solid fa-arrow-right"></i>
            </h5>

        </Button>
        <div className='py-2' style={{ maxWidth: '200px' }}>
            <ProgressBar variant='secondary' style={{
                height: '3px'
            }} now={progress} />
        </div>
    </div>
}

export default ProgressButton;