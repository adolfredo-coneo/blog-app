import React, { useContext, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { posts, addPost } = useContext(BlogContext);

  const addPostHandler = () => {
    addPost({ id: posts.length + 1, title: `New Post ${posts.length + 1}`, content: 'New Content' });
  };

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Blog Post" onPress={addPostHandler} />
      <FlatList
        data={posts}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
