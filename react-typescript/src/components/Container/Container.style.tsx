import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { Color, Font } from 'src/constants/';

type StyledComponentProps = {
  width?: string;
  display: string;
  padding?: string;
  margin?: string;
};


const StyledQuestion = styled.div<StyledComponentProps>((props) => ({
  background: Color.WHITE,
  borderRadius: '8px',
  width: props.width ? props.width : '',
  display: props.display,
  color: Color.DARK_GREY,
  fontFamily: Font.HELVETICA,
  textAlign: 'left',
  fontSize: '20px',
  letterSpacing: 0,
  padding: !!props.padding ? props.padding : '16px 23px 16px 20px',
  margin: !!props.margin ? props.margin : '15px',
}));

const StyledAnswer = styled.div(() => ({
  background: Color.MINE_SHAFT,
  borderRadius: '23px',
  boxShadow: '0px 0px 58px -16px rgba(52, 126, 240, 0.18)',
  color: Color.WHITE,
  fontFamily: Font.HELVETICA,
  fontSize: '20px',
  letterSpacing: 0,
  textAlign: 'center',
  margin: '15px',
  padding: '10px 23px 10px 20px',
}));



export { StyledQuestion, StyledAnswer};
