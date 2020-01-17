import React from 'react';
import styled from 'styled-components/native';
import {View, Text, ScrollView} from 'react-native';

const HeaderStyled = styled(View)`
  background-color: royalblue;
  height: 200px;
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderText = styled(Text)`
  color: white;
  font-size: 24px;
  text-align: center;
`;

export function HelloStyled() {
  return <HelloSub1 />;
}

function HelloSub() {
  return (
    <View>
      <HeaderStyled>
        <HeaderText>Hello World</HeaderText>
      </HeaderStyled>

      <HeaderStyled>
        <HeaderText>Hello World</HeaderText>
      </HeaderStyled>
    </View>
  );
}

function HelloSub1() {
  return (
    <ScrollView>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <HeaderStyled key={item}>
          <HeaderText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            aliquam.
          </HeaderText>
        </HeaderStyled>
      ))}
    </ScrollView>
  );
}
