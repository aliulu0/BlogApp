import {ScrollView, View, Text, Image} from 'react-native';
import {useBlog} from '../../context/blogContext';
import styles from './Detail.style';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
function Detail({route}) {
  const {id} = route.params;
  const {data} = useBlog();
  const item = data.find(item => item.postId === id);
  const {width} = useWindowDimensions();
  const source = {
    html: `${item.content}`,
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <RenderHtml style contentWidth={width} source={source} />
    </ScrollView>
  );
}

export default Detail;
