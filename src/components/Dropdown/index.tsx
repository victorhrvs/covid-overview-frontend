import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {label: "Todos os Estados", value: "TOTAL"},
  {label: "RO", value: "RO" },
  {label: "AC", value: "AC" },
  {label: "AM", value: "AM" },
  {label: "RR", value: "RR" },
  {label: "PA", value: "PA" },
  {label: "AP", value: "AP" },
  {label: "TO", value: "TO" },
  {label: "MA", value: "MA" },
  {label: "PI", value: "PI" },
  {label: "CE", value: "CE" },
  {label: "RN", value: "RN" },
  {label: "PB", value: "PB" },
  {label: "PE", value: "PE" },
  {label: "AL", value: "AL" },
  {label: "SE", value: "SE" },
  {label: "BA", value: "BA" },
  {label: "MG", value: "MG" },
  {label: "ES", value: "ES" },
  {label: "RJ", value: "RJ" },
  {label: "SP", value: "SP" },
  {label: "PR", value: "PR" },
  {label: "SC", value: "SC" },
  {label: "RS", value: "RS" },
  {label: "MS", value: "MS" },
  {label: "MT", value: "MT" },
  {label: "GO", value: "GO" },
  {label: "DF", value: "DF" }


];

const DropdownComponent = () => {
  const [value, setValue] = useState('');

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecione o Estado"
      searchPlaceholder="Pesquisar..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}

    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: '#FFF',
    borderRadius: 7,
    margin: 16,
    paddingLeft: 16,
    paddingRight: 9,
    height: 50,
    minWidth: 200,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});