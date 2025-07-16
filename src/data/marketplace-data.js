// FILE: src/data/marketplace-data.js
// DESC: Updated to include a more detailed and structured format for integration details.

export const marketplaceCategories = {
  // Category: ATS & Recruitment
  ats: {
    displayName: 'ATS / Recruitment',
    integrations: [
      {
        id: 'greenhouse',
        name: 'Greenhouze',
        logoUrl: 'https://logo.clearbit.com/greenhouse.io',
        isMarketplacePartner: true,
        usedFor: 'Applicant tracking & recruiting.',
        integrationDetails:
          'Bob built | Two-way\nTrigger: On Hire & manual sync\nData: New hire data, open positions',
      },
      {
        id: 'teamtailor',
        name: 'TeamTailor',
        logoUrl: 'https://logo.clearbit.com/teamtailor.com',
        isMarketplacePartner: true,
        usedFor: 'Modern, easy-to-use recruitment software.',
        integrationDetails:
          'Bob built | One-way\nTrigger: When candidate is hired\nData: New hire data from candidate profile',
      },
      {
        id: 'lever',
        name: 'Lever',
        logoUrl: 'https://logo.clearbit.com/lever.co',
        isMarketplacePartner: true,
        usedFor: 'Recruiting software for talent lifecycle.',
        integrationDetails:
          'Bob built | Two-way\nTrigger: On Hire\nData: New hire data, candidate data',
      },
      {
        id: 'ashby',
        name: 'Ashby',
        logoUrl: 'https://logo.clearbit.com/ashbyhq.com',
        isMarketplacePartner: true,
        usedFor: 'Modern ATS... easy to setup and customizable as you grow.',
        integrationDetails:
          'Partner built | One-way\nTrigger: On Hire\nData: New hire data',
      },
      {
        id: 'breezyhr',
        name: 'BreezyHR',
        logoUrl: 'https://logo.clearbit.com/breezy.hr',
        isMarketplacePartner: true,
        usedFor: 'Modern recruiting tool to simplify your hiring process.',
        integrationDetails:
          'Partner built | One-way\nTrigger: When candidate is hired\nData: New hire data from candidate info',
      },
      {
        id: 'jobvite',
        name: 'Jobvite',
        logoUrl: 'https://logo.clearbit.com/jobvite.com',
        isMarketplacePartner: true,
        usedFor: 'Comprehensive, configurable talent acquisition suite.',
        integrationDetails:
          'Bob built | One-way\nTrigger: When a candidate is hired\nData: Candidate fields matched to employee fields',
      },
      {
        id: 'pinpoint',
        name: 'Pinpoint',
        logoUrl: 'https://logo.clearbit.com/pinpointhq.com',
        isMarketplacePartner: true,
        usedFor: 'Attract, hire, and onboard top talent.',
        integrationDetails:
          'Partner built | One-way\nTrigger: When a candidate is hired\nData: New hire data including personal info and position details',
      },
      {
        id: 'smartrecruiters',
        name: 'Smartrecruiters',
        logoUrl: 'https://logo.clearbit.com/smartrecruiters.com',
        isMarketplacePartner: true,
        usedFor:
          'Talent Acquisition Suite – The best recruiting software powering hiring success.',
        integrationDetails:
          'Bob built | One-way\nTrigger: When a candidate is hired\nData: New hire data from candidate information',
      },
      {
        id: 'workable',
        name: 'Workable',
        logoUrl: 'https://logo.clearbit.com/workable.com',
        isMarketplacePartner: true,
        usedFor: "World's leading hiring platform.",
        integrationDetails:
          'Bob built | One-way\nTrigger: When a candidate is hired\nData: New hire created from candidate info',
      },
      {
        id: 'jazzhr',
        name: 'JazzHR',
        logoUrl: 'https://logo.clearbit.com/jazzhr.com',
        isMarketplacePartner: true,
        usedFor: 'Applicant tracking system for SMBs.',
        integrationDetails:
          'Partner built | One-way\nTrigger: When a candidate is hired\nData: New hire data from candidate profile',
      },
    ],
  },

  // Category: Communication
  communication: {
    displayName: 'Communication',
    integrations: [
      {
        id: 'slack',
        name: 'Slack',
        logoUrl: 'https://logo.clearbit.com/slack.com',
        isMarketplacePartner: true,
        usedFor: 'Team messaging & notifications.',
        integrationDetails:
          'Bob built | Two-way\nSync: Real time\nData: Shoutouts, notifications, time off requests',
      },
      {
        id: 'msteams',
        name: 'Microsoft Teams',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
        isMarketplacePartner: true,
        usedFor: 'Collaboration and team messaging.',
        integrationDetails:
          'Bob built | Two-way\nSync: Real time\nData: Notifications, updates, & time off alerts',
      },
      {
        id: 'outlookcalendar',
        name: 'Outlook Calendar Teams',
        logoUrl:
          'https://store-images.s-microsoft.com/image/apps.30616.14374512070697751.fcbc53c2-4843-4c59-aa6a-206ec85835b5.915cc067-8e3d-468b-bc6b-37c7c8d35d93',
        isMarketplacePartner: true,
        usedFor: 'Calendar.',
        integrationDetails:
          'Bob built | Two-way\nSync: Real time\nData: Time off, Tasklist events, recurring 121 and Hiring interviews',
      },
    ],
  },

  // Category: Identity & SSO
  identity: {
    displayName: 'Identity & SSO',
    integrations: [
      {
        id: 'ad-onprem',
        name: 'Active Directory (On-Prem)',
        logoUrl:
          'https://assets.graffletopia.com/production/canvases/1485/4266/1439747576/original.png?1439747576',
        isMarketplacePartner: true,
        usedFor: 'Manage on-premise users and permissions.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Real-time on employee events\nData: New hires, terminations, and profile updates for user provisioning',
      },
      {
        id: 'google-workspace',
        name: 'Google Workspace',
        logoUrl: 'https://logo.clearbit.com/workspace.google.com',
        isMarketplacePartner: true,
        usedFor: 'Manage users across Google services.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Upon new hire or manual sync\nData: New hire name and email for account creation',
      },
      {
        id: 'azure-ad',
        name: 'Microsoft Entra ID',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Microsoft_Entra_ID_color_icon.svg/1200px-Microsoft_Entra_ID_color_icon.svg.png',
        isMarketplacePartner: true,
        usedFor: 'Cloud identity and access management.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Real-time on employee events\nData: New hires, terminations, and profile updates',
      },
      {
        id: 'okta',
        name: 'Okta',
        logoUrl: 'https://logo.clearbit.com/okta.com',
        isMarketplacePartner: true,
        usedFor: 'Identity and access management.',
        integrationDetails:
          'Partner built | One-way from Bob (API & SCIM available)\nTrigger: Real-time on employee events\nData: Employee data for user provisioning and updates',
      },
      {
        id: 'onelogin',
        name: 'OneLogin',
        logoUrl: 'https://logo.clearbit.com/onelogin.com',
        isMarketplacePartner: true,
        usedFor: 'Secure, one-click access for employees.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Scheduled daily sync\nData: Employee data and profile updates for provisioning',
      },
      {
        id: 'ping-identity',
        name: 'Ping Identity',
        logoUrl: 'https://logo.clearbit.com/pingidentity.com',
        isMarketplacePartner: true,
        usedFor: 'Enterprise identity and access management.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Real-time on employee events\nData: Employee data for user provisioning',
      },
    ],
  },

  // Category: Payroll
  payroll: {
    displayName: 'Payroll',
    integrations: [
      {
        id: 'adp',
        name: 'ADP',
        logoUrl: 'https://logo.clearbit.com/adp.com',
        isMarketplacePartner: false,
        usedFor: 'Payroll and HR services.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Scheduled sync\nData: Payroll changes & employee updates',
      },
      {
        id: 'blue-marble',
        name: 'Blue Marble',
        logoUrl: 'https://logo.clearbit.com/bluemarblepayroll.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll and HR services.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On pay cycle\nData: Employee data for payroll processing',
      },
      {
        id: 'cloudpay',
        name: 'CloudPay',
        logoUrl: 'https://logo.clearbit.com/cloudpay.net',
        isMarketplacePartner: true,
        usedFor: 'Global payroll and payments.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time and scheduled syncs\nData: Employee data, time off, and compensation',
      },
      {
        id: 'deel',
        name: 'Deel',
        logoUrl: 'https://logo.clearbit.com/deel.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll and compliance.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On pay cycle\nData: Employee data, time off, & compensation',
      },
      {
        id: 'ii-pay',
        name: 'iiPay',
        logoUrl: 'https://logo.clearbit.com/iipay.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll solutions.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Scheduled sync\nData: Employee data for payroll processing',
      },
      {
        id: 'payfit',
        name: 'Payfit',
        logoUrl: 'https://logo.clearbit.com/payfit.com',
        isMarketplacePartner: true,
        usedFor: 'Payroll and HR software for SMEs.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time sync\nData: Employee data, time off, and salary information',
      },
      {
        id: 'payslip',
        name: 'Payslip',
        logoUrl: 'https://logo.clearbit.com/payslip.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll management platform.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Scheduled sync\nData: Employee data for payroll processing',
      },
      {
        id: 'brynq',
        name: 'Brynq',
        logoUrl: 'https://logo.clearbit.com/brynq.com',
        isMarketplacePartner: true,
        usedFor: 'International HRIS to Payroll middelware.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time sync\nData: Employee data, salary, payslips',
      },
      {
        id: 'remote',
        name: 'Remote',
        logoUrl: 'https://logo.clearbit.com/remote.com',
        isMarketplacePartner: true,
        usedFor: 'Global HR, payroll, and compliance platform.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On pay cycle\nData: Employee data for payroll and compliance',
      },
      {
        id: 'papaya-global',
        name: 'Papaya Global',
        logoUrl: 'https://logo.clearbit.com/papayaglobal.com',
        isMarketplacePartner: true,
        usedFor: 'Global payroll and workforce management.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Scheduled sync\nData: Employee data, compensation, and time off',
      },
    ],
  },

  // Category: Learning
  learning: {
    displayName: 'Learning',
    integrations: [
      {
        id: 'lessonly',
        name: 'Lessonly',
        logoUrl: 'https://logo.clearbit.com/lessonly.com',
        isMarketplacePartner: true,
        usedFor: 'Team training & learning management.',
        integrationDetails:
          'Partner built | One-way from Bob\nSync: Real time\nData: Employee data for course assignment',
      },
      {
        id: '360learning',
        name: '360Learning',
        logoUrl: 'https://logo.clearbit.com/360learning.com',
        isMarketplacePartner: true,
        usedFor: 'Collaborative learning platform.',
        integrationDetails:
          'Partner built | One-way from Bob\nSync: Scheduled daily\nData: Employee data for provisioning & groups',
      },
    ],
  },

  // Category: Automation & Unified APIs
  'automation-and-unified-apis': {
    displayName: 'Automation & Unified APIs',
    integrations: [
      {
        id: 'amazon-s3',
        name: 'Amazon S3',
        logoUrl: 'https://logo.clearbit.com/amazon.com',
        isMarketplacePartner: true,
        usedFor: 'Securely store and manage HR data.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Scheduled daily, weekly, or monthly\nData: Employee data reports exported to your S3 bucket',
      },
      {
        id: 'apideck',
        name: 'Apideck',
        logoUrl: 'https://logo.clearbit.com/apideck.com',
        isMarketplacePartner: true,
        usedFor: 'Unified API for HRIS and ATS.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: API calls based on your logic\nData: Unified HRIS data model',
      },
      {
        id: 'aquera',
        name: 'Aquera',
        logoUrl: 'https://logo.clearbit.com/aquera.com',
        isMarketplacePartner: true,
        usedFor: 'Automate user provisioning for any application.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time on employee events\nData: Employee data for provisioning',
      },
      {
        id: 'finch',
        name: 'Finch',
        logoUrl: 'https://logo.clearbit.com/tryfinch.com',
        isMarketplacePartner: true,
        usedFor: 'Unified API for payroll and HR systems.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: API calls based on your logic\nData: Employee directory, payroll, and benefits',
      },
      {
        id: 'fivetran',
        name: 'Fivetran',
        logoUrl: 'https://logo.clearbit.com/fivetran.com',
        isMarketplacePartner: true,
        usedFor: 'Centralize data from Bob into your warehouse.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Scheduled syncs\nData: All employee data for analytics',
      },
      {
        id: 'hi-bob-api',
        name: 'HiBob API',
        logoUrl: 'https://logo.clearbit.com/hibob.com',
        isMarketplacePartner: true,
        usedFor: 'Build custom integrations and workflows.',
        integrationDetails:
          'Customer built | Two-way\nTrigger: API calls based on your custom logic\nData: All data available in Bob',
      },
      {
        id: 'kombo',
        name: 'Kombo',
        logoUrl: 'https://logo.clearbit.com/kombo.dev',
        isMarketplacePartner: true,
        usedFor: 'Unified API for HRIS systems.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: API calls and webhooks\nData: Employee data, time off, and documents',
      },
      {
        id: 'make',
        name: 'Make',
        logoUrl: 'https://logo.clearbit.com/make.com',
        isMarketplacePartner: true,
        usedFor: 'Visually design, build, and automate any workflow.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Event-based (e.g., New Employee, Employee Update)\nData: Any data from Bob to connect with thousands of apps',
      },
      {
        id: 'merge',
        name: 'Merge',
        logoUrl: 'https://logo.clearbit.com/merge.dev',
        isMarketplacePartner: true,
        usedFor: 'Unified API for HR, payroll, and recruiting.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: API calls and webhooks\nData: Common models for employees, payroll, and recruiting',
      },
      {
        id: 'sftp',
        name: 'SFTP',
        logoUrl: 'https://i.imgur.com/v5M8mxC.png',
        isMarketplacePartner: true,
        usedFor: 'Securely transfer files to any system.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Scheduled daily, weekly, or monthly\nData: Scheduled employee data reports',
      },
      {
        id: 'stackone',
        name: 'StackOne',
        logoUrl: 'https://logo.clearbit.com/stackone.com',
        isMarketplacePartner: true,
        usedFor: 'Unified API for HRIS and ATS platforms.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: API calls and webhooks\nData: Common models for all HR data',
      },
      {
        id: 'workato',
        name: 'Workato',
        logoUrl: 'https://logo.clearbit.com/workato.com',
        isMarketplacePartner: true,
        usedFor: 'Enterprise automation platform.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time based on your recipes\nData: Connect Bob data to thousands of applications',
      },
      {
        id: 'zapier',
        name: 'Zapier',
        logoUrl: 'https://logo.clearbit.com/zapier.com',
        isMarketplacePartner: true,
        usedFor: 'Automate workflows by connecting Bob to other apps.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Event-based (e.g., New Employee, Time Off Request)\nData: Connect Bob data to over 4,000 apps',
      },
    ],
  },
  // Category: Performance & Engagement
  'performance-and-engagement': {
    displayName: 'Performance & Engagement',
    integrations: [
      {
        id: '15five',
        name: '15Five',
        logoUrl: 'https://logo.clearbit.com/15five.com',
        isMarketplacePartner: true,
        usedFor: 'Continuous performance management platform.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On new hire and employee updates\nData: Employee data for performance reviews and engagement surveys',
      },
      {
        id: 'culture-amp',
        name: 'Culture Amp',
        logoUrl: 'https://logo.clearbit.com/cultureamp.com',
        isMarketplacePartner: true,
        usedFor: 'Employee engagement and performance development.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Daily sync\nData: Employee data for surveys and performance tracking',
      },
      {
        id: 'lattice',
        name: 'Lattice',
        logoUrl: 'https://logo.clearbit.com/lattice.com',
        isMarketplacePartner: true,
        usedFor: 'Performance management and employee engagement.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Daily sync\nData: New hires, terminations, and employee profile changes',
      },
      {
        id: 'leapsome',
        name: 'Leapsome',
        logoUrl: 'https://logo.clearbit.com/leapsome.com',
        isMarketplacePartner: true,
        usedFor: 'Platform for performance management and engagement.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: Daily sync\nData: Employee data for reviews, goals, and surveys',
      },
      {
        id: 'officevibe',
        name: 'Officevibe',
        logoUrl: 'https://logo.clearbit.com/officevibe.com',
        isMarketplacePartner: true,
        usedFor: 'Employee engagement and performance software.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Daily sync\nData: Employee data for engagement surveys',
      },
      {
        id: 'reflektive',
        name: 'Reflektive',
        logoUrl: 'https://logo.clearbit.com/reflektive.com',
        isMarketplacePartner: true,
        usedFor: 'Performance management platform.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Daily sync\nData: Employee data for performance and engagement tracking',
      },
    ],
  },
  // Category: Workforce Management
  'workforce-management': {
    displayName: 'Workforce Management',
    integrations: [
      {
        id: 'clicktime',
        name: 'ClickTime',
        logoUrl: 'https://logo.clearbit.com/clicktime.com',
        isMarketplacePartner: true,
        usedFor: 'Timesheet and expense tracking.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: On new hire and employee updates\nData: New hires and changes to employee details',
      },
      {
        id: 'conni',
        name: 'Conni',
        logoUrl: 'https://logo.clearbit.com/conni.ac',
        isMarketplacePartner: true,
        usedFor: 'AI-powered workforce management and scheduling.',
        integrationDetails:
          'Partner built | Two-way\nTrigger: Real-time on employee events\nData: Employee data, schedules, and time off',
      },
      {
        id: 'deputy',
        name: 'Deputy',
        logoUrl: 'https://logo.clearbit.com/deputy.com',
        isMarketplacePartner: true,
        usedFor: 'Rostering, timesheets, and team communication.',
        integrationDetails:
          'Bob built | One-way\nTrigger: On new hire and employee updates\nData: New hire and employee profile changes',
      },
      {
        id: 'evolia',
        name: 'Evolia',
        logoUrl: 'https://logo.clearbit.com/evolia.com',
        isMarketplacePartner: true,
        usedFor: 'Employee scheduling and time tracking.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On new hire\nData: New hire data for scheduling',
      },
      {
        id: 'operating',
        name: 'Operating',
        logoUrl: 'https://logo.clearbit.com/operating.co',
        isMarketplacePartner: true,
        usedFor:
          'Workforce management/PSA for projects including forecasting and matching.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On new hire\nData: New hire data for scheduling and payroll',
      },
      {
        id: 'quinyx',
        name: 'Quinyx',
        logoUrl: 'https://logo.clearbit.com/quinyx.com',
        isMarketplacePartner: true,
        usedFor: 'AI-powered workforce management.',
        integrationDetails:
          'Bob built | One-way from Bob\nTrigger: Daily sync\nData: New hires and employee profile changes',
      },
      {
        id: 'surfbord',
        name: 'Surfbord',
        logoUrl: 'https://logo.clearbit.com/surfbord.com',
        isMarketplacePartner: true,
        usedFor: 'Onboarding and IT provisioning.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On new hire\nData: New hire data for IT equipment and access',
      },
      {
        id: 'timeware',
        name: 'Timeware',
        logoUrl: 'https://logo.clearbit.com/timeware.co.uk',
        isMarketplacePartner: true,
        usedFor: 'Time and attendance solutions.',
        integrationDetails:
          'Partner built | One-way from Bob\nTrigger: On new hire and termination\nData: Employee data for time tracking',
      },
    ],
  },
};
