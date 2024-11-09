interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Ingles",
        level: "B1",
        description: "Pronunciación escrita",
        show: true
    }
];

export default languages;