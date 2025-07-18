// FILE: src/App.jsx
// DESC: Updated to correctly center the view after resetting the diagram.

import React, {
  useCallback,
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';
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

import { initialNodes, initialEdges } from './data/flow-data.js';
import CentralNode from './components/CentralNode';
import CustomNode from './components/CustomNode';
import PlatformNode from './components/PlatformNode';
import { marketplaceCategories } from './data/marketplace-data.js';
import { MarketplaceContext } from './contexts/MarketplaceContext.js';
import { auth } from './firebase';
import Login from './Login';

import './App.css';

const nodeTypes = {
  central: CentralNode,
  custom: CustomNode,
  platform: PlatformNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [diagramName, setDiagramName] = useState('Integration Diagram');

  const [isAddNodeOpen, setAddNodeOpen] = useState(false);
  const addNodeRef = useRef(null);
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    const handleClickOutside = event => {
      if (addNodeRef.current && !addNodeRef.current.contains(event.target)) {
        setAddNodeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addNode = useCallback(
    (nodeType, data = {}) => {
      const position = reactFlowInstance.project({
        x: window.innerWidth / 2 - 140,
        y: window.innerHeight / 3,
      });
      let newNodeData = {};
      if (nodeType === 'platform') {
        const { platformType } = data;
        const categoryInfo = marketplaceCategories[platformType];
        if (
          !categoryInfo ||
          !categoryInfo.integrations ||
          categoryInfo.integrations.length === 0
        ) {
          setAddNodeOpen(false);
          return;
        }
        const defaultPlatform = categoryInfo.integrations[0];
        newNodeData = {
          categoryLabel: categoryInfo.displayName,
          platformType,
          selectedPlatform: defaultPlatform.id,
          category: platformType,
          usedFor: defaultPlatform.usedFor,
          integrationDetails: defaultPlatform.integrationDetails,
        };
      } else {
        newNodeData = {
          label: 'New Custom Tool',
          category: 'tools',
          logoUrl: '',
          usedFor: 'Specify purpose...',
          integrationDetails: 'Define details...',
        };
      }
      const newNode = {
        id: `new-node-${Date.now()}`,
        type: nodeType,
        position,
        data: newNodeData,
      };
      setNodes(nds => nds.concat(newNode));
      setAddNodeOpen(false);
    },
    [setNodes, reactFlowInstance]
  );

  const onConnect = useCallback(
    params => {
      const newEdge = {
        ...params,
        id: `edge-${params.source}-${params.target}-${Date.now()}`,
        type: 'smoothstep',
      };
      setEdges(eds => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  const isValidConnection = connection => true;

  const onEdgeDoubleClick = useCallback(
    (event, edge) => {
      const newLabel = prompt('Edit connection details:', edge.label || '');
      if (newLabel !== null) {
        setEdges(eds =>
          eds.map(e => (e.id === edge.id ? { ...e, label: newLabel } : e))
        );
      }
    },
    [setEdges]
  );

  const saveDiagram = useCallback(() => {
    const flow = {
      nodes: nodes,
      edges: edges,
      viewport: reactFlowInstance.getViewport(),
      name: diagramName,
    };
    const jsonString = JSON.stringify(flow, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${diagramName.replace(/\s+/g, '_') || 'diagram'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [nodes, edges, diagramName, reactFlowInstance]);

  const loadDiagram = useCallback(
    event => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          const flow = JSON.parse(e.target.result);
          if (flow) {
            const { x = 0, y = 0, zoom = 1 } = flow.viewport || {};
            setNodes(flow.nodes || []);
            setEdges(flow.edges || []);
            setDiagramName(flow.name || 'Untitled Diagram');
            reactFlowInstance.setViewport({ x, y, zoom });
          }
        };
        reader.readAsText(file);
        event.target.value = '';
      }
    },
    [setNodes, setEdges, setDiagramName, reactFlowInstance]
  );

  const resetToTemplate = useCallback(() => {
    if (
      window.confirm(
        'Are you sure you want to reset? Any unsaved changes will be lost.'
      )
    ) {
      setNodes(initialNodes);
      setEdges(initialEdges);
      setDiagramName('Integration Diagram');

      // UPDATED: This is the key change. We now call fitView.
      // We use a small timeout to ensure the nodes have been set in the state
      // before we try to fit the view to them.
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.1 }); // The padding adds a nice margin
      }, 0);
    }
  }, [setNodes, setEdges, setDiagramName, reactFlowInstance]);

  return (
    <div className="flow-wrapper">
      <div className="toolbar">
        <input
          type="text"
          value={diagramName}
          onChange={e => setDiagramName(e.target.value)}
          className="diagram-name-input"
          placeholder="Diagram name..."
        />
        <div className="add-node-wrapper" ref={addNodeRef}>
          <button
            onClick={() => setAddNodeOpen(!isAddNodeOpen)}
            className="toolbar-btn add-btn"
          >
            <span>➕</span> Add Node
          </button>
          {isAddNodeOpen && (
            <div className="add-node-dropdown">
              {Object.entries(marketplaceCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => addNode('platform', { platformType: key })}
                  className="dropdown-btn"
                  disabled={category.integrations.length === 0}
                >
                  {category.displayName}
                </button>
              ))}
              <button
                onClick={() => addNode('custom')}
                className="dropdown-btn"
              >
                Custom Tool
              </button>
            </div>
          )}
        </div>
        <button onClick={saveDiagram} className="toolbar-btn save-btn">
          💾 Save
        </button>
        <label className="toolbar-btn load-btn">
          📁 Load
          <input
            type="file"
            accept=".json"
            onChange={loadDiagram}
            style={{ display: 'none' }}
          />
        </label>
        <button onClick={resetToTemplate} className="toolbar-btn reset-btn">
          🔄 Reset
        </button>
      </div>

      <MarketplaceContext.Provider value={marketplaceCategories}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeDoubleClick={onEdgeDoubleClick}
          nodeTypes={nodeTypes}
          isValidConnection={isValidConnection}
          deleteKeyCode={['Backspace', 'Delete']}
          fitView // This fits the view on the initial load
          className="react-flow-canvas"
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </MarketplaceContext.Provider>
    </div>
  );
}

export default function AppWrapper() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
}
