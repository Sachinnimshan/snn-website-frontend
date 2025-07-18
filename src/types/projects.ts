export interface Project {
    _id: string;
    title: string;
    image: string;
    description: string;
    demo: string;
    youtube: string;
    github: string;
    languages: string[];
    technology: string;
    gallery: string[];
    comments: string[]; // Replace `any` with a more specific type if your comments have a defined structure
    __v: number;
    createdAt: string;
    updatedAt: string;
}
