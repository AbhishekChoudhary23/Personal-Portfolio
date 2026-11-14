import styled, { ThemeProvider } from "styled-components";
import { MotionConfig } from "framer-motion";
import { darkTheme } from "./styles/theme";
import CursorField from "./components/canvas/CursorField";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.body};

  /* Fine grid that fades out down the page. */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 1400px;
    pointer-events: none;
    background-image: linear-gradient(
        ${({ theme }) => theme.border} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${({ theme }) => theme.border} 1px,
        transparent 1px
      );
    background-size: 56px 56px;
    opacity: 0.45;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(
      ellipse 80% 60% at 50% 0%,
      #000 0%,
      transparent 75%
    );
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MotionConfig reducedMotion="user">
        <Page>
          <CursorField />
          <Navbar />
          <Main>
            <Hero />
            <Certifications />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </Main>
          <Footer />
        </Page>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
