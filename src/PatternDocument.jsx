import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertCircle, CheckCircle, Info } from 'lucide-react';

const PatternImage = ({ src, caption }) => (
  <figure className="w-full my-4">
    <img src={src} alt={caption} className="w-full rounded-lg border border-gray-200" />
    {caption && (
      <figcaption className="mt-2 text-sm text-gray-600 text-center">{caption}</figcaption>
    )}
  </figure>
);

const InfoBox = ({ type = 'info', children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };
  const icons = {
    info: <Info size={18} />,
    warning: <AlertCircle size={18} />,
    success: <CheckCircle size={18} />
  };
  return (
    <div className={`p-3 border rounded-lg flex gap-2 ${styles[type]}`}>
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

/**
 * PatternDocument - Renders a pattern document from data
 * @param {Object} props
 * @param {Object} props.data - Pattern data (see patternData.js for structure)
 * @param {boolean} [props.templateMode=false] - When true, shows guidance blocks (for template reference only)
 */
const PatternDocument = ({ data, templateMode = false }) => {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    when: true,
    components: true,
    examples: true,
    variations: true,
    considerations: true,
    resources: false
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const Section = ({ id, title, children, badge }) => (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
      >
        <div className="flex items-center gap-2">
          {expandedSections[id] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h3 className="font-semibold text-lg">{title}</h3>
          {badge && (
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">{badge}</span>
          )}
        </div>
      </button>
      {expandedSections[id] && <div className="p-4 bg-white">{children}</div>}
    </div>
  );

  if (!data) return null;

  const { overview, whenToUse, components, examples, variations, considerations, metadata } = data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Framework Legend - template guidance only */}
      {templateMode && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-sm text-gray-700 mb-2">Pattern Library Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold text-purple-700 mb-1">
                Interaction Models (Primary Organization)
              </div>
              <ul className="text-xs text-gray-600 space-y-0.5">
                <li>• <strong>Conversational:</strong> User initiates dialogue</li>
                <li>• <strong>Ambient/Contextual:</strong> AI surfaces automatically</li>
                <li>• <strong>On-demand:</strong> User triggers AI action</li>
                <li>• <strong>Autonomous:</strong> AI acts independently</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-700 mb-1">AI Capabilities (Secondary)</div>
              <ul className="text-xs text-gray-600 space-y-0.5">
                <li>• <strong>Informational:</strong> Summaries, insights, explanations</li>
                <li>• <strong>Recommendations:</strong> Suggested actions, matches</li>
                <li>• <strong>Automation:</strong> Performing tasks, executing</li>
                <li>• <strong>Generation:</strong> Creating new content</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 pb-4 border-b-2 border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
        </div>
        <div className="flex gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Interaction Model:
            </span>
            {data.interactionModels?.map((model) => (
              <span
                key={model}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {model}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              AI Capabilities:
            </span>
            {data.aiCapabilities?.map((cap) => (
              <span
                key={cap}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Last updated: {data.lastUpdated}
          {data.patternId && ` | Pattern ID: ${data.patternId}`}
        </p>
      </div>

      {/* Overview */}
      {overview && (
        <Section id="overview" title="Pattern Overview">
          {templateMode && (
            <InfoBox type="info">
              <strong>Two-Axis Framework:</strong> This pattern is organized first by{' '}
              <strong>Interaction Model</strong> (how users engage with the AI), then by{' '}
              <strong>AI Capabilities</strong> (what the AI produces). This structure helps
              designers find patterns based on the user experience they're creating.
            </InfoBox>
          )}
          {overview.images?.length > 0 && (
            <div className="mt-4 space-y-6">
              {overview.images.slice(0, 3).map((img, i) => (
                <PatternImage key={i} src={img.src} caption={img.caption} />
              ))}
            </div>
          )}
          <div className="space-y-4 mt-4">
            {overview.interactionModel && (
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 py-2">
                <h4 className="font-semibold text-purple-900 mb-1">
                  Interaction Model: {overview.interactionModel.label}
                </h4>
                <p className="text-sm text-gray-700">{overview.interactionModel.description}</p>
                {templateMode && overview.interactionModel.whyItMatters && (
                  <p className="text-xs text-purple-700 mt-2">
                    <strong>Why this matters for UX:</strong> {overview.interactionModel.whyItMatters}
                  </p>
                )}
              </div>
            )}
            {overview.aiCapabilities && (
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-2">
                <h4 className="font-semibold text-blue-900 mb-1">
                  AI Capabilities: {overview.aiCapabilities.label}
                </h4>
                <p className="text-sm text-gray-700">{overview.aiCapabilities.description}</p>
                {templateMode && overview.aiCapabilities.whyItMatters && (
                  <p className="text-xs text-blue-700 mt-2">
                    <strong>Why this matters for UX:</strong>{' '}
                    {overview.aiCapabilities.whyItMatters}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="space-y-3 mt-4">
            {overview.whatItIs && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">What it is</h4>
                <p className="text-gray-600">{overview.whatItIs}</p>
              </div>
            )}
            {overview.primaryUserGoal && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Primary user goal</h4>
                <p className="text-gray-600">{overview.primaryUserGoal}</p>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* When to Use */}
      {whenToUse && (
        <Section id="when" title="When to Use This Pattern">
          {templateMode && (
            <InfoBox type="info">
              <strong>Pattern Selection:</strong> Choose your pattern based on the{' '}
              <strong>Interaction Model</strong> first (how will users engage?), then adapt based on{' '}
              <strong>AI Capabilities</strong> (what will the AI produce?).
            </InfoBox>
          )}
          <div className="space-y-4 mt-4">
            {whenToUse.whenRightFit && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  {whenToUse.whenRightFit.heading}
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  {whenToUse.whenRightFit.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
            {whenToUse.considerDifferent && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <AlertCircle size={18} /> {whenToUse.considerDifferent.heading}
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  {whenToUse.considerDifferent.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Components */}
      {components && (
        <Section id="components" title="Core Pattern Components">
          {components.images?.length > 0 && (
            <div className="mb-4 space-y-6">
              {components.images.slice(0, 3).map((img, i) => (
                <PatternImage key={i} src={img.src} caption={img.caption} />
              ))}
            </div>
          )}
          <div className="space-y-4">
            {components.items?.map((item, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-1">
                  {idx + 1}. {item.name}
                </h4>
                {item.subtitle && (
                  <p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
                )}
                {item.details && (
                  <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                    {item.details.map((d, i) => (
                      <div key={i}>
                        <strong>{d.label}:</strong> {d.value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Examples */}
      {examples && (
        <Section id="examples" title="Implementation Examples">
          {examples.images?.length > 0 && (
            <div className="mb-4 space-y-6">
              {examples.images.slice(0, 3).map((img, i) => (
                <PatternImage key={i} src={img.src} caption={img.caption} />
              ))}
            </div>
          )}
          <div className="space-y-4">
            {examples.items?.map((ex, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{ex.name}</h4>
                  {ex.badge && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{ex.badge}</span>
                  )}
                </div>
                {ex.description && (
                  <p className="text-sm text-gray-600 mb-3">{ex.description}</p>
                )}
                {ex.keyFeatures && (
                  <div className="text-xs text-gray-500">
                    <strong>Key features:</strong> {ex.keyFeatures}
                  </div>
                )}
              </div>
            ))}
            {examples.designerNote && (
              <InfoBox type="info">
                <strong>Note for designers:</strong> {examples.designerNote}
              </InfoBox>
            )}
          </div>
        </Section>
      )}

      {/* Variations */}
      {variations && (
        <Section id="variations" title="Acceptable Variations & Deviations">
          <div className="space-y-3">
            {templateMode && (
              <InfoBox type="warning">
                <strong>When deviations occur:</strong> Document the rationale and report to
                committee lead for tracking.
              </InfoBox>
            )}
            {variations.rows && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {(variations.tableHeaders || ['Component', 'Standard', 'When Deviation Acceptable']).map(
                        (h, i) => (
                          <th key={i} className="text-left p-2 font-semibold">
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {variations.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="p-2">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Considerations */}
      {considerations && (
        <Section id="considerations" title="Design Considerations & Trade-offs">
          <div className="space-y-4">
            {considerations.usability && considerations.usability.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Usability considerations</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {considerations.usability.map((item, i) => (
                    <li key={i}>
                      <strong>{item.label}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {considerations.technical && considerations.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Technical considerations</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {considerations.technical.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {considerations.commonPitfalls && considerations.commonPitfalls.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Common pitfalls</h4>
                <InfoBox type="warning">
                  <ul className="list-disc pl-5 space-y-1">
                    {considerations.commonPitfalls.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </InfoBox>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Footer */}
      {metadata && (
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex gap-4 text-sm text-gray-500">
            {metadata.patternOwner && (
              <div>
                <strong>Pattern Owner:</strong> {metadata.patternOwner}
              </div>
            )}
            {metadata.nextReview && (
              <div>
                <strong>Next Review:</strong> {metadata.nextReview}
              </div>
            )}
            {metadata.reviewCycle && (
              <div>
                <strong>Review Cycle:</strong> {metadata.reviewCycle}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatternDocument;
