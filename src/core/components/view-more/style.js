const style = ({ palette, typography }) => ({
  viewMore: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'none',
    backgroundColor: palette.common.white,

    '&:focus': {
      outline: 'none',
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: typography.pxToRem(50),
      top: typography.pxToRem(-50),
      left: 0,
      backgroundImage: `linear-gradient(top, rgba(255,255,255,0.001) 0%, ${palette.common.white} 80%)`,
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: typography.pxToRem(25),
      top: typography.pxToRem(-25),
      left: 0,
      backgroundImage: `linear-gradient(top, rgba(255,255,255,0.001) 0%, ${palette.common.white} 100%)`,
    },
  },
  button: {
    margin: `${typography.pxToRem(1)} 0`,
  },
});

export default style;
