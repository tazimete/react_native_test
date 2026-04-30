import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

export const  ProjectView = ({ item }) => {
  return <View style={styles.item}>{item}</View>;
};

// export default function ProjectView(project) {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to NearPro App - Home V2</Text>
//       <StatusBar style="auto" />

//       {/* <View style={styles.app}>
//       {itemData.map((item) => {
//         return <Item key={item.index} data={item.icon} />;
//       })} */}
//     {/* </View>  */}

//     <FlatList
//             contentContainerStyle = {styles.container}
//             data={itemData}
//             numColumns={2}
//             extraData={itemData}
//             keyExtractor={ (item, index) => index }
//             renderItem={
//                 ({item}) => (<Item key={item.index} data={item.icon} />)
//             }
//         />

//     </View>
//   );
// }

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