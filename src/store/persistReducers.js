import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'saas',
      storage: AsyncStorage,
      whitelist: ['auth', 'team'],
    },
    reducers
  );

  return persistedReducer;
};
