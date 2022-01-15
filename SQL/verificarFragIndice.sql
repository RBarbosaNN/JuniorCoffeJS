-- Essa query apresenta uma forma simples de verificar a fragmentação de cada tabela dentro da DB


select object_name(dm.object_id) AS Tabela,
    i.name AS NomeIndex,
    dm.index_type_desc AS TipoIndice,
    avg_fragmentation_in_percent    AS [%Fragmentado]
from sys.dm_db_index_physical_stats(db_id(),null,null,null,'sampled') dm
join sys.indexes i on dm.object_id=i.object_id and dm.index_id=i.index_id
order by avg_fragmentation_in_percent desc


-- Essa query configura a utilização maxima de memória que a isntancia pode utilizar

sp_configure 'show advanced options', 1;
GO
RECONFIGURE;
GO
sp_configure 'max server memory', 4096;
GO
RECONFIGURE;
GO


-- Essa query promete diminuir a fragmentação de todas as tabelas da DB. Precisa testar com atenção

set nocount on
DECLARE tabelas CURSOR fast_forward
FOR select name from sysobjects where type = 'u'
DECLARE @nome varchar(80)
OPEN tabelas
FETCH NEXT FROM tabelas INTO @nome
WHILE (@@fetch_status <> -1)
BEGIN
IF (@@fetch_status <> -2)
BEGIN
select '[][] Reindexando a tabela: '+@nome
exec( 'dbcc dbreindex ( ''' + @nome + ''')')
END
FETCH NEXT FROM tabelas INTO @nome
END
CLOSE tabelas
DEALLOCATE tabelas