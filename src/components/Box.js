import React, { useState } from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { WINNERS, TEXT } from '../constants';

function Box(props) {
  const [value, setValue] = useState('');

  let tachyonStyle = 'h3 w3 aic jcc';
  let bottom = [0, 1, 2];
  let leftRight = [1, 4, 7];
  let top = [6, 7, 8];

  if (bottom.includes(props.boxNumber)) {
    tachyonStyle += ' bb';
  }
  if (leftRight.includes(props.boxNumber)) {
    tachyonStyle += ' bl br';
  }
  if (top.includes(props.boxNumber)) {
    tachyonStyle += ' bt';
  }

  function checkWinner() {
    WINNERS.forEach(opt => {
      let option = opt.filter(a => props.usedSpace.includes(a));
      if (option.length == 3) {
        props.setGame(true);
        props.setWinner(props.player ? TEXT.PONE_WINNER : TEXT.PTWO_WINNER);
        return;
      }
    });
    if (props.turns == 8 && props.winner == '') {
      props.setGame(true);
      props.setWinner(TEXT.DRAW);
    }
  }

  function pressBox() {
    if (props.turns < 10 && value == '' && !props.isOver) {
      props.player ? setValue('X') : setValue('O');
      props.playerState(!props.player);
      props.setTurns(props.turns + 1);
      props.usedSpace.push(props.boxNumber);
      if (props.turns > 3) {
        checkWinner();
      }
    } else {
      return;
    }
  }

  let ally = TEXT.BOX + props.boxNumber.toString();
  let allyLabel = value != '' ? `${ally}. Currenty filled by ${value}` : ally;
  let allyRole = value == '' ? 'button' : 'none';

  return (
    <TouchableOpacity
      accessibilityRole={allyRole}
      accessibilityLabel={allyLabel}
      cls={tachyonStyle}
      onPress={pressBox}
      activeOpacity={1}
    >
      <Text cls='f3' style={{ color: props.theme.text }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

Box.propTypes = {
  player: PropTypes.bool.isRequired,
  boxNumber: PropTypes.number.isRequired,
  playerState: PropTypes.func.isRequired,
  turns: PropTypes.number.isRequired,
  setTurns: PropTypes.func.isRequired,
  usedSpace: PropTypes.array.isRequired,
  setGame: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

export default NativeTachyons.wrap(Box);
