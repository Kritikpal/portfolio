import { Card } from "react-bootstrap";
function Skill(props) {
    let { title, desc, icon, color } = props;
    return <div className="m-2">
        <Card style={{ borderRadius: '30px' }} className="bg-dark text-white p-5">
            <i style={color} className={"fa-brands " + icon + " fa-4x text-center mt-5"}></i>
            <Card.Body className="mt-5 text-center">
                <Card.Title className="h1"
                    style={{
                        fontSize: 'xx-large'
                    }}>
                    {title}
                </Card.Title>
                <Card.Text className="mt-3">
                    {desc}.
                </Card.Text>
                <a href="https://example.com" className="btn btn-secondary">Learn More</a>
            </Card.Body>
        </Card>
    </div>;
}

export default Skill;