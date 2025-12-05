// src/constants.jsx

// Base API URL
export const API_BASE_URL = 'https://medical-kg-api-3vgo.onrender.com/api/search';
// export const API_BASE_URL = 'https://medical-kg-api-main-production.up.railway.app/api/search';
// export const API_BASE_URL = 'http://127.0.0.1:5000/api/search';

// Language Models
export const GPT_4O_MINI = "GPT-4o-mini";
export const CLAUDE_3_5_HAIKU = "Claude 3.5 Haiku";
export const DEEPSEEK_CHAT = "deepseek-chat";
export const GEMMA_7B = "gemma:7b";

export const LANGUAGE_MODELS = {
  [GPT_4O_MINI]: "GPT-4o Mini",
  [CLAUDE_3_5_HAIKU]: "Claude Haiku 3.5",
  [DEEPSEEK_CHAT]: "DeepSeek Chat"
 // ,
//  [GEMMA_7B]: "Gemma 7B"
};

// Data Sources
export const KNOWLEDGE_GRAPH = "Knowledge Graph";
export const SQL_SERVER = "SQL Server";

export const DATA_SOURCES = [
  KNOWLEDGE_GRAPH,
 //, SQL_SERVER
];

export const SAMPLE_QUESTIONS = [
//   "What is the age of patient with MRN '72'?",
//   "What's the most common admission month?",
//   "What percentage of patients are female?",
//   "List patients with increasing creatinine levels across multiple tests."
    "What is the insurance status of patient 'الاسم1614'?",
    "What are the total billing costs for patient 'الاسم925' in USD and LBP?",
    "How many patients have insurance of type 'Schools'?",
    "How many patients received 'Medications' works?"
];


// answer, timestamp, processingTime, insights











