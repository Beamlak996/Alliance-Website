import {
  Route,
  Routes,
} from "react-router-dom";
import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { OurStoriesPage } from "./pages/out-stories-page";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-stories" element={<OurStoriesPage />} />
        <Route path="/mission-and-visions" element={<OurStoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
