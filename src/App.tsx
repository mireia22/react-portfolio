import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import { ActiveSectionContextProvider } from "./Context/ActiveSectionContext";

const App = () => {
  return (
    <div
      className=" text-font   bg-black 
    "
    >
      <div
        className="w-[15rem] h-[15rem] rounded-full bg-[#d84343] absolute blur-[10rem] top-10
      sm:left-1/8 sm:top-[4rem]"
      ></div>
      <div
        className="w-[15rem] h-[15rem] rounded-full bg-[#b043d8] absolute right-0 blur-[10rem] 
      sm:right-1/8 sm:top-[20rem] "
      ></div>

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
