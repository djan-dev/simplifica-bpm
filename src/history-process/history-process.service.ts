/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHistoryProcessDto } from './dto/create-history-process.dto';
import { UpdateHistoryProcessDto } from './dto/update-history-process.dto';
import { HistoryProcessRepository } from './repositories/historys-process.repository';

@Injectable()
export class HistoryProcessService {
  constructor(private readonly repository: HistoryProcessRepository) {}

  create(createHistoryProcessDto: CreateHistoryProcessDto) {
    return this.repository.create(createHistoryProcessDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number, numProcess_HistProc: number) {
    return this.repository.findOne(id, numProcess_HistProc);
  }

  update(id: number, numProcess_HistProc: number, updateHistoryProcessDto: UpdateHistoryProcessDto) {
    return this.repository.update(id, numProcess_HistProc, updateHistoryProcessDto);
  }
}
