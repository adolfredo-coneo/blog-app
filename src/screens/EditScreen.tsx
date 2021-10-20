import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Context as BlogContext } from '../context/BlogProvider';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen: React.FC<Props> = ({ navigation, route }) => {
  const { state, editPost } = useContext(BlogContext);
  const { id } = route.params;
  const post = state.find((post) => post.id === id);
  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.content ?? '');

  const addPostHandler = () => {
    editPost({ id, title, content }, () => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Blog Post" onPress={addPostHandler} />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    fontSize: 18,
  },
});
