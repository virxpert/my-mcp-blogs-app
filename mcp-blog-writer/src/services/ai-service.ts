import { ContentGenerator, BlogContent } from '../tools/content-generator';
import { ImageGenerator } from '../tools/image-generator';
import { CostTracker } from '../utils/cost-tracker';

export class AIService {
    private contentGenerator: ContentGenerator;
    private imageGenerator: ImageGenerator;
    private costTracker: CostTracker;

    constructor() {
        this.costTracker = new CostTracker(5.0);
        this.contentGenerator = new ContentGenerator(this.costTracker);
        this.imageGenerator = new ImageGenerator();
    }

    public generateBlogContent(topic: string, length: string = 'medium'): { content: BlogContent; image: string } {
        const content = this.contentGenerator.generateContent(topic, length);
        const image = this.imageGenerator.generateImage(topic);
        return { content, image };
    }
}