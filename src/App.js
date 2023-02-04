import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  Outlet,
  RouterProvider
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Dash from "./Pages/Dash";
import Prayer from "./Pages/Prayer";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { PrayerProvider } from "./PrayerContext";
const user = JSON.parse(localStorage.getItem('user'));


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dash" element={<ProtectedRoute><Dash /></ProtectedRoute>} />
        <Route path="/prayer" element={<ProtectedRoute><Prayer /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Route>
    )
  );

  return (
    <div className="App">
      <PrayerProvider>
      <RouterProvider router={router} />
      </PrayerProvider>
    </div>
  );
};

const Root = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
  const logout = () => {
    if(user){
      localStorage.removeItem("user");
      window.location.assign('/');
    }
    else{
      alert('User not logged in!!');
    }
  } 

  return (
    <>
      <header>
        <nav className="mobile">
          <div className="top">
            <h3 className="heading">Kabash</h3>
            <img
              src="../images/icons8-menu-rounded-60.png"
              alt="menu"
              id="menu"
              onClick={handleNav}
            />
          </div>

          <aside className={`aside ${nav ? "slow" : ""}`}>
            <div className="aside-top">
              <h3 className="heading">Kabash</h3>
              <h3 className="heading" onClick={handleNav}>
                X
              </h3>
            </div>
            {user ? (
              <ul className="list">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/prayer">Prayer</Link>
                </li>
                <li>
                  <Link to="/dash">Testimony</Link>
                </li>
                <li onClick={logout}>LogOut</li>
              </ul>
            ) : (
              <ul className="list">
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
              </ul>
            )}
            
          </aside>
        </nav>
        <nav className="desktop">
          <h3 className="heading">Kabash</h3>
          {user ? (
            <>
              <ul className="list">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/prayer">Prayer</Link>
                <Link to="/dash">Testimony</Link>
              </ul>
              <button className="purple" onClick={logout}>Log Out</button>
            </>
          ) : (
            <>
            <ul className="list small-list">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
            </ul>
            <Link to="/prayer">
              <button className="purple">Get Started</button>
            </Link>
            </>
          )}
          
        </nav>
      </header>

      <Outlet />

      <footer>
        {/* <div className="footer-wrapper">
          <div className="footer-box">
            <h3 className="heading">Lorem ipsum dolor sit amet.</h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, ut quia mollitia optio praesentium consequatur a
              nihil? Officia, quos minus.
            </p>
          </div>

          <div className="footer-box">
            <h3 className="heading">Services</h3>
            <ul>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="heading">Company</h3>
            <ul>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="heading">Support</h3>
            <ul>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
            </ul>
          </div>
        </div> */}
        <span>
          <p className="paragraph">&copy; Kabash 2023 | All rights reserved | <Link to='/'>prayer@kabash.org</Link></p>
        </span>
      </footer>
    </>
  );
};

export default App;
