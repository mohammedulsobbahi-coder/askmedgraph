import React, { useState } from 'react';
import { Copy, Check, FileText, Clock, Zap } from 'lucide-react';

const AnswerBox = ({ answer }) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyToClipboard = async () => {
    if (answer?.answer) {
      try {
        await navigator.clipboard.writeText(answer.answer);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 500);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = answer.answer;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 500);
      }
    }
  };

  const formatAnswerText = (text) => {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            {trimmedLine.slice(2, -2)}
          </h4>
        );
      } else if (trimmedLine.startsWith('• ') || trimmedLine.startsWith('- ')) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-blue-500 mr-2 flex-shrink-0 mt-1">•</span>
            <span className="text-gray-700">{trimmedLine.slice(2)}</span>
          </div>
        );
      } else if (trimmedLine.length > 0) {
        return (
          <p key={index} className="text-gray-700 mb-2 leading-relaxed">
            {trimmedLine}
          </p>
        );
      } else {
        return <div key={index} className="h-2"></div>;
      }
    });
  };

  if (!answer){
      return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 animate-fade-in">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          Answer
        </h3>
        <button
          onClick={copyToClipboard}
          className={`p-2 rounded-lg transition-colors ${
            copiedToClipboard 
              ? 'text-green-600 bg-green-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          title={copiedToClipboard ? 'Copied!' : 'Copy to clipboard'}
        >
          {copiedToClipboard ? (
            <Check className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className="p-6">
        <div className="prose max-w-none">
          {formatAnswerText(answer.answer)}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {new Date(answer.timestamp).toLocaleString()}
            </span>
            {answer.processingTime && (
              <span className="flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                {Number(answer.processingTime) < 60000
                  ? `${(Number(answer.processingTime) / 1000).toFixed(2)}s`
                  : `${(Number(answer.processingTime) / 60000).toFixed(2)} min`}
              </span>
            )}
          </div>
          <div className="text-gray-400">
            {answer.answer.length} characters
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBox;
