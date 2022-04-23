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

--Funções de Agregação Count()

USE Hospital
GO

SELECT COUNT(PatientID) as PatientsWithHeartDisease
FROM Patient
WHERE DiseaseDescription LIKE ('%cardíaca%')

--*******************

--Funções de Agregação 