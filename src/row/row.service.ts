import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RowEntity } from './row.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RowService {
  constructor(
    @InjectRepository(RowEntity)
    private rowRepository: Repository<RowEntity>,
  ) {}

  async createRow(data: string): Promise<RowEntity> {
    const row = this.rowRepository.create({ data });
    return this.rowRepository.save(row);
  }

  async findAll(): Promise<RowEntity[]> {
    return this.rowRepository.find();
  }

  async findOne(id: number): Promise<RowEntity> {
    return this.rowRepository.findOne({ where: { id } });
  }
}
