# Volume 1: C# Interview Preparation Guide 2026

<p align="center">
  <img src="https://img.shields.io/badge/C%23-12_|_13_|_14-blueviolet?style=for-the-badge&logo=csharp" alt="C# Version"/>
  <img src="https://img.shields.io/badge/.NET-9_|_10-blue?style=for-the-badge&logo=dotnet" alt=".NET Version"/>
  <img src="https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Questions-108%2F100-success?style=for-the-badge" alt="Questions"/>
  <img src="https://img.shields.io/badge/Level-Beginner_to_Senior-orange?style=for-the-badge" alt="Level"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License"/>
</p>

<p align="center">
  <b>Volume 1</b> of a 16-volume interview preparation series.<br/>
  <i>Expert-level coverage from a Principal Engineer with 20+ years, FAANG interviewer, and Senior .NET architect.</i>
</p>

---

## Progress Tracker

| Section | Questions | Status |
|---------|-----------|--------|
| C# Basics & Syntax | Q01-Q13 | ✅ Complete |
| OOP & SOLID | Q14-Q25 | ✅ Complete |
| Delegates, Events, Lambdas | Q26-Q32 | ✅ Complete |
| LINQ | Q33-Q40 | ✅ Complete |
| Async/Await & TPL | Q41-Q50 | ✅ Complete |
| Memory Management & GC | Q51-Q58 | ✅ Complete |
| Reflection & Attributes | Q59-Q63 | ✅ Complete |
| Generics | Q64-Q70 | ✅ Complete |
| Collections | Q71-Q80 | ✅ Complete |
| Advanced Features (C# 9-14) | Q81-Q88 | ✅ Complete |
| Exception Handling | Q89-Q94 | ✅ Complete |
| Threading & Synchronization | Q95-Q100 | ✅ Complete |
| Span&lt;T&gt; & Memory&lt;T&gt; | Q101-Q104 | ✅ Complete |
| Source Generators | Q105-Q108 | ✅ Complete |

**Total: 108 Questions** 🎯

---

## Table of Contents

<details>
<summary><b>📑 Click to expand TOC</b></summary>

### Section 1: C# Basics & Syntax
- [Q01: Value Types vs Reference Types](#q01-value-types-vs-reference-types)
- [Q02: Boxing and Unboxing](#q02-boxing-and-unboxing)
- [Q03: String Immutability](#q03-string-immutability)
- [Q04: StringBuilder](#q04-stringbuilder)
- [Q05: The var Keyword](#q05-the-var-keyword)
- [Q06: Nullable Value Types](#q06-nullable-value-types)
- [Q07: Null-Conditional and Null-Coalescing Operators](#q07-null-conditional-and-null-coalescing-operators)
- [Q08: The is and as Operators](#q08-the-is-and-as-operators)
- [Q09: const vs readonly vs static](#q09-const-vs-readonly-vs-static)
- [Q10: Enum Fundamentals](#q10-enum-fundamentals)
- [Q11: Struct vs Class](#q11-struct-vs-class)
- [Q12: Pass by Value vs Pass by Reference (ref, out, in)](#q12-pass-by-value-vs-pass-by-reference-ref-out-in)
- [Q13: params Keyword](#q13-params-keyword)

### Section 2: OOP & SOLID
- [Q14: Encapsulation](#q14-encapsulation)
- [Q15: Inheritance](#q15-inheritance)
- [Q16: Polymorphism](#q16-polymorphism)
- [Q17: Abstraction](#q17-abstraction)
- [Q18: Interfaces vs Abstract Classes](#q18-interfaces-vs-abstract-classes)
- [Q19: Single Responsibility Principle (SRP)](#q19-single-responsibility-principle-srp)
- [Q20: Open/Closed Principle (OCP)](#q20-openclosed-principle-ocp)
- [Q21: Liskov Substitution Principle (LSP)](#q21-liskov-substitution-principle-lsp)
- [Q22: Interface Segregation Principle (ISP)](#q22-interface-segregation-principle-isp)
- [Q23: Dependency Inversion Principle (DIP)](#q23-dependency-inversion-principle-dip)
- [Q24: Method Overloading vs Overriding](#q24-method-overloading-vs-overriding)
- [Q25: Sealed Classes and Methods](#q25-sealed-classes-and-methods)

### Section 3: Delegates, Events, Lambda Expressions
- [Q26: Delegates](#q26-delegates)
- [Q27: Multicast Delegates](#q27-multicast-delegates)
- [Q28: Events](#q28-events)
- [Q29: Lambda Expressions](#q29-lambda-expressions)
- [Q30: Func, Action, Predicate Delegates](#q30-func-action-predicate-delegates)
- [Q31: Anonymous Methods](#q31-anonymous-methods)
- [Q32: Closure and Captured Variables](#q32-closure-and-captured-variables)

### Section 4: LINQ
- [Q33: LINQ and Deferred Execution](#q33-linq-and-deferred-execution)
- [Q34: IQueryable vs IEnumerable](#q34-iqueryable-vs-ienumerable)
- [Q35: LINQ Select vs SelectMany](#q35-linq-select-vs-selectmany)
- [Q36: LINQ GroupBy and Aggregations](#q36-linq-groupby-and-aggregations)
- [Q37: LINQ Join vs GroupJoin](#q37-linq-join-vs-groupjoin)
- [Q38: LINQ Any vs All vs Contains](#q38-linq-any-vs-all-vs-contains)
- [Q39: LINQ Distinct, Except, Intersect, Union](#q39-linq-distinct-except-intersect-union)
- [Q40: PLINQ](#q40-plinq)

### Section 5: Async/Await & TPL
- [Q41: async/await Internals](#q41-asyncawait-internals)
- [Q42: ConfigureAwait](#q42-configureawait)
- [Q43: Task vs ValueTask](#q43-task-vs-valuetask)
- [Q44: Task.Run vs Task.Factory.StartNew](#q44-taskrun-vs-taskfactorystartnew)
- [Q45: Async Deadlocks](#q45-async-deadlocks)
- [Q46: CancellationToken](#q46-cancellationtoken)
- [Q47: Task.WhenAll vs Task.WhenAny](#q47-taskwhenall-vs-taskwhenany)
- [Q48: Async void vs Async Task](#q48-async-void-vs-async-task)
- [Q49: IAsyncEnumerable](#q49-iasyncenumerable)
- [Q50: SynchronizationContext and ExecutionContext](#q50-synchronizationcontext-and-executioncontext)

### Section 6: Memory Management & Garbage Collection
- [Q51: Garbage Collection Generations](#q51-garbage-collection-generations)
- [Q52: GC Modes (Workstation vs Server)](#q52-gc-modes-workstation-vs-server)
- [Q53: IDisposable and Dispose Pattern](#q53-idisposable-and-dispose-pattern)
- [Q54: Finalizers vs IDisposable](#q54-finalizers-vs-idisposable)
- [Q55: using Statement and Declarations](#q55-using-statement-and-declarations)
- [Q56: Weak References](#q56-weak-references)
- [Q57: Large Object Heap (LOH)](#q57-large-object-heap-loh)
- [Q58: Stack vs Heap Allocation](#q58-stack-vs-heap-allocation)

### Section 7: Reflection & Attributes
- [Q59: Reflection Overview](#q59-reflection-overview)
- [Q60: Custom Attributes](#q60-custom-attributes)
- [Q61: Late Binding and Dynamic Invocation](#q61-late-binding-and-dynamic-invocation)
- [Q62: Reflection Performance and Caching](#q62-reflection-performance-and-caching)
- [Q63: ReflectionOnly Loading](#q63-reflectiononly-loading)

### Section 8: Generics
- [Q64: Generic Constraints](#q64-generic-constraints)
- [Q65: Covariance and Contravariance](#q65-covariance-and-contravariance)
- [Q66: Generic Methods vs Generic Classes](#q66-generic-methods-vs-generic-classes)
- [Q67: Generic Type Inference](#q67-generic-type-inference)
- [Q68: Static Members in Generics](#q68-static-members-in-generics)
- [Q69: Generic Interfaces](#q69-generic-interfaces)
- [Q70: Generic Variance in Delegates](#q70-generic-variance-in-delegates)

### Section 9: Collections
- [Q71: List&lt;T&gt; Internals](#q71-listt-internals)
- [Q72: Dictionary&lt;TKey, TValue&gt; Internals](#q72-dictionarytkey-tvalue-internals)
- [Q73: HashSet&lt;T&gt; vs SortedSet&lt;T&gt;](#q73-hashsett-vs-sortedsett)
- [Q74: Queue&lt;T&gt; and Stack&lt;T&gt;](#q74-queuet-and-stackt)
- [Q75: LinkedList&lt;T&gt;](#q75-linkedlistt)
- [Q76: Concurrent Collections Overview](#q76-concurrent-collections-overview)
- [Q77: Immutable Collections](#q77-immutable-collections)
- [Q78: Array vs List&lt;T&gt; Performance](#q78-array-vs-listt-performance)
- [Q79: SortedDictionary vs SortedList](#q79-sorteddictionary-vs-sortedlist)
- [Q80: ReadOnlyCollection vs ImmutableArray](#q80-readonlycollection-vs-immutablearray)

### Section 10: Advanced Features (C# 9-14)
- [Q81: Records](#q81-records)
- [Q82: Pattern Matching](#q82-pattern-matching)
- [Q83: Switch Expressions](#q83-switch-expressions)
- [Q84: Primary Constructors](#q84-primary-constructors)
- [Q85: Collection Expressions](#q85-collection-expressions)
- [Q86: Interceptors (C# 14)](#q86-interceptors-c-14)
- [Q87: Required Members](#q87-required-members)
- [Q88: Raw String Literals](#q88-raw-string-literals)

### Section 11: Exception Handling
- [Q89: Exception Handling Best Practices](#q89-exception-handling-best-practices)
- [Q90: Custom Exceptions](#q90-custom-exceptions)
- [Q91: When to Catch vs Throw](#q91-when-to-catch-vs-throw)
- [Q92: Exception Filters](#q92-exception-filters)
- [Q93: AggregateException](#q93-aggregateexception)
- [Q94: finally Block Guarantees](#q94-finally-block-guarantees)

### Section 12: Threading & Synchronization
- [Q95: lock Statement and Monitor](#q95-lock-statement-and-monitor)
- [Q96: Mutex vs Semaphore vs SemaphoreSlim](#q96-mutex-vs-semaphore-vs-semaphoreslim)
- [Q97: Interlocked Operations](#q97-interlocked-operations)
- [Q98: ReaderWriterLockSlim](#q98-readerwriterlockslim)
- [Q99: Barrier and CountdownEvent](#q99-barrier-and-countdownevent)
- [Q100: SpinLock and SpinWait](#q100-spinlock-and-spinwait)

### Section 13: Span&lt;T&gt; & Memory&lt;T&gt;
- [Q101: Span&lt;T&gt; Fundamentals](#q101-spant-fundamentals)
- [Q102: Memory&lt;T&gt; Fundamentals](#q102-memoryt-fundamentals)
- [Q103: ReadOnlySpan&lt;T&gt; and ReadOnlyMemory&lt;T&gt;](#q103-readonlyspant-and-readonlymemoryt)
- [Q104: Strings and Span&lt;T&gt;](#q104-strings-and-spant)

### Section 14: Source Generators
- [Q105: Source Generators Overview](#q105-source-generators-overview)
- [Q106: Incremental Generators](#q106-incremental-generators)
- [Q107: Roslyn APIs for Source Generators](#q107-roslyn-apis-for-source-generators)
- [Q108: Source Generator vs Reflection](#q108-source-generator-vs-reflection)

</details>

---
# Section 1: C# Basics & Syntax

---

<details>
<summary>

## Q01: Value Types vs Reference Types

</summary>

### Short Interview Answer
Value types (structs, enums, primitives) store data directly on the stack or inline in the containing object, while reference types (classes, interfaces, delegates, strings) store a reference on the stack that points to heap-allocated memory. Value types are copied on assignment; reference types share a reference. Value types cannot be 
ull unless made nullable, and they do not participate in garbage collection when allocated on the stack.

### Detailed Explanation
- **What it is**: A core type system distinction. All types in C# derive from System.Object, but the runtime splits them into value types (System.ValueType descendants) and reference types.
- **Why it exists**: To give developers control over allocation semantics, memory layout, and performance. Value types avoid heap allocation and GC pressure for small, immutable data.
- **What problem it solves**: Without this distinction, every variable would require heap allocation and garbage collection, causing unacceptable performance overhead for primitive operations and high-frequency allocations.
- **When to use it**: Use value types for small, immutable data structures (under 16-24 bytes) that represent a single value (e.g., DateTime, int, Point). Use reference types for larger, polymorphic, or identity-based objects.
- **When NOT to use it**: Avoid value types when objects are large (>~64 bytes), need inheritance, require identity semantics (reference equality), or are frequently boxed. Value types with reference-type fields can cause subtle bugs with mutation.

### Internal Working
- **Runtime behavior**: The JIT compiler knows at compile time whether a type is a value or reference type. It emits different instructions: ldloc/stloc (value) vs ldloc/stind.ref (reference). The constraint is baked into the IL via .class vs .value in the assembly.
- **Memory behavior**: Value types on the stack are allocated and freed instantly via stack pointer manipulation (O(1)). Value types that are fields of a reference type live inline on the heap. Reference types always allocate on the heap (gen 0 or LOH) and must be collected by GC.
- **CPU impact**: Value types have better cache locality (stack is hot in L1 cache). No pointer chasing. Reference types require an extra indirection (load address, dereference) which can cause cache misses.
- **Network impact**: None directly, but serialization of value types is often more compact because there is no object header overhead (8 bytes on 64-bit for sync block + method table pointer).
- **Database impact**: ORMs like EF Core map value types to columns directly; reference types are tracked with identity maps. Using structs as owned entities can reduce tracking overhead.

### Step-by-Step Execution
\\\csharp
int x = 10;           // 1. Stack: allocate 4 bytes, store 10
int y = x;            // 2. Stack: allocate 4 bytes, COPY 10 from x
y = 20;               // 3. x=10, y=20 (independent)

var list1 = new List<int>();  // 4. Heap: allocate List object, stack: store reference
var list2 = list1;            // 5. Stack: COPY reference (both point to same heap object)
list2.Add(5);                 // 6. list1.Count == 1 (shared mutation!)
\\\

### Real-World Example
An OrderId value type prevents passing the wrong ID type at compile time. A Customer reference type is needed because customers are large, have identity, and need inheritance (e.g., VipCustomer : Customer).

### C# Example
\\\csharp
public struct Money : IEquatable<Money>
{
    public decimal Amount { get; }
    public string Currency { get; }

    public Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }

    public bool Equals(Money other) => Amount == other.Amount && Currency == other.Currency;
    public override bool Equals(object? obj) => obj is Money other && Equals(other);
    public override int GetHashCode() => HashCode.Combine(Amount, Currency);
    public static bool operator ==(Money left, Money right) => left.Equals(right);
    public static bool operator !=(Money left, Money right) => !left.Equals(right);
}

public class Order
{
    public Money Total { get; init; }
    public Customer Customer { get; init; } = null!;
}
\\\

### Performance Considerations
- **Faster vs slower**: Stack-allocated value types are faster to allocate and free than heap-allocated reference types. Copying larger structs (>64 bytes) can be slower than copying a reference (8 bytes).
- **Tradeoffs**: Value types avoid GC pressure but cause copying overhead when passed around. Reference types share state cheaply but add GC pressure.
- **Scalability impact**: High-throughput services benefit from struct-heavy designs (e.g., ReadOnlySpan<byte>) to reduce GC pauses. Overusing large structs with oreach loops can cause stack thrashing.

### Common Mistakes
1. **Mutable value types** — mutating a struct field via a read-only reference creates a defensive copy, leading to lost mutations.
2. **Large structs passed by value** — copying a 1 KB struct in a tight loop destroys performance.
3. **Boxing in generic collections** — using ArrayList with value types causes boxing; use List<T> instead.
4. **Default equality** — ValueType.Equals() uses reflection; always override Equals and GetHashCode for structs.
5. **Assuming nullability** — Pre-C# 8, value types cannot be 
ull; nullable T? is Nullable<T> (a struct itself).

### Follow-Up Questions
- **Junior**: What is the difference between struct and class? When would you choose one over the other?
- **Junior**: Can a value type be null? How do you make it nullable?
- **Mid-level**: How does the runtime know at JIT time whether to treat a variable as value or reference when calling a virtual method on object?
- **Mid-level**: Explain the memory layout difference when a value type is a field of a class vs a local variable.
- **Senior**: How would you design a high-throughput telemetry pipeline where every event is a struct? What tradeoffs are you making?
- **Senior**: The .NET runtime team added ef struct and scoped in recent versions. What problem do they solve regarding stack-only types and sync?

### FAANG-Level Deep Dive
**Unified type system and generic specialization**: In .NET Core/.NET 5+, the JIT can emit specialized code for value-type generic parameters (e.g., List<int> gets a unique native implementation). This means value types in generic collections can avoid boxing AND get CPU-optimized code. The JIT creates one version of the code per value type argument (unlike reference types that share one implementation). FAANG interviewers ask: *"How does the .NET runtime handle List<int> vs List<string> at the JIT level?"* Answer: List<int> gets a fully specialized native implementation where int operations are inlined and no boxing occurs. List<string> shares code with List<object> because all reference type arguments use the same internal representation (a pointer). This is why List<int> is faster than boxing-based alternatives and why generic specialization is a key .NET performance feature.

### Explain Like I'm 7
Think of value types like LEGO bricks — each brick is separate and when you give someone a brick, they get their own copy. Reference types are like a treasure map — many people can look at the same map and dig up the same treasure. If someone changes the treasure, everyone sees the change.

</details>

---
<details>
<summary>

## Q02: Boxing and Unboxing

</summary>

### Short Interview Answer
Boxing converts a value type to a reference type by wrapping it in a heap-allocated `object`. Unboxing extracts the value type back. Boxing allocates memory on the heap and copies the value; unboxing copies the value back to the stack. Both have performance costs and are detected by the JIT emitting `box` and `unbox` IL instructions. Avoid boxing in hot paths by using generics.

### Detailed Explanation
- **What it is**: Boxing is implicit conversion from a value type (e.g., `int`) to `object` or `System.ValueType`. The CLR allocates a heap object, copies the value type's data into it, and returns a reference. Unboxing is the explicit reverse: checking the type and copying the value back.
- **Why it exists**: C# needed the unified type system where everything derives from `object`, but value types must sometimes be treated as objects (e.g., passing to APIs that take `object`, storing in non-generic collections). Boxing bridges the gap.
- **What problem it solves**: Allows value types to participate in APIs designed for reference types (old `ArrayList`, `Hashtable`, reflection, string formatting). Enables polymorphism through `object`.
- **When to use it**: You rarely *choose* to box — it happens implicitly. Be aware when calling `ToString()`, `Equals()`, or passing structs to `object`-typed parameters. Use it intentionally only for interop or reflection.
- **When NOT to use it**: Never box in performance-sensitive code (tight loops, game engines, high-frequency trading). Always use generics (`List<T>`) instead of non-generic collections. Avoid calling `string.Format` or `Console.WriteLine` with value types in hot paths (they box).

### Internal Working
- **Runtime behavior**: The JIT emits a `box` IL instruction for boxing. The GC heap allocates an object of size `sizeof(runtime_type_handle + sync_block + value_type_data)`. The unbox IL instruction creates a managed pointer to the value inside the boxed object; a copy typically follows.
- **Memory behavior**: Boxing allocates on gen 0 heap (or LOH if the struct is large). Increases GC pressure. The boxed object lives until collected. Multiple boxings of the same value create multiple independent heap objects.
- **CPU impact**: Boxing costs: (1) heap allocation, (2) memory copy of the value, (3) eventual GC collection. On modern hardware, boxing 1M integers takes ~10-20ms. Unboxing is cheaper (type check + copy).
- **Network impact**: None.
- **Database impact**: None.

### Step-by-Step Execution
```csharp
int number = 42;                       // 1. Stack: allocate 4 bytes, store 42
object boxed = number;                 // 2. Heap: allocate object (sync+mt+4bytes)
                                       // 3. Copy 42 into the heap object
                                       // 4. Stack: store reference to heap object
int unboxed = (int)boxed;             // 5. Check type match (int == boxed type?)
                                       // 6. Copy 4 bytes from heap to stack
                                       // 7. unboxed = 42
```

### Real-World Example
Before generics (C# 1.0), `ArrayList` stored everything as `object`, causing boxing on every `Add` of a value type:
```csharp
var list = new ArrayList();
list.Add(42);               // box
list.Add(100);              // box
int x = (int)list[0];       // unbox
```
Modern code uses `List<int>` which avoids boxing entirely because generics preserve the value type.

### C# Example
```csharp
// AVOID: Boxing in hot path
int sum = 0;
for (int i = 0; i < 1000; i++)
{
    sum += i;
}
Console.WriteLine("Total: {0}", sum); // boxes sum!

// BEST: Explicit ToString avoids boxing
Console.WriteLine("Total: " + sum.ToString());

// Boxing detection with generics
int age = 30;
IComparable comparable = age;    // boxes
int result = comparable.CompareTo(30);

// Beware of nullable boxing
int? maybeNull = 42;
object obj = maybeNull;          // boxes to Nullable<int> or null if no value
int value = (int)obj;            // unbox
```

### Performance Considerations
- **Faster vs slower**: Unboxed operations are 10-50x faster than boxed equivalents. A tight loop with boxing can cause GC stalls.
- **Tradeoffs**: Generics eliminate boxing but increase JIT compilation cost (specialization per value type).
- **Scalability impact**: In high-scale systems, boxing-induced GC pressure causes latency spikes and throughput degradation. A service doing 10K req/s with boxing per request will trigger GCs significantly more often.

### Common Mistakes
1. **Enum boxing in dictionaries**: Using `enum` as a dictionary key without `IEquatable<T>` boxes on every lookup.
2. **Nullable&lt;T&gt; boxing**: A nullable value type with no value boxes to `null`, causing subtle null checks.
3. **String formatting**: `string.Format("{0}", someStruct)` — most overloads take `object`, causing boxing.
4. **`is` operator with value types**: `obj is int` does NOT unbox — just checks the type. `(int)obj` does unbox.
5. **Structs implementing interfaces**: Casting a struct to an interface it implements boxes the struct.

### Follow-Up Questions
- **Junior**: What is boxing? Give an example.
- **Junior**: How does `ArrayList` cause boxing but `List<T>` does not?
- **Mid-level**: Does `String.Format` always box value types? How can you avoid it?
- **Mid-level**: What happens when you unbox to the wrong type?
- **Senior**: .NET 9 introduced `ISpanFormattable`. How does this help avoid boxing in formatting?
- **Senior**: Explain the memory cost of a boxed `int` vs an unboxed `int` in a `List<int>`.

### FAANG-Level Deep Dive
**Boxing and the JIT's virtual call stub strategy**: When you call `ToString()` on a value type via `object`, the JIT cannot statically dispatch — it must do a virtual call through the boxed object's vtable. The JIT generates a *virtual stub dispatch* (VSD). The first call goes through a slow path that resolves the correct method; subsequent calls use a cached stub. However, the box is still allocated. FAANG questions: *"Design a `NullMarker<T>` pattern that eliminates boxing in a cache that stores `T?` values."*

### Explain Like I'm 7
Boxing is like putting a small Lego piece into a big cardboard box before giving it to a friend. The friend gets the big box, opens it, and takes the Lego piece out. If you have lots of Legos, you waste time boxing and unboxing each one instead of just handing them over.

</details>

---

<details>
<summary>

## Q03: String Immutability

</summary>

### Short Interview Answer
Strings in C# are immutable reference types. Once created, their character sequence cannot be changed. Every operation that appears to modify a string (concatenation, replacement, substring) actually creates a new string object on the heap. This design enables string interning, thread safety, and hash table stability. The main tradeoff is that repeated modifications create garbage and impact performance.

### Detailed Explanation
- **What it is**: `System.String` is a reference type whose internal character buffer is fixed at construction time. All mutation-like methods return new `string` instances.
- **Why it exists**: Immutability provides thread safety (no need for synchronization when reading), enables string interning (identical literals share the same heap object), allows secure handling of sensitive data, and makes strings safe as dictionary keys.
- **What problem it solves**: If strings were mutable, dictionary hash codes could change after insertion (breaking hash tables), concurrent access would require locking, and passing strings to untrusted code could expose internal state changes.
- **When to use it**: Use strings everywhere for textual data. Use `StringBuilder` when performing repeated modifications (loops, complex construction). Use `string.Create` for optimized construction.
- **When NOT to use it**: Avoid `+=` in loops — this creates O(n²) allocations. Avoid using strings for large text transformations (use `StringBuilder` or `Stream`). Avoid strings for binary data (use `byte[]` or `Span<byte>`).

### Internal Working
- **Runtime behavior**: The `string` type is special in the CLR. `String.Concat` is intrinsic (JIT knows about it). String literals are interned in the intern pool. A string on heap stores: [sync block (8 bytes)] [method table (8 bytes)] [length (4 bytes)] [null terminator (2 bytes)] [character data (2 * length bytes)].
- **Memory behavior**: Total overhead per string: ~26 bytes minimum plus character data. Multiple copies waste memory (unless interned).
- **CPU impact**: Concatenation allocates and copies entire strings — O(n) per operation. In loops, this becomes O(n²).
- **Network impact**: String serialization is typically UTF-8 encoding/decoding. Immutability allows safe caching.
- **Database impact**: EF Core and Dapper map database text to strings. String parameters are immutable, making parameter caching safe.

### Step-by-Step Execution
```csharp
string s1 = "Hello";                    // 1. Heap: allocate "Hello" (maybe interned)
string s2 = s1;                         // 2. Stack: copy REFERENCE (both point to same)
s1 += " World";                         // 3. Heap: allocate NEW "Hello World"
                                        // 4. Copy characters into new string
                                        // 5. s1 now references new object
                                        // 6. s2 still references original "Hello"
```

### C# Example
```csharp
// Immutability examples
string original = "Hello World";
string upper = original.ToUpper();      // New string
string replaced = original.Replace("World", "C#"); // New string
string substring = original.Substring(0, 5); // New string (copy in .NET Core+)

// String interning
string a = "Hello";
string b = "Hello";
Console.WriteLine(object.ReferenceEquals(a, b)); // True (interned)

// String.Create — pool-optimized construction
string created = string.Create(11, (42, "Test"), (span, state) =>
{
    var (id, name) = state;
    "Hello World".CopyTo(span);
});
```

### Common Mistakes
1. **Using `+` in loops** — creates O(n²) allocations. Use `StringBuilder`.
2. **Substring memory leak** — In .NET Framework, `Substring` shared memory. In .NET Core+, it copies.
3. **Over-interning** — Manually interning dynamic strings wastes memory (interned strings never collected).
4. **`==` vs `Equals`** — For strings, `==` compares values. `(object)strA == (object)strB` compares references.
5. **Calling `s.ToString()` on a string** — Returns `this`, not a copy.

### FAANG-Level Deep Dive
**String interning limitations and custom pooling**: The .NET intern pool has a fixed per-process lifetime and a documented 2 GB size limit. At FAANG scale (millions of unique request strings), the intern pool causes gen 2 GCs. A better approach is a *bounded concurrent string deduplication cache* using `ConcurrentDictionary<string, string>` with `ConditionalWeakTable` to allow reclamation. FAANG: *"Design a thread-safe, memory-bounded string pool for caching JSON field names."*

### Explain Like I'm 7
A string is like a message written with permanent marker on a whiteboard. You can't erase part of it — you have to write a whole new message on a new whiteboard.

</details>

---

<details>
<summary>

## Q04: StringBuilder

</summary>

### Short Interview Answer
`StringBuilder` is a mutable string class that maintains an internal character buffer. It avoids allocating new strings on every modification by appending to its internal buffer, resizing only when capacity is exceeded. The final `ToString()` copies the buffer once. It is the recommended tool for string concatenation in loops or when building large strings dynamically.

### Detailed Explanation
- **What it is**: A mutable buffer (`char[]` internally) that supports `Append`, `Insert`, `Replace`, `Remove` without allocating new string objects on each operation.
- **Why it exists**: Repeated string concatenation creates O(n²) allocations and copies. `StringBuilder` provides O(n) amortized complexity.
- **What problem it solves**: GC pressure and CPU waste from intermediate string objects.
- **When to use it**: When concatenating more than ~3-5 strings, especially in loops. When parsing or transforming large text.
- **When NOT to use it**: For simple concatenation of 2-3 strings (compiler optimizes `+` to `String.Concat`). For search operations — `StringBuilder` has no `IndexOf` or `Contains`.

### Internal Working
- **Runtime behavior**: Holds a `char[]` buffer. `Append` copies into the array. When full, it allocates `capacity * 2` and copies old data. Default initial capacity is 16.
- **Memory behavior**: Internal array on heap. Old arrays become gen 0 garbage. Well-sized initial capacity minimizes reallocation.
- **CPU impact**: Append is O(1) amortized. `ToString` is O(n) copy. No boxing of value types.

### C# Example
```csharp
var sb = new StringBuilder(256);
sb.Append("Users: ")
  .AppendJoin(", ", new[] { "Alice", "Bob", "Charlie" })
  .AppendLine()
  .AppendFormat("Total: {0}", 42);
sb.Replace("Users", "Members");
string result = sb.ToString();

// Reuse — reset without reallocation
sb.Clear();
sb.Append("New content");
```

### FAANG-Level Deep Dive
**StringBuilder's internal chunking in .NET Core**: Uses a linked list of `char[]` chunks instead of a single contiguous array. When current chunk (~8000 chars) is full, it appends a new chunk rather than doubling. This avoids LOH allocations for large strings. FAANG: *"Build a 500 MB JSON document — compare single-array vs chunked StringBuilder. What GC impact does each have?"*

### Explain Like I'm 7
`StringBuilder` is like a construction worker with a long roll of paper. Instead of writing a short message, then throwing it away to write a longer one, they just keep unrolling more paper and adding more words. At the end, they tear off the whole roll.

</details>

---

<details>
<summary>

## Q05: The `var` Keyword

</summary>

### Short Interview Answer
`var` is a contextual keyword that tells the compiler to infer the variable's type from the right-hand side of the initialization expression. The inferred type is strongly typed at compile time — there is no dynamic dispatch or runtime cost. `var` is required for anonymous types and can improve readability when the type is obvious. It cannot be used without initialization or with `null` directly.

### Detailed Explanation
- **What it is**: A compile-time type inference mechanism. The compiler replaces `var` with the actual type. IL is identical to explicit typing.
- **Why it exists**: Reduces verbosity for complex generic types. Enables anonymous types (required for LINQ projections).
- **What problem it solves**: Eliminates redundant type declarations: `Dictionary<int, string> dict = new()` becomes `var dict = new Dictionary<int, string>()`.
- **When to use it**: When type is obvious (`var user = new User()`). With LINQ projections returning anonymous types.
- **When NOT to use it**: When type is not obvious (`var result = SomeMethod()`). Not usable for fields, properties, or parameters.

### C# Example
```csharp
var i = 10;                     // int
var d = 3.14;                   // double
var list = new List<string>();  // List<string>
var tuple = (Name: "Alice", Age: 30);

// var does NOT work with null
// var x = null; // ❌ Compiler error

// var in foreach
foreach (var item in new[] { 1, 2, 3 }) { }

// var is NOT dynamic — it's statically typed at compile time
```

### Common Mistakes
1. **Overuse obscuring numeric types** — `var x = GetPreciseNumber()` — is it `float`, `double`, `decimal`?
2. **Dynamic confusion** — `var` is NOT `dynamic`. `var` is statically typed.
3. **Anonymous type return** — LINQ query with `var` creates anonymous type that cannot be returned from a method.

### FAANG-Level Deep Dive
**Type inference in the C# compiler**: When combined with `new()` (target-typed new), the compiler resolves type in two passes — first inferring the variable type, then creating the object. FAANG: *"What happens when you combine `var` with method group inference? Does `var func = SomeMethod` work?"* Only if `SomeMethod` is unambiguous (single overload).

### Explain Like I'm 7
`var` is like saying "put that thing in the right box for me." You hand a cashier a $20 bill, they know to put it in "money" without you saying "this is money."

</details>

---
<details>
<summary>

## Q06: Nullable Value Types

</summary>

### Short Interview Answer
Nullable value types (`T?`) allow value types to represent their normal range plus an additional `null` state. Under the hood, `int?` is `Nullable<int>` — a struct with a `bool HasValue` flag and a `T Value` field. They are used for database columns, optional numeric parameters, and scenarios where "no value" is semantically different from "zero." The `??` operator provides a default when null.

### Detailed Explanation
- **What it is**: `System.Nullable<T>` where `T : struct`. Wraps a value type and adds `HasValue`. Syntax `T?` = `Nullable<T>`.
- **Why it exists**: Value types like `int` cannot express "unknown" without magic values (-1, DateTime.MinValue).
- **What problem it solves**: Database NULL mapping, optional configuration, absent JSON fields.
- **When to use it**: For database column mappings, optional method parameters, nullable DTO properties.
- **When NOT to use it**: When default value (0, false) is a valid "not set." Avoid in hot paths where `HasValue` check adds branches.

### Internal Working
- **Runtime behavior**: `Nullable<T>` is a struct with `bool hasValue` and `T value` fields. Boxing a non-null nullable boxes the underlying `T`. Boxing null nullable produces `null`.
- **Memory behavior**: Adds one byte (plus padding) to size of `T`. `int?` = 8 bytes (4 int + 1 bool + 3 padding) vs 4 for `int`.
- **CPU impact**: `HasValue` check is a simple field access. No heap allocation.

### Step-by-Step Execution
```csharp
int? age = null;                    // 1. hasValue = false, value = default(0)
int? age2 = 25;                     // 2. hasValue = true, value = 25

int actual = age ?? 18;             // 3. Check HasValue (false) → return 18

object boxed1 = age2;               // 4. Boxes the int 25 (unwrapped!)
object boxed2 = age;                // 5. null reference (not a boxed Nullable<int>)
```

### C# Example
```csharp
int? ParseOptionalInt(string? input)
{
    if (int.TryParse(input, out int result)) return result;
    return null;
}

// Nullable operations
int? a = 10;
int? b = null;
int? sum = a + b;  // null (any null operand = null result)

// Null coalescing assignment
a ??= 5;  // a is not null, no change

// Pattern matching
if (employee.TerminationDate is DateTime dt)
    Console.WriteLine($"Terminated on {dt:yyyy-MM-dd}");
```

### Common Mistakes
1. **Accessing `.Value` without checking `HasValue`** — throws `InvalidOperationException`.
2. **Boxing confusion** — `(object)myNullable` boxes value or null, not the `Nullable<T>` struct.
3. **Nested nullables** — `int??` not valid.

### FAANG-Level Deep Dive
**Nullable and JIT devirtualization**: When `Nullable<T>` is used in generic code, the JIT may specialize for `Nullable<int>` vs `Nullable<double>`. FAANG: *"Design a `Maybe<T>` monad for C# that avoids the boxing penalty of `Nullable<T>` for reference types."*

### Explain Like I'm 7
A nullable value type is like a box that can hold a toy OR be empty. Regular `int` is like a box that always has a 0 inside — you can't tell if the box was never filled or someone put 0 in it.

</details>

---

<details>
<summary>

## Q07: Null-Conditional and Null-Coalescing Operators

</summary>

### Short Interview Answer
The null-conditional operator (`?.`) short-circuits member access if the left operand is null, returning null instead of throwing `NullReferenceException`. The null-coalescing operator (`??`) returns the left operand if not null, otherwise the right operand. The null-coalescing assignment (`??=`) assigns if left is null. Together, they enable safe, concise null handling.

### Detailed Explanation
- **What it is**: `?.` (null-conditional), `??` (null-coalescing), `??=` (null-coalescing assignment), `?[]` (null-conditional indexer).
- **Why it exists**: To reduce boilerplate null checks and eliminate `NullReferenceException` — the most common runtime exception in C#.
- **What problem it solves**: NullReferenceException. Eliminates explicit null guards and reduces nesting.
- **When to use it**: Everywhere you access members of potentially null references. Chain `?.` for deep navigation.
- **When NOT to use it**: Overusing `?.` can silently swallow nulls — sometimes you WANT a null check to throw. Avoid deep chains that make error diagnosis impossible.

### Internal Working
- **Runtime behavior**: Compiler transforms `a?.b` into `a != null ? a.b : null`. Multiple `?.` generate short-circuiting checks. The IL contains conditional branches.
- **Memory behavior**: No allocations. Purely IL branching.
- **CPU impact**: Each `?.` adds a branch. Modern CPUs handle this well with branch prediction.

### Step-by-Step Execution
```csharp
string? GetCity(User? user) => user?.Address?.City;
// Compiler generates:
// if (user != null)
// {
//     Address? addr = user.Address;
//     result = (addr != null) ? addr.City : null;
// }
// else result = null;
```

### C# Example
```csharp
// Without operators (old style)
string city = null;
if (user != null && user.Address != null)
    city = user.Address.City;
string displayCity = city ?? "Unknown";

// With operators (modern)
string displayCity = user?.Address?.City ?? "Unknown";

// Null-conditional with method invocation
users?.Clear();  // skipped entirely if users is null

// Null-coalescing assignment
List<int>? numbers = null;
numbers ??= new List<int>();

// Event invocation
PropertyChanged?.Invoke(this, EventArgs.Empty);
```

### Common Mistakes
1. **Deep chains hiding bugs** — `user?.Department?.Manager?.Email` silently returns null if any intermediate is null.
2. **Missing parentheses** — `user?.GetName()?.Trim()` vs `(user?.GetName())?.Trim()` — different semantics.
3. **Thread safety with events** — `SomeDelegate?.Invoke()` — delegate could change between check and invoke. Use copy pattern.

### FAANG-Level Deep Dive
**Null-conditional and lifted operators**: When `x` is `string?`, `x?.Length` returns `int?` not `int` — the compiler lifts the result to nullable type. This is a *lifted operation pattern*. FAANG: *"What is the type of `x?.Length` when `x` is `string?`? Why?"*

### Explain Like I'm 7
The null-conditional operator (`?.`) is like saying "if there's a box, open it. If there's nothing, just say you found nothing." The null-coalescing (`??`) is "if cookie jar is empty, take from backup stash."

</details>

---

<details>
<summary>

## Q08: The `is` and `as` Operators

</summary>

### Short Interview Answer
`is` checks if an object is compatible with a given type (returning `bool`), optionally declaring a pattern variable. `as` attempts a safe cast, returning `null` if incompatible rather than throwing. In modern C#, `is` with pattern matching has largely superseded `as` for most use cases because it combines type checking, null checking, and variable declaration in one expression.

### Detailed Explanation
- **What it is**: `is` performs type test with pattern variable declaration. `as` performs safe reference or nullable conversion, returning `null` on failure.
- **Why it exists**: Safe type checking without exceptions. `is` enables declarative pattern matching.
- **What problem it solves**: Avoids `InvalidCastException` and try/catch performance cost for type checking.
- **When to use it**: Use `is` for type checking with pattern matching (`if (obj is string s)`). Use `is not null` for null checks (preferred over `!= null`).
- **When NOT to use it**: Avoid `as` for value types (doesn't work — use `is` pattern). Avoid excessive type checking — prefer polymorphism.

### Internal Working
- **Runtime behavior**: `is` and `as` both generate `isinst` IL instruction. `isinst` checks the object's method table pointer against the target type, walking inheritance chain or checking interface map.
- **Memory behavior**: No allocations. Both operators inspect the object header only.
- **CPU impact**: `isinst` is a pointer chase through the type hierarchy. Fast (~tens of nanoseconds) but not free.

### Step-by-Step Execution
```csharp
object obj = "Hello World";

if (obj is string text)                 // 1. isinst: is obj a string?
{                                       // 2. Yes → declare 'text', assign value
    Console.WriteLine(text.Length);     // 3. Strongly typed access
}

string? str = obj as string;            // 4. isinst check; returns reference or null
```

### C# Example
```csharp
// 'is' pattern matching (preferred modern style)
object value = GetValue();

if (value is int i)
    Console.WriteLine($"Integer: {i}");
else if (value is string s)
    Console.WriteLine($"String: {s}");

// 'is' with negation
if (value is not null) { }

// 'is' with constant patterns
if (value is 42) { }

// 'is' with relational patterns (C# 9+)
if (value is >= 0 and <= 100) { }
```

### Common Mistakes
1. **Using `as` with value types** — `int x = obj as int;` doesn't compile. Use `is int i`.
2. **Forgetting null check after `as`** — `var str = obj as string; str.ToUpper();` crashes if not string.
3. **`is` with unboxing** — `obj is int` checks type but does NOT unbox. Use `obj is int i` to access value.

### FAANG-Level Deep Dive
**Type check optimization and inline caching**: Modern .NET uses *inline caching* for type checks. If `obj is SomeType` repeatedly sees the same type, the check becomes a simple comparison against a cached method table pointer. FAANG: *"What is the worst-case performance of `obj is IInterfaceWithManyMethods`?"* Answer: The interface check walks the interface map, worst-case O(n) where n = number of implemented interfaces.

### Explain Like I'm 7
`is` is like asking "is this a toy car?" and if yes, also picking it up to play with it. `as` is like asking "can I treat this as a toy car?" — if yes, you get the toy; if no, you get nothing.

</details>

---

<details>
<summary>

## Q09: `const` vs `readonly` vs `static`

</summary>

### Short Interview Answer
`const` defines a compile-time constant embedded directly into calling code — must be primitive, enum, or string. `readonly` defines a runtime constant evaluated once (in constructor or initializer) that cannot be reassigned. `static` declares a member belonging to the type itself, not an instance. A `static readonly` field combines type-level storage with immutable-after-init semantics.

### Detailed Explanation
- **What it is**: `const` = compile-time literal substitution. `readonly` = runtime assignment-once. `static` = type-level scope. `static readonly` = immutable type-level field.
- **Why it exists**: `const` enables compiler optimization (inlining) for attributes, enum values, default params. `readonly` allows runtime-calculated immutable values. `static` provides shared state without instance.
- **When to use it**: `const` for TRUE constants (e.g., `Math.PI`). `readonly` for immutable fields set in constructor (DI). `static` for utility classes, singleton instances.
- **When NOT to use it**: Avoid `const` for values that may change — value is baked into callers; changing requires recompilation. Avoid `static` mutable state in multi-threaded code without synchronization.

### Internal Working
- **Runtime behavior**: `const` values embedded as literals in IL. `readonly` fields emit `.initonly` flag; JIT enforces no further writes. `static` fields stored in type's static data area.
- **Memory behavior**: `const` uses no memory. `readonly` instance fields occupy normal memory. `static` fields stored once per type.

### Step-by-Step Execution
```csharp
public class Constants
{
    public const int MaxRetries = 3;          // Compile-time: "3" embedded everywhere
    public static readonly string AppName;    // Runtime: set once in static ctor
    public readonly DateTime CreatedAt;       // Per-instance: set in constructor

    static Constants() => AppName = $"MyApp_{Environment.Version}";
    public Constants() => CreatedAt = DateTime.UtcNow;
}
```

### C# Example
```csharp
public const int DaysInWeek = 7;              // ✅ primitive
public static readonly DateTime StartupTime = DateTime.UtcNow;
public readonly Guid InstanceId = Guid.NewGuid();

// readonly with mutable reference type
public readonly List<int> Numbers = new();    // Can't reassign Numbers, CAN call Numbers.Add()
```

### Common Mistakes
1. **Versioning const across assemblies** — Assembly A defines `const X = 5`, B uses it. If A changes to 6, B must be recompiled.
2. **static mutable fields in web apps** — Static state survives across requests, can leak data between users.
3. **readonly with mutable reference types** — The reference is readonly, but the object's contents can still change.

### FAANG-Level Deep Dive
**`readonly` and JIT optimization**: The JIT can use `readonly` to assume a field never changes, enabling hoisting out of loops. FAANG: *"If reflection modifies a readonly field, what happens to JIT-optimized code?"* Answer: Undefined behavior — the JIT's assumption is violated, but the CLR doesn't guarantee correctness.

### Explain Like I'm 7
`const` is like having "7" tattooed on your hand — permanent and visible everywhere. `readonly` is like writing on a whiteboard in your room — set once, can't erase. `static` is like a community bulletin board — everyone sees the same notice.

</details>

---
<details>
<summary>

## Q10: Enum Fundamentals

</summary>

### Short Interview Answer
An `enum` is a value type that defines a set of named integral constants. By default, enums use `int` as the underlying type, but any integral type can be specified (`byte`, `short`, `long`). Enums improve code readability and type safety compared to magic numbers. Flags enums (marked with `[Flags]`) support bitwise operations for combined values. In C# 7.3+, enum constraints (`where T : Enum`) allow generic programming with enums.

### Detailed Explanation
- **What it is**: A value type mapping symbolic names to integral values. Derives from `System.Enum` → `System.ValueType`.
- **Why it exists**: To replace magic numbers with self-documenting code and compile-time checking.
- **When to use it**: For any fixed set of named constants: status codes, modes, options, days of week.
- **When NOT to use it**: For open sets (user-defined categories), frequently changing values, or performance-critical serialization of large sets.

### Internal Working
- **Runtime behavior**: Enums are value types with underlying integral storage. Method calls like `HasFlag`, `ToString` use reflection or cached lookup internally.
- **CPU impact**: Enum operations compile to same IL as underlying type operations. `Enum.Parse`/`ToString` are slow (reflection).

### C# Example
```csharp
[Flags]
public enum FileAccess
{
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4,
    ReadWrite = Read | Write
}

FileAccess permissions = FileAccess.Read | FileAccess.Write;
bool canWrite = permissions.HasFlag(FileAccess.Write); // true
permissions |= FileAccess.Execute; // add flag

// Generic enum constraint (C# 7.3+)
public static TEnum Parse<TEnum>(string value) where TEnum : struct, Enum
    => Enum.Parse<TEnum>(value, ignoreCase: true);
```

### Common Mistakes
1. **Not defining `None = 0`** — Default value of enum is 0, even if no member has value 0.
2. **Using `HasFlag` in hot paths** — Slower than manual bitwise `&`.
3. **Adding members in the middle** — Shifts subsequent values. Always assign explicit numbers.

### FAANG-Level Deep Dive
**Enum dictionary key boxing**: In .NET Framework, using enum as dictionary key caused boxing on every lookup. In .NET Core 2.1+, the JIT generates specialized `EqualityComparer<T>.Default` for enums, eliminating boxing. FAANG: *"Implement a generic `EnumDictionary<TKey, TValue>` using an array for O(1) lookup. How do you handle non-contiguous enum values?"*

### Explain Like I'm 7
An enum is like a restaurant menu. Instead of asking for "item number 3," you ask for a "Cheeseburger." The kitchen knows cheeseburger = item 3.

</details>

---

<details>
<summary>

## Q11: Struct vs Class

</summary>

### Short Interview Answer
Structs are value types (stack-allocated or inline), copied on assignment, cannot be `null` (unless nullable), and do not support inheritance. Classes are reference types (heap-allocated), shared by reference, support inheritance and polymorphism. Choose struct for small, immutable data units (≤16-24 bytes) representing a single value. Choose class for larger objects, polymorphic behavior, or identity semantics.

### Detailed Explanation
- **What it is**: A `struct` is a value type; a `class` is a reference type. Both can implement interfaces. Structs cannot inherit, cannot have finalizers, and had no parameterless constructor before C# 10.
- **Why it exists**: Performance — structs avoid heap allocation and GC. Semantics — structs represent values; classes represent objects with identity.
- **When to use it**: Struct for small, immutable, single-value concepts — `Point`, `Color`, `Complex`. Class for polymorphic hierarchies, large objects, mutable identity.
- **When NOT to use it**: Avoid mutable structs (defensive copying bugs). Avoid structs > 64 bytes (copying overhead). Avoid structs needing inheritance.

### Internal Working
- **Memory behavior**: Struct locals on stack, freed by stack unwinding. Struct arrays are contiguous (excellent cache locality). Class arrays store references (pointer chasing).
- **CPU impact**: Structs have better cache locality, fewer pointer dereferences. Large structs incur copy costs.

### C# Example
```csharp
public readonly struct Coordinate
{
    public double Latitude { get; }
    public double Longitude { get; }
    public Coordinate(double lat, double lon) => (Latitude, Longitude) = (lat, lon);
}

// ref struct — stack-only (C# 7.2+)
public ref struct SpanWrapper
{
    private readonly Span<byte> _span;
    public SpanWrapper(Span<byte> span) => _span = span;
}

// Record struct (C# 10+)
public readonly record struct Vector3(float X, float Y, float Z);
```

### Common Mistakes
1. **Mutable structs** — Defensive copies cause silent bugs.
2. **Large structs** — Copying 1 KB struct in a loop destroys cache and memory bandwidth.
3. **Struct with reference type fields** — The reference field still points to same heap object — aliasing bugs.

### FAANG-Level Deep Dive
**ECS (Entity Component System) with structs**: Game engines store components as structs in contiguous arrays — eliminates virtual calls and maximizes cache efficiency. FAANG: *"Design a component storage system for 1M 'Position' structs with add/remove and 60 FPS iteration."*

### Explain Like I'm 7
A struct is like a printed photo — when you give it to a friend, they get an exact copy. A class is like a shared cloud album link — everyone sees the same album.

</details>

---

<details>
<summary>

## Q12: Pass by Value vs Pass by Reference (`ref`, `out`, `in`)

</summary>

### Short Interview Answer
By default, C# passes arguments by value — for value types this copies the value; for reference types this copies the reference. `ref` passes a reference to the variable itself (method can modify caller's variable). `out` is similar but must be assigned before return (used for multiple return values). `in` passes a read-only reference (avoids copying large structs without allowing mutation).

### Detailed Explanation
- **What it is**: Parameter modifiers. `ref` = variable alias (read-write). `out` = output alias (must be written). `in` = read-only reference. All require the caller keyword.
- **Why it exists**: Performance — `in` avoids copying large structs. Multiple returns — `out` enables TryParse pattern. Mutation — `ref` allows replacing caller's variable.
- **When to use it**: `in` for large `readonly struct` parameters (> 16 bytes). `out` for TryParse-style patterns. `ref` for swapping, interop, or replacing caller's variable.
- **When NOT to use it**: Avoid `ref` for simple types. Avoid `out` for return values — prefer tuples. Avoid overusing `ref` — can cause aliasing bugs.

### Internal Working
- **Runtime behavior**: All are managed pointers (byref IL type). JIT passes address of variable. `out` and `ref` are identical at runtime.
- **Memory behavior**: Address (8 bytes on x64) passed instead of struct value. For large structs, `in`/`ref` is much faster.

### C# Example
```csharp
void Swap(ref int a, ref int b)
{
    int tmp = a; a = b; b = tmp; // Modifies caller's variables directly
}

// ref returns
public ref int FindLargest(int[] numbers)
{
    int maxIdx = 0;
    for (int i = 1; i < numbers.Length; i++)
        if (numbers[i] > numbers[maxIdx]) maxIdx = i;
    return ref numbers[maxIdx];
}
var arr = new[] { 1, 5, 3, 9, 2 };
ref int largest = ref FindLargest(arr);
largest = 100; // arr[3] = 100
```

### Common Mistakes
1. **Properties can't be `ref`/`out`** — Properties are methods. Use a local variable.
2. **Async methods can't have `ref`/`out`** — Method may resume on different stack frame.
3. **Overload ambiguity** — Methods differing only in `ref`/`in`/`out` are not overloadable.

### FAANG-Level Deep Dive
**Byref safety and escape analysis**: C# compiler and JIT perform escape analysis to prevent dangling references. A `ref` return cannot alias a local variable. FAANG: *"Can a `ref struct` be returned from a method? What about a `Span<T>` backed by stack memory?"*

### Explain Like I'm 7
Normally, giving a friend a drawing gives them a photocopy. `ref` is giving them the original with a pencil — they can draw on YOUR copy. `out` is giving a blank page saying "you MUST draw something."

</details>

---

<details>
<summary>

## Q13: `params` Keyword

</summary>

### Short Interview Answer
The `params` keyword allows a method to accept a variable number of arguments, automatically packed into an array. The `params` parameter must be the last parameter. It works with any array type (including `Span<T>` in C# 13+). The compiler generates the array allocation, providing concise calling syntax.

### Detailed Explanation
- **What it is**: A method parameter modifier for variable-length argument lists. Caller passes zero or more arguments; compiler wraps them in an array.
- **Why it exists**: Eliminates need to explicitly create arrays for variable argument counts.
- **When to use it**: For APIs that legitimately take variable arguments — string formatting, logging, composite keys.
- **When NOT to use it**: When count is fixed. When performance-critical — each call allocates an array (use `params ReadOnlySpan<T>` in C# 13+).

### Internal Working
- **Runtime behavior**: Compiler translates `Sum(1, 2, 3)` to `Sum(new int[] { 1, 2, 3 })`. New array allocated per call.
- **CPU impact**: Allocation and population of array. For hot paths, allocation is significant.

### C# Example
```csharp
int Sum(params int[] numbers)
{
    int total = 0;
    foreach (var n in numbers) total += n;
    return total;
}
int result = Sum(1, 2, 3, 4); // Compiler: Sum(new int[]{1,2,3,4})

// params with Span<T> (C# 13+) — no heap allocation
void Log(string format, params ReadOnlySpan<object?> args) { }
```

### FAANG-Level Deep Dive
**params with `ReadOnlySpan<T>` in C# 13**: For ≤8 arguments, compiler creates span on stack using inline storage — no heap allocation. FAANG: *"Given `void Log(params ReadOnlySpan<object?> args)`, how does the compiler decide stack vs heap allocation?"*

### Explain Like I'm 7
`params` is like saying "I want as many cookies as you have, just toss them in this bag." The compiler collects all cookies and puts them in a bag.

</details>

---

# Section 2: OOP & SOLID

---

<details>
<summary>

## Q14: Encapsulation

</summary>

### Short Interview Answer
Encapsulation is the principle of hiding internal state and implementation details, exposing only a controlled public interface. In C#, this is achieved through access modifiers (`private`, `protected`, `internal`, `public`), properties, and explicit interface implementation. Encapsulation protects invariants, reduces coupling, and allows internal implementation to change without affecting consumers.

### Detailed Explanation
- **What it is**: Bundling data and methods within a single unit with controlled access. Also called information hiding.
- **Why it exists**: To prevent external code from putting an object into an invalid state, reduce coupling, and allow internal refactoring.
- **When to use it**: Always. Every field should be `private` by default. Expose only what is necessary.
- **When NOT to use it**: Over-encapsulation makes a class useless. DTOs often have public getters/setters; domain objects have controlled mutation.

### C# Example
```csharp
public class BankAccount
{
    private decimal _balance;
    public decimal Balance => _balance;

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Amount must be positive");
        _balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0 || amount > _balance) return false;
        _balance -= amount;
        return true;
    }
}

// Init-only setters (C# 9+)
public class Config
{
    public string ConnectionString { get; init; }
}
```

### Common Mistakes
1. **Public fields** — Use auto-properties instead.
2. **Leaky abstractions** — Returning reference to internal mutable collection. Return `.AsReadOnly()`.
3. **Not using `init` for immutable objects** — Use `init` (C# 9+) for immutable DTOs.

### FAANG-Level Deep Dive
**Encapsulation and Open/Closed Principle**: FAANG: *"Design a `NotificationService` that sends via email, SMS, and push. Encapsulate senders so adding a new channel doesn't modify the service."* Answer: Use DI with `INotificationSender` interface; each sender encapsulates its own channel logic.

### Explain Like I'm 7
Encapsulation is like a vending machine. You see the buttons (public interface), but not the gears inside. To get a soda, press the right button — you don't need to know how the machine works.

</details>

---
<details>
<summary>

## Q15: Inheritance

</summary>

### Short Interview Answer
Inheritance allows a class (derived) to reuse, extend, or override members of another class (base). C# supports single class inheritance and multiple interface implementation. The `base` keyword accesses base class members. `sealed` prevents further inheritance. `abstract` requires derived classes to implement members. Inheritance models an "is-a" relationship and is fundamental to OOP code reuse and polymorphism.

### Detailed Explanation
- **What it is**: A derived class automatically contains all non-private members of its base class. It can add new members, override virtual members, or hide non-virtual members.
- **Why it exists**: Code reuse — shared logic in a base class. Polymorphism — treat derived types as their base type.
- **When to use it**: When there is a genuine "is-a" relationship (`Dog` is an `Animal`). When a framework requires it.
- **When NOT to use it**: For "has-a" relationships — use composition. Deep hierarchies (> 3 levels) are hard to maintain.

### Internal Working
- **Runtime behavior**: CLR supports single inheritance natively. Each object has a pointer to its method table which includes parent type's method table. Virtual method dispatch walks this chain.
- **Memory behavior**: Object contains all fields from all base types plus its own. No overhead beyond type pointer.

### C# Example
```csharp
public abstract class Shape
{
    public abstract double GetArea();
    public virtual string Describe() => $"Area: {GetArea():F2}";
}

public sealed class Circle : Shape
{
    public double Radius { get; }
    public Circle(double radius) => Radius = radius;
    public override double GetArea() => Math.PI * Radius * Radius;
}
```

### Common Mistakes
1. **Deep inheritance** — More than 3 levels is a red flag. Prefer composition.
2. **Calling virtual methods in constructors** — Derived class not yet initialized.
3. **Using `new` to hide methods instead of `override`** — Leads to confusing dispatch behavior.

### FAANG-Level Deep Dive
**Virtual method dispatch internals**: Each type has a vtable with function pointers. Interface dispatch uses an interface map (additional lookup). FAANG: *"What is the performance difference between virtual dispatch through a class reference vs an interface reference?"* Interface dispatch adds interface map lookup unless JIT devirtualizes.

### Explain Like I'm 7
Inheritance is like a family tree. A child inherits traits from parents (eye color, height) and can have their own unique skills.

</details>

---

<details>
<summary>

## Q16: Polymorphism

</summary>

### Short Interview Answer
Polymorphism allows objects of different types to respond to the same method call in their own way. Achieved through virtual/abstract method overriding and interface implementation. At runtime, the CLR dispatches the call to the most derived override based on the object's actual type, not the reference type.

### Detailed Explanation
- **What it is**: The ability of an object to take many forms. A base-class reference can point to a derived-class object; method call behaves according to actual type.
- **Why it exists**: Enables programming to interfaces rather than implementations. New derived types can be added without changing existing code.
- **When to use it**: When multiple types share common behavior but implement it differently. Plugin systems, strategy pattern.
- **When NOT to use it**: When behavior is identical across types. When number of variants is fixed and small — discriminated union may be clearer.

### Internal Working
- **Runtime behavior**: CLR uses vtable dispatch (`callvirt` IL instruction). Reads object's type pointer, indexes vtable, calls method address.
- **CPU impact**: One indirection (load type, index vtable, call) — ~1ns. Virtual methods are rarely inlined.

### C# Example
```csharp
public abstract class PaymentMethod
{
    public abstract string ProcessPayment(decimal amount);
}

public class CreditCard : PaymentMethod
{
    public override string ProcessPayment(decimal amount)
        => $"Charged {amount:C} to credit card";
}

public class PayPal : PaymentMethod
{
    public override string ProcessPayment(decimal amount)
        => $"Processed {amount:C} via PayPal";
}

// Client code — polymorphic
public class CheckoutService
{
    public string Checkout(PaymentMethod method, decimal amount)
        => method.ProcessPayment(amount); // Polymorphism
}
```

### FAANG-Level Deep Dive
**JIT devirtualization and guarded devirtualization (GDV)**: Modern JIT can convert virtual calls to direct calls when type is known. *Guarded devirtualization* emits a type check then a direct call with fallback. FAANG: *"Can the JIT devirtualize an interface method call? Under what conditions?"* Yes, if concrete type is known at call site.

### Explain Like I'm 7
Polymorphism is like a universal remote that works with any TV. Press "volume up" — each TV brand handles it differently, but you just press the button.

</details>

---

<details>
<summary>

## Q17: Abstraction

</summary>

### Short Interview Answer
Abstraction means exposing only essential features while hiding implementation complexity. Achieved through abstract classes (partial implementation) and interfaces (pure contract). Abstraction reduces complexity by letting consumers work at a higher level of understanding.

### Detailed Explanation
- **What it is**: Hiding implementation details and showing only essential features. Consumers interact with abstract types without knowing implementation.
- **Why it exists**: Complexity management — humans can only hold ~7 items in working memory. Abstraction reduces cognitive load.
- **When to use it**: When designing APIs, libraries, or frameworks. When you want to decouple implementation from usage. For testability (mocking).
- **When NOT to use it**: Over-abstraction (interfaces for everything) creates unnecessary indirection. YAGNI.

### C# Example
```csharp
// Abstraction through interface
public interface IRepository<T>
{
    T GetById(int id);
    void Save(T entity);
}

// Consumer only knows IRepository<T>
public class UserService
{
    private readonly IRepository<User> _repo;
    public UserService(IRepository<User> repo) => _repo = repo;
    public User GetUser(int id) => _repo.GetById(id);
}
```

### FAANG-Level Deep Dive
**Abstraction and dependency injection**: FAANG: *"Design a plugin system where external assemblies can provide implementations of an abstract interface. How do you load, discover, and inject plugins?"* Solution: Use `Assembly.LoadFrom`, reflection to find `IPlugin` implementations, and `Activator.CreateInstance` with DI container integration.

### Explain Like I'm 7
Abstraction is like driving a car. You use the steering wheel and pedals — you don't need to know how the engine, transmission, and fuel injection work.

</details>

---

<details>
<summary>

## Q18: Interfaces vs Abstract Classes

</summary>

### Short Interview Answer
Interfaces define a pure contract without implementation; a class can implement multiple interfaces. Abstract classes provide partial implementation that derived classes extend; a class can only inherit one abstract class. Choose abstract class for shared implementation with "is-a" relationship. Choose interface for cross-cutting contracts ("can-do" capability) or when multiple inheritance is needed.

### Detailed Explanation
- **Interfaces**: Pure contract. No fields (until C# 13 — allows fields in interfaces in some scenarios). Multiple implementation allowed. Default interface methods (C# 8+).
- **Abstract classes**: Can have fields, constructors, method implementations, properties with backing fields. Single inheritance. More coupling.
- **When to use interface**: For contracts across unrelated types (`IDisposable`, `IComparable`). For loose coupling and testability.
- **When to use abstract class**: When derived classes share implementation and state. Template Method pattern.

### C# Example
```csharp
public interface ILogger
{
    void Log(string message);
}

public abstract class LoggerBase
{
    protected abstract void WriteLog(string message);
    public void Log(string message) => WriteLog($"[{DateTime.UtcNow}] {message}");
}

public class ConsoleLogger : LoggerBase
{
    protected override void WriteLog(string message) => Console.WriteLine(message);
}
```

### Common Mistakes
1. **Using abstract class instead of interface for abilities** — A class can have multiple abilities (Swim, Fly) but can only extend one abstract class.
2. **Fat interfaces** — Violates Interface Segregation Principle. Split into smaller interfaces.
3. **Adding members to published interface** — Breaks all implementors. Use default interface methods (C# 8+) cautiously.

### FAANG-Level Deep Dive
**Default interface methods (C# 8+)**: Allow adding members to interfaces without breaking existing implementors. FAANG: *"How are default interface methods implemented at the IL level? What is the diamond problem?"* The CLR handles them with a separate vtable for default implementations. Diamond problem occurs when multiple interfaces provide the same default method — the implementing class must resolve the conflict.

### Explain Like I'm 7
An interface is like a job description — it says what you must do, but not how. An abstract class is like a training manual with some instructions filled in and some blank pages for you to add.

</details>

---

<details>
<summary>

## Q19: Single Responsibility Principle (SRP)

</summary>

### Short Interview Answer
SRP states that a class should have only one reason to change — it should have only one responsibility. This doesn't mean a class does only one thing, but that it encapsulates a single concern. SRP reduces coupling, improves testability, and makes code easier to maintain. Violations manifest as "god classes" that do too much.

### Detailed Explanation
- **What it is**: A class should have one, and only one, reason to change. It should be responsible to a single actor or stakeholder.
- **Why it exists**: If a class has multiple responsibilities, changes to one responsibility may break the others. Testing becomes harder. Code becomes tightly coupled.
- **When to use it**: Always. When designing classes, ask: "who is the actor that would request a change?"
- **When NOT to use it**: Over-splitting creates too many tiny classes (class explosion). Find the right granularity.

### C# Example
```csharp
// BAD: God class with multiple responsibilities
public class OrderService
{
    public void CreateOrder(Order order) { /* validation, DB, email, logging */ }
    public decimal CalculateTax(Order order) { /* tax calculation */ }
    public void SendConfirmation(Order order) { /* email sending */ }
    public void GenerateInvoice(Order order) { /* PDF generation */ }
}

// GOOD: Separated responsibilities
public class OrderService
{
    private readonly ITaxCalculator _taxCalculator;
    private readonly IEmailService _emailService;
    private readonly IInvoiceGenerator _invoiceGenerator;
    // Each dependency handles ONE responsibility
}
```

### FAANG-Level Deep Dive
**SRP and microservices**: FAANG: *"Apply SRP at the service level. A monolithic order service handles orders, inventory, payments, and notifications. How would you split it?"* Answer: Decompose into Order Service, Inventory Service, Payment Service, Notification Service. Each has one reason to change.

### Explain Like I'm 7
SRP means a chef cooks, a waiter serves, and a dishwasher cleans. You don't ask the chef to also wash dishes — they'd be bad at both. Each person has one job.

</details>

---

<details>
<summary>

## Q20: Open/Closed Principle (OCP)

</summary>

### Short Interview Answer
OCP states that classes should be open for extension but closed for modification. You should be able to add new behavior without changing existing code. Achieved through inheritance, interfaces, and composition. The key is to design systems where new functionality is added via new classes, not by modifying existing ones.

### Detailed Explanation
- **What it is**: Software entities should be open for extension (new behavior) but closed for modification (existing code unchanged).
- **Why it exists**: Modifying existing, tested code risks introducing bugs. Extension via new code is safer.
- **When to use it**: When you anticipate varying behavior. Strategy, Template Method, and Decorator patterns all follow OCP.
- **When NOT to use it**: When behavior is stable and won't change. Over-engineering for extensibility that never comes violates YAGNI.

### C# Example
```csharp
// BAD: Modifying existing code to add new shape
public class AreaCalculator
{
    public double Calculate(object shape)
    {
        if (shape is Circle c) return Math.PI * c.Radius * c.Radius;
        if (shape is Rectangle r) return r.Width * r.Height;
        // Adding Triangle requires modifying this method!
        throw new NotSupportedException();
    }
}

// GOOD: Open for extension, closed for modification
public interface IShape { double Area(); }
public class Circle : IShape
{
    public double Radius { get; set; }
    public double Area() => Math.PI * Radius * Radius;
}
public class Rectangle : IShape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public double Area() => Width * Height;
}
// Adding Triangle = new class, no existing code changes
```

### FAANG-Level Deep Dive
**OCP and the Strategy pattern**: FAANG: *"Design a payment processing system that supports credit cards, PayPal, and cryptocurrency. New payment methods should not require modifying the checkout flow."* Solution: `IPaymentStrategy` interface, each method implements it, checkout uses `IEnumerable<IPaymentStrategy>`.

### Explain Like I'm 7
OCP is like having a game console that accepts different game cartridges. The console doesn't change — you just plug in a new cartridge (extension).

</details>

---
<details>
<summary>

## Q21: Liskov Substitution Principle (LSP)

</summary>

### Short Interview Answer
LSP states that derived classes must be substitutable for their base classes without altering the correctness of the program. If a method expects a `Base` type, any `Derived` type should work without unexpected behavior. Violations include overriding methods to throw `NotImplementedException`, strengthening preconditions, or weakening postconditions.

### Detailed Explanation
- **What it is**: Objects of a superclass should be replaceable with objects of a subclass without affecting correctness. The subtype must preserve the base type's contract.
- **Why it exists**: Without LSP, polymorphism breaks — code that works with the base type cannot safely use derived types.
- **When to use it**: Any time you create a derived class or implement an interface. The subclass must satisfy the base class's contract.
- **When NOT to use it**: N/A — LSP is a fundamental correctness requirement for inheritance.

### C# Example
```csharp
// BAD: LSP violation
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    public int Area() => Width * Height;
}

public class Square : Rectangle // Square is NOT a good substitute for Rectangle!
{
    public override int Width
    {
        set { base.Width = value; base.Height = value; }
    }
    public override int Height
    {
        set { base.Width = value; base.Height = value; }
    }
}

// Client expecting Rectangle breaks with Square:
Rectangle r = new Square();
r.Width = 10;
r.Height = 5; // r.Area() = 25 (wrong! Should be 50)
```

### Explain Like I'm 7
If you have a program that works with any bird, and you give it a penguin, the program should still work. If your program expects birds to fly, penguins break it — that's an LSP violation.

</details>

---

<details>
<summary>

## Q22: Interface Segregation Principle (ISP)

</summary>

### Short Interview Answer
ISP states that no client should be forced to depend on methods it does not use. Large, "fat" interfaces should be split into smaller, more specific ones. A class should not have to implement methods it doesn't need. ISP leads to more cohesive interfaces and reduces coupling.

### Detailed Explanation
- **What it is**: Many client-specific interfaces are better than one general-purpose interface. Clients should only know about the methods they actually use.
- **Why it exists**: Fat interfaces force implementors to throw `NotImplementedException` or have empty method bodies, violating LSP.
- **When to use it**: When designing interfaces, ask each client: "does it use all methods?" If not, split.
- **When NOT to use it**: Over-splitting creates too many interfaces. Balance cohesion with granularity.

### C# Example
```csharp
// BAD: Fat interface
public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
}

// GOOD: Segregated interfaces
public interface IWorkable { void Work(); }
public interface IFeedable { void Eat(); }
public interface IRestable { void Sleep(); }

public class Human : IWorkable, IFeedable, IRestable
{
    public void Work() { }
    public void Eat() { }
    public void Sleep() { }
}

public class Robot : IWorkable // Robot only implements what it needs
{
    public void Work() { }
}
```

### Explain Like I'm 7
ISP is like having separate remotes for TV, AC, and sound system instead of one giant remote with 100 buttons you never use.

</details>

---

<details>
<summary>

## Q23: Dependency Inversion Principle (DIP)

</summary>

### Short Interview Answer
DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This is achieved through interfaces and dependency injection. DIP decouples components, making the system more flexible and testable.

### Detailed Explanation
- **What it is**: Depend on abstractions (interfaces, abstract classes), not concrete implementations. Hollywood Principle: "Don't call us, we'll call you."
- **Why it exists**: High-level policy should not be polluted by low-level implementation details. Changes to low-level code should not ripple to high-level code.
- **When to use it**: Always in layered architectures. The layer above depends on interfaces defined by the layer below (or both depend on common abstractions).
- **When NOT to use it**: For concrete utility classes with stable implementations (e.g., `Path`, `File`). Over-abstraction adds unnecessary complexity.

### C# Example
```csharp
// BAD: High-level depends on low-level
public class OrderService
{
    private readonly SqlOrderRepository _repo = new SqlOrderRepository(); // Tight coupling
}

// GOOD: Both depend on abstraction
public interface IOrderRepository
{
    void Save(Order order);
}

public class SqlOrderRepository : IOrderRepository { }
public class OrderService
{
    private readonly IOrderRepository _repo;
    public OrderService(IOrderRepository repo) => _repo = repo; // DI
}
```

### FAANG-Level Deep Dive
**DIP and the Dependency Injection container**: FAANG: *"How does a DI container (e.g., Microsoft.Extensions.DependencyInjection) resolve dependencies at runtime? Explain the difference between Singleton, Scoped, and Transient lifetimes."* Answer: Container maintains a registry of type mappings. For Singleton, one instance cached for app lifetime. Scoped, one per scope (HTTP request). Transient, new instance per resolution.

### Explain Like I'm 7
Instead of building a laptop with a permanently attached screen (tight coupling), design it with an HDMI port (abstraction). You can plug in any monitor. The laptop doesn't care which monitor you use.

</details>

---

<details>
<summary>

## Q24: Method Overloading vs Overriding

</summary>

### Short Interview Answer
Overloading is compile-time polymorphism — multiple methods with the same name but different parameters in the same class. Overriding is runtime polymorphism — a derived class provides a new implementation of a base class `virtual`/`abstract` method using the `override` keyword. Overloading is resolved at compile time; overriding is resolved at runtime via vtable dispatch.

### Detailed Explanation
- **Overloading**: Same name, different parameter count/types/order. Return type alone cannot distinguish overloads. `params` can participate in overload resolution.
- **Overriding**: Requires `virtual`/`abstract` in base, `override` in derived. Same signature. Changes behavior for all code using the base type reference.
- **When to use overloading**: When you need multiple ways to call a method with different inputs (e.g., `Console.WriteLine`).
- **When to use overriding**: When derived classes need different behavior while maintaining polymorphic access.

### C# Example
```csharp
// Overloading — same method, different parameters
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
    public double Add(double a, double b) => a + b;
}

// Overriding — polymorphic behavior
public class Base
{
    public virtual string GetInfo() => "Base";
}
public class Derived : Base
{
    public override string GetInfo() => "Derived";
}
```

### Explain Like I'm 7
Overloading is like saying "open the door" (different ways to open: push, pull, use key). Overriding is like a cat and dog both "make sound" — the cat meows, the dog barks.

</details>

---

<details>
<summary>

## Q25: Sealed Classes and Methods

</summary>

### Short Interview Answer
The `sealed` keyword prevents a class from being inherited or a virtual method from being further overridden. Sealing improves performance by enabling JIT devirtualization (direct calls instead of vtable dispatch). It also communicates design intent — the class/method is not meant to be extended.

### Detailed Explanation
- **What it is**: `sealed class` — cannot be a base class. `sealed override` — prevents further overriding in derived classes.
- **Why it exists**: Performance (devirtualization), security (prevents malicious subclassing), and design clarity.
- **When to use it**: When the class is designed with no extension points. When all virtual methods have been overridden for the final time. For DTOs and value objects.
- **When NOT to use it**: When the class is part of an extensibility framework. Premature sealing limits flexibility.

### C# Example
```csharp
public sealed class FinalClass { } // Cannot be inherited

public class Base
{
    public virtual void Method() { }
}
public class Derived : Base
{
    public sealed override void Method() { } // No further overriding
}
```

### FAANG-Level Deep Dive
**Sealed and JIT devirtualization**: When a method is called on a sealed class, the JIT knows the exact type — it can devirtualize the call, potentially inline it. FAANG: *"How does `sealed` affect the JIT's ability to inline virtual methods?"* The JIT can devirtualize calls on sealed types safely, enabling inlining of what would otherwise be indirect calls.

### Explain Like I'm 7
A sealed class is like a locked door — no one can go further. A sealed method is like writing a final answer in pen — no one can change it later.

</details>

---

# Section 3: Delegates, Events, Lambda Expressions

---

<details>
<summary>

## Q26: Delegates

</summary>

### Short Interview Answer
A delegate is a type-safe function pointer — it defines a method signature and can hold a reference to one or more methods. Delegates are reference types derived from `System.Delegate` or `System.MulticastDelegate`. They enable callback mechanisms, event handling, and are the foundation of LINQ. Modern C# provides `Func<T>`, `Action`, and `Predicate<T>` for most delegate scenarios.

### Detailed Explanation
- **What it is**: A type that represents references to methods with a specific parameter list and return type. Instances can hold static methods, instance methods, and lambdas.
- **Why it exists**: To provide type-safe function pointers. C and C++ have raw function pointers; delegates add type safety, multicast capability, and object-orientation.
- **When to use it**: For callbacks, event handlers, asynchronous operations, LINQ expressions, Strategy pattern implementations.
- **When NOT to use it**: When a simple interface would suffice. When performance is critical and the indirection matters (use `FunctionPointer` in C# 9+ for unmanaged callbacks).

### C# Example
```csharp
// Declaration
public delegate int Operation(int x, int y);

// Usage
Operation add = (x, y) => x + y;
Operation multiply = (x, y) => x * y;

int result = add(5, 3); // 8

// Passing as callback
public int Apply(int a, int b, Operation op) => op(a, b);
Console.WriteLine(Apply(5, 3, multiply)); // 15
```

### Common Mistakes
1. **Not checking for null** — Invoking a null delegate throws `NullReferenceException`.
2. **Thread safety** — A delegate instance is immutable, but the variable holding it can be changed by another thread.
3. **Memory leaks** — A delegate holds a reference to its target object, preventing GC.

### FAANG-Level Deep Dive
**Delegate internals**: A delegate instance stores a method pointer and an object reference (target). For static methods, target is null. `System.MulticastDelegate` adds an invocation list (linked list of delegates). FAANG: *"How does the CLR handle delegate invocation vs interface method dispatch? Which is faster?"* Delegate invocation is direct (calli IL instruction) — faster than virtual or interface dispatch.

### Explain Like I'm 7
A delegate is like a phone number. Instead of calling someone directly, you store their number. Later, you dial the number and reach the person. The number can be changed to reach a different person.

</details>

---

<details>
<summary>

## Q27: Multicast Delegates

</summary>

### Short Interview Answer
Multicast delegates are delegates that hold references to multiple methods. When invoked, they call all methods in the invocation list sequentially in the order they were added. The `+=` operator adds a method to the list; `-=` removes one. The return value is the result of the last method in the chain. Events in C# are built on multicast delegates.

### Detailed Explanation
- **What it is**: A delegate that maintains an invocation list (linked list) of method references. All delegates in C# are multicast (`System.MulticastDelegate`).
- **Why it exists**: Enables pub/sub patterns where multiple handlers respond to a single notification.
- **When to use it**: Event systems, notification pipelines, middleware chains.
- **When NOT to use it**: When order of execution matters and must be guaranteed across assemblies. When exceptions in one handler should stop the chain.

### C# Example
```csharp
Action notify = () => Console.WriteLine("Email sent");
notify += () => Console.WriteLine("SMS sent");
notify += () => Console.WriteLine("Push sent");

notify(); // Calls all three in order
// Output:
// Email sent
// SMS sent
// Push sent

notify -= () => Console.WriteLine("SMS sent"); // Removes (if same reference)
```

### Common Mistakes
1. **Exception stops the chain** — If one handler throws, subsequent handlers are NOT called.
2. **Return values lost** — Only the last handler's return value is available for `Func` delegates.
3. **Removing anonymous methods** — Can't use `-=` with anonymous methods unless stored in a variable.

### Explain Like I'm 7
A multicast delegate is like a group message — you send one message and everyone on the list gets it. Each person reads and responds separately.

</details>

---

<details>
<summary>

## Q28: Events

</summary>

### Short Interview Answer
Events are a language feature that provides a wrapper around multicast delegates, exposing only `+=` and `-=` (subscribe/unsubscribe) from outside the class. The declaring class controls when the event is raised (invoked). Events enforce encapsulation — external code cannot invoke or clear the delegate list, only subscribe/unsubscribe.

### Detailed Explanation
- **What it is**: An event is a member that uses a delegate as its backing store. The compiler generates `add_EventName` and `remove_EventName` methods, plus a private delegate field.
- **Why it exists**: Provides controlled access to delegates. Without events, any code could invoke or clear another class's delegate chain.
- **When to use it**: For notification patterns — UI button clicks, property changes, lifecycle events.
- **When NOT to use it**: When a simple callback or interface is sufficient. Events can cause memory leaks if subscribers aren't unsubscribed.

### C# Example
```csharp
public class Button
{
    public event EventHandler? Click;

    protected virtual void OnClick()
    {
        // Thread-safe invocation pattern
        EventHandler? handler = Click;
        handler?.Invoke(this, EventArgs.Empty);
    }

    public void SimulateClick() => OnClick();
}

// Usage
Button button = new Button();
button.Click += (sender, args) => Console.WriteLine("Button clicked!");
button.SimulateClick();
```

### Common Mistakes
1. **Memory leaks** — Subscribing to an event keeps the subscriber alive. Always unsubscribe when done.
2. **Thread safety** — The delegate field can be modified by another thread. Use the copy pattern (`var handler = Click; handler?.Invoke(...)`).
3. **Null check required** — Always check or use `?.` before invoking.

### FAANG-Level Deep Dive
**Event vs delegate memory**: An event field is a delegate instance. Subscribers are held as delegate targets. If subscriber is a large object, the publisher prevents its collection. FAANG: *"Design a weak event pattern that allows subscribers to be collected without explicit unsubscription."* Solution: `WeakEventManager`, `WeakReference`-based delegates, or `IWeakEventListener`.

### Explain Like I'm 7
An event is like a doorbell. You can add your name to the "ring the bell" list (subscribe). When someone rings the bell, everyone on the list knows. But you can't make the bell ring from outside — only the person with the door knows when to ring it.

</details>

---

<details>
<summary>

## Q29: Lambda Expressions

</summary>

### Short Interview Answer
Lambda expressions are anonymous functions that can contain expressions or statements. They use the `=>` (goes-to) operator and are commonly used with LINQ, delegates, and expression trees. The compiler converts lambdas to either delegate instances or expression trees depending on context. Lambdas capture variables from the enclosing scope (closures).

### Detailed Explanation
- **What it is**: `(parameters) => expression_or_statement_block`. Can be implicitly typed (`x => x * 2`) or explicitly typed (`(int x) => x * 2`).
- **Why it exists**: Concise syntax for creating inline functions without separate method declarations. Essential for LINQ and functional-style programming.
- **When to use it**: LINQ queries, event handlers, callbacks, configuration, async continuations.
- **When NOT to use it**: For complex logic that spans many lines — move to a named method. When the lambda would be called in a hot loop and captures variables (allocation overhead).

### C# Example
```csharp
// Expression lambda
Func<int, int> square = x => x * x;

// Statement lambda
Action<string> greet = name =>
{
    var message = $"Hello, {name}!";
    Console.WriteLine(message);
};

// Lambda with LINQ
var adults = people.Where(p => p.Age >= 18).Select(p => p.Name);

// Lambda as expression tree
Expression<Func<int, int>> expr = x => x * x;
// Compiled to expression tree, not IL — used by EF Core, etc.
```

### Common Mistakes
1. **Capturing loop variables** — In C# 5 and earlier, `for` loop variable was captured by reference, causing all closures to see the final value. Fixed in C# 5.
2. **Allocation overhead** — Each lambda that captures variables creates a closure object (heap allocation). In hot paths, this adds GC pressure.
3. **Modified closures** — Modifying captured variables inside the lambda can lead to unexpected behavior.

### FAANG-Level Deep Dive
**Lambda allocation and closure optimization**: The compiler creates a closure class (display class) for captured variables. If no captures occur, the lambda is cached as a static delegate. FAANG: *"How does the C# compiler optimize a lambda that captures no variables vs one that captures local state? What IL is generated?"* Answer: No-capture lambdas become cached static delegate fields; capture lambdas generate a closure class with fields for each captured variable.

### Explain Like I'm 7
A lambda is like writing a quick note on a sticky pad — you write what you need right there instead of creating a whole document. If the note needs something from your desk (captured variable), you grab it and stick it on the note.

</details>

---

<details>
<summary>

## Q30: Func, Action, Predicate Delegates

</summary>

### Short Interview Answer
`Func<TResult>` and `Func<T1, T2, ..., TResult>` represent methods that return a value. `Action` and `Action<T1, T2, ...>` represent void-returning methods. `Predicate<T>` is equivalent to `Func<T, bool>` and represents a condition check. These built-in generic delegates eliminate the need to declare custom delegates for most scenarios.

### Detailed Explanation
- **Func**: Last type parameter is the return type. Up to 16 input parameters. `Func<T, TResult>`.
- **Action**: No return type (void). Up to 16 input parameters. `Action<T>`.
- **Predicate**: Returns `bool`. Equivalent to `Func<T, bool>`. Used for collection filtering.
- **Why they exist**: Standardize common delegate patterns — no custom delegate declarations needed. Interoperability between libraries.
- **When to use**: Always prefer `Func`/`Action`/`Predicate` over custom delegates unless you need `ref`/`out` parameters or specific semantics.

### C# Example
```csharp
Func<int, int, int> add = (a, b) => a + b;
Action<string> log = msg => Console.WriteLine(msg);
Predicate<int> isEven = x => x % 2 == 0;

// Usage
Console.WriteLine(add(3, 4)); // 7
log("Hello");                 // Hello
Console.WriteLine(isEven(4)); // True

// LINQ uses these heavily
var evens = numbers.Where(x => x % 2 == 0); // Predicate<T> is Func<T, bool>
```

### Common Mistakes
1. **Too many parameters** — `Func` with 17+ type parameters doesn't exist. Refactor the method.
2. **Confusing parameter order** — `Func<T1, T2, TResult>` — inputs first, return type last.
3. **Overloading resolution** — Ambiguity between `Func<int>` and `Func<int, int>` when passing lambdas.

### Explain Like I'm 7
`Func` is like a vending machine — you put something in, you get something out. `Action` is like a trash can — you put something in, nothing comes out. `Predicate` is like a "yes/no" question — is this even? Yes/No.

</details>
<details>
<summary>

## Q31: Anonymous Methods

</summary>

### Short Interview Answer
Anonymous methods (C# 2.0+) are inline unnamed methods defined with the `delegate` keyword. They have been largely superseded by lambda expressions, which are more concise and functionally equivalent. However, anonymous methods can omit parameter lists (when you don't need parameters) and have different overload resolution behavior in edge cases.

### Detailed Explanation
- **What it is**: `delegate(parameters) { body }` — an inline method without a name.
- **Why it exists**: Predecessor to lambdas. Introduced the concept of closure (variable capturing) to C#.
- **When to use it**: Rarely today — lambdas are preferred. Exception: when you need to omit parameters (`delegate { return true; }` instead of `() => true`).
- **When NOT to use it**: In modern code, prefer lambdas. Anonymous methods are less readable and verbose.

### C# Example
```csharp
// Anonymous method
Func<int, int> square = delegate(int x) { return x * x; };

// Capturing variable
int factor = 3;
Func<int, int> multiply = delegate(int x) { return x * factor; };

// Without parameters (impossible with lambda without ())
Action greet = delegate { Console.WriteLine("Hello!"); };
```

### Common Mistakes
1. **Cannot use `var` with anonymous methods** — Must specify delegate type.
2. **Cannot use statement lambdas interchangeably** — Anonymous methods were the only way to have statement blocks before C# 3.0.
3. **Cannot use `out` or `ref` parameters** — Anonymous methods (and lambdas) cannot capture `ref` or `out` parameters.

### Explain Like I'm 7
Anonymous methods are like leaving a note instead of having a full conversation. You write what needs to happen right there, without giving it a formal name.

</details>

---

<details>
<summary>

## Q32: Closure and Captured Variables

</summary>

### Short Interview Answer
A closure is a function (lambda/anonymous method) that captures variables from its enclosing scope. The compiler generates a closure class (display class) that stores the captured variables as fields. The closure and the lambda share these fields, allowing the lambda to read and modify the outer variables. Capturing extends the lifetime of the variables to match the delegate's lifetime.

### Detailed Explanation
- **What it is**: A function plus the captured variables' environment. The compiler hoists captured variables into a generated class.
- **Why it exists**: Enables functional programming patterns where lambdas can access surrounding state without explicit parameters.
- **When to use it**: LINQ queries, event handlers, callbacks, async continuations.
- **When NOT to use it**: In hot paths — each closure allocates. When capturing large objects that should be short-lived but are kept alive by the delegate.

### C# Example
```csharp
// Closure captures 'factor' and 'name'
int factor = 2;
string name = "double";
Func<int, int> multiplier = x =>
{
    Console.WriteLine(name); // Captures 'name'
    return x * factor;       // Captures 'factor'
};

// The compiler generates something like:
// class <>c__DisplayClass0_0
// {
//     public int factor;
//     public string name;
//     public int <Main>b__0(int x)
//     {
//         Console.WriteLine(name);
//         return x * factor;
//     }
// }

// Common gotcha — for loop capture (C# 5+ fixed this)
var actions = new List<Action>();
for (int i = 0; i < 3; i++) // C# 5+: new variable per iteration
{
    actions.Add(() => Console.WriteLine(i));
}
foreach (var action in actions) action(); // 0, 1, 2
```

### FAANG-Level Deep Dive
**Closure allocation and optimization**: The compiler creates a new closure class instance per capture site, not per delegate. If all captures are the same across multiple delegates, they share the same closure. FAANG: *"How many heap allocations occur in `var f = (() => x) + (() => x)`?"* One closure instance for both delegates, plus two delegate instances.

### Explain Like I'm 7
A closure is like a person with a notebook. When they leave a meeting, they take the notes (captured variables) with them. Later, they can still refer to what was written even though the meeting is over.

</details>

---

# Section 4: LINQ

---

<details>
<summary>

## Q33: LINQ and Deferred Execution

</summary>

### Short Interview Answer
LINQ (Language Integrated Query) uses deferred execution — query evaluation is delayed until the results are enumerated. Methods like `Where`, `Select`, `OrderBy` return `IEnumerable<T>` that stores the query logic but doesn't execute it. Execution happens when `foreach`, `ToList()`, `Count()`, or other consuming operations are called. This enables query composition, efficiency (only process what's needed), and infinite sequences.

### Detailed Explanation
- **What it is**: The iterator pattern — LINQ operators return iterators that execute the query logic on demand during enumeration.
- **Why it exists**: Performance — avoids executing the entire query if only the first few results are needed. Composability — queries can be built incrementally.
- **When to use it**: Always with LINQ. Be aware of deferred vs immediate execution semantics.
- **When NOT to use it**: When you need a snapshot of results (use `ToList()` or `ToArray()`). When the source is expensive and you'll enumerate multiple times.

### C# Example
```csharp
var numbers = new[] { 1, 2, 3, 4, 5 };

// Deferred: query is NOT executed here
var query = numbers.Where(n =>
{
    Console.WriteLine($"Filtering {n}");
    return n > 2;
});

Console.WriteLine("Query defined but not executed");

// Execution happens here
foreach (var n in query)
{
    Console.WriteLine($"Got {n}");
}
// Output:
// Query defined but not executed
// Filtering 1
// Filtering 2
// Filtering 3
// Got 3
// Filtering 4
// Got 4
// Filtering 5
// Got 5

// Immediate execution — snapshot
var filtered = numbers.Where(n => n > 2).ToList(); // Executes now
```

### Common Mistakes
1. **Multiple enumeration** — If the source is a DB query or expensive operation, iterating twice executes the query twice.
2. **Side effects in predicates** — `Where(x => { Console.WriteLine(x); return x > 2; })` — side effects depend on enumeration timing.
3. **Assuming query runs immediately** — `var result = query;` doesn't execute. Use `ToList()` or `ToArray()`.

### FAANG-Level Deep Dive
**Streaming vs buffering operators**: LINQ operators are streaming (yield one element at a time — `Where`, `Select`) or buffering (need all elements — `OrderBy`, `GroupBy`). FAANG: *"Explain which LINQ operators require full buffering and why. How does `OrderBy` work internally?"* Answer: `OrderBy` uses quicksort — it must read all elements, sort, then yield. Memory impact: O(n) temporary storage.

### Explain Like I'm 7
Deferred execution is like ordering pizza over the phone. You decide the toppings (build the query) now, but the pizza isn't made until you're ready to eat (enumerate). If you change your mind before eating, you can add toppings without remaking the whole pizza.

</details>

---

<details>
<summary>

## Q34: IQueryable vs IEnumerable

</summary>

### Short Interview Answer
`IEnumerable<T>` represents an in-memory sequence where operations are performed client-side (LINQ to Objects). `IQueryable<T>` represents a query that can be translated to a different language (e.g., SQL) and executed server-side. `IQueryable<T>` builds an expression tree that the provider analyzes and translates. Use `IQueryable<T>` with external data sources (databases) for server-side filtering; use `IEnumerable<T>` for in-memory collections.

### Detailed Explanation
- **IEnumerable**: LINQ operators are extension methods on `IEnumerable<T>`. They use delegates (`Func<T>`) and execute in memory. Filtering happens client-side.
- **IQueryable**: Operators build an `Expression<TDelegate>` expression tree. The provider (e.g., EF Core) translates the expression tree to SQL. Filtering happens server-side.
- **Performance impact**: `IQueryable` with DB can be 1000x faster because filtering happens in the database (indexed queries). `IEnumerable` loads all data into memory first, then filters.

### C# Example
```csharp
using var db = new AppDbContext();

// IQueryable — builds expression tree, translated to SQL
IQueryable<User> query = db.Users.Where(u => u.Age > 18).OrderBy(u => u.Name);
// SQL: SELECT * FROM Users WHERE Age > 18 ORDER BY Name — server-side!

// IEnumerable — loads all users into memory, then filters
IEnumerable<User> enumerable = db.Users.ToList(); // Executes SELECT * FROM Users
var filtered = enumerable.Where(u => u.Age > 18); // In-memory filtering

// CAUTION: Mixing IQueryable with IEnumerable
var badQuery = db.Users.Where(u => u.Name.Length > 3) // IQueryable — SQL evaluated
                       .ToList()                      // Executes
                       .Where(u => u.Age > 18);       // IEnumerable — in-memory
```

### Common Mistakes
1. **Calling `ToList()` too early** — Executes the query before adding filters. All rows are fetched from DB.
2. **Using IEnumerable for DB queries** — `db.Users.ToList().Where(...)` loads entire table into memory.
3. **Using IQueryable for in-memory** — Doesn't work. In-memory collections are IEnumerable.
4. **Custom functions in Where** — `db.Users.Where(u => MyFilter(u))` — EF Core cannot translate custom methods to SQL.

### FAANG-Level Deep Dive
**Expression tree translation**: EF Core's query pipeline parses the expression tree, converts to SQL, executes, and materializes results. FAANG: *"How does EF Core translate `Where(u => u.Name.StartsWith("A"))` to SQL? What happens with `Where(u => MyMethod(u))`?"* Answer: `StartsWith` maps to SQL `LIKE 'A%'`. Custom methods throw `InvalidOperationException` — EF cannot translate arbitrary C# to SQL.

### Explain Like I'm 7
`IQueryable` is like ordering from a catalog — you tell the warehouse what you want, they filter and send only what you ordered. `IEnumerable` is like buying the whole warehouse, then sorting through it at home.

</details>

---

<details>
<summary>

## Q35: LINQ Select vs SelectMany

</summary>

### Short Interview Answer
`Select` projects each element to a new form (1-to-1 mapping). `SelectMany` projects each element to an `IEnumerable<T>` and flattens the result into a single sequence (1-to-many mapping). `SelectMany` is equivalent to nested `foreach` and is used to flatten nested collections or perform cross joins.

### Detailed Explanation
- **Select**: `IEnumerable<TSource> → IEnumerable<TResult>`. Each source element produces one result element.
- **SelectMany**: `IEnumerable<TSource> → IEnumerable<TResult>` where each source element produces a sequence that is flattened into one result.
- **When to use Select**: Simple projection — getting a property from each element.
- **When to use SelectMany**: Flattening child collections, cross joins, multiple `from` clauses in query syntax.

### C# Example
```csharp
// Select — 1-to-1
var names = people.Select(p => p.Name);
// [Alice, Bob, Charlie]

// SelectMany — 1-to-many, flattened
var allOrders = customers.SelectMany(c => c.Orders);
// All orders from all customers in a single sequence

// Query syntax equivalent
var orders = from c in customers
             from o in c.Orders  // SelectMany
             select o;

// SelectMany with result selector (cross join)
var pairs = numbers1.SelectMany(n1 => numbers2, (n1, n2) => (n1, n2));
```

### Explain Like I'm 7
`Select` is like giving each student a test score — one score per student. `SelectMany` is like giving each student a list of their books, then putting all books from all students into one big pile.

</details>

---

<details>
<summary>

## Q36: LINQ GroupBy and Aggregations

</summary>

### Short Interview Answer
`GroupBy` groups elements by a key, returning `IEnumerable<IGrouping<TKey, TElement>>`. Each group has a `Key` property and is itself an `IEnumerable<T>`. Common aggregations include `Count`, `Sum`, `Average`, `Min`, `Max`, and `Aggregate`. GroupBy is a buffering operation — it must read all elements before yielding groups.

### Detailed Explanation
- **What it is**: Groups elements by key selector. Returns a sequence of groupings. Each group can be further projected or aggregated.
- **When to use it**: Reports, summaries, data analysis, partitioning data by category.
- **When NOT to use it**: For simple distinct-by-key — use `DistinctBy()` (C# 6+/.NET 6+) or `ToLookup` for dictionary-like access.

### C# Example
```csharp
var orders = new[]
{
    new { Category = "Food", Amount = 10 },
    new { Category = "Food", Amount = 15 },
    new { Category = "Electronics", Amount = 200 },
    new { Category = "Food", Amount = 20 },
};

var grouped = orders.GroupBy(o => o.Category);

foreach (var group in grouped)
{
    Console.WriteLine($"Category: {group.Key}");
    Console.WriteLine($"  Count: {group.Count()}");
    Console.WriteLine($"  Total: {group.Sum(o => o.Amount)}");
    Console.WriteLine($"  Avg: {group.Average(o => o.Amount)}");
}

// GroupBy with projection
var summary = orders
    .GroupBy(o => o.Category)
    .Select(g => new
    {
        Category = g.Key,
        Total = g.Sum(o => o.Amount),
        Count = g.Count()
    });
```

### Common Mistakes
1. **Multiple enumeration** — Iterating a group multiple times re-executes the grouping. Call `ToList()` on groups if needed.
2. **Performance with large datasets** — GroupBy is O(n) but allocates dictionary entries for each group.
3. **GroupBy vs ToLookup** — `GroupBy` is deferred; `ToLookup` executes immediately and returns `ILookup<TKey, TValue>`.

### Explain Like I'm 7
`GroupBy` is like sorting laundry — you put all white clothes in one pile, dark clothes in another, and towels in another. Each pile is a group with a label (the key).

</details>

---

<details>
<summary>

## Q37: LINQ Join vs GroupJoin

</summary>

### Short Interview Answer
`Join` performs an inner join — for each element in the outer sequence that matches an element in the inner sequence on the key, it yields a result. `GroupJoin` performs a grouped join (equivalent to left outer join + group) — for each outer element, it yields a result with a sequence of matching inner elements. `GroupJoin` is the basis for `SelectMany` to create left outer joins.

### Detailed Explanation
- **Join**: Inner join. Each outer element paired with each matching inner element. Unmatched outer elements are excluded.
- **GroupJoin**: Grouped join. Each outer element paired with a sequence of matching inner elements. Unmatched outer elements have an empty sequence.
- **When to use Join**: When you need pairs of matching records (orders with their line items).
- **When to use GroupJoin**: When you need each outer element with its children (customer with their orders).

### C# Example
```csharp
var customers = new[] { new { Id = 1, Name = "Alice" }, new { Id = 2, Name = "Bob" } };
var orders = new[] { new { CustomerId = 1, Product = "Widget" }, new { CustomerId = 1, Product = "Gadget" } };

// Inner join
var innerJoin = customers.Join(
    orders,
    c => c.Id,
    o => o.CustomerId,
    (c, o) => new { c.Name, o.Product });
// Alice, Widget
// Alice, Gadget

// Group join (left outer)
var groupJoin = customers.GroupJoin(
    orders,
    c => c.Id,
    o => o.CustomerId,
    (c, orderList) => new { c.Name, Orders = orderList });
// Alice, [Widget, Gadget]
// Bob, [] (empty — no orders)

// Left outer join via SelectMany
var leftOuter = customers.GroupJoin(orders, c => c.Id, o => o.CustomerId, (c, os) => new { c, os })
    .SelectMany(x => x.os.DefaultIfEmpty(), (x, o) => new { x.c.Name, Order = o?.Product });
```

### Explain Like I'm 7
`Join` is like pairing socks — each left sock matches exactly one right sock. `GroupJoin` is like a mother duck with ducklings — each mother has a group of babies following her.

</details>

---

<details>
<summary>

## Q38: LINQ Any vs All vs Contains

</summary>

### Short Interview Answer
`Any` returns `true` if any element satisfies a condition (or if the sequence has any elements with no predicate). `All` returns `true` if ALL elements satisfy a condition. `Contains` checks if a specific element exists using the default equality comparer. `Any` with no predicate is the most efficient way to check if a sequence has elements (O(1) for `ICollection`, O(n) otherwise).

### Detailed Explanation
- **Any**: Stops at first match. Empty sequence + predicate = false. Empty sequence + no predicate = false.
- **All**: Stops at first non-match. Empty sequence always returns true (vacuous truth).
- **Contains**: Uses `EqualityComparer<T>.Default`. For `ICollection<T>`, delegates to `Contains` method.
- **Performance**: `Any()` is O(1) for `ICollection` (checks `Count > 0`). `All` and `Any(predicate)` are O(n) worst-case but short-circuit.

### C# Example
```csharp
var numbers = new[] { 1, 2, 3, 4, 5 };

bool anyEven = numbers.Any(n => n % 2 == 0);  // true (2)
bool allPositive = numbers.All(n => n > 0);    // true
bool contains3 = numbers.Contains(3);          // true

// Any vs Count()
bool hasItems = numbers.Any();   // Preferred — short-circuits, O(1) for ICollection
bool hasItems2 = numbers.Count() > 0; // O(n) for IEnumerable — BAD!

// All on empty — vacuous truth
bool allOnEmpty = new int[0].All(x => x > 100); // true! (no counter-examples)
```

### Common Mistakes
1. **Using `Count() > 0` instead of `Any()`** — `Count()` enumerates the entire sequence; `Any()` stops at first element.
2. **`All` on empty sequence returns true** — Always consider empty sequence behavior.
3. **`Contains` with custom types** — Must implement `IEquatable<T>` or pass `IEqualityComparer`.

### Explain Like I'm 7
`Any` asks "is there at least one cookie in the jar?" `All` asks "are ALL cookies chocolate chip?" `Contains` asks "is there a cookie with THIS specific frosting?"

</details>
<details>
<summary>

## Q39: LINQ Distinct, Except, Intersect, Union

</summary>

### Short Interview Answer
`Distinct` removes duplicates from a sequence. `Except` returns elements from the first sequence not in the second. `Intersect` returns elements present in both sequences. `Union` returns unique elements from both sequences. All use default equality comparer unless specified. These are set-based operations that typically use hash sets internally for O(n + m) complexity.

### Detailed Explanation
- **Distinct**: HashSet-based deduplication. Buffers seen elements in a `HashSet<T>`.
- **Except**: Builds a HashSet from second sequence, filters first. Hash set removed from second sequence.
- **Intersect**: Builds a HashSet from the second sequence, filters first by membership.
- **Union**: Combines both sequences and deduplicates. First sequence yielded; second sequence filtered by HashSet.
- **Performance**: All are O(n + m) with HashSet. For sorted data, use `SortedSet` for better memory.

### C# Example
```csharp
int[] a = { 1, 2, 3, 4, 5 };
int[] b = { 3, 4, 5, 6, 7 };

var distinct = a.Distinct();               // 1, 2, 3, 4, 5
var except = a.Except(b);                  // 1, 2
var intersect = a.Intersect(b);            // 3, 4, 5
var union = a.Union(b);                    // 1, 2, 3, 4, 5, 6, 7

// With custom equality
var distinctBy = a.DistinctBy(x => x % 2); // 1, 2 (first by each category)
```

### Explain Like I'm 7
`Distinct` removes duplicate Lego bricks. `Except` gives you bricks from your pile that aren't in your friend's. `Intersect` gives you bricks you both have. `Union` combines both piles but removes duplicates.

</details>

---

<details>
<summary>

## Q40: PLINQ (Parallel LINQ)

</summary>

### Short Interview Answer
PLINQ (Parallel LINQ) automatically parallelizes LINQ queries across multiple CPU cores using `AsParallel()`. It partitions the source sequence, processes partitions in parallel, and merges results. PLINQ is best for CPU-bound operations on large collections where processing each element is independent. `AsOrdered()` preserves ordering at a cost. Use `WithDegreeOfParallelism()` to control concurrency.

### Detailed Explanation
- **What it is**: Parallel implementation of LINQ operators. Uses `Task` internally to distribute work across threads.
- **When to use it**: CPU-intensive operations on large collections (image processing, complex calculations). When each element's processing is independent.
- **When NOT to use it**: I/O-bound operations (use async/await instead). Small collections (overhead > benefit). Operations with ordering requirements (use `AsOrdered` with caution).
- **Performance**: Partitioning, scheduling, and merging overhead. Benefit starts at ~10K+ elements with non-trivial work per element.

### C# Example
```csharp
var numbers = Enumerable.Range(1, 1_000_000);

// Parallel query — may execute out of order
var parallelQuery = numbers.AsParallel()
    .Where(n => n % 2 == 0)
    .Select(n => ComplexCalculation(n));

// Preserve ordering
var orderedQuery = numbers.AsParallel().AsOrdered()
    .Where(n => n % 2 == 0);

// Control parallelism
var limitedQuery = numbers.AsParallel()
    .WithDegreeOfParallelism(Environment.ProcessorCount / 2)
    .Select(ExpensiveOperation);

// ForAll — parallel foreach (no ordering guarantee)
parallelQuery.ForAll(result => Console.WriteLine(result));
```

### Common Mistakes
1. **Using PLINQ for I/O** — Threads block on I/O, wasting CPU. Use async/await.
2. **Not using `ForAll` for side effects** — `foreach` over parallel query merges results sequentially, losing parallelism benefits.
3. **Thread-unsafe operations** — Shared state accessed from PLINQ must be synchronized.
4. **Overhead > benefit** — PLINQ has overhead. Measure before using.

### FAANG-Level Deep Dive
**PLINQ partitioning strategies**: PLINQ uses chunk partitioning (dynamic, load-balanced) and range partitioning (static, contiguous). FAANG: *"When does PLINQ choose range partitioning over chunk partitioning? How does it affect performance for uneven workloads?"* Range partitioning is used for ordered sequences with indexable sources (arrays, lists). Chunk partitioning adapts to uneven workloads but has overhead.

### Explain Like I'm 7
PLINQ is like having 4 friends sort Lego bricks instead of doing it alone. You split the pile into 4 smaller piles, each friend sorts their pile at the same time, then you combine the results.

</details>

---

# Section 5: Async/Await & TPL

---

<details>
<summary>

## Q41: async/await Internals

</summary>

### Short Interview Answer
When the compiler encounters `async`, it transforms the method into a state machine (a struct implementing `IAsyncStateMachine`). The method is split at each `await` into states. When an awaited `Task` is incomplete, the method returns an incomplete task to the caller, schedules a continuation, and resumes when the awaited task completes. This allows the thread to return to the thread pool (or UI message loop) rather than blocking.

### Detailed Explanation
- **What it is**: A compiler-generated state machine. The method is rewritten to track progress through states (0, 1, 2...). Local variables are hoisted to fields.
- **Why it exists**: To enable asynchronous code that looks synchronous. Without async/await, developers had to write complex continuations with `Task.ContinueWith`.
- **When to use it**: For I/O-bound operations (file, network, database), UI responsiveness, web server scalability.
- **When NOT to use it**: For CPU-bound operations (use `Task.Run` or parallel processing). For very short operations with no actual asynchrony.

### Step-by-Step Execution
```csharp
public async Task<int> GetDataAsync()
{
    Console.WriteLine("1: Starting");        // State 0 — synchronous
    int result = await FetchAsync();         // State 1 — check if complete
    Console.WriteLine("3: Got result");      // State 2 — continuation
    return result;
}

// Compiler generates (simplified):
// 1. Create state machine struct
// 2. Set state = 0
// 3. Call MoveNext()
//    - State 0: WriteLine, call FetchAsync, get Task
//      - If Task.IsCompleted: continue synchronously (state = 2)
//      - Else: builder.AwaitUnsafeOnCompleted(), schedule continuation, return
// 4. When Task completes: MoveNext() resumes at state 1
//    - Check exception, get result
//    - State 2: WriteLine, set return value, mark task complete
```

### C# Example
```csharp
public async Task<string> ReadFileAsync(string path)
{
    using var stream = File.OpenRead(path);
    using var reader = new StreamReader(stream);
    string content = await reader.ReadToEndAsync();
    return content;
}

// The above avoids blocking a thread during I/O
// Without async: Thread blocks for entire I/O duration
```

### Common Mistakes
1. **Blocking on async** — `Task.Result`, `Task.Wait()` cause deadlocks in UI/ASP.NET contexts.
2. **Async void** — Cannot be awaited; exceptions crash the process. Only for event handlers.
3. **Not flowing exceptions** — Exceptions from non-awaited tasks are silently swallowed.
4. **Capturing SynchronizationContext unnecessarily** — Use `ConfigureAwait(false)` in library code.

### FAANG-Level Deep Dive
**State machine internals**: The compiler generates a `struct` implementing `IAsyncStateMachine`. The struct has fields for: state (int), builder (`AsyncTaskMethodBuilder<T>`), awaiter, captured locals. `MoveNext()` is called to advance the state machine. FAANG: *"Why does the compiler use a struct (value type) for the state machine? How does it avoid boxing?"* Answer: Using a struct avoids heap allocation for the state machine. Boxing only occurs if the state machine is referenced as `IAsyncStateMachine` (for `SetStateMachine`). The builder is a struct as well.

### Explain Like I'm 7
async/await is like ordering food at a restaurant. Instead of standing at the counter waiting (blocking), you sit down, read a menu, and the waiter brings the food when it's ready. The waiter (await) tells you "your food is here" and you continue eating.

</details>

---

<details>
<summary>

## Q42: ConfigureAwait

</summary>

### Short Interview Answer
`ConfigureAwait(bool continueOnCapturedContext)` controls whether the continuation after `await` runs on the captured `SynchronizationContext`. `ConfigureAwait(true)` (default) marshals back to the original context (UI thread, ASP.NET request context). `ConfigureAwait(false)` runs the continuation on any available thread pool thread, avoiding context switches and preventing deadlocks. Library code should use `ConfigureAwait(false)`; UI code needs `ConfigureAwait(true)`.

### Detailed Explanation
- **What it is**: An extension method on `Task`/`Task<T>` that returns a `ConfiguredTaskAwaitable`. Controls where the continuation executes.
- **Why it exists**: Performance — marshaling back to the original context has overhead (Post to SynchronizationContext). Deadlock prevention — blocking on async in UI/ASP.NET contexts deadlocks without `ConfigureAwait(false)`.
- **When to use it**: Library code — always use `ConfigureAwait(false)`. Application code — depends on context. UI event handlers — keep default (true).
- **When NOT to use it**: When you need context (HttpContext.Current, UI thread access). In ASP.NET Core, `SynchronizationContext` is null by default, so `ConfigureAwait(false)` is unnecessary.

### C# Example
```csharp
// Library code — safe everywhere
public async Task<string> LibraryMethodAsync()
{
    var data = await FetchFromDbAsync().ConfigureAwait(false);
    var processed = await ProcessAsync(data).ConfigureAwait(false);
    return processed;
}

// UI code — must continue on UI thread
public async void Button_Click(object sender, EventArgs e)
{
    // Default ConfigureAwait(true) — resumes on UI thread
    var data = await FetchDataAsync();
    textBox.Text = data; // UI access — needs UI thread
}

// ASP.NET Core — SynchronizationContext is null
public async Task<IActionResult> Get()
{
    var data = await _service.GetAsync(); // ConfigureAwait(false) has no effect
    return Ok(data);
}
```

### Common Mistakes
1. **Forgetting ConfigureAwait(false) in library code** — Can cause deadlocks when callers block on the task.
2. **Using ConfigureAwait(false) in UI code** — Continuation runs on thread pool — cannot access UI elements.
3. **Overusing ConfigureAwait** — In ASP.NET Core, ConfigureAwait(false) is redundant and adds noise.
4. **Applying to every await** — Only needed on the first await in a context-sensitive path.

### FAANG-Level Deep Dive
**ConfigureAwait and SynchronizationContext null**: In ASP.NET Core, there is no `SynchronizationContext.Current`. `ConfigureAwait(true)` still captures `ExecutionContext` but doesn't marshal. FAANG: *"In ASP.NET Core, does `ConfigureAwait(false)` provide any benefit? Why or why not?"* Answer: No `SynchronizationContext` means no marshaling happens either way. `ConfigureAwait(false)` might save a null check. The real benefit is in traditional ASP.NET (Full Framework) and UI apps.

### Explain Like I'm 7
`ConfigureAwait(true)` is like saying "bring the food back to my specific table." `ConfigureAwait(false)` is like saying "I'll eat anywhere — just tell me the food is ready and I'll grab it wherever."

</details>

---

<details>
<summary>

## Q43: Task vs ValueTask

</summary>

### Short Interview Answer
`Task<T>` is a reference type that always allocates heap memory. `ValueTask<T>` is a value type that can wrap a result or a `Task<T>`, avoiding allocation when the result is available synchronously. Use `ValueTask<T>` for high-throughput methods where the result is often available synchronously (e.g., cached data). `Task<T>` should be the default; `ValueTask<T>` adds complexity and has usage restrictions (await once, not await in parallel).

### Detailed Explanation
- **Task**: Reference type. Always allocates. Supports `await`, `WhenAll`, `WhenAny`, multiple awaits.
- **ValueTask**: Value type (struct). Can wrap `TResult` or `Task<TResult>`. Avoids allocation when result is synchronous. Only await once; cannot await in parallel.
- **When to use Task**: Default choice for async methods. When result is rarely synchronous. When need to await multiple times or combine with WhenAll/WhenAny.
- **When to use ValueTask**: When result is frequently synchronous (cached data, fast paths). In high-throughput scenarios where every allocation matters.
- **When NOT to use ValueTask**: When method will be awaited multiple times. When wrapped in `WhenAll`/`WhenAny`. For public APIs where consumers may misuse it.

### C# Example
```csharp
// Task — default choice
public async Task<User> GetUserAsync(int id)
{
    return await _db.Users.FindAsync(id);
}

// ValueTask — use when result often synchronous
private readonly ConcurrentDictionary<int, User> _cache = new();

public ValueTask<User> GetUserAsync(int id)
{
    if (_cache.TryGetValue(id, out var user))
        return new ValueTask<User>(user); // Synchronous, no allocation

    return new ValueTask<User>(FetchFromDbAsync(id)); // Fallback to Task
}

private async Task<User> FetchFromDbAsync(int id)
{
    return await _db.Users.FindAsync(id);
}
```

### Common Mistakes
1. **Awaiting ValueTask multiple times** — Throws `InvalidOperationException` after first await.
2. **Using ValueTask when result is rarely synchronous** — Adds complexity without benefit.
3. **Blocking on ValueTask** — `valueTask.Result` or `.GetAwaiter().GetResult()` with synchronous path works, but with async path it blocks.
4. **Making interface methods return ValueTask** — Restricts implementors and consumers unnecessarily.

### FAANG-Level Deep Dive
**ValueTask pooling and IValueTaskSource**: `ValueTask<T>` can wrap `IValueTaskSource<T>` — a poolable implementation that avoids both Task and ValueTask object allocation. FAANG: *"Design an `IValueTaskSource<T>` pool for high-throughput async operations. How do you handle the lifetime and reset?"* Answer: Implement `IValueTaskSource<T>`, pool instances, use `ManualResetValueTaskSourceCore<T>` as the backing logic, reset between uses.

### Explain Like I'm 7
`Task` is like a delivery truck — it always shows up, but the truck itself takes space. `ValueTask` is like a small package the delivery person can hand you directly if they have it in their pocket — no truck needed. But you can only accept it once.

</details>
<details>
<summary>

## Q44: Task.Run vs Task.Factory.StartNew

</summary>

### Short Interview Answer
`Task.Run` is a simplified wrapper around `Task.Factory.StartNew` that uses default parameters: `TaskScheduler.Default` (thread pool), `TaskCreationOptions.DenyChildAttach`, and no `TaskContinuationOptions`. `Task.Factory.StartNew` provides more control but requires correct parameter selection to avoid pitfalls. Always prefer `Task.Run` for CPU-bound work; use `StartNew` only when you need specific options like `LongRunning` or custom schedulers.

### Detailed Explanation
- **Task.Run**: Creates a task that runs on the thread pool. Equivalent to `Task.Factory.StartNew(action, CancellationToken.None, TaskCreationOptions.DenyChildAttach, TaskScheduler.Default)`.
- **Task.Factory.StartNew**: Full control: scheduler, creation options, state object, cancellation.
- **When to use Task.Run**: Default choice for offloading CPU-bound work. Simple and safe.
- **When to use StartNew**: Need `LongRunning` (dedicated thread), custom scheduler passing state object, `AttachedToParent`.
- **Pitfall with async delegates**: `Task.Factory.StartNew(async () => { await ... })` returns `Task<Task>`. Must `Unwrap()` or prefer `Task.Run` which handles this.

### C# Example
```csharp
// Task.Run — simple and safe
Task task = Task.Run(() => ExpensiveCalculation());
Task<int> result = Task.Run(() => Compute());

// Task.Factory.StartNew — with options
Task longTask = Task.Factory.StartNew(() =>
{
    // Long-running work (e.g., background processing loop)
},
CancellationToken.None,
TaskCreationOptions.LongRunning,
TaskScheduler.Default);

// DANGER: async delegate with StartNew
Task<Task> nested = Task.Factory.StartNew(async () =>
{
    await Task.Delay(1000);
    return 42;
});
int result = await nested.Unwrap(); // Need Unwrap!

// Task.Run handles this automatically
int result2 = await Task.Run(async () =>
{
    await Task.Delay(1000);
    return 42;
});
```

### Common Mistakes
1. **Using StartNew with async delegate** — Returns `Task<Task>`. Must call `Unwrap()`.
2. **Assuming StartNew uses thread pool** — `TaskCreationOptions.LongRunning` creates a dedicated thread.
3. **Passing async lambda to Task.Run** — Task.Run does NOT handle async the same way. It creates a task that runs the async method, but the method itself is still async.

### Explain Like I'm 7
`Task.Run` is like calling a taxi — simple, you just say where to go. `Task.Factory.StartNew` is like building your own car — you can choose the engine, tires, and color, but it's more work.

</details>

---

<details>
<summary>

## Q45: Async Deadlocks

</summary>

### Short Interview Answer
Async deadlocks occur when code blocks on an async operation (using `.Result` or `.Wait()`) while the async method needs to resume on the captured `SynchronizationContext`, which is blocked. This creates a deadlock: the blocking thread waits for the task to complete, but the task's continuation can't run because the context is occupied. Solutions: use `async` all the way, use `ConfigureAwait(false)`, or use `Task.Run(() => AsyncMethod()).Result` as a workaround.

### Detailed Explanation
- **Cause**: Blocking on async (`Task.Result`, `Task.Wait()`, `GetAwaiter().GetResult()`) in an environment with `SynchronizationContext` (UI, ASP.NET Classic).
- **Mechanism**: `await` captures `SynchronizationContext.Current` (or `TaskScheduler.Current`). The continuation posts to this context. If the context's single thread is blocked waiting for the task, the continuation never runs.
- **Common scenarios**: UI button click handlers, ASP.NET (Full Framework) controllers, Console app's `Main` method.
- **Solutions**: `ConfigureAwait(false)` in library code. Use `async void` for event handlers. Use `MainAsync().GetAwaiter().GetResult()` only when no SynchronizationContext.

### Step-by-Step Execution
```csharp
// DEADLOCK scenario
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000).ConfigureAwait(true); // Capture context
    return "data";
}

public void Button_Click(object sender, EventArgs e)
{
    string data = GetDataAsync().Result; // BLOCKS UI thread
    // UI thread blocked here → continuation can't run → DEADLOCK
}

// SOLUTION 1: async all the way
public async void Button_Click(object sender, EventArgs e)
{
    string data = await GetDataAsync(); // Non-blocking
}

// SOLUTION 2: ConfigureAwait(false)
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000).ConfigureAwait(false); // Don't capture context
    return "data";
}
// Now .Result works (but still not recommended)
```

### Common Mistakes
1. **Mixing sync and async** — The "sync over async" antipattern causes deadlocks, thread pool starvation, and exception swallowing.
2. **`ConfigureAwait(false)` in UI code** — Continuation runs on thread pool, cannot access UI elements.
3. **Assuming ASP.NET Core doesn't deadlock** — ASP.NET Core has no `SynchronizationContext`, but `Task.Result` still blocks the thread and hurts scalability.

### FAANG-Level Deep Dive
**SynchronizationContext.Post and deadlock**: UI `SynchronizationContext.Post` queues work to the message pump. If the pump is blocked, continuations queue up. FAANG: *"How does `SynchronizationContext` work in Windows Forms vs WPF vs ASP.NET Classic?"* Answer: Windows Forms uses `WindowsFormsSynchronizationContext.Post` → `Control.BeginInvoke`. WPF uses `DispatcherSynchronizationContext` → `Dispatcher.BeginInvoke`. ASP.NET Classic uses `AspNetSynchronizationContext` that manages request thread affinity.

### Explain Like I'm 7
An async deadlock is like being stuck at a door: you're holding the door handle (waiting) but to open it, you need someone on the other side to push. That someone is waiting for you to let go first. No one moves.

</details>

---

<details>
<summary>

## Q46: CancellationToken

</summary>

### Short Interview Answer
`CancellationToken` is a struct that propagates notification that an operation should be cancelled. Created from a `CancellationTokenSource`, which provides `Cancel()` and `CancelAfter()`. The token should be passed to async methods and checked via `ThrowIfCancellationRequested()` or `IsCancellationRequested`. Cancellation is cooperative — the operation must check the token and stop voluntarily.

### Detailed Explanation
- **What it is**: A lightweight struct with a flag indicating if cancellation has been requested. `CancellationTokenSource` manages the token and triggers cancellation.
- **Why it exists**: To support cooperative cancellation in long-running or async operations. Allows users to cancel operations without aborting threads.
- **When to use it**: Any long-running or async operation: API calls, file processing, background services, paginated queries.
- **When NOT to use it**: For operations that should never be cancelled. Atomic operations that would leave inconsistent state if interrupted.

### C# Example
```csharp
public async Task ProcessItemsAsync(IEnumerable<Item> items, CancellationToken ct)
{
    foreach (var item in items)
    {
        ct.ThrowIfCancellationRequested(); // Cooperative check
        await ProcessAsync(item, ct); // Pass token to child operations
    }
}

// Usage
using var cts = new CancellationTokenSource();
cts.CancelAfter(TimeSpan.FromSeconds(30)); // Auto-cancel after timeout

try
{
    await ProcessItemsAsync(items, cts.Token);
}
catch (OperationCanceledException)
{
    Console.WriteLine("Operation was cancelled");
}

// Timeout shortcut (C# 13+)
await ProcessItemsAsync(items, CancellationToken.None)
    .WaitAsync(TimeSpan.FromSeconds(30));
```

### Common Mistakes
1. **Not passing CancellationToken** — Operations can't be cancelled, causing resource leaks.
2. **Not calling `ThrowIfCancellationRequested`** — Without checks, cancellation has no effect.
3. **Disposing CancellationTokenSource early** — Accessing `Token` after `Dispose` throws.
4. **Swallowing OperationCanceledException** — Should propagate to let caller handle cancellation.

### Explain Like I'm 7
A CancellationToken is like a referee with a whistle. You check if the referee has blown the whistle (IsCancellationRequested). If yes, you stop what you're doing. The referee doesn't tackle you — you have to stop yourself.

</details>

---

<details>
<summary>

## Q47: Task.WhenAll vs Task.WhenAny

</summary>

### Short Interview Answer
`Task.WhenAll` returns a task that completes when ALL provided tasks complete. `Task.WhenAny` returns a task that completes when ANY one task completes. `WhenAll` is used for parallel fan-out operations where you need all results. `WhenAny` is used for race conditions, timeouts, or first-response scenarios. Both are non-blocking — they return a task that can be awaited.

### Detailed Explanation
- **WhenAll**: Aggregates multiple tasks. Returns all results. If any task faults, the returned task faults with an `AggregateException`. If cancelled, the returned task is cancelled.
- **WhenAny**: Returns a `Task<Task>` that completes with the first task to finish. Use `await Task.WhenAny(tasks)` to get the first completed task.
- **When to use WhenAll**: Parallel API calls, batch processing, rendering multiple components.
- **When to use WhenAny**: Timeout patterns (`Task.WhenAny(work, delay)`), load balancing (first response wins), progressive loading.

### C# Example
```csharp
// WhenAll — parallel execution
var task1 = FetchDataAsync("url1");
var task2 = FetchDataAsync("url2");
var task3 = FetchDataAsync("url3");
string[] results = await Task.WhenAll(task1, task2, task3);

// WhenAny — first response wins
var workTask = ProcessAsync();
var timeoutTask = Task.Delay(5000);
Task firstCompleted = await Task.WhenAny(workTask, timeoutTask);

if (firstCompleted == timeoutTask)
    Console.WriteLine("Timed out");
else
    Console.WriteLine("Completed");

// WhenAny with result
var resultTask = await Task.WhenAny(
    SearchAsync("Bing"),
    SearchAsync("Google"),
    SearchAsync("DuckDuckGo")
);
Console.WriteLine($"First result: {await resultTask}");
```

### Common Mistakes
1. **Not awaiting Task.WhenAll** — `Task.WhenAll(tasks);` without await creates fire-and-forget tasks.
2. **Exception handling** — WhenAll creates `AggregateException`. Use `try/catch` or iterate `task.Exception`.
3. **Memory with huge arrays** — Passing an array of millions of tasks causes overhead. Process in batches.
4. **With cancellation** — WhenAny with timeout task doesn't cancel the work task. Must use CancellationToken.

### Explain Like I'm 7
`WhenAll` is like waiting for all your friends to arrive before starting the movie. `WhenAny` is like the first person to finish the race wins — you don't wait for everyone.

</details>

---

<details>
<summary>

## Q48: Async void vs Async Task

</summary>

### Short Interview Answer
`async void` methods cannot be awaited and exceptions crash the process (they fire on the `SynchronizationContext`'s `UnhandledException` event). `async Task` methods can be awaited and exceptions are captured in the returned task. Only use `async void` for event handlers (where the signature is required). All other async methods should return `Task` or `Task<T>`.

### Detailed Explanation
- **Async void**: Fire-and-forget. Caller cannot know when the method completes. Exceptions are rethrown on the captured `SynchronizationContext`, often crashing the app.
- **Async Task**: Awaitable. Caller can await, check status, handle exceptions. Exceptions are stored in the Task.
- **When to use async void**: ONLY for event handlers (UI events like `Button.Click`, `Page.Load`).
- **When NOT to use async void**: Anywhere else. Specifically dangerous: constructors, property getters, `Main` (use `async Task Main` in C# 7.1+).

### C# Example
```csharp
// CORRECT: async void for event handlers only
public async void Button_Click(object sender, EventArgs e)
{
    try
    {
        var data = await FetchDataAsync();
        textBox.Text = data;
    }
    catch (Exception ex)
    {
        // Handle exception here — otherwise it crashes!
    }
}

// CORRECT: async Task for all other methods
public async Task<string> GetDataAsync()
{
    return await FetchFromDbAsync();
}

// DANGEROUS: async void in library code
public async void InitializeAsync() // ❌ Cannot be awaited, exceptions crash
{
    await LoadDataAsync();
}
```

### FAANG-Level Deep Dive
**Async void exception propagation**: When an `async void` method throws, the exception is posted to the captured `SynchronizationContext` (or `TaskScheduler`). In UI apps, this triggers `Application.UnhandledException`. In ASP.NET, it crashes the process. FAANG: *"How does the runtime handle `async void` exceptions differently from `async Task`?"* Answer: `async Task` stores exceptions in the `Task` object. `async void` has no task — exceptions are raised directly on the synchronization context.

### Explain Like I'm 7
`async void` is like throwing a paper airplane and not caring where it lands — you can't catch it. `async Task` is like throwing a boomerang — it comes back so you can catch it. If a paper airplane hits someone, bad things happen and you can't stop it.

</details>

---

<details>
<summary>

## Q49: IAsyncEnumerable

</summary>

### Short Interview Answer
`IAsyncEnumerable<T>` (C# 8+) enables asynchronous streaming — yielding elements one at a time asynchronously. It's the async version of `IEnumerable<T>`. Use `await foreach` to consume it. It's ideal for paginated API calls, streaming data, or processing data as it arrives asynchronously without loading everything into memory.

### Detailed Explanation
- **What it is**: An asynchronous enumerable pattern. Producer yields items with `await Task.Delay` or async I/O between items. Consumer uses `await foreach`.
- **Why it exists**: Traditional `IEnumerable<T>` blocks during enumeration. `IAsyncEnumerable<T>` allows the producer to perform async operations between yields without blocking a thread.
- **When to use it**: Paginated API responses, streaming logs, reading large files line by line with async I/O, real-time data feeds.
- **When NOT to use it**: When data is already in memory (use `IEnumerable<T>`). When each element doesn't require async operations.

### C# Example
```csharp
// Producer
public async IAsyncEnumerable<string> GetResultsAsync()
{
    int page = 0;
    while (true)
    {
        var results = await FetchPageAsync(page++);
        if (results.Count == 0) yield break;

        foreach (var result in results)
            yield return result;
    }
}

// Consumer
await foreach (var item in GetResultsAsync())
{
    Console.WriteLine(item);
}

// With cancellation
await foreach (var item in GetResultsAsync().WithCancellation(ct))
{
    Console.WriteLine(item);
}
```

### Common Mistakes
1. **Not using `ConfigureAwait(false)`** — Async streams also capture context. Configure awaits inside the method.
2. **Blocking on async streams** — `.ToList()` or `for` loop blocks. Use `await foreach`.
3. **Multiple enumeration** — Like `IEnumerable<T>`, each `await foreach` creates a new enumerator.

### FAANG-Level Deep Dive
**IAsyncEnumerable implementation**: The compiler generates an async state machine that is also an async iterator. It uses `IAsyncEnumerator<T>` which has `MoveNextAsync()` returning `ValueTask<bool>`. FAANG: *"How does `IAsyncEnumerable<T>` differ from `IObservable<T>` (Reactive Extensions)? When would you choose each?"* Answer: `IAsyncEnumerable` is pull-based (consumer requests next item). `IObservable` is push-based (producer pushes items). Choose pull when consumer controls pace; choose push for event streams.

### Explain Like I'm 7
`IAsyncEnumerable` is like a water tap that gives you one glass at a time. You wait for each glass to fill (await), drink it, then ask for the next glass. The tap doesn't pour all the water at once.

</details>

---

<details>
<summary>

## Q50: SynchronizationContext and ExecutionContext

</summary>

### Short Interview Answer
`SynchronizationContext` represents an execution environment (UI thread, ASP.NET request context) and controls where code runs after an `await`. `ExecutionContext` captures security context, logical call context, and other ambient data that should flow across async operations automatically. `ExecutionContext` flows by default with `Task` (even with `ConfigureAwait(false)`); `SynchronizationContext` only flows when `ConfigureAwait(true)` (default).

### Detailed Explanation
- **SynchronizationContext**: Provides `Post` (async), `Send` (sync) delegates. UI apps have `WindowsFormsSynchronizationContext` or `DispatcherSynchronizationContext`. ASP.NET Classic has `AspNetSynchronizationContext`.
- **ExecutionContext**: Includes `SecurityContext`, `CallContext`, `CurrentPrincipal`, etc. Flows automatically through async methods via `AsyncLocal<T>`.
- **When to use SynchronizationContext**: UI apps need it for thread-affine operations. Library code should avoid capturing it.
- **When NOT to use SynchronizationContext**: In ASP.NET Core (no SynchronizationContext by default). In library code (use `ConfigureAwait(false)`).

### C# Example
```csharp
// ExecutionContext flows automatically — no ConfigureAwait needed
AsyncLocal<int> ambient = new();
ambient.Value = 42;

await Task.Run(async () =>
{
    Console.WriteLine(ambient.Value); // 42 — flows even without ConfigureAwait
});

// SynchronizationContext — captured by default, not with ConfigureAwait(false)
await SomeMethodAsync(); // Captures SynchronizationContext
await SomeMethodAsync().ConfigureAwait(false); // Does not capture
```

### FAANG-Level Deep Dive
**ExecutionContext vs SynchronizationContext flow**: FAANG: *"Does `ConfigureAwait(false)` prevent `ExecutionContext` flow? How does `AsyncLocal<T>` work with threads?"* Answer: `ConfigureAwait(false)` suppresses `SynchronizationContext` capture but does NOT suppress `ExecutionContext` flow. `ExecutionContext` always flows across awaits. `AsyncLocal<T>` uses `ExecutionContext` under the hood — it notifies when the context changes, enabling per-logical-operation state.

### Explain Like I'm 7
`SynchronizationContext` is like a rule saying "do this work in the kitchen." `ExecutionContext` is like a name tag you always wear — no matter which room you go to, people know your name and what you're allowed to do.

</details>

---
# Section 6: Memory Management & Garbage Collection

---

<details>
<summary>

## Q51: Garbage Collection Generations

</summary>

### Short Interview Answer
The .NET GC divides the managed heap into 3 generations. Gen 0 contains short-lived objects (allocated most recently). Gen 1 acts as a buffer between Gen 0 and Gen 2. Gen 2 contains long-lived objects. Collections are promoted: surviving Gen 0 objects move to Gen 1, surviving Gen 1 objects move to Gen 2. Gen 0 collections are fast and frequent; Gen 2 collections are expensive and infrequent. The GC collects a generation when it runs out of memory in that generation's budget.

### Detailed Explanation
- **Gen 0**: Small objects (< 85 KB). Collected most frequently (when budget exhausted). Collects short-lived objects (locals, temporary objects).
- **Gen 1**: Middle ground. Objects that survived Gen 0 collection. Acts as a buffer to reduce Gen 2 collections.
- **Gen 2**: Long-lived objects (static data, cached objects, singletons, large objects in LOH). Collected rarely.
- **Large Object Heap (LOH)**: Objects >= 85 KB. Treated as Gen 2 for collection purposes. Collected only during Gen 2 collections.

### C# Example
```csharp
// Gen 0 — short-lived
void Process()
{
    var temp = new byte[1024]; // Gen 0 — collected quickly
    temp[0] = 1;
}

// Gen 2 — long-lived
static readonly byte[] _cache = new byte[1024]; // Survives to Gen 2

// Object graph
class Order
{
    public List<OrderLine> Lines { get; set; }
}
// Order → Gen 0/1/2 depending on survival
// List → separate object
// each OrderLine → separate objects
// Root: stack variable or static → keeps entire graph alive
```

### Common Mistakes
1. **Object pinning** — Using `fixed` or `GCHandle.Alloc(obj, GCHandleType.Pinned)` prevents GC from compacting objects, fragmenting the heap.
2. **Gen 2 fragmentation** — Frequent large object allocations and collections fragment the LOH.
3. **Premature promotion** — Object that survives Gen 0 goes to Gen 1; if it's only temporarily needed, it stays in Gen 1 until next Gen 1 collection.

### FAANG-Level Deep Dive
**GC triggering and budget tuning**: Gen 0 budget is ~256 KB-4 MB per CPU core (workstation GC) or ~4-8 MB (server GC). FAANG: *"How does the GC calculate when to trigger a collection? What is the relationship between allocation rate and collection frequency?"* Answer: The GC tracks allocation budget per generation. When allocation exceeds the budget, a collection is triggered. Higher allocation rate = more frequent Gen 0 collections. Server GC has larger budgets and runs collections less frequently but with more impact.

### Explain Like I'm 7
The GC is like a trash collector with three buckets. Gen 0 is the kitchen trash — you empty it every day (short-lived). Gen 1 is the office trash — every few days. Gen 2 is the garage — you clean it rarely. If the kitchen trash survives a pickup, it moves to the office (promoted).

</details>

---

<details>
<summary>

## Q52: GC Modes (Workstation vs Server)

</summary>

### Short Interview Answer
Workstation GC is optimized for client applications with low latency requirements. Each thread has its own heap, collections happen on the allocating thread. Server GC is optimized for server applications with high throughput requirements. It creates one heap per CPU core, collections run on multiple threads (one per core), and all threads are paused during collection. Configured via runtime options in `.csproj` or `runtimeconfig.json`.

### Detailed Explanation
- **Workstation GC**: Single heap. Non-concurrent (brief pauses) or concurrent (background GC) modes. Best for UI apps where responsiveness matters.
- **Server GC**: Multiple heaps (one per logical CPU). Each heap has its own allocation thread. Collections are parallel and complete faster but cause all threads to pause simultaneously. Higher throughput, larger pause times.
- **When to use Workstation**: Client apps (WPF, WinForms), services with low concurrency.
- **When to use Server**: ASP.NET Core apps, high-throughput services, apps on multi-core machines.
- **Configuration**: `<PropertyGroup><ServerGarbageCollection>true</ServerGarbageCollection></PropertyGroup>`

### C# Example
```csharp
// runtimeconfig.json
{
  "runtimeOptions": {
    "configProperties": {
      "System.GC.Server": true,
      "System.GC.Concurrent": true,
      "System.GC.HeapCount": 4
    }
  }
}
```

### Common Mistakes
1. **Server GC on single-core machine** — Defaults to Workstation (or poorly performing). Server GC requires multi-core.
2. **Not measuring** — GC mode choice should be based on profiling, not assumption.
3. **High memory usage with Server GC** — Each heap has its own allocation budget — total memory can be higher.

### Explain Like I'm 7
Workstation GC is like one person cleaning a small apartment — they work alone but don't interrupt others much. Server GC is like a team cleaning a big office building — everyone cleans at the same time, it's faster, but everyone must stop working while cleaning happens.

</details>

---

<details>
<summary>

## Q53: IDisposable and Dispose Pattern

</summary>

### Short Interview Answer
`IDisposable` is an interface for releasing unmanaged resources (file handles, sockets, database connections). The `Dispose()` method should be called when the object is no longer needed. The `using` statement guarantees `Dispose()` is called even if exceptions occur. The full dispose pattern includes a `protected virtual void Dispose(bool disposing)` method for inheritance scenarios where both managed and unmanaged resources need cleanup.

### Detailed Explanation
- **What it is**: `IDisposable` defines a single method `Dispose()`. Types that own unmanaged resources should implement it.
- **Why it exists**: The GC cannot release unmanaged resources (OS handles, native memory). `Dispose()` provides deterministic cleanup.
- **When to use it**: When your type directly owns unmanaged resources (file streams, network sockets, database connections, `SafeHandle` wrappers).
- **When NOT to use it**: If your type only owns managed resources (other `IDisposable` objects), you can still implement `Dispose` to call their `Dispose`. Consider `SafeHandle` for wrapping native handles.

### C# Example
```csharp
// Standard dispose pattern
public class ResourceHolder : IDisposable
{
    private IntPtr _nativeResource; // Unmanaged
    private FileStream? _managedResource; // Managed disposable

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            // Free managed resources
            _managedResource?.Dispose();
        }
        // Free unmanaged resources
        if (_nativeResource != IntPtr.Zero)
        {
            Marshal.FreeHGlobal(_nativeResource);
            _nativeResource = IntPtr.Zero;
        }
    }

    ~ResourceHolder() => Dispose(false);
}

// Using statement
using var reader = new StreamReader("file.txt");
string content = reader.ReadToEnd();
// Dispose called automatically at end of scope
```

### Common Mistakes
1. **Not calling `GC.SuppressFinalize`** — Forces the object through the finalization queue unnecessarily.
2. **Not implementing the full pattern for unmanaged resources** — Without a finalizer, unmanaged resources leak.
3. **Throwing from Dispose** — `Dispose()` should never throw. Use `try-catch` internally.
4. **Double dispose** — Protect against multiple calls with a `_disposed` flag.
5. **Forgetting to make Dispose virtual** — Derived classes cannot clean up properly.

### Explain Like I'm 7
`IDisposable` is like returning a library book. The GC would eventually clean up (like the library throwing away unreturned books), but it's better to return the book explicitly so others can use it. The `using` statement is like a librarian who makes sure the book gets returned even if you leave in a hurry.

</details>

---

<details>
<summary>

## Q54: Finalizers vs IDisposable

</summary>

### Short Interview Answer
Finalizers (destructors `~ClassName()`) are called by the GC before reclaiming memory. They are non-deterministic — you don't know when they'll run. `IDisposable` provides deterministic cleanup. Finalizers should only be a backup for unmanaged resources — they're expensive because the GC promotes the object to Gen 1 and uses the finalizer thread. The proper pattern is `IDisposable` + finalizer for unmanaged resources, with `GC.SuppressFinalize()` to skip the finalizer when `Dispose()` is called.

### Detailed Explanation
- **Finalizers**: Called by GC before memory reclamation. Object survives collection (promoted to Gen 1). Placed on finalization queue. Runs on dedicated finalizer thread.
- **IDisposable.Dispose**: Called explicitly by user code or `using` statement. Deterministic.
- **Performance**: Finalizable objects take longer to collect. They survive Gen 0 → Gen 1, then are finalized, then collected again.
- **When to use finalizer**: ONLY when your type directly owns unmanaged resources. Even then, prefer `SafeHandle`.

### C# Example
```csharp
// BAD: Only finalizer — non-deterministic cleanup
public class BadResource
{
    private IntPtr _handle;
    ~BadResource() { Marshal.FreeHGlobal(_handle); }
}

// GOOD: IDisposable + finalizer
public class GoodResource : IDisposable
{
    private IntPtr _handle;
    private bool _disposed;

    public void Dispose()
    {
        if (!_disposed)
        {
            Marshal.FreeHGlobal(_handle);
            _disposed = true;
        }
        GC.SuppressFinalize(this); // Skip finalizer
    }

    ~GoodResource() => Dispose(); // Backup cleanup
}
```

### Common Mistakes
1. **Empty finalizer** — Adds overhead without benefit. Remove it.
2. **Finalizer not calling `GC.SuppressFinalize`** — Object still goes through finalization even after explicit `Dispose`.
3. **Accessing managed objects in finalizer** — They may already be collected. Only free unmanaged resources.
4. **Not implementing IDisposable when using finalizer** — Users can't deterministically clean up.

### FAANG-Level Deep Dive
**CriticalFinalizerObject and CERs**: `CriticalFinalizerObject` ensures finalizers run even during `AppDomain` unload. Constrained Execution Regions (CERs) prepare code for reliable execution during finalization. FAANG: *"What is `SafeHandle` and how does it improve reliability over IntPtr?"* Answer: `SafeHandle` is a `CriticalFinalizerObject` that guarantees cleanup. It prevents handle leaks even during asynchronous exceptions (ThreadAbortException, OutOfMemoryException).

### Explain Like I'm 7
A finalizer is like a cleaning service that comes when no one's home — you never know exactly when. `IDisposable` is like cleaning up immediately after making a mess. The finalizer is a backup in case you forget.

</details>

---

<details>
<summary>

## Q55: `using` Statement and Declarations

</summary>

### Short Interview Answer
The `using` statement ensures `IDisposable.Dispose()` is called when the block exits, even if exceptions occur. C# 8 introduced `using` declarations which automatically dispose at the end of the enclosing scope. The compiler transforms `using` into a `try-finally` block. `using` can also be used with `IAsyncDisposable` for async cleanup.

### Detailed Explanation
- **Using statement**: `using (var resource = new Resource()) { ... }` — variable scoped to the block.
- **Using declaration**: `using var resource = new Resource();` — variable disposed at end of enclosing scope.
- **Async using**: `await using var resource = new AsyncResource();` — uses `IAsyncDisposable.DisposeAsync()`.
- **Why it exists**: Guarantees deterministic cleanup of resources. Prevents resource leaks.
- **When to use it**: Always when dealing with `IDisposable` objects.

### C# Example
```csharp
// Using statement — scoped to block
using (var file = File.OpenRead("data.txt"))
using (var reader = new StreamReader(file))
{
    return reader.ReadToEnd();
}

// Using declaration (C# 8+) — scoped to method
{
    using var file = File.OpenRead("data.txt");
    using var reader = new StreamReader(file);
    return reader.ReadToEnd();
} // Disposed here

// Async using
await using var db = new DatabaseConnection();
await db.OpenAsync();

// Multiple disposables
using var stream = new MemoryStream();
using var writer = new StreamWriter(stream);
writer.Write("data");
```

### Common Mistakes
1. **Returning a disposable from a using block** — Disposed before caller can use it. Return the value, not the resource.
2. **Using with WCF proxies** — WCF proxy's `Dispose` can throw. Use `Close()` and abort pattern instead.
3. **Forgetting `await using`** — Using `using` with `IAsyncDisposable` calls `Dispose()` synchronously, not `DisposeAsync()`.

### Explain Like I'm 7
A `using` statement is like having a babysitter who makes sure you clean up your toys before going to bed. Even if you had a terrible day and cried, the sitter still makes you clean up before sleeping.

</details>

---

<details>
<summary>

## Q56: Weak References

</summary>

### Short Interview Answer
`WeakReference` allows holding a reference to an object without preventing garbage collection. The object can be collected if no strong references exist. `WeakReference.TryGetTarget()` checks if the object is still alive. Used for caches that should not keep objects alive, large object caches that can be regenerated, and preventing memory leaks in event-like patterns.

### Detailed Explanation
- **What it is**: A reference that the GC ignores when determining object eligibility for collection. If no strong references exist, the object can be collected.
- **Why it exists**: Allows caching large objects that can be recreated, preventing memory leaks when listeners hold references to publishers.
- **When to use it**: Memory-sensitive caches, object pooling, breaking circular references that prevent collection.
- **When NOT to use it**: For small objects (overhead outweighs benefit). When the object is always needed (strong reference is simpler).

### C# Example
```csharp
// Weak reference cache
public class ImageCache
{
    private readonly Dictionary<string, WeakReference<Image>> _cache = new();

    public Image GetImage(string url)
    {
        if (_cache.TryGetValue(url, out var wr) && wr.TryGetTarget(out var image))
            return image;

        var newImage = LoadImage(url);
        _cache[url] = new WeakReference<Image>(newImage);
        return newImage;
    }
}

// Weak event pattern
public class WeakEventListener
{
    private readonly WeakReference<EventHandler> _weakHandler;

    public void Subscribe(EventSource source)
    {
        EventHandler handler = OnEvent;
        _weakHandler = new WeakReference<EventHandler>(handler);
        source.Event += handler; // But this still holds strong ref!
    }
}
```

### Common Mistakes
1. **Using WeakReference for short-lived objects** — Overhead of creating WeakReference and checking liveness.
2. **Target collected before use** — Always check `TryGetTarget` — the object may be collected at any time.
3. **WeakReference to WeakReference** — Doesn't help. The inner WeakReference is still strongly rooted.
4. **Using in hot paths** — `WeakReference<T>.TryGetTarget` has overhead compared to strong references.

### FAANG-Level Deep Dive
**WeakReference and GC handle tables**: The GC maintains handle tables for weak references. When a Gen 2 collection occurs, the GC scans the weak handle table and clears entries where the target was collected. FAANG: *"How does `ConditionalWeakTable<TKey, TValue>` differ from a `Dictionary<WeakReference<TKey>, TValue>`?"* Answer: `ConditionalWeakTable` attaches data to objects without preventing collection, and automatically removes entries when keys are collected. It uses runtime GC notifications — no polling needed. It's ideal for attaching metadata to objects you don't control.

### Explain Like I'm 7
A weak reference is like writing a friend's phone number on a sticky note. If you lose the sticky note (no strong reference), the info is gone. The phone number doesn't keep the paper alive. A strong reference is like memorizing the number — as long as you remember it, it's there.

</details>
<details>
<summary>

## Q57: Large Object Heap (LOH)

</summary>

### Short Interview Answer
The Large Object Heap (LOH) stores objects >= 85,000 bytes (85 KB). Unlike the Small Object Heap (SOH), LOH is not compacted by default — allocations are sequential and freed memory creates gaps (fragmentation). LOH objects are treated as Gen 2 — collected only during Gen 2 collections. LOH fragmentation can cause `OutOfMemoryException` even when sufficient free memory exists in fragmented form.

### Detailed Explanation
- **Threshold**: 85,000 bytes (including object overhead). Arrays of doubles >= 5,313 elements, byte arrays >= 85,000.
- **Behavior**: LOH is not compacted by default (compaction is expensive for large objects). Free space is reused for new allocations of similar size.
- **Fragmentation**: Occurs when objects of different sizes are allocated and freed. Large gaps between objects can't be used for new allocations.
- **.NET 5+ improvements**: `GCSettings.LargeObjectHeapCompactionMode` enables LOH compaction. Use `System.GC.Collect()` with this mode in maintenance windows.

### C# Example
```csharp
// LOH allocation (>= 85 KB)
byte[] largeArray = new byte[85_000]; // Goes to LOH
byte[] smallArray = new byte[10_000]; // Goes to Gen 0

// Check LOH status
GCSettings.LargeObjectHeapCompactionMode = GCLargeObjectHeapCompactionMode.CompactOnce;
GC.Collect(2, GCCollectionMode.Forced); // Trigger Gen 2 + LOH collection

// Avoid LOH fragmentation
// BAD: Mixed sizes fragment LOH
for (int i = 0; i < 100; i++)
    arrays.Add(new byte[85_000 + i * 1000]);

// GOOD: Use ArrayPool for large buffers
byte[] buffer = ArrayPool<byte>.Shared.Rent(100_000);
try { /* use buffer */ }
finally { ArrayPool<byte>.Shared.Return(buffer); }
```

### Common Mistakes
1. **String concatenation producing large strings** — Strings >= 85 KB go to LOH. Use StringBuilder.
2. **Large arrays of structs** — `new BigStruct[2000]` where struct is 50 bytes = 100,000 bytes → LOH.
3. **Not using ArrayPool** — Frequent large allocations cause Gen 2 collections and LOH fragmentation.
4. **LOH compaction performance** — Compacting LOH is expensive (moves megabytes of memory). Only use when fragmentation is severe.

### Explain Like I'm 7
The LOH is like a warehouse for big items. Small items go in regular bins (Gen 0-2). Big items go to the warehouse. The warehouse doesn't reorganize shelves when items are removed — empty spots just stay empty. Over time, there's space but it's in the wrong places.

</details>

---

<details>
<summary>

## Q58: Stack vs Heap Allocation

</summary>

### Short Interview Answer
The stack is a memory region for local variables and method call frames. It's fast (just move stack pointer), thread-local, and automatically cleaned on method return. The heap stores objects that need to outlive the method call. It requires GC for cleanup. Value types are typically stack-allocated (or inline in heap objects). Reference types are always heap-allocated. `Span<T>` enables stack-like allocation for heap data.

### Detailed Explanation
- **Stack**: LIFO structure. Each thread has its own stack (default 1 MB). Local value types, method parameters, return addresses. Ultra-fast allocation (decrement stack pointer).
- **Heap**: Managed heap (Gen 0/1/2, LOH). Reference type instances. Requires GC for cleanup. Allocation is pointer bumping (Gen 0).
- **Stack vs Heap**: Stack is faster but limited. Heap is larger but requires GC.
- **C# improvements**: `ref struct`, `Span<T>`, `stackalloc` enable more stack usage for performance.

### C# Example
```csharp
void Demo()
{
    int x = 10;                    // Stack
    string s = "hello";            // s: stack (reference), "hello": heap
    byte[] arr = new byte[100];    // arr: stack (reference), array: heap
    Span<byte> span = stackalloc byte[100]; // Stack allocation!
    // span is on stack — no GC pressure, very fast
}
```

### Common Mistakes
1. **Stack overflow** — Deep recursion or large stack allocation (> 1 MB). Use heap for large data.
2. **Returning stackalloc** — `stackalloc` data is invalid after method returns. Use `Span<T>` as return type only if it's `ref struct` and not captured.
3. **Async and stack** — Async methods can't use `ref struct` because the state machine is on the heap.

### FAANG-Level Deep Dive
**Stack allocation with `stackalloc` and `Span<T>`**: `stackalloc byte[1024]` allocates on the stack. Returns a `Span<byte>` that enforces stack-only semantics at compile time. FAANG: *"Design a method that processes a small, variable-length input without heap allocation. How does `stackalloc` + `Span<T>` achieve this?"* Answer: Check size threshold; use `stackalloc` for small sizes, array pool for medium, heap for large.

### Explain Like I'm 7
Stack is like a stack of sticky notes — you put a new note on top, you remove from the top. Very fast. Heap is like a big storage room — you put things anywhere and a janitor (GC) cleans up later.

</details>

---

# Section 7: Reflection & Attributes

---

<details>
<summary>

## Q59: Reflection Overview

</summary>

### Short Interview Answer
Reflection provides the ability to inspect and invoke types, methods, properties, and fields at runtime using `System.Type` and `System.Reflection` APIs. It enables late binding, dynamic type creation, member invocation, and metadata discovery. While powerful, reflection has significant performance costs (method invocation is 10-100x slower than direct calls) and bypasses compile-time safety.

### Detailed Explanation
- **What it is**: APIs to examine assembly metadata and invoke members dynamically. `typeof()` and `.GetType()` are entry points.
- **Why it exists**: Enables scenarios that require runtime type discovery — dependency injection containers, serialization, ORMs, plugin systems, unit testing frameworks.
- **When to use it**: Framework/library code that needs to work with unknown types. Attribute-based systems. Late binding to assemblies.
- **When NOT to use it**: Application code where compile-time types are known. Hot paths (use source generators instead). Replaceable by generics, interfaces, or `dynamic`.

### C# Example
```csharp
// Type discovery
Type type = typeof(MyClass);
PropertyInfo[] properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
MethodInfo[] methods = type.GetMethods();
ConstructorInfo ctor = type.GetConstructor(Type.EmptyTypes);

// Late binding
object instance = Activator.CreateInstance(type);
MethodInfo method = type.GetMethod("DoWork");
method.Invoke(instance, new object[] { arg1, arg2 });

// Assembly loading
Assembly assembly = Assembly.LoadFrom("plugin.dll");
Type pluginType = assembly.GetType("Plugin.MyPlugin");
```

### Common Mistakes
1. **Performance in hot paths** — Reflection in loops is extremely slow. Cache `MethodInfo`, `PropertyInfo`.
2. **Bypassing encapsulation** — Reflection can access private members, breaking encapsulation and invariants.
3. **Security** — Partially trusted code may not have reflection permissions.
4. **Version brittleness** — String-based member names break with rename refactoring.

### FAANG-Level Deep Dive
**Reflection vs source generators**: Source generators (C# 9+) generate compile-time code, eliminating reflection costs. FAANG: *"Compare reflection-based serialization vs source-generated serialization (like System.Text.Json source generator). What are the startup time, throughput, and memory differences?"* Source generators: compile-time, no runtime discovery, can inline code. Reflection: runtime, slower startup, more memory, but no rebuild needed for new types.

### Explain Like I'm 7
Reflection is like having x-ray glasses that let you see inside a wrapped gift. You can see what's inside (type), how big it is (properties), what buttons it has (methods), and even use it without opening the wrapping.

</details>

---

<details>
<summary>

## Q60: Custom Attributes

</summary>

### Short Interview Answer
Custom attributes are classes inheriting from `System.Attribute`. They attach metadata to code elements (classes, methods, properties) that can be retrieved via reflection at runtime. Attributes can have positional and named parameters. They're used for validation (`[Required]`), serialization (`[JsonPropertyName]`), documentation (`[Obsolete]`), and AOP frameworks.

### Detailed Explanation
- **What it is**: `[AttributeUsage]` specifies valid targets. Convention: class name ends with "Attribute" (suffix optional when using).
- **Why it exists**: Provides declarative metadata that can drive behavior without modifying the code's logic.
- **When to use it**: Validation attributes, mapping/configuration, marking methods for special handling, documentation.
- **When NOT to use it**: For behavior that could be expressed with interfaces or inheritance. When the attribute would need to reference external data.

### C# Example
```csharp
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
public class RangeAttribute : Attribute
{
    public int Min { get; }
    public int Max { get; }
    public string? ErrorMessage { get; set; }

    public RangeAttribute(int min, int max) => (Min, Max) = (min, max);
}

// Usage
public class User
{
    [Range(1, 150, ErrorMessage = "Age must be between 1 and 150")]
    public int Age { get; set; }
}

// Reading attributes
public static bool Validate(object obj)
{
    var properties = obj.GetType().GetProperties();
    foreach (var prop in properties)
    {
        var rangeAttr = prop.GetCustomAttribute<RangeAttribute>();
        if (rangeAttr != null)
        {
            int value = (int)prop.GetValue(obj)!;
            if (value < rangeAttr.Min || value > rangeAttr.Max)
                return false;
        }
    }
    return true;
}
```

### Common Mistakes
1. **Not marking with `[AttributeUsage]`** — Attribute can be placed anywhere. Always specify valid targets.
2. **Not caching reflection results** — `GetCustomAttribute` is slow. Cache in a dictionary or use source generators.
3. **Overcomplicating with attributes** — If the attribute drives complex behavior, consider a configuration approach.
4. **Attribute argument restrictions** — Only primitive types, strings, `Type`, enums, and 1D arrays of these types are allowed as attribute arguments.

### Explain Like I'm 7
Custom attributes are like sticky notes you put on your notebook. The sticky note says "this page is important" or "this needs review." Later, someone can look at all the sticky notes and know what to do with each page.

</details>

---

<details>
<summary>

## Q61: Late Binding and Dynamic Invocation

</summary>

### Short Interview Answer
Late binding means resolving type members at runtime rather than compile time. C# supports late binding through reflection (`MethodInfo.Invoke`) and the `dynamic` keyword (which uses the DLR — Dynamic Language Runtime). Late binding enables calling members on types unknown at compile time, COM interop, and dynamic language interop. `dynamic` is simpler but slightly slower and bypasses IntelliSense.

### Detailed Explanation
- **Reflection late binding**: `type.GetMethod("Method").Invoke(obj, args)` — fully runtime.
- **dynamic**: Uses `System.Runtime.CompilerServices.CallSiteBinder`. Compiled to callsite caching — subsequent calls to the same member are optimized.
- **When to use reflection**: When type is known by name/assembly but not at compile time. Plugin systems.
- **When to use dynamic**: COM interop, when working with dynamic languages (Python via IronPython), JSON deserialization.
- **When NOT to use**: For known types — lose compile-time checking and performance.

### C# Example
```csharp
// Reflection late binding
object obj = Activator.CreateInstance(typeof(MyClass));
MethodInfo method = typeof(MyClass).GetMethod("Execute");
method.Invoke(obj, new object[] { "param" });

// dynamic
dynamic dyn = new MyClass();
dyn.Execute("param"); // Resolved at runtime, no compile-time check

// COM interop — classic use case
dynamic excel = Activator.CreateInstance(Type.GetTypeFromProgID("Excel.Application"));
excel.Visible = true; // dynamic makes COM interop readable
```

### Common Mistakes
1. **Performance trap** — `method.Invoke` is ~100x slower than direct call. `dynamic` caching helps after first call.
2. **Runtime exceptions** — Misspelled method names only caught at runtime. No compile-time checking.
3. **Security implications** — Can invoke private members, bypass type system.
4. **Dynamic with extension methods** — `dynamic` doesn't resolve extension methods at runtime.

### Explain Like I'm 7
Late binding is like calling "Bob" at a party without knowing which Bob you mean or if Bob is even there. At compile time, you don't know. At runtime, you find out if Bob exists and can talk to him. If not, you get a runtime error.

</details>

---

<details>
<summary>

## Q62: Reflection Performance and Caching

</summary>

### Short Interview Answer
Reflection operations are significantly slower than direct code — typically 10-100x for method invocation and 100-1000x for `Activator.CreateInstance`. Performance degradation comes from runtime type checking, boxing, and the inability to inline. Mitigation strategies include: caching `MethodInfo`/`PropertyInfo`, using `Delegate.CreateDelegate` to create typed delegates from `MethodInfo`, using `Reflection.Emit` or source generators, and minimizing calls in hot paths.

### Detailed Explanation
- **Why it's slow**: Type checking at runtime, boxing value types in `object[]`, allocating arrays for parameters, virtual dispatch through reflection APIs, no JIT inlining.
- **Caching strategy**: Never call `GetMethod` or `GetProperty` in loops. Cache once, reuse. Use `ConcurrentDictionary` for type-based caching.
- **Delegate creation**: `Delegate.CreateDelegate(typeof(Func<T, TResult>), methodInfo)` creates a strongly typed delegate — near-native performance.
- **Expression trees**: Build `Expression<Func<T, TResult>>` and compile — fast dynamic invocation.

### C# Example
```csharp
// BAD: Reflection in loop — each iteration does full reflection
for (int i = 0; i < 10000; i++)
{
    var prop = obj.GetType().GetProperty("Name");
    string name = (string)prop.GetValue(obj);
}

// GOOD: Cache the PropertyInfo
var cachedProp = typeof(MyClass).GetProperty("Name");
for (int i = 0; i < 10000; i++)
{
    string name = (string)cachedProp.GetValue(obj);
}

// BEST: Create delegate
var getter = (Func<MyClass, string>)Delegate.CreateDelegate(
    typeof(Func<MyClass, string>),
    cachedProp.GetMethod);
for (int i = 0; i < 10000; i++)
{
    string name = getter(obj); // Near-native performance
}
```

### Common Mistakes
1. **Not caching — doing full reflection in loops** — Can cause 100x slowdown.
2. **Using `Activator.CreateInstance` in hot paths** — Use compiled expression or factory pattern.
3. **Overusing Delegate.CreateDelegate** — Delegate dispatch is fast but not as fast as direct calls.
4. **Not measuring** — Profile before optimizing. Reflection in non-critical paths may be fine.

### Explain Like I'm 7
Reflection is like looking up a phone number in a big book every time you want to call someone. Caching is like saving the number in your phone's contacts — lookup once, call many times. Creating a delegate is like programming a speed dial button.

</details>

---

<details>
<summary>

## Q63: ReflectionOnly Loading

</summary>

### Short Interview Answer
`Assembly.ReflectionOnlyLoad` loads an assembly for inspection only — no code execution, no type instantiation. Useful for analyzing assemblies without executing potentially untrusted code. However, .NET Core/.NET 5+ use `MetadataLoadContext` instead of `ReflectionOnlyLoad`. The loaded assembly can be inspected for types, methods, and attributes, but members cannot be invoked and assemblies cannot be loaded from reflection-only context into normal execution.

### Detailed Explanation
- **What it is**: A special assembly load context for metadata inspection only. No code is executed.
- **Why it exists**: Security — inspect an assembly without running its code. Analyze dependencies, generate code, build tools.
- **When to use it**: Build tools, code analysis, dependency graph analysis, decompilers.
- **When NOT to use it**: When you need to execute code from the assembly. When using .NET Core (use `MetadataLoadContext`).

### C# Example
```csharp
// .NET Framework
Assembly asm = Assembly.ReflectionOnlyLoad("SomeAssembly.dll");
foreach (Type type in asm.GetTypes())
{
    Console.WriteLine(type.FullName);
}

// .NET Core+ — MetadataLoadContext
var paths = new[] { typeof(object).Assembly.Location };
using var mlc = new MetadataLoadContext(new PathAssemblyResolver(paths));
Assembly assembly = mlc.LoadFromAssemblyPath("SomeAssembly.dll");
```

### Explain Like I'm 7
ReflectionOnly loading is like looking at a book in a sealed plastic cover. You can see the title, author, and table of contents, but you can't open and read the pages. You know what's in it without actually running any of its code.

</details>

---

# Section 8: Generics

---

<details>
<summary>

## Q64: Generic Constraints

</summary>

### Short Interview Answer
Generic constraints restrict the types that can be used as type arguments. Constraints include: `where T : struct` (value type), `where T : class` (reference type), `where T : notnull` (non-nullable), `where T : new()` (parameterless constructor), `where T : SomeClass` (base class), `where T : ISomeInterface` (interface), and combinations. Constraints enable the generic code to use members of the constrained type.

### Detailed Explanation
- **What it is**: `where T : constraint[, constraint]`. Multiple constraints can be specified. Multiple type parameters each can have constraints.
- **Why it exists**: Without constraints, generic code could only use `object` members. Constraints enable accessing specific members and guarantee certain behaviors.
- **When to use them**: When the generic method/class needs to call methods, create instances, or use operators on the type parameter.
- **When NOT to use them**: Over-constraining limits reusability. Only constrain as much as needed.

### C# Example
```csharp
// Multiple constraints
public class Repository<T> where T : class, IEntity, new()
{
    public T Create()
    {
        var entity = new T(); // new() constraint enables this
        entity.Id = Guid.NewGuid();
        return entity;
    }
}

// Constraint combinations
public void Process<T>(T item) where T : struct, IComparable<T> { }
public async Task<T> LoadAsync<T>(int id) where T : class { }

// Enum constraint (C# 7.3+)
public static TEnum Parse<TEnum>(string value) where TEnum : struct, Enum
    => Enum.Parse<TEnum>(value);

// Delegate constraint (C# 7.3+)
public static TDelegate Create<TDelegate>(object target, string method)
    where TDelegate : Delegate
    => Delegate.CreateDelegate(typeof(TDelegate), target, method) as TDelegate;

// Unmanaged constraint (C# 7.3+)
public static unsafe void Copy<T>(T* dest, T* src, int count) where T : unmanaged { }
```

### Common Mistakes
1. **Stacking too many constraints** — Reduces reusability. Only add what's necessary.
2. **Forgetting `new()` constraint** — If you call `new T()`, the constraint is required.
3. **Not using `notnull` constraint** — In nullable-enabled code, `T?` requires `where T : notnull` or `where T : class?`.
4. **Self-referencing constraints** — `where T : IComparable<T>` is common but can be confusing.

### Explain Like I'm 7
Generic constraints are like a hiring ad: "We need someone with a driver's license (interface), who can start immediately (new()), and is a person (class)." The constraints make sure the right type of candidate applies.

</details>

---

<details>
<summary>

## Q65: Covariance and Contravariance

</summary>

### Short Interview Answer
Covariance (`out`) allows using a more derived type than originally specified. `IEnumerable<Derived>` can be treated as `IEnumerable<Base>`. Contravariance (`in`) allows using a less derived type. `Action<Base>` can be treated as `Action<Derived>`. Covariance is for output positions (return types). Contravariance is for input positions (parameters). Only interfaces and delegate types can be variant.

### Detailed Explanation
- **Covariance (`out`)**: `IEnumerable<out T>` → `IEnumerable<Dog>` is `IEnumerable<Animal>`. T only appears in output positions (return type).
- **Contravariance (`in`)**: `IComparer<in T>` → `IComparer<Animal>` can compare `Dog` objects. T only appears in input positions (parameters).
- **Why it exists**: Type safety with inheritance in generic types. Without variance, `List<Dog>` couldn't be used as `List<Animal>`.
- **When to use**: Only in interface/delegate definitions. Reference types only — value types don't support variance.
- **When NOT to use**: When T appears in both input and output positions (makes the type invariant).

### C# Example
```csharp
// Covariant interface
IEnumerable<Dog> dogs = new List<Dog>();
IEnumerable<Animal> animals = dogs; // Covariance — Dog → Animal

// Contravariant interface
IComparer<Animal> animalComparer = new AnimalComparer();
IComparer<Dog> dogComparer = animalComparer; // Contravariance

// Custom covariant interface
public interface IProducer<out T> { T Produce(); }

// Custom contravariant interface
public interface IConsumer<in T> { void Consume(T item); }

// Array covariance (unsafe!)
Animal[] animals = new Dog[10]; // Array covariance works (but is unsafe)
// animals[0] = new Cat(); // Runtime exception! Cat can't go in Dog[]
```

### Common Mistakes
1. **Using variance with value types** — `IEnumerable<int>` is NOT `IEnumerable<object>`. Value types are invariant.
2. **Array covariance** — Arrays are covariant but NOT type-safe. Prefer generic collections.
3. **Mutable generic types can't be covariant** — `IList<T>` is invariant because T appears in both input and output positions.
4. **Confusing direction** — `in` = input = contravariance. `out` = output = covariance.

### FAANG-Level Deep Dive
**Variance and the CLR**: Variance is baked into the CLR's type system. The JIT generates different code paths for variant versus invariant interfaces. FAANG: *"Why can't `List<T>` be covariant? What would happen if `List<out T>` existed?"* Answer: `List<T>` has methods like `Add(T item)` where T is in input position. Covariance would allow `List<Dog>` → `List<Animal>`, then `Add(Cat)` would break type safety.

### Explain Like I'm 7
Covariance is like saying "a box of apples IS a box of fruit" because you only look at the fruit (output). Contravariance is like saying "someone who can eat any fruit CAN eat an apple" because they handle any fruit (input).

</details>

---

<details>
<summary>

## Q66: Generic Methods vs Generic Classes

</summary>

### Short Interview Answer
Generic classes define type parameters at the class level — the type is fixed for the entire class instance. Generic methods define type parameters at the method level — type inference works per call. Generic methods support type inference from arguments; generic classes require explicit type arguments at instantiation. Prefer generic methods when only one or two methods need generic behavior; use generic classes when the type is inherent to the class's state.

### Detailed Explanation
- **Generic class**: `class Repository<T>` — all members share `T`. `T` can be used in fields, properties, method parameters, return types.
- **Generic method**: `TResult Convert<TInput, TResult>(TInput input)` — type parameters specific to the method. Type inference from arguments.
- **When to use generic class**: The type is fundamental to the class (e.g., `List<T>`, `Dictionary<TKey, TValue>`).
- **When to use generic method**: One-off conversion, utility methods, LINQ-style operations.

### C# Example
```csharp
// Generic class
public class Repository<T> where T : IEntity
{
    private readonly List<T> _items = new();

    public void Add(T item) => _items.Add(item);
    public T GetById(Guid id) => _items.First(e => e.Id == id);
}

// Generic method
public static class Converter
{
    public static TDest Convert<TSrc, TDest>(TSrc source)
        where TDest : new()
    {
        var dest = new TDest();
        // Copy properties
        return dest;
    }
}

// Type inference in generic methods
var result = Converter.Convert<Source, Dest>(source);
// C# can infer types from parameters (but not return type alone)
```

### Common Mistakes
1. **Putting too many type parameters on a class** — If only one method uses a type parameter, make it generic.
2. **Generic method without type inference** — All type parameters should be inferable from method arguments if possible.
3. **Type parameter cannot be inferred from return type** — C# doesn't support return-type-only inference.

### Explain Like I'm 7
A generic class is like a toolbox that only holds screwdrivers — you choose screwdriver type when you buy the box. A generic method is like a tool rental — you pick the right tool each time you rent.

</details>
<details>
<summary>

## Q67: Generic Type Inference

</summary>

### Short Interview Answer
Generic type inference allows the compiler to deduce type parameters from method arguments. For example, `M("hello")` infers `string` for `T`. Inference works with method arguments only (not return types). The compiler considers parameter types, generic constraints, and inheritance. Inference fails when types are ambiguous or cannot be determined from arguments.

### Detailed Explanation
- **Process**: The compiler examines method arguments and their types to infer type parameters. It considers inheritance (e.g., `IEnumerable<Dog>` → `T = Dog`).
- **Limitations**: Cannot infer from return type alone. Ambiguous type parameters (multiple candidates) cause inference failure.
- **When to rely on inference**: Always — makes code cleaner. Only specify types explicitly when inference fails.
- **When NOT to rely on it**: When inference is ambiguous — provide explicit type arguments.

### C# Example
```csharp
// Inference from arguments
void Process<T>(T item) { }
Process("hello"); // T = string (inferred)
Process(42);      // T = int (inferred)

// Multiple parameters
void Pair<T1, T2>(T1 first, T2 second) { }
Pair(1, "two");   // T1 = int, T2 = string

// Inference works with derived types
void Add<T>(IEnumerable<T> items) { }
Add(new List<Dog>()); // T = Dog

// Inference fails — need explicit types
void Convert<TInput, TOutput>(TInput input) { }
// Convert("hello"); // ❌ Cannot infer TOutput
Convert<string, int>("hello"); // ✅ Explicit types needed

// Best overload resolution with inference
var result = new[] { 1, 2, 3 }.Select(x => x * 2); // Inferred Func<int, int>
```

### Common Mistakes
1. **Assuming return type inference** — `var result = GetDefault<int?>()` — C# cannot infer from expected variable type alone.
2. **Confusing inference with `var`** — `var x = M(y)` — `var` uses the return type of `M`. Not the same as inferring M's type parameters.
3. **Async method type inference** — `Task<T>` return type doesn't help inference from the async method itself.

### Explain Like I'm 7
Type inference is like saying "bring me that thing" and pointing. You don't say "bring me the blue cup" — you just point, and the other person knows which thing you mean from the context.

</details>

---

<details>
<summary>

## Q68: Static Members in Generics

</summary>

### Short Interview Answer
Each closed generic type (e.g., `List<int>`, `List<string>`) has its own set of static members. A static field in `GenericClass<int>` is separate from `GenericClass<string>`. This is because each closed generic type is a distinct type at runtime. Static constructors run once per closed type. This behavior is used for per-type caching but can lead to unexpected memory usage.

### Detailed Explanation
- **Behavior**: `GenericClass<int>.Count` and `GenericClass<string>.Count` are different fields. `GenericClass<T>.StaticValue` is unique per `T`.
- **Why it exists**: Each closed generic type becomes its own runtime type. Static members are per-type, just like non-generic types.
- **When to use**: Per-type caching (e.g., `EqualityComparer<T>.Default`), per-type metadata storage.
- **When NOT to use**: When you expect a single static value across all type parameters.

### C# Example
```csharp
public class Counter<T>
{
    public static int InstanceCount = 0;

    public Counter() => InstanceCount++;
}

// Each closed type has its own counter
var intCounter1 = new Counter<int>();
var intCounter2 = new Counter<int>();
var stringCounter1 = new Counter<string>();

Console.WriteLine(Counter<int>.InstanceCount);    // 2
Console.WriteLine(Counter<string>.InstanceCount); // 1

// Per-type caching pattern
public static class Metadata<T>
{
    public static readonly PropertyInfo[] Properties = typeof(T).GetProperties();
}

// Accessed as Metadata<MyClass>.Properties — cached per type
```

### Common Mistakes
1. **Assuming a single static field** — Expecting `Counter<object>.InstanceCount` to match `Counter<string>.InstanceCount`.
2. **Static constructor exceptions** — An exception in `GenericClass<int>` static constructor doesn't affect `GenericClass<string>`.
3. **Memory leak per type** — Static collections in generic types accumulate entries for each `T` used.

### Explain Like I'm 7
A generic class's static members are like lockers in a school. Each grade (type) has its own set of lockers. `Counter<int>` has lockers for `int` students; `Counter<string>` has separate lockers for `string` students. Even though they're the same design, they're different lockers.

</details>

---

<details>
<summary>

## Q69: Generic Interfaces

</summary>

### Short Interview Answer
Generic interfaces provide type-safe contracts without boxing or downcasting. Examples: `IComparable<T>`, `IEquatable<T>`, `IEnumerable<T>`, `IRepository<T>`. They enable compile-time type safety and avoid the performance cost of non-generic alternatives. Implementing a generic interface specializes the members for the implementing type.

### Detailed Explanation
- **What it is**: An interface with type parameters. `interface IComparable<T>` defines `CompareTo(T other)` — type-safe input.
- **Why it exists**: Before generics, interfaces like `IComparable` used `object` parameters, causing boxing and casting. Generic interfaces eliminate these issues.
- **When to use them**: For contracts where the type is part of the contract — comparisons, equality, collections, repositories.
- **When NOT to use them**: When the interface doesn't benefit from type parameterization (e.g., `IDisposable`).

### C# Example
```csharp
// Non-generic vs generic
public interface IComparable // Old — object parameter
{
    int CompareTo(object? obj); // Boxing, casting
}

public interface IComparable<in T> // New — type-safe, no boxing
{
    int CompareTo(T? other);
}

// Implementation
public struct Money : IEquatable<Money>, IComparable<Money>
{
    public decimal Amount { get; }

    public bool Equals(Money other) => Amount == other.Amount;
    public int CompareTo(Money other) => Amount.CompareTo(other.Amount);
}

// Covariant interface
public interface IRepository<out T> where T : IEntity
{
    T GetById(Guid id);
    IEnumerable<T> GetAll();
}
```

### Common Mistakes
1. **Implementing both generic and non-generic** — Usually only need generic. The non-generic is for backward compatibility.
2. **Wrong variance** — `IComparable<in T>` is contravariant (T only in input positions). `IEnumerable<out T>` is covariant.
3. **Over-constraining** — `where T : class` on an interface limits implementors unnecessarily.

### Explain Like I'm 7
A generic interface is like a vending machine contract. Instead of saying "you get an object" (non-generic), it says "you get a soda" (generic). No need to check if what you got is actually a soda — you know it is.

</details>

---

<details>
<summary>

## Q70: Generic Variance in Delegates

</summary>

### Short Interview Answer
Generic delegates like `Func<T, TResult>` and `Action<T>` use variance annotations. `Func<in T, out TResult>` is contravariant in input and covariant in output. `Action<in T>` is contravariant (input only). This means `Func<Dog, Animal>` can be used where `Func<Animal, Dog>` is expected (with appropriate types). Variance enables flexible delegate assignment and is transparent to the consumer.

### Detailed Explanation
- **Func**: `Func<in T, out TResult>` — T is input (contravariant), TResult is output (covariant).
- **Action**: `Action<in T>` — T is input (contravariant). No output.
- **Why it exists**: Enables delegate compatibility for related types. `Func<Dog, Animal>` matches `Func<Animal, Dog>` expectation naturally.
- **When to use**: When defining custom delegate types. `Converter<TInput, TOutput>` often uses variance.

### C# Example
```csharp
// Delegate variance in practice
Func<object, string> toString = obj => obj.ToString()!;
Func<string, string> stringToString = toString; // Contravariant input: object → string
// This works: Func<in T, out TResult> — T is contravariant

Func<string, object> getLength = s => s.Length;
Func<string, string> lengthToString = getLength; // This does NOT work!
// Can't convert: TResult is covariant (string → object is fine FOR output)

// Action — contravariant only
Action<string> printStr = Console.WriteLine;
Action<object> printObj = Console.WriteLine;
Action<string> strAction = printObj; // Contravariant: object → string ✓

// Custom variant delegate
public delegate TResult MyFunc<in T, out TResult>(T arg);
```

### Common Mistakes
1. **Assuming both directions** — Variance is directional (in = input, out = output). Can't be both.
2. **Value type invariance** — `Func<int, int>` is NOT `Func<object, int>` — value types are invariant in generics.
3. **Confusing with assignment compatibility** — Delegate variance is about type parameter compatibility, not method signature matching.

### Explain Like I'm 7
Delegate variance is like hiring. If you can manage ANY animal (Func<Animal>), you can manage dogs (more specific). If you can handle a dog (Action<Dog>), you can be put in charge of dogs, but not necessarily all animals. It's about being more general or more specific.

</details>

---

# Section 9: Collections

---

<details>
<summary>

## Q71: List&lt;T&gt; Internals

</summary>

### Short Interview Answer
`List<T>` is implemented as a resizable array backed by a `T[]` field. It has a `Capacity` (array length) and `Count` (number of elements). When `Add` exceeds capacity, the array doubles in size (old capacity * 2) and all elements are copied. Insert and Remove are O(n) due to shifting elements. Index access is O(1). `List<T>` is the most commonly used collection for indexed, ordered data.

### Detailed Explanation
- **Internal**: `private T[] _items`, `private int _size`. Default capacity is 0 (empty list) or 4. Grows by doubling.
- **Add**: O(1) amortized. O(n) when resize needed. Amortized analysis shows ~3 copies per element over lifetime.
- **Insert/Remove**: O(n) — shift elements. Use `LinkedList<T>` for frequent insert/remove in middle.
- **Indexer**: O(1) — direct array access.
- **Find**: O(n) — linear search. Use `HashSet<T>` or `Dictionary<TKey, TValue>` for faster lookup.

### C# Example
```csharp
var list = new List<int>();         // Capacity = 0, Count = 0
list.Add(1);                        // Resize to Capacity 4, Count = 1
list.Add(2);                        // Count = 2
list.AddRange(new[] { 3, 4, 5 });   // Resize to Capacity 8, Count = 5
list.RemoveAt(0);                   // Shift elements 1-4 → positions 0-3, Count = 4
list.TrimExcess();                  // Shrink Capacity to Count (if > 10% waste)

// BinarySearch — O(log n), requires sorted list
int index = list.BinarySearch(3);
```

### Common Mistakes
1. **Not setting initial capacity** — If you know the size, pass it: `new List<T>(1000)`. Avoids multiple resizes.
2. **Using `Insert` in loops** — Each insert is O(n). Use `LinkedList<T>` or add then reverse.
3. **`Count` vs `Capacity` confusion** — `Count` = elements. `Capacity` = allocated size.
4. **Thread safety** — `List<T>` is NOT thread-safe. Use `ConcurrentBag<T>` or lock.
5. **ForEach with modification** — Modifying a list while iterating with `foreach` throws `InvalidOperationException`. Use `for` loop.

### FAANG-Level Deep Dive
**List<T> growth factor and memory cost**: The doubling strategy creates a geometric series: 0, 4, 8, 16, 32, 64... The wasted space is at most 50% (current capacity - count). FAANG: *"Given a `List<T>` with N elements, how many times has the internal array been resized? What is the total copy cost?"* Answer: Resized ceil(log2(N/4)) times. Total copies ≈ N (geometric series: 4 + 8 + ... + N ≈ 2N). This is amortized O(1) per add.

### Explain Like I'm 7
`List<T>` is like a row of chairs. You can sit anywhere (index) and see everyone quickly (O(1) access). If more people come, someone brings more chairs and everyone moves to a bigger row (resize). Adding someone in the middle means everyone shifts to make space (O(n) insert).

</details>

---

<details>
<summary>

## Q72: Dictionary&lt;TKey, TValue&gt; Internals

</summary>

### Short Interview Answer
`Dictionary<TKey, TValue>` is implemented as a hash table using separate chaining with linked lists (or arrays in .NET Core+). It has an internal array of buckets and an array of entries. The hash code (modulo capacity) determines the bucket. Collisions are resolved by chaining entries. Lookup is O(1) average, O(n) worst-case (hash collisions). Default capacity is 3; resize occurs when load factor > 0.75 (or similar threshold).

### Detailed Explanation
- **Internal**: `int[] _buckets`, `Entry[] _entries`. Each entry has `hashCode`, `next` (index of next entry in chain), `key`, `value`.
- **Add**: Compute `hashCode % capacity` → find bucket → chain entry. O(1) average, O(n) with collisions.
- **Lookup**: Compute hash → find bucket → linear search chain. O(1) average.
- **Resize**: When count > capacity * load factor. New capacity is prime (or near-prime). All entries rehashed.
- **Key requirements**: Must override `GetHashCode()` and `Equals()`. Immutable keys recommended.

### C# Example
```csharp
var dict = new Dictionary<string, int>(capacity: 1000); // Pre-size for performance
dict["apple"] = 1;
dict["banana"] = 2;

// Lookup — O(1)
if (dict.TryGetValue("apple", out int count))
    Console.WriteLine(count);

// Custom equality comparer
var caseInsensitive = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);

// Remove
dict.Remove("banana");

// Iteration — order NOT guaranteed
foreach (var kvp in dict)
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
```

### Common Mistakes
1. **Mutable keys** — Modifying a key after insertion changes its hash code. The dictionary will not find it.
2. **Poor GetHashCode** — Bad hash distribution causes O(n) lookups. Always use `HashCode.Combine()`.
3. **Assuming insertion order** — `Dictionary` does NOT maintain order. Use `OrderedDictionary` or `SortedDictionary`.
4. **Thread safety** — `Dictionary` is NOT thread-safe. Use `ConcurrentDictionary` or locking.
5. **Key not found** — `dict[key]` throws `KeyNotFoundException`. Always use `TryGetValue`.

### FAANG-Level Deep Dive
**Dictionary resize and prime numbers**: Dictionaries use prime (or odd) capacities to improve hash distribution. When resizing, capacity is determined by finding the next prime above the required size. FAANG: *"Why do hash tables use prime numbers for bucket count?"* Answer: Prime numbers reduce hash collisions when hash codes follow patterns (multiples). If capacity is a power of 2, only the lower bits of the hash code are used, increasing collision risk for similar objects.

### Explain Like I'm 7
A dictionary is like a set of labeled boxes. Each box has a label (key) and something inside (value). To find something, you read the label (hash), go to the right box section (bucket), and search through boxes with that label (chain). Good labels make finding things fast.

</details>
<details>
<summary>

## Q73: HashSet&lt;T&gt; vs SortedSet&lt;T&gt;

</summary>

### Short Interview Answer
`HashSet<T>` is an unordered collection of unique elements using hash-based lookup (O(1) average). `SortedSet<T>` maintains elements in sorted order using a balanced binary search tree (red-black tree, O(log n)). Both forbid duplicates (adding an existing element returns false). Choose `HashSet` for fast membership tests; choose `SortedSet` when you need ordered iteration or range operations.

### Detailed Explanation
- **HashSet**: Hash table implementation (similar to Dictionary key set). O(1) add, remove, contains. No ordering.
- **SortedSet**: Red-black tree. O(log n) add, remove, contains. Maintains sorted order. Supports `Min`, `Max`, `GetViewBetween` for range queries.
- **When to use HashSet**: Fast membership testing (`Contains`), deduplication, set operations (Union, Intersect, Except).
- **When to use SortedSet**: When you need sorted data, range queries, or min/max element access.

### C# Example
```csharp
// HashSet — fast membership
var hashSet = new HashSet<int> { 1, 2, 3, 4, 5 };
bool exists = hashSet.Contains(3); // O(1)
hashSet.UnionWith(new[] { 5, 6, 7 }); // 1,2,3,4,5,6,7

// SortedSet — ordered
var sortedSet = new SortedSet<int> { 5, 1, 3, 2, 4 };
foreach (var item in sortedSet) // 1, 2, 3, 4, 5 (sorted)
    Console.WriteLine(item);

int min = sortedSet.Min; // 1
int max = sortedSet.Max; // 5

// Range query — O(k + log n)
var subRange = sortedSet.GetViewBetween(2, 4); // 2, 3, 4
```

### Common Mistakes
1. **Expecting ordering from HashSet** — No ordering guarantee. Do NOT rely on insertion or iteration order.
2. **Using SortedSet for large, frequently modified sets** — O(log n) adds are slower than HashSet's O(1).
3. **Custom comparer confusion** — Both accept `IEqualityComparer<T>` (HashSet) or `IComparer<T>` (SortedSet).

### Explain Like I'm 7
HashSet is like a pile of unique marbles — you can quickly check if a blue marble is in the pile, but they're all mixed up. SortedSet is like a shelf of books sorted alphabetically — finding a book takes a bit more time, but everything is in order.

</details>

---

<details>
<summary>

## Q74: Queue&lt;T&gt; and Stack&lt;T&gt;

</summary>

### Short Interview Answer
`Queue<T>` is a FIFO (First-In-First-Out) collection backed by a circular array. `Stack<T>` is a LIFO (Last-In-First-Out) collection backed by an array. Both have O(1) amortized operations for push/Enqueue and pop/Dequeue. They resize by doubling when full, similar to `List<T>`. Use Queue for order-preserving processing (e.g., BFS, task queues). Use Stack for depth-first processing (e.g., DFS, undo/redo).

### Detailed Explanation
- **Queue**: `Enqueue(T)` adds to back. `Dequeue()` removes from front. O(1) amortized. Internal: circular buffer with head/tail pointers.
- **Stack**: `Push(T)` adds to top. `Pop()` removes from top. `Peek()` returns top without removing. Simple array with index.
- **When to use Queue**: Message queues, BFS algorithms, print spooling, event processing.
- **When to use Stack**: DFS algorithms, expression evaluation, undo/redo, call stack simulation.

### C# Example
```csharp
// Queue — FIFO
var queue = new Queue<string>();
queue.Enqueue("first");
queue.Enqueue("second");
queue.Enqueue("third");

string next = queue.Dequeue(); // "first"
string peek = queue.Peek();    // "second" (without removing)

// BFS pattern
var queue = new Queue<TreeNode>();
queue.Enqueue(root);
while (queue.Count > 0)
{
    var node = queue.Dequeue();
    // Process node
    foreach (var child in node.Children)
        queue.Enqueue(child);
}

// Stack — LIFO
var stack = new Stack<string>();
stack.Push("first");
stack.Push("second");
stack.Push("third");

string top = stack.Pop();  // "third"
string look = stack.Peek(); // "second"

// Undo/redo pattern
var undoStack = new Stack<Action>();
var redoStack = new Stack<Action>();
```

### Common Mistakes
1. **Dequeue/Pop on empty** — Throws `InvalidOperationException`. Always check `Count > 0`.
2. **Foreach on Queue doesn't dequeue** — Iteration doesn't remove elements. Use while + Dequeue.
3. **Queue/Stack are NOT thread-safe** — Use `ConcurrentQueue<T>` and `ConcurrentStack<T>`.

### Explain Like I'm 7
Queue is like a line at the grocery store — the first person in line is the first to check out. Stack is like a stack of plates — the last plate you put on top is the first one you take off.

</details>

---

<details>
<summary>

## Q75: LinkedList&lt;T&gt;

</summary>

### Short Interview Answer
`LinkedList<T>` is a doubly linked list — each node has pointers to the previous and next nodes. Insertions and removals are O(1) if you have the node reference (not by value). Lookup is O(n). Memory overhead is significant (node object with 3 references + data). Use when you need frequent insertions/removals in the middle of a sequence and don't need random access.

### Detailed Explanation
- **Internal**: `LinkedListNode<T>` with `Value`, `Next`, `Previous` properties. `LinkedList` has `First`, `Last` references.
- **Add/Remove**: O(1) with node reference. O(n) if searching by value first.
- **Lookup**: O(n) — linear traversal. No indexer.
- **Memory**: Each node is separate heap object (`LinkedListNode<T>`) with 3 references + value. Considerably more memory than `List<T>`.
- **When to use**: Frequent insert/remove in middle, large items, implementing LRU caches.
- **When NOT to use**: Random access needed (use `List<T>`). Small collections. Memory-sensitive scenarios.

### C# Example
```csharp
var list = new LinkedList<string>();
list.AddLast("Second");
list.AddFirst("First");
var node = list.AddLast("Third");

// O(1) insert before/after a known node
list.AddBefore(node, "BeforeThird");
list.AddAfter(node, "AfterThird");

// O(1) removal with node reference
list.Remove(node);

// Efficient removal of first/last
list.RemoveFirst();
list.RemoveLast();

// Iteration
for (var current = list.First; current != null; current = current.Next)
    Console.WriteLine(current.Value);
```

### Common Mistakes
1. **Using LinkedList when List is better** — Most "frequent insertion" scenarios still benefit from `List<T>` due to cache locality. Profile first.
2. **LinkedListNode belongs to only one list** — A node cannot be shared between lists.
3. **O(1) removal requires node reference** — `Remove(value)` is O(n) — it searches for the value first.
4. **Memory overhead** — Each node is a separate heap object. For 1M items, `LinkedList<T>` uses ~40 MB more than `List<T>`.

### Explain Like I'm 7
A linked list is like a treasure hunt. Each clue tells you where the next clue is. To find clue #5, you must start at clue #1 and follow the chain. Adding a new clue in the middle just means changing a few clues to point to the new one.

</details>

---

<details>
<summary>

## Q76: Concurrent Collections Overview

</summary>

### Short Interview Answer
`System.Collections.Concurrent` provides thread-safe collections for multi-threaded scenarios. Key types: `ConcurrentDictionary<TKey, TValue>`, `ConcurrentQueue<T>`, `ConcurrentStack<T>`, `ConcurrentBag<T>`, and `BlockingCollection<T>`. They use fine-grained locking (striping) or lock-free algorithms (CAS operations). They are optimized for high-concurrency scenarios and are safe to use from multiple threads without external synchronization.

### Detailed Explanation
- **ConcurrentDictionary**: Thread-safe dictionary. Uses striped locking (arrays of locks, each protecting a subset of buckets). `AddOrUpdate`, `GetOrAdd` are atomic.
- **ConcurrentQueue**: Lock-free using CAS on a linked list of segments. Very high throughput.
- **ConcurrentStack**: Lock-free using CAS on a linked list.
- **ConcurrentBag**: Optimized for scenarios where each thread produces and consumes its own items. Uses thread-local storage with work-stealing.
- **BlockingCollection**: Wraps an `IProducerConsumerCollection<T>` and adds blocking/bounding semantics. `Take()` blocks until item available.

### C# Example
```csharp
// ConcurrentDictionary — thread-safe
var dict = new ConcurrentDictionary<string, int>();
dict.TryAdd("key", 1);
dict.AddOrUpdate("key", 1, (key, old) => old + 1);
int value = dict.GetOrAdd("missing", _ => ComputeExpensive());

// ConcurrentQueue — lock-free
var queue = new ConcurrentQueue<int>();
queue.Enqueue(1);
queue.Enqueue(2);
if (queue.TryDequeue(out int result)) { }

// BlockingCollection — producer/consumer
var bc = new BlockingCollection<int>(boundedCapacity: 100);
// Producer
Task.Run(() => { bc.Add(1); bc.CompleteAdding(); });
// Consumer
foreach (var item in bc.GetConsumingEnumerable())
    Process(item);
```

### Common Mistakes
1. **Using `Count == 0` as empty check** — `Count` has synchronization overhead. Use `IsEmpty`.
2. **Assuming snapshot consistency** — Iterating a concurrent collection with `foreach` gives a point-in-time snapshot (or no snapshot — ConcurrentDictionary uses no snapshot).
3. **Using regular collections with locks** — For high-contention scenarios, concurrent collections outperform `List<T>` + `lock`.
4. **BlockingCollection without CompleteAdding** — Consumers block forever waiting for items.

### FAANG-Level Deep Dive
**ConcurrentDictionary lock striping**: The dictionary maintains an array of locks. The number of locks is typically less than the number of buckets. FAANG: *"How does `ConcurrentDictionary` handle resizing while other threads are accessing it?"* Answer: Resizing acquires all locks, creates new buckets, rehashes entries, then releases locks. During resize, reads can still proceed using the old table until the new one is ready.

### Explain Like I'm 7
Concurrent collections are like a cafeteria with multiple serving stations. Many people can get food at the same time without bumping into each other because there are multiple lines (locks) and self-serve (lock-free) options.

</details>

---

<details>
<summary>

## Q77: Immutable Collections

</summary>

### Short Interview Answer
`System.Collections.Immutable` provides immutable collections — once created, they never change. Modifications return new collections with the change applied, sharing the underlying structure (persistent data structures using tree-based implementations). They are inherently thread-safe and provide structural sharing for memory efficiency. Use them for functional-style programming, caching, and scenarios where defensive copies are needed.

### Detailed Explanation
- **What they are**: `ImmutableArray<T>`, `ImmutableList<T>`, `ImmutableDictionary<TKey, TValue>`, `ImmutableHashSet<T>`, `ImmutableSortedSet<T>`, `ImmutableQueue<T>`, `ImmutableStack<T>`.
- **How they work**: Persistent data structures. `ImmutableArray<T>` is a wrapper around `T[]`. `ImmutableList<T>` uses a binary tree (AVL-like) allowing O(log n) operations with structural sharing.
- **When to use**: Multi-threaded scenarios where safety is critical. Caching. Functional code. When you want to guarantee no mutation.
- **When NOT to use**: High-throughput mutation scenarios (allocation overhead). Large collections where structural sharing causes fragmentation.

### C# Example
```csharp
// ImmutableArray — array wrapper, no copy on access
var array = ImmutableArray.Create(1, 2, 3, 4, 5);
var bigger = array.Add(6); // Returns new ImmutableArray (copies if needed)

// ImmutableList — tree-based
var list = ImmutableList<int>.Empty;
list = list.Add(1);  // New list with 1
list = list.Add(2);  // New list with 1, 2
list = list.RemoveAt(0); // New list with 2

// ImmutableDictionary
var dict = ImmutableDictionary<string, int>.Empty
    .Add("one", 1)
    .Add("two", 2);
dict = dict.SetItem("one", 10); // Returns new dictionary

// Builder pattern for performance
var builder = ImmutableList.CreateBuilder<int>();
builder.AddRange(Enumerable.Range(1, 10000));
var finalList = builder.ToImmutable(); // Only one allocation
```

### Common Mistakes
1. **Performance in hot mutation paths** — Each mutation creates a new collection. Use `Builder` for bulk operations.
2. **ImmutableArray vs ImmutableList** — `ImmutableArray` is for fixed-size data where you need fast indexing. `ImmutableList` is for variable-size.
3. **Reference equality** — `list == list.Add(1).RemoveAt(0)` returns false (different instances, even if conceptually equal).

### Explain Like I'm 7
Immutable collections are like a book. You can't erase words from a published book. If you want changes, you print a new edition that shares most pages with the old one. Many people can read the same book without anyone accidentally changing it.

</details>

---

<details>
<summary>

## Q78: Array vs List&lt;T&gt; Performance

</summary>

### Short Interview Answer
Arrays (`T[]`) have the best performance for fixed-size, indexed access — they're a contiguous memory block with zero overhead. `List<T>` adds flexibility (dynamic resizing) at the cost of slight overhead for index bounds checking and resizing. For read-only iteration, both are similar. Arrays are faster for raw access, LINQ operations, and lower GC overhead since they don't have the List wrapper object.

### Detailed Explanation
- **Array**: `T[]`. Fixed size. Direct memory access. JIT can emit bounds-check-eliminated code. No allocation overhead beyond the data.
- **List<T>**: Wraps `T[]`. Adds `Add`, `Remove`, `Insert`. Bounds checking on indexer (in Debug). Dynamic resizing allocates new arrays.
- **Performance comparison**:
  - Index access: Array ~1% faster (List adds bounds check in Debug, same in Release with JIT optimization).
  - Iteration: Nearly identical (foreach converts to array-like iteration).
  - Memory: Array = data. List = data + List object overhead (~32 bytes).
  - Resize: List handles it; array requires `Array.Resize` (new allocation + copy).

### C# Example
```csharp
// Array — best for fixed-size
int[] array = new int[1000];
for (int i = 0; i < array.Length; i++)
    array[i] = i; // JIT can skip bounds check after proving i < Length

// List — flexible
var list = new List<int>(1000); // Pre-size for performance
for (int i = 0; i < 1000; i++)
    list.Add(i);

// When to use each:
// Array: fixed size, high-performance computing, interop, stackalloc
// List: dynamic size, unknown count, need Add/Remove/Insert
```

### Common Mistakes
1. **Using `ToList()` unnecessarily** — Creates a copy (and a new List). Use the original array.
2. **Array.Copy vs List.AddRange** — For copying arrays, `Array.Copy` or `Buffer.BlockCopy` is faster.
3. **Multidimensional arrays** — Jagged arrays (`int[][]`) are faster than rectangular arrays (`int[,]`) due to better cache locality and JIT optimizations.
4. **Pre-size always** — If you know the size, pass it. Avoids reallocation.

### Explain Like I'm 7
An array is like a row of fixed seats in a theater — no legroom to add more seats, but you can quickly sit in any seat. A List is like a row of chairs in a flexible conference room — more chairs can be added, but finding your seat takes slightly longer.

</details>

---

<details>
<summary>

## Q79: SortedDictionary vs SortedList

</summary>

### Short Interview Answer
`SortedDictionary<TKey, TValue>` is implemented as a balanced binary search tree (red-black tree) — O(log n) for all operations. `SortedList<TKey, TValue>` is backed by an array of key-value pairs, sorted by key — O(log n) lookup (binary search), O(n) insert/remove (array shifting). Choose `SortedDictionary` for frequent inserts/removes. Choose `SortedList` for lookup-heavy workloads with infrequent modifications (also uses less memory).

### Detailed Explanation
- **SortedDictionary**: Tree. O(log n) insert, delete, lookup. More memory (tree nodes). No order guaranteed beyond sorted.
- **SortedList**: Array. O(log n) lookup (binary search). O(n) insert/remove (array shift). Less memory (contiguous arrays). Supports index-based access.
- **When to use SortedDictionary**: Frequent inserts/removes. Large collections.
- **When to use SortedList**: Infrequent modifications. Lookup-heavy. Memory-constrained. Need indexed access.

### C# Example
```csharp
// SortedDictionary — tree-based
var dict = new SortedDictionary<int, string>();
dict.Add(3, "three");
dict.Add(1, "one");
dict.Add(2, "two");
// Iteration: 1, 2, 3

// SortedList — array-based
var list = new SortedList<int, string>();
list.Add(3, "three");
list.Add(1, "one");
list.Add(2, "two");
// Iteration: 1, 2, 3

// SortedList supports index access
string first = list.Values[0]; // "one" (by key order)
int firstKey = list.Keys[0];   // 1

IndexOfKey(2); // Returns index 1
```

### Common Mistakes
1. **Using SortedList with many inserts** — Each insert shifts O(n) elements. O(n²) insertion of N elements.
2. **Assuming O(1) access** — Both are O(log n) for key lookup. Neither is O(1) like `Dictionary`.
3. **Memory: SortedDictionary nodes** — Each entry is a tree node with 3 references (left, right, parent) + color. Significant overhead.

### Explain Like I'm 7
SortedDictionary is like a library with an index card system (tree) — finding books is fast, adding new books is fast, but the cards take up space. SortedList is like books on a shelf in alphabetical order — finding is fast (look at spines), but adding a new book means shuffling all books to make room.

</details>

---

<details>
<summary>

## Q80: ReadOnlyCollection vs ImmutableArray

</summary>

### Short Interview Answer
`ReadOnlyCollection<T>` is a wrapper around a mutable collection — changes to the underlying collection are visible through the wrapper. `ImmutableArray<T>` is a truly immutable array — once created, it never changes. `ReadOnlyCollection` is lightweight (no copy of the underlying data) but the data can be modified through other references. `ImmutableArray` provides guaranteed immutability but copies data on creation. Use `ReadOnlyCollection` for exposing internal data without copying; use `ImmutableArray` when you need true immutability guarantees.

### Detailed Explanation
- **ReadOnlyCollection**: `new ReadOnlyCollection<T>(list)` — wraps, doesn't copy. Changes to `list` are reflected.
- **ImmutableArray**: `list.ToImmutableArray()` — copies data. Guarantees no changes. `ImmutableArray.Create()`.
- **When to use ReadOnlyCollection**: Exposing internal collection as read-only to consumers. Performance-sensitive.
- **When to use ImmutableArray**: When you need thread safety guarantees. When the collection is published and should never change.

### C# Example
```csharp
// ReadOnlyCollection — lightweight wrapper
private List<string> _items = new();
public ReadOnlyCollection<string> Items => _items.AsReadOnly();
// Item adders modify _items — consumers see changes through Items

// ImmutableArray — true immutability
private ImmutableArray<string> _immutableItems = ImmutableArray<string>.Empty;
public ImmutableArray<string> ImmutableItems => _immutableItems;

// To update, create new:
public void AddItem(string item) =>
    _immutableItems = _immutableItems.Add(item);

// Defensive copy vs ReadOnly
public ReadOnlyCollection<string> GetItems() => _items.AsReadOnly(); // No copy
public ImmutableArray<string> GetImmutableItems() => _items.ToImmutableArray(); // Copy
```

### Common Mistakes
1. **Casting ReadOnlyCollection back to mutable** — The wrapper can be cast to `IList<T>`, but modifying through that interface throws.
2. **Assuming ReadOnlyCollection is immutable** — It's only a read-only view. Underlying data can change.
3. **Performance of ImmutableArray.Add** — Each `Add` creates a new array (copy). Use builder for multiple adds.

### Explain Like I'm 7
ReadOnlyCollection is like a window into a room — you can see everything, but if someone inside rearranges furniture, you see the changes. ImmutableArray is like a photograph of the room — it never changes, no matter what happens to the real room.

</details>

---

# Section 10: Advanced Features (C# 9-14)

---

<details>
<summary>

## Q81: Records

</summary>

### Short Interview Answer
Records (C# 9+) are reference types with built-in value semantics — the compiler generates `Equals`, `GetHashCode`, `ToString`, `Deconstruct`, and `==`/`!=` operators based on the record's properties. They support `with` expressions for non-destructive mutation. Use records for data-centric types (DTOs, commands, queries) where value equality and immutability matter. Record structs (C# 10+) provide value-type records with similar functionality.

### Detailed Explanation
- **What it is**: A class (or struct) with positional or nominal syntax. Compiler synthesizes members for value equality, cloning, deconstruction, and `ToString`.
- **Why it exists**: Reduces boilerplate for data types. Immutability by default. Value semantics for equality.
- **When to use**: DTOs, API contracts, domain events, value objects. Any type where equality is based on data, not identity.
- **When NOT to use**: Types with mutable identity or behavior. Types that need specific inheritance patterns.

### C# Example
```csharp
// Positional record — primary constructor
public record Person(string FirstName, string LastName, int Age);

// Nominal record — classic property syntax
public record Employee
{
    public string Name { get; init; }
    public int Id { get; init; }
}

// Usage
var p1 = new Person("Alice", "Smith", 30);
var p2 = p1 with { Age = 31 }; // Non-destructive mutation
Console.WriteLine(p1 == p2); // False (different Age)

// Deconstruction
var (first, last, age) = p1;

// Record struct (C# 10+)
public readonly record struct Point(double X, double Y);

// Record with custom members
public record Order(int Id, decimal Amount)
{
    public decimal Tax => Amount * 0.08m; // Computed property
}
```

### Common Mistakes
1. **Not understanding value equality** — Two records with same data are equal. This differs from class behavior.
2. **Large records** — Value equality compares all fields. For large records, this is expensive.
3. **Inheritance with records** — `public record Manager(string Name, int Level) : Employee(Name)` — careful with equality.
4. **Mutable properties in records** — You CAN use `set` instead of `init`, but it breaks the immutability promise.

### FAANG-Level Deep Dive
**Record equality implementation**: The compiler generates `EqualityContract` (for record class) and `IEquatable<T>.Equals` that compares all synthesized and declared properties. `GetHashCode` uses `HashCode.Combine` from all properties. FAANG: *"How does the compiler handle record equality when there is inheritance? What is the `EqualityContract` used for?"* Answer: `EqualityContract` returns `typeof(T)` — ensures records of different types in the hierarchy are never equal. This prevents asymmetric equality.

### Explain Like I'm 7
Records are like photos in an album. Each photo has details (name, date, place). Two photos with the same details are considered the same photo. You can say "like this photo, but with a different date" (with expression). Photos don't change — you take a new photo.

</details>

---

<details>
<summary>

## Q82: Pattern Matching

</summary>

### Short Interview Answer
Pattern matching (C# 7-11) provides a declarative way to test the shape of data and extract values. Patterns include: type patterns (`obj is string s`), constant patterns (`x is 42`), relational patterns (`x is > 0 and < 100`), property patterns (`obj is { Name: "Alice" }`), positional patterns (`obj is (1, 2)`), list patterns (C# 11), and discard patterns (`_`). Pattern matching works in `if` statements, `switch` expressions, and `switch` statements.

### Detailed Explanation
- **What it is**: A syntax for testing expressions against patterns, extracting values, and branching based on shape.
- **Why it exists**: Replaces nested `if-else` and `switch` with more expressive, concise, and safe code.
- **When to use**: Type checking with extraction, switch over types, complex condition logic, parsing/validation.
- **When NOT to use**: Simple boolean conditions (use `if`). When pattern complexity reduces readability.

### C# Example
```csharp
// Type patterns
if (obj is string s) Console.WriteLine(s.Length);
if (obj is not null) { }
if (obj is int i and > 0) { }

// Property patterns
if (user is { Name: "Alice", Age: >= 18 }) { }

// Positional patterns (with Deconstruct)
if (point is (0, 0)) Console.WriteLine("Origin");

// Switch expression with patterns
string classification = number switch
{
    > 0 => "Positive",
    < 0 => "Negative",
    0 => "Zero"
};

// Relational patterns
string category = age switch
{
    < 13 => "Child",
    >= 13 and < 20 => "Teen",
    >= 20 and < 65 => "Adult",
    >= 65 => "Senior"
};

// List patterns (C# 11)
if (numbers is [1, 2, _]) { }           // Starts with 1, 2
if (numbers is [.., 10]) { }            // Ends with 10
if (numbers is [>= 0, .., >= 0]) { }   // First and last are non-negative
```

### Common Mistakes
1. **Switch expression exhaustiveness** — Not covering all cases. Use `_` as discard/default.
2. **Over-complex patterns** — Deeply nested patterns are hard to read. Extract into methods.
3. **Order matters** — First matching pattern wins. Put more specific patterns before general ones.

### FAANG-Level Deep Dive
**Pattern matching compilation**: The compiler optimizes pattern matching. For `switch` over types, it generates a type-check hierarchy (if-else chain or dispatch table). FAANG: *"How does the compiler optimize `switch` on types vs `switch` on values? Can it generate O(1) dispatch for pattern matching?"* Answer: For value switches, a jump table (O(1)). For type switches, the compiler generates an if-else chain. C# 7+ types with significant perf: repeated type checks are CSE'd (common subexpression eliminated).

### Explain Like I'm 7
Pattern matching is like being a shape sorter for a toddler. You look at each block and say "it's a square, goes in the square hole" or "it's a star, goes in the star hole." Instead of checking each shape one by one, you see the shape and know where it goes.

</details>
<details>
<summary>

## Q83: Switch Expressions

</summary>

### Short Interview Answer
Switch expressions (C# 8+) are a concise, expression-based alternative to switch statements. They use `=>` syntax, produce a value, and support pattern matching. Unlike switch statements, they must be exhaustive (cover all cases or have a discard `_`). Switch expressions eliminate the need for `break` statements and `case:` labels. They also support property patterns and when clauses more elegantly than statements.

### Detailed Explanation
- **What it is**: `expression switch { pattern => result, ... }`. Each arm is a pattern and expression.
- **Why it exists**: More concise than switch statements. Expression-based (returns a value). Safer (exhaustiveness check).
- **When to use**: Mapping values to results, pattern-based dispatch, state machines.
- **When NOT to use**: When each arm has complex logic with multiple statements (use switch statement).

### C# Example
```csharp
// Switch expression — concise
string GetDayType(DayOfWeek day) => day switch
{
    DayOfWeek.Saturday or DayOfWeek.Sunday => "Weekend",
    DayOfWeek.Monday => "Start of work week",
    DayOfWeek.Friday => "End of work week",
    _ => "Midweek"
};

// With pattern matching
string Describe(object obj) => obj switch
{
    int i => $"Integer {i}",
    string s => $"String '{s}'",
    null => "Null",
    _ => "Unknown"
};

// Relational patterns
string Classify(int score) => score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F"
};

// Property and tuple patterns
decimal ApplyDiscount(Order order) => (order.Customer, order.Total) switch
{
    (VipCustomer, > 100) => order.Total * 0.8m,
    (_, > 500) => order.Total * 0.85m,
    _ => order.Total
};
```

### Common Mistakes
1. **Missing discard `_`** — Switch expressions must be exhaustive. Compiler error if not all cases covered.
2. **Order sensitivity** — More specific patterns must come first.
3. **Side effects in arms** — Switch expressions should be side-effect-free. Use switch statement for actions.

### Explain Like I'm 7
A switch expression is like a coin sorter. You drop a coin in, and it rolls through slots until it finds the right one. Each slot gives a different result (pennies go here, nickels there). If nothing matches, it falls into the discard slot.

</details>

---

<details>
<summary>

## Q84: Primary Constructors

</summary>

### Short Interview Answer
Primary constructors (C# 12 for classes/structs) allow declaring constructor parameters directly in the type declaration. The parameters are available throughout the class body. For records, primary constructors have always been the defining feature. For classes and structs, primary constructor parameters are captured and usable in member initializers. They reduce boilerplate for simple types with constructor dependencies.

### Detailed Explanation
- **What it is**: `class MyClass(int id, string name) { }` — constructor parameters at class declaration.
- **Why it exists**: Reduces constructor boilerplate. Parameters are available anywhere in the class body without explicitly storing them in fields.
- **When to use**: Classes with simple dependency injection. Types where the constructor is trivial. Data types.
- **When NOT to use**: When you need complex constructor logic or overloaded constructors. When clarity suffers.

### C# Example
```csharp
// Primary constructor — parameters available throughout
public class UserService(IUserRepository repo, ILogger<UserService> logger) : IUserService
{
    public async Task<User> GetUser(int id)
    {
        logger.LogInformation("Fetching user {Id}", id);
        return await repo.GetByIdAsync(id);
    }
}

// Old style — more boilerplate
public class UserService_Old : IUserService
{
    private readonly IUserRepository _repo;
    private readonly ILogger<UserService> _logger;

    public UserService_Old(IUserRepository repo, ILogger<UserService> logger)
    {
        _repo = repo;
        _logger = logger;
    }
}

// Primary constructor with validation
public class OrderService(IDbContext db)
{
    // Parameter 'db' can be used in field/property initializers
    private readonly IDbContext _db = db ?? throw new ArgumentNullException(nameof(db));
}
```

### Common Mistakes
1. **Storing primary constructor parameters unnecessarily** — They're already available. Only store if you need to reassign.
2. **Confusing with record primary constructors** — Record primary constructors create properties automatically. Class primary constructors do not.
3. **Overloading** — Primary constructors limit overloading. Use factory methods or optional parameters.

### Explain Like I'm 7
Primary constructors are like ordering at a drive-through. Instead of filling out a long form (building a constructor), you just tell the speaker what you want (parameters). The kitchen (class) knows what you ordered without writing it down separately.

</details>

---

<details>
<summary>

## Q85: Collection Expressions

</summary>

### Short Interview Answer
Collection expressions (C# 12) provide a unified syntax `[item1, item2, ..otherCollection]` for creating arrays, lists, spans, and other collections. The spread operator `..` (slice syntax) expands an existing collection into the new one. The compiler selects the best target type based on context. This replaces the variety of initialization syntaxes that existed before.

### Detailed Explanation
- **What it is**: `int[] numbers = [1, 2, 3];`, `List<string> names = ["Alice", "Bob"];`, `Span<int> span = [1, 2, 3];`.
- **Spread operator**: `[..first, ..second]` — combines collections by spreading elements.
- **Why it exists**: Unified, concise collection creation syntax. Replaces `new[]`, `new List<T>`, etc.
- **When to use**: Any collection initialization. Combining arrays/lists. Method arguments expecting collection types.

### C# Example
```csharp
// Array initialization
int[] numbers = [1, 2, 3, 4, 5];

// List initialization
List<string> names = ["Alice", "Bob", "Charlie"];

// Span initialization (C# 12)
Span<int> span = [10, 20, 30];

// Spread operator — combine
int[] first = [1, 2, 3];
int[] second = [4, 5, 6];
int[] combined = [..first, ..second]; // [1, 2, 3, 4, 5, 6]

// Mixed — inline and spread
int[] result = [0, ..first, 100, ..second]; // [0, 1, 2, 3, 100, 4, 5, 6]

// With LINQ integration (future)
List<int> evens = numbers.Where(n => n % 2 == 0).ToList(); // Still needed for now
```

### Common Mistakes
1. **Target type ambiguity** — `var x = [1, 2, 3];` doesn't work. Must specify target type.
2. **Spread with non-collections** — Spreading works with IEnumerable, arrays, spans only.
3. **Performance with large spreads** — Creating a collection from many spreads might allocate more than manually sizing.

### Explain Like I'm 7
Collection expressions are like making a sandwich. Instead of using different methods for each ingredient type, you just list everything you want: [bread, ..meats, cheese, ..veggies]. The spread operator `..` is like grabbing a handful of something and putting it all in.

</details>

---

<details>
<summary>

## Q86: Interceptors (C# 14)

</summary>

### Short Interview Answer
Interceptors (experimental in C# 12/13, more stable in C# 14) allow a method to declaratively replace a call to another method at compile time. Using the `[InterceptsLocation]` attribute, a source generator can intercept any method call and redirect it. This enables AOP-like behavior at compile time without runtime overhead. Primarily used by source generators for logging, validation, and interop.

### Detailed Explanation
- **What it is**: A method marked with `[InterceptsLocation]` intercepts calls to another method at specific source locations.
- **Why it exists**: Enables source generators to modify existing code behavior without manual intervention. Used for ahead-of-time (AOT) logging, intercepting calls for interception.
- **When to use**: Library authors creating source generators for logging, interop, or profiling. Not intended for manual use.
- **When NOT to use**: For runtime AOP (use Castle DynamicProxy). For simple redirection (use function pointers).

### C# Example
```csharp
// Source generator produces this — intercepts all calls to Console.WriteLine
// in a specific file at a specific line
[InterceptsLocation("Program.cs", 5, 10)]
public static void LoggedWriteLine(string message)
{
    File.AppendAllText("log.txt", message);
    Console.WriteLine(message);
}

// The call on line 5, column 10 in Program.cs
// Console.WriteLine("Hello"); → actually calls LoggedWriteLine("Hello")
```

### Common Mistakes
1. **Over-relying on interceptors** — They're a source generator feature, not a general pattern.
2. **Debugging complexity** — Intercepted calls are invisible in source. Debugging requires understanding of the generator output.
3. **Versioning** — Changing source file locations breaks interceptors.

### Explain Like I'm 7
Interceptors are like having a secretary who answers all your calls. When someone calls "John," the secretary picks up and says "John is busy, can I help?" The caller thinks they're talking to John, but the secretary intercepted the call.

</details>

---

<details>
<summary>

## Q87: Required Members

</summary>

### Short Interview Answer
The `required` modifier (C# 11) forces callers to initialize specific properties or fields during object creation, either via object initializers or constructor parameters. It's enforced at compile time. This ensures an object is fully initialized before use, eliminating the need to check for null or default values. Works with init-only and settable properties.

### Detailed Explanation
- **What it is**: `public required string Name { get; init; }` — all code creating the object must set `Name`.
- **Why it exists**: Prevents partially initialized objects. Eliminates null checks for required properties.
- **When to use**: Required configuration, required fields in DTOs, mandatory data in domain objects.
- **When NOT to use**: For optional properties (use nullable). When the property has a reasonable default.

### C# Example
```csharp
public class User
{
    public required string Name { get; init; }
    public required string Email { get; init; }
    public string? Phone { get; init; } // Optional
}

// Correct usage — all required properties set
var user = new User
{
    Name = "Alice",
    Email = "alice@example.com"
};

// Compiler error — missing required Email
// var bad = new User { Name = "Bob" };

// With primary constructor
public class Product(string sku) where string sku : required
{
    public required string Name { get; init; }
    public decimal Price { get; init; }
}
```

### Common Mistakes
1. **Required with default constructor** — If a `required` member has no init/set in object initializer, it's still required.
2. **Serialization** — Some serializers bypass object initializers. Use `[JsonConstructor]` or set required members via constructor.
3. **Required with base classes** — derived classes must also set required members if base doesn't.

### Explain Like I'm 7
Required members are like application forms with "required fields" marked in red. You can't submit the form (create the object) unless you fill in all the required fields. The computer checks before accepting your form.

</details>

---

<details>
<summary>

## Q88: Raw String Literals

</summary>

### Short Interview Answer
Raw string literals (C# 11) allow embedding arbitrary text without escape characters. They start and end with at least three double quotes (`""" ... """`). Whitespace is determined by the indentation of the closing quotes. Ideal for JSON, XML, SQL, and regex strings embedded in code. Interpolation is supported with `$"""..."""` and uses `{expression}` without escaping.

### Detailed Explanation
- **What it is**: `"""content"""` — no escapes needed for `"`, `\`, etc. Indentation trimmed relative to closing `"""`.
- **Why it exists**: Embedded strings (JSON, SQL, XML) required excessive escaping. Raw literals make them readable.
- **When to use**: SQL queries, JSON payloads, XML fragments, regex patterns, multi-line strings.
- **When NOT to use**: Simple strings without special characters (use regular string literals).

### C# Example
```csharp
// Raw string literal — no escaping needed
string json = """
{
    "name": "Alice",
    "age": 30,
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}
""";

// Interpolated raw string
string name = "Bob";
int age = 25;
string interpolated = $$"""
{
    "name": "{{name}}",
    "age": {{age}},
    "message": "Hello, {{name}}!"
}
""";

// SQL query — readable
string query = """
    SELECT u.Name, o.Total
    FROM Users u
    JOIN Orders o ON u.Id = o.UserId
    WHERE o.Status = 'Active'
    ORDER BY o.Total DESC
    """;
```

### Common Mistakes
1. **Too many or too few quotes** — Three quotes minimum. Four if the content contains three consecutive quotes.
2. **Indentation confusion** — The closing `"""` determines the left margin. All lines are trimmed by that much.
3. **Interpolation levels** — `$$` requires double braces `{{ }}`. More dollar signs = more braces.

### Explain Like I'm 7
Raw string literals are like using a permanent marker on a whiteboard. With regular strings, you have to be careful not to write special characters or they get misinterpreted (like writing backwards). With raw strings, you just write normally — quotes, backslashes, and everything just works.

</details>

---

# Section 11: Exception Handling

---

<details>
<summary>

## Q89: Exception Handling Best Practices

</summary>

### Short Interview Answer
Best practices: catch specific exceptions (not `Exception`), prefer exception filters (`when` clause), avoid throwing from finally blocks, never use exceptions for flow control, log exceptions at the boundary, always clean up resources (using statement), and preserve stack traces (`throw;` not `throw ex;`). Use custom exceptions for domain-specific errors. Keep try blocks small.

### Detailed Explanation
- **Catch specific**: `catch (SqlException ex)` not `catch (Exception ex)`. Only handle what you can handle.
- **Exception filters**: `catch (Exception ex) when (ex is SqlException or ex.Data["Retry"] is true)`.
- **`throw;` vs `throw ex;`**: `throw;` preserves original stack trace. `throw ex;` resets it (loses original line number).
- **Cleanup**: `using` statements or `finally` blocks for resource cleanup.
- **Don't swallow**: Never catch and ignore exceptions silently.
- **Don't use for flow control**: Exceptions are expensive (stack walk, heap allocation). Use return codes or Result types for expected failures.

### C# Example
```csharp
// Good practices
try
{
    await ProcessAsync();
}
catch (SqlException ex) when (ex.Number == 1205) // Deadlock — retry
{
    await Task.Delay(100);
    await ProcessAsync(); // Retry once
}
catch (TimeoutException ex)
{
    logger.LogWarning(ex, "Operation timed out");
    throw; // Preserve stack trace
}
finally
{
    // Always cleanup
    connection?.Dispose();
}

// BAD practices
try
{
    // ...
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message); // Swallowing
    throw ex; // Resets stack trace
}

// Don't use exceptions for control flow
// BAD:
try { int.Parse(input); } catch { /* not a number */ }
// GOOD:
if (int.TryParse(input, out var result)) { }
```

### Common Mistakes
1. **Catching `Exception`** — Catches everything, hides bugs, can mask `OutOfMemoryException`, etc.
2. **Throw in finally** — Overwrites the original exception.
3. **Empty catch** — `catch {}` swallows everything silently.
4. **Using exceptions for validation** — Validate with if/return, not try/catch.
5. **Not logging exceptions** — Always log at the application boundary.

### FAANG-Level Deep Dive
**Exception overhead and performance**: Throwing an exception allocates a `StackTrace` object, walks the stack, and potentially loads metadata. In .NET, first-chance exceptions are visible to debuggers. FAANG: *"What is the performance cost of throwing an exception vs returning a Result type?"* Answer: Exception throw takes ~10-100μs (stack walk + allocation). Result type is O(1) — just returning a struct. For expected failures, Result types are 100-1000x faster.

### Explain Like I'm 7
Exceptions are like fire alarms. Use them for real emergencies (fire), not for everyday things like "the toast is done." If you use the alarm for toast, people ignore it when there's a real fire.

</details>

---

<details>
<summary>

## Q90: Custom Exceptions

</summary>

### Short Interview Answer
Custom exceptions should inherit from `Exception` (or a more specific exception like `InvalidOperationException`). They should end with "Exception" suffix, implement the three constructors (parameterless, message, message + inner exception), and be serializable. Use custom exceptions for domain-specific error conditions that callers might want to catch separately.

### Detailed Explanation
- **Design**: `[Serializable]`, `class MyException : Exception`, three constructors, optional custom properties.
- **Why create them**: Allow callers to catch specific domain errors. Carry domain-specific data (e.g., validation errors).
- **When to use**: Domain errors (e.g., `InsufficientFundsException`, `OrderNotFoundException`).
- **When NOT to use**: For generic errors (use built-in exceptions). For expected errors that should be modeled as Result types.

### C# Example
```csharp
[Serializable]
public class InsufficientFundsException : Exception
{
    public string AccountId { get; }
    public decimal Balance { get; }
    public decimal RequestedAmount { get; }

    public InsufficientFundsException() { }

    public InsufficientFundsException(string message) : base(message) { }

    public InsufficientFundsException(string message, Exception inner) : base(message, inner) { }

    public InsufficientFundsException(string accountId, decimal balance, decimal requested)
        : base($"Account {accountId} has insufficient funds. Balance: {balance:C}, Requested: {requested:C}")
    {
        AccountId = accountId;
        Balance = balance;
        RequestedAmount = requested;
    }

    // Serialization constructor
    protected InsufficientFundsException(
        System.Runtime.Serialization.SerializationInfo info,
        System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
}
```

### Common Mistakes
1. **Not implementing serialization constructor** — Exception may cross AppDomain boundaries.
2. **Not ending with "Exception"** — Convention: `CustomNameException`.
3. **Making exceptions sealed unnecessarily** — Future code may want to specialize.
4. **Adding too many custom properties** — Only add what's needed for error handling.

### Explain Like I'm 7
Custom exceptions are like creating your own special alarm for when specific things go wrong. Instead of just "something is wrong," you have "the cookie jar is empty" alarm and "the TV won't turn on" alarm. Each has its own info about what's wrong.

</details>
<details>
<summary>

## Q91: When to Catch vs Throw

</summary>

### Short Interview Answer
Catch exceptions when you can handle them (retry, fallback, log). Throw (rethrow) when you can't handle them but want to add context. Don't catch exceptions just to rethrow — let them propagate. Use the "throw;" (not "throw ex;") to preserve stack trace. As a rule: libraries should rarely catch; application boundary code should catch and log/convert to user-friendly errors.

### Detailed Explanation
- **Catch when**: You can recover (retry, use cache, return default). You need to log. You need to wrap in a more meaningful exception.
- **Don't catch when**: You can't do anything useful. Let it propagate to a higher handler.
- **Throw vs rethrow**: `throw` = new exception. `throw;` = rethrow original. Use `throw;` to preserve stack trace.
- **Exception wrapping**: `throw new DomainException("message", innerException)` — preserves inner but adds context.

### C# Example
```csharp
// Catch and recover
public async Task<User> GetUserAsync(int id)
{
    try { return await _cache.GetUserAsync(id); }
    catch (CacheUnavailableException)
    {
        return await _db.GetUserAsync(id); // Fallback
    }
}

// Catch, log, rethrow
public async Task ProcessAsync()
{
    try { await DoWorkAsync(); }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Processing failed");
        throw; // Preserves stack trace — DON'T use throw ex;
    }
}

// Catch and wrap
public async Task<User> GetUserAsync(int id)
{
    try { return await _repo.FindAsync(id); }
    catch (DbException ex)
    {
        throw new UserServiceException("Failed to retrieve user", ex);
    }
}

// Bad — catch just to rethrow
try { DoWork(); }
catch (Exception) { throw; } // Useless — just adds try/catch overhead
```

### Common Mistakes
1. **Catching and rethrowing with `throw ex;`** — Resets stack trace to the catch line. Debugging becomes impossible.
2. **Swallowing exceptions** — `catch (Exception) { }` — hides errors silently.
3. **Catching then not rethrowing with no recovery** — Logging then continuing can leave system in inconsistent state.
4. **Nested exception handling** — Deep try-catch nesting is hard to follow. Use proper separation.

### Explain Like I'm 7
Catching is like catching a ball someone throws at you. You only catch it if you plan to do something with it (throw it back, put it down safely). If you can't handle it, let it fly past (propagate) to someone who can.

</details>

---

<details>
<summary>

## Q92: Exception Filters

</summary>

### Short Interview Answer
Exception filters (`catch (Exception ex) when (condition)`) allow catching exceptions only when a condition is met. The filter runs before the catch block executes, while stack is still intact (so `ex.StackTrace` shows the throw location). Filters don't unwind the stack. They're useful for conditional catching based on exception data, retry logic, or logging without catching.

### Detailed Explanation
- **What it is**: `catch (IOException ex) when (ex.HResult == 0x80070020)` — catches only specific variants.
- **Why it exists**: More expressive than nested if-statements. Stack is not unwound, so debugging is easier. Filter exceptions don't appear as "caught" in debugger.
- **When to use**: Conditional catching (retry if transient), filtering by error code, logging first-chance exceptions.
- **When NOT to use**: When you need to modify state (filters should be side-effect-free).

### C# Example
```csharp
// Retry transient failures
int retryCount = 0;
while (retryCount < 3)
{
    try { return await CallDbAsync(); }
    catch (SqlException ex) when (IsTransient(ex.Number) && retryCount++ < 3)
    {
        await Task.Delay(100 * retryCount);
    }
}

// Log without catching
try { DoWork(); }
catch (Exception ex) when (Log(ex, "Operation failed")) { } // Log returns false — not caught
// The when clause logs but returns false, so exception continues propagating

// Filter by error code
try { ProcessFile("data.txt"); }
catch (IOException ex) when (ex.HResult == unchecked((int)0x80070020)) // Sharing violation
{
    Console.WriteLine("File is in use, try later");
}

static bool Log(Exception ex, string message)
{
    Console.WriteLine($"{message}: {ex.Message}");
    return false; // Don't catch — just log
}
```

### Common Mistakes
1. **Side effects in filters** — Filters should be pure. Side effects can cause subtle bugs.
2. **Filter exception** — If the filter itself throws, it's as if the filter returned false.
3. **Stack unwinding confusion** — In VB.NET, filters behave differently. In C#, the stack is NOT unwound before the filter runs.

### Explain Like I'm 7
Exception filters are like a bouncer checking IDs. Only people over 21 (matching the condition) are let into the club (catch block). The bouncer checks BEFORE letting anyone in, and rejected people just walk away.

</details>

---

<details>
<summary>

## Q93: AggregateException

</summary>

### Short Interview Answer
`AggregateException` wraps one or more exceptions and is used in parallel and async programming. It's thrown by `Task.WhenAll`, PLINQ, and `Parallel.ForEach` when multiple operations fail. It provides `Flatten()` to unwrap nested `AggregateExceptions`, `Handle()` to handle specific exception types, and `InnerExceptions` property to access all failures.

### Detailed Explanation
- **What it is**: An exception that contains multiple inner exceptions. Inherits from `Exception`.
- **Why it exists**: When multiple operations fail concurrently (parallel tasks), a single exception can't represent all failures. `AggregateException` wraps them all.
- **When to use**: Catching exceptions from `Task.WhenAll`, `Parallel.ForEach`, PLINQ queries.
- **When NOT to use**: For single exceptions. Use `InnerException` on regular exceptions.

### C# Example
```csharp
// AggregateException from Task.WhenAll
var task1 = Task.Run(() => throw new InvalidOperationException("Op1 failed"));
var task2 = Task.Run(() => throw new ArgumentException("Arg2 failed"));

try
{
    await Task.WhenAll(task1, task2);
}
catch (AggregateException ae)
{
    foreach (var ex in ae.InnerExceptions)
        Console.WriteLine(ex.Message);
    // Output:
    // Op1 failed
    // Arg2 failed
}

// Flatten — unwraps nested AggregateExceptions
try { /* parallel operation */ }
catch (AggregateException ae)
{
    var flat = ae.Flatten();
    foreach (var ex in flat.InnerExceptions)
        Handle(ex);
}

// Handle — process specific types, rethrow others
ae.Handle(ex =>
{
    if (ex is InvalidOperationException)
    {
        Console.WriteLine("Handled IOE");
        return true; // Handled
    }
    return false; // Not handled — rethrown
});
```

### Common Mistakes
1. **Forgetting to call `.Flatten()`** — Nested `AggregateException` from recursive parallel operations requires flattening.
2. **Using catch (Exception) instead** — Only catches the first exception from `Task.WhenAll`. Use `catch (AggregateException)`.
3. **Not iterating InnerExceptions** — Multiple failures are hidden in the single aggregate.

### Explain Like I'm 7
`AggregateException` is like a mailbag full of problem letters. Instead of reporting one problem, you get the whole bag. You open the bag and deal with each letter (exception) one by one. Some letters are inside smaller envelopes (nested aggregates) — you open those too (flatten).

</details>

---

<details>
<summary>

## Q94: finally Block Guarantees

</summary>

### Short Interview Answer
A `finally` block always executes, regardless of whether an exception was thrown or caught. It runs after the try/catch block completes. The only cases where `finally` does NOT execute are: `Environment.FailFast()`, thread abort (obsolete), process crash, and stack overflow (on some platforms). `finally` is primarily used for resource cleanup and should never throw exceptions.

### Detailed Explanation
- **Execution guarantee**: `finally` runs after try (and catch if exception) completes. Even if the try block contains `return`, `goto`, or `break`, the finally block runs before control leaves.
- **What doesn't prevent finally**: `return` statements, `throw` (as long as exception is handled), normal completion.
- **What prevents finally**: `Environment.FailFast()`, `StackOverflowException` (on some runtimes), process kill.
- **Best practices**: Don't throw from `finally`. Don't put complex logic. Prefer `using` for `IDisposable`.

### C# Example
```csharp
// finally always runs
public int Divide(int a, int b)
{
    var sw = Stopwatch.StartNew();
    try
    {
        return a / b;
    }
    catch (DivideByZeroException)
    {
        Console.WriteLine("Division by zero");
        throw;
    }
    finally
    {
        sw.Stop();
        Console.WriteLine($"Elapsed: {sw.Elapsed}"); // Runs even with throw!
    }
}

// finally with return
public string GetData()
{
    try
    {
        return "data";
    }
    finally
    {
        Console.WriteLine("Cleanup"); // Runs BEFORE the value is returned!
    }
}

// Using is finally
using var file = File.OpenRead("test.txt");
// try-finally for Dispose generated by compiler
```

### Common Mistakes
1. **Throwing in finally** — Overwrites the original exception. Hard to debug.
2. **Returning in finally** — Overrides the try block's return value. Very confusing.
3. **Complex logic in finally** — Keep it simple (dispose, close). Don't add business logic.
4. **Assuming finally runs on FailFast** — `Environment.FailFast` terminates the process immediately.

### Explain Like I'm 7
A `finally` block is like brushing your teeth before bed. No matter what happened during the day (good day, bad day, surprises), you always brush your teeth before sleeping. Even if you're tired and want to skip straight to bed, you still brush first (finally runs before return).

</details>

---

# Section 12: Threading & Synchronization

---

<details>
<summary>

## Q95: lock Statement and Monitor

</summary>

### Short Interview Answer
The `lock` statement is syntactic sugar for `Monitor.Enter` and `Monitor.Exit` in a `try-finally` block. It ensures only one thread executes a critical section at a time. The locked object should be a reference type, typically a dedicated `private readonly object` field. Locking on `this`, `typeof(MyType)`, or strings is discouraged due to potential deadlocks and external access.

### Detailed Explanation
- **What it is**: `lock (obj) { critical section }`. Compiler generates `Monitor.Enter(obj)` and `Monitor.Exit(obj)` in finally.
- **Why it exists**: Prevents race conditions when multiple threads access shared mutable state.
- **When to use**: Protecting shared state (static fields, caches, counters). Short critical sections only.
- **When NOT to use**: For immutable data. For atomic operations (use `Interlocked`). For I/O-bound critical sections. Long locks cause contention.

### C# Example
```csharp
public class ThreadSafeCounter
{
    private readonly object _lock = new();
    private int _count;

    public void Increment()
    {
        lock (_lock)
        {
            _count++;
        }
    }

    public int GetCount()
    {
        lock (_lock)
        {
            return _count;
        }
    }
}

// What lock generates (approximately)
// Monitor.Enter(_lock);
// try { _count++; }
// finally { Monitor.Exit(_lock); }

// BAD — locking on public object
public void BadLock()
{
    lock (this) { } // Bad — external code can lock on this too
    lock (typeof(MyClass)) { } // Bad — typeof is publicly accessible
    lock ("string") { } // Bad — string interning means same string = same lock
}
```

### Common Mistakes
1. **Locking on value types** — `lock (intValue)` doesn't compile because value types aren't reference types.
2. **Locking on `this` or `typeof`** — External code can cause deadlocks.
3. **Forgetting to unlock** — If the locked code throws, `finally` guarantees release. But beware of `Monitor.Enter` without lock statement.
4. **Locking too broadly** — Holding lock during I/O or long operations causes contention.
5. **Deadlocks** — Multiple locks acquired in different orders cause deadlocks. Consistent ordering is critical.

### FAANG-Level Deep Dive
**Monitor.Enter and thread spinning**: When a thread can't acquire a lock, it first spins (spin-wait) briefly, then blocks (enters kernel wait). FAANG: *"What is the two-phase locking strategy of `Monitor.Enter`? How does it balance CPU and context switching?"* Answer: First phase: spin-wait (thousands of iterations) — assumes lock will be released soon, avoids context switch. Second phase: kernel wait (blocking) — releases CPU for other work. Number of spins is adaptive based on contention.

### Explain Like I'm 7
A `lock` is like a bathroom key. Only one person can use the bathroom at a time. You take the key, use the bathroom, then hang the key back up. If someone else needs it, they wait (spin) for a moment, and if it's still busy, they sit down (block) until it's free.

</details>

---

<details>
<summary>

## Q96: Mutex vs Semaphore vs SemaphoreSlim

</summary>

### Short Interview Answer
`Mutex` is a cross-process synchronization primitive (system-wide). `Semaphore` limits concurrent access to a resource pool (can be cross-process). `SemaphoreSlim` is a lightweight, in-process-only semaphore with no Windows kernel handle. Use `Mutex` for inter-process synchronization. Use `SemaphoreSlim` for in-process resource pooling (e.g., limiting concurrent database connections). Use `Semaphore` for cross-process resource limiting.

### Detailed Explanation
- **Mutex**: System-wide (named mutexes). Only one thread can own it. Can be used across processes. Heavier (kernel object). Supports `WaitAll`/`WaitAny`.
- **Semaphore**: Counts resources. Allows N concurrent accesses. Can be named (cross-process). Kernel object.
- **SemaphoreSlim**: In-process only. Lightweight (no kernel handle). Uses `Monitor`/spin-wait internally. Supports `WaitAsync()`.
- **When to use Mutex**: Single-instance application enforcement, cross-process locking.
- **When to use Semaphore/SemaphoreSlim**: Connection pooling, throttling concurrent operations.

### C# Example
```csharp
// Mutex — cross-process
using var mutex = new Mutex(false, "Global\\MyAppMutex");
if (!mutex.WaitOne(TimeSpan.Zero))
{
    Console.WriteLine("Another instance is running");
    return;
}
try { /* run app */ }
finally { mutex.ReleaseMutex(); }

// SemaphoreSlim — in-process throttling
var semaphore = new SemaphoreSlim(initialCount: 3, maxCount: 3); // Max 3 concurrent

async Task ProcessAsync()
{
    await semaphore.WaitAsync(); // Async wait!
    try { await DoWorkAsync(); }
    finally { semaphore.Release(); }
}
```

### Common Mistakes
1. **Not releasing** — Always release in `finally`. `SemaphoreSlim` and `Mutex` both need explicit release.
2. **Abandoned Mutex** — If a process holding a named mutex terminates without releasing, the mutex is "abandoned" — next `WaitOne` succeeds with `AbandonedMutexException`.
3. **Overusing Mutex** — Most C# apps only need `SemaphoreSlim` or `lock`. Mutex is for inter-process only.
4. **SemaphoreSlim.Wait() in async** — Prefer `WaitAsync()` to avoid blocking the thread.

### Explain Like I'm 7
Mutex is like a single key to a locked room that can be shared across buildings (processes). Semaphore is like a parking lot with N spaces — N cars can park at once. SemaphoreSlim is like a small parking lot that's cheaper to maintain but only works for your building.

</details>

---

<details>
<summary>

## Q97: Interlocked Operations

</summary>

### Short Interview Answer
`Interlocked` provides thread-safe atomic operations for variables: `Increment`, `Decrement`, `Add`, `Exchange`, `CompareExchange`, and `Read`. These operations are performed as single CPU instructions (or hardware-locked operations), preventing race conditions without explicit locks. They're the fastest synchronization mechanism for simple integer operations.

### Detailed Explanation
- **What it is**: Static methods on `System.Threading.Interlocked`. Atomic operations on `int`, `long`, `double`, `IntPtr`, `object`, `T`.
- **Why it exists**: Lock-free synchronization for simple operations. Much faster than `lock` statements for single variable updates.
- **When to use**: Counters, flags, simple state updates, lock-free data structures.
- **When NOT to use**: When you need to atomically update multiple variables (use `lock`). Complex state transitions.

### C# Example
```csharp
public class LockFreeCounter
{
    private int _count;

    public int Increment() => Interlocked.Increment(ref _count);
    public int Decrement() => Interlocked.Decrement(ref _count);
    public int Add(int value) => Interlocked.Add(ref _count, value);
    public int Read() => Interlocked.Read(ref Unsafe.As<int, long>(ref _count));
    public int Exchange(int value) => Interlocked.Exchange(ref _count, value);
}

// CompareExchange — CAS (Compare-And-Swap)
public bool TrySetIfEquals(int expected, int desired)
{
    return Interlocked.CompareExchange(ref _count, desired, expected) == expected;
}

// Spin-lock using Interlocked
public class SimpleSpinLock
{
    private int _locked;

    public void Enter()
    {
        while (Interlocked.CompareExchange(ref _locked, 1, 0) != 0)
            Thread.SpinWait(10); // Busy wait
    }

    public void Exit() => Interlocked.Exchange(ref _locked, 0);
}
```

### Common Mistakes
1. **Not using `ref`** — `Interlocked.Increment` requires `ref` to the variable.
2. **Using on long without `Interlocked.Read`** — On 32-bit systems, reading a `long` is not atomic without `Interlocked.Read`.
3. **Assuming volatile + Interlocked are the same** — `volatile` prevents compiler reordering but doesn't provide atomicity for read-modify-write.
4. **Using for complex state** — `Interlocked` works for single variables only.

### FAANG-Level Deep Dive
**Interlocked and CPU instructions**: `Interlocked.Increment` translates to `lock inc` on x86 (lock prefix ensures atomicity). `CompareExchange` uses `lock cmpxchg`. FAANG: *"How does `lock cmpxchg` work at the CPU level? What is the cache coherence protocol (MESI) impact?"* Answer: The `lock` prefix asserts the LOCK# signal, preventing other processors from accessing the memory. Modern CPUs use cache locking (not bus locking). The cache line is held in Exclusive/Modified state during the operation.

### Explain Like I'm 7
`Interlocked` is like a special pen that can write a number on a whiteboard in one smooth motion, without anyone else being able to write at the same time. Regular code is like writing with a marker — someone could grab your hand mid-letter and mess it up.

</details>
<details>
<summary>

## Q98: ReaderWriterLockSlim

</summary>

### Short Interview Answer
ReaderWriterLockSlim allows multiple concurrent readers or exclusive writer access to a resource. Readers don't block other readers (only writers). Writers block all readers and other writers. It's more efficient than a full lock when reads vastly outnumber writes. It supports upgradeable mode (read that can be promoted to write). Use for scenarios like configuration caches where reads are frequent and writes are rare.

### Detailed Explanation
- **What it is**: A lock with three modes: Read (shared), Write (exclusive), UpgradeableRead (read that can atomically become write).
- **Why it exists**: Full lock blocks all readers, reducing concurrency. ReaderWriterLockSlim allows concurrent reads.
- **When to use**: Read-heavy workloads (caches, configuration, lookup tables). Reads > 80% of operations.
- **When NOT to use**: Write-heavy workloads (lock is simpler and faster). Very short critical sections (lock overhead less than RWLS overhead).

### C# Example
`csharp
public class ThreadSafeCache<TKey, TValue>
{
    private readonly ReaderWriterLockSlim _lock = new();
    private readonly Dictionary<TKey, TValue> _cache = new();

    public TValue? Get(TKey key)
    {
        _lock.EnterReadLock();
        try { return _cache.TryGetValue(key, out var v) ? v : default; }
        finally { _lock.ExitReadLock(); }
    }

    public void Add(TKey key, TValue value)
    {
        _lock.EnterWriteLock();
        try { _cache[key] = value; }
        finally { _lock.ExitWriteLock(); }
    }

    public TValue GetOrAdd(TKey key, Func<TKey, TValue> factory)
    {
        _lock.EnterUpgradeableReadLock();
        try
        {
            if (_cache.TryGetValue(key, out var existing)) return existing;
            _lock.EnterWriteLock();
            try { return _cache[key] = factory(key); }
            finally { _lock.ExitWriteLock(); }
        }
        finally { _lock.ExitUpgradeableReadLock(); }
    }

    public void Dispose() => _lock.Dispose();
}
`

### Common Mistakes
1. **Not disposing** — ReaderWriterLockSlim implements IDisposable.
2. **Recursion** — Default constructor disables recursion. LockRecursionPolicy.SupportsRecursion is error-prone.
3. **UpgradeableRead starvation** — Only one thread can hold upgradeable read. Don't hold it long.

### Explain Like I'm 7
ReaderWriterLockSlim is like a library. Many people can read books at the same time (concurrent reads). But when someone needs to reorganize shelves (write), everyone must leave until it's done.

</details>

---

<details>
<summary>

## Q99: Barrier and CountdownEvent

</summary>

### Short Interview Answer
Barrier synchronizes multiple threads at a phase boundary — each thread signals arrival and waits for all participants to arrive before continuing. CountdownEvent signals when a count reaches zero — threads signal completion, and a waiting thread is released when all complete. Barrier is for phased parallel work (multiple rounds of computation). CountdownEvent is for waiting for N operations to complete.

### C# Example
`csharp
// Barrier — parallel phases
var barrier = new Barrier(3, b => Console.WriteLine($"Phase {b.CurrentPhaseNumber} complete"));
Parallel.Invoke(
    () => { for (int i = 0; i < 3; i++) { barrier.SignalAndWait(); } },
    () => { for (int i = 0; i < 3; i++) { barrier.SignalAndWait(); } },
    () => { for (int i = 0; i < 3; i++) { barrier.SignalAndWait(); } }
);
barrier.Dispose();

// CountdownEvent — wait for N operations
var countdown = new CountdownEvent(5);
for (int i = 0; i < 5; i++)
{
    int id = i;
    Task.Run(() => { Thread.Sleep(id * 100); countdown.Signal(); });
}
countdown.Wait(); // Blocks until all 5 signal
Console.WriteLine("All done");
`

### Explain Like I'm 7
Barrier is like a dance where everyone must strike a pose at the same time before the next song. CountdownEvent is like waiting for all friends to arrive before starting the movie.

</details>

---

<details>
<summary>

## Q100: SpinLock and SpinWait

</summary>

### Short Interview Answer
SpinLock is a lightweight mutual exclusion primitive that busy-waits (spins) instead of blocking. Useful for very short critical sections where context switching overhead exceeds spinning cost. SpinWait is a helper that spins with interleaved yields to be CPU-friendly. Both should be used with extreme caution — they're for high-performance, short-duration locks in heavily optimized code.

### C# Example
`csharp
// SpinLock — use with caution (struct, pass by ref!)
var spinLock = new SpinLock();
bool lockTaken = false;
try
{
    spinLock.Enter(ref lockTaken);
    // Very short critical section
}
finally { if (lockTaken) spinLock.Exit(); }

// SpinWait — busy wait with yielding
SpinWait.SpinUntil(() => condition, TimeSpan.FromMilliseconds(500));
`

### Common Mistakes
1. **SpinLock is a struct** — Passing by value copies it, losing synchronization.
2. **Using for I/O or long operations** — Spinning for milliseconds wastes CPU.
3. **Not handling lockTaken** — Always check before Exit.

### FAANG-Level Deep Dive
**SpinWait internals**: Two-phase strategy: phase 1 spins (with Thread.Yield and Sleep(0)), phase 2 calls Sleep(1). FAANG: *"Design a lock-free stack using Interlocked.CompareExchange and explain how it handles the ABA problem."*

### Explain Like I'm 7
SpinLock is like tapping your foot impatiently waiting for the bathroom. Fine for 1 second, terrible for 5 minutes.

</details>

---

# Section 13: Span&lt;T&gt; & Memory&lt;T&gt;

---

<details>
<summary>

## Q101: Span&lt;T&gt; Fundamentals

</summary>

### Short Interview Answer
Span<T> is a ref struct that provides a type-safe, memory-safe view of contiguous memory (arrays, unmanaged memory, stackalloc). It's stack-only — cannot be boxed, used as generic parameter, or stored on the heap. It enables slicing without copying and interop with native memory without unsafe. Operations on Span<T> avoid allocations and can be faster than array operations.

### Detailed Explanation
- **What it is**: ef struct Span<T>. Wraps a pointer + length. Backs arrays, native memory, stack memory.
- **Why it exists**: High-performance memory manipulation without allocations. Slice without copy. Bridge managed and unmanaged memory.
- **When to use**: Hot paths that manipulate buffers, parse strings/byte streams, interop with native code.
- **When NOT to use**: When you need to store the span on the heap (async, fields). Use Memory<T>.

### C# Example
`csharp
// Span from array
int[] array = [1, 2, 3, 4, 5];
Span<int> span = array; // No allocation
span[0] = 10; // Modifies array[0]

// Slicing — no copy
Span<int> slice = span.Slice(1, 3); // [2, 3, 4]

// Span from stackalloc
Span<byte> stackBuffer = stackalloc byte[256];

// Fast string parsing
ReadOnlySpan<char> text = "Hello, World!".AsSpan();
var first = text[..5]; // "Hello" — no allocation!
var second = text[7..]; // "World!"
`

### Common Mistakes
1. **Storing Span in a field** — ef struct cannot be a field of a class.
2. **Using Span in async methods** — ef struct cannot be used in async.
3. **Not checking length** — Out-of-bounds access throws IndexOutOfRangeException.

### FAANG-Level Deep Dive
**Span<T> and JIT intrinsics**: The JIT special-cases Span<T> for bounds-check elimination. When the JIT can prove the index is within bounds, it eliminates the bounds check, giving near-pointer speed with memory safety.

### Explain Like I'm 7
Span<T> is like looking through a paper towel tube at a row of toys. You can only see part of the row (slice), and moving the tube changes what you see. No toys are moved or copied.

</details>

---

<details>
<summary>

## Q102: Memory&lt;T&gt; Fundamentals

</summary>

### Short Interview Answer
Memory<T> is a heap-safe, non-generic-constrained version of Span<T> that CAN be stored on the heap (fields, async methods). It represents a contiguous region of memory without the stack-only restriction. Memory<T> has a Span<T> property for synchronous operations. Use Memory<T> when you need to pass buffer ownership across async operations or store references in fields.

### C# Example
`csharp
// Memory — heap-safe
Memory<char> memory = new char[100]; // Can be stored in field
Memory<char> slice = memory.Slice(10, 50); // No copy

// Get Span for synchronous operations
Span<char> span = memory.Span;
span[0] = 'A';

// Memory in async methods
async Task ProcessAsync(Memory<byte> buffer)
{
    Span<byte> span = buffer.Span;
    span[0] = 255;
    await Task.Delay(100);
    // buffer.Span is safe after await (array-backed)
}
`

### Explain Like I'm 7
Memory<T> is like having a photo of the toy shelf that you can put in your pocket (store in heap). When ready, you take the photo out and get the paper tube (Span) to look directly.

</details>

---

<details>
<summary>

## Q103: ReadOnlySpan&lt;T&gt; and ReadOnlyMemory&lt;T&gt;

</summary>

### Short Interview Answer
ReadOnlySpan<T> and ReadOnlyMemory<T> provide read-only access to contiguous memory. They're the read-only counterparts. ReadOnlySpan<char> is extensively used in modern string processing APIs. They enable zero-allocation parsing of strings and byte streams.

### C# Example
`csharp
string text = "Hello, World!";
ReadOnlySpan<char> span = text.AsSpan();
var comma = span.IndexOf(',');
var greeting = span[..comma]; // "Hello" — no allocation!

// ReadOnlySpan in method parameters
int CountSpaces(ReadOnlySpan<char> text)
{
    int count = 0;
    foreach (var c in text) if (c == ' ') count++;
    return count;
}
`

### Explain Like I'm 7
ReadOnlySpan is like looking at a painting through glass. You see everything clearly but can't touch or change it.

</details>

---

<details>
<summary>

## Q104: Strings and Span&lt;T&gt;

</summary>

### Short Interview Answer
ReadOnlySpan<char> enables high-performance string processing without allocations. Methods like AsSpan() and ranges (	ext[..5]) create views into the string without copying. This is critical for parsing, serialization, and any code processing large text. Before Span, string operations created new strings. Span eliminates these allocations.

### C# Example
`csharp
string logLine = "2024-01-15 10:30:45 [INFO] Request processed in 42ms";

ReadOnlySpan<char> line = logLine.AsSpan();
var dateSpan = line[..10];      // "2024-01-15"
var timeSpan = line[11..19];    // "10:30:45"
var levelSpan = line[21..25];   // "INFO"

// Parse integer from span without allocation
var msStr = levelSpan[levelSpan.LastIndexOf(' ')..];
int ms = int.Parse(msStr); // Int32.Parse accepts ReadOnlySpan<char>
`

### FAANG-Level Deep Dive
**string.Create and Span interop**: string.Create(length, state, (span, state) => { ... }) provides a unique way to construct strings by directly writing into the internal buffer. Only one allocation total — no intermediate buffer like StringBuilder.

### Explain Like I'm 7
Reading a string with Span is like reading a document through a magnifying glass. You can read any part without cutting pieces out (no Substring allocation).

</details>

---

# Section 14: Source Generators

---

<details>
<summary>

## Q105: Source Generators Overview

</summary>

### Short Interview Answer
Source generators (C# 9+) are compile-time components that analyze user code and generate additional C# source files compiled alongside the original code. They enable code generation without runtime reflection, improving performance and enabling AOT scenarios. Common uses: serialization (System.Text.Json), logging, dependency injection, mappers, and validation.

### C# Example
`csharp
[Generator]
public class MyGenerator : ISourceGenerator
{
    public void Initialize(GeneratorInitializationContext context) { }

    public void Execute(GeneratorExecutionContext context)
    {
        var source = """
        namespace Generated
        {
            public static class Helper
            {
                public static string GetMessage() => "Compile-time generated!";
            }
        }
        """;
        context.AddSource("Helper.g.cs", source);
    }
}
`

### Common Mistakes
1. **Forgetting [Generator] attribute** — Generator won't execute.
2. **Generating invalid code** — Always validate generated output.
3. **Slow generators** — Use IIncrementalGenerator for caching.

### Explain Like I'm 7
Source generators are like a helper robot that watches you code and automatically creates the boring, repetitive parts.

</details>

---

<details>
<summary>

## Q106: Incremental Generators

</summary>

### Short Interview Answer
IIncrementalGenerator is the recommended base for source generators. It caches previous results and only re-runs when inputs change. It uses a pipeline of incremental value providers that track dependencies. This significantly improves IDE performance and build times compared to ISourceGenerator.

### C# Example
`csharp
[Generator]
public class MyIncrementalGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var classes = context.SyntaxProvider
            .CreateSyntaxProvider(
                predicate: (node, _) => node is ClassDeclarationSyntax,
                transform: (ctx, _) =>
                {
                    var classDecl = (ClassDeclarationSyntax)ctx.Node;
                    var symbol = ctx.SemanticModel.GetDeclaredSymbol(classDecl);
                    return symbol?.Name;
                })
            .Where(name => name != null)
            .Collect();

        context.RegisterSourceOutput(classes, (spc, names) =>
        {
            foreach (var name in names)
                spc.AddSource($"_{name}.g.cs", $"// Generated for {name}");
        });
    }
}
`

### Explain Like I'm 7
Incremental generators are like a chef who remembers yesterday's meals. If the recipe hasn't changed, they reheat instead of cooking from scratch.

</details>

---

<details>
<summary>

## Q107: Roslyn APIs for Source Generators

</summary>

### Short Interview Answer
Source generators use Roslyn APIs: SyntaxTree (parse tree), SemanticModel (type information), Compilation (project context). Key APIs: SyntaxValueProvider.ForAttributeWithMetadataName for efficient attribute-based discovery, SemanticModel.GetDeclaredSymbol() for type symbols, AttributeData for attribute inspection. Use syntax-based filtering first (fast), then semantic resolution.

### C# Example
`csharp
// Using ForAttributeWithMetadataName (C# 12+) — most efficient!
var decorated = context.SyntaxProvider
    .ForAttributeWithMetadataName(
        "MyGenerator.MyAttribute",
        predicate: (node, _) => node is ClassDeclarationSyntax,
        transform: (ctx, _) =>
        {
            var symbol = (INamedTypeSymbol)ctx.TargetSymbol;
            return new ClassInfo(symbol.Name, symbol.ContainingNamespace.ToString());
        })
    .Collect();
`

### Explain Like I'm 7
Roslyn APIs are like a library's card catalog. Syntax API tells you which shelf books are on. Semantic API tells you what books are about.

</details>

---

<details>
<summary>

## Q108: Source Generator vs Reflection

</summary>

### Short Interview Answer
Source generators produce code at compile time; reflection inspects types at runtime. Source generators offer superior performance (no runtime overhead), AOT compatibility (code is pre-generated), and compile-time verification. Reflection is more flexible (works with any type without pre-generation) but has slower startup, can't be trimmed, and doesn't work with Native AOT. Modern .NET favors source generators for serialization, DI, and mapping.

### C# Example
`csharp
// Reflection-based — slow startup, can't trim
var dest = Activator.CreateInstance<TDest>();
foreach (var prop in typeof(TSrc).GetProperties())
    typeof(TDest).GetProperty(prop.Name)?.SetValue(dest, prop.GetValue(source));

// Source generator — compile-time, AOT-compatible
// [GenerateMap(typeof(UserDto))] partial class UserMapper { }
// Generated code is direct property assignment — no reflection

// AOT-compatible JSON
[JsonSerializable(typeof(MyClass))]
public partial class MyJsonContext : JsonSerializerContext { }
`

### FAANG-Level Deep Dive
**Native AOT and source generators**: .NET Native AOT compiles to native code ahead-of-time. Reflection is severely limited. Source generators are essential for AOT. System.Text.Json provides a source generator (JsonSerializerContext) for AOT-compatible serialization.

### Explain Like I'm 7
Source generators vs reflection is like packing your suitcase the night before (compile time) vs throwing clothes in a bag as you run out the door (runtime). For Native AOT, you MUST pack the night before.

</details>

---

## 🎯 Congratulations! You've completed Volume 1

This guide covered **108 questions** across **14 sections**, from C# basics to advanced source generators.

### What's Next?
- Volume 2: .NET Runtime & CLR Internals
- Volume 3: ASP.NET Core & Web APIs
- Volume 4: Entity Framework Core & Dapper
- Volume 5: System Design & Architecture
- Volume 6: Design Patterns in C#
- Volume 7: Testing
- Volume 8: Performance & Optimization
- Volume 9: Security
- Volume 10: Microservices & Distributed Systems
- Volume 11: Cloud & Azure
- Volume 12: DevOps & CI/CD
- Volume 13: Data Structures & Algorithms
- Volume 14: System Design Deep Dive
- Volume 15: Leadership & System Design
- Volume 16: Behavioral & Soft Skills

### Key Study Tips
1. **Understand, don't memorize**
2. **Code the examples** — Type them out, modify, experiment
3. **Teach someone** — The best way to learn is to explain
4. **Practice whiteboarding** — Draw code and diagrams on paper
5. **Review fundamentals** — Strong foundation beats buzzwords

---

<p align="center">
  <i>Volume 1 of 16 — C# Interview Preparation Guide 2026</i><br/>
  <i>Created by a Principal Engineer with 20+ years experience</i>
</p>
