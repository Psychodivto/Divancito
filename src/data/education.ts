interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string; 
    tesis: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
      
    {
        title: "Ingenieria de software",
        startDate: "2020-08-01",
        endDate: "2024-06-30",
        school: "Universidad Veracruzana",
        tesis: " ",
        description: " ",
        currentUni: false,
    },
    
];

export default education;