import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

export function HelloLoop() {
  return <HelloSubComp2 />;
}

/** Demo of Loop */
function HelloSubComp() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView>
      {list.map((item, index) => (
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            backgroundColor: 'tomato',
            marginBottom: 1,
            padding: 10,
          }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          nam.
        </Text>
      ))}
    </ScrollView>
  );
}

function HelloSubComp1() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <FlatList
      data={list}
      renderItem={(item, index) => (
        <Text
          key={index}
          style={{
            fontSize: 24,
            color: 'white',
            backgroundColor: 'tomato',
            marginBottom: 1,
            padding: 10,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          eligendi. hello
        </Text>
      )}></FlatList>
  );
}

function HelloSubComp2() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  const _renderItem = (item, index) => (
    <Text
      style={{
        fontSize: 24,
        color: 'white',
        backgroundColor: 'tomato',
        marginBottom: 1,
        padding: 10,
      }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus
      nisi voluptate aperiam repellendus quis temporibus alias optio enim?
      Maxime, nulla blanditiis? Nam fugiat autem laboriosam, unde id vel
      aliquid?
    </Text>
  );

  return <FlatList data={list} renderItem={_renderItem}></FlatList>;
}
