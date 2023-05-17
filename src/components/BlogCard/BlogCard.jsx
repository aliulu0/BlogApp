import {View, Text,Image} from 'react-native';
import React from 'react';
import styles from './BlogCard.style';
const BlogCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.banner}} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
        <Text style={styles.totalReadingTime}>Total Reading Time: {item.totalReadingTime}</Text>
      </View>
    </View>
  );
};

export default BlogCard;
