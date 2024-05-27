-- Write a "single" SQL Query that returns data from the `TEAMS` and `PLAYERS` tables such that

-- 1. All teams are returned, even if there are no players included in that team.
SELECT * FROM players;
SELECT * FROM teams;
-- 2. List `TEAM_ID` and `TEAM_NAME`.
-- 3. List player's `FULLNAME` (First and Last Name separated by a space).
SELECT t.id AS "TEAM_ID", name AS "TEAM_NAME", city AS "CITY", state AS "STATE", fname || ' ' || lname AS "FULLNAME", weight
FROM teams t
LEFT JOIN
players p ON t.id = p.team_id
ORDER BY t.id, weight, name ASC;
-- 4. If the player `weight` is greater than 200 lbs, return the text `"Heavy"`.  (Hint: you may use CASE).  Else, return the text `"Medium"`.

-- 5. Order by player's `weight` in ascending order.




-- THIS IS THE ANSWER --

-- Selecting the team id, first and last concat as FULLNAME, players weight
SELECT t.id, t.name AS team_name, p.fname || ' ' || p.lname AS "FULLNAME", p.weight,
-- Adding a CASE if the players weight more than 200 then we add it to the table as WEIGHT_CATEGORY
--Else it will add Medium if their weight is less than 200 
    CASE
        WHEN p.weight > 200 THEN 'Heavy'
        ELSE 'Medium'
    END AS WEIGHT_CATEGORY
    -- FROM the teams table, but with a LEFT JOIN on the players table so we are getting the rows from teams t and the matched rows from players p
FROM
    teams t
LEFT JOIN
    players p ON t.id = p.team_id
    -- Here we are first ordering by the teams id(this will gives us all the players from the team.id 1 then 2,3)
    -- Then we order by weight so we get the players from least heavy to most heavy
ORDER BY
    t.id ASC,
    p.weight ASC;

