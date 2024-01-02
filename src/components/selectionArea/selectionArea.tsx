import { useRef, useEffect } from "react";
import styles from "./selectionArea.module.css";

import TextBlock from "../TextBlock/TextBlock";
import Circle from "../graphicObjects/Circle/Circle";
import Rectangle from "../graphicObjects/Rectangle/Rectangle";
import Image from "../graphicObjects/Image/Image";
import Filter from "../Filter/Filter";
import { Dispatch, SetStateAction } from "react";

import { useDnD } from "../../hooks/useDnD/useDnD";

import ResizeArea from "../ResizeArea/ResizeArea";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  MenuText,
} from "../Models/types";

type Props = {
  newElement:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setPage: Dispatch<SetStateAction<PageProps>>;
  setNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
  stateMenu: MenuText;
  pageX: number;
  pageY: number;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const SelectionArea = (props: Props) => {
  const { newElement, setPage, setNewElement, setShowMenuText } = props;

  const styleArea = {
    width: newElement.width,
    height: newElement.height,
    top: newElement.yPos,
    left: newElement.xPos,
  };

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const refAreaWrapper = useRef<HTMLDivElement>(null);

  const addElement = (
    newElement:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => {
    switch (newElement.type) {
      case "text":
        return <TextBlock {...newElement} />;
      case "circle":
        return <Circle {...newElement} />;
      case "rectangle":
        return <Rectangle {...newElement} />;
      case "image":
        return <Image {...newElement} />;
      case "filter":
        return <Filter {...newElement} />;
      default:
        return null;
    }
  };

  const deleteNewItem = () => {
    setShowMenuText(() => false);
    setNewElement(() => null!);
  };

  const addElemToCanvas = (e: MouseEvent) => {
    if (e.target === refAreaWrapper.current) {
      setPage((page: PageProps) => {
        return {
          ...page,
          elements: [...page.elements, newElement],
        };
      });
      deleteNewItem();
    }
  };

  useEffect(() => {
    const { onDragStart } = registerDndItem({
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent: MouseEvent) => {
          dragEvent.stopPropagation();
          dragEvent.preventDefault();
          ref.current!.style.top = `${
            dragEvent.clientY + (newElement.yPos - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (newElement.xPos - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent: MouseEvent) => {
          dropEvent.stopPropagation();
          setNewElement((newElement) => ({
            ...newElement,
            xPos:
              dropEvent.clientX +
              (newElement.xPos - mouseDownEvent.clientX) +
              3,
            yPos:
              dropEvent.clientY +
              (newElement.yPos - mouseDownEvent.clientY) +
              5,
          }));
        },
      });
    };

    if (dndControlRef.current !== null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [newElement.width, newElement.height, newElement.xPos, newElement.yPos]);

  return (
    <div
      ref={refAreaWrapper}
      className={styles.selectionAreaWrapper}
      onClick={addElemToCanvas}
    >
      <div style={styleArea} ref={ref} className={styles.selectionArea}>
        <div ref={dndControlRef} className={styles.dndBlock}></div>
        {newElement.type !== "text" ? (
          <ResizeArea
            refResize={ref}
            newElement={newElement}
            setNewElement={setNewElement}
            pageX={props.pageX}
            pageY={props.pageY}
          />
        ) : null}
        {addElement(newElement)}
        <div onClick={deleteNewItem}>
          <img
            className={styles.deleteIcon}
            src="../../../img/trash-basket.png"
            alt="Basket"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionArea;
