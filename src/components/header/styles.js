import { StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: COLORS.text,
  },
});
