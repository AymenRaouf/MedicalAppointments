CREATE TABLE  "clients" (
	"client_id"	INTEGER NOT NULL UNIQUE,
	"nom"	TEXT NOT NULL,
	"prenom"	TEXT NOT NULL,
    "adresse"	TEXT NOT NULL,
	"email"	TEXT,
	"num_tel"	TEXT NOT NULL,
    "information_medicale"	TEXT NOT NULL,
	PRIMARY KEY("client_id")
);

CREATE TABLE  "rdv" (
	"rdv_id"	INTEGER NOT NULL UNIQUE,
	"client_id"	INTEGER NOT NULL,
	"client_name"	TEXT NOT NULL,
	"date"	TEXT NOT NULL,
    "heure"	TEXT NOT NULL,
	"objet"	TEXT NOT NULL,
	PRIMARY KEY("rdv_id"),
	FOREIGN KEY("client_id") REFERENCES "clients"("client_id")
);