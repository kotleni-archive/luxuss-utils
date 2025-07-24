interface Color {
    name: string;
    possibleNames: string[];
}

const colors: Color[] = [
    {name: 'білий', possibleNames: ['белый', 'white', 'білий']},
    {
        name: 'прозорий',
        possibleNames: ['прозрачный', 'transparent', 'прозорий'],
    },
    {name: 'голубий', possibleNames: ['голубой', 'lightblue', 'голубий']},
    {name: 'коричневий', possibleNames: ['коричневый', 'brown', 'коричневий']},
    // {name: 'оливковий', possibleNames: ['оливковый', 'green', 'оливковий']},
];

export function resolveColorName(colorName: string): string {
    for (const color of colors) {
        if (
            color.possibleNames.find(
                possibleColorName =>
                    possibleColorName === colorName.toLowerCase(),
            ) !== undefined
        ) {
            return color.name;
        }
    }
    return colorName.toLowerCase(); // Can't resolve color name
}
