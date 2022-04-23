--Trocando a coluna: PatientAge da tabela Patient pela coluna PatientBG. 

USE Hospital
GO

ALTER TABLE Patient
DROP COLUMN PatientAge

ALTER TABLE Patient
ADD PatientBG VARCHAR(10)


--*******************

--Excluindo uma Coluna da tabela Patient

USE Hospital
GO

ALTER TABLE Patient
DROP COLUMN DiseaseDescription

--*******************

--Inserindo dados na tabela Patient 

USE Hospital
GO

INSERT INTO Patient VALUES
(101, 'James', 10, 'Doença cardíaca'),
(150, 'Sarah', 15, 'Doença pulmonar'),
(245, 'Isaac', 21, 'Doença renal'),
(250, 'Mike', 17, 'Infecção do ouvido'),
(301, 'Maria', 6, 'Ferimento no nariz')

--*******************

--Modificando o tipo de uma coluna da tabela Patient

USE Hospital
GO

ALTER TABLE Patient
ALTER COLUMN PatientName varchar(100) NOT NULL

--*******************

--Adicionando uma coluna na tabela Patient

USE Hospital
GO

ALTER TABLE Patient
ADD DiseaseDescription text NULL

--*******************

--Funções de Agregação Count() - Conta a quantidade de paciente com 
--problema cardíaco

USE Hospital
GO

SELECT COUNT(PatientID) as PatientsWithHeartDisease
FROM Patient
WHERE DiseaseDescription LIKE ('%cardíaca%')

--*******************

--Funções de Agregação Avg() - Verifica a média de idade de todos os 
--pacientes com problema no coração


use Hospital
go

select AVG(PatientAge) AverageAgeofHeartDisease
from Patient
where DiseaseDescription like ('%cardíaca%')

--*******************

--Max() - Retorna o máximo de todos os valores em uma coluna

use Hospital
go

select MAX(PatientAge) as MaximumAge
from Patient

--*******************

--Min() - Retorna o valor mínimo da coluna

use Hospital
go

select Min(PatientAge) as MaximumAge
from Patient

--*******************

--Upper() ou Ucase(). Converte todos os valores para caixa alta/baixa
--durante a consulta select

use Hospital
go

select UPPER(PatientName) as PatientNameUpper
from Patient

--*******************

--update - Substituir a string: 'Doença cardíaca'na coluna DiseaseDescription
--pela string 'Doença do coração'

use Hospital
GO

update Patient
set DiseaseDescription = 'Doença do coração'
where DiseaseDescription like ('%cardíaca%')

--*******************
