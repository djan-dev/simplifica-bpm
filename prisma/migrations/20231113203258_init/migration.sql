BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[HistoryProcess] (
    [id] INT NOT NULL,
    [numProcess_HistProc] INT NOT NULL CONSTRAINT [HistoryProcess_numProcess_HistProc_df] DEFAULT 0,
    [comment_HistProc] NVARCHAR(1000) NOT NULL,
    [accountName_HistProc] NVARCHAR(1000) NOT NULL,
    [status_HistProc] NVARCHAR(1000) NOT NULL,
    [currentStage_HistProc] NVARCHAR(1000) NOT NULL,
    [nextStage_HistProc] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [HistoryProcess_pkey] PRIMARY KEY CLUSTERED ([id],[numProcess_HistProc])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
