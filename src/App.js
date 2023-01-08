import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import ResponsiveAppBar from './components/appBar'
import CourseAndBonus from './pages/courseandbonus';
import OnlineConsultation from './pages/consultation';
import Background from './components/background';
import { AnimatePresence } from "framer-motion";
import Footer from './components/footer';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [location])

  const theme = createTheme({
    typography: {
      fontFamily: '"Helvetica Neue"'
    },
  });

  return (
    <>
      <Background loc={location.pathname} />
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/onlineconsultation" element={<OnlineConsultation />} />
            <Route path="/courseandbonus" element={<CourseAndBonus />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
      {/* <R3fDemo /> */}
    </>
  );
}

export default App;