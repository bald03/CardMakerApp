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
  value: string;
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

type CanvasProps = Block & {
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
  history: Array<CanvasProps>;
};

type Doc = {
  canvas: CanvasProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionAreaProps;
};

export type {
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
};
