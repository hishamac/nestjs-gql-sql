import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entitiy';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
  ) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail({
      where:{id}
    });
  }
}
