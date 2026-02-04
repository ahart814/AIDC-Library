import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../src/index.css';
import PatternDocument from '../../src/PatternDocument';
import { ocrPatternData } from './patternData';

createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-gray-100 py-8">
    <PatternDocument data={ocrPatternData} />
  </div>
);
