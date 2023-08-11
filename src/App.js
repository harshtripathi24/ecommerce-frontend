import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Modal from "./Utilities/Components/Modal";

import "animate.css";

function App() {
  return (
    <>
      <Header />
      <Modal />
      <Home />
      {/* <div style={{ minHeight: "100vh" }}></div> */}
      <Footer />
    </>
  );
}

export default App;
