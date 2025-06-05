function Gallery (props) {
    return (
        <div className="gallery-div">
        <h2 className="gallery-title">{props.name}</h2>
        <div className="images-container">
            {props.heroes.map((hero, index) => (
            <div className="card" key={index}>
                <img src={hero.img} alt={hero.name} />
                <p>{hero.name}</p>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Gallery;