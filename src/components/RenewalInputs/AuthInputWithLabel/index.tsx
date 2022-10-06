import { UseFormRegister } from 'react-hook-form';

import { StyledInput, StyledLabel, StyledRequiredText, Wrapper } from './style';

interface Props {
  inputName: string;
  register?: UseFormRegister<any>;
  labelTitle?: string;
  inputType?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  isRequired?: boolean;
}

export const AuthInputWithLabel = ({
  labelTitle = '',
  inputName,
  inputType,
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
      <StyledInput
        {...(register ? { ...register(inputName) } : {})}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
