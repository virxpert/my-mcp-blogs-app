import { QualityChecker } from '../tools/quality-checker';
import { ReferenceValidator } from '../tools/reference-validator';

export class ValidationService {
    private qualityChecker: QualityChecker;
    private referenceValidator: ReferenceValidator;

    constructor() {
        this.qualityChecker = new QualityChecker();
        this.referenceValidator = new ReferenceValidator();
    }

    validateContent(content: string): ValidationResult {
        const isQualityValid = this.qualityChecker.checkQuality(content);
        const areReferencesValid = this.referenceValidator.validateReferences(content);

        return {
            isQualityValid,
            areReferencesValid,
            isValid: isQualityValid && areReferencesValid
        };
    }
}

export interface ValidationResult {
    isQualityValid: boolean;
    areReferencesValid: boolean;
    isValid: boolean;
}