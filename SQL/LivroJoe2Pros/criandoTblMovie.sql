
use dbMovie
go

create table tblMovie
(
    m_id int PRIMARY KEY,
    m_Title VARCHAR(30) not null,
    m_Runtime int null
)
GO

-- Adicionando colunas que eu esqueci de add na query anterior
ALTER TABLE tblMovie
add m_Rating varchar(10)

ALTER TABLE tblMovie
add m_Description varchar(100) null

--####
insert into tblMovie
values 
(1, 'AList Explorers', 96, 'PG-14'),
(2,'Bonker Bonzo', 75, 'G'),
(3, 'Chumps to Champs', 'PG-14'),
(4, 'Dare or Die', 110, 'R'),
(5, 'EeeeGhads', 88, 'G')
--###

--###
-- Alterando o tipo da coluna que já tinha sido criada/alterada
-- em ALTER TABLE, no entanto, como já havia registros dentro da tblMovie,
-- foi necessário criar um valor default para 'povoar' os registros existentes

ALTER TABLE tblMovie
drop column m_Description
GO

ALTER TABLE tblMovie
add m_Description varchar(100) not null
default 'Description Coming Soon'
--###
