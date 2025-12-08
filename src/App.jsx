import React, { useState } from 'react';
import './index.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import TaskSection from './component/TaskSection';
import projectData from './data/projectData.json';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          {projectData.tasks.map((task) => (
            <TaskSection key={task.task_id} task={task} />
          ))}
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default App;