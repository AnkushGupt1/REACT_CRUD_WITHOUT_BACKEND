import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/main";
import About from "./pages/home/About";
import Home from "./pages/home/home";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Service from "./pages/home/Service";

function App() {
  return (
    <Router>
      <Header /> {/* Always show the header */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Only show the footer on specific routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />


        {/* Add more routes for other pages */}
      </Routes>
      <Footer /> {/* Always show the footer */}
    </Router>
  );
}

export default App;
