import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ikualo'),
    MovementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}