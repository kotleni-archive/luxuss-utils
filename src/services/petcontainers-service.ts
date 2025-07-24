import petContainers from '@/pet-containers.json';

export interface PetContainer {
    vendorCode: string;
    color: string;
    throatStandart: string;
    volume: string;
    height: string;
    width?: string;
    depth: string;
    minimalLot: string;
    imageUrl: string;
    gofroBoxDimentions?: string;
    pcsInBox?: string;
}

export class PetContainersService {
    async fetchAll(): Promise<PetContainer[]> {
        return petContainers;
    }
}
