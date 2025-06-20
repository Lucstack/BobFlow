// FILE: src/components/CentralNode.jsx
// DESC: The main HiBob node, now with an editable title.

import React, { useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const CentralNode = ({ data, selected, id }) => {
  // NEW: State to manage when the node's title is being edited
  const [isEditing, setIsEditing] = useState(false);
  // NEW: State to hold the temporary value of the title while editing
  const [tempLabel, setTempLabel] = useState(data.label);
  // NEW: Hook to get access to the React Flow instance for updating nodes
  const { setNodes } = useReactFlow();

  // NEW: Enable editing mode on double-click
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // NEW: Save the new label to the node's data
  const handleSave = () => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          // Update the data for the current node
          return { ...node, data: { ...node.data, label: tempLabel } };
        }
        return node;
      })
    );
    setIsEditing(false); // Disable editing mode
  };

  // NEW: Handle keyboard events for saving or canceling edits
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave(); // Save on Enter
    } else if (e.key === 'Escape') {
      setIsEditing(false); // Cancel on Escape
      setTempLabel(data.label); // Revert to original label
    }
  };

  return (
    <div className={`central-node hibob-central ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Left} id="left" className="handle central-handle" />
      <Handle type="source" position={Position.Right} id="right" className="handle central-handle" />
      <Handle type="target" position={Position.Top} id="top" className="handle central-handle" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="handle central-handle" />

      <div className="central-content">
        <div className="hibob-logo-container">
          <img
            src="https://yt3.googleusercontent.com/x41lFExybhdzqA-kMpmmTB5FmqabXt6JnynyS8WtCy4Mfu4m8iRQ6R6DyEzbxvTCMELn4XoO=s900-c-k-c0x00ffffff-no-rj"
            alt="HiBob Logo"
            className="hibob-logo"
          />
        </div>
        {/* UPDATED: Conditionally render an input field or the title */}
        {isEditing ? (
          <input
            type="text"
            value={tempLabel}
            onChange={(e) => setTempLabel(e.target.value)}
            onBlur={handleSave} // Save when focus is lost
            onKeyDown={handleKeyPress}
            className="edit-input central-input"
            autoFocus // Automatically focus the input field
          />
        ) : (
          <h2
            className="platform-name editable"
            onDoubleClick={handleDoubleClick}
            title="Double-click to edit"
          >
            {data.label}
          </h2>
        )}
        <div className="platform-subtitle">{data.subtitle}</div>
        <div className="platform-tagline">{data.tagline}</div>
      </div>
    </div>
  );
};

export default CentralNode;
