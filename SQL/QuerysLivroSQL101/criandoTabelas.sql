--Criando tabelas e mantendo o relacionamento entre elas com PK e FK

use livroSql101
GO

create table Departamento
(
    departamento nvarchar(50) PRIMARY KEY,
    gerente NVARCHAR(50)
)
GO

create table Funcionarios
(
    matricula int PRIMARY KEY,
    nome nvarchar(50),
    data_nascimento date,
    sexo nvarchar(25),
    data_desligamento date,
    departamento nvarchar(50),
    CONSTRAINT FK_Funcionarios_Departamento FOREIGN KEY(departamento) REFERENCES Departamento(departamento)
)
GO

create table Dependentes
(
    id int,
    nome nvarchar(50) not null,
    data_nascimento date not null,
    sexo char(1),
    carteirinha int not null,
    matricula int,
    CONSTRAINT PK_Dependentes PRIMARY KEY (id),
    CONSTRAINT FK_Dependentes_Funcionarios FOREIGN KEY (matricula) REFERENCES Funcionarios (matricula),
    CONSTRAINT UQ_Carteirinha UNIQUE (carteirinha),
    CONSTRAINT CK_Sexo CHECK (sexo IN('F', 'M'))
)

INSERT INTO Departamento(departamento, gerente)
VALUES ('Administração', 'José Carlos')
GO

insert into Departamento(departamento, gerente)
values ('RH','Beatriz Alves')
GO

insert into Departamento (departamento, gerente)
values ('Tecnologia', 'Diane Gomes')
GO

insert into Funcionarios (matricula, nome, data_nascimento, sexo, data_desligamento, departamento)
values(1, 'João Silva', '1990-10-05', 'Masculino', '2018-12-20', 'Tecnologia')
GO

INSERT INTO Funcionarios (matricula, nome, data_nascimento, sexo, data_desligamento, departamento)
values(2, 'Luis Augusto', '1987-08-25', 'Masculino', null, 'RH')
GO

INSERT INTO Funcionarios (matricula, nome, data_nascimento, sexo, data_desligamento, departamento) 
values(50, 'Alessandra Faria', '1983-01-17', 'Feminino', '2020-01-25', 'Administração')
GO

INSERT INTO Funcionarios (matricula, nome, data_nascimento, sexo, data_desligamento, departamento)
values(101, 'Silvia Machado', '1992-01-03', 'Feminino', null, 'RH')
GO

INSERT INTO Funcionarios (matricula, nome, data_nascimento, sexo, departamento)
values(200, 'Lucas Alves', '1991-12-15', 'Masculino', null)
GO

INSERT INTO Funcionarios (matricula, nome, data_nascimento, sexo, departamento)
values(250, 'Wagner Oliveira', '1970-12-15', 'Masculino', 'Tecnologia')
GO

--Trazendo uma tabela relacionada

select f.nome AS 'Nome do funcionário', d.gerente AS 'Gerente_Funcionário'
from Funcionarios AS f
inner join Departamento as d
on d.departamento = f.departamento

--Estudar/testar outros relacionamentos com essas tabelas que foram criadas. Achei bem interessante! 

--Perfeito, estudo concluído! Podemos dar apelido inclusive para as tabelas.
--A query abaixo foi criada após esse entendimento e, traz o nome, matricula, data de desligamento, departamento do funcionario
--e departamento do gerente. Onde a data de desligamento seja diferente de null.

select tbF.nome as nome_do_funcionario,
        tbF.matricula as matricula,
        tbF.data_desligamento as demitido_em,
        tbF.departamento as departamento_do_funcionario,
        tbD.gerente as departamento_do_gerente
    from Funcionarios as tbF
    inner join Departamento as tbD
    on tbD.departamento = tbF.departamento
    where data_desligamento is not NULL
