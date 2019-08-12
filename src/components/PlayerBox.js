import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { PLAYER } from '../constants';

function PlayerBox(props) {
  return (
    <View cls='flx-row'>
      <View cls='br'>
        <Text
          cls='pa2'
          style={{
            backgroundColor: props.who ? props.theme.prim : null,
            color: props.who ? props.theme.text : props.theme.sec
          }}
        >
          {PLAYER.FIRST}
        </Text>
      </View>
      <Text
        cls='pa2'
        style={{
          backgroundColor: !props.who ? props.theme.prim : null,
          color: !props.who ? props.theme.text : props.theme.sec
        }}
      >
        {PLAYER.SECOND}
      </Text>
    </View>
  );
}

PlayerBox.propTypes = {
  who: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

export default NativeTachyons.wrap(PlayerBox);
