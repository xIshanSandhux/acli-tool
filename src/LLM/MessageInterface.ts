export interface Messages{
    role: 'user' | 'assistant' | 'system';
    content: string;
}