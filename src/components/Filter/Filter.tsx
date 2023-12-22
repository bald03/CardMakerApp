import { FilterProps } from "../../types.tsx";
import styles from "./filter.module.css";

const FilterComponent = (data: FilterProps) => {
  const styleProps = {
    opacity: data.opacity,
    backgroundColor: data.colorOfFilter,
  };

  return (
    <div style={styleProps} className={styles.filter}></div>
  );
};

export default FilterComponent;