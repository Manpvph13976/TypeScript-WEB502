class Pokemon {
    abilities?: any[];
    height?: number;
    id: number;
    image?: string;
    name: string;
    weight?: number;
    type?: any[];
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}
export default Pokemon