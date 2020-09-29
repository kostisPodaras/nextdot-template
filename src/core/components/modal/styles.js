const styles = ({ breakpoints, typography, palette, shadows }) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: palette.background.paper,
    boxShadow: shadows[5],
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    maxHeight: '95%',
    maxWidth: '95%',
    overflow: 'auto',
    fontFamily: typography.fontFamily,
    borderRadius: typography.pxToRem(4),

    [breakpoints.up('sm')]: {
      maxHeight: '80%',
      maxWidth: '80%',
    },
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    boxShadow: shadows[1],
    borderRadius: 100,
    backgroundColor: palette.white,

    '&:hover': {
      backgroundColor: palette.grayscale['100'],
    },

    '&:focus': {
      backgroundColor: palette.grayscale['200'],
    },

    '&:active': {
      backgroundColor: palette.grayscale['300'],
    },
  },
});

export default styles;
