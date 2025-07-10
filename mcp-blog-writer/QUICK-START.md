# Quick Start Guide - MCP Blog Writing Tool

## 🚀 **Yes, it's working!** Here's how to use it:

### 1. Test the Tool (Verify it works)
```bash
cd /workspaces/my-mcp-blogs-app/mcp-blog-writer
node test-demo.js
```

### 2. Generate Your First Blog Post
```bash
node -e "
const { ContentGenerator } = require('./dist/tools/content-generator.js');
const { CostTracker } = require('./dist/utils/cost-tracker.js');

const costTracker = new CostTracker(5.0);
const generator = new ContentGenerator(costTracker);

const post = generator.generateContent('Climate Change Solutions', 'medium', 'Environmental enthusiasts');
console.log('📝 Generated Blog Post:');
console.log('Title:', post.title);
console.log('Content:', post.body);
console.log('💰 Cost: CAD$' + costTracker.getCurrentCost());
"
```

### 3. Check Your Budget Anytime
```bash
node -e "
const { CostTracker } = require('./dist/utils/cost-tracker.js');
const tracker = new CostTracker(5.0);
tracker.addCost(0.25); // Simulate some usage
console.log('💰 Budget Status:');
console.log('Used: CAD$' + tracker.getCurrentCost());
console.log('Remaining: CAD$' + tracker.getRemainingBudget());
console.log('Usage: ' + tracker.getUsagePercentage() + '%');
"
```

### 4. Generate Multiple Posts Within Budget
```bash
node -e "
const { ContentGenerator } = require('./dist/tools/content-generator.js');
const { CostTracker } = require('./dist/utils/cost-tracker.js');

const costTracker = new CostTracker(5.0);
const generator = new ContentGenerator(costTracker);

const topics = ['AI Ethics', 'Sustainable Technology', 'Remote Work Future'];

topics.forEach(topic => {
  if (costTracker.canProceed(0.25)) {
    const post = generator.generateContent(topic, 'medium');
    console.log('✅ Generated:', post.title);
  } else {
    console.log('❌ Budget limit reached for topic:', topic);
  }
});

console.log('\\n💰 Final cost: CAD$' + costTracker.getCurrentCost());
"
```

## 🎯 **Key Features You Can Use:**

1. **Content Generation**: Any topic, any length (short/medium/long)
2. **Budget Control**: Automatic CAD$5 limit enforcement
3. **Quality Checking**: Built-in content validation
4. **Image Generation**: Topic-relevant images
5. **Cost Tracking**: Real-time budget monitoring

## 💡 **Pro Tips:**
- Use 'short' length (CAD$0.10) for quick posts
- Use 'medium' length (CAD$0.25) for detailed articles  
- Use 'long' length (CAD$0.50) for comprehensive guides
- Check budget with `costTracker.getRemainingBudget()` before operations

**Your tool is ready and working! 🎉**
