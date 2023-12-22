import { RectangleProps } from "../../../types.tsx";
import styles from "./rectangle.module.css";

const RectangleComponent = (data: RectangleProps) => {
  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    top: `${data.yPos}px`,
    left: `${data.xPos}px`,
    backgroundColor: data.backgroundColor,
  };

  return (
    <div style={styleProps} className={styles.rectangle}></div>
  );
};

export default RectangleComponent;