import Header from './component/Header';
import Banner from './component/Banner';
import Gallery from './component/Gallery';
import Footer from './component/Footer';

function App() {
  let title = 'Marvels';
  let welcome = 'Welcome to Marvels World';
  let description = 'Enter the universe of legends — where heroes rise, battles begin, and stories live forever.';
  const firstbtn="Play";
  const secondbtn="Wishlist";
  let base = 'Sukhjinder Singh';
  let copyright = '@2025 copyright reserved';

  const navLinks = [
    {index: 0, name: 'Movies', url: 'https://www.components.com/movies'},
    {index: 1, name: 'Shows', url: 'https://www.components.com/shows'},
    {index: 2, name: 'Comics', url: 'https://www.components.com/comics'},
    {index: 3, name: 'Account', url: 'https://www.components.com/account'},
  ];

  const heroes = [
    {
      name: "Captain America",
      img: "https://i.pinimg.com/originals/60/e7/81/60e78157f645f86801b503e94d3331e3.jpg",
    },
    {
      name: "Hulk",
      img: "https://i.pinimg.com/originals/94/61/d3/9461d3baa5b3c76350b767b4f53f9ca1.jpg",
    },
    {
      name: "Deadpool",
      img: "https://theawesomer.com/photos/2013/09/thuddleston_8.jpg",
    },
    {
      name: "Wolverine",
      img: "https://theawesomer.com/photos/2013/09/thuddleston_6.jpg",
    },
  ];

  return (
    <>
      <Header title={title} navLinks= {navLinks} />
      <main>
        <Banner welcome={welcome} description={description} firstbtn={firstbtn} secondbtn={secondbtn} />
      </main>
        <Gallery name="Superheroes" heroes={heroes}/>
      <Footer base={base} copyright={copyright} />
    </>
  );
}

export default App;