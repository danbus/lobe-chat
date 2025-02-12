import { AIEmbeddingModelCard } from '@/types/aiModel';

const customizeOpenaiEmbeddingModels: AIEmbeddingModelCard[] = [
  {
    contextWindowTokens: 8192,
    description: '支持多语言的嵌入模型',
    displayName: 'Cohere Multilingual V3',
    id: 'cohere.embed-multilingual-v3',
    maxDimension: 1536,
    pricing: {
      currency: 'USD',
      input: 0.02,
    },
    type: 'embedding',
  },
];

export default customizeOpenaiEmbeddingModels;
