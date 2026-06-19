# Volume 3: Entity Framework Core Interview Preparation Guide

> **Senior .NET Data Access — Principal Engineer Level**

[![EF Core](https://img.shields.io/badge/EF%20Core-10.0-purple?style=for-the-badge&logo=.net)](https://learn.microsoft.com/ef-core/)
[![.NET](https://img.shields.io/badge/.NET-10.0-512BD4?style=for-the-badge&logo=dotnet)](https://dotnet.microsoft.com/)
[![SQL](https://img.shields.io/badge/SQL-TSQL-CC2927?style=for-the-badge&logo=microsoft-sql-server)](https://learn.microsoft.com/sql/)
[![Interview](https://img.shields.io/badge/Interview-FAANG-FF6F00?style=for-the-badge&logo=google)](https://)
[![Questions](https://img.shields.io/badge/Questions-110-success?style=for-the-badge)](https://)
[![Level](https://img.shields.io/badge/Level-Junior%20to%20FAANG-ff69b4?style=for-the-badge)](https://)

---

## 🧠 What Is This Guide?

This is **Volume 3** of a 16-volume interview preparation series. It contains **110 expert-crafted Entity Framework Core interview questions** covering every major feature from DbContext basics to EF Core 10 JSON columns. Each question is designed to test you at the level expected of a **Senior .NET Engineer** at a FAANG company.

### Who Is This For?

| Role | What You Need |
|------|--------------|
| **Junior (0–2 yrs)** | Fundamentals, migrations, basic querying |
| **Mid-Level (3–5 yrs)** | Relationships, change tracker, performance |
| **Senior (6–9 yrs)** | Concurrency, interception, advanced mapping |
| **Staff / Principal (10+)** | FAANG deep dives, internal workings, trade-offs |

### How to Use This Guide

1. Read each question in order
2. Cover the answer and try to respond **out loud** (as in an interview)
3. Review the **FAANG-Level Deep Dive** for stretch concepts
4. Implement the **C# Examples** in a real project
5. Study the **SQL Examples** to understand what EF generates

---

## 📚 Table of Contents

<details>
<summary><strong>Click to expand</strong> — 110 Questions across 15 Topics</summary>

| # | Topic | Questions |
|---|-------|-----------|
| 1 | [EF Core Fundamentals](#1-ef-core-fundamentals) | Q1–Q8 |
| 2 | [Migrations](#2-migrations) | Q9–Q15 |
| 3 | [Querying & LINQ](#3-querying--linq) | Q16–Q23 |
| 4 | [Relationships](#4-relationships) | Q24–Q31 |
| 5 | [Performance Tuning](#5-performance-tuning) | Q32–Q39 |
| 6 | [Change Tracker](#6-change-tracker) | Q40–Q46 |
| 7 | [Concurrency](#7-concurrency) | Q47–Q53 |
| 8 | [Raw SQL & Stored Procedures](#8-raw-sql--stored-procedures) | Q54–Q60 |
| 9 | [Advanced Features](#9-advanced-features) | Q61–Q68 |
| 10 | [EF Core 10 Features](#10-ef-core-10-features) | Q69–Q75 |
| 11 | [Database Providers](#11-database-providers) | Q76–Q82 |
| 12 | [Global Query Filters](#12-global-query-filters) | Q83–Q89 |
| 13 | [Interception](#13-interception) | Q90–Q96 |
| 14 | [Value Conversions](#14-value-conversions) | Q97–Q103 |
| 15 | [JSON Columns](#15-json-columns) | Q104–Q110 |

</details>

---

## 📊 Progress Tracker

\\\
██████████████████████████████████████████████████ 110/110
\\\

---
# 1. EF Core Fundamentals

<details>
<summary><strong>8 Questions — DbContext, DbSet, Connection Management</strong></summary>

- Q1: What is DbContext and what is its lifetime?
- Q2: How does DbContext pooling work?
- Q3: What is DbSet and how does it map to tables?
- Q4: How does EF Core manage database connections?
- Q5: What is the difference between AddDbContext and AddDbContextFactory?
- Q6: How does OnConfiguring differ from ConfigureServices?
- Q7: What is the IDesignTimeDbContextFactory interface used for?
- Q8: How does EF Core resolve DbContext in ASP.NET Core?

</details>

---
## Q1: What is DbContext and what is its lifetime?

### Short Interview Answer

DbContext is the central class in EF Core that represents a session with the database. It manages entity tracking, query execution, save operations, and identity resolution. In ASP.NET Core, its default lifetime is **scoped** — one instance per HTTP request — which ensures consistency within a single unit of work.

### Detailed Explanation

- **What it is**: A lightweight facade over the database that combines DbSet properties (entity-to-table mapping), change tracking, and connection management into one class.
- **Why it exists**: To provide a unit-of-work and repository pattern built-in, allowing developers to interact with the database through strongly-typed objects without writing SQL.
- **What problem it solves**: Eliminates the impedance mismatch between object-oriented code and relational data. It also manages concurrency, change detection, and identity tracking automatically.
- **When to use it**: Every time you need to read or write data through EF Core. One instance per logical operation (e.g., one HTTP request, one background job execution).
- **When NOT to use it**: Do not use a single long-lived instance; DbContext is not thread-safe. Do not use it in using blocks that span multiple unrelated operations — it tracks entities and memory grows.

### Internal Working

- **Runtime behavior**: On first use, DbContext builds a model from OnModelCreating. It opens connections lazily — only when a query or save is executed. It uses an internal StateManager to track entity states (Added, Modified, Deleted, Unchanged, Detached).
- **Memory behavior**: Entities loaded are cached in the ChangeTracker until the context is disposed. This can cause memory bloat if the context lives too long or loads too many entities.
- **SQL generation behavior**: When SaveChangesAsync is called, the StateManager iterates all tracked entities, generates INSERT/UPDATE/DELETE statements via IUpdateSqlGenerator, and executes them in a single transaction.
- **Performance impact**: Short-lived scoped contexts are optimal. Pooled contexts reuse internal services but reset state. Context creation is cheap after the first use because the model is cached globally via IModelCacheKeyFactory.

### Step-by-Step Execution

`
1. using var db = new AppDbContext() — Constructor runs, model is built or loaded from global cache
2. db.Users.Where(u => u.Id == 1).FirstOrDefault() — Extension method called
3. LINQ expression tree is created by C# compiler
4. EF Core's query pipeline translates expression tree -> SelectExpression
5. IQuerySqlGenerator produces SQL: SELECT TOP 1 * FROM Users WHERE Id = @p0
6. IRelationalConnection opens a DbConnection (if not already open)
7. IDbCommand is created and executed via ADO.NET
8. Results are materialized via IEntityMaterializerSource
9. Entity is attached to ChangeTracker in Unchanged state
10. Dispose closes the connection
`

### Real-World Example

An e-commerce checkout flow: one DbContext loads the user's cart, validates inventory, creates an order, clears the cart, and saves everything in one SaveChangesAsync call with automatic transaction wrapping.

### C# Example

`csharp
public class AppDbContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=.;Database=Shop;Trusted_Connection=true;");
}

// Scoped usage in ASP.NET Core
public class UserService
{
    private readonly AppDbContext _db;
    public UserService(AppDbContext db) => _db = db;

    public async Task<User?> GetUserAsync(int id)
        => await _db.Users.FindAsync(id);
}
`

### SQL Example

`sql
SELECT TOP 1 [u].[Id], [u].[Name], [u].[Email]
FROM [Users] AS [u]
WHERE [u].[Id] = @p0
`

### Performance Considerations

- **Faster**: Scoped lifetime (one per request), AddDbContextPool for high-throughput services, AsNoTracking for read-only queries.
- **Slower**: Singleton lifetime (causes memory leaks, stale data, concurrency issues), recreating context for every micro-operation.
- **Tradeoffs**: Pooling trades some memory for reduced initialization cost. Large contexts with many tracked entities degrade SaveChanges performance.
- **N+1**: A single DbContext makes it easy to accidentally trigger N+1 queries by lazy-loading navigation properties in a loop.

### Common Mistakes

- Using DbContext as a singleton or static field — causes thread-safety crashes and memory leaks.
- Disposing DbContext too early and then trying to lazy-load a navigation property.
- Not disposing the context at all — connections leak.
- Capturing a DbContext in a background task that outlives the HTTP request.

### Follow-Up Questions

- **Junior**: What is the difference between DbContext and ObjectContext?
- **Junior**: How do you register DbContext in the DI container?
- **Mid-level**: How does EF Core ensure identity resolution within a single DbContext?
- **Mid-level**: What happens to tracked entities when you call Dispose?
- **Senior**: How would you implement multi-tenancy with a shared DbContext pool?
- **Senior**: Explain how IModelCacheKeyFactory works and when you'd customize it.

### FAANG-Level Deep Dive

**How does EF Core achieve identity resolution without a second-level cache?**

Inside DbContext, the ILocalView maintains a dictionary (Dictionary<EntityKey, InternalEntityEntry>). When a query returns a row whose key already exists in the dictionary, the materializer returns the **existing tracked instance** instead of creating a new object. This is why two queries for the same entity return the same reference — but it also means the in-memory state can diverge from the database. Microsoft calls this the "identity map" pattern. The key insight: EF Core trades a **second-level cache** (shared across contexts) for a **first-level identity map** (per context) to keep the unit-of-work isolation guarantees. If you need cross-context caching, you must layer IMemoryCache or IDistributedCache yourself.

### Explain Like I'm 7

Imagine you have a notebook for a school project. The DbContext is that notebook. You write down questions (queries) and answers (results) in it. Each time you start a new project, you get a fresh notebook. You never share your notebook with your friend while you're writing in it because you'd get confused. When the bell rings (the HTTP request ends), you close the notebook and put it away.

---
## Q2: How does DbContext pooling work?

### Short Interview Answer

AddDbContextPool<T> pre-creates a pool of DbContext instances that are reset and reused across requests. Instead of creating a new context each time, the pool resets the old context's state (clears change tracker, disposes internal services) and hands it out again. This reduces the overhead of model building and service initialization in high-throughput scenarios.

### Detailed Explanation

- **What it is**: A pool of reusable DbContext instances managed by DbContextPool<T>. Configured via services.AddDbContextPool<AppDbContext>(options => ...).
- **Why it exists**: Creating a DbContext involves building or loading a model, initializing internal services (logging, caching, connection management), and allocating memory. Pooling amortizes these costs across requests.
- **What problem it solves**: Reduces allocations and GC pressure in high-traffic web applications. The model is built once and shared — the pool reuses the internal service providers.
- **When to use it**: High-throughput ASP.NET Core applications where context creation overhead is measurable in profiling. Typical threshold: >500 requests/second.
- **When NOT to use it**: Low-traffic apps, contexts with custom OnConfiguring that varies per request, or contexts that require unique service provider configurations.

### Internal Working

- **Runtime behavior**: The pool holds a fixed-size list of DbContext instances. On Get, it returns a free instance or waits. On Release, it calls DbContext.ResetState() and returns it to the pool. The default pool size is 128.
- **Memory behavior**: Pooled contexts stay in memory, reducing allocation rate but increasing baseline memory usage. Large pools waste memory if underutilized.
- **SQL generation behavior**: Identical to non-pooled — pooling does not affect SQL generation.
- **Performance impact**: Throughput improves measurably (10-30%) under load. Context acquisition becomes O(1). The model is built once and shared via a global cache keyed by IModelCacheKeyFactory.

### Step-by-Step Execution

`
1. services.AddDbContextPool<AppDbContext>(o => o.UseSqlServer(...)) registers pool
2. First request arrives -> pool creates new AppDbContext (model built)
3. Second request arrives -> pool hands out existing (reset) context
4. Request ends -> DisposeAsync called -> pool calls ResetState -> context returned to pool
5. If pool exhausted -> request blocks until a context is released
`

### Real-World Example

A SaaS platform handling 10,000+ concurrent API requests uses AddDbContextPool with size 256. Each request gets a clean context in under 1µs, whereas creating a new context takes ~50µs. Over millions of requests, this saves gigabytes of allocations.

### C# Example

`csharp
// Program.cs
builder.Services.AddDbContextPool<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Default pool size is 128, can be configured:
builder.Services.AddDbContextPool<AppDbContext>(options =>
    options.UseSqlServer(connectionString), poolSize: 256);
`

### SQL Example

`sql
-- Pooling has zero impact on SQL generation.
SELECT [u].[Id], [u].[Name] FROM [Users] AS [u]
`

### Performance Considerations

- **Faster**: Reduces per-request allocation, reuses compiled model, reuses internal service providers.
- **Slower**: If OnConfiguring differs per request (e.g., dynamic connection strings), pooling cannot be used.
- **Tradeoffs**: Memory baseline is higher; context state must be fully reset.
- **N+1**: Pooling doesn't affect N+1; that's a query pattern problem.

### Common Mistakes

- Using pooling with dynamic connection strings.
- Setting poolSize too low — requests block waiting for a context.
- Setting poolSize too high — memory waste.
- Calling AddDbContextPool alongside AddDbContext for the same type.

### Follow-Up Questions

- **Junior**: What is the default pool size in EF Core?
- **Junior**: How do you enable DbContext pooling?
- **Mid-level**: What happens if the pool is exhausted?
- **Mid-level**: Can you use IDbContextFactory with pooling?
- **Senior**: How would you implement a custom DbContextPool for a multi-tenant system?
- **Senior**: What interface does EF Core use to reset context state, and can you extend it?

### FAANG-Level Deep Dive

**Why does Microsoft not pool IServiceProvider along with DbContext?**

Each DbContext in the pool gets its own IServiceScope (and thus its own scoped service provider). However, EF Core's internal services (like IQueryCompiler, IModel) are singletons — they are cached globally regardless of pooling. The pooled context resets only the **mutable state**: ChangeTracker, Database, ContextId, and Disposed flag. The ILocalView dictionary is cleared, not disposed. The real performance win is avoiding allocation of the internal DbContextServices object (~2KB) and the IDictionary structures for change tracking. In .NET 9+, the pool also uses System.Threading.Channels internally for lock-free acquire/release, reducing contention at high concurrency.

### Explain Like I'm 7

Imagine a swimming pool with floaties. Instead of blowing up a new floatie every time someone wants to swim, you deflate it and put it back when they're done. The next kid grabs the same already-inflated floatie. That's DbContext pooling — reuse instead of rebuild.

---
## Q3: What is DbSet and how does it map to tables?

### Short Interview Answer

DbSet<TEntity> represents a typed collection of entities that maps to a database table (or view). Each property of type DbSet<T> on a DbContext class tells EF Core that T is an entity type with a corresponding table. It provides methods like Add, Update, Remove, Find, and LINQ query operators for that entity.

### Detailed Explanation

- **What it is**: A non-generic abstraction (DbSet) and its generic form (DbSet<T>) that expose CRUD operations and LINQ queries for a specific entity type.
- **Why it exists**: Provides a strongly-typed, LINQ-compatible surface for data access. Hides the underlying IDbSet implementation and allows fluent composition of queries.
- **What problem it solves**: Without DbSet, you'd need raw IDbCommand or hand-written SQL for every table. DbSet gives you compile-time safety, IntelliSense, and composable query building.
- **When to use it**: Always — it is the primary way to access data in EF Core. Each entity type that maps to a table should have a DbSet<T> property or be registered in OnModelCreating.
- **When NOT to use it**: For keyless entity types mapped to views or raw SQL, use DbSet<T>.FromSql() or EntityTypeBuilder.HasNoKey() rather than a standard DbSet.

### Internal Working

- **Runtime behavior**: DbSet<T> is created lazily by DbContext when first accessed via Set<T>() or the property. It wraps an internal InternalDbSet<T> that holds a reference to the context and the entity type's EntityType metadata.
- **Memory behavior**: DbSet instances are lightweight — they hold a reference to the context and the entity type. They are cached on the context after first access.
- **SQL generation behavior**: DbSet<T> is the entry point for LINQ queries. It implements IQueryable<T>, so LINQ operators build expression trees that the query pipeline translates to SQL.
- **Performance impact**: Near zero — accessing DbSet<T> is essentially a dictionary lookup on the context's internal set of entity types.

### Step-by-Step Execution

`
1. db.Users accesses the DbSet<User> property
2. EF Core's DbContext.Set<User>() finds or creates InternalDbSet<User>
3. db.Users.Where(u => u.Age > 18).ToListAsync() is called
4. LINQ provider (IQueryProvider) receives expression tree
5. Expression tree is translated to SQL by query compilation pipeline
6. SQL is executed, results materialized
`

### Real-World Example

A content management system defines DbSet<Blog> and DbSet<Post>. Queries like db.Blogs.Include(b => b.Posts).ToListAsync() produce a SQL JOIN on the fly.

### C# Example

`csharp
public class Blog
{
    public int Id { get; set; }
    public string Title { get; set; }
    public ICollection<Post> Posts { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Blog> Blogs => Set<Blog>();
    public DbSet<Post> Posts => Set<Post>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>().ToTable("tbl_Blogs");
    }
}

await using var db = new AppDbContext();
var blog = await db.Blogs
    .Include(b => b.Posts)
    .FirstOrDefaultAsync(b => b.Id == 1);
`

### SQL Example

`sql
SELECT [b].[Id], [b].[Title], [p].[Id], [p].[BlogId], [p].[Title]
FROM [tbl_Blogs] AS [b]
LEFT JOIN [Posts] AS [p] ON [b].[Id] = [p].[BlogId]
WHERE [b].[Id] = @p0
ORDER BY [b].[Id]
`

### Performance Considerations

- **Faster**: Using DbSet<T> directly is optimal. Use AsNoTracking() for read-only queries.
- **Slower**: Calling Set<T>() repeatedly in a loop (minor — it's cached after first call).
- **Tradeoffs**: A DbSet property is syntactic sugar over Set<T>(). Both are equivalent.
- **N+1**: Accessing navigation properties inside a loop through DbSet is the most common N+1 trigger.

### Common Mistakes

- Declaring DbSet<T> as public DbSet<T> MyEntities { get; set; } without initializing — use => Set<T>() instead.
- Forgetting to register entity types — if you don't have a DbSet property and don't register in OnModelCreating, EF Core ignores the entity.
- Using DbSet.Local without understanding it returns only tracked entities, not all database rows.

### Follow-Up Questions

- **Junior**: What is the difference between DbSet<T> and IDbSet<T>?
- **Junior**: How does EF Core know which entity types are part of the model?
- **Mid-level**: What is the DbSet<T>.Local property and when would you use it?
- **Mid-level**: How does DbSet<T>.FindAsync work differently from a LINQ query?
- **Senior**: Explain how DbSet<T> implements IQueryable and what provider it uses.
- **Senior**: How would you create a custom DbSet-like wrapper that adds auditing transparently?

### FAANG-Level Deep Dive

**DbSet and IQueryable: The Expression Tree Pipeline**

DbSet<T> implements IQueryable<T> via an InternalDbSet<T>. When you call Where, Select, or Include, the C# compiler produces an expression tree, not IL. This expression tree is passed to IQueryProvider.Execute() or IQueryProvider.CreateQuery(). EF Core's EntityQueryProvider (internal) recognizes the expression and hands it to the query compilation pipeline. The critical insight: **EF Core does NOT recompile every query**. It uses an ExpressionEqualityComparer to compute a hash of the expression tree and caches the compiled query plan. The first execution compiles the LINQ-to-SQL translation; subsequent executions with the same expression structure hit the cache. This is the IQueryCache mechanism, keyed on the HasColumnType + EntityType + parameter structure. With EF.CompileQuery(), you bypass expression tree hashing entirely and provide a delegate directly.

### Explain Like I'm 7

Think of DbSet as a labeled drawer in your filing cabinet. The drawer labeled "Blogs" holds all the blog files. You open that drawer to add a new blog, find an existing one, or remove one. You never need to know where the cabinet is — you just use the drawer.

---
## Q4: How does EF Core manage database connections?

### Short Interview Answer

EF Core uses ADO.NET's DbConnection under the hood, opening it lazily — only when executing a query or saving changes. Connections are managed by a IRelationalConnection implementation that respects the DbConnection's own pooling (e.g., SQL Server's connection pool). EF Core never calls Open until needed and closes/disposes the connection when the DbContext is disposed.

### Detailed Explanation

- **What it is**: A DbConnection wrapper (RelationalConnection) that adds auto-open, auto-close, and transaction enlistment on top of the raw ADO.NET connection.
- **Why it exists**: To abstract connection management away from the developer. The context opens and closes the connection as needed, ensuring connections aren't held longer than necessary.
- **What problem it solves**: Developers would otherwise need to manually manage Open/Close, handle connection strings, and deal with transaction scoping. EF Core automates this.
- **When to use it**: Always — EF Core manages connections automatically. You can also manually open the connection if you need transactional consistency with non-EF operations.
- **When NOT to use it**: When you need fine-grained control over connection lifetime, you can access db.Database.GetDbConnection() directly. For read-only, high-performance scenarios, consider SqlConnection with Dapper instead.

### Internal Working

- **Runtime behavior**: RelationalConnection.Open() checks if the underlying DbConnection is already open. If not, it calls Open and sets _openedInternally = true. On Dispose, if opened internally, it closes the connection. Commands enlist in the current transaction automatically.
- **Memory behavior**: The DbConnection is held as a field on RelationalConnection. Connection pooling handles the actual TCP connection reuse at the ADO.NET level.
- **SQL generation behavior**: Connection management is orthogonal to SQL generation. SQL is generated before the connection is opened.
- **Performance impact**: Lazy open minimizes connection hold time. However, if you execute multiple queries sequentially, the connection is opened and closed per query unless explicitly managed with db.Database.OpenConnection().

### Step-by-Step Execution

`
1. db.Users.ToListAsync() called
2. Query pipeline generates SQL
3. RelationalConnection.Open() called
4. Checks _openedInternally == false
5. Calls DbConnection.Open() (may acquire from ADO.NET pool)
6. Command executed
7. DataReader consumed
8. RelationalConnection.Close() if opened internally
`

### Real-World Example

In a reporting API, a single DbContext executes three queries: count, list, and aggregate. Without explicit OpenConnection(), the connection opens and closes three times, paying the pool roundtrip each time.

### C# Example

`csharp
// Default: lazy open/close per operation
await db.Users.CountAsync();
await db.Users.ToListAsync();

// Optimized: manual open keeps connection alive
await db.Database.OpenConnectionAsync();
try
{
    await db.Users.CountAsync();
    await db.Users.ToListAsync();
}
finally
{
    await db.Database.CloseConnectionAsync();
}

// Access underlying connection
using var rawConn = db.Database.GetDbConnection();
if (rawConn.State != ConnectionState.Open)
    await rawConn.OpenAsync();
`

### SQL Example

`sql
-- EF Core doesn't generate SQL for connection management.
-- ADO.NET handles it via SqlConnection.Open/Close
`

### Performance Considerations

- **Faster**: Manual OpenConnection for batch operations, ADO.NET connection pooling, MultipleActiveResultSets=True.
- **Slower**: Open/close per query without MARS, holding connections open in transactions for too long.
- **Tradeoffs**: Manual connection management gives more control but adds complexity and potential for leaks.
- **N+1**: Each lazy-loaded navigation property opens/closes the connection — worsening N+1 perf impact.

### Common Mistakes

- Assuming DbContext holds the connection open after a query — it's closed immediately by default.
- Not disposing the DbContext — connection leaks.
- Using db.Database.GetDbConnection() and then disposing it while the context still uses it.
- Opening the connection manually and forgetting to close it.

### Follow-Up Questions

- **Junior**: When does EF Core open the database connection?
- **Junior**: What is connection pooling in ADO.NET?
- **Mid-level**: What is MultipleActiveResultSets and when would you enable it?
- **Mid-level**: How does RelationalConnection handle transaction enlistment?
- **Senior**: Describe a scenario where you'd bypass EF Core's connection management and use raw ADO.NET within the same context.
- **Senior**: How does EF Core handle distributed transactions with System.Transactions?

### FAANG-Level Deep Dive

**Connection resiliency with IExecutionStrategy**

EF Core's IExecutionStrategy wraps connection management with retry logic. For SQL Server, SqlServerRetryingExecutionStrategy detects transient errors (deadlocks, connection drops, Azure failovers) and retries the entire execution. When a retry occurs, the connection is closed and re-opened. The execution strategy also captures DbContext state at the start of execution and resets it on failure. This means **all queries within a single SaveChanges or ToListAsync must be idempotent** — if you've already partially consumed a stream, retry isn't safe. That's why IExecutionStrategy wraps execution at the highest level, not per command.

### Explain Like I'm 7

Think of the database connection like a water hose. EF Core turns on the hose only when you need water (a query), and turns it off as soon as you're done. If you know you'll need water many times, you can hold the handle open yourself to avoid turning it on and off repeatedly.

---
## Q5: What is the difference between AddDbContext and AddDbContextFactory?

### Short Interview Answer

AddDbContext<T> registers the DbContext directly in DI with scoped lifetime. AddDbContextFactory<T> registers a factory (IDbContextFactory<T>) that creates new DbContext instances on demand, bypassing scoped resolution. Use AddDbContext for typical web apps (one context per request). Use AddDbContextFactory for Blazor Server, background services, or when you need explicit control over context lifetime.

### Detailed Explanation

- **What it is**: Two DI registration extensions. AddDbContext makes T available for constructor injection. AddDbContextFactory provides IDbContextFactory<T> whose CreateDbContext() method creates a fresh instance.
- **Why it exists**: Blazor Server circuits can last minutes; a single scoped context would go stale. Background services have no HTTP scope. Factories give explicit lifetime control.
- **What problem it solves**: Implicit scoped context creation doesn't fit all application models. Factories decouple creation from DI scope.
- **When to use it**: Use AddDbContext for ASP.NET Core MVC, Minimal APIs, Web API. Use AddDbContextFactory for Blazor Server, console apps, Windows Services, Hangfire jobs, or when you need to dispose contexts explicitly.
- **When NOT to use it**: Avoid mixing both for the same type unless you need both patterns.

### Internal Working

- **Runtime behavior**: AddDbContextFactory uses IDbContextFactory<T> (implementation: DbContextFactory<T>) which internally resolves from a root-scoped service provider. Each CreateDbContext() builds a new IServiceScope and resolves the context from it.
- **Memory behavior**: Each factory-created context gets its own scope; scoped services (like IHttpContextAccessor) are NOT shared with the calling scope.
- **SQL generation behavior**: No difference.
- **Performance impact**: CreateDbContext() is slightly more expensive than resolving from an existing scope because it creates a new scope.

### Step-by-Step Execution

`
AddDbContext:
1. Request arrives -> DI scope created
2. Controller resolved -> AppDbContext injected
3. Request ends -> scope disposed -> context disposed

AddDbContextFactory:
1. IDbContextFactory<AppDbContext> injected
2. using var db = factory.CreateDbContext();
3. db.Users.ToListAsync();
4. db.Dispose();
`

### Real-World Example

In Blazor Server, the user interacts with a page for minutes. Using AddDbContext, the context would hold tracked entities for the entire circuit lifetime — memory grows and data goes stale. Instead, inject IDbContextFactory<AppDbContext> and create short-lived contexts per operation.

### C# Example

`csharp
// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddDbContextFactory<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// In a background service:
public class ReportService
{
    private readonly IDbContextFactory<AppDbContext> _factory;

    public ReportService(IDbContextFactory<AppDbContext> factory)
        => _factory = factory;

    public async Task GenerateReportAsync()
    {
        await using var db = await _factory.CreateDbContextAsync();
        var data = await db.SalesData.ToListAsync();
    }
}
`

### SQL Example

`sql
-- No SQL impact. Both patterns generate identical SQL.
SELECT [s].* FROM [SalesData] AS [s]
`

### Performance Considerations

- **Faster**: AddDbContext (scoped) for request-bound operations. AddDbContextFactory with pooling for high-throughput background jobs.
- **Slower**: Creating a factory per operation in a tight loop without pooling.
- **Tradeoffs**: Factory gives isolation but loses ambient DI scope.
- **N+1**: Both patterns are equally vulnerable.

### Common Mistakes

- Using AddDbContextFactory in MVC when AddDbContext suffices.
- Holding a factory-created context too long.
- Disposing a context created by factory but not handling ObjectDisposedException.
- Injecting AppDbContext directly in Blazor Server instead of IDbContextFactory.

### Follow-Up Questions

- **Junior**: What lifetime does AddDbContext register the context as?
- **Junior**: How do you get a DbContext in a console application?
- **Mid-level**: Can you combine AddDbContextFactory with AddDbContextPool?
- **Mid-level**: How does CreateDbContextAsync differ from CreateDbContext?
- **Senior**: Why does IDbContextFactory create contexts from the root service provider, and what are the implications for scoped services?
- **Senior**: Design a pattern where multiple factory-created contexts participate in the same transaction.

### FAANG-Level Deep Dive

**IDbContextFactory and the Root Service Provider Trap**

DbContextFactory<T> resolves its dependencies from the **root** IServiceProvider (singleton scope). This means that if you register a scoped service (like ITenantService) and inject it into your DbContext's constructor, it will be **null or throw** because scoped services don't exist in the root scope. The workaround: either make ITenantService a singleton that uses IHttpContextAccessor internally, or register your DbContext with both AddDbContext AND AddDbContextFactory — the factory bypasses scoped resolution by design. FAANG interviewers love this trap because it violates the expectation that "DI just works."

### Explain Like I'm 7

AddDbContext is like a cafeteria with a tray return — you grab a tray (context) and return it when you're done with your meal (request). AddDbContextFactory is like a vending machine — you push a button and get a brand new tray each time.

---
## Q6: How does OnConfiguring differ from ConfigureServices?

### Short Interview Answer

OnConfiguring is an instance method on DbContext that sets up the provider and connection string directly. ConfigureServices (in Program.cs) uses DI to configure options externally. Prefer ConfigureServices for flexibility, testability, and to avoid hardcoding connection strings. OnConfiguring is useful for design-time tools or simple console apps.

### Detailed Explanation

- **What it is**: OnConfiguring is an overridable method on DbContext where you call optionsBuilder.UseSqlServer(...). ConfigureServices calls services.AddDbContext<AppDbContext>(o => ...).
- **Why it exists**: OnConfiguring was the original configuration approach. DI approach was added later for separation of concerns.
- **What problem it solves**: OnConfiguring hardcodes configuration, making unit testing with different databases difficult. DI allows swapping providers per environment.
- **When to use it**: Use DI (ConfigureServices) in ASP.NET Core. Use OnConfiguring only in simple console apps, design-time factories, or when you cannot modify the DI setup.
- **When NOT to use it**: Avoid OnConfiguring in library code — it prevents consumers from configuring your context.

### Internal Working

- **Runtime behavior**: EF Core builds options from both sources: DI-configured options are applied first, then OnConfiguring is called with the merged options. OnConfiguring always wins for conflicting settings.
- **Memory behavior**: No difference.
- **SQL generation behavior**: No difference.
- **Performance impact**: Minimal. OnConfiguring is called once per context creation; DI options are cached in IOptionsSnapshot.

### Step-by-Step Execution

`
DI approach:
1. services.AddDbContext<AppDbContext>(o => o.UseSqlServer(cs)) stores factory
2. DI resolves AppDbContext -> factory called -> options built from DI
3. Options passed to DbContext constructor -> OnConfiguring called
4. If OnConfiguring adds more config, it's merged

OnConfiguring approach:
1. new AppDbContext() -> constructor calls OnConfiguring
2. OnConfiguring calls options.UseSqlServer(cs)
3. No DI involvement
`

### Real-World Example

A microservice uses DI for configuration: connection string from ppsettings.{Environment}.json. Unit tests override with UseInMemoryDatabase. No OnConfiguring needed.

### C# Example

`csharp
// DI approach (recommended)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Test setup
services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("Test"));

// OnConfiguring approach (simple console app)
public class AppDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=.;Database=MyDb;Trusted_Connection=true;");
}
`

### SQL Example

`sql
-- No SQL difference. Both approaches generate identical SQL.
`

### Performance Considerations

- **Faster**: DI approach reuses options via IOptionsMonitor caching.
- **Slower**: OnConfiguring is called every time a new context is created (negligible).
- **Tradeoffs**: DI gives flexibility at the cost of indirection. OnConfiguring is simpler but rigid.

### Common Mistakes

- Calling UseSqlServer in both OnConfiguring and DI — causes InvalidOperationException.
- Using OnConfiguring in a library consumed by multiple applications with different providers.
- Not calling ase.OnConfiguring(options) when overriding.

### Follow-Up Questions

- **Junior**: How do you override OnConfiguring to use a different provider?
- **Junior**: Where is the connection string typically stored in ASP.NET Core?
- **Mid-level**: How do you configure EF Core differently for dev and production without OnConfiguring?
- **Mid-level**: Can you use both OnConfiguring and DI? What happens?
- **Senior**: How would you design a DbContext that reads its connection string from a secret store at runtime?
- **Senior**: How does EF Core's DbContextOptions<T> work with IOptionsSnapshot?

### FAANG-Level Deep Dive

**Options Merging: The DbContextOptions Chain**

EF Core uses a **chain-of-responsibility** for options. DbContextOptions is immutable. When you call services.AddDbContext<AppDbContext>(o => ...), the Action<DbContextOptionsBuilder> is stored. At resolve time, EF Core creates a DbContextOptionsBuilder, applies the DI action, then calls OnConfiguring with that builder. OnConfiguring appends more actions. Finally, uilder.Options is frozen into DbContextOptions. If both call UseSqlServer, EF Core detects the duplicate and throws. But you CAN add an interceptor in DI and another in OnConfiguring — they compose. The key: OnConfiguring always runs **last**, giving the DbContext author the final say. This is the **template method pattern** in framework design.

### Explain Like I'm 7

OnConfiguring is like writing your pizza order directly on a napkin — it works, but it's messy. ConfigureServices is like ordering from a menu — clean, flexible, and you can change your mind before the pizza is made.

---
## Q7: What is the IDesignTimeDbContextFactory interface used for?

### Short Interview Answer

IDesignTimeDbContextFactory<TContext> is used by EF Core's design-time tools (migrations, scaffolding) to create a DbContext instance at design time. It is required when the runtime DbContext cannot be created by the tools — for example, in class libraries, console apps, or when the context requires parameters not registered in DI.

### Detailed Explanation

- **What it is**: An interface with a single method CreateDbContext(string[] args) that returns a fully configured DbContext.
- **Why it exists**: Design-time commands (dotnet ef migrations add, dotnet ef database update) need to instantiate your DbContext to read the model.
- **What problem it solves**: Enables migrations in class libraries, Blazor WASM, and contexts needing runtime configuration not available at design time.
- **When to use it**: Class libraries with EF Core, Blazor WebAssembly projects, console apps without DI, or when your constructor requires parameters.
- **When NOT to use it**: Simple ASP.NET Core projects where the tools can resolve the context from DI automatically.

### Internal Working

- **Runtime behavior**: The factory is ONLY used at design time. At runtime, DbContext is resolved normally through DI or OnConfiguring.
- **Memory behavior**: Not applicable at runtime.
- **SQL generation behavior**: Not applicable — the factory helps build the model, not execute SQL.
- **Performance impact**: None at runtime.

### Step-by-Step Execution

`
dotnet ef migrations add InitialCreate:
1. Tools scan startup project AND assembly with DbContext
2. Find IDesignTimeDbContextFactory<AppDbContext>
3. Call CreateDbContext(args) with CLI args
4. Use the returned context to read model metadata
5. Generate migration files
6. Dispose the context
`

### Real-World Example

A multi-tenant class library has a DbContext that takes a ITenantConnectionString parameter. At design time, there's no HTTP request to provide the tenant. The factory creates a context with a default connection string for migrations.

### C# Example

`csharp
public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseSqlServer("Server=.;Database=DesignTimeDb;Trusted_Connection=true;")
            .Options;

        return new AppDbContext(options);
    }
}

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}
`

### SQL Example

`sql
-- The factory itself generates no SQL.
-- Used to build the EF model which generates the migrations history table:
CREATE TABLE [__EFMigrationsHistory] (
    [MigrationId] nvarchar(150) NOT NULL,
    [ProductVersion] nvarchar(32) NOT NULL,
    CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
);
`

### Common Mistakes

- Forgetting to add the factory when the context needs constructor parameters — migrations fail.
- Leaving hardcoded connection strings in the factory that differ from runtime config.
- Not implementing the interface on a class in the same assembly as the context.

### Follow-Up Questions

- **Junior**: What error do you get if migrations cannot create your DbContext?
- **Junior**: How does the factory get discovered by the EF Core tools?
- **Mid-level**: How do you pass arguments from the CLI to the factory?
- **Mid-level**: Can you have multiple factories in the same project?
- **Senior**: How would you design a factory that works for multi-tenant migrations?
- **Senior**: Explain the interaction between IDesignTimeDbContextFactory and IMigrationsAssembly.

### FAANG-Level Deep Dive

**The Design-Time Discovery Protocol**

The EF Core tools use MigrationsCommandBase.FindDesignTimeDbContextFactory() which searches assemblies for the interface. It looks first in the startup project's assembly, then the context's assembly. If found, it calls CreateDbContext() with CLI -- arguments. If NOT found, it falls back to Activator.CreateInstance or DI resolution from the startup project. The protocol is: factory > DI > parameterless constructor. Understanding this chain is crucial when debugging "Unable to create DbContext" errors.

### Explain Like I'm 7

Imagine you need to bake a cake (create a migration) but the recipe only works in your kitchen (runtime). IDesignTimeDbContextFactory is like a note you give the baker: "Here's a backup kitchen to use."

---
## Q8: How does EF Core resolve DbContext in ASP.NET Core?

### Short Interview Answer

Through the DI container. ASP.NET Core calls IServiceProvider.GetService(AppDbContext) when the context is injected into a controller, middleware, or service. The DI container calls DbContextOptionsFactory to build options (merging configured options with OnConfiguring), then creates a new DbContext instance passing the resolved DbContextOptions<TContext>.

### Detailed Explanation

- **What it is**: Automatic resolution of DbContext via constructor injection, supported by services.AddDbContext<T>() or services.AddDbContextPool<T>().
- **Why it exists**: To integrate EF Core with ASP.NET Core's built-in DI, ensuring correct lifetime management and testability.
- **What problem it solves**: Manual creation of DbContext in each controller would be repetitive, error-prone, and hard to unit test.
- **When to use it**: Always in ASP.NET Core applications.
- **When NOT to use it**: In Blazor Server (use IDbContextFactory), background services (use IDbContextFactory), or simple console apps.

### Internal Working

- **Runtime behavior**: AddDbContext registers the context with ServiceLifetime.Scoped. The registration calls DbContextOptionsFactory.CreateOptions() to build DbContextOptions, then ActivatorUtilities.CreateInstance to instantiate the context.
- **Memory behavior**: Scoped lifetime matches HTTP request — context is disposed at request end.
- **SQL generation behavior**: No impact.
- **Performance impact**: DI resolution of DbContext is fast — typically <1µs after warmup.

### Step-by-Step Execution

`
1. builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(cs)) at startup
2. EF Core registers internal services: IDbContextFactory, IModelCustomizer, etc.
3. At runtime, controller is resolved:
   a. DI builds controller -> sees AppDbContext parameter
   b. DI requests AppDbContext from scope
   c. DbContextOptions<T> resolved from IOptionsSnapshot
   d. New AppDbContext created with resolved options
   e. OnConfiguring called (if overridden)
   f. Instance returned to controller
4. Request ends -> scope disposed -> AppDbContext.Dispose() called
`

### C# Example

`csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

[ApiController]
public class UsersController(AppDbContext db) : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<User?> Get(int id) => await db.Users.FindAsync(id);
}
`

### Common Mistakes

- Registering DbContext as Singleton — causes data corruption from concurrent requests.
- Registering DbContext as Transient — each injection gets a new context; services can't share a unit of work.
- Trying to resolve DbContext in a Singleton service — must inject IServiceScopeFactory.

### Follow-Up Questions

- **Junior**: What lifetime does AddDbContext use by default?
- **Junior**: How do you pass connection strings from appsettings.json to the DbContext?
- **Mid-level**: What happens if you inject a scoped DbContext into a singleton service?
- **Mid-level**: How does IOptionsSnapshot affect DbContextOptions resolution?
- **Senior**: How would you implement tenant-specific DbContext resolution in ASP.NET Core?
- **Senior**: Describe how you'd unit test a controller that depends on DbContext.

### FAANG-Level Deep Dive

**Scoped Service Resolution: The IServiceScope Lifecycle**

ASP.NET Core creates an IServiceScope per HTTP request. AddDbContext<AppDbContext> registers AppDbContext as scoped and also registers an internal IDbContextServices as scoped. Each scope gets its own IDbContextServices cache. The model is NOT rebuilt per scope — it's a singleton cached in ICurrentDbContext. But the ChangeTracker, Database, and ContextId get fresh instances. The IServiceScope is the unit-of-work boundary. FAANG interviewers ask this to test whether you understand that **scoped means per-scope, not per-transaction** — you can have multiple transactions in one scope.

### Explain Like I'm 7

DI is like a cafeteria line. When you sit down (a new request), you get a tray (DbContext). You load your tray with food (query data), eat, and leave. When you leave, the tray is taken away. The next person gets a clean tray.

---

# 2. Migrations

<details>
<summary><strong>7 Questions — Add-Migration, Update-Database, Rollback, Scripting</strong></summary>

- Q9: What is a migration in EF Core?
- Q10: How does dotnet ef migrations add work internally?
- Q11: What is the __EFMigrationsHistory table?
- Q12: How do you roll back a migration?
- Q13: How do you generate idempotent migration scripts?
- Q14: What are design-time migration considerations?
- Q15: How do you handle data seed with migrations?

</details>

---
## Q9: What is a migration in EF Core?

### Short Interview Answer

A migration is a versioned, code-based representation of changes to the EF Core model. Each migration contains Up and Down methods that describe how to apply or revert schema changes. Migrations are stored as C# files in the project and produce SQL that synchronizes the database schema with the entity model.

### Detailed Explanation

- **What it is**: A pair of files: a designer file (model snapshot) and a migrations file (Up/Down operations). Managed via dotnet ef migrations add and dotnet ef database update.
- **Why it exists**: To enable version-controlled, repeatable, and team-friendly schema evolution without manually writing SQL scripts.
- **What problem it solves**: Manual schema synchronization is error-prone, unrepeatable, and hard to review in pull requests.
- **When to use it**: Whenever your entity model changes — adding/removing entities, changing properties, adding indexes.
- **When NOT to use it**: During rapid prototyping (use EnsureCreated instead).

### Internal Working

- **Runtime behavior**: context.Database.Migrate() applies pending migrations at startup.
- **SQL generation behavior**: IMigrator uses IMigrationsModelDiffer to diff the snapshot vs current database, then IMigrationsSqlGenerator produces SQL.
- **Performance impact**: Migrate() at startup adds latency (~100ms-2s). Use scripts for production.

### Step-by-Step Execution

`
dotnet ef migrations add AddProductTable:
1. Tools load DbContext via factory or DI
2. EF builds current model from OnModelCreating + entity classes
3. IMigrationsModelDiffer compares current model vs last snapshot
4. Differ produces list of operations (CreateTable, AddColumn, etc.)
5. IMigrator.GenerateScript(operations) produces Up() and Down() code
6. Files created: {timestamp}_AddProductTable.cs, Designer.cs
7. ModelSnapshot.cs updated
`

### C# Example

`csharp
public partial class AddProductTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Products",
            columns: table => new
            {
                Id = table.Column<int>(type: "int", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_Products", x => x.Id));
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable("Products");
    }
}
`

### SQL Example

`sql
CREATE TABLE [Products] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Price] decimal(18,2) NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY ([Id])
);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES ('20250101_AddProductTable', '10.0.0');
`

### Common Mistakes

- Editing migration files after they've been applied to a shared database.
- Forgetting to run dotnet ef migrations add before team members pull your code.
- Deleting migration files instead of reverting them.

### Follow-Up Questions

- **Junior**: What is the difference between Up() and Down() methods?
- **Junior**: How do you add a migration via command line?
- **Mid-level**: How does EF Core detect that a migration is needed?
- **Mid-level**: What is the model snapshot and why is it important?
- **Senior**: How would you handle migration conflicts in a team environment?
- **Senior**: Design a zero-downtime migration strategy using EF Core.

### FAANG-Level Deep Dive

**Migration Idempotency and Transaction Wrapping**

Each migration's Up() method is not automatically wrapped in a transaction. At runtime, IMigrator.Migrate() wraps all pending migrations in a single transaction. However, some operations (creating a database, adding filegroups) cannot be transacted. For production, generating idempotent scripts (dotnet ef migrations script --idempotent) produces IF NOT EXISTS checks for each operation, allowing safe re-execution if a deployment fails midway.

### Explain Like I'm 7

A migration is like a recipe card for changing a Lego castle. Each card says what blocks to add (Up) and how to undo that change (Down). You keep all the cards in order so anyone can rebuild the castle exactly the same way.

---
## Q10: How does dotnet ef migrations add work internally?

### Short Interview Answer

dotnet ef migrations add loads your DbContext, compares the current model (from OnModelCreating) against the last saved model snapshot, computes the diff, and generates C# migration code. It uses IMigrationsModelDiffer to identify changes and IMigrationsCodeGenerator to produce the migration class files.

### Detailed Explanation

- **What it is**: A CLI command that invokes EF Core's design-time services to scaffold a migration.
- **Internal pipeline**: Discovers DbContext -> builds model -> diffs against snapshot -> generates operations -> produces files.
- **When to use it**: After any entity model change that needs to be persisted to the database schema.

### C# Example

`ash
dotnet ef migrations add AddProductTable
dotnet ef migrations add AddProductTable --context AppDbContext
`

### SQL Example

`sql
-- The tool generates migration files, then you apply with:
-- dotnet ef database update
-- Which executes the generated Up() methods
`

### Common Mistakes

- Running without saving entity changes first — migrations reflect the model, not uncommitted changes.
- Not specifying the project when using multiple projects.

---

## Q11: What is the __EFMigrationsHistory table?

### Short Interview Answer

__EFMigrationsHistory is a metadata table that records which migrations have been applied to the database. It contains two columns: MigrationId (the timestamp-based migration name) and ProductVersion (the EF Core version). EF Core queries this table on startup to determine which migrations still need to be applied.

### Detailed Explanation

- **Purpose**: Tracks applied migrations so database update knows what's pending.
- **Insert**: Each migration's SQL ends with an INSERT into this table.
- **Delete**: Rolling back a migration DELETES the row.
- **When NOT to use it**: Manually modifying this table causes migration corruption.

### SQL Example

`sql
SELECT [MigrationId], [ProductVersion]
FROM [__EFMigrationsHistory]
ORDER BY [MigrationId];

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES ('20250101_AddProductTable', '10.0.0');

DELETE FROM [__EFMigrationsHistory]
WHERE [MigrationId] = '20250101_AddProductTable';
`

### FAANG-Level Deep Dive

The __EFMigrationsHistory table is the source of truth for migration state. If you manually delete a row without reverting the schema, EF Core thinks the migration was never applied and re-runs it — potentially causing errors. Always use dotnet ef migrations remove (which reads this table) or dotnet ef database update <migration> (which uses it to know what to roll back).

---

## Q12: How do you roll back a migration?

### Short Interview Answer

Use dotnet ef database update <previous-migration-name> which runs the Down() methods of all migrations after the target. Use dotnet ef migrations remove to remove the last migration (only if not applied). For production, generate a rollback script with dotnet ef migrations script <last> <target>.

### Detailed Explanation

- **Rollback applied**: dotnet ef database update LastGoodMigration — runs Down() from current to target.
- **Remove unapplied**: dotnet ef migrations remove — deletes the last migration files and reverts the snapshot.

### C# Example

`ash
# Roll back to a specific migration
dotnet ef database update AddProductTable

# Roll back all migrations (empty database)
dotnet ef database update 0

# Generate rollback script
dotnet ef migrations script CurrentMigration InitialCreate --output rollback.sql
`

### Common Mistakes

- Using migrations remove after the migration was applied to the database — this corrupts the state.
- Rolling back in production without a script — schema changes may be destructive.

---

## Q13: How do you generate idempotent migration scripts?

### Short Interview Answer

Use dotnet ef migrations script --idempotent to generate a SQL script that checks __EFMigrationsHistory before applying each migration. The script uses IF NOT EXISTS (SELECT * FROM __EFMigrationsHistory WHERE MigrationId = '...') guards, making it safe to run multiple times.

### Detailed Explanation

- **Why idempotent**: Production deployments can fail partway; idempotent scripts can be re-run safely.
- **Syntax**: dotnet ef migrations script --idempotent -o deploy.sql
- **Usage**: Use for CI/CD pipelines, production releases, and disaster recovery.

### SQL Example

`sql
IF NOT EXISTS (SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20250101_AddProductTable')
BEGIN
    CREATE TABLE [Products] (...);
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20250101_AddProductTable', N'10.0.0');
END
GO
`

### Common Mistakes

- Using non-idempotent scripts in automated deployments.
- Forgetting to regenerate the script after adding new migrations.

---

## Q14: What are design-time migration considerations?

### Short Interview Answer

Design-time considerations include: having a valid design-time factory or DI-registered context, ensuring the design-time database connection works, and managing migration file conflicts in source control. EF Core tools must be installed (dotnet-ef) and referenced in the project.

### Detailed Explanation

- **Tool installation**: dotnet tool install --global dotnet-ef
- **Package references**: Microsoft.EntityFrameworkCore.Design (Development dependency)
- **Key considerations**:
  - Single DbContext: tools auto-discover it
  - Multiple DbContexts: use --context parameter
  - Startup project: may differ from the migrations project
  - Connection strings: design-time factory must have access
- **Common pitfalls**: Missing design package, wrong startup project, no parameterless constructor.

### Common Mistakes

- Installing dotnet-ef globally vs locally (version mismatches).
- Having the Design package as a runtime dependency instead of development-only.
- Multiple DbContexts without specifying which one.

---

## Q15: How do you handle data seed with migrations?

### Short Interview Answer

Use modelBuilder.Entity<T>().HasData() in OnModelCreating to seed data. EF Core generates INSERT statements in migrations. Seed data is keyed by a synthetic primary key so EF Core can detect changes and generate update/delete statements in subsequent migrations.

### Detailed Explanation

- **What it does**: Embeds seed data in migration files as migrationBuilder.InsertData(...) calls.
- **Why it exists**: Ensures seed data is versioned alongside schema changes.
- **When to use it**: Reference/lookup tables, default admin accounts, configuration data.
- **When NOT to use it**: Large datasets (use custom scripts instead), data that changes frequently (every migration regenerates seed).

### C# Example

`csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<ProductStatus>().HasData(
        new ProductStatus { Id = 1, Name = "Active" },
        new ProductStatus { Id = 2, Name = "Inactive" },
        new ProductStatus { Id = 3, Name = "Discontinued" }
    );
}
`

### SQL Example

`sql
IF NOT EXISTS (SELECT * FROM [ProductStatus] WHERE [Id] = 1)
    INSERT INTO [ProductStatus] ([Id], [Name]) VALUES (1, 'Active');
`

### Common Mistakes

- Seed data without explicit key values — EF Core generates temp keys that conflict.
- Modifying seed data directly in the database — next migration will overwrite it.
- Seeding large amounts of data (hundreds of rows) — makes migration files bloated.

---

# 3. Querying & LINQ

<details>
<summary><strong>8 Questions — IQueryable vs IEnumerable, Deferred Execution, Eager/Lazy/Explicit Loading</strong></summary>

- Q16: What is the difference between IQueryable and IEnumerable in EF Core?
- Q17: How does deferred execution work in LINQ?
- Q18: What is the difference between eager loading, lazy loading, and explicit loading?
- Q19: How does Select (projection) affect SQL generation?
- Q20: What are compiled queries and why use them?
- Q21: How does FindAsync work differently from FirstOrDefault?
- Q22: What is the difference between ToList, ToListAsync, and AsEnumerable?
- Q23: How do you handle client vs server evaluation?

</details>

---
## Q16: What is the difference between IQueryable and IEnumerable in EF Core?

### Short Interview Answer

IQueryable represents a query that is translated to SQL and executed on the database server. IEnumerable represents an in-memory collection where all filtering happens on the client side. In EF Core, DbSet<T> implements IQueryable<T>, and calling ToList() or AsEnumerable() transitions from server-side to client-side evaluation.

### Detailed Explanation

- **What it is**: IQueryable builds an expression tree; IEnumerable works with delegates/Func.
- **Why it exists**: IQueryable allows LINQ providers (like EF Core) to translate C# expressions to SQL.
- **Performance impact**: IQueryable keeps filtering on the server (fast); IEnumerable pulls all rows to memory first (slow).

### C# Example

`csharp
// IQueryable: WHERE clause is SQL
IQueryable<User> query = db.Users.Where(u => u.Age > 18);
// SQL: SELECT * FROM Users WHERE Age > 18

// IEnumerable: pulls ALL users then filters in memory
IEnumerable<User> enumerable = db.Users.AsEnumerable();
var filtered = enumerable.Where(u => u.Age > 18);
// SQL: SELECT * FROM Users (all rows)
// Filtered in memory by .Where()
`

### FAANG-Level Deep Dive

**Expression Trees vs Delegates**: IQueryable.Where(Expression<Func<T, bool>>) captures an expression tree that EF Core can analyze. IEnumerable.Where(Func<T, bool>) compiles to IL and cannot be inspected. This is why calling .Where() after .AsEnumerable() switches to client evaluation — the method resolution changes from Queryable.Where to Enumerable.Where.

---

## Q17: How does deferred execution work in LINQ?

### Short Interview Answer

Deferred execution means the LINQ query is not executed until the results are iterated (via oreach, ToList(), Count(), etc.). Query composition (adding .Where(), .Select(), .OrderBy()) builds the expression tree but sends no SQL. Only terminal operations trigger database roundtrips.

### Detailed Explanation

- **When it triggers**: ToListAsync(), FirstAsync(), CountAsync(), oreach, or over the result.
- **When it does NOT trigger**: .Where(), .Select(), .OrderBy(), .Join(), .Include().
- **Why it matters**: Enables building complex queries conditionally without worrying about multiple roundtrips.

### C# Example

`csharp
var query = db.Users.Where(u => u.IsActive);     // No SQL
var sorted = query.OrderBy(u => u.Name);          // No SQL
var paged = sorted.Skip(10).Take(20);             // No SQL
var result = await paged.ToListAsync();           // SQL executes here
`

### Common Mistakes

- Iterating a query multiple times — each iteration retriggers execution.
- Adding .ToList() too early (before all filters), causing client-side evaluation.

---

## Q18: What is the difference between eager loading, lazy loading, and explicit loading?

### Short Interview Answer

Eager loading uses .Include() to load related data in a single SQL query (via JOINs). Lazy loading automatically loads navigation properties when accessed (requires proxy or ILazyLoader). Explicit loading uses db.Entry(entity).Collection(x => x.Posts).LoadAsync() to load on demand. Eager is most performant for known relationships; lazy risks N+1.

### Detailed Explanation

- **Eager**: .Include(b => b.Posts).ThenInclude(p => p.Comments) — generates JOINs.
- **Lazy**: Enabled via UseLazyLoadingProxies() or injecting ILazyLoader. Loads on property access.
- **Explicit**: Call Load() or LoadAsync() on a CollectionEntry or ReferenceEntry.
- **When to use**: Eager for known includes, explicit for conditional loading, lazy for prototyping only.

### C# Example

`csharp
// Eager loading (single query with JOIN)
var blog = await db.Blogs.Include(b => b.Posts).FirstAsync();

// Explicit loading (separate query)
var blog = await db.Blogs.FirstAsync();
await db.Entry(blog).Collection(b => b.Posts).LoadAsync();

// Lazy loading (auto-loads when accessed)
var blog = await db.Blogs.FirstAsync();
var count = blog.Posts.Count; // Triggers SQL if not loaded
`

### SQL Example

`sql
-- Eager: Single query with LEFT JOIN
SELECT [b].*, [p].*
FROM [Blogs] AS [b]
LEFT JOIN [Posts] AS [p] ON [b].[Id] = [p].[BlogId]
ORDER BY [b].[Id]

-- Explicit/Lazy: Two separate queries
SELECT TOP 1 * FROM [Blogs];
SELECT * FROM [Posts] WHERE [BlogId] = @p0;
`

### Common Mistakes

- Lazy loading when the context is already disposed (throws).
- Not using .Include() for related data and then accessing it — triggers N+1 with lazy loading.
- Using .Include() for data you don't need — loads unnecessary columns.

---

## Q19: How does Select (projection) affect SQL generation?

### Short Interview Answer

.Select() projects only the required columns into the SQL SELECT clause, reducing data transferred from the database. It also enables automatic Join generation for navigation properties without explicit .Include(). Auto-includes are not needed when using .Select() because the navigation traversal is translated to the SQL expression.

### Detailed Explanation

- **What it does**: Transforms SELECT * into SELECT Id, Name, ....
- **Why it matters**: Reduces network payload, memory usage, and materialization cost.
- **When to use it**: Always prefer .Select() over loading full entities for read-only scenarios.

### C# Example

`csharp
// Bad: Loads entire entity
var users = await db.Users.ToListAsync();

// Good: Project only needed columns
var userDtos = await db.Users
    .Where(u => u.IsActive)
    .Select(u => new UserDto
    {
        Id = u.Id,
        Name = u.Name,
        PostCount = u.Posts.Count
    })
    .ToListAsync();
`

### SQL Example

`sql
-- Without Select: SELECT * FROM Users

-- With Select: Only requested columns + subquery for PostCount
SELECT [u].[Id], [u].[Name], (
    SELECT COUNT(*)
    FROM [Posts] AS [p]
    WHERE [u].[Id] = [p].[UserId]
) AS [PostCount]
FROM [Users] AS [u]
WHERE [u].[IsActive] = 1
`

---

## Q20: What are compiled queries and why use them?

### Short Interview Answer

Compiled queries (EF.CompileQuery()) cache the LINQ-to-SQL translation permanently, bypassing expression tree compilation on every execution. They are useful for hot paths where the same query structure runs thousands of times with different parameters.

### Detailed Explanation

- **What it is**: static Func<DbContext, parameters, TResult> generated by EF.CompileQuery.
- **Why it exists**: EF Core caches query plans by default, but compiled queries avoid even the cache lookup overhead.
- **When to use**: High-frequency queries in hot paths (e.g., dashboard metrics, user lookups).
- **When NOT to use**: Queries with dynamic structure (different includes, filters).

### C# Example

`csharp
private static readonly Func<AppDbContext, int, Task<User?>> GetUserById =
    EF.CompileAsyncQuery((AppDbContext db, int id) =>
        db.Users.Include(u => u.Posts).FirstOrDefault(u => u.Id == id));

// Usage
var user = await GetUserById(db, 42);
`

### Performance Considerations

- **Faster**: No expression tree analysis, no cache hash computation. ~2-5x faster than uncached first run.
- **Slower**: None for the query itself — but inflexible for dynamic queries.
- **Tradeoffs**: Must be static; cannot use closure variables.

---

## Q21: How does FindAsync work differently from FirstOrDefault?

### Short Interview Answer

FindAsync first checks the local change tracker for an entity with the given key before querying the database. If found in memory, it returns immediately with no database roundtrip. FirstOrDefault always generates a SQL query. FindAsync also returns tracked entities in any state (including Added or Deleted).

### Detailed Explanation

- **Order of operations**: 1) Check change tracker (O(1) lookup), 2) Query database if not found locally.
- **When to use**: When you may have already loaded the entity in the same context.
- **When NOT to use**: When you need to query by non-key fields, or need AsNoTracking behavior.

### C# Example

`csharp
var user1 = await db.Users.FindAsync(42); // 1. Check tracker, 2. Query DB if needed
var user2 = await db.Users.FindAsync(42); // Returns tracked instance, no DB call

// FirstOrDefault always queries
var user3 = await db.Users.FirstOrDefaultAsync(u => u.Id == 42); // Always SQL
`

---

## Q22: What is the difference between ToList, ToListAsync, and AsEnumerable?

### Short Interview Answer

ToList() and ToListAsync() execute the query immediately and materialize results into a List<T>. AsEnumerable() switches from server-side to client-side evaluation without executing the query immediately — execution happens when the enumerable is iterated. ToListAsync() is the async version that doesn't block the thread.

### Detailed Explanation

- **ToList**: Synchronous, blocks thread, materializes all results.
- **ToListAsync**: Async, non-blocking, materializes all results.
- **AsEnumerable**: Lazy, switches to client evaluation, still deferred.

### Performance Impact

`csharp
// Bad: ToList then filter in memory
var allUsers = await db.Users.ToListAsync(); // SELECT * FROM Users
var activeUsers = allUsers.Where(u => u.IsActive); // In-memory filter

// Good: Filter before materialization
var activeUsers = await db.Users.Where(u => u.IsActive).ToListAsync();
`

---

## Q23: How do you handle client vs server evaluation?

### Short Interview Answer

EF Core 3.0+ throws an exception for queries that cannot be translated to SQL (client evaluation). Use .AsEnumerable() or .ToList() before operations that EF Core cannot translate. EF Core 10 shows a warning and falls back to client evaluation for certain safe operations, but the best practice is to design queries that translate fully to SQL.

### Detailed Explanation

- **Server evaluation**: Everything that translates to SQL (WHERE, JOIN, GROUP BY, etc.).
- **Client evaluation**: Local methods, custom delegates, certain string operations.
- **EF Core 3.0+**: Throws InvalidOperationException for untranslatable queries.
- **When to allow client eval**: After explicit .ToList(), for operations that cannot be done in SQL.

### C# Example

`csharp
// This throws: cannot translate local method
var result = await db.Users.Where(u => MyLocalMethod(u.Name)).ToListAsync();

// Fix: bring data to memory first, then filter
var allUsers = await db.Users.ToListAsync();
var result = allUsers.Where(u => MyLocalMethod(u.Name)).ToList();

// Or rewrite to use translatable expressions
var result = await db.Users.Where(u => u.Name.StartsWith("A")).ToListAsync();
`

### FAANG-Level Deep Dive

**Expression Tree Translation**: EF Core's query pipeline walks the expression tree node by node. Method calls that don't map to known SQL function mappings cause translation failure. EF Core 10 adds a [QueryTranslation] attribute to allow providers to define custom mappings. The pipeline first normalizes expressions (C# patterns -> canonical), then translates (canonical -> SQL), then generates the final SQL string.

---

# 4. Relationships

<details>
<summary><strong>8 Questions — One-to-One, One-to-Many, Many-to-Many, Self-Referencing</strong></summary>

- Q24: How do you configure a one-to-many relationship in EF Core?
- Q25: How do you configure a one-to-one relationship?
- Q26: How do you configure a many-to-many relationship in EF Core 5+?
- Q27: How does EF Core handle cascade delete?
- Q28: What are self-referencing relationships?
- Q29: How do you configure optional vs required relationships?
- Q30: What is the difference between WithOne and WithMany?
- Q31: How does EF Core resolve relationship conventions?

</details>

---
## Q24: How do you configure a one-to-many relationship in EF Core?

### Short Interview Answer

Use a navigation property on the "many" side (e.g., ICollection<Post> Posts) and a reference navigation + foreign key on the "one" side (e.g., int BlogId, Blog Blog). EF Core conventions detect this automatically. For explicit configuration, use modelBuilder.Entity<Blog>().HasMany(b => b.Posts).WithOne(p => p.Blog).HasForeignKey(p => p.BlogId).

### Detailed Explanation

- **Convention**: EF Core detects FK by name pattern (<NavigationName>Id or <PrincipalType>Id).
- **Fluent API**: HasMany(), WithOne(), HasForeignKey() for explicit control.
- **Required vs optional**: Required if FK is non-nullable (int), optional if nullable (int?).

### C# Example

`csharp
public class Blog { public int Id { get; set; } public ICollection<Post> Posts { get; set; } }
public class Post { public int Id { get; set; } public int BlogId { get; set; } public Blog Blog { get; set; } }

// Or fluent:
modelBuilder.Entity<Blog>()
    .HasMany(b => b.Posts)
    .WithOne(p => p.Blog)
    .HasForeignKey(p => p.BlogId);
`

### SQL Example

`sql
CREATE TABLE [Posts] (
    [Id] int NOT NULL IDENTITY,
    [BlogId] int NOT NULL,
    CONSTRAINT [FK_Posts_Blogs_BlogId] FOREIGN KEY ([BlogId]) REFERENCES [Blogs]([Id])
);
`

---

## Q25: How do you configure a one-to-one relationship?

### Short Interview Answer

Use HasOne() with WithOne(). The dependent side must have a foreign key that is also the primary key (shared primary key) or a unique FK. EF Core enforces uniqueness by making the FK a unique index/constraint.

### C# Example

`csharp
public class User { public int Id { get; set; } public Profile Profile { get; set; } }
public class Profile { public int Id { get; set; } public string Bio { get; set; } public User User { get; set; } }

modelBuilder.Entity<User>()
    .HasOne(u => u.Profile)
    .WithOne(p => p.User)
    .HasForeignKey<Profile>(p => p.Id); // Shared primary key
`

### SQL Example

`sql
CREATE TABLE [Profiles] (
    [Id] int NOT NULL,
    [Bio] nvarchar(max),
    CONSTRAINT [PK_Profiles] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Profiles_Users_Id] FOREIGN KEY ([Id]) REFERENCES [Users]([Id])
);
`

---

## Q26: How do you configure a many-to-many relationship in EF Core 5+?

### Short Interview Answer

In EF Core 5+, many-to-many is configured without an explicit join entity. Use HasMany().WithMany(). EF Core automatically creates a join table. For custom join tables, create a join entity class and configure two one-to-many relationships.

### C# Example

`csharp
public class Student { public int Id { get; set; } public ICollection<Course> Courses { get; set; } }
public class Course { public int Id { get; set; } public ICollection<Student> Students { get; set; } }

modelBuilder.Entity<Student>()
    .HasMany(s => s.Courses)
    .WithMany(c => c.Students);
    // Creates join table: CourseStudent (StudentId, CourseId)

// Custom join entity:
public class Enrollment { public int StudentId { get; set; } public int CourseId { get; set; } public DateTime EnrolledAt { get; set; } }

modelBuilder.Entity<Student>()
    .HasMany(s => s.Enrollments)
    .WithOne(e => e.Student);
modelBuilder.Entity<Course>()
    .HasMany(c => c.Enrollments)
    .WithOne(e => e.Course);
`

### SQL Example

`sql
CREATE TABLE [CourseStudent] (
    [StudentId] int NOT NULL,
    [CourseId] int NOT NULL,
    CONSTRAINT [PK_CourseStudent] PRIMARY KEY ([StudentId], [CourseId]),
    CONSTRAINT [FK_CourseStudent_Students_StudentId] FOREIGN KEY ([StudentId]) REFERENCES [Students]([Id]),
    CONSTRAINT [FK_CourseStudent_Courses_CourseId] FOREIGN KEY ([CourseId]) REFERENCES [Courses]([Id])
);
`

---

## Q27: How does EF Core handle cascade delete?

### Short Interview Answer

EF Core configures cascade delete based on relationship requiredness. Required relationships (int FK) default to Cascade — deleting the principal deletes dependents. Optional relationships (int? FK) default to ClientSetNull — EF Core sets FK to null on the client, but SQL Server may fail if the FK is non-nullable. Configure via OnDelete().

### C# Example

`csharp
modelBuilder.Entity<Blog>()
    .HasMany(b => b.Posts)
    .WithOne(p => p.Blog)
    .OnDelete(DeleteBehavior.Cascade);       // Deletes posts with blog
    // .OnDelete(DeleteBehavior.SetNull);     // Sets BlogId to null
    // .OnDelete(DeleteBehavior.Restrict);    // Prevents delete if posts exist
    // .OnDelete(DeleteBehavior.ClientSetNull); // EF sets null, DB may throw
`

### SQL Example

`sql
ALTER TABLE [Posts] ADD CONSTRAINT [FK_Posts_Blogs_BlogId]
    FOREIGN KEY ([BlogId]) REFERENCES [Blogs]([Id])
    ON DELETE CASCADE;
`

---

## Q28: What are self-referencing relationships?

### Short Interview Answer

A self-referencing relationship is when an entity has a navigation property to itself, like an Employee with a ManagerId pointing to another Employee. Configure with HasOne(e => e.Manager).WithMany(e => e.Subordinates).HasForeignKey(e => e.ManagerId).

### C# Example

`csharp
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int? ManagerId { get; set; }
    public Employee Manager { get; set; }
    public ICollection<Employee> Subordinates { get; set; }
}

modelBuilder.Entity<Employee>()
    .HasOne(e => e.Manager)
    .WithMany(e => e.Subordinates)
    .HasForeignKey(e => e.ManagerId)
    .OnDelete(DeleteBehavior.Restrict); // Prevent cascade cycles
`

### SQL Example

`sql
SELECT [e].* FROM [Employees] AS [e]
WHERE [e].[ManagerId] = @p0
`

---

## Q29: How do you configure optional vs required relationships?

### Short Interview Answer

A relationship is required when the foreign key property is non-nullable (int, Guid) and optional when nullable (int?, Guid?). You can override with .IsRequired() in fluent API.

### C# Example

`csharp
// Optional (nullable FK)
public int? BlogId { get; set; }

// Required (non-nullable FK)
public int BlogId { get; set; }

// Fluent override
modelBuilder.Entity<Post>()
    .HasOne(p => p.Blog)
    .WithMany(b => b.Posts)
    .IsRequired(); // Enforces non-nullable FK even if property is nullable
`

---

## Q30: What is the difference between WithOne and WithMany?

### Short Interview Answer

WithOne() is used for the dependent side of a one-to-one or one-to-many relationship — it indicates the navigation property is a single reference. WithMany() is used for the principal side indicating a collection. HasMany().WithOne() = one-to-many. HasOne().WithOne() = one-to-one. HasMany().WithMany() = many-to-many.

---

## Q31: How does EF Core resolve relationship conventions?

### Short Interview Answer

EF Core uses a set of convention classes that run during model building. The ForeignKeyDiscoveryConvention discovers FK properties by name patterns (BlogId, BlogForeignKey, BlogNavigationId). Conventions run in order: implicit, then data annotations, then fluent API overrides. Custom conventions can be added via AddConvention().

### FAANG-Level Deep Dive

**Convention Ordering**: EF Core runs 60+ conventions in a specific pipeline. The order is: IConvention implementations sorted by ConventionType. For example, PropertyDiscoveryConvention runs before KeyDiscoveryConvention. The fluent modelBuilder.Entity<T>() runs after all conventions. Custom conventions can be added at the end, or before specific phases using AddConvention(convention, appliesTo).

---

# 5. Performance Tuning

<details>
<summary><strong>8 Questions — N+1, Split Queries, AsNoTracking, Compiled Queries, Batching</strong></summary>

- Q32: What is the N+1 query problem in EF Core?
- Q33: How do split queries improve performance?
- Q34: What does AsNoTracking do and when should you use it?
- Q35: What is the difference between AsNoTracking, AsNoTrackingWithIdentityResolution, and default tracking?
- Q36: What is query batching and how does it help?
- Q37: How does the AutoInclude feature work?
- Q38: What is the performance impact of Include vs Select?
- Q39: How do you use EF.Functions for database-specific operations?

</details>

---
## Q32: What is the N+1 query problem in EF Core?

### Short Interview Answer

N+1 occurs when you load a parent entity and then access its child navigation property in a loop, causing one query for the parent and N additional queries (one per child). Example: loading 100 blogs and then accessing log.Posts inside a foreach triggers 101 SQL queries instead of 1 (with .Include()).

### Detailed Explanation

- **Cause**: Lazy loading or explicit loading inside a loop.
- **Solution**: Use .Include() (eager loading) or .Select() (projection) to load related data in one query.
- **Detection**: Enable logging to see repeated identical SQL patterns.

### C# Example

`csharp
// BAD: N+1 queries
var blogs = await db.Blogs.ToListAsync();              // 1 query
foreach (var blog in blogs)
    Console.WriteLine(blog.Posts.Count);                // N queries (one per blog)

// GOOD: Eager loading
var blogs = await db.Blogs.Include(b => b.Posts).ToListAsync(); // 1 query with JOIN

// GOOD: Projection
var data = await db.Blogs.Select(b => new {
    b.Name,
    PostCount = b.Posts.Count
}).ToListAsync();                                              // 1 query with subquery
`

### SQL Example

`sql
-- N+1 pattern:
SELECT * FROM [Blogs];                           -- 1 query
SELECT * FROM [Posts] WHERE [BlogId] = 1;        -- N queries
SELECT * FROM [Posts] WHERE [BlogId] = 2;
-- ... repeated N times

-- Fixed with Include:
SELECT [b].*, [p].*
FROM [Blogs] AS [b]
LEFT JOIN [Posts] AS [p] ON [b].[Id] = [p].[BlogId]
ORDER BY [b].[Id];                                -- 1 query
`

---

## Q33: How do split queries improve performance?

### Short Interview Answer

Split queries (.AsSplitQuery()) break a single query with multiple Includes into multiple SQL queries, avoiding Cartesian explosion from JOINs. Each query returns its own result set. This reduces data transfer when including multiple large collections.

### Detailed Explanation

- **What it solves**: Multiple .Include() + .ThenInclude() on collections creates a Cartesian product (row count = parent x child1 x child2).
- **When to use**: When including multiple large collections (e.g., Blog + Posts + Comments).
- **When NOT to use**: Single collection includes, or when query consistency is critical (split queries may show stale data if data changes between queries).

### C# Example

`csharp
var blogs = await db.Blogs
    .Include(b => b.Posts)
    .Include(b => b.Tags)
    .AsSplitQuery() // Three separate queries instead of one massive JOIN
    .ToListAsync();
`

### SQL Example

`sql
-- Without SplitQuery: one massive JOIN (Cartesian)
SELECT * FROM Blogs b
LEFT JOIN Posts p ON b.Id = p.BlogId
LEFT JOIN Tags t ON b.Id = t.BlogId

-- With SplitQuery: three separate queries
SELECT * FROM Blogs;
SELECT * FROM Posts WHERE BlogId IN (1, 2, 3, ...);
SELECT * FROM Tags WHERE BlogId IN (1, 2, 3, ...);
`

---

## Q34: What does AsNoTracking do and when should you use it?

### Short Interview Answer

AsNoTracking() tells EF Core not to track the returned entities in the change tracker. This eliminates identity resolution and change detection overhead, making queries ~2-5x faster for read-only scenarios. Use it for all read-only queries where you don't need to update entities.

### Detailed Explanation

- **What it does**: Entities are returned as Detached — no dictionary lookup, no snapshot comparison.
- **Performance**: Reduces memory usage (no tracking entries) and query time (no identity resolution).
- **When to use**: GET endpoints, reporting, read-only views, data export.
- **When NOT to use**: When you'll call SaveChanges to update the returned entities.

### C# Example

`csharp
// Read-only query: use AsNoTracking
var users = await db.Users
    .AsNoTracking()
    .Where(u => u.IsActive)
    .ToListAsync();

// Update scenario: must use default tracking
var user = await db.Users.FindAsync(42); // Tracked
user.Name = "New Name";
await db.SaveChangesAsync(); // Tracks and saves
`

### Performance Impact

- **Memory**: Each tracked entity costs ~200-400 bytes in the change tracker. AsNoTracking avoids this.
- **Speed**: Up to 5x faster for large result sets.
- **N+1**: Still vulnerable; use .Include() or .Select() to mitigate.

---

## Q35: What is the difference between AsNoTracking, AsNoTrackingWithIdentityResolution, and default tracking?

### Short Interview Answer

Default tracking: entities are tracked and cached; two queries for the same entity return the same reference. AsNoTracking: no tracking; each query returns new instances even for the same entity. AsNoTrackingWithIdentityResolution: no tracking, but same-key deduplication within a single query result (avoids duplicate instances in the same result set).

### When to Use

| Mode | Identity Resolution | Tracking | Use Case |
|------|-------------------|----------|----------|
| Default | Yes (per context) | Yes | Read + Save |
| AsNoTracking | No | No | Simple read-only |
| AsNoTrackingWithIdentityResolution | Yes (per query) | No | Complex query with joins, read-only |

---

## Q36: What is query batching and how does it help?

### Short Interview Answer

EF Core batches multiple INSERT/UPDATE/DELETE statements generated by SaveChangesAsync into a single database roundtrip. Instead of sending N separate commands, it groups them into one batch, drastically reducing network latency. Batching is automatic in EF Core — no configuration needed.

### Detailed Explanation

- **How it works**: IUpdateSqlGenerator generates SQL for all changes, wraps them in a batch (; separated or batches depending on provider).
- **Batch size**: Default is ~42 commands per batch. Configured via MaxBatchSize in UseSqlServer().
- **Impact:** Inserting 1000 records goes from ~1000 roundtrips to ~24 roundtrips (1000/42).

### C# Example

`csharp
for (int i = 0; i < 1000; i++)
    db.Products.Add(new Product { Name = $"Product {i}" });

await db.SaveChangesAsync(); // Batching: ~24 roundtrips instead of 1000
`

### SQL Example

`sql
-- Batched into a single command
INSERT INTO [Products] ([Name]) VALUES (N'Product 0');
INSERT INTO [Products] ([Name]) VALUES (N'Product 1');
-- ... up to MaxBatchSize commands
`

---

## Q37: How does the AutoInclude feature work?

### Short Interview Answer

.AutoInclude() (or NavigationAutoBehavior.Include) configures navigation properties to be automatically included in every query for that entity. Use for mandatory relationships that should always be loaded. Override per-query with .IgnoreAutoIncludes().

### C# Example

`csharp
modelBuilder.Entity<Order>()
    .Navigation(o => o.Customer)
    .AutoInclude();

// Now every Order query automatically includes Customer
var orders = await db.Orders.ToListAsync(); // Has JOIN to Customers

// Override when needed
var orders = await db.Orders.IgnoreAutoIncludes().ToListAsync();
`

---

## Q38: What is the performance impact of Include vs Select?

### Short Interview Answer

Include loads full entities (all columns) and tracks them in the change tracker. Select loads only specified columns (projection) and is always read-only. Select is always faster because it reduces data transfer, memory, and avoids tracking overhead.

### Comparison

| Aspect | Include | Select |
|--------|---------|--------|
| Columns | All columns | Specified columns only |
| Tracking | Yes (unless AsNoTracking) | No |
| Memory | Higher | Lower |
| N+1 Risk | None (eager) | None (translated) |
| Use Case | Need to update entities | Read-only DTOs |

---

## Q39: How do you use EF.Functions for database-specific operations?

### Short Interview Answer

EF.Functions exposes database-specific methods that translate to SQL. Examples: EF.Functions.Like() (SQL LIKE), EF.Functions.DateDiffDay() (SQL DATEDIFF), EF.Functions.Contains() (full-text search). These ensure server-side evaluation with proper SQL translation.

### C# Example

`csharp
// SQL LIKE operator
var users = await db.Users
    .Where(u => EF.Functions.Like(u.Name, "%John%"))
    .ToListAsync();

// Date difference
var orders = await db.Orders
    .Where(o => EF.Functions.DateDiffDay(o.OrderDate, DateTime.UtcNow) < 30)
    .ToListAsync();
`

### SQL Example

`sql
SELECT * FROM [Users] WHERE [Name] LIKE N'%John%'
SELECT * FROM [Orders] WHERE DATEDIFF(DAY, [OrderDate], GETUTCDATE()) < 30
`

---

# 6. Change Tracker

<details>
<summary><strong>7 Questions — DetectChanges, AutoDetectChanges, Entity States</strong></summary>

- Q40: What are the entity states in EF Core?
- Q41: How does the ChangeTracker work?
- Q42: What is DetectChanges and AutoDetectChanges?
- Q43: How does SaveChanges determine what SQL to generate?
- Q44: What is DbSet.Local and when is it useful?
- Q45: How do you attach/detach entities?
- Q46: What is the difference between Entry, Update, and Attach?

</details>

---
## Q40: What are the entity states in EF Core?

### Short Interview Answer

EF Core defines five entity states: Detached (not tracked), Unchanged (tracked, no changes), Added (will be inserted), Modified (will be updated), and Deleted (will be deleted). The ChangeTracker manages these states and SaveChanges iterates them to generate SQL.

### State Table

| State | db.Entry.State | SaveChanges Action | Tracked |
|-------|---------------|--------------------|---------|
| Detached | EntityState.Detached | None | No |
| Unchanged | EntityState.Unchanged | None (skip) | Yes |
| Added | EntityState.Added | INSERT | Yes |
| Modified | EntityState.Modified | UPDATE | Yes |
| Deleted | EntityState.Deleted | DELETE | Yes |

### C# Example

`csharp
var user = new User { Name = "John" };
Console.WriteLine(db.Entry(user).State); // Detached

db.Users.Add(user);
Console.WriteLine(db.Entry(user).State); // Added

await db.SaveChangesAsync();
Console.WriteLine(db.Entry(user).State); // Unchanged

user.Name = "Jane";
Console.WriteLine(db.Entry(user).State); // Modified (after DetectChanges)

db.Users.Remove(user);
Console.WriteLine(db.Entry(user).State); // Deleted
`

---

## Q41: How does the ChangeTracker work?

### Short Interview Answer

The ChangeTracker is the heart of EF Core's unit-of-work pattern. It maintains a dictionary of EntityEntry objects keyed by entity key. Each entry tracks the entity's current state, original values, current values, and navigation properties. On SaveChanges, it iterates all entries and generates SQL based on their state.

### Internal Working

- **Identity Map**: LocalView dictionary stores tracked entities by key.
- **Snapshots**: When an entity is loaded, EF takes a snapshot of its property values.
- **DetectChanges**: Compares current property values against the snapshot to detect changes.
- **Navigation tracking**: Tracks relationship changes (add/remove collection items).

### Step-by-Step: SaveChanges

`
1. DetectChanges() scans all tracked entries
2. For each entry with Added state -> generate INSERT
3. For each entry with Modified state -> generate UPDATE (only changed columns)
4. For each entry with Deleted state -> generate DELETE
5. SQL is batched and sent in one roundtrip
6. On success, states transition to Unchanged
7. On failure, transaction rolls back
`

---

## Q42: What is DetectChanges and AutoDetectChanges?

### Short Interview Answer

DetectChanges() scans all tracked entities and compares their current property values against original snapshots to detect modifications. AutoDetectChanges (default: true) calls DetectChanges automatically before queries and SaveChanges. Disable it (ChangeTracker.AutoDetectChangesEnabled = false) for bulk operations to avoid O(n) scan overhead, but must call DetectChanges manually.

### Performance Impact

- **Slower**: AutoDetectChanges scans ALL tracked entities on every query/save — O(n) where n = tracked entities.
- **Faster**: Disabling for bulk inserts/updates improves throughput 2-10x.
- **Tradeoff**: Must manually call DetectChanges() before SaveChanges.

### C# Example

`csharp
// Bulk insert optimization
db.ChangeTracker.AutoDetectChangesEnabled = false;
for (int i = 0; i < 10000; i++)
    db.Products.Add(new Product { Name = $"P{i}" });
db.ChangeTracker.DetectChanges(); // Manual detection
await db.SaveChangesAsync();
`

---

## Q43: How does SaveChanges determine what SQL to generate?

### Short Interview Answer

SaveChanges iterates the ChangeTracker.Entries(), groups by entity state, and delegates to IUpdateSqlGenerator. For each Added entity, it generates INSERT with scope_identity/sCOPE_IDENTITY for key generation. For Modified, it generates UPDATE with only changed columns. For Deleted, it generates DELETE. All commands are batched.

---

## Q44: What is DbSet.Local and when is it useful?

### Short Interview Answer

DbSet<T>.Local returns an ObservableCollection<T> containing all entities currently tracked by the context for that DbSet. It does NOT query the database — it only reflects the in-memory state. Useful for data-bound UI scenarios (WPF, Blazor) where you want to display and edit tracked entities without re-querying.

### C# Example

`csharp
// Load some users
var users = await db.Users.Where(u => u.IsActive).ToListAsync();

// Local now contains those users
db.Users.Local.Add(new User { Name = "New" }); // Added to tracker

// WPF binding
UsersDataGrid.ItemsSource = db.Users.Local;
`

### Common Mistake

- Assuming Local contains all database rows — it contains only what was loaded and tracked in this context.

---

## Q45: How do you attach/detach entities?

### Short Interview Answer

db.Attach(entity) starts tracking an entity in Unchanged state. db.Entry(entity).State = EntityState.Detached removes it from tracking. Attach is used for disconnected scenarios (e.g., updating an entity from a client request). The entity must have its key value set.

### C# Example

`csharp
// Disconnected update scenario
public async Task UpdateUser(User user) // User comes from client
{
    db.Users.Attach(user); // Track as Unchanged
    db.Entry(user).Property(u => u.Name).IsModified = true; // Mark only Name as modified
    await db.SaveChangesAsync(); // UPDATE only Name column
}
`

---

## Q46: What is the difference between Entry, Update, and Attach?

### Short Interview Answer

Entry(entity) returns the EntityEntry for manual state management. Update(entity) attaches and marks as Modified (all properties). Attach(entity) attaches as Unchanged. Use Update for full entity updates from clients; use Attach + selective IsModified for partial updates.

| Method | State After | Action | Use Case |
|--------|-------------|--------|----------|
| Entry(e).State = Modified | Modified | Full UPDATE | Manual control |
| Update(e) | Modified | Full UPDATE | Full entity from client |
| Attach(e) | Unchanged | None | Start tracking + partial update |

---

# 7. Concurrency

<details>
<summary><strong>7 Questions — Row Versioning, Optimistic Concurrency, Conflicts</strong></summary>

- Q47: How does EF Core handle concurrency conflicts?
- Q48: What is a row version/timestamp column?
- Q49: How do you resolve DbUpdateConcurrencyException?
- Q50: What is optimistic vs pessimistic concurrency?
- Q51: How do you use [ConcurrencyCheck]?
- Q52: How does EF Core handle transactions?
- Q53: What is ExecutionStrategy and retry logic?

</details>

---
## Q47: How does EF Core handle concurrency conflicts?

### Short Interview Answer

EF Core uses optimistic concurrency by default. It checks that the row hasn't changed since it was loaded by including a concurrency token in the UPDATE WHERE clause. If the token doesn't match (row was modified by another user), a DbUpdateConcurrencyException is thrown on SaveChanges.

### Detailed Explanation

- **Optimistic**: Assumes conflicts are rare; checks at save time.
- **Concurrency token**: A property marked with [Timestamp], [ConcurrencyCheck], or IsRowVersion().
- **Resolution**: Catch exception, refresh values, retry with database values, current values, or original values.

### C# Example

`csharp
try
{
    await db.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    var entry = ex.Entries.Single();
    var dbValues = await entry.GetDatabaseValuesAsync();

    // Option 1: Overwrite with current values
    entry.OriginalValues.SetValues(dbValues);

    // Option 2: Keep current values (client wins)
    // entry.CurrentValues.SetValues(dbValues);

    // Option 3: Merge
    foreach (var property in dbValues.Properties)
    {
        var dbVal = dbValues[property];
        var currentVal = entry.CurrentValues[property];
        entry.CurrentValues[property] = MergeStrategy(dbVal, currentVal);
    }

    await db.SaveChangesAsync();
}
`

---

## Q48: What is a row version/timestamp column?

### Short Interview Answer

A row version column (SQL Server owversion/	imestamp) is a binary auto-incrementing value that changes every time a row is updated. EF Core uses it as a concurrency token. Configure with [Timestamp] attribute or IsRowVersion() fluent API.

### C# Example

`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }
}

// Fluent
modelBuilder.Entity<Product>()
    .Property(p => p.RowVersion)
    .IsRowVersion();
`

### SQL Example

`sql
-- The RowVersion column is automatically maintained by SQL Server
CREATE TABLE [Products] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Price] decimal(18,2) NOT NULL,
    [RowVersion] rowversion NOT NULL -- Auto-incrementing binary
);

-- UPDATE includes concurrency check
UPDATE [Products]
SET [Name] = @p1, [Price] = @p2
WHERE [Id] = @p0 AND [RowVersion] = @p3; -- Fails if rowversion changed

SELECT @@ROWCOUNT; -- 0 if no rows matched -> concurrency conflict
`

---

## Q49: How do you resolve DbUpdateConcurrencyException?

### Short Interview Answer

Catch the exception, access ex.Entries to get the affected entity entries, then call entry.GetDatabaseValuesAsync() to get the current database values. Choose a resolution strategy: database wins (overwrite current), client wins (keep current), or custom merge. Retry SaveChanges after resolution.

### Resolution Strategies

| Strategy | Description | Use Case |
|----------|-------------|----------|
| Database Wins | entry.OriginalValues.SetValues(dbValues) | Last-in-wins |
| Client Wins | entry.CurrentValues.SetValues(dbValues) | First-in-wins |
| Custom Merge | Manual property-by-property merge | Business rules |
| Retry | Re-query and re-apply changes | Transient conflicts |

---

## Q50: What is optimistic vs pessimistic concurrency?

### Short Interview Answer

**Optimistic**: No locks held; checks at save time. EF Core defaults to this. **Pessimistic**: Locks rows on read using SELECT ... WITH (UPDLOCK, ROWLOCK) to prevent concurrent modifications. EF Core has no built-in pessimistic locking — you must use raw SQL or EF.Query with table hints.

### When to Use

- **Optimistic**: Low contention, read-heavy workloads, web applications (most common).
- **Pessimistic**: High contention on critical rows (inventory, financial transactions), but rarely used due to scalability issues.

---

## Q51: How do you use [ConcurrencyCheck]?

### Short Interview Answer

[ConcurrencyCheck] marks individual properties as concurrency tokens. EF Core includes these property values in the UPDATE WHERE clause. If the property changed in the database since the entity was loaded, the update affects 0 rows and a concurrency exception is thrown.

### C# Example

`csharp
public class Product
{
    public int Id { get; set; }

    [ConcurrencyCheck]
    public string Name { get; set; } // Included in WHERE clause on update

    public decimal Price { get; set; }
}
`

### SQL Example

`sql
UPDATE [Products] SET [Name] = @p1, [Price] = @p2
WHERE [Id] = @p0 AND [Name] = @p3; -- Name must match original
`

---

## Q52: How does EF Core handle transactions?

### Short Interview Answer

SaveChangesAsync automatically wraps all generated SQL in a transaction. For multi-context operations, use db.Database.BeginTransaction() for explicit control. EF Core supports System.Transactions.TransactionScope for distributed transactions across multiple databases.

### C# Example

`csharp
// Implicit transaction in SaveChanges
await db.SaveChangesAsync(); // Single transaction

// Explicit transaction across operations
using var tx = await db.Database.BeginTransactionAsync();
try
{
    db.Orders.Add(order);
    await db.SaveChangesAsync();

    db.Inventory.Remove(item);
    await db.SaveChangesAsync();

    await tx.CommitAsync();
}
catch
{
    await tx.RollbackAsync();
}

// Isolation level
using var tx = await db.Database.BeginTransactionAsync(IsolationLevel.Serializable);
`

---

## Q53: What is ExecutionStrategy and retry logic?

### Short Interview Answer

ExecutionStrategy is EF Core's mechanism for retrying failed operations due to transient errors (deadlocks, connection drops). For SQL Server, use SqlServerRetryingExecutionStrategy. It automatically retries SaveChanges or ToListAsync a configurable number of times with exponential backoff.

### C# Example

`csharp
// Configure retry on DbContext options
options.UseSqlServer(connectionString, sqlOptions =>
{
    sqlOptions.ExecutionStrategy(details =>
        new SqlServerRetryingExecutionStrategy(
            details.MaxRetryCount = 5,
            details.MaxDelay = TimeSpan.FromSeconds(30)
        ));
});

// Manual execution strategy usage
var strategy = db.Database.CreateExecutionStrategy();
await strategy.ExecuteAsync(async () =>
{
    using var tx = await db.Database.BeginTransactionAsync();
    // Operations
    await db.SaveChangesAsync();
    await tx.CommitAsync();
});
`

---

# 8. Raw SQL & Stored Procedures

<details>
<summary><strong>7 Questions — FromSql, ExecuteSqlRaw, Interoperability</strong></summary>

- Q54: How do you execute raw SQL queries in EF Core?
- Q55: What is the difference between FromSqlRaw and FromSqlInterpolated?
- Q56: How do you call stored procedures with EF Core?
- Q57: What is ExecuteSqlRaw and when to use it?
- Q58: How do you map raw SQL results to keyless entity types?
- Q59: Can you mix EF Core and Dapper in the same project?
- Q60: What are the security implications of raw SQL in EF Core?

</details>

---
## Q54: How do you execute raw SQL queries in EF Core?

### Short Interview Answer

Use FromSqlRaw() or FromSqlInterpolated() on a DbSet<T> to execute raw SQL that returns entities. The SQL must be a SELECT that returns columns matching the entity's properties. Use ExecuteSqlRaw() or ExecuteSqlInterpolated() for non-query commands (INSERT/UPDATE/DELETE).

### C# Example

`csharp
// Raw SQL query returning entities
var users = await db.Users
    .FromSqlRaw("SELECT * FROM Users WHERE Age > {0}", minAge)
    .ToListAsync();

// With interpolated string (parameterized)
var users = await db.Users
    .FromSqlInterpolated($"SELECT * FROM Users WHERE Age > {minAge}")
    .ToListAsync();

// Non-query command
await db.Database.ExecuteSqlRawAsync(
    "UPDATE Users SET LastLogin = GETDATE() WHERE Id = {0}", userId);

await db.Database.ExecuteSqlInterpolatedAsync(
    $"UPDATE Users SET LastLogin = GETDATE() WHERE Id = {userId}");
`

---

## Q55: What is the difference between FromSqlRaw and FromSqlInterpolated?

### Short Interview Answer

FromSqlRaw takes a format string with positional {0} placeholders and separate parameters. FromSqlInterpolated takes an interpolated string and automatically parameterizes the values. Both prevent SQL injection via parameterization. Use FromSqlInterpolated for readability.

### C# Example

`csharp
// FromSqlRaw: positional placeholders
var sql = "SELECT * FROM Users WHERE Name = {0} AND Age > {1}";
var users = await db.Users.FromSqlRaw(sql, name, minAge).ToListAsync();

// FromSqlInterpolated: auto-parameterized
var users = await db.Users
    .FromSqlInterpolated($"SELECT * FROM Users WHERE Name = {name} AND Age > {minAge}")
    .ToListAsync();

// DANGER: string concatenation = SQL injection
var bad = await db.Users.FromSqlRaw($"SELECT * FROM Users WHERE Name = '{name}'").ToListAsync(); // NEVER DO THIS
`

---

## Q56: How do you call stored procedures with EF Core?

### Short Interview Answer

Use FromSqlRaw or FromSqlInterpolated with EXEC to call stored procedures. For output parameters, use raw ADO.NET DbCommand. For entity-mapped results, use FromSqlRaw("EXEC GetUsers @p0", param). For non-entity results, use ExecuteSqlRaw.

### C# Example

`csharp
// Stored procedure returning entities
var users = await db.Users
    .FromSqlRaw("EXEC GetActiveUsers @MinAge", new SqlParameter("@MinAge", 18))
    .ToListAsync();

// Stored procedure with output parameter
var param = new SqlParameter("@Count", SqlDbType.Int) { Direction = ParameterDirection.Output };
await db.Database.ExecuteSqlRawAsync("EXEC CountUsers @MinAge, @Count OUT", new SqlParameter("@MinAge", 18), param);
var count = (int)param.Value;

// Stored procedure with no result
await db.Database.ExecuteSqlRawAsync("EXEC ArchiveOldOrders @Days", new SqlParameter("@Days", 90));
`

---

## Q57: What is ExecuteSqlRaw and when to use it?

### Short Interview Answer

ExecuteSqlRaw executes arbitrary SQL that doesn't return entities (INSERT, UPDATE, DELETE, DDL, stored procedures). It returns the number of rows affected. Use it for bulk operations, DDL changes, or operations that can't be expressed in LINQ.

### C# Example

`csharp
var rowsAffected = await db.Database.ExecuteSqlRawAsync(
    "UPDATE Products SET Price = Price * 1.1 WHERE Category = {0}", "Electronics");

// Bulk delete
await db.Database.ExecuteSqlRawAsync("DELETE FROM Logs WHERE CreatedAt < DATEADD(DAY, -90, GETDATE())");
`

---

## Q58: How do you map raw SQL results to keyless entity types?

### Short Interview Answer

Define a class with the result columns, add a DbSet for it, and configure it with .HasNoKey() in OnModelCreating. Then use FromSqlRaw() on that DbSet. The entity is read-only and not tracked.

### C# Example

`csharp
public class SalesSummary
{
    public string ProductName { get; set; }
    public decimal TotalSales { get; set; }
    public int OrderCount { get; set; }
}

public DbSet<SalesSummary> SalesSummaries => Set<SalesSummary>();

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<SalesSummary>()
        .HasNoKey()
        .ToView(null); // Not mapped to any table
}

// Usage
var summaries = await db.SalesSummaries
    .FromSqlRaw("SELECT p.Name, SUM(oi.Quantity * oi.Price) AS TotalSales, COUNT(DISTINCT o.Id) AS OrderCount FROM ...")
    .ToListAsync();
`

---

## Q59: Can you mix EF Core and Dapper in the same project?

### Short Interview Answer

Yes, and it's a common pattern. Use EF Core for CRUD, relationships, and change tracking. Use Dapper for complex queries, reporting, and high-performance reads. Both can use the same DbConnection from db.Database.GetDbConnection().

### C# Example

`csharp
// EF Core for transactional write
db.Orders.Add(order);
await db.SaveChangesAsync();

// Dapper for complex read
using var conn = db.Database.GetDbConnection();
var results = await conn.QueryAsync<ProductSales>(
    "SELECT p.Name, SUM(s.Amount) FROM Products p JOIN Sales s ON p.Id = s.ProductId GROUP BY p.Name");
`

---

## Q60: What are the security implications of raw SQL in EF Core?

### Short Interview Answer

Use parameterized queries (FromSqlInterpolated or FromSqlRaw with {0} placeholders) to prevent SQL injection. Never concatenate user input into SQL strings. Even with stored procedures, validate inputs for length and type.

### Safe vs Unsafe

`csharp
// SAFE: Parameterized
var safe = db.Users.FromSqlInterpolated($"SELECT * FROM Users WHERE Name = {userInput}");

// UNSAFE: String concatenation
var unsafe = db.Users.FromSqlRaw($"SELECT * FROM Users WHERE Name = '{userInput}'"); // SQL INJECTION!
`

---

# 9. Advanced Features

<details>
<summary><strong>8 Questions — Shadow Properties, Owned Entities, TPT, TPH</strong></summary>

- Q61: What are shadow properties in EF Core?
- Q62: What are owned entities and how do they work?
- Q63: What is Table-Per-Hierarchy (TPH) inheritance?
- Q64: What is Table-Per-Type (TPT) inheritance?
- Q65: What is Table-Per-Concrete-Type (TPC) inheritance?
- Q66: What are backed fields in EF Core?
- Q67: How do you use HasQueryFilter?
- Q68: What is ModelBuilder metadata API?

</details>

---
## Q61: What are shadow properties in EF Core?

### Short Interview Answer

Shadow properties are properties not defined in the entity class but tracked by EF Core in the model. They are mapped to database columns and can be used for foreign keys, timestamps, or audit fields without polluting the domain model. Access them via db.Entry(entity).Property("ShadowProp").

### C# Example

`csharp
// Configure shadow FK and audit property
modelBuilder.Entity<Post>(entity =>
{
    entity.Property<DateTime>("CreatedAt");
    entity.Property<int>("BlogId"); // Shadow FK
    entity.HasOne(p => p.Blog)
        .WithMany(b => b.Posts)
        .HasForeignKey("BlogId");
});

// Setting shadow property
db.Entry(post).Property("CreatedAt").CurrentValue = DateTime.UtcNow;

// Querying shadow property in LINQ
var posts = await db.Posts
    .Where(p => EF.Property<DateTime>(p, "CreatedAt") > cutoff)
    .ToListAsync();
`

---

## Q62: What are owned entities and how do they work?

### Short Interview Answer

Owned entities (.OwnsOne(), .OwnsMany()) are value objects that are part of the parent entity. They are mapped to the same table (by default) as the parent. Owned entities cannot exist independently and are always loaded with the parent.

### C# Example

`csharp
public class Order
{
    public int Id { get; set; }
    public ShippingAddress Address { get; set; } // Owned
}

public class ShippingAddress
{
    public string Street { get; set; }
    public string City { get; set; }
    public string Zip { get; set; }
}

modelBuilder.Entity<Order>()
    .OwnsOne(o => o.Address, a =>
    {
        a.Property(p => p.Street).HasColumnName("ShippingStreet");
        a.Property(p => p.City).HasColumnName("ShippingCity");
    });
`

### SQL Example

`sql
-- All columns in the same Orders table
CREATE TABLE [Orders] (
    [Id] int NOT NULL IDENTITY,
    [ShippingStreet] nvarchar(200),
    [ShippingCity] nvarchar(100),
    [ShippingZip] nvarchar(20)
);
`

---

## Q63: What is Table-Per-Hierarchy (TPH) inheritance?

### Short Interview Answer

TPH maps an inheritance hierarchy to a single database table with a discriminator column distinguishing types. EF Core defaults to TPH. It's the most performant inheritance strategy since no JOINs are needed. The discriminator is a string column (default: Discriminator).

### C# Example

`csharp
public abstract class Animal { public int Id { get; set; } public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }
public class Cat : Animal { public bool IsIndoor { get; set; } }

// Default TPH: single table with Discriminator column
// Dog rows: Breed column populated, IsIndoor NULL
// Cat rows: IsIndoor column populated, Breed NULL
`

### SQL Example

`sql
SELECT [a].[Id], [a].[Name], [a].[Discriminator], [a].[Breed], [a].[IsIndoor]
FROM [Animals] AS [a]
WHERE [a].[Discriminator] IN (N'Dog', N'Cat')
`

---

## Q64: What is Table-Per-Type (TPT) inheritance?

### Short Interview Answer

TPT maps each type in the hierarchy to its own table. The base table stores common properties; derived tables store specific properties linked by primary key (shared PK). TPT requires JOINs for queries, making it slower than TPH.

### C# Example

`csharp
modelBuilder.Entity<Dog>().ToTable("Dogs");
modelBuilder.Entity<Cat>().ToTable("Cats");
// Animal table: Id, Name
// Dogs table: Id, Breed
// Cats table: Id, IsIndoor
`

### SQL Example

`sql
SELECT [a].[Id], [a].[Name], [d].[Breed], CASE WHEN [d].[Id] IS NOT NULL THEN N'Dog' ELSE N'Cat' END AS [Discriminator]
FROM [Animals] AS [a]
LEFT JOIN [Dogs] AS [d] ON [a].[Id] = [d].[Id]
LEFT JOIN [Cats] AS [c] ON [a].[Id] = [c].[Id]
`

---

## Q65: What is Table-Per-Concrete-Type (TPC) inheritance?

### Short Interview Answer

TPC maps each concrete type to its own table containing all columns (base + derived). No shared table. Queries use UNION across concrete type tables. TPC is efficient for polymorphic queries by type but complex for cross-type queries.

### C# Example

`csharp
modelBuilder.Entity<Dog>().ToTable("Dogs");
modelBuilder.Entity<Cat>().ToTable("Cats");
modelBuilder.Entity<Animal>().UseTpcMappingStrategy();
// Dogs table: Id, Name, Breed
// Cats table: Id, Name, IsIndoor
`

---

## Q66: What are backed fields in EF Core?

### Short Interview Answer

Backed fields let EF Core read/write entity properties through fields instead of properties. This supports read-only properties, computed properties, and encapsulation. Configure with .HasField("_name") or use [BackingField] attribute.

### C# Example

`csharp
public class User
{
    private string _name;

    public int Id { get; set; }

    public string Name
    {
        get => _name;
        private set => _name = value; // Private setter
    }
}

modelBuilder.Entity<User>()
    .Property(u => u.Name)
    .HasField("_name");
`

---

## Q67: How do you use HasQueryFilter?

### Short Interview Answer

.HasQueryFilter() defines a LINQ predicate that is automatically applied to every query for that entity type in LINQ. Use this for soft delete, multi-tenancy, or data isolation. Can be overridden per query with .IgnoreQueryFilters().

### C# Example

`csharp
modelBuilder.Entity<User>()
    .HasQueryFilter(u => !u.IsDeleted);

modelBuilder.Entity<Order>()
    .HasQueryFilter(o => o.TenantId == _currentTenantId);

// Override for admin queries
var allUsers = await db.Users.IgnoreQueryFilters().ToListAsync();
`

---

## Q68: What is ModelBuilder metadata API?

### Short Interview Answer

The metadata API (IModel, IEntityType, IProperty) allows reading the EF Core model at runtime. Use db.Model.FindEntityType(typeof(User)) to inspect entity configuration, keys, indexes, and relationships programmatically.

### C# Example

`csharp
var entityType = db.Model.FindEntityType(typeof(User));
var primaryKey = entityType.FindPrimaryKey();
var properties = entityType.GetProperties();
var foreignKeys = entityType.GetForeignKeys();
var indexes = entityType.GetIndexes();
`

---

# 10. EF Core 10 Features

<details>
<summary><strong>7 Questions — Latest Improvements in EF Core 10</strong></summary>

- Q69: What are the major new features in EF Core 10?
- Q70: How does EF Core 10 improve query translation?
- Q71: What is the new RawSql API in EF Core 10?
- Q72: How does EF Core 10 handle JSON columns natively?
- Q73: What are the performance improvements in EF Core 10?
- Q74: How does EF Core 10 improve Cosmos DB support?
- Q75: What are the new migration features in EF Core 10?

</details>

---
## Q69: What are the major new features in EF Core 10?

### Short Interview Answer

EF Core 10 introduces native JSON column support, improved query translation with fewer client evaluations, a new RawSql API for safer raw SQL, enhanced Cosmos DB support, better performance with IAsyncEnumerable integration, and improved ExecuteUpdate/ExecuteDelete bulk operations.

### Key Features

| Feature | Description |
|---------|-------------|
| JSON Columns | Native mapping of .NET types to JSON columns |
| Improved Translation | Fewer client evaluations, more SQL functions mapped |
| RawSql API | Type-safe raw SQL with RawSql method |
| Bulk Operations | ExecuteUpdate/ExecuteDelete with joins |
| Cosmos DB | Hierarchical partition keys, improved querying |
| Migration Scripting | Better idempotent scripts with migration bundling |

---

## Q70: How does EF Core 10 improve query translation?

### Short Interview Answer

EF Core 10 adds translation for more C# patterns: string.Contains() with char, index access on strings, TimeOnly/DateOnly operations, and improved DateTime translations. It also reduces client evaluation fallbacks by ~30%, resulting in more efficient SQL.

---

## Q71: What is the new RawSql API in EF Core 10?

### Short Interview Answer

EF Core 10 introduces db.Database.RawSql() returning IQueryable<T> for type-safe raw SQL composition. Unlike FromSql, it supports composing LINQ operators after raw SQL, enabling partial raw SQL with LINQ filtering on top.

### C# Example

`csharp
// EF Core 10 raw SQL composable
var result = await db.Database.RawSql<User>(
    $"SELECT * FROM Users WITH (NOLOCK)")
    .Where(u => u.IsActive)
    .OrderBy(u => u.Name)
    .ToListAsync();
`

---

## Q72: How does EF Core 10 handle JSON columns natively?

### Short Interview Answer

EF Core 10 maps complex types and owned entities to JSON columns natively with .ToJson(). The entire owned graph is stored as a JSON string in a single column. EF Core can query into JSON using path expressions like EF.JsonValue().

### C# Example

`csharp
public class Order
{
    public int Id { get; set; }
    public ShippingInfo Shipping { get; set; } // Mapped to JSON
}

public class ShippingInfo
{
    public string Address { get; set; }
    public string City { get; set; }
    public string Carrier { get; set; }
}

modelBuilder.Entity<Order>()
    .OwnsOne(o => o.Shipping, sa =>
        sa.ToJson()); // Stored as JSON column

// Query into JSON
var orders = await db.Orders
    .Where(o => EF.JsonValue(o.Shipping, "City") == "Seattle")
    .ToListAsync();
`

---

## Q73: What are the performance improvements in EF Core 10?

### Short Interview Answer

EF Core 10 improves compiled query caching (faster cache lookup), reduces allocations in the query pipeline by ~20%, adds IAsyncEnumerable integration for streaming large results, and improves batching for bulk operations.

---

## Q74: How does EF Core 10 improve Cosmos DB support?

### Short Interview Answer

EF Core 10 for Cosmos DB adds hierarchical partition keys, improved JSON mapping, support for ExecuteUpdate/ExecuteDelete, and better query translation with ORDER BY and GROUP BY support.

---

## Q75: What are the new migration features in EF Core 10?

### Short Interview Answer

EF Core 10 introduces migration bundles (self-contained executables that apply migrations), better migration conflict detection in teams, and improved idempotent script generation with transaction wrapping per migration.

### C# Example

`ash
# Create a migration bundle (EF Core 10)
dotnet ef migrations bundle --self-contained -r win-x64

# Apply the bundle
.\efbundle.exe --connection "Server=.;Database=MyDb;..."
`

---

# 11. Database Providers

<details>
<summary><strong>7 Questions — SQL Server, PostgreSQL, Cosmos DB, InMemory</strong></summary>

- Q76: What are the differences between SQL Server and PostgreSQL providers?
- Q77: How does the InMemory provider work and when should you use it?
- Q78: What are the Cosmos DB provider limitations?
- Q79: How do you write provider-agnostic code?
- Q80: What is the SQLite provider used for?
- Q81: How do you handle provider-specific migrations?
- Q82: What are the SQL Server-specific features in EF Core?

</details>

---
## Q76: What are the differences between SQL Server and PostgreSQL providers?

### Short Interview Answer

The main differences are: SQL Server uses owversion for concurrency, IDENTITY for auto-generation, SEQUENCE for hi-lo; PostgreSQL uses xmin (hidden system column) for concurrency, SERIAL/IDENTITY for auto-gen, and supports array columns, JSONB natively. SQL Server has DateDiff, PostgreSQL has DatePart. Both support most EF Core features.

### Key Differences

| Feature | SQL Server | PostgreSQL |
|---------|------------|------------|
| Concurrency | owversion/	imestamp | xmin column |
| Identity | IDENTITY / SEQUENCE | SERIAL / IDENTITY |
| JSON | OPENJSON (since 2016) | ->, ->> operators |
| Array | Not supported | Native arrays |
| Schema | dbo (default) | public (default) |
| Schema migrations | Full support | Full support |
| Value generation | SqlServerValueGenerationStrategy | NpgsqlValueGenerationStrategy |

---

## Q77: How does the InMemory provider work and when should you use it?

### Short Interview Answer

UseInMemoryDatabase() stores data in memory using a lightweight dictionary. It is NOT a relational database — it ignores constraints, transactions, and migrations. Use ONLY for testing. Never use in production. For better testing, use SQLite in-memory mode.

### C# Example

`csharp
// InMemory provider (for testing only)
services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("TestDb"));

// SQLite in-memory (better for testing)
services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("DataSource=:memory:"));
`

### Common Mistake

`csharp
// BAD: This works in InMemory but fails in real DB
var result = await db.Users.Where(u => u.Name.Length > 3).ToListAsync();
`

---

## Q78: What are the Cosmos DB provider limitations?

### Short Interview Answer

The Cosmos DB provider has limitations: no raw SQL (FromSql), no Join/Include on collections, no GROUP BY/DISTINCT (limited), no transactions across containers, and no migrations (schema is auto-managed). It supports JSON mapping, owned entities, and hierarchical partition keys.

---

## Q79: How do you write provider-agnostic code?

### Short Interview Answer

Use EF Core's abstraction layer: avoid provider-specific EF.Functions, configure concurrency tokens generically (use IsConcurrencyToken() instead of IsRowVersion()), use HasDefaultValueSql() sparingly, and test with multiple providers.

### C# Example

`csharp
// Provider-agnostic concurrency
modelBuilder.Entity<User>()
    .Property(u => u.Version)
    .IsConcurrencyToken(); // Works across providers

// Provider-agnostic auto-generation
modelBuilder.Entity<User>()
    .Property(u => u.Id)
    .ValueGeneratedOnAdd(); // Works across providers
`

---

## Q80: What is the SQLite provider used for?

### Short Interview Answer

The SQLite provider is used for local/embedded databases, unit testing (in-memory SQLite is more realistic than InMemory), mobile apps (MAUI), and lightweight desktop applications. It supports most EF Core features but lacks some SQL Server-specific capabilities.

---

## Q81: How do you handle provider-specific migrations?

### Short Interview Answer

Use IMigrationsAnnotationProvider for provider-specific annotations. For multi-provider support, maintain separate DbContext classes or use conditional migration configuration. Each provider may generate different SQL types and need different index/constraint syntax.

### C# Example

`csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    if (Database.ProviderName == "Microsoft.EntityFrameworkCore.SqlServer")
    {
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("decimal(18,2)");
    }
    else if (Database.ProviderName == "Npgsql.EntityFrameworkCore.PostgreSQL")
    {
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("numeric(18,2)");
    }
}
`

---

## Q82: What are the SQL Server-specific features in EF Core?

### Short Interview Answer

SQL Server-specific features include: IsRowVersion() for timestamp concurrency, SqlServerValueGenerationStrategy.IdentityColumn and SequenceHiLo, UseQuerySplittingBehavior (SplitQuery), SqlServerRetryingExecutionStrategy, memory-optimized tables, temporal tables, and SqlServerQueryHint for table hints.

### C# Example

`csharp
options.UseSqlServer(connectionString, sqlOptions =>
{
    sqlOptions.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
    sqlOptions.UseRowNumberForPaging(); // For SQL Server 2008
    sqlOptions.EnableRetryOnFailure(5, TimeSpan.FromSeconds(30), null);
    sqlOptions.CommandTimeout(120);
    sqlOptions.MigrationsHistoryTable("__EFMigrationsHistory", "admin"); // Custom schema
});
`

---

# 12. Global Query Filters

<details>
<summary><strong>7 Questions — HasQueryFilter, Soft Delete, Multi-Tenancy</strong></summary>

- Q83: What are global query filters in EF Core?
- Q84: How do you implement soft delete with query filters?
- Q85: How do you implement multi-tenancy with query filters?
- Q86: How do you override a query filter for specific queries?
- Q87: What are the limitations of global query filters?
- Q88: How do query filters affect performance?
- Q89: Can you filter navigation properties with query filters?

</details>

---
## Q83: What are global query filters in EF Core?

### Short Interview Answer

Global query filters are LINQ predicates defined in OnModelCreating using .HasQueryFilter(). They are automatically applied to every LINQ query for that entity type. Common uses: soft delete (IsDeleted == false), multi-tenancy (TenantId == currentTenantId), and data isolation.

### C# Example

`csharp
modelBuilder.Entity<User>()
    .HasQueryFilter(u => !u.IsDeleted);

modelBuilder.Entity<Order>()
    .HasQueryFilter(o => o.IsActive && o.TenantId == _tenantService.TenantId);
`

---

## Q84: How do you implement soft delete with query filters?

### Short Interview Answer

Add an IsDeleted boolean property to entities. In OnModelCreating, add .HasQueryFilter(e => !e.IsDeleted). For delete operations, set IsDeleted = true instead of calling Remove. For cleanup queries, use .IgnoreQueryFilters().

### C# Example

`csharp
public interface ISoftDelete
{
    bool IsDeleted { get; set; }
}

public class User : ISoftDelete
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsDeleted { get; set; }
}

// Base entity configuration
foreach (var entityType in modelBuilder.Model.GetEntityTypes()
    .Where(e => typeof(ISoftDelete).IsAssignableFrom(e.ClrType)))
{
    modelBuilder.Entity(entityType.ClrType)
        .HasQueryFilter(e => !EF.Property<bool>(e, "IsDeleted"));
}

// Soft delete
var user = await db.Users.FindAsync(id);
user.IsDeleted = true;
await db.SaveChangesAsync();

// Admin query to include deleted
var allUsers = await db.Users.IgnoreQueryFilters()
    .Where(u => u.IsDeleted)
    .ToListAsync();
`

---

## Q85: How do you implement multi-tenancy with query filters?

### Short Interview Answer

Inject a ITenantService into the DbContext constructor. Store the current TenantId. In OnModelCreating, add .HasQueryFilter(e => e.TenantId == _tenantId). Each query automatically filters by tenant. For cross-tenant admin queries, use .IgnoreQueryFilters().

### C# Example

`csharp
public class AppDbContext : DbContext
{
    private readonly int _tenantId;

    public AppDbContext(DbContextOptions<AppDbContext> options, ITenantService tenant)
        : base(options)
    {
        _tenantId = tenant.TenantId;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>()
            .HasQueryFilter(o => o.TenantId == _tenantId);
    }
}
`

---

## Q86: How do you override a query filter for specific queries?

### Short Interview Answer

Use .IgnoreQueryFilters() on the query to remove all global query filters for that specific query. This is an opt-out mechanism. You cannot selectively remove individual filters — it's all or none.

### C# Example

`csharp
// Ignore ALL query filters for this query
var deletedUsers = await db.Users
    .IgnoreQueryFilters()
    .Where(u => u.IsDeleted)
    .ToListAsync();
`

---

## Q87: What are the limitations of global query filters?

### Short Interview Answer

Limitations include: cannot reference navigation properties (filter must be on the entity itself), cannot be changed per-query without IgnoreQueryFilters, filters apply to all queries including Include/navigation loading, and they can cause unexpected results when not understood.

---

## Q88: How do query filters affect performance?

### Short Interview Answer

Minimal impact. The filter is translated to SQL WHERE clauses, which the database optimizes with indexes. However, complex filter expressions (subqueries, function calls) can degrade performance. Ensure filtered columns are indexed (e.g., IsDeleted, TenantId).

---

## Q89: Can you filter navigation properties with query filters?

### Short Interview Answer

Query filters on a principal entity also apply when the entity is loaded via navigation from another entity. For example, if User has HasQueryFilter(u => !u.IsDeleted), then loading Blog.CreatedBy will also apply the filter. This is called **navigation filter application**.

---

# 13. Interception

<details>
<summary><strong>7 Questions — SaveChangesInterceptor, CommandInterceptor</strong></summary>

- Q90: What are interceptors in EF Core?
- Q91: What is SaveChangesInterceptor and how do you use it?
- Q92: What is ICommandInterceptor and when to use it?
- Q93: How do you register interceptors?
- Q94: How do you implement auditing with interceptors?
- Q95: What is the difference between interceptors and events?
- Q96: How do you handle connection interception?

</details>

---
## Q90: What are interceptors in EF Core?

### Short Interview Answer

Interceptors are classes that hook into EF Core's operation pipeline. They can intercept connection creation, command execution, save changes, and transaction events. Implement ISaveChangesInterceptor, ICommandInterceptor, IConnectionInterceptor, or ITransactionInterceptor. Interceptors follow a middleware-like pattern with Xxxed (after) and Xxxing (before) methods.

### Available Interceptor Interfaces

| Interface | What It Intercepts |
|-----------|-------------------|
| ISaveChangesInterceptor | SaveChanges calls |
| ICommandInterceptor | SQL command execution |
| IConnectionInterceptor | Connection open/close |
| ITransactionInterceptor | Transaction begin/commit/rollback |

---

## Q91: What is SaveChangesInterceptor and how do you use it?

### Short Interview Answer

ISaveChangesInterceptor hooks into the SaveChanges pipeline. Override SavingAsync (before save) to modify entities or log operations, and SavedAsync (after save) to post-process (e.g., update search index). Use for cross-cutting concerns like auditing, validation, or cache invalidation.

### C# Example

`csharp
public class AuditSaveInterceptor : ISaveChangesInterceptor
{
    public async ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData, InterceptionResult<int> result,
        CancellationToken ct = default)
    {
        var context = eventData.Context;
        var entries = context.ChangeTracker.Entries()
            .Where(e => e.State is EntityState.Added or EntityState.Modified or EntityState.Deleted);

        foreach (var entry in entries)
        {
            entry.Property("LastModifiedAt").CurrentValue = DateTime.UtcNow;
            entry.Property("LastModifiedBy").CurrentValue = _currentUser;
        }

        return result; // Continue with save
    }
}
`

---

## Q92: What is ICommandInterceptor and when to use it?

### Short Interview Answer

ICommandInterceptor intercepts SQL command execution. Override CommandCreating/CommandCreated (before command), CommandExecuting (before execution), and CommandExecuted (after execution). Use for logging queries, measuring execution time, modifying SQL commands, or implementing read/write splitting.

### C# Example

`csharp
public class SlowQueryInterceptor : ICommandInterceptor
{
    private static readonly TimeSpan Threshold = TimeSpan.FromSeconds(5);

    public async ValueTask<InterceptionResult> CommandExecutingAsync(
        CommandEndEventData eventData, InterceptionResult<DbCommand> result,
        CancellationToken ct = default)
    {
        eventData.Command.CommandTimeout = 60; // Extend timeout for slow queries
        return result;
    }

    public async ValueTask CommandExecutedAsync(
        CommandEndEventData eventData, InterceptionResult<DbDataReader> result,
        CancellationToken ct = default)
    {
        if (eventData.Duration > Threshold)
        {
            Log.Warning("Slow query ({Duration}ms): {Command}",
                eventData.Duration.TotalMilliseconds,
                eventData.Command.CommandText);
        }
    }
}
`

---

## Q93: How do you register interceptors?

### Short Interview Answer

Register interceptors via AddInterceptors() on the DbContextOptionsBuilder. Interceptors can be singleton services or instances. For DI-aware interceptors, register them as services and use the generic overload.

### C# Example

`csharp
// Direct instance registration
options.UseSqlServer(connectionString)
    .AddInterceptors(new AuditSaveInterceptor(), new SlowQueryInterceptor());

// DI-aware registration (interceptor has dependencies)
builder.Services.AddSingleton<AuditSaveInterceptor>();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString)
        .AddInterceptors(sp => sp.GetRequiredService<AuditSaveInterceptor>()));
`

---

## Q94: How do you implement auditing with interceptors?

### Short Interview Answer

In a SaveChangesInterceptor.SavingAsync, inspect the ChangeTracker entries. For each modified/added entity, set audit properties (CreatedAt, CreatedBy, LastModifiedAt, LastModifiedBy). Use shadow properties to avoid polluting domain entities.

### C# Example

`csharp
public class AuditInterceptor : SaveChangesInterceptor
{
    private readonly ICurrentUserService _user;

    public AuditInterceptor(ICurrentUserService user) => _user = user;

    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData, InterceptionResult<int> result,
        CancellationToken ct = default)
    {
        var now = DateTime.UtcNow;
        var userId = _user.UserId;

        foreach (var entry in eventData.Context!.ChangeTracker.Entries())
        {
            if (entry.State == EntityState.Added)
            {
                entry.Property("CreatedAt").CurrentValue = now;
                entry.Property("CreatedBy").CurrentValue = userId;
            }
            if (entry.State is EntityState.Modified or EntityState.Added)
            {
                entry.Property("LastModifiedAt").CurrentValue = now;
                entry.Property("LastModifiedBy").CurrentValue = userId;
            }
        }

        return base.SavingChangesAsync(eventData, result, ct);
    }
}
`

---

## Q95: What is the difference between interceptors and events?

### Short Interview Answer

Interceptors are synchronous or async middleware that can **prevent** operations (return InterceptionResult.Suppress). Events (like ChangeTracker.StateChanged) are notifications only — they cannot cancel operations. Interceptors also run in a specific pipeline order; events fire after the fact.

---

## Q96: How do you handle connection interception?

### Short Interview Answer

Implement IConnectionInterceptor to intercept Open/Close calls. Use for: logging connection events, implementing read/write splitting (redirect reads to replicas), or modifying connection strings at runtime.

### C# Example

`csharp
public class ReadWriteSplitInterceptor : IConnectionInterceptor
{
    private readonly string _readOnlyConnection;

    public async ValueTask<InterceptionResult> ConnectionOpeningAsync(
        ConnectionEventData eventData, InterceptionResult result,
        CancellationToken ct = default)
    {
        var command = eventData.Context?.Database?.CurrentTransaction == null;
        if (command) // No active transaction -> read operation
        {
            eventData.Connection.ConnectionString = _readOnlyConnection;
        }
        return result;
    }
}
`

---

# 14. Value Conversions

<details>
<summary><strong>7 Questions — ValueConverter, Enum Conversion, Custom Conversions</strong></summary>

- Q97: What are value conversions in EF Core?
- Q98: How do you convert enums to strings in the database?
- Q99: How do you create custom value converters?
- Q100: What is the built-in value conversion support?
- Q101: How do value conversions affect querying?
- Q102: What are the limitations of value converters?
- Q103: How do you convert complex types with value converters?

</details>

---
## Q97: What are value conversions in EF Core?

### Short Interview Answer

Value converters allow mapping between a property type and a database column type. For example, storing a List<string> as a JSON string, or an enum as a string. Implement ValueConverter<TSource, TTarget> with ConvertToProvider and ConvertFromProvider expressions.

### C# Example

`csharp
modelBuilder.Entity<Order>()
    .Property(o => o.Tags)
    .HasConversion(
        v => string.Join(',', v),          // To DB: List -> comma-separated string
        v => v.Split(',', StringSplitOptions.None).ToList() // From DB: string -> List
    );
`

---

## Q98: How do you convert enums to strings in the database?

### Short Interview Answer

Use HasConversion<string>() on the enum property. EF Core will store enum values as their string names (e.g., "Active", "Inactive") instead of integers. This improves readability but uses more storage.

### C# Example

`csharp
public enum OrderStatus { Pending, Processing, Shipped, Delivered }

public class Order
{
    public int Id { get; set; }
    public OrderStatus Status { get; set; }
}

modelBuilder.Entity<Order>()
    .Property(o => o.Status)
    .HasConversion<string>()
    .HasMaxLength(50);
`

### SQL Example

`sql
-- Without conversion: Status int NOT NULL
-- With string conversion: Status nvarchar(50) NOT NULL

SELECT * FROM [Orders] WHERE [Status] = N'Shipped'
`

---

## Q99: How do you create custom value converters?

### Short Interview Answer

Create a class extending ValueConverter<TSource, TTarget>. Override ConvertToProvider (model -> DB) and ConvertFromProvider (DB -> model). Optionally use ConverterMappingHints for column type/facets. Register via HasConversion with the converter instance.

### C# Example

`csharp
public class DateOnlyConverter : ValueConverter<DateOnly, DateTime>
{
    public DateOnlyConverter()
        : base(
            d => d.ToDateTime(TimeOnly.MinValue),  // DateOnly -> DateTime
            dt => DateOnly.FromDateTime(dt))        // DateTime -> DateOnly
    {}
}

// Usage
modelBuilder.Entity<Person>()
    .Property(p => p.BirthDate)
    .HasConversion<DateOnlyConverter>();
`

---

## Q100: What is the built-in value conversion support?

### Short Interview Answer

EF Core has built-in conversions for: ool to int/string, enums to string/int, TimeOnly/DateOnly (EF Core 6+), Uri to string, and IPAddress to string. Use HasConversion<string>() without a custom converter for supported types.

---

## Q101: How do value conversions affect querying?

### Short Interview Answer

Value converters translate in LINQ as well. EF Core knows the conversion mapping, so querying against the property works correctly. However, complex converters (e.g., List<string> to JSON) may prevent certain query translations, causing client evaluation.

### C# Example

`csharp
// This translates correctly with a simple converter
var shippedOrders = await db.Orders
    .Where(o => o.Status == OrderStatus.Shipped) // Translates to: WHERE Status = 'Shipped'
    .ToListAsync();

// Complex converter may cause client evaluation
var ordersWithTag = await db.Orders
    .Where(o => o.Tags.Contains("urgent")) // May not translate to SQL
    .ToListAsync();
`

---

## Q102: What are the limitations of value converters?

### Short Interview Answer

Limitations: converters cannot reference the DbContext or other entities; null handling must be explicit; some conversions prevent index usage (e.g., JSON string columns); query translation may fail for complex conversions; value comparers must be configured for proper change detection.

---

## Q103: How do you convert complex types with value converters?

### Short Interview Answer

For complex types (nested objects, collections), serialize to JSON string in the converter. Use System.Text.Json for serialization. Combine with value comparers for change detection. For EF Core 10+, prefer native JSON columns over manual converters.

### C# Example

`csharp
public class Address { public string Street { get; set; } public string City { get; set; } }

public class Customer
{
    public int Id { get; set; }
    public Address ShippingAddress { get; set; }
}

var addressConverter = new ValueConverter<Address, string>(
    v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
    v => JsonSerializer.Deserialize<Address>(v, (JsonSerializerOptions?)null) ?? new Address()
);

var addressComparer = new ValueComparer<Address>(
    (a1, a2) => a1.Street == a2.Street && a1.City == a2.City,
    a => HashCode.Combine(a.Street, a.City),
    a => new Address { Street = a.Street, City = a.City }
);

modelBuilder.Entity<Customer>()
    .Property(c => c.ShippingAddress)
    .HasConversion(addressConverter)
    .Metadata.SetValueComparer(addressComparer);
`

---

# 15. JSON Columns

<details>
<summary><strong>7 Questions — Native JSON Support, Querying, Indexing</strong></summary>

- Q104: How does EF Core support JSON columns?
- Q105: How do you query into JSON columns?
- Q106: How do you index JSON columns?
- Q107: What are owned entities vs JSON columns?
- Q108: How do JSON columns handle change tracking?
- Q109: What providers support JSON columns?
- Q110: What is the future of JSON in EF Core?

</details>

---
## Q104: How does EF Core support JSON columns?

### Short Interview Answer

Since EF Core 10, JSON column support is native via .ToJson() on owned entities. EF Core maps the owned entity graph to a JSON column in the database. SQL Server uses OPENJSON/JSON_VALUE, PostgreSQL uses ->/->> operators, and Cosmos DB uses native JSON.

### C# Example

`csharp
public class Order
{
    public int Id { get; set; }
    public ShippingInfo Shipping { get; set; }
    public List<OrderItem> Items { get; set; }
}

public class ShippingInfo
{
    public string Address { get; set; }
    public string City { get; set; }
    public string Carrier { get; set; }
}

public class OrderItem
{
    public string ProductName { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}

modelBuilder.Entity<Order>(entity =>
{
    entity.OwnsOne(o => o.Shipping, sa => sa.ToJson());
    entity.OwnsMany(o => o.Items, ia => ia.ToJson());
});
`

### SQL Example

`sql
CREATE TABLE [Orders] (
    [Id] int NOT NULL IDENTITY,
    [Shipping] nvarchar(max) NOT NULL,  -- JSON: {"Address":"...","City":"...","Carrier":"..."}
    [Items] nvarchar(max) NOT NULL,     -- JSON: [{"ProductName":"...","Quantity":1,"Price":10.99}]
    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])
);
`

---

## Q105: How do you query into JSON columns?

### Short Interview Answer

Use EF.JsonValue() to extract specific values from JSON columns in LINQ queries. EF Core translates these to provider-specific JSON path expressions (SQL Server: JSON_VALUE, PostgreSQL: ->>).

### C# Example

`csharp
// Query property inside JSON
var seattleOrders = await db.Orders
    .Where(o => EF.JsonValue(o.Shipping, "City") == "Seattle")
    .ToListAsync();

// Query nested JSON array item
var expressOrders = await db.Orders
    .Where(o => EF.JsonValue(o.Shipping, "Carrier") == "Express")
    .ToListAsync();
`

### SQL Example

`sql
-- SQL Server translation
SELECT * FROM [Orders]
WHERE JSON_VALUE([Shipping], '$.City') = N'Seattle'

-- PostgreSQL translation
SELECT * FROM "Orders"
WHERE "Shipping"->>'City' = 'Seattle'
`

---

## Q106: How do you index JSON columns?

### Short Interview Answer

JSON columns cannot be indexed directly in most databases. Instead, create computed columns that extract JSON values and index those, or use JSON indexes (PostgreSQL: GIN indexes on JSONB, SQL Server: non-persisted computed columns with indexes).

### SQL Example

`sql
-- SQL Server: computed column + index
ALTER TABLE [Orders] ADD [ShippingCity] AS JSON_VALUE([Shipping], '$.City');
CREATE INDEX [IX_Orders_ShippingCity] ON [Orders]([ShippingCity]);

-- PostgreSQL: GIN index on JSONB column
CREATE INDEX [IX_Orders_Shipping] ON [Orders] USING GIN ([Shipping]);
`

---

## Q107: What are owned entities vs JSON columns?

### Short Interview Answer

Owned entities can be stored as separate columns or as JSON columns (EF Core 10+). The choice depends on: JSON is better for deeply nested/sparse data; separate columns are better for indexing, query performance, and referential integrity. EF Core 10 allows choosing via .ToJson().

| Aspect | Separate Columns | JSON Column |
|--------|-----------------|-------------|
| Queryable | Yes (direct) | Via JSON path |
| Indexable | Yes | Limited |
| Schema | Fixed | Flexible |
| Nested | Complex joins | Natural JSON |
| Performance | Faster queries | Slower JSON parsing |

---

## Q108: How do JSON columns handle change tracking?

### Short Interview Answer

EF Core tracks changes to JSON columns by comparing the serialized JSON string. The entire JSON column is treated as a single value — any change to any nested property marks the whole column as modified, generating an UPDATE for the entire JSON.

### Performance Note

Because the entire JSON is updated on any change, large JSON documents cause more data to be sent to the database. For high-frequency updates, prefer separate columns for frequently changed fields.

---

## Q109: What providers support JSON columns?

### Short Interview Answer

SQL Server (2016+ with OPENJSON), PostgreSQL (with jsonb native support), SQLite (via JSON1 extension), and Cosmos DB (native JSON). Each provider has different JSON capabilities and query translation.

---

## Q110: What is the future of JSON in EF Core?

### Short Interview Answer

Future directions include: better partial update support (only send changed JSON fragments), deeper query translation for nested JSON, JSON SET operations for updates, and improved indexing strategies. EF Core is moving toward treating JSON as a first-class data type.

---

# 🎯 Interview Tips

## Quick Reference: Anti-Patterns

| Anti-Pattern | Why It's Bad | Fix |
|-------------|-------------|-----|
| Singleton DbContext | Thread safety, memory leak, stale data | Scoped or factory |
| N+1 queries | Performance disaster | Use Include or Select |
| Tracking in read-only | Memory waste | Use AsNoTracking |
| ToList before filter | Client-side evaluation | Chain filters before ToList |
| String concatenation in SQL | SQL injection | Use parameterized queries |
| Auto-migration in production | Schema changes during traffic | Use scripts |
| No concurrency handling | Lost updates | Add RowVersion |

## Top 10 Most Common Interview Questions

1. What is the N+1 problem and how do you solve it?
2. Explain IQueryable vs IEnumerable
3. How does DbContext pooling work?
4. What are global query filters?
5. How do you handle concurrency?
6. What is the difference between AddDbContext and AddDbContextFactory?
7. Explain TPH vs TPT vs TPC
8. How does SaveChanges work internally?
9. What are value converters?
10. How do JSON columns work in EF Core 10?

---

# 📖 Further Reading

- [EF Core Documentation](https://learn.microsoft.com/ef/core/)
- [EF Core 10 Breaking Changes](https://learn.microsoft.com/ef/core/what-is-new/)
- [EF Core Performance Tips](https://learn.microsoft.com/ef/core/performance/)
- [Jeremy Likness EF Core Blog](https://blog.jeremylikness.com/)
- [Andrew Lock's EF Core Series](https://andrewlock.net/series/using-ef-core/)

---

## 📊 Progress Tracker

`
██████████████████████████████████████████████████ 110/110
`

---

*Volume 3 of 16 — Entity Framework Core Interview Preparation Guide*
*Generated for 2026 interviews. Master these 110 questions to ace any .NET data access interview.*

**Good luck! 🚀**
