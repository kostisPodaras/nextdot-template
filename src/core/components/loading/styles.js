const styles = ({ typography, app = {} }) => ({
  spinner: {
    height: `calc(100vh - ${typography.pxToRem(app.appBarHeight)})`,
  },
});

export default styles;
