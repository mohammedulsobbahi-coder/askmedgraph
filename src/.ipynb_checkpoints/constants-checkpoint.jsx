// src/constants.jsx

// Base API URL
// export const API_BASE_URL = 'https://medical-kg-api-production.up.railway.app/api/search';
export const API_BASE_URL = 'http://127.0.0.1:5000/api/search';

// Language Models
export const GPT_4O_MINI = "GPT-4o-mini";
export const CLAUDE_3_5_HAIKU = "Claude 3.5 Haiku";
export const DEEPSEEK_CHAT = "deepseek-chat";

export const LANGUAGE_MODELS = [
  GPT_4O_MINI,
  CLAUDE_3_5_HAIKU,
  DEEPSEEK_CHAT
];

// Data Sources
export const KNOWLEDGE_GRAPH = "Knowledge Graph";
export const SQL_SERVER = "SQL Server";

export const DATA_SOURCES = [
  KNOWLEDGE_GRAPH,
  SQL_SERVER
];

export const SAMPLE_QUESTIONS = [
  "Find the number of male and female patients in each marital status category.",
  "Which departments have the highest diversity of diagnoses?",
  "List the names of top 3 diagnoses for patients over 60.",
  "Which departments admit patients from the most age group?"
];



// answer, timestamp, processingTime, insights











