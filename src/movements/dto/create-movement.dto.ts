import { IsString, IsNumber, IsDate, IsEnum } from 'class-validator';

export enum MovementType {
  INCOME = 'ingreso',
  EXPENSE = 'egreso',
}
export class CreateMovementDto {
  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsDate()
  date: Date;

  @IsEnum(MovementType)
  type: MovementType;

  @IsString()
  userId: string;
}
