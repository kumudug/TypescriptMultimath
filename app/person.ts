export interface Person {
    name: string;
    age?: number; //optional property
    formatName: () => string;
}