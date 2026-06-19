# Volume 4: SQL - The Complete Interview Preparation Guide (2026)

<div align="center">

![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Interview Prep](https://img.shields.io/badge/Interview-Prep-blueviolet)](#)
[![FAANG](https://img.shields.io/badge/FAANG-Approved-orange)](#)

**Volume 4 of 16 - 100+ Questions - Beginner to FAANG Senior**

</div>

---

## Table of Contents

<details>
<summary>Click to expand TOC</summary>

- [Progress Tracker](#progress-tracker)
- Topic 1: SQL Basics & DDL (Q1-Q7)
- Topic 2: Joins (Q8-Q15)
- Topic 3: Set Operations (Q16-Q20)
- Topic 4: Subqueries & CTEs (Q21-Q27)
- Topic 5: Window Functions (Q28-Q35)
- Topic 6: Indexing Strategy (Q36-Q43)
- Topic 7: Query Optimization (Q44-Q51)
- Topic 8: Transactions & Locking (Q52-Q59)
- Topic 9: Stored Procedures & Functions (Q60-Q66)
- Topic 10: Database Design (Q67-Q73)
- Topic 11: Advanced SQL (Q74-Q81)
- Topic 12: Performance Tuning (Q82-Q88)
- Topic 13: Security (Q89-Q93)
- Topic 14: NoSQL, PolyBase, Azure & More (Q94-Q100)

</details>

---

## Progress Tracker

| Status | Count |
|--------|-------|
| Complete | 100/100 |
| Beginner | 30+ |
| Intermediate | 35+ |
| Advanced | 35+ |
| FAANG Deep Dives | 100 |

---

# Topic 1: SQL Basics & DDL (Q1-Q7)

---

## Q1: What Is SQL and Types of SQL Commands

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL (Structured Query Language) is the standard language for relational database management and manipulation. Commands are categorized into DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SAVEPOINT), and DQL (SELECT). SQL is declarative: you specify *what* data you want, not *how* to retrieve it.

### Detailed Explanation

- **What it is:** SQL is a domain-specific language for managing relational databases. Standardized by ANSI in 1986 and ISO in 1987.
- **Why it exists:** Before SQL, each database had proprietary query languages. SQL provided a unified standard for portability across systems.
- **What problem it solves:** Provides a consistent, declarative interface for data definition, manipulation, access control, and transaction management.
- **When to use it:** Any time you interact with a relational database. DDL for schema changes, DML for data changes, DCL for permissions, TCL for transactions.
- **When NOT to use it:** For unstructured data (use NoSQL), real-time stream processing (use Kafka/Spark), or procedural logic beyond SQL (use a programming language with an ORM).

### Internal Working

SQL statements are parsed by the database engine into a parse tree, bound to database objects, optimized into an execution plan, and then executed. The parser checks syntax; the binder resolves object names; the optimizer generates multiple plan alternatives and chooses the cheapest based on cost estimates from statistics.

### Step-by-Step Execution

1. **Parse:** SQL text to parse tree (syntax validation)
2. **Bind/algebrize:** Parse tree to query tree (object resolution, type checking)
3. **Optimize:** Query tree to execution plan (join enumeration, cost-based optimization)
4. **Execute:** Plan to result set (relational operators process data)
5. **Return:** Result set sent to client

### Real-World Example

A financial trading system uses DDL to create trade tables, DML to insert/update trades, TCL to commit/rollback during market hours, and DCL to grant read-only access to auditors.

### SQL Example

```sql
-- DDL
CREATE TABLE trades (
    trade_id   INT           PRIMARY KEY,
    symbol     VARCHAR(10)   NOT NULL,
    quantity   INT           NOT NULL,
    price      DECIMAL(10,2) NOT NULL,
    trade_date DATETIME2     DEFAULT GETDATE()
);

-- DML
INSERT INTO trades (trade_id, symbol, quantity, price)
VALUES (1, 'AAPL', 100, 150.25);

-- DCL
GRANT SELECT ON trades TO audit_user;

-- TCL
BEGIN TRANSACTION;
UPDATE trades SET price = 151.00 WHERE trade_id = 1;
COMMIT;
```

### Performance Considerations

- DDL statements acquire schema modification locks (Sch-M), blocking all other access during execution
- DML statements generate transaction log records; bulk operations should use minimally logged modes
- DCL is metadata-only and nearly instantaneous
- Running DDL during business hours can cause downtime

### Common Mistakes

- Forgetting COMMIT in production transactions
- Mixing DDL and DML in the same explicit transaction without understanding lock escalation
- Using SELECT * in production code (unnecessary I/O, breaks covering indexes)
- Not specifying schema names (forces name resolution overhead)

### Follow-Up Questions

**Junior:**
1. What is the difference between CHAR and VARCHAR?
2. What does SELECT 1 FROM table do?

**Mid-level:**
1. How does the optimizer choose between different join types?
2. Explain how DDL transactions work - can you roll back a CREATE TABLE?

**Senior-level:**
1. How would you design a schema that supports both OLTP and reporting workloads from the same data?
2. Explain how SQL Server's binding phase resolves three-part names and how you can use synonyms to redirect object resolution.

### FAANG-Level Deep Dive

Modern query optimizers use cost-based optimization (CBO) with dynamic programming for join ordering. SQL Server uses the Memo structure (similar to Cascades) that stores equivalence classes of expressions. The optimizer considers physical properties (order, partitioning) alongside cardinality estimates. Understanding when the optimizer fails (complex predicates, OR logic, large IN lists) and how to use plan hints distinguishes senior engineers.

### Explain Like I'm 7

SQL is like a special language you use to talk to a giant digital filing cabinet. You have different kinds of sentences: some build new drawers (DDL), some put papers in or take them out (DML), some decide who can open which drawer (DCL), and some save or undo your changes (TCL).

</details>

---

## Q2: CREATE TABLE with Constraints

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

CREATE TABLE defines a new table's structure with columns, data types, and constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, DEFAULT, NOT NULL). Constraints enforce data integrity at the database level. A well-designed table with appropriate constraints is the foundation of a robust database schema.

### Detailed Explanation

- **What it is:** A DDL statement that creates a relational table with named columns, types, and optional constraints.
- **Why it exists:** Tables are the fundamental storage unit. Constraints ensure data integrity without relying on application code.
- **What problem it solves:** Prevents orphaned records (FK), duplicate values (PK/UNIQUE), NULLs where inappropriate (NOT NULL), invalid data ranges (CHECK), and provides default values (DEFAULT).
- **When to use it:** Any time you introduce a new entity into your data model. Define constraints at table creation.
- **When NOT to use it:** For temporary data (use temp tables), for extremely flexible schemas (use JSON/XML columns or NoSQL).

### Internal Working

CREATE TABLE writes metadata rows to system catalog views (sys.tables, sys.columns, sys.indexes, sys.foreign_keys). It allocates an extent (8 pages = 64KB) for data storage. Constraints create underlying structures: PK/UNIQUE create indexes, CHECK constraints stored as metadata evaluated at DML time.

### Step-by-Step Execution

1. Parse the CREATE TABLE statement
2. Check for existing object with same name
3. Allocate storage for the table
4. Write metadata to system catalogs
5. Create index structures for PK and UNIQUE constraints
6. Validate CHECK and FK constraints against existing data
7. Log the operation in transaction log

### Real-World Example

An e-commerce platform creates an Orders table with a FK to Customers, CHECK on OrderTotal >= 0, UNIQUE on OrderNumber, and DEFAULT for OrderDate.

### SQL Example

```sql
CREATE TABLE customers (
    customer_id   INT             NOT NULL IDENTITY(1,1),
    email         VARCHAR(255)    NOT NULL,
    first_name    VARCHAR(100)    NOT NULL,
    last_name     VARCHAR(100)    NOT NULL,
    status        CHAR(1)         NOT NULL DEFAULT 'A',
    created_date  DATETIME2       NOT NULL DEFAULT SYSDATETIME(),
    CONSTRAINT pk_customers PRIMARY KEY CLUSTERED (customer_id),
    CONSTRAINT uq_customers_email UNIQUE (email),
    CONSTRAINT ck_customers_status CHECK (status IN ('A', 'I', 'S'))
);

CREATE TABLE orders (
    order_id      INT            NOT NULL IDENTITY(1,1),
    customer_id   INT            NOT NULL,
    order_date    DATETIME2      NOT NULL DEFAULT SYSDATETIME(),
    order_total   DECIMAL(12,2)  NOT NULL,
    order_status  VARCHAR(20)    NOT NULL DEFAULT 'Pending',
    CONSTRAINT pk_orders PRIMARY KEY CLUSTERED (order_id),
    CONSTRAINT fk_orders_customers 
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    CONSTRAINT ck_orders_total CHECK (order_total >= 0),
    CONSTRAINT ck_orders_status CHECK (order_status IN ('Pending','Shipped','Delivered','Cancelled'))
);
```

### Performance Considerations

- Every index (from PK/UNIQUE) slows DML and speeds up queries
- FK constraints add overhead on every INSERT/UPDATE on the referencing table
- CHECK constraints are cheap to evaluate
- IDENTITY columns use a system-generated sequence

### Common Mistakes

- Defining a UNIQUE constraint on a column with many NULLs
- Using NVARCHAR(MAX) for all string columns
- Forgetting to create indexes on FK columns
- Adding constraints with NOCHECK and forgetting to validate them

### Follow-Up Questions

**Junior:**
1. What's the difference between UNIQUE and PRIMARY KEY?
2. Can a table have multiple FOREIGN KEYs?

**Mid-level:**
1. What is IDENTITY and how does it differ from SEQUENCE?
2. How does the database validate a CHECK constraint?

**Senior-level:**
1. Design a multi-tenant SaaS table with tenant isolation and FK integrity.
2. Explain how constraint trust (WITH CHECK / WITH NOCHECK) affects query optimization.

### FAANG-Level Deep Dive

Constraint metadata drives query optimization. SQL Server's optimizer uses CHECK constraint information for constraint-based simplification - if a query predicates WHERE status = 'X' and CHECK only allows 'A', 'I', 'S', the optimizer returns empty without scanning. FK relationships enable join elimination: when querying a view joining two tables but selecting from only one, the optimizer removes the unnecessary join if FK constraints guarantee row existence.

### Explain Like I'm 7

Creating a table with constraints is like making a form with rules. You decide which boxes must be filled (NOT NULL), which must be unique (like SSN), which values are allowed (like only Yes or No), and how one form connects to another.

</details>

---

## Q3: ALTER TABLE Operations

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

ALTER TABLE modifies an existing table's schema - adding/dropping columns, changing data types, adding/dropping constraints, and modifying storage properties. It requires schema modification locks (Sch-M) that block all concurrent access during the operation.

### Detailed Explanation

- **What it is:** A DDL statement that changes the structure of an existing table without dropping and recreating it.
- **Why it exists:** Database schemas evolve as requirements change. ALTER TABLE avoids data loss and downtime.
- **What problem it solves:** Enables online schema evolution.
- **When to use it:** Adding nullable columns (fast metadata-only), adding constraints, changing column types.
- **When NOT to use it:** For major schema refactoring (prefer Create-as-Select + rename), zero-downtime needs (consider online schema change tools).

### Internal Working

- Add nullable column: Metadata-only (instant)
- Add column with default (SQL 2012+): Metadata-only
- Modify column type: Full table rebuild
- Add constraint: PK/UNIQUE create indexes, FK validates existing data

### Step-by-Step Execution

1. Acquire Sch-M lock on table
2. Validate the ALTER operation
3. For metadata-only ops: update system catalogs
4. For data-modifying ops: scan and rewrite each page
5. Log every page modification
6. Release Sch-M lock

### Real-World Example

A social media app adds a phone_number column to Users and enforces uniqueness for verified users.

### SQL Example

```sql
-- Add a nullable column (metadata-only)
ALTER TABLE customers ADD phone_number VARCHAR(20) NULL;

-- Add column with default
ALTER TABLE customers ADD is_verified BIT NOT NULL CONSTRAINT df_is_verified DEFAULT (0);

-- Modify column type (table rebuild)
ALTER TABLE customers ALTER COLUMN email VARCHAR(320) NOT NULL;

-- Add constraint
ALTER TABLE customers ADD CONSTRAINT ck_customers_email CHECK (email LIKE '%@%');

-- Drop constraint
ALTER TABLE customers DROP CONSTRAINT ck_customers_status;
```

### Performance Considerations

- Sch-M lock blocks all reads and writes
- Adding nullable column to large table is instant (metadata-only) in Enterprise Edition
- ALTER TABLE operations are fully logged

### Common Mistakes

- Adding non-nullable column without default on table with data (fails)
- Not accounting for log growth during ALTER on large tables
- Dropping a column referenced by a FK

### Follow-Up Questions

**Junior:**
1. Can you roll back ALTER TABLE inside a transaction?
2. What happens if you change INT to VARCHAR?

**Mid-level:**
1. Explain metadata-only column add feature.
2. How to change VARCHAR(50) to VARCHAR(100) on a 500M-row table?

**Senior-level:**
1. Design zero-downtime schema migration for high-availability OLTP.
2. Explain ALTER TABLE ... SWITCH partition switching internals.

### FAANG-Level Deep Dive

SQL Server's online index/column operations use row versioning to avoid Sch-M locks. With ONLINE = ON, a dual-phase approach prepares the new structure while allowing concurrent modifications, with a brief Sch-M to finalize. For column adds with defaults, SQL Server 2012+ introduced metadata-only column add where the default is stored as a compression dictionary entry rather than materializing on every row.

### Explain Like I'm 7

ALTER TABLE is like remodeling a room after the house is built. You can add a window easily if it doesn't affect walls, but moving a wall means tearing everything down and rebuilding.

</details>

---

## Q4: DROP vs TRUNCATE vs DELETE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

DROP removes the entire table (schema + data); TRUNCATE removes all rows but keeps the table structure; DELETE removes rows one by one with full logging. TRUNCATE is minimally logged and faster than DELETE, but cannot use WHERE. DROP is DDL (auto-committing), DELETE is DML (can be rolled back), TRUNCATE is DDL in some RDBMS and DML in others.

### Detailed Explanation

- **What it is:** Three distinct ways to remove data with different trade-offs.
- **Why it exists:** Different scenarios need different balances of speed, recoverability, and granularity.
- **What problem it solves:** DROP cleans up schemas; TRUNCATE provides fast bulk removal; DELETE provides precise transactional removal.
- **When to use it:** DROP to remove tables; TRUNCATE for emptying staging tables; DELETE for specific rows or when triggers are needed.
- **When NOT to use it:** Don't use TRUNCATE when per-row triggers are needed; don't use DELETE to empty a large table; don't use DROP when you just need to empty the table.

### Internal Working

- DELETE: Row-by-row removal logged in transaction log. Triggers fire. Space not reclaimed.
- TRUNCATE: Deallocates data pages by updating IAM/PFS. Minimal logging. Identity resets. No triggers.
- DROP: Deallocates pages and removes metadata from system catalogs.

### Step-by-Step Execution

DELETE:
1. Scan pages for rows matching WHERE
2. Acquire locks on each row/page
3. Write delete record to log (fully logged)
4. Fire DELETE triggers

TRUNCATE:
1. Acquire table-level lock
2. Deallocate all data pages
3. Log extent deallocations (minimal)
4. Reset identity seed

DROP:
1. Acquire Sch-M lock
2. Remove metadata from catalogs
3. Deallocate all data pages

### Real-World Example

ETL pipeline: TRUNCATE staging tables between loads, DELETE error records, DROP old archive partitions.

### SQL Example

```sql
-- DELETE: transactional, fully logged
BEGIN TRANSACTION;
DELETE FROM orders WHERE order_date < '2020-01-01';
ROLLBACK;

-- TRUNCATE: minimally logged
TRUNCATE TABLE staging_orders;

-- DROP: removes table entirely
DROP TABLE IF EXISTS old_archive;
```

### Performance Considerations

- DELETE is O(n) with O(n) log records
- TRUNCATE is O(1) operationally, minimally logged
- DROP is O(1) with async cleanup

### Common Mistakes

- Assuming TRUNCATE can use WHERE (it cannot)
- Not realizing DELETE on large tables fills the log
- TRUNCATE on table with FK references fails
- Forgetting TRUNCATE resets IDENTITY

### Follow-Up Questions

**Junior:**
1. Can you TRUNCATE a table with FK references?
2. Which operations trigger DML triggers?

**Mid-level:**
1. Explain log behavior difference between DELETE and TRUNCATE.
2. How to remove 100M rows from 500M-row table efficiently?

**Senior-level:**
1. Design archiving using partition SWITCH + TRUNCATE.
2. Explain ghost cleanup after DELETE in SQL Server.

### FAANG-Level Deep Dive

SQL Server's ghost cleanup marks deleted rows as "ghosted" with a forwarding pointer. The background ghost cleanup task physically removes them. Deferred drop in Enterprise Edition allows TRUNCATE metadata changes to commit immediately while page deallocation runs asynchronously.

### Explain Like I'm 7

DELETE is removing LEGO bricks one by one and writing each down. TRUNCATE is dumping the whole bucket out - fast but can't take out just a few. DROP is throwing the whole bucket away.

</details>

---

## Q5: SQL Data Types

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL data types define what data a column can hold: exact numerics (INT, BIGINT, DECIMAL), approximate (FLOAT), character strings (CHAR, VARCHAR, NCHAR, NVARCHAR), date/time (DATE, DATETIME2, DATETIMEOFFSET), binary, and special types (UNIQUEIDENTIFIER, XML, JSON, GEOGRAPHY). Choosing the right type affects storage, performance, and data integrity.

### Detailed Explanation

- **What it is:** Classification specifying what values a column can hold and how they are stored and compared.
- **Why it exists:** Proper typing ensures data integrity, enables efficient storage, determines comparison semantics.
- **What problem it solves:** Prevents invalid data entry, optimizes storage, enables indexing.
- **When to use it:** Every column needs a type; choose the smallest type that fits your data.
- **When NOT to use it:** Avoid VARCHAR(MAX)/NVARCHAR(MAX) when you know the maximum length.

### Internal Working

Each type has fixed/variable storage size, comparison semantics, arithmetic operations, and implicit conversion rules. Fixed-length types store directly in row; variable-length add 2 bytes for offset tracking and may push large values to LOB pages.

### Step-by-Step Execution (Implicit Conversion)

1. Determine data type precedence (higher wins)
2. Convert lower-precedence type to higher
3. Perform comparison
4. Apply conversion function

### Real-World Example

Using FLOAT for money causes rounding errors: 0.1 + 0.2 = 0.30000000000000004. Use DECIMAL(19,4) instead.

### SQL Example

```sql
CREATE TABLE data_types_example (
    tiny   TINYINT,          -- 0-255, 1 byte
    small  SMALLINT,         -- +/-32K, 2 bytes
    int    INT,              -- +/-2B, 4 bytes
    big    BIGINT,           -- +/-9E18, 8 bytes
    dec    DECIMAL(19,4),    -- 9 bytes
    flt    FLOAT(53),        -- 8 bytes
    ch     CHAR(10),         -- Fixed 10 bytes
    vc     VARCHAR(100),     -- Variable up to 100
    nch    NCHAR(10),        -- Fixed 20 bytes (Unicode)
    nvc    NVARCHAR(100),    -- Variable up to 200
    d      DATE,             -- 3 bytes
    dt     DATETIME2(3),     -- 7 bytes
    dto    DATETIMEOFFSET(3),-- 9 bytes
    guid   UNIQUEIDENTIFIER  -- 16 bytes
);
```

### Performance Considerations

- Fixed-length types faster for updates (no row-size changes)
- Variable-length types can cause page splits on lengthening updates
- NVARCHAR uses 2x storage of VARCHAR
- VARCHAR(MAX) data pushed to LOB pages
- Use narrowest type (INT 4B vs BIGINT 8B)

### Common Mistakes

- Using NVARCHAR(MAX) for all string columns
- Using FLOAT for financial data
- Using DATETIME instead of DATETIME2
- Not considering collation differences

### Follow-Up Questions

**Junior:**
1. Difference between CHAR and VARCHAR?
2. Why DECIMAL instead of FLOAT for money?

**Mid-level:**
1. Explain implicit conversion causing index scan vs seek.
2. What is data type precedence?

**Senior-level:**
1. Design date/time strategy for global e-commerce with time zones.
2. Compare storage/performance of VARCHAR(MAX) vs VARCHAR(8000).

### FAANG-Level Deep Dive

SQL Server's LOB storage: VARCHAR(MAX) values under 8000 bytes may be stored in-row depending on settings. Values over 8000 use LOB page types. The row stores a 24-byte pointer to the LOB page chain. The Spiders internal structure tracks LOB page chains using a B-tree-like structure for blob trees.

### Explain Like I'm 7

Data types are like different kitchen containers. You use a teaspoon for salt (TINYINT), a measuring cup for flour (DECIMAL), and a big jug for water (VARCHAR). Wrong container wastes space or spills data!

</details>

---

## Q6: Normalization 1NF-5NF

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Normalization organizes data to reduce redundancy and improve integrity: 1NF (atomic columns), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (every determinant is a candidate key), 4NF (no multi-valued dependencies), 5NF (no join dependencies). Most production databases target 3NF.

### Detailed Explanation

- **What it is:** Systematic decomposition of tables to eliminate redundancy and update anomalies.
- **Why it exists:** Redundant data causes update, insertion, and deletion anomalies.
- **What problem it solves:** Ensures data integrity, reduces storage, simplifies updates.
- **When to use it:** Any OLTP system where data integrity is critical. Target 3NF.
- **When NOT to use it:** Data warehouses (denormalize for performance), high-write systems where joins cause contention.

### Internal Working

Normalization is logical design, not physical storage. A normalized schema creates more tables with fewer columns, meaning more JOINs.

### Step-by-Step Execution

1. 1NF: Remove repeating groups, ensure atomic values
2. 2NF: Identify partial dependencies on composite keys
3. 3NF: Identify transitive dependencies
4. BCNF: Every determinant is a candidate key
5. 4NF: Eliminate multi-valued dependencies
6. 5NF: Eliminate join dependencies

### Real-World Example

Orders table with OrderID, CustomerID, CustomerName, ProductID, ProductName violates 2NF and 3NF. Normalize to Customers, Products, Orders, OrderDetails.

### SQL Example

```sql
-- 1NF: Atomic values
CREATE TABLE orders_1nf (
    order_id INT,
    product_name VARCHAR(100),
    customer_name VARCHAR(100),
    PRIMARY KEY (order_id, product_name)
);

-- 2NF: Remove partial dependency
CREATE TABLE orders_2nf (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);
CREATE TABLE order_details_2nf (
    order_id INT,
    product_name VARCHAR(100),
    PRIMARY KEY (order_id, product_name)
);

-- 3NF: Remove transitive dependency
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id)
);
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);
CREATE TABLE order_details (
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);
```

### Performance Considerations

- Normalization increases JOINs (more I/O)
- Denormalization reduces JOINs but introduces update anomalies
- Columnstore indexes prefer wider denormalized tables

### Common Mistakes

- Over-normalizing beyond 3NF in production
- Under-normalizing causing update anomalies
- Confusing partial vs transitive dependency

### Follow-Up Questions

**Junior:**
1. What is an update anomaly?
2. Difference between 2NF and 3NF?

**Mid-level:**
1. Explain BCNF with an example in 3NF but not BCNF.
2. How to denormalize 3NF for a reporting dashboard?

**Senior-level:**
1. Design social network schema balancing normalization and feed performance.
2. Explain join dependencies and 5NF.

### FAANG-Level Deep Dive

At FAANG scale, normalization is often abandoned for denormalized wide-column designs (Bigtable, DynamoDB). The CAP theorem forces trade-offs. Google's Spanner uses TrueTime to enable external consistency with a normalized relational model across global data centers. FAANG engineers normalize as a starting point and selectively denormalize using materialized views, eventual consistency, and CQRS.

### Explain Like I'm 7

Normalization is organizing your LEGO set. Instead of all pieces in one big box (0NF), you sort into separate drawers: wheels in one, bricks in another, windows in a third. Easy to find pieces, and losing one wheel only affects the wheel drawer.

</details>

---

## Q7: Primary Key vs Foreign Key vs Unique Key

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Primary Key uniquely identifies each row (one per table, no NULLs, creates clustered index by default). Foreign Key links a column to a PK in another table (enforces referential integrity, allows NULLs). Unique Key ensures all values are distinct (allows one NULL in SQL Server). All create supporting indexes.

### Detailed Explanation

- **What it is:** Constraints enforcing entity integrity (PK), referential integrity (FK), and domain integrity (Unique).
- **Why it exists:** PKs ensure unique identification; FKs prevent orphans; Unique keys enforce business rules.
- **What problem it solves:** PKs enable relationships; FKs prevent children without parents; Unique keys enforce uniqueness.
- **When to use it:** PK on every table; FK on referencing columns; Unique on business-requirements.
- **When NOT to use it:** FK on high-throughput tables where validation cost exceeds data repair cost.

### Internal Working

- PK: Creates unique clustered index (default). All nonclustered indexes contain PK as row locator.
- FK: No index auto-created. FK validation looks up parent table.
- Unique: Creates unique nonclustered index. Used by optimizer for cardinality.

### Step-by-Step Execution (FK Insert)

1. Insert attempted on child table
2. FK checks if value exists in parent
3. If not found, statement fails
4. If found, insert proceeds

### Real-World Example

CustomerID is PK in Customers, CustomerID in Orders is FK. Email has UNIQUE constraint.

### SQL Example

```sql
CREATE TABLE departments (
    dept_id   INT           PRIMARY KEY,
    dept_name VARCHAR(100)  NOT NULL
);

CREATE TABLE employees (
    emp_id     INT           PRIMARY KEY NONCLUSTERED,
    emp_name   VARCHAR(100)  NOT NULL,
    email      VARCHAR(255)  NOT NULL,
    dept_id    INT           NULL,
    CONSTRAINT fk_employees_departments 
        FOREIGN KEY (dept_id) REFERENCES departments(dept_id),
    CONSTRAINT uq_employees_email UNIQUE (email)
);
```

### Performance Considerations

- PK as clustered: IDENTITY inserts avoid page splits; GUID causes fragmentation
- FK columns without indexes cause table scans on JOINs
- Disabled FK constraints save insert time but risk integrity

### Common Mistakes

- Assuming FK constraints auto-create indexes (they don't)
- Using GUID as PK without NEWSEQUENTIALID()
- Using composite PK with too many columns

### Follow-Up Questions

**Junior:**
1. Can FK reference a non-PK column?
2. How many PKs can a table have?

**Mid-level:**
1. UNIQUE constraint vs UNIQUE index - same?
2. How does ON DELETE CASCADE work internally?

**Senior-level:**
1. Multi-tenant schema with tenant isolation and FK integrity.
2. Natural key vs surrogate key debate with examples.

### FAANG-Level Deep Dive

At FAANG scale, FK constraints are often omitted in sharded databases (distributed transaction overhead). Referential integrity is application-level via compensating transactions. Within a single shard, FK constraints are maintained. SQL Server's trusted FK enables join elimination. The PK choice has massive storage impact: 4-byte INT vs 16-byte GUID means each nonclustered index entry is 12 bytes larger. Across 10 indexes on 1B rows, that's 12GB of additional storage.

### Explain Like I'm 7

PK is like each student's unique ID. FK is like writing your teacher's number on your report card. Unique is like your SSN - must be different for everyone but not how you're identified.

</details>

# Topic 2: Joins (Q8-Q15)

---

## Q8: INNER JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

INNER JOIN returns only rows where there is a match in both tables based on the join predicate. It is the most common join type, equivalent to the intersection of two sets. If a row in either table has no match, it is excluded.

### Detailed Explanation

- **What it is:** Combines rows from two tables where the join condition is true.
- **Why it exists:** Relational databases normalize data; INNER JOIN recombines related data.
- **What problem it solves:** Querying related data across tables while filtering non-matches.
- **When to use it:** When you need only rows with matches in both tables.
- **When NOT to use it:** When you need to preserve all rows from one table (use LEFT JOIN).

### Internal Working

The optimizer chooses a physical join algorithm (nested loop, hash match, merge join) based on sizes and indexes. The join predicate determines matches.

### Step-by-Step Execution

1. Identify the two row sources
2. Optimizer selects join algorithm based on statistics
3. For each row in first input, find matches in second
4. Output combined row for each match
5. Continue until all rows processed

### Real-World Example

Orders with customer details: only orders that have a valid customer are returned.

### SQL Example

```sql
-- Two-table INNER JOIN
SELECT o.order_id, o.order_date, c.first_name, o.order_total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;

-- Three-table INNER JOIN
SELECT o.order_id, p.product_name, od.quantity
FROM orders o
INNER JOIN order_details od ON o.order_id = od.order_id
INNER JOIN products p ON od.product_id = p.product_id;

-- With additional filters
SELECT o.order_id, o.order_total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
WHERE c.status = 'A' AND o.order_date >= '2024-01-01';
```

### Performance Considerations

- INNER JOIN typically faster than OUTER JOIN (more optimizer options)
- Indexes on join columns are critical
- Optimizer can reorder INNER JOINs (commutative)
- No indexes forces table scan + hash join (memory-intensive)

### Common Mistakes

- Forgetting ON clause (creates CROSS JOIN)
- Joining on wrong columns
- Not using table aliases
- Mixing implicit and explicit join syntax

### Follow-Up Questions

**Junior:**
1. What happens with duplicate keys in both tables?
2. Can you INNER JOIN a table to itself?

**Mid-level:**
1. How does optimizer determine outer input in nested loop join?
2. How do WHERE vs ON predicates affect INNER JOIN?

**Senior-level:**
1. Design a query joining 15 tables efficiently with join order control.
2. Explain semi-joins and anti-semi-joins relation to INNER JOIN.

### FAANG-Level Deep Dive

The optimizer considers join commutativity for INNER JOINs (commutative and associative), allowing free reordering. This is not true for OUTER JOINs. SQL Server can perform Join Elimination: if a FK guarantees row existence and you don't select from that table, the join is removed. Trusted FK constraints are critical for this optimization.

### Explain Like I'm 7

INNER JOIN is like a party invitation list. You write names of people who are in BOTH your friends list AND the venue's guest list. If someone is only in one list, they don't get in.

</details>

---

## Q9: LEFT JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

LEFT JOIN returns ALL rows from the left table and matching rows from the right table. Non-matching rows get NULLs for right table columns. It preserves all left rows regardless of matches on the right.

### Detailed Explanation

- **What it is:** Outer join that keeps all left rows, filling unmatched columns with NULLs.
- **Why it exists:** Not all data has perfect relationships. Some customers may not have ordered.
- **What problem it solves:** Preserves the driving table's rows while optionally bringing related data.
- **When to use it:** Left table is primary and related data may or may not exist.
- **When NOT to use it:** When only matching rows needed (INNER JOIN). Filtering right table in WHERE converts to INNER JOIN.

### Internal Working

Optimizer executes INNER JOIN for matching rows, then adds unmatched left rows with NULLs via a join residual step.

### Step-by-Step Execution

1. Process all rows from left table
2. For each left row, find matches in right
3. If match found: output combined row
4. If no match: output left row with NULLs for right columns
5. Row count >= left table row count

### Real-World Example

All patients with their appointments (including those with no appointments).

### SQL Example

```sql
-- All customers with orders (including non-ordering customers)
SELECT c.customer_id, c.first_name, o.order_id, o.order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;

-- WHERE on right table converts to INNER JOIN (wrong!)
SELECT c.*, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2024-01-01';  -- Removes customers with no orders!

-- Correct: filter in JOIN condition
SELECT c.*, o.order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
    AND o.order_date >= '2024-01-01';
```

### Performance Considerations

- LEFT JOIN more expensive than INNER JOIN (must preserve unmatched)
- WHERE filter on right table converts to INNER JOIN (common bug)
- Indexes on right join column critical
- Not commutative - fewer reordering options

### Common Mistakes

- Filtering right table in WHERE instead of ON
- Expecting LEFT JOIN to never increase row count (it can with multiple matches)
- Using LEFT JOIN when INNER JOIN suffices

### Follow-Up Questions

**Junior:**
1. LEFT JOIN vs LEFT OUTER JOIN - same?
2. Can LEFT JOIN return fewer rows than left table?

**Mid-level:**
1. How does WHERE placement affect LEFT JOIN results?
2. How does optimizer handle LEFT JOIN with large right side?

**Senior-level:**
1. Query with multiple LEFT JOINs on same table with different conditions.
2. Explain OUTER JOIN vs NULL-tolerant semijoins.

### FAANG-Level Deep Dive

LEFT JOIN is not commutative. However, when FK guarantees every left row has a match, the optimizer converts LEFT JOIN to INNER JOIN (join elimination). At FAANG scale, LEFT JOINs on large tables are avoided in OLTP paths and deferred to offline/reporting systems.

### Explain Like I'm 7

LEFT JOIN is like taking attendance and checking who brought homework. You write every student's name. If they brought homework, you write what it is. If not, you write "none" (NULL). Everyone is listed.

</details>

---

## Q10: RIGHT JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

RIGHT JOIN returns ALL rows from the right table and matching rows from the left. It is the mirror of LEFT JOIN. Any RIGHT JOIN can be rewritten as a LEFT JOIN by reversing table order. RIGHT JOINs are less common because LEFT JOIN is more readable.

### Detailed Explanation

- **What it is:** Outer join preserving all right rows with NULLs for non-matching left rows.
- **Why it exists:** Symmetry with LEFT JOIN.
- **What problem it solves:** Same as LEFT JOIN but with right table as the driving table.
- **When to use it:** When the preserved table is listed second. Usually better to rewrite as LEFT JOIN.
- **When NOT to use it:** For readability - LEFT JOIN is preferred.

### Internal Working

The optimizer typically normalizes RIGHT JOINs to LEFT JOINs internally for consistent optimization.

### Step-by-Step Execution

1. Process all rows from right table
2. For each right row, find matches in left
3. If match: output combined row
4. If no match: output right row with NULLs for left columns

### Real-World Example

All articles with their authors (including articles from deleted authors).

### SQL Example

```sql
-- RIGHT JOIN (less common)
SELECT a.author_name, ar.article_id, ar.title
FROM authors a
RIGHT JOIN articles ar ON a.author_id = ar.author_id;

-- Equivalent LEFT JOIN (preferred)
SELECT a.author_name, ar.article_id, ar.title
FROM articles ar
LEFT JOIN authors a ON a.author_id = ar.author_id;
```

### Performance Considerations

- Same as LEFT JOIN - typically rewritten internally
- Mixing LEFT and RIGHT JOINs in same query is confusing

### Common Mistakes

- Using RIGHT JOIN when LEFT JOIN is more readable
- Mixing LEFT and RIGHT JOINs in the same query

### Follow-Up Questions

**Junior:**
1. Can any RIGHT JOIN be rewritten as LEFT JOIN?
2. How many rows does RIGHT JOIN return vs right table?

**Mid-level:**
1. Why do developers prefer LEFT JOIN over RIGHT JOIN?
2. How does optimizer handle RIGHT JOIN internally?

**Senior-level:**
1. Complex query with RIGHT JOIN that can't be easily rewritten as LEFT JOIN.
2. Explain how optimizer normalizes RIGHT JOINs and impact on plan shape.

### FAANG-Level Deep Dive

SQL Server's optimizer normalizes all RIGHT JOINs to LEFT JOINs by swapping inputs. No execution plan shows a RIGHT JOIN operator - it's always LEFT JOIN or INNER JOIN internally. This normalization allows uniform transformation rules.

### Explain Like I'm 7

RIGHT JOIN is the mirror of LEFT JOIN. Like taking attendance of homework (right) and checking which students (left) did it. Most people find LEFT JOIN easier to understand.

</details>

---

## Q11: FULL OUTER JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

FULL OUTER JOIN returns ALL rows from both tables. Matching rows are combined; non-matching rows get NULLs on the missing side. It is the union of LEFT and RIGHT JOINs, representing the complete set of data from both tables.

### Detailed Explanation

- **What it is:** Outer join preserving all rows from both left and right tables.
- **Why it exists:** Some queries need complete data from both sides regardless of matching.
- **What problem it solves:** Identifies rows in one table but not the other, plus matching rows.
- **When to use it:** Data reconciliation, migration validation, comparing two systems.
- **When NOT to use it:** When only one side needs preservation (use LEFT/RIGHT JOIN). FULL JOIN on large tables without indexes is extremely expensive.

### Internal Working

The optimizer typically executes a LEFT JOIN and an anti-join and concatenates results. More commonly, uses hash join with "full outer" mode tracking both build and probe sides.

### Step-by-Step Execution

1. Execute INNER JOIN between both tables
2. Execute anti-join (left minus right)
3. Execute anti-join (right minus left)
4. Concatenate all three result sets

### Real-World Example

Bank reconciliation between core banking system and customer portal. FULL JOIN shows transactions in either system.

### SQL Example

```sql
-- Full reconciliation
SELECT COALESCE(core.transaction_id, portal.transaction_id) AS transaction_id,
       core.amount AS core_amount,
       portal.amount AS portal_amount,
       CASE 
           WHEN core.transaction_id IS NULL THEN 'Missing in Core'
           WHEN portal.transaction_id IS NULL THEN 'Missing in Portal'
           WHEN core.amount <> portal.amount THEN 'Amount Mismatch'
           ELSE 'Match'
       END AS status
FROM core_transactions core
FULL OUTER JOIN portal_transactions portal 
    ON core.transaction_id = portal.transaction_id;
```

### Performance Considerations

- Most expensive join (must process both sides fully)
- Both sides typically scanned (no seek possible)
- Memory grant larger (must hold both sides)
- Consider UNION ALL of LEFT JOIN + anti-join for better control

### Common Mistakes

- Confusing FULL JOIN with CROSS JOIN
- Not using COALESCE on key columns from both sides
- Using FULL JOIN when LEFT JOIN + UNION ALL is more efficient

### Follow-Up Questions

**Junior:**
1. Difference between FULL JOIN and CROSS JOIN?
2. Can FULL JOIN return more rows than either table?

**Mid-level:**
1. Rewrite FULL JOIN as UNION of LEFT JOIN and anti-joins.
2. Explain hash match full outer join in execution plans.

**Senior-level:**
1. Design ETL reconciliation for two 10TB tables using FULL JOIN efficiently.
2. Explain batch mode FULL OUTER JOIN in SQL Server 2019+.

### FAANG-Level Deep Dive

FULL OUTER JOIN in SQL Server 2019+ can leverage batch mode (columnstore) for significant performance improvements. The batch mode hash join supports full outer join natively using bit vectors to track which rows from each side matched, far more efficient than row-mode concatenation.

### Explain Like I'm 7

FULL OUTER JOIN is like comparing two class rosters. You write every student from both classes. If a student is in both, you combine info. If only in one, you write "not in other class" (NULL) for the missing info.

</details>

---

## Q12: CROSS JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

CROSS JOIN returns the Cartesian product of two tables - every row from table A paired with every row from table B. It has no ON clause. If A has 100 rows and B has 50, CROSS JOIN returns 5000 rows.

### Detailed Explanation

- **What it is:** Cartesian product of two inputs.
- **Why it exists:** Used for generating combinations - all possible pairings, date ranges, lookup expansions.
- **What problem it solves:** Creating comprehensive combination sets for reporting, generating test data.
- **When to use it:** Calendar table generation, product-warehouse combinations, number series.
- **When NOT to use it:** In production OLTP queries (almost always a bug). On large tables (multiplicative growth).

### Internal Working

The optimizer uses nested loop join (no predicate) or a cross join operator. Both tables must be fully scanned. Result size is |A| * |B|.

### Step-by-Step Execution

1. For each row in table A
2. For each row in table B
3. Output combined row
4. Total rows = COUNT(A) * COUNT(B)

### Real-World Example

Calendar table generation: CROSS JOIN a numbers table (1-365) with years (2024-2026) to produce a complete date dimension.

### SQL Example

```sql
-- Explicit CROSS JOIN
SELECT p.product_name, w.warehouse_name
FROM products p
CROSS JOIN warehouses w;

-- Calendar generation
WITH numbers AS (
    SELECT TOP 365 n = ROW_NUMBER() OVER (ORDER BY (SELECT NULL))
    FROM sys.columns
),
years AS (
    SELECT yr = 2024 UNION SELECT 2025 UNION SELECT 2026
)
SELECT DATEADD(DAY, n - 1, DATEFROMPARTS(yr, 1, 1)) AS calendar_date
FROM numbers CROSS JOIN years
ORDER BY calendar_date;
```

### Performance Considerations

- Result size is multiplicative - dangerous on large tables
- No indexes help reduce result size (no predicate)
- Use only when intentionally needing Cartesian product

### Common Mistakes

- Forgetting WHERE clause in implicit joins (accidental CROSS JOIN)
- Using CROSS JOIN when INNER JOIN was intended
- Not realizing moderate tables can crash applications

### Follow-Up Questions

**Junior:**
1. Result size of CROSS JOIN between 10-row and 20-row tables?
2. Can CROSS JOIN have an ON clause?

**Mid-level:**
1. How does CROSS JOIN execution plan differ from INNER JOIN?
2. Practical use cases for CROSS JOIN in production?

**Senior-level:**
1. Design query generating complete date range for every product with zero-sale days using CROSS JOIN.
2. Explain CROSS APPLY vs CROSS JOIN differences.

### FAANG-Level Deep Dive

CROSS JOIN is essential for running totals and window frame calculations. The optimizer converts certain CROSS JOIN patterns with WHERE filters into more efficient semi-joins. At FAANG scale, CROSS JOIN is virtually never used in production OLTP. It's used exclusively in offline batch processing, ETL, and data generation.

### Explain Like I'm 7

CROSS JOIN is like making every possible outfit combination from your shirts and pants. 5 shirts * 3 pants = 15 outfits. Every shirt with every pant.

</details>

---

## Q13: SELF JOIN

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A SELF JOIN joins a table with itself using different aliases. It is used for hierarchical data (org charts), finding duplicates, comparing rows within the same table, and sequential analysis.

### Detailed Explanation

- **What it is:** Joining a table to itself using different aliases as two logical instances.
- **Why it exists:** Many relationships exist within the same table - employee/manager, category/parent.
- **What problem it solves:** Querying hierarchical and self-referencing relationships.
- **When to use it:** Org hierarchies, bill of materials, finding duplicates, comparing row values.
- **When NOT to use it:** When depth is unknown - use recursive CTE instead.

### Internal Working

The optimizer treats each alias as a separate input, generating two physical scans of the same table. It can use different indexes for each alias.

### Step-by-Step Execution

1. Scan table as "left" instance (alias A)
2. Scan same table as "right" instance (alias B)
3. Apply join predicate
4. Output combined rows

### Real-World Example

Employee table with employee_id and manager_id. SELF JOIN lists each employee with their manager's name.

### SQL Example

```sql
-- Employee-manager hierarchy
SELECT e.employee_id, e.employee_name AS employee,
       m.employee_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-- Finding duplicate emails
SELECT a.email, a.employee_id AS first, b.employee_id AS duplicate
FROM employees a
INNER JOIN employees b ON a.email = b.email
    AND a.employee_id < b.employee_id;
```

### Performance Considerations

- Same table scanned twice (or cached for second pass)
- Different indexes can benefit each alias
- SELF JOINs on large tables double I/O

### Common Mistakes

- Forgetting table aliases
- Using INNER JOIN for hierarchical data (excludes top-level with NULL parent)
- Not indexing the self-referencing column

### Follow-Up Questions

**Junior:**
1. Why are table aliases needed in SELF JOIN?
2. Can you SELF JOIN with LEFT JOIN?

**Mid-level:**
1. When to choose recursive CTE over SELF JOIN?
2. Find employees who earn more than their manager using SELF JOIN.

**Senior-level:**
1. Optimize SELF JOIN on 500M-row employee table.
2. Does buffer pool cache sharing occur between instances?

### FAANG-Level Deep Dive

The buffer pool may cache pages for the second access if not evicted. Each alias has its own scan context. Nested Loops is common for SELF JOINs when outer is small and inner has index. At FAANG scale, SELF JOINs are avoided in OLTP and replaced with denormalized columns or materialized paths.

### Explain Like I'm 7

SELF JOIN is like putting a mirror in front of a class photo and comparing each person to the reflection. Same picture twice, different names.

</details>

---

## Q14: Nested Loop Join

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Nested Loop Join iterates through one input (outer) and for each row, probes the other input (inner) for matches. It is optimal when one input is small and the other has an index on the join column. Preferred for OLTP with selective queries.

### Detailed Explanation

- **What it is:** Physical join operator that loops through one input and probes the other.
- **Why it exists:** Simple, efficient for small inputs, supports all join types.
- **What problem it solves:** Efficiently joins small row set with large indexed table. Minimal memory.
- **When to use it:** Outer input small (< 100 rows), inner has index on join column. OLTP equality predicates.
- **When NOT to use it:** Both inputs large (use hash join). No index on inner input.

### Internal Working

Outer loop iterates through outer input; inner loop seeks/scans inner input for each outer row. Seek costs ~3-5 logical I/Os per probe; scan costs full table I/Os.

### Step-by-Step Execution

1. Read one row from outer input
2. Probe inner input using join key
3. If index exists: index seek (fast)
4. If no index: scan entire inner table (slow)
5. Output matching rows
6. Repeat for every outer row
7. Complexity: O(|outer| * cost_of_inner_access)

### Real-World Example

Finding orders for customer 12345: outer = 1 customer row (seek), inner seeks orders via index on customer_id.

### SQL Example

```sql
-- Typically uses Nested Loop Join
SELECT o.order_id, o.order_date, o.order_total
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE c.customer_id = 12345;
```

### Performance Considerations

- Optimal: Outer = 1 row, Inner = index seek (3-5 IOs)
- Worst: Outer = 1M rows, Inner = no index (table scan per row)
- Memory impact: minimal (stores one outer row)
- Preferred for OLTP (highly selective)

### Common Mistakes

- Missing index on inner join column (causes scan per outer row)
- Assuming nested loops are always bad (they're optimal for small outer inputs)
- Not recognizing no WHERE clause forces nested loops scan/scan

### Follow-Up Questions

**Junior:**
1. When is nested loop better than hash join?
2. What happens with no index on inner table?

**Mid-level:**
1. How does optimizer estimate nested loop cost?
2. Explain "nested loops apply" vs regular nested loops.

**Senior-level:**
1. Diagnose nested loop with full table scan on inner side.
2. Explain batch mode nested loops in SQL Server 2019+.

### FAANG-Level Deep Dive

SQL Server 2019 introduced batch mode on rowstore and batch mode nested loops. Processing rows in batches (~900 rows) amortizes probe cost and enables vectorized operations. The optimizer also considers indexed nested loops, nested loops with ordered prefetch, and full outer join nested loops (rare).

### Explain Like I'm 7

Nested loop join is like checking a shopping list. For each item on your small list (outer), you go to the store aisle and look for it (inner). If the store has an index (alphabetical shelves), you find it fast. If not, you walk every aisle each time - very slow!

</details>

---

## Q15: Hash Match and Merge Join

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Hash Match Join builds a hash table on the smaller input and probes with the larger input. Optimal for large, unsorted, equi-joins. Merge Join requires both inputs sorted on the join key and merges simultaneously. Fastest join for large sorted inputs but requires sorting upfront.

### Detailed Explanation

**Hash Match:**
- **What it is:** Creates in-memory hash table on build input, probes with other input.
- **Why it exists:** Efficient for large, unsorted data with no useful indexes.
- **When to use it:** Large tables, no sorting, equi-joins, data warehouse queries.
- **When NOT to use it:** OLTP with small results (overhead > benefit). Non-equi joins.

**Merge Join:**
- **What it is:** Walks two sorted inputs in parallel, matching rows as it goes.
- **Why it exists:** Most efficient for sorted large inputs - O(n + m).
- **When to use it:** Both inputs sorted, equi-joins, large result sets.
- **When NOT to use it:** Unsorted inputs (sorting cost may exceed hash join).

### Internal Working

**Hash Match:**
1. Build phase: Scan build input, hash join keys into hash buckets
2. Probe phase: Scan probe input, hash keys, look up in hash table
3. Memory grant = estimated hash table size * 1.25 (spill to tempdb if insufficient)

**Merge Join:**
1. Get first row from each input
2. Compare join key values
3. If equal: output, advance both
4. If left < right: advance left
5. If right < left: advance right
6. Repeat until one input exhausted

### Real-World Example

Hash Match: Joining 100M-row sales with 10M-row products on product_id with no indexes.

Merge Join: Joining two date-ordered tables where both have clustered indexes on date.

### SQL Example

```sql
-- Likely uses Hash Join (no indexes, large inputs)
SELECT s.sale_id, p.product_name, s.quantity
FROM sales s
INNER JOIN products p ON s.product_id = p.product_id;

-- Likely uses Merge Join (both sorted by date)
SELECT s.sale_date, s.amount, i.inventory_count
FROM daily_sales s
INNER JOIN daily_inventory i ON s.sale_date = i.inventory_date;
```

### Performance Considerations

**Hash Match:**
- Memory grant critical - under-estimation causes tempdb spills
- CPU-intensive (hashing every row)
- No index required
- Spills multiply I/O by ~10x

**Merge Join:**
- Minimal memory (just two current rows)
- Sequential I/O pattern
- Sorting is bottleneck (O(n log n))

### Common Mistakes

- Assuming hash join is always bad (it's optimal for large unsorted data)
- Forcing merge join on unsorted data (adds expensive sort)
- Not monitoring hash join spills

### Follow-Up Questions

**Junior:**
1. Difference between hash join and merge join?
2. When would SQL Server choose hash over merge?

**Mid-level:**
1. Explain hash join spill and diagnosis via DMVs.
2. What inputs feed merge join without explicit sort?

**Senior-level:**
1. Query running slowly with hash join spilling - diagnose and provide three solutions.
2. Explain batch mode hash join in SQL Server 2019+.

### FAANG-Level Deep Dive

SQL Server's hash join supports bitmap filtering - during build phase, a bitmap indicates which hash buckets have values. The probe phase skips entire pages that can't match, dramatically reducing I/O. Batch mode hash join in SQL Server 2019+ processes rows in batches of ~900 using SIMD instructions, providing 2-10x speedup over row mode. Merge join is preferred in columnstore scenarios because columnstore scans produce sorted output (via row group elimination).

### Explain Like I'm 7

Hash Join: Like organizing people by first letter of last name (A-B in one pile, C-D in another), then quickly finding matches. Merge Join: Like zipping two zippers together - both sides already lined up, you just pull them together once.

</details>

# Topic 3: Set Operations (Q16-Q20)

---

## Q16: UNION vs UNION ALL

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

UNION combines result sets and removes duplicates. UNION ALL combines without removing duplicates. UNION ALL is faster because it skips the distinct sort. Use UNION when you need unique results; use UNION ALL when duplicates are acceptable or impossible.

### Detailed Explanation

- **What it is:** Set operators that concatenate result sets vertically. UNION performs DISTINCT; UNION ALL returns all rows.
- **Why it exists:** Different queries may source data from different tables/conditions but need presentation as a single result.
- **What problem it solves:** Combines data from multiple sources into one result.
- **When to use it:** UNION for master data lists (no duplicates); UNION ALL for transactional data (all rows needed).
- **When NOT to use it:** For horizontal combination (use JOIN). For duplicate removal between sets (use INTERSECT/EXCEPT).

### Internal Working

UNION ALL simply concatenates results - minimal overhead. UNION adds a Distinct Sort operator (or Hash Aggregate) to remove duplicates, requiring O(n log n) sort or O(n) hash with memory grant.

### Step-by-Step Execution

UNION ALL:
1. Execute first query
2. Execute second query
3. Append second result to first
4. Return combined result

UNION:
1. Execute first query
2. Execute second query
3. Append results
4. Sort/hash combined result
5. Remove duplicates
6. Return distinct result

### Real-World Example

Support system combining open tickets from legacy and new databases: UNION ALL for all tickets, UNION for unique customers across both systems.

### SQL Example

```sql
-- UNION ALL (fast, no dedup)
SELECT 'North' AS region, sale_id, amount FROM north_sales
UNION ALL
SELECT 'South' AS region, sale_id, amount FROM south_sales;

-- UNION (dedup)
SELECT email FROM customers_legacy
UNION
SELECT email FROM customers_new;

-- UNION ALL with sort
SELECT 'North' AS region, sale_id, amount FROM north_sales
UNION ALL
SELECT 'South' AS region, sale_id, amount FROM south_sales
ORDER BY region, sale_id;
```

### Performance Considerations

- UNION ALL always faster than or equal to UNION
- UNION requires memory grant for sort/hash
- UNION on large results can cause tempdb spills
- Each query in UNION can use different indexes and plans

### Common Mistakes

- Using UNION when UNION ALL suffices
- Forgetting UNION requires same column count and compatible types
- Putting ORDER BY in individual queries

### Follow-Up Questions

**Junior:**
1. Difference between UNION and UNION ALL?
2. Do columns need same names in UNION?

**Mid-level:**
1. How does UNION process different data types?
2. When to use UNION instead of single query with OR?

**Senior-level:**
1. Design query using UNION ALL with partition-level parallelism.
2. How does optimizer handle UNION with indexes per branch?

### FAANG-Level Deep Dive

The distinct sort operator for UNION uses sort-based or hash-based aggregation. At FAANG scale, UNION ALL is heavily preferred. Deduplication is pushed to application or ETL layers. UNION with sort-based dedup is avoided in OLTP paths. The optimizer can perform Branch Elimination for partitioned views using UNION ALL.

### Explain Like I'm 7

UNION ALL is like dumping two LEGO buckets together - all pieces from both. UNION is like dumping them together then removing duplicate bricks - each unique brick appears only once.

</details>

---

## Q17: INTERSECT

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

INTERSECT returns rows that appear in BOTH result sets (set intersection). It removes duplicates. Used to find common data between two queries, like customers who are both buyers AND subscribers.

### Detailed Explanation

- **What it is:** Set operation returning distinct rows present in both left and right queries.
- **Why it exists:** Set theory is fundamental to relational databases.
- **What problem it solves:** Finding commonality between datasets without complex JOIN logic.
- **When to use it:** Data reconciliation, finding valid references, common entities.
- **When NOT to use it:** When duplicates need preservation (INTERSECT removes them). When INNER JOIN with EXISTS is more efficient on indexed tables.

### Internal Working

INTERSECT combines both result sets, sorts/hashes them, and returns only rows in both - removing duplicates. Uses merge intersect or hash match operator.

### Step-by-Step Execution

1. Execute first query
2. Execute second query
3. Sort/hash both results
4. Compare rows
5. Return rows present in both (once only)

### Real-World Example

Employees who are also customers: SELECT email FROM employees INTERSECT SELECT email FROM customers.

### SQL Example

```sql
-- Customers who placed orders
SELECT customer_id FROM customers
INTERSECT
SELECT customer_id FROM orders;

-- Products ordered AND reviewed
SELECT product_id FROM order_details
INTERSECT
SELECT product_id FROM product_reviews;
```

### Performance Considerations

- Requires sorting/hashing both result sets
- INNER JOIN with DISTINCT can be more efficient if indexed
- For large datasets, INTERSECT with hash match uses memory grants

### Common Mistakes

- Forgetting INTERSECT removes duplicates
- Using INTERSECT when EXISTS/INNER JOIN is more efficient
- Not handling NULLs correctly

### Follow-Up Questions

**Junior:**
1. How is INTERSECT different from INNER JOIN?
2. Does INTERSECT return duplicates?

**Mid-level:**
1. Rewrite INTERSECT using EXISTS.
2. How are NULLs handled in INTERSECT?

**Senior-level:**
1. Compare INTERSECT vs JOIN + EXISTS performance.
2. Design reconciliation using INTERSECT and EXCEPT for ETL validation.

### FAANG-Level Deep Dive

The merge intersect operator requires sorted inputs. Hash match intersect does not require sorted input but needs memory. At FAANG scale, INTERSECT is rarely used in OLTP due to memory/sort overhead. EXISTS with index-backed lookup is preferred. INTERSECT treats NULLs as equal for comparison (unlike standard SQL NULL = NULL).

### Explain Like I'm 7

INTERSECT is like finding toys you have in common with your friend. If you have a red car and blue ball, and your friend has the same red car and a green dinosaur, the red car is your intersection.

</details>

---

## Q18: EXCEPT

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

EXCEPT returns rows from the first query that do NOT appear in the second query. It is the SQL minus operator. Removes duplicates. Used for finding differences - records in one set missing from another. In Oracle, the equivalent is MINUS.

### Detailed Explanation

- **What it is:** Set operation returning distinct rows from left query not present in right query.
- **Why it exists:** Provides declarative way to compute set differences.
- **What problem it solves:** Identifying orphaned records, missing rows, data drift.
- **When to use it:** Data quality checks, ETL validation, migration auditing.
- **When NOT to use it:** When duplicates need preservation. When NOT EXISTS with index is more efficient.

### Internal Working

Processes both queries, sorts/hashes combined results, returns rows from left set with no match in right set.

### Step-by-Step Execution

1. Execute first query
2. Execute second query
3. Sort/hash both sets
4. For each row in A, check if in B
5. If not in B, output it
6. Return distinct leftover rows from A

### Real-World Example

Customers who registered but never placed an order.

### SQL Example

```sql
-- Customers who never ordered
SELECT customer_id FROM customers
EXCEPT
SELECT customer_id FROM orders;

-- Equivalent using NOT EXISTS (often faster with indexes)
SELECT c.customer_id
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id
);

-- Products in catalog but not in inventory
SELECT product_id FROM products
EXCEPT
SELECT product_id FROM inventory;
```

### Performance Considerations

- Requires sorting/hashing both result sets
- NOT EXISTS with index can be much faster (anti-semi-join)
- Anti-semi-join stops on first match per outer row

### Common Mistakes

- Using EXCEPT when NOT EXISTS would be more efficient
- Forgetting EXCEPT removes duplicates
- Confusing EXCEPT with NOT IN (NULL sensitivity differs)
- Direction matters - EXCEPT A B != EXCEPT B A

### Follow-Up Questions

**Junior:**
1. Difference between EXCEPT and NOT IN?
2. How does EXCEPT handle NULLs?

**Mid-level:**
1. Rewrite EXCEPT using NOT EXISTS. When is each better?
2. Find rows in A but NOT in B considering all columns.

**Senior-level:**
1. Design ETL validation using EXCEPT across linked servers.
2. Explain anti-semi-joins and their relation to EXCEPT.

### FAANG-Level Deep Dive

The optimizer translates EXCEPT to an anti-semi-join. When inputs are sorted, uses merge anti-semi-join (efficient single pass). Without sorting, hash anti-semi-join is used. The left anti semi join operator appears for both EXCEPT and NOT EXISTS.

### Explain Like I'm 7

EXCEPT is like having two party guest lists. Your list has 10 names. Your friend's list has 7. EXCEPT tells you which names are on YOUR list but NOT your friend's - the 3 people you invited that they didn't.

</details>

---

## Q19: Set Operations vs Joins

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Set operations (UNION, INTERSECT, EXCEPT) combine results vertically (row-wise) based on column structure. JOINs combine horizontally (column-wise) based on relationships. Set operations require same column count/types; JOINs require related columns. Use set ops for comparing row sets; use JOINs for combining related data.

### Detailed Explanation

- **What it is:** Two fundamentally different approaches: vertical (set ops add rows) vs horizontal (joins add columns).
- **Why they exist:** Serve different purposes - membership/comparison vs relationship traversal.
- **What problem they solve:** Set ops: which rows exist in these sets? Joins: what are attributes of related entities?
- **When to use it:** Set ops for common/different records across similar structures. Joins for gathering related data.
- **When NOT to use it:** Don't use set ops to denormalize (use JOIN). Don't use JOINs for set differences (use EXCEPT).

### Internal Working

Set ops stack results vertically - column 1 of A aligns with column 1 of B. Joins align rows based on predicates.

### Step-by-Step Execution

Set Operations:
1. Execute each query independently
2. Stack results vertically
3. Apply duplicate removal or not

Joins:
1. Determine join algorithm
2. Find matching rows
3. Combine columns horizontally
4. Output combined rows

### Real-World Example

Set op: Which products were sold OR reviewed? (UNION). Join: Product details with sales quantities (LEFT JOIN + GROUP BY).

### SQL Example

```sql
-- SET OPERATION: Which products sold or reviewed?
SELECT product_id FROM order_details
UNION
SELECT product_id FROM product_reviews;

-- JOIN: Product details with total sold
SELECT p.product_id, p.product_name,
       COALESCE(SUM(od.quantity), 0) AS total_sold
FROM products p
LEFT JOIN order_details od ON p.product_id = od.product_id
GROUP BY p.product_id, p.product_name;
```

### Performance Considerations

- Set operations can use parallelism per branch
- JOINs can use hash/merge/nested loops with various optimizations
- UNION ALL is trivial; UNION with sort is expensive

### Common Mistakes

- Using UNION to simulate a JOIN (wrong approach)
- Using JOIN to find set membership (use EXISTS)
- Not understanding vertical vs horizontal combination

### Follow-Up Questions

**Junior:**
1. Does UNION or JOIN add more columns?
2. Can you use ORDER BY with set operations?

**Mid-level:**
1. Rewrite LEFT JOIN finding customers without orders using EXCEPT.
2. How does optimizer handle queries mixing JOINs and UNIONs?

**Senior-level:**
1. Design query using both JOINs and set operations on partitioned tables with partition elimination.
2. Explain how set operations interact with columnstore indexes.

### FAANG-Level Deep Dive

The optimizer treats set operations as relational algebra operators. It can push predicates through UNION ALL (predicate pushdown) but NOT through INTERSECT/EXCEPT boundaries. This is critical for partitioned views where UNION ALL across partitioned tables sees partition elimination applied to each branch.

### Explain Like I'm 7

Set operations are like stacking pancakes (vertical - more height). Joins are like making a sandwich (horizontal - different ingredients together).

</details>

---

## Q20: Multiple Set Operations

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Multiple set operations can be chained: SELECT ... UNION SELECT ... INTERSECT SELECT ... EXCEPT SELECT ... Operator precedence matters: INTERSECT binds before UNION and EXCEPT (SQL Server). Parentheses override precedence.

### Detailed Explanation

- **What it is:** Combining three or more result sets using set operations with precedence rules.
- **Why it exists:** Complex data comparisons often require multiple set operations.
- **What problem it solves:** Expressing complex set logic (A U B ^ C) in a single query.
- **When to use it:** Multi-source reconciliation, complex membership queries.
- **When NOT to use it:** When CTEs or temp tables improve readability or performance.

### Internal Working

SQL Server's parser builds an operator tree respecting precedence: INTERSECT binds tighter than UNION and EXCEPT. Parentheses create sub-trees.

### Step-by-Step Execution

Query: A UNION B INTERSECT C
Interpreted as: A UNION (B INTERSECT C)
1. Execute B and C, compute INTERSECT
2. Execute A, compute UNION with step 1

### Real-World Example

Customers who: ordered OR subscribed, AND have valid email, but are NOT blacklisted.

### SQL Example

```sql
-- Without parentheses: INTERSECT binds first
SELECT customer_id FROM orders
UNION
SELECT customer_id FROM subscribers
INTERSECT
SELECT customer_id FROM valid_emails;

-- With parentheses: explicit ordering
(SELECT customer_id FROM orders
 UNION
 SELECT customer_id FROM subscribers)
INTERSECT
SELECT customer_id FROM valid_emails
EXCEPT
SELECT customer_id FROM blacklist;
```

### Performance Considerations

- Each set operation introduces sort/hash boundaries
- More operations = more memory grants and tempdb risk
- Break complex multi-set into CTEs for better optimization

### Common Mistakes

- Not knowing INTERSECT binds before UNION/EXCEPT
- Assuming left-to-right evaluation without parentheses
- Forgetting duplicate removal at each boundary

### Follow-Up Questions

**Junior:**
1. Which set operator has highest precedence in SQL Server?
2. How do parentheses affect evaluation order?

**Mid-level:**
1. How does execution plan show multiple set operations?
2. Rewrite three-way set operation using CTEs.

**Senior-level:**
1. Design complex validation query with set operations across three systems.
2. Explain predicate pushdown through multiple set operations.

### FAANG-Level Deep Dive

The execution plan shows a segment tree structure. Each set operation creates a segment boundary (sort/hash) forcing materialization. The optimizer CANNOT push predicates through INTERSECT/EXCEPT boundaries. This limits optimization - filtering after INTERSECT requires processing all intermediate rows. Understanding this helps design queries that push filtering before set operations.

### Explain Like I'm 7

Multiple set operations are like deciding party guests with several rules. First pick from class OR soccer team. Then keep only those ALSO on birthday list. Then remove anyone on "no invite" list. Parentheses say "do this part first."

</details>

---

# Topic 4: Subqueries & CTEs (Q21-Q27)

---

## Q21: Subquery Basics

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A subquery is a SELECT nested inside another query (SELECT, FROM, WHERE, HAVING). It can be scalar (single value), row (single row, multiple columns), or table (multiple rows). Subqueries can be independent (non-correlated) or dependent (correlated).

### Detailed Explanation

- **What it is:** A query nested within another query, enclosed in parentheses.
- **Why it exists:** Subqueries break complex problems into steps - compute inner, use in outer.
- **What problem it solves:** Enables filtering based on aggregated data, existence checks, inline computation.
- **When to use it:** Using aggregates in WHERE, EXISTS checks, computing derived values.
- **When NOT to use it:** When a JOIN would be more efficient. When a CTE improves readability.

### Internal Working

The optimizer may unnest the subquery (convert to join) or execute it independently. Scalar subqueries may be computed once (uncorrelated) or per outer row (correlated).

### Step-by-Step Execution

1. Parse outer query, identify subquery
2. Decide strategy: nested loops or unnest to join
3. If uncorrelated: execute once, cache result
4. If correlated: execute per outer row
5. Apply result to outer filter

### Real-World Example

Find products with prices above the overall average.

### SQL Example

```sql
-- Scalar subquery in WHERE
SELECT product_name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Subquery in FROM (derived table)
SELECT dept_id, avg_salary
FROM (SELECT dept_id, AVG(salary) AS avg_salary
      FROM employees GROUP BY dept_id) dept_avg
WHERE avg_salary > 50000;

-- EXISTS subquery
SELECT c.customer_id, c.first_name
FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o
              WHERE o.customer_id = c.customer_id AND o.order_total > 1000);
```

### Performance Considerations

- Correlated subqueries execute per outer row
- Uncorrelated scalar subqueries execute once
- EXISTS is optimized as semi-join (stops on first match)

### Common Mistakes

- Subquery returning multiple rows in scalar context
- Not realizing subqueries in SELECT execute per outer row
- Using IN (subquery) when EXISTS would be more efficient

### Follow-Up Questions

**Junior:**
1. Scalar vs table subquery?
2. Can you use ORDER BY in a subquery?

**Mid-level:**
1. Correlated vs non-correlated subquery?
2. How does EXISTS differ from IN regarding NULLs?

**Senior-level:**
1. Explain subquery decorrelation.
2. Optimize SELECT subquery using window function.

### FAANG-Level Deep Dive

Subquery decorrelation is a critical optimizer transformation. SQL Server uses Join Elimination, Apply transformation, and Quantified predicate transformation. The execution plan shows Left Semi Join instead of a subquery after decorrelation.

### Explain Like I'm 7

A subquery is like asking a question inside another question. "Find kids taller than the class average" - first calculate average (inner), then find who is taller (outer).

</details>

---

## Q22: Correlated Subquery

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A correlated subquery references columns from the outer query. It executes once per outer row (row-by-row), making it potentially expensive. Used for per-row comparisons like finding employees who earn more than their department average.

### Detailed Explanation

- **What it is:** Subquery containing a reference to an outer query column.
- **Why it exists:** Some queries need per-row contextual filtering.
- **What problem it solves:** Per-group comparisons that joins can't easily express.
- **When to use it:** Per-group comparisons, existence checks relative to parent row.
- **When NOT to use it:** When window functions or GROUP BY + JOIN can solve it. On large tables it's disastrous.

### Internal Working

The optimizer converts to an Apply operator (Nested Loops Apply). For each outer row, executes inner query with correlation value.

### Step-by-Step Execution

1. Outer query reads rows
2. For each row, extract correlation column value
3. Execute inner query using that value as parameter
4. Use inner result to filter outer row
5. Repeat until all outer rows processed

### Real-World Example

Employees earning more than their department average.

### SQL Example

```sql
-- Correlated: different average per department
SELECT e.employee_id, e.employee_name, e.salary, e.dept_id
FROM employees e
WHERE e.salary > (SELECT AVG(salary)
                  FROM employees e2
                  WHERE e2.dept_id = e.dept_id);

-- EXISTS with correlation
SELECT p.product_id, p.product_name
FROM products p
WHERE EXISTS (SELECT 1 FROM order_details od
              JOIN orders o ON od.order_id = o.order_id
              WHERE od.product_id = p.product_id
                AND o.order_date >= DATEADD(YEAR, -1, GETDATE()));
```

### Performance Considerations

- Inner query executes per outer row: O(outer * inner)
- Indexes on correlation column critical
- EXISTS stops at first match (efficient for existence)
- Consider rewriting with window functions

### Common Mistakes

- Not indexing correlation column (full scan per outer row)
- Using correlated subquery when window function works
- Correlating on non-unique columns

### Follow-Up Questions

**Junior:**
1. What makes a subquery correlated?
2. How many times does it execute?

**Mid-level:**
1. Rewrite using window function. When is each better?
2. Explain Apply operator for correlated subqueries.

**Senior-level:**
1. Diagnose slow correlated subquery on 10M row table.
2. Explain Apply vs correlated subquery.

### FAANG-Level Deep Dive

The Apply operator (Nested Loops Apply) is the physical operator for correlated subqueries. The optimizer can transform apply to join via apply-to-join conversion when decorrelated. Certain patterns (TOP per group, aggregates with outer reference) block decorrelation. At FAANG scale, correlated subqueries are replaced by window functions or denormalized summary tables.

### Explain Like I'm 7

"Is this kid taller than their class average?" For each kid, calculate their class's average (different for each class), then compare. Can't calculate all at once because each kid might be in a different class.

</details>

---

## Q23: Non-Correlated Subquery

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A non-correlated (independent) subquery has no reference to outer query columns. It executes once and caches the result. It is more efficient than correlated subqueries because execution happens once regardless of outer row count.

### Detailed Explanation

- **What it is:** A subquery that runs independently without outer context.
- **Why it exists:** Many queries need pre-computed values (global aggregates).
- **What problem it solves:** Compute once, reference multiple times.
- **When to use it:** Computing global aggregates, filtering against fixed thresholds.
- **When NOT to use it:** When value changes per outer row (use correlated). When result is large and used in WHERE IN (consider JOIN).

### Internal Working

The optimizer detects no correlation, executes subquery first, materializes result. Appears as Constant Scan or Table Scan at plan startup.

### Step-by-Step Execution

1. Execute subquery independently (once)
2. Store result (scalar or table)
3. Execute outer query using cached result
4. Subquery cost paid once

### Real-World Example

Employees earning more than company-wide average salary.

### SQL Example

```sql
-- Non-correlated: executes AVG once
SELECT employee_id, employee_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Non-correlated subquery in FROM
SELECT d.dept_id, d.dept_name, dept_stats.emp_count
FROM departments d
INNER JOIN (SELECT dept_id, COUNT(*) AS emp_count
            FROM employees GROUP BY dept_id) dept_stats ON d.dept_id = dept_stats.dept_id;
```

### Performance Considerations

- Executes once - much cheaper than correlated
- Result may be cached and reused within query
- Large results from IN subqueries may spill

### Common Mistakes

- Assuming all subqueries execute once
- Using non-correlated subquery in WHERE IN with large result (consider JOIN)
- Not using CTE when referenced multiple times

### Follow-Up Questions

**Junior:**
1. How many times does non-correlated subquery execute?
2. Can it return multiple rows?

**Mid-level:**
1. Execution plan difference: WHERE subquery vs FROM derived table.
2. How does optimizer handle non-correlated subquery in EXISTS?

**Senior-level:**
1. Design query using non-correlated subquery for running total vs window function.
2. Explain materialized subqueries vs CTEs in plan caching.

### FAANG-Level Deep Dive

The optimizer materializes non-correlated subquery results as a TVF or derived table. For scalar subqueries, creates Compute Scalar fed by aggregate. For table subqueries, may create a Spool to cache the result if referenced multiple times (Eager Spool). Understanding when the optimizer spools vs re-executes is crucial for tuning.

### Explain Like I'm 7

Non-correlated subquery is like calculating the class's average height once, writing it on the board, then checking each kid against that number. Do the math once, not over and over.

</details>

---

## Q24: CTE Basics

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A Common Table Expression (CTE) is a named temporary result set defined with WITH. It exists only for the query duration. CTEs improve readability by breaking complex queries into named steps. Unlike subqueries, CTEs can be referenced multiple times and can be recursive.

### Detailed Explanation

- **What it is:** Temporary named result set defined with WITH before the main query.
- **Why it exists:** Improves readability and maintainability.
- **What problem it solves:** Eliminates repeated subquery code, enables recursive queries.
- **When to use it:** Multiple references to same subquery, recursive queries, breaking complex queries.
- **When NOT to use it:** When materialization is critical (use temp table). CTEs are NOT materialized by default.

### Internal Working

CTEs are expanded inline by the optimizer (like a view or derived table). They are NOT materialized. Each reference becomes a separate subquery in the optimizer tree.

### Step-by-Step Execution

1. Parse CTE definition
2. Expand CTE references inline into outer query
3. Optimize combined query
4. Execute plan

### Real-World Example

Sales report showing each employee's sales vs department average and overall average.

### SQL Example

```sql
-- CTE for readability
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT e.employee_id, e.employee_name, e.salary,
       da.avg_salary AS dept_avg,
       e.salary - da.avg_salary AS diff
FROM employees e
INNER JOIN dept_avg da ON e.dept_id = da.dept_id
WHERE e.salary > da.avg_salary;

-- CTE referenced twice (may execute twice!)
WITH high_value AS (
    SELECT customer_id, COUNT(*) AS order_count
    FROM orders WHERE order_total > 1000
    GROUP BY customer_id
)
SELECT * FROM high_value
UNION ALL
SELECT c.customer_id, 0
FROM customers c
WHERE NOT EXISTS (SELECT 1 FROM high_value h2 WHERE h2.customer_id = c.customer_id);
```

### Performance Considerations

- CTEs NOT cached/materialized - multiple references = multiple executions
- For CTEs referenced multiple times, use temp table instead
- CTE definitions expanded inline - no spools created

### Common Mistakes

- Assuming CTEs materialize results (they don't)
- Using CTEs referenced multiple times (causes re-execution)
- Not putting semicolon before WITH

### Follow-Up Questions

**Junior:**
1. What does CTE stand for?
2. Can CTE be referenced multiple times?

**Mid-level:**
1. CTE vs derived table difference?
2. When to use temp table instead of CTE?

**Senior-level:**
1. How does optimizer handle multiple CTE references?
2. Design solution using CTEs for complex business report.

### FAANG-Level Deep Dive

SQL Server does NOT automatically materialize CTEs. Each reference is independently optimized and executed. In PostgreSQL, CTE MATERIALIZED clause (default) materializes as optimization fence. In SQL Server, explicitly use SELECT INTO #temp for materialization. The optimizer may use Index Spool for spooling, but it's not guaranteed.

### Explain Like I'm 7

A CTE is like writing a recipe step on a sticky note before cooking. It helps organize. But if the recipe says to do that step twice, you actually do it twice - it's not like having pre-made ingredients in the fridge.

</details>

---

## Q25: Recursive CTE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A recursive CTE references itself, enabling hierarchical data traversal (org charts, category trees). It has an anchor member (starting point) and a recursive member (references the CTE). Recursion continues until the recursive member returns zero rows.

### Detailed Explanation

- **What it is:** CTE defined with UNION ALL where the second SELECT references the CTE itself.
- **Why it exists:** Relational databases store hierarchies in flat tables. Recursive CTEs provide set-based traversal.
- **What problem it solves:** Traversing parent-child to arbitrary depth without cursors.
- **When to use it:** Hierarchy traversal, date range expansion, number generation.
- **When NOT to use it:** Fixed-depth hierarchies (use JOINs). Very deep hierarchies (>100 levels) may hit MAXRECURSION.

### Internal Working

Uses a stack spool. Anchor member executes first, results go to a queue. Recursive member executes using previous iteration's output. Each iteration's results are appended and fed back.

### Step-by-Step Execution

1. Anchor member: execute once - seed the result
2. Recursive member: execute using previous iteration output
3. Append results to overall output
4. Repeat until recursive member returns zero rows
5. Apply outer query filters

### Real-World Example

Org chart: find all subordinates of a manager at any depth.

### SQL Example

```sql
-- Org chart
WITH org_tree AS (
    SELECT employee_id, employee_name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.employee_name, e.manager_id, t.level + 1
    FROM employees e
    INNER JOIN org_tree t ON e.manager_id = t.employee_id
)
SELECT employee_id, employee_name, level
FROM org_tree
ORDER BY level, employee_name
OPTION (MAXRECURSION 50);

-- Date range generation
WITH date_cte AS (
    SELECT DATEFROMPARTS(2024, 1, 1) AS dt
    UNION ALL
    SELECT DATEADD(DAY, 1, dt)
    FROM date_cte
    WHERE dt < DATEFROMPARTS(2024, 1, 31)
)
SELECT dt FROM date_cte
OPTION (MAXRECURSION 31);
```

### Performance Considerations

- Each recursion level is an iteration
- Indexing join column in recursive member critical
- Stack spool stores intermediate results in tempdb
- MAXRECURSION default 100 (safety limit)

### Common Mistakes

- Forgetting MAXRECURSION option
- Creating infinite recursion
- Not using UNION ALL separator

### Follow-Up Questions

**Junior:**
1. What are the two parts of recursive CTE?
2. What happens if recursive member never returns zero rows?

**Mid-level:**
1. How does OPTION (MAXRECURSION) work?
2. Recursive CTE vs cursor-based loop?

**Senior-level:**
1. Design BOM explosion with cycle detection.
2. Explain stack spool operator in recursive CTE plans.

### FAANG-Level Deep Dive

The recursive CTE plan shows Recursive Union or Index Spool (Eager Spool). At FAANG scale, recursive CTEs are replaced by materialized path or nested sets representations for hierarchy queries. SQL Server limits recursion to 32767 levels. The stack spool uses LIFO order (depth-first), not breadth-first.

### Explain Like I'm 7

Recursive CTE is like finding all branches on a family tree. First find grandparent (anchor), then their children (step 1), then children's children (step 2). Keep going until no more children.

</details>

---

## Q26: Subquery in SELECT vs FROM vs WHERE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Subqueries in SELECT compute a value per row; in FROM act as virtual tables (derived tables); in WHERE filter rows. SELECT subqueries execute per outer row (expensive). FROM subqueries execute once (if non-correlated). WHERE subqueries use EXISTS/IN/ANY/ALL.

### Detailed Explanation

- **What it is:** Placement determines role: computed column (SELECT), virtual table (FROM), filter (WHERE).
- **Why they exist:** Different placements serve different logical purposes.
- **What problem they solve:** SELECT adds computed columns; FROM encapsulates joins/aggregations; WHERE filters.
- **When to use it:** SELECT for row-level calcs; FROM for intermediate aggregations; WHERE for membership/existence.
- **When NOT to use it:** Don't use SELECT subqueries for large result sets (per-row execution).

### Internal Working

- SELECT subquery: optimized as scalar aggregate, often using Apply if correlated
- FROM subquery: optimized as derived table - expanded inline
- WHERE subquery: EXISTS becomes semi-join, IN may become semi-join or hash

### Step-by-Step Execution

SELECT (correlated):
1. Read outer row
2. Execute inner with correlation value
3. Return scalar for that row
4. Repeat

FROM:
1. Execute inner once
2. Treat result as table
3. Join/filter with outer

WHERE EXISTS:
1. For each outer row, probe inner
2. Stop at first match
3. Include outer row if match found

### Real-World Example

SELECT: employee salary vs dept average. FROM: aggregate orders by month then join targets. WHERE: find customers with recent orders.

### SQL Example

```sql
-- SELECT subquery (per row)
SELECT e.employee_id, e.salary,
       (SELECT AVG(salary) FROM employees e2 WHERE e2.dept_id = e.dept_id) AS dept_avg
FROM employees e;

-- FROM subquery (derived table)
SELECT d.dept_name, ds.avg_salary
FROM departments d
INNER JOIN (SELECT dept_id, AVG(salary) AS avg_salary
            FROM employees GROUP BY dept_id) ds ON d.dept_id = ds.dept_id;

-- WHERE EXISTS
SELECT customer_id, first_name
FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o
              WHERE o.customer_id = c.customer_id AND o.order_total > 1000);
```

### Performance Considerations

- SELECT subqueries (correlated) execute per outer row - most expensive
- FROM subqueries execute once - relatively efficient
- WHERE EXISTS with index is efficient (semi-join)

### Common Mistakes

- Same SELECT subquery referenced multiple times (re-executes)
- Placing correlated subquery in FROM
- Using IN when EXISTS would be more efficient

### Follow-Up Questions

**Junior:**
1. Can SELECT subquery return multiple columns?
2. What if SELECT subquery returns multiple rows?

**Mid-level:**
1. Compare SELECT subquery vs window function performance.
2. How does Apply operator differ for each placement?

**Senior-level:**
1. Design query using all three placements efficiently.
2. Explain when unnesting succeeds/fails for each placement.

### FAANG-Level Deep Dive

The execution plan reveals placement: SELECT appears as Nested Loops Apply (correlated) or Compute Scalar (constant). FROM appears as Table Scan on derived table. WHERE EXISTS appears as Left Semi Join. The optimizer's ability to unnest depends on placement. Understanding when unnesting fails is key to advanced tuning.

### Explain Like I'm 7

Think of the query like making a sandwich: SELECT subquery is asking "how many calories?" for each sandwich. FROM subquery is pre-making mayo in a separate bowl. WHERE subquery is checking "does this person like cheese?" before giving them a sandwich.

</details>

---

## Q27: CTE vs Subquery vs Temp Table

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

CTEs are inline, non-materialized, ideal for readability/recursion. Subqueries are nested and good for simple one-off expressions. Temp tables (#temp) are materialized on disk/indexable, ideal for multi-step ETL or when same data is referenced many times. Choose based on reusability, indexing needs, and scope.

### Detailed Explanation

- **What they are:** Three mechanisms for breaking complex queries into parts.
- **Why they exist:** Different needs: readability (CTE), simplicity (subquery), performance (temp table).
- **What problem they solve:** Query decomposition and intermediate result management.
- **When to use it:** CTE for readability/recursion; subquery for simple expressions; temp table for multi-step/indexing.
- **When NOT to use it:** CTE when materialization critical (use temp table). Subquery when referenced multiple times (use CTE or temp table).

### Internal Working

- CTE: Expanded inline - no materialization
- Subquery: Same as CTE - expanded inline
- Temp table: Materialized in tempdb, can have indexes, statistics, constraints

### Performance Considerations

- CTE/subquery: no materialization overhead but may re-execute
- Temp table: materialization overhead but can be indexed
- Temp table statistics help optimizer
- Temp tables can be indexed for better seek performance

### Real-World Example

ETL step: CTE for readability in reporting; temp table for multi-step data transformation with indexing.

### SQL Example

```sql
-- CTE for readability (single use)
WITH monthly_sales AS (
    SELECT DATEADD(MONTH, DATEDIFF(MONTH, 0, order_date), 0) AS month,
           SUM(order_total) AS total
    FROM orders
    GROUP BY DATEADD(MONTH, DATEDIFF(MONTH, 0, order_date), 0)
)
SELECT * FROM monthly_sales ORDER BY month;

-- Temp table for multi-step processing
SELECT customer_id, SUM(order_total) AS total_spent
INTO #high_value_customers
FROM orders
GROUP BY customer_id
HAVING SUM(order_total) > 10000;

CREATE INDEX ix_temp ON #high_value_customers(customer_id);

-- Now use in multiple steps
UPDATE c SET c.status = 'VIP'
FROM customers c
INNER JOIN #high_value_customers h ON c.customer_id = h.customer_id;
```

### Common Mistakes

- Using CTE for multi-step ETL (should use temp table)
- Using subquery when CTE would be more readable
- Not dropping temp tables when done
- Forgetting temp tables are session-scoped

### Follow-Up Questions

**Junior:**
1. When would you use a temp table instead of CTE?
2. Are temp tables visible across sessions?

**Mid-level:**
1. Compare performance: CTE vs temp table for multi-reference query.
2. When would a table variable be better than temp table?

**Senior-level:**
1. Design ETL process using CTEs, temp tables, and table variables appropriately.
2. Explain how statistics on temp tables affect query optimization vs CTEs.

### FAANG-Level Deep Dive

At FAANG scale, temp tables are preferred for multi-step ETL because they allow explicit indexing, statistics, and break large operations into manageable chunks with checkpoints. CTEs are used for single-query readability. The key insight: CTEs look like separate steps but the optimizer sees one monolithic query. Temp tables force materialization boundaries that can help the optimizer with complex queries.

### Explain Like I'm 7

CTE is like a recipe on a sticky note - helpful for one dish. Subquery is like asking a question while cooking. Temp table is like making a batch of sauce in a separate bowl that you can use for multiple dishes.

</details>

# Topic 5: Window Functions (Q28-Q35)

---

## Q28: ROW_NUMBER()

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

ROW_NUMBER() assigns a unique sequential integer to each row within a partition, starting at 1. The numbering resets at each partition boundary. It is used for pagination, deduplication, and selecting top-N per group.

### Detailed Explanation

- **What it is:** Window function that assigns a unique incrementing integer to rows within a window partition.
- **Why it exists:** SQL tables are unordered sets. ROW_NUMBER provides ordered numbering without requiring self-joins or cursors.
- **What problem it solves:** Pagination (OFFSET-FETCH alternative), deduplication (keep first/last row per group), ranking within groups.
- **When to use it:** Pagination, row deduplication, selecting top-N per group, assigning sequential IDs.
- **When NOT to use it:** When you need dense ranking (use DENSE_RANK). When ties need same rank (use RANK).

### Internal Working

The window function operator sorts the data by the ORDER BY clause within each partition. It then iterates through sorted rows, incrementing a counter that resets at partition boundaries.

### Step-by-Step Execution

1. Partition data by PARTITION BY columns (if specified)
2. Sort each partition by ORDER BY columns
3. Assign row number starting at 1 for each partition
4. Return results

### Real-World Example

Pagination: return rows 21-30 of a search result ordered by date.

### SQL Example

```sql
-- Pagination: rows 21-30
WITH numbered AS (
    SELECT order_id, order_date, order_total,
           ROW_NUMBER() OVER (ORDER BY order_date DESC, order_id DESC) AS rn
    FROM orders
)
SELECT order_id, order_date, order_total
FROM numbered
WHERE rn BETWEEN 21 AND 30;

-- Deduplication: keep most recent order per customer
WITH ranked AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
)
DELETE FROM ranked WHERE rn > 1;

-- Top 3 products per category
WITH ranked AS (
    SELECT product_id, product_name, price, category_id,
           ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY price DESC) AS rn
    FROM products
)
SELECT * FROM ranked WHERE rn <= 3;
```

### Performance Considerations

- Requires sort operator (memory and tempdb intensive for large datasets)
- Partitioning reduces sort size (each partition sorted independently)
- Index on PARTITION BY + ORDER BY columns can eliminate sort
- ROW_NUMBER is generally faster than RANK/DENSE_RANK (simpler counter)

### Common Mistakes

- Forgetting ORDER BY (ROW_NUMBER requires it - error)
- Not understanding row assignment is non-deterministic without unique ORDER BY
- Using ROW_NUMBER when RANK or DENSE_RANK is needed for ties
- Filtering on rn without CTE/subquery (WHERE rn = 1 fails - window functions evaluated after WHERE)

### Follow-Up Questions

**Junior:**
1. What happens if ORDER BY has ties?
2. Can ROW_NUMBER be used without PARTITION BY?

**Mid-level:**
1. Why can't you filter on ROW_NUMBER in WHERE directly?
2. How would you implement pagination with ROW_NUMBER vs OFFSET-FETCH?

**Senior-level:**
1. Compare performance of ROW_NUMBER pagination vs keyset pagination (seek method) for large datasets.
2. How to use ROW_NUMBER with batch mode operations?

### FAANG-Level Deep Dive

ROW_NUMBER with ORDER BY on a non-unique column can produce non-deterministic results (SQL Server assigns numbers arbitrarily for ties). Add a tiebreaker to ORDER BY for determinism. At FAANG scale, keyset pagination (WHERE last_seen_value < @cursor) is preferred over ROW_NUMBER pagination for infinite scroll because it's O(log n) per page vs O(n log n) for ROW_NUMBER.

### Explain Like I'm 7

ROW_NUMBER is like giving each kid in line a number. The first in line gets 1, second gets 2, and so on. If there are multiple lines (partitions), each line starts numbering from 1 again.

</details>

---

## Q29: RANK() and DENSE_RANK()

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

RANK() and DENSE_RANK() assign ranks with gaps (RANK) or without gaps (DENSE_RANK) for ties. If three rows tie for 1st, RANK gives 1,1,1,4,4,6 while DENSE_RANK gives 1,1,1,2,2,3. RANK has gaps; DENSE_RANK does not.

### Detailed Explanation

- **What it is:** Ranking functions that handle ties differently. RANK skips numbers after ties; DENSE_RANK does not.
- **Why it exists:** Different ranking needs: RANK for olympic-style (gold, silver, bronze with gaps), DENSE_RANK for compact ranking.
- **What problem it solves:** Assigning ranks to ordered data with ties.
- **When to use it:** RANK for "top N with ties" where gaps matter; DENSE_RANK for "top N distinct values."
- **When NOT to use it:** When each row needs a unique number (use ROW_NUMBER). When you need dense sequential numbering regardless of ties (use DENSE_RANK).

### Internal Working

Both functions sort data by ORDER BY within each partition, then assign ranks. RANK counts the number of rows before the current row plus 1. DENSE_RANK counts the number of distinct ORDER BY values before the current row plus 1.

### Step-by-Step Execution

1. Partition data (if specified)
2. Sort by ORDER BY columns
3. RANK: current_rank = number of rows before current + 1 (ties share same rank)
4. DENSE_RANK: current_rank = number of distinct ORDER BY values before + 1

### Real-World Example

Student exam scores: RANK gives 1,2,2,4 (two students tied for 2nd). DENSE_RANK gives 1,2,2,3.

### SQL Example

```sql
SELECT employee_id, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_with_gaps,
       DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_no_gaps,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num
FROM employees;

-- Top 3 salaries per department (with ties included using DENSE_RANK)
WITH ranked AS (
    SELECT *, DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dr
    FROM employees
)
SELECT * FROM ranked WHERE dr <= 3;

-- All employees with top 3 distinct salary levels per dept
WITH ranked AS (
    SELECT *, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS r
    FROM employees
)
SELECT * FROM ranked WHERE r <= 3;
```

### Performance Considerations

- Same as ROW_NUMBER - requires sort
- DENSE_RANK may have slightly higher CPU (needs to track distinct values)
- Index on PARTITION BY + ORDER BY columns improves performance

### Common Mistakes

- Confusing RANK and DENSE_RANK gap behavior
- Using RANK when DENSE_RANK is more appropriate (or vice versa)
- Not realizing RANK with many ties can skip many numbers

### Follow-Up Questions

**Junior:**
1. What's the difference between RANK and DENSE_RANK?
2. How does RANK handle ties?

**Mid-level:**
1. With 100 rows and 50 unique values, what's the max value of RANK vs DENSE_RANK?
2. When would you choose RANK over DENSE_RANK?

**Senior-level:**
1. Implement a "top N per group" that includes ties using both RANK and DENSE_RANK. Explain differences.
2. How does the window spool operator handle ranking functions?

### FAANG-Level Deep Dive

The segment tree operator in execution plans shows Sequence Project (Compute Scalar) for window functions. RANK and DENSE_RANK use a window spool (OnDisk or InMemory) to store intermediate window results. In SQL Server 2019+, batch mode for window aggregates can accelerate these functions. Understanding the Spool operator's role in window functions helps diagnose memory issues.

### Explain Like I'm 7

RANK is like Olympic medals: two golds means next is bronze (no silver). RANK: 1,1,3. DENSE_RANK is like giving out prizes: two first prizes, then second prize, then third. DENSE_RANK: 1,1,2.

</details>

---

## Q30: NTILE()

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

NTILE(N) divides rows into N approximately equal buckets (groups) and assigns a bucket number from 1 to N. It is used for data segmentation, percentile analysis, and stratified sampling. If rows don't divide evenly, the extra rows go to the first buckets.

### Detailed Explanation

- **What it is:** Window function that distributes rows into a specified number of ranked buckets.
- **Why it exists:** Provides quick data distribution for quartile/percentile analysis without complex subqueries.
- **What problem it solves:** Dividing data into equal-sized groups for analysis (top 25%, bottom 10%, etc.).
- **When to use it:** Salary quartiles, customer deciles, A/B test group assignment, stratified sampling.
- **When NOT to use it:** When you need exact percentile values (use PERCENT_RANK or CUME_DIST). When groups should be based on values not counts (use CASE with thresholds).

### Internal Working

NTILE calculates the number of rows per bucket (count / N) and remainder (count % N). The first remainder buckets get one extra row. It uses a window spool to count rows per partition before assigning bucket numbers.

### Step-by-Step Execution

1. Count total rows (or rows per partition)
2. Calculate base bucket size = count / N
3. Calculate remainder = count % N
4. First remainder buckets get base + 1 rows
5. Assign bucket numbers sequentially

### Real-World Example

Divide customers into 4 quartiles by total spending for targeted marketing.

### SQL Example

```sql
-- Customer quartiles by total spending
WITH customer_spend AS (
    SELECT customer_id, SUM(order_total) AS total_spent
    FROM orders
    GROUP BY customer_id
)
SELECT customer_id, total_spent,
       NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile,
       NTILE(10) OVER (ORDER BY total_spent DESC) AS decile,
       NTILE(100) OVER (ORDER BY total_spent DESC) AS percentile
FROM customer_spend;

-- A/B test assignment (50/50 split)
SELECT customer_id, email,
       NTILE(2) OVER (ORDER BY customer_id) AS test_group
FROM customers;
```

### Performance Considerations

- Requires full scan to count rows before assigning buckets
- Needs a window spool for row count per partition
- For large datasets, NTILE on unsorted data requires sort
- Consider disk spool if memory insufficient

### Common Mistakes

- Assuming NTILE creates equal-sized buckets (they differ by at most 1 row)
- Forgetting that NTILE counts rows, not sums of values
- Using NTILE for value-based segmentation (use PERCENT_RANK or CASE)
- Not understanding that ordering affects which rows go to which buckets

### Follow-Up Questions

**Junior:**
1. What does NTILE(4) do?
2. If 10 rows divided into 3 buckets, how many rows per bucket?

**Mid-level:**
1. How does NTILE handle uneven row distribution?
2. NTILE vs PERCENT_RANK vs CUME_DIST - when to use each?

**Senior-level:**
1. Design an A/B test assignment using NTILE that ensures stable grouping across queries.
2. Explain the internal two-pass processing of NTILE (count then assign).

### FAANG-Level Deep Dive

NTILE requires a two-pass approach: first pass counts rows (window spool), second pass assigns bucket numbers. The Segment and Sequence Project operators in the plan show these phases. SQL Server may use a Window Spool (Table Spool) to store intermediate results. For extremely large datasets, consider using hash-based sampling (TABLESAMPLE) for approximate results.

### Explain Like I'm 7

NTILE is like dividing a pizza into equal slices. NTILE(4) gives 4 slices. If the pizza has 10 slices of pepperoni and you want 4 people to get roughly equal numbers, some get 3 and some get 2, with the first people getting the extra ones.

</details>

---

## Q31: LEAD() and LAG()

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

LAG() accesses a previous row's data within the same result set without a self-join. LEAD() accesses a subsequent row's data. Both use an offset parameter (default 1) and a default value for missing rows. Used for comparing current vs previous/next values.

### Detailed Explanation

- **What it is:** Window functions that provide access to preceding (LAG) or following (LEAD) rows within the same partition.
- **Why it exists:** Avoids expensive self-joins for comparing adjacent rows.
- **What problem it solves:** Computing deltas, trends, running differences, time-series analysis.
- **When to use it:** Day-over-day changes, month-over-month growth, comparing current to previous period.
- **When NOT to use it:** When you need cumulative aggregates (use SUM/AVG OVER with ROWS). When accessing non-adjacent rows where offset varies.

### Internal Working

The window spool stores rows with their position. LAG(N) retrieves the row N positions before the current row in the spool. LEAD(N) retrieves the row N positions after.

### Step-by-Step Execution

1. Sort data by ORDER BY within partition
2. Store in window spool with sequential position
3. For each row, retrieve the row at current_position - offset (LAG)
4. If position - offset < 1, use default value
5. Output current row with LAG/LEAD value

### Real-World Example

Calculate daily sales change: LAG to get previous day's sales, then compute difference.

### SQL Example

```sql
-- Day-over-day sales change
SELECT order_date, 
       SUM(order_total) AS daily_total,
       LAG(SUM(order_total)) OVER (ORDER BY order_date) AS prev_day_total,
       SUM(order_total) - LAG(SUM(order_total)) OVER (ORDER BY order_date) AS day_change,
       (SUM(order_total) - LAG(SUM(order_total)) OVER (ORDER BY order_date)) 
           / NULLIF(LAG(SUM(order_total)) OVER (ORDER BY order_date), 0) * 100 AS pct_change
FROM orders
GROUP BY order_date
ORDER BY order_date;

-- Next order date per customer (LEAD with partition)
SELECT customer_id, order_date AS current_order,
       LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS next_order,
       DATEDIFF(DAY, order_date, LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS days_until_next
FROM orders;

-- LAG with custom offset and default
SELECT product_id, sale_date, quantity,
       LAG(quantity, 7, 0) OVER (PARTITION BY product_id ORDER BY sale_date) AS sales_7_days_ago
FROM daily_sales;
```

### Performance Considerations

- Requires window spool (memory/tempdb) for random access
- Larger offset values don't increase cost significantly (position-based retrieval)
- Partitioning reduces spool size
- ORDER BY sort is the main cost

### Common Mistakes

- Forgetting ORDER BY (required - error)
- Not handling NULL default when no previous/next row exists
- Using LAG/LEAD without PARTITION BY when data spans multiple groups
- Confusing LAG (previous) with LEAD (next) direction

### Follow-Up Questions

**Junior:**
1. What does LAG() do?
2. What happens if there's no previous row for LAG?

**Mid-level:**
1. How to calculate month-over-month growth using LAG?
2. LAG/LEAD vs self-join - performance differences?

**Senior-level:**
1. Use LEAD to find the next occurrence of a specific event pattern.
2. Explain how the window spool supports LAG/LEAD's random access pattern.

### FAANG-Level Deep Dive

LAG/LEAD use the Window Spool with positional access. The spool stores rows in a worktable with an index on the window's ordering. LAG(N) performs an index seek to find the row at current position - N. This is more efficient than self-joins because it's a single spool access. At FAANG scale, LAG/LEAD are preferred over self-joins for time-series analysis.

### Explain Like I'm 7

LAG is like looking at the person in front of you in line to see what they're holding. LEAD is like looking at the person behind you. You don't need to leave your spot to see what's ahead or behind.

</details>

---

## Q32: SUM/AVG OVER()

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SUM/AVG OVER() calculates running or windowed aggregates without GROUP BY. With ORDER BY, it computes running totals/cumulative averages. With PARTITION BY, it resets per group. The window frame (ROWS/RANGE) defines which rows are included in the calculation.

### Detailed Explanation

- **What it is:** Window aggregate functions that compute SUM/AVG over a defined window of rows.
- **Why it exists:** Enables running totals, moving averages, and per-group subtotals alongside detail rows.
- **What problem it solves:** Avoids self-joins and subqueries for cumulative calculations.
- **When to use it:** Running totals, moving averages, group subtotals, year-to-date calculations.
- **When NOT to use it:** When you need grouped results only (use GROUP BY). When window is unbounded and data is huge (spool may overflow).

### Internal Working

The window aggregate operator uses a Segment and Sequence Project plan. For running totals with ROWS UNBOUNDED PRECEDING, it accumulates values sequentially. For RANGE frames, it tracks distinct ORDER BY values.

### Step-by-Step Execution

1. Sort data by PARTITION BY + ORDER BY
2. For each row, compute aggregate over the window frame
3. Window frame defined by ROWS/RANGE between bounds
4. Output row with aggregate value

### Real-World Example

Running total of sales by day, moving average of stock prices.

### SQL Example

```sql
-- Running total (default: RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
SELECT order_date, order_total,
       SUM(order_total) OVER (ORDER BY order_date) AS running_total,
       AVG(order_total) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg_7days
FROM orders;

-- Partitioned running total (resets per customer)
SELECT customer_id, order_date, order_total,
       SUM(order_total) OVER (PARTITION BY customer_id ORDER BY order_date) AS customer_running_total
FROM orders;

-- Moving average: 3-day centered
SELECT order_date, amount,
       AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS centered_ma_3
FROM daily_sales;
```

### Performance Considerations

- ROWS UNBOUNDED PRECEDING is efficient (sequential accumulation)
- RANGE BETWEEN is more expensive (must track distinct values)
- Moving windows with large frames require more spool memory
- Batch mode in SQL Server 2019+ accelerates window aggregates

### Common Mistakes

- Forgetting ORDER BY when computing running totals (SUM OVER = total sum, not running)
- Confusing ROWS and RANGE default behavior
- Using large window frames on huge datasets without considering memory
- Not realizing SUM OVER with ORDER BY without frame defaults to RANGE (not ROWS)

### Follow-Up Questions

**Junior:**
1. What does SUM(salary) OVER (ORDER BY emp_id) compute?
2. Running total vs total sum difference?

**Mid-level:**
1. ROWS vs RANGE default behavior difference?
2. How to compute a 7-day moving average?

**Senior-level:**
1. Compare window aggregate performance vs self-join for running totals.
2. Explain batch mode window aggregate in SQL Server 2019+.

### FAANG-Level Deep Fix

The default window frame (RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) includes ALL rows with the same ORDER BY value as the current row. This means ties get the same running total value. ROWS BETWEEN ... uses physical rows, giving sequential behavior. At FAANG scale, ROWS is preferred for running totals to avoid the confusion and overhead of RANGE.

### Explain Like I'm 7

SUM OVER is like keeping a running total on a calculator as you read down a list of numbers. You see each number and the running total so far. AVG OVER is like constantly recalculating the average as new numbers come in.

</details>

---

## Q33: ROWS vs RANGE vs GROUPS

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

ROWS, RANGE, and GROUPS define window frame boundaries. ROWS uses physical row positions (exact count). RANGE uses logical values (inclusive within ORDER BY value). GROUPS groups ties together. Default is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. ROWS is most common and efficient.

### Detailed Explanation

- **What it is:** Three frame specifications for window functions: ROWS (physical), RANGE (logical/value-based), GROUPS (tie-based).
- **Why they exist:** Different use cases need different inclusion semantics.
- **What problem they solve:** ROWS for exact row counts; RANGE for including ties; GROUPS for grouping ties as units.
- **When to use it:** ROWS for moving averages (exact window); RANGE for running totals including ties; GROUPS for tie-grouped calculations.
- **When NOT to use it:** RANGE on large datasets (expensive due to duplicate tracking). GROUPS when not dealing with ties.

### Internal Working

- ROWS: Track position counter. Include exactly N rows before/after.
- RANGE: Track distinct ORDER BY values. Include all rows with same ORDER BY value.
- GROUPS: Track groups of identical ORDER BY values. Include N groups before/after.

### Step-by-Step Execution

Data: salaries [50, 50, 60, 70, 70, 80]
Running SUM OVER (ORDER BY salary): 
- ROWS: 50, 100, 160, 230, 300, 380
- RANGE: 100, 100, 160, 300, 300, 380 (ties get same sum)
- GROUPS: 100, 100, 160, 300, 300, 380

### Real-World Example

Running total where ties should account for all tied employees before continuing.

### SQL Example

```sql
SELECT salary,
       SUM(salary) OVER (ORDER BY salary ROWS UNBOUNDED PRECEDING) AS rows_running,
       SUM(salary) OVER (ORDER BY salary RANGE UNBOUNDED PRECEDING) AS range_running,
       SUM(salary) OVER (ORDER BY salary GROUPS UNBOUNDED PRECEDING) AS groups_running
FROM employees;
```

### Performance Considerations

- ROWS is most efficient (simple counter, no duplicate tracking)
- RANGE requires tracking distinct ORDER BY values (more memory)
- GROUPS requires group detection overhead
- Default is RANGE (surprising for many developers)
- Always specify ROWS explicitly for predictable behavior and performance

### Common Mistakes

- Not knowing default frame is RANGE (not ROWS)
- Using RANGE expecting ROWS behavior
- Forgetting that RANGE with ties gives non-additive running totals
- Not specifying frame at all (leaving default behavior)

### Follow-Up Questions

**Junior:**
1. What is the default window frame?
2. Difference between ROWS and RANGE?

**Mid-level:**
1. With ties in ORDER BY, how do ROWS and RANGE differ?
2. When would you use GROUPS over RANGE?

**Senior-level:**
1. Design a query needing GROUPS that cannot be expressed with ROWS or RANGE.
2. Explain the performance implications of RANGE on large datasets.

### FAANG-Level Deep Dive

The RANGE frame requires the optimizer to track "peers" - rows with the same ORDER BY value. This adds an extra sort/hash to identify distinct ORDER BY values. The Segment operator splits data into segments where ORDER BY value changes. SQL Server implements this via the Sequence Project operator with different window frame modes. At large scale, RANGE frames on high-cardinality columns behave like ROWS (no duplicates), making RANGE unnecessary overhead. Always use ROWS explicitly.

### Explain Like I'm 7

ROWS: "Give me exactly 5 people before me." RANGE: "Give me everyone who has the SAME score as me, plus anyone before." GROUPS: "Give me everyone in the same score group, plus the groups before."

</details>

---

## Q34: Window Function Order of Execution

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Window functions execute after WHERE, GROUP BY, and HAVING, but before ORDER BY. This is why you cannot reference window functions in WHERE - they haven't been computed yet. They are computed in the SELECT phase (or the final processing phase of the query).

### Detailed Explanation

- **What it is:** The logical query processing order: FROM -> WHERE -> GROUP BY -> HAVING -> WINDOW -> SELECT -> DISTINCT -> ORDER BY -> TOP/OFFSET.
- **Why it exists:** Window functions need access to the final row set before ordering and pagination.
- **What problem it solves:** Determines what data window functions can access (no WHERE filters, yes GROUP BY aggregates).
- **When it matters:** Filtering on window results requires wrapping in a subquery/CTE. Aggregating window results requires nesting.
- **What to remember:** WHERE cannot filter on window function results. ORDER BY can reference window function aliases.

### Internal Working

The optimizer processes window functions in the Sequence Project phase, after all filtering and grouping, but before sort (ORDER BY) and top.

### Step-by-Step Execution

1. FROM + JOINs: Get source data
2. WHERE: Filter rows
3. GROUP BY: Group and aggregate
4. HAVING: Filter groups
5. Window functions: Compute over remaining rows
6. SELECT: Compute expressions and aliases
7. DISTINCT: Remove duplicates
8. ORDER BY: Sort final result
9. TOP/OFFSET-FETCH: Limit rows

### Real-World Example

Need to find the top 3 products per category by sales. Can't use ROW_NUMBER in WHERE. Must use subquery/CTE.

### SQL Example

```sql
-- WRONG: Can't use window function in WHERE
SELECT product_id, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) AS rn
FROM products
WHERE rn <= 3;  -- Error: Invalid column name

-- CORRECT: Wrap in subquery/CTE
WITH ranked AS (
    SELECT product_id, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) AS rn
    FROM products
)
SELECT * FROM ranked WHERE rn <= 3;

-- Can reference in ORDER BY
SELECT product_id, sales,
       ROW_NUMBER() OVER (ORDER BY sales DESC) AS rn
FROM products
ORDER BY rn;
```

### Performance Considerations

- Window functions process entire filtered result set (can't use indexes to limit rows)
- They add a spool/sort operator after all filtering
- Moving filters into a CTE/subquery that feeds the window function helps
- Consider indexed views for pre-computed window results

### Common Mistakes

- Trying to filter on window function in WHERE
- Expecting window functions to respect ORDER BY from outer query
- Not realizing window functions execute after GROUP BY (aggregates are available)
- Using DISTINCT after window functions unnecessarily

### Follow-Up Questions

**Junior:**
1. Can you use window functions in WHERE clause?
2. When are window functions computed in query order?

**Mid-level:**
1. Why can't you filter on ROW_NUMBER in WHERE?
2. How to filter on window function results?

**Senior-level:**
1. Design a query that computes window functions before some filters to improve performance.
2. Explain how the optimizer can reorder window function execution relative to other operations.

### FAANG-Level Deep Dive

The logical query processing order constrains optimization. However, the physical optimizer CAN push filters before window function computation in some cases (predicate pushdown through window functions). SQL Server's window function implementation uses the Segment, Sequence Project, and Window Spool operators. Understanding the Window Spool (disk-based) vs In-Memory spool helps in tuning large window function queries.

### Explain Like I'm 7

Window functions are computed AFTER we've decided which rows to keep (WHERE) but BEFORE we sort the final answer (ORDER BY). It's like deciding who's on the team first, then assigning jersey numbers, then lining up by height.

</details>

---

## Q35: FIRST_VALUE / LAST_VALUE / NTH_VALUE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

FIRST_VALUE returns the first value in an ordered window partition. LAST_VALUE returns the last value (but default frame is problematic). NTH_VALUE returns the Nth value. These are used for comparing current row to boundaries of the window.

### Detailed Explanation

- **What it is:** Window functions that access specific positional values within a window frame.
- **Why it exists:** Provides access to boundary values without self-joins.
- **What problem it solves:** Comparing current value to first/last in group, identifying extremes per partition.
- **When to use it:** Show first order date per customer, compare current salary to starting salary, find the second highest value.
- **When NOT to use it:** When simple MIN/MAX suffices. When ROW_NUMBER + self-join is clearer. LAST_VALUE with default frame returns unexpected results.

### Internal Working

Same window spool mechanism. FIRST_VALUE returns the row at the beginning of the frame. LAST_VALUE returns the row at the end of the frame. NTH_VALUE returns the Nth row from the beginning.

### Step-by-Step Execution

1. Sort by ORDER BY within partition
2. Define window frame (ROWS/RANGE)
3. FIRST_VALUE: return first row in frame
4. LAST_VALUE: return last row in frame
5. NTH_VALUE(N): return Nth row from start of frame

### Real-World Example

Show current salary vs first salary for each employee in their department.

### SQL Example

```sql
-- FIRST_VALUE and LAST_VALUE (note: LAST_VALUE needs explicit frame)
SELECT employee_id, department_id, salary, hire_date,
       FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY hire_date) AS first_salary,
       LAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY hire_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_salary,
       NTH_VALUE(salary, 2) OVER (PARTITION BY department_id ORDER BY hire_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS second_hired_salary
FROM employees;

-- Compare current price to first price of the year
SELECT product_id, sale_date, price,
       FIRST_VALUE(price) OVER (PARTITION BY product_id, YEAR(sale_date) ORDER BY sale_date) AS first_price_this_year,
       price - FIRST_VALUE(price) OVER (PARTITION BY product_id, YEAR(sale_date) ORDER BY sale_date) AS price_change
FROM product_prices;
```

### Performance Considerations

- Same window spool overhead as other window functions
- LAST_VALUE with UNBOUNDED FOLLOWING requires reading all rows in partition before computing
- NTH_VALUE with large N may be less efficient (skip-ahead available)
- FIRST_VALUE is typically cheaper than LAST_VALUE

### Common Mistakes

- LAST_VALUE without ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING (returns current row's value)
- Confusing FIRST_VALUE with MIN (MIN is aggregate across entire group, FIRST_VALUE is positional)
- Forgetting that NTH_VALUE counts from beginning of frame

### Follow-Up Questions

**Junior:**
1. What does FIRST_VALUE return?
2. Why does LAST_VALUE sometimes give unexpected results?

**Mid-level:**
1. Explain LAST_VALUE's default frame issue.
2. FIRST_VALUE vs MIN - when are they different?

**Senior-level:**
1. Use NTH_VALUE to find the third sale per customer efficiently.
2. Compare FIRST_VALUE approach with ROW_NUMBER + self-join.

### FAANG-Level Deep Dive

LAST_VALUE's default frame (RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) means it returns the current row's value for most rows - not the last value in the partition. This is because the window frame expands as rows are processed. To get the true last value, you must explicitly specify ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING. This is one of the most commonly misunderstood aspects of window functions in interviews.

### Explain Like I'm 7

FIRST_VALUE is like saying "what did the first person in line get?" LAST_VALUE is "what did the last person get?" But you have to be careful with LAST_VALUE - it's like asking "what does the last person SO FAR have?" unless you specify you want the very last person in the whole line.

</details>

---

# Topic 6: Indexing Strategy (Q36-Q43)

---

## Q36: Clustered Index

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A clustered index determines the physical order of data in a table. There can be only one per table. The leaf level contains the actual data rows. Creates a B-tree structure for fast data retrieval by key values. The clustered index key becomes the row locator for all nonclustered indexes.

### Detailed Explanation

- **What it is:** An index that sorts and stores the data rows physically in the table based on the key columns.
- **Why it exists:** Provides fastest data access for range queries and single-row lookups by key.
- **What problem it solves:** Eliminates separate lookup from index to data (data is the index leaf).
- **When to use it:** Primary key lookups, range queries (BETWEEN, >, <), ORDER BY on key column, covering many columns.
- **When NOT to use it:** On wide keys (all nonclustered indexes include the key). On volatile columns (frequent updates cause page splits). On GUID columns without NEWSEQUENTIALID() (fragmentation).

### Internal Working

B-tree structure: root node -> intermediate nodes -> leaf nodes (data pages). Pages are linked in a doubly-linked list for range scans. New rows inserted in key order may cause page splits (50/50 or 90/10 depending on fill factor).

### Step-by-Step Execution (Index Seek)

1. Navigate B-tree from root page
2. Follow pointers through intermediate pages
3. Reach leaf page containing the data row
4. Return the row

### Real-World Example

Orders table with clustered index on order_id. SELECT * FROM orders WHERE order_id = 12345 performs a single seek to the data page.

### SQL Example

```sql
-- Create clustered index (automatically with PRIMARY KEY)
CREATE TABLE orders (
    order_id INT PRIMARY KEY CLUSTERED,  -- Clustered index on order_id
    order_date DATETIME2,
    customer_id INT
);

-- Or explicitly
CREATE CLUSTERED INDEX IX_Orders_OrderDate ON orders(order_date);

-- No other clustered index can be created
CREATE CLUSTERED INDEX IX_Orders_Customer ON orders(customer_id);  -- Error!
```

### Performance Considerations

- Fastest read for key lookups (single seek to data)
- Range scans are efficient (pages linked together)
- INSERT in key order is efficient; random inserts cause page splits
- UPDATE of key column may require row movement (expensive)
- Choose narrow, static, ever-increasing keys (IDENTITY, SEQUENCE)

### Common Mistakes

- Using GUID as clustered index key (fragmentation, slow inserts)
- Creating clustered index on frequently updated columns
- Making clustered index key too wide (wider nonclustered indexes)
- Not having a clustered index (heap) for tables that are frequently truncated/rebuild

### Follow-Up Questions

**Junior:**
1. How many clustered indexes can a table have?
2. What is the difference between clustered and nonclustered index?

**Mid-level:**
1. Compare heap vs clustered index for INSERT-heavy tables.
2. How does fill factor affect clustered index performance?

**Senior-level:**
1. Design an indexing strategy where the clustered index differs from the primary key.
2. Explain how the clustered index key choice affects nonclustered index size and performance.

### FAANG-Level Deep Dive

The clustered index key is included in every nonclustered index as the row locator. A 4-byte INT key vs 16-byte GUID key vs 200-byte composite key directly impacts ALL nonclustered index sizes. At FAANG scale, choosing the narrowest possible clustered key saves terabytes of storage. Also, insert pattern matters: sequential keys avoid page splits and log contention; random keys (GUIDs) cause page splits, fragmentation, and increased IO.

### Explain Like I'm 7

A clustered index is like a dictionary where words (data) are in alphabetical order. You can quickly find "apple" because you know it's near the beginning. You can only have ONE clustered index because the book can only be sorted one way.

</details>

---

## Q37: Nonclustered Index

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A nonclustered index is a separate B-tree structure from the data. The leaf level contains index key columns plus the row locator (clustered index key or RID). A table can have up to 999 nonclustered indexes. They speed up queries but add overhead to DML operations.

### Detailed Explanation

- **What it is:** A secondary index structure separate from the data pages.
- **Why it exists:** Provides fast access to data based on columns other than the clustered key.
- **What problem it solves:** Accelerates queries that filter/sort by non-primary-key columns.
- **When to use it:** Frequently queried columns in WHERE, JOIN, ORDER BY. Foreign key columns.
- **When NOT to use it:** Columns with low selectivity (gender, status with 2-3 values). Tables with heavy INSERT/UPDATE/DELETE workloads (too many indexes slow DML).

### Internal Working

B-tree structure separate from data. Leaf pages contain index key + row locator. Row locator = clustered index key (if table has clustered index) or RID (if heap). To retrieve non-key columns, a Key Lookup is needed (expensive).

### Step-by-Step Execution (Nonclustered Seek + Key Lookup)

1. Navigate nonclustered B-tree to leaf page
2. Find the row locator (clustered key value)
3. Navigate clustered index to find the data row
4. Return requested columns

### Real-World Example

Customers table with nonclustered index on email. Querying WHERE email = 'a@b.com' seeks the email index, then looks up the data page.

### SQL Example

```sql
-- Nonclustered index on foreign key (critical for JOIN performance)
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID ON orders(customer_id);

-- Composite nonclustered index with included columns
CREATE NONCLUSTERED INDEX IX_Products_CategoryPrice 
ON products(category_id, price)
INCLUDE (product_name);

-- Filtered nonclustered index
CREATE NONCLUSTERED INDEX IX_Orders_Active 
ON orders(order_id, order_date)
WHERE order_status = 'Pending';
```

### Performance Considerations

- Seek is fast (3-5 IOs); Key Lookup adds 3-5 more IOs
- Covering indexes eliminate Key Lookup (include all needed columns)
- Too many indexes slow INSERT/UPDATE/DELETE (each index must be maintained)
- Each index adds ~5-10% overhead on DML per index
- Drop unused indexes (use sys.dm_db_index_usage_stats)

### Common Mistakes

- Over-indexing (every column has an index - slows DML)
- Not creating indexes on FK columns (table scans on JOIN)
- Creating wide composite indexes when narrower ones would suffice
- Not monitoring unused indexes

### Follow-Up Questions

**Junior:**
1. How many nonclustered indexes can a table have?
2. What is a Key Lookup?

**Mid-level:**
1. Explain the trade-off between index count and DML performance.
2. How to identify unused indexes?

**Senior-level:**
1. Design an indexing strategy for a high-write OLTP table with 50 columns and 10 query patterns.
2. Explain how nonclustered index maintenance works during INSERT (page splits, PFS updates).

### FAANG-Level Deep Dive

Each nonclustered index on a table with a clustered index stores the clustered key as the row locator. If the clustered key is 4 bytes vs 200 bytes, the index leaf pages are dramatically different sizes. At FAANG scale, index tuning saves millions in hardware costs. The concept of "index intersection" (SQL Server using multiple nonclustered indexes for one query) is an advanced optimization that can reduce the need for wide covering indexes.

### Explain Like I'm 7

A nonclustered index is like the index at the back of a textbook. It tells you what page (row location) to go to for a topic. The actual content (data) is elsewhere. You have to look up the topic in the index, then flip to the right page.

</details>

---

## Q38: Covering Index

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A covering index includes ALL columns needed by a query, eliminating the need for Key Lookups. The query is fully satisfied from the index alone. Use INCLUDE for non-key, non-filtered columns to keep the index key narrow. Covering indexes are the single most impactful performance tuning technique.

### Detailed Explanation

- **What it is:** An index that contains all columns referenced in a query (SELECT, WHERE, JOIN, ORDER BY).
- **Why it exists:** Key Lookups are expensive (random I/O). Covering indexes eliminate them.
- **What problem it solves:** Transforms "Index Seek + Key Lookup" into "Index Seek" (much faster).
- **When to use it:** For frequent, critical queries. Queries that cover few columns. OLTP queries with narrow result sets.
- **When NOT to use it:** When covering would make the index too wide (many columns). For queries that return most columns anyway (clustered index scan is better).

### Internal Working

The index leaf pages contain all needed columns (key + included). The query's columns are satisfied at the nonclustered index level. No navigation to clustered index or heap is needed.

### Step-by-Step Execution

1. Seek/Scan the covering nonclustered index
2. All requested columns found in index leaf
3. Return results - no additional lookups
4. Execution plan shows "Index Seek" (non-key lookup), not "Key Lookup"

### Real-World Example

Query: SELECT order_id, order_date, status FROM orders WHERE customer_id = 123.
Covering index: ON orders(customer_id) INCLUDE (order_date, status).

### SQL Example

```sql
-- Without covering index: Key Lookup needed
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID ON orders(customer_id);
-- Query plan: Index Seek + Key Lookup

-- With covering index: no Key Lookup
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_Covering 
ON orders(customer_id) 
INCLUDE (order_date, order_total, order_status);
-- Query plan: Index Seek (only)

-- Narrow key, wide INCLUDE
CREATE NONCLUSTERED INDEX IX_Products_Category_Covering
ON products(category_id)
INCLUDE (product_name, price, description, manufacturer, created_date);
```

### Performance Considerations

- Eliminates Key Lookup (saves 3-5 random IOs per row)
- INCLUDE columns don't count toward index key width limit (900 bytes in SQL Server)
- Wider indexes use more disk space and memory
- Too wide = index scan vs narrow seek trade-off
- Consider index intersection for very wide covering needs

### Common Mistakes

- Making all columns key columns instead of INCLUDE
- Creating overly wide covering indexes (defeats purpose)
- Forgetting covering indexes still need maintenance on DML
- Creating covering indexes for poorly written queries (fix the query first)

### Follow-Up Questions

**Junior:**
1. What makes an index "covering"?
2. What's the difference between key and INCLUDE columns?

**Mid-level:**
1. How does INCLUDE differ from key columns in terms of index structure?
2. When would you NOT create a covering index even if it helps a query?

**Senior-level:**
1. Design covering indexes for 5 critical OLTP queries on a 50-column table.
2. Explain index intersection - how SQL Server can use two indexes to cover a query.

### FAANG-Level Deep Dive

Covering indexes with INCLUDE columns store non-key columns at the leaf level only (not in intermediate nodes). This keeps the B-tree narrow (faster navigation) while still covering queries. SQL Server's Index Intersection can combine multiple indexes to cover a query - using one index for seek and another for included columns via a hash match. Understanding when index intersection happens vs when you need a true covering index is advanced optimization.

### Explain Like I'm 7

A covering index is like a cheat sheet that has all the answers. You don't need to look back at the textbook. The index page itself has what you need. Regular index: "Go to page 42." Covering index: "Here's the answer right here."

</details>

## Q39: Filtered Index

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A filtered index is a nonclustered index with a WHERE clause that indexes only a subset of rows. It is smaller, faster to maintain, and provides more efficient access for queries that target a specific subset of data (e.g., active customers, pending orders).

### Detailed Explanation

- **What it is:** A nonclustered index defined with a filter predicate (WHERE clause).
- **Why it exists:** Many queries target a specific subset of rows. Indexing all rows wastes space and maintenance effort.
- **What problem it solves:** Reduces index size, improves query performance for subset queries, enables unique constraint on filtered subsets.
- **When to use it:** Queries with constant WHERE filters (status = 'Active'), partial unique constraints (active-only unique), large tables with skewed data distribution.
- **When NOT to use it:** When the filter predicate varies (query parameters change). When most rows satisfy the filter. On tables with no clear subset pattern.

### Internal Working

The filtered index stores only rows that satisfy the WHERE condition. The filter predicate is stored in the index metadata. The optimizer uses this when the query's WHERE clause matches or subsumes the index filter.

### Step-by-Step Execution

1. Query submitted with WHERE status = 'Pending'
2. Optimizer looks for matching indexes
3. Finds filtered index ON status WHERE status IN ('Pending', 'Processing')
4. The filter is a superset of the query predicate
5. Optimizer chooses this filtered index for an Index Seek

### Real-World Example

An e-commerce system: most queries target 'Pending' or 'Shipped' orders, not all 20M historical rows. Filtered index on active statuses.

### SQL Example

```sql
-- Filtered index: only active customers
CREATE NONCLUSTERED INDEX IX_Customers_Active
ON customers(customer_id, email)
INCLUDE (first_name, last_name)
WHERE status = 'A';

-- Partial unique constraint: only active customers need unique email
CREATE UNIQUE NONCLUSTERED INDEX UQ_Customers_Active_Email
ON customers(email)
WHERE status = 'A';

-- Filtered index for pending orders
CREATE NONCLUSTERED INDEX IX_Orders_Pending
ON orders(order_date, order_total)
INCLUDE (customer_id)
WHERE order_status IN ('Pending', 'Processing');

-- Query that uses filtered index
SELECT order_id, order_date, order_total
FROM orders
WHERE order_status = 'Pending' AND order_date >= '2024-01-01';
```

### Performance Considerations

- Much smaller than full-table index (saves space, memory, I/O)
- All index maintenance operations are cheaper (fewer rows)
- Statistics are generated only on the filtered subset (more accurate)
- Filtered index statistics can cause parameter sniffing issues
- Filter must be constant (can't use variables in filter definition)

### Common Mistakes

- Using non-SARGable expressions in filter (WHERE YEAR(date) = 2024)
- Creating filtered indexes that overlap (waste)
- Forgetting that filtered indexes don't automatically cover queries with additional predicates
- Not updating statistics on filtered indexes separately

### Follow-Up Questions

**Junior:**
1. What is a filtered index?
2. Can a filtered index be unique?

**Mid-level:**
1. When would you use a filtered index vs a full index?
2. How does the optimizer recognize when a filtered index can be used?

**Senior-level:**
1. Design filtered indexes for a multi-tenant table with tenant_id filter.
2. Explain filtered index statistics and parameter sniffing issues.

### FAANG-Level Deep Dive

Filtered indexes are particularly powerful for "active dataset" scenarios where only recent/sctive data is queried. At FAANG scale, time-series data (events, logs) uses filtered indexes on hot partitions, dramatically reducing index maintenance overhead. The filter predicate must be in the WHERE clause exactly or as a superset for the optimizer to use it. The optimizer uses the filter predicate for constraint-based simplification (trivial plan matching).

### Explain Like I'm 7

A filtered index is like making a list of only the kids who are present today, instead of listing every student ever enrolled. The list is smaller, easier to check, and faster to update.

</details>

---

## Q40: Columnstore Index

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A columnstore index stores data column-by-column rather than row-by-row, using column segments that are compressed. It is designed for data warehousing and analytics workloads with large scans and aggregations. Provides 10x compression and 10-100x query performance improvements for analytical queries.

### Detailed Explanation

- **What it is:** An index that stores each column separately in compressed segments (typically ~1M rows each).
- **Why it exists:** Rowstore is inefficient for analytics (reads entire rows when only few columns needed).
- **What problem it solves:** Dramatically reduces I/O (only read needed columns), enables batch processing (SIMD), provides high compression.
- **When to use it:** Data warehouse fact tables, large historical tables, aggregation-heavy queries, star-join queries.
- **When NOT to use it:** OLTP workloads with singleton lookups (rowstore is better). Tables with frequent singleton INSERT/UPDATE/DELETE (rowstore is better for point operations).

### Internal Working

Data is organized into rowgroups (~1M rows). Each column in a rowgroup is a compressed segment. SQL Server uses batch mode execution (SIMD-based vector processing). Deleted rows are tracked in a delete bitmap. Inserts go to a delta store (rowstore) and are merged via tuple mover.

### Step-by-Step Execution

1. Query requests specific columns
2. Only segments for those columns are read
3. Segments are decompressed if needed (most operations work on compressed data)
4. Batch mode processes 900-1024 rows at a time via SIMD
5. Results aggregated/joined in batch mode

### Real-World Example

A 1TB sales fact table. Count of sales by year/month with columnstore: reads 2 columns (date, amount) instead of all 50 columns, ~10x compression, batch mode processing.

### SQL Example

```sql
-- Create clustered columnstore index
CREATE CLUSTERED COLUMNSTORE INDEX CCI_Sales ON sales_fact;

-- Create nonclustered columnstore index (on rowstore table)
CREATE NONCLUSTERED COLUMNSTORE INDEX NCCSI_Sales ON sales_fact;

-- Query that benefits from columnstore
SELECT YEAR(order_date) AS order_year,
       MONTH(order_date) AS order_month,
       SUM(order_amount) AS total_sales,
       COUNT(*) AS order_count
FROM sales_fact
WHERE order_date >= '2023-01-01'
GROUP BY YEAR(order_date), MONTH(order_date);

-- Columnstore with rowstore for OLTP (hybrid)
CREATE TABLE orders_hybrid (
    order_id INT PRIMARY KEY NONCLUSTERED,
    order_date DATETIME2,
    customer_id INT,
    order_total DECIMAL(12,2),
    INDEX CCI_Orders CLUSTERED COLUMNSTORE
);
```

### Performance Considerations

- Batch mode: 2-10x faster than row mode for scans/aggregations
- Compression: 5-20x (reduces I/O and storage costs)
- Segment elimination: skip rowgroups based on min/max metadata
- Delta store for small inserts (converted to compressed rowgroups by tuple mover)
- Columnstore on hot tables: use incremental statistics

### Common Mistakes

- Using columnstore for OLTP (point lookups are slower)
- Not maintaining rowgroups (too many small rowgroups reduces efficiency)
- Not rebuilding columnstore to merge delta store
- Expecting singleton INSERT/UPDATE/DELETE performance

### Follow-Up Questions

**Junior:**
1. How does columnstore differ from rowstore?
2. What is batch mode execution?

**Mid-level:**
1. Explain rowgroups, segments, and delta store.
2. When would you use columnstore vs rowstore?

**Senior-level:**
1. Design a hybrid table with both columnstore and B-tree indexes for mixed OLTP/analytics.
2. Explain segment elimination and how min/max statistics work.

### FAANG-Level Deep Dive

Columnstore indexes use Vertipaq compression (dictionary + run-length encoding). Batch mode processes rows in vectors using SIMD instructions (SSE/AVX). SQL Server 2019 introduced batch mode on rowstore (for queries that access rowstore but benefit from batch mode). Segment elimination uses min/max values stored per segment - a query filtering on date ranges can skip entire rowgroups. At FAANG scale, columnstore is the foundation for real-time analytics (SQL Server 2022 enhanced with CDC to columnstore).

### Explain Like I'm 7

Rowstore is like a file cabinet where each folder (row) has all info about one person. Columnstore is like a stack of cards for each thing - one stack for ages, one for heights, etc. If you only need ages, you only grab the age stack.

</details>

---

## Q41: Index Maintenance

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Index maintenance involves rebuilding or reorganizing indexes to combat fragmentation, update statistics, and reclaim space. Fragmentation > 30%: ALTER INDEX REBUILD. Fragmentation 5-30%: ALTER INDEX REORGANIZE. Maintenance should be scheduled during low-usage windows.

### Detailed Explanation

- **What it is:** Regularly scheduled operations to defragment indexes and update statistics.
- **Why it exists:** Over time, DML operations fragment indexes (page splits) making scans less efficient.
- **What problem it solves:** Maintains query performance by keeping indexes physically organized.
- **When to use it:** Scheduled maintenance windows. After large data loads. When fragmentation exceeds thresholds.
- **When NOT to use it:** On tables that are truncated and reloaded daily (rebuild after load instead). On busy OLTP systems during business hours.

### Internal Working

- REORGANIZE: Defragments leaf level by physically reordering pages (online, minimal locking)
- REBUILD: Drops and recreates the index (offline by default, ONLINE option in Enterprise)
- Both update statistics as part of the operation

### Step-by-Step Execution

REORGANIZE:
1. Compact leaf pages using FILLFACTOR
2. Reorder pages logically (not physically)
3. Compact LOB columns
4. Online operation (minimal blocking)

REBUILD (default offline):
1. Allocate new pages
2. Copy data in sorted order
3. Deallocate old pages
4. SORT_IN_TEMPDB option uses tempdb for sort
5. Offline - Sch-M lock

### Real-World Example

Monthly maintenance window: check fragmentation for all indexes > 5%, REORGANIZE 5-30%, REBUILD > 30%.

### SQL Example

```sql
-- Check fragmentation
SELECT OBJECT_NAME(ips.object_id) AS table_name,
       i.name AS index_name,
       ips.avg_fragmentation_in_percent,
       ips.page_count
FROM sys.dm_db_index_physical_stats(
    DB_ID(), NULL, NULL, NULL, 'LIMITED') ips
INNER JOIN sys.indexes i ON ips.object_id = i.object_id 
    AND ips.index_id = i.index_id
WHERE ips.avg_fragmentation_in_percent > 5
ORDER BY ips.avg_fragmentation_in_percent DESC;

-- Reorganize (online, 5-30% fragmentation)
ALTER INDEX IX_Orders_CustomerID ON orders REORGANIZE;

-- Rebuild (offline, > 30% fragmentation)
ALTER INDEX IX_Orders_CustomerID ON orders REBUILD;

-- Rebuild with options
ALTER INDEX IX_Orders_CustomerID ON orders REBUILD
WITH (FILLFACTOR = 90, SORT_IN_TEMPDB = ON, ONLINE = ON);

-- Update statistics without rebuild
UPDATE STATISTICS orders IX_Orders_CustomerID WITH FULLSCAN;
```

### Performance Considerations

- REBUILD is fully logged (can fill transaction log)
- REBUILD is offline by default (blocks all access)
- ONLINE = ON requires Enterprise Edition
- SORT_IN_TEMPDB = ON moves sort load to tempdb (faster if tempdb on separate drives)
- Consider partition-level rebuild for large tables

### Common Mistakes

- Rebuilding indexes too frequently (waste of resources)
- Not monitoring fragmentation (degraded performance over time)
- Rebuilding during business hours (causes downtime)
- Not rebuilding columnstore indexes (delta store grows)
- Not updating statistics separately from rebuild

### Follow-Up Questions

**Junior:**
1. What is index fragmentation?
2. What's the difference between REORGANIZE and REBUILD?

**Mid-level:**
1. What fragmentation threshold triggers REBUILD vs REORGANIZE?
2. How does ONLINE index rebuild work?

**Senior-level:**
1. Design an index maintenance strategy for a 24/7 OLTP system.
2. Explain page split anatomy and how fill factor affects fragmentation.

### FAANG-Level Deep Dive

SQL Server's ONLINE index rebuild uses row versioning - both old and new structures coexist during the operation. Phase 1 builds the new index as a separate structure while tracking concurrent DML in a log. Phase 2 (brief Sch-M) applies the log and switches. At FAANG scale, index maintenance is done at the partition level - only rebuild the hot partition, not the entire index. Partition-switching archives cold data before rebuild.

### Explain Like I'm 7

Index maintenance is like reorganizing your bookshelf. Over time, books get moved around and gaps form. REORGANIZE is like pushing books together to fill gaps. REBUILD is like taking all books off, sorting them, and putting them back perfectly.

</details>

---

## Q42: Index Key Selection

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Choose index key columns based on: equality predicates first (most selective), then range predicates, then ORDER BY, then INCLUDE columns. Key columns should be narrow, static, and have high selectivity. Order of columns in a composite index matters for both performance and usability.

### Detailed Explanation

- **What it is:** The process of choosing which columns to include as key columns in an index and their order.
- **Why it exists:** Correct key order determines if the index can be used for seek, scan, or not at all.
- **What problem it solves:** Ensures indexes are usable by the most important queries.
- **When to consider:** When creating any index, always ask "what queries will use this?"
- **Key rules:** Leftmost leading column must be used in WHERE for seek. Equality columns first, then range/order columns. Most selective column first.

### Internal Working

The B-tree's structure determines seek capability. Only the leftmost prefix of the index key can be used for seeking. The index is sorted by key columns in order.

### Step-by-Step Execution

Seek on composite index (col1, col2, col3):
- WHERE col1 = @v1: Seek (optimal)
- WHERE col1 = @v1 AND col2 = @v2: Seek (better)
- WHERE col2 = @v2: Scan (can't seek - missing leading column)
- WHERE col1 = @v1 AND col3 = @v3: Seek on col1, then filter col3

### Real-World Example

Orders queried by customer_id (equality) and order_date (range). Index on (customer_id, order_date) enables seek.

### SQL Example

```sql
-- Good: equality first, then range
CREATE INDEX IX_Orders_CustomerDate ON orders(customer_id, order_date);

-- Bad: range first, then equality (can't seek on equality after range)
CREATE INDEX IX_Orders_DateCustomer ON orders(order_date, customer_id);

-- Best: most selective equality first
CREATE INDEX IX_Orders_CustomerStatusDate 
ON orders(customer_id, order_status, order_date);

-- For ORDER BY support without sorting
CREATE INDEX IX_Orders_Date_Customer ON orders(order_date, customer_id);
-- SELECT ... FROM orders WHERE customer_id = 1 ORDER BY order_date
-- This query can't use this index for both seek and ordered output

-- Better:
CREATE INDEX IX_Orders_Customer_Date ON orders(customer_id, order_date);
-- Seek on customer_id, output is already ordered by order_date
```

### Performance Considerations

- Leading column must be used in WHERE for seek
- More selective columns first (higher cardinality) reduces scan width
- Column order affects sorting requirement (ORDER BY matching)
- Adding columns to key increases index width (slower scans)
- Consider INCLUDE for non-key, non-filtered columns

### Common Mistakes

- Putting range column before equality column
- Not considering ORDER BY when designing column order
- Adding too many columns to key (use INCLUDE)
- Not using the most selective column as leading column

### Follow-Up Questions

**Junior:**
1. What is the leading column?
2. Why does column order matter in composite indexes?

**Mid-level:**
1. Explain the leftmost prefix rule.
2. When would you put a less selective column first?

**Senior-level:**
1. Design indexes for a query with multiple equality, one range, an ORDER BY, and need for covering.
2. Explain how the optimizer uses index column order for both seek and ordered scan.

### FAANG-Level Deep Dive

SQL Server's optimizer can use an index even when the leading column isn't specified in WHERE - via Index Scan (full or partial). The optimizer also considers Index Intersection (using two indexes to satisfy a query). The "order by elimination" optimization occurs when the index key matches the ORDER BY clause, avoiding a sort operator. At FAANG scale, index column order is tuned to eliminate sorts in critical query paths.

### Explain Like I'm 7

Choosing index key columns is like organizing a phone book. You put last name first (most important), then first name. If someone asks for "Smith," you go right to the S section. If they asked for "John," you'd have to look through every page. The first column is the most important.

</details>

---

## Q43: Included Columns vs Key Columns

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Key columns participate in the B-tree structure - used for seeking, sorting, and uniqueness. Included columns are stored only at the leaf level - they can't be used for seeking but can cover queries without Key Lookups. Included columns don't count toward the 900-byte key width limit.

### Detailed Explanation

- **What it is:** Key columns are part of the index B-tree; included columns only at leaf level.
- **Why it exists:** Separating key and included columns keeps the B-tree narrow (faster navigation) while still covering queries.
- **What problem it solves:** Allows wide covering indexes without expanding the B-tree structure.
- **When to use included columns:** For non-searched columns that are only in SELECT or SELECT list.
- **When to use key columns:** For columns in WHERE, JOIN, ORDER BY, or uniqueness constraints.

### Internal Working

Key columns are stored at ALL levels of the B-tree (root, intermediate, leaf). Included columns are stored ONLY at the leaf level. This means key columns affect tree height; included columns don't.

### Step-by-Step Execution

Index: KEY (customer_id, order_date) INCLUDE (order_total, status)
Query: SELECT order_total, status FROM orders WHERE customer_id = 123 AND order_date = '2024-01-01'

1. Seek B-tree using customer_id and order_date keys
2. Reach leaf page
3. Read order_total and status from leaf (included columns)
4. No Key Lookup needed - query is covered

### Real-World Example

Orders query: SELECT order_id, order_total, status FROM orders WHERE customer_id = 123 ORDER BY order_date. Index: KEY (customer_id, order_date) INCLUDE (order_total, status).

### SQL Example

```sql
-- Without included columns (requires Key Lookup)
CREATE INDEX IX_Orders_Customer ON orders(customer_id);

-- With included columns (covering index, no Key Lookup)
CREATE INDEX IX_Orders_Customer_Covering 
ON orders(customer_id)
INCLUDE (order_date, order_total, order_status);

-- Composite key with included columns
CREATE INDEX IX_Orders_CustomerDate_Covering
ON orders(customer_id, order_date)
INCLUDE (order_total, order_status, shipping_address);

-- Key columns count toward 900-byte limit; included don't
-- KEY: VARCHAR(400) + VARCHAR(500) = 900 bytes (at limit)
-- INCLUDE: VARCHAR(2000) = 2000 bytes (okay)
```

### Performance Considerations

- Key columns: smaller set = narrower B-tree = more rows per page = faster seeks
- Included columns: no impact on B-tree depth, but increase leaf page size
- Too many included columns = larger leaf pages = fewer rows per page = slower scans
- Max key size: 900 bytes (SQL Server). Included columns: 8000 bytes (non-LOB) or unlimited (LOB)
- Statistics are created on key columns only (not included columns)

### Common Mistakes

- Making all columns key columns instead of using INCLUDE
- Not realizing included columns can't be used for seeking
- Adding LOB columns as included columns (performance impact)
- Forgetting that included columns still take space in the index leaf

### Follow-Up Questions

**Junior:**
1. Where are included columns stored in the index?
2. Can included columns be used in WHERE clause for seeking?

**Mid-level:**
1. Why does the 900-byte key limit not apply to included columns?
2. How do included columns affect index leaf page density?

**Senior-level:**
1. Design an index with optimal key/included split for a query with 12 columns, of which 3 are in WHERE and 2 in ORDER BY.
2. Explain how included columns interact with uniqueness constraints.

### FAANG-Level Deep Dive

The division between key and included columns is critical for B-tree performance. Key columns determine the tree's branching factor (rows per page). Adding a 100-byte column to the key reduces rows per page by ~50%, potentially doubling the tree height. Included columns have zero impact on tree height. At FAANG scale, the rule is: MINIMUM key columns to support seek/order, MAXIMUM included columns for covering.

### Explain Like I'm 7

Key columns are like the table of contents - they're in the front and help you find things fast. Included columns are like extra notes at the bottom of each page - they're only at the end of each section. Both help you find what you need, but the table of contents is more important for searching.

</details>

---

# Topic 7: Query Optimization (Q44-Q51)

---

## Q44: Execution Plans

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

An execution plan shows how the database engine will execute a query - which indexes are used, join algorithms, operator order, and estimated costs. The actual plan shows what happened; the estimated plan shows what the optimizer predicted. Reading plans is the primary skill for query tuning.

### Detailed Explanation

- **What it is:** A tree of operators showing the physical operations the engine performs to execute a query.
- **Why it exists:** Provides transparency into the optimizer's decisions and execution behavior.
- **What problem it solves:** Identifies performance bottlenecks (key lookups, scans, spills, expensive operators).
- **When to use it:** When tuning any slow query. Before and after index changes. To validate optimizer choices.
- **When NOT to use it:** For trivial queries (simple plans). When estimated plans alone are misleading (always check actual).

### Internal Working

Plan is compiled from the optimization memo. Each operator reads from one or more inputs, processes rows, and passes them up. Operators include: Clustered Index Scan/Seek, Key Lookup, Nested Loops, Hash Match, Merge Join, Sort, Spool, Compute Scalar, Stream Aggregate.

### Step-by-Step Execution

1. Read plan right-to-left, top-to-bottom
2. Each operator's cost is shown as % of total
3. Arrow width indicates row count
4. Look for expensive operators (large %)
5. Identify scans, lookups, spills, warnings

### Real-World Example

Slow query shows 80% cost on Key Lookup. Solution: add a covering index to eliminate the lookup.

### SQL Example

```sql
-- View estimated plan (before execution)
SET SHOWPLAN_XML ON;
SELECT ... -- Shows plan without executing

-- View actual plan (after execution)
SET STATISTICS XML ON;
SELECT ... -- Shows plan with actual row counts

-- Include actual plan in SSMS: Ctrl+M
-- Query Store: sys.query_store_plan

-- Live Query Statistics (2016+)
SELECT ... OPTION (QUERYTRACEON 7412);
```

### Performance Considerations

- Estimated plan cost is not always accurate (based on statistics)
- Actual plan shows rows vs estimates (cardinality estimation errors cause bad plans)
- Warnings indicate missing statistics, memory spills, or implicit conversions
- Look for: Key Lookup, Table Scan, Sort (on large input), Spill to TempDB

### Common Mistakes

- Only looking at estimated plans (can be misleading)
- Confusing estimated and actual row counts
- Not reading plans right-to-left (operator order)
- Ignoring warnings in the plan (yellow triangles)

### Follow-Up Questions

**Junior:**
1. How do you view an execution plan?
2. What do the arrow widths represent?

**Mid-level:**
1. Difference between estimated and actual plan?
2. What are common plan warnings and their meaning?

**Senior-level:**
1. Diagnose a query with a large cardinality estimation error using actual plans.
2. Explain how the optimizer chooses between different plan shapes using cost estimates.

### FAANG-Level Deep Dive

SQL Server's optimizer generates a memo structure of alternative plans. The final plan is the lowest-cost alternative from the memo. Plan operators are annotated with property sets (required order, partitioning, parallelism). The optimizer uses the "trivial plan" path for simple queries (no optimization), which explains why simple queries compile instantly. For complex queries, the optimizer uses full optimization with multiple phases (0, 1, 2) with increasing search effort.

### Explain Like I'm 7

An execution plan is like a recipe that shows every step the computer takes to answer your question. It shows which ingredients (tables) are used, which tools (indexes) are used, and the order of steps. Expensive steps are highlighted so you know what to fix.

</details>

---

## Q45: Statistics

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Statistics are metadata about data distribution that the optimizer uses to estimate row counts and choose execution plans. They include histograms (step-based distribution), density (selectivity), and cardinality estimates. Outdated statistics are the #1 cause of bad execution plans.

### Detailed Explanation

- **What it is:** Objects containing statistical information about index key values: histogram (200 steps), density, and string statistics.
- **Why it exists:** The optimizer needs to estimate how many rows will match predicates to choose the cheapest plan.
- **What problem it solves:** Enables cost-based optimization by providing cardinality estimates.
- **When to use it:** Auto-update by default. Manual update after large data changes (>10% for 500+ row tables).
- **When NOT to update:** Too frequently (unnecessary overhead). During business hours on large tables (may cause plan recompilation).

### Internal Working

Histogram: 200 steps with RANGE_HI_KEY, RANGE_ROWS, EQ_ROWS, DISTINCT_RANGE_ROWS, AVG_RANGE_ROWS. Density: average selectivity for column combinations. The optimizer uses these to estimate: filter selectivity, join cardinality, GROUP BY cardinality.

### Step-by-Step Execution

SELECT * FROM orders WHERE customer_id = 12345
1. Optimizer accesses statistics for index on customer_id
2. Looks up customer_id = 12345 in the histogram step
3. Gets EQ_ROWS (exact match rows) or AVG_RANGE_ROWS
4. Estimates total rows for the query
5. Uses estimate to choose plan (seek vs scan, join type)

### Real-World Example

New customer acquired, 1000 orders inserted. Old statistics show 10 orders per customer. Optimizer chooses seek. Actual 1000 orders - seek is still fine. But if statistics showed 10 and it's actually 1000000, seek could be wrong choice (many lookups). UPDATE STATISTICS fixes this.

### SQL Example

```sql
-- View statistics
DBCC SHOW_STATISTICS ('orders', 'IX_Orders_CustomerID');

-- Statistics header:
-- Updated, Rows, Rows Sampled, Steps, Density, Average Key Length

-- Statistics density vector:
-- All Density, Average Length, Columns

-- Statistics histogram:
-- RANGE_HI_KEY, RANGE_ROWS, EQ_ROWS, DISTINCT_RANGE_ROWS, AVG_RANGE_ROWS

-- Update statistics
UPDATE STATISTICS orders;
UPDATE STATISTICS orders IX_Orders_CustomerID WITH FULLSCAN;
UPDATE STATISTICS orders IX_Orders_CustomerID WITH SAMPLE 50 PERCENT;

-- Auto-update threshold: 20% of rows + 500 for tables < 500 rows
-- For tables > 500 rows: 500 + 20% of rows
```

### Performance Considerations

- FULLSCAN is most accurate but slowest (full table scan)
- SAMPLE is faster but less accurate
- Auto-update is triggered by row count changes (threshold-based)
- Large tables may not auto-update frequently enough (colmodctr)
- Outdated statistics cause cardinality estimation errors (bad plans)

### Common Mistakes

- Not updating statistics after large data loads
- Relying solely on auto-update for volatile tables
- Using SAMPLE with too low percentage on skewed data
- Not understanding that auto-update is threshold-based, not time-based
- Forgetting to update statistics on filtered indexes separately

### Follow-Up Questions

**Junior:**
1. What are statistics used for?
2. How often are statistics auto-updated?

**Mid-level:**
1. Explain the histogram structure (200 steps).
2. How does stale statistics cause bad execution plans?

**Senior-level:**
1. Design a statistics maintenance strategy for a 24/7 OLTP system with a 1TB table.
2. Explain how ascending key problem affects statistics and how trace flag 2389 helps.

### FAANG-Level Deep Dive

The ascending key problem (e.g., IDENTITY columns, date columns) causes statistics to be stale for new values. The statistics histogram's last step doesn't include the latest values. SQL Server's trace flag 2389 enables "ascending key" detection, creating additional density stats for recently inserted values. Cardinality estimation errors > 10x are the most common cause of bad plans. The CE model changed between SQL Server 2012 (new CE) and 2014+ (default CE) - understanding which CE your database uses is critical for plan analysis.

### Explain Like I'm 7

Statistics are like a summary of what's in the database. "There are about 1000 customers in New York, 500 in Chicago, and most have 5 orders each." The optimizer uses this summary to plan the best way to find your data. If the summary is old and wrong, the plan might be bad.

</details>

---

## Q46: SARGable Queries

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SARGable (Search ARGument ABLE) means a query predicate can use an index seek. Non-SARGable predicates wrap columns in functions or expressions, preventing seeks. Common non-SARGable patterns: WHERE YEAR(date) = 2024 instead of WHERE date >= '2024-01-01' AND date < '2025-01-01'.

### Detailed Explanation

- **What it is:** A predicate that can utilize an index seek (Search ARGument ABLE).
- **Why it exists:** The optimizer can use index ordering to directly seek to matching rows only when the predicate compares the raw column value.
- **What problem it solves:** Transforms index scan (full table read) into index seek (targeted reads).
- **When to use it:** Always write predicates as SARGable when possible.
- **When NOT to use it:** When you cannot avoid the function (computed column, but you can index it).

### Internal Working

The optimizer checks if the predicate compares a column directly (without transformation) to a constant or variable. If yes, it can use the index B-tree to locate the range/page that contains the value. If no, it must scan all rows and apply the predicate.

### Step-by-Step Execution

Non-SARGable: WHERE YEAR(order_date) = 2024
1. Scan all rows
2. For each row, compute YEAR(order_date)
3. Compare to 2024
4. Return matching rows

SARGable: WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'
1. Seek index to first row where order_date >= '2024-01-01'
2. Read sequentially until order_date >= '2025-01-01'
3. Return matching rows (no computation needed)

### Real-World Example

Query: SELECT * FROM orders WHERE YEAR(order_date) = 2024. Rewrite as: WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'. Changes plan from Clustered Index Scan to Index Seek.

### SQL Example

```sql
-- Non-SARGable (scan)
SELECT * FROM orders WHERE YEAR(order_date) = 2024;

-- SARGable (seek)
SELECT * FROM orders 
WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';

-- Non-SARGable
SELECT * FROM employees WHERE LEFT(last_name, 1) = 'S';

-- SARGable
SELECT * FROM employees WHERE last_name LIKE 'S%';

-- Non-SARGable (column on one side, calculation on other)
SELECT * FROM orders WHERE total + tax > 100;

-- SARGable
SELECT * FROM orders WHERE total > 100 - tax;  -- Still non-SARGable
-- Better:
SELECT * FROM orders WHERE total > 100;  -- If tax is always positive

-- Non-SARGable (implicit conversion)
SELECT * FROM employees WHERE employee_id = '123';  -- string vs int

-- SARGable
SELECT * FROM employees WHERE employee_id = 123;  -- same type
```

### Performance Considerations

- Non-SARGable forces scan (table or index scan)
- SARGable can use seek (much faster for selective queries)
- Implicit conversions are non-SARGable (type mismatch)
- Functions on columns: always non-SARGable
- Functions on constants: SARGable (computed at compile time)
- Computed columns can be indexed to make function-based predicates SARGable

### Common Mistakes

- Wrapping columns in functions: WHERE DATEADD(day, 30, order_date) > GETDATE()
- Implicit conversion: comparing VARCHAR column to INT
- Using LIKE '%search%' (leading wildcard = non-SARGable)
- Using WHERE IN (subquery) when EXISTS + index is better

### Follow-Up Questions

**Junior:**
1. What makes a predicate SARGable?
2. Is LIKE '%Smith' SARGable?

**Mid-level:**
1. How does implicit conversion cause non-SARGable behavior?
2. Can you make YEAR(date) SARGable? (indexed computed column)

**Senior-level:**
1. Identify all non-SARGable predicates in a complex query and rewrite them.
2. Explain how the optimizer handles parameterized queries with OPTIMIZE FOR UNKNOWN regarding SARGability.

### FAANG-Level Deep Dive

The optimizer performs predicate simplification: WHERE ABS(col) = 5 can be rewritten as col IN (-5, 5) for SARGable behavior in some cases. Similarly, CONVERT(VARCHAR, date, 112) comparisons may be simplified. At FAANG scale, query code reviews enforce SARGable patterns. The DBA team runs automated tools (like SQL Server's Plan Cache analysis) to find non-SARGable queries and surfaces them for rewrite.

### Explain Like I'm 7

SARGable is like looking up a word in a dictionary by going to the right letter. Non-SARGable is like reading every single word until you find the right one. If you need to find words starting with "S", you go to the S section (SARGable). If you need last letter "s", you read every page (non-SARGable).

</details>

---

## Q47: Parameter Sniffing

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Parameter sniffing is when the optimizer uses the first parameter value to create a cached plan that works well for that value but poorly for others. A plan optimized for a rare value (seek) fails for common values (seek per row too slow). Solutions: OPTION (RECOMPILE), OPTION (OPTIMIZE FOR UNKNOWN), or OPTIMIZE FOR specific value.

### Detailed Explanation

- **What it is:** The optimizer "sniffs" the parameter values during first compilation and builds a plan optimized for those specific values.
- **Why it exists:** Different parameter values may need different plans. Sniffing creates efficient plans for the first call.
- **What problem it solves:** Efficient first execution. The problem is when subsequent calls with different values get a suboptimal cached plan.
- **When it's good:** Parameter values have similar data distribution (the same plan works for all).
- **When it's bad:** Skewed data distribution where different values need different plans.

### Internal Working

During plan compilation, the optimizer evaluates parameter values, gets specific cardinality estimates, and compiles the plan. The plan is cached with parameter-specific estimates. Subsequent calls reuse the cached plan regardless of parameter values.

### Step-by-Step Execution

1. First call: GetOrdersByCustomer(@CustomerID = 'VIP123')
2. Optimizer sniffs 'VIP123' - few orders, selects Index Seek + Key Lookup
3. Plan cached
4. Second call: GetOrdersByCustomer(@CustomerID = 'REGULAR001')
5. 'REGULAR001' has 100,000 orders
6. Plan cached: Index Seek + 100,000 Key Lookups (very slow!)
7. Better plan for 100,000 orders: Clustered Index Scan

### Real-World Example

Stored procedure GetOrdersByStatus(@Status) where 'Pending' has 100 rows (seek + lookup) and 'Shipped' has 1M rows (scan). First call with 'Pending' caches seek plan, then 'Shipped' is slow.

### SQL Example

```sql
-- Parameter sniffing example
CREATE PROCEDURE GetOrdersByCustomer @CustomerID INT
AS
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @CustomerID;

-- Solutions:

-- 1. RECOMPILE (recompiles every time)
CREATE PROCEDURE GetOrdersByCustomer @CustomerID INT
AS
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @CustomerID
    OPTION (RECOMPILE);

-- 2. OPTIMIZE FOR UNKNOWN (uses average density)
CREATE PROCEDURE GetOrdersByCustomer @CustomerID INT
AS
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @CustomerID
    OPTION (OPTIMIZE FOR UNKNOWN);

-- 3. OPTIMIZE FOR specific value
CREATE PROCEDURE GetOrdersByCustomer @CustomerID INT
AS
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @CustomerID
    OPTION (OPTIMIZE FOR (@CustomerID = 12345));

-- 4. Local variable (hides sniffing)
CREATE PROCEDURE GetOrdersByCustomer @CustomerID INT
AS
    DECLARE @LocalID INT = @CustomerID;
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @LocalID;  -- Uses density estimate
```

### Performance Considerations

- RECOMPILE has CPU overhead (plan compilation per call)
- OPTIMIZE FOR UNKNOWN uses density, not histogram (less accurate)
- OPTIMIZE FOR VALUE targets specific plan (risky for other values)
- Local variable trick uses average density (safe but may not be optimal)
- Consider query hints carefully - each has trade-offs

### Common Mistakes

- Assuming the first execution plan is always the best
- Not noticing parameter sniffing issues (query works in dev, fails in prod)
- Using RECOMPILE too aggressively (wastes CPU)
- Not testing stored procedures with different parameter values

### Follow-Up Questions

**Junior:**
1. What is parameter sniffing?
2. Why does the first execution matter?

**Mid-level:**
1. How does OPTION (RECOMPILE) solve parameter sniffing?
2. What does OPTIMIZE FOR UNKNOWN do?

**Senior-level:**
1. Design a strategy to handle parameter sniffing for a procedure with highly skewed data.
2. Explain how Query Store with plan forcing can solve parameter sniffing without code changes.

### FAANG-Level Deep Dive

SQL Server 2016+ Query Store captures multiple plans per query (including parameterized queries). With Query Store, you can force a specific plan for a query pattern, bypassing the parameter sniffing issue without code changes. At FAANG scale, plan guides and Query Store plan forcing are used to stabilize performance without hot-patching application code.

### Explain Like I'm 7

Parameter sniffing is like a chef who cooks the first meal of the day perfectly, then uses the same recipe for all other meals. If the first order was 1 hamburger, they prepare the grill for 1 burger. But then 1000 people order burgers - they're still using the tiny grill!

</details>

## Q48: Plan Cache

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

The plan cache stores compiled execution plans for reuse, avoiding recompilation overhead. Plans are identified by a hash of the query text (or parameterized form). Plan reuse requires exact text match (including whitespace) unless forced parameterization is used.

### Detailed Explanation

- **What it is:** A memory pool in SQL Server that stores compiled query plans.
- **Why it exists:** Compiling a plan is expensive (CPU). Caching plans avoids recompilation for repeated queries.
- **What problem it solves:** Reduces CPU usage for repetitive query execution.
- **When it's effective:** OLTP workloads with repeated parameterized queries.
- **When it's a problem:** Plan bloat (too many plans), parameter sniffing (bad cached plan), plan cache pollution (ad-hoc queries).

### Internal Working

Plans are stored in the plan cache (part of the buffer pool). Each plan has a memory grant, a compilation cost, and a use count. Plans are evicted based on age, cost, and memory pressure. Parameterized plans are stored with parameter placeholders.

### Step-by-Step Execution

1. Query submitted (text or procedure call)
2. SQL Server calculates hash of query text
3. Looks up hash in plan cache
4. If found: reuse cached plan
5. If not found: compile new plan, insert into cache
6. Cache eviction: when memory pressure, LRU algorithm

### Real-World Example

A web application sends 1000 identical queries per second with different parameters. With plan caching, the plan compiles once and is reused 999 times.

### SQL Example

```sql
-- View plan cache
SELECT cp.usecounts, cp.cacheobjtype, cp.objtype,
       qt.text, qp.query_plan
FROM sys.dm_exec_cached_plans cp
CROSS APPLY sys.dm_exec_sql_text(cp.plan_handle) qt
CROSS APPLY sys.dm_exec_query_plan(cp.plan_handle) qp;

-- Clear plan cache (don't do this in production!)
DBCC FREEPROCCACHE;

-- Clear specific plan
DBCC FREEPROCCACHE (plan_handle);

-- Parameterization
-- Simple: SQL Server parameterizes most simple queries automatically
-- Forced: ALTER DATABASE SET PARAMETERIZATION FORCED;

-- Query that prevents caching (ad-hoc)
SELECT * FROM orders WHERE customer_id = 12345;  -- Not parameterized, not cached well
-- Better (parameterized):
EXEC sp_executesql N'SELECT * FROM orders WHERE customer_id = @id', N'@id INT', @id = 12345;
```

### Performance Considerations

- Plan cache hit = fast execution; miss = compilation overhead
- Ad-hoc queries pollute the cache (many distinct plans)
- OPTION (RECOMPILE) skips caching (for queries that never repeat)
- Plan cache memory is part of buffer pool (less space for data pages)
- Larger cache = more memory, fewer recompilations; smaller cache = more memory for data
- Monitor plan cache size with sys.dm_os_memory_objects

### Common Mistakes

- Not parameterizing queries (ad-hoc SQL flood)
- Using OPTION (RECOMPILE) for frequently executed queries (wasted CPU)
- Running DBCC FREEPROCCACHE in production (massive recompilation spike)
- Not understanding plan cache eviction behavior

### Follow-Up Questions

**Junior:**
1. What is the plan cache used for?
2. Does whitespace affect plan caching?

**Mid-level:**
1. How does forced parameterization differ from simple?
2. When do plans get evicted from cache?

**Senior-level:**
1. Design a strategy to reduce plan cache bloat from EF Core-generated queries.
2. Explain how Query Store relates to plan cache and how they interact.

### FAANG-Level Deep Dive

SQL Server's plan cache uses a hash-based lookup (sql_handle + statement_start_offset). The hash is calculated from the normalized SQL text. Even a single space difference creates a different hash, preventing cache hits. Forced parameterization can help ORM-generated queries but may cause unexpected plan shapes. At FAANG scale, plan cache is monitored for size (should be < 50% of buffer pool). Frequent plan evictions indicate memory pressure.

### Explain Like I'm 7

The plan cache is like a recipe box. The first time you make a dish, you write down the recipe. Next time, you just pull out the recipe card instead of figuring it out again. But if you keep writing slightly different cards for the same dish (different spacing on the card), you fill the box with unusable duplicates.

</details>

---

## Q49: Query Store

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Query Store (SQL Server 2016+) is a built-in performance monitoring feature that captures query execution history, plans, and runtime statistics. It enables identifying plan regressions and forcing specific plans without code changes. It's like a flight recorder for query performance.

### Detailed Explanation

- **What it is:** A persistent store of query execution data (plans, runtime stats, wait stats) inside the user database.
- **Why it exists:** Traditional performance tuning relies on DMVs (reset on restart). Query Store provides persistent historical data.
- **What problem it solves:** Identifies plan regressions (plan changes that degrade performance), provides plan history, enables plan forcing.
- **When to use it:** Always enabled for production databases (minimal overhead, high value).
- **When NOT to use it:** Very write-heavy databases with limited disk (can grow large). Consider read-only secondary replicas.

### Internal Working

Query Store captures: query text hash, execution plans, runtime statistics (duration, CPU, I/O, memory), and wait statistics. Data is written asynchronously to internal tables in the user database. Retention period is configurable.

### Step-by-Step Execution

1. Query executes
2. Query Store captures plan + runtime stats asynchronously
3. Data written to internal Query Store tables
4. After retention period, old data purged
5. Analysis: Query Store reports show regressions, top resource consumers

### Real-World Example

After a monthly index rebuild, a query that ran in 1 second now takes 1 minute. Query Store shows the plan changed - forced the old plan via Query Store, restoring performance immediately.

### SQL Example

```sql
-- Enable Query Store
ALTER DATABASE AdventureWorks SET QUERY_STORE = ON;
ALTER DATABASE AdventureWorks SET QUERY_STORE (
    OPERATION_MODE = READ_WRITE,
    INTERVAL_LENGTH_MINUTES = 60,
    MAX_STORAGE_SIZE_MB = 1000,
    CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30)
);

-- Find top resource consumers
SELECT q.query_id, qt.query_sql_text, 
       rs.avg_duration, rs.avg_cpu_time, rs.avg_logical_io_reads,
       p.plan_id, p.query_plan
FROM sys.query_store_query q
JOIN sys.query_store_query_text qt ON q.query_text_id = qt.query_text_id
JOIN sys.query_store_plan p ON q.query_id = p.query_id
JOIN sys.query_store_runtime_stats rs ON p.plan_id = rs.plan_id
ORDER BY rs.avg_duration DESC;

-- Force a specific plan (fix regression)
EXEC sp_query_store_force_plan @query_id = 123, @plan_id = 456;

-- Unforce plan
EXEC sp_query_store_unforce_plan @query_id = 123, @plan_id = 456;
```

### Performance Considerations

- Overhead: ~2-5% CPU for typical OLTP workloads
- Disk space: monitor with sys.query_store_wait_stats
- MAX_STORAGE_SIZE_MB default is 100MB (increase for production)
- INTERVAL_LENGTH_MINUTES default is 60 minutes
- Data flushing is asynchronous (may lose last few seconds on crash)

### Common Mistakes

- Not enabling Query Store on production databases
- Setting MAX_STORAGE_SIZE_MB too low (data purged too frequently)
- Not using plan forcing when regression is detected
- Confusing Query Store with DMV data

### Follow-Up Questions

**Junior:**
1. What is Query Store used for?
2. What type of data does Query Store capture?

**Mid-level:**
1. How does Query Store help with plan regressions?
2. How to force a plan using Query Store?

**Senior-level:**
1. Design a monitoring strategy using Query Store for a mission-critical OLTP database.
2. Explain how Query Store interacts with plan cache and parameter sniffing.

### FAANG-Level Deep Dive

Query Store is the recommended replacement for traditional plan cache analysis. It persists across restarts, captures plan history (not just current plan), and enables plan forcing without touching application code. In SQL Server 2022+, Query Store can capture wait statistics per query and support read-scale availability groups. At FAANG scale, Query Store automated analysis is used to detect regressions and trigger automatic plan forcing or index tuning.

### Explain Like I'm 7

Query Store is like a fitness tracker for your queries. It records how long each query takes, which path it took, and whether it's getting slower. If a query suddenly takes longer, you can see the old route (plan) that was faster and tell the database to use that route again.

</details>

---

## Q50: Spool Operators

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Spool operators (Table Spool, Index Spool, Row Count Spool) store intermediate query results in tempdb. They appear when the optimizer needs to cache results for later reuse, handle Halloween Protection (update anomaly), or when a subquery is referenced multiple times. Spools can be performance killers (spilling to tempdb) or helpful (avoiding re-execution).

### Detailed Explanation

- **What it is:** Physical operators that write intermediate rows to a worktable (in tempdb) for later processing.
- **Types:** Table Spool (eager - spools all rows then reads), Index Spool (builds index on spool), Row Count Spool (just counts), Window Spool (for window functions).
- **Why they exist:** Some query patterns need to revisit intermediate results (subqueries, recursive CTEs, triggers).
- **What problem they solve:** Allows the engine to cache results for multi-pass operations.
- **When they appear:** Halloween Protection (UPDATE that could read its own writes), Multiple references to same subquery, Recursive CTEs, Window functions.

### Internal Working

A spool operator writes rows to a worktable in tempdb. For Table Spool: writes all rows first (eager), then reads from the spool. For Index Spool: writes rows and creates an index on the worktable for efficient seeking. For Window Spool: caches rows with window ordering.

### Step-by-Step Execution (Eager Spool)

1. Execute child operator completely
2. Write all rows to tempdb worktable
3. Parent operator reads from the worktable
4. Worktable dropped after query completes

### Real-World Example

UPDATE that increments a counter: Halloween Protection requires a spool to prevent reading updated rows as if they were still original values.

### SQL Example

```sql
-- Halloween Protection spool
UPDATE employees SET salary = salary * 1.1
WHERE department_id = 5;
-- Spool ensures the WHERE clause evaluates on original values

-- Multiple CTE references may create spool
WITH avg_salary AS (
    SELECT dept_id, AVG(salary) AS avg_sal
    FROM employees GROUP BY dept_id
)
SELECT e.*, a.avg_sal
FROM employees e
JOIN avg_salary a ON e.dept_id = a.dept_id
WHERE e.salary > a.avg_sal;
-- If avg_salary is referenced once, no spool; if multiple times, spool may be created

-- Spool detection in plan
-- Look for "Table Spool", "Index Spool", "Eager Spool", "Lazy Spool" operators
```

### Performance Considerations

- Spool writes to tempdb (disk I/O)
- Memory grants don't cover spools (tempdb is always disk-based)
- Index Spools create work indexes (helps probing but costs writes)
- Large spools can fill tempdb
- Recursive CTE spools grow with each recursion level
- Window Spools for LAG/LEAD store all rows per partition

### Common Mistakes

- Not identifying spools as performance bottlenecks
- Confusing eager spools (all rows) with lazy spools (row-by-row)
- Assuming spools are always bad (Halloween Protection is necessary)
- Not monitoring tempdb for spool-related contention

### Follow-Up Questions

**Junior:**
1. What is a spool operator?
2. Where does a spool store data?

**Mid-level:**
1. What is Halloween Protection and why does it need a spool?
2. When would the optimizer choose an Index Spool over a Table Spool?

**Senior-level:**
1. Diagnose a query with a large spool causing tempdb contention.
2. Design a query rewrite that eliminates unnecessary spools.

### FAANG-Level Deep Dive

SQL Server's Eager Spool writes all rows before the parent reads. Lazy Spool writes as rows are produced (row-by-row). The Halloween Protection spool prevents the "Halloween Problem" (update anomaly where updating a row changes its position in the scan, causing it to be processed again - discovered by Oracle engineers on Halloween). At FAANG scale, spools are avoided by: (1) breaking complex queries into temp tables, (2) using window functions instead of correlated subqueries, (3) ensuring UPDATE statements have proper indexes.

### Explain Like I'm 7

A spool is like taking notes while you work. You write down intermediate results on a scrap paper (tempdb) so you can use them again later. But writing takes time, and if you write too much, the scrap paper pile gets messy.

</details>

---

## Q51: Key Lookup / Bookmark Lookup

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A Key Lookup (or Bookmark Lookup in older versions) occurs when a nonclustered index seek is followed by random I/O lookups to the clustered index for columns not in the nonclustered index. It's the #1 performance killer for OLTP queries. Solution: create a covering index with INCLUDE columns.

### Detailed Explanation

- **What it is:** An operator in execution plans that fetches data from the clustered index (or heap) using row locators from a nonclustered index.
- **Why it exists:** Nonclustered indexes don't store all columns. When a query needs columns not in the index, the engine must fetch them.
- **What problem it solves:** Allows narrow indexes (fewer columns) while still supporting queries needing additional columns.
- **When it's a problem:** When many rows need lookups (each lookup is a random I/O). Nested in a loop, 1000 lookups = 1000 random I/Os.
- **When it's acceptable:** Single-row lookups (pagination by PK). Small result sets (< 100 lookups).

### Internal Working

The nonclustered index leaf contains the row locator (clustered key or RID). The Key Lookup operator takes the row locator and navigates the clustered index B-tree to find the data page containing the row.

### Step-by-Step Execution

1. Nonclustered Index Seek produces row locators
2. For each row locator, Key Lookup navigates clustered index
3. Clustered B-tree traversal: root -> intermediate -> leaf
4. Retrieve the requested column value
5. Combine with nonclustered index columns
6. Output row

### Real-World Example

Query: SELECT order_id, order_date, order_total FROM orders WHERE customer_id = 123.
Index: ON orders(customer_id) (only customer_id key column).
Plan: Index Seek on nonclustered index + Key Lookup for order_date and order_total.
Solution: Add INCLUDE (order_date, order_total) to the index.

### SQL Example

```sql
-- Problem: Key Lookup
-- Index: IX_Orders_CustomerID ON orders(customer_id)
-- Query: 
SELECT order_id, customer_id, order_date, order_total
FROM orders
WHERE customer_id = 12345;
-- Plan: Index Seek (IX_Orders_CustomerID) + Key Lookup (for order_date, order_total)

-- Fix: Covering index
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_Covering
ON orders(customer_id)
INCLUDE (order_date, order_total);
-- Plan: Index Seek (IX_Orders_CustomerID_Covering) - no Key Lookup

-- Another fix: Clustered index scan (may be better if many rows match)
-- If customer_id = 123 returns 50% of rows, scan may be cheaper than seek + lookups
```

### Performance Considerations

- Each Key Lookup: 3-5 logical I/Os (B-tree traversal)
- 1000 row result = 3000-5000 additional I/Os
- Key Lookup in a loop (nested loops) multiplies I/O
- Covering index eliminates Key Lookup entirely
- Clustered index scan may be cheaper than seek + many Key Lookups
- RID Lookup (on heap) is similar but uses physical RID instead of clustered key

### Common Mistakes

- Ignoring Key Lookup in execution plans (assuming seek is always good)
- Creating indexes without INCLUDE for commonly queried columns
- Not understanding that a seek + many Key Lookups can be worse than a scan
- Overlooking the Key Lookup warning in SSMS (green text)

### Follow-Up Questions

**Junior:**
1. What is a Key Lookup?
2. How can you eliminate a Key Lookup?

**Mid-level:**
1. When is a Key Lookup acceptable vs a performance problem?
2. Compare Key Lookup (clustered) vs RID Lookup (heap).

**Senior-level:**
1. A query shows Index Seek + Key Lookup with 50,000 lookups. Provide 3 optimization strategies.
2. Explain how the optimizer chooses between seeking + lookup vs scanning.

### FAANG-Level Deep Dive

The optimizer costs Key Lookup as random I/O (high cost per row). If the estimated number of lookups exceeds ~20% of table rows, the optimizer typically chooses a Clustered Index Scan instead. This cost-based decision is why statistics accuracy is critical. Key Lookup is the single most common tuning opportunity in OLTP workloads. At FAANG scale, monitoring tools alert when any query shows Key Lookup operators consuming > 50% of query cost.

### Explain Like I'm 7

Key Lookup is like having a book's index tell you to "see page 42" for each topic. If you need 100 pieces of information, you flip to the index once, then flip to page 42 a hundred separate times. A covering index is like having all the info right there in the index - no flipping needed.

</details>

---

# Topic 8: Transactions & Locking (Q52-Q59)

---

## Q52: ACID Properties

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

ACID stands for Atomicity (all or nothing), Consistency (valid state before and after), Isolation (concurrent transactions don't interfere), Durability (committed changes survive failures). SQL Server guarantees ACID through transaction logging (Atomicity/Durability), constraints (Consistency), and locking/versioning (Isolation).

### Detailed Explanation

- **Atomicity:** Transaction is all-or-nothing. If any part fails, the entire transaction rolls back. SQL Server uses the transaction log (Write-Ahead Logging) to track changes for rollback.
- **Consistency:** Transactions bring database from one valid state to another. Constraints (PK, FK, CHECK, UNIQUE) enforce consistency.
- **Isolation:** Concurrent transactions appear to execute sequentially. Locking and row versioning control visibility of uncommitted changes.
- **Durability:** Once committed, changes persist even after system failure. Transaction log is written before data pages (WAL protocol).

### Internal Working

- Atomicity: Transaction log records before and after images. ROLLBACK reads log to undo.
- Consistency: Constraints checked during DML. Deferred constraint checking for some ALTER operations.
- Isolation: Lock manager controls access. Row versioning in tempdb for snapshot-based isolation.
- Durability: Log records written to disk before acknowledging commit (WAL). Delayed durability (asynchronous log write) for performance.

### Step-by-Step Execution

BEGIN TRANSACTION:
1. Assign transaction ID
2. Log all changes to transaction log (WAL)
3. Modify data pages in buffer pool (dirty pages)

COMMIT:
1. Write commit record to transaction log
2. Latch-free log write (sequential I/O)
3. Mark transaction as committed
4. Dirty pages written to disk later (CHECKPOINT)

ROLLBACK:
1. Read log records for transaction
2. Reverse each operation using log
3. Release locks

### Real-World Example

Bank transfer: DEBIT  from A, CREDIT  to B. Atomicity ensures both happen or neither. Consistency ensures total money unchanged. Isolation means another transfer sees either both or neither. Durability means after COMMIT, money is safe even if power fails.

### SQL Example

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

IF @@ERROR = 0 AND @@ROWCOUNT = 1
    COMMIT TRANSACTION;
ELSE
    ROLLBACK TRANSACTION;

-- Check transaction state
SELECT @@TRANCOUNT;  -- 0 = no transaction
SELECT XACT_STATE(); -- -1 = uncommittable, 0 = none, 1 = active
```

### Performance Considerations

- Longer transactions hold locks longer (blocking)
- More changes per transaction = more log writes
- Read-only transactions need no locking (use snapshot isolation)
- Implicit transactions (autocommit) log each statement individually
- Delayed durability reduces log I/O but risks data loss on crash

### Common Mistakes

- Leaving transactions open (holding locks, causing blocking)
- Not handling errors within transactions (orphaned open transactions)
- Mixing DDL and DML in same transaction without planning
- Using implicit transactions without explicitly committing

### Follow-Up Questions

**Junior:**
1. What does ACID stand for?
2. What happens if you don't COMMIT a transaction?

**Mid-level:**
1. Explain Write-Ahead Logging (WAL) and how it ensures durability.
2. How does SQL Server handle a ROLLBACK after a system crash?

**Senior-level:**
1. Design a transaction strategy for a high-throughput payment processing system.
2. Explain delayed durability - when is it safe to use and what are the trade-offs?

### FAANG-Level Deep Dive

SQL Server uses Write-Ahead Logging - log records are hardened to disk BEFORE data pages are modified. This ensures durability without forcing data page flushes on every commit (CHECKPOINT lazily flushes dirty pages). At FAANG scale, delayed durability (async log commit) is used for non-critical transactions (logging, analytics) to reduce log write latency by 10-100x. The trade-off: last few seconds of data may be lost on crash. Understanding this trade-off is critical for high-throughput financial systems.

### Explain Like I'm 7

ACID is like baking a cake: Atomicity - you either make the whole cake or nothing (can't do half); Consistency - you follow the recipe so it turns out right; Isolation - you work on your cake while someone else works on theirs without messing each other up; Durability - once the cake is baked, it stays baked even if the oven turns off.

</details>

---

## Q53: READ UNCOMMITTED

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

READ UNCOMMITTED is the lowest isolation level. It allows dirty reads (reading uncommitted data), non-repeatable reads, and phantom reads. No shared locks are taken. Used for reports that can tolerate some data inconsistency in exchange for avoiding blocking.

### Detailed Explanation

- **What it is:** An isolation level that takes no locks and ignores locks held by others.
- **Why it exists:** Some reporting workloads need to read data without being blocked by writers.
- **What problem it solves:** Eliminates blocking (readers don't wait for writers). Reduces locking overhead.
- **When to use it:** Approximate reports (dashboards), trend analysis where exact numbers aren't critical, queries that don't need transaction consistency.
- **When NOT to use it:** Financial transactions, inventory management, any process requiring accurate data. Can read rolled-back data (dirty reads).

### Internal Working

SELECT statements under READ UNCOMMITTED do not request shared locks. They also do not honor exclusive (X) locks held by other transactions. This allows reading uncommitted (possibly rolled back) data. Under row versioning, READ UNCOMMITTED ignores version history and reads whatever is current.

### Step-by-Step Execution

1. No shared lock requested
2. Read data regardless of lock state
3. May read data that is being modified (dirty read)
4. May read data that will be rolled back
5. No wait for writers (zero blocking)

### Real-World Example

Monitoring dashboard showing total sales for the current hour. If the number is slightly off because a transaction hasn't committed, it's acceptable for the dashboard.

### SQL Example

```sql
-- Session 1: READ UNCOMMITTED
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT order_total FROM orders WHERE order_id = 123;
-- Returns data even if it's being modified by another session

-- Same as NOLOCK hint
SELECT order_total FROM orders (NOLOCK) WHERE order_id = 123;

-- Potential dirty read scenario:
-- Transaction A updates order_total to 500 (not committed)
-- Transaction B reads order_total = 500 (dirty read)
-- Transaction A rolls back (order_total is actually 100)
-- Transaction B used 500 in a report (wrong!)

-- NOLOCK can also cause data consistency errors (missing rows, duplicate rows)
-- This happens due to page splits during concurrent updates
```

### Performance Considerations

- Zero blocking for readers (never waits)
- No shared locks = less lock manager overhead
- Risk: dirty reads, non-repeatable reads, phantoms
- Risk: could read same row twice or skip rows entirely (page splits)
- Often used as a "quick fix" for blocking (should fix the root cause)

### Common Mistakes

- Using READ UNCOMMITTED for financial/transactional queries
- Not understanding that dirty reads can see rolled-back data
- Thinking NOLOCK is safe for count/aggregate queries (it's not)
- Using NOLOCK as a default (should be exception, not rule)
- Confusing READ UNCOMMITTED with SNAPSHOT (different semantics)

### Follow-Up Questions

**Junior:**
1. What is a dirty read?
2. What's the difference between READ UNCOMMITTED and READ COMMITTED?

**Mid-level:**
1. Can NOLOCK cause duplicate rows or missing rows? How?
2. When is it acceptable to use READ UNCOMMITTED?

**Senior-level:**
1. Design a reporting strategy that balances consistency and concurrency without using NOLOCK.
2. Explain the page split anomaly with NOLOCK - how can you miss or double-count rows?

### FAANG-Level Deep Dive

NOLOCK/READ UNCOMMITTED can cause allocation order scans to miss rows or read them twice due to page splits. During a page split, a page's rows are moved to a new page. If your scan was on the old page, skips the moved rows. If it hits the new page, reads them again. This means COUNT(*) with NOLOCK can return incorrect results even without dirty reads. At FAANG scale, READ UNCOMMITTED is banned for any query feeding a user-facing system. Snapshot isolation is used instead.

### Explain Like I'm 7

READ UNCOMMITTED is like looking at someone's homework while they're still writing. You might see wrong answers they're about to erase. It's fast because you don't wait, but you might get wrong information.

</details>

---

## Q54: READ COMMITTED

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

READ COMMITTED is the default isolation level in SQL Server. It prevents dirty reads (can't read uncommitted data) but allows non-repeatable reads (data can change between reads) and phantom reads (new rows can appear). Shared locks are taken but released immediately after reading.

### Detailed Explanation

- **What it is:** Isolation level that prevents reading uncommitted data by acquiring shared locks during read.
- **Why it exists:** Balances consistency and concurrency. Prevents dirty reads without the overhead of higher isolation levels.
- **What problem it solves:** Ensures you only read committed data (no dirty reads).
- **When to use it:** Default for most OLTP workloads. Adequate for most applications.
- **When NOT to use it:** When repeatable reads needed (use REPEATABLE READ or SNAPSHOT). When dirty reads acceptable for performance (use READ UNCOMMITTED).

### Internal Working

In READ COMMITTED, shared (S) locks are acquired as rows are read and released immediately after the read completes (not held until transaction end). This is the default behavior. With READ_COMMITTED_SNAPSHOT = ON, the database uses row versioning instead of locking for read consistency.

### Step-by-Step Execution

1. SELECT requests shared lock on row/page
2. If row has exclusive lock (being modified), SELECT waits
3. Once lock acquired, read the committed value
4. Release shared lock immediately
5. Next read may see different data (non-repeatable read)

### Real-World Example

A reporting query runs for 10 seconds reading 1M rows. While it runs, another transaction updates rows it has already read. The report shows a mix of old and new data (non-repeatable reads). For most reports, this is acceptable.

### SQL Example

```sql
-- Default: READ COMMITTED
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Session 1: Begin transaction, update row
BEGIN TRANSACTION;
UPDATE accounts SET balance = 500 WHERE account_id = 1;
-- Don't commit yet

-- Session 2: READ COMMITTED
SELECT balance FROM accounts WHERE account_id = 1;
-- Blocks until Session 1 commits
-- After commit: returns 500
-- If Session 1 rolls back: returns 100

-- Under READ_COMMITTED_SNAPSHOT (RCSI):
-- Session 2 does NOT block
-- Returns the last committed value (100)
-- After commit: returns 500
```

### Performance Considerations

- Blocking: readers wait for writers (default). RCSI eliminates this.
- Shared locks: overhead for lock manager
- Default is safe for most applications
- RCSI (row versioning): no blocking but more tempdb usage
- RCSI is set at database level: ALTER DATABASE SET READ_COMMITTED_SNAPSHOT ON

### Common Mistakes

- Not understanding that READ COMMITTED allows non-repeatable reads
- Confusing READ COMMITTED with REPEATABLE READ
- Thinking READ COMMITTED prevents all concurrency anomalies (it doesn't)
- Not enabling RCSI when blocking is a problem (use RCSI instead of NOLOCK)

### Follow-Up Questions

**Junior:**
1. What does READ COMMITTED prevent?
2. What concurrency problems does it allow?

**Mid-level:**
1. Difference between locking READ COMMITTED and RCSI?
2. How does RCSI use tempdb for row versioning?

**Senior-level:**
1. Design a migration strategy from default READ COMMITTED to RCSI for a high-concurrency OLTP system.
2. Compare the pros and cons of RCSI vs SNAPSHOT isolation.

### FAANG-Level Deep Dive

READ COMMITTED in SQL Server has two implementations: (1) Locking-based (default) - shared locks released immediately after read. (2) Row versioning-based (RCSI) - uses row version store in tempdb to present the last committed version. RCSI eliminates read-write blocking (readers never wait for writers) without the overhead of full snapshot isolation. At FAANG scale, RCSI is the default for OLTP databases. The trade-off: tempdb space for version store.

### Explain Like I'm 7

READ COMMITTED is like waiting for someone to finish writing their answer before you read it. You don't see half-written answers (no dirty reads). But if you read the same question twice, the answer might have changed between reads (non-repeatable read).

</details>

---

## Q55: REPEATABLE READ

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

REPEATABLE READ prevents dirty reads and non-repeatable reads by holding shared locks until the end of the transaction. Other transactions can't update rows you've read, but can insert new rows (phantom reads). Use when you need consistent reads within a transaction.

### Detailed Explanation

- **What it is:** Isolation level that holds shared locks until the end of the transaction.
- **Why it exists:** Prevents data from changing between reads within the same transaction.
- **What problem it solves:** Ensures repeated reads of the same row return the same value.
- **When to use it:** When you need to read data multiple times and rely on it being consistent (e.g., reading two accounts before transfer).
- **When NOT to use it:** Most OLTP workloads (increased blocking). When phantom reads are not acceptable (use SERIALIZABLE).

### Internal Working

Shared (S) locks are held until the transaction commits or rolls back. This prevents other transactions from acquiring exclusive (X) locks on those rows. However, range locks are not used, so new rows can be inserted (phantoms).

### Step-by-Step Execution

1. BEGIN TRANSACTION
2. SELECT: acquire shared locks on rows read
3. Locks held until transaction ends
4. Other transactions can't update these rows (blocked)
5. Other transactions CAN insert new rows (phantoms)
6. Same SELECT again: same rows, same values
7. COMMIT/ROLLBACK: release all shared locks

### Real-World Example

Banking: read account A and account B balances in same transaction. Between reads, another transaction debits account A. REPEATABLE READ ensures A's balance doesn't change between reads.

### SQL Example

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

BEGIN TRANSACTION;
-- First read
SELECT balance FROM accounts WHERE account_id = 1; -- Returns 100
-- Other transaction cannot update account 1 (blocked until we commit)

-- Second read (returns same value)
SELECT balance FROM accounts WHERE account_id = 1; -- Returns 100 (not 500)

-- But other transaction CAN insert new account
-- Next SELECT with range would see it (phantom)

COMMIT;
```

### Performance Considerations

- Shared locks held until transaction end (increased blocking)
- Higher deadlock probability (locks held longer)
- Escalation: many row locks may escalate to page/table lock
- Avoid long transactions under REPEATABLE READ
- Consider snapshot isolation instead of REPEATABLE READ

### Common Mistakes

- Confusing REPEATABLE READ with SERIALIZABLE
- Using REPEATABLE READ for transactions that need phantom protection
- Keeping transactions open under REPEATABLE READ (causes blocking)
- Assuming REPEATABLE READ prevents all concurrency issues

### Follow-Up Questions

**Junior:**
1. What does REPEATABLE READ prevent?
2. What is a phantom read?

**Mid-level:**
1. Difference between READ COMMITTED and REPEATABLE READ?
2. When would you use REPEATABLE READ?

**Senior-level:**
1. Why does REPEATABLE READ increase deadlock probability?
2. Design a solution using REPEATABLE READ without causing excessive blocking.

### FAANG-Level Deep Dive

REPEATABLE READ doesn't prevent phantom reads because it locks individual rows, not ranges. To prevent phantoms, range locks (key-range locks) are needed (SERIALIZABLE). The locking behavior: REPEATABLE READ uses S locks held till end of transaction. If reading many rows, locks may escalate to page level, blocking more than intended. At FAANG scale, REPEATABLE READ is rarely used - snapshot isolation provides the same guarantees without blocking.

### Explain Like I'm 7

REPEATABLE READ is like taking a photo of your desk. If you look at it again a minute later, everything is in the same place (your pen didn't move). But someone could ADD a new pen to your desk that wasn't in the first photo (phantom).

</details>

---

## Q56: SERIALIZABLE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SERIALIZABLE is the highest isolation level. It prevents dirty reads, non-repeatable reads, AND phantom reads by using range locks (key-range locks). It ensures complete isolation - transactions appear to execute sequentially. Use only when absolutely necessary due to blocking overhead.

### Detailed Explanation

- **What it is:** Isolation level that holds shared locks and range locks until transaction end.
- **Why it exists:** Prevents all concurrency anomalies - the "gold standard" of isolation.
- **What problem it solves:** Guarantees no phantoms - new rows cannot appear in your query range.
- **When to use it:** Financial reporting that must be perfectly consistent. Operations that read a range and must ensure nothing changes.
- **When NOT to use it:** Most OLTP workloads (causes excessive blocking and deadlocks). Long-running transactions.

### Internal Working

SERIALIZABLE uses key-range locks (RangeS-S locks). These lock ranges of index keys, preventing inserts into the range. Shared locks are held until transaction end. Lock escalation is more likely.

### Step-by-Step Execution

1. BEGIN TRANSACTION
2. SELECT with range predicate (WHERE id BETWEEN 1 AND 10)
3. Acquire key-range locks on the range (1-10)
4. No other transaction can insert id = 5 (phantom blocked)
5. No other transaction can update id = 3 (blocked)
6. Same SELECT: returns identical result set (no phantoms)
7. COMMIT: release all locks

### Real-World Example

Audit: read all transactions for January at two different times in a report. Must guarantee the exact same set both times. SERIALIZABLE ensures no January transactions are added while the report runs.

### SQL Example

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN TRANSACTION;
-- Execute multiple statements that must see identical data
SELECT COUNT(*) FROM orders WHERE order_date >= '2024-01-01' AND order_date < '2024-02-01';
-- Other transactions CANNOT insert into this date range (blocked)

-- Financial report
SELECT SUM(amount) FROM transactions WHERE account_id = 1;
SELECT SUM(amount) FROM transactions WHERE account_id = 2;
-- These two reads are guaranteed to see the same database state

COMMIT;

-- Equivalent hint: HOLDLOCK
SELECT * FROM orders (HOLDLOCK) WHERE order_id = 123;
```

### Performance Considerations

- Maximum blocking (readers block inserts in range)
- Highest deadlock probability
- Key-range locks: significant lock manager overhead
- Lock escalation more likely (range locks cover multiple rows)
- Use only when absolutely necessary
- Consider snapshot-based isolation as an alternative

### Common Mistakes

- Using SERIALIZABLE when REPEATABLE READ is sufficient
- Not realizing SERIALIZABLE blocks inserts in the range
- Running long reports under SERIALIZABLE (blocks all modification)
- Using table hints (HOLDLOCK) without understanding range locking

### Follow-Up Questions

**Junior:**
1. What concurrency problems does SERIALIZABLE prevent?
2. What is a phantom read?

**Mid-level:**
1. How does SERIALIZABLE prevent phantom reads differently from REPEATABLE READ?
2. What are key-range locks?

**Senior-level:**
1. Compare SERIALIZABLE with SNAPSHOT isolation. When would each be appropriate?
2. Design a financial reporting strategy that achieves serializable consistency without excessive blocking.

### FAANG-Level Deep Dive

SERIALIZABLE uses key-range locking (RangeS-S, RangeS-U, RangeX-X modes) which lock index ranges. A RangeS-S lock on a range prevents inserts into that range by acquiring a lock on the next key value as well. This means the range is extended to the next existing key, effectively locking the "gap." This can cause unexpected blocking - an insert of id=5 may block because the range lock covers keys 1 through 7 (next existing). At FAANG scale, SERIALIZABLE is almost never used. Snapshot isolation with application-level retry logic provides equivalent correctness with much better concurrency.

### Explain Like I'm 7

SERIALIZABLE is like putting a rope around all the items on your desk - no one can take anything FROM the rope area, AND no one can put anything NEW into the rope area. Everything stays exactly the same until you're done. This is the safest but also makes everyone else wait the most.

</details>

---

## Q57: SNAPSHOT Isolation

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SNAPSHOT isolation uses row versioning to give each transaction a consistent snapshot of the database as of the transaction start. Readers don't block writers, and writers don't block readers. It prevents dirty reads, non-repeatable reads, and phantom reads without locking.

### Detailed Explanation

- **What it is:** An isolation level that uses row versioning in tempdb to provide a transaction-consistent view without locks.
- **Why it exists:** Eliminates read-write blocking while providing REPEATABLE READ-level consistency.
- **What problem it solves:** Readers blocked by writers is the #1 concurrency problem in OLTP. SNAPSHOT solves it.
- **When to use it:** Reporting on busy OLTP databases. Applications that need consistent reads without blocking. Mixed read-write workloads.
- **When NOT to use it:** When update conflicts are frequent (SNAPSHOT fails with 3960 error on write conflicts). When tempdb is under memory/disk pressure.

### Internal Working

The first modification to a row in a SNAPSHOT transaction copies the row to tempdb (version store). Subsequent reads in the same transaction see the versioned row (as of transaction start). Writers check for conflicts - if another transaction has updated the same row since the snapshot started, the write fails with error 3960.

### Step-by-Step Execution

1. BEGIN TRANSACTION (SNAPSHOT)
2. SELECT: read from version store if row modified since snapshot start
3. No locks acquired for reads
4. UPDATE: detect if row changed since snapshot start
5. If row changed: Update conflict error 3960 (transaction must retry)
6. If row unchanged: UPDATE succeeds, create version
7. COMMIT

### Real-World Example

Report that runs for 2 minutes on a busy OLTP database. Under SNAPSHOT, the report sees a consistent view of data as of 2 minutes ago, without blocking any writers.

### SQL Example

```sql
-- Enable snapshot isolation at database level
ALTER DATABASE AdventureWorks SET ALLOW_SNAPSHOT_ISOLATION ON;

-- Session 1: Snapshot isolation
SET TRANSACTION ISOLATION LEVEL SNAPSHOT;
BEGIN TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1; -- Returns 100
-- Session 2 updates account 1 to 500 and commits
SELECT balance FROM accounts WHERE account_id = 1; -- Still returns 100 (consistent snapshot)
COMMIT;

-- Update conflict example
-- Session 1: SNAPSHOT, UPDATE accounts SET balance = 200 WHERE account_id = 1
-- Session 2: (concurrent) UPDATE accounts SET balance = 500 WHERE account_id = 1 (committed)
-- Session 1's UPDATE fails with error 3960 (update conflict)
-- Session 1 must retry the transaction
```

### Performance Considerations

- No read locks = no read-write blocking
- tempdb usage for version store (can be significant for large transactions)
- Update conflicts cause transaction failures (application must retry)
- Longer transactions = more version store cleanup pressure
- Requires additional tempdb space (monitor version store size)

### Common Mistakes

- Not handling update conflicts (error 3960) in application code
- Enabling snapshot without monitoring tempdb version store
- Confusing SNAPSHOT with READ_COMMITTED_SNAPSHOT (different semantics)
- Using SNAPSHOT for write-heavy workloads (many update conflicts)
- Not understanding that SNAPSHOT uses more tempdb space

### Follow-Up Questions

**Junior:**
1. How does SNAPSHOT isolation prevent blocking?
2. What is an update conflict?

**Mid-level:**
1. Difference between SNAPSHOT and READ_COMMITTED_SNAPSHOT?
2. How does snapshot isolation use tempdb?

**Senior-level:**
1. Design a strategy to handle update conflicts in a snapshot isolation system.
2. Compare the performance characteristics of SNAPSHOT vs SERIALIZABLE for a financial trading system.

### FAANG-Level Deep Dive

SNAPSHOT isolation uses optimistic concurrency - assumes conflicts are rare and detects them at write time (optimistic). SERIALIZABLE uses pessimistic concurrency - prevents conflicts at read time via locking. The choice depends on workload: high-conflict workloads (hot rows) perform better under pessimistic locking; low-conflict workloads perform better under snapshot. At FAANG scale, most systems use optimistic concurrency with retry logic.

### Explain Like I'm 7

SNAPSHOT isolation is like taking a photo of the room when you walk in. While you're working, people can move things around and put new things down. But you keep looking at your photo - you don't see the changes. If you try to change something that was moved by someone else, you have to start over because your photo is outdated.

</details>

---

## Q58: Deadlocks

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

A deadlock occurs when two transactions each hold a lock the other needs, creating a circular dependency. SQL Server detects deadlocks (via the lock monitor), chooses a victim (rolls back one transaction), and allows the other to proceed. The victim's transaction is rolled back with error 1205.

### Detailed Explanation

- **What it is:** A cycle of lock dependencies where Transaction A holds Lock 1 and waits for Lock 2, while Transaction B holds Lock 2 and waits for Lock 1.
- **Why it exists:** Concurrent access to shared resources inevitably creates potential for deadlocks.
- **What problem it solves:** The deadlock detection mechanism prevents infinite waiting.
- **When they happen:** Transactions accessing resources in different orders. Long-running transactions under higher isolation levels. Missing indexes (table scans lock more than needed).
- **How to avoid:** Access resources in consistent order. Keep transactions short. Use lower isolation levels. Ensure proper indexing.

### Internal Working

SQL Server's lock monitor (background thread) runs every 5 seconds by default. It examines lock wait-for graphs for cycles. When a cycle is detected, it chooses a victim based on: DEADLOCK_PRIORITY setting (lower priority = victim), or the transaction with lower total cost (fewest log bytes). The victim is rolled back; error 1205 is returned.

### Step-by-Step Execution

1. Transaction A locks resource X
2. Transaction B locks resource Y
3. Transaction A requests Y (blocks, waits for B)
4. Transaction B requests X (blocks, waits for A)
5. Lock monitor detects cycle (deadlock)
6. Chooses victim (Transaction A, if lower priority)
7. Rolls back Transaction A
8. Transaction B proceeds (acquires X)

### Real-World Example

Order entry system: Transaction 1 updates Orders then OrderDetails. Transaction 2 updates OrderDetails then Orders. If they run concurrently, they form a cycle.

### SQL Example

```sql
-- Capture deadlock graph
-- Enable trace flag 1222 for detailed deadlock info
DBCC TRACEON (1222, -1);
-- Deadlock info logged to SQL Server error log

-- Set deadlock priority
SET DEADLOCK_PRIORITY HIGH;  -- Less likely to be victim
SET DEADLOCK_PRIORITY LOW;   -- More likely to be victim
SET DEADLOCK_PRIORITY -5;    -- Numeric priority (-10 to 10)

-- Application handling (C# example)
-- try { ExecuteTransaction(); }
-- catch (SqlException ex) when (ex.Number == 1205) { retry(); }

-- Preventing: consistent access order
-- Transaction 1: UPDATE A, then B
-- Transaction 2: UPDATE A, then B (same order)
```

### Performance Considerations

- Deadlock detection runs every 5 seconds (configurable via -T 1205)
- Frequent deadlocks indicate application design issues
- Deadlock victim's transaction is fully rolled back (application must retry)
- Index tuning reduces deadlocks (fewer rows locked)
- Lower isolation levels reduce deadlocks (shorter lock duration)

### Common Mistakes

- Not handling deadlock error 1205 in application code (no retry logic)
- Ignoring deadlocks (thinking they're rare or acceptable)
- Not analyzing deadlock graphs to find the root cause
- Using NOLOCK to "fix" deadlocks (covers up the design problem)

### Follow-Up Questions

**Junior:**
1. What is a deadlock?
2. What happens when a deadlock is detected?

**Mid-level:**
1. How does SQL Server choose the deadlock victim?
2. How to analyze deadlock graphs from the error log?

**Senior-level:**
1. Design an application architecture that prevents deadlocks in a high-throughput order processing system.
2. Explain the difference between deadlocks and lock timeouts.

### FAANG-Level Deep Dive

SQL Server's deadlock detection uses a wait-for graph algorithm. Each lock request creates an edge in the graph. The lock monitor traverses the graph looking for cycles. At FAANG scale, deadlocks are minimized through: (1) consistent object access order (all transactions access tables in alphabetical order), (2) index tuning (reduce lock footprint), (3) read-committed snapshot isolation (eliminates read-write deadlocks), (4) retry logic with exponential backoff.

### Explain Like I'm 7

A deadlock is like two people in a hallway. Person A needs to go through Door B, but Person B is in the way. Person B needs to go through Door A, but Person A is in the way. They're stuck! The database picks one person to sit down (rollback) so the other can get through.

</details>

---

## Q59: Row Versioning

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Row versioning maintains multiple versions of rows in tempdb (version store). When a row is updated, the previous version is preserved. Readers can access the old version without blocking. Used by SNAPSHOT isolation and READ_COMMITTED_SNAPSHOT. Enables non-blocking reads.

### Detailed Explanation

- **What it is:** A mechanism that keeps previous versions of modified rows in tempdb's version store.
- **Why it exists:** Enables lock-free read consistency (readers see committed data without waiting for writers).
- **What problem it solves:** Eliminates read-write blocking (the most common concurrency bottleneck).
- **When to use it:** SNAPSHOT isolation and RCSI. High-concurrency OLTP with mixed read/write.
- **When NOT to use it:** When tempdb is constrained (version store uses tempdb space). Long-running transactions (version store cleanup is delayed).

### Internal Working

When a row is updated in a database with versioning enabled, the previous row version is linked to the new version via a pointer (row header has a 14-byte version pointer). The old version is stored in the version store in tempdb. The version store is cleaned up by a background thread when no active transaction needs the old version.

### Step-by-Step Execution

1. UPDATE row in database
2. Before updating, copy old row to version store (tempdb)
3. Row header updated: XSN (transaction sequence number) and version pointer
4. New version written to data page
5. Reader: checks if current version is older than its snapshot
6. If yes: follow version pointer to tempdb for old version
7. If no: read current version from data page
8. Background cleanup: when oldest active transaction releases, versions purged

### Real-World Example

Under RCSI: a 2-minute report runs while 1000 updates per second happen. Each update creates a version. The report reads versions consistent with its start time. After the report completes, old versions are reclaimed.

### SQL Example

```sql
-- Check version store size
SELECT * FROM sys.dm_tran_version_store;
SELECT * FROM sys.dm_os_performance_counters 
WHERE counter_name LIKE '%Version Store%';

-- Monitoring tempdb version store space
SELECT (version_store_reserved_page_count * 8) / 1024 AS version_store_MB
FROM sys.dm_db_file_space_usage
WHERE database_id = 2;  -- tempdb

-- Longest running transaction (blocks version cleanup)
SELECT transaction_id, transaction_sequence_num, elapsed_time_seconds
FROM sys.dm_tran_active_snapshot_database_transactions
ORDER BY elapsed_time_seconds DESC;
```

### Performance Considerations

- Additional writes: every update writes to version store (more I/O)
- tempdb space: version store grows with update rate * transaction duration
- Row header overhead: 14 bytes per row for version pointer
- Version chain walks: following pointers to tempdb adds read I/O
- Long transactions: prevent version cleanup (version store grows)
- 64-bit systems: version store can use multiple tempdb data files

### Common Mistakes

- Not monitoring version store size (fills tempdb)
- Allowing long-running transactions under RCSI/SNAPSHOT (version store bloat)
- Enabling versioning without monitoring tempdb space requirements
- Confusing version store with tempdb normal usage
- Not considering additional write I/O for version generation

### Follow-Up Questions

**Junior:**
1. What does row versioning enable?
2. Where are row versions stored?

**Mid-level:**
1. How does row versioning eliminate read-write blocking?
2. What causes the version store to grow large?

**Senior-level:**
1. Design a monitoring strategy for version store size in a high-throughput system.
2. Explain how version chain traversal works - what happens when a version chain is long?

### FAANG-Level Deep Dive

The version store is organized as a linked list (version chain). Each row's current version has a pointer to the previous version in tempdb. Walking a long version chain (many updates to the same row) requires multiple tempdb reads per row access. At FAANG scale, the most common issue is long-running reports with RCSI - the version store grows to fill tempdb. Solution: break reports into smaller batches with snapshot refresh, or use asynchronous reporting against replicas.

### Explain Like I'm 7

Row versioning is like keeping old drafts of your homework. When you make changes, you put the old draft in a filing cabinet (tempdb). Your teacher can look at the old draft while you're writing the new one, without waiting for you to finish. When everyone is done looking at the old drafts, they get thrown away.

</details>

# Topic 9: Stored Procedures & Functions (Q60-Q66)

---

## Q60: Stored Procedure vs Ad-hoc Query

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Stored procedures offer: plan reuse, reduced network traffic, encapsulation, security (execute permissions), and parameterized execution. Ad-hoc queries are simpler but don't benefit from plan caching (unless parameterized) and are prone to SQL injection. Use stored procedures for business logic, ad-hoc for quick exploration.

### Detailed Explanation

- **What it is:** Stored procedures are pre-compiled SQL code stored on the server. Ad-hoc queries are sent inline from the application.
- **Why they exist:** Stored procedures provide security, performance (plan reuse), and maintainability.
- **What problem they solve:** Encapsulate complex logic, prevent SQL injection, reduce network traffic.
- **When to use procedures:** Business logic, security-critical operations, complex multi-step processes.
- **When to use ad-hoc:** Simple queries, ORM-generated code, rapid development, dynamic queries.

### Performance Considerations

- Procedures: plan cached after first execution (faster subsequent calls)
- Ad-hoc (parameterized via sp_executesql): also cached
- Ad-hoc (non-parameterized): each unique text compiles separately (cache bloat)
- Network: procedure call sends just name + params; ad-hoc sends full SQL text

### Common Mistakes

- Not parameterizing ad-hoc queries (security + performance issues)
- Using dynamic SQL in procedures without proper parameterization
- Over-using procedures for simple queries (maintenance overhead)

### Follow-Up Questions

**Junior:**
1. What is a stored procedure?
2. How does sp_executesql help with plan caching?

**Mid-level:**
1. Compare plan caching for stored procedures vs parameterized ad-hoc queries.
2. When would you choose ad-hoc over a stored procedure?

**Senior-level:**
1. Design a strategy for ORM-generated queries to benefit from plan caching.
2. Explain how stored procedure recompilation works and what causes it.

### FAANG-Level Deep Dive

Stored procedures use deferred name resolution (objects referenced are resolved at execution time, not creation time). This allows creating procedures that reference tables that don't exist yet. Plan reuse requires exact match of SET options, database context, and object schema. At FAANG scale, most applications use parameterized queries through ORMs rather than stored procedures, for deployment flexibility. Plan caching is achieved through forced parameterization and query store.

### Explain Like I'm 7

Stored procedure: a saved recipe in the kitchen's recipe book. You just say "make lasagna" and the chef knows what to do. Ad-hoc: you call the chef and read the entire recipe over the phone each time. The saved recipe is faster and less error-prone.

</details>

---

## Q61: sp_executesql vs EXEC

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

sp_executesql is the preferred method for executing dynamic SQL because it supports parameterization (plan reuse, SQL injection protection). EXEC (or EXECUTE) concatenates strings without parameterization (no plan reuse, injection vulnerable). Always use sp_executesql when building dynamic SQL.

### Detailed Explanation

- **What it is:** Two methods for executing dynamic SQL. sp_executesql supports parameters; EXEC does not.
- **Why they exist:** sp_executesql was added to address EXEC's security and performance issues.
- **What problem they solve:** sp_executesql: plan caching, SQL injection prevention. EXEC: simple string execution.
- **When to use sp_executesql:** Any dynamic SQL that takes user input or values.
- **When to use EXEC:** Trivial cases with no parameters (EXEC 'TRUNCATE TABLE temp').

### Performance Considerations

- sp_executesql: plan is parameterized and cached (keyed by SQL string + params)
- EXEC: the concatenated SQL string is the cache key (different value = different plan)
- EXEC is vulnerable to SQL injection (concatenation)
- sp_executesql uses exact type definitions for parameters

### SQL Example

```sql
-- BAD: EXEC with concatenation (no plan reuse, injection risk)
DECLARE @sql NVARCHAR(MAX);
SET @sql = 'SELECT * FROM orders WHERE customer_id = ' + @CustomerID;
EXEC(@sql);

-- GOOD: sp_executesql with parameters (plan reuse, safe)
DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM orders WHERE customer_id = @cid';
EXEC sp_executesql @sql, N'@cid INT', @cid = @CustomerID;

-- Multiple parameters
SET @sql = N'SELECT * FROM orders WHERE customer_id = @cid AND order_date >= @dt';
EXEC sp_executesql @sql, 
    N'@cid INT, @dt DATETIME2',
    @cid = @CustomerID, @dt = @OrderDate;
```

### Common Mistakes

- Using EXEC with concatenated parameters (SQL injection, no plan reuse)
- Not defining parameter types explicitly with sp_executesql
- Building SQL strings with user input without QUOTENAME()
- Overusing dynamic SQL when static SQL would work

### Follow-Up Questions

**Junior:**
1. What's the difference between EXEC and sp_executesql?
2. Why is sp_executesql safer?

**Mid-level:**
1. How does sp_executesql enable plan caching?
2. How to avoid SQL injection when building dynamic SQL?

**Senior-level:**
1. Design a dynamic search procedure using sp_executesql with optional parameters.
2. Explain how sp_executesql plan cache key differs from EXEC and stored procedures.

### FAANG-Level Deep Dive

sp_executesql generates a parameterized query plan that is cached separately from ad-hoc SQL. The cache key includes the SQL string (with parameter placeholders), parameter types, and SET options. This means sp_executesql plan reuse works even when parameter values change. At FAANG scale, all dynamic SQL must use sp_executesql - EXEC with concatenation is banned by security policies.

### Explain Like I'm 7

EXEC is like writing a note that says "get the red ball" - the exact words must match to reuse it. sp_executesql is like saying "get the ball with color X" - you can reuse the instruction for any color ball, and you can't sneak in extra instructions.

</details>

---

## Q62: Scalar Function vs Inline TVF

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Scalar-valued functions (SVFs) return a single value and execute row-by-row (like a cursor), causing poor performance. Inline table-valued functions (iTVFs) return a table and are expanded inline (like a view), allowing the optimizer to optimize them. iTVFs are almost always preferred over SVFs for performance.

### Detailed Explanation

- **What it is:** SVF returns a scalar value (one row, one column). iTVF returns a table and is treated as a view by the optimizer.
- **Why they differ:** SVFs are black boxes - the optimizer can't see inside. iTVFs are expanded inline.
- **What problem they solve:** SVFs: encapsulate simple calculations. iTVFs: parameterized views with optimizer visibility.
- **When to use SVFs:** Rarely - only for trivial, non-performant-critical calculations.
- **When to use iTVFs:** Any time you would write a scalar function that touches data.

### Performance Considerations

- SVF: executes per row (think nested loop with full function call overhead). Can't be parallelized.
- iTVF: expanded inline, optimizer can reorder, parallelize, and push predicates.
- SVF with data access: each call does a full query (disastrous for large datasets).
- iTVF: same performance as writing the query inline.

### SQL Example

```sql
-- BAD: Scalar function (per-row execution)
CREATE FUNCTION dbo.GetOrderCount(@CustomerID INT)
RETURNS INT
AS
BEGIN
    DECLARE @Count INT;
    SELECT @Count = COUNT(*) FROM orders WHERE customer_id = @CustomerID;
    RETURN @Count;
END;

SELECT customer_id, dbo.GetOrderCount(customer_id) AS order_count
FROM customers;  -- Executes the COUNT query once per customer!

-- GOOD: Inline TVF (optimizer expands it)
CREATE FUNCTION dbo.GetOrderCountTVF(@CustomerID INT)
RETURNS TABLE
AS
RETURN (
    SELECT COUNT(*) AS order_count
    FROM orders
    WHERE customer_id = @CustomerID
);

SELECT c.customer_id, oc.order_count
FROM customers c
CROSS APPLY dbo.GetOrderCountTVF(c.customer_id) oc;

-- BETTER: Single query (no function needed)
SELECT c.customer_id, COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;
```

### Common Mistakes

- Using scalar functions in SELECT or WHERE on large datasets (disastrous performance)
- Thinking iTVFs execute like SVFs (they don't - they're inlined)
- Creating SVFs that access tables (the performance hit multiplies)
- Not using CROSS APPLY with iTVFs

### Follow-Up Questions

**Junior:**
1. Difference between scalar and inline table-valued function?
2. Why are scalar functions slow in queries?

**Mid-level:**
1. How does CROSS APPLY work with iTVFs?
2. When would you actually use a scalar function?

**Senior-level:**
1. Rewrite a complex scalar function into an iTVF + APPLY pattern.
2. Explain the internal differences: SVF as black box vs iTVF as inline expression.

### FAANG-Level Deep Dive

Scalar functions are executed via the "Table-valued Function" operator (physical). Each row triggers a function call, preventing parallelism and batch mode. iTVFs are expanded into the outer query's optimization tree via "inline expansion" (similar to indexed views). The optimizer sees the iTVF's SQL as if it were written directly, enabling join reordering, predicate pushdown, and parallelization. At FAANG scale, scalar functions are banned in production queries.

### Explain Like I'm 7

Scalar function: Like asking a librarian to find one book, then send a messenger back with the answer. Do this for every book on your list. Inline TVF: Like giving the librarian your whole list and letting them figure out the best way to find everything at once.

</details>

---

## Q63: Multi-Statement TVF

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Multi-statement table-valued functions (MSTVFs) return a table but are NOT inlined by the optimizer. They create an intermediate worktable (tempdb), execute as a black box, and prevent predicate pushdown. Inline TVFs should be preferred; MSTVFs are used when complex procedural logic is required.

### Detailed Explanation

- **What it is:** A TVF with explicit table variable and multiple statements that populate it. Uses RETURNS @table TABLE.
- **Why it exists:** Some logic requires multiple steps - cannot be expressed in a single SELECT (iTVF requirement).
- **What problem it solves:** Encapsulates complex multi-step logic in a function while returning tabular data.
- **When to use them:** When logic requires IF/ELSE, loops, multiple INSERTs, or error handling.
- **When NOT to use them:** When the logic can be expressed as a single SELECT (use iTVF instead).

### Performance Considerations

- MSTVF: table variable is created in tempdb (optimistic cardinality estimate = 1 row)
- No predicate pushdown: all WHERE filters apply AFTER the function returns all rows
- No parallelism: MSTVF prevents parallel execution of the outer query
- Cardinality estimation error: optimizer assumes 1 row (even if 1M returned) - bad plan choices
- iTVF is always preferred if logic can be rewritten as a single SELECT

### SQL Example

```sql
-- Multi-statement TVF (poor performance)
CREATE FUNCTION dbo.GetCustomerSummary(@MinOrders INT)
RETURNS @result TABLE (
    customer_id INT,
    total_orders INT,
    total_spent DECIMAL(12,2)
)
AS
BEGIN
    INSERT INTO @result
    SELECT customer_id, COUNT(*), SUM(order_total)
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) >= @MinOrders;
    
    RETURN;
END;

SELECT * FROM dbo.GetCustomerSummary(5)
WHERE total_spent > 10000;  -- Filter applied AFTER function returns ALL rows!

-- Rewrite as iTVF (if possible)
CREATE FUNCTION dbo.GetCustomerSummary_iTVF(@MinOrders INT)
RETURNS TABLE
AS
RETURN (
    SELECT customer_id, COUNT(*) AS total_orders, SUM(order_total) AS total_spent
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) >= @MinOrders
);
```

### Common Mistakes

- Using MSTVF when iTVF would work
- Not realizing MSTVF estimates 1 row (causes bad joins)
- Filtering after MSTVF call (predicate should be inside the function)
- Not understanding that MSTVF blocks parallelism

### Follow-Up Questions

**Junior:**
1. What's the difference between MSTVF and iTVF?
2. Why does MSTVF use a table variable?

**Mid-level:**
1. How does MSTVF's fixed 1-row cardinality estimate affect JOIN performance?
2. When would MSTVF be unavoidable?

**Senior-level:**
1. Rewrite an MSTVF to use an iTVF or temp table for better performance.
2. Explain the cardinality estimation bug with MSTVFs and how to work around it.

### FAANG-Level Deep Dive

MSTVFs have a fixed cardinality estimate of 1 row (from the table variable). This causes nested loop joins with the MSTVF as the outer input (disaster for large results). SQL Server 2017 introduced interleaved execution for MSTVFs in some scenarios, but iTVFs remain the preferred approach. At FAANG scale, MSTVFs are replaced by: (1) iTVFs (when logic is single-SELECT), (2) stored procedures with temp tables (when logic is complex).

### Explain Like I'm 7

An inline TVF is like giving one clear instruction: "get all red toys." A multi-statement TVF is like saying: "get all toys, then check which are red, then count them, then sort by size." Each extra step slows things down.

</details>

---

## Q64: Procedure with Output Parameters

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Output parameters in stored procedures allow returning scalar values to the caller. They are defined with OUTPUT keyword and must be passed with OUTPUT on the caller side. Use output parameters for single values; use result sets for multiple rows.

### Detailed Explanation

- **What it is:** Parameters that return values from a stored procedure back to the caller.
- **Why they exist:** Stored procedures can return multiple values without creating multiple result sets.
- **What problem they solve:** Returning status codes, counts, or scalar results alongside a result set.
- **When to use them:** Returning a single value (count, status, ID). Returning computed values alongside result sets.
- **When NOT to use them:** When returning multiple rows (use result sets). When returning a table (use TVF).

### SQL Example

```sql
CREATE PROCEDURE dbo.GetCustomerOrders
    @CustomerID INT,
    @OrderCount INT OUTPUT,
    @TotalSpent DECIMAL(12,2) OUTPUT
AS
BEGIN
    SELECT order_id, order_date, order_total
    FROM orders
    WHERE customer_id = @CustomerID
    ORDER BY order_date DESC;

    SELECT @OrderCount = @@ROWCOUNT;
    SELECT @TotalSpent = SUM(order_total)
    FROM orders
    WHERE customer_id = @CustomerID;
END;

-- Caller
DECLARE @Count INT, @Total DECIMAL(12,2);
EXEC dbo.GetCustomerOrders @CustomerID = 12345, 
     @OrderCount = @Count OUTPUT, 
     @TotalSpent = @Total OUTPUT;
SELECT @Count AS OrderCount, @Total AS TotalSpent;
```

### Performance Considerations

- Output parameters are efficient (no serialization of result sets)
- Can pass large values (XML, JSON) via output parameters
- Multiple output parameters avoid multiple procedure calls

### Common Mistakes

- Forgetting OUTPUT keyword on either procedure definition or EXEC call
- Not handling NULL output values
- Using output parameters for multiple rows (use result sets or TVF)

### Follow-Up Questions

**Junior:**
1. What does OUTPUT keyword do?
2. Can you return a table via output parameter?

**Mid-level:**
1. Output parameter vs result set - when to use each?
2. How to handle output parameters from C#/Java?

**Senior-level:**
1. Design a procedure that returns both a result set and output parameters efficiently.
2. Explain how output parameters interact with transactions (can you see uncommitted output values?).

### FAANG-Level Deep Dive

Output parameters are passed by reference - the caller allocates memory and passes a pointer. Large output parameters (NVARCHAR(MAX)) can cause memory pressure. At FAANG scale, output parameters are preferred over scalar functions for returning computed values because they don't have the per-row execution cost.

### Explain Like I'm 7

An output parameter is like asking a baker "how many cookies did you make?" The baker says "50" as part of the answer, not on a separate slip of paper. The OUTPUT keyword means the baker fills in that number for you.

</details>

---

## Q65: Dynamic SQL in Stored Procedures

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Dynamic SQL in stored procedures allows building and executing SQL strings at runtime. Use sp_executesql (not EXEC) for parameterization and security. Use QUOTENAME() for object names. Dynamic SQL is needed for: dynamic table names, optional search conditions (catch-all queries), dynamic PIVOT columns.

### Detailed Explanation

- **What it is:** Building SQL strings within a stored procedure using string concatenation and executing them.
- **Why it exists:** Some query structures cannot be known at compile time (table names, column lists).
- **What problem it solves:** Enables flexible query patterns that static SQL cannot express.
- **When to use it:** Dynamic object names (table, column), catch-all WHERE clauses, dynamic pivot/unpivot.
- **When NOT to use it:** When static SQL would work (most cases). Dynamic SQL breaks ownership chaining and plan caching.

### SQL Example

```sql
CREATE PROCEDURE dbo.SearchOrders
    @CustomerID INT = NULL,
    @OrderDateFrom DATETIME2 = NULL,
    @OrderDateTo DATETIME2 = NULL,
    @Status VARCHAR(20) = NULL
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX) = N'SELECT order_id, order_date, order_total, order_status
                                    FROM orders WHERE 1=1';
    
    IF @CustomerID IS NOT NULL
        SET @sql += N' AND customer_id = @cid';
    IF @OrderDateFrom IS NOT NULL
        SET @sql += N' AND order_date >= @dtfrom';
    IF @OrderDateTo IS NOT NULL
        SET @sql += N' AND order_date < @dtto';
    IF @Status IS NOT NULL
        SET @sql += N' AND order_status = @status';

    EXEC sp_executesql @sql,
        N'@cid INT, @dtfrom DATETIME2, @dtto DATETIME2, @status VARCHAR(20)',
        @cid = @CustomerID, @dtfrom = @OrderDateFrom,
        @dtto = @OrderDateTo, @status = @Status;
END;

-- Dynamic table name (safe with QUOTENAME)
CREATE PROCEDURE dbo.ArchiveData
    @TableName NVARCHAR(128)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM ' + QUOTENAME(@TableName);
    EXEC sp_executesql @sql;
END;
```

### Performance Considerations

- Each unique SQL string compiles separately (plan cache bloat with many combinations)
- OPTION (RECOMPILE) can help for catch-all queries (avoid bloated cache)
- Parameter sniffing still applies to the dynamic SQL
- Ownership chaining broken: caller needs permissions on underlying objects
- Use QUOTENAME() for object names to prevent SQL injection

### Common Mistakes

- Using EXEC with concatenation instead of sp_executesql
- Not using QUOTENAME() for object names (SQL injection risk)
- Building dynamic SQL with different patterns for each call (cache bloat)
- Not handling NULL parameters correctly

### Follow-Up Questions

**Junior:**
1. Why would a stored procedure need dynamic SQL?
2. What is QUOTENAME() used for?

**Mid-level:**
1. How does dynamic SQL affect plan caching?
2. How to handle optional parameters in a search procedure?

**Senior-level:**
1. Design a catch-all query procedure that balances plan caching and performance.
2. Explain how to maintain ownership chaining with dynamic SQL.

### FAANG-Level Deep Dive

Catch-all queries with dynamic SQL face the "parameter sniffing problem" and "OR predicate problem" simultaneously. The OPTION (RECOMPILE) approach compiles a fresh plan for each parameter combination (good for selectivity) but wastes CPU on compilation. At FAANG scale, these patterns are avoided by using different queries for different access patterns rather than one catch-all. Building SQL strings at the application layer (EF Core, Dapper) and sending parameterized queries is preferred over dynamic SQL in procedures.

### Explain Like I'm 7

Dynamic SQL is like having a recipe that says "add the ingredient you want" - you have to write the instruction while cooking. It's flexible but you need to be careful not to add the wrong thing (SQL injection).

</details>

---

## Q66: Function Limitations

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL Server functions have significant limitations: cannot execute dynamic SQL, cannot modify data (with exceptions in some cases for iTVFs), cannot use temporary tables, cannot have side effects, and cannot use non-deterministic functions like GETDATE() in certain contexts (indexed views, computed columns). Scalar functions prevent parallelism.

### Detailed Explanation

- **What it is:** Restrictions on what can be done inside SQL Server user-defined functions.
- **Why they exist:** Functions are expected to be deterministic and side-effect-free for optimization and indexing.
- **What problem they solve:** Ensures functions can be used in computed columns, indexed views, and query optimizations.
- **Key limitations:** No dynamic SQL, no temp tables, no DML (except table variables), no stored procedure calls, no non-deterministic functions in certain contexts.
- **Impact:** Scalar functions block parallelism (query runs on single thread). Functions with data access are performance disasters.

### SQL Example

```sql
-- NOT ALLOWED inside functions:
CREATE FUNCTION dbo.BadFunction()
RETURNS INT
AS
BEGIN
    CREATE TABLE #temp (id INT);  -- Error: temp tables not allowed
    
    EXEC sp_executesql N'SELECT 1';  -- Error: dynamic SQL not allowed
    
    UPDATE orders SET status = 'X';  -- Error: data modification not allowed
    
    RETURN 1;
END;

-- ALLOWED:
-- Table variables (DECLARE @t TABLE)
-- SELECT statements
-- Scalar computations
-- Local variables
-- Control-of-flow (IF/WHILE)

-- Non-deterministic functions in UDF:
CREATE FUNCTION dbo.GetDate()
RETURNS DATETIME
AS
BEGIN
    RETURN GETDATE();  -- Allowed in scalar UDF but prevents certain optimizations
END;
```

### Performance Considerations

- Scalar function in query: forces serial execution (no parallelism)
- Scalar function executes per row (O(n) function calls)
- Functions are black boxes - optimizer can't estimate their cost
- UDFs with data access: each call could be a full query

### Common Mistakes

- Using scalar functions in WHERE clauses on large tables (disastrous)
- Thinking functions have no performance cost
- Using functions that access tables in SELECT clauses

### Follow-Up Questions

**Junior:**
1. Can a function modify data?
2. Can a function use dynamic SQL?

**Mid-level:**
1. Why do scalar functions prevent parallelism?
2. What exceptions exist for data modification in functions?

**Senior-level:**
1. Design a workaround for a scenario that needs a function but requires dynamic SQL.
2. Explain the SQL Server 2019+ change to inline scalar UDFs.

### FAANG-Level Deep Dive

SQL Server 2019 introduced scalar UDF inlining (for a subset of UDFs) - the optimizer can inline simple scalar functions, eliminating the per-row overhead. However, UDFs with data access, non-deterministic functions, or complex control flow are NOT inlined. At FAANG scale, all UDFs are reviewed for performance impact before deployment. The general rule: if it touches data, use a stored procedure or inline TVF; if it's a simple computation, consider a computed column or application-layer code.

### Explain Like I'm 7

Functions have rules: they can't make phone calls (dynamic SQL), can't rearrange furniture (modify data), can't use scrap paper (temp tables). They can only look at what's given to them and do math. This keeps them predictable.

</details>

---

# Topic 10: Database Design (Q67-Q73)

---

## Q67: Denormalization

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Denormalization is intentionally adding redundancy to a database schema for performance - reducing JOINs by storing redundant data. Common patterns: pre-joined tables, summary tables, computed columns, materialized views (indexed views). Used in reporting and read-heavy workloads. Trade-off: update anomalies and data consistency overhead.

### Detailed Explanation

- **What it is:** Adding redundant columns or tables to a normalized schema to improve read performance.
- **Why it exists:** Normalized schemas require many JOINs for common queries. Denormalization trades storage/consistency for speed.
- **What problem it solves:** Reduces JOINs (costly for large datasets), improves read performance, simplifies queries.
- **When to use it:** Reporting tables, data warehouse star schemas, read-heavy OLTP with specific access patterns.
- **When NOT to use it:** Write-heavy OLTP (update anomalies). When data consistency is critical (normalized is safer).

### Real-World Example

Orders have customer_name. Instead of JOINing Customers every time, store customer_name directly in Orders. Update customer name in both tables when it changes.

### SQL Example

```sql
-- Normalized: requires JOIN
SELECT o.order_id, c.customer_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;

-- Denormalized: no JOIN needed
SELECT order_id, customer_name
FROM orders_denormalized;

-- Maintaining denormalized data:
-- Option 1: Update both tables
CREATE TRIGGER trg_UpdateCustomerName
ON customers AFTER UPDATE
AS
    UPDATE o SET o.customer_name = i.customer_name
    FROM orders_denormalized o
    INNER JOIN inserted i ON o.customer_id = i.customer_id;

-- Option 2: Indexed view (materialized view)
CREATE VIEW v_OrderCustomer WITH SCHEMABINDING
AS
SELECT o.order_id, o.order_date, c.customer_name
FROM dbo.orders o
JOIN dbo.customers c ON o.customer_id = c.customer_id;
CREATE UNIQUE CLUSTERED INDEX IX_v_OrderCustomer ON v_OrderCustomer(order_id);
```

### Performance Considerations

- Faster reads (fewer JOINs)
- Slower writes (must maintain redundancy)
- More storage (redundant data)
- Consistency risk (data must be updated in multiple places)
- Indexed views solve consistency but have overhead

### Common Mistakes

- Denormalizing prematurely (without measuring performance)
- Not maintaining denormalized data consistently (triggers or application logic)
- Denormalizing when proper indexing would solve the problem
- Confusing denormalization with poor schema design

### Follow-Up Questions

**Junior:**
1. What is denormalization?
2. What's the trade-off of denormalization?

**Mid-level:**
1. How do indexed views compare to denormalized tables?
2. When would you denormalize an OLTP schema?

**Senior-level:**
1. Design a denormalization strategy for a social media feed that balances read performance with write cost.
2. Compare trigger-based vs application-based denormalization maintenance.

### FAANG-Level Deep Dive

At FAANG scale, denormalization is the norm. CQRS (Command Query Responsibility Segregation) separates write models (normalized) from read models (denormalized). Eventual consistency between them is handled via event sourcing. The read model is rebuilt asynchronously from events. This avoids the consistency problems of trigger-based denormalization while maintaining read performance.

### Explain Like I'm 7

Denormalization is like writing your friend's address on your own notebook instead of looking it up in the address book every time. It's faster when you write letters, but if your friend moves, you have to remember to update both your notebook and the address book.

</details>

---

## Q68: Table Partitioning

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Table partitioning splits a large table into smaller physical segments (partitions) based on a partition key, while maintaining a single logical table. Enables partition elimination (query only scans relevant partitions), partition-switching (instant data movement), and easier maintenance (rebuild one partition at a time).

### Detailed Explanation

- **What it is:** Physically dividing a table into multiple filegroups based on a partition function (range-based).
- **Why it exists:** Very large tables (VLDBs) are hard to manage - backups, index rebuilds, data purging.
- **What problem it solves:** Faster query performance (elimination), faster maintenance, sliding window scenarios.
- **When to use it:** Tables > 500GB or > 100M rows. Time-series data (by date). Data that is archived by range.
- **When NOT to use it:** Small tables (overhead > benefit). Tables without a natural partition key. Write-heavy tables (partition-level lock escalation).

### Internal Working

Partition function maps rows to partition numbers based on boundary values. Partition scheme maps partitions to filegroups. Each partition has its own B-tree (clustered index). Queries filter on partition key for partition elimination.

### SQL Example

```sql
-- Create partition function (range right)
CREATE PARTITION FUNCTION pf_SalesDate (DATETIME2)
AS RANGE RIGHT FOR VALUES (
    '2023-01-01', '2023-04-01', '2023-07-01', '2023-10-01',
    '2024-01-01', '2024-04-01', '2024-07-01', '2024-10-01',
    '2025-01-01'
);

-- Create partition scheme
CREATE PARTITION SCHEME ps_SalesDate
AS PARTITION pf_SalesDate
TO ([PRIMARY], [PRIMARY], [PRIMARY], [PRIMARY],
    [PRIMARY], [PRIMARY], [PRIMARY], [PRIMARY],
    [PRIMARY], [PRIMARY]);

-- Create partitioned table
CREATE TABLE sales_fact (
    sale_id BIGINT,
    sale_date DATETIME2 NOT NULL,
    amount DECIMAL(12,2)
) ON ps_SalesDate(sale_date);

-- Query that benefits from partition elimination
SELECT SUM(amount) FROM sales_fact
WHERE sale_date >= '2024-01-01' AND sale_date < '2024-04-01';
-- Only scans partition(s) containing Q1 2024 data

-- Partition switching (instant data archiving)
ALTER TABLE sales_fact SWITCH PARTITION 1 TO archive_sales;
```

### Performance Considerations

- Partition elimination: only relevant partitions scanned
- Index maintenance: rebuild one partition at a time (reduces log)
- Lock escalation: can escalate to partition level (not full table)
- Partitioned indexes: each partition has its own B-tree
- Aligned indexes: same partition scheme as table

### Common Mistakes

- Partitioning on a column not used in WHERE (no elimination)
- Too many partitions (more than 1000 causes issues)
- Not aligning indexes with the partitioned table
- Switching partitions without checking constraints

### Follow-Up Questions

**Junior:**
1. What is table partitioning?
2. What is partition elimination?

**Mid-level:**
1. How does partition switching work?
2. When is partitioning not beneficial?

**Senior-level:**
1. Design a sliding window partition strategy for 5 years of data with monthly partitions.
2. Explain how partitioned indexes work and when to use aligned vs non-aligned indexes.

### FAANG-Level Deep Dive

Partition-level lock escalation (SQL Server 2008+) allows locks to escalate to the partition level instead of the table level, improving concurrency for partitioned tables. Partition switching requires aligned indexes and matching constraints. The SWITCH operation is metadata-only (instant). At FAANG scale, time-series data uses sliding window partitions with monthly boundaries - old partitions are switched to archive and truncated with zero downtime.

### Explain Like I'm 7

Partitioning is like splitting a giant encyclopedia into smaller booklets by year. If you need information about 2024, you only pick up the 2024 booklet instead of carrying the whole thing. You can also easily remove the 2020 booklet and put it in storage without touching the others.

</details>

## Q69: Sharding

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Sharding is a horizontal scaling technique where data is distributed across multiple independent databases (shards) based on a shard key. Each shard holds a subset of data, and no single database holds all data. Unlike partitioning (within one instance), sharding is across multiple servers.

### Detailed Explanation

- **What it is:** Distributing rows of a table across multiple database instances based on a shard key.
- **Why it exists:** Single database can't handle unlimited scale. Sharding allows write throughput to scale horizontally.
- **What problem it solves:** Overcomes single-server limitations - storage, CPU, memory, I/O.
- **When to use it:** When data exceeds single-server capacity (> 5-10TB). Write throughput > single server can handle. Geographic distribution (data closer to users).
- **When NOT to use it:** When data fits on one server (overly complex). When cross-shard JOINs are frequent. When strong consistency across shards is required.

### Internal Working

A shard map (lookup table or application logic) maps shard key values to database instances. Each shard is a fully independent database. Queries must specify the shard key to be efficient (routed to single shard). Cross-shard queries use fan-out (query all shards, aggregate results).

### Real-World Example

Multi-tenant SaaS: each customer (tenant) is assigned a shard. Customer data stays on one shard. Shard key = CustomerID.

### SQL Example

```sql
-- Shard map table (application-managed)
CREATE TABLE ShardMap (
    tenant_id INT PRIMARY KEY,
    shard_id INT,
    connection_string VARCHAR(500)
);

-- Query routed to specific shard
-- SELECT * FROM ShardMap WHERE tenant_id = @tid
-- Connect to shard_connection_string
-- Execute: SELECT * FROM Orders WHERE tenant_id = @tid

-- Elastic Query (Azure SQL): query across shards
CREATE EXTERNAL TABLE [dbo].[Orders_Shard1]
AS SELECT * FROM [Shard1].[dbo].[Orders];

-- Fan-out query
SELECT COUNT(*) FROM (
    SELECT * FROM [Shard1].[dbo].[Orders]
    UNION ALL
    SELECT * FROM [Shard2].[dbo].[Orders]
) AS all_orders;
```

### Performance Considerations

- Single-shard queries: fast (direct routing)
- Cross-shard queries: fan-out to all shards (slow)
- Cross-shard JOINs: very expensive (must pull data to app layer)
- Distributed transactions: avoid (2PC is slow, unreliable)
- Shard rebalancing: complex (moving data between shards)

### Common Mistakes

- Choosing a poor shard key (hot shard problem)
- Needing frequent cross-shard queries (sharding may be wrong choice)
- Not planning for shard rebalancing
- Assuming all transactions can be cross-shard
- Not monitoring shard utilization (some shards hot, others cold)

### Follow-Up Questions

**Junior:**
1. What is sharding?
2. How does sharding differ from partitioning?

**Mid-level:**
1. What is a good shard key and why?
2. How do you query across shards?

**Senior-level:**
1. Design a sharding strategy for a global social media platform.
2. Explain the trade-offs between range-based and hash-based sharding.

### FAANG-Level Deep Dive

At FAANG scale, sharding is fundamental. Shard keys must be chosen to: (1) distribute data evenly (avoid hot shards), (2) collocate related data (avoid cross-shard queries), (3) support the most common access patterns. Common sharding strategies: hash-based (even distribution but range queries go to all shards), range-based (good for date-ranged queries but can become unbalanced), directory-based (shard map, flexible but adds lookup). Facebook uses hash sharding for user data; Google Spanner uses range-based with automatic rebalancing.

### Explain Like I'm 7

Sharding is like having multiple filing cabinets in different rooms. Each cabinet holds some files. Customer A's files are in Room 1, Customer B's in Room 2. When you need Customer A's files, you only go to Room 1. But if you need to compare all customers, you have to run between all rooms.

</details>

---

## Q70: Vertical vs Horizontal Partitioning

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Vertical partitioning splits a table by columns (wider table -> narrower tables). Horizontal partitioning splits by rows (partitioning in SQL Server, sharding). Vertical: split rarely-used columns, LOB columns, or security-sensitive columns. Horizontal: split by date ranges, regions, or tenant IDs.

### Detailed Explanation

- **What it is:** Vertical: dividing columns across tables (1:1 relationship). Horizontal: dividing rows across partitions/shards.
- **Why they exist:** Different access patterns need different physical organization.
- **What problem they solve:** Vertical: reduce row width (more rows per page), isolate security-sensitive data. Horizontal: manage large data volume, enable partition elimination.
- **When to use vertical:** Wide tables with infrequently accessed columns. Tables with LOB/XML columns. Security separation.
- **When to use horizontal:** Very large tables (> 100M rows). Time-series data. Geographically distributed data.

### SQL Example

```sql
-- Vertical partitioning
CREATE TABLE Employees_Main (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT
);

CREATE TABLE Employees_Details (
    employee_id INT PRIMARY KEY REFERENCES Employees_Main(employee_id),
    salary DECIMAL(12,2),
    performance_rating INT,
    resume VARBINARY(MAX)  -- LOB column separated
);

-- Query both when needed
SELECT m.*, d.salary
FROM Employees_Main m
LEFT JOIN Employees_Details d ON m.employee_id = d.employee_id;

-- Horizontal partitioning (SQL Server built-in)
CREATE PARTITION FUNCTION pf_Date (DATETIME2)
AS RANGE RIGHT FOR VALUES ('2023-01-01', '2024-01-01', '2025-01-01');
CREATE PARTITION SCHEME ps_Date AS PARTITION pf_Date ALL TO ([PRIMARY]);
CREATE TABLE Orders_Partitioned (
    order_id INT,
    order_date DATETIME2,
    amount DECIMAL(12,2)
) ON ps_Date(order_date);
```

### Performance Considerations

- Vertical: reduces row size = more rows per page = fewer I/Os for frequent columns
- Vertical: extra JOIN required (performance cost)
- Horizontal: partition elimination reduces I/O for range queries
- Horizontal: only useful when queries filter on partition key

### Common Mistakes

- Vertical: over-partitioning (too many tables to JOIN)
- Horizontal: partitioning on wrong column (no elimination)
- Confusing physical partitioning with sharding

### Follow-Up Questions

**Junior:**
1. Difference between vertical and horizontal partitioning?
2. When would you split a table vertically?

**Mid-level:**
1. How does vertical partitioning affect page density?
2. How does SQL Server's horizontal partitioning differ from sharding?

**Senior-level:**
1. Design a combined vertical and horizontal partitioning strategy for a 500-column table with 1B rows.
2. Explain how rowstore vs columnstore choices affect partitioning decisions.

### FAANG-Level Deep Dive

At FAANG scale, vertical partitioning is common for "hot/cold" data - frequently accessed columns in one table, rarely accessed metadata in another. This reduces cache pressure (hot data stays in memory). Columnstore indexes provide a form of automatic vertical partitioning (only read needed columns). The choice between vertical partitioning and INCLUDEd indexes depends on access patterns and update frequency.

### Explain Like I'm 7

Vertical partitioning: instead of one big card with all info, split into a small name card and a detailed info card. Look at the name card 90% of the time. Horizontal partitioning: instead of one year-long calendar, use a separate page for each month.

</details>

---

## Q71: Indexing Strategy for Design

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

An indexing strategy aligns database indexes with query patterns. Key principles: index by query WHERE/JOIN/ORDER BY columns; consider selectivity; balance read performance vs write overhead; use covering indexes for critical queries; monitor and remove unused indexes.

### Detailed Explanation

- **What it is:** A systematic approach to creating indexes that optimize the most important queries.
- **Why it exists:** Without strategy, indexes are created reactively (too many or too few).
- **What problem it solves:** Maximizes query performance while minimizing DML overhead and storage.
- **When to design:** During schema design (not after performance problems). Review quarterly.
- **Key decisions:** Clustered key choice, composite key order, covering INCLUDE columns, filtered indexes for subsets.

### Performance Considerations

- Each index adds DML overhead (INSERT: each index gets a row; UPDATE: may move between indexes)
- Index maintenance (fragmentation) costs CPU and I/O
- Monitor: sys.dm_db_index_usage_stats (seeks vs scans)
- Unused indexes: wasteful (space + DML overhead)
- Missing indexes: sys.dm_db_missing_index_details

### Real-World Example

E-commerce: orders queried by customer_id (WHERE) and sorted by order_date (ORDER BY). Index: KEY(customer_id, order_date) INCLUDE (order_total, status). Index covers 90% of order queries.

### SQL Example

```sql
-- Identify missing indexes
SELECT * FROM sys.dm_db_missing_index_details;
SELECT * FROM sys.dm_db_missing_index_groups;
SELECT * FROM sys.dm_db_missing_index_group_stats;

-- Identify unused indexes
SELECT OBJECT_NAME(i.object_id) AS table_name, i.name AS index_name,
       s.user_seeks, s.user_scans, s.user_updates, s.last_user_seek
FROM sys.dm_db_index_usage_stats s
JOIN sys.indexes i ON s.object_id = i.object_id AND s.index_id = i.index_id
WHERE s.database_id = DB_ID()
AND s.user_seeks + s.user_scans = 0  -- No reads
OR (s.user_seeks + s.user_scans) * 1.0 / NULLIF(s.user_updates, 0) < 0.1;  -- Mostly writes

-- Index design for specific query
-- Query: SELECT order_total, status FROM orders WHERE customer_id = @cid ORDER BY order_date
-- Index: KEY(customer_id, order_date) INCLUDE(order_total, status)
-- This is a covering index that supports both filter and sort
```

### Common Mistakes

- Indexing all foreign keys without considering query patterns
- Creating indexes on low-selectivity columns (bit, status with 2-3 values)
- Not monitoring index usage (keeping unused indexes)
- Over-indexing (10+ indexes on an OLTP table)

### Follow-Up Questions

**Junior:**
1. How do you decide which columns to index?
2. What is selectivity and why does it matter?

**Mid-level:**
1. How do you use sys.dm_db_missing_index_details to tune queries?
2. Explain the trade-off between read performance and write overhead.

**Senior-level:**
1. Design an indexing strategy for a hybrid OLTP/analytics table.
2. Explain how to use index intersection and indexed views to reduce the number of indexes needed.

### FAANG-Level Deep Dive

The "index tuning" process at FAANG uses: (1) automated analysis of query store data, (2) missing index DMV analysis, (3) workload simulation with hypothetical indexes. Indexes with zero seeks are automatically dropped (with monitoring period for re-creation). The goal is to have < 5 indexes per table with maximum query coverage. Columnstore indexes are used for analytics on the same table as OLTP rowstore indexes.

### Explain Like I'm 7

Indexing strategy is like organizing a library. You look at which books people ask for most and put those in easy-to-find spots. If nobody ever asks for a book, you don't put it in a special spot. If people always ask for the same combination (mystery books from 2024), you organize them together.

</details>

---

## Q72: Entity-Relationship Modeling

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Entity-Relationship (ER) modeling is a conceptual data modeling technique that identifies entities (tables), attributes (columns), and relationships (PK-FK). Cardinality (1:1, 1:N, M:N) determines table structure. M:N relationships require junction tables. Good ER models form the foundation of normalized, maintainable databases.

### Detailed Explanation

- **What it is:** A methodology for visually representing the data structure of a system.
- **Why it exists:** Provides a blueprint for database design - understanding business requirements before creating tables.
- **What problem it solves:** Captures business rules (a customer has many orders), prevents design errors, documents the schema.
- **When to use it:** Before creating any schema. As documentation for existing databases.
- **Key concepts:** Entity, attribute, relationship, cardinality (1:1, 1:N, M:N), participation (total/partial).

### SQL Example

```sql
-- ER Model: Customer (1) ---< Order (M)
-- Customer: customer_id PK, name, email
-- Order: order_id PK, customer_id FK, order_date, total

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE Order (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES Customer(customer_id),
    order_date DATETIME2,
    total DECIMAL(12,2)
);

-- ER Model: M:N - Student M ---< Enrollment >--- M Course
-- Junction table: Enrollment(student_id, course_id, enrollment_date)

CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    title VARCHAR(200)
);

CREATE TABLE Enrollment (
    student_id INT REFERENCES Student(student_id),
    course_id INT REFERENCES Course(course_id),
    enrollment_date DATETIME2,
    PRIMARY KEY (student_id, course_id)
);
```

### Performance Considerations

- Well-modeled schemas reduce query complexity
- M:N relationships require JOINs through junction table (3 tables)
- Inheritance patterns (table-per-type, table-per-hierarchy) affect query patterns
- ER model translates directly to normalized tables

### Common Mistakes

- Missing junction tables for M:N relationships
- Confusing 1:N with M:N relationships
- Not identifying weak entities (dependent on parent)
- Overcomplicating the model with unnecessary abstractions

### Follow-Up Questions

**Junior:**
1. What is a junction table?
2. What's the difference between 1:N and M:N?

**Mid-level:**
1. How do you model inheritance in a relational database?
2. When would you denormalize from the ER model?

**Senior-level:**
1. Model a complex domain (hospital scheduling) in ER and then convert to physical schema.
2. Explain how to handle temporal data (history tracking) in ER models.

### FAANG-Level Deep Dive

ER modeling at FAANG scale incorporates: (1) growth projections (the model must scale), (2) access patterns (model for how data is read, not just how it relates), (3) shard key identification. The conceptual model may remain normalized while the physical implementation diverges significantly (NoSQL, denormalized, sharded). Data modeling is done collaboratively with product engineers to ensure the model supports both current and future queries.

### Explain Like I'm 7

ER modeling is like drawing a map of your city before building it. You mark where houses (entities) go, how streets connect them (relationships), and how many people travel each route (cardinality). A good map prevents building a house in the middle of a road.

</details>

---

## Q73: Design Patterns for Scalability

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Scalability design patterns include: CQRS (separate read/write models), event sourcing (store events, derive state), materialized views (pre-computed query results), cache-aside (cache + database), and read replicas (distribute read load). The key is identifying which pattern fits the access patterns and consistency requirements.

### Detailed Explanation

- **What it is:** Architectural patterns that handle increasing data volume and query load.
- **Why they exist:** Single-database approaches break at scale.
- **Common patterns:**
  - CQRS: Different models for reads and writes
  - Event sourcing: Immutable event log, current state is derived
  - Read replicas: Offload reporting to read-only copies
  - Cache-aside: Application checks cache before database
  - Materialized views: Pre-computed aggregates refreshed periodically
- **When to use:** CQRS when read/write patterns differ significantly. Read replicas when reads >> writes. Caching for hot data with moderate staleness tolerance.

### Real-World Example

E-commerce: writes go to normalized OLTP database; product search uses denormalized data in Redis cache + Elasticsearch; order history reads from read replicas; inventory uses event-sourced state.

### SQL Example

```sql
-- CQRS: Write model (normalized)
CREATE TABLE Orders_Write (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATETIME2,
    status VARCHAR(20)
);
CREATE TABLE OrderItems_Write (
    order_id INT, product_id INT, quantity INT, price DECIMAL(12,2)
);

-- CQRS: Read model (denormalized for fast queries)
CREATE TABLE Orders_Read (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(255),
    order_date DATETIME2,
    status VARCHAR(20),
    total_items INT,
    total_amount DECIMAL(12,2),
    product_names VARCHAR(MAX)  -- Comma-separated for fast display
);

-- Read replica: Availability Group readable secondary
-- Application uses ApplicationIntent=READONLY for reporting queries

-- Cache-aside pattern (pseudo-code)
-- function GetProduct(id):
--   product = cache.get("product:" + id)
--   if product == null:
--     product = db.query("SELECT * FROM products WHERE id = @id", id)
--     cache.set("product:" + id, product, ttl=300)
--   return product
```

### Performance Considerations

- CQRS: eventual consistency (write model -> read model lag)
- Read replicas: data staleness (replication lag)
- Cache: cache misses (thundering herd), stale data
- Materialized views: refresh cost, staleness
- Each pattern trades consistency for performance

### Common Mistakes

- Over-engineering: using CQRS when a simple index would suffice
- Ignoring eventual consistency (application assumes immediate consistency)
- Cache invalidation bugs (serving stale data)
- Not monitoring cache hit ratios
- Read replica with heavy write load (replication lag)

### Follow-Up Questions

**Junior:**
1. What is a read replica?
2. What is caching and why is it used?

**Mid-level:**
1. Explain CQRS and when to use it.
2. How do you handle cache invalidation?

**Senior-level:**
1. Design a scalable architecture for a global real-time analytics platform using these patterns.
2. Compare the consistency guarantees of read replicas vs caching vs CQRS.

### FAANG-Level Deep Dive

At FAANG scale, every system uses a combination of these patterns. Google uses Spanner for strongly consistent writes with PBs of data. Facebook uses read replicas extensively (every region has local replicas). Twitter uses cache-aside with Redis for timelines. The key insight: choose patterns that match your consistency SLA. High consistency = fewer patterns (Spanner). High availability + eventual consistency = more patterns (DynamoDB + DAX cache + replicas).

### Explain Like I'm 7

Scalability patterns are like different ways to serve a huge crowd at a restaurant. CQRS: the chef (write) and the server (read) work separately. Read replicas: have extra copies of the menu so more people can read at once. Caching: keep popular dishes pre-made near the counter. Event sourcing: write everything in a journal and figure out the current state by reading the journal.

</details>

---

# Topic 11: Advanced SQL (Q74-Q81)

---

## Q74: PIVOT

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

PIVOT transforms rows into columns (cross-tabulation), rotating unique values from one column into multiple columns in the output. Used for creating summary matrices, reporting, and dashboard data. Requires knowing the pivot column values at query time (static) or using dynamic SQL (dynamic).

### Detailed Explanation

- **What it is:** A relational operator that rotates rows to columns by aggregating values.
- **Why it exists:** Reporting often needs data in a matrix format (months as columns, categories as rows).
- **What problem it solves:** Converts normalized data into a cross-tab format without multiple joins or subqueries.
- **When to use it:** Financial reports (quarters as columns), sales by region matrix, attendance by month.
- **When NOT to use it:** When pivot values are unknown at compile time (use dynamic PIVOT). When aggregation isn't needed (use conditional aggregation via CASE instead).

### Real-World Example

Sales: (Year, Quarter, Amount) -> (Year, Q1, Q2, Q3, Q4).

### SQL Example

```sql
-- Source data: Sales(Year, Quarter, Amount)
SELECT Year, Quarter, SUM(Amount) AS Total
FROM Sales
GROUP BY Year, Quarter;

-- PIVOT: quarters as columns
SELECT Year, [1] AS Q1, [2] AS Q2, [3] AS Q3, [4] AS Q4
FROM (
    SELECT Year, Quarter, Amount
    FROM Sales
) AS SourceTable
PIVOT (
    SUM(Amount)
    FOR Quarter IN ([1], [2], [3], [4])
) AS PivotTable;

-- Dynamic PIVOT (when quarter values are unknown)
DECLARE @cols NVARCHAR(MAX);
SELECT @cols = STRING_AGG(QUOTENAME(Quarter), ',')
FROM (SELECT DISTINCT Quarter FROM Sales) AS q;

DECLARE @sql NVARCHAR(MAX) = N'
SELECT Year, ' + @cols + '
FROM (SELECT Year, Quarter, Amount FROM Sales) AS src
PIVOT (SUM(Amount) FOR Quarter IN (' + @cols + ')) AS pvt';

EXEC sp_executesql @sql;
```

### Performance Considerations

- PIVOT requires a grouped aggregation (SUM, COUNT, AVG, etc.)
- The source query (inner SELECT) should be efficient
- Dynamic PIVOT requires dynamic SQL (plan caching implications)
- Consider conditional aggregation (CASE) as an alternative

### Common Mistakes

- Not aggregating in PIVOT (forgetting SUM/COUNT)
- Using PIVOT when conditional aggregation (CASE + GROUP BY) is simpler
- Not handling NULLs from missing pivot values
- Using dynamic PIVOT without QUOTENAME (SQL injection)

### Follow-Up Questions

**Junior:**
1. What does PIVOT do?
2. Do you need an aggregate function with PIVOT?

**Mid-level:**
1. How to handle unknown pivot values?
2. PIVOT vs conditional aggregation (SUM(CASE)) - performance comparison?

**Senior-level:**
1. Design a dynamic PIVOT that handles changing column values securely.
2. Explain how the PIVOT operator works internally compared to GROUP BY + CASE.

### FAANG-Level Deep Dive

PIVOT internally uses a combination of grouping and aggregation with a specific plan shape (Stream Aggregate + Compute Scalar). The optimizer may choose different plans based on the aggregation. Dynamic PIVOT is common in financial reporting at FAANG - with careful use of QUOTENAME() and sp_executesql for security. An alternative pattern at scale: generate the matrix in the application layer from normalized query results.

### Explain Like I'm 7

PIVOT is like turning a grocery list that says "Monday: apples, Tuesday: bananas" into a calendar where you can see Monday/Tuesday across the top and what was bought below each day.

</details>

---

## Q75: UNPIVOT

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

UNPIVOT transforms columns into rows - the reverse of PIVOT. It takes multiple columns with similar data and converts them into a normalized structure with column name/value pairs. Used to normalize denormalized data for analysis or ETL.

### Detailed Explanation

- **What it is:** An operator that rotates columns into rows, creating a normalized structure from a wide table.
- **Why it exists:** Sometimes input data comes in wide format (e.g., monthly columns for each month). Analysis needs narrow format.
- **What problem it solves:** Converts pivoted/reporting data back to normalized format for further processing.
- **When to use it:** Normalizing imported data. ETL from reporting systems. Preparing data for machine learning.
- **When NOT to use it:** When the data is already normalized (no benefit). When CROSS APPLY with VALUES provides more flexibility.

### SQL Example

```sql
-- Source: Wide format
CREATE TABLE QuarterlySales (
    Year INT,
    Q1 DECIMAL(12,2),
    Q2 DECIMAL(12,2),
    Q3 DECIMAL(12,2),
    Q4 DECIMAL(12,2)
);

-- UNPIVOT to normalized
SELECT Year, Quarter, Amount
FROM QuarterlySales
UNPIVOT (
    Amount FOR Quarter IN (Q1, Q2, Q3, Q4)
) AS unpvt;

-- Equivalent using CROSS APPLY (more flexible)
SELECT Year, v.*
FROM QuarterlySales s
CROSS APPLY (VALUES ('Q1', Q1), ('Q2', Q2), ('Q3', Q3), ('Q4', Q4)) 
    AS v(Quarter, Amount);

-- UNPIVOT with multiple value columns
SELECT Year, Quarter, Amount, Bonus
FROM QuarterlySales
UNPIVOT (
    Amount FOR Quarter IN (Q1, Q2, Q3, Q4)
) AS a
UNPIVOT (
    Bonus FOR Quarter IN (Q1_Bonus, Q2_Bonus, Q3_Bonus, Q4_Bonus)
) AS b
WHERE a.Quarter = REPLACE(b.Quarter, '_Bonus', 'Q');
```

### Performance Considerations

- UNPIVOT scans source data and generates multiple output rows per input
- CROSS APPLY VALUES is often more efficient and flexible than UNPIVOT
- Multiple UNPIVOTs on same query require careful matching

### Common Mistakes

- Not matching data types in UNPIVOT columns (all must be same type)
- Confusing UNPIVOT with PIVOT
- Using UNPIVOT when source is already normalized
- Not handling NULLs (UNPIVOT excludes NULLs by default)

### Follow-Up Questions

**Junior:**
1. What does UNPIVOT do?
2. How does UNPIVOT handle NULL values?

**Mid-level:**
1. UNPIVOT vs CROSS APPLY VALUES - differences?
2. When would you need UNPIVOT in ETL?

**Senior-level:**
1. Design an ETL process that uses both PIVOT and UNPIVOT for data transformation.
2. Explain how the UNPIVOT operator handles column type mismatches.

### FAANG-Level Deep Dive

UNPIVOT is rarely used directly at FAANG scale. The CROSS APPLY VALUES pattern is more common because it: (1) handles multiple source tables, (2) allows custom naming, (3) supports complex transformations, (4) can filter during unpivot. UNPIVOT is mainly used when reading from legacy systems or external data sources that provide wide-format data.

### Explain Like I'm 7

UNPIVOT is the opposite of PIVOT. If PIVOT turns a grocery list into a calendar, UNPIVOT turns the calendar back into a simple list. "Monday: apples, Tuesday: bananas" becomes a simple list of day-item pairs.

</details>

---

## Q76: MERGE (UPSERT)

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

MERGE (also called UPSERT) performs INSERT, UPDATE, and DELETE operations in a single statement based on a source-to-target match. It's powerful for data synchronization but has known issues (concurrency bugs, parameter sniffing). SQL Server recommends using separate INSERT/UPDATE in many cases.

### Detailed Explanation

- **What it is:** A DML statement that inserts, updates, or deletes rows based on a join condition.
- **Why it exists:** Simplifies common ETL patterns (synchronize source and target).
- **What problem it solves:** Reduces code complexity for synchronizing two tables.
- **When to use it:** ETL merges, data warehouse upserts, syncing reference data.
- **When NOT to use it:** High-concurrency OLTP (MERGE has concurrency bugs with updated rows). Simple insert-or-update (use separate statements or IF EXISTS).

### SQL Example

```sql
-- MERGE: synchronize target with source
MERGE INTO Inventory AS Target
USING InventoryUpdates AS Source
ON Target.ProductID = Source.ProductID
WHEN MATCHED AND Target.Quantity <> Source.Quantity THEN
    UPDATE SET Target.Quantity = Source.Quantity, 
               Target.LastUpdated = GETDATE()
WHEN NOT MATCHED BY TARGET THEN
    INSERT (ProductID, Quantity, LastUpdated)
    VALUES (Source.ProductID, Source.Quantity, GETDATE())
WHEN NOT MATCHED BY SOURCE THEN
    DELETE;

-- Equivalent using separate statements:
BEGIN TRANSACTION;
UPDATE i SET Quantity = u.Quantity, LastUpdated = GETDATE()
FROM Inventory i
INNER JOIN InventoryUpdates u ON i.ProductID = u.ProductID
WHERE i.Quantity <> u.Quantity;

INSERT INTO Inventory (ProductID, Quantity, LastUpdated)
SELECT ProductID, Quantity, GETDATE()
FROM InventoryUpdates u
WHERE NOT EXISTS (SELECT 1 FROM Inventory i WHERE i.ProductID = u.ProductID);

DELETE FROM Inventory
WHERE NOT EXISTS (SELECT 1 FROM InventoryUpdates u WHERE u.ProductID = ProductID);
COMMIT;
```

### Performance Considerations

- MERGE scans both source and target
- MERGE logs all operations (can fill log for large operations)
- MERGE has known concurrency issues (updates may not be properly serialized)
- MERGE can't be used in index views with specific NOT NULL columns
- MERGE's plan is often complex (multiple clustered index updates)

### Common Mistakes

- Not using HOLDLOCK or SERIALIZABLE with MERGE for concurrent scenarios
- Assuming MERGE is atomic (it is, but concurrency bugs exist)
- Using MERGE for simple insert/update (IF EXISTS is simpler)
- Not handling the OUTPUT clause correctly

### Follow-Up Questions

**Junior:**
1. What operations can MERGE perform?
2. What are the WHEN clauses in MERGE?

**Mid-level:**
1. When should you avoid MERGE?
2. How does MERGE handle concurrency?

**Senior-level:**
1. Design an ETL merge process for a high-volume data warehouse load.
2. Explain the concurrency bugs in MERGE and how to work around them.

### FAANG-Level Deep Dive

SQL Server's MERGE has documented concurrency issues when the same row is updated concurrently (may result in "could not continue scan with NOLOCK" error or incorrect results). Microsoft's guidance (2014+) recommends using separate INSERT/UPDATE/DELETE statements for high-concurrency scenarios. At FAANG scale, MERGE is avoided for OLTP and used only in batch ETL with exclusive table locks.

### Explain Like I'm 7

MERGE is like updating your to-do list based on a new list. If a task is on both lists, you update it. If it's only on the new list, you add it. If it's only on the old list, you remove it. All in one action.

</details>

---

## Q77: Dynamic SQL

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Dynamic SQL builds and executes SQL strings at runtime. Use sp_executesql (not EXEC) for parameterization and security. Use QUOTENAME() for object names. Needed for: dynamic object names, catch-all search conditions, dynamic PIVOT columns. Has security risks (SQL injection) and performance implications (plan cache bloat).

### Detailed Explanation

- **What it is:** SQL code generated and executed at runtime from string expressions.
- **Why it exists:** Some query structures (table names, column lists, WHERE conditions) can't be determined at compile time.
- **What problem it solves:** Enables flexible query patterns.
- **When to use it:** Dynamic table names (ETL), catch-all search procedures, dynamic PIVOT, dynamic column lists.
- **When NOT to use it:** When static SQL works. In functions (dynamic SQL not allowed).

### SQL Example

```sql
-- Dynamic object name (safe)
CREATE PROCEDURE dbo.GetTableCount @SchemaName NVARCHAR(128), @TableName NVARCHAR(128)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX) = N'SELECT COUNT(*) FROM ' 
        + QUOTENAME(@SchemaName) + '.' + QUOTENAME(@TableName);
    EXEC sp_executesql @sql;
END;

-- Catch-all search (with parameter sniffing control)
CREATE PROCEDURE dbo.SearchOrders
    @CustomerID INT = NULL,
    @OrderDateFrom DATETIME2 = NULL
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM orders WHERE 1=1';
    IF @CustomerID IS NOT NULL
        SET @sql += N' AND customer_id = @cid';
    IF @OrderDateFrom IS NOT NULL
        SET @sql += N' AND order_date >= @dt';
    EXEC sp_executesql @sql,
        N'@cid INT, @dt DATETIME2',
        @cid = @CustomerID, @dt = @OrderDateFrom;
END;

-- Dynamic column list
CREATE PROCEDURE dbo.GetDynamicColumns
    @Columns NVARCHAR(MAX)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX) = N'SELECT ' + @Columns + N' FROM orders';
    EXEC sp_executesql @sql;
END;
```

### Performance Considerations

- Each unique SQL string generates a new plan (cache bloat)
- Use OPTION (RECOMPILE) if plan caching isn't beneficial
- Parameter sniffing applies to dynamic SQL too
- Ownership chaining: caller needs permissions on referenced objects

### Common Mistakes

- Using EXEC with string concatenation (no parameterization)
- Not using QUOTENAME() for object names (SQL injection)
- Building dynamic SQL in a function (not allowed)
- Not handling NULL parameters in catch-all patterns

### Follow-Up Questions

**Junior:**
1. Why use sp_executesql instead of EXEC for dynamic SQL?
2. What is QUOTENAME()?

**Mid-level:**
1. How does dynamic SQL affect execution plan caching?
2. How to prevent SQL injection in dynamic SQL?

**Senior-level:**
1. Design a secure dynamic SQL procedure that allows filtering by multiple optional columns.
2. Explain ownership chaining with dynamic SQL and how to manage permissions.

### FAANG-Level Deep Dive

At FAANG scale, dynamic SQL is generated at the application layer (by ORMs, query builders) rather than in stored procedures. This provides better control over caching, security scanning, and deployment. SQL injection is prevented by always using parameterized queries (sp_executesql from application code). Dynamic SQL in stored procedures is limited to ETL and administrative tasks.

### Explain Like I'm 7

Dynamic SQL is like writing a note that says "pick up the [blank] thing" and filling in the blank right before you read it. It's flexible but dangerous if someone else fills in the blank with bad instructions.

</details>

---

## Q78: JSON in SQL Server

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL Server (2016+) supports JSON parsing, creation, and querying with functions like JSON_VALUE, JSON_QUERY, OPENJSON, and FOR JSON. It doesn't have a native JSON data type (stores in NVARCHAR). JSON enables flexible schemas within relational tables while maintaining SQL query capabilities.

### Detailed Explanation

- **What it is:** Functions to parse and generate JSON text stored in NVARCHAR columns.
- **Why it exists:** Modern applications use JSON for flexible data interchange. SQL Server JSON support bridges relational and document models.
- **What problem it solves:** Allows storing semi-structured data without ETL. Enables parsing JSON from APIs.
- **When to use it:** Storing application configuration, flexible attribute data, IoT sensor readings, API request/response logging.
- **When NOT to use it:** When JSON is queried in WHERE clauses frequently (extract JSON values into computed columns and index them). When normalization would work better.

### SQL Example

```sql
-- Creating JSON
SELECT product_id, product_name, price
FROM products
WHERE category_id = 1
FOR JSON PATH, ROOT('products');

-- Parsing JSON with OPENJSON
DECLARE @json NVARCHAR(MAX) = N'[
    {"id": 1, "name": "Widget", "tags": ["new", "sale"]},
    {"id": 2, "name": "Gadget", "tags": ["popular"]}
]';

SELECT * FROM OPENJSON(@json)
WITH (
    id INT '$.id',
    name NVARCHAR(100) '$.name',
    tags NVARCHAR(MAX) '$.tags' AS JSON
);

-- JSON_VALUE: extract scalar value
SELECT JSON_VALUE(@json, '$[0].name') AS first_name;

-- JSON_QUERY: extract object/array
SELECT JSON_QUERY(@json, '$[0].tags') AS first_tags;

-- JSON_MODIFY: update JSON
DECLARE @product NVARCHAR(MAX) = '{"id":1, "name":"Widget", "price":10}';
SET @product = JSON_MODIFY(@product, '$.price', 12);
SET @product = JSON_MODIFY(@product, '$.inStock', cast(1 as bit));

-- JSON in WHERE (create computed column for indexing)
ALTER TABLE products ADD 
    product_sku AS JSON_VALUE(product_data, '$.sku');
CREATE INDEX IX_Products_SKU ON products(product_sku);
```

### Performance Considerations

- JSON is stored as text (NVARCHAR) - larger storage than native JSON types
- OPENJSON parses JSON at runtime (CPU cost)
- JSON_VALUE in WHERE clause prevents index seeks unless computed column is created
- FOR JSON serialization is efficient (streaming)
- JSON functions can't use batch mode (row mode only)

### Common Mistakes

- Storing relational data as JSON (normalize properly)
- Querying JSON values in WHERE without computed column index
- Using JSON instead of proper relational design for core business data
- Not validating JSON input (ISJSON)

### Follow-Up Questions

**Junior:**
1. What JSON functions does SQL Server support?
2. Is there a JSON data type in SQL Server?

**Mid-level:**
1. How to index a JSON property?
2. Compare FOR JSON PATH vs FOR JSON AUTO.

**Senior-level:**
1. Design a hybrid table with both relational columns and JSON for flexible attributes.
2. Explain the performance implications of extracting JSON values in queries.

### FAANG-Level Deep Dive

SQL Server's JSON support doesn't include a dedicated JSON data type (unlike PostgreSQL's JSONB). JSON is stored as NVARCHAR, requiring parsing at read time. At FAANG scale, JSON in SQL Server is used for: (1) logging/event storage (write-heavy, rarely filtered by JSON properties), (2) configuration storage, (3) receiving API payloads before processing into normalized tables. JSON as a primary storage format is discouraged.

### Explain Like I'm 7

JSON in SQL Server is like keeping a notebook with flexible notes inside a file cabinet drawer. You can write anything in the notebook, but finding specific info requires reading the whole notebook. If you need to search often, you should extract the important info to a separate index card.

</details>

---

## Q79: XML in SQL Server

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL Server has a native XML data type and XQuery support (query(), value(), exist(), nodes(), modify()). XML can be indexed with primary/secondary XML indexes. While JSON has largely replaced XML for new development, XML is still common in legacy systems, SOAP services, and certain industry standards (HL7, FpML).

### Detailed Explanation

- **What it is:** Native XML data type with XQuery/XPath support for querying and modifying XML data.
- **Why it exists:** XML was the standard data interchange format before JSON.
- **What problem it solves:** Enables querying and indexing semi-structured XML data within SQL Server.
- **When to use it:** Legacy systems, SOAP web services, industry standards (healthcare HL7, finance FpML), SSRS reports.
- **When NOT to use it:** New development (use JSON). Simple data interchange (JSON is lighter). When performance is critical (XML parsing is expensive).

### SQL Example

```sql
-- XML data type
DECLARE @xml XML = N'
<products>
    <product id="1">
        <name>Widget</name>
        <price>10.00</price>
        <tags>
            <tag>new</tag>
            <tag>sale</tag>
        </tags>
    </product>
    <product id="2">
        <name>Gadget</name>
        <price>25.00</price>
    </product>
</products>';

-- XQuery methods
SELECT @xml.query('/products/product/name');  -- XML fragment
SELECT @xml.value('(/products/product[1]/name)[1]', 'VARCHAR(100)');
SELECT @xml.value('(/products/product[@id=2]/price)[1]', 'DECIMAL(10,2)');

-- exist(): check condition
SELECT @xml.exist('/products/product[@id=1]');  -- 1 (true)

-- nodes(): shred XML to relational
SELECT 
    p.value('@id', 'INT') AS product_id,
    p.value('name[1]', 'VARCHAR(100)') AS product_name,
    p.value('price[1]', 'DECIMAL(10,2)') AS price
FROM @xml.nodes('/products/product') AS t(p);

-- FOR XML
SELECT product_id, product_name, price
FROM products
WHERE category_id = 1
FOR XML PATH('product'), ROOT('products');
```

### Performance Considerations

- XML parsing is CPU-intensive
- XML indexes (primary + secondary) improve query performance on XML columns
- XQuery is interpreted (no optimization like SQL)
- Large XML documents (> 1MB) can cause memory pressure
- FOR XML and OPENXML both have performance overhead

### Common Mistakes

- Using XML for new development (JSON is preferred)
- Not using XML indexes when querying XML columns frequently
- Using OPENXML (deprecated) instead of nodes() method
- Storing large XML blobs without compression

### Follow-Up Questions

**Junior:**
1. What is the native XML type in SQL Server?
2. Difference between value() and query() methods?

**Mid-level:**
1. How to shred XML into relational format?
2. XML indexing: primary vs secondary?

**Senior-level:**
1. Design a strategy to migrate legacy XML-based processes to JSON.
2. Compare XML and JSON performance for querying semi-structured data.

### FAANG-Level Deep Dive

XML in SQL Server is a legacy feature at most FAANG companies. New systems use JSON or Protocol Buffers. However, XML is still deeply embedded in financial services and healthcare. SQL Server's XML implementation uses a binary XML format for storage (more efficient than text). XML indexes create persisted computed columns from XPath expressions. At FAANG scale, XML is avoided in new design; existing XML stores are fronted by application-level XML-to-JSON converters.

### Explain Like I'm 7

XML is like a very formal, structured document with lots of start and end markers. It's very precise but takes more space. JSON is like a simpler sticky note with the same info. Most new apps use the simpler sticky note (JSON).

</details>

---

## Q80: Temporal Tables

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Temporal tables (system-versioned) automatically track full history of data changes with period columns (SysStartTime, SysEndTime). SQL Server maintains a history table automatically. SELECT ... FOR SYSTEM_TIME AS OF @date queries data as it existed at any point in time. No application code needed for audit trails.

### Detailed Explanation

- **What it is:** A table that automatically maintains complete data change history using system-versioned period columns.
- **Why it exists:** Traditional audit trails require manual triggers or application logic. Temporal tables automate this.
- **What problem it solves:** Provides point-in-time analysis, change tracking, and audit without custom code.
- **When to use it:** Tables requiring audit trails. Regulatory compliance (banking, healthcare). Point-in-time reporting. Debugging data issues.
- **When NOT to use it:** Tables that are truncated frequently (temporal doesn't support TRUNCATE). Tables with extremely high DML throughput (history table grows fast).

### SQL Example

```sql
-- Create temporal table
CREATE TABLE dbo.Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Salary DECIMAL(12,2),
    DepartmentID INT,
    SysStartTime DATETIME2 GENERATED ALWAYS AS ROW START NOT NULL,
    SysEndTime DATETIME2 GENERATED ALWAYS AS ROW END NOT NULL,
    PERIOD FOR SYSTEM_TIME (SysStartTime, SysEndTime)
)
WITH (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.Employees_History));

-- Query current data (same as regular table)
SELECT * FROM Employees;

-- Query as of specific time
SELECT * FROM Employees
FOR SYSTEM_TIME AS OF '2024-06-01'
WHERE EmployeeID = 1;

-- Query between two time points
SELECT * FROM Employees
FOR SYSTEM_TIME BETWEEN '2024-01-01' AND '2024-06-01'
WHERE EmployeeID = 1;

-- Query all versions
SELECT * FROM Employees
FOR SYSTEM_TIME ALL
WHERE EmployeeID = 1
ORDER BY SysStartTime DESC;

-- Turn off versioning (maintenance)
ALTER TABLE Employees SET (SYSTEM_VERSIONING = OFF);
-- Now can modify history table or drop temporal

-- Query history table directly
SELECT * FROM Employees_History WHERE EmployeeID = 1 ORDER BY SysStartTime DESC;
```

### Performance Considerations

- Every DML on main table inserts a row into the history table (write amplification)
- History table is clustered columnstore by default (efficient storage)
- History table auto-maintained; no manual management needed
- Queries with FOR SYSTEM_TIME can use partition elimination on history
- Retention policy: manage history size via partitioning or cleanup jobs

### Common Mistakes

- Not planning for history table growth (no retention policy)
- Using temporal on tables with frequent updates (rapid growth)
- Not understanding that temporal is system-versioned (not business-time)
- Modifying history table directly (can break temporal chain)
- Forgetting temporal tables can't be truncated

### Follow-Up Questions

**Junior:**
1. What is a temporal table?
2. What period columns does a temporal table have?

**Mid-level:**
1. How to query historical data from a temporal table?
2. How does temporal table maintain the history automatically?

**Senior-level:**
1. Design a temporal table strategy for a 5-year regulatory compliance requirement.
2. Explain how temporal tables handle schema changes and edge cases (updating history directly).

### FAANG-Level Deep Dive

Temporal tables use the history table (columnstore by default) to store all previous row versions. The current row has SysEndTime = '9999-12-31'. When a row is updated, the old version's SysEndTime is set to the current time, and a new current row is created. At FAANG scale, temporal tables are used selectively for audit-critical tables. High-volume tables use custom audit logging (event-driven) instead to avoid the DML amplification.

### Explain Like I'm 7

Temporal tables are like having a camera recording every change to your desk. You can always rewind to see what your desk looked like yesterday, last week, or any moment in time. The database automatically saves the "before" picture each time you make a change.

</details>

---

## Q81: GROUP BY with ROLLUP / CUBE / GROUPING SETS

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

ROLLUP generates hierarchical subtotals (e.g., by year, then month, then day). CUBE generates all combinations of grouping columns. GROUPING SETS allows explicit specification of which groupings to compute. GROUPING and GROUPING_ID functions identify subtotal rows.

### Detailed Explanation

- **What it is:** Extensions to GROUP BY that compute multiple levels of aggregation in a single query.
- **Why they exist:** Reporting needs subtotals and grand totals. Multiple GROUP BY queries + UNION ALL is inefficient.
- **What problem it solves:** Single query returns multiple aggregation levels, reducing query complexity and execution time.
- **When to use it:** Financial reports with subtotals. Sales reports by region/category. Any hierarchical reporting.
- **When NOT to use it:** When only one level of aggregation is needed (simple GROUP BY). When the number of combinations becomes too large (CUBE with many columns).

### SQL Example

```sql
-- Sample data: Sales(Year, Quarter, Product, Amount)

-- ROLLUP: hierarchical aggregation
SELECT Year, Quarter, Product, SUM(Amount) AS Total
FROM Sales
GROUP BY ROLLUP (Year, Quarter, Product);
-- Returns: grand total, year subtotals, year+quarter subtotals, detail rows

-- CUBE: all combinations
SELECT Year, Quarter, Product, SUM(Amount) AS Total, GROUPING_ID(Year, Quarter, Product) AS GI
FROM Sales
GROUP BY CUBE (Year, Quarter, Product);
-- Returns all 8 combinations (2^3) of grouping

-- GROUPING SETS: explicit subsets
SELECT Year, Quarter, Product, SUM(Amount) AS Total
FROM Sales
GROUP BY GROUPING SETS (
    (Year, Quarter),   -- subtotal by year+quarter
    (Year, Product),   -- subtotal by year+product
    (Year),            -- subtotal by year
    ()                 -- grand total
);

-- GROUPING function identifies subtotal rows
SELECT 
    CASE WHEN GROUPING(Year) = 1 THEN 'All Years' ELSE CAST(Year AS VARCHAR) END AS Year,
    CASE WHEN GROUPING(Quarter) = 1 THEN 'All Quarters' ELSE CAST(Quarter AS VARCHAR) END AS Quarter,
    SUM(Amount) AS Total
FROM Sales
GROUP BY ROLLUP (Year, Quarter);
```

### Performance Considerations

- Single scan for all aggregation levels (vs multiple UNION ALL queries)
- ROLLUP/CUBE are typically more efficient than multiple GROUP BYs
- CUBE with many columns generates 2^N grouping sets (exponential)
- GROUPING SETS allows controlling which combinations to compute
- Consider using GROUPING SETS instead of CUBE for large dimension counts

### Common Mistakes

- Using CUBE with too many columns (exponential explosion)
- Not using GROUPING to identify subtotal rows (difficult to distinguish)
- Assuming order in ROLLUP doesn't matter (it creates hierarchical order)
- Confusing ROLLUP with CUBE

### Follow-Up Questions

**Junior:**
1. What does ROLLUP do?
2. Difference between ROLLUP and CUBE?

**Mid-level:**
1. How does GROUPING SETS differ from ROLLUP?
2. What is GROUPING_ID used for?

**Senior-level:**
1. Design a financial report query using ROLLUP that handles changing hierarchies.
2. Compare the performance of ROLLUP vs multiple GROUP BY queries with UNION ALL.

### FAANG-Level Deep Dive

The optimizer implements ROLLUP/CUBE/GROUPING SETS using the Stream Aggregate operator with multiple aggregation passes. SQL Server reads the data once and aggregates it at each grouping level. GROUPING SETS is compiled into an optimized merge-union of multiple aggregates. At FAANG scale, these are heavily used in business intelligence reporting to reduce the number of queries hitting the warehouse.

### Explain Like I'm 7

ROLLUP is like totaling a spreadsheet by year, then by month within each year, then by day within each month. CUBE is like totaling by EVERY possible combination - by year, by product, by color, and every mix of them. GROUPING SETS is like saying "give me totals by year, by month, and the grand total - nothing else."

</details>

# Topic 12: Performance Tuning (Q82-Q88)

---

## Q82: Missing Index DMVs

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

sys.dm_db_missing_index_details shows indexes the optimizer would have preferred for recently compiled queries. It records index key columns (equality, inequality, included) and the performance impact of the missing index. This is the fastest way to find index tuning opportunities.

### Detailed Explanation

- **What it is:** DMVs that capture index suggestions from the query optimizer during plan compilation.
- **Why they exist:** The optimizer knows which index would improve performance and records it.
- **What problem it solves:** Provides actionable index recommendations without guesswork.
- **When to use it:** When tuning slow queries. As part of regular performance review.
- **Limitations:** DMVs are reset on restart. Only capture the last ~500 missing index requests. Some index suggestions may be redundant or suboptimal.

### SQL Example

```sql
-- Find missing indexes with impact
SELECT 
    migs.avg_total_user_cost * migs.avg_user_impact * (migs.user_seeks + migs.user_scans) AS estimated_improvement,
    mid.statement AS table_name,
    mid.equality_columns,
    mid.inequality_columns,
    mid.included_columns,
    migs.user_seeks, migs.user_scans,
    migs.avg_user_impact
FROM sys.dm_db_missing_index_groups mig
JOIN sys.dm_db_missing_index_group_stats migs ON migs.group_handle = mig.index_group_handle
JOIN sys.dm_db_missing_index_details mid ON mig.index_handle = mid.index_handle
WHERE mid.database_id = DB_ID()
ORDER BY estimated_improvement DESC;

-- Generate CREATE INDEX statements
SELECT 'CREATE NONCLUSTERED INDEX IX_'
    + REPLACE(REPLACE(REPLACE(REPLACE(mid.statement, '[', ''), ']', ''), '.', '_'), ' ','')
    + '_Missing'
    + ' ON ' + mid.statement + ' (' + ISNULL(mid.equality_columns, '')
    + CASE WHEN mid.equality_columns IS NOT NULL AND mid.inequality_columns IS NOT NULL THEN ', ' ELSE '' END
    + ISNULL(mid.inequality_columns, '') + ')'
    + ISNULL(' INCLUDE (' + mid.included_columns + ')', '') AS create_index
FROM sys.dm_db_missing_index_details mid
WHERE mid.database_id = DB_ID();
```

### Performance Considerations

- DMVs don't consider existing indexes (may suggest duplicates)
- Don't create all suggested indexes blindly (test in non-prod first)
- Consider the write impact (missing index DMVs only consider read benefits)
- Average impact is estimated; actual impact varies

### Common Mistakes

- Creating every suggested index (over-indexing)
- Not considering existing indexes that already cover the suggestion
- Ignoring that DMVs reset on restart
- Not testing index suggestions in a non-production environment

### Follow-Up Questions

**Junior:**
1. What do missing index DMVs show?
2. What columns do they suggest?

**Mid-level:**
1. How to prioritize missing index suggestions?
2. Limitations of missing index DMVs?

**Senior-level:**
1. Design a process to automatically review and apply missing index suggestions safely.
2. Explain why the optimizer might not suggest an index even when it would help.

### FAANG-Level Deep Dive

The missing index DMVs record suggestions from the optimizer during plan compilation. The optimizer uses a costing model - if an index would reduce plan cost by more than a threshold, it records the suggestion. The DMVs track: user_seeks (how often a seek would have been used), user_scans (how often a scan could have been avoided), avg_user_impact (estimated % improvement). At FAANG scale, automated tools collect these DMVs across all databases, filter duplicates, and generate index change requests.

### Explain Like I'm 7

Missing index DMVs are like your GPS suggesting shortcuts. Every time the database takes a slow route, it notes "if there were a road here, we'd save 5 minutes." You can check all the suggested shortcuts and decide which to build.

</details>

---

## Q83: Wait Statistics

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Wait statistics measure what SQL Server is waiting for (I/O, locking, CPU, memory). By analyzing waits, you identify the bottleneck. Common waits: PAGEIOLATCH (I/O bottleneck), LCK (locking), RESOURCE_SEMAPHORE (memory grant), WRITELOG (log write), CXPACKET (parallelism).

### Detailed Explanation

- **What it is:** Aggregated wait time data showing what resources SQL Server is contending for.
- **Why they exist:** If you can measure what's slow, you can fix it.
- **What problem it solves:** Pinpoints the root cause of performance issues (I/O, CPU, blocking, etc.).
- **When to use it:** First step in any performance investigation. Baseline and compare over time.
- **Categories:** Resource waits (I/O, CPU), Queue waits (background tasks), External waits (linked server).

### SQL Example

```sql
-- Wait statistics overview
SELECT wait_type, wait_time_ms, waiting_tasks_count,
    wait_time_ms / NULLIF(waiting_tasks_count, 0) AS avg_wait_ms,
    (wait_time_ms * 100.0) / SUM(wait_time_ms) OVER() AS pct
FROM sys.dm_os_wait_stats
WHERE wait_type NOT IN (
    'BROKER_EVENTHANDLER', 'BROKER_RECEIVE_WAITFOR', 'BROKER_TASK_STOP',
    'BROKER_TO_FLUSH', 'BROKER_TRANSMITTER', 'CHECKPOINT_QUEUE',
    'CHKPT', 'CLR_AUTO_EVENT', 'CLR_MANUAL_EVENT', 'CLR_SEMAPHORE',
    'DBMIRROR_DBM_EVENT', 'DBMIRROR_EVENTS_QUEUE', 'DBMIRROR_WORKER_QUEUE',
    'DBMIRRORING_CMD', 'DIRTY_PAGE_POLL', 'DISPATCHER_QUEUE_SEMAPHORE',
    'EXECSYNC', 'FSAGENT', 'FT_IFTS_SCHEDULER_IDLE_WAIT', 'FT_IFTSHC_MUTEX',
    'HADR_CLUSAPI_CALL', 'HADR_FILESTREAM_IOMGR_IOCOMPLETION',
    'HADR_LOGCAPTURE_WAIT', 'HADR_NOTIFICATION_DEQUEUE', 'HADR_TIMER_TASK',
    'HADR_WORK_QUEUE', 'KSOURCE_WAKEUP', 'LAZYWRITER_SLEEP', 'LOGMGR_QUEUE',
    'MEMORY_ALLOCATION_EXT', 'ONDEMAND_TASK_QUEUE', 'PREEMPTIVE_...',
    'PWAIT_ALL_...', 'QDS_PERSIST_TASK_MAIN_LOOP_SLEEP',
    'QDS_ASYNC_QUEUE', 'REQUEST_FOR_DEADLOCK_SEARCH', 'RESOURCE_QUEUE',
    'SERVER_IDLE_CHECK', 'SLEEP_...', 'SP_SERVER_DIAGNOSTICS_SLEEP',
    'SQLTRACE_BUFFER_FLUSH', 'SQLTRACE_INCREMENTAL_FLUSH_SLEEP',
    'SQLTRACE_WAIT_ENTRIES', 'WAIT_XTP_...', 'WAITFOR', 'XE_...', 'XE_DISPATCHER_WAIT'
)
ORDER BY wait_time_ms DESC;

-- Key waits to investigate:
-- PAGEIOLATCH_*: I/O subsystem bottleneck
-- LCK_*: Lock contention/blocking
-- RESOURCE_SEMAPHORE: Memory grant pressure
-- WRITELOG: Transaction log write bottleneck
-- CXPACKET: Parallelism skew
-- SOS_SCHEDULER_YIELD: CPU pressure
-- THREADPOOL: Worker thread exhaustion
```

### Performance Considerations

- Wait stats reset on restart (or manually via DBCC SQLPERF)
- Baseline wait stats for your server (every server is different)
- Focus on waits with high wait_time_ms AND high percentage of total
- Single wait type > 20% of total indicates a clear bottleneck
- Multiple wait types at similar percentages indicate complex issues

### Common Mistakes

- Looking at waits in isolation (without query context)
- Not filtering out benign waits (sleep, background tasks)
- Confusing avg_wait_ms with total_wait_ms
- Not baselining (comparing to normal)

### Follow-Up Questions

**Junior:**
1. What are wait statistics?
2. What does PAGEIOLATCH_SH indicate?

**Mid-level:**
1. Which wait types indicate I/O vs CPU vs blocking issues?
2. How to use wait stats to identify the bottleneck?

**Senior-level:**
1. Diagnose a server with high PAGEIOLATCH and CXPACKET waits.
2. Design a wait statistics monitoring strategy for a critical OLTP system.

### FAANG-Level Deep Dive

Wait statistics tell you WHAT you're waiting on but not WHY. High PAGEIOLATCH_SH waits could be: slow disks, missing indexes, large scans, or insufficient memory (forcing reads from disk). Correlate with other DMVs: sys.dm_io_virtual_file_stats (disk latency), sys.dm_exec_query_stats (offending queries), sys.dm_os_memory_clerks (memory pressure). At FAANG scale, wait stats are collected into a time-series database and correlated with deployment events.

### Explain Like I'm 7

Wait statistics are like a doctor's waiting room log. It shows which room patients waited in the longest: "X-ray: 40 minutes, Blood test: 30 minutes, Doctor: 10 minutes." You know the X-ray room needs fixing. Same for SQL: I/O wait means fix disks; blocking wait means fix queries.

</details>

---

## Q84: TempDB Optimization

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

TempDB is a system database used for temporary objects, row versioning, sorting, and spooling. Common contention: PFS/GAM page contention (multiple data files), version store growth (long transactions), allocation contention (temp table churn). Best practices: multiple equally-sized data files (per CPU core up to 8), separate fast I/O, monitor version store.

### Detailed Explanation

- **What it is:** A shared system database used by all user databases for temporary storage.
- **Why it exists:** Provides workspace for sorts, joins, temporary objects, row versioning.
- **What problems occur:** Page contention (PFS, GAM, SGAM pages - multiple concurrent allocations), version store growth, disk space exhaustion.
- **Optimization strategies:**
  - Multiple data files (1 per CPU core, up to 8, equally sized)
  - Fast storage (NVMe SSD) for tempdb
  - Monitor version store with long-running transactions
  - Use table variables instead of temp tables for small datasets
  - Avoid excessive sorting (index tuning)

### SQL Example

```sql
-- Check tempdb file configuration
SELECT name, physical_name, size/128 AS size_MB, growth/128 AS growth_MB
FROM sys.master_files
WHERE database_id = DB_ID('tempdb');

-- Add tempdb data file (if contention)
ALTER DATABASE tempdb ADD FILE (
    NAME = tempdev2,
    FILENAME = 'D:\SQLData\tempdb2.ndf',
    SIZE = 1024MB,
    FILEGROWTH = 512MB
);

-- Check version store usage
SELECT (version_store_reserved_page_count * 8) / 1024 AS version_store_MB,
    (free_space_in_bytes / 1024 / 1024) AS tempdb_free_MB
FROM sys.dm_db_file_space_usage
WHERE database_id = 2;

-- Find long-running transactions blocking version cleanup
SELECT transaction_id, transaction_sequence_num, elapsed_time_seconds
FROM sys.dm_tran_active_snapshot_database_transactions
ORDER BY elapsed_time_seconds DESC;

-- Check PFS/GAM contention (from sys.dm_os_wait_stats)
-- Look for PAGELATCH_UP (allocation page contention)
```

### Performance Considerations

- Multiple files: reduces PFS/GAM page contention (round-robin allocation)
- Files must be equally sized (SQL Server fills proportionally)
- Version store: grows with update frequency * longest transaction duration
- Sort/hash spills: tempdb usage from insufficient memory grants (fix via query tuning)
- Table variables vs temp tables: table variables use tempdb too (but with fewer statistics)

### Common Mistakes

- Single tempdb data file (contention on busy systems)
- Unequally sized tempdb files (proportional fill imbalance)
- Not monitoring tempdb disk space
- Long-running transactions under RCSI/SNAPSHOT (version store bloat)
- Confusing tempdb with user database

### Follow-Up Questions

**Junior:**
1. What is tempdb used for?
2. Why does tempdb need multiple data files?

**Mid-level:**
1. How does version store grow in tempdb?
2. What is PFS/GAM contention?

**Senior-level:**
1. Design a tempDB configuration for a high-concurrency OLTP system with RCSI enabled.
2. Explain how to diagnose and resolve tempdb allocation contention.

### FAANG-Level Deep Dive

TempDB contention is typically PAGELATCH_UP on PFS/GAM pages. On systems with NUMA, multiple tempdb files (1 per NUMA node, up to 8) are essential. Trace flag 1117 (auto-grow all files equally) and 1118 (uniform extent allocation) are recommended for older SQL Server versions. SQL Server 2016+ has improved tempdb allocation (concurrent PFS updates). At FAANG scale, tempdb is placed on dedicated NVMe storage with multiple files.

### Explain Like I'm 7

TempDB is like a shared workbench in a workshop. Everyone uses it for their projects (sorting, temporary parts). If there's only one drawer for tools (PFS page), everyone fights over it. Giving the workbench multiple drawers spread around the room reduces the fighting.

</details>

---

## Q85: Memory Grants

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Memory grants are memory allocated to queries for sorting and hashing operations. SQL Server estimates memory needed before execution. Under-estimation causes tempdb spills (slow). Over-estimation wastes memory (less cache for data). The RESOURCE_SEMAPHORE wait indicates memory grant pressure.

### Detailed Explanation

- **What it is:** Memory reserved from the buffer pool for query execution (sort, hash join, hash aggregate).
- **Why it exists:** Sort and hash operations need working memory. Without sufficient memory, they spill to tempdb (disk).
- **What problem it solves:** Queries that sort or hash large datasets need predictable memory.
- **When grants are problematic:**
  - Under-estimation: spilling to tempdb (10x slower)
  - Over-estimation: reserved memory sits idle (wasted)
  - Grant waiting: RESOURCE_SEMAPHORE waits when total grants exceed target
- **How to fix:** Update statistics (better estimates), optimize queries (less sorting), increase server memory (if appropriate).

### SQL Example

```sql
-- Check memory grant waiting
SELECT wait_type, wait_time_ms, waiting_tasks_count
FROM sys.dm_os_wait_stats
WHERE wait_type = 'RESOURCE_SEMAPHORE';

-- Query memory grants (current)
SELECT session_id, request_id, grant_time, requested_memory_kb,
       granted_memory_kb, required_memory_kb, query_cost
FROM sys.dm_exec_query_memory_grants
WHERE session_id > 50;

-- Query memory grant history (from DMV)
SELECT qs.query_hash,
       MAX(qs.max_grant_kb) AS max_grant_kb,
       AVG(qs.avg_grant_kb) AS avg_grant_kb,
       MAX(qs.max_used_grant_kb) AS max_used_grant_kb,
       AVG(qs.avg_used_grant_kb) AS avg_used_grant_kb
FROM sys.dm_exec_query_stats qs
GROUP BY qs.query_hash
HAVING MAX(qs.max_grant_kb) > 102400  -- > 100MB grants
ORDER BY MAX(qs.max_grant_kb) DESC;

-- Memory grant feedback (SQL Server 2017+)
SELECT q.query_id, p.plan_id,
       p.is_memory_grant_feedback_adjusted
FROM sys.query_store_plan p;
```

### Performance Considerations

- Memory grant = sort/hash estimate + safety margin
- Under-estimate > tempdb spill > 10x slower
- Over-estimate > wasted memory > less data cache > more physical I/O
- RESOURCE_SEMAPHORE waits > queries queued for memory
- Memory grant feedback (2017+) adjusts grants based on actual usage

### Common Mistakes

- Ignoring RESOURCE_SEMAPHORE waits (memory pressure)
- Assuming more memory always helps (over-granting wastes cache)
- Not updating statistics (causes poor cardinality estimates -> bad grants)
- Using huge sorts that could be eliminated with indexing

### Follow-Up Questions

**Junior:**
1. What is a memory grant?
2. What happens if a query doesn't get its memory grant?

**Mid-level:**
1. How does SQL Server estimate memory grants?
2. What is RESOURCE_SEMAPHORE wait?

**Senior-level:**
1. Design a monitoring strategy for memory grant issues in a mixed OLTP/DW workload.
2. Explain how memory grant feedback works in SQL Server 2017+.

### FAANG-Level Deep Dive

Memory grants are calculated from cardinality estimates (rows * row_size). The safety factor (min_grant_percent * max_grant_percent) adds overhead. Batch mode queries use different memory grant calculations (columnstore segments, not rows). At FAANG scale, memory grant issues are a top cause of performance variability. Row mode memory grant feedback (SQL Server 2017+) and batch mode feedback (2022+) adjust grants after first execution.

### Explain Like I'm 7

Memory grants are like reserving workspace on a table. If you're sorting 1000 papers, you need enough table space. If you estimate wrong and only reserve space for 100, you'll have to use the floor (tempdb) - much slower. If you reserve space for 10000, other people can't use that table space.

</details>

---

## Q86: Page Life Expectancy

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Page Life Expectancy (PLE) is the average time (seconds) a data page stays in the buffer pool without being referenced. Low PLE (< 300 seconds) indicates memory pressure - pages are being evicted too quickly, causing more physical I/O. PLE is a key indicator of memory health.

### Detailed Explanation

- **What it is:** Performance counter showing how long pages stay in the buffer pool (cache).
- **Why it exists:** Measures buffer pool effectiveness. High PLE = working data fits in memory.
- **What problem it solves:** Helps diagnose memory pressure (low PLE = too much disk I/O).
- **When to check:** Baseline monitoring. When disk I/O increases unexpectedly.
- **What causes low PLE:** Insufficient memory (need more RAM), large table scans flushing cache, memory grant over-reservation, non-essential data competing with working set.

### SQL Example

```sql
-- Check PLE (per NUMA node on multi-node systems)
SELECT @@SERVERNAME AS server_name,
       instance_name,
       cntr_value AS page_life_expectancy_seconds,
       cntr_value / 60 AS page_life_expectancy_minutes
FROM sys.dm_os_performance_counters
WHERE object_name LIKE '%Buffer Manager%'
    AND counter_name = 'Page life expectancy';

-- Buffer pool size
SELECT cntr_value AS buffer_pool_pages,
       cntr_value * 8 / 1024 AS buffer_pool_MB
FROM sys.dm_os_performance_counters
WHERE object_name LIKE '%Buffer Manager%'
    AND counter_name = 'Database pages';

-- Check what's in the buffer pool (by database)
SELECT database_id, COUNT(*) AS cached_pages,
       COUNT(*) * 8 / 1024 AS cached_MB
FROM sys.dm_os_buffer_descriptors
GROUP BY database_id
ORDER BY cached_MB DESC;

-- Check free list stalls (waiting for free pages)
SELECT cntr_value AS free_list_stalls_per_sec
FROM sys.dm_os_performance_counters
WHERE object_name LIKE '%Buffer Manager%'
    AND counter_name = 'Free list stalls/sec';
```

### Performance Considerations

- PLE < 300 seconds: critical memory pressure
- PLE 300-1000: moderate pressure (monitor)
- PLE > 1000: healthy (for typical OLTP)
- PLE varies by workload (DW may have lower PLE naturally)
- NUMA: each node has its own PLE (lowest node is the bottleneck)
- Low PLE + High PAGEIOLATCH = memory pressure causing I/O

### Common Mistakes

- Using a single PLE threshold for all systems (OLTP needs higher PLE than DW)
- Not checking PLE per NUMA node (one node may be low)
- Ignoring that PLE measures ONLY referenced pages, not cache utilization
- Adding memory when the real issue is query optimization (reducing scans)

### Follow-Up Questions

**Junior:**
1. What is Page Life Expectancy?
2. What does low PLE indicate?

**Mid-level:**
1. How does low PLE relate to PAGEIOLATCH waits?
2. What causes PLE to drop suddenly?

**Senior-level:**
1. Design a memory monitoring strategy using PLE, free list stalls, and buffer pool composition.
2. Explain the relationship between PLE, lazy writer, and checkpoint for memory management.

### FAANG-Level Deep Dive

PLE is calculated per NUMA node using the clock algorithm (similar to LRU but with a referenced bit). The lazy writer scans the buffer pool, evicts pages with unreferenced age > PLE, and resets referenced bits. At FAANG scale, PLE is monitored with alerts at < 300 seconds (per NUMA node). A sudden PLE drop usually indicates a large table scan or index rebuild flushing the cache. Correlating PLE drops with Query Store data identifies the offending query.

### Explain Like I'm 7

PLE is like how long a book stays on your reading desk before you put it back on the shelf. If you have a big desk (lots of memory), books stay longer. If your desk is tiny, you're constantly returning books to the shelf and getting new ones (slow).

</details>

---

## Q87: Query Plan Analysis

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Query plan analysis involves reading execution plans to find expensive operators, cardinality estimation errors, missing indexes, and suboptimal join strategies. Key metrics: estimated vs actual rows, operator costs, warning signs (yellow triangles), and tempdb spills. The goal is to identify and fix the root cause of slow performance.

### Detailed Explanation

- **What it is:** Systematic examination of execution plans to identify performance issues.
- **Why it exists:** Plans show what SQL Server actually does with a query.
- **What problems to look for:**
  - Huge cardinality estimate errors (estimated rows vs actual rows)
  - Key Lookup operators (missing covering indexes)
  - Table/Clustered Index Scans (missing indexes)
  - Spills to tempdb (memory grant issues)
  - Implicit conversions (data type mismatches)
  - Sort operators on large inputs
  - Warnings (yellow triangle icons)
- **Process:** Find the most expensive operator -> check its input/output -> identify root cause -> propose fix

### Real-World Example

Plan shows: Index Seek (1 row estimated) -> Key Lookup (100,000 rows actual). Problem: cardinality estimate error due to outdated statistics. Fix: UPDATE STATISTICS.

### SQL Example

```sql
-- View actual plan (must be enabled before query execution)
SET STATISTICS XML ON;
GO
SELECT * FROM orders WHERE customer_id = 123;
GO
SET STATISTICS XML OFF;

-- Or use Query Store
SELECT q.query_id, p.plan_id, p.query_plan, 
       rs.avg_duration, rs.avg_cpu_time, rs.avg_logical_io_reads
FROM sys.query_store_plan p
JOIN sys.query_store_query q ON p.query_id = q.query_id
JOIN sys.query_store_runtime_stats rs ON p.plan_id = rs.plan_id
ORDER BY rs.avg_duration DESC;

-- Check for plans with spills
SELECT qs.sql_handle, qs.statement_start_offset,
       qs.query_hash, qs.max_spills
FROM sys.dm_exec_query_stats qs
WHERE qs.max_spills > 0;

-- Check implicit conversion warnings
SELECT qs.query_hash, qs.statement_text,
       qs.implicit_conversion_count
FROM sys.dm_exec_query_stats qs;
```

### Performance Considerations

- Focus on operators with highest cost %
- Compare estimated vs actual rows (> 10x error = bad estimates)
- Look for: Scans, Key Lookups, Spills, Sorts
- Yellow triangle warnings = investigate
- Right-click -> "Analyze Actual Execution Plan" in SSMS

### Common Mistakes

- Only looking at estimated plans (can differ from actual)
- Focusing on operator cost % instead of actual row movement
- Missing cardinality estimate errors (biggest performance killer)
- Not checking both estimated AND actual plans

### Follow-Up Questions

**Junior:**
1. How to read a query plan?
2. What do operators represent?

**Mid-level:**
1. How to identify cardinality estimation errors in plans?
2. What are common warning signs in execution plans?

**Senior-level:**
1. Analyze a complex plan with multiple operators and propose optimizations.
2. Explain how to use live query statistics to diagnose performance issues.

### FAANG-Level Deep Dive

Advanced plan analysis includes: (1) understanding the optimizer's transformations (why it chose hash join over nested loops), (2) tracing plan regressions using Query Store, (3) analyzing plan shape changes across different parameter values (parameter sniffing), (4) using optimizer timeout/trivial plan analysis. At FAANG scale, plan analysis is automated using tools that compare actual vs estimated row counts across execution environments.

### Explain Like I'm 7

Analyzing an execution plan is like being a detective reading a map of how the database got your answer. You look for wrong turns (scans when it should have taken a shortcut), detours (key lookups), and places where the map was wrong (cardinality errors).

</details>

---

## Q88: Index Usage Stats

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

sys.dm_db_index_usage_stats tracks index seeks, scans, lookups, and updates. It helps identify: unused indexes (0 seeks + 0 scans = drop candidate), hot indexes (high seeks = good), heavily updated indexes (high user_updates = maintenance cost). Use to balance read performance vs write overhead.

### Detailed Explanation

- **What it is:** DMV tracking index read/write operations since last server restart.
- **Why it exists:** Without usage data, you can't know which indexes provide value.
- **What problem it solves:** Identifies unused indexes (wasting space and DML overhead) and missing indexes (high scans with no seeks).
- **When to use it:** Regular index review. Before adding new indexes. Before removing indexes.
- **Key metrics:** user_seeks (optimal), user_scans (may need better index), user_lookups (key lookups), user_updates (maintenance cost).

### SQL Example

```sql
-- Index usage summary
SELECT OBJECT_NAME(s.object_id) AS table_name,
       i.name AS index_name,
       i.type_desc,
       s.user_seeks, s.user_scans, s.user_lookups,
       s.user_seeks + s.user_scans + s.user_lookups AS total_reads,
       s.user_updates,
       s.last_user_seek, s.last_user_scan, s.last_user_update,
       CASE 
           WHEN (s.user_seeks + s.user_scans + s.user_lookups) = 0 THEN 'UNUSED'
           WHEN (s.user_updates * 1.0) / NULLIF(s.user_seeks + s.user_scans + s.user_lookups, 0) > 10 THEN 'WRITE-HEAVY'
           WHEN s.user_seeks = 0 AND s.user_scans > 0 THEN 'SCAN-ONLY (missing seek index?)'
           ELSE 'OK'
       END AS index_assessment
FROM sys.dm_db_index_usage_stats s
JOIN sys.indexes i ON s.object_id = i.object_id AND s.index_id = i.index_id
WHERE s.database_id = DB_ID()
    AND i.name IS NOT NULL  -- Exclude heaps
ORDER BY total_reads DESC;

-- Unused indexes (no reads since restart, but have updates)
SELECT OBJECT_NAME(i.object_id) AS table_name, i.name AS index_name,
       s.user_updates, i.index_id
FROM sys.indexes i
LEFT JOIN sys.dm_db_index_usage_stats s 
    ON i.object_id = s.object_id AND i.index_id = s.index_id AND s.database_id = DB_ID()
WHERE i.type > 0  -- Not heap
    AND (s.object_id IS NULL 
         OR (s.user_seeks + s.user_scans + s.user_lookups = 0))
ORDER BY OBJECT_NAME(i.object_id);
```

### Performance Considerations

- DMVs reset on server restart (only show since last restart)
- "Unused" since restart doesn't mean unused overall (may be used quarterly)
- Consider dropping unused indexes (saves DML time, storage, and backup size)
- Index with high scans but no seeks: consider better index design
- Index with extremely high writes (> 100x reads): consider if necessary

### Common Mistakes

- Dropping indexes based on DMV data after only a week of uptime
- Not considering that some indexes support FK constraints (can't drop without constraint)
- Ignoring that CLUSTERED INDEX doesn't appear in usage stats (it IS the table)
- Confusing user_seeks (seek into index) with user_lookups (key lookup FROM index)

### Follow-Up Questions

**Junior:**
1. What does user_seeks mean?
2. How to find unused indexes?

**Mid-level:**
1. What's the difference between user_seeks and user_scans?
2. When should you drop an index based on usage stats?

**Senior-level:**
1. Design an index lifecycle management process using usage stats, fragmentation, and query store data.
2. Explain how to evaluate whether dropping an unused index would affect query performance.

### FAANG-Level Deep Dive

Index usage stats are essential for index governance at scale. At FAANG, automated processes: (1) collect usage stats weekly, (2) identify indexes with zero seeks for 30+ days, (3) drop in a controlled manner with monitoring for re-creation if needed. Index creation is gated by business case (specific query performance improvement). Index maintenance is automated based on fragmentation thresholds.

### Explain Like I'm 7

Index usage stats are like library checkout records. If a book hasn't been checked out in a year, maybe it's taking up shelf space. If it's constantly being checked out (seeks), it's in the right place. If people are always scanning the shelves near it (scans), maybe it needs a better label.

</details>

---

# Topic 13: Security (Q89-Q93)

---

## Q89: Row-Level Security

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Row-Level Security (RLS) restricts which rows a user can access based on a security predicate function. The predicate is automatically applied to all queries (SELECT, INSERT, UPDATE, DELETE) on the table. Used for multi-tenant data isolation within a single table.

### Detailed Explanation

- **What it is:** A security mechanism that filters rows based on a user's identity or group membership.
- **Why it exists:** Traditional security controls access at table level only. RLS enables row-level granularity.
- **What problem it solves:** Multi-tenant data sharing (same table, different rows per tenant). Regulatory compliance (some users see sensitive rows, others don't).
- **When to use it:** SaaS multi-tenant databases. Data with access classification levels. Regulatory data isolation.
- **When NOT to use it:** When the filtering predicate performs badly (RLS predicate runs on every query). When application-layer filtering is sufficient.

### SQL Example

```sql
-- Create security predicate function
CREATE FUNCTION dbo.fn_RLS_Orders(@CustomerID INT)
RETURNS TABLE
WITH SCHEMABINDING
AS
RETURN SELECT 1 AS fn_RLS_Orders_Result
WHERE @CustomerID = CAST(SESSION_CONTEXT(N'CustomerID') AS INT)
    OR IS_MEMBER('db_owner') = 1;

-- Create security policy
CREATE SECURITY POLICY dbo.OrdersSecurityPolicy
ADD FILTER PREDICATE dbo.fn_RLS_Orders(CustomerID) ON dbo.Orders
ADD BLOCK PREDICATE dbo.fn_RLS_Orders(CustomerID) ON dbo.Orders;

-- Application sets session context
EXEC sp_set_session_context N'CustomerID', 12345;

-- Now: SELECT * FROM Orders only returns orders where CustomerID = 12345

-- Block predicate: prevents INSERT/UPDATE of rows for other customers
INSERT INTO Orders (CustomerID, OrderTotal) VALUES (99999, 100); -- Fails!
```

### Performance Considerations

- RLS predicate runs on every query against the table (overhead)
- Predicate function should be simple and SARGable
- Index usage depends on the predicate function's implementation
- Block predicates add overhead to DML operations
- Consider using filtered indexes alongside RLS

### Common Mistakes

- Complex predicate functions (performance impact on every query)
- Not testing RLS performance before deployment
- Confusing RLS with column-level security (different purposes)
- Forgetting that RLS affects all queries (including admin/reporting)
- Not planning for predicate function performance

### Follow-Up Questions

**Junior:**
1. What is Row-Level Security?
2. How does RLS differ from column-level security?

**Mid-level:**
1. How to implement RLS for multi-tenant isolation?
2. What are the performance implications of RLS?

**Senior-level:**
1. Design an RLS strategy for a SaaS application with tiered access (admin, user, auditor).
2. Explain the difference between filter and block predicates.

### FAANG-Level Deep Dive

RLS in SQL Server uses predicate functions that the optimizer inlines into the query plan. The predicate is applied as a filter operator (similar to a WHERE clause). At FAANG scale, RLS is often implemented at the application layer (row filtering in middleware) rather than in the database, to reduce database CPU load and allow better caching.

### Explain Like I'm 7

Row-Level Security is like a bouncer at a party who checks your ID before letting you into specific rooms. You can see only the rooms (rows) you're allowed to. Other rooms are invisible to you.

</details>

---

## Q90: Dynamic Data Masking

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Dynamic Data Masking (DDM) automatically obfuscates sensitive data in query results based on column masking rules. It doesn't change stored data - only the output. DDM is NOT encryption (data can be read directly from backup or with appropriate permissions). Used for limiting data exposure to non-privileged users.

### Detailed Explanation

- **What it is:** A column-level security feature that masks data in query results for users without UNMASK permission.
- **Why it exists:** Regulated data (PII, PCI, HIPAA) needs protection even from developers and support staff.
- **What problem it solves:** Prevents sensitive data exposure in non-production environments, dashboards, and reporting.
- **When to use it:** Limiting PII exposure in non-privileged access. Development/testing with masked production data. Customer support tools that don't need full SSNs.
- **When NOT to use it:** As the only security layer (data is still stored unencrypted). For access control (use permissions). When users can infer masked values.

### SQL Example

```sql
-- Create table with masking
CREATE TABLE dbo.Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100) MASKED WITH (FUNCTION = 'partial(2, "***", 2)'),
    Email VARCHAR(100) MASKED WITH (FUNCTION = 'email()'),
    SSN CHAR(11) MASKED WITH (FUNCTION = 'partial(0, "XXX-XX-", 4)'),
    Salary DECIMAL(12,2) MASKED WITH (FUNCTION = 'default()'),
    BirthDate DATE MASKED WITH (FUNCTION = 'default()')
);

-- Add masking to existing column
ALTER TABLE dbo.Customers ALTER COLUMN Email 
ADD MASKED WITH (FUNCTION = 'email()');

-- Grant UNMASK to specific users
GRANT UNMASK TO [DataAdmin];
REVOKE UNMASK FROM [DataAdmin];

-- Default masking: shows XXXX for strings, 0 for numerics, 01-01-1900 for dates
-- Email: a***@***.com
-- Partial(2, "***", 2): first 2, then ***, then last 2 = Jo***hn
-- Random: works for numeric types (random value within range)
```

### Performance Considerations

- Masking is applied at query result time (negligible overhead)
- No impact on storage, indexes, or query performance
- Masking doesn't affect joins or filtering (filtered on original values)
- Data is stored unencrypted (masking is not encryption)

### Common Mistakes

- Assuming DDM is a security boundary (it's NOT - data is in backups, memory, plan cache)
- Using DDM as the only security control (use encryption + access control)
- Not understanding masked data can be inferred (e.g., partial(2,"***",2) shows enough to identify)
- Confusing DDM with Always Encrypted (different purposes)

### Follow-Up Questions

**Junior:**
1. What is Dynamic Data Masking?
2. Does DDM change the stored data?

**Mid-level:**
1. What masking functions are available?
2. How does DDM affect query performance?

**Senior-level:**
1. Design a data protection strategy combining DDM, Always Encrypted, and TDE.
2. Explain the limitations of DDM and when it should NOT be relied upon as a security control.

### FAANG-Level Deep Dive

DDM is a compliance feature, not a security feature. Anyone with sysadmin, db_owner, or db_ddladmin can unmask data. Data is visible in: backups, transaction log, memory dumps, plan cache (parameter values), tempdb (sorting). At FAANG scale, DDM is used only as a first line of defense in non-prod environments. Production sensitive data uses Always Encrypted or column-level encryption.

### Explain Like I'm 7

Dynamic Data Masking is like putting redacted stickers on a report. The original info is still in the database, but when someone without permission looks at it, they see "XXX-XX-1234" instead of the real SSN.

</details>

---

## Q91: Always Encrypted

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Always Encrypted encrypts sensitive data at the column level, with the encryption keys stored outside SQL Server (in client application or Azure Key Vault). SQL Server never sees the plaintext - encryption/decryption happens in the client driver. Protects data at rest, in transit, and from DBA access.

### Detailed Explanation

- **What it is:** A client-side encryption technology where the database engine never has access to the encryption keys.
- **Why it exists:** Traditional TDE protects data at rest but doesn't protect from DBAs or system admins.
- **What problem it solves:** Data is encrypted throughout its lifecycle - at rest, in memory, in logs, and in transit. Even DBAs can't read encrypted columns.
- **When to use it:** Highly sensitive data (SSN, credit cards, medical records). Multi-tenant SaaS where tenant data must be isolated from database administrators. Compliance (PCI DSS, HIPAA).
- **When NOT to use it:** When queries need to search/join on encrypted columns (encrypted columns support only equality; no range queries, LIKE, or sorting on encrypted data).

### SQL Example

```sql
-- Create table with Always Encrypted columns
CREATE TABLE dbo.Patients (
    PatientID INT PRIMARY KEY,
    Name NVARCHAR(100) ENCRYPTED WITH (
        ENCRYPTION_TYPE = RANDOMIZED,
        ALGORITHM = 'AEAD_AES_256_CBC_HMAC_SHA_256'
    ),
    SSN CHAR(11) ENCRYPTED WITH (
        ENCRYPTION_TYPE = DETERMINISTIC,
        ALGORITHM = 'AEAD_AES_256_CBC_HMAC_SHA_256'
    ),
    Diagnosis NVARCHAR(500) ENCRYPTED WITH (
        ENCRYPTION_TYPE = RANDOMIZED,
        ALGORITHM = 'AEAD_AES_256_CBC_HMAC_SHA_256'
    )
);

-- Insert (client encrypts before sending)
INSERT INTO Patients VALUES (1, 'John Doe', '123-45-6789', 'Flu');

-- SELECT with equals on deterministic column (supported)
SELECT * FROM Patients WHERE SSN = '123-45-6789';  -- Works (deterministic)

-- SELECT with LIKE (NOT supported)
SELECT * FROM Patients WHERE Name LIKE '%John%';  -- Fails!

-- Key management
-- Column Master Key (CMK): stored in Azure Key Vault or Windows Certificate Store
-- Column Encryption Key (CEK): encrypted by CMK, stored in database
```

### Performance Considerations

- Randomized encryption: each value encrypts differently (more secure, no equality search)
- Deterministic encryption: same plaintext = same ciphertext (allows equality, GROUP BY, JOIN)
- Client-side encryption/decryption adds latency (1-5ms per query)
- Encryption columns can't be indexed for range scans
- Only supports: =, IN, IS NULL, JOIN on deterministic columns
- Significant impact on large result sets (each value decrypted client-side)

### Common Mistakes

- Not understanding query limitations (no LIKE, range, or pattern matching)
- Using RANDOMIZED when DETERMINISTIC is needed for JOINs
- Not planning key rotation and recovery processes
- Assuming Always Encrypted prevents all access (metadata is visible)
- Not testing performance impact with real data volumes

### Follow-Up Questions

**Junior:**
1. How is Always Encrypted different from TDE?
2. Where are the encryption keys stored?

**Mid-level:**
1. What are the limitations of Always Encrypted for querying?
2. Deterministic vs Randomized encryption - when to use each?

**Senior-level:**
1. Design a data protection strategy combining Always Encrypted with RLS and auditing.
2. Explain the key hierarchy (CMK -> CEK -> data) and rotation process.

### FAANG-Level Deep Dive

Always Encrypted uses a two-tier key hierarchy: Column Master Key (CMK) stored externally (Azure Key Vault, HSM, Windows Cert Store), Column Encryption Key (CEK) stored in the database encrypted by the CMK. The client driver communicates directly with the key store (not through SQL Server). With secure enclaves (SQL Server 2019+), computations on encrypted data are possible (range queries, LIKE, pattern matching). At FAANG scale, Always Encrypted is used for the most sensitive data columns, with secure enclaves enabling richer query patterns.

### Explain Like I'm 7

Always Encrypted is like writing your diary in a secret code that even the librarian can't read. You have the decoder ring (key). When you want to read, your phone decodes it. When you write, your phone encodes it. The library stores the coded version. Even if someone steals the library, they can't read your diary.

</details>

---

## Q92: TDE

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Transparent Data Encryption (TDE) encrypts the entire database at rest - data files, log files, backups. It's transparent to applications (no code changes). Protects against physical theft of media or unauthorized access to backups. Uses a DEK (Database Encryption Key) protected by a certificate or EKM.

### Detailed Explanation

- **What it is:** Real-time I/O encryption of database files and backups. Data is encrypted when written to disk, decrypted when read into memory.
- **Why it exists:** Compliance requirements (PCI, HIPAA, GDPR). Protecting data at rest without application changes.
- **What problem it solves:** Prevents data access from stolen backups or disks. Protects in dev/test environments (backup restored elsewhere).
- **When to use it:** Compliance-required encryption. Protecting backups. Protecting data files in cloud environments.
- **When NOT to use it:** When only specific columns need encryption (use Always Encrypted or column encryption). When application-level encryption is sufficient.

### SQL Example

```sql
-- Create master key
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'StrongPassword123!';

-- Create certificate (protects DEK)
CREATE CERTIFICATE TDECert WITH SUBJECT = 'TDE Certificate';

-- Create Database Encryption Key (DEK)
USE AdventureWorks;
CREATE DATABASE ENCRYPTION KEY
WITH ALGORITHM = AES_256
ENCRYPTION BY SERVER CERTIFICATE TDECert;

-- Enable TDE
ALTER DATABASE AdventureWorks SET ENCRYPTION ON;

-- Check encryption status
SELECT db.name, db.is_encrypted,
       dm.encryption_state,
       dm.encryption_state_desc,
       dm.percent_complete,
       dm.encryptor_type
FROM sys.databases db
LEFT JOIN sys.dm_database_encryption_keys dm
    ON db.database_id = dm.database_id;

-- Backup certificate (critical - must save)
BACKUP CERTIFICATE TDECert
TO FILE = 'C:\Backup\TDECert.cer'
WITH PRIVATE KEY (FILE = 'C:\Backup\TDECert.pvk',
                  ENCRYPTION BY PASSWORD = 'KeyProtectionPassword');
```

### Performance Considerations

- CPU overhead: 3-5% for encryption/decryption per I/O
- Memory: encrypted pages can't be compressed by backup compression
- TempDB: if tempDB is encrypted, all user database temp operations pay encryption cost
- Initial encryption: background operation (online) that scans the database
- Log throughput: log writes are encrypted too (minor overhead)

### Common Mistakes

- Not backing up the certificate and private key (data loss if DB restored elsewhere)
- Enabling TDE without understanding CPU impact
- Encrypting tempDB unnecessarily (adds overhead to all queries)
- Not testing encryption speed before production deployment
- Assuming TDE protects against online attacks (it doesn't - protects at rest only)

### Follow-Up Questions

**Junior:**
1. What does TDE encrypt?
2. Is TDE transparent to applications?

**Mid-level:**
1. How does TDE performance compare to Always Encrypted?
2. What is the DEK and how is it protected?

**Senior-level:**
1. Design a TDE strategy for a multi-server environment with availability groups.
2. Explain the encryption hierarchy: Windows Data Protection API -> Master Key -> Certificate -> DEK -> Database.

### FAANG-Level Deep Dive

TDE uses AES-256 encryption at the page level. Each page has a random initialization vector (IV) for security. The DEK is stored in the database boot page and protected by the server certificate. The certificate is protected by the database master key (DMK), which is protected by the service master key (SMK). At FAANG scale, TDE is considered a baseline requirement for any database containing sensitive data. Cloud providers (Azure SQL, AWS RDS) manage the key hierarchy, reducing operational overhead.

### Explain Like I'm 7

TDE is like putting your entire filing cabinet in a locked safe. Anyone with the key to the room can open the cabinet (applications access data normally). But if someone steals the filing cabinet itself (database files, backups), they can't read anything because it's locked in the safe.

</details>

---

## Q93: SQL Auth vs Windows Auth

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Windows Authentication uses Active Directory for integrated security (Kerberos or NTLM) - more secure, supports password policies, MFA, and Kerberos delegation. SQL Authentication uses username/password stored in SQL Server - less secure, no password policy enforcement, vulnerable to brute force. Windows Auth is always preferred.

### Detailed Explanation

- **What it is:** Two authentication modes: Windows (integrated with domain) and SQL Server (local accounts).
- **Why two exist:** Windows Auth is the recommended method. SQL Auth exists for legacy systems and non-Windows environments (Linux, Docker).
- **What problem they solve:** Windows Auth: centralized management, security policies, MFA. SQL Auth: compatibility, non-Windows clients, legacy applications.
- **When to use Windows Auth:** Windows clients, domain-joined servers, any environment where Active Directory is available.
- **When to use SQL Auth:** Non-Windows clients (Linux, Java apps), legacy applications, Azure SQL without hybrid AD, Docker containers.

### SQL Example

```sql
-- Create SQL login (SQL Authentication)
CREATE LOGIN app_user WITH PASSWORD = 'StrongPass123!';
CREATE USER app_user FOR LOGIN app_user;

-- Create Windows login (Windows Authentication)
CREATE LOGIN [DOMAIN\AppUser] FROM WINDOWS;
CREATE USER [DOMAIN\AppUser] FOR LOGIN [DOMAIN\AppUser];

-- Create contained database user (for contained databases)
CREATE USER contained_user WITH PASSWORD = 'StrongPass123!';

-- Check authentication type
SELECT name, type_desc, is_disabled,
       is_policy_checked, is_expiration_checked
FROM sys.sql_logins;

-- Enable mixed mode (Windows + SQL Auth)
-- Via SSMS: Server Properties -> Security -> SQL Server and Windows Auth
-- Via registry or T-SQL (requires restart)
EXEC xp_instance_regwrite
    N'HKEY_LOCAL_MACHINE',
    N'Software\Microsoft\MSSQLServer\MSSQLServer',
    N'LoginMode',
    REG_DWORD, 2;  -- 1=Windows, 2=Mixed
```

### Performance Considerations

- Windows Auth: Kerberos ticket validation is fast (cached)
- SQL Auth: password hashing on each connection
- Connection pooling reduces authentication overhead for both
- Contained database users: authentication at database level (no server login dependency)

### Common Mistakes

- Using SQL Authentication when Windows Auth is possible
- Using shared SQL logins (can't audit individual activity)
- Not enforcing password policies for SQL logins
- Storing SQL login passwords in connection strings or config files
- Forgetting to disable sa account after migration to Windows Auth

### Follow-Up Questions

**Junior:**
1. Difference between SQL and Windows Authentication?
2. Which is more secure?

**Mid-level:**
1. How does Kerberos authentication work for SQL Server?
2. Why is Windows Auth preferred over SQL Auth?

**Senior-level:**
1. Design an authentication strategy for a hybrid environment with on-prem SQL and Azure SQL.
2. Explain contained database authentication and when it's useful.

### FAANG-Level Deep Dive

At FAANG scale, Windows Auth (Azure AD for cloud) is mandatory. SQL Authentication is disabled. Managed identities and service principals are used for application access. Azure SQL supports Azure AD authentication with conditional access policies, MFA, and managed identities. The AAD token-based authentication avoids password management entirely. SQL Auth is sometimes used as a "break glass" account for emergency access with strict monitoring.

### Explain Like I'm 7

Windows Auth is like using your employee badge to enter the building - your identity is checked at the door. SQL Auth is like having a separate club card with a secret password. The badge is safer because the company controls it, and you can't share it as easily.

</details>

---

# Topic 14: NoSQL, PolyBase, Azure & More (Q94-Q100)

---

## Q94: SQL vs NoSQL

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL databases (relational) use structured schemas, ACID transactions, and powerful JOINs. NoSQL databases trade ACID for scalability and flexibility. Choose SQL when: data relationships are complex, consistency is critical, schema is stable. Choose NoSQL when: schema-less data, massive scale, simple access patterns, high-throughput writes.

### Detailed Explanation

- **What it is:** Two database paradigms: relational (SQL) vs non-relational (NoSQL - document, key-value, wide-column, graph).
- **Why they exist:** SQL's ACID guarantees limit horizontal scalability. NoSQL relaxes constraints for scale.
- **When to use SQL:** Banking, ERP, any system requiring complex relationships and strict consistency.
- **When to use NoSQL:** IoT sensor data (time-series), user sessions (key-value), content management (document), social graphs (graph).
- **Polyglot persistence:** Using both in the same system (SQL for orders, NoSQL for product catalog).

### Comparison

| Feature | SQL (RDBMS) | NoSQL |
|---------|-------------|-------|
| Schema | Fixed, rigid | Flexible, dynamic |
| ACID | Full support | BASE (eventual consistency) |
| Scalability | Vertical (scale up) | Horizontal (scale out) |
| Query | Complex JOINs, aggregations | Simple key/value, map-reduce |
| Examples | SQL Server, PostgreSQL, Oracle | MongoDB, Cassandra, Redis, Neo4j |

### Performance Considerations

- SQL: excellent for complex queries on related data; struggles with write throughput at scale
- NoSQL: excellent for simple read/write at massive scale; struggles with complex queries
- SQL can scale with sharding (complexity increases)
- NoSQL typically has better latency for simple access patterns

### Common Mistakes

- Using NoSQL when data has complex relationships (eventually painful)
- Using SQL when scale requires thousands of writes per second (sharding needed)
- Assuming NoSQL is always faster (it's not - depends on access pattern)
- Not considering polyglot persistence (using both for different needs)

### Follow-Up Questions

**Junior:**
1. What is the difference between SQL and NoSQL?
2. When would you choose NoSQL over SQL?

**Mid-level:**
1. What is the CAP theorem and how does it relate to SQL vs NoSQL?
2. Explain eventual consistency vs strong consistency.

**Senior-level:**
1. Design a polyglot persistence architecture for an e-commerce platform.
2. Compare Cosmos DB vs SQL Server for a global-scale application.

### FAANG-Level Deep Dive

At FAANG, polyglot persistence is standard. Google uses Spanner (SQL with global consistency), Bigtable (wide-column), Firestore (document). Each product uses the database that matches its access patterns. The CAP theorem guides choices: CP systems (Spanner) for consistency, AP systems (Cassandra, DynamoDB) for availability. SQL databases are not obsolete - they're irreplaceable for systems requiring complex relationships and ACID guarantees.

### Explain Like I'm 7

SQL is like a structured filing cabinet with labeled folders and cross-references. NoSQL is like a big box where you can throw various things. The cabinet is better for finding related items (folders linked together). The box is better for storing lots of different things quickly.

</details>

---

## Q95: PolyBase

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

PolyBase allows SQL Server to query external data (Hadoop, Azure Blob Storage, SQL Server, Oracle, Teradata) using T-SQL, without moving the data. It uses external tables with CREATE EXTERNAL TABLE syntax. Enables data virtualization and ETL elimination.

### Detailed Explanation

- **What it is:** A technology that integrates SQL Server with external data sources via T-SQL queries.
- **Why it exists:** Data is often distributed across multiple systems. PolyBase eliminates ETL for querying.
- **What problem it solves:** Query data in Hadoop, Azure Storage, or other SQL Servers without importing.
- **When to use it:** Data lake queries, hybrid cloud scenarios, data virtualization, ad-hoc cross-system analysis.
- **When NOT to use it:** For frequent queries (performance is slower than native). When data needs to be joined and aggregated heavily (better to ETL first).

### SQL Example

```sql
-- Create external data source
CREATE EXTERNAL DATA SOURCE AzureDataLake
WITH (
    TYPE = HADOOP,
    LOCATION = 'wasbs://container@storage.blob.core.windows.net',
    CREDENTIAL = StorageCredential
);

-- Create external file format
CREATE EXTERNAL FILE FORMAT ParquetFormat
WITH (FORMAT_TYPE = PARQUET);

-- Create external table
CREATE EXTERNAL TABLE dbo.SalesExternal (
    SaleID INT,
    SaleDate DATE,
    Amount DECIMAL(12,2)
)
WITH (
    LOCATION = '/sales/2024/',
    DATA_SOURCE = AzureDataLake,
    FILE_FORMAT = ParquetFormat
);

-- Query external data (pushdown computation)
SELECT YEAR(SaleDate) AS Year, SUM(Amount) AS Total
FROM dbo.SalesExternal
WHERE SaleDate >= '2024-01-01'
GROUP BY YEAR(SaleDate);

-- PolyBase on SQL Server 2019+ also supports:
-- SQL Server, Oracle, Teradata, MongoDB via ODBC
```

### Performance Considerations

- Pushdown: computation is pushed to the external source when possible
- Without pushdown: data is pulled to SQL Server for processing
- Network latency and bandwidth affect performance
- Predicate pushdown reduces data transferred
- Parquet file format supports column elimination

### Common Mistakes

- Assuming PolyBase is as fast as native queries (it's not - network overhead)
- Not enabling predicate pushdown (filtering locally instead of remotely)
- Using PolyBase for frequent queries against the same data (better to import)
- Not considering security (credentials, firewall rules)

### Follow-Up Questions

**Junior:**
1. What is PolyBase?
2. How does PolyBase differ from linked servers?

**Mid-level:**
1. What external data sources does PolyBase support?
2. How does predicate pushdown work in PolyBase?

**Senior-level:**
1. Design a data virtualization layer using PolyBase for a hybrid cloud data warehouse.
2. Compare PolyBase with Azure Synapse's data virtualization capabilities.

### FAANG-Level Deep Dive

PolyBase is Microsoft's implementation of the data virtualization pattern. SQL Server 2019+ includes PolyBase for SQL Server, Oracle, Teradata, MongoDB, and generic ODBC. Pushdown computation is critical - SQL Server sends filter and aggregation operations to the external source, only transferring results. At FAANG scale, data virtualization is used for exploratory analysis; production workloads use ETL into dedicated storage.

### Explain Like I'm 7

PolyBase is like having a phone line to a library in another city. You don't bring all the books to your city - you call and ask specific questions, and only get the answers back.

</details>

---

## Q96: Linked Servers

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Linked servers enable SQL Server to execute distributed queries against other databases (SQL Server, Oracle, Excel, etc.) using four-part names (server.database.schema.table). They use OLE DB providers. Useful for cross-database queries but have performance implications (no query optimization across servers).

### Detailed Explanation

- **What it is:** A configuration that allows SQL Server to query other data sources through OLE DB.
- **Why it exists:** Organizations often have multiple databases on different servers.
- **What problem it solves:** Enables cross-server queries, data consolidation, ETL processes.
- **When to use it:** Occasional cross-server queries. Migration projects. Small data transfers.
- **When NOT to use it:** Frequent queries (performance is poor). Large data transfers (better to use SSIS or bulk copy). Distributed transactions (2PC is slow, unreliable).

### SQL Example

```sql
-- Create linked server to SQL Server
EXEC sp_addlinkedserver 
    @server = 'RemoteServer',
    @srvproduct = 'SQL Server';

-- Create linked server to Oracle
EXEC sp_addlinkedserver 
    @server = 'OracleServer',
    @srvproduct = 'Oracle',
    @provider = 'OraOLEDB.Oracle',
    @datasrc = 'OracleTNSName';

-- Query using four-part name
SELECT * FROM RemoteServer.AdventureWorks.dbo.Orders
WHERE OrderDate >= '2024-01-01';

-- Execute dynamic query on remote server
SELECT * FROM OPENQUERY(RemoteServer, 
    'SELECT * FROM Orders WHERE OrderDate >= ''2024-01-01''');

-- OPENQUERY vs four-part name: OPENQUERY executes on remote (pushdown)
-- Four-part name: pulls data to local and filters locally

-- Cross-server JOIN
SELECT l.*, r.OrderTotal
FROM LocalTable l
INNER JOIN RemoteServer.Database.dbo.Orders r
    ON l.ID = r.OrderID;
```

### Performance Considerations

- Four-part name joins: remote data pulled to local, then joined locally (no optimization across servers)
- OPENQUERY: sends query to remote server (can use remote indexes)
- Network latency: every row crosses the network
- Distributed transactions (MSDTC): significant overhead, reliability issues
- Consider using OPENQUERY when possible (pushdown execution)

### Common Mistakes

- Using four-part names in production OLTP (dramatic performance impact)
- Not using OPENQUERY for filtered remote queries
- Relying on distributed transactions (MSDTC issues)
- Not testing latency impact before production deployment
- Leaving linked server connections open (security risk)

### Follow-Up Questions

**Junior:**
1. What is a linked server?
2. How do you query a linked server?

**Mid-level:**
1. Four-part name vs OPENQUERY - performance differences?
2. How does MSDTC work with linked servers?

**Senior-level:**
1. Design a data integration strategy using linked servers vs PolyBase vs SSIS.
2. Explain the security implications of linked servers and how to configure them safely.

### FAANG-Level Deep Dive

Linked servers are rarely used at FAANG scale due to performance and security concerns. Data integration is done through: (1) ETL pipelines (Azure Data Factory, SSIS), (2) data virtualization (PolyBase, Azure Synapse), (3) replication services. Linked servers are occasionally used for admin tasks (querying configuration, metadata) but never in application query paths.

### Explain Like I'm 7

A linked server is like having a direct phone line to another office's filing cabinet. You can ask for files from there, but it's slower than your own cabinet. It's okay for occasional requests but not for daily work.

</details>

---

## Q97: Azure SQL vs On-Premises

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Azure SQL Database is a fully managed PaaS service with built-in high availability, automatic backups, patching, and scalability. On-prem SQL Server gives full control over configuration, performance tuning, and security. Choose Azure SQL for reduced operational overhead and elastic scaling; choose on-prem for maximum control and predictable costs.

### Detailed Explanation

- **What it is:** Azure SQL Database (PaaS) vs SQL Server on your own hardware (IaaS or physical).
- **Key differences:**
  - **Management:** Azure SQL = auto-patching, auto-backup, auto-HA. On-prem = you manage everything.
  - **Scaling:** Azure SQL = elastic (DTU/vCore), pause/resume. On-prem = hardware upgrades.
  - **Compatibility:** Azure SQL has some feature gaps (no SQL Agent, no CLR, no FileStream).
  - **Cost:** Azure SQL = operational expense (pay per use). On-prem = capital expense (hardware + licensing).
- **When to choose Azure SQL:** New development, variable workloads, reduced DBA staff, built-in HA/DR needed.
- **When to choose On-prem:** Legacy applications, specific SQL Server features needed, predictable workloads, regulatory data residency.

### SQL Example

```sql
-- Azure SQL: Elastic pool (share resources across databases)
-- Managed Instance: near 100% SQL Server compatibility
-- SQL Server on Azure VM: full control (IaaS)

-- Azure SQL features not available on-prem
-- Elastic Query (query across databases)
-- Elastic transactions
-- Hyperscale tier (up to 100TB)
-- Geo-replication (automatic failover groups)

-- Features available on-prem but not in Azure SQL
-- SQL Server Agent (use Elastic Jobs in Azure)
-- CLR Integration
-- FileStream/FileTable
-- Database Mirroring (use Always On)
-- Distributed queries (use Elastic Query)
```

### Performance Considerations

- Azure SQL: resource governance (resource limits enforced by service tier)
- On-prem: full hardware utilization (no throttling)
- Azure SQL Hyperscale: separate compute and storage (scale independently)
- DTU vs vCore: DTU is bundled (compute + storage + IO); vCore is flexible
- Serverless (Azure SQL): auto-pause during inactivity (cost savings)

### Common Mistakes

- Not understanding Azure SQL's DTU/vCore limitations (throttling under load)
- Assuming all SQL Server features work in Azure SQL (many don't)
- Not testing migration compatibility before moving
- Ignoring Azure SQL's connection handling (connection retry logic needed)
- Not evaluating Managed Instance (better compatibility) vs Azure SQL Database

### Follow-Up Questions

**Junior:**
1. What is the difference between Azure SQL and on-prem SQL Server?
2. What is a DTU?

**Mid-level:**
1. When would you choose Azure SQL Managed Instance over Azure SQL Database?
2. How does Hyperscale differ from standard Azure SQL?

**Senior-level:**
1. Design a migration strategy from on-prem SQL Server to Azure SQL for a 5TB database.
2. Compare the TCO of Azure SQL vs on-prem for a 3-year period.

### FAANG-Level Deep Dive

At FAANG scale, the cloud vs on-prem decision is made at the data center level. Most FAANG companies run their own data centers (for cost control at massive scale) but use cloud for specific use cases (regional expansion, burst capacity). The Azure SQL vs on-prem decision at these companies depends on: existing infrastructure investment, regulatory requirements (data sovereignty), and workload predictability.

### Explain Like I'm 7

Azure SQL is like renting a fully furnished apartment - everything is taken care of (repairs, cleaning). On-prem is like owning a house - you control everything but you fix the plumbing yourself.

</details>

---

## Q98: Elastic Query in Azure SQL

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

Elastic Query enables querying across multiple Azure SQL databases using external tables (similar to PolyBase). Used for sharded databases (distributing data across databases by tenant or by range). Enables cross-database reporting without moving data.

### Detailed Explanation

- **What it is:** A feature of Azure SQL Database that allows T-SQL queries across multiple databases.
- **Why it exists:** Large-scale applications often shard data across multiple databases for scalability.
- **What problem it solves:** Provides unified querying capability across sharded databases.
- **When to use it:** Reporting across sharded databases. Cross-tenant analytics. Gradual migration (temporary cross-database queries).
- **When NOT to use it:** Real-time OLTP queries (performance is slower). Simple single-database scenarios (unnecessary complexity).

### SQL Example

```sql
-- Create master key and credential
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'Password123!';
CREATE DATABASE SCOPED CREDENTIAL CrossDB 
WITH IDENTITY = 'user@tenant.com', SECRET = 'Password';

-- Create external data source (shard map)
CREATE EXTERNAL DATA SOURCE ShardMap
WITH (
    TYPE = SHARD_MAP_MANAGER,
    LOCATION = 'shardmap.database.windows.net',
    DATABASE_NAME = 'ShardMap',
    CREDENTIAL = CrossDB
);

-- Create external table that queries across shards
CREATE EXTERNAL TABLE dbo.OrdersGlobal (
    OrderID INT,
    CustomerID INT,
    OrderDate DATETIME2,
    Amount DECIMAL(12,2)
) WITH (
    DATA_SOURCE = ShardMap,
    SCHEMA_NAME = 'dbo',
    OBJECT_NAME = 'Orders'
);

-- Query across all shards
SELECT CustomerID, COUNT(*) AS OrderCount, SUM(Amount) AS TotalSpent
FROM dbo.OrdersGlobal
WHERE OrderDate >= '2024-01-01'
GROUP BY CustomerID
ORDER BY TotalSpent DESC;
```

### Performance Considerations

- Fan-out queries run on all shards (parallel)
- Results are aggregated at the coordinator database
- Network latency: each shard query crosses the network
- Predicate pushdown: WHERE filters pushed to each shard
- GROUP BY isn't pushed down well (aggregate locally after pulling)

### Common Mistakes

- Using Elastic Query for frequent OLTP queries (performance impact)
- Not filtering by shard key (all shards queried unnecessarily)
- Assuming complex aggregations are efficient (they may pull large datasets)
- Not monitoring fan-out performance

### Follow-Up Questions

**Junior:**
1. What is Elastic Query?
2. How does it differ from linked servers?

**Mid-level:**
1. How does Elastic Query handle sharded databases?
2. What is a shard map manager?

**Senior-level:**
1. Design a sharded database architecture with Elastic Query for reporting.
2. Compare Elastic Query with PolyBase in Azure Synapse.

### FAANG-Level Deep Dive

Elastic Query is Azure SQL's answer to cross-database queries in sharded environments. Internally, it uses a fan-out pattern: the coordinator database sends queries to each shard, collects results, and merges. The shard map manager maps shard keys to database connections. At FAANG scale, sharding is done at the application layer with custom routing, and cross-shard queries are avoided in application code.

### Explain Like I'm 7

Elastic Query is like a receptionist who calls multiple offices to get information. You ask one question, and the receptionist calls each office, collects the answers, and gives you the combined result.

</details>

---

## Q99: SQL Server on Linux

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL Server 2017+ runs on Linux (Red Hat, Ubuntu, SUSE) and in Docker containers. The core database engine is the same binary (not a port) - it uses a new Platform Abstraction Layer (PAL) for OS interaction. Most features are supported but some Windows-specific features (Integration Services, Analysis Services) are not available.

### Detailed Explanation

- **What it is:** SQL Server running on Linux via the PAL abstraction layer.
- **Why it exists:** Microsoft expanded SQL Server to Linux for broader adoption, containerization, and cost savings (no Windows licensing).
- **What problem it solves:** Enables SQL Server on Linux infrastructure, Docker containers, and Kubernetes.
- **When to use it:** Organizations standardized on Linux. Containerized deployments. Cost-sensitive environments (Linux licensing is free). Development environments on macOS (via Docker).
- **When NOT to use it:** When Windows-specific features are needed (SSIS, SSAS, SSRS, FileStream). When Active Directory integration is critical (complex setup on Linux).

### SQL Example

`ash
# Install SQL Server on Ubuntu (example)
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
sudo add-apt-repository ""
sudo apt-get update
sudo apt-get install -y mssql-server
sudo /opt/mssql/bin/mssql-conf setup

# Run SQL Server in Docker
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Strong@Pass123' \
   -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest

# Connect (same tools as Windows)
sqlcmd -S localhost -U SA -P 'Strong@Pass123'

# Manage SQL Server on Linux
sudo systemctl status mssql-server
sudo /opt/mssql/bin/mssql-conf set memory.memorylimitmb 4096
```

### Performance Considerations

- Same query processor and optimization engine (identical query plans)
- I/O subsystem uses Linux async I/O (AIO)
- Memory management uses Linux kernel same-page merging
- Network uses Linux TCP/IP stack
- Performance is comparable to Windows for the same hardware

### Common Mistakes

- Assuming all SQL Server features work on Linux (check feature list)
- Not configuring mssql-conf settings (memory, data directory)
- Using case-sensitive file system (SQL Server is case-insensitive internally)
- Forgetting to open firewall ports for SQL Server

### Follow-Up Questions

**Junior:**
1. What SQL Server versions run on Linux?
2. How do you install SQL Server on Linux?

**Mid-level:**
1. What is the Platform Abstraction Layer (PAL)?
2. Which SQL Server features are NOT available on Linux?

**Senior-level:**
1. Design a high-availability SQL Server deployment on Kubernetes with Linux containers.
2. Compare the performance characteristics of SQL Server on Linux vs Windows.

### FAANG-Level Deep Dive

SQL Server on Linux uses the PAL to translate Windows kernel calls (like fiber mode, I/O completion ports) to Linux equivalents (epoll, AIO). The engine binary is the same - the PAL provides OS abstraction. At FAANG scale, SQL Server on Linux in Docker containers is deployed via Kubernetes for elastic scaling. The containerized deployment enables rapid provisioning and consistent environments.

### Explain Like I'm 7

SQL Server on Linux is like running a Windows program on a Mac using a translator. The program works the same, but the translator handles the different "language" between the program and the computer's operating system.

</details>

---

## Q100: Future of SQL

<details>
<summary>Click to expand answer</summary>

### Short Interview Answer

SQL continues to evolve: cloud-native databases (Azure SQL Hyperscale, CockroachDB), AI integration (SQL Server 2022 with Azure ML), real-time analytics (HTAP with columnstore), JSON/document support, and graph features. SQL remains the dominant data query language with enhancements for modern workloads. The future is hybrid transactional/analytical processing (HTAP) with cloud-native architecture.

### Detailed Explanation

- **What it is:** The ongoing evolution of SQL and relational databases to meet modern requirements.
- **Trends:**
  - **Cloud-native:** Separate compute and storage (Azure SQL Hyperscale, Aurora), auto-scaling, serverless
  - **HTAP:** Hybrid Transactional/Analytical Processing (same data for both workloads via columnstore and rowstore)
  - **AI/ML Integration:** AI queries (SQL Server 2022 + Azure ML, Oracle ML)
  - **Multi-model:** Relational + JSON + Graph + Vector (SQL Server 2022 graph, PostgreSQL JSONB)
  - **Distributed SQL:** Google Spanner, CockroachDB, Yugabyte (SQL with global consistency)
  - **SQL + REST:** REST API for SQL databases (Azure SQL REST API)
  - **Azure Synapse:** Unified analytics (SQL + Spark + Pipelines)
- **SQL is not dying:** SQL remains the most used and most in-demand data language.

### Emerging Technologies

```sql
-- SQL Server 2022: Azure ML integration
EXEC sp_invoke_external_rest_endpoint
    @url = 'https://ml-endpoint.azure.com/predict',
    @payload = '{"data": {"temperature": 25}}';

-- SQL Server Graph (Node/Edge tables)
CREATE TABLE Person (ID INT PRIMARY KEY, Name VARCHAR(100)) AS NODE;
CREATE TABLE Knows AS EDGE;
INSERT INTO Knows (, ) VALUES(
    (SELECT  FROM Person WHERE ID = 1),
    (SELECT  FROM Person WHERE ID = 2)
);
SELECT Person.Name, Friend.Name
FROM Person, Knows, Person AS Friend
WHERE MATCH(Person-(Knows)->Friend);

-- Azure SQL Hyperscale (separate compute/storage)
-- CREATE DATABASE... WITH (SERVICE_OBJECTIVE = 'HS_GEN5_4')

-- Serverless compute: auto-pause and auto-scale
-- ALTER DATABASE... MODIFY (SERVICE_OBJECTIVE = 'GP_S_Gen5_2')

-- Synapse: Unified analytics
-- CREATE EXTERNAL TABLE... AS SELECT * FROM OPENROWSET(...)
```

### The Future

- AI-powered query optimization (automatic tuning, autonomous database)
- Vector databases for AI embeddings (SQL Server + pgvector)
- Real-time streaming SQL (Kafka + SQL, Azure Stream Analytics)
- SQL over REST (ODBC/REST bridges)
- Blockchain-verified SQL (tamper-evident databases)
- Quantum-safe encryption for SQL databases

### Common Mistakes

- Assuming SQL is obsolete (it's evolving, not dying)
- Ignoring cloud-native SQL capabilities (staying on-prem unnecessarily)
- Not learning new SQL features (JSON, graph, AI)
- Thinking NoSQL replaces SQL entirely (choose the right tool for the job)

### Follow-Up Questions

**Junior:**
1. Is SQL still relevant for new projects?
2. What is a cloud-native database?

**Mid-level:**
1. What is HTAP and how does it differ from traditional OLAP?
2. How will AI/ML integration in SQL databases change development?

**Senior-level:**
1. Design a future-proof data architecture that incorporates SQL, NoSQL, and AI.
2. Explain the implications of distributed SQL (Spanner) for global-scale applications.

### FAANG-Level Deep Dive

The future of SQL at FAANG is distributed, AI-augmented, and multi-model. Google's Spanner shows that SQL can scale globally with strong consistency (TrueTime). Amazon's Aurora shows cloud-native SQL with decoupled compute/storage. AI integration (SQL + ML) enables in-database prediction, anomaly detection, and natural language queries. SQL remains the universal data language - it's not being replaced, it's being augmented. The most valuable skill is understanding when to apply which technology: SQL for relationships and consistency, NoSQL for scale and flexibility, graph for connections.

### Explain Like I'm 7

SQL is like the alphabet of data - it's been around forever and is used everywhere. It's not going away - it's just learning new tricks. It can now talk to AI, understand graphs, and run in the cloud. Like how letters are still used for texting (with emojis added!), SQL is the same language with modern features.

</details>

---

<div align="center">

## Volume 4 Complete

**You've completed all 100 questions!**

This guide covered:

| Topic | Questions |
|-------|-----------|
| SQL Basics & DDL | Q1-Q7 |
| Joins | Q8-Q15 |
| Set Operations | Q16-Q20 |
| Subqueries & CTEs | Q21-Q27 |
| Window Functions | Q28-Q35 |
| Indexing Strategy | Q36-Q43 |
| Query Optimization | Q44-Q51 |
| Transactions & Locking | Q52-Q59 |
| Stored Procedures & Functions | Q60-Q66 |
| Database Design | Q67-Q73 |
| Advanced SQL | Q74-Q81 |
| Performance Tuning | Q82-Q88 |
| Security | Q89-Q93 |
| NoSQL, PolyBase, Azure & More | Q94-Q100 |

---

**Next: Volume 5 - Angular**

</div>
