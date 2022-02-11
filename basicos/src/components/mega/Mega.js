import React, {Component}from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import estilo from '../estilo'
import Numero from './Numero'

export default class Mega extends Component {
  state = {
    qtdeNum: this.props.qtdeNum,
    numeros: []
  }

  
  alterarQtdeNum = (qtde) => {
    this.setState({qtdeNum: +qtde})
  }

  gerarNumerosNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1 
    return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNum)
      .fill()
      .reduce(n => [...n, this.gerarNumerosNaoContido(n)  ], [])
      .sort((a, b) => a - b)
    this.setState({numeros})
  }

  exibirNumeros = () => {
    const nums = this.state.numeros
    return nums.map((num, i) => {
      return <Numero key={i} num={num}/>
    })
  }

  render() {
    return (
      <>
        <Text style={[estilo.txtG, style.title]}>Gerador Tele-Sena</Text>
        <TextInput
          style={style.input}
          keyboardType={'numeric'} //Deixa o teclado numerico
          placeholder='Digite um Numero' // texto no campo vazio
          value={String(this.state.qtdeNum)}
          onChangeText={this.alterarQtdeNum}
        />
        <Button
          title="Gerar"
          onPress={this.gerarNumeros}
        />
        <View style={style.view}>
          {this.exibirNumeros()}
        </View>
      </>

    )
  }
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',    
  },
  title: {
    textAlign: 'center',
    fontSize: 70
  }, 
  input: {
    fontSize: 30,
    borderBottomWidth: 1,
    textAlign: 'center',
    width: 80,
    marginBottom: 30

  }

})