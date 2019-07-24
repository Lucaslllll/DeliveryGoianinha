import { StyleSheet } from 'react-native';

const colorTheme = "#9B59B6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  list: {
    padding: 20
  },

  productContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 14,
    marginBottom: 20,
  },

  containerDisp: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },

  textDisp: {
    color: "#FFF",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#2ECC71",
    textTransform: "uppercase",
    textAlignVertical: "center",
  },


  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageDelivery: {
    height: 100,
    width: 120,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  productDescription: {
    textAlign: "center",
    marginTop: 10,
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colorTheme,
    backgroundColor: colorTheme,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  IconCardapio: {
    fontSize: 26,
    color: "#FFF",
    paddingLeft: 2,
    paddingRight: 2,
  },

  productButtonText: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "bold"
  }

});

export default styles;