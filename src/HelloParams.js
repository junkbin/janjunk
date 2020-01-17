import React from 'react';
import {View, Text} from 'react-native';

export function HelloParms() {
  return (
    <>
      <HelloComp1 />

      <HelloComp2 />
    </>
  );
}

function HelloComp1() {
  return (
    <View>
      <Text>Params1</Text>
    </View>
  );
}

function HelloComp2() {
  return (
    <View>
      <Text>Params2</Text>
    </View>
  );
}
