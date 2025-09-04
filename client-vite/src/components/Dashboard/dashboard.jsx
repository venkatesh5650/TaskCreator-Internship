import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // added
import {
  PageContainer,
  Container,
  Title,
  LogoutButton,
  FormContainer,
  Input,
  Select,
  Button,
  TaskList,
  TaskItem,
  TaskTitle,
  ErrorMessage,
  SectionTitle,
} from "./styledComponents";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedUserId, setAssignedUserId] = useState("");
  const [status, setStatus] = useState("To Do");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // manager / intern
  const userId = localStorage.getItem("userId"); // stored at login

  const navigate = useNavigate(); // added

  // ================= Fetch Tasks =================
  const fetchTasks = async () => {
    try {
      const url = "http://localhost:5000/tasks";

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ================= Create Task (Manager only) =================
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/tasks/create",
        { title, description, deadline, assignedUserId, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setDescription("");
      setDeadline("");
      setAssignedUserId("");
      setStatus("To Do");
      fetchTasks(); // refresh tasks list
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create task");
    }
  };

  // ================= Update Task Status =================
  const handleStatusChange = async (taskId, status) => {
    setError("");
    try {
      await axios.put(
        `http://localhost:5000/tasks/${taskId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update status");
    }
  };

  // ================= Delete Task (Manager only) =================
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/delete/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete task");
    }
  };

  return (
    <PageContainer>
      <Container>
        <LogoutButton
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </LogoutButton>

        {/* ✅ Manager-only View Interns Button */}
        {userRole === "manager" && (
          <Button
            style={{ marginBottom: "20px" }}
            onClick={() => navigate("/interns")}
          >
            View Interns
          </Button>
        )}

        <Title>Task Dashboard</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {/* ✅ Manager-only Create Form - At the Top */}
        {userRole === "manager" && (
          <>
            <SectionTitle>Create New Task</SectionTitle>
            <FormContainer onSubmit={handleCreateTask}>
              <Input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <Input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Assign to User ID"
                value={assignedUserId}
                onChange={(e) => setAssignedUserId(e.target.value)}
                required
              />
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </Select>

              <Button type="submit">Create Task</Button>
            </FormContainer>
          </>
        )}

        {/* ✅ All Tasks Section Below */}
        <SectionTitle>All Tasks</SectionTitle>
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id} status={task.status}>
              <TaskTitle>{task.title}</TaskTitle>
              <p>{task.description}</p>
              <p>Deadline: {task.deadline}</p>

              {/* ✅ Only Interns can change status */}
              {userRole === "intern" ? (
                <Select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </Select>
              ) : (
                <p>Status: {task.status}</p> // Manager sees status as text
              )}

              {/* ✅ Only manager can delete */}
              {userRole === "manager" && (
                <Button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </Button>
              )}
            </TaskItem>
          ))}
        </TaskList>
      </Container>
    </PageContainer>
  );
}

export default Dashboard;
