-- Todas as novas databases são criadas dentro da DB master
-- a query abaixo verifica se já exite uma DB chamada dbMovie
-- se sim, exclui essa DB e cria de novo
-- se não, apenas cria uma nova DB chamada dbMovie

USE master
if exists (select * from sys.sysdatabases where [name] = 'dbMovie')
drop database dbMovie
go

create database dbMovie
GO

