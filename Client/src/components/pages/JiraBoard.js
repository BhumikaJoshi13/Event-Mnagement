import React from "react";
import { Search, Plus } from "lucide-react";
import "./JiraBoard.css";

const JiraBoard = () => {
  // Mock data for the board
  const columns = [
    {
      id: "new",
      title: "New",
      tasks: [
        {
          id: 467,
          title: "Other Miscellaneous Tasks",
          assignee: "VM",
          state: "New",
          progress: "0/3",
        },
        {
          id: 286,
          title: "Edit Table - Row deletion is not working",
          assignee: "DR",
          state: "New",
          progress: "",
        },
        { id: 283, title: "Include Title in JSON", state: "New", progress: "" },
        {
          id: 159,
          title: "Functional Testing of C3 Data Studio compare with Rule Book",
          assignee: "PN",
          state: "New",
          progress: "",
        },
      ],
    },
    {
      id: "active",
      title: "Active",
      tasks: [
        {
          id: 336,
          title: "UI Optimizations",
          assignee: "DR",
          state: "Active",
          progress: "0/1",
        },
        {
          id: 356,
          title: "Approach finalization for Large file upload",
          assignee: "CS",
          state: "Active",
          progress: "1/2",
        },
        {
          id: 357,
          title: "BE | Multiuser & concurrency issue",
          assignee: "PN",
          state: "Active",
          progress: "1/1",
        },
      ],
    },
    {
      id: "closed",
      title: "Closed",
      tasks: [
        {
          id: 411,
          title: "FE | API Integration for Granite",
          assignee: "CS",
          state: "Closed",
          progress: "",
        },
        {
          id: 461,
          title: "FE | LLM list API integration",
          assignee: "CS",
          state: "Closed",
          progress: "",
        },
        {
          id: 474,
          title: "FE | View Original File on data injection",
          assignee: "DR",
          state: "Closed",
          progress: "",
        },
        {
          id: 381,
          title: "FE | API integration for RAFT",
          assignee: "CS",
          state: "Closed",
          progress: "",
        },
      ],
    },
  ];

  return (
    <div className="jira-board">
      <div className="board-header">
        <button className="new-item-btn">
          <Plus size={16} />
          New item
        </button>
        <div className="search-container">
          <Search size={16} />
        </div>
      </div>
      <div className="board-columns">
        {columns.map((column) => (
          <div key={column.id} className="board-column">
            <h2 className="column-title">{column.title}</h2>
            {column.tasks.map((task) => (
              <div
                key={task.id}
                className={task-card ${task.state.toLowerCase()}}
              >
                <div className="task-header">
                  <span className="task-id">{task.id}</span>
                  <span className="task-title">{task.title}</span>
                </div>
                {task.assignee && (
                  <div className="task-assignee">
                    <span className="avatar">{task.assignee}</span>
                  </div>
                )}
                <div className="task-footer">
                  <span className="task-state">{task.state}</span>
                  {task.progress && (
                    <span className="task-progress">{task.progress}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JiraBoard