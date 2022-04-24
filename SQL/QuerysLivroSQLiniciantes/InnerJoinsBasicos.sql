--Criando a DB School e as tabelas: Department e Student
--criando uma relação entre as tabelas com foreign key
--inserindo dados nas tabelas

use School
go

create table Student
(StudID int primary key not null,
StudName varchar(50) not null,
StudentAge int null,
StudentGender varchar(10) not null,
DepID int null)

create table Department
(DepID int primary key not null,
DepName varchar(50) not null,
DepCapacity int null)

alter table Student add constraint StudDepRel foreign key (DepID) references Department (DepID)

-- A culsulta acima declara que, na coluna Student, uma chave estrangeira nomeada 'StudDepRel'(você pode 
-- usar qualquer nome) será adicionada, o que define a coluna DepID da tabela
-- 'Student' como chave estrangeira, o que referencia a coluna DepID da tabela 'Departament'

insert into Department VALUES
(1, 'Inglês', 100),
(2, 'Matemática', 80),
(3, 'História', 70),
(4, 'Francês', 90),
(5, 'Geografia', 100),
(6, 'Desenho', 150),
(7, 'Arquitetura', 120)

insert into Student VALUES
(1, 'Alice', 21, 'Mulher', 2),
(2, 'Alfred', 20, 'Homem', 3),
(3, 'Henry', 19, 'Homem', 3),
(4, 'Jacobs', 22, 'Homem', 5),
(5, 'Bob', 20, 'Homem', 4),
(6, 'Shane', 22, 'Mulher', 4),
(7, 'Linda', 24, 'Mulher', 4),
(8, 'Stacy', 20, 'Mulher', 1),
(9, 'Wolfred', 21, 'Homem', 2),
(10, 'Sandy', 25, 'Mulher', 1),
(11, 'Colin', 18, 'Homem', 1),
(12, 'Maria', 19, 'Mulher', 3),
(13, 'Ziva', 20, 'Homem', 5),
(14, 'Mark', 23, 'Homem', 5),
(15, 'Fred', 25, 'Homem', 2),
(16, 'Vic', 25, 'Homem', null),
(17, 'Nick', 25, 'Homim', null)

--*********************************

--Iniciando com Inner Join
