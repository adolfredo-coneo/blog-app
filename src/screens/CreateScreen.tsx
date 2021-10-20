import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Context as BlogContext } from '../context/BlogProvider';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Create'>;

const CreateScreen: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(BlogContext);

  const addPostHandler = () => {
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
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Add Blog Post" onPress={addPostHandler} />
    </View>
  );
};

export default CreateScreen;

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
