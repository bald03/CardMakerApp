import {
  Doc,
  TextBlockProps,
  Coordinates,
  Size,
  Block,
  GraphicObject,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  SelectionAreaProps,
  TemplateProps,
  TemplatesCollection,
  CanvasProps,
  HistoryCommands,
  FilterCollection,
} from "./types.tsx";

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

const page1: CanvasProps = {
  // Min data
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const page2: CanvasProps = {
  // Mid data
  id: "page2",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "Text1",
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
      value: "Text2",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 100,
    },
  ],
};

const page3: CanvasProps = {
  // Max data
  id: "page3",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "It is Spike",
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
      value: "DEDwddwa",
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "/img/spike.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#2DE209",
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
    blueFilter,
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
      value: "It is Spike!",
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
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 250,
      yPos: 150,
      url: "/img/spike.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template2: TemplateProps = {
  id: "template2",
  name: "template2",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "Is crazy pug and green circle",
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
      id: "circle1",
      type: "circle",
      backgroundColor: "#197C0A",
      backgroundImage: "",
      width: 100,
      height: 100,
      xPos: 0,
      yPos: 500,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "/img/crazy-pug.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template3: TemplateProps = {
  id: "template3",
  name: "template3",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "LIKE! Green filter, black circle and yellow rectangle",
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
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 250,
      yPos: 200,
      url: "/img/like.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 100,
      height: 100,
      xPos: 0,
      yPos: 500,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#F6EC5A",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 0,
    },
    greenFilter,
  ],
};

const page4: CanvasProps = {
  // Максимальные данные для page
  id: "page4",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template1.blocks],
};

const page5: CanvasProps = {
  // Максимальные данные для page
  id: "page5",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template2.blocks],
};

const page6: CanvasProps = {
  // Максимальные данные для page
  id: "page6",
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
  indexOfHistory: 1,
  history: [page1, page2, page3, page4, page5, page6],
};

const doc: Doc = {
  canvas: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export default doc;
