import ProgressButton from './ProgressButton';
function Teaser(props) {

    return <div className="teaser-content ">
        <h5>{props.title}</h5>
        <div>
            Lorem ipsum dolor sit amet consectetur adipiscing
            elit leo quis ullamcorper quis id elementum convallis lacus gravida.
        </div>
        <ProgressButton text='Learn More' />

        <hr />

    </div>
}

export default Teaser;