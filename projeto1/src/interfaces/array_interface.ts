interface TecnologiaProps {
    id: string;
    name:  string;
    slug?: string[];
}

/* const tecnologiaFront: TecnologiaProps = {
    id: '1',
    name: 'Frontend',
    slug: ['js', 'javascript', 'php']
} */

interface NomesProps {
    tecnologia:   TecnologiaProps[]
}

const frontendTechs: NomesProps = {
    tecnologia: [
        {id: '1', name: 'JavaScript', slug: ['js', 'javascript']},
        {id: '2', name: 'TypeScript', slug: ['ts', 'typescript']}
    ]
}

console.log({frontendTechs: frontendTechs.tecnologia})