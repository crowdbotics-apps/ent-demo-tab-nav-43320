import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";
import React from "react";

import Untitled3 from '../../screens/Untitled3'
import Untitled4 from '../../screens/Untitled4'
import Untitled6 from '../../screens/Untitled6'

const tabList = [
  {
    name: "Untitled3",
    component: Untitled3,
    label: "Untitled3",
    tabIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-gallery" color={color} size={size} />
    )
  },
  {
    name: "Untitled4",
    component: Untitled4,
    label: "Untitled4",
    tabIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
    )
  },
  {
    name: "Untitled6",
    component: Untitled6,
    label: "Untitled6",
    tabIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-child-outline" color={color} size={size} />
    )
  }
];

export default {
  tabList: tabList
};
