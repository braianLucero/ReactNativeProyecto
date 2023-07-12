import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { StackNavigation } from './src/Navigations/StackNavigation';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigation />
      </SafeAreaView>
    </>
  );
};

