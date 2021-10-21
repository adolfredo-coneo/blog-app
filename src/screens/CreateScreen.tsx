import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogProvider';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Create'>;

const CreateScreen: React.FC<Props> = ({ navigation }) => {
  const { addPost } = useContext(BlogContext);

  const addPostHandler = (title: string, content: string) => {
    addPost(
      {
        id: Math.floor(Math.random() + Date.now()),
        title,
        content,
      },
      () => {
        navigation.navigate('Home');
      }
    );
  };

  return (
    <View style={styles.container}>
      <BlogPostForm
        titleLabel="Enter Title:"
        contentLabel="Enter Content:"
        submitLabel="Add Blog Post"
        onSubmit={addPostHandler}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});
