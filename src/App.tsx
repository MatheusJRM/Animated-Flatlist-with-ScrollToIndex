import { StatusBar } from "expo-status-bar";
import React, { ReactElement } from "react";
// import { DynamicItemScroll } from "./dynamic-item-scroll/dynamic-item-scroll";
import { SafeAreaView } from "react-native";
import { DynamicItemScrollAnimated } from "./dynamic-item-scroll-animated/dynamic-item-scroll-animated";
import "react-native-reanimated";
import "react-native-gesture-handler";
export default function App(): ReactElement {
  return (
    <SafeAreaView>
      <DynamicItemScrollAnimated />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
