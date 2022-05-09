import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import { useNavigation, useRoute} from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";


//Chamada Assíncrona
async function load(uf:string, ano:string, mes:string, dia:string) {
  axios.get(`http://192.168.0.10:3000/covids.json?estado=${uf}&data=${ano}-${mes}-${dia}T00:00:00.000Z`).then(response => (console.log(response)))
}

const ChartScreen = () => {
  const info  = useRoute();
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState("");
  const [uf, setUf] = useState(info.params.uf);

  let data = info.params.date;

  const dia  = data.split("/")[0];
  const mes  = data.split("/")[1];
  const ano  = data.split("/")[2];

  load(uf, ano, mes, dia)


  //const charts = () => props.navigation.navigate("Chart")

  


  
  return (
    <View style={{flex:1}}>
      <Text>Tela 2</Text>
      <Text>{info.params.date}</Text>
      <Text>{info.params.uf}</Text>
    </View>
  );
};

export default ChartScreen;
