import Navbar from "./components/navbar";
import Header from "./components/header";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-surface-color">
        <Navbar />
        <Header />
      </div>

      <Gallery />

      <Footer />
    </>
  );
}

export default App;
