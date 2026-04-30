
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProjectView from './subview/project_view';
import HomeStyles from './../style/home';
import ProjectData from './../data/home';

export default function Home() {
  return (
    <View style={HomeStyles.container}>
        <StatusBar style="auto" />
        <Text>Welcome to NearPro App - Home V2</Text>
        <FlatList
                contentContainerStyle = {HomeStyles.container}
                data={ProjectData}
                numColumns={2}
                extraData={ProjectData}
                keyExtractor={ (item, index) => index }
                renderItem={
                    ({item}) => (<ProjectView key={item.index} data={item.icon} />)
                }
            />
    </View>
  );
}