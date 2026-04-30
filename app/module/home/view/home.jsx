
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProjectView from './subview/project_view';
import HomeStyles from './../style/home';

export default function Home() {
  return (
    <View style={HomeStyles.container}>
        <StatusBar style="auto" />
        <Text>Welcome to NearPro App - Home V2</Text>
        <FlatList
                contentContainerStyle = {HomeStyles.container}
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
