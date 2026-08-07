// All copy below is sourced directly from the client-provided content deck
// (Third_Way_Advisory_Website_Data_Requested.docx) and re-flowed into
// website sections without altering meaning.

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Verticals', href: '/verticals' },
  { label: 'Approach', href: '/approach' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Associates', href: '/associates' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' }
]

export const hero = {
  eyebrow: 'Strategic Advisory House — Bengaluru, Karnataka',
  headline: 'Empowering Visionary Growth',
  sub: 'Third Way Advisory is a premier Strategic Advisory House. We guide elite enterprises through complex regulatory landscapes and financial ecosystems.',
  ctaPrimary: { label: 'Partner With Us', href: '/contact' },
  ctaSecondary: { label: 'Explore Our Verticals', href: '/verticals' },
  stats: [
    { value: 4, suffix: '', label: 'Advisory Verticals' },
    { value: 100, suffix: '%', label: 'Institutional Discretion' },
    { value: 1, suffix: 'st', label: 'Point of Contact, Senior Partners' }
  ]
}

export const about = {
  eyebrow: 'About Us',
  heading: 'Empowering Visionary Growth',
  body: 'Third Way Advisory is a premier Strategic Advisory House. We guide elite enterprises through complex regulatory landscapes and financial ecosystems.',
  mission: {
    heading: 'Our Mission',
    body: 'We accelerate corporate growth by bridging capital, compliance, and strategy.'
  },
  coreValue: {
    heading: 'Our Core Value',
    body: 'We do not just advise; we execute with precision.'
  },
  why: {
    heading: 'Why Third Way?',
    points: [
      {
        title: 'Deep Expertise',
        body: 'Decades of navigating complex market dynamics.'
      },
      {
        title: 'Global Perspective',
        body: 'Local execution backed by international standards.'
      },
      {
        title: 'Integrity First',
        body: 'Uncompromising commitment to ethical advisory.'
      }
    ]
  }
}

export const verticals = [
  {
    id: 'financial-advisory',
    tag: 'Vertical 01',
    title: 'Financial Advisory',
    tagline: 'Strategic Capital Structuring',
    body: 'We design robust financial strategies to fuel your business expansion. Our team optimizes your capital structure to minimize risk and maximize shareholder value.',
    items: [
      { title: 'Corporate Finance', body: 'Capital raising, debt restructuring, and cash flow optimization.' },
      { title: 'Project Finance', body: 'Structuring viable funding models for large-scale infrastructure.' },
      { title: 'Risk Assessment', body: 'Identifying market vulnerabilities to safeguard asset growth.' }
    ]
  },
  {
    id: 'liaisoning',
    tag: 'Vertical 02',
    title: 'Liaisoning',
    tagline: 'Seamless Stakeholder Alignment',
    body: 'We act as the vital bridge between your enterprise and critical external stakeholders. Our liaisoning services ensure smooth communication channels with government bodies, public sectors, and corporate conglomerates.',
    items: [
      { title: 'Strategic Networking', body: 'Connecting your business with key industry decision-makers.' },
      { title: 'Consensus Building', body: 'Resolving complex multi-party bottlenecks efficiently.' },
      { title: 'Alliance Management', body: 'Fostering long-term public and private partnerships.' }
    ]
  },
  {
    id: 'regulatory-stewardship',
    tag: 'Vertical 03',
    title: 'Regulatory Stewardship',
    tagline: 'Navigating Compliance with Confidence',
    body: 'Regulatory environments evolve rapidly, presenting both risks and opportunities. We provide proactive stewardship to ensure your business remains fully compliant while maintaining operational agility.',
    items: [
      {
        title: 'KRERA Expert Documentation',
        body: 'Preparing, structuring, and auditing all technical, legal, and financial disclosures required for seamless Karnataka Real Estate Regulatory Authority compliance.'
      },
      {
        title: 'Seamless KRERA Submissions',
        body: 'Managing end-to-end registration, mandatory quarterly updates, and project extension filings with absolute precision.'
      },
      {
        title: 'Urban Development Clearances (BDA & BBMP)',
        body: 'Navigating complex zoning laws, land-use conversions, building plan sanctions, and securing Khata transfers across the Bangalore Development Authority (BDA) and Bruhat Bengaluru Mahanagara Palike (BBMP).'
      },
      {
        title: 'Industrial & Infrastructure Clearances (KIADB)',
        body: 'Strategic counsel for industrial land acquisition, lease-cum-sale execution, project approvals, and compliance verification with the Karnataka Industrial Areas Development Board (KIADB).'
      },
      {
        title: 'Approval Guidance & Support',
        body: 'Providing high-level institutional liaisoning to resolve compliance bottlenecks, secure structural safety approvals, and clear multi-agency legal deadlocks.'
      },
      {
        title: 'Policy Interpretation & Audits',
        body: 'Translating statutory real estate mandates and evolving local urban laws into strategic advantages while preempting compliance risks before they impact your timeline.'
      }
    ]
  },
  {
    id: 'transactions',
    tag: 'Vertical 04',
    title: 'Acquisition & Institutional Transaction',
    tagline: 'Executing High-Value Deals, Asset Resolutions & Real Estate Transactions',
    body: 'We orchestrate sophisticated corporate transactions, high-stakes asset resolutions, and large-scale real estate deal-making. From initial valuation to final integration — or structuring complex developmental partnerships — we manage the entire transaction lifecycle with absolute discretion.',
    items: [
      {
        title: 'Joint Development Agreements (JDA)',
        body: 'Structuring equitable, bulletproof legal and financial frameworks to align landowners and elite builders for large-scale developments.'
      },
      {
        title: 'Large Real Estate Transactions',
        body: 'Facilitating high-ticket land monetization, outright commercial sales, and institutional property acquisitions.'
      },
      { title: 'M&A Advisory', body: 'Identifying target companies and strategic real estate assets that offer maximum synergistic value.' },
      {
        title: 'Due Diligence',
        body: 'Conducting exhaustive financial, title, legal, and operational investigations to derisk complex property portfolios.'
      },
      {
        title: 'Distressed Asset & ARC Turnarounds',
        body: 'Serving as an intermediary to negotiate, restructure, and settle stressed loans with Banks and Asset Reconstruction Companies (ARCs).'
      }
    ]
  }
]

export const leadership = {
  eyebrow: 'Leadership Team',
  heading: 'Directed by Institutional Experience',
  people: [
    {
      name: '[Partner Name]',
      title: 'Managing Partner, Financial Advisory & Strategy',
      role: "Directs the firm's capital structuring and cross-border M&A strategy.",
      background: 'Over [X] years of investment banking and enterprise growth experience.',
      credentials: 'Former [Previous High-Profile Title] | [Degree/Institution].'
    },
    {
      name: '[Partner Name]',
      title: 'Partner, Regulatory Stewardship & Liaisoning',
      role: 'Leads institutional government relations and local compliance frameworks.',
      background: 'Specialist in unlocking deadlocks with KRERA, BDA, BBMP, and KIADB.',
      credentials: 'Advises prominent infrastructure funds and top-tier real estate groups.'
    }
  ]
}

export const associates = {
  partners: {
    eyebrow: 'Partners',
    heading: 'Co-Authoring Success Stories',
    body: 'Our partners are the cornerstone of our global ecosystem. We collaborate with leading financial institutions, legal experts, and industry specialists to deliver unmatched value to our clients.',
    items: [
      { title: 'Investment Banks', body: 'Global networks providing deep liquidity pools.' },
      { title: 'Legal Consuls', body: 'Top-tier firms ensuring bulletproof transaction legalities.' },
      { title: 'Tech Innovators', body: 'Pioneers enhancing our analytical and data capabilities.' }
    ]
  },
  clients: {
    eyebrow: 'Clients',
    heading: 'Trusted by Market Leaders',
    body: 'We serve a diverse portfolio of ambitious enterprises, institutional investors, and high-growth startups. Our clients trust our house to solve their most critical financial and regulatory challenges.',
    items: [
      { title: 'Conglomerates', body: 'Streamlining multi-national regulatory compliance.' },
      { title: 'Private Equity', body: 'Assisting funds in identifying lucrative acquisition targets.' },
      { title: 'Mid-Market Firms', body: 'Accelerating the transition into institutional-grade enterprises.' }
    ]
  }
}

export const insights = {
  eyebrow: 'Insights & Whitepapers',
  heading: 'Institutional Intelligence, Published',
  categories: [
    {
      label: 'Category A: Regulatory Intelligence',
      items: [
        { type: 'Whitepaper', title: 'Navigating Urban Transitions: Structural Shifts in BDA & BBMP Compliance.' },
        { type: 'Article', title: 'A Checklist for Seamless KRERA Quarterly Filings and Extension Submissions.' }
      ]
    },
    {
      label: 'Category B: Capital & Strategy',
      items: [
        { type: 'Whitepaper', title: 'Optimising Capital Structures for Infrastructure Scaling in Emerging Markets.' },
        { type: 'Article', title: 'Evaluating Synergy: Best Practices in Modern Corporate Due Diligence.' }
      ]
    },
    {
      label: 'Category C: Stressed Asset Resolution & Turnarounds',
      items: [
        { type: 'Whitepaper', title: 'Navigating Corporate Debt Resolution: Strategic Interventions with ARCs and Banks.' }
      ]
    },
    {
      label: 'Category D: Real Estate Deal-Making & Strategic Partnerships',
      items: [
        { type: 'Whitepaper', title: 'The Anatomy of a Bulletproof JDA: Protecting Landowner Equity and Builder Viability.' }
      ]
    }
  ]
}

export const careers = {
  eyebrow: 'Careers',
  heading: 'Join Our Strategic Advisory House',
  body: "At Third Way Advisory, we tackle the market's most intricate corporate finance and statutory hurdles. We seek elite minds capable of delivering institutional-grade clarity.",
  whyHeading: 'Why Build Your Career Here?',
  points: [
    { title: 'High-Impact Deals', body: 'Work on transformative cross-border transactions and infrastructure assets.' },
    { title: 'Ecosystem Exposure', body: 'Collaborate directly with market leaders, legal boards, and financial institutions.' },
    { title: 'Merit-Driven Culture', body: 'Fast-tracked growth for professionals who execute with absolute precision.' }
  ],
  submit: {
    heading: 'Submit Your Credentials',
    body: 'Forward your professional dossier and curriculum vitae to',
    email: 'careers@thirdway.com'
  }
}

export const contact = {
  eyebrow: 'Contact Us',
  heading: 'Partner With Our Advisory House',
  body: "Connect with our senior partners to discuss your enterprise's financial structuring, liaisoning, or regulatory challenges. We operate with complete discretion and institutional precision.",
  headquarters: {
    heading: 'Headquarters',
    lines: ['Third Way Advisory', '[Insert Business Park/Building Name]', '[Insert Floor & Suite Number]', 'Bengaluru, Karnataka, India']
  },
  channels: {
    heading: 'Direct Engagement Channels',
    items: [
      { label: 'Institutional Inquiries', value: 'advisory@thirdway.com', href: 'mailto:advisory@thirdway.com' },
      { label: 'Corporate Office', value: '[Insert Phone Number]', href: '#' }
    ]
  },
  framework: {
    heading: 'Corporate Inquiry Framework',
    body: 'To help us route your request to the appropriate senior advisory partner, please specify your query domain when reaching out:',
    domains: [
      'Financial Advisory & Restructuring',
      'Regulatory Stewardship & Clearance (KRERA, BDA, BBMP, KIADB)',
      'Large Real Estate Transactions & JDA Structuring',
      'Institutional Transactions, M&A & Stressed Asset Resolution (ARC/Liquidation)'
    ]
  }
}

export const footer = {
  name: 'Third Way Advisory',
  tagline: 'Bridging capital, compliance, and strategy for elite enterprises.',
  city: 'Bengaluru, Karnataka, India'
}
