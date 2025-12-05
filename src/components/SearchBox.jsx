import React from 'react';
import { Search, AlertCircle, Lightbulb } from 'lucide-react';

const SearchBox = ({ 
  query, 
  setQuery, 
  onSearch, 
  isSearching, 
  sampleQuestions, 
  onSampleQuestion, 
  showSamples,
  error 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <section className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <Search className="w-5 h-5 mr-2 text-blue-600" />
        Ask Your Question
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., 'List all female patients admitted to the Cardiology department.'"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-colors bg-white shadow-sm"
            rows={4}
            disabled={isSearching}
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            Ctrl+Enter to search
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={!query.trim() || isSearching}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors shadow-sm hover:shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>{isSearching ? 'Searching...' : 'Search'}</span>
          </button>
          
          {isSearching && (
            <div className="flex items-center text-gray-600">
              <div className="spinner mr-2"></div>
              <span className="text-sm">Processing your question...</span>
            </div>
          )}
          
          {query.trim() && !isSearching && (
            <div className="text-sm text-gray-500">
              {query.trim().length} characters
            </div>
          )}
        </div>

        {error && (
          <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700 font-medium">Search Error</p>
              <p className="text-red-700 text-sm mt-2">{error}</p>
            </div>
          </div>
        )}
      </form>

      {/* Sample Questions */}
      {showSamples && (
        <div className="mt-8 animate-fade-in">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
            Try these sample questions:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleQuestions.map((sampleQuery, index) => (
              <button
                key={index}
                onClick={() => onSampleQuestion(sampleQuery)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg flex-shrink-0">💡</span>
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 leading-relaxed">
                    {sampleQuery}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchBox;
