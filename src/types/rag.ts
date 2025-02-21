import { z } from 'zod';

import { ChatSemanticSearchChunk } from '@/types/chunk';

export const SemanticSearchSchema = z.object({
  agentId: z.string().optional(),
  fileIds: z.array(z.string()).optional(),
  knowledgeIds: z.array(z.string()).optional(),
  messageId: z.string(),
  model: z.string().optional(),
  rewriteQuery: z.string(),
  userQuery: z.string(),
});

export type SemanticSearchSchemaType = z.infer<typeof SemanticSearchSchema>;

export type MessageSemanticSearchChunk = Pick<ChatSemanticSearchChunk, 'id' | 'similarity'>;
