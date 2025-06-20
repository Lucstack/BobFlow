// FILE: src/components/PlatformNode.jsx
// DESC: Rewritten to include specific class names for source and target handles.

import React, { useState, useRef, useEffect, useContext } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { MarketplaceContext } from '../contexts/MarketplaceContext.js';
import EditableField from './EditableField';

const PlatformNode = ({ data, selected, id }) => {
  const marketplaceCategories = useContext(MarketplaceContext);
  const { setNodes } = useReactFlow();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  if (!marketplaceCategories || !marketplaceCategories[data.platformType]) {
    return <div className="custom-node">Loading...</div>;
  }

  const platformOptionsList = marketplaceCategories[data.platformType]?.integrations || [];
  const currentPlatform = platformOptionsList.find(p => p.id === data.selectedPlatform) || platformOptionsList[0];

  if (!currentPlatform) {
    return ( <div className="custom-node"><p>No integrations available.</p></div> );
  }

  const handleSave = (field, newValue) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, data: { ...node.data, [field]: newValue } } : node))
    );
  };
  
  const handlePlatformChange = (platform) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              selectedPlatform: platform.id, label: platform.name, logoUrl: platform.logoUrl,
              usedFor: platform.usedFor, integrationDetails: platform.integrationDetails,
            },
          };
        }
        return node;
      })
    );
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isMarketplacePartner = currentPlatform?.isMarketplacePartner || false;

  return (
    <div className={`custom-node platform-node ${data.category} ${selected ? 'selected' : ''} ${isMarketplacePartner ? 'marketplace-partner' : ''}`}>
      {/* UPDATED: Added source-handle and target-handle classes */}
      <Handle type="source" position={Position.Top} id="top-source" className="handle source-handle" />
      <Handle type="target" position={Position.Top} id="top-target" className="handle target-handle" />
      <Handle type="source" position={Position.Right} id="right-source" className="handle source-handle" />
      <Handle type="target" position={Position.Right} id="right-target" className="handle target-handle" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="handle source-handle" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="handle target-handle" />
      <Handle type="source" position={Position.Left} id="left-source" className="handle source-handle" />
      <Handle type="target" position={Position.Left} id="left-target" className="handle target-handle" />

      {isMarketplacePartner && (
        <div className="marketplace-badge" title="HiBob Marketplace Partner">
          <span className="marketplace-text">Marketplace</span>
        </div>
      )}

      <div className="node-header platform-header">
        <div className="logo-container">
          {currentPlatform.logoUrl ? <img src={currentPlatform.logoUrl} alt={`${currentPlatform.name} logo`} className="node-logo" /> : <div className="logo-placeholder">{data.categoryLabel?.charAt(0) || 'P'}</div>}
        </div>
        <div className="platform-info">
          <div className="category-label">{data.categoryLabel}</div>
          <div className="platform-selector" ref={dropdownRef}>
            <button className="platform-button" onClick={() => setShowDropdown(!showDropdown)} title="Click to change platform">
              {currentPlatform.name || 'Select Platform'}
              <span className="dropdown-arrow">▼</span>
            </button>
            {showDropdown && (
              <div className="platform-dropdown">
                {platformOptionsList.map((platform) => (
                  <div key={platform.id} className={`platform-option ${platform.id === data.selectedPlatform ? 'selected' : ''}`} onClick={() => handlePlatformChange(platform)}>
                    <img src={platform.logoUrl} alt={platform.name} className="option-logo" />
                    <span className="option-label">{platform.name}</span>
                    {platform.isMarketplacePartner && (
                      <span className="marketplace-indicator" title="HiBob Marketplace Partner">✓</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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

export default PlatformNode;