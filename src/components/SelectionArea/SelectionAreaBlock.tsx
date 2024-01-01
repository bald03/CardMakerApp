import { RefObject, useRef } from "react";
import { SelectionAreaProps } from "../../types";
import styles from "./selectionArea.module.css";

import TextBlock from "../TextBlock/TextBlock";
import Circle from "../GraphicObject/CircleBlock/CircleBlock";
import Rectangle from "../GraphicObject/RectangleBlock/RectangleBlock";
import Image from "../GraphicObject/ImageBlock/ImageBlock";
import Filter from "../Filter/Filter";
import { Dispatch, SetStateAction } from "react";

import {
  CanvasProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../../types";
import { Canvas } from "../../types";

const addElement = (
  newElem:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps
) => {
  switch (newElem.type) {
    case "text":
      return <TextBlock {...newElem} />;
    case "circle":
      return <Circle {...newElem} />;
    case "rectangle":
      return <Rectangle {...newElem} />;
    case "image":
      return <Image {...newElem} />;
    case "filter":
      return <Filter {...newElem} />;
    default:
      return null;
  }
};

type Props = {
  newElem:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setPage: Dispatch<SetStateAction<CanvasProps>>;
  deleteNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
};

const SelectionArea = (props: Props) => {
  const { newElem, setPage, deleteNewElement } = props;
  const styleArea = {
    width: newElem.width,
    height: newElem.height,
    top: newElem.yPos,
    left: newElem.xPos,
  };
  console.log(newElem);
  const addElemToCanvas = () => {
    setPage((page: CanvasProps) => {
      return {
        ...page,
        elements: [...page.elements, newElem],
      };
    });
    deleteNewElement(null!);
  };
  return (
    <div className={styles.selectionAreaWrapper} onClick={addElemToCanvas}>
      <div style={styleArea} className={styles.selectionArea}>
        {addElement(newElem)}
        <img
          className={styles.deleteIcon}
          src="/img/trash-basket.png"
          alt="Basket"
        />
      </div>
    </div>
  );
};

export default SelectionArea;
