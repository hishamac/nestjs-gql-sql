import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entitiy';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}
  
  @Query((returns) => Pet)
  getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation((returns) => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
