import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Header, CategoryItem } from './components';
import CATEGORIES from './constants/data/categories.json';
import { Categories, Product } from './screens';
import { useState } from 'react';
import { Button } from 'react-native';
import { COLORS } from './theme';

const categoryDefaults = {
  categoryId: null,
  color: COLORS.primary,
};

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefaults);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  const onHandleSelectedCategory = ({ categoryId, color }) => {
    setSelectedCategory({ categoryId, color });
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefaults);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          title={headerTitle}
          style={{
            backgroundColor: selectedCategory.color,
          }}
        />
        {isCategorySelected ? (
          <Product onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
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
