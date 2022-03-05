--Essas querys estão funcionando, pois foram testadas
--no servidor. No entanto, na aba de estatísticas do WSP,
--os números de cartões ativos/inativos continuaram inalterados.
--Porém, dentro da DB, foi possível notar que o cartão foi sim desabilitado.
--Vamos realizar mais alguns testes em campo e acompanhar o resultado
 
--Desabilita cartão
USE WSP
GO
 
UPDATE dbo.Identificadores
SET ideHabilitado = 0
FROM dbo.Identificadores
INNER JOIN dbo.LogAcesso ON dbo.Identificadores.PIN = dbo.LogAcesso.PIN
INNER JOIN dbo.Pessoas ON dbo.Identificadores.PIN = dbo.Pessoas.PIN
WHERE (dbo.Identificadores.PIN IS NOT NULL and Pessoas.pesAtivo IS NOT NULL) and lacData <= '20190101'



--Desabilita pessoa
USE WSP
GO
UPDATE dbo.Pessoas
SET pesAtivo = 0
FROM dbo.Identificadores
INNER JOIN dbo.LogAcesso ON dbo.Identificadores.PIN = dbo.LogAcesso.PIN
INNER JOIN dbo.Pessoas ON dbo.Identificadores.PIN = dbo.Pessoas.PIN
WHERE (dbo.Identificadores.PIN IS NOT NULL and Pessoas.pesAtivo IS NOT NULL) and lacData <= '20190101'
