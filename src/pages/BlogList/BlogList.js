import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
import styles from './BlogList.style';
import BlogCard from '../../components/BlogCard/BlogCard';
import {useBlog} from '../../context/blogContext';

const BlogList = ({navigation}) => {
  const {data, loading, error, setPage, fetchData, setLoading, setData} = useBlog();

  if (loading) {
    return <ActivityIndicator style={{marginVertical: 16}} size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleBlogSelect = (id) => {
    navigation.navigate("DetailScreen", {id});
  };

  const renderBlog = ({item}) => <BlogCard item={item} onSelect={()=> handleBlogSelect(item.postId)} />;

  const renderFooter = () => {
    return (
      <View>
        {loading ? <ActivityIndicator style={{marginVertical: 16}} size="large" /> : null}
      </View>
    );
  };

  function handleRefresh() {
    setLoading(true);
    setPage(1);
    setData([]);
    fetchData();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderBlog}
        keyExtractor={item => item.postId}
        onEndReached={() => setPage(prev => prev + 1)}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default BlogList;
