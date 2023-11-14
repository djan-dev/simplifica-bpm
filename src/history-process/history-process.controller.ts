import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { HistoryProcessService } from './history-process.service';
import { CreateHistoryProcessDto } from './dto/create-history-process.dto';
import { UpdateHistoryProcessDto } from './dto/update-history-process.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('History-Process')
@Controller('history-process')
export class HistoryProcessController {
  constructor(private readonly historyProcessService: HistoryProcessService) {}

  @ApiResponse({ status: 409, description: 'Conflito no histórico' })
  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Post()
  create(@Body() createHistoryProcessDto: CreateHistoryProcessDto) {
    return this.historyProcessService.create(createHistoryProcessDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Get()
  findAll() {
    return this.historyProcessService.findAll();
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Get(':id/:numProcess_HistProc')
  // eslint-disable-next-line prettier/prettier
  findOne(@Param('id') id: string, @Param('numProcess_HistProc') numProcess_HistProc: string) {
    return this.historyProcessService.findOne(+id, +numProcess_HistProc);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Patch(':id/:numProcess_HistProc')
  // eslint-disable-next-line prettier/prettier
  update(@Param('id') id: string, @Param('numProcess_HistProc') numProcess_HistProc: string, @Body() updateHistoryProcessDto: UpdateHistoryProcessDto) {
    // eslint-disable-next-line prettier/prettier
    return this.historyProcessService.update(+id, +numProcess_HistProc, updateHistoryProcessDto);
  }
}
