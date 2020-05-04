import * as React from 'react';
import { StyledQuestion, StyledAnswer } from './Container.style';

export interface IProps {
  width?: string;
  display?: string;
  typing?: boolean;
  counter?: number;
  padding?: string;
  margin?: string;
  photo?: string;
}


const MyQuestion: React.FC<IProps> = ({ width, typing, counter, display, padding, margin, children }) => (
  <StyledQuestion width={width ? width : '100%'} display={display ? 'flex' : 'block'} padding={padding} margin={margin}> 
      {children}
  </StyledQuestion>
);

const MyAnswer: React.FC<IProps> = (props) => (
  <div>
    <StyledAnswer>{props.children}</StyledAnswer>
   
  </div>
);


MyQuestion.defaultProps = {
  width: '349px',
};

export { MyQuestion, MyAnswer };
