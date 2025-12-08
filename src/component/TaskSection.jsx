import AssetContainer from "./AssetContainer";
import projectData from '../data/ProjectData.json';

const TaskSection = ({ task }) => {
  return (
    <div className="task-section">
      <div className="task-header-section">
        <div className="task-title-row">
          <h1 className="page-title">{projectData.title}</h1>
          <button className="btn-submit">Submit task</button>
        </div>
        <div className="task-description-box">
          <h2>{task.task_title}</h2>
          <p className="task-description">{task.task_description}</p>
        </div>
      </div>

      <div className="assets-grid">
        {task.assets.map((asset) => (
          <AssetContainer key={asset.asset_id} asset={asset} />
        ))}
      </div>
    </div>
  );
};export default TaskSection;