const style = ({ typography }) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer !important',

    '&:focus': {
      outline: 0,
    },
  },
  linkText: {
    fontFamily: 'inherit',

    '&:hover': {
      textShadow: `${typography.pxToRem(0.3)} 0 0`,
    },
  },
});

export default style;
