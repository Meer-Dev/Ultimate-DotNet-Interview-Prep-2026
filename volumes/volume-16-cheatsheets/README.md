# 🏆 VOLUME 16: ULTIMATE INTERVIEW CHEATSHEETS

> **The Final Volume — Your Last-Minute FAANG & Senior-Level Interview Bible**

[![GitHub](https://img.shields.io/badge/language-C%23%20%7C%20SQL%20%7C%20Angular%20%7C%20System%20Design-blue)](https://)
[![FAANG](https://img.shields.io/badge/FAANG-Prep-red)](https://)
[![Senior](https://img.shields.io/badge/Senior%20%2B%20Staff-Level-gold)](https://)
[![2026](https://img.shields.io/badge/Year-2026-brightgreen)](https://)
[![Pages](https://img.shields.io/badge/Pages-100%2B-9cf)](https://)
[![Sections](https://img.shields.io/badge/Sections-12-ff69b4)](https://)

---

## 📖 Table of Contents

- [Section 1: 5-Minute Quick Reference](#section-1-5-minute-quick-reference)
- [Section 2: 15-Minute Revision by Subject](#section-2-15-minute-revision-by-subject)
- [Section 3: One-Page Summaries](#section-3-one-page-summaries)
- [Section 4: Most Important Interview Questions](#section-4-most-important-interview-questions)
- [Section 5: Common Traps](#section-5-common-traps)
- [Section 6: Senior-Level Questions](#section-6-senior-level-questions)
- [Section 7: Mnemonics & Memory Aids](#section-7-mnemonics--memory-aids)
- [Section 8: Behavioral Questions (STAR Method)](#section-8-behavioral-questions-star-method)
- [Section 9: Mind Maps](#section-9-mind-maps)
- [Section 10: Formula Sheet](#section-10-formula-sheet)
- [Section 11: Company-Specific Interview Guides](#section-11-company-specific-interview-guides)
- [Section 12: Last-Minute Checklist](#section-12-last-minute-checklist)

---

## Section 1: 5-Minute Quick Reference

### C# Quick Facts

| Concept | Key Point |
|---------|-----------|
| **Value vs Reference** | `struct` vs `class`, stack vs heap |
| **String** | Immutable, `StringBuilder` for concat |
| **Async/await** | State machine, `IAsyncStateMachine` |
| **LINQ** | Deferred execution, `IQueryable` vs `IEnumerable` |
| **GC** | Generations 0/1/2, LOH, compacting |
| **Lock** | `Monitor.Enter/Exit`, prefer `lock` statement |
| **Record** | Value-based equality, `with` expressions |
| **Span\<T\>** | Stack-allocated, `ref struct`, no heap alloc |
| **Pattern Matching** | `is`, `switch`, property/positional/relational |
| **Nullable ref types** | `string?` vs `string`, flow analysis |
| **Primary constructors** | C# 12, positional params on class/struct |
| **Collection expressions** | `[1, 2, 3]` syntax, C# 12 |
| **ref struct** | Stack-only, `Span\<T\>`, `ReadOnlySpan\<T\>` |
| **Default interface methods** | C# 8, traits-like behavior |
| **Top-level statements** | C# 9+, `Program.cs` minimal |

### .NET Quick Facts

| Concept | Key Point |
|---------|-----------|
| **CLR** | JIT, GC, type safety, exception handling |
| **DI Lifetimes** | Singleton (1 instance), Scoped (per request), Transient (per injection) |
| **Middleware** | Order matters, `app.Run`, `app.Use`, `app.Map` |
| **Minimal API** | `MapGet`/`Post`, filters, endpoint groups |
| **Native AOT** | No JIT, smaller, faster startup, limited reflection |
| **Kestrel** | Cross-platform web server, used by default |
| **YARP** | Reverse proxy library |
| **gRPC** | HTTP/2, Protobuf, bidirectional streaming |
| **SignalR** | WebSocket abstraction, real-time |
| **Polly** | Retry, circuit breaker, timeout policies |
| **Health Checks** | `/healthz`, `/readyz` endpoints |
| **OpenAPI** | Swagger, `Microsoft.AspNetCore.OpenApi` |
| **Problem Details** | RFC 7807 standard error responses |
| **Rate Limiting** | Built-in since .NET 7, `AddRateLimiter` |
| **Output Caching** | Server-side response caching, .NET 7+ |

### SQL Quick Facts

| Concept | Key Point |
|---------|-----------|
| **JOIN types** | INNER, LEFT, RIGHT, FULL, CROSS |
| **Window Functions** | `OVER(PARTITION BY ... ORDER BY ...)` |
| **Index** | Clustered (data sorted), Nonclustered (pointer) |
| **Isolation Levels** | READ UNCOMMITTED -> SERIALIZABLE |
| **Normalization** | 1NF-5NF, usually 3NF is enough |
| **CTE** | `WITH` clause, recursive queries |
| **Temp Tables vs CTE** | Temp tables have stats, CTEs do not |
| **Query Plan** | `EXPLAIN ANALYZE`, look for scans vs seeks |
| **Deadlock** | Cycle of locks, choose deadlock victim |
| **Covering Index** | Includes all columns for a query |
| **Fill Factor** | Page fill %, 80% for heavy writes |
| **Partitioning** | Horizontal splits by range/list/hash |
| **TRUNCATE vs DELETE** | TRUNCATE is minimally logged, no per-row triggers |
| **MERGE** | Upsert: INSERT/UPDATE/DELETE in one statement |
| **NOLOCK hint** | Dirty reads, use `READ COMMITTED SNAPSHOT` instead |

### System Design Quick Facts

| Concept | Key Numbers |
|---------|-------------|
| **QPS for popular sites** | ~100-100K req/s |
| **Latency numbers** | L1: 0.5ns, RAM: 100ns, SSD: 16us, Disk: 2ms |
| **Cache** | Redis: 100K ops/s per node |
| **DB writes/second** | SQL: ~1-5K, NoSQL: ~10-100K |
| **CDN** | ~50ms saved per request |
| **Load Balancer** | Round-robin, least connections, IP hash |
| **Consistent Hashing** | Minimal reshuffling on node add/remove |
| **Database per Service** | Microservices pattern |
| **Saga Pattern** | Choreography vs Orchestration |
| **Eventual Consistency** | BASE vs ACID |
| **Read Replicas** | Scale reads, lag tolerant |
| **Sharding** | Horizontal partitioning by key |
| **CQRS** | Separate read/write models |
| **Blob Storage** | For media/files, not structured data |
| **WebSockets** | Persistent bidirectional connection |

---

## Section 2: 15-Minute Revision by Subject

### C# Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Class vs Struct** | Reference vs value type | `class` on heap, `struct` on stack/inline |
| 2 | **GC Generations** | Gen 0 (short-lived), Gen 1 (survivor), Gen 2 (long-lived) | LOH >= 85KB, Gen 2 |
| 3 | **Async State Machine** | Compiler generates `IAsyncStateMachine` | `MoveNext()` is called on each await |
| 4 | **Boxing/Unboxing** | Value -> Object (heap alloc) | Avoid in hot paths, use generics |
| 5 | **Delegates vs Events** | Delegate: type-safe function pointer; Event: delegate wrapper | Events cannot be invoked outside class |
| 6 | **IEnumerable vs IQueryable** | In-memory vs expression tree | IEnumerable: LINQ to Objects; IQueryable: LINQ to SQL |
| 7 | **IDisposable** | Deterministic cleanup | Use `using` statement |
| 8 | **`lock` statement** | `Monitor.Enter`/`Exit` in try/finally | Avoid locking on `this` or `string` |
| 9 | **StringBuilder** | Mutable string buffer | Use for > 3-5 concatenations |
| 10 | **Records** | Value-based equality, `with` expressions | `record class` (ref), `record struct` (value) |
| 11 | **Span\<T\>** | Ref struct, stack-only | No heap allocation, slicing |
| 12 | **Memory\<T\>** | Heap-safe version of Span | Can be used in async methods |
| 13 | **Pattern Matching** | `is`, `switch`, `and`, `or`, `not` | Exhaustive matching with `_` discard |
| 14 | **Tuples** | ValueTuple, named members | `(int x, int y) point` |
| 15 | **Anonymous types** | `new { Name = "x" }` | Immutable, internal scope |
| 16 | **LINQ Deferred** | Not executed until enumerated | `Where`, `Select` are lazy; `ToList`, `Count` eager |
| 17 | **Expression Trees** | Code as data (`Expression\<T\>`) | Used by EF Core, cannot use all C# features |
| 18 | **Partial Methods** | Declaration + optional implementation | C# 9: private, returns void |
| 19 | **Index/Range** | `^1` (last), `..` (range) | `array[^1]`, `array[1..^1]` |
| 20 | **Function pointers** | `delegate*\<int, int\>` | Unmanaged, unsafe context |
| 21 | **Ref returns** | Return reference to variable | `ref return ref _field` |
| 22 | **Init-only setters** | `init` accessor | Object initializer only, C# 9 |
| 23 | **Required members** | `required` keyword, C# 11 | Constructor or initializer must set |
| 24 | **File-scoped types** | `file class` | Type visible only in current file, C# 11 |
| 25 | **Inline arrays** | Fixed-size buffers, C# 12 | `[InlineArray(10)] struct Buffer` |
| 26 | **Interceptors** | Replace method calls at compile time, C# 12 | Experimental, source generators |
| 27 | **Frozen collections** | `FrozenSet`/`FrozenDictionary`, .NET 8 | Immutable, optimized for reads |
| 28 | **Random.Shared** | Thread-safe shared Random, .NET 6+ | No need to instantiate |
| 29 | **TimeProvider** | Abstract time, .NET 8 | Testable time for unit tests |
| 30 | **UTF8String literals** | `"hello"u8` | Returns `ReadOnlySpan\<byte\>` |

### .NET / ASP.NET Core Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Program.cs** | Top-level statements, `builder` pattern | `WebApplication.CreateBuilder(args)` |
| 2 | **DI Container** | Built-in, `AddScoped/Transient/Singleton` | Controllers are resolved via DI |
| 3 | **Middleware Pipeline** | Request delegates in sequence | `app.Use` (next), `app.Run` (terminal) |
| 4 | **Startup** (pre-.NET 6) | `ConfigureServices` + `Configure` | Still works in .NET 6+ |
| 5 | **Configuration** | `appsettings.json`, env vars, secrets | Last wins (layered) |
| 6 | **Options Pattern** | `IOptions\<T\>`, `IOptionsSnapshot\<T\>` | Singleton vs Scoped binding |
| 7 | **JWT Auth** | `AddAuthentication().AddJwtBearer()` | Bearer token in Authorization header |
| 8 | **Authorization** | Policies, roles, claims | `[Authorize(Roles = "admin")]` |
| 9 | **Model Binding** | From route, query, body, form | `[FromRoute]`, `[FromQuery]`, `[FromBody]` |
| 10 | **Validation** | `[Required]`, `[StringLength]`, FluentValidation | `ModelState.IsValid` |
| 11 | **Exception Handling** | `app.UseExceptionHandler()` | Dev: `UseDeveloperExceptionPage()` |
| 12 | **Logging** | `ILogger\<T\>`, structured | Serilog, NLog sinks |
| 13 | **Host Filters** | `IStartupFilter` | Run code before/after middleware |
| 14 | **Background Tasks** | `IHostedService`, `BackgroundService` | `ExecuteAsync(CancellationToken)` |
| 15 | **gRPC** | Protobuf, HTTP/2, streaming | `AddGrpc()` + `MapGrpcService\<T\>()` |
| 16 | **SignalR** | Real-time, WebSocket fallback | `Hub\<T\>`, `Clients.All.SendAsync()` |
| 17 | **Minimal APIs** | No controllers, lambda per route | `app.MapGet("/", () => "Hello")` |
| 18 | **FluentValidation** | Rule-based validation | `RuleFor(x => x.Name).NotEmpty()` |
| 19 | **AutoMapper** | Object-to-object mapping | `CreateMap\<A, B\>()` then `_mapper.Map\<B\>(a)` |
| 20 | **MediatR** | CQRS, mediator pattern | `Send(IRequest\<T\>)`, `Publish(INotification)` |
| 21 | **Polly** | Resilience: retry, circuit breaker | `AddPolicyHandler(RetryPolicy)` |
| 22 | **Health Checks** | `/healthz`, `/readyz` | `AddHealthChecks()` + `MapHealthChecks()` |
| 23 | **Rate Limiting** | .NET 7+, `AddRateLimiter` | Token bucket, sliding window, concurrency |
| 24 | **Output Caching** | `[OutputCache]`, `.CacheOutput()` | Vary by query/header |
| 25 | **Response Caching** | `[ResponseCache]` | Browser-level caching |
| 26 | **Distributed Cache** | Redis, SQL Server | `IDistributedCache` |
| 27 | **SignalR Backplane** | Redis/Service Bus for scale-out | Sticky sessions or backplane |
| 28 | **YARP (Reverse Proxy)** | Config-based proxy routing | `AddReverseProxy()` + `LoadFromConfig()` |
| 29 | **OpenTelemetry** | Distributed tracing, metrics | `AddOpenTelemetry()` |
| 30 | **Native AOT** | No JIT, faster startup, smaller | Publish with `PublishAot=true` |

### EF Core Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **DbContext** | Unit of work + repository | `AddDbContext\<T\>()` |
| 2 | **DbSet\<T\>** | Entity collection | Represents table |
| 3 | **Migrations** | Code-first schema changes | `dotnet ef migrations add` |
| 4 | **Change Tracker** | Tracks entity states: Added, Modified, Deleted, Unchanged | `dbContext.Entry(entity).State` |
| 5 | **Lazy Loading** | Proxies, `virtual` navigation | Disabled by default, use `Include()` |
| 6 | **Eager Loading** | `.Include(x => x.Nav)` | Avoid N+1 |
| 7 | **Explicit Loading** | `.Collection(x => x.Nav).Load()` | On-demand |
| 8 | **N+1 Problem** | Lazy load in loop = query per iteration | Always eager load when looping |
| 9 | **AsNoTracking** | No change tracking, faster reads | `QuerySplittingBehavior` |
| 10 | **Raw SQL** | `FromSqlRaw`, `ExecuteSqlRaw` | Use parameters to avoid SQL injection |
| 11 | **Shadow Properties** | Fields not in entity class | Created/modified timestamps |
| 12 | **Concurrency Tokens** | `[ConcurrencyCheck]`, `[Timestamp]` | Optimistic concurrency |
| 13 | **Fluent API** | `modelBuilder.Entity\<T\>()` | More control than data annotations |
| 14 | **TPH, TPT, TPC** | Inheritance mapping | TPH: one table (default), TPT: one per type, TPC: one per class |
| 15 | **Owned Entities** | `OwnsOne`, `OwnsMany` | Value objects in DDD |
| 16 | **Many-to-Many** | .NET 5+: implicit join table | `HasMany(x => x.A).WithMany(x => x.B)` |
| 17 | **Global Query Filters** | `HasQueryFilter(x => !x.IsDeleted)` | Soft delete, multi-tenant |
| 18 | **Interceptors** | `SaveChangesInterceptor`, `IDbCommandInterceptor` | Audit trails |
| 19 | **Bulk Operations** | `ExecuteUpdate`/`ExecuteDelete` (.NET 7+) | No need for external libraries |
| 20 | **Split Queries** | `.AsSplitQuery()` | One query per include, avoids cartesian explosion |
| 21 | **Compiled Queries** | `EF.CompileAsyncQuery` | Cache query plan |
| 22 | **Temporal Tables** | SQL Server temporal tables EF Core 6+ | Track history automatically |
| 23 | **JSON Columns** | EF Core 7+, SQL Server/PostgreSQL | Map owned entity to JSON column |
| 24 | **Value Conversion** | `HasConversion()` | Store enum as string |
| 25 | **Seed Data** | `modelBuilder.Entity\<T\>().HasData()` | In migration or `EnsureCreated` |

### SQL Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Clustered Index** | Defines physical sort order | Only 1 per table |
| 2 | **Nonclustered Index** | Pointer to data | Can include columns (`INCLUDE`) |
| 3 | **Index Seek vs Scan** | Seek: efficient row retrieval | Scan: reads entire table |
| 4 | **Covering Index** | All columns in index | No key lookup needed |
| 5 | **Filtered Index** | `WHERE` condition on index | Smaller, faster for subsets |
| 6 | **Columnstore Index** | Columnar storage for analytics | High compression, fast aggregation |
| 7 | **Execution Plan** | Graphical/text plan | Look for: scans, spills, key lookups |
| 8 | **Statistics** | Histogram of data distribution | Auto-update or manual `UPDATE STATISTICS` |
| 9 | **Parameter Sniffing** | Plan cached for first parameter | `RECOMPILE` or `OPTIMIZE FOR UNKNOWN` |
| 10 | **Deadlock** | Transaction A waits on B, B waits on A | Deadlock victim (lower-cost transaction) |
| 11 | **Isolation Levels** | READ UNCOMMITTED -> SERIALIZABLE | Higher isolation = less concurrency |
| 12 | **NOLOCK Hint** | Dirty reads, non-repeatable reads | Prefer `READ COMMITTED SNAPSHOT` |
| 13 | **Transaction Log** | Records all modifications | Log growth, VLF management |
| 14 | **ACID** | Atomicity, Consistency, Isolation, Durability | Foundation of transactions |
| 15 | **Normalization** | 1NF (atomic), 2NF (partial key), 3NF (transitive), BCNF | Usually stop at 3NF |
| 16 | **Denormalization** | Redundancy for read performance | Use in reporting/data warehouse |
| 17 | **CTE** | `WITH` clause, temp result set | Recursive CTE: `UNION ALL` self-reference |
| 18 | **Window Functions** | `ROW_NUMBER()`, `RANK()`, `LEAD()`, `LAG()`, `SUM() OVER(...)` | `OVER(PARTITION BY ... ORDER BY ...)` |
| 19 | **PIVOT/UNPIVOT** | Rows -> Columns / Columns -> Rows | Use `MAX(CASE...)` as alternative |
| 20 | **Temp Tables (#)** | Local temporary, session-scoped | Has statistics, can index |
| 21 | **Table Variable (@)** | Batch-scoped, no statistics | Good for small data |
| 22 | **MERGE** | Upsert (INSERT/UPDATE/DELETE) | Complex, known bugs - prefer separate statements |
| 23 | **SARGability** | Query can use index (Search ARGument-able) | `WHERE YEAR(date) = 2024` is NOT SARGable |
| 24 | **Index Fragmentation** | Page splits, logical vs physical order | Rebuild (>30%), Reorganize (5-30%) |
| 25 | **Query Store** | Execution plan history | Plan forcing, regressed queries |
| 26 | **Always Encrypted** | Column-level encryption | Client-side key, server never sees data |
| 27 | **Dynamic Data Masking** | Mask sensitive data | `MASKED WITH (FUNCTION = 'partial(...)')` |
| 28 | **Row-Level Security** | Filter predicates per user | `CREATE SECURITY POLICY` |
| 29 | **Change Tracking** | Detect changes (version-based) | Lighter than CDC |
| 30 | **CDC** | Change Data Capture | Log reader captures changes |

### Angular Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Component** | Building block: template + class + styles | `@Component({selector, template, styles})` |
| 2 | **Module** | `NgModule` organizing container | `declarations`, `imports`, `providers`, `bootstrap` |
| 3 | **Standalone Components** | No NgModule needed, Angular 14+ | `standalone: true`, `imports: [...]` |
| 4 | **Data Binding** | `{{ }}`, `[property]`, `(event)`, `[(ngModel)]` | One-way: `[ ]` / `( )`, Two-way: `[()]` |
| 5 | **Directives** | `*ngIf`, `*ngFor`, `[ngClass]`, `[ngStyle]` | Structural (`*`) vs Attribute |
| 6 | **Pipes** | Transform output: `{{ date | date:'short' }}` | Pure (no mutation) vs Impure |
| 7 | **Services** | Singleton logic, injected via DI | `@Injectable({providedIn: 'root'})` |
| 8 | **DI System** | Hierarchical injectors | Module -> Component -> Element |
| 9 | **Routing** | Path -> Component mapping | `RouterModule.forRoot(routes)` |
| 10 | **Lazy Loading** | `loadChildren: () => import(...)` | Split bundles per route |
| 11 | **Guards** | `CanActivate`, `CanDeactivate`, `Resolve` | Route protection |
| 12 | **Interceptors** | `HttpInterceptor` | Add JWT, logging, error handling |
| 13 | **RxJS Observables** | `Observable`, `Subject`, `BehaviorSubject` | `pipe()`, `map()`, `filter()`, `switchMap()` |
| 14 | **Signals** | Angular 16+, reactive primitives | `signal()`, `computed()`, `effect()` |
| 15 | **Reactive Forms** | Model-driven forms | `FormGroup`, `FormControl`, validators |
| 16 | **Template Forms** | `ngModel`-based | Simpler but less scalable |
| 17 | **Change Detection** | Zone.js, `OnPush` strategy | `ChangeDetectionStrategy.OnPush` |
| 18 | **TrackBy** | `*ngFor trackBy: myTrack` | Performance: prevent re-render all |
| 19 | **ViewChild / ContentChild** | Query child components/elements | `@ViewChild(MyComponent)` |
| 20 | **ng-template / ng-container** | Structural templates | `<ng-template>` for structural, `<ng-container>` for grouping |
| 21 | **Dependency Injection Tokens** | `InjectionToken\<T\>` | Non-class dependencies |
| 22 | **Content Projection** | `<ng-content>` | Multi-slot: `select="[slot]"` |
| 23 | **Lifecycle Hooks** | `ngOnInit`, `ngOnChanges`, `ngOnDestroy` | Avoid heavy work in `ngOnChanges` |
| 24 | **Route Resolvers** | Pre-fetch data before navigation | `resolve` in route config |
| 25 | **State Management** | NgRx, Akita, NgXs | Store, Actions, Reducers, Effects |
| 26 | **NgRx** | Redux pattern for Angular | `Action` -> `Reducer` -> `Store` -> `Selector` |
| 27 | **SSR (Angular Universal)** | Server-side rendering | Better SEO, faster FCP |
| 28 | **Hydration** | Angular 16+, non-destructive SSR | Reuse server-rendered DOM |
| 29 | **Deferrable Views** | `@defer`, `@placeholder`, `@loading` | Lazy load component chunks |
| 30 | **Control Flow** | `@if`, `@for`, `@switch` (Angular 17+) | Replaces `*ngIf`, `*ngFor` |

### JavaScript / TypeScript Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Closures** | Function + its lexical scope | Used in factories, modules, hooks |
| 2 | **Event Loop** | Call stack -> Web API -> Callback queue -> Microtask | `setTimeout` vs `Promise` (microtask first) |
| 3 | **Hoisting** | `var`, `function` hoisted; `let`, `const` not initialized | TDZ (Temporal Dead Zone) |
| 4 | **Prototypal Inheritance** | `__proto__`, `prototype` | Objects inherit from objects |
| 5 | **`this` binding** | Implicit, explicit (`call/apply/bind`), default (window/undefined) | Arrow functions capture `this` from context |
| 6 | **== vs ===** | Abstract vs strict equality | `==` coerces types |
| 7 | **Promise** | `.then()`, `.catch()`, `.finally()` | States: pending, fulfilled, rejected |
| 8 | **async/await** | Syntactic sugar over Promises | Error: `try/catch` |
| 9 | **Map vs WeakMap** | Strong vs weak references | WeakMap: keys must be objects, not iterable |
| 10 | **Set vs WeakSet** | Strong vs weak references | WeakSet: objects only, prevents memory leaks |
| 11 | **Spread / Rest** | `...` operator | Spread: expand, Rest: collect |
| 12 | **Destructuring** | `const { a, b } = obj` | Nested, default values |
| 13 | **Optional Chaining** | `obj?.prop?.nested` | Short-circuits on null/undefined |
| 14 | **Nullish Coalescing** | `??` | Not `||` (which excludes `''`, `0`) |
| 15 | **Generators** | `function*`, `yield` | Lazy iteration |
| 16 | **Symbol** | Unique, immutable primitive | Used as object keys |
| 17 | **TS: `interface` vs `type`** | Interface: extends, declaration merging; Type: unions, primitives | Prefer interface for objects |
| 18 | **TS: Generics** | `<T>` | Constraints: `<T extends SomeType>` |
| 19 | **TS: Utility types** | `Partial\<T\>`, `Required\<T\>`, `Pick\<T,K\>`, `Omit\<T,K\>`, `Record\<K,V\>` | `Readonly\<T\>`, `ReturnType\<T\>` |
| 20 | **TS: Mapped types** | `[K in keyof T]: T[K]` | Conditional, template literal |
| 21 | **TS: `unknown` vs `any`** | `unknown`: safe, must narrow; `any`: opt-out | Prefer `unknown` |
| 22 | **TS: `as const`** | Deeply readonly literal tuple | `const arr = [1, 2] as const` |
| 23 | **TS: `satisfies`** | (TS 4.9+) Type check without widening | `const x = {a: "hello"} satisfies Record<string, string>` |
| 24 | **TS: Template Literal Types** | `` \`${A}${B}\` `` | String literal unions |
| 25 | **TS: `never`** | Unreachable, exhaustive checks | Default in `switch default` |
| 26 | **Debounce vs Throttle** | Debounce: wait for pause; Throttle: at most once per interval | Use debounce for search, throttle for scroll |
| 27 | **Memoization** | Cache function results | `React.useMemo`, `_.memoize` |
| 28 | **Web Workers** | Parallel execution, separate thread | `postMessage` / `onmessage` |
| 29 | **Service Workers** | Proxy between browser and network | PWA, offline support |
| 30 | **JSDoc** | Type annotations in comments (`@param`, `@returns`) | `@type`, `@typedef` |

### Data Structures & Algorithms Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Array** | Contiguous memory, O(1) get, O(n) insert/delete | Dynamic resizing |
| 2 | **Linked List** | Nodes with pointers, O(n) access, O(1) delete (if ref) | Singly vs Doubly |
| 3 | **Stack** | LIFO, O(1) push/pop | DFS, parenthesis matching |
| 4 | **Queue** | FIFO, O(1) enqueue/dequeue | BFS, level-order |
| 5 | **Hash Table** | Key->Value, O(1) avg lookup | Collision: chaining, open addressing |
| 6 | **Binary Tree** | Each node <= 2 children | Full, Complete, Perfect, Balanced |
| 7 | **Binary Search Tree** | Left < Root < Right | O(log n) balanced, O(n) skewed |
| 8 | **Heap** | Complete binary tree, min/max property | Priority queue |
| 9 | **Graph** | Vertices + Edges | Adjacency list (most common) vs matrix |
| 10 | **Trie** | Prefix tree | Autocomplete, spell check, O(L) lookup |
| 11 | **Union-Find** | Disjoint set, find/union | Cycle detection, Kruskal's |
| 12 | **Segment Tree** | Range queries + updates | Interval sum/min/max |
| 13 | **Fenwick Tree (BIT)** | Prefix sums | O(log n) update/query |
| 14 | **Sorting: Quick** | O(n log n) avg, O(n^2) worst | Partition pivot, in-place |
| 15 | **Sorting: Merge** | O(n log n) all cases | Stable, O(n) extra space |
| 16 | **Sorting: Heap** | O(n log n) all cases | Build heap -> extract |
| 17 | **BFS** | Queue, levels | Shortest path (unweighted) |
| 18 | **DFS** | Stack/recursion | Pre/in/post-order |
| 19 | **Dijkstra** | Shortest path, positive weights | Priority queue, O(E log V) |
| 20 | **Bellman-Ford** | Shortest path, negative weights | O(VE), detects negative cycles |
| 21 | **Floyd-Warshall** | All-pairs shortest | O(V^3) |
| 22 | **Kruskal's** | Minimum spanning tree | Sort edges, Union-Find |
| 23 | **Prim's** | MST | Grow from vertex |
| 24 | **Two Pointers** | Left/right pointers | Sorted array problems |
| 25 | **Sliding Window** | Fixed or variable window | Subarray problems |
| 26 | **Binary Search** | Divide search space, O(log n) | `while (l <= r)`, find boundary |
| 27 | **Backtracking** | Try all possibilities, prune | Permutations, subsets, N-queens |
| 28 | **Dynamic Programming** | Overlapping subproblems, optimal substructure | Top-down (memo) vs bottom-up (tab) |
| 29 | **Greedy** | Local optimal -> global optimal | Interval scheduling, coin change (some) |
| 30 | **Topological Sort** | DAG ordering | Kahns (BFS) or DFS |
| 31 | **Tortoise & Hare** | Floyd's cycle detection | Linked list cycle |
| 32 | **KMP** | String matching | LPS array, O(n+m) |
| 33 | **Rabin-Karp** | Rolling hash | O(n) avg |
| 34 | **Bit Manipulation** | &, \|, ^, ~, <<, >> | `n & (n-1)` removes LS set bit |
| 35 | **Monotonic Stack** | Increasing/decreasing stack | Next greater element |
| 36 | **Reservoir Sampling** | Random sample of k items from stream | O(n), O(k) space |
| 37 | **Counting Sort** | O(n+k) if range known | Not comparison-based |
| 38 | **QuickSelect** | k-th smallest, O(n) avg | Partition like Quicksort |

### System Design Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Load Balancer** | Distribute traffic across servers | L4 (TCP) vs L7 (HTTP) |
| 2 | **DNS** | Domain -> IP | A, AAAA, CNAME, MX records |
| 3 | **CDN** | Edge-cached static content | Push (manual) vs Pull (automatic) |
| 4 | **Reverse Proxy** | Server-side proxy | Nginx, HAProxy, YARP |
| 5 | **Microservices** | Independent deployable services | Domain-driven bounded context |
| 6 | **API Gateway** | Single entry point | Route, auth, rate limit |
| 7 | **Database Index** | Faster reads, slower writes | Choose columns by query patterns |
| 8 | **Vertical Scaling** | Bigger machine | Limited, single point of failure |
| 9 | **Horizontal Scaling** | More machines | Stateless apps, shared DB |
| 10 | **Sharding** | Horizontal partition by key | Consistent hashing |
| 11 | **Read Replicas** | Async DB copies | Leader-follower, eventual consistency |
| 12 | **Cache** | In-memory fast access | Redis, Memcached, CDN, browser |
| 13 | **Redis** | In-memory data store | Strings, Lists, Sets, Sorted Sets, Hashes |
| 14 | **Memcached** | Simple key-value cache | No persistence, simpler |
| 15 | **Cache Strategies** | Read-through, Write-through, Write-behind, Cache-aside | TTL and invalidation |
| 16 | **Consistent Hashing** | Distribute keys across nodes | Minimal reshuffle on node changes |
| 17 | **Message Queue** | Async decoupling | Kafka, RabbitMQ, SQS, Azure Service Bus |
| 18 | **Kafka** | Distributed event streaming | Topics, partitions, consumer groups |
| 19 | **Pub/Sub** | Publisher -> Topic -> Subscriber | Azure Service Bus, Google Pub/Sub |
| 20 | **CQRS** | Separate read/write models | Command (write) -> Event -> Query (read) |
| 21 | **Event Sourcing** | Store events, not state | Rebuild state from event stream |
| 22 | **Saga** | Distributed transaction pattern | Choreography (events) vs Orchestration (coordinator) |
| 23 | **2PC (Two-Phase Commit)** | Prepare -> Commit/Rollback | Blocking, not suitable for microservices |
| 24 | **Idempotency** | Same request -> same result | Retry-safe APIs, idempotency key |
| 25 | **Rate Limiting** | Control request rate | Token bucket, Leaky bucket, Sliding window |
| 26 | **Circuit Breaker** | Fail fast when downstream is down | Open -> Half-Open -> Closed |
| 27 | **Bulkhead** | Isolate resources | Separate thread pools per service |
| 28 | **Blob/File Storage** | Unstructured large data | S3, Azure Blob, GCS |
| 29 | **SQL vs NoSQL** | ACID vs BASE | Relational vs Document/Key-Value/Graph/Column |
| 30 | **Data Warehouse** | Analytics, OLAP | Columnstore, Snowflake, BigQuery, Redshift |
| 31 | **CAP Theorem** | Consistency, Availability, Partition Tolerance | Choose 2 |
| 32 | **PACELC** | CAP + else (latency vs consistency) | If partition -> choose CA; else choose speed |
| 33 | **Vector DB** | Embedding storage, similarity search | pgvector, Pinecone, Qdrant, Weaviate |
| 34 | **Bloom Filter** | Probabilistic membership | False positives, no false negatives |
| 35 | **Gossip Protocol** | Node-to-node communication | Cassandra, Redis cluster |
| 36 | **Quorum** | Minimum votes for read/write | W + R > N for consistency |
| 37 | **Leader Election** | Select one coordinator | Paxos, Raft, Zookeeper |
| 38 | **Zookeeper** | Coordination service | Config, naming, leader, locks |
| 39 | **Heartbeat** | Health signal | Missed heartbeat -> failure detection |
| 40 | **Leader-Follower Replication** | One writer, many readers | PostgreSQL, MySQL |
| 41 | **Multi-Leader Replication** | Multiple writers | Conflicts, CRDTs |
| 42 | **CRDT** | Conflict-free replicated data type | Last-write-wins, counters |
| 43 | **HDFS** | Hadoop Distributed File System | NameNode + DataNodes |
| 44 | **MapReduce** | Batch processing | Map -> Shuffle -> Reduce |
| 45 | **Lambda Architecture** | Batch + Speed + Serving | Batch layer (accurate), Speed (real-time) |
| 46 | **Kappa Architecture** | Stream-only processing | Kafka -> Stream processing -> Serving |
| 47 | **WebSockets** | Bidirectional persistent connection | Chat, notifications, gaming |
| 48 | **gRPC** | HTTP/2, Protobuf, typed API | Streaming, bidirectional |
| 49 | **REST vs GraphQL vs gRPC** | REST: resources; GraphQL: query flexibility; gRPC: typed | Choose by use case |
| 50 | **CDN Architecture** | Push CDN vs Pull CDN | Pull: automatic cache fill |

### Cloud (Azure) Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **Azure DevOps** | CI/CD pipelines, boards, repos | YAML pipelines |
| 2 | **Azure App Service** | PaaS for web apps | Auto-scale, deployment slots |
| 3 | **Azure Functions** | Serverless compute | Consumption plan, triggers |
| 4 | **Azure Kubernetes** | Managed K8s | AKS, node pools, auto-scaling |
| 5 | **Azure SQL** | Managed SQL Server | Hyperscale, Geo-replication |
| 6 | **Cosmos DB** | Globally distributed NoSQL | Multi-model, consistency levels |
| 7 | **Azure Storage** | Blob, Table, Queue, Files | LRS, GRS, RA-GRS redundancy |
| 8 | **Azure Service Bus** | Enterprise message broker | Topics/Queues, dead-letter |
| 9 | **Azure Event Grid** | Event routing | Pub/sub, sub-ms latency |
| 10 | **Azure Event Hubs** | Big data streaming | Kafka-compatible |
| 11 | **Azure Redis Cache** | In-memory cache | Premium tier: persistence, clustering |
| 12 | **Azure CDN** | Edge caching | Verizon, Akamai, Microsoft |
| 13 | **Azure Front Door** | Global HTTP LB + WAF | Anycast, rules engine |
| 14 | **Azure API Management** | API gateway | Policy injection, rate limiting |
| 15 | **Azure AD / Entra ID** | Identity provider | OAuth2, OpenID Connect, SAML |
| 16 | **Azure Key Vault** | Secrets, keys, certs | HSM-backed, access policies |
| 17 | **Azure Monitor** | Observability | Log Analytics, Application Insights |
| 18 | **Azure Policy** | Governance | Enforce compliance rules |
| 19 | **Azure RBAC** | Role-based access | Reader, Contributor, Owner, custom |
| 20 | **Managed Identities** | Auto-managed service principals | No secrets in code |
| 21 | **Azure DevOps Pipelines** | `azure-pipelines.yml` | Multi-stage, environments |
| 22 | **ARM / Bicep** | Infrastructure as Code | `bicep` -> ARM JSON |
| 23 | **Terraform on Azure** | IaC by HashiCorp | `azurerm` provider |
| 24 | **Azure Load Balancer** | L4 LB, internal/public | HA ports |
| 25 | **Application Gateway** | L7 LB, SSL termination, WAF | URL-based routing |
| 26 | **Traffic Manager** | DNS-based routing | Performance, Priority, Geographic |
| 27 | **Azure DNS** | Domain hosting | Alias records, private zones |
| 28 | **Azure Migrate** | Assessment + migration | VMware, Hyper-V, physical |
| 29 | **Azure Backup / Site Recovery** | DR and backup | Recovery Vault |
| 30 | **Azure Data Factory** | ETL/ELT pipelines | Mapping Data Flows |

### DevOps / CI/CD Deep Dive

| # | Concept | Explanation | Key Detail |
|---|---------|-------------|------------|
| 1 | **CI/CD** | Continuous Integration + Delivery | Build -> Test -> Deploy |
| 2 | **Docker** | Container runtime | `FROM`, `RUN`, `CMD`, `EXPOSE` |
| 3 | **Dockerfile** | Image build instructions | Multi-stage builds: `AS build`, `AS runtime` |
| 4 | **Docker Compose** | Multi-container orchestration | `docker-compose.yml` |
| 5 | **Kubernetes** | Container orchestration | Pods, Deployments, Services, ConfigMaps |
| 6 | **K8s Pod** | Smallest deployable unit | Ephemeral, can have sidecars |
| 7 | **K8s Deployment** | Declarative update | Rolling update, rollback |
| 8 | **K8s Service** | Stable endpoint for pods | ClusterIP, NodePort, LoadBalancer |
| 9 | **K8s Ingress** | HTTP/S routing to services | Path-based, host-based, TLS |
| 10 | **Helm** | K8s package manager | Charts, values, templates |
| 11 | **GitHub Actions** | CI/CD as code | `.github/workflows/*.yml` |
| 12 | **Azure Pipelines** | YAML or classic | Agent pools, stages |
| 13 | **GitLab CI** | `.gitlab-ci.yml` | Runners, pipeline stages |
| 14 | **SonarQube** | Code quality + security | `sonar-scanner`, quality gates |
| 15 | **Trivy / Snyk** | Container/Dependency scanning | CVE detection |
| 16 | **Terraform** | IaC, declarative | `terraform plan`, `terraform apply` |
| 17 | **Terraform State** | `terraform.tfstate` | Remote backend (S3, Azure Storage) |
| 18 | **Pulumi** | IaC with real languages | C#, TypeScript, Python |
| 19 | **Ansible** | Config mgmt, push-based | Playbooks, idempotent |
| 20 | **Chef / Puppet** | Config mgmt, pull-based | Agent -> Master |
| 21 | **Monitoring** | Prometheus + Grafana | Metrics, alerts, dashboards |
| 22 | **ELK Stack** | Elasticsearch, Logstash, Kibana | Centralized logging |
| 23 | **Datadog / New Relic** | SaaS monitoring | APM, traces, metrics |
| 24 | **OpenTelemetry** | Unified observability | Traces + Metrics + Logs |
| 25 | **Feature Flags** | Toggle features at runtime | LaunchDarkly, Azure App Config |
| 26 | **Canary Deployment** | Gradual rollout to subset | 1% -> 5% -> 10% -> 50% -> 100% |
| 27 | **Blue-Green Deployment** | Two full environments | Instant switch + rollback |
| 28 | **Rolling Update** | Incremental pod replacement | K8s default |
| 29 | **GitOps** | Git as source of truth | ArgoCD, Flux |
| 30 | **Vault** | Secrets management | HashiCorp Vault, dynamic secrets |

---

## Section 3: One-Page Summaries

### Volume 1: C# Fundamentals

```text
+--------------------------------------------------------------------+
|  C# Fundamentals - One-Page Summary                                |
+--------------------------------------------------------------------+
|  TYPES                                                              |
|  Value (struct): stack, copied by value                             |
|  Reference (class): heap, copied by ref                             |
|  string: immutable, reference type (special)                       |
|  object: base of all types                                          |
|  dynamic: runtime-typed                                             |
|                                                                    |
|  OOP                                                                |
|  Encapsulation: private fields, public props                       |
|  Inheritance: single class, multiple interface                     |
|  Polymorphism: virtual/override, abstract                          |
|  Composition: HAS-A over IS-A                                      |
|                                                                    |
|  ERROR HANDLING                                                    |
|  try/catch/finally                                                  |
|  using (IDisposable) - deterministic cleanup                       |
|  throw; (preserves stack) vs throw ex; (BAD - resets stack)        |
|                                                                    |
|  C# 12+ FEATURES                                                   |
|  Primary constructors, Collection expressions: [1, 2, 3]          |
|  ref readonly parameters, Default lambda params                    |
+--------------------------------------------------------------------+
```

### Volume 2: .NET / ASP.NET Core

```text
+--------------------------------------------------------------------+
|  .NET - One-Page Summary                                            |
+--------------------------------------------------------------------+
|  APPLICATION PIPELINE                                               |
|  Request -> Middleware -> Controller/Route -> Response              |
|  Middleware order: ExceptionHandler -> HSTS -> HTTPS ->            |
|  StaticFiles -> Routing -> Auth -> Endpoint                        |
|                                                                    |
|  DI LIFETIMES                                                      |
|  Singleton  : One for app lifetime, shared                          |
|  Scoped     : One per HTTP request                                  |
|  Transient  : New every injection                                   |
|                                                                    |
|  CONFIGURATION                                                     |
|  appsettings.json -> env vars -> secrets -> CLI args               |
|  IOptions<T>: Singleton, reads on first access                     |
|  IOptionsSnapshot<T>: Scoped, reads per request                    |
|  IOptionsMonitor<T>: Singleton, watches for changes                |
|                                                                    |
|  HOSTING                                                           |
|  Kestrel (default) <- IIS / Nginx (reverse proxy)                  |
+--------------------------------------------------------------------+
```

### Volume 3: EF Core

```text
+--------------------------------------------------------------------+
|  EF Core - One-Page Summary                                        |
+--------------------------------------------------------------------+
|  DbContext: Unit of Work                                            |
|  db.Set<T>() -> query, SaveChanges() -> persist                     |
|                                                                    |
|  ENTITY STATES                                                     |
|  Detached -> Added -> Unchanged -> Modified -> Deleted              |
|                                                                    |
|  LOADING                                                           |
|  Eager: .Include(x => x.Nav)                                       |
|  Explicit: .Collection(x => x.Nav).Load()                          |
|  Lazy: virtual nav prop (disabled by default)                      |
|                                                                    |
|  PERFORMANCE                                                       |
|  .AsNoTracking() for read-only queries                             |
|  .AsSplitQuery() for multiple includes                             |
|  .ExecuteUpdate() / .ExecuteDelete() for bulk                      |
|  Compiled queries: EF.CompileAsyncQuery                            |
+--------------------------------------------------------------------+
```

### Volume 4: SQL

```text
+--------------------------------------------------------------------+
|  SQL - One-Page Summary                                             |
+--------------------------------------------------------------------+
|  JOIN TYPES                                                        |
|  INNER : Only matching rows                                         |
|  LEFT  : All from left + matches                                   |
|  RIGHT : All from right + matches                                  |
|  FULL  : All rows from both                                        |
|  CROSS : Cartesian product                                         |
|                                                                    |
|  WINDOW FUNCTIONS                                                  |
|  ROW_NUMBER() OVER(PARTITION BY col ORDER BY col)                  |
|  RANK(), DENSE_RANK(), LEAD(), LAG()                               |
|  SUM() OVER(PARTITION BY col)                                      |
|                                                                    |
|  INDEX STRATEGY                                                    |
|  Clustered: table data order (1 per table)                         |
|  Nonclustered: pointer to data rows                                |
|  Covering: includes all needed columns                             |
|  Seek > Scan > Key Lookup                                          |
|  SARGable: WHERE date >= '2024-01-01'                              |
|  NOT SARGable: WHERE YEAR(date) = 2024                             |
+--------------------------------------------------------------------+
```

### Volume 5: Angular

```text
+--------------------------------------------------------------------+
|  Angular - One-Page Summary                                        |
+--------------------------------------------------------------------+
|  BUILDING BLOCKS                                                   |
|  Modules -> Components -> Services -> Pipes -> Guards              |
|                                                                    |
|  DATA FLOW                                                         |
|  Template -> Component -> Service -> API                           |
|  Interceptor -> HttpRequest -> HttpClient -> Response              |
|                                                                    |
|  REACTIVITY                                                        |
|  RxJS: Observable -> Operators -> Subscribe                        |
|  Signals: signal() -> computed() -> effect()                       |
|                                                                    |
|  CHANGE DETECTION                                                  |
|  Default: Zone.js -> check all components                          |
|  OnPush: input change or async pipe only                           |
|                                                                    |
|  NEW CONTROL FLOW (Angular 17+)                                    |
|  @if (cond) { } @else { }                                          |
|  @for (item of list; track item.id) { }                            |
|  @switch (val) { @case 'a' {} }                                    |
|  @defer (on viewport) { }                                          |
+--------------------------------------------------------------------+
```

### Volume 6: JavaScript / TypeScript

```text
+--------------------------------------------------------------------+
|  JS/TS - One-Page Summary                                          |
+--------------------------------------------------------------------+
|  EXECUTION MODEL                                                   |
|  Event Loop: Call Stack -> Microtask -> Macrotask                  |
|  Microtasks: Promise.then, queueMicrotask                          |
|  Macrotasks: setTimeout, setInterval, I/O                          |
|                                                                    |
|  SCOPE & CLOSURE                                                   |
|  Global -> Module -> Function -> Block ({ let/const })             |
|  Closure: function remembers outer variables                       |
|                                                                    |
|  ASYNC PATTERNS                                                    |
|  Callback -> Promise -> async/await                                |
|  Promise.all([p1, p2]) - fail fast                                 |
|  Promise.allSettled([p1, p2]) - wait all                            |
|  Promise.race([p1, p2]) - first settled                            |
|                                                                    |
|  TS KEY FEATURES                                                   |
|  Static typing, interfaces, generics, union types                  |
|  strict: true, noImplicitAny, strictNullChecks                     |
|                                                                    |
|  TS UTILITY TYPES                                                  |
|  Partial, Required, Pick, Omit, Record, Exclude                    |
|  ReturnType, Parameters, Awaited                                   |
+--------------------------------------------------------------------+
```

### Volume 7: Data Structures & Algorithms

```text
+--------------------------------------------------------------------+
|  DSA - One-Page Summary                                            |
+--------------------------------------------------------------------+
|  ARRAYS & STRINGS                                                  |
|  Two pointers, sliding window, prefix sum                          |
|  String: char freq array, palindrome expansion                     |
|                                                                    |
|  LINKED LISTS                                                      |
|  Reverse, merge, detect cycle (Floyd's), find middle               |
|                                                                    |
|  TREES & GRAPHS                                                    |
|  DFS (stack/recursion), BFS (queue)                                |
|  Tree traversal: pre/in/post/level-order                           |
|  Graph: shortest path (Dijkstra/BFS), MST (Kruskal)                |
|                                                                    |
|  DYNAMIC PROGRAMMING                                               |
|  1D DP: Fibonacci, climb stairs, house robber                      |
|  2D DP: LCS, edit distance, knapstack, matrix paths                |
|                                                                    |
|  BINARY SEARCH                                                     |
|  while (l <= r) { m = l + (r-l)/2 }                                |
|  Search rotated, find peak, first/last occurrence                  |
+--------------------------------------------------------------------+
```

### Volume 8-12: System Design

```text
+--------------------------------------------------------------------+
|  System Design - One-Page Summary                                  |
+--------------------------------------------------------------------+
|  FRAMEWORK                                                         |
|  1. Requirements (functional + non-functional)                     |
|  2. Estimation (traffic, storage, bandwidth)                       |
|  3. Data model (schema, SQL vs NoSQL, sharding)                    |
|  4. API design (REST/gRPC endpoints)                               |
|  5. High-level design (components diagram)                         |
|  6. Deep dive (specific bottlenecks)                               |
|  7. Trade-offs (what you chose and why)                            |
|                                                                    |
|  KEY COMPONENTS                                                    |
|  LB -> CDN -> Reverse Proxy -> App Servers -> Cache                |
|  -> DB (Primary + Replicas) -> Queue -> Workers                    |
|                                                                    |
|  SCALING                                                           |
|  Vertical: bigger machine (limited)                                |
|  Horizontal: more machines (stateless apps)                        |
|  Sharding: split data by key                                       |
|  Read replicas: async copy for reads                               |
|                                                                    |
|  TOP 5 DESIGNS                                                     |
|  1. URL shortener (hash, redirect, analytics)                      |
|  2. Chat (WebSocket, presence, history)                            |
|  3. News feed (fanout on write/pull, ranking)                      |
|  4. Video streaming (CDN, transcoding, adaptive bitrate)           |
|  5. Rate limiter (token bucket, distributed)                       |
+--------------------------------------------------------------------+
```

### Volume 13: Azure Cloud

```text
+--------------------------------------------------------------------+
|  Azure - One-Page Summary                                          |
+--------------------------------------------------------------------+
|  COMPUTE                                                           |
|  VMs (IaaS) -> App Service (PaaS) -> Functions (FaaS)              |
|  AKS (K8s), Container Instances                                    |
|                                                                    |
|  DATA                                                              |
|  Azure SQL (relational)                                            |
|  Cosmos DB (NoSQL, multi-model, global)                            |
|  Storage Account (Blob, Table, Queue, Files)                       |
|  Redis Cache (in-memory)                                           |
|                                                                    |
|  MESSAGING                                                         |
|  Service Bus (enterprise queue/topics)                             |
|  Event Grid (event routing, sub-ms)                                |
|  Event Hubs (big data / stream)                                    |
|                                                                    |
|  NETWORKING                                                        |
|  VNet -> Subnets -> NSG -> Load Balancer -> App GW                 |
|  Front Door (global LB + WAF)                                     |
|  Traffic Manager (DNS routing)                                     |
|  CDN / Azure DNS                                                   |
|                                                                    |
|  SECURITY                                                          |
|  Entra ID (auth), Key Vault (secrets), RBAC (roles)               |
|  Managed Identities (no secrets in code)                           |
+--------------------------------------------------------------------+
```

### Volume 14: DevOps & CI/CD

```text
+--------------------------------------------------------------------+
|  DevOps - One-Page Summary                                         |
+--------------------------------------------------------------------+
|  CI/CD PIPELINE                                                    |
|  Source -> Build -> Test -> Package -> Deploy -> Monitor            |
|                                                                    |
|  CONTAINERIZATION                                                  |
|  Dockerfile -> Image -> Registry -> Container                      |
|  FROM, COPY, RUN, EXPOSE, CMD, ENTRYPOINT                         |
|  Multi-stage: build -> runtime (smaller images)                    |
|                                                                    |
|  KUBERNETES ESSENTIALS                                             |
|  Pod (container(s)) -> Deployment (desired state)                  |
|  Service (stable IP/DNS) -> Ingress (HTTP/S routing)               |
|  ConfigMap/Secret (config) -> PVC (storage)                        |
|                                                                    |
|  DEPLOYMENT STRATEGIES                                             |
|  Rolling: gradual pod replacement                                  |
|  Blue-Green: two full envs, instant switch                         |
|  Canary: % traffic shift                                           |
|  Feature flags: toggle without deploy                              |
|                                                                    |
|  IaC                                                               |
|  Terraform (declarative), ARM/Bicep (Azure-native), Pulumi (C#)   |
+--------------------------------------------------------------------+
```

### Volume 15: Interview Strategy & Soft Skills

```text
+--------------------------------------------------------------------+
|  Interview Strategy - One-Page Summary                              |
+--------------------------------------------------------------------+
|  PHASES                                                             |
|  Screening -> Technical -> System Design -> Behavioral -> HC      |
|                                                                    |
|  TECHNICAL TIPS                                                    |
|  * Clarify requirements first                                      |
|  * Think out loud                                                  |
|  * Start with brute force, then optimize                           |
|  * Test with examples (edge cases!)                                |
|  * Analyze time/space complexity                                   |
|  * If stuck, ask for hints                                         |
|                                                                    |
|  SYSTEM DESIGN TIPS                                                |
|  * Always estimate first                                           |
|  * Draw the architecture                                           |
|  * Call out trade-offs explicitly                                  |
|  * Mention monitoring, CI/CD, DR                                   |
|  * Start simple, then deep-dive                                    |
|                                                                    |
|  BEHAVIORAL (STAR)                                                 |
|  Situation -> Task -> Action -> Result                             |
|  * Prepare 5 stories                                               |
|  * Quantify results ($$, %, time saved)                            |
|  * Use "I" not "we"                                                |
|  * Show leadership and ownership                                   |
+--------------------------------------------------------------------+
```

---

## Section 4: Most Important Interview Questions

### C# Top 10

<details>
<summary><b>1. What's the difference between class and struct?</b></summary>

| Aspect | `class` | `struct` |
|--------|---------|----------|
| Type | Reference | Value |
| Memory | Heap | Stack / inline |
| Assignment | Copies reference | Copies value |
| Inheritance | Supports | Cannot inherit |
| Nullable | Always nullable (ref type) | Nullable with `?` |
| Default params | Can have parameterless ctor | Cannot (pre-C# 10) |
| Use case | Complex behavior | Small data bags (< 16 bytes) |

**Pro tip:** Use struct for `Point`, `Vector`, `Color` - small, frequently allocated, value semantics.
</details>

<details>
<summary><b>2. Explain async/await state machine</b></summary>

The compiler generates:
- An `IAsyncStateMachine` struct with a `MoveNext()` method
- Each `await` creates a state (0, 1, 2...)
- On first await, if incomplete, the method returns an `incomplete Task`
- When the awaited operation completes, `MoveNext()` resumes from the saved state
- The state machine captures all local variables across await points
- This is all done via `AsyncTaskMethodBuilder<T>`

**Key insight:** The method is synchronous until the first truly asynchronous await. If the `Task` is already completed, it runs synchronously - no state machine involved.
</details>

<details>
<summary><b>3. How does the .NET GC work?</b></summary>

- **Generations:** Gen 0 (short-lived), Gen 1 (survivors), Gen 2 (long-lived)
- **Large Object Heap (LOH):** Objects >= 85KB, Gen 2, not compacted by default
- **Collection triggers:** Gen 0 fills -> Gen 0 GC, memory pressure, `GC.Collect()`
- **Phases:** Mark (find live objects) -> Sweep (free dead) -> Compact (optional)
- **Modes:** Workstation (concurrent), Server (per-core, multi-threaded)

**Pro tip:** Watch for: allocations in hot paths, large structs on LOH, pinned objects (fragmentation), finalizers (delay cleanup).
</details>

<details>
<summary><b>4. IEnumerable vs IQueryable</b></summary>

| Aspect | `IEnumerable` | `IQueryable` |
|--------|---------------|--------------|
| Execution | In-memory (LINQ to Objects) | On data source (LINQ to SQL) |
| Delegates | `Func<T, bool>` | `Expression<Func<T, bool>>` |
| Filtering | Client-side | Server-side (SQL WHERE) |
| Performance | All data loaded | Filtered at source |
| Provider | Any collection | LINQ providers (EF, NHibernate) |

**Key insight:** `AsEnumerable()` switches from IQueryable to IEnumerable (client-side evaluation). Be careful when you call it!
</details>

<details>
<summary><b>5. Boxing/unboxing and its impact</b></summary>

**Impact:**
1. **Heap allocation** - GC pressure
2. **Copy overhead** - value copied in/out of heap
3. **Type checking** - unboxing requires exact type match

**Hidden boxing:**
- `string.Format("{0}", 42)` - **boxes!**
- `ArrayList.Add(42)` - **boxes!**
- `enum.ToString()` - **boxes!**
- Interface calls on structs - **boxes!**

**Solution:** Use generics (`List<T>`), avoid `ArrayList`/`Hashtable`, be aware of interface calls on structs.
</details>

<details>
<summary><b>6. Delegates vs events</b></summary>

| Aspect | `delegate` | `event` |
|--------|------------|---------|
| Invocation | Allows direct | Only inside declaring class |
| Assignment | `=` (overwrites) | `+=` / `-=` only |
| Interface | Can be in interface | Cannot be in interface |
| Safety | Can be invoked externally | Safer, subscribers encapsulated |

**Rule of thumb:** Use `event` for pub/sub patterns. Use `delegate` for callbacks and functional composition.
</details>

<details>
<summary><b>7. Lock statement and Monitor</b></summary>

**Best practices:**
- Never lock on `this`, `typeof(MyClass)`, or `string`
- Lock object should be `private readonly object`
- Keep lock duration minimal
- Don't call external code inside lock (deadlock risk)
- Use `Monitor.TryEnter` with timeout for deadlock avoidance
- Consider `ReaderWriterLockSlim` for read-heavy scenarios

**Pro tip:** For async lock, use `SemaphoreSlim(1, 1)` with `WaitAsync()`.
</details>

<details>
<summary><b>8. String vs StringBuilder</b></summary>

**String:** Immutable - every operation creates a new string. String pool for compile-time literals.

**StringBuilder:** Mutable character buffer (default 16 chars, grows by doubling). Use for > 3-5 concatenations or loops.

**Pro tip:** For a known number of concatenations, `string.Concat` or `string.Join` can be faster than `StringBuilder`.
</details>

<details>
<summary><b>9. Record types and value equality</b></summary>

Records give you:
- `Equals` / `GetHashCode` based on all properties
- `==` and `!=` operator overloads
- `ToString()` showing all properties
- `Deconstruct` method
- `with` expression support (non-destructive mutation)

**Record struct:** Same benefits but as value type, no inheritance.
</details>

<details>
<summary><b>10. Span\<T\> and Memory\<T\></b></summary>

- `Span<T>` is a `ref struct` - cannot be boxed, used in async, or as field in class
- `Memory<T>` is the heap-compatible alternative
- Can represent: arrays, strings, unmanaged memory, stack memory
- Slicing is O(1) - no allocation

**Use cases:** String parsing, binary format reading, high-performance serialization, avoiding copies.
</details>

### System Design Top 10

<details>
<summary><b>1. Design URL Shortener (e.g., TinyURL)</b></summary>

**Estimation:** 100M new URLs/month = ~38/s writes. 10:1 read/write = ~380/s reads. 500 bytes/URL = 50GB/month.

**Key decisions:**
- **Hash:** Base62 (a-zA-Z0-9) for 7 chars = 62^7 = 3.5T URLs
- **Collision:** MD5/SHA-256 truncation + unique DB constraint
- **Database:** Key: short URL (PK), Long URL, CreatedAt, Expiry
- **Redirect:** 301 (permanent, cached) vs 302 (temporary, analytics)
- **Cache:** Redis in front of DB (hot URLs)
- **Key generation:** Pre-generate keys in batch, keep pool in memory

**Trade-offs:** Base62 avoids special chars in URL. Counter-based (ZooKeeper) = predictable, no collisions. LRU + TTL for cache.
</details>

<details>
<summary><b>2. Design WhatsApp / Messenger</b></summary>

**Estimation:** 1B DAU, 40 msgs/day = 40B/day ~ 460K/s.

**Key decisions:**
- **Transport:** WebSocket persistent connection
- **Message model:** Each message has unique ID (UUID/snowflake)
- **Store & forward:** Messages stored in DB, push to offline users on reconnect
- **Fanout on write (small groups):** Send to all members immediately
- **Fanout on read (large groups):** Fetch inbox on login, pull message list
- **Presence:** Heartbeat every 5s, mark offline after 30s inactivity

**Trade-offs:** E2E (WhatsApp) vs server-side encryption. At-least-once with dedup.
</details>

<details>
<summary><b>3. Design Netflix / Video Streaming Platform</b></summary>

**Estimation:** 200M subscribers, avg 1 hr/day. 4K (15-25 Mbps), 1080p (5 Mbps), 720p (2.5 Mbps).

**Video pipeline:** Upload -> Transcode (multiple resolutions) -> Segment (2-4s chunks) -> CDN -> Client adaptive bitrate.

**Recommendation:** Collaborative filtering -> Matrix factorization -> Deep neural networks. Lambda architecture: batch + real-time.

**Trade-offs:** Client-side DASH vs server-side transcoding. CDN cost vs quality of experience.
</details>

<details>
<summary><b>4. Design Uber / Ride-Sharing</b></summary>

**Estimation:** 100M active users, 15M daily rides. Location updates every 4s per driver.

**Key decisions:**
- **Geospatial index:** QuadTree / Geohash
- **Driver location:** WebSocket + in-memory grid per region
- **Matching:** Driver offers -> first to accept (or weighted scoring)
- **Surge pricing:** High demand + low supply -> multiplier

**Trade-offs:** Larger search radius = more matches = slower response. Batch processing (every 2s) vs immediate push.
</details>

<details>
<summary><b>5. Design Twitter / Social Feed</b></summary>

**Estimation:** 500M tweets/day = 5,800/s writes. 500M DAU, 200 reads/day = 1.2M/s reads.

**Key decisions:**
- **Fanout-on-write:** Pre-compute timeline for regular users
- **Fanout-on-read:** Celebrities: followers pull from celeb's tweet cache
- **Hybrid:** Fanout to followers < 5K, pull for > 5K
- **Timeline cache:** Redis sorted sets storing tweet IDs

**Pagination:** Cursor-based (opaque cursor) not offset-based.
</details>

<details>
<summary><b>6. Design Instagram / Photo Sharing</b></summary>

**Estimation:** 1B users, 100M daily uploads, 200KB avg photo -> 20TB/day. 4B likes/day.

**Key decisions:**
- **Storage:** S3/Azure Blob for original + multiple resolutions
- **Metadata:** PostgreSQL for user data, Cassandra for high-write feed
- **Feed:** Same fanout pattern as Twitter
- **Explore:** Content-based recommendations + collaborative filtering

**Stories:** Ephemeral content, 24-hour TTL, uploaded with expiry.
</details>

<details>
<summary><b>7. Design ChatGPT / LLM Inference System</b></summary>

**Estimation:** Model size 100B-1T+ params, requires ~200-600GB GPU memory. ~30 tokens/s generation.

**Key decisions:**
- **KV-cache:** Store attention keys/values per conversation to avoid recompute
- **Dynamic batching:** Best-effort to maximize throughput
- **Context window:** 8K-128K tokens, LRU eviction

**Optimizations:** Quantization (FP16->INT8/FP4), FlashAttention, Continuous batching, Speculative decoding, MoE.

**Trade-offs:** Quality vs latency. Longer context = more memory = higher cost.
</details>

<details>
<summary><b>8. Design E-Commerce Platform (Amazon-like)</b></summary>

**Estimation:** 200M products, 500M users, 10M orders/day.

**Key decisions:**
- **Product catalog:** Denormalized for read (wide table or document DB)
- **Shopping cart:** Redis for persistent cart (not session-based)
- **Inventory:** Optimistic lock + reserved inventory
- **Checkout:** Order service -> payment -> inventory -> fulfillment (event-driven)

**Inventory concurrency:** `UPDATE SET quantity = quantity - 1 WHERE product_id = ? AND quantity > 0 AND version = ?`
</details>

<details>
<summary><b>9. Design Rate Limiter</b></summary>

| Algorithm | Pros | Cons |
|-----------|------|------|
| **Token Bucket** | Simple, allows bursts | Needs refill logic |
| **Leaky Bucket** | Smooth output | No bursts allowed |
| **Fixed Window** | O(1) memory | Boundary traffic spikes |
| **Sliding Window Log** | Precise | O(n) memory per window |
| **Sliding Window Counter** | Good balance | Approximate |

**Distributed:** Redis cluster + Lua scripts for atomicity + local cache for hot keys.
</details>

<details>
<summary><b>10. Design Banking / Payment System</b></summary>

**Estimation:** 100M accounts, 500M transactions/day, peak 50K TPS.

**Key decisions:**
- **Double-entry bookkeeping:** Every transaction debits one account, credits another
- **Idempotency:** Each request has unique `idempotency_key`
- **Transaction isolation:** SERIALIZABLE with optimistic locking
- **Balance:** Single row per account, BIGINT for cents (never float!)

**Reconciliation:** End-of-day: sum of all debits = sum of all credits. Mismatch -> alert + manual review.

**Trade-offs:** Consistency over availability (prefer CP over AP in CAP theorem).
</details>

### SQL Top 10

<details>
<summary><b>SQL Top 10 Questions</b></summary>

1. What's the difference between clustered and nonclustered index?
2. Explain N+1 query problem and how to fix it
3. What are window functions? Give examples
4. What is an execution plan? How do you read one?
5. Difference between `WHERE` and `HAVING`
6. What is the difference between `UNION` and `UNION ALL`?
7. Explain ACID properties
8. What are the isolation levels and when to use each?
9. What is a deadlock and how to prevent it?
10. Difference between `DELETE`, `TRUNCATE`, and `DROP`
</details>

### Angular Top 10

<details>
<summary><b>Angular Top 10 Questions</b></summary>

1. What is the Angular change detection mechanism?
2. Explain `OnPush` change detection strategy
3. What are Observables? How are they different from Promises?
4. What is the component lifecycle in Angular?
5. How does dependency injection work in Angular?
6. What are Angular Signals (Angular 16+)?
7. Difference between template-driven and reactive forms
8. Explain the role of `NgModule` vs standalone components
9. What are Route Guards and what types exist?
10. How does content projection work with `<ng-content>`?
</details>

### JavaScript / TypeScript Top 10

<details>
<summary><b>JavaScript / TypeScript Top 10</b></summary>

1. Explain closures with examples
2. How does the event loop work in JavaScript?
3. What's the difference between `var`, `let`, and `const`?
4. Explain `this` keyword behavior in different contexts
5. What are Promises and how do they work?
6. Difference between `==` and `===`
7. What are JavaScript generators?
8. Explain `interface` vs `type` in TypeScript
9. What are TypeScript utility types? Name 5+
10. What is the difference between `unknown` and `any`?
</details>

### DSA Top 10

<details>
<summary><b>DSA Top 10 Questions</b></summary>

1. Reverse a linked list (iterative + recursive)
2. Two Sum, Three Sum (hash map pattern)
3. Detect cycle in linked list (Floyd's algorithm)
4. Maximum subarray (Kadane's algorithm)
5. Merge two sorted lists/arrays
6. Binary tree traversal (inorder, preorder, postorder)
7. Valid parentheses (stack)
8. Longest substring without repeating characters (sliding window)
9. Number of islands (DFS/BFS on grid)
10. Top K frequent elements (heap/quickselect)
</details>

### Azure Top 10

<details>
<summary><b>Azure Top 10 Questions</b></summary>

1. What is the difference between Azure SQL and Cosmos DB?
2. Explain Azure Storage redundancy options (LRS, GRS, RA-GRS, ZRS)
3. How does Azure Functions work? What are the hosting plans?
4. Explain Azure Service Bus vs Event Grid vs Event Hubs
5. What are Managed Identities and why use them?
6. How does Azure Kubernetes Service (AKS) work?
7. Explain Azure AD / Entra ID and OAuth flow
8. What is Azure Front Door and when to use it?
9. How does Azure DevOps CI/CD pipeline work?
10. Explain ARM templates vs Bicep vs Terraform on Azure
</details>

---

## Section 5: Common Traps

### C# Traps

| # | Trap | Why It's Dangerous | Fix |
|---|------|-------------------|-----|
| 1 | Modifying collection during `foreach` | `InvalidOperationException` | Use `for` with index or `ToList()` |
| 2 | `async void` | Exception crashes process, no awaiter | Always use `async Task` except UI events |
| 3 | Capturing loop variable in closure | Closures capture reference, not value | C# 5+: `for` creates new variable per iteration |
| 4 | `await Task.WhenAny` without checking completion | The other task might still throw | Always `await` the result or check `task.IsFaulted` |
| 5 | `IQueryable` materialization timing | Multiple enumeration = multiple DB calls | Call `ToList()` once, cache result |
| 6 | String immutability in loops | O(n^2) memory allocation | Use `StringBuilder` |
| 7 | `dynamic` type | No compile-time check, boxing, slow | Avoid in performance paths |
| 8 | Default equality for `struct` | Reflection-based, slow | Override `Equals` + `GetHashCode` |
| 9 | `const` vs `static readonly` for reference types | `const` is compile-time, baked into assemblies | Use `static readonly` for mutable data |
| 10 | Thread-safe singletons without locks | Race condition, creates multiple instances | Double-check locking or `Lazy<T>` |
| 11 | Not disposing `HttpClient` per request | Socket exhaustion | Use `IHttpClientFactory` or long-lived singleton |
| 12 | `ConfigureAwait(false)` missing in libraries | Deadlock in UI/SynchronizationContext | Use in library code |
| 13 | `Task.Result` / `Task.Wait()` | Deadlock (blocking on async) | Use `await` all the way up |

### SQL Traps

| # | Trap | Why It's Dangerous | Fix |
|---|------|-------------------|-----|
| 1 | `SELECT *` in production | Retrieves unused columns, breaks with schema change | Explicit column list |
| 2 | `DELETE` / `UPDATE` without `WHERE` | Modifies entire table | Always verify `WHERE` first, use `BEGIN TRAN` + `ROLLBACK` |
| 3 | N+1 queries in ORMs | 1 query for parent + N for children | Eager loading, batch queries |
| 4 | Implicit conversion in JOINs | Misses index (`varchar` = `nvarchar`) | Match types exactly |
| 5 | Not reading execution plans | Misses scans, spills, missing indexes | `EXPLAIN ANALYZE` |
| 6 | Over-indexing | Slows writes, takes storage space | Index by query patterns, remove unused |
| 7 | `NULL` comparisons with `=` | `NULL = NULL` is false | Use `IS NULL` or `COALESCE` |
| 8 | `NOT IN` with NULL subquery | Returns empty if subquery has NULL | Use `NOT EXISTS` |
| 9 | GUID as clustered primary key | Fragmentation (random inserts) | Sequential GUID or `INT IDENTITY` |
| 10 | `OR` conditions in WHERE | Prevents index seek | `UNION ALL` or refactor to `IN` |
| 11 | Large `IN` lists | Parameter sniffing, plan bloat | Table-valued parameter, temp join |
| 12 | `UPDATE` on large table without batching | Long transaction, log blow-up | Batch in chunks (e.g., `TOP 1000`) |

### JavaScript / TypeScript Traps

| # | Trap | Why It's Dangerous | Fix |
|---|------|-------------------|-----|
| 1 | `typeof null === "object"` | Long-standing JS bug | Explicit null check |
| 2 | `0 == false` is `true` | Type coercion confuses | Use `===` always |
| 3 | `NaN !== NaN` | NaN is never equal to itself | `Number.isNaN(x)` |
| 4 | Floating point: `0.1 + 0.2 !== 0.3` | IEEE 754 issue | Use fixed-point or epsilon |
| 5 | `this` in callbacks loses context | Arrow functions capture differently | Use arrow or `.bind(this)` |
| 6 | `sort()` without comparator | Sorts as strings: `[1, 10, 2]` | Always supply comparator |
| 7 | Modifying array during `forEach` | Index skips, unexpected behavior | Use `filter`/`reduce` or copy |
| 8 | `new Array(3).map(() => 1)` | Creates `[empty x 3]`, not fill | `Array(3).fill(1)` |
| 9 | TypeScript `enum` tree-shaking | Enums produce IIFE, not tree-shakeable | Prefer `const enum` or union types |
| 10 | `return` on new line (ASI) | Automatic semicolon insertion returns `undefined` | Keep return on same line |

### System Design Traps

| # | Trap | Why It's Dangerous | Fix |
|---|------|-------------------|-----|
| 1 | Forgetting to estimate first | Wrong scale decisions | Always estimate traffic, storage, bandwidth |
| 2 | Single point of failure | System goes down with one component | Every component must be redundant |
| 3 | Database as bottleneck | Everything hits DB directly | Add cache + read replicas |
| 4 | Ignoring caching | High DB load, slow reads | Cache at every layer (CDN, app, DB) |
| 5 | Over-engineering (microservices first) | Distributed monolith, complexity | Start monolith, extract when needed |
| 6 | Not discussing trade-offs | Appears inexperienced | Every decision has trade-offs - state them explicitly |
| 7 | Ignoring monitoring | Blind to problems | Add metrics, logging, tracing, alerts |
| 8 | Assuming network is reliable | Partitions happen | Design for failure, timeouts, retries |
| 9 | Sync communication everywhere | Cascading failures | Async queues, circuit breakers |
| 10 | Ignoring security | Data breaches | Auth, rate limits, input validation, encryption |

---

## Section 6: Senior-Level Questions

### Architecture Questions

<details>
<summary><b>1. How would you migrate a monolith to microservices?</b></summary>

**Strategy (Strangler Fig Pattern):**
1. **Identify bounded contexts** - Domain-driven design workshops
2. **Extract vertical slices** - Not horizontal layers (extract a complete feature)
3. **Anti-corruption layer** - Adapter between new microservice and old monolith
4. **Database per service** - Extract DB tables per bounded context
5. **Synchronize data** - Dual-write to both old and new during migration
6. **Gradual traffic shift** - Route Feature A to new service, Feature B stays
7. **Remove dead code** - Once all traffic moves, delete from monolith

**Critical success factors:**
- Incremental, not big-bang
- Feature flags to toggle between monolith and new service
- Strangler Fig: new code in new services, old code stays until replaced
- Observability: distributed tracing (OpenTelemetry) is mandatory

**Trade-offs:** Network latency (was in-process, now inter-service), data consistency (was ACID, now eventual), operational overhead.
</details>

<details>
<summary><b>2. Design a global multi-region active-active system</b></summary>

**Architecture:**
1. **Front Door / Global LB** - Route users to nearest region
2. **Stateless app tier** - Identical code in each region, auto-scale independently
3. **Database: Active-Active replication** - Each region writes to its own primary
4. **Conflict resolution** - CRDTs, last-write-wins (LWW), or custom merge logic
5. **Global traffic routing** - DNS-based (Traffic Manager) or Anycast (Azure Front Door)

**Consistency patterns:**
- Strong consistency within region, eventual across regions
- Write to local primary, replicate asynchronously
- Application-level conflict resolution (e.g., "last write wins" with hybrid timestamps)

**Failover:** Regional outage -> DNS/probe detects -> traffic routes to next closest region.
</details>

<details>
<summary><b>3. Design a system handling 100M DAU</b></summary>

**Key changes from smaller scale:**

| Aspect | Small (< 1M) | 100M DAU |
|--------|-------------|----------|
| **App tier** | 2-3 servers | 1000s of auto-scaling instances |
| **Database** | Single SQL | Sharded + replicas + cache |
| **Cache** | Optional | Mandatory at multiple layers |
| **CDN** | Nice to have | Essential for static/media |
| **Queues** | Optional | Critical for async processing |
| **Observability** | Basic logging | Full distributed tracing |
| **CI/CD** | Manual deploy | Automated canary/blue-green |
| **Team** | 5-10 engineers | 100s of engineers, many teams |

**Example numbers:** 100M DAU x 10 requests/day = 1B requests/day = 11,574 RPS avg, 50K RPS peak. Cache hit ratio: 95%. 256 DB shards.
</details>

<details>
<summary><b>4. How do you ensure data consistency across microservices?</b></summary>

**Patterns:**

| Pattern | How It Works | When to Use |
|---------|-------------|-------------|
| **Saga (Choreography)** | Each service publishes event, next service listens | Simple workflows, few services |
| **Saga (Orchestration)** | Coordinator tells each service what to do | Complex workflows, need visibility |
| **Outbox Pattern** | Write to DB + outbox table in same transaction | Guarantee message delivery |
| **CDC** | Capture DB changes, publish to stream | Decoupled, no dual-write |
| **Compensating Transactions** | Explicit undo logic per step | Long-running workflows |

**Best practices:** Idempotent handlers, idempotency keys, eventual consistency documentation, monitoring stale data.
</details>

<details>
<summary><b>5. Additional Senior Architecture Questions</b></summary>

5. Design a real-time analytics platform
6. How would you reduce database latency from 50ms to 5ms?
7. Design a highly available payment system
8. How do you handle schema changes in microservices? (Expand-Contract pattern)
9. Design a search engine (inverted index, BM25 ranking)
10. Design a news recommendation system
11. How do you handle distributed caching? (Redis cluster, consistent hashing)
12. Design a leaderboard system (Redis sorted sets)
13. How do you design for chaos engineering?
14. Design a system for global event ticketing (flash crowds)
15. How do you implement feature flags at scale?
16. Design a notification system (email/SMS/push)
17. How do you handle DB connection pooling at scale? (PgBouncer)
18. Design a content moderation system (ML + human review)
19. How do you ensure backward compatibility? (API versioning, contract testing)
20. Design a CI/CD pipeline for microservices
21. How do you handle secrets management at scale? (Vault)
22. Design collaborative document editing (Google Docs - OT vs CRDTs)
23. How do you implement rate limiting at scale?
24. Design a URL preview / link unfurling system
25. How do you design for multi-tenancy?
26. Design a service mesh (Envoy/Istio)
27. How do you reduce cold start in serverless?
28. Design a job scheduler (cron at scale)
29. How do you design a feature store for ML?
30. Design an AB testing platform
31. How do you handle high-cardinality monitoring? (Thanos/Cortex)
32. Design a data pipeline for real-time ML inference
33. How do you design for data sovereignty (GDPR)?
34. Design a 100TB+ file storage system
35. How do you design an audit log system? (append-only, immutable)
36. Design a chatbot platform
37. How do you implement global search across microservices? (Elasticsearch + CDC)
38. Design a dependency injection container from scratch
39. How do you handle slow clients in HTTP servers? (timeouts, backpressure)
40. Design a pub/sub system from scratch
41. How do you design for SOC2 / compliance?
42. Design a data lake architecture
43. How do you implement zero-downtime deployment?
44. Design a distributed tracing system
45. How do you handle schema evolution in event-driven systems? (Schema Registry)
46. Design an IoT device management system
47. How do you reduce observability costs? (sampling, aggregation, retention tiers)
48. Design a cost-optimized cloud architecture
49. How do you design a developer portal?
50. Design a URL shortener for 100B+ URLs
</details>

### Leadership Questions

<details>
<summary><b>1. How do you handle technical disagreement?</b></summary>

**Framework:**
1. Understand first: "Help me understand your perspective"
2. Find shared goals: "We both want the system to be reliable"
3. Data over opinion: Prototype, benchmark, POC to resolve objectively
4. Trade-off matrix: List pros/cons of each option explicitly
5. Escalate only if needed: Not who's right, but what's right for the business
6. Disagree and commit: Once a decision is made, get behind it fully
</details>

<details>
<summary><b>2. Describe a time you influenced without authority</b></summary>

**Framework:**
- **Situation:** Cross-team initiative where you didn't manage the people
- **Task:** Get buy-in for a technical change
- **Action:** Build relationships, create a prototype, share data, find allies
- **Result:** Change adopted, relationships strengthened
</details>

<details>
<summary><b>3. How do you mentor junior engineers?</b></summary>

**Framework:**
- Assess skill level (Dreyfus model: Novice -> Expert)
- Scaffold appropriately: Novice gets detailed guidance, Competent gets autonomy
- Teach principles, not answers: "Let's trace through what happens when..."
- Create psychological safety: blameless post-mortems
- Incremental challenge: stretch assignments just beyond current capability
- Regular 1:1s: weekly 30 min, focus on their growth
</details>

<details>
<summary><b>4. How do you prioritize technical debt vs features?</b></summary>

**Framework:**
1. Categorize debt: Strategic (pay down first) vs Tactical (pay down before adding)
2. Quantify impact: "This pattern costs us 2 sprint days per feature"
3. Pay as you go: Boy Scout rule - leave code cleaner than you found it
4. Budget allocation: 20% sprint capacity for debt reduction
5. Make it visible: Track debt items in backlog with cost/benefit

| Debt Type | Impact | Action |
|-----------|--------|--------|
| Security vulnerability | Critical | Do now |
| Bugs affecting customers | High | Next sprint |
| Slow CI pipeline | Medium | Schedule |
| Code style inconsistencies | Low | Backlog |
</details>

<details>
<summary><b>5. Tell me about a system you designed that failed</b></summary>

**Framework:** Honest admission + lessons learned. Show growth, not blame.

**Example structure:**
> "I designed [system] that failed because [root cause]. We learned [lesson 1], [lesson 2], and [lesson 3]. I now always [changed behavior]."
</details>

---

## Section 7: Mnemonics & Memory Aids

### Acronyms

| Acronym | Stands For | Category |
|---------|------------|----------|
| **ACID** | Atomicity, Consistency, Isolation, Durability | Database |
| **BASE** | Basically Available, Soft state, Eventually consistent | Database |
| **CAP** | Consistency, Availability, Partition tolerance | Distributed Systems |
| **PACELC** | Partition -> CA else Latency/Consistency | Distributed Systems |
| **SOLID** | Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion | OOP |
| **DRY** | Don't Repeat Yourself | Engineering |
| **KISS** | Keep It Simple, Stupid | Engineering |
| **YAGNI** | You Ain't Gonna Need It | Engineering |
| **CQRS** | Command Query Responsibility Segregation | Architecture |
| **CRDT** | Conflict-free Replicated Data Type | Distributed Systems |
| **OTel** | OpenTelemetry | Observability |
| **SLO** | Service Level Objective | Reliability |
| **SLI** | Service Level Indicator | Reliability |
| **SLA** | Service Level Agreement | Reliability |
| **RTO** | Recovery Time Objective | DR |
| **RPO** | Recovery Point Objective | DR |
| **MTBF** | Mean Time Between Failures | Reliability |
| **MTTR** | Mean Time To Recover | Reliability |
| **DDD** | Domain-Driven Design | Architecture |
| **TDD** | Test-Driven Development | Methodology |
| **BDD** | Behavior-Driven Development | Methodology |
| **CORS** | Cross-Origin Resource Sharing | Security |
| **JWT** | JSON Web Token | Auth |
| **OAuth** | Open Authorization | Auth |
| **OWASP** | Open Web Application Security Project | Security |
| **IaC** | Infrastructure as Code | DevOps |
| **HPA** | Horizontal Pod Autoscaler | K8s |
| **VPA** | Vertical Pod Autoscaler | K8s |
| **PVC** | Persistent Volume Claim | K8s |
| **LRU** | Least Recently Used | Cache |
| **LFU** | Least Frequently Used | Cache |
| **TTL** | Time To Live | Cache |

### Memory Phrases

| Mnemonic | Phrase | Stands For |
|----------|--------|------------|
| **OSI Model** | Please Do Not Throw Sausage Pizza Away | Physical, Data Link, Network, Transport, Session, Presentation, Application |
| **HTTP Statuses** | 100s are Hold, 200s are Good, 300s Go Away, 400s Your Bad, 500s Their Bad | Status codes |
| **SOLID (S)** | Single Responsibility - one reason to change | SOLID |
| **SOLID (O)** | Open for extension, closed for modification | SOLID |
| **SOLID (L)** | Liskov Substitution - subtype must replace base | SOLID |
| **SOLID (I)** | Interface Segregation - don't force unused methods | SOLID |
| **SOLID (D)** | Dependency Inversion - depend on abstractions | SOLID |
| **Normal Forms** | The key (1NF), the whole key (2NF), and nothing but the key (3NF) | 1-3NF |
| **Big-O growth** | O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!) | Complexity |
| **SQL Order** | FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY | Query execution |

### Quick Reference Diagrams

```
        CAP THEOREM
        You Choose 2 of 3
    Consistency ---- Availability
           \        /
      Partition Tolerance
```

```
        SQL ORDER OF EXECUTION
    1. FROM (including JOINs)
    2. WHERE
    3. GROUP BY
    4. HAVING
    5. SELECT
    6. ORDER BY
    7. LIMIT/OFFSET
```

---

## Section 8: Behavioral Questions (STAR Method)

### The STAR Framework

| Letter | Stands For | What to Include |
|--------|------------|-----------------|
| **S** | **Situation** | Set the context: project, team size, timeline, tech stack |
| **T** | **Task** | What specifically needed to be done? Your role? |
| **A** | **Action** | What YOU did (always use "I", not "we"). Steps taken, decisions made |
| **R** | **Result** | Quantifiable outcome: metrics, impact, $$, %, time saved, lessons learned |

### Top 10 Behavioral Questions

<details>
<summary><b>1. Tell me about yourself (30-second pitch)</b></summary>

**Structure:** Present -> Past -> Future

> "I'm a senior software engineer specializing in distributed systems and cloud architecture. Currently at Acme Corp, I lead the platform engineering team where I designed a multi-region active-active system that handles 50K requests per second with 99.99% uptime. Before that, I spent 5 years building microservices at Startup Inc, migrating a monolith to 12 services. I'm passionate about large-scale systems, mentoring engineers, and solving hard infrastructure problems - which is why I'm excited about this Staff Engineer role."
</details>

<details>
<summary><b>2. Describe a challenging project</b></summary>

**S:** Our e-commerce platform had 5-second page load times during Black Friday, losing $2M/hour in revenue.

**T:** Reduce 95th percentile page load time from 5s to under 500ms, handle 10x peak traffic.

**A:** I led a performance investigation. Profiled with Application Insights -> bottleneck was 18 DB queries per page. Implemented Redis caching (cache-aside) -> reduced to 2 queries. Optimized with covering indexes -> 10ms each. Added CDN for static assets -> 80% cache hit rate. Implemented lazy loading for below-the-fold content.

**R:** Page load time dropped from 5s to 350ms (93% improvement). Black Friday revenue hit $12M (40% YoY growth). The caching pattern was adopted across the org.
</details>

<details>
<summary><b>3. Describe a conflict with a coworker</b></summary>

**S:** A senior backend engineer refused to write unit tests, claiming they "slow us down."

**T:** We needed test coverage to prevent regressions in our payment system.

**A:** I asked for a pairing session to understand his perspective (he was burned by flaky tests). Proposed a compromise: write tests for critical paths only. Set up a demo showing how tests caught 3 regressions in the first week.

**R:** Test coverage went from 15% to 68% in 6 months. The engineer became our testing advocate. Defect rate dropped 70%.
</details>

<details>
<summary><b>4. Describe a time you failed</b></summary>

**S:** I was leading a migration from a legacy monolith to microservices.

**T:** Migrate the inventory system in 2 months.

**A:** I pushed for a "big bang" cutover instead of incremental migration. Underestimated data consistency requirements. On launch day, inventory counts were inconsistent between old and new systems, causing over-selling.

**R:** We rolled back within 2 hours. Lost $50K in revenue. I owned the mistake in the post-mortem. **Lesson learned:** I now always use strangler fig pattern - incremental cuts, dual-writes during migration, and thorough data reconciliation before cutover.
</details>

<details>
<summary><b>5. Showed leadership</b></summary>

**S:** Team struggling with on-call burnout - 20+ pages per week for non-urgent alerts.

**T:** Reduce alert fatigue and improve on-call experience.

**A:** Analyzed 3 months of alerts -> 80% were auto-remediating or non-actionable. Proposed new alert classification (P1/P2/P3). Built automation to auto-close known non-actionable alerts. Implemented runbooks for common P1 scenarios.

**R:** On-call pages dropped from 20/week to 3/week. Average response to real incidents improved from 15min to 3min.
</details>

<details>
<summary><b>6. Had to learn something quickly</b></summary>

**S:** Critical production issue caused by Redis cluster misconfiguration. Redis expert on leave.

**T:** Diagnose and fix within hours or lose $100K/day.

**A:** Read Redis cluster docs (30 min). Connected to cluster, analyzed logs -> split-brain. Called expert for 15-min consult. Implemented quorum-based leader election. Wrote runbook.

**R:** Resolved within 2 hours. Runbook used in 3 subsequent incidents.
</details>

<details>
<summary><b>7. Improved a process</b></summary>

**S:** CI/CD pipeline took 45 minutes per build, blocking developers 4-5 times per day.

**T:** Reduce build time to improve developer velocity.

**A:** Profiled pipeline. Introduced Docker layer caching + NuGet cache (20min -> 8min). Split tests: unit (parallel), integration (parallel), E2E in separate stage. Implemented incremental builds and GitHub Actions matrix builds.

**R:** CI reduced from 45 min to 12 min (73% improvement). Deploy frequency increased from 3/week to 3/day.
</details>

<details>
<summary><b>8. Made a difficult decision</b></summary>

**S:** Team had to choose between rewriting AngularJS frontend to React or continuing with legacy stack.

**T:** Make the right call for the business, knowing rewrite is risky.

**A:** Analyzed data: 60% of bugs in frontend, velocity 3x slower. Proposed "rebuild alongside" - new features in React, maintain legacy. Calculated ROI: 12 months break-even. Presented risks with checkpoint plan.

**R:** Hit 9-month checkpoint on track. 18 months later, entire frontend modernized. Bug rate dropped 80%, feature velocity doubled.
</details>

<details>
<summary><b>9. Dealt with ambiguity</b></summary>

**S:** Product team wanted "real-time analytics" but couldn't define requirements.

**T:** Build a system with unclear requirements, minimizing rework.

**A:** Built thin prototype in 2 weeks: Kafka + dashboard for page views. Used prototype to facilitate concrete discussions. Designed backend with event sourcing for flexibility. Set expectations: "6 weeks for v1, then iterate."

**R:** V1 shipped in 6 weeks. After 3 iterations over 3 months, platform had 40+ metrics, session replay, and funnel analysis.
</details>

<details>
<summary><b>10. Why do you want to work here?</b></summary>

**Structure:** Company -> Role -> You

> "I've been following your engineering blog for 2 years - your work on [specific project/tech] at [company] aligns with my experience in [relevant expertise]. I'm excited about this role because it combines [specific aspects]. My background in [relevant experience] and passion for [relevant skill] would let me contribute from day one while growing in [area you want to develop]."
</details>

### More STAR Stories to Prepare

| Theme | Story Idea |
|-------|------------|
| **Technical excellence** | Optimized a slow system, improved reliability |
| **Leadership** | Led a cross-team initiative, mentored juniors |
| **Failure** | A system that failed, a mistake you made |
| **Conflict** | Disagreement with peer, stakeholder pushback |
| **Innovation** | Introduced a new technology, process improvement |
| **Customer focus** | Went above and beyond for a customer |
| **Decision-making** | Made a hard call with incomplete data |
| **Ambiguity** | Navigated unclear requirements, built from scratch |
| **Growth** | Learned a new skill fast, overcame a weakness |
| **Teamwork** | Collaborated successfully on a complex project |

---

## Section 9: Mind Maps

### System Design Mind Map

```
SYSTEM DESIGN
├── 1. REQUIREMENTS
│   ├── Functional: what the system must do
│   └── Non-functional: scalability, latency, availability, consistency
├── 2. CAPACITY ESTIMATION
│   ├── Traffic (QPS) = DAU x Avg Req / 86400
│   ├── Storage = Total Records x Record Size x Replication
│   └── Bandwidth = Avg Response Size x QPS
├── 3. DATA MODEL
│   ├── SQL (ACID, joins, normalized)
│   ├── NoSQL (BASE, denormalized)
│   │   ├── Document (MongoDB, Cosmos DB)
│   │   ├── Key-Value (Redis, DynamoDB)
│   │   ├── Column (Cassandra, HBase)
│   │   └── Graph (Neo4j)
│   └── Sharding
│       ├── Range-based
│       ├── Hash-based (consistent hashing)
│       └── Directory-based
├── 4. API DESIGN
│   ├── REST (resources, CRUD)
│   ├── gRPC (typed, streaming)
│   └── GraphQL (query flexibility)
├── 5. HIGH-LEVEL ARCHITECTURE
│   ├── DNS -> CDN -> LB -> Reverse Proxy -> App -> Cache -> DB
│   └── Async: Queue -> Workers -> Analytics
├── 6. KEY COMPONENTS
│   ├── Caching
│   │   ├── CDN (static content)
│   │   ├── Redis/Memcached (app data)
│   │   └── Browser (HTTP cache headers)
│   ├── Load Balancing
│   │   ├── L4 (TCP, faster)
│   │   └── L7 (HTTP, smarter)
│   ├── Database
│   │   ├── Indexes (clustered, nonclustered, covering)
│   │   ├── Replication (leader-follower, multi-leader)
│   │   └── Partitioning
│   ├── Message Queue
│   │   ├── Kafka (durable, replay)
│   │   └── RabbitMQ (routing, reliable)
│   └── Observability
│       ├── Metrics (Prometheus)
│       ├── Logs (ELK)
│       └── Traces (OpenTelemetry)
├── 7. TRADE-OFFS
│   ├── Consistency vs Availability (CAP)
│   ├── SQL vs NoSQL
│   ├── Monolith vs Microservices
│   ├── Sync vs Async
│   └── Cost vs Performance
└── 8. CLASSIC DESIGNS
    ├── URL Shortener
    ├── Chat System
    ├── Video Streaming
    ├── Ride Sharing
    ├── Social Feed
    └── Rate Limiter
```

### C# Mind Map

```
C#
├── TYPES
│   ├── Value (struct, enum)
│   │   ├── Stack-allocated
│   │   ├── Copied by value
│   │   └── Cannot be null (unless nullable)
│   ├── Reference (class, record, interface, delegate)
│   │   ├── Heap-allocated
│   │   ├── Copied by reference
│   │   └── Can be null
│   └── Special
│       ├── string (immutable, reference type)
│       ├── dynamic (runtime-typed)
│       └── Span<T> (ref struct, stack-only)
├── OOP
│   ├── Encapsulation: private fields, public properties
│   ├── Inheritance: single class, multiple interfaces
│   ├── Polymorphism: virtual/override, abstract, new
│   └── Composition: HAS-A over IS-A
├── ASYNC
│   ├── Task<T>, ValueTask<T>
│   ├── async/await state machine
│   ├── ConfigureAwait(false)
│   └── Task.WhenAll, Task.WhenAny
├── LINQ
│   ├── IEnumerable (delegates, in-memory)
│   └── IQueryable (expression trees, remote)
├── PATTERNS
│   ├── Pattern Matching (is, switch, and, or, not)
│   ├── Records (value equality, with)
│   └── Primary Constructors (C# 12)
├── MEMORY MANAGEMENT
│   ├── GC Generations (0, 1, 2)
│   ├── LOH (>= 85KB)
│   ├── IDisposable, using statement
│   └── stackalloc, Span<T>
└── CONCURRENCY
    ├── lock (Monitor.Enter/Exit)
    ├── SemaphoreSlim, ReaderWriterLockSlim
    ├── Concurrent Collections
    ├── Interlocked operations
    └── Channels (producer/consumer)
```

### .NET / ASP.NET Core Mind Map

```
.NET
├── APPLICATION MODEL
│   ├── Program.cs (top-level statements)
│   ├── Minimal APIs (lambda per route)
│   └── Controllers (traditional MVC)
├── MIDDLEWARE
│   ├── ExceptionHandler -> HSTS -> HTTPS -> StaticFiles
│   ├── Routing -> Auth -> Endpoint
│   └── Custom: app.Use(), app.Run(), app.Map()
├── DI CONTAINER
│   ├── AddSingleton (1 for lifetime)
│   ├── AddScoped (1 per request)
│   └── AddTransient (new per injection)
├── CONFIGURATION
│   ├── Layers: json -> env -> secrets -> args
│   ├── IOptions<T>, IOptionsSnapshot<T>, IOptionsMonitor<T>
│   └── Azure App Configuration
├── AUTH / AUTHORIZATION
│   ├── JWT Bearer
│   ├── Policies, Roles, Claims
│   └── Identity (ASP.NET Core Identity)
├── DATA ACCESS
│   ├── EF Core (ORM)
│   ├── Dapper (micro-ORM)
│   └── ADO.NET (raw)
├── REAL-TIME
│   ├── SignalR (WebSockets)
│   └── gRPC (HTTP/2, Protobuf)
├── RESILIENCE
│   ├── Polly (retry, circuit breaker)
│   ├── Rate Limiting (.NET 7+)
│   └── Health Checks
└── HOSTING
    ├── Kestrel (cross-platform)
    ├── IIS (Windows)
    └── Native AOT (no JIT, smaller)
```

### SQL Mind Map

```
SQL
├── QUERYING
│   ├── SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY
│   ├── JOIN (INNER, LEFT, RIGHT, FULL, CROSS)
│   ├── Subqueries (correlated, non-correlated)
│   └── CTE (WITH, recursive)
├── WINDOW FUNCTIONS
│   ├── ROW_NUMBER(), RANK(), DENSE_RANK()
│   ├── LEAD(), LAG()
│   └── Aggregate: SUM() OVER(), AVG() OVER()
├── INDEXES
│   ├── Clustered (physical sort)
│   ├── Nonclustered (pointer)
│   ├── Covering (includes all columns)
│   ├── Filtered (WHERE on index)
│   └── Columnstore (analytics)
├── PERFORMANCE
│   ├── Execution plans (seek > scan > lookup)
│   ├── Statistics (histogram)
│   ├── Parameter sniffing
│   ├── SARGability
│   └── Fragmentation (rebuild >30%, reorg 5-30%)
├── TRANSACTIONS
│   ├── ACID
│   ├── Isolation levels
│   ├── Deadlocks
│   └── NOLOCK / SNAPSHOT
└── DESIGN
    ├── Normalization (1NF, 2NF, 3NF, BCNF)
    ├── Denormalization (read performance)
    ├── Partitioning (range, list, hash)
    └── Index strategies
```

### Angular Mind Map

```
ANGULAR
├── BUILDING BLOCKS
│   ├── Modules (NgModule, standalone)
│   ├── Components (template + class + styles)
│   ├── Services (business logic, DI)
│   ├── Pipes (data transformation)
│   └── Directives (structural, attribute)
├── DATA BINDING
│   ├── Interpolation: {{ value }}
│   ├── Property: [property]="expr"
│   ├── Event: (event)="handler()"
│   └── Two-way: [(ngModel)]
├── REACTIVITY
│   ├── RxJS (Observable, Subject, BehaviorSubject)
│   │   ├── Operators: map, filter, switchMap, debounceTime
│   │   └── AsyncPipe
│   └── Signals (signal, computed, effect)
├── ROUTING
│   ├── Route config (path -> component)
│   ├── Guards (CanActivate, CanDeactivate)
│   ├── Lazy Loading
│   └── Resolvers (pre-fetch data)
├── FORMS
│   ├── Reactive (FormGroup, FormControl)
│   └── Template-driven (ngModel)
├── CHANGE DETECTION
│   ├── Default (Zone.js, check all)
│   └── OnPush (input refs, async pipe)
├── HTTP
│   ├── HttpClient
│   ├── Interceptors (auth, logging, error)
│   └── Error handling
└── STATE MANAGEMENT
    ├── NgRx (Redux: actions, reducers, store, effects)
    ├── Akita
    └── NgXs
```

---

## Section 10: Formula Sheet

### Capacity Estimation Formulas

| Formula | Description |
|---------|-------------|
| `QPS = DAU x Avg Requests per User / 86400` | Queries per second |
| `Peak QPS = Avg QPS x 2-5` | Peak multiplier |
| `Storage = Total Records x Record Size x Replication Factor` | Total storage needed |
| `Bandwidth = Avg Response Size x QPS` | Network bandwidth |
| `Cache Size = (20% data that gets 80% traffic) x Total Data` | Working set estimation |
| `Daily Active Users = MAU x 0.5` | Typical DAU/MAU ratio |
| `Concurrent Users = DAU x Avg Session Length (sec) / 86400` | Active concurrent users |
| `IOPS = Total Reads + Writes / 86400` | Disk operations per second |

### Latency Numbers Every Engineer Should Know

| Operation | Latency | Relative |
|-----------|---------|----------|
| L1 cache reference | 0.5 ns | 1x |
| Branch mispredict | 5 ns | 10x |
| L2 cache reference | 7 ns | 14x |
| Mutex lock/unlock | 25 ns | 50x |
| Main memory reference | 100 ns | 200x |
| Compress 1KB with Zippy | 3,000 ns (3 us) | 6,000x |
| SSD random read | 16,000 ns (16 us) | 32,000x |
| SSD sequential 1MB read | 49,000 ns (49 us) | 98,000x |
| Disk seek | 2,000,000 ns (2 ms) | 4,000,000x |
| Network round-trip (same DC) | 500,000 ns (0.5 ms) | 1,000,000x |
| Network round-trip (same region) | 5,000,000 ns (5 ms) | 10,000,000x |
| Network round-trip (cross-continent) | 150,000,000 ns (150 ms) | 300,000,000x |

### Power of Two Reference

| Power | Approx Value | Unit |
|-------|-------------|------|
| 2^10 | 1,024 | 1 Thousand (K) |
| 2^20 | 1,048,576 | 1 Million (M) |
| 2^30 | 1,073,741,824 | 1 Billion (G) |
| 2^40 | 1,099,511,627,776 | 1 Trillion (T) |

### Big-O Complexity Chart

| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | Hash table lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Array iteration |
| O(n log n) | Linearithmic | Merge sort, Quick sort |
| O(n^2) | Quadratic | Bubble sort, nested loops |
| O(2^n) | Exponential | Fibonacci (naive) |
| O(n!) | Factorial | Traveling salesman (naive) |

### HTTP Status Codes to Remember

| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | Success |
| 201 | Created | POST created resource |
| 204 | No Content | DELETE success |
| 301 | Moved Permanently | URL redirect |
| 302 | Found (Temporary redirect) | Temporary redirect |
| 304 | Not Modified | Cache valid |
| 400 | Bad Request | Client error, validation |
| 401 | Unauthorized | No auth or invalid |
| 403 | Forbidden | Auth but no permission |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate, version conflict |
| 429 | Too Many Requests | Rate limited |
| 500 | Internal Server Error | Unhandled server error |
| 502 | Bad Gateway | Upstream failed |
| 503 | Service Unavailable | Overloaded, maintenance |
| 504 | Gateway Timeout | Upstream too slow |

---

## Section 11: Company-Specific Interview Guides

### Microsoft

**Interview Process:**
1. Recruiter Screen (30 min) - Background, motivation
2. Phone Screen (45-60 min) - Coding/problem solving
3. Onsite Loop (4-5 rounds x 45 min)
   - 2-3 coding rounds
   - 1 system design
   - 1 behavioral/Azure
   - 1 ASAPP (Ask Sit And Pair Program)
4. Hiring Committee Review
5. Offer

**Focus Areas:**
- **System Design:** Azure services, distributed systems, large-scale data
- **Coding:** C# preferred, algorithms, data structures
- **Behavioral:** Growth mindset, customer-obsessed, diverse & inclusive
- **Azure:** Know Azure services deeply (Storage, Compute, Networking)

**Microsoft Culture Principles:**
- Growth mindset: learn from failures, seek feedback
- Customer-obsessed: understand customer needs
- Diverse & inclusive: value different perspectives
- One Microsoft: cross-team collaboration

**Common Questions:**
- Design a distributed key-value store
- Design Azure Blob Storage
- How would you design a rate limiter?
- Design a global DNS system
- Reverse a linked list, detect cycle
- "Tell me about a time you had to learn a new technology quickly"

### Amazon

**Interview Process:**
1. Phone Screen (45-60 min) - Coding + Leadership Principle questions
2. Onsite Loop (4-5 rounds)
   - 1-2 coding rounds
   - 1 system design
   - 1 behavioral (all LPs)
   - 1 bar raiser (focus on LPs + culture fit)
3. Debrief (interviewers + bar raiser)
4. Offer

**Focus Areas:**
- **Leadership Principles (14):** Know ALL of them with stories
- **System Design:** Scalability, cost optimization, fault tolerance
- **Coding:** Any language (Java, Python, C++ preferred), algorithms, OOD
- **Bar Raiser:** Higher bar, looks for long-term success

**14 Leadership Principles:**
1. Customer Obsession
2. Ownership
3. Invent and Simplify
4. Are Right, A Lot
5. Learn and Be Curious
6. Hire and Develop the Best
7. Insist on the Highest Standards
8. Think Big
9. Bias for Action
10. Frugality
11. Earn Trust
12. Dive Deep
13. Have Backbone; Disagree and Commit
14. Deliver Results

**Common LP Questions:**
- "Tell me about a time you went above and beyond for a customer" (Customer Obsession)
- "Describe a time you had to disagree with your manager" (Have Backbone)
- "Tell me about a time you made a mistake" (Ownership)
- "Describe a time you simplified a complex system" (Invent and Simplify)
- "Tell me about a time you took a calculated risk" (Bias for Action)

### Google

**Interview Process:**
1. Recruiter Screen (15-30 min) - Background
2. Phone Screen (45 min) - Coding (Google Docs, no IDE)
3. Onsite Loop (4-5 rounds)
   - 2-3 coding/data structures
   - 1 system design
   - 1 Googleyness (behavioral/culture fit)
4. Hiring Committee (HC) - Reviews all feedback
5. Compensation Committee
6. Offer

**Focus Areas:**
- **Algorithms (heavy):** LeetCode medium/hard, DS mastery
- **System Design:** Google-scale systems, trade-offs
- **Languages:** Go (growing), C++, Java, Python
- **Googleyness:** Ambiguity, collaboration, humility, growth mindset

**Google's Gating Factors:**
- **Coding:** Must pass ALL coding rounds (no weak signal allowed)
- **HC:** Looks for consistency across interviewers
- **Hiring bar:** Extremely high for L4+, slightly lower for L3

**Common Questions:**
- Design Google Search
- Design Google Docs (collaborative editing)
- Design YouTube
- Design Google Maps
- "Design a function to return the top K most frequent elements"
- Maximum subarray, merge intervals, word break (typical DP)

### Meta (Facebook)

**Interview Process:**
1. Recruiter Screen (30 min) - Motivation, logistics
2. Phone Screen (45 min) - Coding
3. Onsite Loop (4-5 rounds)
   - 2-3 coding
   - 1 system design
   - 1 behavioral / product sense
4. Cross-functional debrief
5. Offer

**Focus Areas:**
- **Speed:** You must solve problems quickly (35 min per problem)
- **Full-stack:** Both frontend and backend knowledge
- **Product sense:** How would you improve product X?
- **System design:** Real-time, social graph, feed, messaging

**Meta Culture:**
- Move fast
- Be open
- Build social value
- Focus on impact

**Common Questions:**
- Design Facebook News Feed
- Design Messenger/WhatsApp
- Design Instagram Stories
- "Design a system for friend suggestions"
- "Product sense: What would you change about Facebook Messenger?"
- Coding: You MUST write clean, working code quickly

---

## Section 12: Last-Minute Checklist

### Week Before Interview

- [ ] Review this cheatsheet front to back
- [ ] Know your resume inside out - every bullet point
- [ ] Prepare 30-second introduction (present -> past -> future)
- [ ] Prepare 5 STAR stories covering: leadership, failure, conflict, technical challenge, success
- [ ] Review latency numbers (L1: 0.5ns, RAM: 100ns, SSD: 16us, Disk: 2ms)
- [ ] Practice 2 system designs aloud (timed, 30 min each)
- [ ] Review top 10 LeetCode patterns (sliding window, two pointers, BFS/DFS, DP, etc.)
- [ ] Review company's engineering blog (last 3 months)
- [ ] Prepare 3-5 questions to ask the interviewer

### Day Before Interview

- [ ] Confirm logistics (time, location, format, which tools)
- [ ] Test your setup (camera, mic, internet, IDE, screen share)
- [ ] Review resume and portfolio
- [ ] Review STAR stories
- [ ] Do 1 easy LeetCode warmup (don't cram!)
- [ ] Prepare a notepad + pen for system design
- [ ] Set up two monitors if possible (coding + research)
- [ ] Lay out clothes
- [ ] Charge devices
- [ ] Get good sleep! (8 hours minimum)

### Day of Interview

- [ ] Eat a good breakfast (not too heavy)
- [ ] Log in 10 minutes early
- [ ] Have water nearby
- [ ] **Clarify requirements first** before coding
- [ ] **Think out loud** throughout the entire interview
- [ ] **Start with brute force**, then optimize
- [ ] **Test with examples** (edge cases: null, empty, large input)
- [ ] **Analyze time/space complexity** before finishing
- [ ] **If stuck**, ask for hints (shows collaboration)
- [ ] **Ask questions** at the end (shows genuine interest)

### Good Questions to Ask the Interviewer

```
Technical:
- "What's the most challenging technical problem your team is solving?"
- "How do you handle technical debt?"
- "What's the tech stack and how do you make technology decisions?"

Team/Culture:
- "How does the team handle on-call?"
- "What does career growth look like for this role?"
- "How would you describe the team culture?"

Product:
- "What's the biggest impact the team has made recently?"
- "What are the priorities for the next 6 months?"
- "How does the team measure success?"
```

---

> **🏁 You made it to the end of Volume 16.**
>
> This is the final volume of the 16-volume cheatsheet series. You now have a complete, actionable reference covering C#, .NET, EF Core, SQL, Angular, JavaScript/TypeScript, Data Structures & Algorithms, System Design, Azure, DevOps, and Interview Strategy.
>
> **Final advice from a Principal Engineer:**
> - Interviews are conversations, not interrogations
> - You don't need to know everything - you need to think clearly
> - Be honest about what you don't know
> - Show enthusiasm for the work, not just the title
> - The company is also interviewing for fit - be yourself
>
> Good luck! 🚀
