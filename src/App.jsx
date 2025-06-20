// FILE: src/App.jsx
// DESC: The main application component with final UI tweaks.

import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow';

import { initialNodes, initialEdges, platformOptions } from './data/flow-data';
import CentralNode from './components/CentralNode';
import CustomNode from './components/CustomNode';
import PlatformNode from './components/PlatformNode';

import './App.css';

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [diagramName, setDiagramName] = useState('Integration Diagram');
  
  const [isAddNodeOpen, setAddNodeOpen] = useState(false);
  const addNodeRef = useRef(null);

  const { project } = useReactFlow();

  const nodeTypes = useMemo(() => ({
    central: CentralNode,
    custom: CustomNode,
    platform: (props) => <PlatformNode {...props} platformOptions={platformOptions} />,
  }), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addNodeRef.current && !addNodeRef.current.contains(event.target)) {
        setAddNodeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addNode = useCallback((nodeType, data = {}) => {
    const position = project({ x: window.innerWidth / 2 - 140, y: window.innerHeight / 3 });

    let newNodeData = {};
    let category = 'tools';

    if (nodeType === 'platform') {
        const { platformType } = data;
        const defaultPlatform = platformOptions[platformType][0];
        category = platformType;
        newNodeData = {
            categoryLabel: `${defaultPlatform.label} / ${platformType.charAt(0).toUpperCase() + platformType.slice(1)}`,
            platformType: platformType,
            selectedPlatform: defaultPlatform.value,
            category: category,
            usedFor: defaultPlatform.usedFor,
            integrationDetails: defaultPlatform.integrationDetails, // UPDATED
        };
    } else {
        newNodeData = {
            label: 'New Custom Tool',
            category: 'tools',
            logoUrl: '',
            usedFor: 'Specify purpose...',
            integrationDetails: 'Define details...', // UPDATED
        };
    }

    const newNode = {
      id: `new-node-${Date.now()}`,
      type: nodeType,
      position,
      data: newNodeData,
    };

    setNodes((nds) => nds.concat(newNode));
    setAddNodeOpen(false);
  }, [setNodes, project]);

  const saveDiagram = useCallback(() => { const config = { name: diagramName, nodes, edges, timestamp: new Date().toISOString() }; const dataStr = JSON.stringify(config, null, 2); const dataBlob = new Blob([dataStr], { type: 'application/json' }); const url = URL.createObjectURL(dataBlob); const link = document.createElement('a'); link.href = url; const safeName = diagramName.replace(/[^a-z0-9]/gi, '_').toLowerCase(); link.download = `${safeName || 'diagram'}_${new Date().toISOString().split('T')[0]}.json`; document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url); }, [nodes, edges, diagramName]);
  const loadDiagram = useCallback((event) => { const file = event.target.files[0]; if (file) { const reader = new FileReader(); reader.onload = (e) => { try { const config = JSON.parse(e.target.result); setNodes(config.nodes || initialNodes); setEdges(config.edges || initialEdges); setDiagramName(config.name || 'Loaded Diagram'); } catch (error) { console.error("Error loading diagram:", error); alert('Error loading diagram: Invalid file format.'); } }; reader.readAsText(file); } }, [setNodes, setEdges]);
  const resetToTemplate = useCallback(() => { if (confirm('Reset to clean template? This will lose current changes.')) { setNodes(initialNodes); setEdges(initialEdges); setDiagramName('Integration Diagram'); } }, [setNodes, setEdges]);
  const onEdgeDoubleClick = useCallback((event, edge) => { event.stopPropagation(); const newLabel = prompt('Edit connection label:', edge.label || ''); if (newLabel !== null) { setEdges((eds) => eds.map((e) => (e.id === edge.id ? { ...e, label: newLabel } : e))); } }, [setEdges]);
  const onConnect = useCallback((params) => { const newEdge = { ...params, id: `${params.source}-${params.target}-${Date.now()}`, type: 'smoothstep', label: 'New Connection', markerEnd: { type: 'arrowclosed' } }; setEdges((eds) => addEdge(newEdge, eds)); }, [setEdges]);

  return (
    <div className="flow-wrapper">
      <div className="toolbar">
        <input type="text" value={diagramName} onChange={(e) => setDiagramName(e.target.value)} className="diagram-name-input" placeholder="Diagram name..."/>
        
        <div className="add-node-wrapper" ref={addNodeRef}>
            {/* UPDATED: Added emoji and fixed button class for consistent height */}
            <button onClick={() => setAddNodeOpen(!isAddNodeOpen)} className="toolbar-btn add-btn">
                <span>➕</span> Add Node
            </button>
            {isAddNodeOpen && (
                <div className="add-node-dropdown">
                    <button onClick={() => addNode('platform', { platformType: 'ats' })} className="dropdown-btn">ATS / Recruitment</button>
                    <button onClick={() => addNode('platform', { platformType: 'communication' })} className="dropdown-btn">Communication</button>
                    <button onClick={() => addNode('platform', { platformType: 'identity' })} className="dropdown-btn">Identity & SSO</button>
                    <button onClick={() => addNode('platform', { platformType: 'learning' })} className="dropdown-btn">Learning</button>
                    <button onClick={() => addNode('platform', { platformType: 'payroll' })} className="dropdown-btn">Payroll</button>
                    <button onClick={() => addNode('custom')} className="dropdown-btn">Custom Tool</button>
                </div>
            )}
        </div>

        <button onClick={saveDiagram} className="toolbar-btn save-btn">💾 Save</button>
        <label className="toolbar-btn load-btn">
            📁 Load
            <input type="file" accept=".json" onChange={loadDiagram} style={{ display: 'none' }}/>
        </label>
        <button onClick={resetToTemplate} className="toolbar-btn reset-btn">🔄 Reset</button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeDoubleClick={onEdgeDoubleClick}
        nodeTypes={nodeTypes}
        deleteKeyCode={['Backspace', 'Delete']}
        fitView
        className="react-flow-canvas"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        {/* REMOVED: The legend component is now gone */}
      </ReactFlow>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
}
