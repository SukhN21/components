import Button from "./Button";

function Banner (props) {
    return (
        <section className="banner">
        <div className="banner-content">
            <h1>{props.welcome}</h1>
            <p>{props.description}</p>
            <Button firstbtn={props.firstbtn} secondbtn= {props.secondbtn} />
        </div>
        </section>
    );
}

export default Banner;