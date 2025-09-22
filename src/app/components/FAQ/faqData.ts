export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: "What are the recommended features expected in a modern SupportEngine software?",
    answer: "A capable SupportEngine offers a self-service portal for end users, a mobile app for on-the-go support, a rule-based action engine to automate common operations, and a built-in report generation module to track performances. Support Engine, with its with expansive set of capabilities, can effortlessly handle the requirements of new-age enterprises of all sizes."
  },
  {
    id: '2',
    question: "How long does it take to implement SupportEngine?",
    answer: "The implementation period depends on the complexity of the environment. On average, SupportEngine can be set up in about twelve weeks for a large enterprise."
  },
  {
    id: '3',
    question: "Can SupportEngine be used solely as a ticketing system?",
    answer: "Yes, the standard edition of SupportEngine has email to ticket conversion capability, ticket handling automation, and a wide range of customizations, along with a native reporting can support your ticketing requirements."
  },
  {
    id: '4',
    question: "Can non-IT help desk teams use SupportEngine as well?",
    answer: "Yes, non-IT teams like facilities, legal, and HR can leverage the enterprise service management capabilities SupportEngine to handle user queries and requests."
  },
  {
    id: '5',
    question: "Does SupportEngine offer AI-powered capabilities?",
    answer: "SupportEngine offers a wide-range of AI capabilities including intelligent recommendations, a smart virtual support agent, and more."
  }
];
