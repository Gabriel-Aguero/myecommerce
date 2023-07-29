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
  const [FilteredProducts, setFilteredProducts] = useState('');

  const onHandleFocus = () => {};
  const onHandleChangeText = text => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleBlur = () => {};

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  const filteredProductsByCategory = PRODUCTS?.filter(product => product.categoryId === categoryId);

  const filterBySearch = query => {
    let updatedProductList = [...filteredProductsByCategory];

    updatedProductList = updatedProductList.filter(product => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredProducts(updatedProductList);
  };

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
        {search.length > 0 && (
          <Ionicons onPress={clearSearch} name='close-circle' size={35} color='black' />
        )}
      </View>
      <FlatList
        style={styles.products}
        data={search?.length > 0 ? FilteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
      {FilteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default Product;
