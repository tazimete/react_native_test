import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProjectViewStyles from './../../style/project_view';


 const ProjectView = ({ item }) => {
  return <View style={ProjectViewStyles.item}>{item}</View>;
};

export default ProjectView