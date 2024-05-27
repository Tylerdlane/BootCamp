--GIVE ME EVERYTHING FROM TABLES COUNTRIES
SELECT * FROM hr.countries;

SELECT
     country_id, 
     country_name 
FROM hr.countries;

--ARITHMIC
SELECT * FROM sales;

SELECT amount + 3 as "Amount" 
FROM sales;
SELECT amount - 3 as "Amount" 
FROM sales;
SELECT amount * 3 as "Amount" 
FROM sales;
SELECT amount / 3 as "Amount" 
FROM sales;

--LOGICAL 
--NOT

SELECT * FROM employees;

SELECT first_name, last_name
FROM employees
WHERE NOT (job_id IS NULL);

SELECT job_title, min_salary
FROM jobs
WHERE NOT (min_salary BETWEEN 5000 AND 8000);

SELECT * FROM jobs;

--AND
SELECT * 
FROM jobs
WHERE job_title='Programmer' AND job_id='IT_PROG';

--OR
SELECT * 
FROM jobs
WHERE job_title='Sales Manager' OR job_title='President';

--CHARACTER
SELECT 'Hello' || ' ' || 'World' AS ConcatString;

SELECT
country_name,
region_id
FROM countries
WHERE region_id < 3;

SELECT
country_name,
region_id
FROM countries
WHERE region_id = 3 OR region_id = 5;

SELECT DISTINCT department_id FROM employees;

SELECT DISTINCT department_id, manager_id
FROM employees;

SELECT employee_id,
 last_name, salary,
 commission_pct
 FROM employees
WHERE commission_pct IS NOT NULL;

SELECT employee_id,
 last_name, salary,
 commission_pct
 FROM employees
WHERE commission_pct IS NOT NULL
OR (salary > 10000
AND hire_date > '31-Dec-98');


SELECT
first_name,
last_name
FROM employees
WHERE department_id = 80;

SELECT *
FROM employees
WHERE salary > 8000;

SELECT first_name, last_name
FROM employees
WHERE last_name LIKE 'K%';

--COUNT 
SELECT COUNT(*) FROM employees;

SELECT COUNT(DISTINCT manager_id) FROM employees;

SELECT COUNT(*) FROM employees WHERE manager_id IS NOT NULL;


SELECT first_name,
last_name,
salary,
commission_pct
FROM employees LIMIT 10;

SELECT lname,
team_id
FROM players;


SELECT lname,
team_id
FROM players
WHERE team_id IS NULL;


SELECT lname,
COALESCE(team_id, 5)
FROM players
WHERE team_id IS NULL;

SELECT first_name || ' ' || last_name AS "FULL NAME",
salary,
commission_pct
FROM employees;

SELECT first_name || ' ' || last_name AS "FULL NAME",
salary,
commission_pct,
COALESCE(commission_pct, 0) + 0.10
FROM employees;

--Single Row
SELECT first_name, UPPER(last_name) FROM hr.employees;

--Multiple Rows
SELECT MAX(salary) FROM employees;
SELECT salary FROM employees;


--LIST THEMAX SALARY FOR EACH JOB_ID
SELECT job_id, MAX(salary)
FROM employees
GROUP BY job_id;
--GROUP BY
SELECT COUNT(department_id), department_id FROM employees
  WHERE department_id IS NOT NULL
 GROUP BY department_id;

SELECT COUNT(job_id), job_id FROM employees
 GROUP BY job_id;

--ORDER BY
SELECT last_name, first_name, job_id, salary
FROM employees
ORDER BY last_name ASC, first_name DESC;

SELECT city FROM locations
ORDER BY city ASC;

SELECT city, postal_code FROM locations ORDER BY postal_code ASC; 


--STRING CONVERSION FUNCTION
SELECT 'Hello' || ' ' || 'Dolly';
SELECT CONCAT('Hello', 'Dolly');
SELECT SUBSTRING('Hello Dolly!' FROM 1 FOR 5);
SELECT CHAR_LENGTH('Hello Dolly!');
SELECT POSITION('ll' IN 'Hello Dolly!'); --Returns first occurrence if NOT found returns 0


--NUMBERS
--Rounds Up or Down
SELECT ROUND(4.2);
SELECT ROUND(4.6);
--Truncates the fractional part
SELECT TRUNC(4.2);
--Returns positive form of any number
SELECT ABS(-5);
SELECT ABS(5);
--Rounds Down
SELECT FLOOR(4.6);
--Rounds Up
SELECT CEIL(4.2);
--Returns the remainder
SELECT MOD(8,3);


SELECT ROUND(453.141592, 4);
SELECT TRUNC(453.141592, 4);
SELECT ROUND(453.141592, -1);
SELECT TRUNC(453.142592, -2);
SELECT MOD(16, 5);

--EXTRACT
SELECT
     EXTRACT(day FROM hire_date) AS "DAY",
     EXTRACT(month FROM hire_date) AS "MONTH",
     EXTRACT(year FROM hire_date) AS "YEAR"
FROM employees
WHERE employee_id = 200;

--If-Else
SELECT
  CASE job_id
     WHEN 'IT_PROG' THEN 'Infromation Technology Professional'
     WHEN 'SA_REP' THEN 'Sales Representative'
     WHEN 'AD_VP' THEN 'Administration Vice President'
     ELSE 'Other'   
  END AS job_title
FROM employees
ORDER BY job_title;

SELECT job_id,
  CASE 
     WHEN salary > 10000 THEN 'High Salary'
     WHEN salary > 5000 THEN 'Medium Salary'
     ELSE 'Low Salary'   
  END AS salary_category
FROM employees
ORDER BY salary;

SELECT hire_date FROM employees;

SELECT CONCAT(first_name, last_name),
     CASE
          WHEN EXTRACT(year FROM hire_date) < 2001 THEN 'Senior'
          WHEN EXTRACT(year FROM hire_date) BETWEEN 2001 AND 2007 THEN 'Mid'
          WHEN EXTRACT(year FROM hire_date) > 2007 THEN 'Junior'
          ELSE 'Unknown'
     END AS seniority
FROM employees
ORDER BY hire_date;

--Restrict
--Return only the catchers
SELECT fname, lname, position
FROM players
WHERE position = 'Catcher';
     
--returns only the heavier players
SELECT fname, lname, weight, height
FROM players
WHERE weight >=220
ORDER BY height;

SELECT CURRENT_DATE + 7*30 AS "DATE ~ 7 Months Later";

SELECT CURRENT_DATE + INTERVAL '7' MONTH AS "7 Months Later";


SELECT * FROM employees WHERE department_id = 110;

SELECT * FROM employees WHERE LOWER(last_name) = 'king';
SELECT * FROM employees;
SELECT first_name || ' ' || last_name AS "Full Name"
FROM employees 
WHERE last_name LIKE 'K%';

SELECT CONCAT(first_name, ' ', last_name) AS "FULL NAME"
FROM employees
WHERE (first_name ILIKE 'K%' OR last_name ILIKE 'K%') 
AND job_id <> 'AD_PRES';

-- If there are folks who were hired in the company in the month of June in any year, or have worked for at least 20 years, place them on top of the list.

-- Hence, please create another query where 
-- Filter those who have been with the company for more than 20 years, or
-- Filter those who have been hired in the month of June 
-- (hint: can you extract out the month from hire_date?)
-- Create a list, such that it does not include Stephen King
-- Also show hire date in a human friendly date format.

SELECT CONCAT(first_name, ' ', last_name) AS "FULL NAME", TO_CHAR(hire_date, 'MM/DD/YYYY') AS "Hire Date"
FROM employees
WHERE (EXTRACT(year FROM hire_date) > 2004 OR EXTRACT(month FROM hire_date) = 06)
AND job_id <> 'AD_PRES'
ORDER BY hire_date;

--SUBQUERIES

SELECT employee_id, first_name
FROM employees
WHERE salary >=
(SELECT AVG(salary) FROM employees);

SELECT department_name
FROM departments
WHERE location_id IN 
(SELECT location_id FROM locations
WHERE country_id = 'UK');

SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM locations;

SELECT CONCAT(first_name, ' ', last_name) AS "Full Name"
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location_id = (
        SELECT location_id
        FROM locations
        WHERE city = 'Seattle'
    )
);

SELECT * FROM sales;
SELECT * FROM products;

SELECT p.productid, p.description, s.saledate, s.amount
FROM sales s JOIN products p 
ON (p.productid = s.productid);

SELECT e.employee_id, e.first_name, city, d.department_name
FROM employees e 
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id;

--LEFT JOIN
SELECT e.first_name, d.department_name
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id;

--RIGHT JOIN
SELECT e.first_name, d.department_name
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id;


--FULL OUTER JOIN
SELECT d.department_name AS "DEPT_NAME",
e.first_name AS "F_NAME",
e.job_id AS "JOB_ID"
FROM employees e
FULL JOIN departments d 
ON e.department_id = d.department_id;

SELECT * FROM sales;
SELECT * FROM products;

SELECT TO_CHAR(s.saledate, 'DD/MM/YYYY') AS "SALE DATE", p.description AS " PRODUCT NAME", s.amount AS "SALE AMOUNT"
FROM sales s JOIN products p 
ON s.productid = p.productid;

SELECT * FROM players;
SELECT * FROM teams;

SELECT p.fname AS "FIRST NAME", 
p.lname AS " LAST NAME", 
p.height AS "HEIGHT",
p.weight AS "WEIGHT", 
t.name AS "TEAM"
FROM players p LEFT JOIN teams t
ON p.team_id = t.id;

--SELF JOIN
SELECT emp.first_name || ' ' || emp.last_name AS "EMPLOYEE", mgr.first_name || ' ' || mgr.last_name AS "MANAGER"
FROM employees emp RIGHT JOIN employees mgr
ON emp.manager_id = mgr.employee_id
WHERE emp.manager_id IS NOT NULL;

SELECT emp.first_name || ' ' || emp.last_name AS "EMPLOYEE", mgr.first_name || ' ' || mgr.last_name AS "MANAGER"
FROM employees emp LEFT JOIN employees mgr
ON emp.manager_id = mgr.employee_id
WHERE emp.manager_id IS NOT NULL;


SELECT * FROM employees;
SELECT * FROM locations;
SELECT * FROM departments;

SELECT e.last_name|| ', ' || e.first_name AS "Full Name", l.city
FROM employees e  
LEFT JOIN departments d
ON e.department_id = d.department_id
LEFT JOIN locations l
ON l.location_id = d.location_id
ORDER BY e.last_name;

SELECT last_name, first_name
FROM employees
WHERE last_name = 'Fay';

SELECT last_name, first_name
FROM employees
WHERE last_name ILIKE '%Fay';

SELECT last_name, first_name, salary
FROM employees
WHERE last_name ILIKE 'h%' AND salary > 3500;

SELECT * FROM employees;

SELECT DISTINCT job_title, commission_pct
FROM jobs;

SELECT DISTINCT commission_pct 
FROM employees
WHERE commission_pct IS NOT NULL;

SELECT first_name, last_name, job_id
FROM employees
WHERE job_id LIKE '%MAN' OR job_id LIKE 'IT%' AND salary > 5000 AND department_id <> 10;

SELECT first_name, last_name, job_id
FROM employees
WHERE job_id LIKE '%MAN' OR job_id LIKE 'IT%' AND salary > 5000 AND department_id NOT IN(
     SELECT department_id FROM departments WHERE department_name = 'ADMINISTRATION'
);

--Employees without a commision
SELECT *
FROM employees
WHERE commission_pct IS NULL;

--Employees with commision
SELECT *
FROM employees
WHERE commission_pct IS NOT NULL;

--Employees without a department
SELECT *
FROM employees
WHERE department_id IS NULL;

--Employees without a manager
SELECT *
FROM employees
WHERE manager_id IS NULL;

