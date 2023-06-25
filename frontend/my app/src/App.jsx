import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Diaries from "./components/routes/diaries/diaries.component";
import Auth from "./components/routes/auth/auth.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Add from "./components/routes/add/add.component";
import Profile from "./components/routes/profile/profile.component";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux-store/user/user.selector";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
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
          {!isLoggedIn && (
            <Route
              path="/auth"
              element={<Auth />}
            />
          )}
          {isLoggedIn && (
            <>
              <Route
                path="/add"
                element={<Add />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
};

export default App;
