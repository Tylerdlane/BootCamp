-- Homework
-- Try the following questions on the database provided in class and add the queries to a file in your github repository. You can add individually or add to one text file and save to your repo.

-- Task 1:
-- Please find all employees that have a salary greater than 3000 and less than 5000
-- using AND operator
-- using BETWEEN operator

SELECT * 
FROM employees
WHERE salary BETWEEN 3000 AND 5000;


-- Task 2:
-- List the employees whose last name is longer than 6 characters.

-- In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

-- Hint: find appropriate string functions that would help you get this done.

SELECT SUBSTRING(last_name, 1, 6) AS "Last Name", job_id AS "Job", salary AS "Salary"
FROM employees
WHERE CHAR_LENGTH(last_name) > 6;

-- Homework : Please try this on your own on the acc database and notice how the result sets respond to these query changes.

-- Find all the departments which are located in the the United Kingdom.

-- Hints: You will need to use the locations table and the countries table to solve this problem. Hence there is going to be a subquery within a subquery. That is you will have a three layer cake of queries.

-- The innermost query will be the one that returns the country_id of the United Kingdom. The next query will return the location_id of the United Kingdom. The outermost query will return the department_id of all the departments located in the United Kingdom.

SELECT * FROM departments;
SELECT * FROM locations;
SELECT * FROM countries;

SELECT department_name AS "Department in UK"
FROM hr.departments
WHERE location_id = ( SELECT location_id 
FROM hr.locations 
WHERE country_id IN (SELECT country_id 
FROM hr.countries 
WHERE country_name = 'United Kingdom')
);

-- Task 3:
-- Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).
SELECT CONCAT(first_name, ' ', last_name) AS "FULLNAME", TO_CHAR(hire_date, 'MM/DD/YYYY') AS "Hire Date"
FROM employees 
WHERE salary > 8000 AND EXTRACT(year FROM hire_date) > 1996;

-- Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
SELECT MIN(salary)
FROM employees;


-- In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

SELECT ((salary * commission_pct) + salary / 100) AS "TOTAL COMPENSATION"
FROM employees;

-- Task 4:
-- List the full names and their department names of the all employees in the "bootcamp" database. Do the same for the employees that work for department "Sales". Order the results by hiring date with the most recent hires at the top.
-- Hint: you may NOT look up the department_id of "Sales", but use the text "Sales" in the query. Do something like ... WHERE department_name = 'Sales'

-- You would expect to see is somthing like this:

--       Full Name     |    Department    
-- -------------------+------------------
--   Lex De Haan       | Executive
--   Susan Mavris      | Human Resources
--   William Gietz     | Accounting
--   Hermann Baer      | Public Relations
--   Shelley Higgins   | Accounting
--   Daniel Faviet     | Finance
--   ...
-- Task 5:
-- List the first, last, email, department name and city of all employees that are Executives.
-- Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS using DEPARTMENT_NAME = 'appropriate department name'.

-- What you would expect to see is something similar to this:

--    FIRST      LAST       EMAIL      DEPT       CITY
--    ---------- ---------- ---------- ---------- ------------
--    Steven     King       SKING      Executive  Seattle
--    Neena      Kochhar    NKOCHHAR   Executive  Seattle
--    Lex        De Haan    LDEHAAN    Executive  Seattle
--    Seely      Bruce      bman       Executive  Seattle
--    Stephen    Noyce      snoyce     Executive  Seattle
--    ...
-- Task 6:
-- To the above query, add the manager's first name to the column list.
-- Hint: add a self join to the EMPLOYEES table all over again giving it a different alias.

-- Make changes so that all 22 employees are listed (for this requirement, think about using outer joins. You may wait till we have covered outer joins in class.)

-- What you would expect to see is something similar to this:

--   FIRST      LAST       EMAIL      MANAGER    DEPT       CITY
--   ---------- ---------- ---------- ---------- ---------- ----------
--   Neena      Kochhar    nkocchar   Steven     Executive  Seattle
--   Lex        De Haan    ldehaan    Steven     Executive  Seattle
--   Seely      Bruce      bman       Steven     Executive  Seattle
--   Stephen    Noyce      snoyce     Steven     Executive  Seattle
--   ...
-- Task 7:
-- Find out how many employees were hired in each year. List years and counts of employees hired in those years. See sample output below.
-- Hint: use grouping after extracting the year of hire.

-- Then leave out those who years where less than 2 employees were hired, while ordering the results chronologically.

-- You should see something smiliar to this:

--      YEAR_OF_HIRING | COUNT
--     ----------------+-------
--                1997 |     2
--                2004 |     2
--                2006 |     3
--                2007 |     3
--                2008 |     3
--                2009 |     2
--     (6 rows)
-- Task 8
-- We will rebuild our Mongo BucketList App in class. In order to truly understand this, researching the following before the class where we will build the Bucketlist App.
