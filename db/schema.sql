CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(15) DEFAULT 'COMMON',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
);

CREATE TABLE `project` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `total_fields` bigint DEFAULT NULL,
  `user_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf1va93taog6qokr6sqmtgr93h` (`user_id`),
  CONSTRAINT `FKf1va93taog6qokr6sqmtgr93h` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users_roles` (
  `roles_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  KEY `FKa62j07k5mhgifpp955h37ponj` (`roles_id`),
  KEY `FK2o0jvgh89lemvvo17cbqvdxaa` (`user_id`),
  CONSTRAINT `FK2o0jvgh89lemvvo17cbqvdxaa` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKa62j07k5mhgifpp955h37ponj` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
);

CREATE TABLE `field` (
  `is_identifier` bit(1) NOT NULL,
  `is_nullable` bit(1) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqkg2j6opd48vvvm1he520ux40` (`project_id`),
  CONSTRAINT `FKqkg2j6opd48vvvm1he520ux40` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
);

CREATE TABLE `file` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint NOT NULL,
  `file_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9xpbf8klk9il032sq5xupl1f` (`project_id`),
  CONSTRAINT `FK9xpbf8klk9il032sq5xupl1f` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
);

CREATE TABLE `log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` bigint NOT NULL,
  `action` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6nescp3uxvh29jsvaw7ybbd5c` (`project_id`),
  KEY `FKefuitn33qkpy6nonixjyyu3u0` (`user_id`),
  CONSTRAINT `FK6nescp3uxvh29jsvaw7ybbd5c` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `FKefuitn33qkpy6nonixjyyu3u0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);