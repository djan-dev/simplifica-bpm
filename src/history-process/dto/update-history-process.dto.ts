import { PartialType } from '@nestjs/swagger';
import { CreateHistoryProcessDto } from './create-history-process.dto';

// eslint-disable-next-line prettier/prettier
export class UpdateHistoryProcessDto extends PartialType(CreateHistoryProcessDto) {}
