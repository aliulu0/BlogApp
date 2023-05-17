import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import styles from './BlogList.style';
import BlogCard from '../BlogCard/BlogCard';
import {useBlog} from '../../context/blogContext';

const BlogList = () => {
  const {data, loading, error} = useBlog();
  const renderBlog = ({item}) => <BlogCard item={item} />;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderBlog} keyExtractor={item => item.postId}/>
    </View>
  );
};

export default BlogList;
