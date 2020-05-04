import styled from '@emotion/styled';

export interface IWizardContainerProps {
  backgroundColor?: string;
}

export const WizardContainer = styled.div`
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  min-height: 100vh;
  height: 100%;
  min-height: 100vh;
  background: ${(props: IWizardContainerProps) => (props.backgroundColor ? '' + props.backgroundColor + '' : '')};
`;
