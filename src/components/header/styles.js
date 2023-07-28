import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 60,
  },
  title: {
    fontSize: 24,
    color: COLORS.text,
  },
});
