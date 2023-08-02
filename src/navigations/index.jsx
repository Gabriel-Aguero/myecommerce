import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './shop';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
