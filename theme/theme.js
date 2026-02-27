import { createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#e7e7e8',
      '#cecfd1',
      '#9d9ea2',
      '#6d6e74',
      '#3c3d45',
      '#0b0d17',
      '#0a0c15',
      '#090a12',
      '#080910',
      '#07080e',
    ],
  },
  fontFamily: 'Arial',
  headings: {
    fontFamily: 'Arial',
  },
  defaultRadius: 'md',
});

export { theme };
