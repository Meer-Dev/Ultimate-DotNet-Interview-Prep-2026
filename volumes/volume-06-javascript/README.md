# Volume 6: JavaScript & TypeScript Interview Preparation Guide 2026

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=nodedotjs" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Questions-108%2F100-success?style=for-the-badge" alt="Questions"/>
  <img src="https://img.shields.io/badge/Level-Beginner_to_FAANG-orange?style=for-the-badge" alt="Level"/>
  <img src="https://img.shields.io/badge/Framework-React_|_Angular_|_Vue-blue?style=for-the-badge" alt="Framework"/>
</p>

<p align="center">
  <b>Volume 6</b> of a 16-volume interview preparation series.<br/>
  <i>Expert-level coverage from a Principal Engineer with 20+ years, FAANG interviewer, and Senior Frontend Architect.</i>
</p>

---

## ðŸ“Š Progress Tracker

```
â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ 108/108 Questions Complete
```

| Section | Questions | Status |
|---------|-----------|--------|
| JS Core Concepts | Q01-Q07 | âœ… Complete |
| Execution Context & Hoisting | Q08-Q14 | âœ… Complete |
| Closures & Scope | Q15-Q21 | âœ… Complete |
| Prototypes & Inheritance | Q22-Q28 | âœ… Complete |
| Async JS | Q29-Q36 | âœ… Complete |
| Event Loop | Q37-Q43 | âœ… Complete |
| ES6+ Features | Q44-Q50 | âœ… Complete |
| Arrays & Objects | Q51-Q57 | âœ… Complete |
| TypeScript | Q58-Q65 | âœ… Complete |
| Browser APIs | Q66-Q72 | âœ… Complete |
| Functional Programming | Q73-Q78 | âœ… Complete |
| Module Systems | Q79-Q84 | âœ… Complete |
| Error Handling | Q85-Q90 | âœ… Complete |
| Memory Management | Q91-Q96 | âœ… Complete |
| Security | Q97-Q102 | âœ… Complete |
| Node.js Specific | Q103-Q108 | âœ… Complete |

---

## ðŸ“š Table of Contents

<details>
<summary><b>ðŸ“‘ Click to expand TOC â€” 108 Questions across 16 Topics</b></summary>

### Section 1: JS Core Concepts (Q01-Q07)
- [Q01: `==` vs `===`](#q01--vs-)
- [Q02: Type Coercion](#q02-type-coercion)
- [Q03: NaN, null, undefined](#q03-nan-null-undefined)
- [Q04: Truthy and Falsy Values](#q04-truthy-and-falsy-values)
- [Q05: `typeof` vs `instanceof`](#q05-typeof-vs-instanceof)
- [Q06: Primitive vs Reference Types](#q06-primitive-vs-reference-types)
- [Q07: Number and BigInt](#q07-number-and-bigint)

### Section 2: Execution Context & Hoisting (Q08-Q14)
- [Q08: Execution Context](#q08-execution-context)
- [Q09: Hoisting](#q09-hoisting)
- [Q10: Temporal Dead Zone](#q10-temporal-dead-zone)
- [Q11: `let`, `const`, `var`](#q11-let-const-var)
- [Q12: Scope Chain](#q12-scope-chain)
- [Q13: `this` Keyword](#q13-this-keyword)
- [Q14: `call`, `apply`, `bind`](#q14-call-apply-bind)

### Section 3: Closures & Scope (Q15-Q21)
- [Q15: Closures](#q15-closures)
- [Q16: Lexical Scoping](#q16-lexical-scoping)
- [Q17: IIFE](#q17-iife)
- [Q18: Module Pattern with Closures](#q18-module-pattern-with-closures)
- [Q19: Closure Memory Leaks](#q19-closure-memory-leaks)
- [Q20: Practical Closure Uses (Debounce, Throttle)](#q20-practical-closure-uses-debounce-throttle)
- [Q21: Currying](#q21-currying)

### Section 4: Prototypes & Inheritance (Q22-Q28)
- [Q22: Prototype Chain](#q22-prototype-chain)
- [Q23: `__proto__` vs `prototype`](#q23-__proto__-vs-prototype)
- [Q24: ES6 Classes](#q24-es6-classes)
- [Q25: `Object.create`](#q25-objectcreate)
- [Q26: Mixins](#q26-mixins)
- [Q27: `new` Keyword Internals](#q27-new-keyword-internals)
- [Q28: Property Descriptors](#q28-property-descriptors)

### Section 5: Async JS (Q29-Q36)
- [Q29: Callbacks and Callback Hell](#q29-callbacks-and-callback-hell)
- [Q30: Promises](#q30-promises)
- [Q31: `async`/`await`](#q31-asyncawait)
- [Q32: Promise Combinators](#q32-promise-combinators)
- [Q33: Error Handling in Async Code](#q33-error-handling-in-async-code)
- [Q34: Async Iterators and Generators](#q34-async-iterators-and-generators)
- [Q35: `finally` in Promises](#q35-finally-in-promises)
- [Q36: Promise Unhandled Rejection](#q36-promise-unhandled-rejection)

### Section 6: Event Loop (Q37-Q43)
- [Q37: Event Loop Model](#q37-event-loop-model)
- [Q38: Microtasks vs Macrotasks](#q38-microtasks-vs-macrotasks)
- [Q39: `requestAnimationFrame`](#q39-requestanimationframe)
- [Q40: Rendering Pipeline](#q40-rendering-pipeline)
- [Q41: Node.js Event Loop Phases](#q41-nodejs-event-loop-phases)
- [Q42: `process.nextTick`](#q42-processnexttick)
- [Q43: Starvation of the Event Loop](#q43-starvation-of-the-event-loop)

### Section 7: ES6+ Features (Q44-Q50)
- [Q44: Destructuring](#q44-destructuring)
- [Q45: Spread and Rest Operators](#q45-spread-and-rest-operators)
- [Q46: Arrow Functions](#q46-arrow-functions)
- [Q47: Map and Set](#q47-map-and-set)
- [Q48: WeakMap and WeakSet](#q48-weakmap-and-weakset)
- [Q49: Symbol](#q49-symbol)
- [Q50: Proxy and Reflect](#q50-proxy-and-reflect)

### Section 8: Arrays & Objects (Q51-Q57)
- [Q51: Array Methods Deep Dive](#q51-array-methods-deep-dive)
- [Q52: Deep Cloning](#q52-deep-cloning)
- [Q53: Immutability Patterns](#q53-immutability-patterns)
- [Q54: Getters and Setters](#q54-getters-and-setters)
- [Q55: `Object.defineProperty`](#q55-objectdefineproperty)
- [Q56: `Object.freeze` vs `Object.seal` vs `Object.preventExtensions`](#q56-objectfreeze-vs-objectseal-vs-objectpreventextensions)
- [Q57: Array-Like Objects and Iterables](#q57-array-like-objects-and-iterables)

### Section 9: TypeScript (Q58-Q65)
- [Q58: Interfaces vs Types](#q58-interfaces-vs-types)
- [Q59: Generics](#q59-generics)
- [Q60: Utility Types](#q60-utility-types)
- [Q61: Conditional Types](#q61-conditional-types)
- [Q62: Mapped Types](#q62-mapped-types)
- [Q63: `infer` Keyword](#q63-infer-keyword)
- [Q64: Template Literal Types](#q64-template-literal-types)
- [Q65: `satisfies` Operator](#q65-satisfies-operator)

### Section 10: Browser APIs (Q66-Q72)
- [Q66: DOM Manipulation and Virtual DOM](#q66-dom-manipulation-and-virtual-dom)
- [Q67: Fetch API](#q67-fetch-api)
- [Q68: WebSocket](#q68-websocket)
- [Q69: Web Workers](#q69-web-workers)
- [Q70: Service Workers](#q70-service-workers)
- [Q71: IndexedDB](#q71-indexeddb)
- [Q72: IntersectionObserver and ResizeObserver](#q72-intersectionobserver-and-resizeobserver)

### Section 11: Functional Programming (Q73-Q78)
- [Q73: Pure Functions](#q73-pure-functions)
- [Q74: Function Composition](#q74-function-composition)
- [Q75: Immutability in FP](#q75-immutability-in-fp)
- [Q76: Memoization](#q76-memoization)
- [Q77: Higher-Order Functions](#q77-higher-order-functions)
- [Q78: Monad Pattern (Maybe, Either)](#q78-monad-pattern-maybe-either)

### Section 12: Module Systems (Q79-Q84)
- [Q79: ESM vs CommonJS](#q79-esm-vs-commonjs)
- [Q80: Dynamic Imports](#q80-dynamic-imports)
- [Q81: Tree Shaking](#q81-tree-shaking)
- [Q82: Import Maps](#q82-import-maps)
- [Q83: Circular Dependencies](#q83-circular-dependencies)
- [Q84: AMD and UMD](#q84-amd-and-umd)

### Section 13: Error Handling (Q85-Q90)
- [Q85: try/catch/finally](#q85-trycatchfinally)
- [Q86: Custom Error Classes](#q86-custom-error-classes)
- [Q87: Stack Traces](#q87-stack-traces)
- [Q88: Global Error Handlers](#q88-global-error-handlers)
- [Q89: Error Handling in Async/Await](#q89-error-handling-in-asyncawait)
- [Q90: Result Pattern](#q90-result-pattern)

### Section 14: Memory Management (Q91-Q96)
- [Q91: Mark-and-Sweep GC](#q91-mark-and-sweep-gc)
- [Q92: Memory Leaks in JS](#q92-memory-leaks-in-js)
- [Q93: DOM Memory Leaks](#q93-dom-memory-leaks)
- [Q94: WeakMap/WeakSet for Memory Safety](#q94-weakmapweakset-for-memory-safety)
- [Q95: Detached DOM Nodes](#q95-detached-dom-nodes)
- [Q96: V8 Heap Structure and GC Tuning](#q96-v8-heap-structure-and-gc-tuning)

### Section 15: Security (Q97-Q102)
- [Q97: XSS (Cross-Site Scripting)](#q97-xss-cross-site-scripting)
- [Q98: CSRF (Cross-Site Request Forgery)](#q98-csrf-cross-site-request-forgery)
- [Q99: CORS](#q99-cors)
- [Q100: CSP (Content Security Policy)](#q100-csp-content-security-policy)
- [Q101: Same-Origin Policy](#q101-same-origin-policy)
- [Q102: PostMessage Security](#q102-postmessage-security)

### Section 16: Node.js Specific (Q103-Q108)
- [Q103: Node.js Event Loop Phases Deep Dive](#q103-nodejs-event-loop-phases-deep-dive)
- [Q104: Streams](#q104-streams)
- [Q105: Buffers](#q105-buffers)
- [Q106: Cluster Module](#q106-cluster-module)
- [Q107: Child Processes](#q107-child-processes)
- [Q108: libuv](#q108-libuv)

</details>

---

# Section 1: JS Core Concepts

<details>
<summary><strong>7 Questions â€” Data types, coercion, comparisons</strong></summary>

- Q01: `==` vs `===`
- Q02: Type Coercion
- Q03: NaN, null, undefined
- Q04: Truthy and Falsy Values
- Q05: `typeof` vs `instanceof`
- Q06: Primitive vs Reference Types
- Q07: Number and BigInt

</details>

---

## Q01: `==` vs `===`

### Short Interview Answer

`===` (strict equality) checks both value and type without coercion â€” it returns `false` if types differ. `==` (abstract equality) coerces operands to the same type before comparison using the Abstract Equality Comparison algorithm. Always prefer `===` to avoid subtle coercion bugs; use `==` only when you explicitly want `null`/`undefined` equivalence (`x == null` catches both).

### Detailed Explanation

- **What it is**: Two operators for comparing values in JavaScript. `===` is strict equality (no type conversion), `==` is abstract equality (allows coercion).
- **Why it exists**: JavaScript was designed to be forgiving, so `==` auto-converts types. `===` was added later (ES3) to give developers a way to avoid unexpected coercion.
- **What problem it solves**: `===` eliminates the confusing behavior where `0 == ''` is `true` or `false == '0'` is `true`. It makes comparisons predictable.
- **When to use it**: Use `===` by default for all comparisons. Use `==` only in the specific pattern `x == null` to check for both `null` and `undefined`.
- **When NOT to use it**: Never use `==` when comparing against `0`, `''`, or `false` as the coercion rules are non-intuitive. Avoid `==` in codebases that enforce strict equality via linting.

### Internal Working

The `===` operator simply checks if two values are the same type and same value (for primitives) or reference the same object (for objects). Internally, the engine uses `SameValueNonNumber` for non-number types. The `==` operator triggers the `Abstract Equality Comparison` algorithm (Â§7.2.14 of the spec): if types differ, it recursively coerces â€” `ToNumber` for strings vs numbers, `ToPrimitive` for objects vs primitives, and special handling for `null == undefined` (returns `true`). V8 optimizes `===` into a single comparison instruction at the machine level.

### Step-by-Step Execution

```js
// Example: '5' == 5
// 1. Types differ (string vs number)
// 2. Call ToNumber('5') -> 5
// 3. Compare 5 === 5 -> true

// Example: '5' === 5
// 1. Types differ (string vs number)
// 2. Return false immediately
```

### Real-World Example

When receiving data from an API, values come as strings. A checkbox that sends `'true'` as a string compared to a boolean `true` would silently match with `==` but fail with `===`. A strict comparison forces proper parsing: `JSON.parse(value)` before comparison.

### JavaScript Example

```js
console.log(0 == false);     // true  (coercion: 0 -> false)
console.log(0 === false);    // false (different types)
console.log('' == false);    // true  ('' -> 0, false -> 0)
console.log('' === false);   // false
console.log(null == undefined); // true  (special rule)
console.log(null === undefined);// false
console.log([1] == true);    // true  ([1] -> '1' -> 1, true -> 1)
console.log([1] === true);   // false
```

### Performance Considerations

`===` is marginally faster than `==` because it skips the entire coercion algorithm. However, the difference is negligible at the micro-level â€” always optimize for correctness first. V8's JIT can sometimes optimize `==` to `===` when types are known at compile time (via observed type feedback).

### Common Mistakes

- Using `==` to check for falsy values: `if (x == false)` catches `0`, `''`, `undefined` etc., which is rarely intended.
- Forgetting that `NaN === NaN` is `false` â€” use `Number.isNaN()` instead.
- Assuming objects compared with `===` check structural equality â€” they check reference identity.
- Using `==` with `null` when you mean `=== null`: `x == null` also catches `undefined`.

### Follow-Up Questions

**Junior**: What does `'1' == 1` return? What about `'1' === 1`?

**Mid**: If `x == null` is true, what could `x` be? Why would someone use this pattern?

**Senior**: Describe how the Abstract Equality Comparison algorithm handles `[] == ![]`. Walk through the coercion steps.

### FAANG-Level Deep Dive

`[] == ![]` evaluates to `true`. Walkthrough: `![]` is `false` (objects are truthy, negation makes it `false`). Now evaluate `[] == false`. Types differ, so call `ToNumber(false)` -> `0`. `[] == 0`. `[]` is an object, call `ToPrimitive([])` which invokes `[].toString()` -> `""`. `"" == 0`. Call `ToNumber("")` -> `0`. `0 == 0` -> `true`. This demonstrates why knowledge of the `ToPrimitive` algorithm, `[[DefaultValue]]` internal method, and `toString`/`valueOf` resolution is critical for avoiding coercion-related bugs in production code. In FAANG interviews, you may be asked to trace the full spec algorithm.

### Explain Like I'm 7

Imagine `==` is a translator who makes things the same before comparing â€” so "5" cookies and 5 cookies are the same. `===` is a strict teacher who says "you can only compare apples with apples" â€” if they're not exactly the same kind of thing, they're different.

---

## Q02: Type Coercion

### Short Interview Answer

Type coercion is JavaScript's automatic or implicit conversion of one data type to another. **Implicit coercion** happens when operators trigger the `ToPrimitive`, `ToNumber`, or `ToString` abstract operations. **Explicit coercion** is when you intentionally convert via `Number()`, `String()`, `Boolean()`, or `parseInt()`. Understanding coercion is critical because it underpins `==`, `+`, `!`, `if`, and all comparison operators.

### Detailed Explanation

- **What it is**: The process of converting a value from one type to another. JavaScript has three primitive type conversion paths: to string, to number, and to boolean.
- **Why it exists**: JavaScript is dynamically typed â€” variables don't have fixed types. Coercion enables operations like `"Count: " + 5` to work without explicit conversion.
- **What problem it solves**: It allows flexible operations between types, making JavaScript more forgiving for quick scripting, but it introduces ambiguity that can cause subtle bugs.
- **When to use it**: Use explicit coercion (`Number(value)`, `String(value)`) intentionally. Avoid relying on implicit coercion in conditional expressions.
- **When NOT to use it**: Never rely on implicit coercion in critical logic paths (e.g., user input validation). Avoid the `+` unary operator for coercion â€” use `Number()` for clarity.

### Internal Working

The JS specification defines abstract operations: `ToPrimitive(input, hint)` converts objects to primitives using `valueOf` then `toString`. `ToString` converts: `null` -> `"null"`, `undefined` -> `"undefined"`, `true` -> `"true"`, numbers use IEEE-754 string conversion. `ToNumber` converts: `null` -> `0`, `undefined` -> `NaN`, `true` -> `1`, `false` -> `0`, strings use a grammar similar to `strtod`. The `+` operator: if either operand is a string, string concatenation wins; otherwise numeric addition.

### Step-by-Step Execution

```js
// "The answer is " + 42
// 1. Left operand is string "The answer is "
// 2. + sees a string operand
// 3. Call ToString(42) -> "42"
// 4. Concatenate: "The answer is 42"

// 3 + true
// 1. Neither is string
// 2. Call ToNumber(true) -> 1
// 3. 3 + 1 -> 4
```

### Real-World Example

Form input values from HTML are always strings. `document.getElementById('age').value` returns `"25"`. Using `+` with it: `"You are " + age + " years old"` works, but `age + 1` produces `"251"` instead of `26`. Always explicitly parse numeric inputs.

### JavaScript Example

```js
console.log(1 + '2');        // "12"  (number + string -> string)
console.log('2' - 1);        // 1     (- only works with numbers, coerces)
console.log(1 + 2 + '3');    // "33"  (left-to-right: 1+2=3, then 3+'3'='33')
console.log('3' * '2');      // 6     (* only numeric, both coerced)
console.log(+'42');          // 42    (unary + calls ToNumber)
console.log(!!'hello');      // true  (!! calls ToBoolean)
console.log(null + '');      // "null"
console.log(undefined + 1);  // NaN
```

### Performance Considerations

Explicit coercion with `Number()` is slightly slower than unary `+` due to the function call overhead, but the difference is microseconds. V8 optimizes `Number()` as a known built-in. The primary cost is in speculative optimizations â€” when the JIT sees mixed types, it generates deoptimization guards, which adds overhead in hot paths.

### Common Mistakes

- Using `+` for numeric addition with string inputs (produces concatenation).
- Forgetting that `null` converts to `0` in numeric contexts but `NaN` in `undefined` cases.
- Assuming `isNaN()` is reliable â€” it coerces inputs to number first. Use `Number.isNaN()` instead.
- Thinking `Boolean("false")` is `false` â€” it's `true` because any non-empty string is truthy.

### Follow-Up Questions

**Junior**: What does `+"42"` do? What does `"42" - 0` do?

**Mid**: Explain why `[] + []` gives `""` and `[] + {}` gives `"[object Object]"`.

**Senior**: Trace the coercion steps for `{} + []` vs `[] + {}` and explain why they differ.

### FAANG-Level Deep Dive

The subtle difference between `{} + []` and `[] + {}`: `{} + []` in a statement context is parsed as an empty block `{}` followed by unary `+ []`. `+ []` calls `ToNumber([])`: `ToPrimitive([])` with hint `number` -> first calls `valueOf()` which returns `[]` (not primitive), then calls `toString()` -> `""`. `ToNumber("")` -> `0`. Result: `0`. But `[] + {}`: `ToPrimitive([])` with hint `string` -> `toString()` -> `""`. `ToPrimitive({})` -> `"[object Object]"`. Concatenation: `"" + "[object Object]"`. Result: `"[object Object]"`. This quirk is a common FAANG trivia question testing spec-level knowledge.

### Explain Like I'm 7

Coercion is like a universal adapter for plugs. Sometimes it works great â€” USB-C can charge a laptop or a phone. But sometimes it causes fires â€” like putting a metal fork in a toaster. Explicit coercion is like using the right cable for the right device.

---

## Q03: NaN, null, undefined

### Short Interview Answer

`null` is an intentional absence of a value â€” it's explicitly assigned. `undefined` means a variable has been declared but not yet assigned a value â€” it's the default. `NaN` (Not-a-Number) is the result of an invalid or undefined numeric operation, and is the only value in JS that is not equal to itself (`NaN !== NaN`).

### Detailed Explanation

- **What it is**: Three distinct sentinel values in JavaScript. `null` is a primitive value that represents "no object". `undefined` is the default value of uninitialized variables. `NaN` is a numeric value representing an unrepresentable number.
- **Why it exists**: `null` exists to explicitly represent "nothing" (borrowed from Java). `undefined` exists because JS needs a default uninitialized state. `NaN` exists per IEEE-754 floating-point standard.
- **What problem it solves**: `null` provides a way to intentionally clear a reference. `undefined` signals unintentional emptiness. `NaN` propagates through math to indicate invalid operations.
- **When to use it**: Use `null` when you want to explicitly reset/clear a value. Let `undefined` be the default for uninitialized variables. Check for `NaN` with `Number.isNaN()`.
- **When NOT to use it**: Don't explicitly assign `undefined` â€” use `null` for intentional emptiness. Don't use `isNaN()` (coerces to number). Don't compare with `NaN` directly.

### Internal Working

In the ECMAScript spec, `undefined` is a primitive value of type `Undefined`. `null` is a primitive value of type `Null`. `NaN` is a `Number` value defined by IEEE-754 as a quiet NaN with the exponent field set to all 1s and a non-zero significand. In V8, `undefined` is represented as the tag `0xFFFFFFFE` (odd smi), `null` as `0x00000000` (zero pointer with special tag), and `NaN` as the canonical 64-bit quiet NaN pattern `0x7FF8000000000000`. `typeof null === "object"` is a historic bug (the type tag was `0` for objects, and `null` was a null pointer with tag `0`).

### Step-by-Step Execution

```js
let x;
console.log(x); // undefined (declared, not assigned)

x = null;
console.log(x); // null (explicitly assigned)

console.log(0 / 0);  // NaN (indeterminate form)
console.log(Math.sqrt(-1)); // NaN (invalid operation)
```

### Real-World Example

API responses often use `null` for optional fields that are intentionally empty, while absent fields are `undefined`. When parsing JSON: `JSON.parse('{"name": null}').name` returns `null`, while `JSON.parse('{}').name` returns `undefined`. A robust API client treats these differently â€” `null` means "explicitly empty," `undefined` means "not provided."

### JavaScript Example

```js
console.log(typeof null);       // "object" (historic bug)
console.log(typeof undefined);  // "undefined"
console.log(typeof NaN);        // "number"

console.log(NaN === NaN);       // false (IEEE-754 rule)
console.log(Object.is(NaN, NaN)); // true (Object.is fixes this)
console.log(Number.isNaN(NaN)); // true (correct check)

console.log(null == undefined); // true
console.log(null === undefined);// false

console.log(null > 0);   // false (null -> 0)
console.log(null == 0);  // false (special rule, not coerced)
console.log(null >= 0);  // true  (null -> 0, 0 >= 0)
```

### Performance Considerations

`Number.isNaN()` is faster than `isNaN()` because it doesn't coerce to number first. In V8, the JIT can inline `Number.isNaN` as a single CPU instruction (`UCOMISD` comparing against itself). Checking `var === null` is the fastest null check. Using `Object.is` for NaN checks is slower due to function call overhead.

### Common Mistakes

- Using `isNaN()` instead of `Number.isNaN()` â€” `isNaN("hello")` returns `true` because it coerces `"hello"` to `NaN`.
- Checking `x === NaN` â€” always `false`. Use `Number.isNaN(x)`.
- Assuming `undefined` is the same as `null` for default parameters â€” they're treated identically only in default parameter values.
- Stringifying `NaN`: `JSON.stringify(NaN)` produces `"null"` (not `"NaN"`).
- `typeof null === "object"` â€” always use strict equality to check for null.

### Follow-Up Questions

**Junior**: What's the difference between `undefined` and `null`? What is `typeof null`?

**Mid**: Why does `NaN !== NaN`? How do you reliably check if a value is NaN?

**Senior**: What is the full list of values that produce `NaN` when passed to `Number()`? Explain the IEEE-754 NaN encoding and why there are multiple NaN bit patterns.

### FAANG-Level Deep Dive

IEEE-754 defines 2^53 âˆ’ 2 possible NaN bit patterns (all with exponent = 0x7FF and a non-zero significand). JavaScript canonicalizes to a single "quiet NaN" (significand MSB = 1). However, `NaN` propagation in arithmetic operations may produce different NaN payloads depending on the operation's inputs. V8 normalizes all NaN results to the canonical NaN after every arithmetic operation via a masking instruction, ensuring `Number.isNaN` and `Object.is` work correctly. The `NaN` boxing technique (also called NaN-tagging) is used by V8, SpiderMonkey, and JavaScriptCore: 64-bit values where the upper 13 bits encode a type tag, and the lower 51 bits hold the payload. If the tag is `0x7FF` (NaN), the value is a NaN; other tags indicate objects, integers, or other types. This enables unboxed value representation where only NaN-bit-pattern values need special handling.

### Explain Like I'm 7

Imagine you have three boxes: one says "nothing inside on purpose" (null), one says "I forgot to put anything in" (undefined), and one says "this math doesn't make sense" (NaN). `null` is an empty box you put there yourself. `undefined` is a box you opened but never filled. `NaN` is like asking "how many unicorns are in this room?" â€” the answer doesn't make sense.

---

## Q04: Truthy and Falsy Values

### Short Interview Answer

In JavaScript, every value has an inherent boolean "truthiness" when coerced to boolean. There are exactly 6 falsy values: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, and `NaN`. Everything else â€” including `"false"`, `[]`, `{}`, and `Infinity` â€” is truthy. This is governed by the `ToBoolean` abstract operation.

### Detailed Explanation

- **What it is**: A classification system that determines how values behave in boolean contexts (`if`, `while`, `&&`, `||`, `!`).
- **Why it exists**: So conditional expressions can work with any value without explicit conversion, making code concise but potentially unclear.
- **What problem it solves**: Enables idiomatic patterns like `if (user)` to check for existence, or `name || 'Guest'` for default values.
- **When to use it**: Use truthiness for existence checks on objects, strings, or numbers when the falsy values represent the "empty" state of that type.
- **When NOT to use it**: Avoid truthiness when `0`, `""`, or `false` are valid values. Use `== null` or explicit checks instead.

### Internal Working

The `ToBoolean` abstract operation (spec Â§7.1.2): if the argument is `Boolean`, return it. If `undefined` or `null`, return `false`. If `Number`, return `false` for `+0`, `-0`, `NaN`; otherwise `true`. If `String`, return `false` for empty string (length 0); otherwise `true`. If `Symbol` or `BigInt`, return `true`. If `Object`, return `true`. V8 inlines `ToBoolean` in JIT code: for objects it's always `true` (one register check), for Smis it's a comparison against `0`, for heap numbers it checks both `0` and `NaN`.

### Step-by-Step Execution

```js
if ("hello") {
  // 1. ToBoolean("hello") -> true (non-empty string)
  // 2. Enters the block
}

if (0) {
  // 1. ToBoolean(0) -> false
  // 2. Skips the block
}
```

### Real-World Example

A search input: `if (query) { fetchResults(query); }`. When the user types nothing (empty string), the falsy evaluation prevents an unnecessary API call. But if `0` is a valid search ID, this pattern breaks â€” use `if (query !== '')` instead.

### JavaScript Example

```js
// All falsy values
console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(-0));           // false
console.log(Boolean(0n));           // false
console.log(Boolean(''));           // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false

// Some surprising truthy values
console.log(Boolean('false'));      // true
console.log(Boolean('0'));          // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(Infinity));     // true
console.log(Boolean(-Infinity));    // true

// Short-circuit evaluation
console.log('Alice' || 'Guest');    // 'Alice'
console.log('' || 'Guest');         // 'Guest'
console.log('Alice' && 'Bob');      // 'Bob'
console.log('' && 'Bob');           // ''
```

### Performance Considerations

V8's JIT can predict boolean outcomes via type feedback. A branch that consistently sees objects (truthy) will be speculated as always-true and the falsy path gets cold-code treatment. `!!value` is optimized to `ToBoolean` in V8 with no extra cost. The `||` and `&&` operators short-circuit, which can prevent expensive side effects from executing.

### Common Mistakes

- Checking `if (arr.length)` instead of `if (arr.length > 0)` â€” both work but the latter is more explicit.
- Using `if (value)` when `0` is a valid value (e.g., a score of `0` should not be treated as "no score").
- Forgetting that `"false"` is truthy â€” string content doesn't matter, only emptiness does.
- Assuming `[]` is falsy â€” it's truthy, so `if ([])` always enters the block.

### Follow-Up Questions

**Junior**: List all the falsy values in JavaScript. Is an empty array falsy?

**Mid**: Why would someone write `if (!!value)` instead of `if (value)`? When would you use `!!`?

**Senior**: Explain how the `||=` operator works with truthiness. How does the `??` (nullish coalescing) operator differ?

### FAANG-Level Deep Dive

The `??` (nullish coalescing) operator was added in ES2020 to distinguish between "falsy but valid" values and "missing" values. `x ?? y` returns `y` only if `x` is `null` or `undefined`, not for other falsy values like `0`, `false`, or `""`. Before `??`, defaults were `x || y`, which incorrectly replaced `0` with a default. The `??` operator is right-associative and cannot be chained with `||` or `&&` without parentheses (syntax error). Internally, the spec defines `??` with a special `IsCoercible` check rather than `ToBoolean`. This is why `||` uses falsy values while `??` uses only 2. Google's V8 team observed that nullish coalescing reduces real-world bugs in form handling, numeric defaults, and configuration objects by ~30% in frameworks that adopted it.

### Explain Like I'm 7

In JavaScript, some things are "falsey" â€” they pretend to be false when you ask "is this true or false?" Even though they're not actually the word `false`, they behave like it. Seven troublemakers: `false` itself, the number `0`, empty string `""`, `null` (nothing), `undefined` (unknown), `NaN` (math mistake), and BigInt `0n`. Everything else â€” even the word "false" written as text â€” acts like `true`.

---

## Q05: `typeof` vs `instanceof`

### Short Interview Answer

`typeof` is a unary operator that returns a string indicating the type of a value at runtime. It works best for primitives (`typeof 42 === "number"`). `instanceof` checks whether an object's prototype chain includes a constructor's `prototype` property. Use `typeof` for primitives and `instanceof` for checking object types.

### Detailed Explanation

- **What it is**: `typeof` returns a type string for any value. `instanceof` tests whether an object is an instance of a specific constructor.
- **Why it exists**: JavaScript is dynamically typed â€” there's no compile-time type information. These operators provide runtime type introspection.
- **What it solves**: `typeof` identifies primitive types correctly. `instanceof` validates object inheritance chains.
- **When to use it**: `typeof` for checking `string`, `number`, `boolean`, `undefined`, `symbol`, `bigint`, `function`. `instanceof` for checking `Array`, `Date`, `RegExp`, `Map`, custom class instances.
- **When NOT to use it**: Don't use `typeof` for `null` (returns `"object"`). Don't use `instanceof` across different realms (iframes, different windows) because each realm has its own constructors.

### Internal Working

`typeof` uses a simple internal type tag lookup in V8. Each heap object has a map pointer that encodes the object type. For Smis (small integers), the tag is checked via bit masking at the register level. `instanceof` invokes the `[[HasInstance]]` internal method, which walks the prototype chain using the `Symbol.hasInstance` well-known symbol. If the constructor defines `Symbol.hasInstance`, that method is called instead.

### Step-by-Step Execution

```js
typeof 42
// 1. Check if value is Smi (tagged integer)
// 2. Return "number"

[] instanceof Array
// 1. Get Array.prototype
// 2. Get [].__proto__ (Array.prototype)
// 3. Compare: match -> true
```

### Real-World Example

In a logging library, you need to format values: use `typeof` for primitives, check `instanceof Error` for error objects, and `instanceof Date` for dates. This is how `console.log` internally determines formatting.

### JavaScript Example

```js
console.log(typeof 42);          // "number"
console.log(typeof 'hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 42n);         // "bigint"
console.log(typeof null);        // "object"  (historic bug)
console.log(typeof function(){});// "function"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"

console.log([] instanceof Array);       // true
console.log([] instanceof Object);      // true (Array extends Object)
console.log({} instanceof Array);       // false
console.log(/test/ instanceof RegExp);  // true
console.log(null instanceof Object);    // false

// instanceof with custom classes
class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
console.log(d instanceof Object); // true
```

### Performance Considerations

`typeof` is extremely fast â€” a single tag check that compiles to a few CPU instructions. `instanceof` is slower because it must traverse the prototype chain. V8 optimizes `instanceof` for known constructors with inline caching, but for cross-realm checks it falls back to a slow path. Avoid `instanceof` in hot loops; use duck-typing or branded checks instead.

### Common Mistakes

- Using `typeof arr === "array"` â€” this returns `"object"`. Use `Array.isArray(arr)`.
- Using `instanceof` across iframe boundaries: `[] instanceof iframe.contentWindow.Array` returns `false` even for real arrays.
- Forgetting `typeof null === "object"`.
- Using `instanceof` with primitives: `"hello" instanceof String` returns `false` (primitives aren't objects).

### Follow-Up Questions

**Junior**: What does `typeof null` return? Why?

**Mid**: Why does `instanceof` fail across iframes? How would you fix this?

**Senior**: Explain how `Symbol.hasInstance` can override `instanceof` behavior. Give a use case.

### FAANG-Level Deep Dive

In cross-realm environments (iframes, web workers, Node VM contexts), each realm has its own prototype chain. `[] instanceof Array` fails because `[]`'s `Array` is from the current realm but the target `Array` constructor is from a different realm. V8 handles this by storing a "realm" identifier on each function's `prototype` property. The `Symbol.hasInstance` well-known symbol allows overriding behavior: `class MyArray { static [Symbol.hasInstance](instance) { return Array.isArray(instance); } }`. This is how `instanceof` can be made cross-realm-safe. Google's `cross-realm-array` library uses this pattern. The spec also defines `Function.prototype[Symbol.hasInstance]` as the default implementation, which is non-writable and non-configurable on built-in functions but can be overridden via `Object.defineProperty`.

### Explain Like I'm 7

`typeof` is like asking "what kind of LEGO brick is this?" It tells you "it's a 2x4 brick" or "it's a wheel." `instanceof` is like asking "does this toy belong to this LEGO set?" It checks if the brick goes all the way back to the original LEGO set it came from.

---

## Q06: Primitive vs Reference Types

### Short Interview Answer

Primitives (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) are stored directly on the stack and compared by value. Objects (including arrays, functions, dates) are stored on the heap and accessed by reference â€” variables hold a pointer to the memory location. Primitives are immutable; objects are mutable.

### Detailed Explanation

- **What it is**: The fundamental type system division in JavaScript determining how values are stored, assigned, and compared.
- **Why it exists**: Primitives are simple, fixed-size values that benefit from stack allocation (fast). Objects have variable size and require heap allocation with garbage collection.
- **What problem it solves**: Stack allocation for primitives gives predictable performance. Heap allocation for objects allows complex data structures and shared references.
- **When to use it**: Always â€” this is an inherent language feature, not a choice. But understanding it dictates assignment behavior, comparison behavior, and mutation semantics.
- **When NOT to use it**: N/A â€” this is a language property. However, avoid mutating shared reference objects when you intend immutability (functional patterns).

### Internal Working

In V8, Smis (small integers up to 2^31-1) are tagged pointers: the least significant bit is 0, making the value fit in a pointer-sized register without heap allocation. Other primitives like strings and bigints are heap-allocated but still behave as value types. Objects are always heap-allocated with a pointer to a Map (hidden class) and the actual properties stored in a `PropertyArray` or `NameDictionary`. V8 uses pointer compression (32-bit pointers in 64-bit processes) to reduce memory overhead. Assignment of primitives copies the value; assignment of objects copies the pointer.

### Step-by-Step Execution

```js
let a = 42;
let b = a;
b = 100;
// a is still 42 (value copied)

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
// obj1.x is now 2 (reference shared)
```

### Real-World Example

In Redux, state must be immutable. If you do `state.todos.push(newTodo)`, you mutate the shared state object, and React won't detect the change because the reference hasn't changed. You must return a new object/array: `[...state.todos, newTodo]`.

### JavaScript Example

```js
// Primitive assignment (copy by value)
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (unchanged)

// Reference assignment (copy by reference)
const objA = { count: 1 };
const objB = objA;
objB.count = 2;
console.log(objA.count); // 2 (shared mutation)

// Comparing primitives (by value)
console.log(42 === 42);              // true
console.log('hello' === 'hello');     // true

// Comparing objects (by reference)
console.log({} === {});              // false (different references)
console.log([] === []);              // false

// Primitives are immutable
let str = 'hello';
str[0] = 'H';
console.log(str); // 'hello' (unchanged)
str = 'Hello';    // new assignment, not mutation
```

### Performance Considerations

Stack-allocated primitives are faster to allocate and access than heap-allocated objects. V8's pointer compression reduces object reference overhead by 50% on 64-bit systems. Object property access is optimized via hidden classes and inline caching. Avoid creating many small short-lived objects in hot paths â€” they trigger GC pressure. Use object pooling or primitive-based data structures (like typed arrays) for performance-critical code.

### Common Mistakes

- Assuming `const` means immutability â€” `const` prevents reassignment, not mutation. `const obj = {}; obj.x = 1` is valid.
- Using `===` to compare objects expecting structural equality â€” it checks reference identity only.
- Mutating function arguments that are objects â€” the caller's variable is also affected.
- Forgetting that function parameters are passed by value (of the reference) â€” reassigning the parameter inside the function doesn't affect the caller's variable.

### Follow-Up Questions

**Junior**: What's the difference between `const arr = [1,2,3]` and `const arr = Object.freeze([1,2,3])`?

**Mid**: Explain what "pass by value of the reference" means for function arguments in JS.

**Senior**: How does V8's pointer compression work in 64-bit builds? What trade-offs does it make?

### FAANG-Level Deep Dive

V8's pointer compression (introduced in 2019, shipped in Chrome 80) addresses the problem that 64-bit pointers double the memory usage of heap objects compared to 32-bit. The key insight: the V8 heap is typically smaller than 4GB, so only 32 bits are needed to address any heap location, provided you know the base address. V8 stores a "base" address in a register and stores 32-bit offsets instead of 64-bit pointers. This reduces object size by ~40% and improves cache locality. However, compressed pointers cannot point to arbitrary memory â€” they must be in the same 4GB region as the base. Cross-compartment pointers (between different V8 isolates) still require full 64-bit pointers. The trade-off is that decompressing a pointer requires an add instruction (base + offset), but this is typically free due to x64 addressing modes.

### Explain Like I'm 7

Primitives are like sticky notes with a number written on them â€” when you copy a sticky note, you get a fresh one with the same number. Objects are like a key to a locker â€” when you copy the key, you both can open the same locker and change what's inside. If you change the stuff in the locker, the other person sees the change too.

---

## Q07: Number and BigInt

### Short Interview Answer

JavaScript's `Number` type is IEEE-754 double-precision floating-point (64-bit). It can safely represent integers up to Â±2^53 (Number.MAX_SAFE_INTEGER = 9007199254740991). `BigInt` was added in ES2020 for arbitrary-precision integers (any size, limited by memory). Use `Number` for general numeric operations; use `BigInt` when you need integers beyond 2^53 or require exact integer arithmetic.

### Detailed Explanation

- **What it is**: `Number` is a 64-bit double (1 sign, 11 exponent, 52 mantissa bits). `BigInt` is an arbitrary-precision integer type.
- **Why it exists**: IEEE-754 doubles are efficient and cover most use cases but lose precision for large integers. `BigInt` fills the gap for financial calculations, cryptography, and large-number arithmetic.
- **What problem it solves**: `Number` can't represent `9007199254740993` exactly â€” adding 1 gives the same number. `BigInt` handles this exactly.
- **When to use it**: Use `Number` for everyday math (especially floating-point). Use `BigInt` for large integers, timestamps with microsecond precision, cryptocurrency, or cryptographic operations.
- **When NOT to use it**: Don't use `BigInt` with `Math` methods (they only accept `Number`). Don't mix `BigInt` and `Number` in arithmetic (throws `TypeError`). Don't use `BigInt` for values that will be serialized to JSON â€” `JSON.stringify` throws.

### Internal Working

`Number` values are stored as IEEE-754 doubles in V8. Smis (small integers) are a special tagged representation that avoids heap allocation â€” any integer between -2^31 and 2^31-1 is stored as an immediate value. Values outside this range are stored as heap-allocated `MutableHeapNumber` objects. `BigInt` values are heap-allocated objects storing a sign bit and an array of `digit_t` (usually 64-bit limbs). V8 represents small BigInts (fits in one limb) as a single tagged pointer, while larger BigInts use a `BigInt` object with a variable-length digit array. Arithmetic on BigInts is implemented in optimized C++ loops.

### Step-by-Step Execution

```js
console.log(0.1 + 0.2 === 0.3);
// 1. 0.1 in binary: 0.00011001100110011... (repeating)
// 2. 0.2 in binary: 0.00110011001100110... (repeating)
// 3. Both are rounded to 52-bit mantissa
// 4. Sum: 0.30000000000000004 (not exactly 0.3)
// 5. false
```

### Real-World Example

In a payment system processing billions of micro-transactions, using `Number` for transaction IDs that exceed `MAX_SAFE_INTEGER` causes silent rounding errors. Switching to `BigInt` guarantees every transaction ID is represented exactly. However, for currency amounts with decimals, use a library (like decimal.js) or store as integer cents â€” `BigInt` doesn't support decimal fractions.

### JavaScript Example

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Precision loss
console.log(9007199254740992 === 9007199254740993); // true (both become same double!)

// BigInt to the rescue
console.log(9007199254740992n === 9007199254740993n); // false

// Creating BigInts
const big1 = 123456789012345678901234567890n;
const big2 = BigInt('123456789012345678901234567890');

// Operations
console.log(big1 + big2); // 246913578024691357802469135780n
console.log(big1 * 2n);   // 246913578024691357802469135780n

// Cannot mix types
// console.log(big1 + 1); // TypeError: Cannot mix BigInt and other types

// Division truncates toward zero
console.log(10n / 3n); // 3n

// BigInt and JSON
const obj = { value: 123n };
// JSON.stringify(obj); // TypeError: Do not know how to serialize a BigInt
// Workaround:
JSON.stringify(obj, (k, v) => typeof v === 'bigint' ? v.toString() : v);
```

### Performance Considerations

`Number` operations are significantly faster than `BigInt` â€” they're single CPU instructions (ADDSS, MULSS etc.). `BigInt` operations involve function calls and loops over digit arrays. For large BigInts, multiplication uses Karatsuba or Toom-Cook algorithms (O(n^1.585)) instead of schoolbook O(n^2). Dividing large BigInts is the slowest operation (Knuth's Algorithm D). In V8, small BigInts (one digit) are ~10-30x slower than equivalent Number operations; large BigInts can be 100x+ slower.

### Common Mistakes

- Mixing `BigInt` and `Number` in arithmetic throws `TypeError` â€” convert explicitly.
- Using `BigInt` for `Math` operations â€” they don't accept `BigInt`.
- Forgetting that `BigInt` division truncates toward zero (no decimal places).
- `JSON.stringify` throws on `BigInt` â€” always provide a replacer function.
- `typeof 123n === "bigint"` â€” not `"number"`.

### Follow-Up Questions

**Junior**: What is `Number.MAX_SAFE_INTEGER`? Why does `0.1 + 0.2 !== 0.3`?

**Mid**: How would you safely serialize a `BigInt` to JSON? Design the approach.

**Senior**: Explain the V8 Smi tagging scheme. How does V8 decide when to move a number from Smi to HeapNumber representation?

### FAANG-Level Deep Dive

V8 uses pointer tagging to store small integers (Smis) within pointer-sized values without heap allocation. On 64-bit systems, a Smi occupies the least significant 32 bits shifted left by 32 bits, with the LSB set to 0 (distinguishing it from heap pointers where the LSB is 1). The actual integer value is obtained by an arithmetic right-shift. This means Smis can represent integers in range [-2^31, 2^31-1] on 32-bit systems and [-2^31, 2^31-1] on 64-bit systems â€” intentionally keeping 32-bit for compatibility. When an integer exceeds this range, V8 allocates a `HeapNumber` object. In optimizing compilers (TurboFan), the representation selection phase chooses between Smi, Number (heap number), or Int64 representation depending on observed value ranges. This is called "representation specialization" â€” one of the key optimizations that makes modern JS fast. The `BigInt` type uses a different approach: small BigInts (fits in 64 bits) are stored as a single tagged pointer with the payload in the low bits; large BigInts are stored as a heap object with a `Digit[]` array. TurboFan can optimize small BigInt operations to inline 64-bit arithmetic instructions, making them competitive with Number operations for small values.

### Explain Like I'm 7

`Number` is like a measuring cup that can hold any liquid, but sometimes when you measure 0.1 plus 0.2, you get a tiny bit more than 0.3 because the cup isn't perfectly precise. `BigInt` is like a counting machine that only works with whole numbers but can count to any number â€” even a googol â€” perfectly, without ever making a mistake. But it can't handle fractions at all.

---


# Section 2: Execution Context & Hoisting

<details>
<summary><strong>7 Questions — Scope, hoisting, TDZ, this binding</strong></summary>

- Q08: Execution Context
- Q09: Hoisting
- Q10: Temporal Dead Zone
- Q11: let, const, ar
- Q12: Scope Chain
- Q13: 	his Keyword
- Q14: call, pply, ind

</details>

---

## Q08: Execution Context

### Short Interview Answer

An execution context is the environment in which JavaScript code is evaluated, containing the variable environment, lexical environment, 	his binding, and outer environment reference. There are three types: global context, function context, and eval context. The engine manages these contexts as a stack (the execution stack / call stack), pushing a new context for each function call and popping it on return.

### Detailed Explanation

- **What it is**: An abstract specification mechanism that tracks the runtime evaluation of code. Each context holds the state needed to execute code: variable bindings, 	his value, and the outer scope reference.
- **Why it exists**: JavaScript is single-threaded and uses this stack-based model to manage nested function calls, scope chains, and variable resolution.
- **What problem it solves**: Enables lexical scoping with function nesting, closure creation (preserving outer variable environments), and proper 	his binding per execution.
- **When to use it**: You don't "use" execution contexts — you need to understand their lifecycle to debug scope issues, closure problems, and 	his binding errors.
- **When NOT to use it**: N/A — it's an internal mechanism. But understanding it helps avoid stack overflow (infinite recursion) and performance issues (deeply nested function calls).

### Internal Working

The execution context has three components: the VariableEnvironment (for ar declarations), the LexicalEnvironment (for let, const, and function declarations), and the ThisBinding. When code enters a function, a new execution context is created in two phases: the **Creation Phase** (hoisting, setting up scope chain, determining 	his) and the **Execution Phase** (running code line by line). V8 represents execution contexts as C++ Context objects allocated on the V8 heap. The call stack is a simple array of pointers to these contexts.

### Step-by-Step Execution

`js
function foo() {
  let x = 1;
  function bar() {
    let y = 2;
    console.log(x + y);
  }
  bar();
}
foo();

// Execution stack:
// 1. Global Context (foo, bar declarations hoisted)
// 2. foo() context created -> pushed on stack
// 3. bar() context created -> pushed on stack
// 4. bar() completes -> popped
// 5. foo() completes -> popped
// 6. Stack empty, back to global
`

### Real-World Example

When debugging a recursive tree traversal, the call stack shows each recursive call as a separate execution context. Understanding this helps you trace infinite recursion (stack overflow) and optimize tail calls. In React's Fiber architecture, execution contexts map to work-in-progress fiber nodes.

### JavaScript Example

`js
// Execution context with closure
function createCounter() {
  let count = 0;  // LexicalEnvironment of createCounter
  return function() {
    count++;      // captured from outer LexicalEnvironment
    return count;
  };
}

const counter = createCounter();
// counter's execution context retains reference to
// createCounter's LexicalEnvironment via [[Scope]] property
console.log(counter()); // 1
console.log(counter()); // 2

// Stack trace shows context nesting
function a() { b(); }
function b() { c(); }
function c() { throw new Error('trace'); }
try { a(); } catch (e) { console.log(e.stack); }
// Shows: c -> b -> a -> global
`

### Performance Considerations

Deep recursion creates many execution contexts, consuming stack space (typically ~1MB per thread in V8). Each context has memory overhead for variable bindings. V8's optimizing compiler (TurboFan) can sometimes inline functions, eliminating context creation overhead. Arrow functions don't create their own rguments object or 	his binding, reducing context setup cost. Avoid creating closures inside hot loops — each iteration creates a new closure with a new LexicalEnvironment, which GC must clean up.

### Common Mistakes

- Assuming 	his inside a nested function refers to the outer context's 	his — it doesn't (unless arrow function).
- Creating closures in loops without understanding that each iteration shares the same variable environment (fixed with let or IIFE).
- Forgetting that eval() creates its own execution context with the current lexical scope.
- Not realizing that with statements and catch clauses create their own lexical environments.

### Follow-Up Questions

**Junior**: What happens in the creation phase of an execution context?

**Mid**: How does the execution context chain differ from the scope chain?

**Senior**: Explain how V8's TurboFan uses execution context analysis to inline functions and optimize closure access.

### FAANG-Level Deep Dive

In V8's TurboFan compiler, execution contexts are analyzed during the JSTypedLowering phase. The compiler tracks the [[Scope]] chain of closures to determine which variables from outer contexts are actually used. If a variable is not referenced by any inner closure, it can be allocated on the stack rather than the heap context — this is called **context allocation elimination**. Furthermore, TurboFan can promote a mutable closure variable to a register for the duration of a function execution if escape analysis proves it's safe. In the CreateClosure bytecode, V8 attaches a "scope info" that tells the runtime exactly which slots from the outer context are needed. If a closure doesn't use any outer variable, V8 reuses the same context (context flattening). This optimization is critical for performance in functional programming patterns where many closures are created.

### Explain Like I'm 7

An execution context is like a backpack you carry when you enter a room to do a task. Your backpack holds all the tools (variables) you need for that specific task. When you go into a smaller room (a function inside a function), you get a smaller backpack, but you can still reach into your bigger backpack from the previous room. When you're done, you leave the room and drop that backpack.

---

## Q09: Hoisting

### Short Interview Answer

Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope during the creation phase of execution. ar declarations and function declarations are hoisted and initialized with undefined. let and const are hoisted but not initialized (remain in the Temporal Dead Zone). Function expressions are not hoisted as values.

### Detailed Explanation

- **What it is**: A metaphorical description of how the JS engine processes declarations before executing code. The engine scans for declarations, creates bindings in the environment, and only then executes statements.
- **Why it exists**: The spec defines two-phase execution — the creation phase sets up the environment. The visual effect is that declarations appear to move to the top.
- **What problem it solves**: Enables calling functions before their declaration in source code, which allows recursive patterns and mutually recursive functions regardless of ordering.
- **When to use it**: Use function declarations for hoisting-dependent patterns. Avoid relying on ar hoisting — use let and const.
- **When NOT to use it**: Don't depend on ar hoisting for correctness — it makes code harder to read. Avoid accessing variables before their let/const declaration (TDZ error).

### Internal Working

In the creation phase, the engine walks through the function body and: 1) creates entries in the VariableEnvironment for ar bindings (initialized to undefined), 2) creates entries in the LexicalEnvironment for let/const bindings (initialized but marked "uninitialized" — TDZ), 3) creates entries for function declarations (initialized to the function object). V8 implements this in the BytecodeGenerator and Parser. The parser first produces a scope structure, then allocates slots in the context.

### Step-by-Step Execution

`js
console.log(foo); // undefined (hoisted, initialized)
var foo = 'bar';

console.log(baz); // ReferenceError: Cannot access before initialization
let baz = 'qux';

hoisted(); // "I am hoisted" (function declaration hoisted)
function hoisted() {
  console.log('I am hoisted');
}

notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
  console.log('I am NOT hoisted');
};
`

### Real-World Example

In a module file, you might have several utility functions that reference each other. Function hoisting allows you to define them in any order. However, if you use const fn = () => {...}, you must order them carefully — helper functions must be defined before they're called.

### JavaScript Example

`js
// Function declarations are fully hoisted
console.log(add(2, 3)); // 5
function add(a, b) { return a + b; }

// var is hoisted and initialized to undefined
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// let/const are hoisted but NOT initialized (TDZ)
console.log(y); // ReferenceError
let y = 10;

// function expressions (not declarations) are NOT hoisted
console.log(mult); // undefined (var hoisting of 'mult')
console.log(mult(2, 3)); // TypeError: mult is not a function
var mult = function(a, b) { return a * b; };

// Class declarations are NOT hoisted (TDZ)
const p = new Person(); // ReferenceError
class Person {}
`

### Performance Considerations

Hoisting itself imposes no runtime cost — it's a parse-time operation. However, the scope chain lookup for hoisted identifiers is slightly different: ar declarations in the VariableEnvironment are looked up first, while let/const in the LexicalEnvironment are looked up second. V8 optimizes both equally in JIT-compiled code. The TDZ check for let/const adds a single runtime guard that throws if accessed before initialization — this is a negligible cost.

### Common Mistakes

- Thinking let and const are not hoisted — they are, they're just uninitialized (TDZ).
- Assuming function expressions are hoisted like function declarations.
- Relying on ar hoisting thinking the value will be available — it's undefined until assignment.
- Not realizing that class declarations are also in TDZ and cannot be used before declaration.

### Follow-Up Questions

**Junior**: What will console.log(a); var a = 1; output? What about with let a = 1;?

**Mid**: Explain the difference between hoisting of function declarations vs function expressions.

**Senior**: How does the V8 parser handle hoisting differently in sloppy vs strict mode?

### FAANG-Level Deep Dive

Modern V8 uses a "single-pass" parser (the PreParser) that identifies declarations and eagerly hoists them without fully building the AST. The actual bytecode generation happens lazily for functions. The PreParser maintains a scope stack and records ar, let, const, and function declarations. When a let or const is declared, the PreParser records that the slot exists but marks it as uninitialized. At bytecode generation time, the Hole sentinel value is placed in the slot. The LdaImmutableLexical opcode checks if the value is still the Hole sentinel — if so, it throws ReferenceError. This is why the TDZ is not a parse-time concept but a runtime guard. In TurboFan's JIT, the TDZ check at a lexical access site is folded into a single comparison against the hole sentinel. If the compiler can prove (via type analysis) that the access always follows initialization, the TDZ check is eliminated entirely.

### Explain Like I'm 7

Hoisting is like when your teacher asks everyone to take out their textbooks. Even before you open your bag, the teacher says "everyone has a textbook." The teacher assumes you have one (that's the hoisting). If you use ar, your textbook is already on your desk but it's blank until you write in it. If you use let, your textbook is still in your bag — you'll get an error if you try to read from it before you open your bag and take it out.

---

## Q10: Temporal Dead Zone

### Short Interview Answer

The Temporal Dead Zone (TDZ) is the time between entering a scope (where let/const/class variables are hoisted) and their declaration in source code. Accessing the variable during this period throws a ReferenceError. The variable exists in the scope but is uninitialized — it's in a "dead zone" from the start of the block until the declaration statement is evaluated.

### Detailed Explanation

- **What it is**: A region of code where a variable is in scope but cannot be accessed because it hasn't been initialized yet.
- **Why it exists**: To catch programming errors where variables are used before they're declared, improving code quality and preventing bugs from ar's undefined default.
- **What problem it solves**: With ar, accessing before declaration silently returns undefined, masking bugs. The TDZ makes these bugs loud with clear errors.
- **When to use it**: N/A — it's automatic for let, const, and class. Always declare variables at the top of their scope to avoid TDZ surprises.
- **When NOT to use it**: You can't opt out. But avoid patterns like let x = x (TDZ error: can't access x in its own initializer).

### Internal Working

When the execution context is created, let/const declarations are hoisted and slots are allocated in the LexicalEnvironment. Each slot is initialized with a special sentinel value called the "hole" (<uninitialized>). When a LdaImmutableLexical or similar opcode executes, it checks if the value is the hole — if so, it throws ReferenceError. The hole is overwritten when the actual declaration statement runs. V8 represents this hole as a specific tagged pointer (	he_hole_value) at address  xFFFFFFFFFFFFFFFE on 64-bit systems.

### Step-by-Step Execution

`js
{
  // Block scope entered, x is hoisted to LexicalEnvironment
  // x is in TDZ — has the hole sentinel value
  // console.log(x); // would throw ReferenceError
  
  let x = 10;
  // Initialization: hole is replaced with 10
  // TDZ ends here
  console.log(x); // 10
}
`

### Real-World Example

A React component using const for state setters:

`js
function Counter() {
  console.log(setCount); // ReferenceError: TDZ!
  const [count, setCount] = useState(0);
  // setCount must be used after declaration
}
`

### JavaScript Example

`js
// TDZ with let
{
  // console.log(a); // ReferenceError
  let a = 1;
  console.log(a); // 1
}

// TDZ with const
{
  // console.log(B); // ReferenceError
  const B = 2;
  console.log(B); // 2
}

// TDZ with class
// const p = new Person(); // ReferenceError
class Person {}

// TDZ with typeof — also throws!
{
  // console.log(typeof x); // ReferenceError, not "undefined"!
  let x = 1;
}

// But typeof on undeclared variable is safe
console.log(typeof y); // "undefined" (y not declared at all)

// TDZ in default parameters
function foo(y = x, x = 5) {
  return y;
}
// foo(); // ReferenceError: x not initialized when evaluating default for y

// TDZ in class inheritance
// class Child extends Parent {}
// const Parent = class {}; // ReferenceError
`

### Performance Considerations

The TDZ hole check adds one extra comparison per let/const access in unoptimized code. In JIT-compiled code, V8's TurboFan can eliminate the TDZ check via type inference — if it can prove the variable was definitely initialized before access, the hole comparison is removed. This is another reason let/const don't have inherent performance overhead in hot code.

### Common Mistakes

- Assuming 	ypeof x returns "undefined" for let x in TDZ — it throws ReferenceError instead.
- Trying to use a class before its declaration in the same scope.
- Using a let variable in its own initializer: let x = x + 1 throws TDZ error.
- Thinking TDZ only applies to let/const — class declarations have TDZ too.

### Follow-Up Questions

**Junior**: What is the TDZ? Does ar have a TDZ?

**Mid**: Will 	ypeof throw in the TDZ? What if the variable was never declared at all?

**Senior**: How does the V8 optimizing compiler eliminate TDZ checks? Under what conditions can it do so?

### FAANG-Level Deep Dive

V8's TurboFan compiler uses "range-based" type inference to eliminate TDZ checks. During the TyperPhase, TurboFan tracks the initialization state of each lexical binding. If a let variable is declared and immediately initialized in the same basic block, and all uses are in successor blocks that post-dominate the initialization, TurboFan marks the variable as "definitely initialized" and removes the hole check. More aggressively, if a let variable is never reassigned (the optimizer can prove it acts as a constant), TurboFan replaces all accesses with the constant value and eliminates both the variable slot and the TDZ check entirely. This optimization is particularly effective for const variables, which are always single-assignment. In V8's C++ runtime, the hole sentinel value is a Smi tagged as  xFFFFFFFE (on 64-bit) or  xFFFFFFFE (on 32-bit). The IsTheHole(object) macro is a single comparison that compiles to cmp reg, 0xFFFFFFFE followed by je — exactly 2 instructions and one branch.

### Explain Like I'm 7

The TDZ is like a classroom chair that's reserved for someone. The chair is there, it exists, but you can't sit in it until that person arrives and puts their backpack down. If you try to sit before they do, the teacher yells at you (ReferenceError). ar is like a chair that anyone can sit in even before the person arrives — it just has a invisible placeholder.

---

## Q11: let, const, ar

### Short Interview Answer

ar is function-scoped, hoisted and initialized to undefined, and can be redeclared. let is block-scoped, hoisted but uninitialized (TDZ), and cannot be redeclared in the same scope. const is block-scoped like let, must be initialized at declaration, and cannot be reassigned (but its value can be mutated if it's an object). Always prefer const by default, let when reassignment is needed, and never use ar.

### Detailed Explanation

- **What it is**: Three ways to declare variables with different scoping rules, hoisting behavior, and mutability constraints.
- **Why it exists**: ar was the original declaration from ES1. let and const were added in ES6 to fix ar's issues (no block scope, redeclaration, hoisting surprises).
- **What problem it solves**: ar allows redeclaration (overwriting), leaks out of blocks (or loop variables persist after the loop), and hoists as undefined. let/const fix all three.
- **When to use it**: Use const for all values that shouldn't be reassigned (the majority of variables). Use let for loop counters, accumulators, and state that changes. Never use ar.
- **When NOT to use it**: Don't use const when you need to reassign. Don't use let when the value never changes (use const for intent signaling). Never use ar in modern code.

### Internal Working

ar creates bindings in the VariableEnvironment (function-level). let/const create bindings in the LexicalEnvironment (block-level). In V8's AST, each scope's variable declarations are collected during parsing. ar variables are stored in the VariableProxy's VariableMode::kVar; let in kLet; const in kConst. In bytecode, ar bindings use StaGlobal or StaContextSlot, while let/const use StaCurrentContextSlot with extra TDZ semantics. const bindings additionally enforce the single-assignment rule.

### Step-by-Step Execution

`js
const x = 10;
// x cannot be reassigned:
// x = 20; // TypeError: Assignment to constant variable

// But object mutation is allowed:
const obj = { a: 1 };
obj.a = 2; // OK

let count = 0;
count = 1; // OK
// let count = 2; // SyntaxError: Identifier 'count' has already been declared

// var allows redeclaration:
var y = 1;
var y = 2; // OK (no error)
`

### Real-World Example

In a Redux reducer, const is used for the state parameter (you shouldn't reassign it) but let for temporary accumulators:

`js
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]; // const state, not reassigned
    default:
      return state;
  }
}
`

### JavaScript Example

`js
// var: function-scoped
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2 (leaked from block)
}

// let: block-scoped
function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

// const: block-scoped + no reassignment
const PI = 3.14159;
// PI = 3; // TypeError

// for loop: var leaks, let scoped per iteration
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2
}
`

### Performance Considerations

const can enable better optimization in V8 because it signals single-assignment, allowing TurboFan to replace the variable with a constant value (constant propagation and folding). let signals potential reassignment, so the compiler must allocate a mutable slot. In practice, modern JITs are good at deducing reassignment status regardless of the keyword, so the performance difference is minimal. However, ar in non-function scopes can force variables into the global object (in sloppy mode), which is slower due to property lookup on the global object.

### Common Mistakes

- Assuming const makes objects immutable — it only prevents reassignment of the binding.
- Using ar in or loops and getting unexpected values in closures (fixed with let).
- Trying to redeclare a let or const variable in the same scope.
- Forgetting that const requires an initializer: const x; throws SyntaxError.
- Assuming const in a or...in or or...of loop is unusual — or (const x of arr) works because each iteration creates a new binding.

### Follow-Up Questions

**Junior**: What's the difference between let and const? What happens if you try to reassign a const?

**Mid**: Why does or (var i = 0; i < 3; i++) log 3, 3, 3 with setTimeout? How does let fix this?

**Senior**: Explain the internal bytecode difference between ar and let variable declarations in V8.

### FAANG-Level Deep Dive

In V8's Ignition bytecode generator, the CreateFunctionContext opcode allocates a new context for function-scoped variables. For ar, the DeclareGlobal or DeclareContextSlot opcode is emitted with CONSTANT (for const) vs MUTABLE (for ar/let) mode. The key difference: ar uses StaContextSlot with PREVIOUS_CONTEXT (stored in the outer context chain), while let uses StaCurrentContextSlot within the current block's lexical scope slot array. For or (let i = 0; ...), V8 creates a new lexical environment for each iteration — the bytecode CreateBlockContext is emitted inside the loop body. Each iteration's i binding is a fresh slot. This is why closures capture the correct value. This per-iteration context allocation has memory overhead but is optimized: if the loop doesn't create any closures referencing i, TurboFan can eliminate the per-iteration context and use a simple stack slot.

### Explain Like I'm 7

ar is like a backpack everyone shares — you put something in and anyone can take it out, change it, or put something else in. It causes chaos. let is like your own locker — you can put things in and swap them out, but only you can access it. const is like a sealed safety deposit box — you put one thing in and the box is locked. You can look inside but you can't take it out or put something else in. However, if you put a photo album in (an object), you can still rearrange the photos inside.

---

## Q12: Scope Chain

### Short Interview Answer

The scope chain is a hierarchical chain of lexical environments that JavaScript uses to resolve variable identifiers. When a variable is referenced, the engine searches the current scope first, then moves outward through parent scopes (outer functions, then global), stopping at the first match. This chain is determined by the lexical nesting structure of functions at definition time, not call time (lexical scoping).

### Detailed Explanation

- **What it is**: An ordered chain of environments (scope objects) from the innermost to the outermost scope. Each environment contains variable bindings for its scope.
- **Why it exists**: To implement lexical scoping — the rule that variable resolution is based on the structure of the source code, not the call stack.
- **What problem it solves**: Enables nested functions to access variables from their containing functions (closures). Prevents name collisions between different scopes.
- **When to use it**: You don't "use" the scope chain directly, but understanding it is essential for debugging undefined variables, closure issues, and shadowing problems.
- **When NOT to use it**: N/A — it's automatic. Avoid deep nesting (callback hell) as it creates long scope chains that are harder to reason about and slightly slower for variable lookup.

### Internal Working

Each execution context has an Outer reference pointing to its parent context's environment. The scope chain is formed by following these Outer references. In V8, the Context object has a previous pointer to the outer context and an array of slots for variable bindings. When resolving a variable, V8's bytecode LdaContextSlot takes an index into the current context slot array. If the variable is not found (cached via the inline cache as "not in this context"), V8 walks the previous chain. In JIT-compiled code, TurboFan determines the exact context depth at compile time using static analysis, so the chain walk is replaced by a direct memory load at a fixed offset.

### Step-by-Step Execution

`js
const globalVar = 'global';

function outer() {
  const outerVar = 'outer';
  
  function inner() {
    const innerVar = 'inner';
    console.log(innerVar);  // 'inner' — found in current scope
    console.log(outerVar);  // 'outer' — found in parent scope
    console.log(globalVar); // 'global' — found in global scope
  }
  
  inner();
}

outer();

// Scope chain for inner():
// inner's scope -> outer's scope -> global scope
`

### Real-World Example

In a React hook, the scope chain allows the inner function to access the component's state variables:

`js
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value); // value from outer scope
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}
`

### JavaScript Example

`js
// Scope chain depth
const a = 'global';

function level1() {
  const a = 'level1'; // shadows global
  function level2() {
    const a = 'level2'; // shadows level1
    function level3() {
      console.log(a); // 'level2' (closest match in scope chain)
    }
    level3();
  }
  level2();
}
level1(); // 'level2'

// Variable shadowing
const x = 10;
function shadow() {
  const x = 20; // shadows outer x
  if (true) {
    const x = 30; // shadows function-level x
    console.log(x); // 30
  }
  console.log(x); // 20
}
shadow();
console.log(x); // 10
`

### Performance Considerations

Scope chain lookups are optimized by V8's inline caching (IC). When a variable is first accessed at a given depth in the scope chain, the IC records the exact context offset for fast access on subsequent calls. Deeply nested scope chains (10+ levels) degrade IC performance because each context slot access may miss the cache. TurboFan's context-specialization phase determines the exact context depth for each variable and emits a direct offset load, eliminating the chain walk entirely in optimized code. Global scope resolution is the slowest (property lookup on the global object) — avoid implicit globals.

### Common Mistakes

- Confusing the scope chain with the call stack — they are different. Scope chain is lexical (based on code nesting); call stack is based on function calls.
- Creating deep nesting that makes scope chain hard to trace.
- Relying on the scope chain lookup for frequently accessed variables — pass them as parameters instead.
- Assuming that 	his follows the scope chain — 	his is bound to the execution context, not the lexical scope (except arrow functions).

### Follow-Up Questions

**Junior**: How does JavaScript decide which x to use when there are multiple variables named x?

**Mid**: What's the difference between lexical scoping and dynamic scoping? Which does JS use?

**Senior**: How does V8's TurboFan compiler optimize scope chain variable lookups? What is context specialization?

### FAANG-Level Deep Dive

V8's TurboFan uses a technique called **context specialization** during the InliningPhase. The compiler statically determines the "context depth" of each variable by analyzing the scope chain from the bytecode. For example, if a variable is in the parent context (depth 1), TurboFan emits a load from Context[parent_slot_index] directly, where Context is the current function's context register. This bypasses the runtime chain walk entirely. For deep context chains (e.g., depth 7), TurboFan emits a series of LoadContext operations that are still just pointer dereferences — the key insight is that each context is a fixed-size object, so all offsets are known at compile time. If TurboFan can inline a function (e.g., inner() inside outer()), the context slots of the inlined function are promoted to the calling function's frame and accessed as stack-relative loads. This is why tight loops with nested closures can be as fast as non-nested code after sufficient optimization.

### Explain Like I'm 7

The scope chain is like a Russian nesting doll (matryoshka). When you need to find a toy, you look in the smallest doll first. If it's not there, you check the next bigger doll, and the next, until you reach the biggest doll (the global scope). The dolls are stacked based on where you put them in your source code, not when you open them.

---

## Q13: 	his Keyword

### Short Interview Answer

	his is a special keyword whose value is determined by how a function is called (execution context binding), not where it's defined (lexical binding). The five binding rules are: default binding (global object or undefined in strict mode), implicit binding (object method call), explicit binding (call/pply/ind), 
ew binding (new instance), and arrow function binding (lexical 	his from enclosing scope).

### Detailed Explanation

- **What it is**: A contextual keyword that refers to the object that is the current execution context's 	his binding.
- **Why it exists**: To provide a way for functions to access the object they're called on, enabling method sharing via prototypes.
- **What problem it solves**: Allows the same function to operate on different objects (dynamic context), which is essential for OOP and prototype-based inheritance.
- **When to use it**: Use 	his inside methods (objects, classes), event handlers (careful with DOM events), and constructors. Use arrow functions when you want lexical 	his.
- **When NOT to use it**: Avoid 	his in standalone functions (unpredictable in sloppy mode). Avoid relying on 	his in callbacks unless you explicitly bind it.

### Internal Working

The ECMAScript spec defines 	his via the [[ThisBindingStatus]] internal slot of the execution context. The BindThisValue operation sets it based on the function call type: CallExpression -> EvaluateCall -> PrepareForOrdinaryCall -> OrdinaryCallBindThis. For arrow functions, [[ThisValue]] is captured from the enclosing context. In V8, the 	his value is stored in a register and managed by the bytecode LdaNamedProperty and StaThisValue opcodes. The Call opcode receives the 	his argument and passes it to the callee.

### Step-by-Step Execution

`js
function showThis() {
  console.log(this);
}

// 1. Default binding (non-strict)
showThis(); // global (window/globalThis)

// 2. Implicit binding
const obj = { name: 'obj', showThis };
obj.showThis(); // obj

// 3. Explicit binding
const other = { name: 'other' };
showThis.call(other); // other

// 4. new binding
function Person(name) {
  this.name = name; // this = new instance
}
new Person('Alice'); // Person { name: 'Alice' }

// 5. Arrow function (lexical)
const arrowObj = {
  name: 'arrow',
  showThis: () => console.log(this)
  // this = enclosing scope's this (likely global)
};
`

### Real-World Example

In a React class component, event handlers need correct 	his binding:

`js
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Bind the handler to the instance
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prev => ({ count: prev.count + 1 }));
    // Without .bind(this), this would be undefined in strict mode
  }
}
`

### JavaScript Example

`js
// Default binding (sloppy mode)
function defaultThis() { return this; }
console.log(defaultThis()); // globalThis (or window)

// Strict mode
function strictThis() {
  'use strict';
  return this;
}
console.log(strictThis()); // undefined

// Implicit binding — lost context
const obj = {
  value: 42,
  getValue() { return this.value; }
};
console.log(obj.getValue()); // 42
const extracted = obj.getValue;
console.log(extracted()); // undefined (this = global/undefined)

// Arrow functions
const obj2 = {
  value: 100,
  getValue: () => this.value, // WRONG: this is outer scope
  getValueCorrect() {
    return this.value;
  }
};

// DOM event handler
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // button element
});
button.addEventListener('click', () => {
  console.log(this); // NOT button, it's outer scope (window)
});
`

### Performance Considerations

V8's TurboFan can optimize monomorphic 	his bindings (same receiver type every call) using inline caching. Polymorphic calls (different receiver types) trigger a deoptimization and slower path. Arrow function 	his is just a lexical capture with no runtime overhead. ind() creates a new function wrapper with some overhead — prefer arrow functions or class property arrow syntax. The implicit 	his loss in callbacks is a common performance trap that leads to ind calls in hot paths.

### Common Mistakes

- Losing 	his when extracting a method: const fn = obj.method — n() loses the context.
- Using arrow functions for object methods expecting 	his to be the object.
- Forgetting to bind event handlers in React class components.
- Assuming 	his follows the scope chain — it doesn't (only arrow functions capture 	his lexically).
- Not realizing 	his in the global scope is globalThis (not undefined), even in strict modules.

### Follow-Up Questions

**Junior**: What does 	his refer to inside a regular function? Inside an arrow function?

**Mid**: Explain why const fn = obj.method; fn() loses the 	his context. How do you fix it?

**Senior**: What is the order of precedence for 	his binding rules? Give examples where multiple rules could apply.

### FAANG-Level Deep Dive

The 	his binding precedence from highest to lowest:
1. 
ew binding — if the function is called with 
ew, the new object is 	his
2. Explicit binding — call, pply, ind (but ind has higher priority than call/pply once bound)
3. Implicit binding — method call on an object
4. Default binding — standalone function call (global or undefined in strict mode)

Edge case: ind followed by 
ew — 
ew overrides ind. Arrow functions bypass all rules: 	his is captured lexically from the enclosing scope and cannot be overridden even with call/pply/ind. In V8, this is implemented by not emitting BindThisValue for arrow functions — the [[ThisValue]] is simply a slot in the context chain. The Call bytecode for arrow functions skips the 	his setup entirely and passes through the already-captured value. This is why rrow.call(other, args) still uses the lexical 	his, not other.

### Explain Like I'm 7

	his is like the word "me" in English. If Alice says "pass the ball to me," "me" means Alice. If Bob says it, "me" means Bob. Same word, different meaning depending on who says it. In JavaScript, 	his changes meaning depending on how you call the function — like who is speaking. Arrow functions are like children who always use the same "me" as their parents — they don't choose their own meaning.

---

## Q14: call, pply, ind

### Short Interview Answer

call, pply, and ind are methods on Function.prototype that explicitly set the 	his value for a function call. call(fn, arg1, arg2) invokes the function with a given 	his and individual arguments. pply(fn, [args]) does the same with an array of arguments. ind(fn) returns a new function with a permanently bound 	his that cannot be overridden (even by call/pply).

### Detailed Explanation

- **What it is**: Three methods for explicit 	his binding. call and pply are immediate invocation; ind creates a bound copy.
- **Why it exists**: To give developers control over the 	his context when invoking functions, enabling patterns like borrowing methods and partial application.
- **What problem it solves**: Method extraction loses context — call/pply/ind restore it. ind enables creating functions with pre-set 	his for callbacks.
- **When to use it**: Use call for chaining constructors (inheritance). Use pply when arguments are in an array (spread operator supersedes this). Use ind for event handlers, setTimeout callbacks, and partial application.
- **When NOT to use it**: Don't use pply when you can use the spread operator: n(...args) is cleaner. Don't use ind in hot loops — it creates new functions each time. Use arrow functions for lexical 	his binding instead.

### Internal Working

Function.prototype.call() internally sets the [[Call]] internal method's 	hisArgument to the first argument and passes remaining args. pply is similar but spreads the array arg via CreateListFromArrayLike. ind creates a new "bound function" exotic object with [[BoundTargetFunction]], [[BoundThis]], and [[BoundArguments]]. When called, it merges bound args with call args and forwards to the target with the bound 	his. V8 represents bound functions as a special JSBoundFunction map with the bound target, this, and args stored as internal properties.

### Step-by-Step Execution

`js
function greet(greeting, punctuation) {
  return ${greeting}, ;
}

const person = { name: 'Alice' };

// call: invoke immediately with explicit this + individual args
greet.call(person, 'Hello', '!'); // "Hello, Alice!"

// apply: invoke immediately with explicit this + array of args
greet.apply(person, ['Hi', '?']); // "Hi, Alice?"

// bind: returns new function with bound this
const boundGreet = greet.bind(person, 'Hey');
boundGreet('.'); // "Hey, Alice."
`

### Real-World Example

Borrowing array methods from array-like objects:

`js
const divs = document.querySelectorAll('div'); // NodeList (array-like)
const divArray = Array.prototype.slice.call(divs); // Convert to real array
// Or: const divArray = [...divs];
// Or: const divArray = Array.from(divs);

// Function.prototype.bind for async callbacks
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.fetch = this.fetch.bind(this); // permanent binding
  }
  fetch(endpoint) {
    return fetch(${this.baseUrl});
  }
}
`

### JavaScript Example

`js
// Method Borrowing
const obj1 = { name: 'obj1', items: [1, 2, 3] };
const obj2 = { name: 'obj2', items: [4, 5] };

function printItems() {
  console.log(${this.name}: );
}

printItems.call(obj1); // "obj1: 1, 2, 3"
printItems.apply(obj2); // "obj2: 4, 5"

// Partial application with bind
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2); // partially applied
console.log(double(5)); // 10

// bind with setTimeout
class Timer {
  constructor() { this.seconds = 0; }
  start() {
    setInterval(function() {
      this.seconds++; // this = global (WRONG!)
    }, 1000);
    // Fix:
    setInterval(function() {
      this.seconds++;
    }.bind(this), 1000);
    // Or with arrow function:
    setInterval(() => this.seconds++, 1000);
  }
}

// Bounded function cannot be rebound
const bound = greet.bind(person);
console.log(bound.call({ name: 'Bob' }, 'Hi', '!')); // "Hi, Alice!" (not Bob!)
`

### Performance Considerations

ind() creates a new JSBoundFunction object — ~56 bytes in V8. Creating many bound functions in hot loops (e.g., rendering a list) causes GC pressure. Prefer class property arrow syntax or caching bound functions outside loops. call and pply are fast for monomorphic calls but can trigger deoptimization if the target function's 	his type changes. V8's JIT can inline call and pply for monomorphic call sites. ind is harder to inline because it creates an intermediate wrapper — TurboFan must trace through the JSBoundFunction to the target, which it can do for monomorphic targets.

### Common Mistakes

- Forgetting that ind doesn't invoke the function — it returns a new function.
- Trying to rebind a bound function — ind returns a permanently bound function.
- Using pply when spread is cleaner: n(...args) vs n.apply(null, args).
- Using ind inside render methods in React (creates new function every render).
- Forgetting that call/pply use the first argument as 	his — passing 
ull uses default binding (global in sloppy mode).

### Follow-Up Questions

**Junior**: What's the difference between call and pply? When would you use each?

**Mid**: How does ind work internally? Can you unbind a bound function?

**Senior**: Explain how V8 represents bound functions internally. Can TurboFan optimize through a ind wrapper?

### FAANG-Level Deep Dive

V8 represents bound functions as JSBoundFunction objects, which have three internal slots: [[BoundTargetFunction]] (the original function), [[BoundThis]] (the bound receiver), and [[BoundArguments]] (a fixed array of partially applied args). When a bound function is called, V8's Call opcode checks the IsJSBoundFunction bit in the map word. If true, the JSBoundFunction::Call handler is invoked, which reconstructs the full argument list by concatenating bound args with call args, then dispatches to the target function with the bound this.

TurboFan can inline through bound function calls if the bound function is monomorphic (same target function every call). During the JSCallReducer phase, the compiler detects the JSBoundFunction and replaces the call with a direct call to [[BoundTargetFunction]] with the bound arguments spliced in. However, if the bound function is polymorphic (multiple targets), TurboFan must emit a runtime dispatcher or bail out to interpreted code. Google's V8 team has optimized Function.prototype.bind heavily because frameworks like React and Angular create many bound functions. In Chrome 120+, the bound function overhead has been reduced to near zero for monomorphic cases through aggressive inlining.

### Explain Like I'm 7

call is like saying "Hey, function! Pretend you're inside this object right now and use these specific things." pply is the same but you put your things in a bag first. ind is like making a clone of the function that's permanently attached to an object — like gluing a toy to a table. No matter how much you try, that clone always thinks it's on that table.

---


# Section 3: Closures & Scope

<details>
<summary><strong>7 Questions — Lexical scope, IIFEs, module patterns, memoization</strong></summary>

- Q15: Closures
- Q16: Lexical Scoping
- Q17: IIFE
- Q18: Module Pattern with Closures
- Q19: Closure Memory Leaks
- Q20: Practical Closure Uses (Debounce, Throttle)
- Q21: Currying

</details>

---

## Q15: Closures

### Short Interview Answer

A closure is the combination of a function bundled together with references to its surrounding lexical environment (the variables in scope at the time of the function's definition). This allows inner functions to access outer function's variables even after the outer function has returned. Closures are a fundamental concept enabling data privacy, partial application, and functional programming patterns.

### Detailed Explanation

- **What it is**: A function that retains access to its lexical scope even when executed outside that scope.
- **Why it exists**: Lexical scoping requires that inner functions keep a reference to their outer scope. Closures are the mechanism by which this is implemented.
- **What problem it solves**: Enables encapsulation (private variables), factory functions, callbacks with preserved state, and the module pattern.
- **When to use it**: Use closures for stateful callbacks, creating private variables, function factories, custom hooks (React useCallback/useEffect are closure-based), and debouncing/throttling.
- **When NOT to use it**: Avoid creating closures inside hot loops (each iteration creates a closure, causing GC pressure). Avoid closures that unintentionally capture large objects (memory leaks).

### Internal Working

When a function is created, V8 stores a reference to its enclosing LexicalEnvironment (the [[Scope]] internal slot). This environment is a Context object allocated on the heap containing the variable bindings. The closure keeps a pointer to this Context, preventing it from being garbage collected. In V8's C++ implementation, the SharedFunctionInfo has a scope_info field that describes which variables are captured by inner functions. The Context object has slots for each variable plus a previous pointer to the outer context.

### Step-by-Step Execution

`js
function createCounter() {
  let count = 0;          // count is in createCounter's LexicalEnvironment
  return function() {     // inner function created -> closure captures LE
    count++;              // count accessed via the captured scope
    return count;
  };
}

const counter = createCounter();
// createCounter's LE is NOT GC'd because counter holds a reference
console.log(counter()); // 1 (count = 1)
console.log(counter()); // 2 (count = 2)

// When counter is garbage collected, the LE is also freed
`

### Real-World Example

In a React useEffect cleanup function, the closure captures the component's props/state at the time the effect was created:

`js
function Timer({ startTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(Elapsed: ms);
      // startTime is captured by the closure
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);
}
`

### JavaScript Example

`js
// Private variables via closure
function createPerson(name) {
  let _age = 0; // private (not directly accessible)
  return {
    getName: () => name,
    getAge: () => _age,
    birthday() {
      _age++;
    }
  };
}
const person = createPerson('Alice');
console.log(person.getName()); // 'Alice'
console.log(person._age); // undefined (private)
person.birthday();
console.log(person.getAge()); // 1

// Closure with loop — classic problem and fix
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log(j), 100))(i); // 0, 1, 2 (IIFE closure)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 (let creates per-iteration binding)
}

// Closures in event handlers
function setupButton(buttonId) {
  const button = document.getElementById(buttonId);
  let clicks = 0;
  button.addEventListener('click', () => {
    clicks++;
    console.log(Button clicked  times);
  });
}
`

### Performance Considerations

Each closure allocates a Context object on the heap (typically 24-40 bytes plus slots for captured variables). Creating closures in loops can cause significant GC pressure. V8 optimizes by not allocating a context if no variables are actually captured (context allocation elimination). TurboFan can also "promote" context-allocated variables to stack slots if escape analysis proves the closure doesn't outlive the function. In performance-critical code, cache bound functions/closure outside loops rather than recreating them.

### Common Mistakes

- Creating closures in loops and expecting each iteration to capture the current value (use let or IIFE).
- Forgetting that closures capture variables by reference, not by value — all closures in a loop share the same variable if declared with ar.
- Accidentally creating a closure that prevents large objects from being garbage collected.
- Assuming closures are slow — they're heavily optimized in modern engines.

### Follow-Up Questions

**Junior**: What is a closure? Give an example.

**Mid**: Explain the classic closure-in-a-loop issue. Why does it happen with ar but not let?

**Senior**: How does V8's context allocation elimination work? When does TurboFan decide a variable doesn't need to be in a context?

### FAANG-Level Deep Dive

V8's TurboFan compiler performs **context allocation elimination** during the BytecodeGraphBuilder phase. The analysis starts by scanning all inner functions and tracking which variables from the outer function they actually reference. If a variable is never referenced by any inner function (directly or transitively), it can be promoted from the heap-allocated Context slot to a simple stack slot in the calling function's frame. This is done by replacing LoadContext/StoreContext bytecodes with direct Load/Store to a stack frame offset.

For variables that ARE captured but only in non-escaping closures (closures that never outlive their creator), V8 applies **stack-promotion**. If analysis proves the closure is only called synchronously within the creating function's lifetime, the context is allocated on the stack rather than the heap. This is checked via the VariableProxy::is_used analysis and Scope::MustAllocateInContext logic in the parser.

Extreme optimization: if a closure captures a variable but only reads it (never writes), V8 can replace the variable with a literal constant through constant propagation. Additionally, if a closure outlives its creator but the creator is a class constructor or simple factory, V8's type feedback may specialize the closure's context access into a single memory load at a fixed offset from a known register.

### Explain Like I'm 7

A closure is like a time capsule. You put some toys (variables) in a box and bury it. Later, even after you've moved to a new house, you can dig up the box and the toys are still there. The function remembers the variables from when it was created, even if that function is long gone.

---

## Q16: Lexical Scoping

### Short Interview Answer

Lexical scoping means that variable scope is determined by the position of declarations in the source code at author-time, not by the call stack at runtime. A function's access to variables is based on where the function is defined in the code, not where it's called from. This is why closures work — the inner function retains access to the scope where it was written.

### Detailed Explanation

- **What it is**: A scoping model where nesting of functions determines variable visibility based on the source code structure.
- **Why it exists**: To make variable resolution predictable and intuitive — you can look at the source code and know which variables are accessible.
- **What problem it solves**: In contrast to dynamic scoping (used by bash), lexical scoping makes programs easier to reason about and enables static analysis.
- **When to use it**: Always — it's the scoping model of JavaScript. Understanding it helps with all variable resolution reasoning.
- **When NOT to use it**: N/A — it's automatic. But be aware that eval() and with can break lexical scoping and should be avoided.

### Internal Working

During parsing, V8's Parser builds a tree of Scope objects. Each scope has a pointer to its parent scope (lexical parent). When resolving an identifier, the parser walks this tree to determine which scope the variable belongs to and records the scope chain depth. At runtime, the Context objects mirror this tree structure through their previous pointers. V8's ScopeInfo object is serialized into the function's SharedFunctionInfo and includes the exact offsets and modes of all variables.

### Step-by-Step Execution

`js
const x = 'global';

function outer() {
  const y = 'outer';
  
  function inner() {
    const z = 'inner';
    console.log(x); // 'global' — found in global scope
    console.log(y); // 'outer' — found in parent's scope
    console.log(z); // 'inner' — found in own scope
    // Try to access based on where code is written (lexical)
  }
  
  inner();
}

outer();

// Even if called from somewhere else:
const fn = outer; // outer's lexical scope never changes
`

### Real-World Example

A React custom hook uses lexical scoping to access the component's closure:

`js
function useCounter(initial) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // lexical scope allows accessing setCount
  // Even though useCallback may store increment internally,
  // it can still access setCount from the component's lexical scope
  return { count, increment };
}
`

### JavaScript Example

`js
// Lexical vs Dynamic scoping demonstration
const value = 'global';

function outer() {
  const value = 'outer';
  
  function inner() {
    console.log(value); // 'outer' (lexical: based on definition in outer)
  }
  
  return inner;
}

function caller() {
  const value = 'caller';
  const fn = outer();
  fn(); // 'outer', NOT 'caller' (dynamic scoping would give 'caller')
}

caller();

// Lexical scoping with block scope
{
  const a = 'block';
  function inside() {
    console.log(a); // 'block' — lexical: defined inside block
  }
  inside();
}
// console.log(a); // ReferenceError (block-scoped)
`

### Performance Considerations

Lexical scoping is inherently efficient because variable resolution is determined at parse time — no runtime lookup decisions are needed. V8's parser records the scope depth for each variable, enabling direct slot access. Dynamic scoping (using eval or with) forces the engine to fall back to slower dictionary-based lookups. Always prefer lexical scoping by avoiding eval and with.

### Common Mistakes

- Confusing lexical scoping with 	his binding — they are unrelated concepts.
- Thinking 	his follows lexical scoping rules (it doesn't, except in arrow functions).
- Using eval which breaks lexical scoping expectations.
- Assuming that a function's scope is determined by where it's called (dynamic scoping fallacy).

### Follow-Up Questions

**Junior**: In the code unction a() { let x = 1; function b() { console.log(x); } }, can  access x? Why?

**Mid**: What's the difference between lexical scoping and dynamic scoping? Does JavaScript use either/both?

**Senior**: How does eval() in non-strict mode affect lexical scoping? What does V8 do differently?

### FAANG-Level Deep Dive

The eval() function in non-strict mode performs **scope injection**: variables declared inside eval with ar leak into the containing function scope. This breaks lexical scoping and forces V8 to disable several optimizations. When V8's parser encounters an eval() call that cannot be statically analyzed ("direct eval" with a string argument), it marks the containing function's scope as calls_eval. This flag causes the parser to conservatively treat all variable declarations as potentially accessed via eval, preventing context allocation elimination and stack promotion. The function must allocate a full dictionary-mode context instead of a fast slot-based context. This is why you should never use eval in performance-sensitive code. The performance penalty can be 50-80% for functions containing eval. In strict mode, eval creates its own lexical scope and cannot introduce new variables to the enclosing scope, making it safe but still dynamic.

### Explain Like I'm 7

Lexical scoping is like a family tree. You can see your own toys, your parents' toys, and your grandparents' toys. But you can't see your cousins' toys because they're in a different branch. This rule never changes — it's based on where you are in the family tree (the code structure), not who visits your house (who calls the function).

---

## Q17: IIFE

### Short Interview Answer

An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after creation. It's written as (function(){ /* code */ })() or (() => { /* code */ })(). The parentheses around the function turn it from a declaration into an expression, allowing immediate invocation. IIFEs create a new lexical scope, providing data privacy and preventing global namespace pollution.

### Detailed Explanation

- **What it is**: A JavaScript function expression that is invoked as soon as it's defined.
- **Why it exists**: Before ES6 introduced block-scoped let/const, IIFEs were the primary way to create a new scope and avoid variable hoisting issues.
- **What problem it solves**: Prevents variables from leaking into the global scope. Creates private scopes for module patterns. Captures loop variables correctly in the pre-ES6 era.
- **When to use it**: Use IIFEs for isolated scope creation when you can't use block scope (legacy code). Use IIFEs for initializing singletons or running one-time setup code. Modern code prefers let/const in blocks.
- **When NOT to use it**: In modern code, prefer block-scoped let/const over IIFEs for privacy. Avoid IIFEs when a regular function or module would suffice. Don't use IIFEs in module-scoped code (modules already have their own scope).

### Internal Working

The parser sees unction at the start of a statement and treats it as a function declaration (which requires a name and cannot be immediately invoked). Wrapping in () forces the parser to treat it as a function expression. The expression evaluates to a function object, then the trailing () invokes it. In V8, the function is parsed, compiled to bytecode, and immediately executed — the context created by the IIFE is eligible for GC as soon as the IIFE returns, unless captured by inner closures.

### Step-by-Step Execution

`js
// Step 1: Parser sees '(' -> expression context
// Step 2: Evaluates to anonymous function object
// Step 3: Immediately invoked with ()
// Step 4: Variables inside the IIFE are scoped to it
// Step 5: IIFE returns, scope is eligible for GC

const result = (function() {
  const x = 10; // private, does not leak
  return x * 2;
})(); // result = 20
`

### Real-World Example

Before ES6 modules, IIFEs were used to create the module pattern:

`js
const MyModule = (function() {
  // Private variables
  let counter = 0;
  
  // Private function
  function log(message) {
    console.log('[MyModule] ');
  }
  
  // Public API
  return {
    increment() { counter++; log('Incremented'); },
    getCount() { return counter; }
  };
})();

MyModule.increment(); // Works
// MyModule.counter; // undefined (private)
`

### JavaScript Example

`js
// Classic IIFE
(function() {
  var localVar = 'I am local';
  console.log(localVar); // 'I am local'
})();
// console.log(localVar); // ReferenceError

// IIFE with arrow function
(() => {
  const msg = 'Arrow IIFE';
  console.log(msg);
})();

// IIFE with parameters
const sum = ((a, b) => a + b)(3, 4); // 7

// Named IIFE (for stack traces)
(function myIIFE() {
  console.log('Named IIFE');
})();

// Async IIFE (top-level await simulation)
(async () => {
  const data = await fetch('https://api.example.com/data');
  console.log(await data.json());
})();

// IIFE for creating isolated block (pre-ES6)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i); // 0, 1, 2
}
`

### Performance Considerations

IIFEs have minimal overhead — the function is created and immediately invoked, allowing V8's JIT to compile it eagerly (since it's immediately hot). The context created for the IIFE is typically short-lived and collected in the young generation GC. Overusing IIFEs (e.g., wrapping every block of code) creates unnecessary function calls and context allocations. In modern engines, a block with let/const is more efficient than an IIFE for scope isolation.

### Common Mistakes

- Forgetting the invoking () at the end — the function is never called.
- Missing the wrapping parentheses — causes SyntaxError (function declaration can't be immediately invoked).
- Semicolon issues: if the previous line doesn't end with ;, the IIFE's ( may be parsed as a function call: console.log('hello')(function(){})() — error.
- Using IIFE when a simple block { let x = 1; } would suffice.

### Follow-Up Questions

**Junior**: What is an IIFE? Why do you need the parentheses around it?

**Mid**: How were IIFEs used before ES6 modules? Show the module pattern.

**Senior**: Explain the difference between IIFE parsing issues with and without semicolons. What happens with console.log('hello')(function(){})()?

### FAANG-Level Deep Dive

The semicolon issue with IIFEs stems from JavaScript's automatic semicolon insertion (ASI). When you write:

`js
const a = 5
(function() { console.log('IIFE'); })()
`

The parser sees 5 as a number, then (function... as a function call on 5, causing TypeError: 5 is not a function. This is because ASI only inserts a semicolon before } or at the end of a line when the next token cannot be parsed as a continuation. Here, (function... CAN be parsed as 5(...), so no semicolon is inserted. This is a common interview bug question. The fix is to always use ; before IIFEs when concatenating: const a = 5; (function(){})() or use the ! prefix: !function(){}() which creates a unary expression.

V8's parser handles the !(...) form more efficiently in some cases because the unary operator makes it unambiguously an expression, slightly reducing parse time. However, the difference is negligible.

### Explain Like I'm 7

An IIFE is like a pop-up restaurant that cooks one meal, serves it, and disappears. It sets up its kitchen (variables), makes the food, then cleans up so no mess is left behind. Other restaurants (other code) can't steal its recipes because the kitchen was cleaned up.

---

## Q18: Module Pattern with Closures

### Short Interview Answer

The module pattern uses a closure (typically created by an IIFE) to encapsulate private state and expose only a public API. The inner function's closure retains access to private variables and methods, while the returned object exposes only the intended interface. This pattern was the primary encapsulation mechanism before ES6 modules and is still used for certain use cases.

### Detailed Explanation

- **What it is**: A design pattern that creates modules with private and public members using closures and object literals.
- **Why it exists**: JavaScript lacked native module systems until ES6. The module pattern gave developers information hiding without requiring tooling.
- **What problem it solves**: Prevents global namespace pollution, enables encapsulation, and provides a clean public API while hiding implementation details.
- **When to use it**: Use when you need a singleton with private state in environments without ES6 modules. Useful for utility libraries, configuration objects, and service singletons.
- **When NOT to use it**: In modern projects with ES6 modules, use export/import instead. The Revealing Module Pattern can be harder to refactor. Avoid for tree-shakeable code.

### Internal Working

The IIFE creates a function context. Returned functions form closures over this context's variables. The returned object is typically created as a literal {} with references to the inner functions. V8 stores the module's private variables in the IIFE's Context object. The returned methods hold a reference to this context via their [[Scope]] slot. As long as any method exists, the context is retained.

### Step-by-Step Execution

`js
const CounterModule = (function() {
  // Private variables (in closure)
  let count = 0;
  const MAX = 100;
  
  // Private function
  function validate(value) {
    return value >= 0 && value <= MAX;
  }
  
  // Public API (returned object)
  return {
    increment() { count++; },
    decrement() { if (count > 0) count--; },
    getCount() { return count; },
    reset() { count = 0; }
  };
})();

CounterModule.increment();
console.log(CounterModule.getCount()); // 1
console.log(CounterModule.count); // undefined (private)
`

### Real-World Example

A configuration manager for a library:

`js
const Config = (function() {
  const defaults = {
    theme: 'light',
    locale: 'en-US',
    debug: false
  };
  let overrides = {};
  
  return {
    get(key) { return overrides[key] ?? defaults[key]; },
    set(key, value) { overrides[key] = value; },
    reset() { overrides = {}; },
    getAll() { return { ...defaults, ...overrides }; }
  };
})();
`

### JavaScript Example

`js
// Revealing Module Pattern (more explicit)
const RevealingModule = (function() {
  let data = [];
  
  // Private
  function sortData() {
    data.sort((a, b) => a - b);
  }
  
  // Public (revealed)
  function add(item) {
    data.push(item);
    sortData();
  }
  
  function getAll() {
    return [...data]; // return copy to prevent mutation
  }
  
  function size() {
    return data.length;
  }
  
  return {
    add,
    getAll,
    size
  };
})();

// Augmentation pattern (adding to existing module)
const AugmentedModule = (function(m) {
  m.newMethod = function() {
    console.log('Added later');
  };
  return m;
})(RevealingModule || {});

// Lazy initialization singleton
const LazyModule = (function() {
  let instance;
  function init() {
    // expensive initialization
    return { value: 'initialized' };
  }
  return {
    getInstance() {
      if (!instance) instance = init();
      return instance;
    }
  };
})();
`

### Performance Considerations

Module pattern via IIFE creates a single context that persists for the module's lifetime — memory overhead is constant, not per-usage. The returned methods are closure-bound, which means V8 must keep the context alive. However, since this is typically a singleton, the overhead is negligible. In V8, the private variables in the module context are fast property accesses — equivalent to accessing properties on any other JS object. The main performance consideration is that tree-shaking cannot remove unused module methods because bundlers can't analyze IIFE module internals statically.

### Common Mistakes

- Forgetting that the returned API methods form closures — they cannot be extracted without losing 	his context.
- Mutable private state that can be exploited via timing (if the module is shared across async boundaries).
- Not creating copies of returned data, allowing consumers to mutate private state indirectly.
- Overusing the pattern in ES6 module environments where native modules are better.

### Follow-Up Questions

**Junior**: What is the module pattern? How does it create private variables?

**Mid**: What's the difference between the Module Pattern and the Revealing Module Pattern?

**Senior**: How does the module pattern compare to ES6 modules? What advantages/disadvantages does each have for tree shaking?

### FAANG-Level Deep Dive

Tree-shaking (dead code elimination) works by statically analyzing import and export statements. The module pattern with IIFE returns an object whose methods are property references. Bundlers like webpack, Rollup, and esbuild cannot statically analyze which properties of the returned object are used because the IIFE's return value is treated as a dynamic object with unknown shape. This means even if you only use one method, the entire module's code must be included.

With ES6 modules, bundlers perform import { usedFunction } from './module' analysis and can eliminate unused exports (known as "tree shaking"). Rollup's implementation traces through the module graph and marks used bindings. Unused bindings are pruned during code generation. For this reason, libraries that want minimal bundle impact should use ES6 module syntax, not the module pattern.

However, the module pattern still has valid use cases: in-browser code that can't use bundlers (IIFE loading), quick scripts, and scenarios where the public API must be dynamically determined at runtime.

### Explain Like I'm 7

The module pattern is like a vending machine. You can see the buttons (public API) and press them to get a drink, but you can't see the machinery inside (private variables). The machine remembers how many drinks are left (state) and you can only interact through the allowed buttons. Nobody can just reach in and take a drink for free.

---

## Q19: Closure Memory Leaks

### Short Interview Answer

Closures can cause memory leaks when a function retains a reference to a large lexical environment that is no longer needed. This happens when a closure outlives its useful scope and holds references to variables or DOM elements that prevent garbage collection. Common causes: event listeners on unmounted DOM elements, large data sets captured in closures, and circular references between closures and DOM nodes.

### Detailed Explanation

- **What it is**: A situation where a closure inadvertently keeps a reference to variables or objects that could otherwise be freed by the GC.
- **Why it exists**: Closures keep their entire lexical environment alive, not just the variables they use. V8 cannot easily isolate individual variables.
- **What problem it solves**: (It creates a problem, but understanding it is crucial.) The mechanism that enables closures is the same that can cause leaks — the retained LexicalEnvironment.
- **When to use it**: Always be aware of what your closures capture. Clean up event listeners on component unmount. Null out references when done.
- **When NOT to use it**: Avoid capturing large objects in closures if only a small part is needed. Avoid creating closures that reference DOM elements with long lifetimes.

### Internal Working

V8 represents the closure's environment as a Context object. When a closure is created, the entire context is captured, not just the used variables. V8 does perform **context variable analysis** — if a variable is never accessed by any inner function, it's not allocated in the context. However, if even one inner function accesses a variable, it remains in the context, and all functions in that scope see the same context. This means one closure referencing one variable keeps the entire context alive, including variables used by sibling closures.

### Step-by-Step Execution

`js
function setupLargeData() {
  const largeData = new Array(1000000).fill('big'); // 1MB+
  const smallData = 'small';
  
  function inner() {
    console.log(smallData); // only uses smallData
    // But closure keeps largeData alive too!
  }
  
  return inner;
}

const fn = setupLargeData();
// largeData cannot be GC'd because fn (closure) keeps the context alive
// The context contains both largeData and smallData
`

### Real-World Example

A React component that attaches a scroll listener but never removes it:

`js
function HeavyList({ items }) {
  useEffect(() => {
    const handleScroll = () => {
      // closure captures entire component scope
      console.log(items.length, window.scrollY);
      // items array is kept alive as long as this listener exists
    };
    window.addEventListener('scroll', handleScroll);
    // Missing cleanup! The closure keeps 'items' and the entire
    // component's lexical environment alive even after unmount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);
}
`

### JavaScript Example

`js
// Leak example: DOM element reference in closure
function setupButton() {
  const button = document.getElementById('myButton');
  const heavyData = new Array(100000).fill('x');
  
  button.addEventListener('click', function handleClick() {
    console.log('clicked'); // Doesn't use heavyData, but closure captures it
  });
  
  // Even if button is removed from DOM, the event listener closure
  // keeps button AND heavyData alive indefinitely
}

// Fix: null out unused variables before creating closure
function setupButtonFixed() {
  const button = document.getElementById('myButton');
  
  // Create heavyData only if needed
  button.addEventListener('click', function handleClick() {
    console.log('clicked');
  });
}

// Fix: use WeakRef for optional references
function setupButtonWeak() {
  const buttonRef = new WeakRef(document.getElementById('myButton'));
  
  const interval = setInterval(() => {
    const btn = buttonRef.deref();
    if (btn) {
      btn.textContent = 'updated';
    } else {
      clearInterval(interval); // Button was GC'd
    }
  }, 1000);
}

// Memory leak in accidental global via closure
function leak() {
  let data = { big: new Array(1000000) };
  this.accidentalGlobal = function() {
    console.log(data);
  };
}
// Call in non-strict mode: accidentalGlobal becomes global property
`

### Performance Considerations

Memory leaks from closures are insidious because:
- The retained memory is not visible as a traditional "leak" — it's still referenced.
- V8's heap snapshots show these as "retained by closure" or "context" in DevTools.
- Even small leaks in long-lived applications (SPAs, Node.js servers) can accumulate to gigabytes.
- The GC cannot collect closure contexts because objects remain reachable through the closure reference chain.
- Chrome DevTools' "Allocation instrumentation timeline" can help identify closure leaks.

### Common Mistakes

- Forgetting to remove event listeners (especially in SPA frameworks).
- Creating closures that capture large variables they don't use.
- Storing a reference to a DOM element in a long-lived closure, preventing the DOM tree from being GC'd.
- Using closures in timers/intervals without clearing them.
- Assuming delete or 
ull assignment inside a closure frees memory — it frees that specific reference, but the context still exists.

### Follow-Up Questions

**Junior**: What is a memory leak in JavaScript? Can closures cause them?

**Mid**: Explain how a React component can leak memory via useEffect closures. How would you fix it?

**Senior**: V8's context analysis eliminates unused variables from closed-over contexts, but there's a catch. Explain the "sibling closure" problem.

### FAANG-Level Deep Dive

The **sibling closure problem**: V8 cannot split a single Context object per-function. If two inner functions access different variables from the same outer function, they share one context:

`js
function outer() {
  let a = new Array(1000000); // only used by fn1
  let b = 'small';            // only used by fn2
  
  const fn1 = function() { console.log(a); };
  const fn2 = function() { console.log(b); };
  
  return [fn1, fn2];
}
`

Here, n1 keeps  alive (correct), but n2 also keeps  alive because they share the same context. V8 cannot eliminate  from n2's context because the context is shared. This is a known limitation. Solutions: manually split the scopes (create two outer functions), or null out  after creating n1. Advanced V8 proposals like "context splitting" or "nested context allocation" could address this but haven't been implemented due to complexity. The workaround in production code is to design closures such that unrelated captures are in separate scopes.

### Explain Like I'm 7

A closure memory leak is like keeping an old birthday gift. Your grandma gives you a box with a tiny toy and a big, heavy rock. You only want the toy (a small variable), but the closure keeps both the toy and the rock. If you forget to throw away the rock, your room fills up with heavy rocks over time and you can't move. To fix it, separate the rock from the toy before closing the box.

---

## Q20: Practical Closure Uses (Debounce, Throttle)

### Short Interview Answer

Debounce and throttle are performance optimization techniques that use closures to track execution timing. Debounce delays a function call until after a specified quiet period (e.g., search-as-you-type). Throttle ensures a function executes at most once per specified interval (e.g., scroll handlers). Both return closures that maintain state (timer IDs, last execution timestamps) across multiple invocations.

### Detailed Explanation

- **What it is**: Higher-order functions that use closures to create rate-limited versions of functions.
- **Why it exists**: Browser events (scroll, resize, keypress) can fire hundreds of times per second. Running expensive handlers on each event kills performance.
- **What problem it solves**: Prevents excessive function calls, reduces CPU usage, avoids jank, and respects rate limits.
- **When to use it**: Debounce for search inputs, autocomplete, window resize end. Throttle for scroll handlers, mouse move, progress events, game loops.
- **When NOT to use it**: Don't debounce when immediate feedback is needed. Don't throttle when events are already low frequency. Don't use trailing debounce when the latest state must be captured (use leading option).

### Internal Working

The debounce/throttle function creates a closure that captures state variables (	imerId, lastCallTime, lastArgs). On each invocation:
- **Debounce**: Clears previous timer, sets new timer. Function executes after delay ms of inactivity.
- **Throttle**: Checks if enough time has passed since lastCallTime. If yes, executes and updates time. If no, schedule trailing execution.

In V8, the returned closure's context contains the timer variable and other state. The closure is typically created once and reused, so the context allocation overhead is negligible.

### Step-by-Step Execution

`js
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);           // 1. Clear pending execution
    timer = setTimeout(() => {     // 2. Schedule new execution
      fn.apply(this, args);        // 3. After delay, invoke fn
      timer = null;
    }, delay);
  };
}

function throttle(fn, limit) {
  let inThrottle = false;
  let lastArgs = null;
  return function(...args) {
    if (inThrottle) {
      lastArgs = args;             // 1. Store latest args during cooldown
      return;
    }
    fn.apply(this, args);          // 2. Execute immediately
    inThrottle = true;
    setTimeout(() => {             // 3. After limit, allow next execution
      inThrottle = false;
      if (lastArgs) {
        fn.apply(this, lastArgs);  // 4. Execute trailing call
        lastArgs = null;
      }
    }, limit);
  };
}
`

### Real-World Example

Search autocomplete:

`js
// Without debounce: API call on every keystroke
searchInput.addEventListener('input', (e) => {
  fetch(/api/search?q=); // 30 API calls per second!
});

// With debounce: one API call after user stops typing
const debouncedSearch = debounce(async (query) => {
  const results = await fetch(/api/search?q=);
  displayResults(results);
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
`

### JavaScript Example

`js
// Debounce implementation
function debounce(fn, delay, { leading = false } = {}) {
  let timerId = null;
  let isLeadingCalled = false;
  
  return function(...args) {
    const callNow = leading && !isLeadingCalled;
    
    clearTimeout(timerId);
    
    if (callNow) {
      fn.apply(this, args);
      isLeadingCalled = true;
    }
    
    timerId = setTimeout(() => {
      if (!callNow) fn.apply(this, args);
      isLeadingCalled = false;
      timerId = null;
    }, delay);
  };
}

// Throttle implementation
function throttle(fn, limit) {
  let lastCall = 0;
  let timerId = null;
  
  return function(...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);
    
    if (remaining <= 0) {
      // Execute immediately
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      lastCall = now;
      fn.apply(this, args);
    } else if (!timerId) {
      // Schedule trailing execution
      timerId = setTimeout(() => {
        lastCall = Date.now();
        timerId = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

// Usage
const logScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', logScroll);

const saveInput = debounce((value) => {
  console.log('Autosaving:', value);
}, 1000);

input.addEventListener('change', (e) => saveInput(e.target.value));
`

### Performance Considerations

Debounce/throttle are extremely lightweight — the overhead per invocation is just a timer clear/set plus a closure variable assignment. The real performance benefit is reducing the number of expensive operations. A debounced 300ms search reduces API calls from potentially hundreds per second to at most ~3 per second. The timer itself has minimal overhead — setTimeout with a callback in V8 is ~1µs. Avoid creating debounced/throttled functions inside render cycles (React) — create them once per component lifecycle.

### Common Mistakes

- Forgetting to pass the correct 	his context in the debounced function (use n.apply(this, args)).
- Not clearing timers on component unmount leading to state updates on unmounted components.
- Using debounce when throttle is needed (or vice versa).
- Creating debounced functions inline in JSX (creates new function each render).
- Not handling the leading vs trailing edge correctly for UX expectations.

### Follow-Up Questions

**Junior**: What's the difference between debounce and throttle? When do you use each?

**Mid**: Implement a debounce function. How does it ensure the 	his context is preserved?

**Senior**: Design a debounce that supports both leading and trailing edge execution. How would you handle immediate cancellation?

### FAANG-Level Deep Dive

The equestAnimationFrame (rAF) pattern can be used as an alternative to throttle for visual updates. rAF fires ~60 times per second and is synchronized with the browser's rendering pipeline, making it ideal for animations and visual updates. A throttle with a 16ms limit approximates rAF but without VSync synchronization.

For advanced debounce use cases, consider **debounce with maxWait** (also called "debounce with leading edge"):

`js
function debounceMaxWait(fn, delay, maxWait) {
  let timerId = null;
  let lastCallTime = 0;
  let lastArgs = null;
  
  return function(...args) {
    const now = Date.now();
    lastArgs = args;
    
    if (lastCallTime === 0) lastCallTime = now;
    
    clearTimeout(timerId);
    
    if (now - lastCallTime >= maxWait) {
      // Max wait exceeded, execute immediately
      fn.apply(this, args);
      lastCallTime = now;
    } else {
      timerId = setTimeout(() => {
        fn.apply(this, lastArgs);
        lastCallTime = 0;
        timerId = null;
      }, delay);
    }
  };
}
`

This pattern is used by libraries like Lodash (.debounce with maxWait) and is essential for auto-save features where you want to save quickly after the user stops typing, but you must save at least every N seconds.

### Explain Like I'm 7

Debounce is like waiting until a wiggling child settles down before you take their picture — if they keep moving, you wait. Throttle is like a busy guard at a door who only lets one person through every minute, no matter how many people are waiting. If people arrive too fast, the guard says "wait a minute."

---

## Q21: Currying

### Short Interview Answer

Currying is the functional programming technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. Instead of n(a, b, c), you call n(a)(b)(c). Currying enables partial application, function composition, and creating specialized functions from general ones.

### Detailed Explanation

- **What it is**: Translating a multi-argument function into a chain of single-argument functions, each returning the next function until all arguments are supplied.
- **Why it exists**: To enable partial application — fixing some arguments of a function to create a more specific function — and to facilitate function composition in point-free style.
- **What problem it solves**: Currying makes it easy to create specialized functions from general ones without rewriting. It enables elegant function composition pipelines.
- **When to use it**: Use currying in functional programming libraries (Ramda), configuration functions, validation pipelines, and when you need to repeatedly call a function with the same first argument.
- **When NOT to use it**: Avoid currying in performance-critical hot paths (extra function calls). Avoid in most application code — it reduces readability for developers not familiar with FP. Use only when partial application provides clear benefits.

### Internal Working

Each curried call creates a closure that stores the accumulated arguments. When the arity is satisfied, the original function is called. In V8, each partial application creates a closure with a new context holding the accumulated args. TurboFan can inline curried calls if the chain is monomorphic. However, the intermediate closures add overhead compared to calling the original function directly.

### Step-by-Step Execution

`js
// curry(f)(a)(b)(c) is equivalent to f(a, b, c)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

// Step 1: curriedAdd(1) -> returns closure with 1 stored
// Step 2: curriedAdd(1)(2) -> returns closure with [1,2] stored
// Step 3: curriedAdd(1)(2)(3) -> args.length >= 3, calls add(1,2,3) -> 6
`

### Real-World Example

Configuration functions:

`js
// Without currying
const fetchWithConfig = (baseUrl, apiKey, endpoint, params) => {
  return fetch(${baseUrl}?&apiKey=);
};

// With currying
const configureApi = (baseUrl) => (apiKey) => (endpoint) => (params) => {
  return fetch(${baseUrl}?&apiKey=);
};

const myApi = configureApi('https://api.example.com')('sk-1234');
const getUsers = myApi('/users');
const getPosts = myApi('/posts');

getUsers('limit=10'); // fetch configured with all pre-filled params
`

### JavaScript Example

`js
// Manual currying
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1, 2, 3)); // 6

// Currying for validation
const validate = curry((schema, value) => {
  // returns validation result
  return schema.validate(value);
});

const validateEmail = validate(emailSchema);
const validatePhone = validate(phoneSchema);

// Placeholder support (like lodash)
function curryWithPlaceholder(fn) {
  const placeholder = curryWithPlaceholder;
  return function curried(...args) {
    const hasPlaceholder = args.some(a => a === placeholder);
    if (!hasPlaceholder && args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => {
      const merged = args.map(a => a === placeholder ? nextArgs.shift() : a);
      return curried(...merged, ...nextArgs);
    };
  };
}

const formatMsg = (greeting, name, punctuation) =>
  ${greeting}, ;
const curriedFormat = curryWithPlaceholder(formatMsg);
const helloAlice = curriedFormat('Hello')(curriedFormat._)('!');
console.log(helloAlice('Alice')); // "Hello, Alice!"
`

### Performance Considerations

Each curried call level creates a new closure with its own context. For deep currying (many arguments), this adds significant overhead. Lodash's _.curry is optimized but still ~10-100x slower than direct calls. In V8, curried functions are harder to optimize because the function shape changes with each partial application. If performance matters, use partial application with Function.prototype.bind instead, or write non-curried functions. For configuration-heavy code (API clients), currying's readability benefits often outweigh the tiny performance cost.

### Common Mistakes

- Confusing currying with partial application — currying transforms a function; partial application pre-fills some args. Currying enables partial application, but they're not the same.
- Currying functions with arity > 3 — deeply nested closures are hard to read and debug.
- Using currying in performance-sensitive code (event handlers, renders).
- Assuming curried functions preserve 	his correctly — use arrow functions or explicitly bind.
- Currying functions with rest parameters (...args) — n.length is 0 for rest params, breaking arity detection.

### Follow-Up Questions

**Junior**: What is currying? How is it different from calling a function normally?

**Mid**: Implement a curry function that works with any arity. How does it know when to execute?

**Senior**: How would you implement currying with placeholder support (like lodash's _.curry)? What are the performance implications?

### FAANG-Level Deep Dive

Lodash's _.curry uses a sophisticated placeholder system where _ (lodash's placeholder) can be used to skip arguments. The implementation tracks the "curried" state using a wrapper that checks for the placeholder sentinel. When a placeholder is found in the accumulated args, the next argument from the new call fills that position instead of appending to the end:

`js
const fn = curry((a, b, c, d) => [a, b, c, d]);
fn(1, _, 3, _)(2, 4); // [1, 2, 3, 4]
`

This requires a complex argument-merging algorithm: iterate over accumulated args; for each placeholder, consume the next new arg; remaining new args are appended. Lodash implements this in lodash/.internal/createCurry.js with a loop over rgs and 
ewArgs simultaneously.

V8's TurboFan cannot optimize lodash-style currying because the curry wrapper is a generic higher-order function, and the internal argument manipulation is too dynamic. For extreme performance, lodash provides a curry that uses eval (in the lodash/.internal/curry.js implementation) to generate a function with explicit parameters matching the original arity, minimizing closure overhead. This is an example of "code generation as optimization" — using eval or 
ew Function(...) to create specialized functions at runtime.

### Explain Like I'm 7

Currying is like ordering a sandwich from a machine that only takes one coin at a time. You can't put three coins in at once — you put in one coin, get a button, put in another coin, get another button, put in the last coin, and get your sandwich. If you only have two coins, you can stop and keep the buttons for later when you find your third coin.

---


# Section 5: Async JS

<details>
<summary><strong>8 Questions — Callbacks, Promises, async/await, combinators</strong></summary>

- Q29: Callbacks and Callback Hell
- Q30: Promises
- Q31: sync/wait
- Q32: Promise Combinators
- Q33: Error Handling in Async Code
- Q34: Async Iterators and Generators
- Q35: inally in Promises
- Q36: Promise Unhandled Rejection

</details>

---

## Q29: Callbacks and Callback Hell

### Short Interview Answer

A callback is a function passed as an argument to another function to be executed later — typically after an asynchronous operation completes. Callback hell (also called "pyramid of doom") occurs when callbacks are nested deeply due to sequential async operations, creating unreadable, hard-to-maintain code shaped like a pyramid. Promises and async/await were introduced to solve this problem.

### Detailed Explanation

- **What it is**: Callbacks are first-class functions used for continuation-passing style in async operations. Callback hell is deep nesting of callbacks.
- **Why it exists**: JavaScript is single-threaded and event-driven. Callbacks were the original async mechanism (Node.js was built on them). They're still used in event emitters and low-level APIs.
- **What problem it solves**: Callbacks enable non-blocking I/O. However, nesting creates unreadable code, makes error handling repetitive (checking errors at every level), and inverts control (the called function decides when to invoke the callback).
- **When to use it**: Use callbacks for event handlers, iteration methods (forEach, map), and simple one-shot async operations in legacy code. Prefer Promises/async-await for complex flows.
- **When NOT to use it**: Avoid callbacks for sequential operations (use Promises). Avoid in modern Node.js APIs (they now return Promises). Avoid deep nesting (callback hell).

### Internal Working

When a callback is passed to an async function, it's stored in the Web API environment (browser) or libuv (Node.js). When the async operation completes, the callback is placed in the task queue. The event loop picks it up and pushes it onto the call stack. In V8, callbacks are just function references stored as closure contexts — they capture the surrounding scope and are called when the async operation resolves.

### Step-by-Step Execution

`js
console.log('Start');
setTimeout(() => {
  console.log('Callback');
}, 1000);
console.log('End');

// 1. 'Start' logged
// 2. setTimeout registers timer in Web APIs (browser) / libuv (Node)
// 3. 'End' logged
// 4. After ~1000ms, callback is placed in task queue
// 5. Event loop picks it up, pushes to call stack
// 6. 'Callback' logged
`

### Real-World Example

`js
// Callback hell example
getUser(id, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    getProducts(orders[0].id, (err, products) => {
      if (err) return handleError(err);
      renderProducts(products);
    });
  });
});

// With named functions (slightly better but still callback-based)
function onProducts(err, products) { renderProducts(products); }
function onOrders(err, orders) { getProducts(orders[0].id, onProducts); }
function onUser(err, user) { getOrders(user.id, onOrders); }
getUser(id, onUser);
`

### JavaScript Example

`js
// Node.js callback pattern (error-first)
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});

// Callback in event emitters
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('data', (chunk) => console.log('Received:', chunk));

// Converting callback to Promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Avoiding callback hell with Promisify
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
readFileAsync('file.txt', 'utf8').then(console.log);
`

### Performance Considerations

Callbacks have minimal overhead — just a function call. The cost is in closure creation if the callback captures variables. In V8, callbacks in event loops are optimized via inline caching. However, deep callback nesting prevents V8's TurboFan from optimizing the outer function — the deoptimization probability increases with each nesting level. Promisifying callbacks adds a small overhead (creating Promise objects) but improves optimization opportunities in the long run.

### Common Mistakes

- Forgetting to check errors in error-first callbacks (Node.js convention).
- Throwing exceptions inside asynchronous callbacks — they can't be caught by outer 	ry/catch.
- Creating callback hell instead of using Promises or async/await.
- Not handling the "callback called multiple times" bug — callbacks should be called exactly once.
- Mixing sync and async callbacks (calling a callback synchronously sometimes and asynchronously other times) — leads to Zalgo-like bugs.

### Follow-Up Questions

**Junior**: What is a callback? What is callback hell?

**Mid**: How would you convert a callback-based API to return a Promise? Show the implementation.

**Senior**: Explain the Zalgo anti-pattern. Why is it dangerous to sometimes call a callback synchronously and sometimes asynchronously?

### FAANG-Level Deep Dive

The **Zalgo** anti-pattern refers to APIs that sometimes invoke their callback synchronously and sometimes asynchronously. This breaks the expectation of the caller, leading to unpredictable execution order:

`js
function readCache(key, callback) {
  const value = cache[key];
  if (value !== undefined) {
    callback(null, value); // synchronous
  } else {
    fetchFromDB(key, callback); // asynchronous
  }
}
`

If cache[key] is set, the callback runs synchronously — before the next line of code after eadCache(). If not, the callback runs asynchronously. This causes the caller to receive results in unexpected order, making state unpredictable. The fix: always use process.nextTick() or setTimeout(fn, 0) to ensure async consistency:

`js
function readCache(key, callback) {
  const value = cache[key];
  if (value !== undefined) {
    process.nextTick(() => callback(null, value)); // always async
  } else {
    fetchFromDB(key, callback); // always async
  }
}
`

Promises solve this problem because .then() callbacks are always called asynchronously (on microtask queue), regardless of whether the Promise is already resolved. The ES spec guarantees this via the NewPromiseReactionJob mechanism.

### Explain Like I'm 7

A callback is like giving your phone number to a restaurant so they can call you when your table is ready. You go shopping while you wait. Callback hell is when you give your phone number to one restaurant, who then gives you another phone number for a second restaurant, who gives you a third number — and you're juggling all these numbers and don't know who called whom.

---

## Q30: Promises

### Short Interview Answer

A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending (initial state), fulfilled (operation completed successfully), and rejected (operation failed). Promises provide .then(), .catch(), and .finally() methods for handling results and errors. They solve callback hell by allowing chaining and flat error handling.

### Detailed Explanation

- **What it is**: An object representing a future value with guaranteed async semantics.
- **Why it exists**: To provide a standardized, composable way to handle async operations without deeply nested callbacks.
- **What problem it solves**: Callback hell, inversion of control, error propagation (.catch() at the end of a chain), and composability (Promise.all, Promise.race).
- **When to use it**: Any async operation — API calls, file I/O, timers, database queries. Use Promises when you need chaining, parallel execution, or robust error handling.
- **When NOT to use it**: For synchronous operations (overkill). For fire-and-forget operations where you don't need the result. Simple callbacks may suffice for event emitters.

### Internal Working

A Promise stores state (pending/fulfilled/rejected) and two queues: [[PromiseFulfillReactions]] and [[PromiseRejectReactions]]. When a Promise resolves, all .then() handlers are scheduled as **microtasks** — they execute before the next macrotask (before setTimeout, DOM events). The NewPromiseCapability creates the Promise and its resolver functions. In V8, Promises are implemented in C++ as JSPromise objects and scheduled via the microtask queue.

### Step-by-Step Execution

`js
const promise = new Promise((resolve, reject) => {
  // 1. Promise created: state = pending, value = undefined
  setTimeout(() => {
    resolve('done');
    // 2. State changes to fulfilled, value = 'done'
    // 3. .then callbacks scheduled as microtasks
  }, 1000);
});
promise.then(value => console.log(value));
// 4. Event loop processes microtask queue
// 5. 'done' logged
`

### Real-World Example

`js
function fetchUserData(userId) {
  return fetch(\/api/users/\\)
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(user => {
      return fetch(\/api/posts?userId=\\);
    })
    .then(response => response.json());
}

fetchUserData(42)
  .then(posts => renderPosts(posts))
  .catch(error => showError(error.message));
`

### JavaScript Example

`js
// Creating and using Promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(1000).then(() => console.log('1 second later'));

// Chaining
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x * 2)
  .then(console.log); // 4

// Error propagation
Promise.resolve(1)
  .then(x => { throw new Error('fail'); })
  .then(() => console.log('skipped')) // skipped
  .catch(err => console.log(err.message)) // 'fail'
  .then(() => console.log('after catch')); // 'after catch'

// Promise state
const p = new Promise(() => {});
console.log(p); // Promise { <pending> }

const p2 = Promise.resolve(42);
console.log(p2); // Promise { 42 }

const p3 = Promise.reject('error');
console.log(p3); // Promise { <rejected> 'error' }

// Immediate resolution
const p4 = new Promise(resolve => resolve('sync'));
p4.then(console.log); // still async — runs as microtask
console.log('this runs first'); // 'this runs first' then 'sync'
`

### Performance Considerations

Promises add overhead compared to raw callbacks: each Promise is a new JSPromise object (~48 bytes), and each .then() creates a PromiseReaction record. Chaining creates N+1 Promise objects for N operations. However, for most applications this overhead is negligible (microseconds). The primary performance benefit of Promises is that they're **thenable** — V8's TurboFan can inline short .then() chains as a single optimized function, treating the chain as a flat sequence rather than nested callbacks. The microtask queue is also faster than the macrotask queue because it doesn't interact with the timer subsystem.

### Common Mistakes

- Not returning a Promise from a .then() callback — breaks the chain.
- Creating an "explicit promise construction anti-pattern" — wrapping already-promised code in 
ew Promise() when you already have one.
- Forgetting .catch() — unhandled rejections crash the process in Node.js (since v15).
- Nesting Promises instead of chaining them.
- Assuming Promises are lazy — they execute the executor function immediately upon creation.

### Follow-Up Questions

**Junior**: What are the three states of a Promise? What does .then() return?

**Mid**: What is the Promise resolution procedure? What happens when .then() returns another Promise?

**Senior**: Explain the difference between the microtask and macrotask queues in the context of Promise resolution. When exactly are .then() callbacks executed?

### FAANG-Level Deep Dive

The Promise resolution procedure ([[Resolve]]) is defined in ECMAScript §27.2.1.3.2. When a Promise resolves to another thenable (including another Promise), the resolution recursively unwraps it. This is called **thenable assimilation**:

`js
const a = Promise.resolve(1);
const b = Promise.resolve(a);
const c = Promise.resolve(b);
// c === a? No, but c.then(x => x) will resolve to 1
`

The key algorithm: if the resolution value is an object with a .then property that's a function, JavaScript calls that .then with the resolve and reject functions of the outer Promise. This enables interop between different Promise libraries (bluebird, Q, native Promises).

V8's JSPromise has an internal slot [[PromiseResolve]] that's used during the ResolvePromise operation. When a Promise resolves to another Promise, V8 doesn't create new PromiseReaction entries — instead, it chains the reactions by linking the Promises' internal reaction lists. This is called **promise fusion**: if Promise A resolves to Promise B, and B already has handlers, those handlers are moved to A's reaction queue, flattening the chain.

### Explain Like I'm 7

A Promise is like a dinner ticket at a fair. You order food and get a ticket (the Promise). The ticket isn't food yet — it's a promise that you'll get food later. You can walk around with your ticket, and when the food is ready, you give your ticket to get the food. If the kitchen burns down, you get an "I'm sorry" note instead (rejection). You can also chain tickets: "when I get my hot dog, I want to use it to get a drink."

---

## Q31: sync/wait

### Short Interview Answer

sync/wait is syntactic sugar over Promises that makes asynchronous code look synchronous. An sync function always returns a Promise. The wait keyword pauses the function execution until the awaited Promise settles, then resumes with the fulfilled value (or throws on rejection). Under the hood, sync/wait uses generators and Promises — V8 transforms the function into a state machine.

### Detailed Explanation

- **What it is**: A pair of keywords that simplify Promise-based asynchronous code. sync marks a function as asynchronous. wait suspends execution until a Promise resolves.
- **Why it exists**: To eliminate the visual noise of .then() chains and make async code as readable as synchronous code.
- **What problem it solves**: Makes error handling with 	ry/catch work for async code. Eliminates callback/.then() nesting. Makes async control flow (loops, conditionals) natural.
- **When to use it**: For any Promise-based async operation. Use as the primary async pattern in modern JavaScript.
- **When NOT to use it**: Don't use wait on non-Promise values (unnecessary). Don't use wait at the top level of modules without top-level await support. Don't await in parallel operations that could run concurrently (use Promise.all instead).

### Internal Working

The ECMAScript spec defines async functions via AsyncFunctionCreate, AsyncFunctionStart, and AsyncFunctionAwait. The function body is compiled into a state machine (similar to generators). Each wait creates a state: the function returns a Promise, suspends, and when the awaited Promise resolves, it resumes from the saved state. V8's TurboFan compiles async functions using the AsyncGraphBuilder which creates a control flow graph with yield/resume points at each wait.

### Step-by-Step Execution

`js
async function fetchData() {
  // 1. Returns a Promise immediately (pauses function)
  const result = await fetch('/api/data');
  // 2. Function suspended here
  // 3. When fetch resolves, function resumes
  // 4. result = Response object
  const data = await result.json();
  // 5. Suspended again
  // 6. When .json() resolves, resumes
  return data;
  // 7. Return value wraps in Promise.resolve(data)
}

fetchData().then(console.log);
`

### Real-World Example

`js
async function getUserData(userId) {
  try {
    const userResponse = await fetch(\/api/users/\\);
    if (!userResponse.ok) throw new Error('User not found');
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\/api/posts?userId=\\);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error('Failed to load user data:', error);
    throw error; // re-throw for caller to handle
  }
}
`

### JavaScript Example

`js
// Basic async/await
async function greet() {
  return 'Hello'; // wraps in Promise.resolve('Hello')
}
greet().then(console.log); // 'Hello'

// Await expression
async function waitAndLog() {
  console.log('before');
  await new Promise(r => setTimeout(r, 1000));
  console.log('after 1 second');
}

// Error handling
async function safeFetch() {
  try {
    const response = await fetch('https://api.example.com');
    return await response.json();
  } catch (err) {
    console.error('Fetch failed:', err);
    return null; // graceful fallback
  }
}

// Sequential vs parallel
async function process() {
  // Sequential (slow)
  const a = await asyncOp1();
  const b = await asyncOp2(); // waits for asyncOp1 to finish
  
  // Parallel (fast)
  const [c, d] = await Promise.all([asyncOp3(), asyncOp4()]);
}

// Await in loops
async function processAll(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item); // sequential
    results.push(result);
  }
  return results;
}

// Top-level await
// In modules:
// const config = await fetchConfig();
// export default config;
`

### Performance Considerations

sync/wait adds minimal overhead over raw Promises — V8 compiles them to an equivalent state machine. Each wait creates a PromiseResolve and scheduling via the microtask queue. In hot paths, the overhead of state saving (saving local variables, restoring PC) can sum up. Parallelism tip: use Promise.all instead of sequential wait for independent operations. In V8, an async function that never awaits (pure sync) still returns a Promise — this adds unnecessary overhead. Avoid sync when not needed.

### Common Mistakes

- Forgetting that sync functions always return a Promise — the caller must use wait or .then().
- Using wait inside orEach() — orEach doesn't await Promises. Use or...of instead.
- Sequential wait of independent operations (use Promise.all).
- Not wrapping wait in 	ry/catch — unhandled rejections crash the process.
- Using eturn await promise unnecessarily — just eturn promise is equivalent and faster (one less microtask).

### Follow-Up Questions

**Junior**: What does the sync keyword do? What does wait do?

**Mid**: How does error handling in async/await differ from .catch() with Promises? Are they functionally equivalent?

**Senior**: Explain how V8 compiles an async function internally. How does the state machine handle multiple await points?

### FAANG-Level Deep Dive

V8's TurboFan compiler transforms async functions into a **resumable state machine**. The AsyncGraphBuilder phase converts the function body into a control flow graph where each wait expression is a state boundary:

`
State 0: Execute code before first await -> If await triggers: Suspend, Save state 1
State 1: Execute code between first and second await -> If await triggers: Suspend, Save state 2
...
State N: Return the value
`

Each state saves the values of all local variables and the resume PC. The saved state is stored in the async function's Promise's internal reaction queue. When the awaited Promise resolves, V8 restores the state and continues execution at the saved PC. This is conceptually similar to generator yield, but optimized specifically for Promises.

Key optimization: if an async function has no wait (or wait on a constant Promise), V8 can **de-async** the function — compiling it as a regular synchronous function that returns Promise.resolve(value). This is detected via the AsyncFunctionIsSimple analysis.

Another optimization: if an async function has a single wait at the end (tail position), V8 can skip the state machine entirely and compile it as a simple .then() callback. This is called **async tail call optimization** and significantly reduces overhead for wrapper functions.

### Explain Like I'm 7

sync/wait is like a remote control for a toy car. Without it, you'd have to say "push the button, then the car moves, then push the next button, then the car turns" in separate steps (Promises). With sync/wait, you can say "push the button, WAIT for the car to move, then push the next button, WAIT for the car to turn" — like writing instructions for someone who follows them step by step, waiting for each step to finish before the next.

---


## Q32: Promise Combinators

### Short Interview Answer

Promise combinators allow coordinating multiple Promises. Promise.all(iterable) waits for ALL Promises to fulfill (rejects fast if any rejects). Promise.race(iterable) settles when the FIRST Promise settles (fulfill or reject). Promise.allSettled(iterable) waits for ALL to settle and returns results with status. Promise.any(iterable) waits for the FIRST to fulfill (rejects with AggregateError if all reject).

### Detailed Explanation

- **What it is**: Static methods on Promise for parallel execution patterns.
- **Why it exists**: To provide built-in patterns for coordinating multiple async operations without external libraries.
- **What problem it solves**: Promise.all enables parallel execution + fail-fast. Promise.allSettled enables parallel execution with graceful handling of failures. Promise.race enables timeouts. Promise.any enables first-success-wins patterns.
- **When to use it**: Promise.all for parallel independent operations. Promise.allSettled for batch processing where partial failures are acceptable. Promise.race for timeouts. Promise.any for redundant API calls (multiple sources).
- **When NOT to use it**: Don't use Promise.all when operations depend on each other (sequential). Don't use Promise.race when you need all results. Don't use Promise.any when you need all to succeed.

### Internal Working

Each combinator creates a new Promise and tracks the settlement of input Promises. V8 optimizes these internally — Promise.all creates a PromiseAll element with a remaining count and a results array. When count reaches 0, the outer Promise resolves. Promise.race resolves/rejects as soon as any input settles.

### Step-by-Step Execution

`js
const slow = new Promise(r => setTimeout(() => r('slow'), 200));
const fast = new Promise(r => setTimeout(() => r('fast'), 100));

// Promise.race
const race = Promise.race([slow, fast]); // settles in 100ms -> 'fast'

// Promise.all
const all = Promise.all([slow, fast]); // settles in 200ms -> ['slow', 'fast']

// Promise.any
const any = Promise.any([slow, fast]); // settles in 100ms -> 'fast'
`

### JavaScript Example

`js
const p1 = delay(100).then(() => 'A');
const p2 = delay(200).then(() => 'B');
const p3 = Promise.reject('Error C');

// Promise.all — fail-fast
Promise.all([p1, p2])
  .then(([a, b]) => console.log(a, b)); // 'A B' after 200ms

Promise.all([p1, p3])
  .catch(err => console.log(err)); // 'Error C' (immediate)

// Promise.allSettled — never rejects
Promise.allSettled([p1, p2, p3])
  .then(results => {
    results.forEach(r => {
      if (r.status === 'fulfilled') console.log('Fulfilled:', r.value);
      else console.log('Rejected:', r.reason);
    });
  });

// Promise.race — first to settle wins
Promise.race([p1, p3])
  .then(v => console.log('Won:', v))
  .catch(e => console.log('Lost:', e)); // whichever settles first

// Promise.any — first to fulfill, ignore rejections
Promise.any([p3, p1, p2])
  .then(v => console.log('First success:', v)); // 'A' after 100ms

// Promise.any — all reject
Promise.any([Promise.reject(1), Promise.reject(2)])
  .catch(err => console.log(err)); // AggregateError: All promises were rejected
`

### Real-World Example

`js
// Timeout with Promise.race
function fetchWithTimeout(url, timeoutMs = 5000) {
  return Promise.race([
    fetch(url).then(r => r.json()),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    )
  ]);
}

// Parallel API calls with allSettled
async function loadDashboard(userId) {
  const [profile, posts, notifications] = await Promise.allSettled([
    fetch(\/api/users/\\).then(r => r.json()),
    fetch(\/api/posts?userId=\\).then(r => r.json()),
    fetch(\/api/notifications/\\).then(r => r.json())
  ]);
  
  return {
    profile: profile.status === 'fulfilled' ? profile.value : null,
    posts: posts.status === 'fulfilled' ? posts.value : [],
    notifications: notifications.status === 'fulfilled' ? notifications.value : []
  };
}

// First available source
const data = await Promise.any([
  fetchFromCDN(),
  fetchFromPrimary(),
  fetchFromBackup()
]);
`

### Performance Considerations

Promise.all is the fastest combinator because it creates a single outer Promise and a results array. Promise.allSettled is slightly slower because it creates wrapper Promises for each input. Promise.race and Promise.any are efficient because they resolve/reject on the first settlement. The main overhead is creating the combinator Promise itself. For hundreds of concurrent operations, the Promises are the bottleneck (each is a JSPromise), not the combinator. In V8, these methods are implemented in C++ (not JS) for performance.

### Common Mistakes

- Forgetting that Promise.all rejects fast — use llSettled when you need all results despite failures.
- Using Promise.race when you mean Promise.any — ace can reject on the first rejection.
- Not handling AggregateError from Promise.any when all Promises reject.
- Passing non-Promise values — they're wrapped with Promise.resolve(), adding overhead.
- Passing empty arrays: Promise.all([]) resolves immediately with [], Promise.race([]) never settles.

### Follow-Up Questions

**Junior**: What's the difference between Promise.all and Promise.allSettled?

**Mid**: Implement a Promise.all polyfill. How does it handle empty input?

**Senior**: How would you design a Promise combinator that limits concurrency (e.g., max 5 parallel requests)? Implement it.

### FAANG-Level Deep Dive

Implementing a **concurrency-limited** Promise combinator:

`js
async function mapConcurrent(items, concurrency, fn) {
  const results = [];
  const executing = new Set();
  
  for (const [index, item] of items.entries()) {
    const p = fn(item).then(result => ({ index, result }));
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean, clean);
    
    if (executing.size >= concurrency) {
      // Wait for one to finish
      await Promise.race(executing);
    }
    // Store result placeholder; reassemble later
    results.push(p);
  }
  
  await Promise.allSettled(executing);
  const resolved = await Promise.allSettled(results);
  return resolved.map(r => r.status === 'fulfilled' ? r.value.result : null);
}
`

V8 has a specific optimization for Promise.all with many elements: it allocates the results array upfront (
ew Array(inputCount)) and uses a decreasing counter. When the counter hits 0, FulfillPromise is called. This is implemented in builtins PromiseAllResolveElementClosure. Google's internal benchmarks show Promise.all with 1000 elements resolves in <1ms.

### Explain Like I'm 7

Promise combinators are like different ways to wait for your friends at a restaurant. Promise.all = "Everyone must arrive before we eat." Promise.race = "First person to arrive gets to choose the restaurant." Promise.allSettled = "Wait until everyone has arrived or cancelled, then we decide." Promise.any = "The first friend who CAN come decides where we go — if everyone cancels, nobody goes."

---

## Q33: Error Handling in Async Code

### Short Interview Answer

In async code, 	ry/catch works seamlessly with sync/wait — rejected Promises throw, and catch blocks catch them. For Promise chains, .catch() at the end catches any rejection in the chain. Global handlers: process.on('unhandledRejection', ...) in Node.js and window.onunhandledrejection in browsers catch unhandled Promise rejections. Always handle rejections — unhandled rejections terminate Node.js processes (since v15).

### Detailed Explanation

- **What it is**: Error propagation mechanisms for asynchronous code: 	ry/catch with wait, .catch() on Promises, global rejection handlers.
- **Why it exists**: Async errors can't be caught with synchronous 	ry/catch because the call stack is different when the error occurs. Promises and async/await bridge this gap.
- **What problem it solves**: Enables centralized error handling, error propagation through Promise chains, and global safety nets for missed rejections.
- **When to use it**: Use 	ry/catch for each async operation when you need granular error handling. Use .catch() at the end of chains for batch handling. Use global handlers for logging and crash prevention.
- **When NOT to use it**: Don't swallow errors silently — always log or re-throw. Don't use 	ry/catch where a rejected Promise is expected (use .catch() for Promise chains). Don't ignore unhandled rejection warnings.

### Internal Working

When a Promise rejects without a .catch(), V8 marks it as "handled" if a .catch() is attached within the same microtask. If no handler is attached by the end of the microtask cycle, V8 fires unhandledRejection. Node.js's PromiseHooks allow monitoring rejection states. V8's JSPromise has an internal [[PromiseIsHandled]] flag that tracks this.

### Step-by-Step Execution

`js
async function risky() {
  throw new Error('Boom!'); // Returns rejected Promise
}

// Method 1: try/catch with await
try {
  await risky();
} catch (err) {
  console.log('Caught:', err.message); // 'Caught: Boom!'
}

// Method 2: .catch()
risky().catch(err => console.log('Caught:', err.message));

// Method 3: Global handler
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at:', promise, 'reason:', reason);
});
`

### Real-World Example

`js
async function fetchProduct(id) {
  const response = await fetch(\/api/products/\\);
  if (!response.ok) {
    throw new ApiError('Product not found', response.status);
  }
  return response.json();
}

async function loadProductPage(productId) {
  try {
    const product = await fetchProduct(productId);
    const [reviews, related] = await Promise.all([
      fetchReviews(productId),
      fetchRelated(productId)
    ]);
    return { product, reviews, related };
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 404) return { notFound: true };
      if (error.status === 500) return { error: 'Server error' };
    }
    logger.error(error);
    return { error: 'Failed to load' };
  }
}
`

### JavaScript Example

`js
// Error propagation in async chains
async function step1() { return 'A'; }
async function step2() { throw new Error('Step 2 failed'); }
async function step3() { return 'C'; }

async function chain() {
  try {
    const a = await step1();
    const b = await step2(); // throws
    const c = await step3(); // never runs
    return { a, b, c };
  } catch (err) {
    console.error(err.message); // 'Step 2 failed'
    return { error: true };
  }
}

// Error in Promise.all
async function parallel() {
  try {
    await Promise.all([
      fetch('/api/a'),
      fetch('/api/b'),
      fetch('/api/c') // if this fails, all fail
    ]);
  } catch (err) {
    // handle any one failure
  }
}

// Promise.allSettled for partial success
async function parallelGraceful() {
  const results = await Promise.allSettled([
    fetch('/api/a'),
    fetch('/api/b'),
    fetch('/api/c')
  ]);
  
  const data = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);
}

// Wrapping non-Promise async errors
function readJSON(path) {
  return fs.promises.readFile(path, 'utf8')
    .then(JSON.parse)
    .catch(err => {
      if (err instanceof SyntaxError) {
        throw new Error(\Invalid JSON in \\);
      }
      throw err; // re-throw other errors
    });
}
`

### Performance Considerations

	ry/catch in async functions has negligible overhead in V8 — the optimizing compiler preserves the try-block structure. However, 	hrow in a Promise chain causes the Promise to reject, which creates a rejection reaction. This is fast (microseconds). Global unhandled rejection handlers add overhead to every Promise rejection because V8 must check if any handler is attached. For high-throughput Promise rejection scenarios, always attach .catch() to avoid global handler invocation.

### Common Mistakes

- Forgetting to wait inside 	ry/catch — the async function continues before the error happens.
- Using 	ry/catch around Promise executor functions — errors in the executor are caught by the Promise itself, not the outer try.
- Not re-throwing after logging — upstream code doesn't know about the error.
- Swallowing errors with empty catch {}.
- Assuming JSON.parse errors inside a Promise chain are caught by .catch() — they ARE if you return them from a .then().

### Follow-Up Questions

**Junior**: How do you handle errors in async functions? What's the difference between 	ry/catch and .catch()?

**Mid**: What happens if a .then() callback throws an error? Does it get caught by the next .catch()?

**Senior**: Explain the mechanism of unhandled Promise rejections. When exactly does Node.js fire the unhandledRejection event?

### FAANG-Level Deep Dive

The **detached promise rejection** pattern is when a Promise is created and rejected, but the rejection happens before any .catch() is attached:

`js
function detach() {
  const p = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Detached')), 100);
  });
  // p is returned, but nobody has .catch() yet
  return p;
}
const p = detach();
setTimeout(() => p.catch(() => {}), 200); // .catch() attached AFTER rejection
`

In this case, the rejection happens at 100ms, but .catch() is attached at 200ms. Between 100ms and 200ms, the Promise is in a "rejected but not yet handled" state. V8 tracks this using a **rejection tracking** mechanism:

1. When a Promise rejects, V8 checks if it has any reaction handlers. If not, it adds it to a "pending unhandled" list.
2. The unhandledRejection event fires AFTER the current microtask checkpoint (not immediately), giving time for .catch() to be attached synchronously.
3. When .catch() is attached later (async), V8 fires ejectionHandled event, indicating the rejection was handled after the fact.

Node.js uses this mechanism for process.on('unhandledRejection') and process.on('rejectionHandled'). Since Node.js 15, unhandled rejections that persist to the next event loop iteration terminate the process — this is the "throw on unhandled rejection" behavior.

### Explain Like I'm 7

Error handling in async code is like having a safety net at a circus. The tightrope walker (async function) might fall. The 	ry/catch is like a net directly under them — if they fall, they're caught immediately. .catch() is like another net further down. If there's no net at all (unhandledRejection), the circus director (Node.js) gets very angry and shuts down the whole show.

---

## Q34: Async Iterators and Generators

### Short Interview Answer

Async generators combine async functions with generators to produce async iterables. Defined with sync function* and consumed with or await...of. They yield Promises internally using wait and produce values asynchronously. This is useful for handling streams of async data — paginated API responses, file streams, event streams, or real-time data feeds.

### Detailed Explanation

- **What it is**: A generator that produces Promises and can wait inside. An async iterator provides a [Symbol.asyncIterator]() method returning 
ext() that returns Promise<{value, done}>.
- **Why it exists**: To provide a standard way to iterate over asynchronous data sources without buffering everything in memory.
- **What problem it solves**: Enables lazy async iteration — data is fetched on-demand as you iterate. Avoids loading entire datasets into memory. Provides cancellation support.
- **When to use it**: Paginated API consumption, reading large files line by line, WebSocket message streams, database cursor iteration, any infinite async sequence.
- **When NOT to use it**: For small in-memory arrays (use regular iteration). When you need random access (use arrays). When the consumer always needs all data (just use Promise.all).

### Internal Working

An async generator creates an AsyncGenerator object (similar to sync generator's Generator). Each yield or wait creates a suspension point. The AsyncGenerator has [[AsyncGeneratorState]] and [[AsyncGeneratorQueue]] for pending requests. or await...of calls .next() on the async iterator, which returns a Promise. V8 compiles async generators into a state machine similar to async functions, but with additional yield/resume logic.

### Step-by-Step Execution

`js
async function* asyncSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await delay(100);    // await inside generator
    yield i;             // yield a value (wrapped in Promise)
  }
}

// for await...of
for await (const num of asyncSequence(1, 3)) {
  console.log(num); // 1 (after 100ms), 2 (after 200ms), 3 (after 300ms)
}
`

### Real-World Example

`js
// Paginated API consumer
async function* paginateApi(baseUrl, pageSize = 100) {
  let page = 0;
  let hasMore = true;
  while (hasMore) {
    const response = await fetch(\\?page=\&limit=\\);
    const data = await response.json();
    if (data.items.length === 0) break;
    for (const item of data.items) {
      yield item; // yield each item individually
    }
    page++;
    if (page >= data.totalPages) hasMore = false;
  }
}

// Usage
for await (const user of paginateApi('/api/users')) {
  console.log('Processing user:', user.id);
  if (user.id === 100) break; // cancellation
}
`

### JavaScript Example

`js
// Basic async generator
async function* createAsyncIterable() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

// Manual iteration
const it = createAsyncIterable();
const result1 = await it.next(); // { value: 1, done: false }
const result2 = await it.next(); // { value: 2, done: false }
const result3 = await it.next(); // { value: 3, done: false }
const result4 = await it.next(); // { value: undefined, done: true }

// Async from sync iterator
const asyncIterator = (function*() {
  yield 1; yield 2; yield 3;
})()[Symbol.asyncIterator] = async function*() {
  for (const v of this) yield v;
};

// Implementing custom async iterable
class AsyncRange {
  constructor(start, end) { this.start = start; this.end = end; }
  [Symbol.asyncIterator]() {
    let i = this.start;
    return {
      next: async () => {
        await delay(10);
        if (i <= this.end) return { value: i++, done: false };
        return { value: undefined, done: true };
      }
    };
  }
}

// Async generator composition
async function* mergeAsync(...iterables) {
  const pending = iterables.map(async (iter) => {
    for await (const value of iter) yield value;
  });
  for await (const value of pending) yield value;
}
`

### Performance Considerations

Async generators have more overhead than sync generators (~2-3x slower for the iteration loop). Each yield creates and resolves a Promise. For high-frequency iteration (e.g., reading a file byte-by-byte), batch yields into larger chunks. V8 optimizes async generator state machines well — the overhead is primarily in Promise creation per yield. For large datasets, the memory advantage (no buffering) far outweighs the per-item overhead.

### Common Mistakes

- Forgetting sync before unction* — yields undefined instead of Promises.
- Using or await...of on non-async iterables — works by wrapping values in Promises, but adds overhead.
- Not handling cancellation — async generators don't auto-cleanup when reak is called. Use 	ry/finally in the generator.
- Throwing inside async generators without 	ry/catch in the consumer — the error is thrown when .next() is called.

### Follow-Up Questions

**Junior**: What is an async generator? How is it different from a regular generator?

**Mid**: How would you consume an async generator? Write a loop that iterates over one.

**Senior**: How does eturn() and 	hrow() work with async generators? How would you implement cancellation?

### FAANG-Level Deep Dive

**Cancellation** in async generators is handled via the eturn() method, which is called implicitly when reak/eturn exits a or await...of loop. The generator's inally block runs:

`js
async function* cancellableStream() {
  try {
    while (true) {
      const data = await fetchNextChunk();
      yield data;
    }
  } finally {
    console.log('Cleanup: close connection');
    await closeConnection(); // cleanup
  }
}

const it = cancellableStream();
for await (const chunk of it) {
  if (chunk === 'STOP') break; // triggers return() -> finally block
}
`

Manual cancellation:

`js
async function* withSignal(signal) {
  const reader = getReadableStream();
  try {
    while (!signal.aborted) {
      const { value, done } = await reader.read();
      if (done || signal.aborted) break;
      yield value;
    }
  } finally {
    reader.cancel();
    signal.removeEventListener('abort', ...);
  }
}

const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
for await (const chunk of withSignal(controller.signal)) {
  process(chunk);
}
`

V8's async generator cancellation runs the inally block as part of the Promise chain initiated by eturn(). The inally can itself be async (wait cleanup()). This is one area where async generators provide superior resource management compared to raw Promise streams.

### Explain Like I'm 7

Async generators are like a candy dispenser that takes time to make each candy. You put in a coin (call .next()), wait, and a candy comes out. You can keep getting candies one at a time. or await...of is like having a robot that keeps putting in coins and eating candies as they come out, pausing between each. If you get tired of candy, you tell the robot to stop, and the dispenser cleans up.

---


## Q35: inally in Promises

### Short Interview Answer

Promise.prototype.finally(onFinally) registers a callback that is called when the Promise settles, regardless of fulfillment or rejection. It receives no arguments (you don't know the outcome) and its return value is ignored — the settled value/reason passes through unchanged. It's equivalent to .then(fn, fn) but without needing to handle or transform the value. Use it for cleanup operations like hiding spinners or closing connections.

### Detailed Explanation

- **What it is**: A method on Promise.prototype that executes a callback when the Promise is settled (fulfilled or rejected).
- **Why it exists**: To avoid duplication in .then() and .catch() for cleanup logic (hide loader, close connection, log completion).
- **What problem it solves**: Eliminates the need to write n in both .then(onFulfilled) and .catch(onRejected) for shared side effects.
- **When to use it**: Loading spinners, closing database connections, releasing locks, logging request completion, incrementing completion counters.
- **When NOT to use it**: Don't use inally for error-specific logic (use .catch()). Don't rely on the return value of inally (it's ignored). Don't use when you need the settlement value or reason.

### Internal Working

inally creates a new Promise. The onFinally function is called, and if it returns a Promise, the outer Promise waits for that Promise to settle before forwarding the original result. If onFinally throws, the outer Promise rejects with that error. V8 implements inally via PromiseResolveThenableJob and PromiseFinally builtins.

### Step-by-Step Execution

`js
fetch('/api/data')
  .then(data => process(data))
  .catch(err => handleError(err))
  .finally(() => hideSpinner());
// 1. fetch runs
// 2. If success: .then runs, then finally runs (hide spinner)
// 3. If failure: .catch runs, then finally runs (hide spinner)
// 4. Finally's return value is ignored, original value/reason passes through
`

### JavaScript Example

`js
// Basic finally
let loading = true;
fetchData()
  .then(data => render(data))
  .catch(err => showError(err))
  .finally(() => { loading = false; });

// Finally with async cleanup
async function getData() {
  const conn = await createConnection();
  try {
    return await conn.query('SELECT * FROM users');
  } finally {
    await conn.close(); // runs after try or catch
  }
}

// Finally passes through the original value
Promise.resolve(42)
  .finally(() => console.log('cleanup'))
  .then(v => console.log(v)); // 42

// Finally passes through original rejection
Promise.reject('error')
  .finally(() => console.log('cleanup'))
  .catch(e => console.log(e)); // 'error'

// Finally waits for Promise return
Promise.resolve(1)
  .finally(() => Promise.resolve('async cleanup')) // waits for this
  .then(v => console.log(v)); // 1 (value not 'async cleanup')
`

### Performance Considerations

inally creates an additional Promise in the chain. For simple cleanup (sync operations), a non-async inally is fast. If onFinally returns a Promise, the chain waits for it, which adds microtask overhead. For maximum performance, use synchronous cleanup in inally. Avoid async inally in hot paths.

### Common Mistakes

- Trying to catch/recover in inally — return value is ignored (throw is not, though).
- Not realizing inally doesn't receive the value or reason.
- Forgetting that a thrown error in inally replaces the previous rejection (or creates a new one).
- Using inally when .then(onFulfilled, onRejected) with shared callback would be clearer.

### Follow-Up Questions

**Junior**: What does .finally() do? Does it receive the resolved value?

**Mid**: What happens if the .finally() callback returns a Promise?

**Senior**: How does .finally() interact with .then() and .catch() in terms of error propagation?

### FAANG-Level Deep Dive

There's an important subtlety: if inally returns a rejected Promise or throws, the original error is REPLACED:

`js
Promise.reject('original error')
  .finally(() => { throw 'finally error'; })
  .catch(e => console.log(e)); // 'finally error' NOT 'original error'
`

This means inally can "overwrite" errors. The spec (§27.2.5.3, Promise.prototype.finally) defines this behavior: inally acts as a transparent handler for the original value, but if onFinally throws, that throw replaces the settled value. This is implemented as:

`js
Promise.prototype.finally = function(onFinally) {
  return this.then(
    value => Promise.resolve(onFinally()).then(() => value),
    reason => Promise.resolve(onFinally()).then(() => { throw reason; })
  );
};
`

Note: Promise.resolve(onFinally()) ensures that if onFinally is a thenable, it's awaited. This is why inally can "delay" the chain.

### Explain Like I'm 7

inally is like cleaning up after a party, no matter how the party went. Whether the party was great (fulfilled) or terrible (rejected), you still have to wash the dishes and put away the decorations. You don't know what happened at the party, and you don't change the outcome — you just clean up and leave everything as it was.

---

## Q36: Promise Unhandled Rejection

### Short Interview Answer

A Promise rejection is "unhandled" when .catch() is not attached to the Promise before the next microtask checkpoint. In Node.js (v15+), unhandled rejections terminate the process with a non-zero exit code. In browsers, they trigger window.onunhandledrejection. Always handle rejections — either with .catch(), 	ry/catch in async functions, or a global handler as a safety net.

### Detailed Explanation

- **What it is**: A Promise that rejects but has no attached rejection handler when the microtask queue drains.
- **Why it exists**: To catch programming errors where Promise rejections are accidentally ignored.
- **What problem it solves**: Prevents silent failures. Without it, rejected Promises could fail silently, making debugging extremely difficult.
- **When to use it**: Every Promise chain MUST have a rejection handler. Use global handlers as a last resort for logging unhandled rejections.
- **When NOT to use it**: Don't rely on global handlers as a substitute for proper .catch(). Don't suppress unhandled rejection warnings without logging.

### Internal Working

V8's JSPromise has a [[PromiseIsHandled]] internal slot. When .catch() is attached, this flag is set. When a Promise settles with a rejection and [[PromiseIsHandled]] is false, V8 schedules an unhandledRejection event on the microtask queue. If .catch() is attached later (before the event fires), the rejection is considered "handled" and the event is cancelled. Node.js's PromiseHooks provide low-level hooks for monitoring.

### JavaScript Example

`js
// Unhandled rejection
new Promise((_, reject) => reject('Error!')); // Unhandled! (no .catch())

// Node.js global handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // Log to monitoring service
  // Don't just console.log — send to error tracking
});

// Browser global handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
  event.preventDefault(); // Prevents console warning
});

// Rejection handled after the fact
const p = new Promise((_, reject) => setTimeout(() => reject('Late'), 100));
setTimeout(() => p.catch(() => {}), 200); // Attached after rejection
process.on('rejectionHandled', (promise) => {
  console.log('Rejection was handled after the fact');
});

// Safe patterns
async function safe() {
  try {
    await risky();
  } catch {
    // handled
  }
}
`

### Real-World Example

`js
// Global rejection handler in Express app
process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION! Shutting down...', reason);
  // Give time for logs to flush
  process.exit(1);
});

// Better: catch all async route handlers
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

app.get('/api/users', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));
`

### Performance Considerations

Checking [[PromiseIsHandled]] is a single flag test, essentially free. The unhandledRejection event is only dispatched for truly unhandled Promises — well-written code should never trigger it. The cost of global handlers is negligible since they're invoked rarely (only on errors). V8's internal PromiseHooks (Debug, Inspector) add overhead when active — avoid using equire('async_hooks') just for Promise tracking in production.

### Common Mistakes

- Forgetting .catch() on top-level Promise chains in Node.js.
- Thinking 	ry/catch around a function that returns a Promise works — it doesn't, you need wait.
- Silently handling rejections with empty .catch(() => {}) — always log or re-throw.
- Not knowing that process.on('unhandledRejection', ...) must be registered at the very start of the app.
- Using process.on('unhandledRejection', ...) without process.exit(1) — the process continues in an undefined state.

### Follow-Up Questions

**Junior**: What is an unhandled Promise rejection? How do you prevent it?

**Mid**: What happens in Node.js when a Promise rejection is not handled?

**Senior**: Explain the difference between unhandledRejection and ejectionHandled events. Why is the timing of these events important?

### FAANG-Level Deep Dive

The **unhandled rejection detection timing** is specified in ECMAScript §27.2.4.7 (HostPromiseRejectionTracker). When a Promise rejects:
1. The engine checks if any rejection handler is already attached (via [[PromiseIsHandled]]).
2. If not handled, the Promise is added to an "unhandled" list.
3. At the end of the current microtask checkpoint, the engine fires unhandledRejection for all Promises in the list.
4. If .catch() is attached later (but before the next microtask checkpoint), the Promise is removed from the list and never fires.
5. If .catch() is attached even later (after unhandledRejection fired), ejectionHandled fires.

This timing is crucial. Example:

`js
const p = new Promise((_, reject) => reject('err'));
// At this point, p is in the "unhandled" list
// If .catch() is attached synchronously below, no event fires
p.catch(() => {}); // Handled! Removed from unhandled list
`

But:

`js
const p = new Promise((resolve, reject) => {
  setTimeout(() => reject('err'), 100); // resolves LATER
});
// p is still pending, not in unhandled list
// Later, after 100ms, p rejects. No .catch() yet -> unhandledRejection
setTimeout(() => p.catch(() => {}), 200); // too late -> rejectionHandled fires
`

In Node.js 15+, if unhandledRejection fires and no handler is registered, the process exits with code 1 (behavior changed from warning-only to throwing by default). This is controlled by the --unhandled-rejections flag.

### Explain Like I'm 7

An unhandled Promise rejection is like dropping a glass in a kitchen with no one around. The glass breaks (the error happens), but nobody sees it, so nobody cleans it up. Over time, broken glass piles up, and people cut their feet. The unhandledRejection event is like a loud alarm that goes off whenever a glass breaks without someone cleaning it up immediately — so you know there's a problem.

---


# Section 6: Event Loop

<details>
<summary><strong>7 Questions — Call stack, microtasks, macrotasks, rendering, Node.js phases</strong></summary>

- Q37: Event Loop Model
- Q38: Microtasks vs Macrotasks
- Q39: equestAnimationFrame
- Q40: Rendering Pipeline
- Q41: Node.js Event Loop Phases
- Q42: process.nextTick
- Q43: Starvation of the Event Loop

</details>

---

## Q37: Event Loop Model

### Short Interview Answer

The event loop is JavaScript's concurrency model, enabling non-blocking I/O despite being single-threaded. It continuously checks the call stack and task queues. When the call stack is empty, it picks up the next task from the macrotask queue, processes it, then processes all microtasks (Promise callbacks) before checking for the next macrotask. This model allows JavaScript to handle many concurrent operations without multi-threading.

### Detailed Explanation

- **What it is**: A programming construct that waits for and dispatches events/messages in a program.
- **Why it exists**: JavaScript was designed for browser UI — it needs to be single-threaded to avoid race conditions on the DOM, but still needs to handle I/O without blocking the UI.
- **What problem it solves**: Enables non-blocking I/O: while waiting for a network request, the event loop can process other callbacks, maintaining responsiveness.
- **When to use it**: You don't "use" the event loop — you need to understand its behavior to write correct async code and avoid performance pitfalls.
- **When NOT to use it**: N/A — it's the foundation of JS runtime. But understand it well for debugging async ordering issues.

### Internal Working

The event loop is implemented by the host environment (browser or Node.js/libuv). The browser's event loop follows the HTML spec: pick oldest macrotask, run it, run all microtasks, potentially update rendering, repeat. Node.js's loop has phases: timers, pending callbacks, idle/prepare, poll, check (setImmediate), close callbacks. V8 itself doesn't implement the event loop — the host environment calls into V8's microtask queue via Isolate::RunMicrotasks().

### Step-by-Step Execution

`js
console.log('1: sync');
setTimeout(() => console.log('2: timeout'), 0);
Promise.resolve().then(() => console.log('3: microtask'));
console.log('4: sync');

// Output: 1, 4, 3, 2
// 1: logged synchronously
// 2: timeout registered (macrotask)
// 3: Promise.then registered (microtask)
// 4: logged synchronously
// Call stack empty -> microtasks queue: '3' logged
// Macrotasks: '2' logged
`

### Real-World Example

Understanding the event loop prevents bugs like:

`js
// Wrong: trying to read DOM after setting state synchronously
button.addEventListener('click', () => {
  element.textContent = 'Updated';
  console.log(element.textContent); // 'Updated' (sync DOM)
  // But browser hasn't re-rendered yet!
  // Use requestAnimationFrame for post-render
});
`

### JavaScript Example

`js
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => {
  console.log('Micro 1');
  Promise.resolve().then(() => console.log('Micro 2'));
});

requestAnimationFrame(() => console.log('RAF'));

console.log('End');

// Output:
// Start
// End
// Micro 1
// Micro 2
// Timeout 1
// Timeout 2
// RAF (before next paint)
`

### Performance Considerations

Blocking the event loop with heavy synchronous work (e.g., parsing a large file) freezes the UI. Any task taking >50ms is considered "slow" (frame budget). Use Web Workers for CPU-heavy work. The microtask queue is unbounded — infinite microtask recursion blocks macrotasks (including I/O). Always ensure microtask chains have termination conditions.

### Common Mistakes

- Blocking the event loop with synchronous loops — always use async operations for I/O.
- Assuming setTimeout(fn, 0) runs immediately — it runs after all microtasks and at least 1ms later (browser minimum).
- Creating infinite microtask loops (e.g., recursively resolving Promises) — blocks all other tasks.
- Not understanding that the event loop is cooperative — a single long task can starve the entire application.

### Follow-Up Questions

**Junior**: What is the event loop? Why is JavaScript single-threaded?

**Mid**: Explain the difference between the call stack and task queues. What happens when the call stack is not empty?

**Senior**: How does the browser's event loop differ from Node.js's event loop? What's the role of libuv in Node?

### FAANG-Level Deep Dive

The HTML spec defines the event loop processing model as a series of steps called "event-loop-processing-model" (§8.1.7.3):

1. Select the oldest macrotask from one of the macrotask queues (task source-based — UI events, timers, I/O each have separate queues)
2. Set event loop's currently running task to this task
3. Run the task
4. Set currently running task to null
5. Remove the task from its queue
6. **Perform microtask checkpoint**: run all microtasks until the queue is empty
7. If not microtask checkpoint: update rendering (rAF, style recalc, layout, paint)
8. Determine next task: if all queues empty, sleep until new task arrives

The key insight: microtasks are processed AFTER EVERY single macrotask, not just once per event loop iteration. This means if a macrotask queues a microtask, and that microtask queues another microtask, they all run before the next macrotask. This is why Promises can starve timers.

Node.js is different: microtasks (Promise callbacks) and process.nextTick are processed between each phase of the event loop, not after every macrotask.

### Explain Like I'm 7

The event loop is like a cashier at a busy cafeteria. One person at a time (single-threaded). The cashier takes an order (macrotask), processes it, then quickly handles any small corrections (microtasks — like "I said no pickles"). Only then does the cashier move to the next person in line. Between customers, the cashier checks if napkins need refilling (rendering updates). If one person takes too long ordering, everyone else waits (blocking the event loop).

---

## Q38: Microtasks vs Macrotasks

### Short Interview Answer

Microtasks and macrotasks are two task queues in JavaScript's event loop. **Macrotasks** include setTimeout, setInterval, setImmediate, I/O callbacks, DOM events. **Microtasks** include Promise .then()/.catch()/.finally(), MutationObserver, queueMicrotask, process.nextTick (Node-specific). Microtasks are executed immediately after the current macrotask completes and before the next macrotask, giving them higher priority.

### Detailed Explanation

- **What it is**: Two priority levels of async callbacks. Microtasks have higher priority and are processed right after the currently executing script.
- **Why it exists**: To provide a way to execute callbacks as soon as possible, before the browser has a chance to re-render or process new events.
- **What problem it solves**: Enables Promise-based code to resolve predictably before timers and I/O. Ensures that Promise.then() callbacks run as soon as possible.
- **When to use it**: Use queueMicrotask for deferring work until the current operation completes but before rendering. Use setTimeout for deferring work to a later event loop iteration.
- **When NOT to use it**: Don't use microtasks for heavy computation (starves rendering). Don't use macrotasks when you need immediate execution.

### Internal Working

Microtasks are stored in a dedicated microtask queue. V8's Isolate has a microtask_queue that is drained via RunMicrotasks(). The browser calls this after every JS execution context exits. Macrotasks are stored in task queues (browser) or libuv's I/O completion queue. Microtasks are processed in a loop until the microtask queue is empty — this is called a **microtask checkpoint**.

### Step-by-Step Execution

`js
setTimeout(() => console.log('macrotask'), 0);
queueMicrotask(() => console.log('microtask'));
console.log('sync');

// 1. 'sync' logged
// 2. Macrotask queued (timeout callback)
// 3. Microtask queued
// 4. Current script ends -> microtask checkpoint
// 5. 'microtask' logged
// 6. Event loop picks next macrotask
// 7. 'macrotask' logged
`

### JavaScript Example

`js
// Microtask queue is emptied in a loop
setTimeout(() => console.log('macrotask'), 0);

queueMicrotask(function micro1() {
  console.log('micro 1');
  queueMicrotask(() => {
    console.log('micro 1.1');
    queueMicrotask(() => console.log('micro 1.1.1'));
  });
});

queueMicrotask(() => console.log('micro 2'));

// Output:
// micro 1
// micro 2
// micro 1.1
// micro 1.1.1
// macrotask

// All microtasks run BEFORE the macrotask

// Creating a microtask loop that starves macrotasks
function microtaskLoop() {
  queueMicrotask(() => {
    console.log('still going...');
    microtaskLoop(); // DANGER: infinite microtask loop!
  });
}
// This will block all macrotasks forever (or until stack overflow)
`

### Performance Considerations

Microtasks are cheaper than macrotasks because they don't interact with the timer subsystem or I/O completion ports. However, excessive microtasks can starve the event loop (macrotasks and rendering never run). The microtask queue is unbounded — infinite microtask recursion will eventually crash with "Maximum call stack size exceeded" if the microtask scheduling itself doesn't overflow first. Use setTimeout for work that can safely be deferred to balance event loop responsiveness.

### Common Mistakes

- Not knowing that Promises use microtasks — Promise.resolve().then(fn) runs before setTimeout(fn, 0).
- Creating infinite microtask chains that block rendering and I/O.
- Using setTimeout(fn, 0) when queueMicrotask is more appropriate (or vice versa).
- Assuming microtasks run between macrotasks only — they run after EVERY javascript execution context (including event handlers).
- Forgetting that process.nextTick is a special microtask that runs before all other microtasks.

### Follow-Up Questions

**Junior**: What's the difference between a microtask and a macrotask? Give examples of each.

**Mid**: Why does Promise.resolve().then(fn) run before setTimeout(fn, 0)? Explain the queue ordering.

**Senior**: How does deep Promise chaining (recursive microtask scheduling) affect the event loop? Design a fair scheduler that balances microtasks and macrotasks.

### FAANG-Level Deep Dive

The microtask queue has **two tiers** in V8: the normal microtask queue (Promises, queueMicrotask) and the **next tick queue** (process.nextTick in Node.js). process.nextTick callbacks run BEFORE other microtasks:

`js
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));
// Output: nextTick, promise
`

The HTML spec defines the microtask checkpoint more precisely: when JavaScript execution context is popped from the stack, the HTML spec calls "CleanupAfterRunningCallback" which performs a microtask checkpoint. This means microtasks run after each task, after each callback, and after each event handler. The spec also defines that microtasks are processed in the order they were added (FIFO), and new microtasks added during checkpoint processing are also processed (which is why deep chaining is possible).

To prevent microtask starvation of macrotasks, some environments (Deno, some browser implementations) limit the microtask checkpoint to a maximum number of iterations (e.g., 1024). If exceeded, remaining microtasks are deferred to the next checkpoint. This is called **microtask budget**. However, as of 2026, most mainstream browsers process all microtasks in a single checkpoint without a hard limit.

### Explain Like I'm 7

Microtasks are like quick, urgent things you do right after finishing a chore — like washing your hands right after taking out the trash. Macrotasks are like bigger tasks you plan to do later — like "I'll clean the garage after lunch." The microtasks (washing hands) always happen before the next big task, no matter how many small urgent things you add. If you keep remembering more urgent things, you never get to the bigger tasks — that's microtask starvation.

---

## Q39: equestAnimationFrame

### Short Interview Answer

equestAnimationFrame(callback) schedules a callback to run **before the next browser paint/repaint**, typically ~16.6ms (60fps). It's the standard way to create smooth animations and perform visual updates. The callback receives a high-resolution timestamp. The browser can pause AF when the tab is in the background, saving CPU/battery. Unlike setTimeout, AF synchronizes with the display's VSYNC, preventing frame tearing.

### Detailed Explanation

- **What it is**: A browser API that registers a callback to be invoked before the next repaint.
- **Why it exists**: To provide an efficient, VSYNC-aligned mechanism for visual updates that prevents jank and tearing.
- **What problem it solves**: setTimeout-based animations are not synchronized with the display refresh rate, causing jank. rAF pauses when the tab is hidden, saving resources.
- **When to use it**: Animations (CSS transitions, canvas, WebGL), scroll-linked effects, measuring layout (layout thrashing avoidance), and any visual update that should happen before the next paint.
- **When NOT to use it**: For non-visual periodic work (use setInterval or setTimeout). For network polling. For audio processing (use AudioContext timestamps).

### Internal Working

The browser maintains a list of rAF callbacks. In the event loop's "update the rendering" step, the browser:
1. Fires equestAnimationFrame callbacks (in order)
2. Performs style calculation (CSS)
3. Performs layout (reflow)
4. Paints (compositing)

The rAF callback runs BEFORE style recalc and layout, making it the ideal place to update DOM for the upcoming frame. V8 receives the callback via kRAFCallback task type.

### Step-by-Step Execution

`js
function animate(timestamp) {
  // 1. Callback fires before next paint
  // 2. timestamp = DOMHighResTimeStamp (ms since page load)
  element.style.transform = \	ranslateX(\px)\;
  // 3. Style recalculation happens after all rAF callbacks
  // 4. Layout happens
  // 5. Paint happens
  requestAnimationFrame(animate); // schedule next frame
}

requestAnimationFrame(animate); // start the loop
`

### Real-World Example

`js
// Smooth scroll-based animation
let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', () => {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeaderStyle(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});

// Measuring layout without thrashing
function measureElements() {
  const elements = document.querySelectorAll('.measured');
  requestAnimationFrame(() => {
    elements.forEach(el => {
      console.log(el.getBoundingClientRect().width);
      // Reading layout in rAF is safe for the NEXT frame
    });
  });
}
`

### JavaScript Example

`js
// FPS counter with rAF
let frameCount = 0;
let lastTime = performance.now();

function countFPS(now) {
  frameCount++;
  if (now - lastTime >= 1000) {
    console.log(\FPS: \\);
    frameCount = 0;
    lastTime = now;
  }
  requestAnimationFrame(countFPS);
}
requestAnimationFrame(countFPS);

// rAF returns a cancel ID
const animId = requestAnimationFrame(myCallback);
cancelAnimationFrame(animId); // cancel

// rAF with different frame rates (using time skipping)
let lastFrameTime = 0;
const FRAME_INTERVAL = 1000 / 30; // 30 FPS

function throttledRAF(timestamp) {
  if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
    update(timestamp);
    lastFrameTime = timestamp;
  }
  requestAnimationFrame(throttledRAF);
}
requestAnimationFrame(throttledRAF);

// rAF in a Promise wrapper
function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}

async function animate() {
  while (true) {
    updateScene();
    await nextFrame(); // pause until next paint
  }
}
`

### Performance Considerations

rAF is the most efficient way to run visual updates because:
- It aligns with VSYNC (display refresh), typically 60Hz or 120Hz.
- It pauses when the tab is hidden (background tabs don't waste resources).
- It fires before layout/paint, so updates compose into a single frame.

Multiple rAF callbacks in the same frame are batched — all fire before the single paint. Registering callbacks inside rAF (the pattern AF(() => { update(); rAF(update); }) creates a single callback per frame. The overhead of rAF itself is ~1-5µs per invocation.

### Common Mistakes

- Using setTimeout for animations instead of rAF (causes jank, flicker, excessive CPU use).
- Reading layout properties (e.g., element.offsetHeight) inside rAF without understanding layout thrashing — rAF is before layout, so reading triggers forced reflow.
- Not canceling rAF on component unmount (memory leak of callback closures).
- Assuming rAF fires exactly every 16.67ms — it can slow down if the system is under load.
- Using rAF for non-visual periodic tasks (wastes the UI frame budget).

### Follow-Up Questions

**Junior**: What is equestAnimationFrame? How is it different from setTimeout?

**Mid**: Explain the relationship between equestAnimationFrame, style recalc, layout, and paint. In what order do they run?

**Senior**: How does the browser's rendering pipeline interact with the event loop? When does the "update rendering" step occur?

### FAANG-Level Deep Dive

The **rendering pipeline** in the browser event loop is governed by the HTML spec's "update the rendering" step. This step is not guaranteed to happen every event loop iteration — it happens when the browser determines it's time for the next frame, typically driven by VSYNC (vertical sync interrupts). The key steps:

1. **requestAnimationFrame callbacks** — fire all queued rAF callbacks
2. **Style recalculation** — process class changes, CSS animations, inline style changes
3. **Layout (reflow)** — calculate element positions and sizes
4. **Paint** — fill pixels for each layer
5. **Compositing** — combine layers for final display

Critical insight: if rAF callbacks modify the DOM, the style recalculation catches those changes in the same frame. This means no frame delay. However, if you read layout properties (e.g., getBoundingClientRect()) in rAF, you force the browser to do layout early (forced reflow), which can negate the benefits of batching. This is called **layout thrashing** — avoid it by batch-reading then batch-writing (separate rAF callbacks or FastDOM pattern).

The "frame budget" concept: for 60fps, each frame takes at most 16.67ms. If rAF + style + layout + paint exceed this, the frame is dropped (jank). Use the Performance panel to identify frames exceeding the budget.

### Explain Like I'm 7

equestAnimationFrame is like telling the teacher "tell me right before you draw on the blackboard." Instead of randomly shouting out answers (setTimeout), you wait until the teacher is about to write, then you give your update. The teacher batches all students' updates at once, writes them on the board, and the whole class sees the changes together. If the teacher leaves the room (tab in background), no updates happen, saving energy.

---

## Q40: Rendering Pipeline

### Short Interview Answer

The rendering pipeline is the sequence of steps the browser takes to convert HTML/CSS to pixels on screen: **Style** (compute styles for each element), **Layout** (calculate geometry), **Paint** (fill pixels), and **Compositing** (combine layers). The pipeline runs after microtasks and before the next macrotask, synchronized with the display's refresh rate. equestAnimationFrame callbacks are the last chance to make changes before the pipeline begins.

### Detailed Explanation

- **What it is**: The four main stages of browser rendering: style, layout, paint, composite.
- **Why it exists**: To efficiently convert declarative DOM/CSS into visual pixels on screen, batching changes per frame.
- **What problem it solves**: Prevents jank by batching visual updates, enables off-main-thread compositing, and provides hooks (rAF) for synchronization.
- **When to use it**: All visual updates go through the pipeline. Understanding it helps avoid layout thrashing and optimize animation performance.
- **When NOT to use it**: N/A — it's automatic. But avoid triggering layout unnecessarily (read properties after, not during, style recalc).

### Step-by-Step Execution

`js
// Frame sequence:
// 1. Event handler runs (click, scroll, etc.)
// 2. Microtask checkpoint (Promise callbacks)
// 3. requestAnimationFrame callbacks
// 4. Style calculation: compute \.box { ... }\ for all elements
// 5. Layout: compute positions, sizes (reflow)
// 6. Paint: fill pixel buffers (rasterization)
// 7. Compositing: combine layers into final pixels
// 8. GPU presents the frame to the display
`

### Real-World Example

`js
// Layout thrashing example (BAD)
function badAnimation() {
  for (let i = 0; i < 1000; i++) {
    boxes[i].style.left = i + 'px';
    console.log(boxes[i].offsetLeft); // forces layout on every iteration!
  }
}

// Batched read/write pattern (GOOD)
function goodAnimation() {
  // Read phase
  const positions = boxes.map(b => b.getBoundingClientRect());
  // Write phase
  requestAnimationFrame(() => {
    boxes.forEach((box, i) => {
      box.style.transform = \	ranslateX(\px)\;
    });
  });
}
`

### JavaScript Example

`js
// Measuring render time
function measureFrame() {
  let lastTime = performance.now();
  
  function checkFrame(now) {
    const elapsed = now - lastTime;
    if (elapsed > 16.67) {
      console.warn(\Frame dropped: \ms\);
    }
    lastTime = now;
    requestAnimationFrame(checkFrame);
  }
  requestAnimationFrame(checkFrame);
}

// Forces a style recalculation
element.classList.add('active');
const style = getComputedStyle(element); // forces style recalc
const width = element.offsetWidth; // forces layout

// Avoid forced layout by reading after writing
element.style.width = '100px';
element.style.height = '100px';
requestAnimationFrame(() => {
  // At this point, style/layout hasn't happened yet
  // Reading here still forces layout
  const height = element.offsetHeight; // forced reflow
});
`

### Performance Considerations

- **Style recalc**: cheap for simple selectors, expensive for deep descendant selectors or :nth-child pseudo-classes.
- **Layout**: the most expensive stage — changing width/height/top/left triggers reflow. Use 	ransform and opacity which only trigger compositing.
- **Paint**: expensive for effects like ox-shadow, order-radius, gradients. Avoid in animations.
- **Composite**: cheap — done on the GPU. Promote layers with will-change: transform.

The **Critical Rendering Path** (pipeline) is triggered by:
- Changing DOM (modify, add, remove elements)
- Changing CSS (inline styles, classes, stylesheets)
- getComputedStyle(), offsetWidth, offsetHeight, getBoundingClientRect() AFTER a style/class change

### Common Mistakes

- **Layout thrashing**: interleaving read/write DOM operations in a loop — each read forces a synchronous layout.
- **Forcing layout unnecessarily**: reading offsetWidth after changing styles.
- **Animating non-composited properties**: left, 	op, width, height trigger layout.
- **Not using will-change** for elements that will animate.
- **Forgetting that class changes trigger style recalc** when using classList.

### Follow-Up Questions

**Junior**: What are the stages of the rendering pipeline?

**Mid**: What is layout thrashing? How do you avoid it?

**Senior**: Explain which CSS properties trigger layout, paint, and composite. How does will-change affect layer creation?

### FAANG-Level Deep Dive

Modern browsers (Chrome, Edge, Safari, Firefox) use **GPU compositing** where the page is split into multiple layers (compositor layers). The compositing step combines these layers using the GPU. Certain CSS properties force the browser to create a new layer:

- will-change: transform | opacity
- 	ransform: translateZ(0) or 	ransform: translate3d(0,0,0) (traditional hack)
- overlay and contain: layout | paint
- <video>, <canvas>, iframe elements

When an element is on its own layer, 	ransform and opacity animations only trigger compositing (no style/layout/paint). This is the **holy grail** of 60fps animation — only composite is hit.

Chrome DevTools' "Performance" tab shows a "Layers" panel that visualizes the layer tree. You can see which elements have been promoted to layers. Over-promoting (too many layers) consumes GPU memory and can hurt performance on low-end devices. The rule: only promote elements that will actually animate.

The new **Element.toggleAttribute** and **View Transitions API** (Chrome 120+) introduce new rendering pipeline optimizations that allow smooth page transitions by snapshotting before/after states on separate compositor layers.

### Explain Like I'm 7

The rendering pipeline is like making a sandwich. First, you read the recipe (style calculation). Then you lay out the ingredients in order (layout — bread, then meat, then cheese). Then you add the final touches like cutting it in half (paint). Finally, you put it on a plate (compositing). If someone asks "how thick is the bread?" while you're still laying out ingredients, you have to stop and measure it — that's forced layout. Just wait until the sandwich is assembled to measure.

---


## Q41: Node.js Event Loop Phases

### Short Interview Answer

Node.js's event loop is based on libuv and has six phases: **timers** (setTimeout/setInterval callbacks), **pending callbacks** (I/O callbacks deferred to the next loop iteration), **idle/prepare** (internal use), **poll** (retrieve new I/O events, execute I/O callbacks), **check** (setImmediate callbacks), and **close callbacks** (close event callbacks like socket.on('close')). Between each phase, microtasks (Promise callbacks) and process.nextTick callbacks are executed.

### Detailed Explanation

- **What it is**: The phases of the event loop in Node.js, implemented by libuv.
- **Why it exists**: To provide a predictable order for processing different types of asynchronous operations in Node.js.
- **What problem it solves**: Ensures I/O callbacks, timers, and immediate callbacks are processed in a consistent, predictable order.
- **When to use it**: Understanding phases helps you predict the execution order of setTimeout(0), setImmediate, process.nextTick, and I/O callbacks.
- **When NOT to use it**: N/A — it's automatic. But avoid relying on specific phase ordering for application logic (use setImmediate vs 
extTick consciously).

### Internal Working

libuv's event loop runs as long as there are active handles or requests. Each iteration runs through the phases in order: timers check expired timers using a min-heap; pending callbacks processes completed I/O callbacks; poll blocks for new I/O events; check runs setImmediate; close callbacks handles cleanup. After each phase, V8's Isolate::PerformMicrotaskCheckpoint() is called.

### Step-by-Step Execution

`js
const fs = require('fs');

fs.readFile('file.txt', () => {
  setTimeout(() => console.log('timer'));
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  Promise.resolve().then(() => console.log('promise'));
});
// Output: nextTick, promise, immediate, timer
// 1. I/O callback (poll phase)
// 2. After poll, microtasks: nextTick > promise
// 3. Check phase: immediate
// 4. Next iteration timers phase: timer
`

### JavaScript Example

`js
// setTimeout vs setImmediate
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
// Output depends on phase: if in timers phase, timeout first; if in poll, immediate first

// Inside I/O callback, immediate always wins
fs.readFile(__filename, () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  // Output: immediate, timeout
});

// Phases in action
const start = Date.now();
setTimeout(() => console.log('timers phase'), 50);
fs.readFile(__filename, () => console.log('poll phase (I/O)'));
setImmediate(() => console.log('check phase'));
process.nextTick(() => console.log('nextTick (between phases)'));

// order: nextTick, timers (50ms later)/poll (depending on file read time), check
`

### Performance Considerations

The poll phase can block waiting for I/O — this is where most Node.js applications spend time. Timer resolution depends on the system's clock resolution (~1ms on modern systems). setTimeout(fn, 0) is clamped to 1ms (Node.js 10+). setImmediate is always deferred to the next check phase with zero additional delay. process.nextTick has the highest priority (runs before any other microtasks). Using process.nextTick excessively can starve I/O.

### Common Mistakes

- Confusing process.nextTick with queueMicrotask — nextTick runs before all other microtasks.
- Assuming setTimeout(fn, 0) runs before I/O callbacks — it depends on whether we're in the timers phase or poll phase.
- Using process.nextTick for async iteration — it creates a "microtask hell" that blocks I/O.
- Not knowing that recursive process.nextTick calls can create infinite loops that block the event loop.
- Thinking event loop phases are browser-like — Node.js doesn't have rendering, rAF, or layout.

### Follow-Up Questions

**Junior**: What are the phases of the Node.js event loop?

**Mid**: When does setImmediate run vs setTimeout(fn, 0)? Which runs first inside an I/O callback?

**Senior**: Explain the relationship between libuv event loop phases and V8's microtask queue. When exactly are microtasks processed in Node.js?

### FAANG-Level Deep Dive

The Node.js event loop processes microtasks (Promise callbacks) and process.nextTick callbacks **between each phase**, not just once per iteration. The specific algorithm:

1. **Before entering a phase**: if transitioning between phases, process all 
extTick and microtask queues.
2. **After each phase**: process all 
extTick and microtask queues again.
3. **Exception**: the unMicrotasks() call happens AFTER the phase's callbacks are done but BEFORE moving to the next phase.

This means that a timer callback that queues a million microtasks will delay the next phase (pending callbacks, poll, etc.) until all microtasks are drained. This is why microtask-heavy code can significantly impact Node.js's I/O responsiveness.

The process._getActiveRequests() and process._getActiveHandles() are internal methods that show what's keeping the loop alive — useful for debugging why a Node.js process won't exit. An active TCP socket, timer, or setImmediate handle keeps the loop running.

### Explain Like I'm 7

The Node.js event loop is like a mail sorting office with different stations (phases). Timers station checks when the next letter needs to go out. I/O station handles incoming mail. Check station handles urgent inter-office memos (setImmediate). Between stations, the supervisor quickly handles special requests (nextTick and microtasks). If the supervisor keeps getting distracted by special requests, the mail never reaches the next station.

---

## Q42: process.nextTick

### Short Interview Answer

process.nextTick(callback) schedules a callback to be invoked **before** the next event loop phase, even before Promise microtasks. It has the highest priority of any async callback in Node.js. Use it to defer work to the current iteration's microtask queue but before I/O and timers. Overuse can cause I/O starvation — reason: process.nextTick callbacks are processed between each event loop phase.

### Detailed Explanation

- **What it is**: A Node.js-specific method that defers a function to the current event loop phase's "next tick" queue.
- **Why it exists**: To allow developers to defer work while maintaining high priority, ensuring work is done before I/O but after the current operation completes.
- **What problem it solves**: Enables patterns like "emit event after synchronous setup," "flush a buffer after current operation," and "delay a callback to prevent stack overflow."
- **When to use it**: Error events in API callbacks (ensure error handler is attached before error is emitted). Breaking up synchronous operations. Postponing expensive work.
- **When NOT to use it**: For general async deferring — use queueMicrotask or setImmediate. Avoid in tight loops (causes I/O starvation). Don't use for cross-platform code (deno, bun don't support it).

### Internal Working

process.nextTick adds to a 
extTickQueue in Node.js's internal C++ layer. Libuv has a special UV_RUN_NOWAIT mode for nextTick processing. The queue is drained before any other microtasks, before each event loop phase transition. Technically, process.nextTick is not part of the event loop proper — it's processed in the microtask queue, but Node.js guarantees it runs before Promise microtasks.

### Step-by-Step Execution

`js
console.log('1');
process.nextTick(() => console.log('nextTick 1'));
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick 2'));
console.log('2');

// Output: 1, 2, nextTick 1, nextTick 2, promise
// process.nextTick callbacks always run before Promise microtasks!
`

### JavaScript Example

`js
// Error handling pattern
function asyncStream(stream) {
  let errorCalled = false;
  
  // Ensure errors are emitted asynchronously so handlers can be attached
  stream.on('error', (err) => {
    errorCalled = true;
    process.nextTick(() => {
      stream.emit('error', err);
    });
  });
}

// Breaking up synchronous work
function processLargeArray(array) {
  const chunk = array.splice(0, 100);
  processChunk(chunk);
  
  if (array.length > 0) {
    process.nextTick(() => processLargeArray(array));
    // Gives I/O callbacks a chance to run between chunks
  }
}

// Event emitter guarantee
class MyEmitter extends EventEmitter {
  emit(event, ...args) {
    if (event === 'data') {
      // Defer to ensure all listeners are attached
      return process.nextTick(() => super.emit(event, ...args));
    }
    return super.emit(event, ...args);
  }
}
`

### Performance Considerations

process.nextTick adds a callback to a queue that's drained between every phase. Each nextTick callback adds overhead (~500ns). More importantly, recursive nextTick calls prevent I/O from being processed:

`js
function infiniteNextTick() {
  process.nextTick(() => {
    console.log('still here');
    infiniteNextTick(); // DANGER: blocks I/O forever
  });
}
`

Node.js has a soft limit (process.maxTickDepth = 1000) that forces nextTick queue processing to yield, but this is now removed in newer versions. The limit is now runtime-based rather than count-based. The recommended max for nextTick recursion is 0 — use setImmediate instead.

### Common Mistakes

- Using process.nextTick when setImmediate is more appropriate (nextTick has higher priority than I/O).
- Creating "nextTick loops" that starve the event loop.
- Assuming process.nextTick exists in browsers (it doesn't — use queueMicrotask or MutationObserver).
- Using nextTick for periodic work (use setInterval or setImmediate).
- Not knowing that nextTick callbacks can be limited via environment variables.

### Follow-Up Questions

**Junior**: What is process.nextTick? How is it different from setTimeout(fn, 0)?

**Mid**: Why does process.nextTick run before Promise .then() callbacks?

**Senior**: Design a pattern using process.nextTick to prevent stack overflow in a recursive event emitter.

### FAANG-Level Deep Dive

The relationship between process.nextTick and Promise microtasks is unique to Node.js. The order in Node.js is:

1. process.nextTick queue (drained completely)
2. Promise microtask queue (drained completely)
3. (repeat between each event loop phase)

This is implemented in Node.js's internal/process/next_tick.js and sync-wrap.cc. NextTick callbacks are stored in a C++ queue (Environment::tick_info()->has_tick_scheduled()), while Promise microtasks are managed by V8's MicrotaskQueue. Node.js created this distinction because process.nextTick predates the ES6 Promise spec. When Promises were added to V8, Node.js had to ensure 
extTick retained its priority — it does this by processing the nextTick queue in the JS side before calling isolate->RunMicrotasks().

The process.nextTick queue can also be used as a **microtask scheduling mechanism** without requiring Promise polyfills. In pre-ES6 Node.js, this was the only way to schedule microtasks. Modern code should prefer queueMicrotask (which uses the same V8 microtask queue as Promises) but process.nextTick remains useful for its ultra-high priority.

### Explain Like I'm 7

process.nextTick is like being a VIP at a theme park. You don't wait in the regular line (like setTimeout) or even the fast-pass line (like Promises). As soon as the current ride ends, you get to go before anyone else. But if you keep using your VIP pass over and over, nobody else gets to ride, and the park shuts down (I/O starvation).

---

## Q43: Starvation of the Event Loop

### Short Interview Answer

Event loop starvation occurs when a task or microtask takes too long or keeps requeueing itself, preventing other tasks (I/O, rendering, timers) from being processed. Common causes: synchronous CPU-heavy work, infinite Promise/microtask chains, recursive process.nextTick calls, and large loops that don't yield. The solution is breaking work into chunks, using setImmediate/setTimeout for yielding, or using Web Workers for CPU-bound work.

### Detailed Explanation

- **What it is**: A condition where the event loop cannot process other tasks because one type of task monopolizes the loop.
- **Why it exists**: The event loop is cooperative — each task must eventually return control to the loop. There's no preemption.
- **What problem it solves**: (It's a problem to avoid.) Understanding starvation helps you design non-blocking code patterns.
- **When to use it**: Always design your code to yield periodically. Any synchronous operation >50ms should be chunked.
- **When NOT to use it**: Never intentionally starve the event loop. Use setImmediate, queueMicrotask, or chunking to ensure fairness.

### Step-by-Step Execution

`js
// Starvation example
function blockEventLoop() {
  while (true) {} // NEVER DO THIS — infinite loop blocks everything
}

// Microtask starvation
function starveWithMicrotasks() {
  Promise.resolve().then(() => {
    starveWithMicrotasks(); // microtask chains prevent macrotasks from running
  });
}

// Proper yielding
function chunkedWork(work, chunkSize) {
  let i = 0;
  function doChunk() {
    const end = Math.min(i + chunkSize, work.length);
    for (; i < end; i++) {
      process(work[i]);
    }
    if (i < work.length) {
      setTimeout(doChunk, 0); // yield to event loop
    }
  }
  doChunk();
}
`

### Real-World Example

`js
// Processing thousands of DOM elements without starving
async function processElements(elements) {
  const batchSize = 50;
  for (let i = 0; i < elements.length; i += batchSize) {
    const batch = elements.slice(i, i + batchSize);
    batch.forEach(el => process(el));
    // Yield to event loop to handle user input, animations, etc.
    await new Promise(r => setTimeout(r, 0));
    // Or: await new Promise(r => requestAnimationFrame(r));
  }
}

// CPU-intensive work in a background thread
const worker = new Worker('worker.js');
worker.postMessage(largeData);
worker.onmessage = (e) => {
  console.log('Processing complete:', e.data);
};
`

### JavaScript Example

`js
// Detecting starvation
let lastCheck = Date.now();
setInterval(() => {
  const elapsed = Date.now() - lastCheck;
  if (elapsed > 100) {
    console.warn(\Event loop starved for \ms\);
  }
  lastCheck = Date.now();
}, 100);

// Chunked processing with setImmediate (Node.js)
function processLargeArray(array, fn, callback) {
  const items = array.slice();
  function processNext() {
    const start = Date.now();
    while (items.length > 0 && Date.now() - start < 5) {
      fn(items.shift());
    }
    if (items.length > 0) {
      setImmediate(processNext); // yield to check phase
    } else if (callback) {
      callback();
    }
  }
  processNext();
}

// Using requestIdleCallback (browser)
function processWhenIdle(data) {
  let i = 0;
  function processChunk(deadline) {
    while (i < data.length && deadline.timeRemaining() > 0) {
      process(data[i++]);
    }
    if (i < data.length) {
      requestIdleCallback(processChunk);
    }
  }
  requestIdleCallback(processChunk);
}
`

### Performance Considerations

Starvation detection is important for production monitoring. Set up an interval-based watchdog that checks Date.now() to detect long tasks. Tools like Node.js's locked-at package track event loop delay. In the browser, the Long Tasks API reports tasks >50ms. For critical applications, use **offloading**:
- Browser: Web Workers, OffscreenCanvas, WASM in workers
- Node.js: Worker Threads, child_process, cluster

### Common Mistakes

- Using while loops that never yield for processing large data sets.
- Creating recursive microtask chains (Promise -> then -> Promise -> then...) that prevent macrotasks.
- Putting CPU-heavy work in requestAnimationFrame callbacks (blocks the frame budget).
- Not chunking database queries or array processing in server-side code.
- Using synchronous APIs in Node.js (s.readFileSync, crypto.pbkdf2Sync) in request handlers.

### Follow-Up Questions

**Junior**: What is event loop starvation? Give an example of code that causes it.

**Mid**: How would you process 100,000 items without starving the event loop?

**Senior**: Design a starvation detector for a Node.js server. How would you measure event loop lag programmatically?

### FAANG-Level Deep Dive

Event loop lag (also called "event loop delay") is the time between when a task should have been processed and when it actually runs. It's the primary metric for Node.js health. Measuring it:

`js
// Event loop lag measurement
function measureLag(sampleCount = 100) {
  const samples = [];
  let lastTime = Date.now();
  
  function tick() {
    const now = Date.now();
    samples.push(now - lastTime - 1000); // assuming 1s interval
    lastTime = now;
    
    if (samples.length >= sampleCount) {
      const avg = samples.reduce((a, b) => a + b) / samples.length;
      const max = Math.max(...samples);
      console.log(\Avg lag: \ms, Max lag: \ms\);
    } else {
      setTimeout(tick, 1000);
    }
  }
  setTimeout(tick, 1000);
}
`

Node.js exposes process.hrtime() (high-resolution time) for precise measurement. The perf_hooks module provides performance.eventLoopUtilization():

`js
const { performance, PerformanceObserver } = require('perf_hooks');
const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
});
obs.observe({ entryTypes: ['eventLoopDelay'] });
`

In production, use the event-loop-delay metric from process.monitorEventLoopDelay() (Node 14+). This uses histogram to track delay percentiles (p50, p95, p99). A healthy Node.js server has p99 event loop lag < 10ms. Above 50ms indicates starvation that will affect timeouts and I/O.

### Explain Like I'm 7

Event loop starvation is like a kid at a water fountain who keeps drinking and never lets anyone else get a drink. The other kids (I/O, timers, rendering) stand there thirsty. To fix this, the kid should take a sip, step aside, let others drink, then come back. In code, this means yielding to the event loop periodically so other operations can run.

---


# Section 7: ES6+ Features

<details>
<summary><strong>7 Questions — Destructuring, spread/rest, Map, Set, Proxy, Symbol</strong></summary>

- Q44: Destructuring
- Q45: Spread and Rest Operators
- Q46: Arrow Functions
- Q47: Map and Set
- Q48: WeakMap and WeakSet
- Q49: Symbol
- Q50: Proxy and Reflect

</details>

---

## Q44: Destructuring

### Short Interview Answer

Destructuring unpacks values from arrays or properties from objects into distinct variables using concise syntax. Array destructuring: const [a, b] = [1, 2]. Object destructuring: const { name } = person. Supports defaults, renaming, rest patterns, and nesting. Eliminates manual indexing and repeated dot access.

### Detailed Explanation

- **What it is**: Pattern matching syntax for extracting data from arrays/objects.
- **Why it exists**: To reduce boilerplate code when accessing multiple properties or elements.
- **What problem it solves**: Makes code more readable and less error-prone than manual indexing/accessing.
- **When to use it**: Function parameters (options objects), API response handling, importing specific values.
- **When NOT to use it**: Deeply nested destructuring impairs readability. Avoid in hot loops with minimal access.

### Internal Working

V8's BytecodeGenerator compiles destructuring into direct property loads (LdaNamedProperty). const { a, b } = obj compiles to  = obj.a, b = obj.b. No separate "destructuring phase" exists at runtime.

### Step-by-Step Execution

`js
const [first, second] = [1, 2, 3];
// 1. Create iterator from [1, 2, 3]
// 2. iterator.next() -> { value: 1, done: false } -> assign to first
// 3. iterator.next() -> { value: 2, done: false } -> assign to second
// 4. Rest values ignored
`

### Real-World Example

`js
function fetchUser() {
  return { id: 1, name: 'Alice', roles: ['admin'] };
}
const { name, roles: [role] } = fetchUser();
console.log(name, role); // Alice admin
`

### JavaScript Example

`js
const [a, b = 10] = [1];
console.log(a, b); // 1 10

const { x, y: z = 5 } = { x: 3 };
console.log(x, z); // 3 5

const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2, 3, 4]
`

### Performance Considerations

V8 optimizes destructuring to direct loads — equivalent performance to manual access in most cases. Nested destructuring creates intermediate variables.

### Common Mistakes

- Destructuring null/undefined (throws TypeError).
- Forgetting defaults for optional function params.

### Follow-Up Questions

**Junior**: How do you destructure an array?

**Mid**: Write destructuring with renaming and a default.

### FAANG-Level Deep Dive

V8 compiles array destructuring using the iterator protocol: GetIterator() on the source, then IteratorNext() calls. For arrays, however, V8 optimizes to direct index access with known length.

### Explain Like I'm 7

Like opening a packaged meal and saying "put the burger in this plate, fries in this bowl." Instead of grabbing each item one by one.

---

## Q45: Spread and Rest Operators

### Short Interview Answer

Spread (...) expands iterables into elements. Rest (...) collects remaining elements into an array. Spread copies arrays/objects, merges them, or passes arrays as function arguments. Rest collects function parameters or destructuring leftovers. Same ... syntax, different context.

### Detailed Explanation

- **What it is**: Three-dot syntax for expansion or collection of iterable values.
- **Why it exists**: To replace concat, slice, .apply(), and rguments object.
- **What problem it solves**: Cleaner immutable data operations and function argument handling.
- **When to use it**: Array/object copying and merging, function variadic parameters, converting iterables to arrays.
- **When NOT to use it**: Deep cloning (shallow only). Very large arrays (memory pressure).

### JavaScript Example

`js
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3

const merged = { ...{ a: 1 }, ...{ b: 2 } }; // { a: 1, b: 2 }
const [first, ...rest] = [1, 2, 3]; // rest = [2, 3]

function logAll(...args) { console.log(args); }
logAll(1, 2, 3); // [1, 2, 3]
`

### Performance Considerations

V8 uses CloneArrayIC and CloneObjectIC for spread. O(n) time/memory. Efficient but creates new allocation.

### Follow-Up Questions

**Junior**: What does ... do in JavaScript?

**Mid**: Difference between spread and rest?

### Explain Like I'm 7

Spread = dumping marbles from a bag onto the floor. Rest = scooping up the leftover marbles into a bag.

---

## Q46: Arrow Functions

### Short Interview Answer

Arrow functions provide concise syntax and lexical 	his binding — they inherit 	his from surrounding scope. No rguments, 
ew.target, or prototype property. Cannot be used as constructors. Best for callbacks, closures, and short inline functions.

### JavaScript Example

`js
const add = (a, b) => a + b;
const obj = { method: () => this }; // this = outer scope (NOT obj!)
const Timer = function() {
  this.seconds = 0;
  setInterval(() => this.seconds++, 1000); // lexical this
};
`

### Performance Considerations

No rguments object allocation. Lexical 	his avoids ind() overhead. Same bytecode as regular functions after optimization.

### Follow-Up Questions

**Junior**: Difference between arrow and regular functions?

**Mid**: Why can't arrow functions be used as constructors?

### Explain Like I'm 7

Arrow functions remember where they were born — their 	his is the place they were created, not who called them.

---

## Q47: Map and Set

### Short Interview Answer

Map stores key-value pairs with any type as keys, maintains insertion order, O(1) access. Set stores unique values, also insertion-ordered. Unlike objects, Maps avoid prototype pollution, have .size, and support direct iteration. Sets provide O(1) membership testing.

### JavaScript Example

`js
const m = new Map();
m.set('key', 1); m.set({}, 2); m.set(() => {}, 3);
console.log(m.size); // 3

const s = new Set([1, 2, 2, 3]);
console.log(s.size); // 3

const union = new Set([...s, 4, 5]);
`

### Follow-Up Questions

**Junior**: Map vs Object?

**Mid**: Implement Set intersection/union/difference.

### Explain Like I'm 7

Map = a dictionary with any page markers. Set = a bag that rejects duplicate items.

---

## Q48: WeakMap and WeakSet

### Short Interview Answer

WeakMap/WeakSet hold weak references to object keys — if no other references exist, the GC can collect the key and auto-remove the entry. No iteration methods, no .size, no .clear(). Keys must be objects. Used for private data, DOM metadata, and memory-safe caching.

### JavaScript Example

`js
const _private = new WeakMap();
class Person {
  constructor(name) { _private.set(this, { name }); }
  getName() { return _private.get(this).name; }
}

const cache = new WeakMap();
function process(el) {
  if (!cache.has(el)) cache.set(el, compute(el));
  return cache.get(el);
}
`

### FAANG-Level Deep Dive

V8 implements WeakMap using EphemeronHashTable — during GC marking, if a key is not strongly reachable, the entry is removed. Values are held strongly only if the key survives.

### Explain Like I'm 7

Like a post-it note on a toy. When you throw the toy away, the note disappears automatically.

---

## Q49: Symbol

### Short Interview Answer

Symbol() creates a unique, immutable primitive. Symbols as object keys are hidden from or...in/Object.keys. Well-known symbols (Symbol.iterator) customize language behavior. Symbol.for('key') creates cross-realm shared symbols.

### JavaScript Example

`js
const UNIQUE = Symbol('desc');
const obj = { [UNIQUE]: 'secret', visible: 'yes' };
console.log(Object.keys(obj)); // ['visible']

const iterable = { [Symbol.iterator]: function*() { yield 1; yield 2; } };
console.log([...iterable]); // [1, 2]
`

### Follow-Up Questions

**Junior**: What is Symbol? Why unique?

**Mid**: How does Symbol.iterator work?

### Explain Like I'm 7

A secret handshake that only people who know it can use. Hidden from casual observers.

---

## Q50: Proxy and Reflect

### Short Interview Answer

Proxy wraps an object to intercept operations (get, set, delete, apply) via handler traps. Reflect provides default implementations matching each trap. Together they enable metaprogramming: validation, reactivity (Vue 3), logging, auto-binding.

### JavaScript Example

`js
const validator = {
  set(obj, prop, value) {
    if (prop === 'age' && (typeof value !== 'number' || value < 0)) throw Error();
    return Reflect.set(obj, prop, value);
  }
};
const p = new Proxy({}, validator);
p.age = 25; // OK

const logged = new Proxy(sum, {
  apply(target, thisArg, args) {
    console.log('Called with', args);
    return Reflect.apply(target, thisArg, args);
  }
});
`

### FAANG-Level Deep Dive

Vue 3's eactive() uses Proxy to track property access (get trap registers dependencies, set trap triggers effects). V8's TurboFan can inline through simple Proxy get traps that just call Reflect.get.

### Explain Like I'm 7

Proxy is a bodyguard for your object — it checks every request and can say yes, no, or change what you see.

---

# Section 8: Arrays & Objects

<details>
<summary><strong>7 Questions — Methods, cloning, descriptors, freezing, iterables</strong></summary>

- Q51: Array Methods Deep Dive
- Q52: Deep Cloning
- Q53: Immutability Patterns
- Q54: Getters and Setters
- Q55: Object.defineProperty
- Q56: Object.freeze vs Object.seal vs Object.preventExtensions
- Q57: Array-Like Objects and Iterables

</details>

---

## Q51: Array Methods Deep Dive

### Short Interview Answer

Array methods can be categorized into mutating (push, pop, splice, sort, everse) and non-mutating (map, ilter, educe, slice, concat, lat, latMap). Key patterns: map for transformation, ilter for selection, educe for aggregation, ind for single element, some/every for condition checking. Always prefer non-mutating methods for functional/immutable patterns.

### JavaScript Example

`js
const nums = [1, 2, 3, 4, 5];

// Non-mutating
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
const firstEven = nums.find(n => n % 2 === 0);
const hasLarge = nums.some(n => n > 4);
const allPositive = nums.every(n => n > 0);

// Mutating
const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
arr.push(4); // [1, 2, 3, 4]
arr.reverse(); // [4, 3, 2, 1]

// Advanced
const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]
const strs = ['hello world', 'foo bar'];
console.log(strs.flatMap(s => s.split(' '))); // ['hello','world','foo','bar']
`

### FAANG-Level Deep Dive

V8 heavily optimizes monomorphic array operations. If the JIT sees rr.map(fn) where rr is always a dense array of the same type, it generates a direct inline loop without function call overhead for each iteration.

### Explain Like I'm 7

Array methods are like kitchen appliances. map is a blender — put in apples, get apple juice. ilter is a strainer — keep only the big pieces. educe is a slow cooker — combine everything into one meal.

---

## Q52: Deep Cloning

### Short Interview Answer

Shallow copy: {...obj}, Object.assign({}, obj), [...arr] — only top-level properties. Deep copy: structuredClone(obj) (modern, handles Dates, Maps, Sets, Blobs), JSON.parse(JSON.stringify(obj)) (limited, drops functions/undefined/Symbols), or recursive copy for complex needs.

### JavaScript Example

`js
const obj = { a: 1, b: { c: 2 }, d: new Date() };

// Shallow
const shallow = { ...obj };
shallow.b.c = 99;
console.log(obj.b.c); // 99 (shared reference!)

// Deep with structuredClone (ES2023)
const deep1 = structuredClone(obj);
deep1.b.c = 50;
console.log(obj.b.c); // 2 (independent)

// Deep with JSON (limitations)
const deep2 = JSON.parse(JSON.stringify(obj));
// Drops functions, undefined, Symbol keys, handles Date as string

// Recursive deep clone (handles all types)
function deepClone(value, map = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (map.has(value)) return map.get(value);
  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  if (value instanceof Map) {
    const copy = new Map();
    map.set(value, copy);
    value.forEach((v, k) => copy.set(deepClone(k), deepClone(v)));
    return copy;
  }
  if (value instanceof Set) {
    const copy = new Set();
    map.set(value, copy);
    value.forEach(v => copy.add(deepClone(v)));
    return copy;
  }
  if (Array.isArray(value)) {
    const copy = value.map(v => deepClone(v));
    map.set(value, copy);
    return copy;
  }
  const copy = Object.create(Object.getPrototypeOf(value));
  map.set(value, copy);
  for (const key of [...Object.keys(value), ...Object.getOwnPropertySymbols(value)]) {
    copy[key] = deepClone(value[key], map);
  }
  return copy;
}
`

### Explain Like I'm 7

Shallow cloning is like photocopying a page that has a picture glued to it — the copy shows the picture but it's the same physical photo. Deep cloning is like taking the photo off, copying it, and gluing the copy on.

---

## Q53: Immutability Patterns

### Short Interview Answer

Immutability means data cannot be changed after creation. Instead of mutation, produce new objects/arrays with the changes applied. Patterns: spread operator, map/ilter/educe, Object.freeze, Immutable.js, Immer. Crucial for React/Redux (state updates must be immutable for reference equality checks).

### JavaScript Example

`js
// Mutable (BAD for React)
const state = { items: [], count: 0 };
state.items.push('new'); // mutates
state.count = 1; // mutates

// Immutable (GOOD)
const state2 = { items: ['a'], count: 0 };
const nextState = {
  ...state2,
  items: [...state2.items, 'new'],
  count: state2.count + 1
};

// Array immutability
const arr = [1, 2, 3];
const added = [...arr, 4]; // [1,2,3,4]
const removed = arr.filter(x => x !== 2); // [1,3]
const updated = arr.map(x => x === 2 ? 20 : x); // [1,20,3]

// Object.freeze for enforcement
const frozen = Object.freeze({ a: 1 });
// frozen.a = 2; // TypeError in strict mode

// Immer library
import { produce } from 'immer';
const next = produce(state, draft => {
  draft.items.push('new');
  draft.count++;
});
`

### Explain Like I'm 7

Immutability is like writing in pencil, then copying the whole page when you want to change one word. The original page stays the same forever. This way, anyone reading the original page knows it won't change.

---

## Q54: Getters and Setters

### Short Interview Answer

Getters (get) and setters (set) are accessor properties that execute functions on property access/assignment. They allow computed properties, validation, lazy initialization, and backwards-compatible API changes. Defined via object literals, Object.defineProperty, or class syntax.

### JavaScript Example

`js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() { return \\ \\; },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};
console.log(person.fullName); // 'John Doe'
person.fullName = 'Jane Smith';
console.log(person.firstName); // 'Jane'

// Lazy initialization
class Config {
  get data() {
    if (!this._data) {
      this._data = this.loadData(); // computed once
    }
    return this._data;
  }
}
`

### Explain Like I'm 7

A getter is like a vending machine that makes fresh coffee when you press the button. A setter is like a mailbox with a sensor — when you put mail in, it beeps (validates) and then stores it.

---

## Q55: Object.defineProperty

### Short Interview Answer

Object.defineProperty(obj, key, descriptor) defines or modifies a property with full control over alue, writable, enumerable, configurable, or get/set. Used for read-only, non-enumerable, or computed properties. Slower than direct assignment but provides precision.

### JavaScript Example

`js
const obj = {};
Object.defineProperty(obj, 'readonly', {
  value: 42, writable: false, enumerable: true, configurable: false
});
// obj.readonly = 100; // fails silently / TypeError in strict

Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false });

// Accessor descriptor
let val;
Object.defineProperty(obj, 'accessor', {
  get() { return val; },
  set(v) { val = v; }
});
`

### Explain Like I'm 7

Like setting up rules for a specific drawer: "this drawer cannot be changed (writable: false), it's hidden from view (enumerable: false), and it's bolted to the floor (configurable: false)."

---

## Q56: Object.freeze vs Object.seal vs Object.preventExtensions

### Short Interview Answer

- Object.preventExtensions(obj): prevents new properties. Delete and modify existing ones allowed.
- Object.seal(obj): preventExtensions + makes all properties non-configurable (cannot delete). Modify existing writable properties allowed.
- Object.freeze(obj): seal + makes all properties read-only (non-writable). SHALLOW only.

### JavaScript Example

`js
const p = Object.preventExtensions({ a: 1 });
p.b = 2; // silently fails (creates no new prop)
p.a = 10; // works (modify allowed)
delete p.a; // works

const s = Object.seal({ a: 1 });
s.b = 2; // fails
delete s.a; // fails
s.a = 10; // works (writable still true)

const f = Object.freeze({ a: 1, nested: { b: 2 } });
f.a = 10; // fails
f.nested.b = 20; // WORKS! (shallow)
`

### Explain Like I'm 7

- PreventExtensions: "This box is full — no more items."
- Seal: "Items are glued in place — can't remove, can't add, but can rearrange."
- Freeze: "Items are frozen in carbonite — nothing changes."

---

## Q57: Array-Like Objects and Iterables

### Short Interview Answer

Array-like objects have .length and numeric indices (e.g., rguments, NodeList, HTMLCollection). They lack array methods. Convert using Array.from(), [...arrLike], or Array.prototype.slice.call(). Iterables implement Symbol.iterator (arrays, strings, Maps, Sets). Array.from() also accepts iterables and an optional map function.

### JavaScript Example

`js
// Array-like to Array
const nodeList = document.querySelectorAll('div');
const arr1 = Array.from(nodeList);
const arr2 = [...nodeList];
const arr3 = [].slice.call(nodeList);

// arguments (array-like)
function logArgs() {
  const args = Array.from(arguments);
  console.log(args.map(x => x * 2));
}

// Custom iterable
const range = { [Symbol.iterator]: function*() { yield 1; yield 2; yield 3; } };
console.log([...range]); // [1, 2, 3]
console.log(Array.from(range, x => x * 10)); // [10, 20, 30]
`

### Explain Like I'm 7

Array-like objects look like arrays and have numbered seats, but they're missing the special tools (methods). You have to put them through a converter machine (Array.from) to get the real toolbox.

---

# Section 9: TypeScript

<details>
<summary><strong>8 Questions — Types, interfaces, generics, utility types, infer, satisfies</strong></summary>

- Q58: Interfaces vs Types
- Q59: Generics
- Q60: Utility Types
- Q61: Conditional Types
- Q62: Mapped Types
- Q63: infer Keyword
- Q64: Template Literal Types
- Q65: satisfies Operator

</details>

---

## Q58: Interfaces vs Types

### Short Interview Answer

Interface: interface Foo { a: string } — declaration merging, extends, class implements. Type alias: 	ype Foo = { a: string } — unions, intersections, primitives, mapped types, conditional types. Use interface for object shapes (better error messages, merging) and type for complex types (unions, computed properties).

### JavaScript Example

`	s
interface User { name: string; age: number; }
interface Admin extends User { role: 'admin'; } // extends
// Interface merging
interface User { email: string; } // adds email to User

type ID = string | number; // union
type Point = { x: number } & { y: number }; // intersection
type Stringify<T> = { [K in keyof T]: string }; // mapped type
type Box<T> = { value: T }; // generic
`

### FAANG-Level Deep Dive

TypeScript's structural type system: interfaces and types are compared by their shape, not name. 	ype A = { x: number } and interface B { x: number } are assignable to each other. The compiler flattens aliases during checking but preserves them in error messages. Interfaces' declaration merging is crucial for library augmentation (adding properties to existing types).

### Explain Like I'm 7

Interfaces are like official forms with slots to fill in. Types are like flexible labels you can stick on anything. Multiple forms for the same person can be combined (merging). Labels can be reused from different things (unions).

---

## Q59: Generics

### Short Interview Answer

Generics provide type variables that capture the type used by a function/class/type, preserving type information across operations. unction identity<T>(arg: T): T { return arg; }. Enables type-safe reusable code without ny. Key features: constraints (extends), default types, and conditional type inference.

### JavaScript Example

`	s
function first<T>(arr: T[]): T | undefined { return arr[0]; }
const num = first([1, 2, 3]); // number
const str = first(['a', 'b']); // string

// Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const name = getProperty({ name: 'Alice', age: 30 }, 'name');

// Generic class
class Stack<T> {
  private items: T[] = [];
  push(item: T) { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

// Generic constraints with type params
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
`

### Explain Like I'm 7

Generics are like a cookie mold that can make cookies in any flavor. You say "I want chocolate chip" (tell the type), and the mold gives you a chocolate chip cookie, not a sugar cookie.

---

## Q60: Utility Types

### Short Interview Answer

Built-in generic types for common transformations: Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, T>, Exclude<T, U>, Extract<T, U>, NonNullable<T>, ReturnType<T>, Parameters<T>, Awaited<T>. Save time writing type transformations manually.

### JavaScript Example

`	s
interface Todo { title: string; description: string; completed: boolean; }

// Utility types
type PartialTodo = Partial<Todo>; // all optional
type ReadonlyTodo = Readonly<Todo>; // all readonly
type TodoPreview = Pick<Todo, 'title' | 'completed'>; // only these
type WithoutDesc = Omit<Todo, 'description'>; // everything except

type PageNames = 'home' | 'about' | 'contact';
type PageInfo = Record<PageNames, { title: string; path: string; }>;

const pages: PageInfo = {
  home: { title: 'Home', path: '/' },
  about: { title: 'About', path: '/about' },
  contact: { title: 'Contact', path: '/contact' }
};

// Function types
function createUser(name: string, age: number) { return { name, age }; }
type CreateParams = Parameters<typeof createUser>; // [string, number]
type CreateResult = ReturnType<typeof createUser>; // { name: string; age: number }
`

### Explain Like I'm 7

Utility types are like prefab tools — instead of building a hammer from scratch, you grab one from the toolbox. Need everything optional? Use Partial. Need only certain parts? Use Pick.

---

## Q61: Conditional Types

### Short Interview Answer

Conditional types select a type based on a condition: T extends U ? X : Y. They enable type-level programming — extracting return types, filtering unions, and creating type-safe APIs. Combined with generics and infer, they can unwrap Promise types, extract array element types, etc.

### JavaScript Example

`	s
type IsString<T> = T extends string ? 'yes' : 'no';
type A = IsString<'hello'>; // 'yes'
type B = IsString<42>; // 'no'

// Distributive conditional types
type ToArray<T> = T extends unknown ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]

// Extracting types
type ExtractPromise<T> = T extends Promise<infer U> ? U : T;
type P = ExtractPromise<Promise<string>>; // string
type N = ExtractPromise<number>; // number

// Filtering unions
type NonString<T> = T extends string ? never : T;
type WithoutStrings = NonString<string | number | boolean>; // number | boolean
`

### Explain Like I'm 7

Conditional types are like sorting machines — if it's round, put it in the round bin; otherwise, the square bin. The type checks the condition and picks the right path.

---

## Q62: Mapped Types

### Short Interview Answer

Mapped types create new types by iterating over keys: { [K in keyof T]: T[K] }. Used for transforming existing types — making properties optional, readonly, changing value types, etc. Combined with key remapping (s) and template literals for advanced patterns.

### JavaScript Example

`	s
// Basic mapped type
type Readonly<T> = { readonly [K in keyof T]: T[K]; };
type Optional<T> = { [K in keyof T]?: T[K]; };

// Value transformation
type Stringify<T> = { [K in keyof T]: string; };
type Props = Stringify<{ x: number; y: boolean }>;
// Result: { x: string; y: string }

// Key remapping (TS 4.1+)
type Getters<T> = {
  [K in keyof T as \get\\]: () => T[K];
};
type PersonGetters = Getters<{ name: string; age: number }>;
// Result: { getName: () => string; getAge: () => number }

// Filter by value type
type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
type StringKeys = KeysOfType<{ a: string; b: number; c: string }, string>; // 'a' | 'c'
`

### Explain Like I'm 7

Mapped types are like stamping every property with a transformation — "add 'get' before each name" or "make every value a Promise."

---

## Q63: infer Keyword

### Short Interview Answer

infer is used in conditional types to declare a type variable within the true branch. It extracts types from complex structures — Promise unwrapping, function return types, array elements. Only usable in extends clauses of conditional types.

### JavaScript Example

`	s
// Extract element type from array
type ElementType<T> = T extends (infer U)[] ? U : never;
type E = ElementType<string[]>; // string

// Extract return type (same as ReturnType<T>)
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FnReturn = MyReturnType<() => string>; // string

// Extract Promise value
type Unwrap<T> = T extends Promise<infer U> ? Unwrap<U> : T;
type Deep = Unwrap<Promise<Promise<string>>>; // string

// Extract first arg type
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;
type FA = FirstArg<(name: string, age: number) => void>; // string
`

### Explain Like I'm 7

infer is like saying "I don't know what's inside this box, but whatever it is, capture it in a variable so I can use it." It's a placeholder that TypeScript fills in.

---

## Q64: Template Literal Types

### Short Interview Answer

Template literal types build string types at the type level: ` type EventName = on `. Combined with unions, they create exhaustive string pattern types. Supports Capitalize, Uncapitalize, Uppercase, Lowercase intrinsic types. Used for event handlers, CSS properties, API paths.

### JavaScript Example

`	s
type EventName = \on\\;
// 'onChange' | 'onClick' | ... (any capitalized string)

// Union expansion
type Size = 'small' | 'medium' | 'large';
type Color = 'red' | 'blue';
type ProductOption = \\-\\;
// 'small-red' | 'small-blue' | 'medium-red' | 'medium-blue' | 'large-red' | 'large-blue'

// Extracting from template
type ExtractName<T extends string> = T extends \get\\ ? Uncapitalize<N> : never;
type Name = ExtractName<'getUserName'>; // 'userName'

// CSS property pattern
type CSSProperty = 'margin' | 'padding';
type CSSDirection = 'top' | 'right' | 'bottom' | 'left';
type CSSSide = \\-\\;
// 'margin-top' | 'margin-right' | ... | 'padding-left'
`

### Explain Like I'm 7

Template literal types are like a Mad Libs for types — you fill in the blanks (the type variables) to create strings that follow a pattern.

---

## Q65: satisfies Operator

### Short Interview Answer

satisfies (TS 4.9+) checks that a value's type matches a type without widening the value's type. Unlike : Type annotation, it preserves the narrowest inferred type while ensuring compatibility. Used when you want type safety checks without losing the specific literal type.

### JavaScript Example

`	s
// Without satisfies (type widened)
const config1: Record<string, string> = { theme: 'dark', lang: 'en' };
// config1.theme is string (not 'dark' literal)

// With satisfies (narrow type preserved)
const config2 = { theme: 'dark', lang: 'en' } satisfies Record<string, string>;
// config2.theme is 'dark' (literal), but checks against Record<string, string>
// config2.missing would be error if accessed? No — but config2 can't have wrong types

// Practical: API responses
type Color = 'red' | 'green' | 'blue';
const palette = {
  primary: 'red',
  secondary: 'green',
} satisfies Record<string, Color>;
// palette.primary is 'red' literal, not just Color

// Runtime validation interop
const schema = {
  name: { type: String, required: true },
  age: { type: Number }
} satisfies Record<string, { type: Function; required?: boolean }>;
// schema.name.type is String constructor, not Function
`

### Explain Like I'm 7

satisfies is like checking that your blue crayon is indeed a crayon (fits in the crayon box) without forgetting that it's specifically blue (not just "any crayon").

---

# Section 10: Browser APIs

<details>
<summary><strong>7 Questions — DOM, Fetch, WebSocket, Web Workers, Service Workers, IndexedDB, Observers</strong></summary>

- Q66: DOM Manipulation and Virtual DOM
- Q67: Fetch API
- Q68: WebSocket
- Q69: Web Workers
- Q70: Service Workers
- Q71: IndexedDB
- Q72: IntersectionObserver and ResizeObserver

</details>

---

## Q66: DOM Manipulation and Virtual DOM

### Short Interview Answer

DOM API: document.querySelector, element.addEventListener, element.textContent, classList, createElement, ppendChild. Virtual DOM (React/Vue) diffing minimizes actual DOM operations by maintaining a lightweight JS representation. Batch DOM changes via DocumentFragment or frameworks.

### JavaScript Example

`js
// Direct DOM
const div = document.createElement('div');
div.textContent = 'Hello';
div.classList.add('active');
document.body.appendChild(div);

// Event delegation
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') console.log(e.target.textContent);
});
`

### Explain Like I'm 7

DOM is the actual Lego castle. Virtual DOM is the blueprint — you change the blueprint first, then make the minimum changes needed to the real castle.

---

## Q67: Fetch API

### Short Interview Answer

etch(url, options) returns a Promise resolving to a Response object. Key options: method, headers, ody, credentials, signal (AbortController). Always check esponse.ok. Parse with .json(), .text(), .blob(). Handle errors with try/catch (fetch only rejects on network errors, not HTTP errors).

### JavaScript Example

`js
// GET
try {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error(\HTTP \\);
  const users = await res.json();
} catch (err) { console.error(err); }

// POST
await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice' })
});

// AbortController
const ac = new AbortController();
setTimeout(() => ac.abort(), 5000);
try {
  const res = await fetch(url, { signal: ac.signal });
} catch (err) {
  if (err.name === 'AbortError') console.log('Timed out');
}
`

### Explain Like I'm 7

Fetch is like ordering pizza — you call (request), wait, and get either pizza (response) or "sorry, we're closed" (error). You can also cancel before it arrives (AbortController).

---

## Q68: WebSocket

### Short Interview Answer

WebSocket provides full-duplex communication over a single TCP connection. 
ew WebSocket('ws://...') — events: open, message, close, error. Send: ws.send(data). Automatic reconnection must be implemented manually. Used for real-time apps (chat, live updates, gaming).

### JavaScript Example

`js
const ws = new WebSocket('wss://example.com/chat');
ws.onopen = () => ws.send(JSON.stringify({ type: 'join', room: 'general' }));
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  displayMessage(msg);
};
ws.onclose = () => {
  if (!manualClose) setTimeout(reconnect, 1000);
};
`

### Explain Like I'm 7

WebSocket is a two-way walkie-talkie. Once connected, both sides can talk whenever they want, without waiting for the other to ask a question first.

---

## Q69: Web Workers

### Short Interview Answer

Web Workers run JS in a background thread, enabling parallel computation. Communication via postMessage and onmessage. Workers have no DOM access, no window/document. SharedArrayBuffer for shared memory. Use for CPU-intensive tasks.

### JavaScript Example

`js
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => console.log('Result:', e.data);
worker.onerror = (e) => console.error('Worker error:', e);

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// Transferable objects (zero-copy)
worker.postMessage(arrayBuffer, [arrayBuffer]); // ownership transferred
`

### Explain Like I'm 7

Web Workers are like having a second person in the kitchen. The main cook (main thread) handles serving customers (UI), while the assistant (worker) chops vegetables (computation) in the back.

---

## Q70: Service Workers

### Short Interview Answer

Service Workers are programmable network proxies that run in the background, intercepting network requests (via etch event) and managing caches (Cache API). Enable offline support, push notifications, and background sync. Registered for an origin, lifecycle: install -> activate -> fetch.

### JavaScript Example

`js
// sw.js
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('v1').then(c => c.addAll(['/', '/index.html'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW registered'));
}
`

### Explain Like I'm 7

Service Workers are like a helpful librarian who remembers what books you've read. Even if the library is closed (offline), the librarian can give you the books you've already read (cached).

---

## Q71: IndexedDB

### Short Interview Answer

IndexedDB is a NoSQL client-side database that stores structured data (any JS type via structured clone). Asynchronous, transactional, supports indexes, cursors, and versioning. More powerful than localStorage (larger storage, indexes, object stores, transactions).

### JavaScript Example

`js
// Open DB
const request = indexedDB.open('MyDB', 1);
request.onupgradeneeded = (e) => {
  const db = e.target.result;
  const store = db.createObjectStore('users', { keyPath: 'id' });
  store.createIndex('name', 'name', { unique: false });
};

// CRUD
async function addUser(user) {
  const db = await openDB();
  const tx = db.transaction('users', 'readwrite');
  tx.objectStore('users').add(user);
  await new Promise(r => tx.oncomplete = r);
}
`

### Explain Like I'm 7

IndexedDB is like a filing cabinet in your house. Each drawer is an "object store," each folder tab is an "index." You can find things fast by looking at the tabs, even if the room is dark (offline).

---

## Q72: IntersectionObserver and ResizeObserver

### Short Interview Answer

IntersectionObserver asynchronously detects when an element intersects the viewport — lazy loading images, infinite scroll, visibility tracking. ResizeObserver reports element size changes — responsive charts, textarea auto-resize. Both use callback functions with batched entries, avoiding scroll/resize event handler performance issues.

### JavaScript Example

`js
// Lazy loading images
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.src = e.target.dataset.src;
      observer.unobserve(e.target);
    }
  });
});
document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));

// ResizeObserver
const ro = new ResizeObserver((entries) => {
  for (const e of entries) {
    console.log(e.contentRect.width, e.contentRect.height);
  }
});
ro.observe(document.querySelector('.resizable'));
`

### Explain Like I'm 7

IntersectionObserver is like a security camera that only records when someone enters the room. ResizeObserver is like a smart frame that adjusts the picture when the wall gets bigger or smaller.

---

# Section 11: Functional Programming

<details>
<summary><strong>6 Questions — Pure functions, composition, immutability, memoization, HOF, monads</strong></summary>

- Q73: Pure Functions
- Q74: Function Composition
- Q75: Immutability in FP
- Q76: Memoization
- Q77: Higher-Order Functions
- Q78: Monad Pattern (Maybe, Either)

</details>

---

## Q73: Pure Functions

### Short Interview Answer

Pure functions: given the same input, always return the same output, with no side effects. No DOM access, no I/O, no state mutation, no Date.now()/Math.random(). Predictable, testable, cacheable. The foundation of functional programming.

### JavaScript Example

`js
// Pure
function add(a, b) { return a + b; }

// Impure
let counter = 0;
function increment() { return ++counter; } // side effect

// Impure
function random() { return Math.random(); } // non-deterministic
`

### Explain Like I'm 7

A pure function is like a vending machine — press A1 and always get chips. An impure function is like a lottery machine — same button, different result each time.

---

## Q74: Function Composition

### Short Interview Answer

Composing functions: (g(x)) = pipe(g, f)(x) or compose(f, g)(x). pipe executes left-to-right, compose right-to-left (compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)).

### JavaScript Example

`js
const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);
const compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);

const trim = s => s.trim();
const capitalize = s => s[0].toUpperCase() + s.slice(1);
const exclaim = s => s + '!';

const format = pipe(trim, capitalize, exclaim);
console.log(format('  hello  ')); // 'Hello!'
`

### Explain Like I'm 7

Composition is like an assembly line — car enters, gets painted, gets wheels, gets engine, drives out. Each station does one job in order.

---

## Q75: Immutability in FP

### Short Interview Answer

In FP, data is never mutated — operations return new data. Uses persistent data structures (structural sharing) for efficiency. JS lacks native persistent structures but can use spread, Object.freeze, or libraries (Immutable.js, Immer).

### JavaScript Example

`js
const addItem = (arr, item) => [...arr, item]; // new array
const update = (obj, key, val) => ({ ...obj, [key]: val }); // new object
const remove = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
`

### Explain Like I'm 7

Immutability is like writing on a whiteboard, taking a photo, and then writing changes on a new whiteboard. The original photo stays forever.

---

## Q76: Memoization

### Short Interview Answer

Memoization caches function results based on arguments to avoid recomputation. Pure functions are required (same input = same output). Map caches with composite keys. Used for expensive computations (Fibonacci, DP, React.memo for components).

### JavaScript Example

`js
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize((n) => n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(50)); // fast (12586269025)

// React.memo
const MyComponent = React.memo(({ data }) => <div>{data}</div>);
`

### Explain Like I'm 7

Memoization is like a cheat sheet for math homework. Once you solve 2+3=5, you write it down. Next time someone asks, you just look it up instead of counting on your fingers again.

---

## Q77: Higher-Order Functions

### Short Interview Answer

A higher-order function (HOF) takes a function as argument or returns a function. Core to functional programming — map, ilter, educe are HOFs. Used for abstraction, code reuse, and creating specialized functions (currying, debounce, once).

### JavaScript Example

`js
// Returns a function
function once(fn) {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    return fn(...args);
  };
}
const initOnce = once(() => console.log('Initialized'));
initOnce(); // 'Initialized'
initOnce(); // nothing

// Takes a function
function withLogging(fn) {
  return (...args) => {
    console.log('Calling with', args);
    return fn(...args);
  };
}
`

### Explain Like I'm 7

HOFs are like factory machines that build other machines. You give it a blueprint (a function), and it gives you back a specialized tool.

---

## Q78: Monad Pattern (Maybe, Either)

### Short Interview Answer

Monads wrap values to provide a context for composing operations with effects. Maybe handles null/undefined chaining without null checks. Either handles success/failure without try/catch. JS doesn't have native monads, but Promises are monad-like (.then is latMap/chain).

### JavaScript Example

`js
// Maybe monad
class Maybe {
  constructor(value) { this._value = value; }
  static of(value) { return new Maybe(value); }
  static nothing() { return new Maybe(null); }
  map(fn) { return this._value === null || this._value === undefined
    ? Maybe.nothing() : Maybe.of(fn(this._value)); }
  valueOf() { return this._value; }
}

const result = Maybe.of('hello')
  .map(s => s.toUpperCase())
  .map(s => s.split('').reverse().join(''))
  .valueOf(); // 'OLLEH'

const safe = Maybe.of(null)
  .map(s => s.toUpperCase()) // skipped
  .valueOf(); // null

// Either monad
class Either {
  constructor(value) { this._value = value; }
  static right(value) { return new Right(value); }
  static left(value) { return new Left(value); }
}
class Right extends Either {
  map(fn) { return Either.right(fn(this._value)); }
  chain(fn) { return fn(this._value); }
  fold(onLeft, onRight) { return onRight(this._value); }
}
class Left extends Either {
  map(fn) { return this; }
  chain(fn) { return this; }
  fold(onLeft, onRight) { return onLeft(this._value); }
}
`

### Explain Like I'm 7

Monads are like special shipping boxes. A Maybe box: if empty, all operations skip to the end. An Either box: has two sides — right (success) continues operations, left (error) stops. Like a railway switch that can handle both normal and broken tracks.

---

# Section 12: Module Systems

<details>
<summary><strong>6 Questions — ESM vs CommonJS, dynamic imports, tree shaking, import maps</strong></summary>

- Q79: ESM vs CommonJS
- Q80: Dynamic Imports
- Q81: Tree Shaking
- Q82: Import Maps
- Q83: Circular Dependencies
- Q84: AMD and UMD

</details>

---

## Q79: ESM vs CommonJS

### Short Interview Answer

ESM: import/export, static analysis (tree-shaking), async loading, live bindings, strict mode by default, works in browsers and Node (.mjs). CommonJS: equire/module.exports, dynamic loading (can require conditionally), synchronous, module.exports is a plain object, default in Node (.cjs). ESM is the standard; CJS is legacy.

### JavaScript Example

`js
// ESM — static, tree-shakeable
// math.mjs
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; }

// app.mjs
import multiply, { add } from './math.mjs';

// CommonJS — dynamic, not tree-shakeable
// math.cjs
const add = (a, b) => a + b;
module.exports = { add, multiply: (a, b) => a * b };

// app.cjs
const { add } = require('./math.cjs');
const mod = require(config.useV2 ? './v2' : './v1'); // dynamic
`

### Explain Like I'm 7

ESM is like ordering from a menu with pictures — the restaurant knows exactly what you'll order before you arrive (static analysis). CJS is like ordering at the counter — you can decide what to add after you see what's available (dynamic).

---

## Q80: Dynamic Imports

### Short Interview Answer

import() is a function-like expression that returns a Promise of the module namespace. Enables code splitting, lazy loading, conditional module loading. Webpack/Rollup/Vite automatically split bundles at dynamic import boundaries. Use for route-based splitting (React.lazy, Vue async components).

### JavaScript Example

`js
// Route-based code splitting (React)
const Dashboard = React.lazy(() => import('./Dashboard'));
const Settings = React.lazy(() => import('./Settings'));

// Conditional loading
if (navigator.onLine) {
  const { syncData } = await import('./sync.js');
  await syncData();
} else {
  const { saveLocal } = await import('./offline.js');
  await saveLocal();
}

// Dynamic import with variable path
const module = await import(\/lang/\.js\);
`

### Explain Like I'm 7

Dynamic imports are like having a library on demand — instead of carrying all books, you only grab the one you need when you need it. Saves space (bandwidth) and time (load time).

---

## Q81: Tree Shaking

### Short Interview Answer

Tree shaking (dead code elimination) removes unused exports from bundles. Requires static ESM imports (not CJS equire). Bundlers (webpack, Rollup, esbuild, Bun) analyze import statements and prune unused exports. Side effects in modules must be declared in package.json via "sideEffects": false.

### JavaScript Example

`js
// utils.js — export many, only some used
export function usedFn() { return 1; }
export function unusedFn() { return 2; } // removed by tree shaking

// app.js
import { usedFn } from './utils.js';
// Bundle only contains usedFn

// package.json
{ "sideEffects": ["./src/styles.css", "*.global.js"] }
// Files not listed can be safely tree-shaken
`

### Explain Like I'm 7

Tree shaking is like packing for a trip — instead of bringing every shirt you own (entire library), you only pack the ones you'll actually wear (used exports). The unused ones stay in the closet.

---

## Q82: Import Maps

### Short Interview Answer

Import maps (<script type="importmap">) map bare module specifiers to URLs in the browser, enabling ESM without bundlers. Define module names and their locations. Browser resolves import 'lodash' to the mapped URL. Supported in Chromium-based browsers.

### JavaScript Example

`html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.example.com/three@0.160/module",
    "lodash/": "https://cdn.example.com/lodash@4.17/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { debounce } from 'lodash/debounce';
</script>
`

### Explain Like I'm 7

Import maps are like a phone book for your code. When your code says "call lodash," the import map tells it the number (URL). No need to memorize addresses.

---

## Q83: Circular Dependencies

### Short Interview Answer

Circular dependencies occur when module A imports from B, and B imports from A (directly or transitively). CommonJS handles them by returning partial exports (the module's exports object at the time of require). ESM handles them via live bindings, but uninitialized bindings throw if accessed during TDZ. Best practice: refactor to avoid cycles (extract shared module).

### JavaScript Example

`js
// CJS circular dependency
// a.js
const b = require('./b');
console.log(b.bValue); // undefined (partial at circular require time)
module.exports.aValue = 'A';

// b.js
const a = require('./a'); // partial: { aValue: undefined } initially
module.exports.bValue = 'B';
// After both load, a.aValue becomes 'A', but b already captured the reference

// ESM circular (better)
// a.mjs
import { bValue } from './b.mjs';
export const aValue = 'A';
console.log(bValue); // accesses live binding — safe after initialization

// b.mjs
import { aValue } from './a.mjs';
export const bValue = 'B';
console.log(aValue); // 'A' — live binding works!
`

### Explain Like I'm 7

Circular dependencies are like two people who need each other's phone numbers to call each other, but neither has the number. The solution: ask a third person who knows both numbers (extract a shared module).

---

## Q84: AMD and UMD

### Short Interview Answer

AMD (Asynchronous Module Definition, RequireJS) uses define to declare modules with dependencies loaded asynchronously — used in browsers before ESM. UMD (Universal Module Definition) combines AMD + CommonJS + global script pattern for cross-environment compatibility. Both are legacy now — use ESM instead.

### JavaScript Example

`js
// AMD
define(['dependency'], function(dep) {
  return { method: () => dep.doStuff() };
});

// UMD (detects environment)
(function(root, factory) {
  if (typeof define === 'function' && define.amd) define(['dep'], factory);
  else if (typeof module === 'object' && module.exports) module.exports = factory(require('dep'));
  else root.MyModule = factory(root.Dep);
}(this, function(dep) { return { method: () => dep.doStuff() }; }));
`

### Explain Like I'm 7

AMD and UMD are like old phone switchboards — they worked great for connecting calls in the 1980s, but we have smartphones (ESM) now.

---

# Section 13: Error Handling

<details>
<summary><strong>6 Questions — try/catch, custom errors, stacks, global handlers, result pattern</strong></summary>

- Q85: try/catch/finally
- Q86: Custom Error Classes
- Q87: Stack Traces
- Q88: Global Error Handlers
- Q89: Error Handling in Async/Await
- Q90: Result Pattern

</details>

---

## Q85: try/catch/finally

### Short Interview Answer

	ry { risky() } catch (err) { handle(err) } finally { cleanup() }. 	ry block runs; if it throws, catch runs with the error object (optional binding: catch { } in ES2019). inally always runs (for cleanup: close files, hide spinners). inally runs even if catch re-throws or 	ry has eturn.

### JavaScript Example

`js
try {
  const data = JSON.parse(input);
  return process(data);
} catch (err) {
  if (err instanceof SyntaxError) {
    return { error: 'Invalid JSON' };
  }
  throw err; // re-throw unexpected errors
} finally {
  cleanup(); // always runs, even after return or throw
}
`

### Explain Like I'm 7

try is "try to bake a cake." catch is "if it burns, order pizza instead." finally is "clean up the kitchen no matter what."

---

## Q86: Custom Error Classes

### Short Interview Answer

Extend Error to create typed errors with extra properties (status code, error code). Set 
ame and capture stack trace. Custom errors enable instanceof checking and structured error handling.

### JavaScript Example

`js
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
  }
}

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

try {
  throw new ApiError('Not found', 404);
} catch (err) {
  if (err instanceof ApiError) handleApiError(err);
  else if (err instanceof ValidationError) handleValidationError(err);
  else throw err;
}
`

### Explain Like I'm 7

Custom errors are like different colored warning flags — red for "out of stock," yellow for "slow server," blue for "you're not logged in." Each flag tells you what kind of problem you have.

---

## Q87: Stack Traces

### Short Interview Answer

A stack trace shows the call stack at the point of an error — function names, file paths, line numbers. Error.stack (non-standard but widely supported) provides the trace. Source maps map minified/transpiled code back to original source. Use .stack property for logging/debugging.

### JavaScript Example

`js
function a() { b(); }
function b() { c(); }
function c() { throw new Error('Oops'); }

try { a(); } catch (err) {
  console.log(err.stack);
  // Error: Oops
  //   at c (file.js:4:11)
  //   at b (file.js:2:11)
  //   at a (file.js:1:11)
  //   at <global> (file.js:8:5)
}

// Limiting stack trace size
Error.stackTraceLimit = 50; // default is 10
`

### Explain Like I'm 7

A stack trace is like a trail of breadcrumbs showing exactly which functions led to the error. It shows the path from start to crash.

---

## Q88: Global Error Handlers

### Short Interview Answer

Browser: window.onerror (uncaught exceptions), window.onunhandledrejection (Promise rejections). Node: process.on('uncaughtException'), process.on('unhandledRejection'). Use for logging/crash reporting, but don't use uncaughtException to recover — the process is in an unknown state. Always log, then exit.

### JavaScript Example

`js
// Browser
window.onerror = (msg, url, line, col, error) => {
  sendToLoggingService({ msg, url, line, col, stack: error?.stack });
};
window.addEventListener('unhandledrejection', (event) => {
  sendToLoggingService({ reason: event.reason });
  event.preventDefault(); // prevent console warning
});

// Node.js
process.on('uncaughtException', (err) => {
  logger.error({ err, msg: 'Uncaught exception' });
  process.exit(1); // must exit to avoid undefined state
});
process.on('unhandledRejection', (reason) => {
  logger.error({ reason, msg: 'Unhandled rejection' });
  // Node 15+ terminates on unhandled rejection anyway
});
`

### Explain Like I'm 7

Global error handlers are like emergency brake handles on a train. They alert the engineer (logs) but the train's already broken — you need to stop safely and fix it (exit and restart).

---

## Q89: Error Handling in Async/Await

### Short Interview Answer

	ry/catch works with wait — rejected Promises throw. Every wait should be in a 	ry/catch or the error propagates to an unhandled rejection. Use .catch() on Promise chains returned from non-async functions. For parallel operations, use Promise.allSettled for graceful handling.

### JavaScript Example

`js
async function safeHandler() {
  try {
    const user = await api.getUser(id);
    const posts = await api.getPosts(user.id);
    return { user, posts };
  } catch (err) {
    if (err instanceof ApiError) {
      if (err.statusCode === 404) return null;
    }
    throw err; // re-throw for global handler
  }
}

// Parallel with graceful handling
async function loadAll() {
  const results = await Promise.allSettled([
    fetchUser(), fetchPosts(), fetchSettings()
  ]);
  return results.map(r => r.status === 'fulfilled' ? r.value : null);
}
`

### Explain Like I'm 7

Async error handling is like landing a plane — 	ry is the approach, catch is the backup plan (go around), inally is parking the plane no matter what.

---

## Q90: Result Pattern

### Short Interview Answer

The Result pattern replaces exceptions with return values: { success: true, data } or { success: false, error }. Avoids the hidden control flow of exceptions. Forces callers to handle errors explicitly. Popular in functional languages (Rust's Result<T, E>). Implementable in JS/TS with discriminated unions.

### JavaScript Example

`	s
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

async function divide(a: number, b: number): Promise<Result<number>> {
  if (b === 0) return { success: false, error: new Error('Division by zero') };
  return { success: true, data: a / b };
}

// Caller MUST handle both cases
const result = await divide(10, 2);
if (result.success) {
  console.log(result.data); // 5
} else {
  console.error(result.error.message);
}

// In TypeScript with discriminated unions, the type narrows automatically
`

### Explain Like I'm 7

The Result pattern is like a package that's always labeled "fragile" or "okay." You ALWAYS check the label before opening. No surprise broken gifts (no unhandled exceptions).

---

# Section 14: Memory Management

<details>
<summary><strong>6 Questions — GC, memory leaks, WeakMap/WeakSet, DOM leaks, V8 heap</strong></summary>

- Q91: Mark-and-Sweep GC
- Q92: Memory Leaks in JS
- Q93: DOM Memory Leaks
- Q94: WeakMap/WeakSet for Memory Safety
- Q95: Detached DOM Nodes
- Q96: V8 Heap Structure and GC Tuning

</details>

---

## Q91: Mark-and-Sweep GC

### Short Interview Answer

V8's garbage collector uses **mark-and-sweep**: starting from GC roots (global object, stack, DOM trees), mark all reachable objects, then sweep (free) unmarked objects. V8 uses generational collection: **young generation** (new space, minor GC) collected frequently, **old generation** (old space, major GC) collected less often.

### JavaScript Example

`js
// Object becomes eligible for GC when no references remain
let obj = { data: new Array(1000) };
obj = null; // GC can collect the object

// Closure keeping objects alive
function leak() {
  const large = new Array(10000);
  return function() { console.log(large.length); };
}
const fn = leak(); // large is kept alive by fn's closure
`

### Explain Like I'm 7

GC is like a janitor who only picks up trash when nobody's looking at it. If something still has eyes on it (a reference), it stays. The janitor works in two modes: quick pickup of small trash (young gen) and thorough cleanup of old junk (old gen).

---

## Q92: Memory Leaks in JS

### Short Interview Answer

Common JS memory leaks: **global variables** (accidental globals), **forgotten timers/intervals**, **closures** retaining large objects, **event listeners** not removed, **cache without eviction**, **detached DOM nodes**. Use Chrome DevTools Memory panel (heap snapshot, allocation timeline) to detect.

### JavaScript Example

`js
// Accidental global
function leak() { leaked = 'global!'; } // no let/const/var

// Forgotten timer
function startTimer() { setInterval(() => console.log('tick'), 1000); }
// Timer keeps closure alive even if component unmounts

// Growing cache
const cache = {};
function store(key, value) { cache[key] = value; } // never evicts!

// Solution: use LRU cache
`

### Explain Like I'm 7

Memory leaks are like leaving the water running when you leave the house. The water (memory) keeps flowing until the sink overflows (tab crashes). You need to turn off the tap (remove references).

---

## Q93: DOM Memory Leaks

### Short Interview Answer

DOM leaks occur when JS holds references to removed DOM elements, preventing GC of both the element and its entire subtree. Common cause: event listeners on unmounted elements, closures capturing DOM elements, data stored via expando properties.

### JavaScript Example

`js
// Leak: holding reference to removed element
const button = document.getElementById('btn');
button.addEventListener('click', () => console.log('click'));
button.remove(); // button removed from DOM
// button variable still holds reference -> GC cannot collect
// Event listener closure also keeps button's parent chain alive

// Fix: use WeakRef or clean up
button.removeEventListener('click', handler); // always clean up
// Or use frameworks that auto-clean (React useEffect return)
`

### Explain Like I'm 7

DOM leaks are like keeping a photo of a demolished building. The building is gone, but you still have the photo (reference), so the memory of it stays in your album (heap).

---

## Q94: WeakMap/WeakSet for Memory Safety

### Short Interview Answer

Use WeakMap/WeakSet for associating metadata with objects without preventing their GC. Ideal for caches, private data, DOM element metadata, and event listener management. Values are strongly held only while the key lives.

### JavaScript Example

`js
// Caching computed values per DOM element
const computedCache = new WeakMap();
function getComputed(el) {
  if (!computedCache.has(el)) {
    computedCache.set(el, computeExpensive(el));
  }
  return computedCache.get(el);
}
// When element is removed from DOM, cache entry auto-clears

// Private instance data
const privateData = new WeakMap();
class User {
  constructor(name) { privateData.set(this, { name }); }
  getName() { return privateData.get(this)?.name; }
}
`

### Explain Like I'm 7

WeakMap is like a notepad that uses disappearing ink. When the person you wrote about leaves the room, their notes disappear automatically.

---

## Q95: Detached DOM Nodes

### Short Interview Answer

Detached DOM nodes are elements removed from the DOM tree but still referenced in JS, preventing their GC. Detected via Chrome DevTools Memory panel (search "Detached"). Common causes: React key mismatches, list re-rendering with old refs.

### JavaScript Example

`js
// Creating detached nodes
const detached = [];
function createNode() {
  const div = document.createElement('div');
  div.textContent = 'temp';
  detached.push(div); // stored in array, never appended to DOM
  // div is detached and kept alive by the array
}

// Hidden leak in some frameworks
// React with wrong keys can cause detched subtrees
`

### Explain Like I'm 7

Detached nodes are like trees that have been cut down but their roots are still held in a pot of soil (JS reference). They look dead but can't be removed because the pot is in the way.

---

## Q96: V8 Heap Structure and GC Tuning

### Short Interview Answer

V8 heap: **New space** (young generation, semi-space, scavenge GC), **Old space** (old generation, mark-sweep/compact), **Large object space** (>1MB objects), **Code space** (JIT code), **Map space** (hidden classes). Minor GC (scavenge) is fast (semispace flip). Major GC (full mark-sweep) is slower and stops the world.

### JavaScript Example

`js
// Node.js flags for GC tuning
// node --max-old-space-size=4096 --optimize-for-size app.js
// --expose-gc enables global.gc() for manual GC
// --trace-gc logs GC events

// Chrome: chrome://tracing to trace GC
// DevTools: Memory panel -> heap snapshot

// Detecting GC pressure
const used = process.memoryUsage();
console.log(Heap used:  MB);
`

### Explain Like I'm 7

V8's heap is like a house with different rooms: young kids' room (new space) gets cleaned often, the attic (old space) cleaned rarely, and the garage (large objects) has special parking spaces. The janitor cleans room by room.

---


# Section 15: Security

<details>
<summary><strong>6 Questions — XSS, CSRF, CORS, CSP, Same-Origin, PostMessage</strong></summary>

- Q97: XSS (Cross-Site Scripting)
- Q98: CSRF (Cross-Site Request Forgery)
- Q99: CORS
- Q100: CSP (Content Security Policy)
- Q101: Same-Origin Policy
- Q102: PostMessage Security

</details>

---

## Q97: XSS (Cross-Site Scripting)

### Short Interview Answer

XSS injects malicious scripts into web pages viewed by others. **Stored XSS**: script stored in DB (comments). **Reflected XSS**: script in URL/request. **DOM-based XSS**: client-side injection via innerHTML/API response. Prevention: sanitize output (	extContent not innerHTML), use CSP headers, escape user input, use DOMPurify.

### JavaScript Example

`js
// VULNERABLE: XSS via innerHTML
const name = userInput; // "<script>stealCookies()</script>"
element.innerHTML = 'Hello ' + name; // script executed!

// SAFE
element.textContent = 'Hello ' + name; // rendered as text

// Framework protections: React escapes by default
// <div>{userInput}</div> — safe, textContent used internally

// dangerouslySetInnerHTML — only with sanitized content
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);

// URL sanitization
function safeURL(url) {
  const allowed = ['http:', 'https:', 'mailto:'];
  try {
    const parsed = new URL(url);
    return allowed.includes(parsed.protocol) ? url : '';
  } catch { return ''; }
}
`

### Explain Like I'm 7

XSS is like someone slipping a mean note into your mailbox that, when read, takes control of your house. Never let strangers put notes (HTML) directly into your mailbox (DOM) — check them first.

---

## Q98: CSRF (Cross-Site Request Forgery)

### Short Interview Answer

CSRF tricks a logged-in user into performing unwanted actions on another site where they're authenticated. Prevention: SameSite cookies (SameSite=Strict/Lax), CSRF tokens (double-submit cookie pattern, Origin/Referer header validation).

### JavaScript Example

`js
// Server sets:
Set-Cookie: session=abc123; SameSite=Strict; Secure; HttpOnly

// Client sends CSRF token with requests
fetch('/api/transfer', {
  method: 'POST',
  headers: { 'X-CSRF-Token': csrfToken },
  credentials: 'same-origin',
  body: JSON.stringify({ to: 'attacker', amount: 1000 })
});

// Modern SPA: SameSite=Lax is usually sufficient for state-changing methods
`

### Explain Like I'm 7

CSRF is like someone sending a letter that looks like it's from you, asking to transfer money. The bank (server) should check for a secret password (CSRF token) that the attacker doesn't know.

---

## Q99: CORS

### Short Interview Answer

Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls cross-origin HTTP requests. Server sends Access-Control-Allow-Origin headers. Preflight requests (OPTIONS) for non-simple requests (custom headers, PUT/DELETE). Use Access-Control-Allow-Credentials for cookies.

### JavaScript Example

`js
// Server response headers
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400 // cache preflight for 24h

// Client with credentials
fetch('https://api.other.com/data', {
  credentials: 'include' // sends cookies cross-origin
});

// Preflight handled automatically by browser for:
// - Non-standard methods (PUT, DELETE, PATCH)
// - Custom headers
// - Non-simple content types (application/json)
`

### Explain Like I'm 7

CORS is like a security guard at a gated community. When a delivery person (browser) tries to enter from another street (origin), the guard checks the visitor list (server headers). Preflight is like calling ahead to check if the delivery is expected.

---

## Q100: CSP (Content Security Policy)

### Short Interview Answer

Content Security Policy is an HTTP header that restricts which resources (scripts, styles, images, fonts) can load on a page. Mitigates XSS by blocking inline scripts and untrusted sources. Policy: default-src 'self' for baseline, script-src for scripts, style-src for styles. Use 
once or hash for allowed inline scripts.

### JavaScript Example

`html
<!-- HTTP Header -->
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://cdn.example.com 'nonce-abc123';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://images.example.com;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';

<!-- Using nonce for inline scripts -->
<script nonce="abc123">
  console.log('This script runs');
</script>
<script>
  console.log('This script is BLOCKED'); // no nonce
</script>

<!-- Reporting (don't block, just report) -->
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
`

### Explain Like I'm 7

CSP is like a bouncer at a party who checks IDs. Only people on the guest list (allowed sources) get in. Even if someone sneaks in an invitation (XSS attack), the bouncer checks the ID and turns them away.

---

## Q101: Same-Origin Policy

### Short Interview Answer

Same-Origin Policy (SOP) prevents a page from accessing resources from a different origin (protocol + host + port). SOP is the foundation of web security — without it, malicious sites could read data from your bank. SOP blocks reading cross-origin responses but allows writing (form submission, links) and embedding (images, scripts, iframes with restrictions).

### JavaScript Example

`js
// Same origin: https://example.com:443 and https://example.com:443/api
// Different origin: https://other.com, http://example.com, https://example.com:8080

// SOP blocks reading cross-origin fetch responses
fetch('https://bank.com/account') // blocked by SOP if from different origin
  .then(r => r.json()); // throws — response opaque unless CORS allows

// SOP allows embedding with certain restrictions
<iframe src="https://other.com"></iframe> // allowed, but content read blocked
<script src="https://cdn.example.com/lib.js"></script> // allowed (JSONP risk)
<img src="https://other.com/photo.jpg"> // allowed
`

### Explain Like I'm 7

Same-Origin Policy is like only being able to look inside your own locker. You can see what's in your locker, you can put things in other lockers (send data), but you can't look into other people's lockers. CORS is like getting permission from a friend to look into theirs.

---

## Q102: PostMessage Security

### Short Interview Answer

window.postMessage enables cross-origin iframe/window communication. **Security risk**: always check event.origin and validate the message source. Never trust the data without verification. Use 	argetOrigin parameter to restrict message destination.

### JavaScript Example

`js
// Sender (parent page)
iframe.contentWindow.postMessage({ type: 'resize', height: 200 }, 'https://trusted.com');

// Receiver (iframe)
window.addEventListener('message', (event) => {
  // ALWAYS verify origin!
  if (event.origin !== 'https://trusted-parent.com') return;
  
  // Validate message structure
  if (typeof event.data !== 'object' || !event.data.type) return;
  
  switch (event.data.type) {
    case 'resize':
      document.body.style.height = event.data.height + 'px';
      break;
  }
});

// Vulnerability: not checking origin allows any site to send messages
// Never do: window.addEventListener('message', (e) => eval(e.data));
`

### Explain Like I'm 7

PostMessage is like passing notes between two desks in class. But anyone could pretend to be your friend. Always check who wrote the note (origin) and what it says (validate data) before reading. Never follow instructions like "run this code" (eval).

---

# Section 16: Node.js Specific

<details>
<summary><strong>6 Questions — Event loop, streams, buffers, cluster, child_process, libuv</strong></summary>

- Q103: Node.js Event Loop Phases Deep Dive
- Q104: Streams
- Q105: Buffers
- Q106: Cluster Module
- Q107: Child Processes
- Q108: libuv

</details>

---

## Q103: Node.js Event Loop Phases Deep Dive

### Short Interview Answer

Node's event loop has 6 phases: **timers** (setTimeout/setInterval), **pending callbacks** (I/O callbacks deferred to next iteration), **idle/prepare** (internal), **poll** (I/O events, blocking wait), **check** (setImmediate), **close callbacks** (socket/connection close). Between each phase: process nextTick queue, then microtask queue.

### JavaScript Example

`js
const fs = require('fs');

// Poll phase (I/O)
fs.readFile(__filename, () => {
  // This runs in the poll phase
  setTimeout(() => console.log('timer'), 0);    // timers phase (NEXT iteration)
  setImmediate(() => console.log('immediate')); // check phase (SAME iteration)
});

// Output: immediate, timer
// Because setImmediate in check phase runs before next timers phase

// Phases with microtasks
setTimeout(() => console.log('timer'), 0);
setImmediate(() => console.log('immediate'));
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));

// Output depends on phase context, but nextTick always first
`

### Explain Like I'm 7

Node's event loop is like a factory floor with 6 stations. Each station handles a different type of work. Between stations, the foreman handles urgent requests (nextTick) and quick items (microtasks).

---

## Q104: Streams

### Short Interview Answer

Streams process data piece-by-piece without loading everything into memory. 4 types: **Readable** (read data), **Writable** (write data), **Transform** (modify data), **Duplex** (both read and write). Events: data, end, error, inish, drain. .pipe() connects streams. Use for large files, HTTP requests, compression.

### JavaScript Example

`js
const fs = require('fs');
const zlib = require('zlib');

// Reading a large file as a stream
const readStream = fs.createReadStream('large-file.txt', { encoding: 'utf8', highWaterMark: 64 * 1024 });
readStream.on('data', (chunk) => console.log(\Received \ bytes\));
readStream.on('end', () => console.log('Done'));
readStream.on('error', (err) => console.error(err));

// Piping: read -> compress -> write
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// Backpressure handling
const writeStream = fs.createWriteStream('output.txt');
writeStream.on('drain', () => {
  console.log('Buffer drained, safe to write more');
});
`

### Explain Like I'm 7

Streams are like a drinking fountain instead of a swimming pool. To drink water from a pool, you'd need an Olympic-sized pool (all data in memory). A fountain gives you water sip by sip, so you never get overwhelmed.

---

## Q105: Buffers

### Short Interview Answer

Buffer is a Node.js global for handling binary data. Represents fixed-length sequences of bytes. Created via Buffer.alloc(size), Buffer.from(data). Decoding: .toString('utf8'), .toString('base64'). Used for file I/O, network protocols, cryptography. Not available in browsers (use Uint8Array).

### JavaScript Example

`js
// Creating buffers
const buf1 = Buffer.alloc(10); // zero-filled, 10 bytes
const buf2 = Buffer.from('Hello', 'utf8'); // <Buffer 48 65 6c 6c 6f>
const buf3 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // same

// Operations
console.log(buf2.toString()); // 'Hello'
console.log(buf2.toString('base64')); // 'SGVsbG8='
console.log(buf2.length); // 5 (bytes)
console.log(buf2[0]); // 72 (hex 0x48)

// Concatenation
const combined = Buffer.concat([buf2, Buffer.from(' World')]);
console.log(combined.toString()); // 'Hello World'

// Slicing (shares memory!)
const slice = buf2.slice(0, 2);
slice[0] = 0x58; // changes original buf2 too!

// Copy (independent)
const copy = Buffer.alloc(2);
buf2.copy(copy, 0, 0, 2);
`

### Explain Like I'm 7

Buffers are like trays of ice cubes — each tray holds a fixed number of cubes (bytes). You can create a tray, fill it with water (data), combine trays, or take a few cubes from one tray. Unlike arrays, the trays are fixed size.

---

## Q106: Cluster Module

### Short Interview Answer

cluster creates multiple child processes (workers) that share the same server port. The master process distributes incoming connections among workers using round-robin (default on Linux) or OS scheduling. Enables multi-core CPU utilization. Each worker has its own V8 instance (separate memory, event loop).

### JavaScript Example

`js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(\Master \ starting \ workers\);
  
  for (let i = 0; i < numCPUs; i++) cluster.fork();
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\Worker \ died\);
    cluster.fork(); // restart
  });
} else {
  // Worker process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\Hello from worker \\);
  }).listen(8000);
}
`

### Explain Like I'm 7

Cluster is like having multiple checkout counters at a store. Instead of one cashier (single process) handling all customers (requests), multiple cashiers (workers) share the load. If one cashier gets tired (crashes), a new one replaces them.

---

## Q107: Child Processes

### Short Interview Answer

child_process module spawns new OS processes. Methods: spawn (stream I/O), exec (buffer output), ork (new Node process with IPC). spawn is preferred for large output (streaming). ork enables message passing via .send() and process.on('message').

### JavaScript Example

`js
const { spawn, exec, fork } = require('child_process');

// spawn: streaming I/O (for large output)
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => console.log('Output:', data.toString()));
ls.on('close', (code) => console.log(\Exit code: \\));

// exec: buffered output (for small output)
exec('ls -lh /usr', (err, stdout, stderr) => {
  if (err) { console.error(err); return; }
  console.log(stdout);
});

// fork: IPC with child Node process
// child.js
process.on('message', (msg) => {
  console.log('Parent says:', msg);
  process.send({ received: true });
});

// parent.js
const child = fork('./child.js');
child.send({ hello: 'from parent' });
child.on('message', (msg) => console.log('Child says:', msg));

// Error handling
const cmd = spawn('some-command', { shell: true });
cmd.on('error', (err) => console.error('Failed to start:', err));
`

### Explain Like I'm 7

Child processes are like hiring contractors. Instead of doing all the work yourself (single process), you hire outside workers (child processes) to do specific jobs. spawn talks to them through a walkie-talkie (streams), exec waits for them to finish and call you back (buffer), ork is like having an intercom (IPC).

---

## Q108: libuv

### Short Interview Answer

libuv is the C library that powers Node.js's async I/O. Handles: event loop, file system operations, DNS, network I/O, thread pool for CPU-intensive tasks, signal handling, timers. The thread pool (default 4 threads) handles s, dns.lookup, crypto, zlib. UV_THREADPOOL_SIZE env var configures pool size.

### JavaScript Example

`js
// Operations that use libuv thread pool (async):
const fs = require('fs');
const crypto = require('crypto');

// These use the thread pool:
fs.readFile('file.txt', cb);         // thread pool
crypto.pbkdf2('pass', 'salt', ...);  // thread pool
zlib.gzip(data, cb);                 // thread pool

// These do NOT use thread pool (native OS async):
http.get(url, cb);  // IOCP (Windows) / epoll (Linux)
net.createServer(); // network sockets

// Adjust thread pool size
// UV_THREADPOOL_SIZE=8 node app.js

// You can observe thread pool usage:
const getFlag = (flag) => process.env[flag];
console.log('Thread pool size:', getFlag('UV_THREADPOOL_SIZE') || 4);

// Blocking the thread pool:
// If 4 threads are all busy with crypto operations,
// fs.readFile has to wait
`

### Explain Like I'm 7

libuv is like a team of assistants (thread pool) who do the heavy lifting. When Node.js needs to read a file (fs), it doesn't do it itself — it gives the task to an assistant. If all assistants are busy, tasks queue up. The event loop manager directs which assistant does what.

---

## ?? Final Notes

This guide covers **108 JavaScript/TypeScript interview questions** across **16 topics**, from core concepts to advanced Node.js internals. Each question is designed to test candidates from junior to FAANG/Staff Engineer level.

### How to Use This Guide

1. **Study in order**: Each section builds on previous knowledge
2. **Cover the answer**: Try to respond out loud (simulating interview conditions)
3. **Deep dives first**: Focus on FAANG-Level sections for senior roles
4. **Practice the code**: Implement examples in a real project
5. **Review mistakes**: Common Mistakes sections contain actual interview pitfalls

### Recommended Study Path

| Role | Focus Sections |
|------|---------------|
| **Junior (0-2 yrs)** | Sections 1-4 (Core, Context, Closures, Prototypes) |
| **Mid-Level (3-5 yrs)** | Sections 1-8 + Async + Event Loop |
| **Senior (6-9 yrs)** | Sections 1-12 + TypeScript + Performance |
| **Staff/Principal (10+)** | All sections + FAANG deep dives |

### Interview Tips

- **Think out loud**: Interviewers want to hear your problem-solving process
- **Ask clarifying questions**: Don't jump into code without understanding constraints
- **Discuss trade-offs**: Every solution has pros and cons — demonstrate that you know them
- **Test your assumptions**: Edge cases reveal seniority level
- **Use the STAR method**: Situation, Task, Action, Result for behavioral questions

---

<p align="center">
  <b>End of Volume 6 — JavaScript & TypeScript</b><br/>
  <i>108 questions. 16 topics. One comprehensive guide.</i><br/><br/>
  <a href="#">Back to Table of Contents</a>
</p>
