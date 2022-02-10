import React from 'react';
import {Button} from 'react-native';

export default props => {
  function executar() {
    console.warn("EXECUTADO")
  }

  return (
    <>
      <Button 
        title="TESTE"
        onPress={executar} />
      <Button 
        title="TESTE 2"
        onPress={function() { console.warn('EXECUTAR 2')}} />
      <Button 
        title="TESTE 3"
        onPress={() => console.warn('EXECUTAR 3')} />
    </>
  );
};
