import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WaveCursor from "./components/shared/WaveCursor";

function App() {
  return (
    <>
      <section className="dark:bg-neutral-900">
        <Header />
        <MainContainer />
        <Footer />
              <WaveCursor />

      </section>
    </>
  );
}

export default App;
