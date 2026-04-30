import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    minWidth: '50%',
    maxWidth: '50%',
    height: 200,
    justifyContent: "center",
    alignItems: "center",

    // my visual styles; not important for grid
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  }
});

export default styles