import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    margin: 10,
    border: 1,
    backgroundColor: '#F1F6F9',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    margin: 5,
    maxWidth: device.width,
    height: 150,
    maxHeight: device.height / 3,
    resizeMode: 'cover',
    flex: 1,
  },
  info: {
    padding: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color:"#212A3E"
  },
  summary: {
  },
  totalReadingTime: {
    backgroundColor: '#212A3E',
    color: '#F1F6F9',
    marginTop: 10,
    padding:3,
    width: device.width / 2,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});
