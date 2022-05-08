import React from "react";
import { Text, TextInput, StyleSheet, TextInputProps } from "react-native";

import { maskDate, maskPhone } from "../../utils/masks";

interface InputProps extends TextInputProps {
  mask: "date";
  inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text: string) {
    if (mask === "date") {
      const value = maskDate(text);
      inputMaskChange(value);
    }
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        {...rest}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 54,
    width: 200,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    fontSize: 14,
  },
});