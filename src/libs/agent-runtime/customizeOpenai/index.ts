import { ClientOptions } from 'openai';

import { LobeOpenAI } from '../openai';

export class LobeCustomizeOpenAI extends LobeOpenAI {
  constructor(options?: ClientOptions) {
    super({
      ...options,
      baseURL: process.env.CUSTOMIZE_EMBEDDING_OPENAI_PROXY_URL,
      apiKey: process.env.CUSTOMIZE_EMBEDDING_OPENAI_API_KEY,
    });
  }
}
