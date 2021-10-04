import styled from "styled-components";

export const SignupBox = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  grid-template-rows: 300px auto;
  margin-left: 30%;
  margin-right: 30%;
  background-color: white;
`;
export const SignupTopCont = styled.div`
  margin-top: 50px;
  display: grid;
  place-items: center;
`;
export const SignupTopContTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  line-height: 47px;
`;
export const SignupTopContExplain = styled.div`
  text-align: center;
`;
export const SignupBottomCont = styled.div`
  display: grid;
  gap: 25px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: -70px;
  width: 70%;
`;
export const SignupBottomContText = styled.div`
  margin-left: 20px;
  font-size: 15px;
`;
export const SignupInput = styled.input`
  padding-left: 10px;
  height: 3em;
  width: 100%;
  border-radius: 29px;
  background-color: #f5f5f5;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  &::placeholder {
    color: rgb(204, 204, 204);
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;
export const SignupBtn = styled.div``;
export const SignupLink = styled.div``;
