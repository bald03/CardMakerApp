import { TextBlockProps } from "../../types.tsx";
import styles from "./TextBlock.module.css";

const TextBlockComponent = (data: TextBlockProps) => {
  return (
    <div className={styles.canvas}>
      <h3>Text Block</h3>
      <p>ID: {data.id}</p>
      <p>Text: {data.value.join(" ")}</p>
      <p>Font Size: {data.fontSize}</p>
      <p>Font Family: {data.fontFamily}</p>
      <p>Color: {data.color}</p>
      <p>Bold: {data.bold ? "Yes" : "No"}</p>
    </div>
  );
};

export default TextBlockComponent;
