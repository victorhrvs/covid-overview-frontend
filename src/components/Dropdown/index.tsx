import React, { useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';




interface DropdownComponentProps  {
  input: string;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({input}) => {
  const [value, setValue] = useState<string>(input);


  return (
    <>
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
    <Text>{input}</Text>
    </>
  );
};

export default DropdownComponent;

