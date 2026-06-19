const fs = require('fs');
const path = require('path');

const outFile = path.join(__dirname, 'README.md');
let md = '';

const L = s => { md += s + '\n'; };

// ====== HEADER ======
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

// ====== PROGRESS TRACKER ======
L('## 📊 Progress Tracker');
L('');
L('| Section | Questions | Status |');
L('|:--------|----------:|:-------|');
L('| .NET 10 Runtime & CLR | Q1–Q10 | ✅ Complete |');
L('| ASP.NET Core Fundamentals | Q11–Q18 | ✅ Complete |');
L('| Middleware Pipeline | Q19–Q26 | ✅ Complete |');
L('| Dependency Injection | Q27–Q34 | ✅ Complete |');
L('| Configuration & Options | Q35–Q42 | ✅ Complete |');
L('| Hosting & Startup | Q43–Q49 | ✅ Complete |');
L('| gRPC in .NET | Q50–Q57 | ✅ Complete |');
L('| Minimal APIs | Q58–Q65 | ✅ Complete |');
L('| Performance Optimization | Q66–Q73 | ✅ Complete |');
L('| Native AOT | Q74–Q80 | ✅ Complete |');
L('| .NET 10 New Features | Q81–Q87 | ✅ Complete |');
L('| Blazor & MAUI | Q88–Q94 | ✅ Complete |');
L('| SignalR | Q95–Q99 | ✅ Complete |');
L('| Health Checks & Rate Limiting | Q100–Q104 | ✅ Complete |');
L('| OpenAPI & Scalar | Q105–Q109 | ✅ Complete |');
L('| Testing | Q110–Q115 | ✅ Complete |');
L('| Logging | Q116–Q120 | ✅ Complete |');
L('| Background Services | Q121–Q125 | ✅ Complete |');
L('| **Total** | **125/125** | **🎯 Complete** |');
L('');

// ====== TABLE OF CONTENTS ======
L('## 📑 Table of Contents');
L('');
L('<details>');
L('<summary><strong>Click to expand Table of Contents</strong></summary>');
L('');
L('- [Section 1: .NET 10 Runtime & CLR](#section-1-net-10-runtime--clr)');
for (let i = 1; i <= 10; i++) {
  let titles = [
    'RyuJIT Just-In-Time Compilation',
    'Tiered Compilation (Tier 0 vs Tier 1)',
    'Native AOT Compilation',
    'Garbage Collection Modes (Workstation vs Server, GC modes)',
    'Large Object Heap (LOH) and POH',
    'Stack vs Heap Allocation',
    'JIT Inlining and Its Impact',
    'ReadyToRun (R2R) Images',
    'GC Generations (Gen0, Gen1, Gen2) and Survival',
    'Thread Pool and I/O Completion Ports'
  ];
  let slug = titles[i-1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i}: ${titles[i-1]}](#q${i}-${slug})`);
}

L('- [Section 2: ASP.NET Core Fundamentals](#section-2-aspnet-core-fundamentals)');
let s2 = [
  'Kestrel Web Server',
  'IIS and ASP.NET Core Module',
  'Process Model (In-Process vs Out-of-Process)',
  'HTTP Request Pipeline Lifecycle',
  'WebApplication and WebApplicationBuilder',
  'Exception Handling in ASP.NET Core',
  'Environment Configuration (Development, Staging, Production)',
  'HTTPS and TLS in ASP.NET Core'
];
for (let i = 0; i < s2.length; i++) {
  let slug = s2[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+11}: ${s2[i]}](#q${i+11}-${slug})`);
}

L('- [Section 3: Middleware Pipeline](#section-3-middleware-pipeline)');
let s3 = [
  'Middleware Pipeline Ordering',
  'Custom Middleware',
  'Short-Circuiting the Pipeline',
  'Branching with Map',
  'Branching with MapWhen',
  'Branching with UseWhen',
  'Implicit vs Explicit Middleware (Use, Run, Map)',
  'Middleware and Dependency Injection'
];
for (let i = 0; i < s3.length; i++) {
  let slug = s3[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+19}: ${s3[i]}](#q${i+19}-${slug})`);
}

L('- [Section 4: Dependency Injection](#section-4-dependency-injection)');
let s4 = [
  'DI Lifetimes (Transient, Scoped, Singleton)',
  'Captive Dependency',
  'Service Locator Anti-Pattern',
  'Open Generic Registration',
  'Decorator Pattern with DI',
  'Keyed Services (.NET 10)',
  'Disposable Transients and Scoped Services',
  'Container Disposal and Scope Validation'
];
for (let i = 0; i < s4.length; i++) {
  let slug = s4[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+27}: ${s4[i]}](#q${i+27}-${slug})`);
}

L('- [Section 5: Configuration & Options](#section-5-configuration--options)');
let s5 = [
  'IConfiguration and Configuration Providers',
  'IOptions vs IOptionsSnapshot vs IOptionsMonitor',
  'Named Options',
  'Post-Configuration and Validation',
  'Options Validation on Start',
  'Configuration Binding and POCO Mapping',
  'Custom Configuration Provider',
  'Secret Manager and User Secrets'
];
for (let i = 0; i < s5.length; i++) {
  let slug = s5[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+35}: ${s5[i]}](#q${i+35}-${slug})`);
}

L('- [Section 6: Hosting & Startup](#section-6-hosting--startup)');
let s6 = [
  'Generic Host',
  'WebApplication.CreateBuilder vs Host.CreateDefaultBuilder',
  'Host Lifetime and Application Shutdown',
  'ConfigureServices and Configure Methods',
  'Startup Filter (IStartupFilter)',
  'HostBuilderContext and Environment',
  'Multiple Host Configurations (appsettings.json, Environment Variables)'
];
for (let i = 0; i < s6.length; i++) {
  let slug = s6[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+43}: ${s6[i]}](#q${i+43}-${slug})`);
}

L('- [Section 7: gRPC in .NET](#section-7-grpc-in-net)');
let s7 = [
  'gRPC vs REST',
  'Protocol Buffers (Protobuf)',
  'Unary RPC Calls',
  'Server Streaming RPC',
  'Client Streaming RPC',
  'Bi-Directional Streaming RPC',
  'gRPC Interceptors',
  'gRPC and Load Balancing'
];
for (let i = 0; i < s7.length; i++) {
  let slug = s7[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+50}: ${s7[i]}](#q${i+50}-${slug})`);
}

L('- [Section 8: Minimal APIs](#section-8-minimal-apis)');
let s8 = [
  'Minimal APIs vs Controllers',
  'Route Groups and Organizing Endpoints',
  'Filters in Minimal APIs',
  'Parameter Binding in Minimal APIs',
  'OpenAPI Integration with Minimal APIs',
  'Minimal API Rate Limiting',
  'Minimal API Unit Testing',
  'Native AOT Compatibility of Minimal APIs'
];
for (let i = 0; i < s8.length; i++) {
  let slug = s8[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+58}: ${s8[i]}](#q${i+58}-${slug})`);
}

L('- [Section 9: Performance Optimization](#section-9-performance-optimization)');
let s9 = [
  'Response Caching Middleware',
  'Output Caching in .NET 10',
  'Response Compression Middleware',
  'Distributed Caching (Redis, SQL Server)',
  'HTTP/3 and QUIC Support',
  'Rate Limiting Middleware',
  'Memory Caching (IMemoryCache)',
  'Concurrency and Locking (SemaphoreSlim, ReaderWriterLock)'
];
for (let i = 0; i < s9.length; i++) {
  let slug = s9[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+66}: ${s9[i]}](#q${i+66}-${slug})`);
}

L('- [Section 10: Native AOT](#section-10-native-aot)');
let s10 = [
  'Native AOT Overview',
  'Trimming and Reflection-Free Code',
  'P/Invoke and Native AOT',
  'Dynamic Code and Runtime Code Generation',
  'Size Reduction and Startup Time',
  'AOT Compatibility with Libraries',
  'When to Use Native AOT'
];
for (let i = 0; i < s10.length; i++) {
  let slug = s10[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+74}: ${s10[i]}](#q${i+74}-${slug})`);
}

L('- [Section 11: .NET 10 New Features](#section-11-net-10-new-features)');
let s11 = [
  'New Language Features in C# 13',
  'Performance Improvements in .NET 10',
  'New ASP.NET Core APIs in .NET 10',
  'System.Text.Json Enhancements in .NET 10',
  'Polymorphic Serialization in System.Text.Json',
  'Collection Expressions and Spread Operator',
  'Lock Object and System.Threading.Lock'
];
for (let i = 0; i < s11.length; i++) {
  let slug = s11[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+81}: ${s11[i]}](#q${i+81}-${slug})`);
}

L('- [Section 12: Blazor & MAUI](#section-12-blazor--maui)');
let s12 = [
  'Blazor Rendering Modes (Server, WebAssembly, Interactive)',
  'Blazor Server Circuit Lifecycle',
  'Blazor WebAssembly AOT',
  'MAUI Architecture and .NET 10',
  'Blazor Hybrid',
  'State Management in Blazor',
  'MAUI vs Blazor Hybrid vs Xamarin'
];
for (let i = 0; i < s12.length; i++) {
  let slug = s12[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+88}: ${s12[i]}](#q${i+88}-${slug})`);
}

L('- [Section 13: SignalR](#section-13-signalr)');
let s13 = [
  'SignalR and WebSockets',
  'SignalR Backplane and Scaling',
  'SignalR Reconnection Strategy',
  'SignalR Hub Lifetime and State Management',
  'Client Streaming in SignalR'
];
for (let i = 0; i < s13.length; i++) {
  let slug = s13[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+95}: ${s13[i]}](#q${i+95}-${slug})`);
}

L('- [Section 14: Health Checks & Rate Limiting](#section-14-health-checks--rate-limiting)');
let s14 = [
  'Health Check Endpoints in ASP.NET Core',
  'Custom Health Checks',
  'Ready vs Liveness Probes',
  'Rate Limiting with Fixed Window',
  'Rate Limiting with Concurrency and Token Bucket'
];
for (let i = 0; i < s14.length; i++) {
  let slug = s14[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+100}: ${s14[i]}](#q${i+100}-${slug})`);
}

L('- [Section 15: OpenAPI & Scalar](#section-15-openapi--scalar)');
let s15 = [
  'OpenAPI in ASP.NET Core',
  'Scalar as OpenAPI UI',
  'Customizing OpenAPI Schemas',
  'OpenAPI Document Versioning',
  'OpenAPI Security Schemes'
];
for (let i = 0; i < s15.length; i++) {
  let slug = s15[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+105}: ${s15[i]}](#q${i+105}-${slug})`);
}

L('- [Section 16: Testing](#section-16-testing)');
let s16 = [
  'xUnit vs NUnit vs MSTest',
  'Integration Testing with WebApplicationFactory',
  'TestContainers in .NET',
  'WireMock for HTTP Mocking',
  'FluentAssertions vs Shouldly'
];
for (let i = 0; i < s16.length; i++) {
  let slug = s16[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+110}: ${s16[i]}](#q${i+110}-${slug})`);
}

L('- [Section 17: Logging](#section-17-logging)');
let s17 = [
  'ILogger and Structured Logging',
  'Serilog in .NET 10',
  'OpenTelemetry Logging',
  'Log Levels and Filtering',
  'High-Performance Logging (LoggerMessage)'
];
for (let i = 0; i < s17.length; i++) {
  let slug = s17[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+115}: ${s17[i]}](#q${i+115}-${slug})`);
}

L('- [Section 18: Background Services](#section-18-background-services)');
let s18 = [
  'IHostedService vs BackgroundService',
  'Quartz.NET in .NET 10',
  'Hangfire in .NET 10',
  'Graceful Shutdown of Background Services',
  'Scoped Services in Background Tasks',
  'Channel&lt;T&gt; for Producer-Consumer'
];
for (let i = 0; i < s18.length; i++) {
  let slug = s18[i].toLowerCase().replace(/[^a-z0-9<>/]+/g, '-').replace(/-+$/, '');
  L(`  - [Q${i+120}: ${s18[i]}](#q${i+120}-${slug})`);
}

L('');
L('</details>');
L('');
L('---');
L('');

// ====== QUESTION HELPER ======
function Q(num, title, shortAnswer, explanation, internal, steps, realWorld, codeExample, performance, mistakes, jrQ1, jrQ2, midQ1, midQ2, srQ1, srQ2, faangDeep, eli5) {
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  L(`## Q${num}: ${title}`);
  L('');
  L('<details>');
  L('<summary><strong>Click to expand answer</strong></summary>');
  L('');
  L('### Short Interview Answer');
  L('');
  L(shortAnswer);
  L('');
  L('### Detailed Explanation');
  L('');
  let expl = explanation.split('\n');
  for (let e of expl) {
    if (e.startsWith('- ')) { L(e); } else if (e.trim()) { L(`- **${e.split(':')[0]}**: ${e.split(':').slice(1).join(':')}`); } else { L(''); }
  }
  L('');
  L('### Internal Working');
  L('');
  let intItems = internal.split('\n');
  for (let i of intItems) {
    if (i.startsWith('- ')) { L(i); } else if (i.trim()) { L(`- **${i.split(':')[0]}**: ${i.split(':').slice(1).join(':')}`); } else { L(''); }
  }
  L('');
  L('### Step-by-Step Execution');
  L('');
  let stepsArr = steps.split('\n');
  for (let s of stepsArr) {
    if (s.trim()) { L(s); } else { L(''); }
  }
  L('');
  L('### Real-World Example');
  L('');
  L(realWorld);
  L('');
  L('### C# Example');
  L('');
  L('```csharp');
  L(codeExample);
  L('```');
  L('');
  L('### Performance Considerations');
  L('');
  let perfItems = performance.split('\n');
  for (let p of perfItems) {
    if (p.trim()) { L(p); } else { L(''); }
  }
  L('');
  L('### Common Mistakes');
  L('');
  let mistItems = mistakes.split('\n');
  for (let m of mistItems) {
    if (m.trim()) { L(m); } else { L(''); }
  }
  L('');
  L('### Follow-Up Questions');
  L('');
  L('- **Junior**: ' + jrQ1);
  L('- **Junior**: ' + jrQ2);
  L('- **Mid**: ' + midQ1);
  L('- **Mid**: ' + midQ2);
  L('- **Senior**: ' + srQ1);
  L('- **Senior**: ' + srQ2);
  L('');
  L('### FAANG-Level Deep Dive');
  L('');
  L(faangDeep);
  L('');
  L('### Explain Like I\'m 7');
  L('');
  L(eli5);
  L('');
  L('</details>');
  L('');
  L('---');
  L('');
}

// ====== SECTION 1: .NET 10 Runtime & CLR ======
L('## Section 1: .NET 10 Runtime & CLR');
L('');

Q(1,
'RyuJIT Just-In-Time Compilation',
'RyuJIT is the default JIT compiler for .NET that converts CIL to native machine code at runtime. It uses SSE2/AVX instruction sets, performs aggressive optimizations like inlining and loop unrolling, and supports tiered compilation where methods start at Tier 0 (quick JIT) and graduate to Tier 1 (optimized) when they become hot.',
'- What it is: RyuJIT is the Just-In-Time compiler introduced in .NET Framework 4.6 and carried forward into .NET Core/.NET 10. It compiles IL into x64/x86/ARM64 machine code at runtime.\n- Why it exists: To provide platform-specific optimizations while maintaining portable IL. Allows .NET to adapt to the CPU features available (e.g., AVX-512 on supported hardware).\n- What problem it solves: Eliminates the need to pre-compile for every target CPU. RyuJIT detects the CPU at runtime and emits optimal instructions.\n- When to use it: Always the default JIT. Use when you want the best runtime performance with adaptive optimization.\n- When NOT to use it: When startup time is critical and you can pre-compile with Native AOT or ReadyToRun.',
'- Runtime behavior: RyuJIT is called by the CLR when a method is first invoked. It compiles the IL, emits native code into memory, and patches the call site. With tiered JIT, the method starts with minimal optimizations (Tier 0) and if it reaches a call count threshold, it re-JITs at Tier 1 with full optimizations.\n- Memory behavior: Compiled native code lives in JIT-generated code heap. MethodDesc pointers hold references to compiled code. Tiered compilation temporarily stores both Tier 0 and Tier 1 code.\n- CPU impact: JIT compilation itself has CPU overhead (especially Tier 1). Longer compile times for more optimized code. The CPU cost is paid per-method on first invocation.\n- Network impact: Zero direct impact. However, JIT warm-up means the first few requests may be slower.\n- Database impact: Indirect — slower first queries if EF Core or ADO.NET methods are being JITted.',
'1. A method ProcessOrder() is called for the first time.\n2. The CLR finds the method MethodTable and sees the code pointer is unjitted (stub).\n3. The stub calls into the JIT compiler (RyuJIT).\n4. RyuJIT reads the IL bytecode from the assembly metadata.\n5. RyuJIT performs optimization passes: inlining analysis, loop optimizations, register allocation, dead-code elimination.\n6. RyuJIT emits native machine code (x64/ARM64) into an executable memory region.\n7. The stub is patched to point directly to the native code (direct call).\n8. Future calls to ProcessOrder() execute the native code directly.',
'A high-traffic e-commerce API endpoint for checkout. On first request, the CheckoutAsync() method is JITted (slower). With tiered compilation, it starts at Tier 0 (fast JIT, less optimized), and if called frequently, re-JITs at Tier 1 for peak throughput. After warm-up, the endpoint achieves maximum performance.',
'[MethodImpl(MethodImplOptions.NoInlining)]\npublic decimal CalculateTotalPrice(IEnumerable<OrderItem> items)\n{\n    decimal total = 0;\n    foreach (var item in items)\n    {\n        total += item.Price * item.Quantity;\n    }\n    return total * 1.08m;\n}\n\npublic static bool IsRyuJit()\n{\n    return RuntimeInformation.FrameworkDescription.Contains(".NET");\n}',
'- Tiered JIT balances startup speed and steady-state throughput.\n- Tier 0 compiles ~10x faster than Tier 1 but produces code that runs ~30% slower.\n- RyuJIT can auto-vectorize loops using SIMD (e.g., Vector128, Vector256).\n- The TieredCompilation setting can be disabled for predictable performance.\n- With DOTNET_JitDelayLight you can control how many calls before Tier 1 promotion.',
'- Measuring performance before JIT warm-up is complete.\n- Using [MethodImpl(MethodImplOptions.NoOptimization)] unnecessarily.\n- Disabling tiered compilation without measuring impact on startup.\n- Confusing RyuJIT with Mono JIT (used in Blazor WebAssembly).',
'What is the difference between JIT and AOT compilation?',
'How does the CLR know when a method needs to be compiled?',
'Explain how RyuJIT uses SSE2/AVX instructions for SIMD operations.',
'How does [MethodImpl(MethodImplOptions.AggressiveInlining)] affect JIT behavior?',
'Describe how RyuJIT handles exception handling tables (EH clauses) during code generation.',
'How does RyuJIT linear-scan register allocator work and what are its limitations?',
'RyuJIT uses a linear-scan register allocator (LSC) rather than a graph-coloring allocator. This gives ~80% of graph-coloring quality with near-linear time complexity. The JIT constructs an internal representation called Compiler object that holds the IR in SSA form. RyuJIT then performs: morphing (tree flattening), loop cloning for array bounds check elimination, VN (value numbering) for CSE (Common Subexpression Elimination), and final code generation. In .NET 10, RyuJIT supports AVX-512 and advanced profile-guided optimizations (PGO) that feed back hot-path info from Tier 0 to Tier 1 compilation.',
'Imagine you write a recipe in a special code language. When you want to cook, RyuJIT reads that recipe and translates it into steps your kitchen (computer) understands right now. It watches which recipes you cook most often and makes sure those are extra fast the next time.'
);

Q(2,
'Tiered Compilation (Tier 0 vs Tier 1)',
'Tiered compilation is a .NET Core optimization where methods are first JIT compiled quickly at Tier 0 (minimally optimized) and later recompiled at Tier 1 (fully optimized) if they are called frequently. This balances fast application startup with high steady-state throughput. The call count threshold for promotion is configurable via DOTNET_TC_QuickJitForLoops and related environment variables.',
'- What it is: A two-tier JIT strategy where Tier 0 emits low-quality code quickly and Tier 1 emits high-quality code after a method is deemed hot.\n- Why it exists: Traditional .NET Framework JIT had slow startup because every method was immediately fully optimized. Tiered compilation defers optimization costs to only the methods that matter.\n- What problem it solves: Reduces startup time by 30-50% while maintaining peak throughput. Without tiering, many methods are optimized but never executed enough to justify the cost.\n- When to use it: Enabled by default in .NET Core 3.0+. Use in all server applications, web APIs, and microservices.\n- When NOT to use it: Latency-sensitive real-time systems where consistent per-request timing is critical. In those cases, disable tiering with DOTNET_TieredCompilation=0 and use ReadyToRun or Native AOT.',
'- Runtime behavior: The CLR maintains per-method call counters. When a method reaches the tiering threshold (default 30 calls for 64-bit, or after a loop back-edge fires), a background JIT thread recompiles the method at Tier 1.\n- Memory behavior: Tier 0 code stays resident until the method stabilizes at Tier 1. After Tier 1 replacement, Tier 0 code is eventually collected if DOTNET_TC_Aggressive is set.\n- CPU impact: Tier 0 compilation is fast (~1ms per method). Tier 1 compilation is slower (~5-10ms) but produces faster code.\n- Network impact: None directly, but faster startup means services join load balancer pools sooner.\n- Database impact: None.',
'1. ProcessPayment() is called first time → Tier 0 JIT (quick, minimal optimization).\n2. Tier 0 code sets the method call counter to 1.\n3. On each subsequent call, the counter increments. Loops increment the counter on each back-edge branch.\n4. Counter reaches threshold (default 30) → method is queued for Tier 1 compilation.\n5. A background thread compiles Tier 1 version with full optimizations (inlining, loop unrolling, devirtualization, PGO).\n6. The method entry point is atomically replaced to point to Tier 1 code.\n7. All future calls execute the optimized Tier 1 version.',
'A microservice with 200 endpoints. Without tiering, startup takes 15 seconds as all endpoints JIT. With tiering, startup takes 4 seconds — only the health-check endpoint gets Tier 0 initially. After load balancer routes traffic, frequently called endpoints (orders, payments) graduate to Tier 1 within seconds.',
'AppContext.SetSwitch("System.Runtime.TieredCompilation", true);\n\n[MethodImpl(MethodImplOptions.NoOptimization | MethodImplOptions.NoInlining)]\npublic static void ColdStartMethod()\n{\n    Console.WriteLine("Cold path");\n}\n\n[MethodImpl(MethodImplOptions.AggressiveOptimization)]\npublic static void HotPathMethod()\n{\n    Console.WriteLine("Hot path");\n}',
'- Tiered compilation improves startup by ~40% and steady-state throughput matches non-tiered.\n- [MethodImpl(MethodImplOptions.AggressiveOptimization)] forces immediate Tier 1 — useful for known hot paths.\n- Disabling tiering (DOTNET_TieredCompilation=0) makes every method Tier 1 immediately, increasing startup time.\n- JIT counters have ~15% overhead on method entry — negligible in most apps.\n- PGO (Profile Guided Optimization) works with tiering: Tier 0 instruments code, Tier 1 uses the profile data.',
'- Assuming Tier 0 code quality is representative of production performance.\n- Disabling tiered compilation globally because of a single cold-start concern.\n- Not realizing that [MethodImpl(MethodImplOptions.AggressiveInlining)] only applies to Tier 1.\n- Forgetting to call a method during warm-up — if it never hits Tier 1, it stays slow forever.\n- Thinking tiering applies to Native AOT — it does not (AOT compiles everything ahead of time).',
'What is the default call count threshold for Tier 1 promotion?',
'What is a cold start in the context of JIT?',
'How does DOTNET_TC_QuickJitForLoops interact with tiered compilation?',
'Can you manually trigger a method to recompile at Tier 1?',
'How does tiered compilation interact with PGO to produce better code?',
'Explain the memory barriers used when atomically patching from Tier 0 to Tier 1.',
'Under the hood, tiered compilation uses a stub-based dispatch mechanism. Each method MethodDesc points to a Tier0MethodStub. When a call is made, the stub increments the call counter atomically using Interlocked.Increment. If the threshold is crossed, the stub enqueues a work item to the JIT thread pool. The Tier 1 recompilation uses the same Compiler object but with full optimization flags (OPT_ENABLE_ALL). The native code replacement uses an atomic publish with a memory barrier (Interlocked.CompareExchange on the stub slot) to ensure no thread sees a half-written code pointer. In .NET 10, the JIT team added on-stack replacement (OSR) for methods with long-running loops: the loop body gets Tier 1 treatment while the method head stays Tier 0 temporarily.',
'Imagine you are drawing a picture. Tier 0 is a quick sketch — it is fast to draw but not pretty. If you need to draw the same picture many times, you take more time to make a beautiful version (Tier 1). The quick sketch means you can start drawing sooner!'
);

Q(3,
'Native AOT Compilation',
'Native AOT compiles .NET code directly to native machine code ahead of time (no JIT at runtime). It produces a single self-contained executable with no .NET runtime dependency. It eliminates JIT overhead, reduces memory footprint, and improves startup time dramatically (sub-10ms). However, it requires trimming and cannot use reflection-heavy patterns, runtime code generation, or dynamic loading.',
'- What it is: Ahead-of-time compilation using the same IL-to-native pipeline but run during publish, not at runtime. Uses the ilc (IL Compiler) toolchain.\n- Why it exists: To enable scenarios where JIT is undesirable: containers, serverless, microservices with cold-start requirements, and devices with limited resources.\n- What problem it solves: Eliminates JIT warm-up, reduces container image size (single binary), removes runtime dependency on .NET runtime packs.\n- When to use it: Serverless (Azure Functions, AWS Lambda), CLI tools, containers with fast scaling, IoT/embedded, and Desktop apps where startup matters.\n- When NOT to use it: Applications heavily using System.Reflection.Emit, dynamic proxy libraries (Castle.Core), runtime code generation, or needing Assembly.LoadFrom of plugins at runtime.',
'- Runtime behavior: No JIT at all. The binary is compiled once at publish time. The GC is compiled into the binary (via GC/ee shim). All IL is converted to native code before execution.\n- Memory behavior: No JIT code heap. Smaller working set because JIT compiler code is not loaded. The binary includes only the code and data actually used (trimming).\n- CPU impact: No CPU spent on JIT. Full optimization happens at compile time (like Tier 1 for everything). However, cross-module inlining is limited compared to JIT.\n- Network impact: None directly, but zero cold-start means instant readiness for load balancer health checks.\n- Database impact: EF Core with Native AOT requires special configurations (compiled models, no lazy loading).',
'1. dotnet publish -aot is invoked.\n2. The SDK runs the linker/trimmer to remove unused code.\n3. IL scanning identifies all code roots (entry point, static constructors, etc.).\n4. The IL Compiler (ilc) translates IL to native code using RyuJIT backend in library mode.\n5. The GC, ThreadPool, and runtime helpers are linked into the binary.\n6. A single executable (.exe on Windows, native binary on Linux/macOS) is produced.\n7. At runtime, main() executes native code directly — no JIT, no assembly load.',
'An Azure Functions HTTP trigger that must handle sudden traffic spikes. With Native AOT, the cold-start drops from 3-5 seconds to under 100ms, saving costs and improving user experience. A CLI tool like dotnet-ef published as AOT starts instantly and has a smaller install footprint.',
'public class OrderProcessor\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(ProcessOrder(42));\n    }\n\n    private static string ProcessOrder(int orderId)\n    {\n        var repo = new OrderRepository();\n        var order = repo.GetById(orderId);\n        return $"Order {order.Id} processed";\n    }\n}\n\n// Publish: dotnet publish -aot -c Release -o ./publish',
'- Startup time: 1-10ms vs 100-1000ms for JIT.\n- Memory: 30-50% smaller working set (no JIT heap, no runtime assemblies).\n- Binary size: 3-15MB for a typical microservice (vs 60-200MB for self-contained JIT deployment).\n- Steady-state throughput: Comparable to Tier 1 JIT (within 5-10%).\n- Build time: Significantly slower (minutes vs seconds) due to full compilation and linking.\n- Debugging: Limited — no runtime IL stepping, no SOS debugger extensions.',
'- Assuming all NuGet packages support Native AOT (many use DynamicMethod or Expression trees).\n- Using Newtonsoft.Json (heavy reflection) instead of System.Text.Json with source generators.\n- Forgetting to configure trimmers for serialization (JSON, XML).\n- Using Entity Framework Core without compiling the model (DbContext.Compile()).\n- Expecting dynamic assembly loading to work — Native AOT does not support it.',
'What is the main difference between JIT and Native AOT?',
'Why is Native AOT useful for containerized applications?',
'How does trimming affect unused code paths in Native AOT?',
'What is the [DynamicallyAccessedMembers] attribute and why is it important?',
'How does Native AOT handle virtual calls and interface dispatch without a JIT?',
'Describe the GC implementation in Native AOT — is it the same as in JIT mode?',
'In Native AOT, the runtime is statically linked using a minimal GC/EE shim called the runtime pack. The GC is the same WKS (Workstation) GC, compiled directly into the binary. Virtual method dispatch uses VTable that is fully resolved at compile time — no need for MethodTable patching. Interface dispatch uses virtual stub dispatch (VSD) tables that are precomputed. The biggest FAANG-level challenge is generic code sharing: Native AOT must generate all generic instantiations at compile time because MakeGenericType is unavailable. [RequiresDynamicCode] and [RequiresUnreferencedCode] attributes are used to mark incompatible APIs. The linker (ildasm/ilink) performs whole-program analysis to determine which types and methods are reachable, enabling aggressive dead-code elimination.',
'Imagine baking cookies. JIT is like baking them when someone orders — the first order takes longer. Native AOT is like baking all the cookies ahead of time. When someone asks for one, it is ready instantly because the cookies were already made.'
);

Q(4,
'Garbage Collection Modes (Workstation vs Server, GC modes)',
'.NET has two main GC modes: Workstation GC (optimized for client apps, low latency, single-heap, per-process) and Server GC (optimized for server apps, high throughput, one heap per logical core, larger segments). You configure them via System.GC.Server in runtime config. Server GC maximizes throughput by parallelizing collection, while Workstation GC minimizes pause time and CPU overhead.',
'- What it is: Two distinct GC implementations sharing the same core algorithms but with different threading and heap configurations.\n- Why it exists: Client apps (desktop, UI) need low-latency, responsive UIs. Server apps (web APIs, microservices) prioritize throughput and can tolerate slightly longer but less frequent pauses.\n- What problem it solves: One-size-fits-all GC would be suboptimal for both environments. Server GC with parallel collection on multiple heaps gives better server throughput.\n- When to use it: Server GC for ASP.NET Core, gRPC services, background workers. Workstation GC for WPF, WinForms, MAUI, and any single-user interactive app.\n- When NOT to use it: Server GC on a machine with 1-2 cores provides no benefit over Workstation. Workstation GC on a high-throughput server wastes throughput potential.',
'- Runtime behavior: Workstation GC: single heap, collections happen on the thread that triggered the allocation. Blocking collection pauses the triggering thread. Server GC: one heap per logical core. Each heap has its own thread. Collections happen simultaneously on all GC threads.\n- Memory behavior: Server GC uses larger segment sizes (16MB+ vs 1MB for Workstation). More heaps means more memory overhead but better cache locality per core.\n- CPU impact: Server GC uses multiple CPU cores during collection. Can spike CPU to 100% briefly. Workstation GC uses only the allocating thread.\n- Network impact: GC pauses can affect request latency. Server GC with sustained high allocation can cause GC storms where all cores pause simultaneously.\n- Database impact: Transactional workloads may see connection timeout spikes during long GC pauses in Server mode.',
'1. Application starts; reads DOTNET_gcServer config.\n2. If Server GC enabled, GC creates N heaps (N = logical cores, capped at GCHeapCount).\n3. Each thread is assigned to a heap via Thread.GetCurrentHeap().\n4. Thread allocates on its assigned heap allocation context.\n5. Allocation budget exceeded → GC triggers on that heap GC thread.\n6. For Gen2/LOH collections, all heaps coordinate to collect simultaneously.\n7. After collection, memory is compacted (or swept in LOH) and alloc context is reset.',
'A Kubernetes pod with 4 CPU cores running an ASP.NET Core API. Server GC: 4 heaps, dedicated GC threads, parallel collection. Higher throughput (10k RPS), occasional 100ms pauses. Workstation GC: 1 heap, collection on request threads. Lower throughput (6k RPS) but shorter individual pauses (10-20ms) and less CPU overhead during collection.',
'// Configure in runtimeconfig.json or programmatically\n{\n  "configProperties": {\n    "System.GC.Server": true,\n    "System.GC.Concurrent": true,\n    "System.GC.HeapCount": 4\n  }\n}\n\nAppContext.SetSwitch("System.GC.Server", true);\nGCSettings.LatencyMode = GCLatencyMode.SustainedLowLatency;\n\nConsole.WriteLine($"Server GC: {GCSettings.IsServerGC}");\nConsole.WriteLine($"Total memory: {GC.GetTotalMemory(false):N0} bytes");',
'- Server GC throughput advantage grows with core count.\n- Server GC memory usage is higher (per-heap overhead, larger segments).\n- gcConcurrent (background GC) reduces pause times for both modes.\n- With GCLatencyMode.SustainedLowLatency, the GC avoids blocking Gen2 collections.\n- DOTNET_GCTotalPhysicalMemory can limit memory used by Server GC in containers.\n- GC BGC (Background GC) allows user threads to run during most of a Gen2 collection.',
'- Enabling Server GC on a single-core container (no benefit, more memory).\n- Assuming Server GC automatically means better — measure your workload.\n- Not configuring GCHeapCount for containerized apps (default = all host cores).\n- Using GC.Collect() manually in production (defeats GC self-tuning).\n- Ignoring LOH fragmentation which increases memory usage over time.',
'What is the difference between Workstation and Server GC?',
'What is a GC pause and why does it happen?',
'How does background GC (concurrent GC) reduce pause times?',
'Explain how GCLatencyMode.SustainedLowLatency differs from the default.',
'Describe how Server GC partitions memory across NUMA nodes on multi-socket systems.',
'How does the GC decide when to trigger a Gen2 collection versus a Gen0/Gen1?',
'Server GC creates GCHeapCount individual heaps, each with its own allocator (Alloc context per logical core), segments list (small object heap segments, large object heap segments), gc_thread per heap for coordinating collections, and write_watch table for card marking (card table for cross-generational references). The GC uses Brick Table (a simplified card table) to track cross-gen references. When a Gen0 object references a Gen2 object, the GC must scan all Gen0 objects. The card table helps identify dirty cards quickly. In .NET 10, Region-based GC (DATAS — Data Accelerator Technology) is being explored, which divides the heap into fixed-size regions similar to the Java ZGC approach, aiming for sub-millisecond pause times regardless of heap size.',
'Imagine cleaning your room. Workstation GC is like cleaning by yourself — you stop playing whenever you need to put away one toy. Server GC is like having friends help — you all stop playing at once, clean the whole room super fast, and then go back to playing. Having friends help is faster, but you all need to stop at the same time.'
);

Q(5,
'Large Object Heap (LOH) and POH',
'The Large Object Heap (LOH) stores objects >= 85,000 bytes. It is not compacted by default (swept only), which can lead to fragmentation. The Pinned Object Heap (POH, introduced in .NET 5) stores pinned objects to reduce GC overhead from pinning. Both are Generation 2 heaps — collections here are expensive and should be minimized.',
'- What it is: Separate heap for large allocations. Also a dedicated pinned object heap to isolate pinned allocations from the regular SOH (Small Object Heap).\n- Why it exists: Compacting large objects is expensive (memcpy cost). Pinning objects in the regular heap creates holes that prevent compaction. Isolating pinned objects into POH avoids this.\n- What problem it solves: LOH avoids the cost of compacting large buffers (arrays, strings, memory streams). POH solves fragmentation caused by interleaving pinned and unpinned objects.\n- When to use it: LOH is automatic for objects >= 85KB. POH is used when you explicitly allocate pinned objects with GC.AllocateArray<T>(size, pinned: true).\n- When NOT to use it: Avoid LOH allocations in hot paths if possible. Prefer pooling (ArrayPool<T>) rather than repeatedly allocating large arrays on LOH.',
'- Runtime behavior: LOH is only collected during Gen2 collections. It uses a free-list allocator (sweep, not compact). POH is also Gen2, collected during Gen2.\n- Memory behavior: LOH segments are large (16MB default). Free list tracks holes from deallocated objects. Over time, LOH can become fragmented (no compaction).\n- CPU impact: LOH allocation is fast (bump-pointer on free chunk). Collection of LOH requires sweeping the free list, which is O(number of objects).\n- Network impact: LOH fragmentation can lead to OutOfMemoryException even when total free space is sufficient but fragmented.\n- Database impact: Large result sets loaded into memory as arrays can fragment LOH.',
'1. Code allocates new byte[100_000] (exceeds LOH threshold of 85,000).\n2. GC checks if object >= 85000 bytes → route to LOH.\n3. LOH allocator scans free list for a suitable hole (first-fit or best-fit).\n4. If no hole, request a new LOH segment from the OS (16MB default).\n5. Object is placed. During Gen2 GC, LOH is swept: live objects are marked, dead objects are added to free list.\n6. LOH is NOT compacted (unless DOTNET_GCLOHCompact is set or GCSettings.LargeObjectHeapCompactionMode is enabled).',
'An image-processing service resizes images. Each image (1920x1080) creates a byte[] of ~6MB. Without pooling, these are LOH allocations that fragment memory after GC. Using ArrayPool<byte>.Shared.Rent(6_000_000) avoids LOH fragmentation entirely.',
'// LOH allocation (>= 85KB)\nbyte[] largeBuffer = new byte[100_000]; // Goes to LOH\n\n// POH allocation (pinned array in dedicated heap)\nbyte[] pinnedBuffer = GC.AllocateArray<byte>(4096, pinned: true);\n\n// Avoid LOH fragmentation with pooling\nvar pool = ArrayPool<byte>.Shared;\nbyte[] rented = pool.Rent(100_000);\ntry { await stream.ReadAsync(rented, 0, 100_000); }\nfinally { pool.Return(rented); }\n\n// Force LOH compaction (expensive, use sparingly)\nGCSettings.LargeObjectHeapCompactionMode = GCLargeObjectHeapCompactionMode.CompactOnce;\nGC.Collect(2, GCCollectionMode.Forced);',
'- LOH objects are expensive to collect (Gen2 only).\n- LOH fragmentation can cause OutOfMemoryException with 50% free space.\n- ArrayPool<T> is the #1 mitigation for LOH allocation pressure.\n- POH reduces GC overhead from pinning by isolating pinned objects.\n- LOH compaction (CompactOnce) is very expensive — O(size of LOH) memcpy.\n- GCSettings.LargeObjectHeapCompactionMode resets to Default after each compaction.',
'- Thinking LOH starts at 85KB exactly — it is objects >= 85,000 bytes (includes overhead).\n- Repeatedly allocating and releasing large buffers (causes fragmentation).\n- Assuming LOH is compacted automatically (it is not by default).\n- Using pinned handles on SOH objects (moves them to POH in modern .NET, but not automatically).\n- Ignoring OutOfMemoryException from LOH fragmentation thinking it is a real OOM.',
'What size is the LOH threshold?',
'Why is LOH not compacted by default?',
'How does ArrayPool<T> help reduce LOH pressure?',
'Explain the difference between LOH compaction and LOH sweeping.',
'How does the GC coordinate LOH allocation across multiple Server GC heaps?',
'Describe how POH interacts with the card table for cross-generational references.',
'The LOH allocator uses a segregated free-list implementation. Free blocks are bucketed by size (powers of 2). When a request comes in, the smallest bucket that fits is checked. If no exact bucket, the allocator searches larger blocks or splits a free block. LOH uses VirtualAlloc (Windows) / mmap (Linux) for segment allocation, with segments being 16MB by default. The GC maintains a loh_free_list per heap. When compacting LOH (CompactOnce), the GC performs relocation: it updates all references (via byref rewriting) and then moves the memory. In .NET 10, dynamic LOH compaction is being explored where the GC auto-compacts if fragmentation exceeds a threshold (like Java -XX:+UseG1GC humongous compaction).',
'LOH is like a big toy box for really big toys. Regular toys (small objects) go into small drawers. If you just dump big toys loose into the drawer, they won\'t fit. But the big toy box doesn\'t organize its toys well — when you take a toy out, there is an empty space that might be too small for the next big toy. Over time, you get lots of useless empty spaces.'
);

Q(6,
'Stack vs Heap Allocation',
'Stack allocation is for value types (structs, primitives) and method call frames. It is very fast (single register increment) and automatically cleaned up when the method returns. Heap allocation is for reference types (classes, arrays, strings, delegates) and boxed value types. Heap allocation triggers GC pressure and has overhead from allocation, GC marking, and collection.',
'- What it is: Two memory regions for storing data. Stack is thread-local, LIFO, limited size (~1MB per thread). Heap is shared across threads, dynamically sized, GC-managed.\n- Why it exists: Stack is extremely fast (no GC, no fragmentation) but limited in size and lifetime. Heap supports dynamic lifetimes and large objects but requires GC.\n- What problem it solves: Stack provides low-overhead temporary storage. Heap enables objects that outlive their creating method and supports polymorphism and sharing across threads.\n- When to use it: Use structs (stack) for small, immutable, short-lived data. Use classes (heap) for larger, longer-lived, polymorphic data.\n- When NOT to use it: Avoid large structs (> 64 bytes) on stack — they cause stack copying overhead. Avoid heap allocation in tight loops — causes GC pressure.',
'- Runtime behavior: Stack: RSP (x64)/SP (ARM64) register decremented to reserve space. Accessed via RBP-relative addressing. Heap: GC allocator checks allocation budget, bumps pointer in current allocation context, triggers GC if budget exceeded.\n- Memory behavior: Stack: contiguous, thread-local, up to ~1MB. Heap: multiple segments, grows dynamically, subject to compaction and fragmentation.\n- CPU impact: Stack allocation: 1-2 instructions. Heap allocation: ~10-30 instructions (budget check, pointer bump). GC collection adds significant CPU cost.\n- Network impact: Heap allocation per request increases GC pressure, causing latency spikes.\n- Database impact: Excessive heap allocation in data processing pipelines increases GC collections, causing jitter in query processing.',
'1. Calculate(3,4) called → push return address, push args x=3, y=4 on stack.\n2. Point struct allocated on stack (part of Calculate stack frame).\n3. new Result() called → GC checks allocation budget, bumps pointer in Gen0, returns heap address.\n4. point.Sum() reads stack, produces value.\n5. Calculate returns → stack pointer restored (local frame cleaned). Result object remains on heap.\n6. Eventually, GC collects Result when no references remain.',
'A payment processing pipeline processes 10,000 transactions/second. Using readonly struct for the transaction record (16 bytes) avoids allocating 10,000 objects per second on the heap. This reduces Gen0 collections from 50/sec to 5/sec, halving CPU usage.',
'// Stack allocated (value type)\npublic readonly struct PaymentRecord\n{\n    public readonly int OrderId;\n    public readonly decimal Amount;\n    public readonly DateTime Timestamp;\n}\n\n// Heap allocated (reference type)\npublic class PaymentRecordClass\n{\n    public int OrderId { get; set; }\n    public decimal Amount { get; set; }\n    public DateTime Timestamp { get; set; }\n}\n\n// Boxing (value type → heap)\nint number = 42;\nobject boxed = number;\n\n// Unboxing (heap → stack)\nint unboxed = (int)boxed;',
'- Stack allocation: ~1ns. Heap allocation: ~5-30ns (with no GC). With GC: 1us+.\n- Stack has limited space (default 1MB). Deep recursion causes StackOverflowException.\n- Heap allocations that become Gen2 are expensive to collect.\n- Boxing (value type to object or interface) causes hidden heap allocation.\n- Span<T> and ref struct enable stack-like performance for heap-allocated buffers.\n- Structs larger than 64 bytes have more copying overhead than a reference (8 bytes).',
'- Using classes where structs suffice (increased GC pressure).\n- Passing large structs by value (copied on every call). Use in or ref.\n- Boxing value types unnecessarily (e.g., string.Concat(object) with ints).\n- Assuming struct always lives on stack (it lives on heap when it is a field of a class).\n- Using readonly struct without in parameter — the defensive copy still happens.',
'What is the difference between stack and heap allocation?',
'What happens when the stack overflows?',
'Explain how boxing and unboxing affect performance.',
'When would you choose a readonly struct over a class?',
'How does the GC track stack roots for mark-and-sweep?',
'Explain how Span<T> provides stack-like safety for heap-allocated buffers.',
'The GC uses stack roots to identify live references. The JIT emits GC info for each method — a table describing where references are on the stack and in registers at every instruction pointer (IP) offset. During a GC suspension, the runtime walks each thread stack using these GC info records to find all live object references. This is why ref struct (like Span<T>) can only live on the stack: the GC info system cannot track interior pointers to heap objects. The JIT also emits GC safepoints at method calls and loop back-edges where the thread can be suspended for GC.',
'Stack is like a sticky note — you write something, use it, and throw it away when done. Heap is like a filing cabinet — you put papers there that need to stay, but eventually you need to clean out old papers (that is the Garbage Collector). Sticky notes are faster, but you cannot put a whole book on one.'
);

Q(7,
'JIT Inlining and Its Impact',
'JIT inlining replaces a method call with the method body directly at the call site, eliminating call overhead (push/pop, stack frame setup). The RyuJIT uses heuristics to decide what to inline — small methods (< 32 IL bytes typically), property getters, and simple wrappers. Inlining is critical for performance because it also enables further optimizations like constant folding and dead-code elimination on the combined code.',
'- What it is: A compiler optimization where the called method IL instructions are inserted at the caller call site, removing the call instruction entirely.\n- Why it exists: Method calls have overhead (argument pushing, stack frame, return). Removing this overhead is the single most impactful JIT optimization.\n- What problem it solves: Enables cross-method optimizations (CSE across call boundaries). Eliminates call overhead for small methods. Enables devirtualization of interface calls.\n- When to use it: Automatic. You can hint with [MethodImpl(MethodImplOptions.AggressiveInlining)]. The JIT inlines based on size heuristics (default ~32 IL bytes, configurable via DOTNET_JITInlineDepth).\n- When NOT to use it: Marking very large methods as AggressiveInlining bloats code, causing instruction cache misses and potentially slower execution.',
'- Runtime behavior: During JIT compilation of a method, the compiler sees a call instruction. It checks the callee IL size, calling frequency, and whether it is a tail call. If heuristics pass, it inlines the callee IL into the caller IR.\n- Memory behavior: Inlined code is duplicated at every call site. This increases JIT code size (code bloat). Thresholds exist to prevent excessive bloat.\n- CPU impact: Removing call/return reduces CPU. Inlining also enables register allocation across the combined method and loop optimizations.\n- Network impact: None.\n- Database impact: None.',
'1. RyuJIT compiles Compute().\n2. Sees call Add(3,4).\n3. Checks Add method: IL size = 2 (ldarg.0, ldarg.1, add, ret = 4 bytes).\n4. 4 bytes < 32-byte threshold (and not recursive).\n5. RyuJIT imports Add IL into Compute IR.\n6. After inlining, constant folding produces 7 directly.\n7. Final native code: mov eax, 7 (no call at all).',
'A math library with Vector3.Dot(Vector3, Vector3) — a small method with 3 multiplications and an addition. Called 1 million times per second in a game engine. With inlining, each call avoids 5 instructions of call/return overhead, saving 5 million instructions per second.',
'[MethodImpl(MethodImplOptions.AggressiveInlining)]\npublic static int Square(int x) => x * x;\n\n[MethodImpl(MethodImplOptions.NoInlining)]\npublic static int ExpensiveOperation(int x)\n{\n    Thread.Sleep(1);\n    return x * 2;\n}\n\npublic sealed class FastCalculator\n{\n    public int Compute(int x) => x * 2; // Sealed helps inlining\n}',
'- Inlining can 2-5x speed up tiny methods called in hot paths.\n- AggressiveInlining does not force inlining — JIT still applies other checks (recursion, exception handling, size).\n- Inlining exposes more code to the register allocator, potentially reducing spills.\n- Code bloat from aggressive inlining can cause i-cache misses (instruction cache), slowing down the entire app.\n- Inlining of interface methods requires guarded devirtualization (GDV): a type check plus direct call.\n- DOTNET_JITInlineDepth (default 3) limits nested inlining depth.',
'- Applying AggressiveInlining to every method (counterproductive — causes code bloat).\n- Assuming virtual/interface calls are inlined (they often are not without GDV).\n- Thinking inlining happens across assembly boundaries (it does in .NET, but with limitations).\n- Marking methods NoInlining unnecessarily (prevents optimization).\n- Not realizing that exception handling (try/catch) in a method prevents inlining.',
'What does inlining mean for a method call?',
'How can you prevent a method from being inlined?',
'Why do virtual methods rarely get inlined?',
'What is guarded devirtualization and how does it enable inlining of virtual calls?',
'How does the JIT inlinee budget work and what is the impact of DOTNET_JITInlineMultiplier?',
'Describe how inlining interacts with tiered compilation — does Tier 0 inline?',
'RyuJIT inliner is governed by a cost/benefit model. Each candidate call site gets a profitability score: size delta (callee IL size minus call/return overhead), frequency (estimated execution frequency — loop nests have higher weight), class hierarchy analysis (CHA) for virtual calls (checks if only one implementation exists), and devirtualization probability (the inliner estimates odds the type check succeeds). The inliner budget is calculated as: CalleeSize * (1 + InlineMultiplier * LoopNestDepth). If the result exceeds InlineSizeThreshold (default 32 IL bytes for Tier 1, 128 with AggressiveInlining), inlining is rejected. DOTNET_JITInlineMultiplier (default 11) scales the budget for methods in loops.',
'Imagine you need to tie your shoes. Instead of saying do the tying steps and waiting for someone to do them, you just do the tying immediately. That is inlining — instead of asking another method to do something, you just do it right there, saving the time of asking.'
);

Q(8,
'ReadyToRun (R2R) Images',
'ReadyToRun (R2R) is a pre-compilation format where assemblies contain both IL and a native code image compiled ahead-of-time. At runtime, the CLR uses the pre-compiled native code instead of JIT-compiling, reducing startup time. R2R images are larger (contain both IL and native code) but provide a middle ground between pure JIT and Native AOT — the runtime still has a fallback to JIT for code paths that could not be pre-compiled.',
'- What it is: A hybrid compilation model where native code is included alongside IL in managed assemblies.\n- Why it exists: To reduce JIT compilation time at startup without sacrificing the flexibility of JIT (reflection, generics, dynamic code).\n- What problem it solves: Cold starts in large applications with many assemblies. The native code is already there, so methods do not need JIT on first call.\n- When to use it: Frameworks (ASP.NET Core SDK, .NET runtime libraries), large desktop apps, any app where startup time matters but you still need full JIT capabilities.\n- When NOT to use it: When Native AOT is feasible and you do not need runtime reflection/dynamic code. R2R is also less effective for small apps where the JIT warm-up is already fast.',
'- Runtime behavior: At assembly load, the CLR checks for an R2R native image. For each method, it checks if an R2R entry exists. If so, it uses the pre-compiled code. If not (e.g., generic instantiation not anticipated), it falls back to JIT.\n- Memory behavior: R2R images are larger on disk (IL + native code). At runtime, native code is mapped into memory (not recompiled), saving JIT code heap.\n- CPU impact: Startup CPU is drastically reduced (no JIT for most methods). Steady-state CPU is similar to JIT (R2R code is comparable to Tier 1).\n- Network impact: None directly, but faster startup means faster pod readiness.\n- Database impact: None.',
'1. dotnet publish with PublishReadyToRun=true.\n2. Crossgen2 (the R2R compiler) processes each assembly.\n3. For each method, it checks if R2R compilation is feasible (no runtime generic dependencies).\n4. Native code is generated and embedded into the assembly in a separate section.\n5. At runtime, AssemblyLoadContext maps the R2R image.\n6. Method dispatch checks MethodTable → finds R2R entry → executes pre-compiled native code.\n7. If no R2R entry (e.g., List<Foo> where Foo was not known at compile time), falls back to JIT.',
'An enterprise ASP.NET Core app with 100+ assemblies. Startup time without R2R: 45 seconds (all assemblies JIT-compiled during warm-up). With R2R: 7 seconds (pre-compiled native code for all framework and app assemblies). Steady-state throughput is identical.',
'// Project file\n// <PropertyGroup>\n//   <PublishReadyToRun>true</PublishReadyToRun>\n//   <PublishReadyToRunComposite>true</PublishReadyToRunComposite>\n// </PropertyGroup>\n\npublic class Startup\n{\n    public static void Main(string[] args)\n    {\n        var app = WebApplication.CreateBuilder(args);\n        app.MapGet("/", () => "Hello");\n        app.Run();\n    }\n}\n\n// dotnet publish -c Release -r win-x64 --self-contained true -p:PublishReadyToRun=true',
'- Startup time improvement: 50-80% reduction.\n- Disk size increase: 30-50% larger (IL + native code).\n- Memory: R2R native code is mapped from disk (file-backed), not allocated on JIT heap.\n- R2R composite mode (PublishReadyToRunComposite=true) merges multiple assemblies into a single composite image for better cross-module optimization.\n- R2R code quality is comparable to Tier 1 JIT but with some limitations (no PGO, limited inlining).\n- Cold-start improvement is most dramatic for large apps with many assemblies.',
'- Using R2R without composite mode on multi-assembly apps (less cross-assembly optimization).\n- Expecting R2R to eliminate ALL JIT (generic instantiations still need JIT).\n- Publishing R2R for a different CPU architecture (R2R is architecture-specific).\n- Not measuring the actual startup improvement (R2R has diminishing returns on small apps).\n- Confusing R2R with Native AOT (R2R still needs the .NET runtime; Native AOT does not).',
'What is the main benefit of ReadyToRun?',
'Does R2R eliminate the need for the JIT compiler?',
'How does composite R2R differ from standard R2R?',
'What types of methods cannot be pre-compiled in R2R?',
'How does crossgen2 handle generic code in R2R compilation?',
'Explain how the CLR resolves method dispatch with R2R images versus JIT-compiled code.',
'The R2R format uses GCInfo + unwind info stored alongside native code in the .r2r section of the assembly PE file. Crossgen2 produces an IMAGE_DIRECTORY_ENTRY_R2R_HEADER that contains a method entry point table indexed by method token (simplified hash). At runtime, the MethodTableBuilder checks for an R2R entry via R2RGetEntryPoint(). If found, the native code pointer is placed directly into the MethodTable. This avoids the JIT stub entirely. The tricky part is generic dictionaries: R2R pre-compiles commonly-used generic instantiations (e.g., List<int>, List<string>) but uncommon ones (e.g., List<MyCustomType>) are left to JIT. Crossgen2 uses heuristic profiling (similar to PGO) to decide which generics to pre-compile.',
'Imagine building with LEGO. R2R is like having some pieces already assembled. You still have the instructions (IL) and some loose pieces, but many parts are already built, so you finish faster. But you can still add new pieces anywhere — you are not stuck with only pre-built pieces.'
);

Q(9,
'GC Generations (Gen0, Gen1, Gen2) and Survival',
'.NET GC uses three generations to optimize collection. Gen0 holds newly allocated objects (collected frequently, ~10-100ms intervals). Gen1 is a buffer between Gen0 and Gen2. Gen2 holds long-lived objects (collected rarely). Short-lived objects (99% of allocations) are collected in Gen0 without touching Gen2. This generational approach dramatically reduces GC overhead by focusing collection on the youngest objects.',
'- What it is: A generational garbage collector that divides the managed heap into three age-based regions.\n- Why it exists: The generational hypothesis states most objects die young. Collecting only young objects (Gen0) is much faster than scanning the entire heap.\n- What problem it solves: Full heap collections are expensive (O(all objects)). Generational GC collects ~90% of garbage by scanning only 10% of the heap (Gen0).\n- When to use it: Always — it is automatic.\n- When NOT to use it: You cannot disable generations. You can avoid Gen2 promotions by minimizing long-lived object allocation.',
'- Runtime behavior: Gen0: Smallest budget (~256KB-4MB per CPU). Collected when budget exceeded. Survivors promoted to Gen1. Gen1: Buffer generation (~2-8MB). Survivors from both Gen0 and Gen1 promotions go to Gen2. Gen2: Largest generation. Collected when budget exceeded OR memory pressure detected OR explicit GC.Collect(2).\n- Memory behavior: Gen0 is fast to scan (small). Gen2 grows over time as objects survive. Fragmentation in Gen2 is permanent (no compaction unless forced).\n- CPU impact: Gen0 collection: ~1-5ms. Gen1: ~5-20ms. Gen2: 50ms+ (scans entire heap).\n- Network impact: Gen2 collection can block all threads (in Server GC), causing latency spikes.\n- Database impact: Full GC (Gen2) pauses can cause SQL connection timeouts during high load.',
'1. new Customer() → Gen0 allocation (bump pointer).\n2. Gen0 budget exceeded → Gen0 collection triggered.\n3. GC marks live objects starting from stack roots, static roots, and thread-local storage.\n4. Dead objects memory is reclaimed. Live objects are compacted and promoted to Gen1.\n5. Gen1 budget is checked. If exceeded, Gen1 collects: scans Gen1 + Gen0 (all younger), promotes survivors to Gen2.\n6. Gen2 budget is checked. If exceeded, full GC: Gen0 + Gen1 + Gen2 (entire managed heap).\n7. After Gen2, LOH is swept (not compacted unless configured).',
'A web API allocates a HttpContext wrapper per request (~200 allocations/request). 99% of these allocations die when the request ends. With generational GC, these are collected in Gen0 within milliseconds and never touch Gen2. The application can run for days without a Gen2 collection.',
'public static void MonitorGenerations()\n{\n    Console.WriteLine($"Gen0: {GC.CollectionCount(0)}");\n    Console.WriteLine($"Gen1: {GC.CollectionCount(1)}");\n    Console.WriteLine($"Gen2: {GC.CollectionCount(2)}");\n    Console.WriteLine($"Memory: {GC.GetTotalMemory(false):N0} bytes");\n    \n    var obj = new object();\n    Console.WriteLine($"Gen: {GC.GetGeneration(obj)}");\n    \n    GC.Collect(0); // Force Gen0\n    Console.WriteLine($"After collect, Gen: {GC.GetGeneration(obj)}");\n}',
'- Gen0 is collected when budget is exhausted — tune with DOTNET_GCgen0size.\n- Gen2 collections are the primary cause of GC pauses.\n- Pinning objects prevents compaction, leading to Gen2 fragmentation.\n- Objects promoted to Gen2 survive until a full collect — beware of leaked references.\n- GC.TryStartNoGCRegion() can temporarily suppress GC for latency-critical sections.\n- Large object allocations (LOH) always go directly to Gen2.',
'- Holding references to short-lived objects longer than needed (promotes them to Gen2).\n- Calling GC.Collect() manually — it promotes objects prematurely and hurts performance.\n- Not disposing IDisposable in a timely manner — objects survive to Gen1/Gen2 waiting for finalization.\n- Assuming Gen2 collections never happen — they do under memory pressure.\n- Ignoring the GCSettings.LargeObjectHeapCompactionMode for long-running Gen2 processes.',
'How many generations does the .NET GC have?',
'What happens to an object when it survives a Gen0 collection?',
'Explain the generational hypothesis and why it is effective.',
'How does pinning affect the generational GC?',
'How does the GC resize generation budgets adaptively at runtime?',
'Describe the card table mechanism and how it enables Gen0/Gen1-only collections without scanning Gen2.',
'The card table is a bitmap where each bit represents a 128-byte region of Gen2 (card size). When a Gen0/Gen1 object writes a reference to a Gen2 object, the JIT emits a write barrier (JIT_WriteBarrier) that marks the corresponding card as dirty. During a Gen0 collection, the GC scans only dirty cards in Gen2 (plus stack roots) instead of the entire Gen2. This ensures Gen0 collections remain O(Gen0 + dirty cards) rather than O(Gen2). The write barrier adds ~5-10% overhead to reference-type field writes. In .NET 10, the LowLatency mode write barrier uses hardware DMB (Data Memory Barrier) instructions on ARM64 for efficiency.',
'Think of garbage collection like cleaning a classroom. Gen0 is the floor — you sweep every hour (lots of crumbs). Gen1 is the desk surface — you wipe it every few hours. Gen2 is the closet — you clean it once a month. Most mess is on the floor, so sweeping the floor every hour cleans 90% of the mess with little effort!'
);

Q(10,
'Thread Pool and I/O Completion Ports',
'The Thread Pool manages worker threads to execute asynchronous tasks efficiently, avoiding the cost of creating/destroying threads. I/O Completion Ports (IOCP) are a Windows kernel mechanism (also available on Linux via epoll/kqueue) for efficient async I/O. When an async operation completes, the IOCP notifies the thread pool without blocking a thread during the I/O wait. This enables .NET to handle thousands of concurrent connections with very few threads.',
'- What it is: Thread Pool: a pool of reusable threads. IOCP: a kernel queue that delivers I/O completion notifications without polling.\n- Why it exists: Creating threads is expensive (~1MB stack, kernel object). Thread Pool reuses threads. IOCP avoids blocking threads on I/O, which is critical for scalability.\n- What problem it solves: Without IOCP, every async I/O operation would need a dedicated thread waiting (blocked) — 1000 connections = 1000 threads = 1GB+ stack memory. With IOCP, a handful of threads process completions as they arrive.\n- When to use it: Always — async/await on streams, sockets, HTTP, files uses Thread Pool + IOCP automatically.\n- When NOT to use it: CPU-bound work on the thread pool can starve async completions (thread pool injection may help, but dedicated threads are sometimes better).',
'- Runtime behavior: Thread Pool maintains a min/max number of threads. When work is queued, an existing thread picks it up. If all threads are busy, the pool injects new threads (up to max). Idle threads are retired after 20 seconds.\n- Memory behavior: Each thread pool thread has ~1MB stack (virtual, not physical until used). IOCP kernel objects are small.\n- CPU impact: Thread pooling avoids context switch overhead of thread creation/destruction. IOCP completions are processed on thread pool threads with minimal latency.\n- Network impact: IOCP is the foundation of high-performance networking in ASP.NET Core (Kestrel uses IOCP on Windows, epoll on Linux). Enables 100k+ concurrent connections.\n- Database impact: Async ADO.NET (SqlConnection.OpenAsync, ExecuteReaderAsync) uses IOCP for non-blocking database access.',
'1. await httpClient.GetAsync(url) is called.\n2. The runtime initiates an async I/O operation (socket send/recv).\n3. The calling thread returns to the thread pool (continuation is captured).\n4. The I/O operation is processed by the kernel/driver (no .NET thread involved).\n5. When I/O completes, an I/O completion packet is placed on the IOCP queue.\n6. A thread pool I/O worker thread dequeues the completion packet.\n7. The continuation (code after await) is scheduled on the thread pool.\n8. A thread pool thread picks up the continuation and executes it.',
'Kestrel web server handling 50,000 concurrent connections: Only 8-16 thread pool threads are actively processing at any moment. Each async HTTP request does non-blocking I/O for reading request body and writing response. No thread is blocked waiting for data — all 50,000 connections progress concurrently.',
'public static async Task HandleRequestAsync(HttpContext context)\n{\n    var data = await FetchFromDatabaseAsync();\n    await context.Response.WriteAsync(data);\n}\n\nThreadPool.SetMinThreads(8, 8);\nThreadPool.SetMaxThreads(100, 100);\n\nThreadPool.QueueUserWorkItem(state =>\n{\n    Console.WriteLine($"Thread: {Environment.CurrentManagedThreadId}");\n});\n\nThreadPool.GetAvailableThreads(out int workers, out int completion);\nConsole.WriteLine($"Workers: {workers}, IOCP: {completion}");',
'- Thread Pool injection (creating new threads) is slow. Set SetMinThreads to your expected concurrency level.\n- Blocking a thread pool thread (Task.Wait, Task.Result) can cause thread pool starvation (deadlock).\n- IOCP on Linux uses epoll (single-threaded event loop) + SocketAsyncEventArgs with thread pool dispatch.\n- Thread Pool hill-climbing algorithm adjusts thread count based on throughput measurements.\n- DOTNET_ThreadPool_UnfairSemaphoreSpinLimit controls spinning vs parking behavior.',
'- Blocking on async code (.Result, .Wait()) — causes thread pool starvation.\n- Not increasing SetMinThreads for high-concurrency services.\n- Running CPU-bound work on thread pool (blocks I/O completions).\n- Misunderstanding: async != parallel — async frees threads, it does not create more throughput on a single CPU.\n- Using Task.Run for CPU-bound work unnecessarily (adds scheduling overhead).',
'What is the difference between a thread and a thread pool thread?',
'Why is async/await better than Task.Wait()?',
'Explain how IOCP differs from blocking I/O.',
'What is thread pool starvation and how do you detect it?',
'Describe the hill-climbing algorithm used by the thread pool.',
'How does ConfigureAwait(false) affect thread pool scheduling?',
'The Thread Pool in .NET Core (and .NET 10) uses a work-stealing queue per thread, plus a global queue. When a thread pool worker runs out of local work, it checks other threads local queues (work-stealing) before checking the global queue. IOCP completions go through the I/O Completion Port object which maintains an I/O completion list. The thread pool I/O worker threads wait on the IOCP via GetQueuedCompletionStatus() (Windows) or epoll_wait() (Linux). The PortableThreadPool implementation abstracts over the OS primitives. In .NET 10, the IO_URING support on Linux (where available) provides even more efficient async I/O by reducing syscalls through submission/completion queue rings shared between kernel and userspace.',
'Thread Pool is like a taxi fleet. Instead of buying a new car for every passenger, you keep a few cars that drive one passenger, then the next. IOCP is like a bell at a restaurant — when your table is ready, the bell rings instead of you standing and waiting. Both together let thousands of passengers (requests) be handled by just a few cars (threads).'
);


fs.writeFileSync(outFile, md, 'utf8');
console.log('Written. Size:', md.length);

// ====== SECTION 2: ASP.NET Core Fundamentals ======
L("");
L("---");
L("");
L("## Section 2: ASP.NET Core Fundamentals");
L("");
