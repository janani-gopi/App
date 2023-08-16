import React, { useState } from "react";
import {  Text, View } from "react-native";
import { styles } from "../styles/Dropdown";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Dessert", value: "dessert" },
  { label: "South Indian", value: "south indian" },
  { label: "Chinese", value: "chinese" },
];

export default function DropdownComponent({ setvalue, value }) {
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          select a category
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#ffb805" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select a category" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setvalue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

