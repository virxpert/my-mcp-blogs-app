export class CostTracker {
    private costLimit: number;
    private currentCost: number;
    
    // Cost estimates for different operations (in CAD)
    static readonly COSTS = {
        CONTENT_GENERATION_SHORT: 0.10,
        CONTENT_GENERATION_MEDIUM: 0.25,
        CONTENT_GENERATION_LONG: 0.50,
        IMAGE_GENERATION: 0.15,
        QUALITY_CHECK: 0.05,
        REFERENCE_VALIDATION: 0.10,
        COPYRIGHT_CHECK: 0.05
    };

    constructor(costLimit: number = 5.0) { // Default CAD$5 limit
        this.costLimit = costLimit;
        this.currentCost = 0;
    }

    public addCost(amount: number): boolean {
        if (this.currentCost + amount > this.costLimit) {
            console.warn(`Cost limit exceeded. Cannot add CAD$${amount}. Current: CAD$${this.currentCost}, Limit: CAD$${this.costLimit}`);
            return false;
        }
        this.currentCost += amount;
        console.log(`Added cost: CAD$${amount}. Total: CAD$${this.currentCost}`);
        return true;
    }

    public canProceed(estimatedCost: number): boolean {
        return (this.currentCost + estimatedCost) <= this.costLimit;
    }

    public getRemainingBudget(): number {
        return Math.max(0, this.costLimit - this.currentCost);
    }

    public getCurrentCost(): number {
        return this.currentCost;
    }

    public resetCost(): void {
        this.currentCost = 0;
        console.log('Cost tracker reset');
    }

    public isWithinLimit(): boolean {
        return this.currentCost <= this.costLimit;
    }

    public getUsagePercentage(): number {
        return (this.currentCost / this.costLimit) * 100;
    }
}