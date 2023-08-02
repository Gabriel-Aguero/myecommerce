import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
    marginVertical: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  notFoundText: {},
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
  },
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productDetail: {
    padding: 10,
    gap: 5,
  },
  ProductName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
