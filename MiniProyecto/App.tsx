import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// import { StackNavigation } from './src/Navigations/StackNavigation';
// import Carousel from './src/Components/Carousel';
import { DrawerNavigation } from './src/Navigations/DrawerNavigation';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StackNavigation /> */}
        <DrawerNavigation />
      </SafeAreaView>
    </>
    // <Carousel />
  );
};

