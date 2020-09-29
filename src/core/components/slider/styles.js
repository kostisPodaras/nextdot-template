// Include project styles
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Global styles
const styles = () => ({
  '@global': {
    '.slick-slider': {
      // height: '100%',
      width: '100%',
    },
    '.slick-slide > div > div': {
      outline: 'none !important',
    },
    '.slick-list': {
      height: '100%',
      width: '100%',
    },
    '.slick-track': {
      height: '100%',
      width: '100%',
    },
    '.slick-next, .slick-prev': {
      visibility: 'hidden',
    },
    '.slick-vertical': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

export default styles;
