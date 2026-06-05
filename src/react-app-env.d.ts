/// <reference types="react-scripts" />
declare module '*.scss';
declare module '*.sass';
declare module '*.module.scss';
declare module '*.module.sass';
declare module "*.mp4" {
  const src: string;
  export default src;
}