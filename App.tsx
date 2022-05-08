import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';
import Dropdown  from "./src/components/Dropdown";


export default function App(): JSX.Element {
  const [date, setDate] = useState("");
  const [uf, setUf] = useState("");


  return (
    <View style={styles.container}>
      <Input
      value={date}
      mask="date"
      maxLength={10}
      placeholder="Data: 31/12/2020"
      placeholderTextColor="#000"
      inputMaskChange={(text: string) => setDate(text)}
      />
      <Dropdown
      maxHeight={300}
      value={uf}
      onChange={(item: { value: string }) => {
        setUf(item.value);
      }}

    />

    <Button
    title="Gerar gráficos"
    />
      
      <StatusBar style="auto" />

    </View>
  );
}

//export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
