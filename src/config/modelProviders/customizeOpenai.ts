import { ModelProviderCard } from '@/types/llm';

const CustomizeOpenAI: ModelProviderCard = {
  chatModels: [
    // {
    //   id: 'cohere.embed-multilingual-v3',
    //   displayName: 'Cohere Multilingual V3',
    //   description: '支持多语言的嵌入模型',
    //   enabled: false,
    //   contextWindowTokens: 8192,
    // },
  ],
  description: '自定义 OpenAI 兼容的嵌入服务提供商，支持与 OpenAI 相同的 API 格式。',
  enabled: false,
  showConfig: false,
  id: 'customizeopenai',
  name: 'CustomizeOpenAI',
  settings: {
    showModelFetcher: false,  // Disable model fetching since we're only using it for embeddings
  },
  url: 'https://platform.openai.com',  // Using OpenAI's platform URL since it's compatible
};

export default CustomizeOpenAI;
