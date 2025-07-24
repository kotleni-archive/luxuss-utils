import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {
    PetContainer,
    PetContainersService,
} from '@/services/petcontainers-service';
import Image from 'next/image';

const petContainersService = new PetContainersService();

interface PetContainerItemProps {
    key: number;
    petContainer: PetContainer;
}

function PetContainerItem({key, petContainer}: PetContainerItemProps) {
    'use client';

    return (
        <div
            key={key}
            className="p-2 border-1 rounded-xs flex flex-col items-center gap-2"
        >
            <Image
                width={120}
                height={120}
                src={petContainer.imageUrl}
                alt={petContainer.vendorCode}
            />
            <p className="font-bold">{petContainer.vendorCode}</p>
            <p>
                {petContainer.color} | {petContainer.volume} мл
            </p>

            <Popover>
                <PopoverTrigger>
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

export default async function PetContainersPage() {
    const petContainers = await petContainersService.fetchAll();
    return (
        <div className="w-full p-4 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  auto-rows-fr gap-4">
            {petContainers.map((pet, index) => {
                return <PetContainerItem key={index} petContainer={pet} />;
            })}
        </div>
    );
}
