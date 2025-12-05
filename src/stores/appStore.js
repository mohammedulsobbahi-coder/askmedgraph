import { create } from 'zustand';

const useAppStore = create((set) => ({
  llmChoice: 'GPT-4o Mini',
  sourceChoice: 'Knowledge Graph',
  currentQuery: '',
  currentAnswer: null,
  isLoading: false,
  
  setLlmChoice: (choice) => set({ llmChoice: choice }),
  setSourceChoice: (choice) => set({ sourceChoice: choice }),
  setCurrentQuery: (query) => set({ currentQuery: query }),
  setCurrentAnswer: (answer) => set({ currentAnswer: answer }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useAppStore;