import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show:'',
      show2:'',
      maskedText:'',
      rawText:''
    }
    this.getData = this.getData.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleNumber = (masked,raw) => {
    this.setState({maskedText:masked, rawText:raw});
  }

  getData(){
    const {rawText} = this.state;
    const {maskedText} = this.state;
    this.setState({showRaw:rawText});
    this.setState({showMasked:maskedText});
  }

  delete(){
    this.setState({showRaw:''});
    this.setState({showMasked:''});
    this.setState({maskedText:''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputMask
          type={'money'}
          value={this.state.maskedText}
          includeRawValueInChangeText={true}
          onChangeText={this.handleNumber}
          options={{
            precision:0,
            unit:'Rp.',
            delimiter:'.',
            separator:',',
            suffixUnit:''
          }}
          placeholder='Price'
          style={styles.maskStyle}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.getData}>
            <Text style={styles.buttonText}>Input</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.delete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>

        <Text> Raw: {this.state.showRaw} </Text>
        <Text> Masked: {this.state.showMasked} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
  buttonContainer:{
    flexDirection: 'row'
  },
  maskStyle: {
    margin: 10,
    height: 30,
    width:200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonText: {
    color: 'blue',
    padding: 10,
    fontSize: 20
  }
})
