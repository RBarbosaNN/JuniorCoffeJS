-- Query que traz o nome e a data de nascimento do funcionário
-- e junta duas tabelas onde o departamento do
-- funcinário é = o departamento do gerente e onde
-- o nome do departamento é = Tecnologia

use livroSql101
GO

select f.nome as Nome_do_Funcionario, f.data_nascimento as Data_de_Nascimento, d.gerente as Nome_do_Gerente
from Funcionarios as f
inner join Departamento as d
on d.departamento = f.departamento
where d.departamento = 'Tecnologia'