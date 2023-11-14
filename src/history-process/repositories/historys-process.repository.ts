/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHistoryProcessDto } from "../dto/create-history-process.dto";
import { UpdateHistoryProcessDto } from "../dto/update-history-process.dto";
import { HistoryProcess } from "@prisma/client";


@Injectable()
export class HistoryProcessRepository {
  constructor(private readonly prismaRepository: PrismaService) { }

  async create(createHistoryProcessDto: CreateHistoryProcessDto): Promise<HistoryProcess> {
    const numProcess = await this.findValueNumProcess(createHistoryProcessDto.id);

    return this.prismaRepository.historyProcess.create({
      data: {
        id: createHistoryProcessDto.id,
        numProcess_HistProc: numProcess,
        comment_HistProc: createHistoryProcessDto.comment_HistProc,
        accountName_HistProc: createHistoryProcessDto.accountName_HistProc,
        status_HistProc: createHistoryProcessDto.status_HistProc,
        currentStage_HistProc: createHistoryProcessDto.currentStage_HistProc,
        nextStage_HistProc: createHistoryProcessDto.nextStage_HistProc
      },
    })

  }

  private async findValueNumProcess(id: number): Promise<number> {
    const result = await this.prismaRepository.historyProcess.findFirst({
      where: {
        id,
      },
      orderBy: {
        numProcess_HistProc: 'desc',
      },
    });

    return (result?.numProcess_HistProc || 0) + 1;
  }


  async findAll(): Promise<HistoryProcess[]> {
    return this.prismaRepository.historyProcess.findMany();
  }

  async findOne(id: number, numProcess_HistProc: number): Promise<HistoryProcess> {
    return this.prismaRepository.historyProcess.findFirst({
      where: {
        id,
        numProcess_HistProc,
      }
    })
  }

  async update(id: number, numProcess_HistProc: number, updateHistoryProcessDto: UpdateHistoryProcessDto): Promise<HistoryProcess[]> {
    // Atualiza registro
    await this.prismaRepository.historyProcess.updateMany({
      where: {
        id,
        numProcess_HistProc,
      },
      data: updateHistoryProcessDto,
    });

    // Recuperar o registro atualizado
    const updatedRecords = await this.prismaRepository.historyProcess.findMany({
      where: {
        id,
        numProcess_HistProc
      },
    });

    return updatedRecords;
  }
}
