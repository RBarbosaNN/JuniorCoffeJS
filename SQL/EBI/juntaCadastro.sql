
--Query para juntar todos os cadastros em uma unica tabela.

use cms
Select      Distinct CAST(name + ' ' + surname AS VARCHAR(MAX)) AS NOMECOMPLETO,
            Identifier AS MATRICULA,
            UF84 AS EMPRESA,
            UF81 AS DOCUMENTO,
            ExternalRegular.stateid ,
            ExternalRegular.Comments,
            --GlobalAccessLevels.ServerRecordNumber,
            --AccessLevelName
            AccessLevelDescription
from dbo.ExternalRegular join dbo.ExternalRegularUserFields on dbo.ExternalRegular.SbiID = dbo.ExternalRegularUserFields.SbiID
                                   join dbo.CHAccessLevels on (dbo.ExternalRegular.SbiID = chaccesslevels.SbiID)
                                   join dbo.GlobalAccessLevels GlobalAccessLevels on (CHAccessLevels.serverrecordnumber = GlobalAccessLevels.serverrecordnumber)
 
union all
 
Select Distinct CAST(name + ' ' + surname AS VARCHAR(MAX)) AS NOMECOMPLETO,
         Identifier as MATRICULA,
         UF7 AS RMPRESA,
         UF52 AS DOCUMENTO,
         employee.stateid,
         employee.Comments,
         --GlobalAccessLevels.ServerRecordNumber,
         --AccessLevelName
         AccessLevelDescription
from Employee join dbo.EmployeeUserFields on employee.SbiID = dbo.EmployeeUserFields.SbiID
                    join dbo.CHAccessLevels on (employee.SbiID = chaccesslevels.SbiID)
                    join dbo.GlobalAccessLevels GlobalAccessLevels on (CHAccessLevels.serverrecordnumber = GlobalAccessLevels.serverrecordnumber)
 
 
order by NOMECOMPLETO