import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogContext } from '../context/BlogProvider';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state, editPost } = useContext(BlogContext);
  const { id } = route.params;
  const post = state.find((post) => post.id === id);

  const editPostHandler = (title: string, content: string) => {
    editPost({ id, title, content }, () => {
      navigation.pop();
    });
  };

  return (
    <View style={styles.container}>
      <BlogPostForm
        titleLabel="Enter New Title:"
        contentLabel="Enter New Content:"
        submitLabel="Save Blog Post"
        onSubmit={editPostHandler}
        initialTitle={post?.title}
        initialContent={post?.content}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});
