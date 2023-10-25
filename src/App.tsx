import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import { ActiveSectionContextProvider } from "./Context/ActiveSectionContext";

const App = () => {
  return (
    <div
      className=" text-font   bg-black  bg-stars-pattern 
    "
    >
      <div className=" tracking-wide">
        <ActiveSectionContextProvider>
          <Header />
          <Home />
          <Footer />
        </ActiveSectionContextProvider>
      </div>
    </div>
  );
};

export default App;
