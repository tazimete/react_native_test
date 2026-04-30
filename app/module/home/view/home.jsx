
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProjectView from './subview/project_view';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome to NearPro App - Home V2</Text>
      <StatusBar style="auto" />

      {/* <View style={styles.app}>
      {itemData.map((item) => {
        return <Item key={item.index} data={item.icon} />;
      })} */}
    {/* </View>  */}

    <FlatList
            contentContainerStyle = {styles.container}
            data={itemData}
            numColumns={2}
            extraData={itemData}
            keyExtractor={ (item, index) => index }
            renderItem={
                ({item}) => (<ProjectView key={item.index} data={item.icon} />)
            }
        />

    </View>
  );
}

// Sample Data
const itemData = [
  {
    index: 0, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
        }}
      />
    ),
  },
  {
    index: 1, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
  {
    index: 2, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
        }}
      />
    ),
  },
  {
    index: 3, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
  {
    index: 4, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
        }}
      />
    ),
  },
  {
    index: 5, 
    icon: (
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
];

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // width: 400, 
    padding: 10,
    backgroundColor: '#edc3c3',
    alignItems: 'center',
    justifyContent: 'center',
  },

//   item: {
//     minWidth: '50%',
//     maxWidth: '50%',
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",

//     // my visual styles; not important for grid
//     padding: 10,
//     backgroundColor: "rgba(249, 180, 45, 0.25)",
//     borderWidth: 1.5,
//     borderColor: "#fff"
//   }
});