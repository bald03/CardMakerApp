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

  type TextBlockProps = Coordinates &
  Block & {
    type: "text";
    value: string;
    width: number;
    height: number;
    fontSize: number;
    fontFamily: string;
    color: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };

type GraphicObject = Block & {
  backgroundImage: string;
  backgroundColor: string;
};

type ImageBlockProps = Block &
  Block & {
    type: "image";
    url: string;
    allowedFormat: Array<string>;
    pic: HTMLImageElement | null;
  };

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};

type FilterProps = Block & {
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


type MenuText = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};
type DataMenuText = {
  colors: Colors;
  fonts: Fonts;
};

type Colors = Array<string>;

type Fonts = Array<string>;

type Doc = {
  canvas: CanvasProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionAreaProps;
  dataMenuText: DataMenuText;
  defaultMenuText: TextBlockProps;
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
  MenuText,
  DataMenuText,
  Colors,
  Fonts,
};
