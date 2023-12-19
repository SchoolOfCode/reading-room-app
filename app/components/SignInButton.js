import { Button } from '@chakra-ui/react';

export const GlowingButton = () => (
  <Button
    padding="0.6em 2em"
    borderRadius="10px"
    color="white"
    bg="#111"
    position="relative"
    zIndex="0"
    userSelect="none"
    webkitUserSelect="none"
    touchAction="manipulation"
    _before={{
      content: '""',
      background:
        'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      backgroundSize: '400%',
      zIndex: '-1',
      filter: 'blur(5px)',
      webkitFilter: 'blur(5px)',
      width: 'calc(100% + 4px)',
      height: 'calc(100% + 4px)',
      animation: 'glowing-button-85 20s linear infinite',
      transition: 'opacity 0.3s ease-in-out',
      borderRadius: '10px',
      '@keyframes glowing-button-85': {
        '0%': {
          backgroundPosition: '0 0',
        },
        '50%': {
          backgroundPosition: '400% 0',
        },
        '100%': {
          backgroundPosition: '0 0',
        },
      },
    }}
    _after={{
      zIndex: '-1',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#222',
      left: '0',
      top: '0',
      borderRadius: '10px',
    }}
    mt={5}
    h="40px"
    fontSize={22}
  >
    Sign in
  </Button>
);
