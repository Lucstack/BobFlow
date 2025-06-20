// FILE: src/data/flow-data.js
// DESC: Contains all static data, with the "triggers" field renamed.

export const platformOptions = {
  ats: [
    { 
      value: 'greenhouse', 
      label: 'Greenhouse', 
      logoUrl: 'https://logo.clearbit.com/greenhouse.io', 
      isMarketplacePartner: true,
      usedFor: 'Applicant tracking & recruiting',
      integrationDetails: '2 way integration. Get positions and push new hires'
    },
  ],
  communication: [
    { 
      value: 'slack', 
      label: 'Slack', 
      logoUrl: 'https://logo.clearbit.com/slack.com', 
      isMarketplacePartner: true,
      usedFor: 'Team messaging & notifications',
      integrationDetails: 'New hire welcome, Time off alerts'
    },
  ],
  identity: [
    { 
      value: 'azure-ad', 
      label: 'Microsoft Entra ID', 
      logoUrl: 'https://logo.clearbit.com/microsoft.com', 
      isMarketplacePartner: true,
      usedFor: 'Identity and access management',
      integrationDetails: 'Joiners, movers, leavers'
    },
  ],
  calendar: [
    { 
      value: 'outlook', 
      label: 'Microsoft Outlook', 
      logoUrl: 'https://logo.clearbit.com/microsoft.com', 
      isMarketplacePartner: true,
      usedFor: 'Email & Calendar & teams',
      integrationDetails: 'New meeting scheduled'
    },
  ],
  tools: [
      {
        value: 'cultureamp',
        label: 'Culture Amp',
        logoUrl: 'https://logo.clearbit.com/cultureamp.com',
        isMarketplacePartner: true,
        usedFor: 'Employee engagement surveys',
        integrationDetails: 'Users with any demographics from Bob\nManual & daily sync'
      },
      {
        value: 'fivetran',
        label: 'Fivetran',
        logoUrl: 'https://logo.clearbit.com/fivetran.com',
        isMarketplacePartner: true,
        usedFor: 'Real-time data replication',
        integrationDetails: 'https://www.fivetran.com/connectors/hibob'
      }
  ]
};

export const initialNodes = [
    {
      "id": "hibob-platform", "type": "central", "position": { "x": 232, "y": 158 },
      "data": { "label": "HiBob", "subtitle": "Modern People Platform", "tagline": "The Single Source of Truth" }
    },
    {
      "id": "ats-system", "type": "platform", "position": { "x": -185, "y": 161 },
      "data": { "categoryLabel": "ATS / Recruitment", "platformType": "ats", "selectedPlatform": "greenhouse", "category": "recruitment", "usedFor": "Applicant tracking & recruiting", "integrationDetails": "2 way integration. Get positions and push new hires" }
    },
    {
      "id": "communication-platform", "type": "platform", "position": { "x": 411, "y": -196 },
      "data": { "categoryLabel": "Communication", "platformType": "communication", "selectedPlatform": "slack", "category": "communication", "usedFor": "Team messaging & notifications", "integrationDetails": "New hire welcome, Time off alerts" }
    },
    {
      "id": "identity-provider", "type": "platform", "position": { "x": 680, "y": 156 },
      "data": { "categoryLabel": "Identity & SSO", "platformType": "identity", "selectedPlatform": "azure-ad", "category": "identity", "usedFor": "Identity and access management", "integrationDetails": "Joiners, movers, leavers" }
    },
    {
      "id": "calendar-system", "type": "platform", "position": { "x": 704, "y": -92 },
      "data": { "categoryLabel": "Calendar & Scheduling", "platformType": "calendar", "selectedPlatform": "outlook", "category": "calendar", "usedFor": "Email & Calendar & teams", "integrationDetails": "New meeting scheduled" }
    },
    {
      "id": "expense-management", "type": "custom", "position": { "x": -192, "y": -131 },
      "data": { "label": "Click Travel", "category": "tools", "logoUrl": "https://logo.clearbit.com/travelperk.com", "usedFor": "Expense reporting, Receipt management", "integrationDetails": "Create user from Bob.\nBring payment line into Bob." }
    },
    {
      "id": "survey-platform", "type": "platform", "position": { "x": 109, "y": -198 },
      "data": { "categoryLabel": "Survey & Engagement", "platformType": "tools", "selectedPlatform": "cultureamp", "category": "tools", "usedFor": "Employee engagement surveys", "integrationDetails": "Users with any demographics from Bob\nManual & daily sync" }
    },
    {
      "id": "new-node-1750233622265", "type": "platform", "position": { "x": 502, "y": 428 },
      "data": { "categoryLabel": "Data Replication", "platformType": "tools", "selectedPlatform": "fivetran", "category": "tools", "usedFor": "Real-time data replication", "integrationDetails": "Fivetran connector for HiBob replicates data." }
    },
    {
      "id": "new-node-1750233703445", "type": "custom", "position": { "x": 891, "y": 441 },
      "data": { "label": "BigQuery", "category": "tools", "logoUrl": "https://logo.clearbit.com/google.com", "usedFor": "Data warehouse / data lifecycle", "integrationDetails": "Serves as the central data warehouse for replicated data." }
    },
    {
      "id": "new-node-1750233739510", "type": "custom", "position": { "x": 1273, "y": 442 },
      "data": { "label": "Looker / Power BI", "category": "tools", "logoUrl": "https://logo.clearbit.com/looker.com", "usedFor": "Data analysis", "integrationDetails": "Connects to BigQuery to build dashboards and reports." }
    }
];

export const initialEdges = [
    { "id": "e-hibob-identity", "source": "hibob-platform", "target": "identity-provider", "type": "smoothstep", "label": "User Provisioning" },
    { "id": "e-ats-hibob", "source": "ats-system", "target": "hibob-platform", "type": "smoothstep", "label": "Positions and new hires" },
    { "source": "hibob-platform", "target": "new-node-1750233622265", "id": "e-hibob-fivetran", "type": "smoothstep", "label": "HR Data" },
    { "source": "new-node-1750233622265", "target": "new-node-1750233703445", "id": "e-fivetran-bigquery", "type": "smoothstep", "label": "Replicated Data" },
    { "source": "new-node-1750233703445", "target": "new-node-1750233739510", "id": "e-bigquery-looker", "type": "smoothstep", "label": "Data Source" },
    { "source": "expense-management", "target": "hibob-platform", "id": "e-clicktravel-hibob", "type": "smoothstep", "label": "Users and payment lines" },
    { "source": "survey-platform", "target": "hibob-platform", "id": "e-cultureamp-hibob", "type": "smoothstep", "label": "Users" },
    { "source": "communication-platform", "target": "hibob-platform", "id": "e-comm-hibob", "type": "smoothstep", "label": "Time off notifications" },
    { "source": "calendar-system", "target": "hibob-platform", "id": "e-calendar-hibob", "type": "smoothstep", "label": "Meeting Data" }
];
