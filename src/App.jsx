import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Podcast from "./components/Podcast";
import MostLoved from "./components/MostLoved";

function App() {
  return <>
    <Header />
    <Hero />
    <Podcast/>
    <Blogs />
    <MostLoved />
  </>
}

export default App;