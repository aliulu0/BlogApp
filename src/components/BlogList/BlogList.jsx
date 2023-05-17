import {View, FlatList} from 'react-native';
import React, { useState } from 'react';
import styles from './BlogList.style';
import BlogCard from '../BlogCard/BlogCard';
import data from '../../../data.json';

const BlogList = () => {
  const renderBlog = ({item}) => <BlogCard item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data.result}
        renderItem={renderBlog}
        key={item => item.postId}
      />
    </View>
  );
};

export default BlogList;
