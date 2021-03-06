import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogProvider';
import { BlogPost } from '../models/Blog';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Show'>;

const ShowScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext<any>(BlogContext);

  const blogPost: BlogPost = state.find(
    (blogPost: BlogPost) => blogPost.id === id
  );

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export const showHeaderOptions = ({ navigation, route }: Props) => {
  const addPostHandler = () => {
    navigation.navigate('Edit', { id: route.params.id });
  };

  return {
    headerTitle: 'Blog Post',
    headerRight: () => (
      <TouchableOpacity onPress={addPostHandler}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};
