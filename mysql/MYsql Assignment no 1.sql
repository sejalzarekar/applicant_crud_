
MariaDB [(none)]> create database student_management;
Query OK, 1 row affected (0.002 sec)

MariaDB [(none)]> use student_management;
Database changed
MariaDB [student_management]> create table students(student_id INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(50),Age INT,Gender Enum('Male','Female','Other'),Course Varchar(50), admission_date DATE, fees_paid Decimal(10,2));
Query OK, 0 rows affected (0.011 sec)

MariaDB [student_management]> Bye
Ctrl-C -- exit!

C:\Users\HP>mysql -u root -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 9
Server version: 10.4.32-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use student_management;
Database changed
MariaDB [student_management]> show tables;
+------------------------------+
| Tables_in_student_management |
+------------------------------+
| students                     |
+------------------------------+
1 row in set (0.001 sec)

MariaDB [student_management]> INSERT INTO students (Name, Age, Gender, Course, admission_date, fees_paid) VALUES
    -> ('Alice Johnson', 20, 'Female', 'Computer Science', '2025-01-10', 25000.00),
    -> ('Bob Smith', 22, 'Male', 'Mechanical Engineering', '2025-01-12', 26000.00),
    -> ('Charlie Kim', 21, 'Other', 'Biotechnology', '2025-01-15', 24000.00),
    -> ('David Lee', 23, 'Male', 'Civil Engineering', '2025-01-20', 23000.00),
    -> ('Eva Brown', 19, 'Female', 'Information Technology', '2025-01-25', 25500.00),
    -> ('Fiona Clark', 20, 'Female', 'Electrical Engineering', '2025-01-27', 24500.00),
    -> ('George Miller', 22, 'Male', 'Pharmacy', '2025-02-01', 22000.00),
    -> ('Hannah Davis', 21, 'Female', 'Architecture', '2025-02-05', 26500.00),
    -> ('Ian Wright', 24, 'Male', 'MBA', '2025-02-08', 28000.00),
    -> ('Jade Thomas', 20, 'Other', 'Animation', '2025-02-10', 25000.00);
Query OK, 10 rows affected (0.010 sec)
Records: 10  Duplicates: 0  Warnings: 0

MariaDB [student_management]> select * from students;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select name,course,fees_paid from students;
+---------------+------------------------+-----------+
| name          | course                 | fees_paid |
+---------------+------------------------+-----------+
| Alice Johnson | Computer Science       |  25000.00 |
| Bob Smith     | Mechanical Engineering |  26000.00 |
| Charlie Kim   | Biotechnology          |  24000.00 |
| David Lee     | Civil Engineering      |  23000.00 |
| Eva Brown     | Information Technology |  25500.00 |
| Fiona Clark   | Electrical Engineering |  24500.00 |
| George Miller | Pharmacy               |  22000.00 |
| Hannah Davis  | Architecture           |  26500.00 |
| Ian Wright    | MBA                    |  28000.00 |
| Jade Thomas   | Animation              |  25000.00 |
+---------------+------------------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where age >=23;
+------------+------------+------+--------+-------------------+----------------+-----------+
| student_id | Name       | Age  | Gender | Course            | admission_date | fees_paid |
+------------+------------+------+--------+-------------------+----------------+-----------+
|          4 | David Lee  |   23 | Male   | Civil Engineering | 2025-01-20     |  23000.00 |
|          9 | Ian Wright |   24 | Male   | MBA               | 2025-02-08     |  28000.00 |
+------------+------------+------+--------+-------------------+----------------+-----------+
2 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where course = "MBA";
+------------+------------+------+--------+--------+----------------+-----------+
| student_id | Name       | Age  | Gender | Course | admission_date | fees_paid |
+------------+------------+------+--------+--------+----------------+-----------+
|          9 | Ian Wright |   24 | Male   | MBA    | 2025-02-08     |  28000.00 |
+------------+------------+------+--------+--------+----------------+-----------+
1 row in set (0.001 sec)

MariaDB [student_management]> select * from students where fees_paid > 25000;
+------------+--------------+------+--------+------------------------+----------------+-----------+
| student_id | Name         | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+--------------+------+--------+------------------------+----------------+-----------+
|          2 | Bob Smith    |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          5 | Eva Brown    |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          8 | Hannah Davis |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright   |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
+------------+--------------+------+--------+------------------------+----------------+-----------+
4 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where admission_date like "2024%";
Empty set (0.001 sec)

MariaDB [student_management]> select * from students where admission_date like "2025%";
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where admission_date like "%2%";
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where admission_date like "%02%";
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where admission_date like "%-02-%";
+------------+---------------+------+--------+--------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course       | admission_date | fees_paid |
+------------+---------------+------+--------+--------------+----------------+-----------+
|          7 | George Miller |   22 | Male   | Pharmacy     | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA          | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation    | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+--------------+----------------+-----------+
4 rows in set (0.001 sec)

MariaDB [student_management]> select * from students where age between 21 and 24;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
6 rows in set (0.001 sec)

MariaDB [student_management]> select * from students order by fees_paid;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students order by fees_paid desc;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          2 | Bob Smith     |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select * from students order by fees_paid desc limit 3;
+------------+--------------+------+--------+------------------------+----------------+-----------+
| student_id | Name         | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+--------------+------+--------+------------------------+----------------+-----------+
|          9 | Ian Wright   |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|          8 | Hannah Davis |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          2 | Bob Smith    |   22 | Male   | Mechanical Engineering | 2025-01-12     |  26000.00 |
+------------+--------------+------+--------+------------------------+----------------+-----------+
3 rows in set (0.001 sec)

MariaDB [student_management]> select * from students order by fees_paid desc limit 2;
+------------+--------------+------+--------+--------------+----------------+-----------+
| student_id | Name         | Age  | Gender | Course       | admission_date | fees_paid |
+------------+--------------+------+--------+--------------+----------------+-----------+
|          9 | Ian Wright   |   24 | Male   | MBA          | 2025-02-08     |  28000.00 |
|          8 | Hannah Davis |   21 | Female | Architecture | 2025-02-05     |  26500.00 |
+------------+--------------+------+--------+--------------+----------------+-----------+
2 rows in set (0.001 sec)

MariaDB [student_management]> update students set course="MBA" where name="Bob Smith";
Query OK, 1 row affected (0.009 sec)
Rows matched: 1  Changed: 1  Warnings: 0

MariaDB [student_management]> select * from students;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  25000.00 |
|          2 | Bob Smith     |   22 | Male   | MBA                    | 2025-01-12     |  26000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  24000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  23000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  25500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  24500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  22000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  26500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  28000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  25000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> select name,fees_paid from students;
+---------------+-----------+
| name          | fees_paid |
+---------------+-----------+
| Alice Johnson |  25000.00 |
| Bob Smith     |  26000.00 |
| Charlie Kim   |  24000.00 |
| David Lee     |  23000.00 |
| Eva Brown     |  25500.00 |
| Fiona Clark   |  24500.00 |
| George Miller |  22000.00 |
| Hannah Davis  |  26500.00 |
| Ian Wright    |  28000.00 |
| Jade Thomas   |  25000.00 |
+---------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> update students set fees_paid= fees_paid + 5000;
Query OK, 10 rows affected (0.009 sec)
Rows matched: 10  Changed: 10  Warnings: 0

MariaDB [student_management]> select name,fees_paid from students;
+---------------+-----------+
| name          | fees_paid |
+---------------+-----------+
| Alice Johnson |  30000.00 |
| Bob Smith     |  31000.00 |
| Charlie Kim   |  29000.00 |
| David Lee     |  28000.00 |
| Eva Brown     |  30500.00 |
| Fiona Clark   |  29500.00 |
| George Miller |  27000.00 |
| Hannah Davis  |  31500.00 |
| Ian Wright    |  33000.00 |
| Jade Thomas   |  30000.00 |
+---------------+-----------+
10 rows in set (0.001 sec)

MariaDB [student_management]> delete from students where student_id=2;
Query OK, 1 row affected (0.002 sec)

MariaDB [student_management]> select * from students;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | Computer Science       | 2025-01-10     |  30000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  29000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  28000.00 |
|          5 | Eva Brown     |   19 | Female | Information Technology | 2025-01-25     |  30500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  29500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  27000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  31500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  33000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  30000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
9 rows in set (0.001 sec)

MariaDB [student_management]> select course, count(*) from students group by course;
+------------------------+----------+
| course                 | count(*) |
+------------------------+----------+
| Animation              |        1 |
| Architecture           |        1 |
| Biotechnology          |        1 |
| Civil Engineering      |        1 |
| Computer Science       |        1 |
| Electrical Engineering |        1 |
| Information Technology |        1 |
| MBA                    |        1 |
| Pharmacy               |        1 |
+------------------------+----------+
9 rows in set (0.001 sec)

MariaDB [student_management]> update students set course="MBA" where name="Alice Johnson";
Query OK, 1 row affected (0.003 sec)
Rows matched: 1  Changed: 1  Warnings: 0

MariaDB [student_management]> update students set course="MBA" where name="Eva Brown";
Query OK, 1 row affected (0.010 sec)
Rows matched: 1  Changed: 1  Warnings: 0

MariaDB [student_management]> select * from students;
+------------+---------------+------+--------+------------------------+----------------+-----------+
| student_id | Name          | Age  | Gender | Course                 | admission_date | fees_paid |
+------------+---------------+------+--------+------------------------+----------------+-----------+
|          1 | Alice Johnson |   20 | Female | MBA                    | 2025-01-10     |  30000.00 |
|          3 | Charlie Kim   |   21 | Other  | Biotechnology          | 2025-01-15     |  29000.00 |
|          4 | David Lee     |   23 | Male   | Civil Engineering      | 2025-01-20     |  28000.00 |
|          5 | Eva Brown     |   19 | Female | MBA                    | 2025-01-25     |  30500.00 |
|          6 | Fiona Clark   |   20 | Female | Electrical Engineering | 2025-01-27     |  29500.00 |
|          7 | George Miller |   22 | Male   | Pharmacy               | 2025-02-01     |  27000.00 |
|          8 | Hannah Davis  |   21 | Female | Architecture           | 2025-02-05     |  31500.00 |
|          9 | Ian Wright    |   24 | Male   | MBA                    | 2025-02-08     |  33000.00 |
|         10 | Jade Thomas   |   20 | Other  | Animation              | 2025-02-10     |  30000.00 |
+------------+---------------+------+--------+------------------------+----------------+-----------+
9 rows in set (0.001 sec)

MariaDB [student_management]> select course, count(*) from students group by course;
+------------------------+----------+
| course                 | count(*) |
+------------------------+----------+
| Animation              |        1 |
| Architecture           |        1 |
| Biotechnology          |        1 |
| Civil Engineering      |        1 |
| Electrical Engineering |        1 |
| MBA                    |        3 |
| Pharmacy               |        1 |
+------------------------+----------+
7 rows in set (0.001 sec)

MariaDB [student_management]> select course, sum(fees_paid) as "Total_fees_Collected" from students  group by course;
+------------------------+----------------------+
| course                 | Total_fees_Collected |
+------------------------+----------------------+
| Animation              |             30000.00 |
| Architecture           |             31500.00 |
| Biotechnology          |             29000.00 |
| Civil Engineering      |             28000.00 |
| Electrical Engineering |             29500.00 |
| MBA                    |             93500.00 |
| Pharmacy               |             27000.00 |
+------------------------+----------------------+
7 rows in set (0.001 sec)

MariaDB [student_management]> select avg(fees_paid) from students as " Average fees Paid";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '" Average fees Paid"' at line 1
MariaDB [student_management]> select avg(fees_paid) as " Average fees Paid" from students;
+-------------------+
| Average fees Paid |
+-------------------+
|      29833.333333 |
+-------------------+
1 row in set, 1 warning (0.001 sec)

MariaDB [student_management]>