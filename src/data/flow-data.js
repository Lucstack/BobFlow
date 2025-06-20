// FILE: src/data/flow-data.js
// DESC: CORRECTED - Manually built from the user's JSON to create the exact reset layout.

export const initialNodes = [
  {
    id: "hibob-platform",
    type: "central",
    position: { x: 450, y: 250 },
    data: {
      label: "HiBob",
      subtitle: "Modern People Platform",
      tagline: "The Single Source of Truth",
    },
  },
  {
    id: "ats-greenhouse",
    type: "platform",
    position: { x: -27.42, y: 248.90 },
    data: {
      categoryLabel: "ATS / Recruitment",
      platformType: "ats",
      selectedPlatform: "greenhouse",
      category: "ats",
      usedFor: "Applicant tracking & recruiting.",
      integrationDetails:
        "Bob built | Two-way\nSync: On Hire & manual sync\nData: Open positions & new hires",
    },
  },
  {
    id: "comm-slack",
    type: "platform",
    position: { x: 651.11, y: -123.29 },
    data: {
      categoryLabel: "Communication",
      platformType: "communication",
      selectedPlatform: "slack",
      category: "communication",
      usedFor: "Team messaging & notifications.",
      integrationDetails:
        "Bob built | Two-way\nSync: Real time\nData: Shoutouts, notifications, time off requests",
    },
  },
  {
    id: "id-okta",
    type: "platform",
    position: { x: 1000.61, y: 153.59 },
    data: {
      categoryLabel: "Identity & SSO",
      platformType: "identity",
      selectedPlatform: "okta",
      category: "identity",
      usedFor: "Identity and access management.",
      integrationDetails:
        "Partner built | One-way from Bob\nSync: Real time\nData: Employee data for provisioning",
    },
  },
  {
    id: "payroll-deel",
    type: "platform",
    position: { x: 605.30, y: 650.52 },
    data: {
      categoryLabel: "Payroll",
      platformType: "payroll",
      selectedPlatform: "deel",
      category: "payroll",
      usedFor: "Global payroll and compliance.",
      integrationDetails:
        "Partner built | One-way from Bob\nSync: On pay cycle\nData: Employee data, time off, & compensation",
    },
  },
  {
    id: "custom-bi-tool",
    type: "custom",
    position: { x: 1000.61, y: 420.22 },
    data: {
      label: "BI Tool (Looker/PowerBI)",
      category: "tools",
      logoUrl: "https://logo.clearbit.com/looker.com",
      usedFor: "Data analysis & reporting.",
      integrationDetails:
        "Custom built | One-way from Bob\nSync: Via Data Warehouse\nData: All HR data for analysis",
    },
  },
];

export const initialEdges = [
  {
    id: "e-payroll-hibob",
    source: "payroll-deel",
    sourceHandle: "top-source",
    target: "hibob-platform",
    targetHandle: "bottom-target",
    type: "smoothstep",
    label: "> Payment details",
  },
  {
    id: "e-ats-hibob",
    source: "ats-greenhouse",
    sourceHandle: "right-source",
    target: "hibob-platform",
    targetHandle: "left-target",
    type: "smoothstep",
    label: "<> New Hires & Positions",
  },
  {
    id: "e-hibob-okta",
    source: "hibob-platform",
    sourceHandle: "right-source",
    target: "id-okta",
    targetHandle: "left-target",
    type: "smoothstep",
    label: "> User provisioning (jomole)",
  },
  {
    id: "e-hibob-bi",
    source: "hibob-platform",
    sourceHandle: "right-source",
    target: "custom-bi-tool",
    targetHandle: "left-target",
    type: "smoothstep",
    label: "> HR data for reports",
  },
  {
    id: "e-hibob-slack",
    source: "hibob-platform",
    sourceHandle: "top-source",
    target: "comm-slack",
    targetHandle: "bottom-target",
    type: "smoothstep",
    label: "<> Alerts & Approvals",
  },
];
