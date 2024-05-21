export interface Task { 
    id: number;
    name: string;
    completed: boolean;
    createdAt: Date;
    completedAt?: Date;
}