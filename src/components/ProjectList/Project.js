import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Project.css'; // 

function Project(props) {
    const s1 = {
        zoom: 1,
    }
    const [style, setStyle] = useState(s1)


    const onMouseEnter = () => {
        setStyle({
            zoom: 1.2,
        })

    }

    const onMouseLeave = () => {
        setStyle({
            zoom: 1,
        })

    }



    return (
        <div>
            <Card
                className='bg-dark pt-5 mt-5'
                style={{
                    borderRadius: '25px',
                    height: '700px',
                    width: '90%',
                    overflow: 'hidden'
                }}
                onMouseEnter={() => onMouseEnter()}
                onMouseLeave={() => onMouseLeave()}
            >
                <img
                    style={{
                        transform: `scale(${style.zoom})`,
                        marginTop: '20px',
                        height: '100%',
                        width: '100%',
                    }}
                    src={props.image}
                    className="zoom-image"
                />
            </Card>
        </div>
    );
}

export default Project;
