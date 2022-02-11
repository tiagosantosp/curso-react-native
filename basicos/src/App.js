/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Mega from './components/mega/Mega';

// import FlexBox4 from './components/layout/FlexBox4';
// import FlexBox3 from './components/layout/FlexBox3';
// import FlexBox2 from './components/layout/FlexBox2';
// import FlexBox1 from './components/layout/FlexBox';
// import Quadrado from './components/layout/Quadrado';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ParImpar from './components/ParImpar';
// import Pai from './components/relacao/Pai';
// import UsuarioLogado from './components/UsuarioLogado';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Componente1, {Componente2, Componente3} from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/aleatorio';
// import Botao from './components/Botao';
// import Pai from './components/indireta/Pai';

const App = () => {
  return (
    <View style={style.App}>
      {/* <Componente1 style={style.cp1} />
      <Componente2 style={style.cp2} />
      <Componente3 />
      <Primeiro /> */}
      {/* <MinMax min={3} max={7} />
      <Aleatorio min={0} max={10}/> */}
      {/* <Botao/> */}
      {/* <Pai></Pai> */}
      {/* <ContadorV2/> */}
      {/* <Diferenciar/> */}
      {/* <ParImpar num={3 }/> */}
      {/* <Pai></Pai> */}
      {/* <UsuarioLogado usuario={{nome: 'Tiago', email: 'tiago_s.p@hotmail.com'}}/>
      <UsuarioLogado usuario={{ email: 'tiago_s.p@hotmail.com'}}/>
      <UsuarioLogado usuario={{nome: 'Tiago'}}/> */}
      {/* <ListaProdutosV2></ListaProdutosV2> */}
      {/* <DigiteSeuNome></DigiteSeuNome> */}
      {/* <FlexBox1/> */}
      {/* <FlexBox2/> */}
      {/* <FlexBox3/> */}
      {/* <FlexBox4></FlexBox4> */}
      <Mega qtdeNum={0}/>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    backgroundColor: '#91e3db',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     padding: 20
  },
});
