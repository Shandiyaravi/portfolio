import styles from './App.module.css';
import About from './components/About/About';
import Footer from './components/Footer/footer';
import Skills from './components/Skills/Skills';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import { Projects } from './components/Projects/Projects';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
