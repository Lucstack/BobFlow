// FILE: src/components/CustomNode.jsx
// DESC: Rewritten to include specific class names for source and target handles.

import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import EditableField from './EditableField';

const CustomNode = ({ data, selected, id }) => {
  const { setNodes } = useReactFlow();

  const handleSave = (field, newValue) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, data: { ...node.data, [field]: newValue } } : node))
    );
  };

  return (
    <div className={`custom-node ${data.category} ${selected ? 'selected' : ''}`}>
      {/* UPDATED: Added source-handle and target-handle classes */}
      <Handle type="source" position={Position.Top} id="top-source" className="handle source-handle" />
      <Handle type="target" position={Position.Top} id="top-target" className="handle target-handle" />
      <Handle type="source" position={Position.Right} id="right-source" className="handle source-handle" />
      <Handle type="target" position={Position.Right} id="right-target" className="handle target-handle" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="handle source-handle" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="handle target-handle" />
      <Handle type="source" position={Position.Left} id="left-source" className="handle source-handle" />
      <Handle type="target" position={Position.Left} id="left-target" className="handle target-handle" />

      <div className="node-header">
        <div className="logo-container">
          {data.logoUrl ? <img src={data.logoUrl} alt={`${data.label} logo`} className="node-logo" /> : <div className="logo-placeholder">{data.label.charAt(0)}</div>}
        </div>
        <h3 className="node-title">
          <EditableField initialValue={data.label} onSave={(newValue) => handleSave('label', newValue)} className="editable-title"/>
        </h3>
      </div>
      <div className="info-box used-for">
        <div className="info-label">Used for:</div>
        <EditableField initialValue={data.usedFor} onSave={(newValue) => handleSave('usedFor', newValue)} fieldType="textarea"/>
      </div>
      <div className="info-box triggers">
        <div className="info-label">Integration details:</div>
        <EditableField initialValue={data.integrationDetails} onSave={(newValue) => handleSave('integrationDetails', newValue)} fieldType="textarea"/>
      </div>
    </div>
  );
};

export default CustomNode;