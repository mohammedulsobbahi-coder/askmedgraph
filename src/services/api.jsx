import { API_BASE_URL } from '../constants';

// Search query - Backend API call
// Answer Format: answer, timestamp, processingTime, insights
export const searchQuery = async (query, llmModel, source) => {
  const apiUrl = API_BASE_URL 

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, llmModel, source })
    });

    const data = await res.json();

    if (res.status !== 200) throw new Error(data.error || "Failed to fetch");

    return data;
  } catch (err) {
    console.error("Search API error:", err);
    throw err;
  }
};





