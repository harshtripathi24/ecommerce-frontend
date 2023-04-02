import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div style={{ minHeight: "100vh" }}></div>
      <Footer />
    </>
  );
}

export default App;
