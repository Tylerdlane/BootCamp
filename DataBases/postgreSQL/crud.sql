
--CREATE
INSERT INTO bucketlist.user (fname, lname)
VALUES ('Tyler', 'Lane');

INSERT INTO bucketlist.items (user_id, description)
VALUES (4, description);

--READ
SELECT * FROM bucketlist.user
ORDER BY user_id;

SELECT * FROM bucketlist.items
WHERE user_id = 4;

--DELETE
DELETE FROM bucketlist.user WHERE user_id = 6;

DELETE FROM bucketlist.items
WHERE item_id = 19;


--UPDATE
UPDATE bucketlist.items 
SET is_complete = NOT is_complete
WHERE item_id = 11;