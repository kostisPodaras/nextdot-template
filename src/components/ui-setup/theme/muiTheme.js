import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import palette from './palette';
import typography from './typography';

const theme = (mode) => {
  const muiTheme = createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: { xs: 360, sm: 768, md: 960, lg: 1280, xl: 1920 },
    },
    palette: { ...palette, type: mode },
    typography: { ...typography },
    // or typography
    app: {
      maxWidth: 1920,
      minWidth: 320,
    },
  });
  return muiTheme;
};

if (
  typeof window !== 'undefined' &&
  process.env.NODE_ENV === 'development' &&
  process.env.NODE_ENV !== 'test'
) {
  /* eslint-disable no-console */
  console.log('--- THEME ---', theme());
}

export default theme;
