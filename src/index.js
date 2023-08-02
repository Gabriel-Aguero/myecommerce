import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';

import { COLORS, FONTS } from './theme';
import RootNavigator from './navigations';

// const categoryDefaults = {
//   categoryId: null,
//   color: COLORS.primary,
// };

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
  });

  // const [isCategorySelected, setIsCategorySelected] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefaults);

  // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  // const onHandleSelectedCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };

  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefaults);
  // };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size='large' />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
