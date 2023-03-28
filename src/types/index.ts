export interface IRouteLink {
  text: string;
  attrs: {
    name: string;
    to: string;
    class: string | string[];
  };
}
