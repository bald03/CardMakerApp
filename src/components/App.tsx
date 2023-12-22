import styles from "./App.module.css";
import Canvas from ".././components/Canvas/Canvas";
import doc from "../data";
import Menu from ".././components/Menu/Menu.tsx";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src="./../img/logo.png" className={styles.logoImg}/>
        </div>
        <nav className={styles.topMenu}>Menu</nav>
      </header>

      <div className={styles.leftMenu}>
        <Menu />
      </div>

      <div className={styles.canvas}>
        <Canvas props={doc.canvas} />
      </div>
    </div>
  );
}

export default App;
