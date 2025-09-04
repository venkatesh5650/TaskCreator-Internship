import styled from "styled-components";

// Page Wrapper
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
`;

// Inner Container
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Title
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a1a1a;
  text-align: center;
`;

// Section Title
export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px 0 15px 0;
  color: #333;
  align-self: flex-start;
`;

// Logout Button
export const LogoutButton = styled.button`
  background-color: #1890ff;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #096dd9;
  }
`;

// Task Form
export const FormContainer = styled.form`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
`;

// Inputs
export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
  min-width: 200px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.3);
  }
`;

// Select Dropdown
export const Select = styled.select`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-width: 180px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.3);
  }
`;

// Button
export const Button = styled.button`
  background-color: #1890ff;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: #096dd9;
  }
`;

// Error Message
export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 15px;
  font-weight: 500;
`;

// Task Grid
export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

// Task Item
export const TaskItem = styled.li`
  background-color: ${(props) =>
    props.status === "Done"
      ? "#d4edda"
      : props.status === "In Progress"
      ? "#fff3cd"
      : "#f8d7da"};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Task Title
export const TaskTitle = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: #111;
`;
