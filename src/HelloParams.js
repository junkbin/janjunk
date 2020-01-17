import React from 'react';
import {View, Text} from 'react-native';

export function HelloParms() {
  const myobj = {name: 'A', id: '1'};
  return (
    <>
      <HelloComp1 name="Hello React" id="1" myobj={myobj} />
      <HelloComp1 name="Hello World" id="2" myobj={myobj} />

      <HelloComp2 name="Hello 22222" />
    </>
  );
}

function HelloComp1(params) {
  return (
    <View>
      <Text>
        Params1 {params.name} :: {params.id} :: {params.myobj.name}
      </Text>
    </View>
  );
}

function HelloComp2({name, id = 5, myobj}) {
  return (
    <View>
      <Text>
        Params1 {name} :: {id} ::
      </Text>
    </View>
  );
}
