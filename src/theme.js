import { Platform } from 'react-native';
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar:'#4D4F60',
    error:'#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'green',
      ios: 'blue',
      default: 'black',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  roundCorner: 5
};

export default theme;