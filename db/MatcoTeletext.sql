use matcoteletext;

CREATE TABLE novica (
StevilkaStrani INT NOT NULL PRIMARY KEY,
NazivNovice varchar(40) NOT NULL,
OpisNovice varchar(80) NOT NULL,
OznakaKetegorije varchar(20) NOT NULL
);

INSERT INTO novica VALUES (111, '25 let od potresa v posočju', 'Zgornje Posočje je na velikonočno nedeljo pred 25 leti stresel najmočnejši potres.', 'Novica');
INSERT INTO novica VALUES (112, 'Najnižja rast števila upokojencev', 'Lani je bilo prejemnikov pokojnin v povprečju malenkost več kot 628 tisoč.', 'Novica');
INSERT INTO novica VALUES (144, 'Posli največjega orožarja cvetijo', 'Posel podjetij, ki proizvajajo vojaško in obrambno opremo, cvetijo.', 'Novica');
INSERT INTO novica VALUES (161, 'Napoved za Slovenijo', 'Popoldne bo povečini sončno.', 'Vreme');
INSERT INTO novica VALUES (503, 'NBA sprožil preiskavo Dallasa', 'Liga NBA je začela preiskavo srečanja z Dallasom in Chicagom.', 'Šport');

DELETE FROM novica WHERE 1 = 1;
SELECT * FROM novica;