CREATE TABLE IF NOT EXISTS Review(
	id varchar(20),
	title varchar(255)
);

INSERT IGNORE INTO Review (id, title) VALUES
	("1", "some review"),
	("2", "another review")