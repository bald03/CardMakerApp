import styles from"./menu.module.css";


const Menu = () => {

  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <button>
            <img src="/img/add-image.png" className={styles.toolsImg}/>
          </button>
        </li>
        <li>
          <button>
            <img src="/img/text.png" className={styles.toolsImg}/>
          </button>
        </li>
        <li>
          <button>
            <img src="/img/circle.png" className={styles.toolsImg}/>
          </button>
        </li>
        <li>
            <button>
              <img src="/img/rectangle.png" className={styles.toolsImg}/>
            </button>
        </li>
        <li>
          <button>
            <img src="/img/filter.png" className={styles.toolsImg}/>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;