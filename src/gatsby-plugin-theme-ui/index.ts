import base from '@theme-ui/preset-base';

export default {
  initialColorModeName: 'light',
  ...base,
  colors: {
    text: '#557571',
    background: '#eeeeee',
    primary: '#596e79',
    secondary: '#3b6978',
  },
  styles: {
    ...base.styles,
    a: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    hr: {
      display: 'block',
      height: '1px',
      border: 0,
      borderTop: '1px solid',
      borderColor: 'secondary',
      opacity: '0.3',
    },
  },
  fontWeights: {
    medium: 600,
    bold: 800,
  },
  text: {
    bold: {
      fontWeight: 600,
    },
  },
  alerts: {
    primary: {
      border: '1px solid',
      borderColor: 'text',
      color: 'background',
      bg: 'text',
      fontWeight: 'normal',
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'text',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      fontWeight: 600,
      '&:hover': {
        bg: 'secondary',
        cursor: 'pointer',
      },
    },
    secondary: {
      color: 'background',
      bg: 'primary',
    },
    link: {
      color: 'text',
      textDecoration: 'none',
      padding: 0,
      background: 'transparent',
      '&:hover': {
        textDecoration: 'underline',
        color: 'secondary',
        cursor: 'pointer',
      },
    },
  },
};
