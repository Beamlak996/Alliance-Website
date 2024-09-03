import {
  Route,
  Routes,
} from "react-router-dom";
import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
