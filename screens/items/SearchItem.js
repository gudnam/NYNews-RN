import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const SearchItem = ({ item, onPressStar }) => {
  return (
    <OptionButton
      icon={item.icon}
      title={item.title}
      date={item.date}
      onPressTitle={() => WebBrowser.openBrowserAsync(item.web_url)}
      onPressStar={() => onPressStar(item)}
    />
  );
};

function OptionButton({
  icon,
  title,
  date,
  onPressTitle,
  onPressStar,
  isLastOption,
}) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {title}
          </Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.optionIconContainer}>
          <AntDesign
            name={icon}
            size={22}
            color="rgba(0,0,0,0.35)"
            onPress={onPressStar}
          />
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
    flex: 0.1,
  },
  optionTextContainer: {
    flex: 0.9,
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

export default SearchItem;
