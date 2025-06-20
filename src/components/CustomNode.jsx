// FILE: src/components/CustomNode.jsx
// DESC: A standard custom node for fixed services, with updated labels.

import React, { useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const CustomNode = ({ data, selected, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [tempValues, setTempValues] = useState({
    label: data.label,
    usedFor: data.usedFor,
    integrationDetails: data.integrationDetails, // UPDATED
  });
  const { setNodes } = useReactFlow();

  const handleDoubleClick = (field) => {
    setIsEditing(true);
    setEditingField(field);
    setTempValues({ 
        label: data.label, 
        usedFor: data.usedFor, 
        integrationDetails: data.integrationDetails // UPDATED
    });
  };

  const handleSave = () => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, ...tempValues } };
        }
        return node;
      })
    );
    setIsEditing(false);
    setEditingField(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditingField(null);
    }
  };

  const renderEditableContent = (field) => {
    if (isEditing && editingField === field) {
      if (field === 'label') {
        return (
          <input
            type="text"
            value={tempValues.label}
            onChange={(e) => setTempValues(prev => ({ ...prev, label: e.target.value }))}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className="edit-input title-input"
            autoFocus
          />
        );
      }
      return (
        <textarea
          value={tempValues[field]}
          onChange={(e) => setTempValues(prev => ({ ...prev, [field]: e.target.value }))}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="edit-textarea"
          autoFocus
        />
      );
    }
    return (
      <div className="info-content editable" onDoubleClick={() => handleDoubleClick(field)} title="Double-click to edit">
        {data[field]}
      </div>
    );
  };
  
  return (
    <div className={`custom-node ${data.category} ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Left} id="left" className="handle" />
      <Handle type="source" position={Position.Right} id="right" className="handle" />
      <Handle type="target" position={Position.Top} id="top" className="handle" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="handle" />

      <div className="node-header">
        <div className="logo-container">
          {data.logoUrl ? (
            <img src={data.logoUrl} alt={`${data.label} logo`} className="node-logo" />
          ) : (
            <div className="logo-placeholder">{data.label.charAt(0)}</div>
          )}
        </div>
        {isEditing && editingField === 'label' ? (
          renderEditableContent('label')
        ) : (
          <h3 className="node-title editable" onDoubleClick={() => handleDoubleClick('label')} title="Double-click to edit">
            {data.label}
          </h3>
        )}
      </div>

      <div className="info-box used-for">
        <div className="info-label">Used for:</div>
        {renderEditableContent('usedFor')}
      </div>

      {/* UPDATED: Label changed from "Triggers" to "Integration details" */}
      <div className="info-box triggers">
        <div className="info-label">Integration details:</div>
        {renderEditableContent('integrationDetails')}
      </div>
    </div>
  );
};

export default CustomNode;
