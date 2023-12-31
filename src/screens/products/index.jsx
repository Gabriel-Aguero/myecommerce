import { View, TouchableOpacity, Text, FlatList, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json';

const Product = ({ navigation, route }) => {
  const { categoryId, color } = route.params;
  const [search, setSearch] = useState('');
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const [filteredProducts, setFilteredProducts] = useState('');

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

  const onSelectProduct = ({ productId, name }) => {
    navigation.navigate('ProductDetail', { productId, color, name });
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
          <Ionicons
            style={styles.clearIcon}
            onPress={clearSearch}
            name='close-circle'
            size={25}
            color='black'
          />
        )}
      </View>
      <FlatList
        style={styles.products}
        data={search?.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectProduct({ productId: item.id, name: item.name })}
            style={styles.productContainer}>
            <ImageBackground
              source={{ uri: item.image }}
              style={[styles.productImage, { backgroundColor: color }]}
              resizeMethod='resize'
              resizeMode='contain'
            />
            <View style={styles.productDetail}>
              <Text style={styles.ProductName} numberOfLines={1} ellipsizeMode='tail'>
                {item.name}
              </Text>
              <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productsContent}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default Product;
