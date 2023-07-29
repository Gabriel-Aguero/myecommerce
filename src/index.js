import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Header, CategoryItem } from './components';
import CATEGORIES from './constants/data/categories.json';
import { Categories, Product } from './screens';
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  const onHandleSelectedCategory = categoryId => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} />
        {isCategorySelected ? (
          <Product onHandleGoBack={onHandleNavigate} categoryId={selectedCategory} />
        ) : (
          <Categories onSelectCategory={onHandleSelectedCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
