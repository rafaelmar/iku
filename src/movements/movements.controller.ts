import { Body, Controller, Post } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Post()
  create(@Body() createMovementDto: CreateMovementDto) {
    console.log('Received data:', createMovementDto);
    return this.movementsService.create(createMovementDto);
  }
}
