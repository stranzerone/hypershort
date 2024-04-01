import React, { useState } from 'react';
import "./Style.css";
import AllTasks from '../AllTasks';
import { Person } from 'react-bootstrap-icons';
import TaskForm from './AddNewPage';
const DashBoard = () => {
  // State for filter options
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [sortPriority, setSortPriority] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false); // State for filter menu
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false); // State for sort menu
const [showModal,setShowModal] = useState(false)
  return (
    <div className="filter-container">
      <div className='d-flex col-12   align-items-center p-2'>
        <div className='col-6 dashBoardHeading'>
          <h1>DashBoard</h1>
        </div>
        <div className='col-6 personIcon text-right'>
          
          <Person size={40} color='black' className='icon' />
        </div>
      </div> 
      <div className='d-flex justify-content-space-between'>
       
      <button 
            className="d-block d-lg-none mr-3 btn btn-primary" 
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          >
            Filter
          </button>
          <button 
            className="d-block d-lg-none mr-3 btn btn-primary" 
            onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
          >
            Sort
          </button>
        
         
      </div>
      {/* Mobile Filter Menu */}
      <div className={`filter-menu ${isFilterMenuOpen ? 'd-block' : 'd-none'} d-lg-none mx-3 mt-3 p-3 border border-primary rounded`}>
        <h3 className="mb-3">Filter By</h3>
        <div className="filter-input mb-2">
          <label htmlFor="name"></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        
        <div className="filter-input mb-2 d-flex">
          <label  htmlFor="date-range"></label>
          <input 
            type="date" 
            id="date-range-start" 
            name="date-range-start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control mr-2"
          />
          <span className="mx-2">to</span>
          <input 
            type="date" 
            id="date-range-end" 
            name="date-range-end" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        
        <div className="filter-input mb-2">
          <label htmlFor="priority"></label>
          <select 
            id="priority" 
            name="priority" 
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="form-select"
          >
            <option value="">Select priority</option>
            <option value="P1">1</option>
            <option value="P2">2</option>
            <option value="P3">3</option>
          </select>
        
        </div>

       
      </div>

      {/* Mobile Sort Menu */}
      <div className={`sort-menu ${isSortMenuOpen ? 'd-block' : 'd-none'} d-lg-none mx-3 mt-3 p-3 border rounded`}>
        <h3 className="mb-3">Sort By</h3>
        <div className="filter-input mb-2">
          <label htmlFor="sortPriority">Priority:</label>
          <select 
            id="sortPriority" 
            name="sortPriority" 
            value={sortPriority}
            onChange={(e) => setSortPriority(e.target.value)}
            className="form-select"
          >
            <option value="">Select priority</option>
            <option value="P1">1</option>
            <option value="P2">2</option>
            <option value="P3">3</option>
          </select>
        </div>
      </div>

      {/* Desktop Filter and Sort Menu */}
      <div className='filter-container2 col-11 mx-5 d-none d-lg-block'>
        <div className="filter-options">
          <h3>Filter By</h3>
          <div className="filter-input">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="filter-input">
            <input 
              type="date" 
              id="date-range-start" 
              name="date-range-start" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span>to</span>
            <input 
              type="date" 
              id="date-range-end" 
              name="date-range-end" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          
          <div className="filter-input">
            <select 
              id="priority" 
              name="priority" 
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="P1">1</option>
              <option value="P2">2</option>
              <option value="P3">3</option>
            </select>
          </div>
          <button className='btn btn-primary '  onClick={()=>setShowModal(true)}>
          Add New
        </button>
        </div>

        <div className='filter-options'>
          <h3>Sort By</h3>
          <div className="filter-input">
            <select 
              id="sortPriority" 
              name="sortPriority" 
              value={sortPriority}
              onChange={(e) => setSortPriority(e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="P1">1</option>
              <option value="P2">2</option>
              <option value="P3">3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="content ">
        <AllTasks 
          name={name}
          startDate={startDate}
          endDate={endDate}
          priorityFilter={priorityFilter}
          sortPriority={sortPriority}
        />
      </div>
      <TaskForm show={showModal} onHide={() => setShowModal(false)} />

    </div>
  );
};

export default DashBoard;
