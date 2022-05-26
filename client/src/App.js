import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Blog from "./pages/blog/Blog";
import Exercises from "./pages/exercises/Exercises"
import TextNote from "./pages/exercises/text-note/TextNote"
import Instruments from "./pages/instruments/Instruments"
import Contact from "./pages/contact/Contact"
import Admin from "./pages/admin/Admin";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import { getUser } from "./context/ActionCreators";
import { AccessLevelPage } from "./components/AccessLevelPage";

import "./index.css";

function App() {
  const { dispatch, user } = useContext(Context);

  useEffect(() => {
    if (!user) {
      getUser(dispatch);
    }
  }, [user, dispatch]);

  return (
    <Router>
      <TopBar />
      <div style={{ marginTop: "125px" }}>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path="/exercises" element={<Exercises/>}/>
          <Route path="/exercises/text-note" element={<TextNote/>}/>

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/instruments" element={<Instruments/>}/>
          <Route path='/blog' element={<Blog />} />

          <Route path='/login' element={user ? <Blog /> : <Login />} />
          <Route path='/settings' element={user ? <Settings /> : <Login />} />
          <Route path='/write' element={user ? <Write /> : <Login />} />
          <Route path='/post/:postId' element={<Single />} />
          <Route path='admin' element={<AccessLevelPage redirectTo={"/login"} accessLevel={3} />}>
            <Route index element={<Admin />} />
            <Route path=':id' element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
