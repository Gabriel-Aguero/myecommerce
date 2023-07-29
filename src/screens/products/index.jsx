import { View, Button, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json';

const Product = ({ onHandleGoBack, categoryId }) => {
  const [search, setSearch] = useState('');
  const [borderColor, setBorderColor] = useState(COLORS.primary);

  const onHandleFocus = () => {};
  const onHandleChangeText = text => {
    setSearch(text);
  };
  const onHandleBlur = () => {};

  const filterProducts = PRODUCTS.filter(product => product.categoryId === categoryId);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} title='go back' onPress={onHandleGoBack}>
        <Ionicons name='arrow-back-circle' size={24} color='black' />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder='Search'
          borderColor={borderColor}
        />
        <Ionicons name='search-circle' size={35} color='black' />
        {search.length > 0 && <Ionicons name='close-circle' size={35} color='black' />}
      </View>
      <FlatList
        data={filterProducts}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Product;
