type Coordinates = {
  xPos: number;
  yPos: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Coordinates &
  Size & {
    id: string;
  };

type TextBlockProps = Block & {
  type: "text";
  value: Array<string>;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

type GraphicObject = Block & {
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlockProps = Block & {
  type: "image";
  url: string;
  allowedFormat: Array<string>;
};

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};
type FilterProps = {
  name: string;
  type: "filter";
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<FilterProps>;

type SelectionAreaProps = Block;

type TemplateProps = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type TemplatesCollection = {
  templates: Array<TemplateProps>;
};

type PageProps = Block & {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<PageProps>;
};

type Doc = {
  page: PageProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionAreaProps;
};

const greenFilter: FilterProps = {
  colorOfFilter: "#00ff00",
  name: "greenFilter",
  type: "filter",
  id: "filter1",
  opacity: 0.5,
};

const blueFilter: FilterProps = {
  name: "blueFilter",
  colorOfFilter: "#0000ff",
  type: "filter",
  id: "filter2",
  opacity: 0.5,
};

const redFilter: FilterProps = {
  name: "redFilter",
  colorOfFilter: "#ff0000",
  type: "filter",
  id: "filter3",
  opacity: 0.5,
};

const filterCollection: FilterCollection = [greenFilter, blueFilter, redFilter];

const page1: PageProps = {
  // Минимальные данные
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const page2: PageProps = {
  // Не все элементы могут быть в коллекциях
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: ["Hello"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["Hello"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const page3: PageProps = {
  // Максимальные данные для Page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: ["Hello"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["Hello"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 300,
      height: 300,
      xPos: 0,
      yPos: 300,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#909090",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 0,
    },
    greenFilter,
  ],
};

const selectionArea: SelectionAreaProps = {
  id: "idSelect",
  width: 0,
  height: 0,
  xPos: 0,
  yPos: 0,
};

const template1: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["Hello"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["Hello"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 400,
      height: 100,
      xPos: 350,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 250,
      yPos: 150,
      url: "1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template2: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["Hello"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["Hello"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "2.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template3: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["Hello"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["Hello"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "3.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const page4: PageProps = {
  // Максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template1.blocks],
};

const page5: PageProps = {
  // Максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template2.blocks],
};

const page6: PageProps = {
  // Максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template3.blocks],
};

const templateCollection: TemplatesCollection = {
  templates: [template1, template2, template3],
};

const historyCommands: HistoryCommands = {
  indexOfHistory: 4,
  history: [page1, page2, page3, page4, page5, page6],
};

const doc: Doc = {
  page: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export default doc;
