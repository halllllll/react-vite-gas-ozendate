import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Chakra UIのコンポーネントは基本的にstyles.globalを見ず、themeのfontsセクションに定義されたフォントを参照する。
  fonts: {
    body: '"BIZ UDPGothic", Meiryo, sans-serif',
    heading: '"BIZ UDPGothic", Meiryo, sans-serif',
    mono: '"BIZ UDPGothic", Meiryo, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: '"BIZ UDPGothic",Meiryo, sans-serif',
      },
    },
  },
});

export { theme };
