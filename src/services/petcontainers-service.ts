import petContainers from '@/pet-containers.json';
import {resolveColorName} from '@/utils/resolve-color-name';

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
    getAll(): PetContainer[] {
        return petContainers.map(petContainer => {
            petContainer.color = resolveColorName(petContainer.color);
            return petContainer;
        });
    }
}
