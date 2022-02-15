USE W_Access_Events
GO


SELECT dbo.Events.FirstName as PrimeiroNome,
	   dbo.Events.LastName as SobreNome,
	   dbo.Events.IdNumber as Documento,
	   ServerDateTime as InicioDaVisita,
	   --VisitEnd as FimDaVisita,
	   --VisitReason as MotivoDaVisita,
	   --dbo.VisitHistory.OperName as NomeDoOperador,
	   CASE
			WHEN CHType = 1 THEN 'Visitante'
			WHEN CHType = 2 THEN 'Funcionario'
			ELSE 'Tipo nao encontrado'
	   end as CadastroTipo
FROM dbo.Events

WHERE FirstName <> '' AND ServerDateTime >= '2021-06-20'


