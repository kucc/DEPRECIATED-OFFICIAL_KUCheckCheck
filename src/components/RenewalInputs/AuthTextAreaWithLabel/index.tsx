import { UseFormRegister } from 'react-hook-form';

import {
  StyledLabel,
  StyledRequiredText,
  StyledTextArea,
  Wrapper,
} from '../AuthInputWithLabel/style';

interface Props {
  inputName: string;
  register?: UseFormRegister<any>;
  labelTitle?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  isRequired?: boolean;
}
export const AuthTextAreaWithLabel = ({
  labelTitle = '',
  inputName,
  placeholder,
  value,
  onChange,
  isRequired = true,
  register,
}: Props) => {
  return (
    <Wrapper hasLabelTitle={labelTitle !== ''}>
      {labelTitle && <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>}
      {!isRequired && <StyledRequiredText>(선택)</StyledRequiredText>}
      <StyledTextArea
        {...(register && { ...register(inputName) })}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
