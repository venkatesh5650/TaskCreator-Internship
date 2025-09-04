import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  BackButton,
  InternTable,
  TableHeader,
  TableRow,
  TableCell,
} from "./styledComponents";

export default function InternsPage() {
  const [interns, setInterns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/tasks/interns", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setInterns(res.data);
      } catch (err) {
        alert(err.response?.data?.error || "Failed to fetch interns");
      }
    };

    fetchInterns();
  }, []);

  return (
    <PageContainer>
      <Header>Registered Interns</Header>
      <p>Total Interns: {interns.length}</p>

      <BackButton onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </BackButton>

      <InternTable>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <TableRow key={intern.id} index={index}>
              <TableCell>{intern.id}</TableCell>
              <TableCell>{intern.name}</TableCell>
              <TableCell>{intern.email}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </InternTable>
    </PageContainer>
  );
}
