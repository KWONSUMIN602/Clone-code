import {  View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 1,backgroundColor:'coral'}}></View>
      <View style={{ flex: 1,backgroundColor:'red'}}></View>
      <View style={{ flex: 1,backgroundColor:'blue'}}></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
