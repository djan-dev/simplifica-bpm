// eslint-disable-next-line prettier/prettier
import { ApiProperty } from "@nestjs/swagger";
// eslint-disable-next-line prettier/prettier
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHistoryProcessDto {
  @ApiProperty({ description: 'Chave primária que identificação do processo' })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Chave primária que quantifica os processos' })
  @IsNumber()
  @IsNotEmpty()
  numProcess_HistProc: number;

  @ApiProperty({ description: 'Parecer da aprovação' })
  @IsString()
  @IsNotEmpty()
  comment_HistProc: string;

  @ApiProperty({ description: 'Nome de quem executa a task no CLM' })
  @IsString()
  @IsNotEmpty()
  accountName_HistProc: string;

  @ApiProperty({ description: 'Status do processo' })
  @IsString()
  @IsNotEmpty()
  status_HistProc: string;

  @ApiProperty({ description: 'O processo está onde?' })
  @IsString()
  @IsNotEmpty()
  currentStage_HistProc: string;

  @ApiProperty({ description: 'O processo vai para onde?' })
  @IsString()
  @IsNotEmpty()
  nextStage_HistProc: string;
}
