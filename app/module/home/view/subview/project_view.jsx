import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProjectViewStyles from './../../style/project_view';


 const ProjectView = ({ item }) => {
  return <View style={ProjectViewStyles.item}>{item}</View>;
};

export default ProjectView

// export default ProjectView(item) {
//   return <View style={styles.item}>{item}</View>;
// };

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