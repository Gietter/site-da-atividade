    CREATE DATABASE DBEXERCICIOO004;

    USE DBEXERCICIOO004;

    CREATE TABLE CARRO (
        IDCARRO INT NOT NULL AUTO_INCREMENT
        , MARCA VARCHAR(50)
        , MODELO VARCHAR(50)
        , FABRICACAO INT
        , PLACA CHAR(8)
        , COR VARCHAR(30) 
        , CHASSI VARCHAR(17)
        , PRIMARY KEY (IDCARRO)

    );
