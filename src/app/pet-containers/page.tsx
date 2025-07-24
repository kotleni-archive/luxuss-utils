'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {
    PetContainer,
    PetContainersService,
} from '@/services/petcontainers-service';
import {resolveColorName} from '@/utils/resolve-color-name';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const petContainersService = new PetContainersService();

interface PetContainerItemProps {
    petContainer: PetContainer;
}

function PetContainerItem({petContainer}: PetContainerItemProps) {
    'use client';

    return (
        <div className="p-2 border-1 rounded-xs flex flex-col items-center gap-2">
            <Image
                width={120}
                height={120}
                src={petContainer.imageUrl}
                alt={petContainer.vendorCode}
            />
            <p className="font-bold">{petContainer.vendorCode}</p>
            <p>
                {resolveColorName(petContainer.color)} | {petContainer.volume}{' '}
                мл
            </p>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="secondary">Більше</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <p hidden={petContainer.pcsInBox === undefined}>
                        В коробці: {petContainer.pcsInBox}
                    </p>
                    <p>Мінімальний лот: {petContainer.minimalLot}</p>
                    <p>Висота: {petContainer.height}</p>
                    <p>Ширина: {petContainer.width}</p>
                    <p>Глубина: {petContainer.depth}</p>
                    <p>Стандарт горла: {petContainer.throatStandart}</p>
                    <p hidden={petContainer.gofroBoxDimentions === undefined}>
                        Коробка: {petContainer.gofroBoxDimentions}
                    </p>
                </PopoverContent>
            </Popover>
        </div>
    );
}

const initialPetContainers = petContainersService.getAll();

export default function PetContainersPage() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredContainers, setFilteredContainers] =
        useState<PetContainer[]>(initialPetContainers);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newFilteredContainers = initialPetContainers.filter(
            pet =>
                pet.vendorCode.toLowerCase().includes(lowerCaseSearchTerm) ||
                pet.color.toLowerCase().includes(lowerCaseSearchTerm) ||
                String(pet.volume).includes(lowerCaseSearchTerm),
        );
        setFilteredContainers(newFilteredContainers);
    }, [searchTerm]);

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="mb-2 flex justify-center">
                <Input
                    type="text"
                    placeholder="Пошук за артикулом, кольором або об'ємом..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="w-full grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  auto-rows-fr gap-4">
                {filteredContainers.map((pet, index) => {
                    return <PetContainerItem key={index} petContainer={pet} />;
                })}
            </div>
        </div>
    );
}
