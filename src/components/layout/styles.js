const styles = ({ palette, app }) => ({
  project: {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: palette.background.main,
  },
  container: {
    backgroundColor: palette.background.lightGray,
    height: app.maxHeight,
    width: app.maxWidth,
    display: 'flex',
  },
  app: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
  },
});

export default styles;
