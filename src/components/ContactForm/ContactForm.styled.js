import styled from 'styled-components';

const FormLabel = styled.label`
  display: block;
  text-align: center;
  color: ${props => props.theme.darkGrey};
  font-weight: 600;
`;
const FormInput = styled.input`
  display: block;
  width: 280px;
  height: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  border: 1px solid ${props => props.theme.darkBlue};
  border-radius: 5px;
`;
const AddContactBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 148px;
  height: 40px;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${props => props.theme.darkBlue};
  background-color: ${props => props.theme.darkBlue};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.08);
  }
`;

export { FormLabel, FormInput, AddContactBtn };
