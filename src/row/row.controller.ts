import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RowService } from './row.service';

@Controller('rows')
export class RowController {
  constructor(private readonly rowService: RowService) {}

  @Post()
  async create(@Body('data') data: string) {
    return this.rowService.createRow(data);
  }

  @Get()
  async findAll() {
    return this.rowService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.rowService.findOne(id);
  }
}
