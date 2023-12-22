import React, { useState } from "react";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";
import { addDoc, collection, doc } from "firebase/firestore";
import { Close } from "@mui/icons-material";
import { db } from "../../firebase.config";

function NewTaskForm({ categoryId, showAddTaskForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = React.useState({
    title: "",
    description: "",
    priority: "High",
    date: "",
    status: "current",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const createTask = (event) => {
    if (task.title !== "" && task.description !== "") {
      setIsLoading(true);
      event.preventDefault();

      const docRef = doc(db, "categories", categoryId);
      const colRef = collection(docRef, "tasks");
      addDoc(colRef, {
        title: task.title,
        description: task.description,
        priority: task.priority,
        date: task.date,
        status: "current",
      });

      setTimeout(() => {
        showAddTaskForm();
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <AddForm method="POST">
      <Header>Add New Task</Header>
      <Title
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Title"
        required
        value={task.title}
      />
      <Description
        onChange={handleChange}
        name="description"
        placeholder="Description..."
        required
        rows="3"
        value={task.description}
      />
      <Priority
        onChange={handleChange}
        name="priority"
        placeholder="Priority"
        required
        value={task.priority}
      >
        <option value="0" disabled>
          Select Priority:
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Priority>
      <Date
        onChange={handleChange}
        name="date"
        type="date"
        required
        value={task.date}
      />

      <Remove onClick={() => showAddTaskForm()}>
        <Close />
      </Remove>
      <Button onClick={createTask}>
        {isLoading ? <PulseLoader size={10} color="#f9f9f9" /> : "Add Task"}
      </Button>
    </AddForm>
  );
}

export default NewTaskForm;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #f9f9f9;
  flex: 0.5;
  margin: 0 auto;
  justify-items: center;
  padding: 18px;
  border-radius: 24px;
  position: relative;
`;

const Header = styled.h3`
  text-align: center;
`;

const Remove = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  opacity: 0.45;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const Title = styled.input``;

const Description = styled.textarea`
  line-height: 1.5;
  opacity: 0.6;
`;

const Priority = styled.select``;

const Date = styled.input`
  margin-top: 18px;
  opacity: 0.45;
  display: flex;
  gap: 8px;
  align-items: center;

  .MuiSvgIcon-root {
    position: relative;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  width: 50%;
  margin: 18px auto 0 auto;
  background: #7743db;
  color: #f9f9f9;
  border: 1px solid #7743db;
  font-weight: bold;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    border-radius: 24px;
  }
`;
