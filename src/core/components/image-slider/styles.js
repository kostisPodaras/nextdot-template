const styles = ({ palette }) => ({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    height: '100%',
  },
  background: {
    '& .slick-slide > div': {
      height: '100%',
    },
    '& .slick-dots': {
      zIndex: 10,
      bottom: '2vw !important',
      position: 'absolute',
    },
    '& .slick-dots li': {
      '&.slick-active button:before': {
        color: `${palette.primary.main} !important`,
      },
    },
    '& .slick-dots button:before': {
      fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
      color: `${palette.common.white} !important`,
    },
  },
});

export default styles;
