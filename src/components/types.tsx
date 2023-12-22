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
  // Минимальные данные
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const page2: CanvasProps = {
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

const page3: CanvasProps = {
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

const page4: CanvasProps = {
  // Максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template1.blocks],
};

const page5: CanvasProps = {
  // Максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template2.blocks],
};

const page6: CanvasProps = {
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
  canvas: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export default doc;
