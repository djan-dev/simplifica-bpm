// eslint-disable-next-line prettier/prettier
import { HistoryProcess } from "@prisma/client";

export class HistoryProcessEntity implements HistoryProcess {
  id: number;
  numProcess_HistProc: number;
  comment_HistProc: string;
  accountName_HistProc: string;
  status_HistProc: string;
  currentStage_HistProc: string;
  nextStage_HistProc: string;
}
