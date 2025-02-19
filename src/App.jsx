import RoutesSite from "./constants/RoutesSite";
import Navbar from "./pages/Navbar";
import FooterSite from "./pages/FooterSite";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="bg-purple-800 text-white">
          <Navbar />
        </header>
        <main className="flex-grow px-12">
          <RoutesSite />
        </main>
        <footer>
          <FooterSite />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
