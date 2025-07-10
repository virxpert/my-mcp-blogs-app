import express from 'express';
import bodyParser from 'body-parser';
import { ContentGenerator, BlogContent } from './tools/content-generator';
import { ImageGenerator } from './tools/image-generator';
import { QualityChecker } from './tools/quality-checker';
import { ReferenceValidator } from './tools/reference-validator';
import { CopyrightManager } from './tools/copyright-manager';
import { CostTracker } from './utils/cost-tracker';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize cost tracker with CAD$5 limit
const costTracker = new CostTracker(5.0);
const contentGenerator = new ContentGenerator(costTracker);
const imageGenerator = new ImageGenerator();
const qualityChecker = new QualityChecker();
const referenceValidator = new ReferenceValidator();
const copyrightManager = new CopyrightManager();

app.post('/generate', (req, res) => {
    try {
        const { topic, length = 'medium', targetAudience } = req.body;

        if (!topic) {
            return res.status(400).json({ error: 'Topic is required' });
        }

        // Check if we have budget
        if (!costTracker.canProceed(0.5)) {
            return res.status(429).json({ 
                error: 'Budget limit reached', 
                remainingBudget: costTracker.getRemainingBudget() 
            });
        }

        const content = contentGenerator.generateContent(topic, length, targetAudience);
        const image = imageGenerator.generateImage(topic);

        if (!qualityChecker.checkQuality(content.body)) {
            return res.status(400).json({ error: 'Content quality check failed.' });
        }

        if (!referenceValidator.validateReferences(content.body)) {
            return res.status(400).json({ error: 'References validation failed.' });
        }

        if (!copyrightManager.manageCopyrights(content.body)) {
            return res.status(400).json({ error: 'Copyright compliance check failed.' });
        }

        res.json({ 
            content, 
            image,
            costUsed: costTracker.getCurrentCost(),
            remainingBudget: costTracker.getRemainingBudget(),
            budgetUsagePercent: costTracker.getUsagePercentage()
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});

// Budget status endpoint
app.get('/budget', (req, res) => {
    res.json({
        currentCost: costTracker.getCurrentCost(),
        remainingBudget: costTracker.getRemainingBudget(),
        usagePercentage: costTracker.getUsagePercentage(),
        withinLimit: costTracker.isWithinLimit()
    });
});

// Reset budget endpoint (for testing)
app.post('/reset-budget', (req, res) => {
    costTracker.resetCost();
    res.json({ message: 'Budget reset successfully' });
});

app.listen(port, () => {
    console.log(`MCP Blog Writer Server is running on http://localhost:${port}`);
    console.log(`Budget limit: CAD$${costTracker.getCurrentCost() === 0 ? '5.00' : costTracker.getCurrentCost()}`);
});