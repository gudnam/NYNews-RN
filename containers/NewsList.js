import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import SearchItem from '../screens/items/SearchItem';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { newsState } from '../actions';

const CLIPED_ICON_NAME = 'star';
const UNCLIPED_ICON_NAME = 'staro';

const CLIPED_DATA_KEY = 'CLIPED_DATA_KEY';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=86fkTvC4D27TmqwI3ABfR9yaELR0My33'
      )
      .then(async (response) => {
        const clipedDatas =
          JSON.parse(await AsyncStorage.getItem(CLIPED_DATA_KEY)) || [];
        var datas = [];
        for (let i = 0; i < response.data.response.docs.length; i++) {
          const data = response.data.response.docs[i];
          const clipedData = clipedDatas.find(
            (clipedData) => clipedData.web_url === data.web_url
          );
          var iconName =
            clipedData == null ? UNCLIPED_ICON_NAME : CLIPED_ICON_NAME;
          datas[i] = {
            headline: data.headline.main,
            pub_date: data.pub_date,
            web_url: data.web_url,
            icon: iconName,
          };
        }
        this.setState({ datas: datas });
        this.props.newsState(datas);
      });
  }
  render() {
    const uiDatas = [];
    this.state.datas.forEach(function (data) {
      uiDatas.push({
        title: data.headline,
        date: data.pub_date,
        web_url: data.web_url,
        icon: data.icon,
      });
    });
    console.log('TEST1');
    console.log(this.props.newsDatas);
    return (
      <FlatList
        extraData={this.state}
        keyExtractor={(item) => item.web_url}
        data={uiDatas}
        renderItem={({ item }) => (
          <SearchItem
            item={item}
            onPressStar={(item) => {
              const datas = this.state.datas.slice();
              const selectedItem = datas.find(
                (data) => data.web_url === item.web_url
              );
              selectedItem.icon =
                selectedItem.icon === UNCLIPED_ICON_NAME
                  ? CLIPED_ICON_NAME
                  : UNCLIPED_ICON_NAME;
              this.setState({ datas: datas }, async () => {
                const clipedDatas = datas.filter(
                  (data) => data.icon === CLIPED_ICON_NAME
                );
                console.log(clipedDatas);
                await AsyncStorage.setItem(
                  CLIPED_DATA_KEY,
                  JSON.stringify(clipedDatas)
                );
              });
            }}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  newsDatas: state.NewsDatas.newsDatas,
});

const mapDispatchToProps = (dispatch) => ({
  newsState: (datas) => dispatch(newsState(datas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
