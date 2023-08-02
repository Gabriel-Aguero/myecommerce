import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Product } from '../screens';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { COLORS, FONTS } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

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
        presentation: 'card',
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontsize: 16,
        },
        headerTintColor: COLORS.white,
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
              <Ionicons name='arrow-back-circle' size={24} color='black' />
            </TouchableOpacity>
          ),
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
