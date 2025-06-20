// FILE: src/components/EditableField.jsx
// DESC: A reusable component for inline editing of text.

import React, { useState } from 'react';

const EditableField = ({ initialValue, onSave, fieldType = 'input', className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    onSave(value);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (fieldType === 'input' || !e.shiftKey)) {
      e.preventDefault();
      handleBlur();
    } else if (e.key === 'Escape') {
      setValue(initialValue);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (fieldType === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
          className="edit-textarea"
          autoFocus
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyPress}
        className="edit-input title-input"
        autoFocus
      />
    );
  }

  return (
    <div className={`info-content editable ${className}`} onDoubleClick={handleDoubleClick} title="Double-click to edit">
      {initialValue}
    </div>
  );
};

export default EditableField;