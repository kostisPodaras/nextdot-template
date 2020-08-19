// Global styles
const styles = ({ palette }) => ({
  '@global': {
    // here i can put global styles like scroll behavor smooth
    // html: {
    //   margin: 0,
    // },
    body: {
      backgroundColor: palette.common.white,
    },
    svg: {
      display: 'block',
    },
  },
});

export default styles;
