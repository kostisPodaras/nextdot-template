const styles = () => ({
  image: {
    display: 'block',
    width: '100%',
    height: '100%',

    '& img': {
      objectFit: 'contain !important',
    },
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
  },
});

export default styles;
