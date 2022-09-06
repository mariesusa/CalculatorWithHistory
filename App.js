import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const plusPressed = () => {
    const endResult = parseInt(number1) + parseInt(number2);
    setResult(endResult);
    setData([...data, { key: number1 + ' + ' + number2 + ' = ' + endResult}]);
  }

  const minusPressed = () => {
    const endResult = parseInt(number1) - parseInt(number2);
    setResult(endResult);
    setData([...data, { key: number1 + ' - ' + number2 + ' = ' + endResult}]);
  }

  return (
    <View style={ styles.container }>
      
    <Text style={{ fontSize: 20, marginTop: 50}}>
      Result: { result }
    </Text>

    <TextInput 
      style={ styles.input }
      keyboardType= 'numeric'
      onChangeText={ text => setNumber1 (text) }
      value={ number1 }
    />
    
    <TextInput 
      style={ styles.input }
      keyboardType= 'numeric'
      onChangeText={ text => setNumber2 (text) }
      value={ number2 }
    />
    
    <View style={ { flexDirection: 'row' } }>
    <View 
      style={ styles.button }>
      <Button onPress={ plusPressed } title=' + ' />
    </View>

    <View 
      style={ styles.button }>
      <Button onPress={ minusPressed } title=' - ' />
    </View>
    </View>

    <Text 
      style={ styles.text }>
      History
    </Text>

    <FlatList 
      style={ styles.list }
      data={ data }
      renderItem={ ({ item }) => <Text>{ item.key }</Text> }
      keyExtractor={ (item, index) => index.toString() }
    />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
input : {
    width: 100,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 3,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
button : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    margin: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: '12%'
},
list : {
    fontSize: 20,
    textAlign: 'center'
},
text : {
  color: 'black',
  fontSize: 20,
  marginBottom: 4,
}
});
