import {Dimensions} from 'react-native';

const size = {
  font6: Dimensions.get('window').width * (6 / 365),
  font8: Dimensions.get('window').width * (8 / 365),
  font10: Dimensions.get('window').width * (10 / 365),
  font12: Dimensions.get('window').width * (12 / 365),
  font14: Dimensions.get('window').width * (14 / 365),
  font16: Dimensions.get('window').width * (16 / 365),
  font20: Dimensions.get('window').width * (20 / 365),
};

const weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

const type = {
  // Change as you like
  montserraMedium: 'Montserrat-Medium',
  montserraRegular: 'Montserrat-Regular',
  montserraBold: 'Montserrat-SemiBold',
};

export default {
  size,
  weight,
  type,
};
