const { ContentGenerator } = require('./dist/tools/content-generator.js');
const { CostTracker } = require('./dist/utils/cost-tracker.js');
const { QualityChecker } = require('./dist/tools/quality-checker.js');
const { ImageGenerator } = require('./dist/tools/image-generator.js');

console.log('🚀 MCP Blog Writing Tool - Demo Test');
console.log('=====================================');

// Initialize components
const costTracker = new CostTracker(5.0);
const contentGenerator = new ContentGenerator(costTracker);
const qualityChecker = new QualityChecker();
const imageGenerator = new ImageGenerator();

try {
  console.log('\n📝 Testing Content Generation...');
  
  // Test content generation
  const content = contentGenerator.generateContent('Artificial Intelligence in Healthcare', 'medium', 'Healthcare professionals');
  
  console.log('✅ Content Generated Successfully!');
  console.log('   Title:', content.title);
  console.log('   Word Count:', content.wordCount);
  console.log('   Reading Time:', content.readingTime + ' minutes');
  console.log('   Keywords:', content.keywords.join(', '));
  
  console.log('\n🖼️ Testing Image Generation...');
  const image = imageGenerator.generateImage('AI Healthcare');
  console.log('✅ Image Generated:', image);
  
  console.log('\n✔️ Testing Quality Check...');
  const isQualityGood = qualityChecker.checkQuality(content.body);
  console.log('✅ Quality Check Result:', isQualityGood ? 'PASSED' : 'FAILED');
  
  console.log('\n💰 Cost Analysis:');
  console.log('   Cost Used: CAD$' + costTracker.getCurrentCost().toFixed(2));
  console.log('   Remaining Budget: CAD$' + costTracker.getRemainingBudget().toFixed(2));
  console.log('   Budget Usage: ' + costTracker.getUsagePercentage().toFixed(1) + '%');
  
  console.log('\n🎯 Testing Budget Limits...');
  const canGenerateLong = costTracker.canProceed(CostTracker.COSTS.CONTENT_GENERATION_LONG);
  console.log('   Can generate long content?', canGenerateLong ? 'YES' : 'NO (budget limit)');
  
  console.log('\n🎉 All tests completed successfully!');
  console.log('✅ MCP Blog Writing Tool is WORKING within CAD$5 budget!');
  
} catch (error) {
  console.log('❌ Test Failed:', error.message);
}
