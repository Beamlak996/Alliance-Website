import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { DefaultLayout } from "./components/layout/default-layout";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route path="/" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
}

export default App;
