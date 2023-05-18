import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './BlogCard.style';
const BlogCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.banner}} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.summary}>{item.summary}</Text>
          <Text style={styles.totalReadingTime}>
            Total Reading Time: {item.totalReadingTime}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlogCard;
