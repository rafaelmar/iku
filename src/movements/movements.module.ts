// src/movements/movements.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';
import { Movement, MovementSchema } from './schemas/movement.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movement.name, schema: MovementSchema },
    ]),
  ],
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
