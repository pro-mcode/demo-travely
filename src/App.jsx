import HomePage from "./pages/HomePage";
import "./App.css";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <div className="global-container">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dynamic blog page */}
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
