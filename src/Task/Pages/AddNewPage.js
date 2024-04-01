// TaskForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../Redux/TaskSlice';
import { Modal, Button, Form } from 'react-bootstrap';
import './Style.css'; // Import custom CSS

const TaskForm = ({ show, handleClose,onHide }) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: '',
    description: '',
    assignee: '',
    team: '',
    status:'Pending',
    priority: 'P1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask(task));
    setTask({
      title: '',
      description: '',
      assignee: '',
      team: '',
      priority: 'P1',
    });
    onHide(); // Close the modal after submitting
  };

  return (
    <Modal show={show} onHide={onHide} className="custom-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </Form.Group>
          <Form.Group controlId="assignee">
            <Form.Label>Assignee:</Form.Label>
            <Form.Control
              type="text"
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="team">
            <Form.Label>Team:</Form.Label>
            <Form.Control
              type="text"
              name="team"
              value={task.team}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="priority">
            <Form.Label>Priority:</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="priority">
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deffred">Deffred</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Add Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskForm;
