import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entitiy';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private readonly petRepository: Repository<Pet>) {}

    createPet(createPetInput):Promise<Pet> {
        const newPet = this.petRepository.create(createPetInput);
        return this.petRepository.save(newPet);
    }

    async findAll(): Promise<Pet[]> {
        return this.petRepository.find();
    }
}
