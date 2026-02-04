import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PatternDocument from './PatternDocument';
import { ocrPatternData } from './ocr_patternData';

createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-gray-100 py-8">
    <PatternDocument data={ocrPatternData} />
  </div>
);
