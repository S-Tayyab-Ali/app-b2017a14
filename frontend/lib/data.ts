import { Question, Recommendation, Resource, ProfessionalGuidance } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Who are you looking to help today?',
    options: [
      { id: 'o1', label: 'Myself', value: 'self' },
      { id: 'o2', label: 'My Parent(s)', value: 'parent' },
      { id: 'o3', label: 'A Client', value: 'client' },
      { id: 'o4', label: 'Spouse/Partner', value: 'spouse' },
    ],
  },
  {
    id: 'q2',
    text: 'What is the primary mobility concern?',
    options: [
      { id: 'o1', label: 'Difficulty with stairs', value: 'stairs' },
      { id: 'o2', label: 'Balance / Fear of falling', value: 'balance' },
      { id: 'o3', label: 'Using a walker or wheelchair', value: 'mobility_aid' },
      { id: 'o4', label: 'Getting in/out of bath or bed', value: 'transfers' },
      { id: 'o5', label: 'None / Preventive only', value: 'preventive' },
    ],
  },
  {
    id: 'q3',
    text: 'Where is the master bedroom located?',
    options: [
      { id: 'o1', label: 'Ground Floor', value: 'ground' },
      { id: 'o2', label: 'Upstairs', value: 'upstairs' },
    ],
  },
  {
    id: 'q4',
    text: 'Describe the bathroom situation.',
    options: [
      { id: 'o1', label: 'Walk-in shower with no step', value: 'curbless' },
      { id: 'o2', label: 'Shower with a small step/curb', value: 'step_shower' },
      { id: 'o3', label: 'Bathtub only', value: 'tub' },
      { id: 'o4', label: 'Tub/Shower combo', value: 'tub_shower' },
    ],
  },
  {
    id: 'q5',
    text: 'How is the lighting in the home?',
    options: [
      { id: 'o1', label: 'Bright and well-lit', value: 'good' },
      { id: 'o2', label: 'Dim in some areas', value: 'dim' },
      { id: 'o3', label: 'Dark / Hard to see at night', value: 'dark' },
    ],
  },
  {
    id: 'q6',
    text: 'Are there loose rugs or cluttered walkways?',
    options: [
      { id: 'o1', label: 'Yes, many rugs/clutter', value: 'clutter' },
      { id: 'o2', label: 'A few throw rugs', value: 'some_rugs' },
      { id: 'o3', label: 'No, clear paths', value: 'clear' },
    ],
  },
  {
    id: 'q7',
    text: 'What is your approximate budget for improvements?',
    options: [
      { id: 'o1', label: 'Low / DIY only', value: 'low' },
      { id: 'o2', label: 'Moderate (willing to hire help)', value: 'medium' },
      { id: 'o3', label: 'High (major renovations possible)', value: 'high' },
    ],
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  // General / Preventive
  {
    id: 'r1',
    title: 'Remove Throw Rugs',
    description: 'Remove all loose throw rugs or secure them with double-sided tape to prevent tripping hazards.',
    category: 'DIY',
    cost: '$',
    priority: 'High',
    tags: ['clutter', 'some_rugs', 'balance', 'preventive'],
  },
  {
    id: 'r2',
    title: 'Improve Lighting',
    description: 'Install higher wattage bulbs and add nightlights in hallways and bathrooms.',
    category: 'DIY',
    cost: '$',
    priority: 'Medium',
    tags: ['dim', 'dark', 'preventive'],
  },
  // Bathroom
  {
    id: 'r3',
    title: 'Install Grab Bars',
    description: 'Install grab bars in the shower and near the toilet. Do not use suction cup bars.',
    category: 'Low-Cost',
    cost: '$$',
    priority: 'High',
    tags: ['balance', 'transfers', 'tub', 'tub_shower', 'step_shower'],
  },
  {
    id: 'r4',
    title: 'Shower Chair or Bench',
    description: 'Add a sturdy shower chair or transfer bench to allow bathing while seated.',
    category: 'DIY',
    cost: '$',
    priority: 'High',
    tags: ['balance', 'transfers', 'tub', 'tub_shower'],
  },
  {
    id: 'r5',
    title: 'Handheld Shower Head',
    description: 'Replace fixed shower head with a handheld model to make bathing easier while seated.',
    category: 'DIY',
    cost: '$',
    priority: 'Medium',
    tags: ['balance', 'transfers', 'tub', 'tub_shower', 'step_shower'],
  },
  {
    id: 'r6',
    title: 'Curbless Shower Conversion',
    description: 'Renovate bathroom to create a zero-entry shower for wheelchair accessibility.',
    category: 'Professional',
    cost: '$$$',
    priority: 'High',
    tags: ['mobility_aid', 'transfers'],
  },
  // Stairs
  {
    id: 'r7',
    title: 'Dual Handrails',
    description: 'Ensure staircases have sturdy handrails on both sides.',
    category: 'Low-Cost',
    cost: '$$',
    priority: 'High',
    tags: ['stairs', 'balance'],
  },
  {
    id: 'r8',
    title: 'Stair Lift',
    description: 'Install a mechanical stair lift to safely navigate between floors.',
    category: 'Professional',
    cost: '$$$',
    priority: 'High',
    tags: ['stairs', 'mobility_aid'],
  },
  // Bedroom
  {
    id: 'r9',
    title: 'Bed Rail',
    description: 'Install a bed rail to assist with getting in and out of bed.',
    category: 'DIY',
    cost: '$',
    priority: 'Medium',
    tags: ['transfers', 'balance'],
  },
  {
    id: 'r10',
    title: 'Main Floor Living',
    description: 'Consider relocating the bedroom to the ground floor to avoid stairs.',
    category: 'DIY',
    cost: '$',
    priority: 'High',
    tags: ['stairs', 'upstairs', 'mobility_aid'],
  },
];

export const RESOURCES: Resource[] = [
  {
    id: 'res1',
    name: 'OC Office on Aging',
    category: 'Programs',
    services: ['Information & Assistance', 'Caregiver Support', 'Health Insurance Counseling'],
    phone: '800-510-2020',
    website: 'https://www.officeonaging.ocgov.com',
    description: 'The primary local agency providing resources and programs for older adults in Orange County.',
    costRange: '$',
  },
  {
    id: 'res2',
    name: 'Council on Aging - Southern California',
    category: 'Programs',
    services: ['HICAP', 'Ombudsman', 'ReConnect Program'],
    phone: '714-479-0107',
    website: 'https://www.coasc.org',
    description: 'Non-profit organization providing advocacy and support services for seniors.',
    costRange: '$',
  },
  {
    id: 'res3',
    name: 'Habitat for Humanity OC',
    category: 'Contractors',
    services: ['Home Repairs', 'Accessibility Modifications', 'Veteran Services'],
    phone: '714-434-6200',
    website: 'https://www.habitatoc.org',
    description: 'Offers home repair programs for low-income seniors and veterans.',
    costRange: '$',
  },
  {
    id: 'res4',
    name: 'Safe at Home Medical',
    category: 'Contractors',
    services: ['Grab Bar Installation', 'Ramps', 'Stair Lifts'],
    phone: '949-555-0123',
    description: 'Specialized contractor for home safety modifications. CAPS certified.',
    costRange: '$$',
  },
  {
    id: 'res5',
    name: 'Medi-Cal Home & Community Based Services',
    category: 'Funding',
    services: ['Financial Assistance', 'Care Services'],
    phone: '800-541-5555',
    description: 'State program that may fund home modifications for eligible individuals.',
    costRange: '$',
  },
  {
    id: 'res6',
    name: 'OC Handyman Services',
    category: 'Contractors',
    services: ['General Repairs', 'Lighting', 'Minor Installs'],
    phone: '714-555-0199',
    description: 'Reliable local handyman service for minor home updates.',
    costRange: '$$',
  },
];

export const PROFESSIONAL_GUIDANCE: ProfessionalGuidance[] = [
  {
    id: 'pg1',
    title: 'Occupational Therapist (OT)',
    roleDescription: 'Evaluates your ability to perform daily activities and recommends home modifications tailored to your specific physical needs.',
    whenToContact: 'When you are unsure what modifications are needed or if there is a specific medical condition affecting mobility.',
    sampleQuestions: [
      'Can you conduct a home safety evaluation?',
      'Do you have experience with aging-in-place modifications?',
      'Can you provide a written report of recommendations for my contractor?',
    ],
    preparationTips: [
      'List your daily challenges (e.g., trouble with stairs, bathing).',
      'Have a floor plan or photos of your home ready.',
    ],
  },
  {
    id: 'pg2',
    title: 'CAPS Certified Contractor',
    roleDescription: 'A builder or remodeler with "Certified Aging-in-Place Specialist" training, understanding the unique needs of older adults.',
    whenToContact: 'When you need structural changes (ramps, widening doors) or major installations.',
    sampleQuestions: [
      'Are you CAPS certified?',
      'Can you provide references from past aging-in-place projects?',
      'Do you handle permits and inspections?',
    ],
    preparationTips: [
      'Set a clear budget.',
      'Identify priority areas (bathroom, entryways).',
    ],
  },
  {
    id: 'pg3',
    title: 'Area Agency on Aging',
    roleDescription: 'Local government agency connecting seniors to resources, funding, and support programs.',
    whenToContact: 'When you need information on funding, caregiver support, or local senior services.',
    sampleQuestions: [
      'What home repair programs are available in my area?',
      'Is there financial assistance for home modifications?',
      'Can you refer me to vetted local service providers?',
    ],
    preparationTips: [
      'Have your income information ready (for funding eligibility).',
      'List the specific services you are looking for.',
    ],
  },
];

