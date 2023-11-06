import Skill from "./Skill";
function Skills() {
    const html = {
        color: "red"
    }
    const js = {
        color: "yellow"
    }
    const react = {
        color: "blue"
    }
    return <div className="px-5">
        <div className="h1 text-white">
            My extensive list of skills
        </div>
        <div className='row '>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Skill color={html} icon='fa-html5' title='HTML & CSS' desc='The building blocks of web design, styling your content beautifully.' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Skill color={js} icon='fa-js' title='JAVA Script' desc='The language of interactivity, powering dynamic web experiences' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Skill color={react} icon='fa-react' title='REACT JS' desc='Crafting user interfaces with ease, a popular choice for frontend development.' />
            </div>
        </div>
    </div>;

}

export default Skills;