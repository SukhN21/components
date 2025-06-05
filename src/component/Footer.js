function Footer (props) {
    return (
      <footer>
            <div className='footer-container'>
                <h1>{props.base}</h1>
                <p>{props.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;