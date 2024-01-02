import { PageProps } from "../Models/types";
import styles from "../ButtonDownload/buttonDownload.module.css";

const ButtonDownload = (props: PageProps) => {
  const createFile = () => {
    const file = new Blob([JSON.stringify(props)], {
      type: "application/json",
    });
    return file;
  };

  const file = createFile();

  const downloadFile = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.json";
    link.click();
  };

  return (
  <button className={styles.menuButton} onClick={downloadFile} >
    <img src="/img/download.png" className={styles.toolsImg} />
  </button>
  );
};

export default ButtonDownload;
