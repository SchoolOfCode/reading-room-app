// Customizing Chakra UI theme in order to access custom font

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-bubblegum_sans)',
    body: 'var(--font-bubblegum_sans)',
  },
});