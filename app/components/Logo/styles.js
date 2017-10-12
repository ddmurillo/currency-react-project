import { StyleSheet, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
  },
  text: {
    fontWeight: '600',
    fontSize: 24,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '#ffffff',
  },
});
