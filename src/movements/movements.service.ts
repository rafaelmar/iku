// src/movements/movements.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movement } from './schemas/movement.schemas';
import { CreateMovementDto } from './dto/create-movement.dto';

@Injectable()
export class MovementsService {
  constructor(
    @InjectModel(Movement.name) private readonly movementModel: Model<Movement>,
  ) {}

  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const createdMovement = new this.movementModel(createMovementDto);
    return createdMovement.save();
  }

  async findAll(): Promise<Movement[]> {
    return this.movementModel.find().exec();
  }
}
