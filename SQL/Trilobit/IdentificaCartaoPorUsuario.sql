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
--Ainda precisa testar em uma VM
UPDATE dbo.Identificadores
SET dbo.Identificadores.pesAtivo = 0
FROM dbo.Identificadores
INNER JOIN dbo.LogAcesso ON dbo.Identificadores.PIN = dbo.LogAcesso.PIN
WHERE (dbo.Identificadores.PIN IS NOT NULL and pesAtivo IS NOT NULL)  and lacData <= ‘20180101’


--O exemplo abaixo foi copiado do GitHub

UPDATE
    Tabela
SET
    Tabela.Col01 = Outra_tabela.Col01,
    Tabela.Col02 = Outra_tabela.Col02
FROM
    Tabela as Tabela
  INNER JOIN Outra_tabela AS Outra_tabela
    ON Tabela.id = Outra_tabela.id
WHERE
    Condicao = 'Qualquer coisa'