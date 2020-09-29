const styles = ({ typography, breakpoints }) => ({
  textCol: {
    minWidth: typography.pxToRem(220),
    padding: 0,

    [breakpoints.up('sm')]: {
      padding: `0 ${typography.pxToRem(20)}`,

      '&:first-child': {
        paddingLeft: 0,
      },
      '&:last-child': {
        paddingRight: 0,
      },
    },
  },
  textWrapper: {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    transition: 'max-height .3s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  },
});

export default styles;
