import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <section className="dark:bg-neutral-900">
        <Header />
        <MainContainer />
        <Footer />
      </section>
    </>
  );
}

export default App;
