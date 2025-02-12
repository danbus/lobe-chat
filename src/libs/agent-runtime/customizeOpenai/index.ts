import { ClientOptions } from 'openai';

import { LobeOpenAI } from '../openai';

export class LobeCustomizeOpenAI extends LobeOpenAI {
  constructor(options?: ClientOptions) {
    super({
      ...options,
      apiKey: process.env.CUSTOMIZE_EMBEDDING_OPENAI_API_KEY,
      baseURL: process.env.CUSTOMIZE_EMBEDDING_OPENAI_PROXY_URL,
    });
  }
}
