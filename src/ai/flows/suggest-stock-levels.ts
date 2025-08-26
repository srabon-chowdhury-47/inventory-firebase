'use server';

/**
 * @fileOverview Analyzes historical sales data and suggests optimal stock levels for each item.
 *
 * - suggestStockLevels - A function that handles the stock level suggestion process.
 * - SuggestStockLevelsInput - The input type for the suggestStockLevels function.
 * - SuggestStockLevelsOutput - The return type for the suggestStockLevels function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestStockLevelsInputSchema = z.object({
  itemId: z.string().describe('The ID of the inventory item.'),
  historicalSalesData: z.string().describe('Historical sales data for the item, as a JSON string.'),
  currentStockLevel: z.number().describe('The current stock level of the item.'),
});
export type SuggestStockLevelsInput = z.infer<typeof SuggestStockLevelsInputSchema>;

const SuggestStockLevelsOutputSchema = z.object({
  optimalStockLevel: z.number().describe('The suggested optimal stock level for the item.'),
  reasoning: z.string().describe('The AI reasoning behind the suggested stock level.'),
});
export type SuggestStockLevelsOutput = z.infer<typeof SuggestStockLevelsOutputSchema>;

export async function suggestStockLevels(input: SuggestStockLevelsInput): Promise<SuggestStockLevelsOutput> {
  return suggestStockLevelsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestStockLevelsPrompt',
  input: {schema: SuggestStockLevelsInputSchema},
  output: {schema: SuggestStockLevelsOutputSchema},
  prompt: `You are an expert inventory management consultant. Analyze the historical sales data for the given item and suggest an optimal stock level to minimize overstocking and prevent stockouts.

Item ID: {{{itemId}}}
Historical Sales Data: {{{historicalSalesData}}}
Current Stock Level: {{{currentStockLevel}}}

Consider factors like seasonality, trends, and potential demand fluctuations. Provide a clear reasoning for your suggested stock level.

Optimal Stock Level:`, // The AI should set the optimalStockLevel field in output schema.
});

const suggestStockLevelsFlow = ai.defineFlow(
  {
    name: 'suggestStockLevelsFlow',
    inputSchema: SuggestStockLevelsInputSchema,
    outputSchema: SuggestStockLevelsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
