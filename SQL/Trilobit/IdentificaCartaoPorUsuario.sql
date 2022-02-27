--Essa query apresenta o nome do dono do cartão e também mostra se o cartão esta ativo ou não com base em uma data.

USE WSP
GO

SELECT pesNome as Nome,
       pesAtivo as Ativo,
       ideNumExterno as NumeroDoCartao,
       lacData as UltimoAcesso
FROM dbo.Pessoas
INNER JOIN dbo.Identificadores ON dbo.Identificadores.PIN = dbo.Pessoas.PIN
INNER JOIN dbo.LogAcesso ON dbo.LogAcesso.PIN = dbo.Pessoas.PIN
WHERE (dbo.Identificadores.PIN IS NOT NULL and pesAtivo IS NOT NULL)  and lacData <= ‘20180101’


--Construir uma query que desabila o cartão caso ele não tenha dado entra no prédio a partir de uma data
UPDATE dbo.Identificadores
SET pesAtivo = 0
WHERE ()
