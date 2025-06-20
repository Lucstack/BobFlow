// FILE: src/components/CentralNode.jsx
// DESC: Rewritten to include specific class names for source and target handles.

import React, { useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const CentralNode = ({ data, selected, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempLabel, setTempLabel] = useState(data.label);
  const { setNodes } = useReactFlow();

  const handleDoubleClick = () => { setIsEditing(true); };
  const handleSave = () => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, data: { ...node.data, label: tempLabel } } : node))
    );
    setIsEditing(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSave();
    else if (e.key === 'Escape') {
      setIsEditing(false);
      setTempLabel(data.label);
    }
  };

  return (
    <div className={`central-node hibob-central ${selected ? 'selected' : ''}`}>
      {/* UPDATED: Added source-handle and target-handle classes */}
      <Handle type="source" position={Position.Top} id="top-source" className="handle central-handle source-handle" />
      <Handle type="target" position={Position.Top} id="top-target" className="handle central-handle target-handle" />
      <Handle type="source" position={Position.Right} id="right-source" className="handle central-handle source-handle" />
      <Handle type="target" position={Position.Right} id="right-target" className="handle central-handle target-handle" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="handle central-handle source-handle" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="handle central-handle target-handle" />
      <Handle type="source" position={Position.Left} id="left-source" className="handle central-handle source-handle" />
      <Handle type="target" position={Position.Left} id="left-target" className="handle central-handle target-handle" />

      <div className="central-content">
        <div className="hibob-logo-container">
          <img src="https://yt3.googleusercontent.com/x41lFExybhdzqA-kMpmmTB5FmqabXt6JnynyS8WtCy4Mfu4m8iRQ6R6DyEzbxvTCMELn4XoO=s900-c-k-c0x00ffffff-no-rj" alt="HiBob Logo" className="hibob-logo"/>
        </div>
        {isEditing ? (
          <input
            type="text" value={tempLabel} onChange={(e) => setTempLabel(e.target.value)}
            onBlur={handleSave} onKeyDown={handleKeyPress}
            className="edit-input central-input" autoFocus
          />
        ) : (
          <h2 className="platform-name editable" onDoubleClick={handleDoubleClick} title="Double-click to edit">
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