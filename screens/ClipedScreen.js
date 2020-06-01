import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AsyncStorage } from 'react-native';
import ClipedItem from './items/ClipedItem';

const CLIPED_DATA_KEY = 'CLIPED_DATA_KEY';

class ClipedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.setData();
  }

  async setData() {
    const clipedDatas =
      JSON.parse(await AsyncStorage.getItem(CLIPED_DATA_KEY)) || [];
    var datas = [];
    for (let i = 0; i < clipedDatas.length; i++) {
      const data = clipedDatas[i];
      datas[i] = {
        headline: data.headline,
        pub_date: data.pub_date,
        web_url: data.web_url,
      };
    }
    this.setState({ datas: datas });
  }

  render() {
    const uiDatas = [];
    this.state.datas.forEach(function (data) {
      uiDatas.push({
        title: data.headline,
        date: data.pub_date,
        web_url: data.web_url,
      });
    });
    console.log(uiDatas);

    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.state}
          keyExtractor={(item) => item.web_url}
          data={uiDatas}
          renderItem={({ item }) => <ClipedItem item={item} />}
        />
      </View>
    );
  }
}

export default ClipedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
