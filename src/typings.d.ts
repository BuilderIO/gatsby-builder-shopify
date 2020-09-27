declare module '*.svg';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';
declare module '@loadable/component';
declare module '@theme-ui/preset-base' {
  import { Theme } from 'theme-ui';

  export default base as Theme;
}
