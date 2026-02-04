/**
 * AI Pattern Template - Reference template with guidance
 *
 * This file serves as the template reference. It displays the full pattern document
 * with guidance blocks (Framework Legend, Two-Axis Framework note, When deviations occur note)
 * that help users understand the structure. These guidance elements are shown only here.
 *
 * To create your own pattern: copy patternData.js, customize the values, and render
 * <PatternDocument data={myPatternData} /> (without templateMode).
 */

import PatternDocument from './PatternDocument';
import { examplePatternData } from './patternData';

const PatternTemplate = () => {
  return <PatternDocument data={examplePatternData} templateMode={true} />;
};

export default PatternTemplate;
