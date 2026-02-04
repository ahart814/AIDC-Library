/**
 * Pattern Document Data - OCR/ICR Data Extraction
 *
 * Each pattern lives in its own directory (e.g., OCR/). This file defines the data.
 * Images go in public/img/{PatternName}/ and are referenced as /img/{PatternName}/filename.png
 *
 * See patternData.js in src/ for the template structure.
 */

export const ocrPatternData = {
  // Header
  title: "OCR/ICR Data Extraction",
  patternId: "001",
  interactionModels: ["On Demand"],
  aiCapabilities: ["Automation"],
  lastUpdated: "February 2026",

  // Overview section
  overview: {
    images: [
      // { src: "/img/OCR/ocr_overview1.png", caption: "Example caption for overview screenshot" },
      // Add up to 3 images - uncomment and add files to public/img/OCR/
    ],
    interactionModel: {
      label: "On Demand",
      description: "Users initiate the process by uploading an image or document from their local device.",
    },
    aiCapabilities: {
      label: "Task Automation",
      description: "System extracts the data from the image or document and generates a new record, such as an expense report. It may also be used to update an existing record, such as adding an expense line item to an existing expense report.",
    },
    whatItIs: "A system that extracts data from an image or document and generates a new record.",
    primaryUserGoal: "Create a new record quickly and with minimal manual data entry."
  },

  // When to Use section
  whenToUse: {
    whenRightFit: {
      heading: "When OCR/ICR Data Extraction is the right fit:",
      bullets: [
        "User needs to extract data from an image or document and generate a new record",
        "Creating a new record requires manual data entry from an image or document",
        "The type of record user wants to create requires an attached image or document such as a receipt or invoice",
      ]
    },
    considerDifferent: {
      heading: "Consider alternative patterns when:",
      bullets: [
        "System should provide guidance or recommendations rather than creating a new record",
        "The record creation process is not complex and requires minimal data entry",
        "The files the user wants to extract data from are already in the system and do not need to be uploaded"

      ]
    }
  },

  // Components section
  components: {
    images: [
      // { src: "/img/OCR/ocr_core1.png", caption: "Example caption for components screenshot" },
    ],
    items: [
      {
        name: "Entry Point",
        subtitle: "How users access the OCR tool",
        details: [
          { label: "Standard implementation", value: "Persistent icon/button before user gets to new record creation screen (i.e. the record listing screen)" },
          { label: "Visual treatment", value: "Upload button with camera icon." }
        ]
      },
      {
        name: "Upload and Record Creation Interface",
        subtitle: "Where the user uploads a file to create a new record",
        details: [
          { label: "Upload", value: "User can select a file from their local device (or camera if on mobile) using the system file browser, or can drag and drop a file from their desktop." },
          { label: "Data Entry", value: "Some data entry is usually still required to create a new record, such as the purpose of the expense report." }
        ]
      },
      {
        name: "AI Response Patterns",
        subtitle: "How the AI tool communicates back",
        details: [
          { label: "Status Indicators", value: "Show when upload has initiated, completed, or failed. Provide visual confirmation of the new record being created." },
          { label: "Validation", value: "When data extraction is complete, the system will validate the data and provide feedback to the user. This may include highlighting required fields that are missing or suggesting values based on the data extracted." },
        ]
      },
      {
        name: "Transparency & Control",
        subtitle: "Building user trust and understanding",
        details: [
          { label: "Confirming Accuracy", value: "User should be able to review extracted data and make changes if needed." },
          { label: "Feedback mechanism", value: "User should be able to provide feedback to the system to confirm the accuracy of the data extracted. This can be done through a thumbs up/down or a comment field." },
          { label: "Confidence Indicator", value: "If the system is not confident in the accuracy of the data extracted, it should provide a confidence indicator to the user." },

        ]
      }
    ]
  },

  // Examples section
  examples: {
    images: [
      // { src: "/img/OCR/ocr_examples1.png", caption: "Example caption for implementation screenshot" },
    ],
    items: [
      {
        name: "OCR for Expense Reports",
        badge: "Costpoint, Vantagepoint, Maconomy",
        description: "Users upload a receipt image associated with an expense, and the system extracts data from the image to either create a new expense report record or add an expense line item to an existing expense report record.",
        keyFeatures: "Mobile-friendly",
      },
      {
        name: "OCR for AP Vouchers",
        badge: "Costpoint",
        description: "Users upload an invoice file in a permitted format and the system extracts data from the file to create a new AP voucher record.",
        keyFeatures: "Creates new records only."
      }
    ],
   
  },

  // Variations section
  variations: {
    tableHeaders: ["Component", "Standard", "When Deviation Acceptable"],
    rows: [
      ["Entry point location", "Bottom-right persistent button", "Framework constraints prevent fixed positioning; technical limitations with mobile layouts"],
      ["Conversation panel size", "400-500px width", "Mobile/tablet adaptations; integration with existing panel systems"],
      ["Response format", "Text + rich content cards", "Product-specific data visualization needs; technical capabilities of framework"]
    ]
  },

  // Considerations section
  considerations: {
    usability: [
      { label: "Context awareness", text: "Should the assistant know where the user is in the product? This improves relevance but increases complexity." },
      { label: "Conversation persistence", text: "Should history persist across sessions? Better UX but potential privacy concerns." },
      { label: "Scope boundaries", text: "Clearly communicate what the assistant can/cannot do to prevent user frustration." }
    ],
    technical: [
      "Response time expectations (aim for under 3 seconds)",
      "Integration with product-specific data and permissions",
      "Fallback behavior when AI service is unavailable",
      "Framework limitations on positioning and layout"
    ],
    commonPitfalls: [
      "Overestimating AI capabilities leads to disappointed users",
      "Poor error handling when AI misunderstands or fails",
      "Inconsistent tone across different types of responses",
      "Lack of escape routes when conversation isn't helping"
    ]
  },

  // Footer metadata
  metadata: {
    patternOwner: "Alex",
    nextReview: "June 2026"
  }
};
