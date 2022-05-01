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
