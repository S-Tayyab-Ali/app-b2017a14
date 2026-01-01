export type Category = 'Safety' | 'Funding' | 'Contractors' | 'Programs';
export type CostRange = '$' | '$$' | '$$$';
export type Priority = 'High' | 'Medium' | 'Low';
export type RecCategory = 'DIY' | 'Low-Cost' | 'Professional';

export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface QuizAnswer {
  questionId: string;
  answerValue: string;
}

export interface QuizResponse {
  id: string;
  answers: QuizAnswer[];
  createdAt: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: RecCategory;
  cost: CostRange;
  priority: Priority;
  tags: string[]; // To match with quiz answers
}

export interface Resource {
  id: string;
  name: string;
  category: Category;
  services: string[];
  phone: string;
  email?: string;
  website?: string;
  address?: string;
  costRange?: CostRange;
  description: string;
}

export interface ProfessionalGuidance {
  id: string;
  title: string;
  roleDescription: string;
  whenToContact: string;
  sampleQuestions: string[];
  preparationTips: string[];
}

export interface Feedback {
  id: string;
  planId: string;
  wasHelpful: boolean;
  knowWhereToStart: 'Yes' | 'No' | 'Somewhat';
  comment?: string;
  createdAt: string;
}

