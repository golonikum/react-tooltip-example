interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const content: SvgrComponent;
  // eslint-disable-next-line
  export default content;
}
