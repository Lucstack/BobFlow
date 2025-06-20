// FILE: src/components/PlatformNode.jsx
// DESC: The configurable node, with updated labels.

import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

const PlatformNode = ({ data, selected, id, platformOptions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [tempValues, setTempValues] = useState({
    usedFor: data.usedFor,
    integrationDetails: data.integrationDetails, // UPDATED
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { setNodes } = useReactFlow();

  const currentPlatform = platformOptions[data.platformType]?.find(p => p.value === data.selectedPlatform) ||
                         platformOptions[data.platformType]?.[0];

  const isMarketplacePartner = currentPlatform?.isMarketplacePartner || false;
  
  const handlePlatformChange = (platform) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              selectedPlatform: platform.value,
              label: platform.label,
              logoUrl: platform.logoUrl,
              usedFor: platform.usedFor,
              integrationDetails: platform.integrationDetails, // UPDATED
            },
          };
        }
        return node;
      })
    );
    setShowDropdown(false);
  };
  
  const handleDoubleClick = (field) => {
    setIsEditing(true);
    setEditingField(field);
    setTempValues({
        usedFor: data.usedFor || currentPlatform?.usedFor,
        integrationDetails: data.integrationDetails || currentPlatform?.integrationDetails, // UPDATED
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
    const displayText = data[field] || currentPlatform?.[field];

    if (isEditing && editingField === field) {
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
        {displayText}
      </div>
    );
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

  return (
    <div className={`custom-node platform-node ${data.category} ${selected ? 'selected' : ''} ${isMarketplacePartner ? 'marketplace-partner' : ''}`}>
      <Handle type="target" position={Position.Left} id="left" className="handle" />
      <Handle type="source" position={Position.Right} id="right" className="handle" />
      <Handle type="target" position={Position.Top} id="top" className="handle" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="handle" />

      {isMarketplacePartner && (
        <div className="marketplace-badge" title="HiBob Marketplace Partner">
          <span className="marketplace-text">Marketplace</span>
        </div>
      )}

      <div className="node-header platform-header">
        <div className="logo-container">
          {currentPlatform?.logoUrl ? (
            <img src={currentPlatform.logoUrl} alt={`${currentPlatform.label} logo`} className="node-logo" />
          ) : (
            <div className="logo-placeholder">{data.categoryLabel?.charAt(0) || 'P'}</div>
          )}
        </div>
        <div className="platform-info">
          <div className="category-label">{data.categoryLabel}</div>
          <div className="platform-selector" ref={dropdownRef}>
            <button
              className="platform-button"
              onClick={() => setShowDropdown(!showDropdown)}
              title="Click to change platform"
            >
              {currentPlatform?.label || data.label || 'Select Platform'}
              <span className="dropdown-arrow">▼</span>
            </button>
            {showDropdown && (
              <div className="platform-dropdown">
                {platformOptions[data.platformType]?.map((platform) => (
                  <div
                    key={platform.value}
                    className={`platform-option ${platform.value === data.selectedPlatform ? 'selected' : ''} ${platform.isMarketplacePartner ? 'marketplace-option' : ''}`}
                    onClick={() => handlePlatformChange(platform)}
                  >
                    <img src={platform.logoUrl} alt={platform.label} className="option-logo" />
                    <span className="option-label">{platform.label}</span>
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

export default PlatformNode;
