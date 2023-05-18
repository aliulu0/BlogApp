import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#F1F6F9',
    padding: 10,
    fontSize: 18,
  },
  image: {
    margin: 5,
    maxWidth: device.width,
    height: 200,
    maxHeight: device.height / 2,
    resizeMode: 'cover',
    flex: 1,
  },
  title: {
    marginVertical:10,
    fontWeight: 'bold',
    color:"#212A3E"
  },
  content:{
    fontSize:18,
  }
});
