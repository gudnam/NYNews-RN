import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NewsList from '../containers/NewsList';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsList />
      </View>
    );
  }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
  },
});
