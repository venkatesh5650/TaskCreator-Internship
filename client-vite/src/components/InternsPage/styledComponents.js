import styled from "styled-components";

// Full page container
export const PageContainer = styled.div`
  min-height: 100vh;
  width:100vw;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f0f4ff, #d9e4ff);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #1a1a1a;
`;

// Header
export const Header = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #3b3b98;
  margin-bottom: 10px;
  text-align: center;
`;

// Back button
export const BackButton = styled.button`
  background-color: #6a89cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4a69bd;
  }
`;

// Table styling
export const InternTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

// Table header
export const TableHeader = styled.th`
  background: #3b3b98;
  color: #fff;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
`;

// Table row
export const TableRow = styled.tr`
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#f0f4ff" : "#e6ecff"};
  transition: all 0.2s ease;

  &:hover {
    background-color: #d9e4ff;
  }
`;

// Table cell
export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dcdcdc;
`;
