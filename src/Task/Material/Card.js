import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Dropdown, Modal } from 'react-bootstrap';
import "./TaskCard.css";
import { updateTaskPriority } from '../../Redux/TaskSlice';
import UpdatePage from '../Pages/UpdatePage';

const TaskCard = ({ tasks }) => {
  const dispatch = useDispatch();
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handlePriorityUpdate = (taskId, newPriority) => {
    dispatch(updateTaskPriority({ taskId, newPriority }));
  };

  const handleUpdateClick = (task) => {
    setSelectedTask(task);
    setUpdateModalShow(true);
    console.log(task)
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card-container mt-2  ">
          <Card className='card' style={{  borderColor: getStatusColor(task.status) }}>
            <Card.Body>
              <div className="task-options d-flex justify-content-between align-items-center" style={{ borderBottom: "2px solid gray" }}>
                <Card.Title className="title">{task.title}</Card.Title>
                
                <Dropdown>
                  <Dropdown.Toggle className='small-button' style={{ backgroundColor: getStatusColor(task.status) }}>
                    {task.priority}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handlePriorityUpdate(task.id, 'P1')}>P1</Dropdown.Item>
                    <Dropdown.Item onClick={() => handlePriorityUpdate(task.id, 'P2')}>P2</Dropdown.Item>
                    <Dropdown.Item onClick={() => handlePriorityUpdate(task.id, 'P3')}>P3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
              <Card.Text className="description">{task.description}</Card.Text>
              
              <div className="assignee d-flex justify-content-between align-items-center">
                <div className='fw-bold'>@{task.assignee}</div>
                <Dropdown>
                  <Dropdown.Toggle >
               
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleUpdateClick(task.id)}>Update</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
              <div className="bottomButton mt-2">
                <Button variant="info">Assign</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}

      <UpdatePage show={updateModalShow} onHide={() => setUpdateModalShow(false)} ids={selectedTask} />
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return '#007bff';
    case 'In Progress':
      return '#ffc107';
    case 'Completed':
      return '#28a745';
    case 'Deployed':
      return '#17a2b8';
    case 'Deferred':
      return '#dc3545';
    default:
      return '#6c757d';
  }
};

export default TaskCard;
