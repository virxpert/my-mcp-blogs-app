export class ImageService {
    private images: string[] = [];

    constructor() {}

    public addImage(image: string): void {
        this.images.push(image);
    }

    public getImages(): string[] {
        return this.images;
    }

    public getImageByTopic(topic: string): string | null {
        const image = this.images.find(img => img.includes(topic));
        return image || null;
    }

    public removeImage(image: string): void {
        this.images = this.images.filter(img => img !== image);
    }
}