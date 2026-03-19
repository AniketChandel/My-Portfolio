import styles from "./App.module.css";
import { Aboutme } from "./components/Aboutme/Aboutme";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Me} from "./components/Me/Me";
import { Navigationbar } from "./components/Navigationbar/Navigationbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navigationbar />
      <Me />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
