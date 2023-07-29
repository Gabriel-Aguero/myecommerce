import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
    height: 35,
    color: COLORS.black,
  },
});
