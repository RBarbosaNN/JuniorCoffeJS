--*********************************

-- Subconsultas SQL

-- Subconsulta é colocar a consulta que recupera a idade da Stacy dentro da consulta
-- que recupera as idades de todos os alunos. Essa segunda abordagem emprega uma técnica de subconsulta.
-- Exemplo:

use School
go

select * from Student
where StudentAge > (select StudentAge from Student where StudName = 'Stacy')

-- Perceba que usamos parêntesis para adicionar uma subconsulta na cláusula where. A consulta acima irá
-- recuperar os registros de todos os alunos da tabela Student
-- onde a idade do estudante seja maior do que a idade da Stacy.
-- A idade da Stacy é 20 anos.

--*********************************


