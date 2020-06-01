import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  TOGGLE_THEME,
  NEWS_STATE,
} from './actionTypes';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

export const toggleTheme = (theme) => ({
  type: TOGGLE_THEME,
  payload: theme,
});

export const newsState = (news) => ({
  type: NEWS_STATE,
  payload: news,
});
