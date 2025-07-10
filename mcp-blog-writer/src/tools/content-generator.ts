import { CostTracker } from '../utils/cost-tracker';

export interface BlogContent {
    title: string;
    body: string;
    wordCount: number;
    readingTime: number;
    keywords: string[];
}

export class ContentGenerator {
    private costTracker: CostTracker;

    constructor(costTracker: CostTracker) {
        this.costTracker = costTracker;
    }

    generateContent(topic: string, length: string = 'medium', targetAudience?: string): BlogContent {
        const cost = this.getCostForLength(length);
        
        if (!this.costTracker.canProceed(cost)) {
            throw new Error(`Insufficient budget for ${length} content generation. Need CAD$${cost}, have CAD$${this.costTracker.getRemainingBudget()}`);
        }

        // Simulate content generation
        const content = this.generateBlogContent(topic, length, targetAudience);
        
        // Add cost after successful generation
        this.costTracker.addCost(cost);
        
        return content;
    }

    private getCostForLength(length: string): number {
        switch (length.toLowerCase()) {
            case 'short': return CostTracker.COSTS.CONTENT_GENERATION_SHORT;
            case 'medium': return CostTracker.COSTS.CONTENT_GENERATION_MEDIUM;
            case 'long': return CostTracker.COSTS.CONTENT_GENERATION_LONG;
            default: return CostTracker.COSTS.CONTENT_GENERATION_MEDIUM;
        }
    }

    private generateBlogContent(topic: string, length: string, targetAudience?: string): BlogContent {
        // Placeholder implementation - would integrate with OpenAI API
        const wordCounts: { [key: string]: number } = { short: 300, medium: 800, long: 1500 };
        const wordCount = wordCounts[length.toLowerCase()] || wordCounts.medium;
        
        return {
            title: `Comprehensive Guide to ${topic}`,
            body: `This is a ${length} blog post about ${topic}. ${targetAudience ? `Targeted for ${targetAudience}.` : ''}\n\nContent would be generated here with approximately ${wordCount} words covering the topic in depth.`,
            wordCount,
            readingTime: Math.ceil(wordCount / 200), // Average reading speed
            keywords: [topic.toLowerCase(), 'guide', 'comprehensive']
        };
    }
}