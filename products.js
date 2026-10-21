/**
 * B3Networks Products Master Database
 * Sourced from B3Networks Helpjuice Documentation (https://b3networks.helpjuice.com/)
 */
const PRODUCTS_DATA = {
  // ==========================================
  // V2 APP MODEL PRODUCTS (MODULAR)
  // ==========================================
  'bizphone': {
    id: 'bizphone',
    name: 'BizPhone',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Voice & Calling',
    tagline: 'Complete Cloud Business Phone System',
    shortDesc: 'Full cloud business phone system with extension management, IVR auto-attendants, call routing, and voicemail.',
    fullDesc: 'BizPhone is B3Networks flagship cloud business phone system for SMBs. It allows companies to manage extensions, multi-level IVR auto-attendants, call routing schedules, voicemail-to-email, and team calling from a single centralized web dashboard without requiring any on-premise PBX hardware or analog cabling.',
    architecture: 'V2 App Model — Subscribed as a standalone modular app on a monthly pay-per-extension basis. Easy self-service setup in under 10 minutes.',
    targetCustomer: 'Small to medium businesses, retail branches, professional services, and startups seeking a professional business phone presence without PBX hardware.',
    valueProposition: 'Zero upfront hardware investment. Turn existing employee laptops and smartphones into business phone extensions with company caller ID.',
    pitchGuide: 'Highlight that legacy PBX systems cost thousands of dollars in hardware, maintenance, and telco lines. BizPhone replaces all of it with a flexible monthly app subscription that employees can use on desktop and mobile anywhere.',
    discoveryQuestions: [
      'How are you currently handling incoming customer calls across your team and branches?',
      'Do your staff use personal mobile numbers for business calls, risking customer contact leakage?',
      'Are you paying high maintenance contracts on an aging physical PBX in your server room?'
    ],
    features: [
      'Interactive Voice Response (IVR) Auto-Attendant',
      'Individual & Department Extension Management',
      'Voicemail with Audio Recording sent to Email',
      'Time-based Call Forwarding & Hunt Groups',
      'Desktop & Mobile Softphone Apps Included',
      'Detailed Inbound & Outbound Call Logs'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/bizphone'
  },

  'virtual-line': {
    id: 'virtual-line',
    name: 'Virtual Line',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Voice & Calling',
    tagline: 'Cloud-Routed Virtual Phone Numbers',
    shortDesc: 'Cloud-hosted virtual phone numbers that automatically route incoming calls to any physical phone or mobile number.',
    fullDesc: 'Virtual Line provides local landline or toll-free telephone numbers in the cloud. Incoming calls are seamlessly routed according to customized rules to any mobile phone, landline, or team member without requiring physical line installation.',
    architecture: 'V2 App Model — Standalone virtual number subscription billed per number per month with inbound call forwarding rates.',
    targetCustomer: 'Businesses expanding into new geographic markets (e.g. Singapore, regional) or marketing teams running distinct campaign tracking lines.',
    valueProposition: 'Establish a local market presence instantly without setting up a physical branch office.',
    pitchGuide: 'Emphasize trust: customers are 4x more likely to answer and buy from a company with a familiar local telephone number than an unfamiliar foreign number.',
    discoveryQuestions: [
      'Do you have prospective clients in markets where you do not yet have a physical office?',
      'Would having a local direct phone number increase customer trust in your marketing campaigns?'
    ],
    features: [
      'Instant Cloud Number Provisioning',
      'Local Landline & Toll-Free Number Pools',
      'Dynamic Forwarding to Mobile or Landline',
      'Time-of-day Routing Rules',
      'Call Forwarding Logs & Caller ID Display'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/virtual-line'
  },

  'direct-line': {
    id: 'direct-line',
    name: 'Direct Line',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Voice & Calling',
    tagline: 'Direct Inward Dialing (DID) for Executives & Teams',
    shortDesc: 'Dedicated Direct Inward Dialing numbers assigned directly to individuals or specific desks, bypassing the main receptionist.',
    fullDesc: 'Direct Line delivers dedicated telephone numbers (DID) directly to specific employees, executives, or specialized desks. Callers dial the direct number to connect immediately without navigating IVR menus or receptionist transfers.',
    architecture: 'V2 App Model — Individual DID number subscription that attaches to an extension or direct forwarding endpoint.',
    targetCustomer: 'Sales account managers, legal/financial advisors, and senior executives who require a personal direct line for VIP clients.',
    valueProposition: 'Eliminates receptionist bottlenecks and gives high-value clients instant, friction-free access to their dedicated representatives.',
    pitchGuide: 'Position Direct Line as an executive efficiency tool. VIP clients and urgent callers reach the right decision-maker on the first try.',
    discoveryQuestions: [
      'Do your key clients struggle to reach their dedicated account managers directly?',
      'How many direct phone extensions do your key personnel require?'
    ],
    features: [
      'Personal Dedicated DID Telephone Number',
      'Direct Caller Routing with No Menus',
      'Outbound Caller ID Customization',
      'Dedicated Voicemail Box per Line',
      'Direct Transfer & Presence Integration'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/direct-line'
  },

  'sip-v2': {
    id: 'sip-v2',
    name: 'SIP Trunking (V2)',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Voice & Connectivity',
    tagline: 'PSTN Voice Trunk for Existing On-Premise IP-PBX',
    shortDesc: 'PSTN voice connectivity over IP that connects an organization existing on-premise IP-PBX to the public telephone network.',
    fullDesc: 'B3Networks SIP Trunking connects existing customer PBX hardware (such as Asterisk, 3CX, FreePBX, Avaya, Cisco, or Grandstream) to the PSTN over a secure IP internet connection, replacing expensive legacy ISDN/E1 PRI copper lines.',
    architecture: 'V2 App Model — Channel-based subscription with per-minute voice consumption billing and DID blocks.',
    targetCustomer: 'Companies with existing on-premise PBX hardware seeking lower call rates and elastic trunk capacity without replacing hardware.',
    valueProposition: 'Saves 40-60% on monthly telecommunication line rentals and call rates while keeping existing desk phones and server hardware.',
    pitchGuide: 'Ask when their existing ISDN/PRI telco contracts expire. B3Networks SIP trunks can be tested in parallel with zero disruption to daily business.',
    discoveryQuestions: [
      'What type of PBX hardware or IP-PBX do you currently run on-site?',
      'Are your existing ISDN/E1 PRI telco lines coming up for contract renewal?'
    ],
    features: [
      'Standard SIP Endpoint Compatibility',
      'Flexible Concurrent Call Channel Sizing',
      'Highly Competitive Regional Calling Rates',
      'DID Number Blocks & Porting Support',
      'G.711u/a & G.729 Audio Codec Support'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/sip'
  },

  'call-recording': {
    id: 'call-recording',
    name: 'Call Recording',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Voice & Compliance',
    tagline: 'Cloud Audio Recording for Compliance & Quality Assurance',
    shortDesc: 'Automatic cloud recording of inbound and outbound calls with encrypted storage, search, and browser playback.',
    fullDesc: 'Call Recording automatically records all incoming and outgoing telephone conversations across selected lines. Audio recordings are stored in a secure cloud repository with metadata tagging, date/number search filters, and an in-browser playback player.',
    architecture: 'V2 App Model — Modular add-on app billed per recorded line or per storage tier.',
    targetCustomer: 'Telemarketing operations, financial services, healthcare, legal firms, and customer support desks requiring audit compliance.',
    valueProposition: 'Provides dispute resolution evidence, compliance fulfillment, and coaching materials without needing on-premise recording servers.',
    pitchGuide: 'A single resolved customer dispute or compliance audit pass pays for an entire year of cloud recording.',
    discoveryQuestions: [
      'Are you mandated by regulation or internal policy to retain audio records of client transactions?',
      'How do you currently review call quality and train new sales or customer support reps?'
    ],
    features: [
      'Inbound & Outbound Automated Call Recording',
      'Encrypted Cloud Storage with Retention Policies',
      'Metadata Search by Date, Caller ID, and Agent',
      'Built-in Browser Audio Playback & Waveform',
      'Secure Download & Permission Controls'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/call-recording'
  },

  'wallboard': {
    id: 'wallboard',
    name: 'Wallboard',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Analytics & Reporting',
    tagline: 'Real-Time Call Operations Dashboard for TV Displays',
    shortDesc: 'Real-time visual operations dashboard displaying live queue call volumes, agent availability, wait times, and KPIs on TV screens.',
    fullDesc: 'Wallboard is a real-time visual monitoring display engineered for call center floors and operations rooms. It aggregates live queue statistics, agent presence, waiting callers, average handle times, and call abandonment rates in an easy-to-read big-screen view.',
    architecture: 'V2 App Model — Monthly subscription app that pulls live telemetry from BizPhone call queues.',
    targetCustomer: 'Customer support teams, helpdesks, dispatch centers, and telesales rooms.',
    valueProposition: 'Enables supervisors to identify call queue spikes immediately and keeps agents motivated with visible live KPIs.',
    pitchGuide: 'When supervisors see queue bottlenecks in real time, they can reassign staff before customers abandon calls in frustration.',
    discoveryQuestions: [
      'Can your supervisors currently see how many callers are waiting on hold in real time?',
      'Do you display live performance metrics in your customer service room?'
    ],
    features: [
      'Live Queue Call Volume & Wait Time Metrics',
      'Real-Time Agent Status (Available, In Call, Away)',
      'Big-Screen Fullscreen TV Mode',
      'Configurable Warning Threshold Alerts',
      'Multi-Queue Aggregation Views'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/wallboard'
  },

  'sms-marketing': {
    id: 'sms-marketing',
    name: 'SMS Marketing',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Messaging',
    tagline: 'Broadcast SMS Campaign & Notification Portal',
    shortDesc: 'Broadcast SMS platform for sending promotional announcements, customer alerts, and reminders with custom sender ID.',
    fullDesc: 'SMS Marketing is a self-service bulk SMS web portal. Users can upload contact lists, schedule promotional campaigns, send appointment reminders or service alerts, and monitor delivery status receipts with customized alphanumeric Sender ID branding.',
    architecture: 'V2 App Model — Standalone messaging app with prepaid or postpaid per-message credit packages.',
    targetCustomer: 'Retailers, e-commerce stores, clinics, educational centers, and service businesses running targeted promotional broadcasts.',
    valueProposition: 'SMS delivers a 98% open rate compared to 20% for email, ensuring critical alerts and promotions are read within 3 minutes.',
    pitchGuide: 'Pitch SMS Marketing alongside BizPhone as a complete voice + text customer engagement bundle.',
    discoveryQuestions: [
      'How do you currently notify customers about appointment reminders or flash promotions?',
      'Are your email promotional campaigns suffering from low open rates or spam filters?'
    ],
    features: [
      'CSV Contact List Import & Group Tagging',
      'Custom Alphanumeric Sender ID Branding',
      'Scheduled Sends & Time-zone Delivery',
      'Delivery Receipts & Campaign Analytics',
      'Message Personalization Tags'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/sms-marketing'
  },

  'fax': {
    id: 'fax',
    name: 'Cloud Fax',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Messaging',
    tagline: 'Paperless Digital Fax via Email & Web',
    shortDesc: 'Digital paperless fax solution. Receive faxes in email as PDFs and send faxes directly through the web portal.',
    fullDesc: 'Cloud Fax replaces physical fax machines and analog copper lines. Incoming faxes arrive directly in designated email inboxes as searchable PDF attachments. Outgoing faxes can be dispatched through a web browser with document upload.',
    architecture: 'V2 App Model — Monthly subscription app per fax number with bundled page allowance.',
    targetCustomer: 'Legal firms, logistics and freight companies, clinics, and government vendors requiring fax compliance.',
    valueProposition: 'Saves 100% on paper, toner, and analog telephone line maintenance while ensuring faxes are never lost on an unattended machine tray.',
    pitchGuide: 'Ask how much they spend annually maintaining dedicated copper fax lines and printer supplies.',
    discoveryQuestions: [
      'Do you still pay for a dedicated analog copper line for a physical fax machine?',
      'Would receiving incoming faxes directly as PDFs in email improve your team workflow?'
    ],
    features: [
      'Inbound Fax Delivered Directly to Email (PDF)',
      'Outbound Fax Dispatch via Web Portal',
      'Dedicated Local Fax Number Provisioning',
      'Multi-Page Document PDF Support',
      'Zero Paper, Toner, or Physical Hardware'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/fax'
  },

  'file-explorer': {
    id: 'file-explorer',
    name: 'File Explorer',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Management',
    tagline: 'Centralized Media & Recording Repository',
    shortDesc: 'Centralized media file repository for storing, organizing, and accessing company voicemails, recordings, and audio prompts.',
    fullDesc: 'File Explorer acts as the central document and audio repository for the B3Networks V2 platform. Administrators can manage custom IVR greeting files, hold music, archived call recordings, and inbound fax documents with secure access permissions.',
    architecture: 'V2 App Model — Shared system utility app included with platform storage tiers.',
    targetCustomer: 'System administrators and office managers organizing voice media and compliance files.',
    valueProposition: 'Maintains governance and organization across all voice prompts and recorded audio assets.',
    pitchGuide: 'Highlights the benefit of centralized management: never misplace corporate IVR audio prompts or historical compliance recordings.',
    discoveryQuestions: [
      'Where does your team currently store custom IVR audio greetings and archived recordings?'
    ],
    features: [
      'Centralized Audio & Document Storage',
      'Custom IVR Greeting & Hold Music Management',
      'Permission-based Access & Download Rules',
      'Search & Tagging by File Type and Date'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/file-explorer'
  },

  'global-dnc': {
    id: 'global-dnc',
    name: 'Global DNC',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Compliance',
    tagline: 'Do Not Call Registry Compliance Screener',
    shortDesc: 'Automated Do Not Call compliance screener that verifies outbound call and SMS contact lists against national registries.',
    fullDesc: 'Global DNC automates compliance checking against national Do Not Call registries (such as the Singapore PDPA DNC registry). Telemarketing and sales contact lists are checked automatically to prevent unauthorized calls and heavy regulatory fines.',
    architecture: 'V2 App Model — Subscription app with pay-per-lookup or monthly subscription package.',
    targetCustomer: 'Outbound sales teams, insurance brokers, real estate agencies, and telemarketing centers.',
    valueProposition: 'Protects the enterprise from severe statutory fines (up to $1,000,000 under PDPA) with proof-of-scrubbing audit logs.',
    pitchGuide: 'Compliance insurance: automated screening ensures sales reps never inadvertently call registered numbers.',
    discoveryQuestions: [
      'What automated mechanism do you currently use to ensure outbound leads are not on national DNC registries?',
      'Are you compliant with the latest privacy commission guidelines?'
    ],
    features: [
      'Automated National DNC Registry Verification',
      'Bulk CSV List Scrubbing & Export',
      'Proof-of-Scrubbing Audit Log Certificates',
      'Internal Company Blacklist & Exemption Lists'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/-global-dnc'
  },

  'bizphone-desktop': {
    id: 'bizphone-desktop',
    name: 'BizPhone Desktop App',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Client Application',
    tagline: 'Native Windows & macOS Softphone Client',
    shortDesc: 'Native workstation softphone for Windows and macOS. Enables calling, call transferring, directory lookup, and voicemail playback.',
    fullDesc: 'The BizPhone Desktop Application turns any PC or Mac computer into a fully functional business phone. Employees make and receive phone calls using their computer headset, transfer calls, search the company directory, and listen to voicemails directly from their desktop.',
    architecture: 'V2 App Model — Client application included with BizPhone extension subscriptions.',
    targetCustomer: 'Office workers, hybrid teams, and customer service staff using laptops as their primary work tool.',
    valueProposition: 'Eliminates desktop hardware phone costs entirely while enabling flexible work-from-home communication.',
    pitchGuide: 'Give employees freedom to work from any location with zero desk phone hardware.',
    discoveryQuestions: [
      'Do your staff need to make business calls directly from their laptops without requiring desk hardware?'
    ],
    features: [
      'Native Windows and macOS Support',
      'Click-to-Dial & Keyboard Shortcut Dialing',
      'Corporate Directory Search & Presence Indicator',
      'One-Click Blind & Attended Call Transfer',
      'Voicemail Playback & Call History Logs'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/bizphone-desktop-application'
  },

  'bizphone-mobile': {
    id: 'bizphone-mobile',
    name: 'BizPhone Mobile App',
    model: 'V2',
    modelLabel: 'V2 App Model',
    category: 'Client Application',
    tagline: 'iOS & Android Business Extension Softphone',
    shortDesc: 'Smartphone softphone application for iOS and Android. Turns any personal mobile phone into a business extension.',
    fullDesc: 'BizPhone Mobile turns personal iOS and Android smartphones into corporate extensions. Employees can make business calls presenting their office caller ID, receive customer calls through push notifications, and access their business voicemail on the road.',
    architecture: 'V2 App Model — Client application included with BizPhone extension subscriptions.',
    targetCustomer: 'Field sales executives, consultants, real estate agents, and on-call support engineers.',
    valueProposition: 'Ensures staff are reachable anywhere on their business number while protecting personal mobile number privacy.',
    pitchGuide: 'Employees no longer have to give out personal mobile numbers or carry two separate phones.',
    discoveryQuestions: [
      'Do your staff make work calls from personal mobile numbers? Would they prefer privacy and company caller ID?'
    ],
    features: [
      'Native iOS & Android Applications',
      'Battery-Saving Push Notification Wake',
      'Corporate Caller ID on Outbound Calls',
      'Mobile Company Directory Search',
      'Visual Voicemail & Call History'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/bizphone-mobile-application'
  },

  // ==========================================
  // V3 LICENSE MODEL PRODUCTS (ENTERPRISE)
  // ==========================================
  'phone-system': {
    id: 'phone-system',
    name: 'Phone System (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Core Telephony',
    tagline: 'Enterprise Cloud PBX & Unified Communications Suite',
    shortDesc: 'Enterprise cloud PBX platform with multi-level organization hierarchies, intelligent call queues, CRM integration, and CDR reporting.',
    fullDesc: 'Phone System is B3Networks flagship licensed enterprise cloud PBX. Built for scalability from 20 to 10,000+ users, it delivers multi-tenant PBX hierarchies, intelligent hunt groups, ring groups, call queues, CRM CTI integrations, and detailed Call Detail Records (CDR) reporting.',
    architecture: 'V3 License Model — Per-user monthly or annual licensing with unified feature entitlement and enterprise SLA.',
    targetCustomer: 'Mid-market to large enterprises, multi-branch corporations, and organizations transitioning away from legacy on-premise PBXs.',
    valueProposition: 'Enterprise-grade reliability, unified directory across regional offices, and CRM screen-pop integration.',
    pitchGuide: 'V3 Phone System provides a complete enterprise communications suite that scales effortlessly across regional offices with centralized management.',
    discoveryQuestions: [
      'How many branch offices or regional locations do you operate across Southeast Asia?',
      'Do you need tight integration between your phone system and CRM (Salesforce, Zendesk, HubSpot)?',
      'What are your uptime and redundancy requirements for enterprise voice communication?'
    ],
    features: [
      'Multi-Level Corporate PBX Hierarchies',
      'Intelligent Call Queuing & Ring Groups',
      'CRM CTI Screen-Pop Integration',
      'Detailed Call Detail Records (CDR) & Analytics',
      'Cross-Office Extension Dialing & Unified Directory',
      'High-Availability Cloud Architecture'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/phone-system-admin-guide'
  },

  'contact-center': {
    id: 'contact-center',
    name: 'Contact Center (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Contact Center',
    tagline: 'Omni-Channel ACD & Supervisor Command Suite',
    shortDesc: 'Omni-channel customer service center with intelligent skills-based ACD, real-time supervisor console, and whisper/barge coaching.',
    fullDesc: 'V3 Contact Center provides enterprise-grade customer interaction management. It features intelligent skills-based ACD routing, real-time supervisor monitoring dashboards, silent monitoring, whisper coaching, live call barge-in, wrap-up disposition codes, and detailed SLA reporting.',
    architecture: 'V3 License Model — Per-agent and per-supervisor licensing with advanced contact center capabilities.',
    targetCustomer: 'Customer care centers, technical support desks, banking/fintech helplines, and telesales organizations.',
    valueProposition: 'Delivers tier-1 contact center capabilities at a fraction of legacy on-premise contact center costs.',
    pitchGuide: 'Supervisors can coach junior agents in real time via whisper mode without the caller hearing, raising first-contact resolution rates.',
    discoveryQuestions: [
      'How do your supervisors currently monitor agent call quality while calls are in progress?',
      'Do you have skills-based routing to ensure VIP or language-specific callers reach the best agent?',
      'What SLA metrics do your team leaders report to executive management?'
    ],
    features: [
      'Skills-Based Automatic Call Distribution (ACD)',
      'Live Supervisor Whisper Coaching & Barge-in',
      'Real-Time Agent Monitoring & Status Dashboard',
      'SLA Tracking & Call Abandonment Analytics',
      'Agent Disposition Codes & After-Call Work (ACW)',
      'Queue Callback & Virtual Hold Capabilities'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/contact-center-supervisor-guide'
  },

  'auto-attendant': {
    id: 'auto-attendant',
    name: 'Auto Attendant (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Core Telephony',
    tagline: 'Multi-Level Interactive Voice Response (IVR) Builder',
    shortDesc: 'Advanced multi-tier IVR builder with greeting prompts, business hours calendars, holiday schedules, and dynamic caller routing.',
    fullDesc: 'Auto Attendant in the V3 platform enables enterprises to construct sophisticated, multi-level IVR call routing flows. Admins can configure custom audio greetings, multi-language selection menus, business hours schedules, after-hours logic, and emergency holiday overrides.',
    architecture: 'V3 License Model — Core module included within the V3 enterprise licensing tier.',
    targetCustomer: 'Companies receiving high call volumes across multiple departments, languages, and regional time zones.',
    valueProposition: 'Ensures every inbound call is answered instantly and directed accurately without human operator delays.',
    pitchGuide: 'Creates an immediate impression of professional enterprise scale for callers while freeing receptionists from routing routine inquiries.',
    discoveryQuestions: [
      'What happens when a customer calls your office outside standard business hours?',
      'Do you need multi-language IVR menus (e.g. English, Mandarin, Bahasa) for your regional callers?'
    ],
    features: [
      'Nested Multi-Tier Interactive Menus',
      'Business Hours & Holiday Calendar Overrides',
      'Custom Audio Upload & Text-to-Speech Engine',
      'Direct Extension & Department Menu Dialing',
      'Fallback Routing to Voicemail or External Numbers'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/auto-attendant-admin-guide'
  },

  'omni-channel': {
    id: 'omni-channel',
    name: 'Omni-Channel',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Customer Engagement',
    tagline: 'Unified Customer Messaging & Agent Engagement Inbox',
    shortDesc: 'Unified agent workspace consolidating Voice, Web Chat, SMS, Email, and Social Messaging with shared conversation history.',
    fullDesc: 'Omni-Channel consolidates all customer touchpoints into a unified agent inbox. Customer service representatives manage Voice calls, Web Live Chat, SMS, Email tickets, and Social Messaging from a single screen while viewing complete cross-channel conversation history.',
    architecture: 'V3 License Model — Add-on agent license for V3 Contact Center deployments.',
    targetCustomer: 'Modern digital customer service operations whose customers reach out via chat, social media, and email alongside voice.',
    valueProposition: 'Eliminates agent tool-switching and context loss, resulting in faster resolution times and happier customers.',
    pitchGuide: 'When a customer calls after chatting on the website 10 minutes earlier, the agent immediately sees their chat history without asking them to repeat themselves.',
    discoveryQuestions: [
      'Are your customer support agents juggling separate tools for phone calls, email tickets, and web chat?',
      'Can your agents see previous customer chat history when a customer calls on the phone?'
    ],
    features: [
      'Single Agent Desktop for Voice, Chat, SMS, and Email',
      'Unified Customer Context & Interaction Timeline',
      'Cross-Channel Automated Queue Distribution',
      'Chatbot Handover to Live Human Agents',
      'Canned Responses & Knowledge Snippets'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/omni-channel'
  },

  'teams-operator-connect': {
    id: 'teams-operator-connect',
    name: 'MS Teams Operator Connect',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'MS Teams Integration',
    tagline: 'Official Native PSTN Calling in Microsoft Teams',
    shortDesc: 'Certified Microsoft Operator Connect integration. Directly provisions telephone numbers in Teams Admin Center without SBC hardware.',
    fullDesc: 'B3Networks is a certified Microsoft Operator Connect partner. Enterprises can assign external telephone numbers directly within the native Microsoft Teams Admin Center, enabling users to place and receive PSTN phone calls inside Microsoft Teams on desktop and mobile.',
    architecture: 'V3 License Model — Per-user monthly license with carrier PSTN minutes bundle.',
    targetCustomer: 'Enterprises standardized on Microsoft 365 and Microsoft Teams wanting to eliminate physical desk phones.',
    valueProposition: 'Turn Microsoft Teams into your complete phone system with zero on-premise SBC hardware or complex routing setup.',
    pitchGuide: 'Admins manage telephone numbers right inside the Microsoft Teams Admin Center they already use every day. No telco hardware needed.',
    discoveryQuestions: [
      'Does your organization currently use Microsoft Teams for internal messaging and video meetings?',
      'Would you like to turn Microsoft Teams into your external phone system without buying physical IP phones?'
    ],
    features: [
      'Direct Microsoft Teams Admin Center Provisioning',
      'Zero On-Premise SBC Hardware or Gateways Required',
      'Native Teams Dialpad for Inbound & Outbound Calling',
      'Enterprise Carrier SLA & Voice Quality Monitoring',
      'Global Telephone Number Porting & DID Assignment'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/microsoft-teams-operator-connect-admin-guide'
  },

  'teams-direct-routing': {
    id: 'teams-direct-routing',
    name: 'MS Teams Direct Routing',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'MS Teams Integration',
    tagline: 'Custom SBC-Based SIP Trunk Integration for Teams',
    shortDesc: 'Custom SIP trunk connection between certified SBCs and Microsoft Teams, supporting hybrid PBX setups and bespoke carrier routing.',
    fullDesc: 'MS Teams Direct Routing connects Microsoft Teams Phone System to B3Networks voice network through certified Session Border Controllers (SBC). It enables hybrid PBX coexistence, integration with legacy analog endpoints (intercoms, elevator lines), and complex routing topologies.',
    architecture: 'V3 License Model — Trunk-based or per-seat licensed integration connecting to enterprise SBC infrastructure.',
    targetCustomer: 'Enterprises with complex PBX coexistence requirements, analog endpoints, or specialized carrier routing configurations.',
    valueProposition: 'Delivers maximum architectural flexibility for hybrid cloud and legacy telecommunication coexistence.',
    pitchGuide: 'Ideal when clients want Microsoft Teams calling but have existing warehouse paging, analog elevators, or multi-PBX systems that must remain connected.',
    discoveryQuestions: [
      'Do you have legacy analog devices (elevators, door phones, fax) that must co-exist with Microsoft Teams?'
    ],
    features: [
      'Certified Session Border Controller (SBC) Infrastructure',
      'Custom Voice Call Routing & Survivable Branch Rules',
      'Coexistence with Legacy PBX & Analog Intercoms',
      'Global Number Porting & Multi-Carrier Termination'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/microsoft-teams-direct-routing-admin-guide'
  },

  'sip-trunk-v3': {
    id: 'sip-trunk-v3',
    name: 'SIP Trunk (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Connectivity',
    tagline: 'Carrier-Grade High-Capacity Enterprise Voice Trunk',
    shortDesc: 'Enterprise carrier SIP trunking designed for V3 Phone System and Contact Center deployments with dual-datacenter redundancy.',
    fullDesc: 'V3 SIP Trunk provides carrier-grade PSTN voice origination and termination engineered for high-concurrency enterprise workloads. Backed by dual active-passive datacenter redundancy, it guarantees high-density concurrent calling capacity for V3 Phone System and Contact Center environments.',
    architecture: 'V3 License Model — Concurrent channel subscription with DID blocks and pooled regional calling allowances.',
    targetCustomer: 'Enterprises and call centers with steady high-volume voice traffic requiring high SLA availability.',
    valueProposition: 'Reliable, crystal-clear carrier voice trunking with automated failover and regional low-latency peering.',
    pitchGuide: 'Guarantees the high concurrent channel density needed so enterprise customers never encounter fast-busy signals during call spikes.',
    discoveryQuestions: [
      'What is your peak concurrent call requirement during high-demand campaigns?'
    ],
    features: [
      'High-Density Concurrent Channel Capacity',
      'Dual Datacenter Geographic Redundancy',
      'G.711 & G.729 Audio Codecs with Low Latency Peering',
      'Automated Disaster Recovery Call Rerouting'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/sip-trunk'
  },

  'power-sip': {
    id: 'power-sip',
    name: 'Power SIP Trunk',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Connectivity',
    tagline: 'Mission-Critical Ultra-Performance Voice Trunking',
    shortDesc: 'Mission-critical voice trunking with active-active geo-redundancy, burst capacity allowances, and 99.99% uptime SLA.',
    fullDesc: 'Power SIP Trunk is B3Networks premier tier voice infrastructure. Engineered for mission-critical operations where voice downtime cannot occur, it features active-active geo-redundant routes, elastic burst capacity allowances, priority routing queues, and a strict 99.99% availability SLA.',
    architecture: 'V3 License Model — Enterprise tier infrastructure contract with dedicated capacity guarantees.',
    targetCustomer: 'Financial institutions, emergency response helplines, airlines, and tier-1 enterprise contact centers.',
    valueProposition: 'Maximum telecom uptime guaranteed by contract with dedicated carrier network engineering support.',
    pitchGuide: 'When even 10 minutes of voice downtime costs the business tens of thousands of dollars, Power SIP Trunk is the only responsible choice.',
    discoveryQuestions: [
      'What is the financial cost to your business if your phone lines experience 1 hour of downtime?'
    ],
    features: [
      'Active-Active Multi-Region Geo-Redundancy',
      'Guaranteed 99.99% Uptime Service Level Agreement',
      'Elastic Burst Capacity Above Committed Channels',
      'Dedicated Priority Carrier Routing Queues',
      '24/7 Priority Telecom Engineering Escalation'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/power-sip-trunk'
  },

  'cpaas-fax': {
    id: 'cpaas-fax',
    name: 'CPaaS Fax',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Messaging',
    tagline: 'Enterprise Programmable Fax-over-IP Engine & API',
    shortDesc: 'Enterprise-grade programmable Fax-over-IP engine to send and receive high volumes of faxes programmatically via REST API.',
    fullDesc: 'CPaaS Fax provides high-volume, automated digital fax transmission for enterprise workflows. Systems can dispatch and receive thousands of multi-page PDF documents programmatically via REST APIs or the administrative web portal, complete with cryptographic audit trails.',
    architecture: 'V3 License Model — API-based volume billing and dedicated enterprise fax DID allocation.',
    targetCustomer: 'Healthcare hospital networks, insurance claims processors, and legal institutions automating document delivery.',
    valueProposition: 'Integrate automated document faxing directly into proprietary EHR, ERP, or billing software.',
    pitchGuide: 'Replaces manual scanning and manual faxing by triggering faxes programmatically directly from internal software.',
    discoveryQuestions: [
      'Do you generate batch documents or medical records that must be faxed automatically to external partners?'
    ],
    features: [
      'RESTful Fax Dispatch & Webhook Delivery Notifications',
      'High-Speed Multi-Page PDF Conversion Engine',
      'Audit Logs & Regulatory Compliance Certificates',
      'Multi-Line Concurrency for Heavy Batch Transmissions'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/cpaas-fax'
  },

  'hotdesking': {
    id: 'hotdesking',
    name: 'CPaaS Hotdesking',
    model: 'V3',
    category: 'Core Telephony',
    modelLabel: 'V3 License Model',
    tagline: 'Dynamic Shared Workspace Desk Phone Profile Roaming',
    shortDesc: 'Dynamic workplace desk sharing. Employees log in to any shared physical IP desk phone with their PIN, loading their extension.',
    fullDesc: 'CPaaS Hotdesking enables hybrid office desk sharing. Employees sit at any shared physical IP desk phone in any branch, enter their personal PIN, and the phone instantly configures with their personal extension number, caller ID, voicemail, and speed dials.',
    architecture: 'V3 License Model — Feature module included in V3 enterprise user licenses.',
    targetCustomer: 'Modern hybrid workplaces, co-working centers, and shift-based customer service rooms.',
    valueProposition: 'Reduces required physical desk phone hardware by 40-50% in hybrid office environments.',
    pitchGuide: 'In offices where employees come in 2-3 days a week, hotdesking cuts hardware costs in half while keeping every employee reachable on their own extension.',
    discoveryQuestions: [
      'Has your company transitioned to hot-desking or hybrid office seating arrangements?'
    ],
    features: [
      'PIN-Based Phone Login & Automatic Profile Loading',
      'Extension, Voicemail, & Speed Dial Roaming',
      'Configurable Inactivity Auto-Logout Timers',
      'Broad Hardware SIP Phone Model Compatibility'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/cpaas-hotdesking'
  },

  'developer-hub': {
    id: 'developer-hub',
    name: 'Developer Hub',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'APIs & SDKs',
    tagline: 'CPaaS Telephony APIs, Webhooks & Developer Portal',
    shortDesc: 'CPaaS developer gateway offering REST APIs, real-time webhooks, SDKs, and sandbox testing tools for custom telecom integrations.',
    fullDesc: 'Developer Hub is the CPaaS programmatic gateway into B3Networks infrastructure. Software engineers access RESTful APIs, real-time Webhook event streams, client SDKs, and testing sandbox environments to embed voice calling, SMS messaging, and number management into proprietary applications.',
    architecture: 'V3 License Model — API access tier with usage-based billing per API call and event stream.',
    targetCustomer: 'Software companies, SaaS platforms, tech startups, and enterprise IT engineering teams.',
    valueProposition: 'Build customized telecommunication workflows inside your own proprietary applications without managing telecom switches.',
    pitchGuide: 'Developers can initiate automated calls, send OTP verification SMS, and receive call completion webhooks in minutes using standard REST APIs.',
    discoveryQuestions: [
      'Are you building in-house software that needs to trigger automated phone calls, OTPs, or call tracking?'
    ],
    features: [
      'RESTful Telephony & Messaging APIs',
      'Real-Time Webhook Event Notification Streams',
      'Interactive Web-Based API Testing Sandbox',
      'Client SDK Libraries & Postman Collections',
      'Granular API Key Permission Scopes'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/developer-hub-admin-guide'
  },

  'cpaas-dnc': {
    id: 'cpaas-dnc',
    name: 'CPaaS DNC',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Compliance',
    tagline: 'Enterprise Automated DNC API & Scrubbing Engine',
    shortDesc: 'Enterprise Do Not Call compliance engine with high-throughput API scrubbing. Automatically verifies numbers before outbound dialers call.',
    fullDesc: 'CPaaS DNC is an enterprise programmatic Do Not Call scrubbing engine. Designed for integration with high-throughput predictive dialers, CRM engines, and automated marketing workflows, it queries national registries via high-speed API prior to call placement.',
    architecture: 'V3 License Model — API query volume subscription for enterprise contact center platforms.',
    targetCustomer: 'High-volume outbound contact centers, debt recovery agencies, and automated telemarketing operations.',
    valueProposition: 'Automates regulatory protection with zero manual list exporting and zero human error.',
    pitchGuide: 'Protects the enterprise automatically: predictive dialers query the API in real time and automatically drop numbers listed on national DNC registries.',
    discoveryQuestions: [
      'Does your outbound dialer automatically verify leads before triggering calls?'
    ],
    features: [
      'High-Throughput Sub-Second API Query Engine',
      'Real-Time Pre-Dial Automated List Scrubbing',
      'Multi-Jurisdiction National Registry Coverage',
      'Immutable Cryptographic Proof-of-Scrubbing Audit Logs'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/cpaas-dnc'
  },

  'mobile-app-v3': {
    id: 'mobile-app-v3',
    name: 'Mobile App (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Client Application',
    tagline: 'Enterprise Unified Communications Mobile Softphone',
    shortDesc: 'Enterprise unified communications mobile client for iOS and Android with directory synchronization and live user presence.',
    fullDesc: 'The V3 Mobile App delivers enterprise unified communications to iOS and Android smartphones. Features include corporate active directory synchronization, live user presence indicators, encrypted voice calling (TLS/SRTP), and seamless call handover between cellular and Wi-Fi networks.',
    architecture: 'V3 License Model — Client application included with V3 enterprise user licenses.',
    targetCustomer: 'Corporate executives, roaming professionals, and remote teams needing secure corporate PBX extension connectivity.',
    valueProposition: 'Ensures crystal-clear corporate calling with enterprise encryption and seamless network handover.',
    pitchGuide: 'Keeps enterprise staff reachable on their office extensions wherever business travel takes them.',
    discoveryQuestions: [
      'Do your mobile employees need enterprise softphones that sync presence with the office phone system?'
    ],
    features: [
      'Native iOS and Android Softphone Experience',
      'Corporate Active Directory Live Synchronization',
      'User Presence Status (Available, In Call, Busy)',
      'Encrypted Voice Traffic (TLS/SRTP Security)',
      'Reliable Background Push Notifications'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/mobile-app'
  },

  'desktop-app-v3': {
    id: 'desktop-app-v3',
    name: 'Desktop App (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Client Application',
    tagline: 'Unified Enterprise Workstation Softphone',
    shortDesc: 'Full workstation softphone for Windows and macOS. Features contact center agent controls and CRM caller screen pop.',
    fullDesc: 'The V3 Desktop App is a workstation softphone engineered for full-time computer users and contact center agents. It features one-click calling, contact center agent state controls (Ready, Not Ready, Wrap-up), CRM caller screen pops, and corporate directory integration.',
    architecture: 'V3 License Model — Client application included with V3 enterprise user licenses.',
    targetCustomer: 'Full-time desk workers, contact center agents, and administrative personnel.',
    valueProposition: 'Boosts agent productivity by presenting caller CRM information on screen before the agent even answers the call.',
    pitchGuide: 'Agents save 15-20 seconds per call with automatic screen pops displaying customer history.',
    discoveryQuestions: [
      'Would agent productivity improve if caller customer information popped up on screen automatically?'
    ],
    features: [
      'Windows and macOS Native Application',
      'CRM Caller Information Screen-Pop Integration',
      'Contact Center Agent Disposition & State Controls',
      'One-Click Call Transfer & Conference Dialing',
      'Corporate Directory Search & Quick Dialing'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/desktop-app'
  },

  'web-phone': {
    id: 'web-phone',
    name: 'Web Phone (V3)',
    model: 'V3',
    modelLabel: 'V3 License Model',
    category: 'Client Application',
    tagline: 'Zero-Install WebRTC Browser Calling Client',
    shortDesc: 'Pure browser softphone powered by WebRTC. Users place and receive HD calls directly inside Chrome or Edge with zero installation.',
    fullDesc: 'Web Phone is a zero-install softphone running entirely inside modern web browsers using WebRTC technology. Users simply open a browser tab in Google Chrome, Microsoft Edge, or Firefox, log in with their credentials, and immediately make and receive HD voice calls.',
    architecture: 'V3 License Model — Web client accessible with V3 enterprise user licenses.',
    targetCustomer: 'BPOs, outsourced contact centers, Chromebook users, and locked-down corporate IT environments that forbid software downloads.',
    valueProposition: 'Zero installation and zero IT onboarding friction: send agents a link and they are live in 30 seconds.',
    pitchGuide: 'Eliminates software deployment tickets and compatibility issues: any device with a modern web browser becomes an active phone station.',
    discoveryQuestions: [
      'Does your corporate IT policy restrict installing third-party .exe or .dmg software on company laptops?',
      'Do you hire seasonal or outsourced agents who need instant access via browser?'
    ],
    features: [
      'Zero Software Download or Installation Required',
      'Pure WebRTC HD Voice Calling in Browser',
      'Compatible with Google Chrome, Edge, and Firefox',
      'Full Dialpad, Call Transfer, and Hold Functions',
      'Instant Onboarding for Remote & Seasonal Agents'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/web-phone'
  },

  // ==========================================
  // OSS / BSS PLATFORM PRODUCTS
  // ==========================================
  'business-hub': {
    id: 'business-hub',
    name: 'Business Hub',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS',
    category: 'Management',
    tagline: 'Master Multi-Tenant Administration & Partner Portal',
    shortDesc: 'Master multi-tenant administration control tower for managing partner hierarchies, end-customer provisioning, and global configs.',
    fullDesc: 'Business Hub is the master control tower for B3Networks operations and white-label wholesale telecom partners. It allows master tenants to manage multi-tiered partner reseller hierarchies, provision customer accounts, and enforce platform configurations.',
    architecture: 'OSS/BSS Platform Backbone — Included for telecom carrier partners and wholesale resellers.',
    targetCustomer: 'Telecom carriers, master resellers, MVNOs, and system integrators reselling cloud communications.',
    valueProposition: 'Enables white-label telecom partners to run their own cloud telephony business with complete multi-tier delegation.',
    pitchGuide: 'Allows partners to become a full-service cloud telco in days under their own brand name.',
    discoveryQuestions: [
      'Do you want to resell cloud telephony under your own brand to your business customer base?'
    ],
    features: [
      'Multi-Tiered Tenant Reseller Hierarchy',
      'Complete White-Label Partner Branding',
      'Instant Customer Account Provisioning',
      'Centralized Global Platform Governance'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'sales-hub': {
    id: 'sales-hub',
    name: 'Sales Hub',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS',
    category: 'Sales & Quoting',
    tagline: 'CPaaS Quotation, Pipeline & Telecom Deal Management',
    shortDesc: 'CPaaS quotation generator, rate plan packaging tool, and sales pipeline tracker designed specifically for telecom resellers.',
    fullDesc: 'Sales Hub streamlines CPaaS proposal creation for telecom partners. Sales reps can bundle telephone numbers, recurring extension subscriptions, and minute commitments into professional rate card quotes, tracking deals from proposal to closed contract.',
    architecture: 'OSS/BSS Platform Backbone — Sales enablement module for reseller commercial teams.',
    targetCustomer: 'Telecom reseller sales managers, commercial teams, and business development representatives.',
    valueProposition: 'Generates accurate CPaaS quotes with complex number bundles and usage commitments in seconds.',
    pitchGuide: 'Eliminates quotation errors and accelerates sales cycles for recurring telecom services.',
    discoveryQuestions: [
      'How does your sales team currently calculate complex recurring CPaaS and usage quotes?'
    ],
    features: [
      'CPaaS Rate Plan & Number Bundle Quotation Builder',
      'Reseller Margin Calculation & Discount Approval',
      'Sales Deal Pipeline & Contract Generation',
      'Proposal PDF Export & Electronic Acceptance'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'finance-hub': {
    id: 'finance-hub',
    name: 'Finance Hub',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS',
    category: 'Finance',
    tagline: 'Carrier Settlement, Interconnect Reconciliation & Margin Tracking',
    shortDesc: 'Financial command center managing carrier settlement, wholesale interconnect billing reconciliation, and profit margin tracking.',
    fullDesc: 'Finance Hub gives telecom finance teams complete visibility into carrier wholesale interconnect termination costs, margin reconciliation against customer billing, and wholesale settlement tracking to prevent margin leakage.',
    architecture: 'OSS/BSS Platform Backbone — Financial governance module for operators and resellers.',
    targetCustomer: 'Telecom CFOs, finance directors, and billing operations teams.',
    valueProposition: 'Prevents margin leakage by reconciling wholesale carrier invoices against retail customer usage.',
    pitchGuide: 'Detects discrepancies between billed customer minutes and carrier termination costs automatically.',
    discoveryQuestions: [
      'How do you currently verify that carrier termination costs match billed customer minutes?'
    ],
    features: [
      'Wholesale Carrier Interconnect Cost Settlement',
      'Retail Revenue Margin Reconciliation & Leakage Alerts',
      'Automated Usage CDR Rating & Journal Export',
      'Multi-Currency Financial Analytics Dashboard'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'security-hub': {
    id: 'security-hub',
    name: 'Security Hub',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS',
    category: 'Security',
    tagline: 'Real-Time Toll-Fraud Detection & Telecom Threat Defense',
    shortDesc: 'Real-time toll-fraud detection and mitigation system that automatically identifies and blocks SIP scanning and anomalous call spikes.',
    fullDesc: 'Security Hub safeguards the telecom network from malicious intrusion and toll fraud. It continuously analyzes live call traffic patterns, identifies anomalous destination spikes, blocks unauthorized SIP scanning IPs, and enforces rate-limiting safeguards.',
    architecture: 'OSS/BSS Platform Backbone — Autonomous security monitoring protecting all network tenants.',
    targetCustomer: 'Network security engineers, telecom compliance directors, and IT risk managers.',
    valueProposition: 'Prevents catastrophic toll-fraud losses (which can reach tens of thousands of dollars in minutes) with automated blocking.',
    pitchGuide: 'Provides peace of mind with 24/7 automated traffic scanning that halts suspicious international call floods immediately.',
    discoveryQuestions: [
      'What automated safeguards do you have against SIP scanning and unauthorized international toll fraud?'
    ],
    features: [
      'Real-Time International Toll-Fraud Pattern Detection',
      'Automated Malicious IP Blacklisting & Rate Limiting',
      'Anomalous Call Volume Threshold Alerts',
      'Detailed Security Incident Audit Trails'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'number-management': {
    id: 'number-management',
    name: 'Number Management',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS',
    category: 'Telecom Core',
    tagline: 'Global DID Telephone Number Inventory & Porting Orchestration',
    shortDesc: 'Global telephone DID inventory orchestration: number procurement, regulatory compliance, porting workflows, and routing assignment.',
    fullDesc: 'Number Management is the central inventory control system for telephone numbers. Operators manage global DID inventory across Singapore, Malaysia, Australia, and 60+ countries, orchestrate porting orders, and assign numbers dynamically to tenant accounts.',
    architecture: 'OSS/BSS Platform Backbone — Core inventory layer for wholesale and enterprise accounts.',
    targetCustomer: 'Telcos, MVNOs, and enterprise telecom managers overseeing large pools of numbers.',
    valueProposition: 'Centralizes the lifecycle of thousands of phone numbers from ordering and porting to tenant assignment.',
    pitchGuide: 'Manage regional number pools effortlessly with automated porting workflows and regulatory KYC tracking.',
    discoveryQuestions: [
      'How does your organization manage and track hundreds of virtual and fixed phone numbers?'
    ],
    features: [
      'Global DID Number Pool Inventory Management',
      'Automated Telephone Number Porting Workflow',
      'Batch Number Assignment & Routing Reallocation',
      'Regulatory KYC & Subscriber Identification Tracking'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'support-hub': {
    id: 'support-hub',
    name: 'Support Hub',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Operations',
    tagline: 'Internal Partner Support Ticketing & SLA Escalation',
    shortDesc: 'Internal support ticket management, trouble ticket escalation, and SLA monitoring for partner operations teams.',
    fullDesc: 'Support Hub provides centralized ticketing and incident resolution for B3Networks partners and operations staff. It tracks telecom service outages, line provisioning inquiries, and carrier escalations.',
    architecture: 'OSS/BSS Platform Backbone — Included for telecom carrier partners and wholesale resellers.',
    targetCustomer: 'Telecom operations teams, partner support desk leads, and network engineers.',
    valueProposition: 'Ensures structured escalation and quick resolution of carrier-grade service inquiries.',
    pitchGuide: 'Enables reseller support teams to coordinate directly with B3Networks tier-3 telecom engineers.',
    discoveryQuestions: [
      'How does your team currently escalate and track telecom carrier incidents?'
    ],
    features: [
      'Telecom Ticket Queue Management',
      'SLA Escalation Timers & Alerts',
      'Incident Diagnostic History'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'customer-app': {
    id: 'customer-app',
    name: 'Customer App',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Operations',
    tagline: 'End-Customer Account & Entitlement Administration',
    shortDesc: 'Manage customer accounts, profiles, service agreements, and subscribed feature entitlements.',
    fullDesc: 'Customer App allows partner administrators to manage corporate customer accounts, company profiles, active service entitlements, and plan assignments across the B3Networks platform.',
    architecture: 'OSS/BSS Platform Backbone — Core provisioning tool for reseller operations.',
    targetCustomer: 'Partner billing operations and customer onboarding managers.',
    valueProposition: 'Centralizes company account records, billing contacts, and plan entitlements.',
    pitchGuide: 'Provision customer organizations and adjust subscribed feature quotas in seconds.',
    discoveryQuestions: [
      'How do you currently administer customer account profiles and entitlements?'
    ],
    features: [
      'Customer Profile & Contact Records',
      'Feature Entitlement Toggles',
      'Account Status & Quota Controls'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'product-app': {
    id: 'product-app',
    name: 'Product App',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Operations',
    tagline: 'Product Catalog Builder & Rate Card Packaging',
    shortDesc: 'Define product catalogs, recurring subscription plans, and service feature bundles.',
    fullDesc: 'Product App is the commercial catalog configuration engine. Telecom operators configure products, define recurring plan tiers, bundle minutes or DIDs, and establish retail rate cards.',
    architecture: 'OSS/BSS Platform Backbone — Commercial catalog configuration for wholesale partners.',
    targetCustomer: 'Product managers and commercial directors at partner telecommunication firms.',
    valueProposition: 'Create custom service bundles and recurring pricing packages easily.',
    pitchGuide: 'Package voice and CPaaS features into market-ready retail plans without software development.',
    discoveryQuestions: [
      'How quickly can your business launch new packaged telecom bundles to customers?'
    ],
    features: [
      'Catalog Feature Bundling',
      'Subscription Tier Pricing Rules',
      'Add-on Rate Card Setup'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'finance-app': {
    id: 'finance-app',
    name: 'Finance App',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Finance',
    tagline: 'Billing Cycle Runs & Core Rating Engine',
    shortDesc: 'Core financial management for monthly billing runs, usage rating, and ledger reconciliation.',
    fullDesc: 'Finance App executes billing cycles, applies CDR rating engines to raw call records, calculates usage charges, and reconciles financial accounts.',
    architecture: 'OSS/BSS Platform Backbone — Financial processing engine for carriers and resellers.',
    targetCustomer: 'Billing operations and accounting teams.',
    valueProposition: 'Automates rating and billing cycle execution across thousands of tenant accounts.',
    pitchGuide: 'Handles high-volume usage rating accurately, eliminating manual billing calculations.',
    discoveryQuestions: [
      'Do you experience billing delays or calculation errors when processing monthly telecom usage?'
    ],
    features: [
      'Automated Usage Rating Engine',
      'Recurring Monthly Billing Cycles',
      'Ledger Entry Synchronization'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'invoice-app': {
    id: 'invoice-app',
    name: 'Invoice App',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Billing',
    tagline: 'Automated Invoicing & Multi-Currency Billing',
    shortDesc: 'Automated invoice generation, tax calculations, and delivery management.',
    fullDesc: 'Invoice App automates customer invoice generation. It produces branded, tax-compliant PDF invoices, sends email delivery notices, and tracks payment settlement status in multiple currencies.',
    architecture: 'OSS/BSS Platform Backbone — Automated billing dispatch module.',
    targetCustomer: 'Accounting and billing teams handling multi-tenant invoicing.',
    valueProposition: 'Ensures on-time, error-free customer invoice generation with itemized usage breakdowns.',
    pitchGuide: 'Provides customers with clear, professional itemized invoices showing extensions, DIDs, and usage.',
    discoveryQuestions: [
      'How are itemized telecom invoices currently delivered to your customers?'
    ],
    features: [
      'Branded PDF Invoice Generation',
      'Itemized Call & Service Detail Statements',
      'Multi-Currency Support & Payment Status'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'contract-app': {
    id: 'contract-app',
    name: 'Contract App',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Operations',
    tagline: 'Digital Service Agreement & Contract Lifecycle',
    shortDesc: 'Digital contract management, commitment term tracking, and renewal management.',
    fullDesc: 'Contract App tracks customer service agreements, minimum commitment terms, discount clauses, and renewal dates across subscriber accounts.',
    architecture: 'OSS/BSS Platform Backbone — Customer lifecycle administration module.',
    targetCustomer: 'Contract managers, legal ops, and account managers.',
    valueProposition: 'Prevents contract lapse and ensures commitment terms are enforced.',
    pitchGuide: 'Keeps track of every client contract term and renewal milestone automatically.',
    discoveryQuestions: [
      'How do you currently track customer telecom service terms and expiration dates?'
    ],
    features: [
      'Service Agreement Lifecycle Tracking',
      'Commitment Term & Rate Card Association',
      'Renewal Date Notifications'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'access-control': {
    id: 'access-control',
    name: 'Access Control',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Security',
    tagline: 'Role-Based Access Management & Authentication',
    shortDesc: 'Role-based access management, permission sets, and authentication policies.',
    fullDesc: 'Access Control governs security and user authentication across all portal apps. Admins configure role-based permissions (RBAC), multi-factor authentication (MFA), and IP restriction policies.',
    architecture: 'OSS/BSS Platform Backbone — Security governance module.',
    targetCustomer: 'Enterprise IT security administrators and compliance officers.',
    valueProposition: 'Protects sensitive customer and call data with granular role delegation.',
    pitchGuide: 'Enables partners to assign strict view/edit roles for billing, technical, and sales staff.',
    discoveryQuestions: [
      'Do you need role-based access control to separate billing data from technical phone settings?'
    ],
    features: [
      'Role-Based Access Control (RBAC)',
      'Multi-Factor Authentication (MFA)',
      'Granular Permission Scopes'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'edge-server': {
    id: 'edge-server',
    name: 'Edge Server',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Infrastructure',
    tagline: 'Distributed Media Relays & Regional Edge Routing',
    shortDesc: 'Distributed edge infrastructure management for low-latency regional call processing.',
    fullDesc: 'Edge Server represents B3Networks distributed media relay and Session Border Controller (SBC) nodes deployed in regional datacenters. It ensures voice traffic remains local and delivers low latency.',
    architecture: 'OSS/BSS Platform Backbone — Core network infrastructure layer.',
    targetCustomer: 'Telecom network engineers and enterprise IT architects.',
    valueProposition: 'Guarantees sub-50ms regional voice latency and crisp HD audio quality.',
    pitchGuide: 'Local media processing keeps voice packet travel minimal, eliminating audio delay or jitter.',
    discoveryQuestions: [
      'Are your regional branches experiencing voice latency or echo on cross-border calls?'
    ],
    features: [
      'Distributed Regional Media Relays',
      'Low Latency Voice Peering Points',
      'Automated Edge Failover'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  },

  'admin-audit': {
    id: 'admin-audit',
    name: 'Admin Audit',
    model: 'OSS/BSS',
    modelLabel: 'OSS/BSS Platform',
    category: 'Compliance',
    tagline: 'Administrative Activity Logging & Governance',
    shortDesc: 'Immutable administrator activity logging for compliance, governance, and audit trails.',
    fullDesc: 'Admin Audit logs all configuration changes, user provisioning actions, and administrative logins across tenant systems in a tamper-resistant audit trail.',
    architecture: 'OSS/BSS Platform Backbone — Compliance and governance logging module.',
    targetCustomer: 'Compliance officers, security auditors, and system administrators.',
    valueProposition: 'Satisfies enterprise regulatory compliance and security governance requirements.',
    pitchGuide: 'Every critical system change is recorded with timestamp, user ID, IP address, and changed value.',
    discoveryQuestions: [
      'Do your regulatory auditors require access to administrative system change logs?'
    ],
    features: [
      'Immutable Administrative Audit Logging',
      'Search by Admin User, Action, and Date',
      'Compliance Export Ready'
    ],
    helpjuiceUrl: 'https://b3networks.helpjuice.com/en_US/ossbss-answers'
  }
};

