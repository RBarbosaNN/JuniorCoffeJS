

/*                            ATENÇÃO                             */
/* Antes de executar este script faça um backup do banco de dados */

DECLARE 
	@PIN varchar(20),
	@Data char(8)

/* Informe na linha abaixo a data para exclusão, no formato AAAAMMDD */
SET @Data = '20190601'

BEGIN TRANSACTION

DECLARE Cur_Pessoas CURSOR FORWARD_ONLY STATIC READ_ONLY FOR
	SELECT PIN from Pessoas where ctgNumero = 2 and pin not in 
		(select PIN from LogAcesso where lacData >= @Data)

OPEN Cur_Pessoas

FETCH NEXT FROM Cur_Pessoas INTO @PIN
WHILE @@FETCH_STATUS = 0
BEGIN

	delete from pessoas where pin = @pin
	delete from fotos where pin = @pin
	delete from LinkGruposPessoas where pin = @pin
	delete from historicos where pin = @pin

	update Identificadores set pin = null where pin = @pin

	FETCH NEXT FROM Cur_Pessoas INTO @PIN
END

CLOSE Cur_Pessoas
DEALLOCATE Cur_Pessoas

delete from LogAcesso where lacData < @Data and PIN IN (select PIN from Pessoas where ctgNumero = 2)
delete from LogCreditos where lcrData < @Data and PIN IN (select PIN from Pessoas where ctgNumero = 2)
delete from LogAlarmes where lamData < @Data
delete from LogOperacao where lopData < @Data
delete from LogVisitantes where lviDataEntrada < @Data

COMMIT TRANSACTION