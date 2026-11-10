
'use server';

/**
 * @fileOverview This file defines a Genkit tool for capturing lead information.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().describe('The full name of the potential partner.'),
  email: z.string().email().describe("The partner's email address."),
  organization: z.string().optional().describe('The name of their company or institution.'),
  leadType: z.enum(['affiliate', 'white-label', 'research-pilot']).describe('The type of partnership they are interested in.'),
  message: z.string().optional().describe('Any additional message or question from the lead.'),
});

export const captureLeadTool = ai.defineTool(
  {
    name: 'captureLeadTool',
    description: 'Use this tool to save the information of a potential business partner who has expressed interest in a program.',
    inputSchema: LeadSchema,
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async (lead) => {
    // In a real application, you would save this lead to a CRM like HubSpot,
    // a Firestore collection, or a Google Sheet.
    console.log('LEAD CAPTURED:', JSON.stringify(lead, null, 2));

    // For now, we'll just simulate a successful save.
    return {
      success: true,
      message: `Successfully captured lead information for ${lead.name}.`,
    };
  }
);
