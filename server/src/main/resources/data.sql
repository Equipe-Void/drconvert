INSERT INTO user (name) VALUES ('Joao');

INSERT INTO credentials (user_id, email, password) VALUES (1,'biel@gmail.com', '123');

INSERT INTO project (user_id, name) values (1,'teste');

INSERT INTO log (user_id, action, project_id) VALUES (1,'mudei',1);

INSERT INTO file (project_id, file_path) values (1,'C:ProgramFiles/LAB3');

INSERT INTO field (name, type, project_id) VALUES ('nome', 'STRING', 1);