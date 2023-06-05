import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Diaries from "./components/routes/diaries/diaries.component";
import Auth from "./components/routes/auth/auth.component";
import Navigation from "./components/routes/navigation/navigation.component";

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/diaries"
          element={<Diaries />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
      </Route>
    </Routes>
  </>
);

export default App;
