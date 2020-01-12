import React from 'react'; // core react :: Defaul
import {View, Text} from 'react-native';

/** Creating First Component */
export function Hello() {
  const appTitle = 'Kharghar';

  // JSX SYNTAX
  return (
    <View>
      <Text style={{fontSize: 30, color: 'white', backgroundColor: 'gold'}}>
        Hello World
      </Text>
      <Text>{appTitle}</Text>
    </View>
  );
}

/**
 *  JSX ()
 *  AND {}
 */

/** Fat Arrow Functions */
export const World = () => {
  return (
    <>
      <View>
        <Text>Hello Worldddd</Text>
      </View>

      <View>
        <Text>Hello Again</Text>
      </View>
    </>
  );
};
