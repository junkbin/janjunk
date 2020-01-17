import React from 'react';
import {View, Text} from 'react-native';

export function HelloComponent() {
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
      <Text>COMPONENT1</Text>
    </View>
  );
}

function HelloComp2() {
  return (
    <View>
      <Text>COMPONENT2</Text>
    </View>
  );
}
