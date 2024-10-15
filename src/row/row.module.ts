import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowEntity } from './row.entity';
import { RowService } from './row.service';
import { RowController } from './row.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RowEntity])],
  providers: [RowService],
  controllers: [RowController],
  exports: [RowService],
})
export class RowModule {}
