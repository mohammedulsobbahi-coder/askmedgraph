import React, { useState, useEffect } from 'react';
import { Database, Cpu, Settings, Info, ChevronLeft } from 'lucide-react';
import { DATA_SOURCES, LANGUAGE_MODELS } from '../constants';

const Sidebar = ({ 
  sourceChoice, 
  setSourceChoice, 
  llmChoice, 
  setLlmChoice,
  onToggleChange // callback to notify parent of isOpen state
}) => {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Persist state & notify parent
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
    onToggleChange?.(isOpen);
  }, [isOpen, onToggleChange]);

  // Keyboard shortcut (Ctrl/Cmd + B)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-xl border-r border-gray-200 z-30 transform transition-all duration-300 ease-in-out ${
      isOpen ? 'w-64 translate-x-0' : 'w-14 -translate-x-0'
    }`}>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200">
        {/* Settings icon clickable */}
        <div
          className={`relative flex items-center cursor-pointer group ${
            !isOpen
              ? 'w-full justify-center p-3 hover:bg-gray-100 rounded-lg'
              : 'p-4'
          }`}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          <Settings className={`text-gray-800 ${!isOpen ? 'w-6 h-6' : 'w-6 h-6'}`} />

          {/* Tooltip on hover when collapsed */}
          {!isOpen && (
            <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Settings
            </span>
          )}

          {/* Title only when expanded */}
          {isOpen && <h2 className="ml-2 text-lg font-semibold text-gray-800">Settings</h2>}
        </div>

        {/* Arrow only when expanded */}
        {isOpen && (
          <div className="relative group">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 m-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Tooltip */}
            <span className="absolute -top-1 left-full ml-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Hide
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Data Source */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Database className="w-4 h-4 mr-2" />
              Data Source:
            </label>
            <select 
              value={sourceChoice}
              onChange={(e) => setSourceChoice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors bg-white text-sm"
            >
              {DATA_SOURCES.map((source) => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>
          
          {/* Language Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Cpu className="w-4 h-4 mr-2" />
              Language Model:
            </label>
            <select
              value={llmChoice}
              onChange={(e) => setLlmChoice(e.target.value)} // value = key
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors bg-white text-sm"
            >
              {Object.entries(LANGUAGE_MODELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Info Section */}
          <div className="pt-4 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-4 text-xs text-blue-700">
              <div className="flex items-center mb-1">
                <Info className="w-4 h-4 mr-1 text-blue-800" />
                Quick Tips
              </div>
              <ul className="space-y-1">
                <li>• Use Ctrl+B to toggle sidebar</li>
                <li>• Try sample questions for quick start</li>
                <li>• Click copy button to save answers</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
