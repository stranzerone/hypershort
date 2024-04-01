import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pages/Style.css";
import Card from "./Material/Card.js";
import {  useSelector } from 'react-redux';
const AllTasks = ({ name, startDate, endDate, priorityFilter, sortPriority }) => {

  
  const Tasks = useSelector((state) => state.tasks.tasks);

  const filterArrayByParam = (status) => {
    const filteredTasks = Tasks.filter(item => 
      item.status === status &&
      (!name || item.assignee.toLowerCase().includes(name.toLowerCase())) &&
      (!startDate || new Date(item.startDate) >= new Date(startDate)) &&
      (!endDate || new Date(item.endDate) <= new Date(endDate)) &&
      (!priorityFilter || item.priority === priorityFilter)
    );

    if (sortPriority) {
      const priorityOrder = ['P1', 'P2', 'P3'];
      filteredTasks.sort((a, b) => {
        const aIndex = priorityOrder.indexOf(a.priority);
        const bIndex = priorityOrder.indexOf(b.priority);

        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;

        if (a.priority === sortPriority) return -1;
        if (b.priority === sortPriority) return 1;

        return aIndex - bIndex;
      });
    }

    return filteredTasks;
  };

  return (
    <div className="dashboard-container p-md-4">
    
      <div className='dashboard-column col-8 col-md-2'>
        <div className='Heading w-100 bg-primary '>Pending Tasks</div>
        <div>
          <Card tasks={filterArrayByParam('Pending')} />
        </div>
      </div>

      <div className='dashboard-column col-9 col-md-2'>
        <div className='Heading w-100 bg-warning'>In Progress Tasks</div>
        <div>
          <Card tasks={filterArrayByParam('In Progress')} />
        </div>
      </div>

      <div className='dashboard-column col-9 col-md-2'>
        <div className='Heading w-100 bg-success'>Completed Tasks</div>
        <div>
          <Card tasks={filterArrayByParam('Completed')} />
        </div>
      </div>

      <div className='dashboard-column col-9 col-md-2'>
        <div className='Heading w-100 bg-secondary'>Deployed Tasks</div>
        <div>
          <Card tasks={filterArrayByParam('Deployed')} />
        </div>
      </div>

      <div className='dashboard-column col-9 col-md-2'>
        <div className='Heading w-100 bg-danger'>Deffred Tasks</div>
        <div>
          <Card tasks={filterArrayByParam('Pending')} />
        </div>
      </div>

    </div>
  );
};

export default AllTasks;
