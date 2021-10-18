import React, { useContext } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Context as BlogContext } from '../context/BlogProvider';
import { BlogPost } from '../models/Blog';
import { RootStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const IndexScreen: React.FC<Props> = ({ navigation }) => {
  const { state, addPost, deletePost } = useContext<any>(BlogContext);

  const addPostHandler = () => {
    addPost({
      id: Math.floor(Math.random() + Date.now()),
      title: `New Post ${state.length + 1}`,
      content: 'New Content',
    });
  };

  return (
    <View>
      <Button title="Add Blog Post" onPress={addPostHandler} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
});
