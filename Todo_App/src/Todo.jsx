import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0e0e0e;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Mono', monospace;
  }

  .app {
    width: 480px;
    max-width: 95vw;
    padding: 20px;
  }

  .header {
    margin-bottom: 40px;
  }

  .title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: #f0ebe1;
    line-height: 1;
    letter-spacing: -1px;
  }

  .title span {
    color: #e8c547;
  }

  .subtitle {
    color: #555;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 6px;
  }

  .input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 32px;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .input-row:focus-within {
    border-color: #e8c547;
  }

  .task-input {
    flex: 1;
    background: #161616;
    border: none;
    outline: none;
    padding: 14px 16px;
    color: #f0ebe1;
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
  }

  .task-input::placeholder {
    color: #3a3a3a;
  }

  .add-btn {
    background: #e8c547;
    border: none;
    padding: 14px 20px;
    color: #0e0e0e;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }

  .add-btn:hover {
    background: #f5d45e;
  }

  .add-btn:active {
    transform: scale(0.98);
  }

  .count {
    font-size: 0.65rem;
    color: #3a3a3a;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .count span {
    color: #e8c547;
  }

  .task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: #161616;
    border-left: 2px solid transparent;
    transition: all 0.2s;
    animation: slideIn 0.25s ease;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .task-item:hover {
    background: #1c1c1c;
    border-left-color: #e8c547;
  }

  .task-num {
    color: #333;
    font-size: 0.65rem;
    width: 20px;
    flex-shrink: 0;
  }

  .task-text {
    flex: 1;
    color: #c8c3b8;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .delete-btn {
    background: none;
    border: 1px solid #2a2a2a;
    color: #444;
    cursor: pointer;
    font-size: 0.7rem;
    padding: 4px 10px;
    font-family: 'DM Mono', monospace;
    letter-spacing: 1px;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .delete-btn:hover {
    border-color: #c0392b;
    color: #c0392b;
    background: rgba(192, 57, 43, 0.08);
  }

  .empty {
    text-align: center;
    padding: 40px 0;
    color: #2a2a2a;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([...tasks, { id: Date.now(), text: trimmed }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <h1 className="title">
            DO<span>.</span>
          </h1>
          <p className="subtitle">your daily task list</p>
        </div>

        <div className="input-row">
          <input
            className="task-input"
            placeholder="what needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        {tasks.length > 0 && (
          <p className="count">
            <span>{tasks.length}</span> task{tasks.length !== 1 ? "s" : ""}
          </p>
        )}

        <ul className="task-list">
          {tasks.length === 0 && (
            <div className="empty">no tasks yet</div>
          )}
          {tasks.map((task, i) => (
            <li key={task.id} className="task-item">
              <span className="task-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="task-text">{task.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                del
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
