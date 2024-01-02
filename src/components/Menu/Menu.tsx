import { Dispatch, SetStateAction } from "react";
import styles from "./menu.module.css";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../Models/types";

type props = {
  addElement: (
    elemt:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => void;
  defaultMenuText: TextBlockProps;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Menu = (props: props) => {
  const { addElement, defaultMenuText, setShowMenuText } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: defaultMenuText.value,
      xPos: 400,
      yPos: 400,
      fontSize: defaultMenuText.fontSize,
      fontFamily: defaultMenuText.fontFamily,
      color: defaultMenuText.color,
      bold: defaultMenuText.bold,
      italic: defaultMenuText.italic,
      underline: defaultMenuText.underline,
      value: defaultMenuText.value,
    };
    setShowMenuText(() => true);
    addElement(elem);
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../img/like.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    };
    addElement(elem);
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#2B6CC4",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 300,
    };
    addElement(elem);
  };

  const addCircle = () => {
    const elem: CircleProps = {
      id: "circle2",
      type: "circle",
      backgroundColor: "#B5A642",
      backgroundImage: "",
      width: 400,
      height: 400,
      xPos: 400,
      yPos: 400,
    };
    addElement(elem);
  };

  return (
    <div className="menu">
      <button className={styles.menuButton} onClick={addTextBlock}>
        <img src="/img/text.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton} onClick={addCircle}>
        <img src="/img/circle.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton}  onClick={addRectangle}>
        <img src="/img/rectangle.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton} onClick={addImage}>
        <img src="/img/add-image.png" className={styles.toolsImg} />
      </button>
    </div>
  );
};

export default Menu;
