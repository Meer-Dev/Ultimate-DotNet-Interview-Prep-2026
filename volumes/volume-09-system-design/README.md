# Volume 9: System Design Interview Guide 🏗️

[![FAANG](https://img.shields.io/badge/FAANG-Interview-blueviolet?style=flat-square)](https://)
[![System Design](https://img.shields.io/badge/System-Design-ff6f00?style=flat-square)](https://)
[![2026](https://img.shields.io/badge/Year-2026-brightgreen?style=flat-square)](https://)
[![Pages](https://img.shields.io/badge/Pages-Complete-success?style=flat-square)](https://)
[![Level](https://img.shields.io/badge/Level-All-brightgreen?style=flat-square)](https://)

> **Senior System Design Interview Coach | 20+ years at FAANG | Complete preparation guide for 2026**

---

## 📚 Table of Contents

- [Section 1: System Design Basics](#section-1-system-design-basics)
- [Section 2: Core Concepts](#section-2-core-concepts)
- [Section 3: Complete Design Problems](#section-3-complete-design-problems)
- [Section 4: System Design Cheatsheet](#section-4-system-design-cheatsheet)

---

## Section 1: System Design Basics

### 🎯 What Interviewers Look For

System design interviews evaluate your ability to **build scalable, reliable, and maintainable systems**.

| Criteria | Weight | What They Want |
|----------|--------|----------------|
| **Structure** | 25% | Clear methodology, organized thinking |
| **Requirements** | 15% | Asking right questions, handling ambiguity |
| **Scale** | 20% | Realistic capacity estimates, trade-offs |
| **Design** | 25% | Clean architecture, component interactions |
| **Depth** | 15% | Deep dives, edge cases, failure modes |

### 📋 The 4-Step Framework

| Step | Duration | Key Activities |
|------|----------|----------------|
| **1. Requirements** | 5 min | Functional + Non-functional requirements, handle ambiguity |
| **2. Estimation** | 5 min | Traffic, storage, bandwidth, QPS calculations |
| **3. Design** | 15-20 min | High-level architecture, API design, data model |
| **4. Deep Dive** | 10-15 min | Bottlenecks, trade-offs, edge cases, failure modes |

#### Step 1: Requirements (5 min)

**Functional Requirements** — What the system must do:
- List 3-5 core features
- Prioritize with interviewer
- Define success criteria

**Non-Functional Requirements** — Quality attributes:
- **Scalability**: Handle growth
- **Availability**: Uptime (99.9% → 8.7h/yr, 99.99% → 52min/yr, 99.999% → 5min/yr)
- **Latency**: P99 response time
- **Consistency**: Strong vs eventual
- **Durability**: Data persistence guarantees

> **Handling Ambiguity**: Ask clarifying questions. "How many users?", "Read-heavy or write-heavy?", "Global or regional?", "Real-time or near-real-time?"

#### Step 2: Estimation (5 min)

| Metric | Formula | Example |
|--------|---------|---------|
| DAU | Given or assumed | 1B DAU |
| QPS | DAU × actions/day / 86400 | 1B × 100 / 86400 ≈ 1.16M QPS |
| Peak QPS | Avg QPS × 5-10× | ~10M QPS |
| Storage/Write | Write volume × data size | 100M posts × 1KB = 100GB/day |
| Storage Total | Daily × retention days | 100GB × 365 × 5 = 182.5 TB |
| Bandwidth | Data/sec transferred | 100MB/s writes, 10GB/s reads |

**Quick Reference:**
- 1M DAU × 10 actions/day ÷ 86400 ≈ 116 QPS
- 1B DAU × 100 actions/day ÷ 86400 ≈ 1.16M QPS
- 1 GB/day × 365 days = 365 GB/year

#### Step 3: Design (15-20 min)

- Draw **High-Level Architecture** (boxes and arrows)
- Design **API** (REST, GraphQL, gRPC)
- Design **Data Model** (schema, indexes, partitioning)
- Design **Key Components** (load balancers, caches, databases, queues)

#### Step 4: Deep Dive (10-15 min)

Be ready to discuss:
- **Bottlenecks**: Single points of failure, hot partitions, database contention
- **Trade-offs**: Consistency vs availability, cost vs performance, latency vs throughput
- **Edge Cases**: Network partitions, server crashes, race conditions, duplicate requests
- **Failure Modes**: Degraded behavior, graceful degradation, circuit breakers

### ⚠️ Common Pitfalls

| Pitfall | Why It Hurts | How to Avoid |
|---------|-------------|--------------|
| Jumping to solution | No structure, missing requirements | Follow the 4-step framework |
| Over-engineering | Adding complexity without need | Start simple, add complexity when justified |
| Ignoring scale | Wrong database, no caching | Estimate first, then design |
| No trade-off discussion | Looks inexperienced | Always mention alternatives |
| Forgetting failure modes | System breaks in production | Discuss SPOF, fallbacks, degradation |
| Vague on consistency | Data corruption risks | Be explicit: strong vs eventual |
| No monitoring plan | Blind in production | Always include observability |

---
## Section 2: Core Concepts

For EACH concept: What it is, Why it exists, Real-world analogy, Performance trade-offs, When to use/not use.

---

### 2.1 Load Balancing

**What it is**: Distributes incoming traffic across multiple servers to prevent overload.

**Why it exists**: Single servers have capacity limits; load balancers provide scalability, availability, and fault tolerance.

**Real-world analogy**: A receptionist directing customers to the shortest checkout line.

#### Layer 4 vs Layer 7

| Aspect | Layer 4 (Transport) | Layer 7 (Application) |
|--------|-------------------|----------------------|
| Operates at | TCP/UDP | HTTP/HTTPS |
| Routing decision | IP + port | Headers, cookies, URL path |
| Performance | Fast, less CPU | Slower, more CPU |
| Features | Limited | Content-based routing, SSL termination |
| Example | HAProxy (L4), AWS NLB | NGINX, HAProxy (L7), AWS ALB |

#### Load Balancing Algorithms

| Algorithm | How It Works | Best For | Caveat |
|-----------|-------------|----------|--------|
| **Round Robin** | Cycles through servers in order | Equal-capacity servers, stateless | Doesn't account for load |
| **Weighted Round Robin** | Servers with higher capacity get more requests | Heterogeneous servers | Static weights |
| **Least Connections** | Sends to server with fewest active connections | Long-lived connections, variable load | Needs connection tracking |
| **Least Response Time** | Lowest latency + fewest connections | Performance-sensitive apps | Complex metric |
| **IP Hash** | Hash of client IP determines server | Session stickiness | Uneven distribution with small IP pools |
| **Consistent Hashing** | Hash ring minimizes redistribution on changes | Caching, distributed systems | Virtual nodes needed for balance |

**Performance Trade-offs:**
- Layer 4: ~1-5x faster than Layer 7, but no smart routing
- Layer 7: More features, SSL termination, but higher overhead

**When to use/not use:**
- ✅ Use: Multi-server deployments, auto-scaling, microservices
- ❌ Avoid: Single-server setup, ultra-low latency (use hardware LB)

---

### 2.2 Caching

**What it is**: Temporary high-speed storage layer that stores frequently accessed data.

**Why it exists**: Reduces latency, decreases database load, improves throughput.

**Real-world analogy**: A desk drawer with frequently used tools instead of walking to the toolbox.

#### Caching Strategies

| Strategy | Read Path | Write Path | Pros | Cons |
|----------|-----------|------------|------|------|
| **Cache-Aside** | Check cache → miss → read DB → write cache | Write directly to DB, invalidate cache | Simple, cache only hot data | Cache miss penalty |
| **Read-Through** | Cache reads DB on miss (cache is authoritative) | Write directly to DB | Consistent read path | Cache library complexity |
| **Write-Through** | N/A | Write to cache → cache writes to DB | Always consistent | Write latency, cache thrash |
| **Write-Behind (Write-Back)** | N/A | Write to cache → async write to DB | Fast writes | Risk of data loss |
| **Write-Around** | Cache-aside reads | Write directly to DB | Avoids cache pollution | Cache miss on recent writes |

#### Eviction Policies

| Policy | Description | Use Case |
|--------|-------------|----------|
| **LRU** (Least Recently Used) | Evicts oldest accessed item | General purpose, temporal locality |
| **LFU** (Least Frequently Used) | Evicts least accessed item | Stable access patterns |
| **FIFO** (First In First Out) | Evicts oldest item | Simple, predictable |
| **TTL** (Time To Live) | Evicts after fixed time | Expiring data (sessions, cache) |
| **Random** | Random eviction | When patterns are unpredictable |

#### Cache Invalidation

| Problem | Solution |
|---------|----------|
| Stale data | TTL-based expiration |
| Write inconsistency | Write-through + cache invalidation |
| Stampede (thundering herd) | Mutex on cache miss, early recompute |
| Cold start | Pre-warming, gradual ramp-up |

**When to use/not use:**
- ✅ Use: Read-heavy workloads, expensive computations, database bottleneck
- ❌ Avoid: Write-heavy workloads, real-time data strong consistency, cache > DB cost

---

### 2.3 Database Scaling

**What it is**: Techniques to handle growing data and traffic beyond a single database.

**Why it exists**: Single DB has capacity limits (storage, CPU, IOPS, connections).

#### Vertical vs Horizontal Scaling

| Aspect | Vertical Scaling | Horizontal Scaling |
|--------|-----------------|-------------------|
| Approach | Bigger machine | More machines |
| Max limit | Hardware ceiling | Theoretically unlimited |
| Complexity | Low | High |
| Cost | Expensive at high end | Commodity hardware |
| Downtime | Yes (upgrade) | No (rolling) |
| Consistency | Easy | Complex |

#### Replication Types

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| **Single Leader** | One primary for writes, replicas for reads | Simple, ACID on primary | Write bottleneck, read lag |
| **Multi-Leader** | Multiple primaries, each accepts writes | Multi-region, high availability | Conflict resolution |
| **Leaderless** | Any node accepts writes (Cassandra, Dynamo) | High availability, partition-tolerant | Weak consistency |

#### Sharding Strategies

| Strategy | How It Works | Pros | Cons |
|----------|-------------|------|------|
| **Range-based** | Key range per shard (A-M, N-Z) | Range queries efficient | Hot spots on range edges |
| **Hash-based** | hash(key) % N → shard | Even distribution | Resharding expensive, no range queries |
| **Directory-based** | Lookup table maps key → shard | Flexible, easy rebalancing | Lookup overhead, SPOF |
| **Geo-based** | Shard by region | Low latency for regional data | Cross-region queries slow |

**When to use/not use:**
- ✅ Replication: Read-heavy, high availability needs
- ✅ Sharding: >10TB data, >10K writes/sec
- ❌ Replication alone: Write-heavy workloads (primary bottleneck)
- ❌ Sharding: Small datasets (<1TB), complex cross-shard queries

---

### 2.4 Message Queues

**What it is**: Async communication layer that decouples producers and consumers.

**Why it exists**: Enables async processing, buffering, load leveling, and decoupling.

**Real-world analogy**: A restaurant order counter — chefs cook from tickets, waiters pick up completed orders.

#### Queue Comparison

| Feature | Kafka | RabbitMQ | AWS SQS | Pulsar |
|---------|-------|----------|---------|--------|
| Model | Pub/Sub + log | Queue + Exchange | Queue | Pub/Sub + log |
| Ordering | Partition-level | Optional | Best-effort (FIFO avail) | Partition-level |
| Retention | Configurable (days) | Ack-based delete | Up to 14 days | Configurable |
| Throughput | Millions/sec | Tens of thousands/sec | High | Millions/sec |
| Persistence | Disk | Disk + memory | SSD-backed | Tiered storage |
| Exactly-once | Yes (idempotent) | No | Yes | Yes |
| Latency | ~2-10ms | <1ms | ~10-100ms | ~2-10ms |

#### Delivery Semantics

| Semantics | Description | Trade-off |
|-----------|-------------|-----------|
| **At-most-once** | Message sent once, may be lost | No duplicates, possible data loss |
| **At-least-once** | Retry until acked, may duplicate | No data loss, possible duplicates |
| **Exactly-once** | Dedup + ordering guarantee | Highest complexity, lowest throughput |

**When to use/not use:**
- ✅ Use: Async processing, buffering peaks, decoupling services, event sourcing
- ❌ Avoid: Real-time request-response, simple sync workflows, <100 msg/day

---

### 2.5 Microservices

**What it is**: Architecting an application as a collection of loosely coupled, independently deployable services.

**Why it exists**: Overcomes limitations of monolithic apps — independent scaling, deployment, and team ownership.

#### Service Discovery

| Pattern | Description | Tools |
|---------|-------------|-------|
| **Client-side** | Client queries registry, load balances | Eureka, Consul |
| **Server-side** | Router/LB queries registry | AWS ALB, NGINX + Consul |
| **DNS-based** | DNS resolves to healthy instances | Round-robin DNS |

#### Resilience Patterns

| Pattern | Problem Solved | How It Works |
|---------|---------------|--------------|
| **Circuit Breaker** | Cascading failures | Trip after N failures, half-open after timeout |
| **Bulkhead** | Resource exhaustion | Isolate resources per service/queue |
| **Retry** | Transient failures | Exponential backoff + jitter |
| **Timeout** | Hanging services | Fail fast, never wait indefinitely |
| **Fallback** | Service unavailable | Return degraded response or cached data |

**When to use/not use:**
- ✅ Use: Large teams, independent deploy cycles, polyglot tech stacks
- ❌ Avoid: Small teams (<10), simple apps, early-stage startups

---

### 2.6 Distributed Systems

**What it is**: Multiple computers working together as a single system.

**Why it exists**: Single machine cannot handle web-scale data and traffic.

#### CAP Theorem

| System | Choice | Why |
|--------|--------|-----|
| **CP** (Consistency + Partition Tolerance) | Banks, Zookeeper | Reject writes during partition |
| **AP** (Availability + Partition Tolerance) | DNS, CDN, Cassandra | Accept stale reads during partition |
| **CA** (Consistency + Availability) | Single-node DB | Not possible in distributed (network always unreliable) |

In practice: Network partitions are inevitable. Choose CP or AP.

#### PACELC Extension

- **DynamoDB**: PA/EL (prefers availability + low latency, eventual consistency)
- **MongoDB**: PC/EC (prefers consistency in both cases)
- **Cassandra**: PA/EL (tunable consistency)

#### Consistency Models

| Model | Description | Examples |
|-------|-------------|----------|
| **Strong** | Read always returns latest write | Single DB, Spanner |
| **Eventual** | Reads may return stale, will converge | DNS, CDN, DynamoDB |
| **Causal** | Causally related operations seen in order | CRDTs, Vector Clocks |
| **Read-your-writes** | Writer sees own writes immediately | Session consistency |
| **Monotonic Reads** | Successive reads return >= previous value | Quorum reads |
| **Quorum** | R + W > N for strong consistency | Cassandra, DynamoDB |

**When to use/not use:**
- ✅ Use: Multi-region, high availability, large-scale systems
- ❌ Avoid: Simple single-server apps, strong consistency without partition tolerance need

---

### 2.7 CDN (Content Delivery Network)

**What it is**: Geographically distributed network of proxy servers and data centers.

**Why it exists**: Minimizes latency by serving content from edge locations near users.

| Type | Content | Cache Strategy | Example |
|------|---------|---------------|---------|
| **Static** | Images, CSS, JS, video | Long TTL (days) | CloudFront, CloudFlare |
| **Dynamic** | API responses, HTML | Short TTL (minutes) | Akamai, Fastly |
| **Streaming** | Live video, VoD | Segment-based | CloudFront + MediaTailor |

**Origin Pull vs Push:**
- **Pull**: Cache fetches on first request (automatic, cache warming issue)
- **Push**: Content proactively uploaded (control, but complex invalidation)

**When to use/not use:**
- ✅ Use: Global audience, media content, static assets, API acceleration
- ❌ Avoid: Single-region apps, low-traffic sites (<100 daily visitors)

---

### 2.8 Rate Limiting

**What it is**: Controlling the rate of requests a user/service can make.

**Why it exists**: Prevent abuse, ensure fair usage, protect backend from overload.

#### Algorithms

| Algorithm | How It Works | Pros | Cons |
|-----------|-------------|------|------|
| **Token Bucket** | Tokens added at rate r, consumed per request | Smooth traffic, allows bursts | Burst up to bucket size |
| **Leaky Bucket** | Requests processed at fixed rate, queue overflow drops | Predictable rate | No burst tolerance |
| **Fixed Window** | Counter per time window (e.g., 100 req/min) | Simple, memory efficient | Traffic spikes at window boundaries |
| **Sliding Window** | Rolling window of requests | Smoother boundaries | More memory/CPU |
| **Sliding Window Log** | Timestamp log per user | Most accurate | Memory O(N) for active users |

#### Distributed Rate Limiting

| Approach | Description | Challenge |
|----------|-------------|-----------|
| **Redis + Lua** | Atomic counter operations | Network latency to Redis |
| **Local + Sync** | Local counters with periodic sync | Inconsistency between nodes |
| **Consistent Hashing** | Rate limit per user → same node | Rebalancing issues |

**When to use/not use:**
- ✅ Use: Public APIs, authentication endpoints, abuse prevention
- ❌ Avoid: Internal services with trusted clients, very low latency (adds ~1-5ms)

---

### 2.9 Consistent Hashing

**What it is**: A distribution scheme where keys are mapped to positions on a hash ring.

**Why it exists**: Minimizes rehashing when servers are added/removed (only 1/N of keys need remapping vs all keys).

**Virtual Nodes (VNodes):**
- Each physical node maps to multiple positions on ring
- Default: 128-256 vnodes per physical node

**Performance Trade-offs:**
- Adding/removing node: only O(1/N) keys redistributed
- Lookup: O(log V) where V = total vnodes

**When to use/not use:**
- ✅ Use: Distributed caching (Memcached), DynamoDB/Cassandra, CDN edge routing
- ❌ Avoid: Small clusters (<3 nodes), uniform keys with simple hash mod

---

### 2.10 Bloom Filters

**What it is**: A probabilistic, space-efficient data structure for set membership queries.

**Why it exists**: Standard set membership requires storing all elements. Bloom filters use ~1/10th the space with tunable false positive rate.

| Parameter | Effect |
|-----------|--------|
| m (bits) | Larger m = lower false positive rate |
| k (hash functions) | Optimal: k = (m/n) × ln(2) |
| n (elements) | More elements = higher false positive rate |

**False positive rate**: ~1% with m/n = 10, k = 7

**Variants**: Counting Bloom Filter (supports deletion), Scalable Bloom Filter (grows dynamically), Cuckoo Filter (supports deletion, higher load factor)

**When to use/not use:**
- ✅ Use: Caching (prevent cache stampede), deduplication, spam detection, DB query optimization
- ❌ Avoid: Exact membership required, small datasets (hash set is simpler)

---

### 2.11 Idempotency

**What it is**: An operation that produces the same result regardless of how many times it's executed.

**Why it exists**: In distributed systems, retries are inevitable. Idempotency prevents duplicate charges, orders, or messages.

| Layer | Idempotency Mechanism |
|-------|----------------------|
| HTTP | POST unsafe by default; use Idempotency-Key header |
| Database | UPSERT, INSERT ... ON CONFLICT DO NOTHING |
| Message Queue | Kafka producer.idempotence=true (exactly once) |
| Payment | Idempotency key prevents double charge |

**When to use/not use:**
- ✅ Use: Payment processing, order placement, any retried operation
- ❌ Avoid: Idempotent-by-default operations (GET, PUT with full state)

---

### 2.12 Sequencing (ID Generation)

**What it is**: Generating unique, ordered identifiers for entities.

**Why it exists**: Need globally unique IDs that are sortable, scalable, and performant.

#### Comparison

| Method | Format | Pros | Cons | Throughput |
|--------|--------|------|------|------------|
| **UUIDv4** | 128-bit random | No coordination, globally unique | Not sortable, large (36 chars) | Unlimited |
| **UUIDv7** | Time-ordered UUID | Sortable, unique | Requires time sync | Unlimited |
| **Snowflake** | Timestamp + worker + sequence | Sortable, compact (64-bit) | Clock skew, needs worker ID mgmt | ~4M/sec per worker |
| **ULID** | Timestamp (ms) + random | Sortable, URL-safe, 26 chars | 1.21e24 IDs/sec limit | Very high |
| **DB Sequence** | Auto-increment | Simple, sortable | Single point of failure, scaling | ~10K/sec |
| **Redis INCR** | Incrementing counter | Fast, sortable | Redis SPOF, volatile | ~100K/sec |

**Twitter Snowflake Format:** 1-bit reserved + 41-bit timestamp (~69 years) + 10-bit worker ID (1024 machines) + 12-bit sequence (4096 IDs/ms/worker) = ~4M IDs/sec total.

**When to use/not use:**
- ✅ UUIDv7/ULID: New systems, no coordination needed
- ✅ Snowflake: High-throughput, need sortable IDs
- ❌ UUIDv4: Large, unsorted (bad for DB indexes, B-tree fragmentation)
- ❌ DB sequence: Distributed systems (SPOF)

---

### 2.13 Distributed Transactions

**What it is**: Coordinating transactions across multiple services/databases.

**Why it exists**: Modern systems span multiple services; ACID doesn't cross service boundaries.

#### Patterns

| Pattern | How It Works | Pros | Cons |
|---------|-------------|------|------|
| **2PC** | Coordinator asks all to prepare then commit | Atomic across services | Coordinator SPOF, blocking locks |
| **3PC** | 2PC + timeout + extra phase | Non-blocking | Still coordinator overhead |
| **SAGA (Choreography)** | Each service emits events, next service reacts | Decoupled, async | Complex tracking, eventual consistency |
| **SAGA (Orchestrator)** | Orchestrator calls each service, compensates on failure | Centralized management | Orchestrator SPOF |
| **TCC** | Try → Confirm/Cancel | Non-blocking | Complex to implement |
| **Outbox Pattern** | Write event + DB operation in one local TX, relay outbox to queue | Simple, reliable | Idempotency needed at consumer |

#### Outbox Pattern

1. BEGIN TX → INSERT INTO orders (...) + INSERT INTO outbox (event_type, payload) → COMMIT TX
2. Relay Service polls outbox → publishes to queue

**When to use/not use:**
- ✅ 2PC: Small, critical transactions within single datacenter
- ✅ SAGA: Long-running business processes (travel booking, e-commerce)
- ✅ Outbox: Event-driven, need reliable message publishing
- ❌ 2PC: Cross-DC, high latency, many participants

---

### 2.14 Monitoring, Logging & Tracing

**What it is**: Three pillars of observability — understanding system behavior in production.

**Why it exists**: Without observability, incidents are guesswork.

#### Metrics (RED Method)

| Category | Metric | Example |
|----------|--------|---------|
| **Rate** | Requests per second | 10K req/s |
| **Errors** | Failed requests | 0.1% error rate |
| **Duration** | Latency distribution | P50: 50ms, P95: 200ms, P99: 500ms |

**USE Method** (for resources): Utilization × Saturation × Errors

#### Logging Levels

| Level | Use | Retention |
|-------|-----|-----------|
| ERROR | Service failures, exceptions | 30 days |
| WARN | Degraded but handling | 14 days |
| INFO | State changes, significant events | 7 days |
| DEBUG | Development only | Not in prod |

#### Distributed Tracing (OpenTelemetry)

| Tool | Description |
|------|-------------|
| **OpenTelemetry** | Standard for collecting traces, metrics, logs |
| **Jaeger** | Distributed tracing backend |
| **Prometheus** | Metrics collection + alerting |
| **Grafana** | Visualization dashboards |
| **ELK Stack** | Log aggregation + search |

**When to use/not use:**
- ✅ Use: Production systems, microservices, any service >1K QPS
- ❌ Avoid: Dev-only apps, prototypes (monitoring adds complexity)

---
## Section 3: Complete Design Problems

---

### Problem 3.1: URL Shortener (bit.ly / TinyURL)

#### Problem Statement

Design a service that takes long URLs and generates short, unique aliases that redirect to the original URL.

#### Requirements Gathering

**Key questions to ask:**
- How many URLs per day? → 100M
- How long should short URLs be? → 6-7 characters
- Should they expire? → Optional TTL
- Analytics needed? → Yes, click tracking
- Custom aliases allowed? → Yes (optional)

#### Functional Requirements

- Generate short URL from long URL
- Redirect short URL to original (301/302)
- Custom alias option
- TTL/expiration support
- Click analytics (count, referrer, geolocation, device)
- Link management (delete, list my links)

#### Non-Functional Requirements

- **Latency**: Redirect < 100ms (P99), creation < 200ms
- **Availability**: 99.99%
- **Durability**: No lost redirects
- **Consistency**: Eventual for analytics, strong for key uniqueness
- **Scale**: 100M creates/day, 10B redirects/day

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Creates/day | 100M |
| Creates/sec (avg) | 1,157 |
| Creates/sec (peak) | ~5,000 |
| Redirects/day | 10B |
| Redirects/sec (avg) | 115,740 |
| Redirects/sec (peak) | ~500,000 |
| Total URLs (5 years) | 182.5B |
| Storage (URLs) | ~91 TB |
| Analytics storage | ~365 TB/year |
| Read/Write ratio | 100:1 |

**Key generation**: Need ~62^7 ≈ 3.5 trillion unique combinations (a-z, A-Z, 0-9, 7 chars)

#### Database Design

`sql
CREATE TABLE urls (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_key VARCHAR(10) UNIQUE NOT NULL,
    long_url TEXT NOT NULL,
    user_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NULL,
    INDEX idx_short_key (short_key),
    INDEX idx_user_id (user_id)
);

-- Analytics (Cassandra/ClickHouse - time-series)
CREATE TABLE click_events (
    short_key VARCHAR(10),
    timestamp TIMESTAMP,
    referrer VARCHAR(255),
    user_agent VARCHAR(500),
    ip_address VARCHAR(45),
    geolocation VARCHAR(100),
    device_type VARCHAR(50),
    PRIMARY KEY (short_key, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);
`

**Partitioning**: Hash-based sharding on short_key for URLs; time-based + short_key for analytics

#### API Design

`json
POST /api/shorten
Request:  {"long_url": "https://example.com/...", "custom_alias": "my-link", "ttl_days": 30}
Response: {"short_key": "abc123", "short_url": "http://short.com/abc123", "expires_at": "..."}

GET /{short_key} → 301 Redirect → Location: original URL

GET /api/analytics/{short_key}?from=...&to=...
Response: {"total_clicks": 12345, "daily": [...], "referrers": {...}}
`

#### High-Level Architecture

`
Client → CDN → Load Balancer → Web Servers → Redis Cache (short_key → long_url)
                                             → SQL Database (Primary)
                                             → Key Generator (KGS - pre-generated keys)
                                             → Kafka → Analytics Worker → Analytics DB
`

#### Key Generation

**Recommended**: KGS (Key Generation Service) approach
- Pre-generate 10M random 7-char keys in batch
- Store in vailable_keys table
- On creation: SELECT ... FROM available_keys LIMIT 1 FOR UPDATE SKIP LOCKED
- Benefits: No collision risk, non-sequential, fast allocation

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Web Servers | Auto-scaling behind LB (CPU > 70%) |
| Redis Cache | 50 shards (cluster mode), LRU eviction |
| SQL Database | Read replicas (100:1 ratio), shard by short_key |
| Key Generator | Pre-cache 10K keys per server |
| Analytics | Cassandra time-series, TTL-based compaction |

#### Security Considerations

| Threat | Mitigation |
|--------|------------|
| DDoS | CloudFlare protection, rate limiting |
| URL abuse (phishing) | Google Safe Browsing API |
| Sequential guessing | Random key generation |
| Injection | Validate and sanitize long_url |

#### Follow-Up Questions

**Junior**: How to handle 301 vs 302 redirect? (301 cached by browsers, 302 for analytics)
**Mid-Level**: How to prevent key pool bottleneck? (Pre-cache 10K keys per server)
**Senior**: Design global distributed key generation across regions (Snowflake-style ID + local KGS pools per DC)

---

### Problem 3.2: Netflix

#### Problem Statement

Design a video streaming platform like Netflix — supports catalog management, video encoding, CDN delivery, recommendation, and watch history.

#### Requirements Gathering

- 300M subscribers, 20K titles, 100K hours of content
- Video quality up to 4K HDR
- 3 simultaneous streams per account
- Adaptive bitrates (HLS/DASH)

#### Functional Requirements

- User authentication and device management
- Content catalog (browse, search, categories)
- Video streaming with adaptive bitrates
- Video encoding pipeline (ingest → transcode → package)
- Personalization/recommendations
- Watch history and progress sync
- Multiple profiles per account
- Download for offline viewing

#### Non-Functional Requirements

- **Latency**: Video start < 3s, UI < 200ms
- **Availability**: 99.99%
- **Throughput**: 100+ Gbps at peak
- **Consistency**: Eventual for content, strong for account/billing
- **Durability**: Zero content loss

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Subscribers | 300M |
| DAU | 150M |
| Peak concurrent streams | ~50M |
| Bandwidth per stream (4K) | 25 Mbps |
| Peak bandwidth | 50M × 25 Mbps = 1.25 Ebps (handled by CDN) |
| Storage per title | 100GB (all qualities) × 20K = 2 PB |
| Encoding throughput | 50 titles/day × 4h × 10 qualities = 2000h/day |

#### Database Design

`sql
CREATE TABLE users (
    id UUID PRIMARY KEY, email VARCHAR(255) UNIQUE,
    subscription_tier VARCHAR(20), created_at TIMESTAMP
);
CREATE TABLE profiles (
    id UUID PRIMARY KEY, user_id UUID REFERENCES users(id),
    name VARCHAR(50), avatar_url TEXT, maturity_level VARCHAR(10)
);
CREATE TABLE titles (
    id UUID PRIMARY KEY, title VARCHAR(255), description TEXT,
    release_year INT, duration_minutes INT,
    maturity_rating VARCHAR(10), metadata JSONB
);
CREATE TABLE watch_history (
    profile_id UUID, title_id UUID, progress_seconds INT,
    last_watched TIMESTAMP, completed BOOLEAN,
    PRIMARY KEY (profile_id, last_watched)
) WITH CLUSTERING ORDER BY (last_watched DESC);
`

#### API Design

`json
GET /api/catalog?genre=Action&page=1&size=20
GET /api/titles/{id}/streams?bitrate=auto
GET /api/manifest/{title_id}.m3u8    → HLS manifest
GET /api/segments/{title_id}/{quality}/{segment}.ts
POST /api/watch/progress { "title_id": "...", "progress_seconds": 3600 }
GET /api/recommendations?profile_id=...&limit=20
`

#### Low-Level Design

**Adaptive Bitrate Streaming (ABR):**
- Content stored as segments (2-10 seconds) at multiple bitrates:
  - 4K HDR: 25 Mbps | 1080p: 5 Mbps | 720p: 2.5 Mbps | 480p: 1 Mbps | 360p: 0.5 Mbps
- Client uses HLS/DASH, switches quality based on network conditions

**Encoding Pipeline:**
1. Content ingested → validate → split into GOP-aligned segments
2. Encode each segment at all target bitrates (parallel encode on GPU/CPU farm)
3. Generate manifest files (.m3u8 for HLS, .mpd for DASH)
4. Upload to CDN origin + S3 archival

**Recommendation Engine:**
- Collaborative filtering + content-based + deep learning model
- A/B test multiple models simultaneously

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| CDN | Multi-CDN (CloudFront + Akamai), 1000s of edges |
| API Servers | Stateless, auto-scaling |
| Redis | Cluster mode, cache metadata + session data |
| PostgreSQL | Read replicas (50:1), connection pooling |
| Encoding | Spot GPU instances, priority queue, chunked parallel |

#### Trade-offs

| Decision | Chosen | Alternative |
|----------|--------|-------------|
| Streaming protocol | HLS + DASH | MPEG-DASH only |
| CDN strategy | Multi-CDN | Single CDN |
| Encoding | Chunked parallel | Sequential |
| Watch history | Cassandra | DynamoDB |

#### Follow-Up

**Junior**: How does client know which bitrate to request? (Throughput-based ABR)
**Mid-Level**: How to handle thundering herd on new release? (Pre-position content on CDN)
**Senior**: Design fault-tolerant encoding pipeline across regions (Leader election, checkpoint/resume)

---

### Problem 3.3: YouTube

#### Problem Statement

Design a video-sharing platform like YouTube — supports video upload, transcoding, CDN delivery, search, comments, and live streaming.

#### Requirements Gathering

- 2.5B MAU, 500 hours of video uploaded per minute
- 5B daily views
- Video size limit: up to 10GB after encoding
- Live streaming support

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| MAU | 2.5B |
| Uploads/min | 500 hours |
| Storage/year | ~131 PB (after encoding) |
| Views/day | 5B |
| Views/sec (peak) | ~350K segments/s |
| Comments/day | 500M |
| Search QPS | 100K |

#### Database Design

`sql
CREATE TABLE videos (
    id VARCHAR(36) PRIMARY KEY, channel_id VARCHAR(36) NOT NULL,
    title VARCHAR(200), description TEXT, duration_seconds INT,
    privacy_status ENUM('public','unlisted','private'),
    upload_status ENUM('processing','ready','failed'),
    published_at TIMESTAMP, INDEX idx_published (published_at)
);

CREATE TABLE comments (
    video_id VARCHAR(36), created_at TIMESTAMP, comment_id UUID,
    user_id VARCHAR(36), parent_comment_id UUID, content TEXT, upvotes INT,
    PRIMARY KEY (video_id, created_at, comment_id)
) WITH CLUSTERING ORDER BY (created_at DESC);
`

#### API Design

`json
POST /api/upload/init { "filename": "...", "size": 1073741824 }
Response: { "upload_id": "...", "chunk_size": 5242880 }
PUT /api/upload/{upload_id}/{chunk_number} (binary)
POST /api/upload/{upload_id}/complete
GET /api/videos/{id}/manifest.m3u8
GET /api/videos/{id}/segments/{quality}/{segment}.ts
GET /api/videos/{id}/comments?page=1&cursor=...
POST /api/videos/{id}/comments { "content": "...", "parent_comment_id": null }
`

#### Low-Level Design

**Upload Flow:** Resumable chunked upload with direct-to-storage signed URLs. Client splits file into ~5MB chunks, uploads in parallel, server reassembles.

**Transcoding Pipeline:** Split video into 10-second GOP-aligned chunks, encode each at 7+ resolutions (360p → 4K) and 3 codecs (H.264, VP9, AV1) in parallel on spot GPU instances.

**Live Streaming:** RTMP/WHIP ingest → real-time transcoding → LL-HLS delivery (<5s latency). Pre-provision capacity for large events.

**Comments System:** Cassandra wide rows per video. Hot video buffer in Redis, flush every 10s. Cursor-based pagination. ML spam filter.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Upload | Resumable, signed URLs, direct-to-storage |
| Transcoding | Spot GPU instances, auto-scale by queue depth |
| CDN | Multi-tier global cache |
| Comments | Cassandra + Redis buffer for hot videos |
| Search | Elasticsearch, index per language |
| Trending | Flink streaming job, sliding window velocity |

#### Trade-offs

- Storage: GCS/S3 with signed URLs vs server-received upload
- Comments: Cassandra vs PostgreSQL sharded
- Live latency: LL-HLS (5s) vs WebRTC (sub-second, less compatible)

#### Follow-Up

**Junior**: Handle duplicate uploads? (Hash-based dedup, Content ID)
**Mid-Level**: Implement YouTube Shorts? (Vertical video, ML ranking, TikTok-style feed)
**Senior**: Design Content ID for copyright detection? (Audio/video fingerprint extraction, billions indexed, real-time matching)

---
### Problem 3.4: WhatsApp

#### Problem Statement

Design a real-time messaging platform like WhatsApp — supports one-on-one and group messaging, media sharing, end-to-end encryption, and voice/video calls.

#### Requirements Gathering

- 2B MAU, 100B+ messages/day
- Group size up to 1024 participants
- End-to-end encryption required (Signal Protocol)
- Multi-device support

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Messages/day | 100B |
| Messages/sec (avg) | 1.16M |
| Messages/sec (peak) | ~5M |
| Media messages/day | 4.5B |
| Storage (text, 2yr) | ~7.3 PB |
| Storage (media, 30d) | ~27 PB |

#### Database Design

`sql
CREATE TABLE users (
    phone_number VARCHAR(20) PRIMARY KEY, -- E.164 format
    username VARCHAR(50), display_name VARCHAR(100),
    profile_pic_url TEXT, last_seen TIMESTAMP,
    status_text TEXT, created_at TIMESTAMP
);

-- Messages (Cassandra - time-series per conversation)
CREATE TABLE messages (
    conversation_id VARCHAR(36),  -- deterministic: encode(sorted participants)
    message_id TIMEUUID, -- UUID v1 for ordering
    sender_id VARCHAR(20),
    content_type ENUM('text','image','video','document','location'),
    content TEXT, -- encrypted payload
    media_url TEXT, media_encryption_key TEXT,
    created_at TIMESTAMP,
    PRIMARY KEY (conversation_id, message_id)
) WITH CLUSTERING ORDER BY (message_id ASC);

CREATE TABLE group_members (
    group_id VARCHAR(36), user_id VARCHAR(20),
    added_by VARCHAR(20), joined_at TIMESTAMP,
    role ENUM('admin','member'),
    PRIMARY KEY (group_id, user_id)
);
`

#### API Design

WhatsApp uses persistent **WebSocket connections** for real-time messaging.

`json
// WebSocket Message Types
{ "type": "message.send", "payload": {
    "conversation_id": "abc123", "message_id": "unique-client-generated",
    "content_type": "text", "content": "Hey!",
    "encryption_info": { "algorithm": "signal", "ciphertext": "base64..." }
}}
{ "type": "message.ack", "payload": { "message_id": "...", "status": "delivered" } }
`

#### Low-Level Design

**Connection Management:** Each device maintains persistent WebSocket to a Connection Manager (stateful). Consistent hashing routes user → same CM node.

**Message Flow:** Sender encrypts with Signal Protocol → WebSocket → CM → Message Router finds recipient → Forward if online, or store in Cassandra + push notification.

**Group Messaging (Hybrid):** Small groups (<32): server fan-out. Large groups: server writes once, members pull.

**End-to-End Encryption (Signal Protocol):**
- X3DH key exchange + Double Ratchet for perfect forward secrecy
- Each message derives new keys via ratchet
- Server stores only encrypted ciphertext (cannot decrypt)
- Multi-device: per-device identity keys, sender encrypts N times

**Presence:** Heartbeat every 30s via WebSocket. Redis stores status. Privacy controls on visibility.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| WebSocket | 100K connections per node, consistent hashing |
| Message Router | In-memory routing table (Redis-backed) |
| Message Storage | Cassandra (time-series, TTL for ephemeral) |
| Media Storage | S3 + CDN, signed URLs with short TTL |

#### Follow-Up

**Junior**: Handle offline messages? (Store in Cassandra, push notification, deliver on reconnect)
**Mid-Level**: Design WhatsApp status/stories? (Ephemeral storage, CDN, TTL purge)
**Senior**: Design multi-device with independent decryption? (Per-device keys, one-to-many encryption, encrypted ratchet sync protobuf)

---

### Problem 3.5: Uber

#### Problem Statement

Design a ride-hailing platform like Uber — connects riders with drivers, provides real-time tracking, ETA estimation, and surge pricing.

#### Requirements Gathering

- 10,000+ cities, 25M+ daily trips
- 5M active drivers, real-time tracking every 3 seconds
- Geospatial indexing for ride matching

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Daily trips | 25M |
| Trips/sec (peak) | ~2,900 |
| Active drivers | 5M |
| Location updates/sec | 1.67M |
| Storage (trips, 5yr) | ~45.6 TB |
| Storage (location, 30d) | ~433 TB |

#### Database Design

`sql
CREATE TABLE drivers (
    id UUID PRIMARY KEY, name VARCHAR(100), phone VARCHAR(20),
    license_number VARCHAR(50), vehicle_info JSONB,
    status ENUM('online','offline','on_trip','suspended'),
    current_location GEOGRAPHY(POINT),
    INDEX idx_status_location USING GIST (current_location)
);
CREATE TABLE trips (
    id UUID PRIMARY KEY, rider_id UUID, driver_id UUID,
    status ENUM('requested','accepted','in_progress','completed','cancelled'),
    pickup_location GEOGRAPHY(POINT), dropoff_location GEOGRAPHY(POINT),
    pickup_time TIMESTAMP, dropoff_time TIMESTAMP, fare DECIMAL(10,2),
    surge_multiplier DECIMAL(3,2), created_at TIMESTAMP
);
`

#### API Design

`json
POST /api/rides/request
{ "rider_id": "abc123", "pickup": {"lat":37.77,"lng":-122.41},
  "dropoff": {"lat":37.78,"lng":-122.40}, "ride_type": "uber_x" }
Response: {"trip_id":"xyz789","estimated_fare":15.50,"estimated_arrival_sec":300,"surge_multiplier":1.2}

GET /api/rides/estimate?pickup=...&dropoff=...&ride_type=uber_x
WebSocket: { "type": "tracking.subscribe", "trip_id": "xyz789" }
Push: { "type": "driver.location", "lat": 37.77, "lng": -122.41 }
`

#### Low-Level Design

**Ride Matching:** Use S2 geometry or geohash grid. Divide map into hierarchical cells (level 13 ≈ 1km²). Drivers register in their current cell. On rider request, search cell then expand outward in concentric rings. Select top N candidates → send offers → first to accept wins.

**Matching Algorithm:**
1. Determine geo-cell(s) around pickup (expanding rings)
2. Query available drivers (filter: ride type, rating)
3. Send offer via push + WebSocket
4. First to accept gets trip (use pending_accept flag)
5. Timeout: 10s → expand radius and retry

**Surge Pricing:** Monitor demand/supply per geo-cell. Ratio = demand/supply. Update every 5 minutes.

**ETA:** Real-time traffic data, Haversine distance, average road speed. Update every 30s.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Location ingestion | Kafka cluster (1.7M writes/sec) |
| Geospatial index | Redis Cluster + S2 grid cells |
| Dispatcher | Per-region, horizontal scaling |
| PostgreSQL | Read replicas, shard by region |

#### Follow-Up

**Junior**: Handle driver going offline mid-trip? (Complete trip as-is, flag for review)
**Mid-Level**: Design Uber Pool / shared rides? (Route similarity grouping, dynamic rerouting)
**Senior**: Design dispatch optimization for min wait time + max earnings? (Bipartite matching with score function, rebalancing empty drivers)

---

### Problem 3.6: Twitter / X

#### Problem Statement

Design a social media platform like Twitter/X — supports tweets, timeline, retweets, likes, search, trends, and notifications.

#### Requirements Gathering

- 500M MAU, 500M tweets/day
- Timeline: following feed (algorithmic or chronological)
- 280 character limit (25K for Blue)

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Tweets/day | 500M |
| Tweets/sec (peak) | 29K |
| Timeline renders/day | 5B |
| Timeline QPS (peak) | 290K |
| Storage (tweets, 5yr) | ~255 TB (text) |
| Media storage (5yr) | ~68 PB |
| Follow relationships | 100B edges |

#### Database Design

`sql
CREATE TABLE tweets (
    id BIGINT PRIMARY KEY, -- Snowflake (timestamp-sorted)
    user_id BIGINT NOT NULL, content TEXT,
    media_urls TEXT[], retweet_count BIGINT DEFAULT 0,
    like_count BIGINT DEFAULT 0, created_at TIMESTAMP,
    INDEX idx_user_id (user_id, created_at DESC)
) PARTITION BY RANGE (YEAR(created_at));

CREATE TABLE follows (
    follower_id BIGINT, followee_id BIGINT, created_at TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id),
    INDEX idx_followee (followee_id, follower_id)
);
`

#### API Design

`json
POST /api/tweets { "content": "Hello world!", "media_ids": ["img1"] }
GET /api/timeline/home?limit=50&cursor=next_token
POST /api/users/{id}/follow
POST /api/tweets/{id}/like
GET /api/search?q=twitter&type=top&limit=20
`

#### Low-Level Design

**Timeline Generation — Hybrid Fan-out (Twitter's approach):**
- **Regular users (<10K followers)**: Push model — fan-out tweet ID to all followers' Redis timeline caches
- **Celebrity users (>10K followers)**: Pull model — when follower loads timeline, fetch celebrity tweets separately and merge
- Each timeline cache stores newest 800 tweet IDs (~6KB per user)
- Total cache: 500M × 6KB ≈ 3TB (sharded Redis)

**Trending Topics:** Kafka Streams sliding window (1h). Extract hashtags, compute velocity (rate of change). Filter spam/ads. Geographically scoped.

**Search:** Elasticsearch per language index. Kafka → Elasticsearch for near real-time. BM25 ranking + recency.

**Notifications:** Event-driven (like, retweet, reply → Kafka). In-app via WebSocket, push via FCM/APNs. Max 1000/day per user.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Tweet storage | PostgreSQL sharded by user_id |
| Timeline cache | Redis Cluster (3TB), shard by user_id |
| Follow graph | Cassandra (wide rows) |
| Fan-out worker | Kafka consumer group, auto-scale |
| Search | Elasticsearch, index per language |

#### Follow-Up

**Junior**: How to implement retweets? (Store reference to original tweet with user_id)
**Mid-Level**: Design algorithmic timeline? (ML ranking: user affinity, engagement, recency; feature store; A/B testing)
**Senior**: Detect bot networks? (Graph analysis, sentiment similarity, temporal correlation, ML classifier on account features)

---
### Problem 3.7: Instagram

#### Problem Statement

Design a photo/video sharing platform like Instagram — photo sharing, stories, feed, explore, hashtags, direct messaging.

#### Requirements Gathering

- 2B MAU, 500M photos uploaded/day
- Stories (24h ephemeral), Reels (short video)
- Feed algorithmic or chronological

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Photos uploaded/day | 500M |
| Photos viewed/day | 50B |
| Storage (photos, 5yr) | ~1.8 EB |
| Feed renders/day | 30B |
| Likes/day | 10B |
| Comments/day | 1B |

#### Database Design

`sql
CREATE TABLE posts (
    id BIGINT PRIMARY KEY, user_id BIGINT NOT NULL,
    caption TEXT, location_id BIGINT, media_urls TEXT[],
    filter_name VARCHAR(30), like_count BIGINT DEFAULT 0,
    comment_count BIGINT DEFAULT 0, created_at TIMESTAMP,
    INDEX idx_user_id (user_id, created_at DESC)
);

CREATE TABLE likes (
    post_id BIGINT, user_id BIGINT, created_at TIMESTAMP,
    PRIMARY KEY (post_id, user_id)
); -- Cassandra for high write throughput

CREATE TABLE follows (
    follower_id BIGINT, followee_id BIGINT, created_at TIMESTAMP,
    PRIMARY KEY (follower_id, followee_id)
); -- Cassandra wide rows
`

#### Low-Level Design

**Media Upload Pipeline:** Direct-to-S3 signed URLs. Async processing: thumbnail (150×150), standard (640×640), large (1080×1080), blurhash, EXIF extraction.

**Feed Generation:** Similar hybrid push/pull as Twitter. Regular users (<5K followers) → push to followers' Redis caches. Celebrities → pull on read. 500 post IDs per user cache.

**Explore Page:** Content-based recommendations using CLIP/ResNet embeddings. Post → vector, user → vector. ANN search in vector DB (Pinecone/Milvus). Diversity and freshness signals.

**Stories:** TTL 24h. Redis for active stories, S3 for media. Background job cleans up expired stories.

**Reels:** Vertical video, 15-90s. ML recommendation (watch time × engagement × completion rate). Pre-render top-K candidates per session.

#### Follow-Up

**Junior**: Implement hashtags? (Extract from caption, indexed, query by hashtag)
**Mid-Level**: Design Reels to compete with TikTok? (ML for-you page, popular audio, editing effects)
**Senior**: Design content recommendation for Explore — personalization, diversity, freshness? (Multi-objective ranking, two-tower NN, online A/B testing)

---

### Problem 3.8: Facebook News Feed

#### Problem Statement

Design Facebook's News Feed — users see content from friends, pages, groups ranked by relevance.

#### Requirements Gathering

- 3B MAU, algorithmic ranking (not chronological)
- 300 feed items per user per day
- Content: text, photos, videos, links, shares, ads

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Feed renders/day | 20B |
| Feed items served/day | 6000B |
| Posts created/day | 1B |
| Social graph edges | 600B |
| Storage (posts, 5yr) | ~3.65 PB |

#### Low-Level Design

**Feed Generation Pipeline (3 Stages):**

**Stage 1: Candidate Generation** — 500-1000 candidates from friends, pages, groups, ads. Dedup recently shown.

**Stage 2: Feature Computation** — 1000+ features per (user, post): recency (decay function), affinity (interaction frequency), edge weight (close friend vs acquaintance), engagement prediction (will they like/comment/share?), content type affinity, time of day, negative signals (hidden/reported similar content).

**Stage 3: ML Ranking** — Neural network with dense + sparse features + embeddings. Output relevance score. A/B test multiple model versions.

**Real-Time Updates:** New posts → Kafka → Flink. Evaluate relevance, insert into user's Redis feed cache at correct rank.

**Feed Caching:** Pre-compute every 5-15 min, store in Redis (200 posts per user). Real-time inserts for freshness.

#### Follow-Up

**Junior**: How are ads inserted? (Separate ad ranking pipeline, auction-based placement)
**Mid-Level**: Implement "See First" favorites? (Boost affinity weights for selected friends)
**Senior**: Design "Why am I seeing this?" context button? (Store ranking features per impression, post-hoc attribution of top-3 reasons)

---

### Problem 3.9: ChatGPT / LLM Service

#### Problem Statement

Design a service to serve large language models like ChatGPT — prompt handling, token generation, rate limiting, context management, multi-user serving.

#### Requirements Gathering

- 100M MAU, 10M DAU
- Model size: 70B-1.8T parameters (GPT-4 scale)
- 500 avg response tokens, 128K max context
- Streaming via SSE/WebSocket

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Requests/day | 100M |
| Avg prompt tokens | 500 |
| Avg completion tokens | 500 |
| Total tokens/day | 100B |
| Peak tokens/sec | ~5.8M |
| GPU memory (70B, FP16) | ~140GB per replica |

#### Database Design

`sql
CREATE TABLE users (
    id UUID PRIMARY KEY, tier ENUM('free','plus','pro','enterprise'),
    rate_limit_tokens_per_hour INT, created_at TIMESTAMP
);
CREATE TABLE conversations (
    id UUID PRIMARY KEY, user_id UUID REFERENCES users(id),
    model VARCHAR(50), title TEXT, created_at TIMESTAMP, updated_at TIMESTAMP
);
CREATE TABLE messages (
    conversation_id UUID, message_index INT,
    role ENUM('system','user','assistant','tool'),
    content TEXT, tool_calls JSONB, token_count INT, created_at TIMESTAMP,
    PRIMARY KEY (conversation_id, message_index)
) WITH CLUSTERING ORDER BY (message_index ASC);
`

#### API Design

`json
POST /api/chat/completions
{ "model": "gpt-4", "messages": [
    {"role":"system","content":"You are helpful."},
    {"role":"user","content":"Explain quantum computing"}
  ], "temperature": 0.7, "max_tokens": 1000, "stream": true }

// SSE Streaming Response:
data: {"choices":[{"delta":{"content":"Quantum"},"index":0}]}
data: {"choices":[{"finish_reason":"stop","index":0}]}
`

#### Low-Level Design

**Model Serving Architecture:**
- **Tensor Parallelism**: Split layers across NVLink-connected GPUs
- **Pipeline Parallelism**: Different layers on different GPUs
- **Data Parallelism**: Replicate across multiple GPU sets
- **Continuous Batching**: New requests join batch as earlier finish (vLLM/TensorRT-LLM)

**KV Cache Management (PagedAttention):**
- Each token generates KV cache entries (~10GB for 128K context)
- PagedAttention: Virtual memory paging for KV cache
- Reduces memory fragmentation → 2-4x throughput improvement

**Speculative Decoding:** Small draft model predicts 3-5 tokens. Large model verifies in one forward pass. 2-3x speedup.

**Request Lifecycle:**
1. Auth → Rate Limit (Redis sliding window)
2. Lookup conversation history from DB
3. Tokenize, manage context window (truncate oldest if >128K)
4. Content moderation check
5. Route to inference pool (prefill → decode → stream tokens)
6. Log usage, update conversation history, async billing

**Rate Limiting by Tier:**

| Tier | Tokens/min | Requests/min | Concurrent |
|------|-----------|-------------|------------|
| Free | 4K | 3 | 1 |
| Plus | 40K | 30 | 3 |
| Pro | 200K | 100 | 10 |

#### Follow-Up

**Junior**: How does streaming work? (SSE: server pushes tokens as generated, client accumulates)
**Mid-Level**: How to handle 128K context window efficiently? (Selective attention, sliding window, KV cache compression, FlashAttention)
**Senior**: Design multi-tenant GPU cluster with cost allocation? (GPU virtualization, tenant-level quota enforcement, usage-based billing, spot/preemptible instance pools for batch vs priority queues for interactive)

---
### Problem 3.10: Banking System

#### Problem Statement

Design a core banking system — supports transactions, ACID guarantees, audit trail, fraud detection, and reconciliation.

#### Requirements Gathering

- Millions of accounts, billions of transactions
- Strict ACID compliance (no money lost)
- Real-time fraud detection
- Regulatory compliance (audit trail, reporting)

#### Functional Requirements

- Account management (create, close, balance inquiry)
- Fund transfers (same-bank, inter-bank, international)
- Deposit and withdrawal
- Transaction history and statements
- Fraud detection (real-time + batch)
- Reconciliation (end-of-day, cross-system)
- Audit trail (immutable log)
- Multi-currency support

#### Non-Functional Requirements

- **Consistency**: Strong (ACID) — no double-spend, no negative balances
- **Durability**: Zero data loss (multi-region synchronous replication)
- **Availability**: 99.999% (planned downtime only)
- **Latency**: Transfer < 1s (same-bank), < 5s (inter-bank)
- **Security**: PCI-DSS, encryption at rest/transit, audit logging

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Accounts | 100M |
| Transactions/day | 500M |
| TPS (peak) | ~50,000 |
| Storage (transactions, 10yr) | 500M × 500B × 365 × 10 = ~912 TB |
| Audit log storage (10yr) | ~2 PB |

#### Database Design

`sql
-- Accounts (SQL — Strong consistency, ACID)
CREATE TABLE accounts (
    account_id VARCHAR(36) PRIMARY KEY,
    customer_id VARCHAR(36) NOT NULL,
    account_type ENUM('checking','savings','credit'),
    currency VARCHAR(3) DEFAULT 'USD',
    balance DECIMAL(19,4) NOT NULL DEFAULT 0.0000,
    status ENUM('active','frozen','closed'),
    version INT NOT NULL DEFAULT 1, -- optimistic locking
    created_at TIMESTAMP, updated_at TIMESTAMP
);

-- Transactions (immutable, append-only)
CREATE TABLE transactions (
    transaction_id UUID PRIMARY KEY,
    from_account_id VARCHAR(36),
    to_account_id VARCHAR(36),
    amount DECIMAL(19,4) NOT NULL,
    currency VARCHAR(3),
    transaction_type ENUM('transfer','deposit','withdrawal','fee','interest'),
    status ENUM('pending','completed','failed','reversed'),
    reference_id VARCHAR(64) UNIQUE, -- idempotency key
    created_at TIMESTAMP,
    completed_at TIMESTAMP,
    INDEX idx_from_account (from_account_id, created_at DESC),
    INDEX idx_to_account (to_account_id, created_at DESC),
    INDEX idx_reference (reference_id),
    INDEX idx_status (status, created_at)
) PARTITION BY RANGE (YEAR(created_at));

-- Audit Log (immutable append-only — separate table or Kafka)
CREATE TABLE audit_log (
    event_id UUID PRIMARY KEY,
    actor_id VARCHAR(36), action VARCHAR(50),
    resource_type VARCHAR(50), resource_id VARCHAR(36),
    old_values JSONB, new_values JSONB,
    ip_address VARCHAR(45), user_agent TEXT,
    created_at TIMESTAMP
) PARTITION BY RANGE (YEAR(created_at));
`

#### Low-Level Design

**Transaction Flow (Double-Entry Accounting):**

`sql
-- Atomic transfer (within same DB)
BEGIN;
SELECT balance, version FROM accounts WHERE account_id = 'A' FOR UPDATE;
-- Check sufficient funds + optimistic lock
UPDATE accounts SET balance = balance - 100.00, version = version + 1
WHERE account_id = 'A' AND version = :old_version;
UPDATE accounts SET balance = balance + 100.00, version = version + 1
WHERE account_id = 'B' AND version = :old_version;
INSERT INTO transactions (id, from_account, to_account, amount, status, reference_id)
VALUES (..., 'A', 'B', 100.00, 'completed', 'ref-123');
INSERT INTO audit_log (...) VALUES (...);
COMMIT;
`

**Idempotency:** Each transaction has unique eference_id. On retry, system checks if eference_id already exists → return existing status (no duplicate).

**Fraud Detection:**
- **Real-time**: Rules engine + ML model scoring per transaction
  - Velocity checks (N transactions in M minutes)
  - Amount thresholds, unusual patterns
  - Geolocation mismatch
- **Batch**: Graph analysis for money laundering, circular transactions
- If flagged → block transaction, flag for manual review, notify customer

**Reconciliation:**
- End-of-day batch: Compare internal transaction log with external (SWIFT, ACH, partner banks)
- Automated matching engine: Match by reference_id, amount, dates
- Unmatched items → investigation queue

**Audit Trail:** Immutable append-only log. Every state change logged with before/after values. Tamper-evident: chain hashes (blockchain-style).

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Accounts DB | Vertical scaling + read replicas, shard by customer_id |
| Transactions | Partition by year, archive older partitions |
| Audit Log | Append-only, partition by year, S3 for cold storage |
| Fraud Detection | Redis for real-time counters, Spark for batch ML |

#### Follow-Up

**Junior**: How to prevent negative balances? (Check balance in same transaction, FOR UPDATE lock)
**Mid-Level**: Design inter-bank transfer (e.g., via SWIFT)? (SAGA pattern: debit from sender bank → send SWIFT message → credit at receiver → reconcile)
**Senior**: Design system for 99.999% availability with multi-region active-active? (CRDT-based account balances, conflict-free merge, careful idempotency, cross-region sync)

---

### Problem 3.11: E-Commerce (Amazon)

#### Problem Statement

Design an e-commerce platform like Amazon — product catalog, shopping cart, order management, payment, inventory, recommendations.

#### Requirements Gathering

- 300M active customers, 12M+ products
- Millions of orders/day
- Global shipping, multiple sellers

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| Products | 12M+ |
| Orders/day | 5M+ |
| Page views/day | 5B+ |
| Search QPS | 200K |
| Inventory updates/sec | 100K+ |

#### Database Design

`sql
CREATE TABLE products (
    id BIGINT PRIMARY KEY, seller_id BIGINT NOT NULL,
    title VARCHAR(500), description TEXT, price DECIMAL(10,2),
    category_id INT, attributes JSONB, status VARCHAR(20),
    created_at TIMESTAMP, updated_at TIMESTAMP,
    INDEX idx_category (category_id), INDEX idx_seller (seller_id)
);

CREATE TABLE inventory (
    product_id BIGINT PRIMARY KEY,
    quantity_available INT NOT NULL,
    quantity_reserved INT NOT NULL DEFAULT 0,
    version INT NOT NULL DEFAULT 1, -- optimistic lock
    updated_at TIMESTAMP
);

CREATE TABLE orders (
    id UUID PRIMARY KEY, customer_id BIGINT NOT NULL,
    status ENUM('pending','confirmed','shipped','delivered','cancelled'),
    total_amount DECIMAL(12,2), shipping_address JSONB,
    payment_status VARCHAR(20), created_at TIMESTAMP,
    INDEX idx_customer (customer_id, created_at DESC)
);

CREATE TABLE order_items (
    order_id UUID, product_id BIGINT, quantity INT,
    unit_price DECIMAL(10,2), PRIMARY KEY (order_id, product_id)
);
`

#### Low-Level Design

**Order Flow (SAGA Pattern orchestrated):**
1. Order Service creates order (status: pending)
2. Inventory Service reserves stock (decrement available, increment reserved)
3. Payment Service processes charge (idempotency key)
4. If success: confirm order, reserve → decrement reserved
5. If any fail: compensating transactions (release inventory, refund payment)

**Inventory Management (Concurrency Control):**
`sql
-- Optimistic locking for stock reservation
UPDATE inventory
SET quantity_available = quantity_available - :qty,
    quantity_reserved = quantity_reserved + :qty,
    version = version + 1
WHERE product_id = :pid AND version = :old_version AND quantity_available >= :qty;
-- If 0 rows updated → conflict or insufficient stock → retry or fail
`

**Cart:** Cached in Redis (fast reads/writes). Persisted to DB on checkout. TTL for abandoned carts (7 days).

**Payment:** Integrate with multiple providers (Stripe, PayPal). Idempotency key per charge. Webhook-based status updates.

**Recommendations:** ML-based (item-item collaborative filtering: "customers who bought this also bought"). Real-time personalization via user embedding. Trending/popular for cold start.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Product catalog | Elasticsearch for search, Redis cache hot products |
| Inventory | Shard by product_id, optimistic locking |
| Orders | Partition by customer_id or date, read replicas |
| Cart | Redis (fast, TTL), persist to DB on checkout |
| Recommendations | Batch Spark jobs + real-time ML serving |

#### Follow-Up

**Junior**: How to handle concurrent cart updates? (Optimistic locking, last write wins for cart items)
**Mid-Level**: Design flash sale with limited inventory and 1M concurrent users? (Pre-check inventory in Redis, queue orders, async processing, rate limiting at API gateway)
**Senior**: Design global multi-region e-commerce with local inventory + cross-region fulfillment? (Local inventory DB per region, global product catalog, cross-region order routing, latency-optimized fulfillment)

---

### Problem 3.12: Inventory System

#### Problem Statement

Design a real-time inventory management system — stock tracking, reservation, concurrency control, real-time updates across warehouses.

#### Requirements Gathering

- Millions of SKUs across multiple warehouses
- Real-time stock visibility (sub-second)
- High concurrency (flash sales, Black Friday)
- Integration with order management, procurement, logistics

#### Capacity Estimation

| Metric | Value |
|--------|-------|
| SKUs | 10M+ |
| Warehouses | 100+ |
| Stock updates/day | 500M+ |
| Stock queries/sec (peak) | 500K+ |
| Reservation operations/sec | 100K+ |

#### Database Design

`sql
CREATE TABLE warehouse_inventory (
    sku VARCHAR(36),
    warehouse_id VARCHAR(36),
    quantity_on_hand INT NOT NULL DEFAULT 0,
    quantity_available INT NOT NULL DEFAULT 0,
    quantity_reserved INT NOT NULL DEFAULT 0,
    quantity_inbound INT NOT NULL DEFAULT 0,
    reorder_point INT DEFAULT 10,
    version INT NOT NULL DEFAULT 1,
    updated_at TIMESTAMP,
    PRIMARY KEY (sku, warehouse_id)
);

-- Stock movements (append-only ledger)
CREATE TABLE stock_movements (
    id UUID PRIMARY KEY, sku VARCHAR(36), warehouse_id VARCHAR(36),
    movement_type ENUM('receipt','sale','transfer','adjustment','return'),
    quantity_change INT NOT NULL, reference_id VARCHAR(64),
    created_at TIMESTAMP,
    INDEX idx_sku_warehouse (sku, warehouse_id, created_at DESC)
);
`

#### Low-Level Design

**Stock Reservation (Concurrency Control):**

`sql
-- Try to reserve (optimistic lock)
UPDATE warehouse_inventory
SET quantity_available = quantity_available - :qty,
    quantity_reserved = quantity_reserved + :qty,
    version = version + 1
WHERE sku = :sku AND warehouse_id = :wid
  AND version = :old_version AND quantity_available >= :qty;

-- If 0 rows: retry with different warehouse or fail
`

**Reservation Timeout:** Reserved stock auto-released after N minutes if order not confirmed.

**Real-Time Visibility:**
- Redis cache: stock:{sku}:{warehouse_id} → available quantity
- Update Redis on every stock movement (event → Kafka → cache updater)
- TTL: 1 hour (fallback to DB if cache miss)

**Warehouse Transfers:**
- If warehouse A has insufficient stock, check warehouse B
- Initiate transfer (decrease A available, increase A inbound + B inbound)
- On receipt: update A outbound complete, B receive stock

**Event Sourcing:** Stock movements are append-only ledger. Current quantity = SUM of all movements. Enables audit, reconciliation, point-in-time queries.

#### Scaling Strategy

| Component | Strategy |
|-----------|----------|
| Inventory DB | Shard by sku_id, partition hot SKUs separately |
| Redis Cache | Cluster mode, shard by sku |
| Stock movements | Cassandra/Event store (append-only, time-series) |
| Reservation | Optimistic locking + retry with backoff |
| Real-time updates | Kafka → Flink → Redis cache updater |

#### Follow-Up

**Junior**: How to handle negative stock? (Check available >= qty in same UPDATE statement, reject if insufficient)
**Mid-Level**: Design a distributed inventory system across multiple DCs for a flash sale? (Reserve locally first, if insufficient check other DCs via async replication, timeout-based fallback)
**Senior**: Design an eventually consistent inventory system that works with 10ms write latency? (Local reservations with periodic sync, CRDT-based availability counters, reconciliation against immutable ledger)

---
## Section 4: System Design Cheatsheet

### 4.1 5-Minute Quick Reference

`
┌────────────────────────────────────────────────────────────┐
│              5-MINUTE SYSTEM DESIGN REFERENCE              │
├────────────────────────────────────────────────────────────┤
│ 1. REQUIREMENTS (1 min)                                    │
│    - Functional: 3-5 core features                         │
│    - Non-functional: Scale, Latency, Consistency, Avail    │
│                                                            │
│ 2. ESTIMATION (1 min)                                      │
│    - DAU × actions/day ÷ 86400 = QPS                       │
│    - Peak QPS = Avg × 5-10×                                │
│    - Storage = writes/day × data size × retention          │
│                                                            │
│ 3. DESIGN (2 min)                                          │
│    - Load Balancer → Web Tier → Cache → DB                 │
│    - API: REST/gRPC, endpoints                             │
│    - Data Model: Schema, indexes, partitioning             │
│                                                            │
│ 4. DEEP DIVE (1 min)                                       │
│    - Bottlenecks, trade-offs, edge cases                   │
│    - Failure modes, monitoring                             │
└────────────────────────────────────────────────────────────┘
`

### 4.2 Key Metrics Reference

| Concept | Formula | Typical Numbers |
|---------|---------|-----------------|
| QPS (avg) | DAU × actions/day / 86400 | 1M DAU × 100 / 86400 ≈ 1,157 QPS |
| QPS (peak) | Avg QPS × 5-10× | 1,157 × 5 = 5,785 QPS |
| Storage | writes/day × data size × days | 100M × 1KB × 365 = 36.5 TB/year |
| Bandwidth | data per request × QPS | 1KB × 10K QPS = 10 MB/s |
| Memory for cache | active keys × key size | 10M users × 1KB = 10 GB |
| Availability % | uptime / total time | 99.9% = 8.7h/yr, 99.99% = 52min/yr, 99.999% = 5min/yr |
| P99 latency | 99th percentile of response times | 99% of requests under this latency |
| Cache hit ratio | cache hits / total requests | Target: >95% |
| Shard count | total data / desired shard size | 100TB / 1TB per shard = 100 shards |

### 4.3 Common Trade-offs Table

| Decision | Pros | Cons |
|----------|------|------|
| **SQL vs NoSQL** | SQL: ACID, joins, schema enforcement; NoSQL: scale, flexible schema | SQL: hard to scale writes; NoSQL: no joins, weak consistency |
| **Strong vs Eventual Consistency** | Strong: correct data always; Eventual: low latency, high availability | Strong: higher latency during partitions; Eventual: stale reads |
| **Push vs Pull (Fan-out)** | Push: fast reads; Pull: easy writes | Push: write amplification; Pull: read amplification |
| **Vertical vs Horizontal Scaling** | Vertical: simple, no code change; Horizontal: unlimited scale | Vertical: hardware cap, expensive; Horizontal: complex, data sync |
| **Monolith vs Microservices** | Monolith: simple dev/deploy; Microservices: independent scaling | Monolith: hard to scale; Microservices: complex ops |
| **Synchronous vs Async** | Sync: simple, consistent; Async: decoupled, scalable | Sync: tightly coupled; Async: eventual consistency, complexity |
| **2PC vs SAGA** | 2PC: atomic; SAGA: high availability, scalable | 2PC: blocking, SPOF; SAGA: eventual consistency, compensating logic |
| **Cache-Aside vs Write-Through** | Cache-Aside: simple, hot data only; Write-Through: always consistent | Cache-Aside: cache miss penalty; Write-Through: write latency |
| **Redundancy vs Cost** | Redundancy: high availability; Cost: cheaper | Redundancy: 2-3× infra cost; Cost: single point of failure |

### 4.4 Database Comparison

| Feature | SQL (PostgreSQL/MySQL) | NoSQL (Cassandra/MongoDB) | NewSQL (Spanner/CockroachDB) |
|---------|----------------------|--------------------------|------------------------------|
| **ACID** | Full | Limited (document-level) | Full (global) |
| **Consistency** | Strong | Eventual / Tunable | Strong (external) |
| **Schema** | Fixed | Flexible | Fixed |
| **Joins** | Yes | No (denormalize) | Yes |
| **Sharding** | Manual | Built-in | Auto |
| **Read scale** | Replicas | Built-in | Built-in |
| **Write scale** | Vertical (limited) | Horizontal (excellent) | Horizontal (excellent) |
| **Latency** | Low | Low | Higher (consensus) |
| **Use case** | Transactions, structured data | Time-series, high writes, flexible schema | Global ACID at scale |
| **Examples** | Transactions, orders, users | Chat, analytics, IoT | Banking, multi-region |

### 4.5 Caching Comparison

| Feature | Redis | Memcached | CDN |
|---------|-------|-----------|-----|
| **Data structures** | Strings, hashes, lists, sets, sorted sets, streams | Strings only | Static files, video |
| **Persistence** | RDB/AOF snapshots | No (volatile) | No (origin backed) |
| **Replication** | Master-replica + cluster | No (multi-client) | Multi-edge |
| **Eviction** | LRU, LFU, TTL, random, volatile | LRU only | LRU + TTL |
| **Transactions** | Lua scripts + MULTI/EXEC | No | No |
| **Sub-millisecond** | Yes | Yes | No (network) |
| **Use case** | Session, cache, rate limiting, pub/sub | Simple key-value cache | Static/media delivery |
| **Clustering** | Redis Cluster (automatic) | Client-side sharding | Built-in global |

### 4.6 Load Balancing Algorithms Comparison

| Algorithm | Distribution | State | Session Stickiness | Use Case |
|-----------|-------------|-------|-------------------|----------|
| **Round Robin** | Even | Stateless | No | Simple, equal-weight servers |
| **Weighted RR** | Proportional to weight | Stateless | No | Heterogeneous servers |
| **Least Connections** | By active connections | Stateful | No | Long-lived connections |
| **Least Response Time** | By latency + connections | Stateful | No | Performance-sensitive |
| **IP Hash** | Hash of client IP | Stateless | Yes | Session persistence |
| **Consistent Hashing** | Hash ring | Stateless | Yes | Caching, distributed systems |

### 4.7 SQL vs NoSQL Decision Guide

`
Choose SQL (PostgreSQL/MySQL) when:
├── Need ACID transactions
├── Complex queries/joins/reporting
├── Strong consistency required
├── Schema is well-defined and stable
├── Data integrity is critical
└── Examples: Banking, orders, user accounts

Choose NoSQL (Cassandra/MongoDB/DynamoDB) when:
├── Massive write throughput needed
├── Flexible/evolving schema
├── Time-series or event data
├── Eventual consistency is acceptable
├── Horizontal scaling is primary need
└── Examples: Chat, analytics, IoT, user activity

Choose NewSQL (Spanner/CockroachDB/TiDB) when:
├── Need ACID across multiple regions
├── Strong consistency at global scale
├── SQL interface required
├── Auto-sharding desired
└── Examples: Multi-region finance, global inventory
`

### 4.8 CAP Theorem Quick Reference

`
                        Consistency (C)
                             │
                             │
              SQL DBs, ZK   │   DynamoDB, Cassandra
              (CP)          │   (AP)
                             │
                             └────────────── Availability (A)
                            /
                           /
                          /
                    Partition Tolerance (P)
                    (always required)

In a partition (network failure):
  → CP: Reject writes, serve consistent reads
  → AP: Accept writes, serve potentially stale reads
  → CA: Not possible in distributed systems
`

### 4.9 Estimation Formulas Cheat Sheet

`python
# QPS Calculations
qps_avg = dau * actions_per_day_per_user / 86400
qps_peak = qps_avg * 5  # or 10x for conservative

# Storage calculations
storage_per_day = writes_per_day * avg_data_size_per_record
storage_per_year = storage_per_day * 365
total_storage = storage_per_day * retention_days

# Bandwidth
bandwidth_bps = qps * bytes_per_response
bandwidth_gbps = bandwidth_bps * 8 / 1e9  # bits per sec

# Cache sizing
cache_memory = active_keys * avg_key_value_size

# Capacity planning
servers_needed = total_qps / qps_per_server
recommended = servers_needed * 2  # for HA + buffer

# Memory reference
1 char = 1 byte
1 KB = 1024 bytes ≈ 1000 bytes (rough estimate)
1 MB = 1,048,576 bytes ≈ 10^6 bytes
1 GB = 1,073,741,824 bytes ≈ 10^9 bytes
1 TB = 10^12 bytes
1 PB = 10^15 bytes
1 EB = 10^18 bytes
`

---

## 🎯 Final Interview Tips

| Phase | Do | Don't |
|-------|----|-------|
| **Start** | Clarify requirements, ask questions | Jump to solution |
| **Middle** | Estimate before designing, discuss trade-offs | Over-engineer, ignore scale |
| **End** | Mention monitoring, failure modes, next steps | Stop abruptly |
| **General** | Think out loud, engage interviewer | Go silent, be defensive |

**Remember**: System design interviews test your **thought process**, not the perfect solution. A structured, well-communicated design with clear trade-off reasoning outperforms a technically perfect but poorly explained one every time.

**Framework recap:**
1. **Requirements** (functional + non-functional)
2. **Estimation** (traffic, storage, bandwidth)
3. **Design** (high-level architecture, API, data model)
4. **Deep Dive** (bottlenecks, trade-offs, edge cases, failure modes)

---

*Volume 9 of 16 | System Design Interview Guide 2026 | FAANG-Tested Strategies*
