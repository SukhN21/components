function Button (props) {
    return (
        <div className="Buttons-container">
            <button className="first-btn">{props.firstbtn}</button>
            <button className="second-btn">{props.secondbtn}</button>
        </div>
    )
}

export default Button;