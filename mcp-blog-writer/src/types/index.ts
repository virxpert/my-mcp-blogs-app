export interface Content {
    title: string;
    body: string;
    references: string[];
}

export interface Image {
    url: string;
    description: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors?: string[];
}