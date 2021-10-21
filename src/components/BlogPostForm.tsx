import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BlogPost } from '../models/Blog';

interface Props {
  titleLabel: string;
  contentLabel: string;
  submitLabel: string;
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
}

const BlogPostForm: React.FC<Props> = ({
  titleLabel,
  contentLabel,
  submitLabel,
  onSubmit,
  initialTitle = '',
  initialContent = '',
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={setContent}
      />
      <Button title={submitLabel} onPress={() => onSubmit(title, content)} />
    </>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({
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
