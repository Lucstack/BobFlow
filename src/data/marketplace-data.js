// FILE: src/data/marketplace-data.js
// DESC: Updated to include a more detailed and structured format for integration details.

export const marketplaceCategories = {
  // Category: ATS & Recruitment
  ats: {
    displayName: "ATS / Recruitment",
    integrations: [
      { 
        id: 'greenhouse', 
        name: 'Greenhouse', 
        logoUrl: 'https://logo.clearbit.com/greenhouse.io', 
        isMarketplacePartner: true,
        usedFor: 'Applicant tracking & recruiting.',
        integrationDetails: 'Bob built | Two-way\nSync: On Hire & manual sync\nData: Open positions & new hires'
      },
      { 
        id: 'lever', 
        name: 'Lever', 
        logoUrl: 'https://logo.clearbit.com/lever.co', 
        isMarketplacePartner: true,
        usedFor: 'Recruiting software for talent lifecycle.',
        integrationDetails: 'Bob built | Two-way\nSync: On Hire\nData: New hires & candidate data'
      },
    ]
  },

  // Category: Communication
  communication: {
    displayName: "Communication",
    integrations: [
      { 
        id: 'slack', 
        name: 'Slack', 
        logoUrl: 'https://logo.clearbit.com/slack.com', 
        isMarketplacePartner: true,
        usedFor: 'Team messaging & notifications.',
        integrationDetails: 'Bob built | Two-way\nSync: Real time\nData: Shoutouts, notifications, time off requests'
      },
      { 
        id: 'msteams', 
        name: 'Microsoft Teams', 
        logoUrl: 'https://logo.clearbit.com/microsoft.com', 
        isMarketplacePartner: true,
        usedFor: 'Collaboration and team messaging.',
        integrationDetails: 'Bob built | Two-way\nSync: Real time\nData: Notifications, updates, & time off alerts'
      },
    ]
  },

  // Category: Identity & SSO
  identity: {
    displayName: "Identity & SSO",
    integrations: [
      { 
        id: 'azure-ad', 
        name: 'Microsoft Entra ID', 
        logoUrl: 'https://logo.clearbit.com/microsoft.com', 
        isMarketplacePartner: true,
        usedFor: 'Identity and access management.',
        integrationDetails: 'Bob built | One-way from Bob\nSync: Real time on events\nData: Joiners, movers, leavers'
      },
      { 
        id: 'okta', 
        name: 'Okta', 
        logoUrl: 'https://logo.clearbit.com/okta.com', 
        isMarketplacePartner: true,
        usedFor: 'Identity and access management.',
        integrationDetails: 'Partner built | One-way from Bob\nSync: Real time\nData: Employee data for provisioning'
      },
    ]
  },
  
  // Category: Payroll
  payroll: {
    displayName: "Payroll",
    integrations: [
      {
        id: 'deel',
        name: 'Deel',
        logoUrl: 'https://logo.clearbit.com/deel.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll and compliance.',
        integrationDetails: 'Partner built | One-way from Bob\nSync: On pay cycle\nData: Employee data, time off, & compensation'
      },
      {
        id: 'adp',
        name: 'ADP',
        logoUrl: 'https://logo.clearbit.com/adp.com',
        isMarketplacePartner: false,
        usedFor: 'Payroll and HR services.',
        integrationDetails: 'Partner built | One-way from Bob\nSync: Scheduled\nData: Payroll changes & employee updates'
      }
    ]
  },

  // Category: Learning
  learning: {
    displayName: "Learning",
    integrations: [
      {
        id: 'lessonly',
        name: 'Lessonly',
        logoUrl: 'https://logo.clearbit.com/lessonly.com',
        isMarketplacePartner: true,
        usedFor: 'Team training & learning management.',
        integrationDetails: 'Partner built | One-way from Bob\nSync: Real time\nData: Employee data for course assignment'
      },
      {
        id: '360learning',
        name: '360Learning',
        logoUrl: 'https://logo.clearbit.com/360learning.com',
        isMarketplacePartner: true,
        usedFor: 'Collaborative learning platform.',
        integrationDetails: 'Partner built | One-way from Bob\nSync: Scheduled daily\nData: Employee data for provisioning & groups'
      }
    ]
  },
};