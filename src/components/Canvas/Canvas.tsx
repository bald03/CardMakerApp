import { CanvasProps } from "../../types.tsx";
import styles from "./Canvas.module.css";

type Props = {
  props: CanvasProps;
};

const CanvasComponent = (data: Props) => {
  const { props } = data;
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.yPos}%`,
    left: `${props.xPos}%`,
  };

  return <div className={styles.canvas} style={styleProps}>
      {props.elements.map((el) => {
        return <div>{el.type}</div>;
      })}
  </div>;
};

export default CanvasComponent;
