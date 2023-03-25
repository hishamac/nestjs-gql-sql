import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from '../../pets/entities/pet.entitiy';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
