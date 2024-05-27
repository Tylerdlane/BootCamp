-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-03-20 01:44:35.134



--Create Schema
CREATE SCHEMA bucketlist;




-- tables
-- Table: ITEMS
CREATE TABLE bucketlist.ITEMS (
    ITEM_ID serial  NOT NULL,
    USER_ID integer  NOT NULL,
    description varchar(50)  NOT NULL,
    is_Complete boolean  NOT NULL DEFAULT false,
    CONSTRAINT ITEMS_pk PRIMARY KEY (ITEM_ID)
);

-- Table: USER
CREATE TABLE bucketlist.USER (
    USER_ID serial  NOT NULL,
    fname varchar(50)  NOT NULL,
    lname varchar(50)  NULL,
    CONSTRAINT USER_pk PRIMARY KEY (USER_ID)
);

-- foreign keys
-- Reference: ITEMS_USER (table: ITEMS)
ALTER TABLE bucketlist.ITEMS ADD CONSTRAINT ITEMS_USER
    FOREIGN KEY (USER_ID)
    REFERENCES bucketlist.USER (USER_ID)  --PARENT TABLE
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

