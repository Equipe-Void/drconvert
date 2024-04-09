INSERT INTO users (email, name, password) VALUES ("email@email.com", "test", "$2a$12$cwzWOOaj61uf4XObiOk8heuaPYlKlgVFsTA5VnkWSfiZx.E3V/OSW");
INSERT INTO project (user_id, name) VALUES (1, "primeiro");

INSERT INTO roles (role) VALUES ("CREATE_PROJECT");
INSERT INTO roles (role) VALUES ("READ");
INSERT INTO roles (role) VALUES ("UPDATE_FIELD");
INSERT INTO roles (role) VALUES ("DELETE_FIELD");
INSERT INTO roles (role) VALUES ("CREATE_FIELD");
INSERT INTO roles (role) VALUES ("CREATE_USER");

INSERT INTO users_roles (roles_id, user_id) VALUES (6, 1);
INSERT INTO users_roles (roles_id, user_id) VALUES (1, 1);
-- INSERT INTO users_roles (roles_id, user_id) VALUES (2, 1);