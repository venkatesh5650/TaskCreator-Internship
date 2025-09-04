import styled from "styled-components";

// Container to center the form
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #f6f8fa, #e9eff5);
  padding: 10px;

  @media (max-width: 500px) {
    align-items: flex-start;
    padding-top: 50px;
  }
`;

// Form styling
export const Form = styled.form`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: 350px;
  max-width: 90%;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #007bff;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

// Input styling
export const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

// Button styling
export const Button = styled.button`
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  flex: 1;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Register Button styling
export const RegisterButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

// Button Group to place Login & Register side by side on desktop
export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
