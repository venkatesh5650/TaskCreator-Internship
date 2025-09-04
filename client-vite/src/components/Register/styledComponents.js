import styled from "styled-components";

// Entire page wrapper
export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fa, #e9eff5);
  width: 100vw;
  padding: 30px 10px;
`;

// Page heading
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #28a745;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

// Center the form container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Form styling
export const Form = styled.form`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 90%;
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
    border-color: #28a745;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
  }
`;

// Select styling
export const Select = styled.select`
  margin-bottom: 20px;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #28a745;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
  }
`;

// Primary Button (Register button)
export const Button = styled.button`
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #218838;
  }
`;

// Secondary Button (Login button)
export const SecondaryButton = styled(Button)`
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;
