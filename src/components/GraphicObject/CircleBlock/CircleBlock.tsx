import { CircleProps } from "../../../types.tsx";
import styles from "./circle.module.css";

const CircleComponent = (data: CircleProps) => {
  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    top: `${data.yPos}px`,
    left: `${data.xPos}px`,
    backgroundColor: data.backgroundColor,
  };

  return (
    <div style={styleProps} className={styles.circle}></div>
  );
}

export default CircleComponent;