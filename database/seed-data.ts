
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Cillum non commodo fugiat aliqua excepteur dolore.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso: Pariatur ad mollit non aute.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Labore incididunt deserunt laborum eiusmod sit minim est enim excepteur elit occaecat eiusmod ullamco.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}