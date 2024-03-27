import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "@hookform/resolvers/yup";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="Login"
            component={}
            options={{ title: "Overview" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: 70,
    borderColor: "blue",
    borderWidth: 2,
  },
});
