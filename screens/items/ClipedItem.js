import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

const ClipedItem = ({ item }) => {
  return (
    <OptionButton
      title={item.title}
      date={item.date}
      onPress={() => WebBrowser.openBrowserAsync(item.web_url)}
    />
  );
};

function OptionButton({ title, date, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginLeft: 12,
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
  titleText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  dateText: {
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

export default ClipedItem;
