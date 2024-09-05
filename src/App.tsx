import {
  Route,
  Routes,
} from "react-router-dom";
import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { OurStoriesPage } from "./pages/out-stories-page";
import { MissionAndVisionsPage } from "./pages/mission-and-visions-page";
import { CoreValuesPage } from "./pages/core-values-page";
import { OnlineLearningPage } from "./pages/online-learning-page";
import { PostGradPrograms } from "./pages/post-grad-programs-page";
import { TvetProgramsPage } from "./pages/tvet-programs-page";
import { UnderGradProgramsPage } from "./pages/under-grad-programs-page";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-stories" element={<OurStoriesPage />} />
        <Route
          path="/mission-and-visions"
          element={<MissionAndVisionsPage />}
        />
        <Route path="/core-values" element={<CoreValuesPage />} />
        <Route path="/online-learning" element={<OnlineLearningPage />} />
        <Route path="/post-grad-programs" element={<PostGradPrograms />} />
        <Route path="/tvet-programs" element={<TvetProgramsPage />} />
        <Route path="/under-grad-programs" element={<UnderGradProgramsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
