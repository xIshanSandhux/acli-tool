interface LlmProviderInterface {
    generateText(prompt: string): Promise<string>;
    name: string;
}