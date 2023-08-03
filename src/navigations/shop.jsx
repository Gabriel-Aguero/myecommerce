import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Product, ProductDetail } from '../screens';
import { TransitionPresets } from '@react-navigation/stack';
import { COLORS, FONTS } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      initialRouteName='Categories'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 80,
        },
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontsize: 16,
        },
        headerTintColor: COLORS.white,
        animation: 'slide_from_left',
      }}>
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen
        name='Product'
        component={Product}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => navigation.goBack()}
              title='go back'>
              <Ionicons name='arrow-back-circle' size={24} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
            marginTop: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => navigation.goBack()}
              title='go back'>
              <Ionicons name='arrow-back-circle' size={24} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
    gap: 5,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default ShopNavigator;
