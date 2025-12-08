import { Icon } from "@iconify/react";
import { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">

          <Icon className="close-btn" onClick={() => setIsExpanded(!isExpanded)} icon="material-symbols:arrow-back" width="26" height="26" />
     
        {isExpanded && <h3 className="sidebar-title">Journey Board</h3>}
      </div>

      <div className="journey-board">
        <button className="journey-btn active">1</button>
      </div>

      {isExpanded && (
        <div className="sidebar-content">
          <div className="task-list">
            <h4 className="task-list-title">Explore the world of management</h4>
            <ul>
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar
