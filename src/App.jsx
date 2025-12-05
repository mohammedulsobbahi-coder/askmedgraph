import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { BarChart } from 'lucide-react';

import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox';
import AnswerBox from './components/AnswerBox';
import Insights from './components/Insights';
import Header from './components/Header';
import Footer from './components/Footer';

import { SAMPLE_QUESTIONS } from './constants';
import { KNOWLEDGE_GRAPH } from './constants';
import { GPT_4O_MINI } from './constants';

import { searchQuery } from './services/api';

// Main App

function App() {
  const [query, setQuery] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [sourceChoice, setSourceChoice] = useState(KNOWLEDGE_GRAPH);       
  const [llmChoice, setLlmChoice] = useState(GPT_4O_MINI);              
  const [sidebarOpen, setSidebarOpen] = useState(() => {
  const saved = localStorage.getItem('sidebarOpen');
  return saved !== null ? JSON.parse(saved) : true;
});
  const [error, setError] = useState(null);

  // Save sidebar state to localStorage
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // Keyboard shortcut for sidebar toggle (Ctrl/Cmd + B)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setError(null);
    
    try {
      const result = await searchQuery(query, llmChoice, sourceChoice);
      setCurrentAnswer(result);
    } catch (err) {
      setError(err.message || 'Failed to search. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSampleQuestion = (sampleQuery) => {
    setQuery(sampleQuery);
    setCurrentAnswer(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sourceChoice={sourceChoice}
        setSourceChoice={setSourceChoice}
        llmChoice={llmChoice}
        setLlmChoice={setLlmChoice}
        onToggleChange={(isOpen) => setSidebarOpen(isOpen)} // update main layout
      />

      {/* Main Content */}
      <div className={`p-4 lg:p-8 transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:ml-64' : 'ml-14'}`}>
       
        {/* Header */}
        <Header />

        {/* Search Section */}
        <SearchBox 
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          isSearching={isSearching}
          sampleQuestions={SAMPLE_QUESTIONS}
          onSampleQuestion={handleSampleQuestion}
          showSamples={!currentAnswer}
          error={error}
        />

        {/* Results Section - Answer & Insights */}
        {currentAnswer && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 animate-fade-in">
            {/* Answer Column */}
            <div className="lg:col-span-2">
              <AnswerBox answer={currentAnswer} />
            </div>

            {/* Right Column - Graph & Insights */}
            <div className="space-y-6">
              <Insights
                insights={currentAnswer.insights}
              />
            </div>              
          </div>
        )}

        {/* Footer */}
        <Footer />
        
      </div>
    </div>
  );
}

export default App;