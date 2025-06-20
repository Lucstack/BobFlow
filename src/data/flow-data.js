// FILE: src/data/flow-data.js
// DESC: A simplified and robust set of initial nodes and edges.

export const initialNodes = [
  // The Central HiBob Node
  {
    id: 'hibob-platform',
    type: 'central',
    position: { x: 250, y: 150 },
    data: { label: 'HiBob', subtitle: 'Modern People Platform', tagline: 'The Single Source of Truth' },
  },

  // A single, working example of a platform node.
  {
    id: 'ats-node-1',
    type: 'platform',
    position: { x: -50, y: 125 },
    data: {
      platformType: 'ats',
      categoryLabel: 'ATS / Recruitment',
      selectedPlatform: 'greenhouse',
      category: 'ats',
      usedFor: 'Applicant tracking & recruiting.',
      integrationDetails: 'Sync new hires from Greenhouse to Bob.'
    }
  }
];

export const initialEdges = [
  { id: 'e1', source: 'ats-node-1', target: 'hibob-platform', type: 'smoothstep', label: 'New Hires' },
];

// The old `platformOptions` export that was here is now gone.