import { useState } from 'react';
import useAppStore from '../stores/appStore';

const useSearch = () => {
  const [error, setError] = useState(null);
  const {
    llmChoice,
    sourceChoice,
    setCurrentAnswer,
    setIsLoading
  } = useAppStore();

  const doSearchQuery = async (queryText) => {
    if (!queryText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // This would be replaced with your actual API call
      const mockAnswer = {
        answer: `This is a mock answer for: "${queryText}"\n\nIn a real implementation, this would call your backend service with:\n- LLM: ${llmChoice}\n- Source: ${sourceChoice}`,
        insights: [
          ["Insight 1", "This is an interesting finding about the data"],
          ["Trend", "Noticeable pattern in patient demographics"]
        ],
        entities: ["Patient", "Diagnosis", "Department"],
        timestamp: new Date()
      };
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setCurrentAnswer(mockAnswer);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { doSearchQuery, error };
};

export default useSearch;