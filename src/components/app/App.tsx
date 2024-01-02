import styles from "./App.module.css";
import { SetStateAction, useState, Dispatch } from "react";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  MenuText as MenuTextType,
} from "../Models/types";
import doc  from "../Models/data";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import Menu from "../Menu/Menu";
import Page from "../Page/Page";
import LoadInput from "../UploadData/UploadData";
import MenuText from "../CangeTextMenu/CangeTextMenu";

const App = () => {
  const [page, setPage] = useState<PageProps>({
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    yPos: doc.page.yPos,
    xPos: doc.page.xPos,
    elements: [...doc.page.elements],
  });

  const [newElement, setNewElement] = useState<
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps
  >(null!);

  const [showMenuText, setShowMenuText] = useState<boolean>(false);

  const addElement = (
    elem:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => {
    setNewElement(elem);
  };

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src="./../img/logo.png" className={styles.logoImg} />
        </div>
        <nav className={styles.topMenu}></nav>
      </header>

      <div className={styles.leftMenu}>
        <Menu
          defaultMenuText={doc.defaultMenuText}
          addElement={addElement}
          setShowMenuText={setShowMenuText}
        />
        {showMenuText ? (
          <MenuText
            dataMenuText={doc.dataMenuText}
            defaultMenuText={doc.defaultMenuText}
            newElement={newElement as TextBlockProps}
            setNewElement={
              setNewElement as Dispatch<SetStateAction<TextBlockProps>>
            }
          />
        ) : null}
        <ButtonDownload {...page} />
        <LoadInput setPage={setPage} />
      </div>

      <div className={styles.canvas}>
        <Page
          page={page}
          newElement={newElement}
          setNewElement={setNewElement}
          setPage={setPage}
          setShowMenuText={setShowMenuText}
        />
      </div>
    </div>
  );
};

export default App;
