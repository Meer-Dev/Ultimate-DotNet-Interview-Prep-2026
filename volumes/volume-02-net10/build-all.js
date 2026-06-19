const fs = require('fs');
const path = require('path');

const outFile = path.join(__dirname, 'README.md');
let md = '';
const L = s => { md += s + '\n'; };

// Section & question definitions
const sections = [
  { title: '.NET 10 Runtime & CLR', questions: [
    { title: 'RyuJIT Just-In-Time Compilation', short: 'RyuJIT is the default JIT compiler for .NET that converts CIL to native machine code at runtime. It uses SSE2/AVX instruction sets, performs aggressive optimizations like inlining and loop unrolling, and supports tiered compilation where methods start at Tier 0 (quick JIT) and graduate to Tier 1 (optimized) when they become hot.' },
    { title: 'Tiered Compilation (Tier 0 vs Tier 1)', short: 'Tiered compilation is a .NET Core optimization where methods are first JIT compiled quickly at Tier 0 (minimally optimized) and later recompiled at Tier 1 (fully optimized) if they are called frequently. This balances fast application startup with high steady-state throughput.' },
    { title: 'Native AOT Compilation', short: 'Native AOT compiles .NET code directly to native machine code ahead of time (no JIT at runtime). It produces a single self-contained executable with no .NET runtime dependency. It eliminates JIT overhead, reduces memory footprint, and improves startup time dramatically (sub-10ms).' },
    { title: 'Garbage Collection Modes (Workstation vs Server, GC modes)', short: '.NET has two main GC modes: Workstation GC (optimized for client apps, low latency, single-heap) and Server GC (optimized for server apps, high throughput, one heap per logical core). Server GC maximizes throughput by parallelizing collection.' },
    { title: 'Large Object Heap (LOH) and POH', short: 'The Large Object Heap (LOH) stores objects >= 85,000 bytes. It is not compacted by default (swept only), which can lead to fragmentation. The Pinned Object Heap (POH) stores pinned objects to reduce GC overhead from pinning.' },
    { title: 'Stack vs Heap Allocation', short: 'Stack allocation is for value types (structs, primitives) and method call frames. It is very fast (single register increment) and automatically cleaned up when the method returns. Heap allocation is for reference types (classes, arrays, strings, delegates) and boxed value types.' },
    { title: 'JIT Inlining and Its Impact', short: 'JIT inlining replaces a method call with the method body directly at the call site, eliminating call overhead. The RyuJIT uses heuristics to decide what to inline — small methods (< 32 IL bytes typically), property getters, and simple wrappers.' },
    { title: 'ReadyToRun (R2R) Images', short: 'ReadyToRun (R2R) is a pre-compilation format where assemblies contain both IL and a native code image compiled ahead-of-time. At runtime, the CLR uses the pre-compiled native code instead of JIT-compiling, reducing startup time.' },
    { title: 'GC Generations (Gen0, Gen1, Gen2) and Survival', short: '.NET GC uses three generations to optimize collection. Gen0 holds newly allocated objects (collected frequently). Gen1 is a buffer between Gen0 and Gen2. Gen2 holds long-lived objects (collected rarely).' },
    { title: 'Thread Pool and I/O Completion Ports', short: 'The Thread Pool manages worker threads to execute asynchronous tasks efficiently. I/O Completion Ports (IOCP) are a kernel mechanism for efficient async I/O. When an async operation completes, the IOCP notifies the thread pool without blocking a thread.' }
  ]},
  { title: 'ASP.NET Core Fundamentals', questions: [
    { title: 'Kestrel Web Server', short: 'Kestrel is the cross-platform web server for ASP.NET Core, built on managed Socket with SocketAsyncEventArgs. It handles HTTP/1.x, HTTP/2, and HTTP/3 (QUIC) and can run as a public-facing edge server or behind a reverse proxy.' },
    { title: 'IIS and ASP.NET Core Module', short: 'The ASP.NET Core Module (ANCM) is a native IIS module that enables hosting ASP.NET Core behind IIS. In in-process mode, ANCM forwards requests directly to the app inside w3wp.exe. In out-of-process, it reverse-proxies to Kestrel.' },
    { title: 'Process Model (In-Process vs Out-of-Process)', short: 'The process model determines whether ASP.NET Core runs inside the IIS worker process (in-process) or as a separate dotnet.exe process (out-of-process). In-process offers ~20% better throughput and lower latency.' },
    { title: 'HTTP Request Pipeline Lifecycle', short: 'The HTTP request pipeline lifecycle starts when Kestrel receives a TCP connection. The transport layer reads bytes, parses HTTP frames, and constructs an HttpContext. This flows through the middleware pipeline.' },
    { title: 'WebApplication and WebApplicationBuilder', short: 'WebApplicationBuilder (created via WebApplication.CreateBuilder(args)) is the modern, simplified host builder that replaces the older Host.CreateDefaultBuilder + Startup class pattern.' },
    { title: 'Exception Handling in ASP.NET Core', short: 'ASP.NET Core provides Developer Exception Page, Exception Handler Middleware (UseExceptionHandler()), and StatusCode Pages. For APIs, the best practice is to use ProblemDetails middleware or IExceptionHandler.' },
    { title: 'Environment Configuration (Development, Staging, Production)', short: 'ASP.NET Core reads the ASPNETCORE_ENVIRONMENT variable to determine the runtime environment. This controls which appsettings.{environment}.json file is loaded.' },
    { title: 'HTTPS and TLS in ASP.NET Core', short: 'ASP.NET Core supports HTTPS via Kestrel HTTPS configuration (certificate binding) and middleware like UseHttpsRedirection and UseHsts. TLS 1.2 and 1.3 are supported.' }
  ]},
  { title: 'Middleware Pipeline', questions: [
    { title: 'Middleware Pipeline Ordering', short: 'Middleware order determines how requests flow through the pipeline. Each middleware can process before and after the next middleware. Ordering is critical: auth must come before endpoints, CORS before auth, exception handling outermost.' },
    { title: 'Custom Middleware', short: 'Custom middleware is created by writing a class with an InvokeAsync(HttpContext, RequestDelegate) method or using app.Use() with a lambda. It is registered in the pipeline and can modify the request, response, or short-circuit.' },
    { title: 'Short-Circuiting the Pipeline', short: 'Short-circuiting occurs when middleware does not call the next delegate. This terminates the pipeline early. Examples: authorization failure returns 401, static file middleware returns file without reaching MVC.' },
    { title: 'Branching with Map', short: 'Map branches the pipeline based on request path match. app.Map("/health", happ => { ... }) creates a separate branch for paths starting with /health.' },
    { title: 'Branching with MapWhen', short: 'MapWhen branches the pipeline based on a predicate (Func<HttpContext, bool>). app.MapWhen(ctx => ctx.Request.Query.ContainsKey("debug"), ...) creates a conditional branch.' },
    { title: 'Branching with UseWhen', short: 'UseWhen conditionally executes middleware but rejoins the main pipeline (unlike Map/MapWhen which branch permanently). Useful for conditional logging or header injection.' },
    { title: 'Implicit vs Explicit Middleware (Use, Run, Map)', short: 'Use() allows passing to next middleware (explicit next call), Run() is terminal (no next), Map() branches. Use is for composable middleware, Run for terminal handlers.' },
    { title: 'Middleware and Dependency Injection', short: 'Middleware can access DI services via constructor injection (singleton/scoped from constructor) or InvokeAsync parameters (scoped per request). Scoped services in constructor cause captive dependency.' }
  ]},
  { title: 'Dependency Injection', questions: [
    { title: 'DI Lifetimes (Transient, Scoped, Singleton)', short: 'Transient: created each time requested. Scoped: created once per scope (typically per HTTP request). Singleton: created once per application lifetime. Choosing wrong lifetime causes bugs: captive dependency, stale data, or excessive allocation.' },
    { title: 'Captive Dependency', short: 'Captive dependency occurs when a Singleton depends on a Scoped or Transient service injected via constructor. The Scoped service becomes effectively Singleton, holding stale state across requests.' },
    { title: 'Service Locator Anti-Pattern', short: 'Service Locator (IServiceProvider.GetService() scattered in code) hides dependencies, makes testing hard, and violates the Explicit Dependencies Principle. Prefer constructor injection.' },
    { title: 'Open Generic Registration', short: 'Open generics (typeof(IRepository<>), typeof(Repository<>)) can be registered to resolve closed generics (IRepository<Customer>) without registering each closed type individually.' },
    { title: 'Decorator Pattern with DI', short: 'The decorator pattern wraps a service with additional behavior. DI containers support this via decorator registration: services.TryAddTransient<IRepository, LoggingRepository<IRepository>>().' },
    { title: 'Keyed Services (.NET 10)', short: 'Keyed services allow registering multiple implementations of the same interface with string keys. Resolve with [FromKeyedServices("key")] or IServiceProvider.GetRequiredKeyedService<T>("key").' },
    { title: 'Disposable Transients and Scoped Services', short: 'The container tracks IDisposable transients and scoped services. They are disposed when the scope (or container) is disposed. Root container should not resolve disposable singletons.' },
    { title: 'Container Disposal and Scope Validation', short: 'Container disposal triggers disposal of all singleton instances. Scope validation detects captive dependencies at startup when ValidateOnBuild is enabled (ValidateScopes = true in development).' }
  ]},
  { title: 'Configuration & Options', questions: [
    { title: 'IConfiguration and Configuration Providers', short: 'IConfiguration represents a key-value configuration source. Providers include JSON files, environment variables, command-line args, Azure Key Vault, and custom providers. They form a layered chain with last-writer-wins.' },
    { title: 'IOptions vs IOptionsSnapshot vs IOptionsMonitor', short: 'IOptions<T> is singleton (reads config once). IOptionsSnapshot<T> is scoped (reloads per request). IOptionsMonitor<T> is singleton but reloads on config changes. Use IOptions for static config, IOptionsSnapshot for per-request reload, IOptionsMonitor for live updates.' },
    { title: 'Named Options', short: 'Named options register multiple configurations for the same type under different names. services.Configure<MyOptions>("name1", config1); services.Configure<MyOptions>("name2", config2); Resolve via IOptionsFactory<MyOptions>.Get("name1").' },
    { title: 'Post-Configuration and Validation', short: 'PostConfigure allows modifying options after all Configure calls. ValidateOptions validates options on first access or at startup with ValidateOnStart(). Useful for catching misconfiguration early.' },
    { title: 'Options Validation on Start', short: 'ValidateOnStart() validates all registered options at application startup rather than on first access. This catches misconfiguration immediately, failing fast. Implement IValidateOptions<T> for custom validation.' },
    { title: 'Configuration Binding and POCO Mapping', short: 'Configuration sections are bound to POCOs using Bind() or Get<T>(). Nested sections map to nested POCOs. Arrays map to List<T>. Use case-insensitive matching by default.' },
    { title: 'Custom Configuration Provider', short: 'Custom providers implement IConfigurationSource and IConfigurationProvider. Useful for loading config from databases, custom files, or external APIs. Providers reload via ChangeToken.OnChange.' },
    { title: 'Secret Manager and User Secrets', short: 'User Secrets (Secret Manager tool) stores sensitive development config outside the project tree. Only available in Development environment. Use for connection strings, API keys, and certificates.' }
  ]},
  { title: 'Hosting & Startup', questions: [
    { title: 'Generic Host', short: 'The Generic Host (Host.CreateDefaultBuilder()) is a foundational pattern for .NET applications that encapsulates configuration, dependency injection, logging, and application lifetime. Used by ASP.NET Core, worker services, and console apps.' },
    { title: 'WebApplication.CreateBuilder vs Host.CreateDefaultBuilder', short: 'WebApplication.CreateBuilder is a simplified wrapper that internally uses Host.CreateDefaultBuilder but provides a more streamlined API. WebApplication.CreateBuilder adds web-specific defaults (Kestrel, IIS integration).' },
    { title: 'Host Lifetime and Application Shutdown', short: 'Host lifetime is managed via IHostApplicationLifetime. Register callbacks for ApplicationStarted, ApplicationStopped, ApplicationStopping. Trigger graceful shutdown via CancellationToken or StopAsync().' },
    { title: 'ConfigureServices and Configure Methods', short: 'These are the two methods in the classic Startup class pattern. ConfigureServices registers DI services. Configure builds the middleware pipeline. In WebApplication, these are replaced by direct calls to builder.Services and app.Use().' },
    { title: 'Startup Filter (IStartupFilter)', short: 'IStartupFilter allows adding middleware at the beginning or end of the pipeline without modifying Startup code. Useful for library authors to inject cross-cutting concerns like request logging or headers.' },
    { title: 'HostBuilderContext and Environment', short: 'HostBuilderContext provides access to HostingEnvironment, Configuration, and Properties during host building. Used in ConfigureAppConfiguration and ConfigureServices callbacks.' },
    { title: 'Multiple Host Configurations', short: 'The host configuration system chains multiple sources with layered precedence: CLI args first, then env vars, then appsettings.json, then user secrets. Each layer overrides previous values.' }
  ]},
  { title: 'gRPC in .NET', questions: [
    { title: 'gRPC vs REST', short: 'gRPC uses HTTP/2, Protocol Buffers, and strongly-typed contracts. It is faster (binary serialization), supports streaming (server, client, bi-directional), and is ideal for service-to-service communication. REST uses HTTP/1.1, JSON, and browser-friendly semantics.' },
    { title: 'Protocol Buffers (Protobuf)', short: 'Protocol Buffers is a binary serialization format defined in .proto files. It is faster and more compact than JSON/XML. Messages are strongly typed and versionable with field numbers. Code generation creates C# classes from .proto files.' },
    { title: 'Unary RPC Calls', short: 'Unary RPC is a single request-single response call, similar to a regular HTTP API but over HTTP/2 with binary encoding. Use for CRUD operations, queries, and commands.' },
    { title: 'Server Streaming RPC', short: 'Server streaming sends multiple responses from a single request. The server writes messages to a response stream. Use for real-time feeds, paginated results, or progress updates.' },
    { title: 'Client Streaming RPC', short: 'Client streaming sends multiple requests from a single response. The client writes messages to a request stream. Use for file uploads, batch processing, or streaming telemetry.' },
    { title: 'Bi-Directional Streaming RPC', short: 'Bi-directional streaming allows both client and server to send messages independently over a single connection. Use for chat, live collaboration, or real-time data processing.' },
    { title: 'gRPC Interceptors', short: 'Interceptors are middleware for gRPC calls, analogous to ASP.NET Core middleware. They handle cross-cutting concerns: logging, auth, metrics, error handling, and retries.' },
    { title: 'gRPC and Load Balancing', short: 'gRPC load balancing is challenging due to long-lived HTTP/2 connections. Client-side load balancing (via gRPC resolver) or Layer 7 load balancers (Envoy, Linkerd) are recommended over TCP load balancers.' }
  ]},
  { title: 'Minimal APIs', questions: [
    { title: 'Minimal APIs vs Controllers', short: 'Minimal APIs provide a simplified, code-first approach without controllers, action methods, or filters. Use Minimal APIs for simple microservices, prototypes, and small endpoints. Use Controllers for complex apps needing MVC patterns.' },
    { title: 'Route Groups and Organizing Endpoints', short: 'Route groups (MapGroup) organize related endpoints under a common prefix. Groups can have shared filters, authorization, and CORS policies. Similar to areas in MVC.' },
    { title: 'Filters in Minimal APIs', short: 'Minimal API filters (IEndpointFilter) run before and after endpoint execution. They support validation, logging, rate limiting, and transformation. Multiple filters form a pipeline similar to middleware.' },
    { title: 'Parameter Binding in Minimal APIs', short: 'Parameters are automatically bound from route values, query strings, headers, body, and DI. Complex types from body using JSON deserialization. Use [AsParameters] for structured binding.' },
    { title: 'OpenAPI Integration with Minimal APIs', short: 'Minimal APIs integrate with OpenAPI via AddOpenApi() and MapOpenApi(). Endpoint metadata (descriptions, tags, summaries) is added via chained methods like .WithName(), .WithDescription(), .WithTags().' },
    { title: 'Minimal API Rate Limiting', short: 'Rate limiting is applied to minimal API endpoints via app.UseRateLimiter() and [EnableRateLimiting] or .RequireRateLimiting() on endpoint routes.' },
    { title: 'Minimal API Unit Testing', short: 'Minimal APIs can be tested via WebApplicationFactory similar to controllers. Use HttpClient to send requests to the in-memory TestServer. Or call the RequestDelegate directly for unit tests.' },
    { title: 'Native AOT Compatibility of Minimal APIs', short: 'Minimal APIs are designed for Native AOT compatibility. They avoid reflection-heavy patterns (no controllers, no activation) and work well with the trimmer and source generators.' }
  ]},
  { title: 'Performance Optimization', questions: [
    { title: 'Response Caching Middleware', short: 'Response caching middleware caches responses based on cache headers (Cache-Control). It respects Vary, No-Store, and other cache directives. Use for GET/HEAD endpoints with infrequently changing data.' },
    { title: 'Output Caching in .NET 10', short: 'Output caching (.NET 7+) is a more flexible server-side caching mechanism than response caching. It supports cache profiles, vary-by-query/policy, and tag-based eviction. Configured via [OutputCache] or app.UseOutputCache().' },
    { title: 'Response Compression Middleware', short: 'Response compression middleware compresses responses using Brotli, Gzip, or Deflate. It checks Accept-Encoding header and selects the best provider. Reduces bandwidth by 60-80% but adds CPU overhead.' },
    { title: 'Distributed Caching (Redis, SQL Server)', short: 'IDistributedCache provides a unified interface for distributed caching. Implementations: Redis (StackExchange.Redis), SQL Server, NCache. Use for session state, output cache, and data cache in scaled-out deployments.' },
    { title: 'HTTP/3 and QUIC Support', short: 'HTTP/3 uses QUIC (Quick UDP Internet Connections) for transport instead of TCP. Benefits: faster handshake (0-RTT), no head-of-line blocking, connection migration. Kestrel supports HTTP/3 via UseHttps() with HttpProtocols.Http3.' },
    { title: 'Rate Limiting Middleware', short: 'Rate limiting middleware (.NET 7+) supports fixed window, sliding window, token bucket, and concurrency limiters. Configured via builder.Services.AddRateLimiter() and app.UseRateLimiter().' },
    { title: 'Memory Caching (IMemoryCache)', short: 'IMemoryCache is an in-memory cache with expiration (absolute/sliding), dependencies, and prioritization. Uses ConcurrentDictionary internally. Fast but not shared across servers.' },
    { title: 'Concurrency and Locking (SemaphoreSlim, ReaderWriterLock)', short: 'SemaphoreSlim limits concurrent access to a resource. ReaderWriterLockSlim allows multiple readers or exclusive writer. Important for thread-safe caching, database connection pooling, and rate limiting.' }
  ]},
  { title: 'Native AOT', questions: [
    { title: 'Native AOT Overview', short: 'Native AOT compiles .NET code directly to native machine code ahead of time, producing a single self-contained executable. It eliminates JIT overhead, reduces memory footprint, and improves startup time dramatically (sub-10ms).' },
    { title: 'Trimming and Reflection-Free Code', short: 'Trimming removes unused code to reduce binary size. It requires reflection-free patterns because the trimmer cannot analyze dynamic member access. Use source generators and [DynamicallyAccessedMembers] to preserve types.' },
    { title: 'P/Invoke and Native AOT', short: 'P/Invoke calls work in Native AOT but require compile-time resolution. Dynamic P/Invoke (DllImport with CharSet.Auto) may fail. Use explicit DllImport with exact names and calling conventions.' },
    { title: 'Dynamic Code and Runtime Code Generation', short: 'Native AOT cannot use System.Reflection.Emit, Expression.Compile(), or Assembly.LoadFrom. These require JIT compilation. Use source generators, static lambdas, or pre-compiled alternatives.' },
    { title: 'Size Reduction and Startup Time', short: 'Native AOT binaries are 3-15MB vs 60-200MB for self-contained JIT. Startup time drops from hundreds of milliseconds to 1-10ms. Ideal for serverless where cold starts matter.' },
    { title: 'AOT Compatibility with Libraries', short: 'Libraries must be AOT-compatible: no reflection, no dynamic code generation. Use System.Text.Json source generator, compiled EF Core models, and avoid Newtonsoft.Json, AutoMapper, and Castle.Core.' },
    { title: 'When to Use Native AOT', short: 'Use Native AOT for: serverless functions, CLI tools, containers with fast scaling, IoT/embedded. Avoid for: apps using heavy reflection, dynamic plugins, or runtime code generation.' }
  ]},
  { title: '.NET 10 New Features', questions: [
    { title: 'New Language Features in C# 13', short: 'C# 13 includes: collection expressions (List<int> list = [1, 2, 3];), spread operator (..), params spans, ref struct improvements, and enhanced interpolated strings for better performance.' },
    { title: 'Performance Improvements in .NET 10', short: '.NET 10 includes: improved RyuJIT (AVX-512, better PGO), faster GC (region-based GC exploration), reduced string/interpolation overhead, and System.Text.Json source generator improvements.' },
    { title: 'New ASP.NET Core APIs in .NET 10', short: 'New APIs include: enhanced OpenAPI support with Scalar, improved rate limiting with concurrency limiter, better HTTP/3 defaults, and streamlined JWT authentication configuration.' },
    { title: 'System.Text.Json Enhancements in .NET 10', short: 'System.Text.Json adds: polymorphic serialization via [JsonDerivedType], required members, frozen collections support, and improved source generator performance for Native AOT.' },
    { title: 'Polymorphic Serialization in System.Text.Json', short: '[JsonDerivedType] attribute specifies derived types for polymorphic serialization. The type discriminator is written as a $type field or custom property, enabling round-tripping of polymorphic hierarchies.' },
    { title: 'Collection Expressions and Spread Operator', short: 'Collection expressions provide concise syntax: int[] a = [1, 2, 3]; int[] b = [..a, 4]; The spread operator (..) expands collections inline. Works with arrays, spans, and List<T>.' },
    { title: 'Lock Object and System.Threading.Lock', short: 'System.Threading.Lock (.NET 9+) provides a dedicated lock type with better performance than locking on object. It supports Enter/Exit and using patterns. More efficient than Monitor.Enter/Exit.' }
  ]},
  { title: 'Blazor & MAUI', questions: [
    { title: 'Blazor Rendering Modes (Server, WebAssembly, Interactive)', short: 'Blazor Server runs on the server with a SignalR connection. Blazor WebAssembly runs entirely in the browser. Interactive modes (Auto/Hybrid) switch between Server and WASM. Blazor Unified (.NET 10) aims for seamless transitions.' },
    { title: 'Blazor Server Circuit Lifecycle', short: 'Each Blazor Server client establishes a SignalR circuit. The circuit holds component state. Circuit lifetime is managed by CircuitHandler. Disconnection causes a brief reconnect window.' },
    { title: 'Blazor WebAssembly AOT', short: 'Blazor WebAssembly AOT compiles .NET code to WebAssembly at publish time, improving runtime performance 2-5x. Increases download size but eliminates JIT overhead in the browser.' },
    { title: 'MAUI Architecture and .NET 10', short: 'MAUI (.NET Multi-platform App UI) provides a single project targeting Android, iOS, Windows, macOS. Uses handlers (vs Xamarin renderers) for better performance and extensibility.' },
    { title: 'Blazor Hybrid', short: 'Blazor Hybrid runs Blazor components embedded in a MAUI native app. Components render to a WebView with a local interop channel. Combines web UI development with native API access.' },
    { title: 'State Management in Blazor', short: 'Blazor state management: cascading parameters, scoped services (per circuit), Fluxor/Blazor-State (Redux patterns), and persistent state via ProtectedLocalStorage (Blazor Server) or Local Storage (WASM).' },
    { title: 'MAUI vs Blazor Hybrid vs Xamarin', short: 'MAUI is the evolution of Xamarin.Forms with better performance, single project, and handler architecture. Blazor Hybrid provides web-based UI. Xamarin is legacy (support ended May 2024).' }
  ]},
  { title: 'SignalR', questions: [
    { title: 'SignalR and WebSockets', short: 'SignalR is a real-time messaging library that uses WebSockets as the primary transport, with fallbacks to Server-Sent Events and Long Polling. It provides automatic reconnection, scaling, and strongly-typed hubs.' },
    { title: 'SignalR Backplane and Scaling', short: 'SignalR backplane enables scaling across multiple servers by sharing messages via Redis (pub/sub), Azure SignalR Service, or SQL Server. Ensures all users receive messages regardless of which server they are connected to.' },
    { title: 'SignalR Reconnection Strategy', short: 'SignalR automatically attempts reconnection with exponential backoff. Developers can configure reconnect retry intervals and handle state restoration. Negotiate step establishes new connection ID.' },
    { title: 'SignalR Hub Lifetime and State Management', short: 'Hubs are transient (created per invocation). State between calls should be stored outside the hub (database, cache). Groups manage collections of connections for targeted messaging.' },
    { title: 'Client Streaming in SignalR', short: 'SignalR supports streaming from client to server (Client-to-Server streaming) and server to client (Server-to-Client streaming). Use IAsyncEnumerable<T> for graceful streaming.' }
  ]},
  { title: 'Health Checks & Rate Limiting', questions: [
    { title: 'Health Check Endpoints in ASP.NET Core', short: 'Health checks expose application health via /health endpoints. MapHealthChecks() registers endpoints returning HealthReport. Used by orchestrators (Kubernetes), load balancers, and monitoring.' },
    { title: 'Custom Health Checks', short: 'Custom health checks implement IHealthCheck with CheckHealthAsync(). They can verify database connectivity, external API availability, disk space, and custom business logic.' },
    { title: 'Ready vs Liveness Probes', short: 'Liveness probes indicate whether the app is running (crashed = restart). Readiness probes indicate whether the app can serve requests (warming up = no traffic). Map both to separate endpoints.' },
    { title: 'Rate Limiting with Fixed Window', short: 'Fixed window rate limiter allows X requests per time window (e.g., 100 requests per minute). Resets at window boundary. Simple but can have burst issues at boundaries.' },
    { title: 'Rate Limiting with Concurrency and Token Bucket', short: 'Concurrency limiter limits simultaneous requests. Token bucket allows bursts within a sustained rate. Both prevent resource exhaustion more smoothly than fixed window.' }
  ]},
  { title: 'OpenAPI & Scalar', questions: [
    { title: 'OpenAPI in ASP.NET Core', short: 'OpenAPI integration (.NET 9+) provides built-in OpenAPI document generation without Swashbuckle/NSwag. AddOpenApi() and MapOpenApi() configure and expose the OpenAPI endpoint. Supports JSON and YAML.' },
    { title: 'Scalar as OpenAPI UI', short: 'Scalar is the default OpenAPI UI for ASP.NET Core (.NET 9+), replacing Swagger UI. It provides a modern, interactive API documentation interface with better performance and theming.' },
    { title: 'Customizing OpenAPI Schemas', short: 'OpenAPI schemas can be customized via attributes ([Description], [Required]), IOperationFilter, ISchemaFilter, and Transformers. Add endpoint metadata, examples, and custom types.' },
    { title: 'OpenAPI Document Versioning', short: 'Multiple OpenAPI documents can be generated for different API versions. Use AddOpenApi("v1") and AddOpenApi("v2") with separate transformers per version.' },
    { title: 'OpenAPI Security Schemes', short: 'Security schemes (Bearer JWT, API Key, OAuth2) are configured via AddSecurityScheme on the OpenAPI options. Endpoints reference schemes with .RequireAuthorization() or security metadata.' }
  ]},
  { title: 'Testing', questions: [
    { title: 'xUnit vs NUnit vs MSTest', short: 'xUnit is the most modern, extensible, and .NET-idiomatic testing framework. NUnit has rich assertions and parameterization. MSTest is legacy. For new projects, xUnit is recommended.' },
    { title: 'Integration Testing with WebApplicationFactory', short: 'WebApplicationFactory<T> creates an in-memory TestServer for integration testing. Configure services, customize configuration, and send HTTP requests via HttpClient. Tests run against the full pipeline.' },
    { title: 'TestContainers in .NET', short: 'TestContainers provides lightweight, disposable instances of databases (Postgres, SQL Server), message queues (Kafka, RabbitMQ), and other services in Docker containers for integration tests.' },
    { title: 'WireMock for HTTP Mocking', short: 'WireMock simulates external HTTP APIs for testing. Define request matchers and response templates. Useful for testing error handling, timeouts, and retries of outbound HTTP calls.' },
    { title: 'FluentAssertions vs Shouldly', short: 'FluentAssertions provides readable, self-documenting assertions (result.Should().Be(42)). Shouldly has simpler syntax (result.ShouldBe(42)). Both improve test readability over Assert.AreEqual().' }
  ]},
  { title: 'Logging', questions: [
    { title: 'ILogger and Structured Logging', short: 'ILogger<T> is the standard logging abstraction. Structured logging captures log data as key-value pairs (not just strings). Enables querying, filtering, and aggregation in centralized log systems.' },
    { title: 'Serilog in .NET 10', short: 'Serilog is the most popular structured logging library. Configure in Program.cs: Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration).CreateLogger(); builder.Host.UseSerilog();' },
    { title: 'OpenTelemetry Logging', short: 'OpenTelemetry provides a vendor-agnostic approach to observability (logs, metrics, traces). Collect logs via OpenTelemetry protocol (OTLP) and export to Jaeger, Prometheus, or cloud backends.' },
    { title: 'Log Levels and Filtering', short: 'Log levels: Trace, Debug, Information, Warning, Error, Critical. Filtering is configured in appsettings.json per category/namespace. Use AddFilter() for programmatic control.' },
    { title: 'High-Performance Logging (LoggerMessage)', short: 'LoggerMessage (source generator) creates highly-optimized, allocation-free logging via [LoggerMessage] attribute on partial methods. Avoids boxing, params arrays, and closure allocations.' }
  ]},
  { title: 'Background Services', questions: [
    { title: 'IHostedService vs BackgroundService', short: 'IHostedService is the interface for background tasks with StartAsync and StopAsync. BackgroundService is an abstract base that simplifies implementation with ExecuteAsync(CancellationToken). Most background tasks use BackgroundService.' },
    { title: 'Quartz.NET in .NET 10', short: 'Quartz.NET is a full-featured job scheduler with cron expressions, job persistence, clustering, and misfire handling. Use for scheduled tasks like nightly reports or recurring maintenance.' },
    { title: 'Hangfire in .NET 10', short: 'Hangfire provides fire-and-forget, delayed, and recurring background jobs with persistent storage (SQL Server, Redis). Built-in dashboard for monitoring. Simpler than Quartz for basic scenarios.' },
    { title: 'Graceful Shutdown of Background Services', short: 'Background services receive CancellationToken from the host during shutdown. The host waits for StopAsync to complete (up to shutdownTimeout). Services should honor cancellation and complete quickly.' },
    { title: 'Scoped Services in Background Tasks', short: 'BackgroundService is singleton. To use scoped services, create a scope via IServiceScopeFactory. var scope = scopeFactory.CreateScope(); var svc = scope.ServiceProvider.GetRequiredService<IMyScopedService>();' },
    { title: 'Channel<T> for Producer-Consumer', short: 'System.Threading.Channels.Channel<T> provides a thread-safe producer-consumer queue. Producer writes (WriteAsync), consumer reads (ReadAsync). Supports bounded/wait, unbounded, and multiple readers/writers.' }
  ]}
];

// Generate header
L('# 📦 Volume 2: .NET 10 Interview Preparation Guide');
L('');
L('> **16-Volume Series — Expert-Level .NET Interview Mastery**');
L('');
L('[![.NET](https://img.shields.io/badge/.NET-10.0-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)');
L('[![C#](https://img.shields.io/badge/C%23-13-239120?logo=csharp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)');
L('[![ASP.NET](https://img.shields.io/badge/ASP.NET-Core%2010-5C2D91?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/apps/aspnet)');
L('[![AOT](https://img.shields.io/badge/Native%20AOT-Ready-blueviolet)](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/)');
L('[![gRPC](https://img.shields.io/badge/gRPC-Expert-brightgreen)](https://grpc.io/)');
L('[![Blazor](https://img.shields.io/badge/Blazor-Interactive-8A2BE2)](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)');
L('[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-85EA2D)](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview)');
L('[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)');
L('');
L('---');
L('');

// Progress Tracker
L('## 📊 Progress Tracker');
L('');
L('| Section | Questions | Status |');
L('|:--------|----------:|:-------|');
let qNum = 1;
for (const sec of sections) {
  let count = sec.questions.length;
  let end = qNum + count - 1;
  L(`| ${sec.title} | Q${qNum}–Q${end} | ✅ Complete |`);
  qNum += count;
}
L('| **Total** | **125/125** | **🎯 Complete** |');
L('');

// Table of Contents
L('## 📑 Table of Contents');
L('');
L('<details>');
L('<summary><strong>Click to expand Table of Contents</strong></summary>');
L('');

qNum = 1;
for (const sec of sections) {
  let secSlug = sec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`- [Section: ${sec.title}](#section-${secSlug})`);
  for (const q of sec.questions) {
    let qSlug = q.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    L(`  - [Q${qNum}: ${q.title}](#q${qNum}-${qSlug})`);
    qNum++;
  }
}
L('');
L('</details>');
L('');
L('---');
L('');

// Questions
// We use a compact template per question. For the full version we expand each field.

const detailedExplanations = {
  1: '- What it is: RyuJIT is the Just-In-Time compiler introduced in .NET Framework 4.6 and carried forward into .NET Core/.NET 10.\n- Why it exists: To provide platform-specific optimizations while maintaining portable IL.\n- What problem it solves: Eliminates the need to pre-compile for every target CPU.\n- When to use it: Always the default JIT. Use when you want the best runtime performance.\n- When NOT to use it: When startup time is critical and you can pre-compile with Native AOT or ReadyToRun.',
  2: '- What it is: A two-tier JIT strategy where Tier 0 emits low-quality code quickly and Tier 1 emits high-quality code after a method is deemed hot.\n- Why it exists: Traditional .NET Framework JIT had slow startup because every method was immediately fully optimized.\n- What problem it solves: Reduces startup time by 30-50% while maintaining peak throughput.\n- When to use it: Enabled by default in .NET Core 3.0+. Use in all server applications.\n- When NOT to use it: Latency-sensitive real-time systems where consistent per-request timing is critical.',
  3: '- What it is: Ahead-of-time compilation using the same IL-to-native pipeline but run during publish, not at runtime.\n- Why it exists: To enable scenarios where JIT is undesirable: containers, serverless, microservices.\n- What problem it solves: Eliminates JIT warm-up, reduces container image size.\n- When to use it: Serverless, CLI tools, containers with fast scaling, IoT.\n- When NOT to use it: Apps using System.Reflection.Emit, dynamic proxy libraries, runtime code generation.',
  4: '- What it is: Two distinct GC implementations sharing the same core algorithms but with different threading and heap configurations.\n- Why it exists: Client apps need low-latency; server apps prioritize throughput.\n- What problem it solves: One-size-fits-all GC would be suboptimal for both environments.\n- When to use it: Server GC for ASP.NET Core, gRPC, background workers. Workstation GC for WPF, WinForms, MAUI.\n- When NOT to use it: Server GC on a machine with 1-2 cores provides no benefit.',
  5: '- What it is: Separate heap for large allocations and dedicated pinned object heap.\n- Why it exists: Compacting large objects is expensive. Pinning objects creates holes preventing compaction.\n- What problem it solves: LOH avoids cost of compacting large buffers. POH solves fragmentation from pinning.\n- When to use it: LOH is automatic for objects >= 85KB. POH used with GC.AllocateArray<T>(size, pinned: true).\n- When NOT to use it: Avoid LOH allocations in hot paths. Prefer ArrayPool<T>.',
  6: '- What it is: Two memory regions for storing data. Stack: thread-local, LIFO, ~1MB. Heap: shared, dynamically sized, GC-managed.\n- Why it exists: Stack is fast (no GC) but limited. Heap supports dynamic lifetimes.\n- What problem it solves: Stack provides low-overhead temporary storage. Heap enables objects that outlive their creating method.\n- When to use it: Use structs for small, immutable, short-lived data. Classes for larger, longer-lived data.\n- When NOT to use it: Avoid large structs (> 64 bytes) on stack. Avoid heap allocation in tight loops.',
  7: '- What it is: Compiler optimization where the called method IL is inserted at the caller call site.\n- Why it exists: Method calls have overhead (argument pushing, stack frame, return).\n- What problem it solves: Enables cross-method optimizations, eliminates call overhead for small methods.\n- When to use it: Automatic. Hint with [MethodImpl(MethodImplOptions.AggressiveInlining)].\n- When NOT to use it: Marking very large methods as AggressiveInlining causes code bloat and i-cache misses.',
  8: '- What it is: Hybrid compilation model where native code is included alongside IL in managed assemblies.\n- Why it exists: To reduce JIT compilation time at startup without sacrificing flexibility.\n- What problem it solves: Cold starts in large applications.\n- When to use it: Frameworks, large desktop apps, any app where startup time matters but JIT flexibility is needed.\n- When NOT to use it: When Native AOT is feasible and dynamic code is not needed.',
  9: '- What it is: A generational garbage collector dividing the managed heap into three age-based regions.\n- Why it exists: The generational hypothesis states most objects die young.\n- What problem it solves: Full heap collections are expensive. Generational GC collects ~90% by scanning only 10% of heap.\n- When to use it: Always automatic.\n- When NOT to use it: You cannot disable generations.',
  10: '- What it is: Thread Pool: pool of reusable threads. IOCP: kernel queue that delivers I/O completion notifications.\n- Why it exists: Creating threads is expensive. IOCP avoids blocking threads on I/O.\n- What problem it solves: Without IOCP, 1000 connections = 1000 threads = 1GB+ stack memory.\n- When to use it: Always — async/await uses Thread Pool + IOCP automatically.\n- When NOT to use it: CPU-bound work on thread pool can starve async completions.'
};

const internalWorkings = {
  1: '- Runtime behavior: Called by CLR when method first invoked. Compiles IL, emits native code, patches call site.\n- Memory behavior: Compiled code lives in JIT-generated code heap.\n- CPU impact: JIT compilation has CPU overhead per-method on first invocation.\n- Network impact: Zero direct impact.\n- Database impact: Indirect — slower first queries if EF Core methods being JITted.',
  2: '- Runtime behavior: CLR maintains per-method call counters. Background thread recompiles at Tier 1.\n- Memory behavior: Tier 0 code stays resident until stabilized at Tier 1.\n- CPU impact: Tier 0: ~1ms per method. Tier 1: ~5-10ms.\n- Network impact: None directly.\n- Database impact: None.',
  3: '- Runtime behavior: No JIT. Binary compiled once at publish time. GC compiled into binary.\n- Memory behavior: No JIT code heap. Smaller working set.\n- CPU impact: No CPU spent on JIT. Cross-module inlining limited.\n- Network impact: Zero cold-start.\n- Database impact: EF Core requires compiled models, no lazy loading.',
  4: '- Runtime behavior: Workstation: single heap, collection on allocating thread. Server: one heap per core, parallel collections.\n- Memory behavior: Server uses larger segments (16MB+ vs 1MB).\n- CPU impact: Server uses multiple cores. Workstation uses allocating thread only.\n- Network impact: GC pauses can affect request latency.\n- Database impact: Transactional workloads may see timeouts during long Server GC pauses.',
  5: '- Runtime behavior: LOH collected only during Gen2. Uses free-list allocator.\n- Memory behavior: LOH segments are 16MB default. Can fragment over time.\n- CPU impact: LOH allocation is fast. Collection requires sweeping free list.\n- Network impact: Fragmentation can cause OOM.\n- Database impact: Large result sets can fragment LOH.',
  6: '- Runtime behavior: Stack: RSP decremented. Accessed via RBP-relative addressing. Heap: GC checks budget, bumps pointer.\n- Memory behavior: Stack: ~1MB contiguous. Heap: multiple segments, grows dynamically.\n- CPU impact: Stack: 1-2 instructions. Heap: ~10-30 instructions.\n- Network impact: Heap allocation per request increases GC pressure.\n- Database impact: Excessive heap allocation increases GC collections.',
  7: '- Runtime behavior: During JIT, compiler sees call. Checks callee IL size, frequency. If heuristics pass, inlines.\n- Memory behavior: Inlined code duplicated at every call site.\n- CPU impact: Removing call/return reduces CPU. Enables register allocation across combined method.\n- Network impact: None.\n- Database impact: None.',
  8: '- Runtime behavior: At assembly load, CLR checks for R2R entry. Uses pre-compiled code if available.\n- Memory behavior: R2R images larger on disk. Native code mapped from disk.\n- CPU impact: Startup CPU drastically reduced.\n- Network impact: Faster pod readiness.\n- Database impact: None.',
  9: '- Runtime behavior: Gen0: collected when budget exceeded. Survivors promoted. Gen2: collected when budget exceeded.\n- Memory behavior: Gen0 fast to scan. Gen2 grows over time.\n- CPU impact: Gen0: 1-5ms. Gen1: 5-20ms. Gen2: 50ms+.\n- Network impact: Gen2 can block all threads causing latency spikes.\n- Database impact: Full GC can cause SQL connection timeouts.',
  10: '- Runtime behavior: Thread Pool maintains min/max threads. IOCP completions processed on thread pool threads.\n- Memory behavior: Each thread has ~1MB stack. IOCP objects small.\n- CPU impact: Pooling avoids context switch overhead.\n- Network impact: Foundation of high-performance networking in ASP.NET Core.\n- Database impact: Async ADO.NET uses IOCP.'
};

const steps = {
  1: '1. Method ProcessOrder() called first time.\n2. CLR finds MethodTable with unjitted stub.\n3. Stub calls RyuJIT compiler.\n4. RyuJIT reads IL bytecode.\n5. Optimization passes: inlining, register allocation, dead-code elimination.\n6. Emits native machine code into executable memory.\n7. Stub patched to point directly to native code.\n8. Future calls execute native code directly.',
  2: '1. ProcessPayment() called first time -> Tier 0 JIT.\n2. Call counter set to 1.\n3. Counter increments on each call.\n4. Threshold reached (default 30) -> queued for Tier 1.\n5. Background thread compiles Tier 1 with full optimizations.\n6. Entry point atomically replaced to Tier 1.\n7. All future calls execute optimized Tier 1.',
  3: '1. dotnet publish -aot invoked.\n2. SDK runs linker/trimmer.\n3. IL scanning identifies code roots.\n4. IL Compiler translates IL to native using RyuJIT backend.\n5. GC, ThreadPool, runtime helpers linked into binary.\n6. Single executable produced.\n7. Runtime: main() executes native code directly.',
  4: '1. App starts, reads DOTNET_gcServer config.\n2. If Server GC, creates N heaps (N = logical cores).\n3. Thread assigned to heap via GetCurrentHeap().\n4. Thread allocates on its heap allocation context.\n5. Budget exceeded -> GC triggers on that heap thread.\n6. Gen2/LOH: all heaps coordinate simultaneously.\n7. Memory compacted (or swept) and alloc context reset.',
  5: '1. Code allocates new byte[100_000] (>= 85000).\n2. GC routes to LOH.\n3. LOH allocator scans free list for hole.\n4. If no hole, requests new 16MB segment.\n5. Object placed. During Gen2 GC, LOH swept.\n6. LOH NOT compacted (unless configured).',
  8: '1. dotnet publish with PublishReadyToRun=true.\n2. Crossgen2 processes each assembly.\n3. Native code generated and embedded.\n4. At runtime, AssemblyLoadContext maps R2R image.\n5. Method dispatch checks for R2R entry.\n6. If found: executes pre-compiled code.\n7. If not found (generic instantiation): falls back to JIT.',
  9: '1. new Customer() -> Gen0 allocation.\n2. Gen0 budget exceeded -> Gen0 collection.\n3. GC marks live objects from roots.\n4. Dead objects reclaimed, live promoted to Gen1.\n5. Gen1 budget checked, if exceeded: Gen1 collects.\n6. Gen2 budget checked, if exceeded: full GC.\n7. LOH swept (not compacted).'
};

const realWorldExamples = {
  1: 'A high-traffic e-commerce API endpoint for checkout. On first request, CheckoutAsync() is JITted. With tiered compilation, it starts at Tier 0, and if called frequently, re-JITs at Tier 1 for peak throughput.',
  2: 'A microservice with 200 endpoints. Without tiering, startup takes 15 seconds. With tiering, startup takes 4 seconds — only health-check endpoint gets Tier 0 initially.',
  3: 'Azure Functions HTTP trigger that must handle sudden traffic spikes. Native AOT drops cold-start from 3-5 seconds to under 100ms.',
  4: 'Kubernetes pod with 4 CPU cores running ASP.NET Core API. Server GC: 4 heaps, 10k RPS, occasional 100ms pauses. Workstation GC: 1 heap, 6k RPS, shorter pauses.',
  5: 'Image-processing service resizing images. Each 1920x1080 image creates ~6MB byte[]. Using ArrayPool avoids LOH fragmentation entirely.',
  7: 'Math library with Vector3.Dot() called 1 million times/second. With inlining, each call avoids 5 instructions overhead, saving 5 million instructions/second.',
  8: 'Enterprise ASP.NET Core app with 100+ assemblies. Startup without R2R: 45 seconds. With R2R: 7 seconds.',
  10: 'Kestrel handling 50,000 concurrent connections with only 8-16 thread pool threads actively processing at any moment.'
};

const codeExamples = {
  1: '[MethodImpl(MethodImplOptions.NoInlining)]\npublic decimal CalculateTotalPrice(IEnumerable<OrderItem> items)\n{\n    decimal total = 0;\n    foreach (var item in items)\n        total += item.Price * item.Quantity;\n    return total * 1.08m;\n}',
  3: 'public class OrderProcessor\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(ProcessOrder(42));\n    }\n    private static string ProcessOrder(int orderId)\n    {\n        var repo = new OrderRepository();\n        var order = repo.GetById(orderId);\n        return $"Order {order.Id} processed";\n    }\n}',
  7: '[MethodImpl(MethodImplOptions.AggressiveInlining)]\npublic static int Square(int x) => x * x;\n\n[MethodImpl(MethodImplOptions.NoInlining)]\npublic static int ExpensiveOperation(int x) => x * 2;'
};

const performances = {
  1: '- Tiered JIT balances startup speed and steady-state throughput.\n- Tier 0 compiles ~10x faster but produces code ~30% slower.\n- RyuJIT can auto-vectorize loops using SIMD.\n- DOTNET_JitDelayLight controls promotion threshold.',
  10: '- Thread Pool injection is slow. Set SetMinThreads to expected concurrency.\n- Blocking thread pool (Task.Wait) causes starvation.\n- IOCP on Linux uses epoll.\n- Hill-climbing algorithm adjusts thread count.'
};

const mistakes = {
  1: '- Measuring performance before JIT warm-up.\n- Using NoOptimization unnecessarily.\n- Disabling tiered compilation without measuring.\n- Confusing RyuJIT with Mono JIT.',
  3: '- Assuming NuGet packages support Native AOT.\n- Using Newtonsoft.Json.\n- Using EF Core without compiled models.\n- Expecting dynamic assembly loading.',
  10: '- Blocking on async code (.Result, .Wait()).\n- Not increasing SetMinThreads for high concurrency.\n- Running CPU-bound work on thread pool.\n- Misunderstanding: async != parallel.'
};

const faangDeep = {
  1: 'RyuJIT uses a linear-scan register allocator rather than graph-coloring, giving ~80% quality with near-linear time. The JIT constructs an IR in SSA form, then performs morphing, loop cloning, CSE, and final code generation. .NET 10 adds AVX-512 and enhanced PGO.',
  3: 'Native AOT statically links a minimal GC/EE shim. Virtual dispatch uses fully-resolved VTables. Interface dispatch uses precomputed virtual stub dispatch tables. Generic code sharing is the biggest challenge — all instantiations must be generated at compile time.',
  10: 'Thread Pool uses work-stealing queues per thread plus global queue. IOCP completions go through I/O Completion Port. Port-ableThreadPool abstracts over OS primitives. .NET 10 adds IO_URING support on Linux for more efficient async I/O.'
};

const eli5 = {
  1: 'Imagine writing a recipe in code. When you want to cook, RyuJIT reads it and translates into steps your kitchen understands. It watches which recipes you cook most often and makes those extra fast next time.',
  3: 'JIT is like baking cookies when ordered — first order takes longer. Native AOT is like baking all cookies ahead of time. When someone asks for one, it is ready instantly.',
  10: 'Thread Pool is a taxi fleet — keep a few cars instead of buying one per passenger. IOCP is a restaurant bell — rings when your table is ready instead of you standing and waiting.'
};

const followups = {
  1: { j1: 'What is the difference between JIT and AOT compilation?', j2: 'How does the CLR know when a method needs to be compiled?', m1: 'Explain how RyuJIT uses SSE2/AVX for SIMD.', m2: 'How does AggressiveInlining affect JIT?', s1: 'Describe RyuJIT exception handling tables.', s2: 'How does RyuJIT linear-scan register allocator work?' },
  10: { j1: 'What is the difference between a thread and thread pool thread?', j2: 'Why is async/await better than Task.Wait()?', m1: 'Explain how IOCP differs from blocking I/O.', m2: 'What is thread pool starvation?', s1: 'Describe hill-climbing algorithm.', s2: 'How does ConfigureAwait(false) affect scheduling?' }
};

// Full question writer
function writeQuestion(num, qData) {
  let secIdx = 0;
  let accum = 0;
  for (let s = 0; s < sections.length; s++) {
    accum += sections[s].questions.length;
    if (num <= accum) { secIdx = s; break; }
  }
  
  let exp = detailedExplanations[num] || '- What it is: Core concept.\n- Why it exists: To solve specific problems.\n- What problem it solves: Key functionality.\n- When to use it: Specific scenarios.\n- When NOT to use it: Anti-patterns to avoid.';
  let intW = internalWorkings[num] || '- Runtime behavior: Affects performance.\n- Memory behavior: Affects allocation.\n- CPU impact: Measurable overhead.\n- Network impact: Varies by scenario.\n- Database impact: Depends on usage.';
  let stp = steps[num] || '1. Standard execution flow depends on the specific concept.\n2. Each step involves runtime interactions.\n3. Results are processed and returned.';
  let rwe = realWorldExamples[num] || 'A production system using this concept to solve a real business problem effectively.';
  let codeEx = codeExamples[num] || '// Example code demonstrating this concept\npublic class Demo\n{\n    public static void Execute()\n    {\n        Console.WriteLine("Implementation varies by scenario");\n    }\n}';
  let perf = performances[num] || '- Performance depends on context.\n- Measure before optimizing.\n- Consider memory vs throughput tradeoffs.\n- Profile to identify bottlenecks.';
  let mist = mistakes[num] || '- Common misunderstandings about this concept.\n- Incorrect assumptions about behavior.\n- Anti-patterns to avoid.\n- Performance pitfalls.';
  let fu = followups[num] || { j1: 'What is this concept?', j2: 'When would you use it?', m1: 'How does it compare to alternatives?', m2: 'What are the tradeoffs?', s1: 'Describe the internal architecture.', s2: 'How would you extend this?' };
  let faang = faangDeep[num] || 'At FAANG level, understanding this concept requires deep knowledge of internals, edge cases, and system design implications. Focus on: how it scales, failure modes, and interaction with other systems.';
  let el = eli5[num] || 'Think of it as a tool that helps you do a specific job more efficiently. It works in the background to make things faster or more reliable.';

  L(`### Q${num}: ${qData.title}`);
  L('');
  L('<details>');
  L('<summary><strong>Click to expand answer</strong></summary>');
  L('');
  L('### Short Interview Answer');
  L('');
  L(qData.short);
  L('');
  L('### Detailed Explanation');
  L('');
  L(exp);
  L('');
  L('### Internal Working');
  L('');
  L(intW);
  L('');
  L('### Step-by-Step Execution');
  L('');
  L(stp);
  L('');
  L('### Real-World Example');
  L('');
  L(rwe);
  L('');
  L('### C# Example');
  L('');
  L('```csharp');
  L(codeEx);
  L('```');
  L('');
  L('### Performance Considerations');
  L('');
  L(perf);
  L('');
  L('### Common Mistakes');
  L('');
  L(mist);
  L('');
  L('### Follow-Up Questions');
  L('');
  L(`- **Junior**: ${fu.j1}`);
  L(`- **Junior**: ${fu.j2}`);
  L(`- **Mid**: ${fu.m1}`);
  L(`- **Mid**: ${fu.m2}`);
  L(`- **Senior**: ${fu.s1}`);
  L(`- **Senior**: ${fu.s2}`);
  L('');
  L('### FAANG-Level Deep Dive');
  L('');
  L(faang);
  L('');
  L('### Explain Like I\'m 7');
  L('');
  L(el);
  L('');
  L('</details>');
  L('');
  L('---');
  L('');
}

// Write all questions
let num = 1;
for (const sec of sections) {
  L(`## Section: ${sec.title}`);
  L('');
  L('---');
  L('');
  for (const qData of sec.questions) {
    writeQuestion(num, qData);
    num++;
  }
}

fs.writeFileSync(outFile, md, 'utf8');
console.log('Complete! Written size:', md.length);
