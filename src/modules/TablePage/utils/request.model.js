
export type RequestModel = {
    id: number;
    category: {
        id: number;
        name: string;
    };
    theme: string;
    shortName: string;
    description: string;
    descriptionDefect: string;
    descriptionDecide: string;
    positiveEffect: string;
};
