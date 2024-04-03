import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTaskPriority, updateTaskStatus } from '../../Redux/TaskSlice';
import { Form, Dropdown, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UpdatePage = ({ show, onHide, ids }) => {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    priority: '',
    status: '',
  });

  useEffect(() => {
    const task = tasks.find((task) => task.id == ids);
    if (task) {
      setFormData({
        title: task.title,
        assignee: task.assignee,
        priority: task.priority,
        status: task.status,
      });
    }
  }, [ids, tasks]);

  const handleUpdate = () => {
    dispatch(updateTaskPriority({
      taskId: parseInt(ids),
      newPriority: formData.priority,
    }));
    
    dispatch(updateTaskStatus({
      taskId: parseInt(ids),
      newStatus: formData.status,
    }));


    onHide();  // Close the modal after updating
  };

  const handleStatusUpdate = (newStatus) => {
    setFormData({ ...formData, status: newStatus });
  };

  const handlePriorityUpdate = (newPriority) => {
    setFormData({ ...formData, priority: newPriority });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control plaintext readOnly defaultValue={formData.title} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Assignee</Form.Label>
            <Form.Control plaintext readOnly defaultValue={formData.assignee} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                {formData.status}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleStatusUpdate('Pending')}>Pending</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusUpdate('In Progress')}>In Progress</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusUpdate('Completed')}>Completed</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusUpdate('Deployed')}>Deployed</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusUpdate('Deferred')}>Deferred</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                {formData.priority}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handlePriorityUpdate('P1')}>P1</Dropdown.Item>
                <Dropdown.Item onClick={() => handlePriorityUpdate('P2')}>P2</Dropdown.Item>
                <Dropdown.Item onClick={() => handlePriorityUpdate('P3')}>P3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdatePage;
