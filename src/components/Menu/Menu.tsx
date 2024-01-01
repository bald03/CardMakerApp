import styles from "./menu.module.css";
import ButtonDownload from "../ButtonDownload/ButtonDownlaod";
import UploadData from "../UploadData/UploadData";
import { CanvasProps } from "../../types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setCanvas: Dispatch<SetStateAction<CanvasProps>>;
  canvas: CanvasProps;
};

const Menu = (data: Props) => {
  const { canvas, setCanvas } = data;
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <button>
            <img src="/img/add-image.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="/img/text.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="/img/circle.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="/img/rectangle.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="/img/filter.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <ButtonDownload {...canvas} />
        </li>
        <li>
          <button>
            <UploadData setPage={setCanvas} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
