
--Essa query selecionou todos os cadastro da DB do Bella Paulista

USE W_Access_Events
GO

SELECT DISTINCT W_Access_Events.dbo.Events.FirstName as PrimeiroNome,
	            W_Access_Events.dbo.Events.LastName as SobreNome,
	            W_Access_Events.dbo.Events.IdNumber as Documento,
	            FacilityCode as FacilityCode,
	            CardNumber as NumeroDoCartao,
	            CompanyID as IdDaEmpresa,
	            VisitorCompany as EmpresaVisitadaOuEmpresaDoVisitante,
	    CASE
			    WHEN W_Access_Events.dbo.Events.CHType = 1 THEN 'Visitante'
			    WHEN W_Access_Events.dbo.Events.CHType = 7 THEN 'Funcionario'
			    ELSE 'Tipo nao encontrado'
	    end as CadastroTipo

FROM [dbo].[Events]
INNER JOIN [W_Access].[dbo].[CHMain] ON W_Access.dbo.CHMain.CHID = W_Access_Events.dbo.Events.CHID

WHERE W_Access_Events.dbo.Events.FirstName <> '' AND ServerDateTime >= 2020-01-01
ORDER BY W_Access_Events.dbo.Events.FirstName