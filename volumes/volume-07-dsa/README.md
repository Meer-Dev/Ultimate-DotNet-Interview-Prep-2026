# 📚 Data Structures & Algorithms — The Complete Interview Guide

[![Volume 7](https://img.shields.io/badge/Volume-07-blueviolet?style=for-the-badge)](#)
[![Topic](https://img.shields.io/badge/Topic-Data%20Structures%20%26%20Algorithms-ff6f00?style=for-the-badge)](#)
[![Language](https://img.shields.io/badge/Language-C%23-239120?style=for-the-badge&logo=csharp)](#)
[![Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-success?style=for-the-badge)](#)
[![Year](https://img.shields.io/badge/Year-2026-blue?style=for-the-badge)](#)

> **"Bad programmers worry about the code. Good programmers worry about data structures and their relationships."** — Linus Torvalds

---

## 📑 Table of Contents

| # | Data Structure | Category | Difficulty |
|---|----------------|----------|-----------|
| 1 | [Arrays](#1-arrays) | Linear | ⭐ |
| 2 | [Strings](#2-strings) | Linear | ⭐ |
| 3 | [Hashing](#3-hashing) | Hash-Based | ⭐⭐ |
| 4 | [Linked Lists](#4-linked-lists) | Linear | ⭐⭐ |
| 5 | [Stacks](#5-stacks) | Linear (LIFO) | ⭐⭐ |
| 6 | [Queues](#6-queues) | Linear (FIFO) | ⭐⭐ |
| 7 | [Trees](#7-trees) | Hierarchical | ⭐⭐⭐ |
| 8 | [Binary Search Trees](#8-binary-search-trees) | Hierarchical | ⭐⭐⭐ |
| 9 | [Heaps](#9-heaps) | Tree-Based | ⭐⭐⭐ |
| 10 | [Graphs](#10-graphs) | Network | ⭐⭐⭐⭐ |
| 11 | [Tries](#11-tries) | Tree-Based | ⭐⭐⭐⭐ |
| 12 | [Union-Find](#12-union-find) | Disjoint Set | ⭐⭐⭐ |
| 13 | [Segment Trees](#13-segment-trees) | Tree-Based | ⭐⭐⭐⭐ |
| 14 | [Bloom Filters](#14-bloom-filters) | Probabilistic | ⭐⭐⭐⭐ |

---

## 1. Arrays

### What It Is
An array is a contiguous block of memory storing elements of the **same type**, each accessible via an index. The foundation of nearly every data structure.

### Real-World Analogy
A row of numbered lockers at a gym. Each locker holds one item, and you instantly know where locker #42 is — you don't need to search.

### Internal Working
- **Memory layout:** Elements stored sequentially in contiguous RAM.
- **Index calculation:** ddress = baseAddress + (index * elementSize) — O(1) random access.
- **Static arrays:** Fixed size determined at allocation.
- **Dynamic arrays (List\<T\>):** Allocate a larger backing array when capacity is exceeded (typically 2× growth), copy elements over — **amortized O(1)** append.

### When to Use
- Fast index-based access is required
- You know the size ahead of time (or can amortize growth)
- Cache-friendly iteration (sequential memory access)
- Implementing other data structures (stacks, queues, heaps)

### When NOT to Use
- Frequent insertions/deletions at arbitrary positions (O(n) shifting)
- When you need a grow-shrink structure with frequent resizing
- When elements are sparse and memory is constrained

### Time Complexity Table

| Operation | Static Array | Dynamic Array (List\<T\>) |
|-----------|-------------|------------------------|
| Access by index | O(1) | O(1) |
| Search (unsorted) | O(n) | O(n) |
| Search (sorted, binary) | O(log n) | O(log n) |
| Insert at end | — | O(1) amortized |
| Insert at beginning/middle | — | O(n) |
| Delete at end | — | O(1) |
| Delete at beginning/middle | — | O(n) |

### Space Complexity
**O(n)** — exactly n slots for n elements.

### C# Example

`csharp
public static class ArrayExamples
{
    // Static array
    public static void StaticArray()
    {
        int[] arr = new int[5] { 10, 20, 30, 40, 50 };
        arr[2] = 100; // O(1) access and update
    }

    // Dynamic array (List<T>)
    public static void DynamicArray()
    {
        List<int> list = new List<int>();
        list.Add(1);  // O(1) amortized
        list.Add(2);
        list.Insert(1, 5); // O(n) — shifts elements right
        list.RemoveAt(0);   // O(n) — shifts elements left
    }

    // Multi-dimensional (matrix)
    public static void MultiDimensional()
    {
        int[,] matrix = new int[3, 3]
        {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };
        int val = matrix[1, 2]; // row 1, col 2 => 6
    }

    // Jagged array (array of arrays)
    public static void JaggedArray()
    {
        int[][] jagged = new int[3][];
        jagged[0] = new int[] { 1, 2 };
        jagged[1] = new int[] { 3, 4, 5, 6 };
        jagged[2] = new int[] { 7 };
    }

    // Binary search (array must be sorted)
    public static int BinarySearch(int[] sorted, int target)
    {
        int lo = 0, hi = sorted.Length - 1;
        while (lo <= hi)
        {
            int mid = lo + (hi - lo) / 2;
            if (sorted[mid] == target) return mid;
            if (sorted[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    // In-place reverse
    public static void Reverse<T>(T[] arr)
    {
        int i = 0, j = arr.Length - 1;
        while (i < j)
        {
            (arr[i], arr[j]) = (arr[j], arr[i]);
            i++; j--;
        }
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Two Sum | [LC 1](https://leetcode.com/problems/two-sum/) | 🟢 Easy |
| 2 | Best Time to Buy and Sell Stock | [LC 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | 🟢 Easy |
| 3 | Product of Array Except Self | [LC 238](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 Medium |
| 4 | First Missing Positive | [LC 41](https://leetcode.com/problems/first-missing-positive/) | 🔴 Hard |
| 5 | Rotate Array | [LC 189](https://leetcode.com/problems/rotate-array/) | 🟡 Medium |
| 6 | Subarray Sum Equals K | [LC 560](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 Medium |
| 7 | Merge Intervals | [LC 56](https://leetcode.com/problems/merge-intervals/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 The Kadane's Algorithm Pattern (Maximum Subarray)</b></summary>

`csharp
// Maximum subarray sum — O(n) time, O(1) space
public int MaxSubArray(int[] nums)
{
    int maxEndingHere = nums[0];
    int maxSoFar = nums[0];

    for (int i = 1; i < nums.Length; i++)
    {
        maxEndingHere = Math.Max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.Max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
`

**Variations:** Maximum product subarray, maximum sum circular subarray, maximum subarray with at most K deletions.
</details>

<details>
<summary><b>👨‍💻 Dutch National Flag (3-way Partitioning)</b></summary>

`csharp
// Sort array of 0s, 1s, 2s — O(n) time, O(1) space
public void SortColors(int[] nums)
{
    int low = 0, mid = 0, high = nums.Length - 1;
    while (mid <= high)
    {
        if (nums[mid] == 0)
        {
            (nums[low], nums[mid]) = (nums[mid], nums[low]);
            low++; mid++;
        }
        else if (nums[mid] == 1)
        {
            mid++;
        }
        else
        {
            (nums[mid], nums[high]) = (nums[high], nums[mid]);
            high--;
        }
    }
}
`
</details>

### Variations
- **Static Array** — fixed size, stack-allocated possible
- **Dynamic Array** (List, ArrayList, Vector) — auto-resizing
- **Circular Buffer** — wrap-around indexing for FIFO
- **Sparse Array** — store only non-default values
- **Bit Array** — compact bool storage using bits

### ELI5 🧒
> Arrays are like a row of toy boxes. Each box has a number painted on it (the index). You can open box #3 instantly because you know exactly where it is. But if you want to put a new toy between box #2 and #3, you have to move all the toys from #3 onward to make room — that takes time.

## 2. Strings

### What It Is
A sequence of characters. In C#, strings are **immutable** — any operation that appears to modify a string creates a new string object.

### Real-World Analogy
Writing text in permanent marker on a whiteboard. You cannot erase a single letter; you must wipe the whole board and rewrite it.

### Internal Working
- **Immutability:** \string\ objects are read-only after creation. \Substring\, \Replace\, \ToUpper\, \+\ concatenation all allocate new strings.
- **String interning:** The CLR maintains a pool of literal strings. Identical literals share the same reference.
- **StringBuilder:** Maintains a mutable buffer (linked list of chunks) to avoid allocation on every mutation.
- **Character encoding:** Internally UTF-16 (\char\ is 2 bytes). \StringInfo\ handles Unicode grapheme clusters (surrogate pairs, combining characters).

### When to Use
- Representing text data
- Read-heavy operations (immutability is thread-safe by default)
- Dictionary keys (immutable => hash code never changes)

### When NOT to Use
- Heavy concatenation in loops (use \StringBuilder\)
- Frequent inserts/deletions in the middle
- Memory-constrained scenarios with many large strings

### Time Complexity Table

| Operation | string (immutable) | StringBuilder |
|-----------|-------------------|---------------|
| Access by index | O(1) | O(1) |
| Concatenation (+, a + b) | O(n + m) | O(1) append |
| Concatenation in loop (a += b) | O(n²) | O(n) |
| Substring | O(n) | O(n) |
| Search (IndexOf) | O(n) | O(n) |
| Replace | O(n) | O(n) |

### Space Complexity
**O(n)** for the character buffer. \StringBuilder\ adds internal overhead (~2× buffer).

### C# Example

`csharp
using System.Text;

public static class StringExamples
{
    // Immutability demonstration
    public static void Immutability()
    {
        string s = ""hello"";
        string t = s.ToUpper(); // Creates NEW string ""HELLO""
        // s is still ""hello""
    }

    // StringBuilder for efficient concatenation
    public static string BuildString(string[] words)
    {
        // AVOID: string result = """";
        // foreach (var w in words) result += w;  // O(n²)!

        var sb = new StringBuilder();
        foreach (var w in words)
            sb.Append(w);
        return sb.ToString();
    }

    // Character encoding awareness
    public static void EncodingAware()
    {
        string emoji = ""👍😀🎉"";
        Console.WriteLine(emoji.Length); // 6 (each emoji = 2 chars, surrogate pair)

        // Use StringInfo for grapheme clusters
        var enumerator = System.Globalization.StringInfo.GetTextElementEnumerator(emoji);
        while (enumerator.MoveNext())
            Console.WriteLine(enumerator.Current); // 👍 😀 🎉
    }

    // String reversal
    public static string Reverse(string s)
    {
        char[] chars = s.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }

    // Check if anagram
    public static bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length) return false;
        int[] counts = new int[26];
        foreach (var c in s) counts[c - 'a']++;
        foreach (var c in t) counts[c - 'a']--;
        return counts.All(c => c == 0);
    }

    // Longest palindrome substring (expand around center)
    public static string LongestPalindrome(string s)
    {
        if (string.IsNullOrEmpty(s)) return """";
        int start = 0, maxLen = 1;

        int Expand(int left, int right)
        {
            while (left >= 0 && right < s.Length && s[left] == s[right])
            { left--; right++; }
            return right - left - 1;
        }

        for (int i = 0; i < s.Length; i++)
        {
            int len1 = Expand(i, i);     // odd length
            int len2 = Expand(i, i + 1); // even length
            int len = Math.Max(len1, len2);
            if (len > maxLen)
            {
                start = i - (len - 1) / 2;
                maxLen = len;
            }
        }
        return s.Substring(start, maxLen);
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Valid Anagram | [LC 242](https://leetcode.com/problems/valid-anagram/) | 🟢 Easy |
| 2 | Longest Substring Without Repeating Characters | [LC 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 Medium |
| 3 | Longest Palindromic Substring | [LC 5](https://leetcode.com/problems/longest-palindromic-substring/) | 🟡 Medium |
| 4 | String to Integer (atoi) | [LC 8](https://leetcode.com/problems/string-to-integer-atoi/) | 🟡 Medium |
| 5 | Group Anagrams | [LC 49](https://leetcode.com/problems/group-anagrams/) | 🟡 Medium |
| 6 | Minimum Window Substring | [LC 76](https://leetcode.com/problems/minimum-window-substring/) | 🔴 Hard |
| 7 | Regular Expression Matching | [LC 10](https://leetcode.com/problems/regular-expression-matching/) | 🔴 Hard |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Rabin-Karp (Rolling Hash) Pattern Matching</b></summary>

`csharp
// Rabin-Karp substring search — avg O(n+m), worst O(n*m)
public int RabinKarp(string text, string pattern)
{
    int n = text.Length, m = pattern.Length;
    if (m > n) return -1;
    const int d = 256; // radix
    const int q = 101; // prime modulus

    int h = 1;
    for (int i = 0; i < m - 1; i++)
        h = (h * d) % q;

    int pHash = 0, tHash = 0;
    for (int i = 0; i < m; i++)
    {
        pHash = (d * pHash + pattern[i]) % q;
        tHash = (d * tHash + text[i]) % q;
    }

    for (int i = 0; i <= n - m; i++)
    {
        if (pHash == tHash)
        {
            bool match = true;
            for (int j = 0; j < m; j++)
            {
                if (text[i + j] != pattern[j]) { match = false; break; }
            }
            if (match) return i;
        }
        if (i < n - m)
        {
            tHash = (d * (tHash - text[i] * h) + text[i + m]) % q;
            if (tHash < 0) tHash += q;
        }
    }
    return -1;
}
`
</details>

<details>
<summary><b>👨‍💻 Sliding Window Pattern</b></summary>

`csharp
// Minimum window containing all chars of pattern
public string MinWindow(string s, string t)
{
    var need = new Dictionary<char, int>();
    var have = new Dictionary<char, int>();
    foreach (var c in t)
    {
        need.TryGetValue(c, out var v);
        need[c] = v + 1;
    }

    int left = 0, right = 0, formed = 0, required = need.Count;
    int minLen = int.MaxValue, minStart = 0;

    while (right < s.Length)
    {
        char c = s[right];
        have.TryGetValue(c, out var v);
        have[c] = v + 1;
        if (need.ContainsKey(c) && have[c] == need[c]) formed++;

        while (formed == required && left <= right)
        {
            if (right - left + 1 < minLen)
            {
                minLen = right - left + 1;
                minStart = left;
            }
            char leftChar = s[left];
            have[leftChar]--;
            if (need.ContainsKey(leftChar) && have[leftChar] < need[leftChar])
                formed--;
            left++;
        }
        right++;
    }
    return minLen == int.MaxValue ? """""" : s.Substring(minStart, minLen);
}
`
</details>

### Variations
- **Mutable strings** — \StringBuilder\, \char[]\
- **Ropes** — tree-based string for efficient concatenation
- **Compressed strings** — run-length encoding, LZW
- **C-strings** — null-terminated (\\0) character arrays

### ELI5 🧒
> A string is like a sentence written on a piece of paper. If you want to change just one letter, you cannot — you have to copy the whole sentence onto a new piece of paper with the change. That is ""immutable."" If you are writing a long letter and keep making changes, use a StringBuilder — it is like writing in pencil and having an eraser.

---

## 3. Hashing

### What It Is
A data structure that maps **keys to values** using a **hash function** to compute an index into an array of buckets. Provides near O(1) average-case lookups.

### Real-World Analogy
A library card catalog. Instead of searching every shelf, you look up the book's category and go directly to the right aisle. If multiple books have the same category (collision), you look more carefully within that aisle.

### Internal Working
**Hash function:** \hashCode = key.GetHashCode() & 0x7FFFFFFF\ → mapped to bucket: \ucketIndex = hashCode % bucketCount\

**Collision handling strategies:**
1. **Separate Chaining** — each bucket holds a linked list / tree of entries. When collisions exceed threshold (8 entries in .NET), the list becomes a balanced tree (O(log n) worst case).
2. **Open Addressing** — linear probing, quadratic probing, double hashing.

**Load factor:** \α = n / m\ (entries / buckets). When α > threshold (0.72 for .NET's \Dictionary\), the bucket array is **resized** (≈2×) and all entries are **rehashed** — O(n) operation.

**GetHashCode best practices:**
- Must be **consistent** (same object → same hash code)
- Should be **fast** to compute
- Should distribute uniformly
- \Equals\ and \GetHashCode\ must agree (equal objects → equal hash codes)
- Use **prime multipliers** in custom implementations

### When to Use
- Fast lookups, insertions, deletions by key
- Removing duplicates
- Counting frequencies
- Caching / memoization

### When NOT to Use
- When order matters (use sorted dictionary / tree map)
- When keys have a small fixed range (array is faster)
- When hash collisions are easily DoS-attackable (use randomized hash)
- When you need range queries (""all keys between X and Y"")

### Time Complexity Table

| Operation | Average Case | Worst Case |
|-----------|-------------|------------|
| Insert | O(1) | O(n) |
| Lookup | O(1) | O(n) |
| Delete | O(1) | O(n) |
| ContainsKey | O(1) | O(n) |

> Worst case occurs when many keys hash to the same bucket (hash collision attack or poor hash function). Modern hash maps mitigate this with tree-based buckets and randomized hashing.

### Space Complexity
**O(n)** — plus overhead for bucket array (typically ≈2× n).

### C# Example

`csharp
public static class HashingExamples
{
    // HashSet (no values, just keys)
    public static bool HasDuplicate(int[] nums)
    {
        var set = new HashSet<int>();
        foreach (var n in nums)
            if (!set.Add(n)) return true;
        return false;
    }

    // Dictionary (key → value)
    public static int[] TwoSum(int[] nums, int target)
    {
        var map = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];
            if (map.ContainsKey(complement))
                return new[] { map[complement], i };
            map[nums[i]] = i;
        }
        return null;
    }

    // Frequency counter
    public static Dictionary<char, int> CharFrequency(string s)
    {
        var freq = new Dictionary<char, int>();
        foreach (var c in s)
        {
            freq.TryGetValue(c, out var count);
            freq[c] = count + 1;
        }
        return freq;
    }

    // Custom GetHashCode example
    public readonly struct Point : IEquatable<Point>
    {
        public int X { get; }
        public int Y { get; }

        public Point(int x, int y) => (X, Y) = (x, y);

        public override bool Equals(object obj) =>
            obj is Point other && Equals(other);

        public bool Equals(Point other) =>
            X == other.X && Y == other.Y;

        public override int GetHashCode() =>
            HashCode.Combine(X, Y); // .NET Core 2.1+ — uses prime multipliers internally
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Two Sum | [LC 1](https://leetcode.com/problems/two-sum/) | 🟢 Easy |
| 2 | Contains Duplicate | [LC 217](https://leetcode.com/problems/contains-duplicate/) | 🟢 Easy |
| 3 | Longest Consecutive Sequence | [LC 128](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 Medium |
| 4 | Top K Frequent Elements | [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium |
| 5 | LRU Cache (Hash + LinkedList) | [LC 146](https://leetcode.com/problems/lru-cache/) | 🟡 Medium |
| 6 | Design HashMap | [LC 706](https://leetcode.com/problems/design-hashmap/) | 🟢 Easy |
| 7 | Minimum Window Substring | [LC 76](https://leetcode.com/problems/minimum-window-substring/) | 🔴 Hard |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Implementing a Simple HashMap (Separate Chaining)</b></summary>

`csharp
public class SimpleHashMap<TKey, TValue>
{
    private const int InitialCapacity = 16;
    private const double LoadFactor = 0.75;

    private LinkedList<KeyValuePair<TKey, TValue>>[] _buckets;
    private int _count;

    public SimpleHashMap()
    {
        _buckets = new LinkedList<KeyValuePair<TKey, TValue>>[InitialCapacity];
    }

    private int GetBucketIndex(TKey key) =>
        Math.Abs(key.GetHashCode()) % _buckets.Length;

    public void Add(TKey key, TValue value)
    {
        if (_count >= _buckets.Length * LoadFactor)
            Resize();

        int index = GetBucketIndex(key);
        _buckets[index] ??= new LinkedList<KeyValuePair<TKey, TValue>>();
        var list = _buckets[index];
        var node = list.First;

        while (node != null)
        {
            if (node.Value.Key.Equals(key))
                throw new ArgumentException(""Key already exists"");
            node = node.Next;
        }

        list.AddLast(new KeyValuePair<TKey, TValue>(key, value));
        _count++;
    }

    public bool TryGetValue(TKey key, out TValue value)
    {
        int index = GetBucketIndex(key);
        var list = _buckets[index];
        if (list == null) { value = default; return false; }

        foreach (var pair in list)
        {
            if (pair.Key.Equals(key))
            {
                value = pair.Value;
                return true;
            }
        }
        value = default; return false;
    }

    private void Resize()
    {
        var oldBuckets = _buckets;
        _buckets = new LinkedList<KeyValuePair<TKey, TValue>>[oldBuckets.Length * 2];
        _count = 0;

        foreach (var list in oldBuckets)
        {
            if (list == null) continue;
            foreach (var pair in list)
                Add(pair.Key, pair.Value);
        }
    }
}
`
</details>

<details>
<summary><b>👨‍💻 Perfect Hashing and Hash DoS Mitigation</b></summary>

Modern hash maps (like .NET's \Dictionary\) mitigate hash-collision DoS attacks by:
1. **Randomized hash seed** per process (hash codes are salted)
2. **Tree-based buckets** (when a bucket exceeds 8 items, it converts to a red-black tree)
3. **Internal \IEqualityComparer<T>\** with non-deterministic elements

Always implement \GetHashCode\ using \HashCode.Combine()\ for .NET Core+ or a well-known prime multiplier pattern:

`csharp
// Classic prime multiplier GetHashCode
public override int GetHashCode()
{
    unchecked
    {
        int hash = 17;
        hash = hash * 31 + field1.GetHashCode();
        hash = hash * 31 + field2.GetHashCode();
        return hash;
    }
}
`
</details>

### Variations
- **HashSet\<T\>** — keys only, no values
- **Dictionary\<TKey, TValue\>** — key → value mapping
- **SortedDictionary** — O(log n) with ordered keys (red-black tree)
- **ImmutableDictionary** — persistent, structural sharing
- **ConcurrentDictionary** — thread-safe, fine-grained locking
- **Bloom Filter** — probabilistic, see [section 14](#14-bloom-filters)

### ELI5 🧒
> Hashing is like organizing your toys by color. You quickly decide ""red toys go in the red box, blue toys in the blue box."" When you want to find your red car, you know exactly which box to check. If two toys are both red (collision), you put them both in the red box just stacked together.

---

## 4. Linked Lists

### What It Is
A linear sequence of **nodes**, each containing data and a pointer to the next node. Unlike arrays, elements are not stored contiguously.

### Real-World Analogy
A treasure hunt where each clue tells you where to find the next clue. To reach clue #5, you must follow clues #1 → #2 → #3 → #4 first.

### Internal Working
**Node structure:**
`
[Singly]  [data | next → ]
[Doubly]  [prev ← | data | next → ]
`

- **Singly linked:** each node points to the next node; traversal is one-directional.
- **Doubly linked:** each node points to both next and previous; allows reverse traversal.
- **Circular linked:** the tail node's \
ext\ points back to the head (or for doubly, head's \prev\ points to tail).

**Key operations:**
- **Insert at head:** O(1) — create node, point to current head, update head pointer.
- **Insert at tail:** O(1) with tail pointer (O(n) without).
- **Insert at position / delete:** O(n) — must traverse to find the node.
- **Search:** O(n) — linear scan.

### When to Use
- Frequent insertions/deletions at the **ends** (head/tail) without moving other elements
- Implementing stacks, queues, deques
- Memory fragmentation is a concern (no large contiguous block needed)
- You do not need random access

### When NOT to Use
- Random access is frequently needed (arrays are O(1))
- You need cache-friendly iteration (arrays have spatial locality)
- Memory overhead is critical (each node stores 1-2 extra pointers)
- Binary search is required

### Time Complexity Table

| Operation | Singly Linked | Doubly Linked |
|-----------|--------------|--------------|
| Access head | O(1) | O(1) |
| Access tail | O(1)* | O(1) |
| Access middle | O(n) | O(n) |
| Insert at head | O(1) | O(1) |
| Insert at tail | O(1)* | O(1) |
| Insert in middle | O(n) | O(n) |
| Delete at head | O(1) | O(1) |
| Delete at tail | O(n) | O(1) |
| Delete in middle | O(n) | O(n) |
| Search | O(n) | O(n) |

> \\* Requires maintaining a tail pointer.

### Space Complexity
**O(n)** — each node stores data + 1 pointer (singly) or 2 pointers (doubly).

### C# Example

`csharp
public class ListNode<T>
{
    public T Value { get; set; }
    public ListNode<T> Next { get; set; }
    public ListNode(T value) => Value = value;
}

public class DoublyListNode<T>
{
    public T Value { get; set; }
    public DoublyListNode<T> Prev { get; set; }
    public DoublyListNode<T> Next { get; set; }
    public DoublyListNode(T value) => Value = value;
}

public static class LinkedListExamples
{
    // Singly linked list implementation
    public class SinglyLinkedList<T>
    {
        public ListNode<T> Head { get; private set; }
        private ListNode<T> _tail;
        public int Count { get; private set; }

        public void AddFirst(T value)
        {
            var node = new ListNode<T>(value) { Next = Head };
            Head = node;
            if (_tail == null) _tail = node;
            Count++;
        }

        public void AddLast(T value)
        {
            var node = new ListNode<T>(value);
            if (_tail == null) { Head = _tail = node; }
            else { _tail.Next = node; _tail = node; }
            Count++;
        }

        public bool Remove(T value)
        {
            if (Head == null) return false;
            if (Head.Value.Equals(value)) { Head = Head.Next; Count--; return true; }

            var current = Head;
            while (current.Next != null)
            {
                if (current.Next.Value.Equals(value))
                {
                    current.Next = current.Next.Next;
                    if (current.Next == null) _tail = current;
                    Count--; return true;
                }
                current = current.Next;
            }
            return false;
        }
    }

    // Floyd's Cycle Detection Algorithm (Tortoise and Hare)
    public static bool HasCycle<T>(ListNode<T> head)
    {
        if (head?.Next == null) return false;
        var slow = head;
        var fast = head;

        while (fast?.Next != null)
        {
            slow = slow.Next;
            fast = fast.Next.Next;
            if (slow == fast) return true;
        }
        return false;
    }

    // Find middle of linked list
    public static ListNode<T> FindMiddle<T>(ListNode<T> head)
    {
        var slow = head;
        var fast = head;
        while (fast?.Next != null)
        {
            slow = slow.Next;
            fast = fast.Next.Next;
        }
        return slow;
    }

    // Reverse a linked list
    public static ListNode<T> Reverse<T>(ListNode<T> head)
    {
        ListNode<T> prev = null, current = head;
        while (current != null)
        {
            var next = current.Next;
            current.Next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    // Merge two sorted linked lists
    public static ListNode<int> MergeSorted(ListNode<int> l1, ListNode<int> l2)
    {
        var dummy = new ListNode<int>(0);
        var tail = dummy;

        while (l1 != null && l2 != null)
        {
            if (l1.Value <= l2.Value) { tail.Next = l1; l1 = l1.Next; }
            else { tail.Next = l2; l2 = l2.Next; }
            tail = tail.Next;
        }
        tail.Next = l1 ?? l2;
        return dummy.Next;
    }

    // Remove Nth node from end
    public static ListNode<T> RemoveNthFromEnd<T>(ListNode<T> head, int n)
    {
        var dummy = new ListNode<T>(default) { Next = head };
        var slow = dummy;
        var fast = dummy;

        for (int i = 0; i <= n; i++) fast = fast.Next;

        while (fast != null)
        {
            slow = slow.Next;
            fast = fast.Next;
        }
        slow.Next = slow.Next.Next;
        return dummy.Next;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Reverse Linked List | [LC 206](https://leetcode.com/problems/reverse-linked-list/) | 🟢 Easy |
| 2 | Linked List Cycle | [LC 141](https://leetcode.com/problems/linked-list-cycle/) | 🟢 Easy |
| 3 | Merge Two Sorted Lists | [LC 21](https://leetcode.com/problems/merge-two-sorted-lists/) | 🟢 Easy |
| 4 | Remove Nth Node From End | [LC 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 🟡 Medium |
| 5 | Reorder List | [LC 143](https://leetcode.com/problems/reorder-list/) | 🟡 Medium |
| 6 | Merge K Sorted Lists | [LC 23](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 Hard |
| 7 | LRU Cache | [LC 146](https://leetcode.com/problems/lru-cache/) | 🟡 Medium |
| 8 | Copy List with Random Pointer | [LC 138](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 LRU Cache (Doubly Linked List + HashMap)</b></summary>

`csharp
public class LRUCache
{
    private readonly int _capacity;
    private readonly Dictionary<int, LinkedListNode<(int Key, int Value)>> _map;
    private readonly LinkedList<(int Key, int Value)> _list;

    public LRUCache(int capacity)
    {
        _capacity = capacity;
        _map = new Dictionary<int, LinkedListNode<(int, int)>>(capacity);
        _list = new LinkedList<(int, int)>();
    }

    public int Get(int key)
    {
        if (!_map.TryGetValue(key, out var node)) return -1;
        _list.Remove(node);
        _list.AddFirst(node);
        return node.Value.Value;
    }

    public void Put(int key, int value)
    {
        if (_map.TryGetValue(key, out var node))
        {
            _list.Remove(node);
            node.Value = (key, value);
            _list.AddFirst(node);
            return;
        }

        if (_map.Count >= _capacity)
        {
            var last = _list.Last;
            _map.Remove(last.Value.Key);
            _list.RemoveLast();
        }

        _list.AddFirst((key, value));
        _map[key] = _list.First;
    }
}
`
</details>

<details>
<summary><b>👨‍💻 Sentinel / Dummy Node Pattern</b></summary>

Sentinel nodes eliminate edge cases by providing a permanent dummy node with no real data:

`csharp
// Sentinel example: doubly linked list with dummy head/tail
public class SentinelLinkedList<T>
{
    private readonly DoublyListNode<T> _headSentinel;
    private readonly DoublyListNode<T> _tailSentinel;

    public SentinelLinkedList()
    {
        _headSentinel = new DoublyListNode<T>(default);
        _tailSentinel = new DoublyListNode<T>(default);
        _headSentinel.Next = _tailSentinel;
        _tailSentinel.Prev = _headSentinel;
    }

    public void AddLast(T value)
    {
        var node = new DoublyListNode<T>(value);
        node.Prev = _tailSentinel.Prev;
        node.Next = _tailSentinel;
        _tailSentinel.Prev.Next = node;
        _tailSentinel.Prev = node;
    }

    // No special case for empty list!
    public bool IsEmpty() => _headSentinel.Next == _tailSentinel;
}
`
</details>

### Variations
- **Singly linked list** — one direction, less memory
- **Doubly linked list** — both directions, O(1) delete at tail
- **Circular linked list** — tail points to head (used in round-robin scheduling)
- **Skip list** — multiple ""express lanes"" for O(log n) search
- **XOR linked list** — memory-efficient doubly linked (stores XOR of prev and next pointers)

### ELI5 🧒
> A linked list is like a conga line where each person holds the shoulders of the person in front. To find person #5, you must count: 1 → 2 → 3 → 4 → 5. But if you want to cut into the line, you just tap two people and say ""hold my shoulders"" — no one else needs to move!

---

## 5. Stacks

### What It Is
A **Last-In-First-Out (LIFO)** data structure. Elements are added (pushed) and removed (popped) from the **top**.

### Real-World Analogy
A stack of plates in a cafeteria. You grab the top plate (last one put on). To add a plate, you put it on top.

### Internal Working
- **Array-based:** An internal dynamic array + \_top\ index. Push increments top, pop decrements. Simple, fast, cache-friendly.
- **Linked-list-based:** Head of the list = top of stack. Push adds to head (O(1)), pop removes from head (O(1)). No capacity limit, but extra memory for pointers.

**Operations:**
- \Push(item)\ — O(1) amortized (array) or O(1) (linked)
- \Pop()\ — O(1), removes top element
- \Peek()\ — O(1), returns top without removing
- \IsEmpty()\ — O(1)

### When to Use
- Expression evaluation (postfix, infix conversion)
- Balanced parentheses/symbols checking
- Undo/Redo operations (command pattern)
- Depth-First Search (DFS) on graphs
- Backtracking algorithms (maze solving, N-Queens)
- Monotonic stack problems (next greater element)

### When NOT to Use
- When you need FIFO behavior (use a queue)
- When random access is needed (use an array)

### Time Complexity Table

| Operation | Array-Based Stack | Linked-List Stack |
|-----------|------------------|-------------------|
| Push | O(1) amortized | O(1) |
| Pop | O(1) | O(1) |
| Peek | O(1) | O(1) |
| IsEmpty | O(1) | O(1) |
| Search | O(n) | O(n) |

### Space Complexity
**O(n)**

### C# Example

`csharp
public static class StackExamples
{
    // Using built-in Stack<T>
    public static void BuiltInStack()
    {
        var stack = new Stack<int>();
        stack.Push(1);  // [1]
        stack.Push(2);  // [1, 2]
        stack.Push(3);  // [1, 2, 3]
        int top = stack.Pop();   // 3, stack = [1, 2]
        int peek = stack.Peek(); // 2, stack still [1, 2]
    }

    // Array-based stack implementation
    public class ArrayStack<T>
    {
        private T[] _items;
        private int _top;

        public ArrayStack(int capacity = 4)
        {
            _items = new T[capacity];
            _top = 0;
        }

        public void Push(T item)
        {
            if (_top == _items.Length)
                Array.Resize(ref _items, _items.Length * 2);
            _items[_top++] = item;
        }

        public T Pop()
        {
            if (_top == 0) throw new InvalidOperationException(""Stack empty"");
            T item = _items[--_top];
            _items[_top] = default; // Avoid memory leak
            return item;
        }

        public T Peek() =>
            _top > 0 ? _items[_top - 1] : throw new InvalidOperationException();

        public bool IsEmpty => _top == 0;
    }

    // Balanced parentheses check
    public static bool IsBalanced(string s)
    {
        var stack = new Stack<char>();
        var pairs = new Dictionary<char, char>
        {
            { ')'', '('' },
            { ']'', ''['' },
            { '}'', ''{'' }
        };

        foreach (char c in s)
        {
            if (""([{"".Contains(c))
                stack.Push(c);
            else if ("")]}"".Contains(c))
            {
                if (stack.Count == 0 || stack.Pop() != pairs[c])
                    return false;
            }
        }
        return stack.Count == 0;
    }

    // Evaluate Reverse Polish Notation (postfix)
    public static int EvalRPN(string[] tokens)
    {
        var stack = new Stack<int>();
        foreach (var t in tokens)
        {
            if (int.TryParse(t, out int num))
                stack.Push(num);
            else
            {
                int b = stack.Pop();
                int a = stack.Pop();
                stack.Push(t switch
                {
                    ""+"" => a + b,
                    ""-"" => a - b,
                    ""*"" => a * b,
                    ""/"" => a / b,
                    _ => throw new InvalidOperationException()
                });
            }
        }
        return stack.Pop();
    }

    // Monotonic stack — Next Greater Element
    public static int[] NextGreaterElement(int[] nums)
    {
        var result = new int[nums.Length];
        Array.Fill(result, -1);
        var stack = new Stack<int>(); // stores indices

        for (int i = 0; i < nums.Length; i++)
        {
            while (stack.Count > 0 && nums[stack.Peek()] < nums[i])
                result[stack.Pop()] = nums[i];
            stack.Push(i);
        }
        return result;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Valid Parentheses | [LC 20](https://leetcode.com/problems/valid-parentheses/) | 🟢 Easy |
| 2 | Min Stack (getMin in O(1)) | [LC 155](https://leetcode.com/problems/min-stack/) | 🟡 Medium |
| 3 | Evaluate Reverse Polish Notation | [LC 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 Medium |
| 4 | Daily Temperatures (monotonic stack) | [LC 739](https://leetcode.com/problems/daily-temperatures/) | 🟡 Medium |
| 5 | Largest Rectangle in Histogram | [LC 84](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 🔴 Hard |
| 6 | Trapping Rain Water | [LC 42](https://leetcode.com/problems/trapping-rain-water/) | 🔴 Hard |
| 7 | Decode String | [LC 394](https://leetcode.com/problems/decode-string/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Monotonic Stack — The Ultimate Pattern</b></summary>

A **monotonic stack** maintains elements in increasing or decreasing order. Used heavily in FAANG interviews.

`csharp
// Monotonic decreasing stack: Largest Rectangle in Histogram
public int LargestRectangleArea(int[] heights)
{
    var stack = new Stack<int>();
    stack.Push(-1); // sentinel
    int maxArea = 0;

    for (int i = 0; i < heights.Length; i++)
    {
        while (stack.Peek() != -1 && heights[stack.Peek()] >= heights[i])
        {
            int h = heights[stack.Pop()];
            int w = i - stack.Peek() - 1;
            maxArea = Math.Max(maxArea, h * w);
        }
        stack.Push(i);
    }

    while (stack.Peek() != -1)
    {
        int h = heights[stack.Pop()];
        int w = heights.Length - stack.Peek() - 1;
        maxArea = Math.Max(maxArea, h * w);
    }

    return maxArea;
}
`

**Monotonic stack patterns:**
- **Next Greater Element** — while stack top < current, pop and record
- **Previous Greater Element** — traverse left to right, same logic
- **Next Smaller Element** — while stack top > current, pop and record
</details>

<details>
<summary><b>👨‍💻 Min Stack with O(1) getMin</b></summary>

`csharp
public class MinStack
{
    private readonly Stack<int> _stack = new();
    private readonly Stack<int> _minStack = new(); // parallel stack tracking min

    public void Push(int val)
    {
        _stack.Push(val);
        if (_minStack.Count == 0 || val <= _minStack.Peek())
            _minStack.Push(val);
    }

    public void Pop()
    {
        if (_stack.Pop() == _minStack.Peek())
            _minStack.Pop();
    }

    public int Top() => _stack.Peek();
    public int GetMin() => _minStack.Peek();
}
`
</details>

### Variations
- **Monotonic stack** — increasing/decreasing order maintained
- **Min/Max stack** — track min/max alongside values
- **Two-stack queue** — implement queue using two stacks
- **Call stack** — the system stack for function calls

### ELI5 🧒
> A stack is like a tube of Pringles chips. You can only put a chip in at the top, and you can only take a chip out from the top. The last chip you put in is the first chip you eat! That is why it is called LIFO — Last In, First Out.

---

## 6. Queues

### What It Is
A **First-In-First-Out (FIFO)** data structure. Elements are added (enqueued) at the **rear** and removed (dequeued) from the **front**.

### Real-World Analogy
A line of people at a ticket counter. The first person in line is the first person served. New people join at the back.

### Internal Working
- **Array-based (circular buffer):** Uses a fixed-size array with \ront\ and \ear\ pointers that wrap around. When \ear + 1 % capacity == front\, the queue is full (or needs resizing).
- **Linked-list-based:** Head = front (dequeue), tail = rear (enqueue). O(1) for both operations, no capacity limit.
- **Priority queue:** Elements have priorities. The element with the highest (or lowest) priority is dequeued first, regardless of insertion order. Typically implemented with a **binary heap**.
- **Deque (Double-Ended Queue):** Supports insertion/removal at both ends.

### When to Use
- Order-preserving processing (BFS, print spooling, task scheduling)
- Buffering data streams (IO, network packets)
- Implementing BFS on graphs/trees
- Sliding window problems

### When NOT to Use
- LIFO required (use a stack)
- Random access needed (use an array)

### Time Complexity Table

| Operation | Circular Array Queue | Linked Queue | Priority Queue (Heap) | Deque |
|-----------|-------------------|--------------|----------------------|-------|
| Enqueue | O(1) amortized | O(1) | O(log n) | O(1)* |
| Dequeue | O(1) | O(1) | O(log n) | O(1)* |
| Peek Front | O(1) | O(1) | O(1) | O(1)* |
| Peek Rear | O(1) | O(1) | — | O(1)* |
| Search | O(n) | O(n) | O(n) | O(n) |

> \\* O(1) for operations at both ends of a deque.

### Space Complexity
**O(n)**

### C# Example

`csharp
public static class QueueExamples
{
    // Built-in Queue<T>
    public static void BuiltInQueue()
    {
        var q = new Queue<int>();
        q.Enqueue(1);  // [1]
        q.Enqueue(2);  // [1, 2]
        q.Enqueue(3);  // [1, 2, 3]
        int front = q.Dequeue(); // 1, queue = [2, 3]
        int peek = q.Peek();     // 2
    }

    // Circular buffer queue implementation
    public class CircularQueue<T>
    {
        private T[] _buffer;
        private int _front, _rear, _count;

        public CircularQueue(int capacity = 4)
        {
            _buffer = new T[capacity];
        }

        public void Enqueue(T item)
        {
            if (_count == _buffer.Length)
                Resize();
            _buffer[_rear] = item;
            _rear = (_rear + 1) % _buffer.Length;
            _count++;
        }

        public T Dequeue()
        {
            if (_count == 0) throw new InvalidOperationException(""Queue empty"");
            T item = _buffer[_front];
            _buffer[_front] = default;
            _front = (_front + 1) % _buffer.Length;
            _count--;
            return item;
        }

        private void Resize()
        {
            var newBuffer = new T[_buffer.Length * 2];
            for (int i = 0; i < _count; i++)
                newBuffer[i] = _buffer[(_front + i) % _buffer.Length];
            _buffer = newBuffer;
            _front = 0;
            _rear = _count;
        }
    }

    // Priority Queue (built-in .NET 6+)
    public static void PriorityQueueDemo()
    {
        var pq = new PriorityQueue<string, int>();
        pq.Enqueue(""low"", 3);
        pq.Enqueue(""high"", 1);
        pq.Enqueue(""med"", 2);

        string first = pq.Dequeue(); // ""high"" (priority 1)
        string second = pq.Dequeue(); // ""med"" (priority 2)
    }

    // Deque via LinkedList<T>
    public static void DequeDemo()
    {
        var deque = new LinkedList<int>();
        deque.AddFirst(1);  // [1]
        deque.AddLast(2);   // [1, 2]
        deque.AddFirst(0);  // [0, 1, 2]
        int front = deque.First.Value; // 0
        int back = deque.Last.Value;   // 2
        deque.RemoveFirst();
        deque.RemoveLast();
    }

    // BFS using queue
    public static void BfsTree(TreeNode root)
    {
        var q = new Queue<TreeNode>();
        q.Enqueue(root);
        while (q.Count > 0)
        {
            var node = q.Dequeue();
            Console.Write(node.Value + "" "");
            if (node.Left != null) q.Enqueue(node.Left);
            if (node.Right != null) q.Enqueue(node.Right);
        }
    }

    // Sliding window maximum using deque (monotonic queue)
    public static int[] MaxSlidingWindow(int[] nums, int k)
    {
        if (nums.Length == 0 || k == 0) return new int[0];
        var result = new int[nums.Length - k + 1];
        var deque = new LinkedList<int>(); // stores indices

        for (int i = 0; i < nums.Length; i++)
        {
            // Remove indices outside the window
            while (deque.Count > 0 && deque.First.Value < i - k + 1)
                deque.RemoveFirst();

            // Remove smaller elements (maintain decreasing order)
            while (deque.Count > 0 && nums[deque.Last.Value] < nums[i])
                deque.RemoveLast();

            deque.AddLast(i);

            if (i >= k - 1)
                result[i - k + 1] = nums[deque.First.Value];
        }
        return result;
    }
}

public class TreeNode
{
    public int Value { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
    public TreeNode(int val) => Value = val;
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Implement Queue Using Stacks | [LC 232](https://leetcode.com/problems/implement-queue-using-stacks/) | 🟢 Easy |
| 2 | Number of Recent Calls | [LC 933](https://leetcode.com/problems/number-of-recent-calls/) | 🟢 Easy |
| 3 | Design Circular Queue | [LC 622](https://leetcode.com/problems/design-circular-queue/) | 🟡 Medium |
| 4 | Sliding Window Maximum | [LC 239](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 Hard |
| 5 | Task Scheduler | [LC 621](https://leetcode.com/problems/task-scheduler/) | 🟡 Medium |
| 6 | Find Median from Data Stream | [LC 295](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 Hard |
| 7 | Top K Frequent Elements | [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Monotonic Queue (Sliding Window Maximum)</b></summary>

The classic ""deque as a monotonic queue"" pattern keeps elements in decreasing order so the maximum is always at the front:

`csharp
// Monotonic decreasing deque
public class MonotonicQueue
{
    private readonly LinkedList<int> _deque = new();

    public void Push(int val)
    {
        while (_deque.Count > 0 && _deque.Last.Value < val)
            _deque.RemoveLast();
        _deque.AddLast(val);
    }

    public void Pop(int val)
    {
        if (_deque.Count > 0 && _deque.First.Value == val)
            _deque.RemoveFirst();
    }

    public int Max() => _deque.First.Value;
}
`

This is the foundation for solving all sliding window problems in O(n).
</details>

<details>
<summary><b>👨‍💻 Two-Stacks Queue (Interview Classic)</b></summary>

Interviewers love asking this — implement a queue using two stacks:

`csharp
public class TwoStackQueue<T>
{
    private readonly Stack<T> _inbox = new();
    private readonly Stack<T> _outbox = new();

    public void Enqueue(T item) => _inbox.Push(item);

    public T Dequeue()
    {
        if (_outbox.Count == 0)
        {
            while (_inbox.Count > 0)
                _outbox.Push(_inbox.Pop());
        }
        return _outbox.Pop();
    }

    public T Peek()
    {
        if (_outbox.Count == 0)
        {
            while (_inbox.Count > 0)
                _outbox.Push(_inbox.Pop());
        }
        return _outbox.Peek();
    }
}
`

**Amortized analysis:** Each element is pushed at most twice (once in inbox, once in outbox) and popped at most twice — so each operation is O(1) amortized.
</details>

### Variations
- **Circular queue** — fixed-size buffer with wrap-around
- **Priority queue** — binary heap (min or max)
- **Deque** — double-ended; stack + queue in one
- **Blocking queue** — thread-safe, waits when empty/full
- **Concurrent queue** — lock-free queue (Michael-Scott)
- **Delay queue** — elements available after a delay

### ELI5 🧒
> A queue is like a line at the ice cream truck. The first kid to get in line is the first kid to get ice cream. New kids join at the very end. That is FIFO — First In, First Out!

---

## 7. Trees

### What It Is
A **hierarchical** data structure consisting of **nodes** connected by **edges**. Each tree has a **root** node, and every node (except the root) has exactly one parent. Nodes with no children are **leaves**.

### Real-World Analogy
A company org chart. The CEO (root) has VPs (children), who have directors, who have managers, who have ICs. Every person reports to exactly one boss.

### Internal Working

**Binary Tree:** Each node has at most 2 children (left, right).

**Traversal methods:**
- **Inorder** (Left → Root → Right): visits in sorted order on BST
- **Preorder** (Root → Left → Right): used for tree serialization/copy
- **Postorder** (Left → Right → Root): used for tree deletion, expression evaluation
- **Level order** (BFS): breadth-first, uses a queue

**Segment Tree:** A full binary tree used for range queries (sum, min, max, gcd) over an array. Each leaf represents an array element; each internal node represents the result of an operation over its segment. Query: O(log n). Update: O(log n). Built in O(n).

**Fenwick Tree (Binary Indexed Tree):** A tree represented as an array (1-indexed) where index \i\ stores the sum of a range of elements. Uses the bitwise \i & -i\ (LSB) trick for traversal. Simpler than segment tree but only works for **prefix operations** (sum, xor). O(log n) query and update. Less memory than segment tree.

### When to Use
- Representing hierarchical relationships (file system, DOM, org chart)
- Efficient searching (BST, segment tree)
- Range queries over mutable arrays (segment tree, Fenwick)
- Parsing expressions (expression trees, AST)
- Compression (Huffman coding)

### When NOT to Use
- Simple linear data (use array or list)
- Unstructured relationships (use graph)
- When you only need key-value lookups (use hash map)

### Time Complexity Table

| Operation | Binary Tree (balanced) | BST (balanced) | Segment Tree | Fenwick Tree |
|-----------|----------------------|---------------|-------------|-------------|
| Search | O(n) | O(log n) | — | — |
| Insert | O(n) | O(log n) | O(log n) | — |
| Delete | O(n) | O(log n) | — | — |
| Range Query | O(n) | O(n) | O(log n) | O(log n) |
| Point Update | O(1)* | O(log n) | O(log n) | O(log n) |

> \\* If you have a direct reference to the node.

### Space Complexity
**O(n)** for all tree variants.

### C# Example

`csharp
public class BinaryTreeNode
{
    public int Value { get; set; }
    public BinaryTreeNode Left { get; set; }
    public BinaryTreeNode Right { get; set; }
    public BinaryTreeNode(int val) => Value = val;
}

public static class TreeExamples
{
    // Binary tree traversals
    public static void Inorder(BinaryTreeNode node, List<int> result)
    {
        if (node == null) return;
        Inorder(node.Left, result);
        result.Add(node.Value);
        Inorder(node.Right, result);
    }

    public static void Preorder(BinaryTreeNode node, List<int> result)
    {
        if (node == null) return;
        result.Add(node.Value);
        Preorder(node.Left, result);
        Preorder(node.Right, result);
    }

    public static void Postorder(BinaryTreeNode node, List<int> result)
    {
        if (node == null) return;
        Postorder(node.Left, result);
        Postorder(node.Right, result);
        result.Add(node.Value);
    }

    // Level-order traversal (BFS)
    public static List<List<int>> LevelOrder(BinaryTreeNode root)
    {
        var result = new List<List<int>>();
        if (root == null) return result;

        var q = new Queue<BinaryTreeNode>();
        q.Enqueue(root);

        while (q.Count > 0)
        {
            int levelSize = q.Count;
            var level = new List<int>();
            for (int i = 0; i < levelSize; i++)
            {
                var node = q.Dequeue();
                level.Add(node.Value);
                if (node.Left != null) q.Enqueue(node.Left);
                if (node.Right != null) q.Enqueue(node.Right);
            }
            result.Add(level);
        }
        return result;
    }

    // Morris Inorder Traversal (O(1) space, no recursion/stack)
    public static List<int> MorrisInorder(BinaryTreeNode root)
    {
        var result = new List<int>();
        var current = root;

        while (current != null)
        {
            if (current.Left == null)
            {
                result.Add(current.Value);
                current = current.Right;
            }
            else
            {
                // Find inorder predecessor
                var pred = current.Left;
                while (pred.Right != null && pred.Right != current)
                    pred = pred.Right;

                if (pred.Right == null)
                {
                    pred.Right = current; // Create threaded link
                    current = current.Left;
                }
                else
                {
                    pred.Right = null; // Restore tree
                    result.Add(current.Value);
                    current = current.Right;
                }
            }
        }
        return result;
    }

    // Maximum depth of binary tree
    public static int MaxDepth(BinaryTreeNode root)
    {
        if (root == null) return 0;
        return 1 + Math.Max(MaxDepth(root.Left), MaxDepth(root.Right));
    }

    // Diameter of binary tree
    public static int Diameter(BinaryTreeNode root)
    {
        int diameter = 0;
        int Height(BinaryTreeNode node)
        {
            if (node == null) return 0;
            int left = Height(node.Left);
            int right = Height(node.Right);
            diameter = Math.Max(diameter, left + right);
            return 1 + Math.Max(left, right);
        }
        Height(root);
        return diameter;
    }

    // Check if two trees are identical
    public static bool IsSameTree(BinaryTreeNode p, BinaryTreeNode q)
    {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        return p.Value == q.Value
            && IsSameTree(p.Left, q.Left)
            && IsSameTree(p.Right, q.Right);
    }

    // Build tree from inorder and preorder
    public static BinaryTreeNode BuildTree(int[] preorder, int[] inorder)
    {
        var map = new Dictionary<int, int>();
        for (int i = 0; i < inorder.Length; i++)
            map[inorder[i]] = i;

        return Build(preorder, 0, preorder.Length - 1,
                     inorder, 0, inorder.Length - 1, map);
    }

    private static BinaryTreeNode Build(int[] pre, int preL, int preR,
                                        int[] inO, int inL, int inR,
                                        Dictionary<int, int> map)
    {
        if (preL > preR || inL > inR) return null;
        var root = new BinaryTreeNode(pre[preL]);
        int rootIdx = map[root.Value];
        int leftSize = rootIdx - inL;

        root.Left = Build(pre, preL + 1, preL + leftSize,
                          inO, inL, rootIdx - 1, map);
        root.Right = Build(pre, preL + leftSize + 1, preR,
                           inO, rootIdx + 1, inR, map);
        return root;
    }
}

// ---------- Segment Tree ----------
public class SegmentTree
{
    private readonly int[] _tree;
    private readonly int _n;

    public SegmentTree(int[] arr)
    {
        _n = arr.Length;
        _tree = new int[4 * _n];
        Build(arr, 1, 0, _n - 1);
    }

    private void Build(int[] arr, int node, int l, int r)
    {
        if (l == r) { _tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        Build(arr, node * 2, l, mid);
        Build(arr, node * 2 + 1, mid + 1, r);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1]; // sum
    }

    public int Query(int ql, int qr) =>
        Query(1, 0, _n - 1, ql, qr);

    private int Query(int node, int l, int r, int ql, int qr)
    {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return _tree[node];
        int mid = l + (r - l) / 2;
        return Query(node * 2, l, mid, ql, qr)
             + Query(node * 2 + 1, mid + 1, r, ql, qr);
    }

    public void Update(int idx, int val) =>
        Update(1, 0, _n - 1, idx, val);

    private void Update(int node, int l, int r, int idx, int val)
    {
        if (l == r) { _tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid)
            Update(node * 2, l, mid, idx, val);
        else
            Update(node * 2 + 1, mid + 1, r, idx, val);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1];
    }
}

// ---------- Fenwick Tree (BIT) ----------
public class FenwickTree
{
    private readonly int[] _tree;

    public FenwickTree(int n)
    {
        _tree = new int[n + 1]; // 1-indexed internally
    }

    public void Add(int i, int delta)
    {
        i++; // Convert to 1-indexed
        while (i < _tree.Length)
        {
            _tree[i] += delta;
            i += i & -i; // Add LSB
        }
    }

    public int Sum(int i)
    {
        int sum = 0;
        while (i > 0)
        {
            sum += _tree[i];
            i -= i & -i; // Remove LSB
        }
        return sum;
    }

    public int RangeSum(int l, int r) =>
        Sum(r + 1) - Sum(l);
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Maximum Depth of Binary Tree | [LC 104](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 🟢 Easy |
| 2 | Binary Tree Level Order Traversal | [LC 102](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 Medium |
| 3 | Diameter of Binary Tree | [LC 543](https://leetcode.com/problems/diameter-of-binary-tree/) | 🟢 Easy |
| 4 | Construct Binary Tree from Preorder and Inorder | [LC 105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 🟡 Medium |
| 5 | Serialize and Deserialize Binary Tree | [LC 297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | 🔴 Hard |
| 6 | Lowest Common Ancestor | [LC 236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 Medium |
| 7 | Binary Tree Maximum Path Sum | [LC 124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 Hard |
| 8 | Range Sum Query - Mutable (Segment Tree) | [LC 307](https://leetcode.com/problems/range-sum-query-mutable/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Morris Traversal — O(1) Space Tree Traversal</b></summary>

Morris traversal uses **threaded binary tree** concepts to traverse without recursion or stack:

`csharp
// Morris Preorder
public static List<int> MorrisPreorder(BinaryTreeNode root)
{
    var result = new List<int>();
    var current = root;

    while (current != null)
    {
        if (current.Left == null)
        {
            result.Add(current.Value);
            current = current.Right;
        }
        else
        {
            var pred = current.Left;
            while (pred.Right != null && pred.Right != current)
                pred = pred.Right;

            if (pred.Right == null)
            {
                result.Add(current.Value); // Visit before going left (preorder)
                pred.Right = current;
                current = current.Left;
            }
            else
            {
                pred.Right = null;
                current = current.Right;
            }
        }
    }
    return result;
}
`

**Key insight:** Instead of a stack, we temporarily link the predecessor's right pointer to the current node, allowing us to return after processing the left subtree.
</details>

<details>
<summary><b>👨‍💻 Serialize/Deserialize Binary Tree (Interview Essential)</b></summary>

`csharp
public class Codec
{
    // Encodes a tree to a single string.
    public string Serialize(BinaryTreeNode root)
    {
        var sb = new StringBuilder();
        void Dfs(BinaryTreeNode node)
        {
            if (node == null) { sb.Append(""null,""); return; }
            sb.Append(node.Value).Append(',');
            Dfs(node.Left);
            Dfs(node.Right);
        }
        Dfs(root);
        return sb.ToString();
    }

    // Decodes your encoded data to tree.
    public BinaryTreeNode Deserialize(string data)
    {
        var q = new Queue<string>(data.Split(',', StringSplitOptions.RemoveEmptyEntries));
        BinaryTreeNode Dfs()
        {
            var val = q.Dequeue();
            if (val == ""null"") return null;
            var node = new BinaryTreeNode(int.Parse(val));
            node.Left = Dfs();
            node.Right = Dfs();
            return node;
        }
        return Dfs();
    }
}
`
</details>

### Variations
- **Binary tree** — 0-2 children per node
- **N-ary tree** — any number of children (file system)
- **Segment tree** — range queries on arrays [see above]
- **Fenwick tree / BIT** — prefix sum queries [see above]
- **Quad-tree** — 2D spatial partitioning (4 children)
- **Octree** — 3D spatial partitioning (8 children)
- **Suffix tree** — compressed trie for string pattern matching
- **Splay tree** — self-adjusting BST with amortized O(log n)
- **Treap** — tree + heap (randomized BST)

### ELI5 🧒
> A tree is like a family tree. You have grandparents at the top (root), their children, and their children's children. To find your cousin, you start at the top and go down through the right branches. A segment tree is like a tournament bracket where the winner of each match knows the total score of all players under them.

---

## 8. Binary Search Trees

### What It Is
A binary tree where every node follows the **BST property:** all values in the **left subtree** < node value < all values in the **right subtree**.

### Real-World Analogy
A well-organized phone book. To find ""Smith,"" you open to the middle. If ""Smith"" comes after, you search the right half; before → left half. Repeat until found.

### Internal Working
- **Search:** Compare target with root. If smaller, go left; if larger, go right. Recurse until found or null.
- **Insert:** Search for the value. When you hit null, insert there.
- **Delete (3 cases):**
  1. Leaf — just remove it.
  2. One child — replace node with its child.
  3. Two children — find **inorder successor** (smallest in right subtree), copy its value, delete the successor.
- **Successor/Predecessor:** Inorder successor = smallest node in right subtree. Predecessor = largest node in left subtree.

**Balancing concerns:** A simple BST can degenerate to O(n) if inserts are sorted. Hence **self-balancing BSTs**:
- **AVL Tree:** Strict O(log n) height. After insert/delete, check 4 imbalance cases (LL, LR, RL, RR) and perform rotations. Stores balance factor (-1, 0, +1) at each node.
- **Red-Black Tree:** More relaxed than AVL. 5 properties ensure O(log n). Used in C#'s \SortedDictionary\ and \SortedSet\. Faster inserts/deletes than AVL (fewer rotations), but slightly slower lookups.

### When to Use
- Maintaining a sorted set with insert/delete/search
- Finding floor/ceiling (nearest smaller/larger)
- Range queries (""all values between X and Y"")
- Implementing priority queues with additional operations

### When NOT to Use
- Simple lookup by key (hash table is O(1))
- Data is mostly static (sorted array + binary search is O(log n) with less overhead)
- Insertions are random and order does not matter

### Time Complexity Table

| Operation | BST (avg) | BST (worst) | AVL | Red-Black |
|-----------|----------|-------------|-----|-----------|
| Search | O(log n) | O(n) | O(log n) | O(log n) |
| Insert | O(log n) | O(n) | O(log n) | O(log n) |
| Delete | O(log n) | O(n) | O(log n) | O(log n) |
| Min/Max | O(log n) | O(n) | O(log n) | O(log n) |
| Successor | O(log n) | O(n) | O(log n) | O(log n) |
| Range Query | O(k + log n) | O(k + n) | O(k + log n) | O(k + log n) |

### Space Complexity
**O(n)**

### C# Example

`csharp
public class BstNode
{
    public int Value { get; set; }
    public BstNode Left { get; set; }
    public BstNode Right { get; set; }
    public BstNode(int val) => Value = val;
}

public class BinarySearchTree
{
    public BstNode Root { get; private set; }

    // Insert
    public void Insert(int val)
    {
        Root = Insert(Root, val);
    }

    private BstNode Insert(BstNode node, int val)
    {
        if (node == null) return new BstNode(val);
        if (val < node.Value)
            node.Left = Insert(node.Left, val);
        else if (val > node.Value)
            node.Right = Insert(node.Right, val);
        return node;
    }

    // Search
    public bool Contains(int val)
    {
        var current = Root;
        while (current != null)
        {
            if (val == current.Value) return true;
            if (val < current.Value) current = current.Left;
            else current = current.Right;
        }
        return false;
    }

    // Delete
    public void Delete(int val)
    {
        Root = Delete(Root, val);
    }

    private BstNode Delete(BstNode node, int val)
    {
        if (node == null) return null;
        if (val < node.Value)
            node.Left = Delete(node.Left, val);
        else if (val > node.Value)
            node.Right = Delete(node.Right, val);
        else
        {
            if (node.Left == null && node.Right == null) return null;
            if (node.Left == null) return node.Right;
            if (node.Right == null) return node.Left;
            var successor = FindMin(node.Right);
            node.Value = successor.Value;
            node.Right = Delete(node.Right, successor.Value);
        }
        return node;
    }

    public int FindMin()
    {
        if (Root == null) throw new InvalidOperationException(""Tree empty"");
        return FindMin(Root).Value;
    }

    private BstNode FindMin(BstNode node)
    {
        while (node.Left != null) node = node.Left;
        return node;
    }

    public int FindMax()
    {
        if (Root == null) throw new InvalidOperationException(""Tree empty"");
        var current = Root;
        while (current.Right != null) current = current.Right;
        return current.Value;
    }

    public int? Successor(int val)
    {
        BstNode successor = null;
        var current = Root;
        while (current != null)
        {
            if (val < current.Value)
            {
                successor = current;
                current = current.Left;
            }
            else
                current = current.Right;
        }
        return successor?.Value;
    }

    public bool IsValidBst() =>
        IsValidBst(Root, int.MinValue, int.MaxValue);

    private bool IsValidBst(BstNode node, int min, int max)
    {
        if (node == null) return true;
        if (node.Value <= min || node.Value >= max) return false;
        return IsValidBst(node.Left, min, node.Value)
            && IsValidBst(node.Right, node.Value, max);
    }

    public void BuildFromSorted(int[] sorted)
    {
        Root = BuildFromSorted(sorted, 0, sorted.Length - 1);
    }

    private BstNode BuildFromSorted(int[] arr, int l, int r)
    {
        if (l > r) return null;
        int mid = l + (r - l) / 2;
        var node = new BstNode(arr[mid]);
        node.Left = BuildFromSorted(arr, l, mid - 1);
        node.Right = BuildFromSorted(arr, mid + 1, r);
        return node;
    }

    public List<int> RangeQuery(int lo, int hi)
    {
        var result = new List<int>();
        RangeQuery(Root, lo, hi, result);
        return result;
    }

    private void RangeQuery(BstNode node, int lo, int hi, List<int> result)
    {
        if (node == null) return;
        if (node.Value > lo) RangeQuery(node.Left, lo, hi, result);
        if (node.Value >= lo && node.Value <= hi) result.Add(node.Value);
        if (node.Value < hi) RangeQuery(node.Right, lo, hi, result);
    }
}

// ---------- AVL Tree ----------
public class AvlNode
{
    public int Value { get; set; }
    public AvlNode Left { get; set; }
    public AvlNode Right { get; set; }
    public int Height { get; set; } = 1;
    public AvlNode(int val) => Value = val;
}

public class AvlTree
{
    public AvlNode Root { get; private set; }

    private int Height(AvlNode n) => n?.Height ?? 0;
    private int BalanceFactor(AvlNode n) => Height(n.Left) - Height(n.Right);

    private AvlNode RotateRight(AvlNode y)
    {
        var x = y.Left;
        var t2 = x.Right;
        x.Right = y;
        y.Left = t2;
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        return x;
    }

    private AvlNode RotateLeft(AvlNode x)
    {
        var y = x.Right;
        var t2 = y.Left;
        y.Left = x;
        x.Right = t2;
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        return y;
    }

    public void Insert(int val) => Root = Insert(Root, val);

    private AvlNode Insert(AvlNode node, int val)
    {
        if (node == null) return new AvlNode(val);
        if (val < node.Value) node.Left = Insert(node.Left, val);
        else if (val > node.Value) node.Right = Insert(node.Right, val);
        else return node;

        node.Height = 1 + Math.Max(Height(node.Left), Height(node.Right));
        int bf = BalanceFactor(node);

        if (bf > 1 && val < node.Left.Value) return RotateRight(node);
        if (bf < -1 && val > node.Right.Value) return RotateLeft(node);
        if (bf > 1 && val > node.Left.Value)
        {
            node.Left = RotateLeft(node.Left);
            return RotateRight(node);
        }
        if (bf < -1 && val < node.Right.Value)
        {
            node.Right = RotateRight(node.Right);
            return RotateLeft(node);
        }
        return node;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Validate Binary Search Tree | [LC 98](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 Medium |
| 2 | Convert Sorted Array to BST | [LC 108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | 🟢 Easy |
| 3 | Kth Smallest Element in BST | [LC 230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | 🟡 Medium |
| 4 | Lowest Common Ancestor of BST | [LC 235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | 🟡 Medium |
| 5 | Binary Search Tree Iterator | [LC 173](https://leetcode.com/problems/binary-search-tree-iterator/) | 🟡 Medium |
| 6 | Serialize and Deserialize BST | [LC 449](https://leetcode.com/problems/serialize-and-deserialize-bst/) | 🟡 Medium |
| 7 | Contains Duplicate III | [LC 220](https://leetcode.com/problems/contains-duplicate-iii/) | 🔴 Hard |
| 8 | Delete Node in a BST | [LC 450](https://leetcode.com/problems/delete-node-in-a-bst/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Red-Black Tree in Action (C# SortedDictionary)</b></summary>

C#'s \SortedDictionary<K, V>\ is a Red-Black tree. Key interview points:

`csharp
var dict = new SortedDictionary<int, string>();
dict.Add(3, ""three"");
dict.Add(1, ""one"");
dict.Add(2, ""two"");

foreach (var kvp in dict)
    Console.WriteLine($""{kvp.Key}: {kvp.Value}"");
`

**Red-Black Tree 5 properties:**
1. Every node is red or black
2. Root is always black
3. Nil leaves are black
4. Red nodes have black children (no red-red)
5. Every path from root to leaf has the same number of black nodes

**vs AVL:** Red-Black's O(1) amortized rotations per insert/delete make it better for write-heavy workloads. AVL's stricter balance makes it better for read-heavy.
</details>

<details>
<summary><b>👨‍💻 BST Iterator (Inorder traversal without extra space)</b></summary>

`csharp
public class BstIterator
{
    private readonly Stack<BstNode> _stack = new();

    public BstIterator(BstNode root)
    {
        PushAllLeft(root);
    }

    public int Next()
    {
        var node = _stack.Pop();
        PushAllLeft(node.Right);
        return node.Value;
    }

    public bool HasNext => _stack.Count > 0;

    private void PushAllLeft(BstNode node)
    {
        while (node != null)
        {
            _stack.Push(node);
            node = node.Left;
        }
    }
}
`
</details>

### Variations
- **AVL Tree** — strict balancing
- **Red-Black Tree** — relaxed balancing
- **Splay Tree** — self-adjusting, most recently accessed near root
- **Treap** — BST + heap, randomized priority
- **B-Tree / B+ Tree** — multi-way, used in databases and file systems
- **Trie** — tree of string prefixes [see section 11]
- **KD-Tree** — multi-dimensional spatial indexing

### ELI5 🧒
> A BST is like a ""guess the number"" game where you always cut the remaining range in half. ""Is your number bigger than 50?"" — ""Yes"" — then you know it is between 50-100. Next: ""Bigger than 75?"" and so on until you find it. This is why it takes only about 30 guesses to find any number between 1 and a billion!

---

## 9. Heaps

### What It Is
A **complete binary tree** where every node follows the **heap property:**
- **Max-Heap:** Parent ≥ Children (largest element at root)
- **Min-Heap:** Parent ≤ Children (smallest element at root)

Typically implemented as an **array** where for index \i\:
- Left child: \2i + 1\
- Right child: \2i + 2\
- Parent: \(i - 1) / 2\

### Real-World Analogy
A priority line at an emergency room. The most critical patient (highest priority) is treated first, regardless of when they arrived.

### Internal Working
**Core operations (Min-Heap):**
- **Insert:** Add at end, **bubble up** (swap with parent while property violated). O(log n).
- **ExtractMin:** Remove root, move last element to root, **bubble down** (swap with smaller child while property violated). O(log n).
- **Peek:** Return root. O(1).
- **Heapify:** Build a heap from an arbitrary array in O(n) by bubbling down from the last parent.

**Key insight:** \Heapify\ is O(n), not O(n log n), because most nodes are near the bottom and require fewer swaps.

**Heap Sort:**
1. Heapify the array (build max-heap) — O(n)
2. Repeatedly extract the root and swap with the last element — O(n log n)
3. Total: O(n log n), O(1) extra space (in-place)

### When to Use
- Finding the min/max element repeatedly
- Priority queue implementations
- Median from a data stream (two heaps: min-heap + max-heap)
- K smallest/largest elements (Top-K problems)
- Merge K sorted arrays/lists
- Dijkstra's algorithm (priority queue)

### When NOT to Use
- All elements need to be ordered (use sorting or BST)
- You need arbitrary element lookup (use hash map)
- You need efficient range queries

### Time Complexity Table

| Operation | Binary Heap | Fibonacci Heap |
|-----------|-------------|----------------|
| Insert | O(log n) | O(1) |
| Extract Min/Max | O(log n) | O(log n) amortized |
| Peek | O(1) | O(1) |
| Heapify (build) | O(n) | O(n) |
| Decrease Key | O(log n) | O(1) amortized |
| Delete | O(log n) | O(log n) amortized |
| Merge | O(n) | O(1) |

### Space Complexity
**O(n)**

### C# Example

`csharp
public class MinHeap
{
    private readonly List<int> _data = new();
    public int Count => _data.Count;

    public void Insert(int val)
    {
        _data.Add(val);
        BubbleUp(_data.Count - 1);
    }

    public int ExtractMin()
    {
        if (_data.Count == 0) throw new InvalidOperationException(""Heap empty"");
        int min = _data[0];
        _data[0] = _data[^1];
        _data.RemoveAt(_data.Count - 1);
        if (_data.Count > 0) BubbleDown(0);
        return min;
    }

    public int Peek() =>
        _data.Count > 0 ? _data[0] : throw new InvalidOperationException(""Heap empty"");

    private void BubbleUp(int i)
    {
        while (i > 0)
        {
            int parent = (i - 1) / 2;
            if (_data[parent] <= _data[i]) break;
            (_data[parent], _data[i]) = (_data[i], _data[parent]);
            i = parent;
        }
    }

    private void BubbleDown(int i)
    {
        int n = _data.Count;
        while (true)
        {
            int smallest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            if (left < n && _data[left] < _data[smallest]) smallest = left;
            if (right < n && _data[right] < _data[smallest]) smallest = right;
            if (smallest == i) break;
            (_data[i], _data[smallest]) = (_data[smallest], _data[i]);
            i = smallest;
        }
    }

    public void Heapify(int[] arr)
    {
        _data.Clear();
        _data.AddRange(arr);
        for (int i = _data.Count / 2 - 1; i >= 0; i--)
            BubbleDown(i);
    }
}

public class MaxHeap
{
    private readonly List<int> _data = new();

    public void Insert(int val)
    {
        _data.Add(val);
        BubbleUp(_data.Count - 1);
    }

    public int ExtractMax()
    {
        int max = _data[0];
        _data[0] = _data[^1];
        _data.RemoveAt(_data.Count - 1);
        if (_data.Count > 0) BubbleDown(0);
        return max;
    }

    private void BubbleUp(int i)
    {
        while (i > 0)
        {
            int parent = (i - 1) / 2;
            if (_data[parent] >= _data[i]) break;
            (_data[parent], _data[i]) = (_data[i], _data[parent]);
            i = parent;
        }
    }

    private void BubbleDown(int i)
    {
        int n = _data.Count;
        while (true)
        {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            if (left < n && _data[left] > _data[largest]) largest = left;
            if (right < n && _data[right] > _data[largest]) largest = right;
            if (largest == i) break;
            (_data[i], _data[largest]) = (_data[largest], _data[i]);
            i = largest;
        }
    }
}

// Heap Sort
public static class HeapSortExample
{
    public static void Sort(int[] arr)
    {
        int n = arr.Length;
        for (int i = n / 2 - 1; i >= 0; i--)
            Heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--)
        {
            (arr[0], arr[i]) = (arr[i], arr[0]);
            Heapify(arr, i, 0);
        }
    }

    private static void Heapify(int[] arr, int n, int i)
    {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest != i)
        {
            (arr[i], arr[largest]) = (arr[largest], arr[i]);
            Heapify(arr, n, largest);
        }
    }
}

// Median from Data Stream (Two Heaps)
public class MedianFinder
{
    private readonly MaxHeap _maxHeap = new();
    private readonly MinHeap _minHeap = new();

    public void AddNum(int num)
    {
        if (_maxHeap.Count == 0 || num <= _maxHeap.Peek())
            _maxHeap.Insert(num);
        else
            _minHeap.Insert(num);

        if (_maxHeap.Count > _minHeap.Count + 1)
            _minHeap.Insert(_maxHeap.ExtractMax());
        else if (_minHeap.Count > _maxHeap.Count)
            _maxHeap.Insert(_minHeap.ExtractMin());
    }

    public double FindMedian()
    {
        if (_maxHeap.Count == _minHeap.Count)
            return (_maxHeap.Peek() + _minHeap.Peek()) / 2.0;
        return _maxHeap.Peek();
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Kth Largest Element in an Array | [LC 215](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 Medium |
| 2 | Top K Frequent Elements | [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium |
| 3 | Find Median from Data Stream | [LC 295](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 Hard |
| 4 | Merge K Sorted Lists | [LC 23](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 Hard |
| 5 | Kth Smallest Element in a Sorted Matrix | [LC 378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | 🟡 Medium |
| 6 | Task Scheduler | [LC 621](https://leetcode.com/problems/task-scheduler/) | 🟡 Medium |
| 7 | Sliding Window Median | [LC 480](https://leetcode.com/problems/sliding-window-median/) | 🔴 Hard |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 O(n) build-heap proof (why Heapify is linear)</b></summary>

The number of nodes at height \h\ in a complete binary tree of height \H\ is at most \⌈n / 2^(h+1)⌉\. Each node at height \h\ does at most \H - h\ swaps:

\\\
T(n) = Σ_{h=0}^{H} ⌈n / 2^(h+1)⌉ * (H - h) ≤ n * Σ_{h=0}^{∞} (h+1) / 2^h = O(n)
\\\

**Intuition:** Most nodes are near the bottom and do not travel far.
</details>

<details>
<summary><b>👨‍💻 Generic Priority Queue with Custom Comparer</b></summary>

`csharp
public class PriorityQueue<T>
{
    private readonly List<T> _heap;
    private readonly Comparison<T> _compare;

    public PriorityQueue(Comparison<T> compare)
    {
        _heap = new List<T>();
        _compare = compare;
    }

    public int Count => _heap.Count;

    public void Enqueue(T item)
    {
        _heap.Add(item);
        int i = _heap.Count - 1;
        while (i > 0)
        {
            int p = (i - 1) / 2;
            if (_compare(_heap[p], _heap[i]) <= 0) break;
            (_heap[p], _heap[i]) = (_heap[i], _heap[p]);
            i = p;
        }
    }

    public T Dequeue()
    {
        if (_heap.Count == 0) throw new InvalidOperationException();
        T result = _heap[0];
        _heap[0] = _heap[^1];
        _heap.RemoveAt(_heap.Count - 1);
        int i = 0, n = _heap.Count;
        while (true)
        {
            int smallest = i, l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && _compare(_heap[l], _heap[smallest]) < 0) smallest = l;
            if (r < n && _compare(_heap[r], _heap[smallest]) < 0) smallest = r;
            if (smallest == i) break;
            (_heap[i], _heap[smallest]) = (_heap[smallest], _heap[i]);
            i = smallest;
        }
        return result;
    }
}
`
</details>

### Variations
- **Binary heap** — array-based, most common
- **Fibonacci heap** — O(1) insert/decrease-key, O(log n) extract-min
- **Binomial heap** — collection of binomial trees, O(log n) merge
- **Pairing heap** — simple, competitive in practice
- **Leftist heap** — left-skewed for O(log n) merge
- **d-ary heap** — each node has d children (faster decrease-key, slower extract)

### ELI5 🧒
> A min-heap is like a tournament where the smallest number is the champion. When a new number arrives, it stands at the bottom and challenges the champion's parent. If the new number is smaller, they swap places. The champion always stays at the top! The ""two heaps"" trick for median is like having two buckets — the ""small numbers"" bucket (max-heap) and the ""big numbers"" bucket (min-heap). The median is always on top of one of them.

---

## 10. Graphs

### What It Is
A collection of **vertices (nodes)** connected by **edges**. Can be **directed** or **undirected**, **weighted** or **unweighted**, **cyclic** or **acyclic**.

### Real-World Analogy
A city map. Intersections are vertices, roads are edges. GPS navigation finds the shortest path from your current location to your destination.

### Internal Working

**Representation:**
1. **Adjacency Matrix** — \V × V\ boolean/weight matrix. O(1) edge lookup, O(V²) space. Dense graphs.
2. **Adjacency List** — array of lists: each vertex stores its neighbors. O(V + E) space. Sparse graphs.

**Core Algorithms:**

| Algorithm | Use Case | Time Complexity |
|-----------|----------|----------------|
| **BFS** | Shortest path (unweighted), connected components, levels | O(V + E) |
| **DFS** | Cycle detection, topological sort, connected components, puzzles | O(V + E) |
| **Dijkstra** | Shortest path (non-negative weights) | O((V + E) log V) |
| **Bellman-Ford** | Shortest path (negative weights allowed, detects negative cycles) | O(VE) |
| **Floyd-Warshall** | All-pairs shortest paths | O(V³) |
| **A\\*** | Heuristic-guided shortest path | O(E) typically |
| **Topological Sort** | Dependency ordering (DAG) | O(V + E) |

### When to Use
- Representing relationships (social networks, web pages, roads)
- Pathfinding and shortest routes
- Dependency resolution
- Network flow problems
- State-space search (puzzles, games)

### When NOT to Use
- Simple hierarchical data (use a tree)
- Only pairwise relationships with a small set (use an array)

### Time Complexity Table

| Operation | Adjacency Matrix | Adjacency List |
|-----------|-----------------|----------------|
| Edge lookup | O(1) | O(deg(v)) |
| Add vertex | O(V²) | O(1) |
| Add edge | O(1) | O(1) |
| Remove edge | O(1) | O(deg(v)) |
| Remove vertex | O(V²) | O(V + E) |
| BFS/DFS | O(V²) | O(V + E) |
| Space | O(V²) | O(V + E) |

### Space Complexity
- **Adjacency Matrix:** O(V²)
- **Adjacency List:** O(V + E)

### C# Example

`csharp
public class Graph
{
    private readonly int _vertices;
    private readonly List<(int To, int Weight)>[] _adjList;

    public Graph(int vertices)
    {
        _vertices = vertices;
        _adjList = new List<(int To, int Weight)>[vertices];
        for (int i = 0; i < vertices; i++)
            _adjList[i] = new List<(int, int)>();
    }

    public void AddEdge(int from, int to, int weight = 1)
    {
        _adjList[from].Add((to, weight));
    }

    // BFS (shortest path in unweighted graph)
    public int[] Bfs(int start)
    {
        var dist = new int[_vertices];
        Array.Fill(dist, -1);
        var q = new Queue<int>();
        dist[start] = 0;
        q.Enqueue(start);

        while (q.Count > 0)
        {
            int u = q.Dequeue();
            foreach (var (v, _) in _adjList[u])
            {
                if (dist[v] == -1)
                {
                    dist[v] = dist[u] + 1;
                    q.Enqueue(v);
                }
            }
        }
        return dist;
    }

    // DFS (recursive)
    public void Dfs(int start)
    {
        var visited = new bool[_vertices];
        DfsUtil(start, visited);
    }

    private void DfsUtil(int v, bool[] visited)
    {
        visited[v] = true;
        Console.Write(v + "" "");
        foreach (var (neighbor, _) in _adjList[v])
            if (!visited[neighbor])
                DfsUtil(neighbor, visited);
    }

    // Topological Sort (Kahn's Algorithm)
    public List<int> TopologicalSort()
    {
        var inDegree = new int[_vertices];
        foreach (var list in _adjList)
            foreach (var (v, _) in list)
                inDegree[v]++;

        var q = new Queue<int>();
        for (int i = 0; i < _vertices; i++)
            if (inDegree[i] == 0) q.Enqueue(i);

        var result = new List<int>();
        while (q.Count > 0)
        {
            int u = q.Dequeue();
            result.Add(u);
            foreach (var (v, _) in _adjList[u])
                if (--inDegree[v] == 0)
                    q.Enqueue(v);
        }
        return result.Count == _vertices ? result : null;
    }

    // Dijkstra (shortest path, non-negative weights)
    public int[] Dijkstra(int start)
    {
        var dist = new int[_vertices];
        Array.Fill(dist, int.MaxValue);
        dist[start] = 0;

        var pq = new PriorityQueue<(int Node, int Dist), int>();
        pq.Enqueue((start, 0), 0);

        while (pq.Count > 0)
        {
            var (u, d) = pq.Dequeue();
            if (d > dist[u]) continue;
            foreach (var (v, w) in _adjList[u])
            {
                int newDist = dist[u] + w;
                if (newDist < dist[v])
                {
                    dist[v] = newDist;
                    pq.Enqueue((v, newDist), newDist);
                }
            }
        }
        return dist;
    }

    // Bellman-Ford (handles negative weights)
    public int[] BellmanFord(int start)
    {
        var dist = new int[_vertices];
        Array.Fill(dist, int.MaxValue);
        dist[start] = 0;

        for (int i = 0; i < _vertices - 1; i++)
        {
            for (int u = 0; u < _vertices; u++)
            {
                if (dist[u] == int.MaxValue) continue;
                foreach (var (v, w) in _adjList[u])
                    if (dist[u] + w < dist[v])
                        dist[v] = dist[u] + w;
            }
        }

        for (int u = 0; u < _vertices; u++)
        {
            if (dist[u] == int.MaxValue) continue;
            foreach (var (v, w) in _adjList[u])
                if (dist[u] + w < dist[v])
                    throw new InvalidOperationException(""Graph contains a negative cycle"");
        }
        return dist;
    }

    // Detect Cycle in Directed Graph
    public bool HasCycle()
    {
        var visited = new int[_vertices];
        for (int i = 0; i < _vertices; i++)
            if (HasCycleUtil(i, visited)) return true;
        return false;
    }

    private bool HasCycleUtil(int v, int[] visited)
    {
        if (visited[v] == 1) return true;
        if (visited[v] == 2) return false;
        visited[v] = 1;
        foreach (var (neighbor, _) in _adjList[v])
            if (HasCycleUtil(neighbor, visited)) return true;
        visited[v] = 2;
        return false;
    }

    // Floyd-Warshall (All-Pairs Shortest Path)
    public static int[,] FloydWarshall(int[,] graph)
    {
        int n = graph.GetLength(0);
        var dist = (int[,])graph.Clone();

        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    if (dist[i, k] != int.MaxValue && dist[k, j] != int.MaxValue)
                        dist[i, j] = Math.Min(dist[i, j], dist[i, k] + dist[k, j]);

        return dist;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Number of Islands | [LC 200](https://leetcode.com/problems/number-of-islands/) | 🟡 Medium |
| 2 | Clone Graph | [LC 133](https://leetcode.com/problems/clone-graph/) | 🟡 Medium |
| 3 | Course Schedule (topological sort) | [LC 207](https://leetcode.com/problems/course-schedule/) | 🟡 Medium |
| 4 | Word Ladder | [LC 127](https://leetcode.com/problems/word-ladder/) | 🔴 Hard |
| 5 | Network Delay Time (Dijkstra) | [LC 743](https://leetcode.com/problems/network-delay-time/) | 🟡 Medium |
| 6 | Alien Dictionary | [LC 269](https://leetcode.com/problems/alien-dictionary/) | 🔴 Hard |
| 7 | Pacific Atlantic Water Flow | [LC 417](https://leetcode.com/problems/pacific-atlantic-water-flow/) | 🟡 Medium |
| 8 | Cheapest Flights Within K Stops | [LC 787](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 A* Search Algorithm</b></summary>

A* extends Dijkstra with a heuristic \h(n)\ that estimates the cost from node \
\ to the goal. \(n) = g(n) + h(n)\ where \g(n)\ is the cost from start to \
\.

`csharp
public List<int> AStar(int start, int goal, Func<int, int, int> heuristic)
{
    var openSet = new SortedSet<(int F, int Node)>();
    var gScore = new int[_vertices];
    var cameFrom = new int[_vertices];
    Array.Fill(gScore, int.MaxValue);
    gScore[start] = 0;
    openSet.Add((heuristic(start, goal), start));

    while (openSet.Count > 0)
    {
        var (_, current) = openSet.Min;
        openSet.Remove(openSet.Min);
        if (current == goal) return ReconstructPath(cameFrom, current);

        foreach (var (neighbor, weight) in _adjList[current])
        {
            int tentative = gScore[current] + weight;
            if (tentative < gScore[neighbor])
            {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentative;
                openSet.Add((tentative + heuristic(neighbor, goal), neighbor));
            }
        }
    }
    return null;
}

private List<int> ReconstructPath(int[] cameFrom, int current)
{
    var path = new List<int>();
    while (current != 0) { path.Add(current); current = cameFrom[current]; }
    path.Reverse();
    return path;
}
`

**Admissible heuristic:** Never overestimates the actual cost (e.g., Manhattan distance for grid). With an admissible heuristic, A* guarantees optimal path.
</details>

<details>
<summary><b>👨‍💻 Graph Bipartiteness Check</b></summary>

`csharp
public bool IsBipartite()
{
    var color = new int[_vertices];
    for (int start = 0; start < _vertices; start++)
    {
        if (color[start] != 0) continue;
        color[start] = 1;
        var q = new Queue<int>();
        q.Enqueue(start);
        while (q.Count > 0)
        {
            int u = q.Dequeue();
            foreach (var (v, _) in _adjList[u])
            {
                if (color[v] == 0) { color[v] = -color[u]; q.Enqueue(v); }
                else if (color[v] == color[u]) return false;
            }
        }
    }
    return true;
}
`
</details>

### Variations
- **Directed Acyclic Graph (DAG)** — foundation for topological sort
- **Weighted Graph** — edges have costs
- **Complete Graph** — every vertex connects to every other
- **Bipartite Graph** — two-colorable, no odd cycles
- **Tree** — connected acyclic graph (V - 1 edges)
- **Flow Network** — edges have capacity, used in max-flow
- **Sparse vs Dense** — sparse: E ≈ V, dense: E ≈ V²

### ELI5 🧒
> A graph is like a map of cities (dots) connected by roads (lines). BFS finds the shortest route in terms of number of roads. Dijkstra finds the shortest route when roads have different lengths. If some roads go backwards (negative weight), Bellman-Ford can still find the shortest path — and also tells you if there is a loop that makes the trip infinitely fast!

---

## 11. Tries

### What It Is
A **prefix tree** (also called a **digital tree**) — an N-ary tree where each path from root to leaf represents a string. Each node stores a character (or partial key), and a flag indicating whether the path to this node forms a complete word.

### Real-World Analogy
A phone's contact search. As you type ""Jo,"" it immediately shows ""John,"" ""Joseph,"" ""Joanna"" — all contacts starting with ""Jo."" The trie knows all words that share common prefixes.

### Internal Working
- Each node has a dictionary/hash map of child nodes.
- Each node has a boolean \IsEndOfWord\ flag.
- **Search:** Walk characters one by one through the tree. O(m) where m = word length. Independent of total number of words!
- **Insert:** Walk existing path; create missing nodes; mark end.
- **Prefix matching:** Walk prefix characters, then DFS/collect all words under that node.

### When to Use
- Autocomplete / type-ahead search
- Spell checking and dictionary lookup
- IP routing (longest prefix match)
- Word games (Boggle solver, word squares)

### When NOT to Use
- Small number of strings (hash set is simpler and faster)
- Suffix queries (use a suffix tree or suffix array)
- Strings do not share common prefixes
- Memory is the primary constraint

### Time Complexity Table

| Operation | Trie (m = key length) |
|-----------|----------------------|
| Insert | O(m) |
| Search | O(m) |
| Delete | O(m) |
| Prefix Match | O(m + k) where k = output size |
| Longest Prefix | O(m) |

### Space Complexity
**O(total characters × pointer overhead)**

### C# Example

`csharp
public class TrieNode
{
    public Dictionary<char, TrieNode> Children { get; } = new();
    public bool IsEndOfWord { get; set; }
}

public class Trie
{
    private readonly TrieNode _root = new();

    public void Insert(string word)
    {
        var node = _root;
        foreach (char c in word)
        {
            if (!node.Children.ContainsKey(c))
                node.Children[c] = new TrieNode();
            node = node.Children[c];
        }
        node.IsEndOfWord = true;
    }

    public bool Search(string word)
    {
        var node = FindNode(word);
        return node != null && node.IsEndOfWord;
    }

    public bool StartsWith(string prefix) => FindNode(prefix) != null;

    public List<string> Autocomplete(string prefix)
    {
        var node = FindNode(prefix);
        if (node == null) return new List<string>();
        var results = new List<string>();
        DfsCollect(node, new StringBuilder(prefix), results);
        return results;
    }

    private void DfsCollect(TrieNode node, StringBuilder current, List<string> results)
    {
        if (node.IsEndOfWord) results.Add(current.ToString());
        foreach (var (ch, child) in node.Children)
        {
            current.Append(ch);
            DfsCollect(child, current, results);
            current.Length--;
        }
    }

    public bool Delete(string word) => Delete(_root, word, 0);

    private bool Delete(TrieNode node, string word, int depth)
    {
        if (node == null) return false;
        if (depth == word.Length)
        {
            if (!node.IsEndOfWord) return false;
            node.IsEndOfWord = false;
            return node.Children.Count == 0;
        }
        char c = word[depth];
        if (!node.Children.ContainsKey(c)) return false;
        bool shouldDeleteChild = Delete(node.Children[c], word, depth + 1);
        if (shouldDeleteChild)
        {
            node.Children.Remove(c);
            return node.Children.Count == 0 && !node.IsEndOfWord;
        }
        return false;
    }

    private TrieNode FindNode(string prefix)
    {
        var node = _root;
        foreach (char c in prefix)
            if (!node.Children.TryGetValue(c, out node)) return null;
        return node;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Implement Trie (Prefix Tree) | [LC 208](https://leetcode.com/problems/implement-trie-prefix-tree/) | 🟡 Medium |
| 2 | Word Search II | [LC 212](https://leetcode.com/problems/word-search-ii/) | 🔴 Hard |
| 3 | Replace Words | [LC 648](https://leetcode.com/problems/replace-words/) | 🟡 Medium |
| 4 | Design Add and Search Words Data Structure | [LC 211](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | 🟡 Medium |
| 5 | Longest Word in Dictionary | [LC 720](https://leetcode.com/problems/longest-word-in-dictionary/) | 🟡 Medium |
| 6 | Palindrome Pairs | [LC 336](https://leetcode.com/problems/palindrome-pairs/) | 🔴 Hard |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Wildcard Search ('.' matches any character)</b></summary>

`csharp
public class WildcardTrie
{
    private class Node
    {
        public Node[] Children { get; } = new Node[26];
        public bool IsEnd { get; set; }
    }

    private readonly Node _root = new();

    public void AddWord(string word)
    {
        var node = _root;
        foreach (char c in word)
        {
            int idx = c - 'a';
            node.Children[idx] ??= new Node();
            node = node.Children[idx];
        }
        node.IsEnd = true;
    }

    public bool Search(string word) => Search(_root, word, 0);

    private bool Search(Node node, string word, int i)
    {
        if (node == null) return false;
        if (i == word.Length) return node.IsEnd;
        char c = word[i];
        if (c == '.')
        {
            foreach (var child in node.Children)
                if (Search(child, word, i + 1)) return true;
            return false;
        }
        return Search(node.Children[c - 'a'], word, i + 1);
    }
}
`
</details>

### Variations
- **Standard trie** — per-node character edges
- **Compressed (Radix) trie** — path compression
- **Suffix trie** — trie of all suffixes of a string
- **Suffix array** — sorted array of all suffixes (more compact)
- **Ternary search tree** — each node stores one character, left/equal/right children

### ELI5 🧒
> A trie is like a family tree for words. ""cat"" and ""car"" share the first two letters ""ca"" — so they share the first two branches of the tree. When you type ""ca"" into a search box, the trie immediately knows all words that start with ""ca"" because they are all under that branch. You do not need to search through every word — just follow the branch!

---

## 12. Union-Find

### What It Is
A **Disjoint Set Union (DSU)** data structure that tracks a set of elements partitioned into disjoint (non-overlapping) subsets. Supports:
- **Find:** Determine which subset an element belongs to.
- **Union:** Merge two subsets into one.

### Real-World Analogy
Tracking friend groups at a party. Each person starts in their own group. When two people become friends, their groups merge. ""Find"" answers ""are these two people in the same friend group?""

### Internal Working
**Representation:** A parent array where \parent[i]\ points to the parent of element \i\. The **root** of a set is its representative (parent points to itself).

**Find with Path Compression:** While finding the root, set each visited node's parent directly to the root. Flattens the tree.

**Union by Rank:** Attach the smaller tree under the larger tree's root.

**Time complexity:** **O(α(n))** per operation amortized, where α(n) is the inverse Ackermann function — for all practical n, α(n) ≤ 4. **Effectively O(1).**

### When to Use
- Finding connected components in graphs
- Kruskal's Minimum Spanning Tree (MST) algorithm
- Detecting cycles in undirected graphs
- Percolation problems

### When NOT to Use
- Cycle detection in directed graphs (use DFS with coloring)
- Path queries between specific nodes (use BFS/DFS)
- Dynamic data with splits (union only, never split)

### Time Complexity Table

| Operation | Without Opt. | Path Compress | Union by Rank | Both |
|-----------|-------------|---------------|---------------|------|
| Find | O(n) | O(log n) | O(log n) | O(α(n)) |
| Union | O(n) | O(log n) | O(log n) | O(α(n)) |

### Space Complexity
**O(n)**

### C# Example

`csharp
public class UnionFind
{
    private readonly int[] _parent;
    private readonly int[] _rank;
    public int Components { get; private set; }

    public UnionFind(int n)
    {
        _parent = new int[n];
        _rank = new int[n];
        Components = n;
        for (int i = 0; i < n; i++) _parent[i] = i;
    }

    public int Find(int x)
    {
        if (_parent[x] != x)
            _parent[x] = Find(_parent[x]);
        return _parent[x];
    }

    public bool Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX == rootY) return false;

        if (_rank[rootX] < _rank[rootY])
            _parent[rootX] = rootY;
        else if (_rank[rootX] > _rank[rootY])
            _parent[rootY] = rootX;
        else
        {
            _parent[rootY] = rootX;
            _rank[rootX]++;
        }
        Components--;
        return true;
    }

    public bool Connected(int x, int y) => Find(x) == Find(y);

    public Dictionary<int, List<int>> GetGroups()
    {
        var groups = new Dictionary<int, List<int>>();
        for (int i = 0; i < _parent.Length; i++)
        {
            int root = Find(i);
            if (!groups.ContainsKey(root)) groups[root] = new List<int>();
            groups[root].Add(i);
        }
        return groups;
    }
}

// Kruskal's MST
public class KruskalMst
{
    public struct Edge { public int From, To, Weight; }

    public static List<Edge> FindMst(int vertices, List<Edge> edges)
    {
        edges.Sort((a, b) => a.Weight.CompareTo(b.Weight));
        var uf = new UnionFind(vertices);
        var mst = new List<Edge>();
        foreach (var edge in edges)
            if (uf.Union(edge.From, edge.To)) mst.Add(edge);
        return mst;
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Number of Connected Components | [LC 323](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | 🟡 Medium |
| 2 | Friend Circles | [LC 547](https://leetcode.com/problems/friend-circles/) | 🟡 Medium |
| 3 | Accounts Merge | [LC 721](https://leetcode.com/problems/accounts-merge/) | 🟡 Medium |
| 4 | Redundant Connection | [LC 684](https://leetcode.com/problems/redundant-connection/) | 🟡 Medium |
| 5 | Satisfiability of Equality Equations | [LC 990](https://leetcode.com/problems/satisfiability-of-equality-equations/) | 🟡 Medium |
| 6 | Longest Consecutive Sequence | [LC 128](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Union-Find with Size Tracking</b></summary>

`csharp
public class UnionFindWithSize
{
    private readonly int[] _parent;
    private readonly int[] _size;

    public UnionFindWithSize(int n)
    {
        _parent = new int[n];
        _size = new int[n];
        for (int i = 0; i < n; i++) { _parent[i] = i; _size[i] = 1; }
    }

    public int Find(int x)
    {
        if (_parent[x] != x) _parent[x] = Find(_parent[x]);
        return _parent[x];
    }

    public int Union(int x, int y)
    {
        int rootX = Find(x), rootY = Find(y);
        if (rootX == rootY) return _size[rootX];
        if (_size[rootX] < _size[rootY])
        {
            _parent[rootX] = rootY;
            _size[rootY] += _size[rootX];
            return _size[rootY];
        }
        else
        {
            _parent[rootY] = rootX;
            _size[rootX] += _size[rootY];
            return _size[rootX];
        }
    }

    public int ComponentSize(int x) => _size[Find(x)];
}
`
</details>

### Variations
- **Standard DSU** — find + union with path compression and union by rank
- **Weighted DSU** — also tracks component size
- **Persistent DSU** — supports versioning/rollback
- **Dynamic DSU** — supports adding new elements

### ELI5 🧒
> Union-Find is like having a bunch of kids at a playground. Each kid starts alone (""I am my own best friend""). When two kids become friends, their groups merge. To find out if two kids are in the same friend group, you ask ""who is the boss of your group?"" — and path compression means after asking once, every kid directly remembers the boss so next time it is super fast!

---

## 13. Segment Trees

### What It Is
A **binary tree** used for storing information about intervals (segments) of an array. Each node represents a segment \[l, r]\ and stores an aggregate value (sum, min, max, gcd) for that segment. Supports **range queries** and **point updates** in O(log n).

### Real-World Analogy
A tournament bracket where each parent knows the total score of all players in their subtree. When a player's score changes, you only need to update the path from that leaf to the root.

### Internal Working
- **Structure:** A full binary tree (usually stored as array, size 4n).
- **Building:** Recursively compute children's aggregates into parent. O(n).
- **Query:** Traverse the tree; if a node's segment is fully within the query range, return its value. O(log n).
- **Point Update:** Update leaf, then recompute all ancestors up the path. O(log n).

**Lazy Propagation:** For range updates (add X to all elements in [L, R]), we defer updates using a ""lazy"" array. O(log n) for range updates.

### When to Use
- Range sum/min/max/gcd queries with point or range updates
- Problems where array values change over time
- Counting inversions

### When NOT to Use
- Static array (use prefix sums for O(1) range sum)
- Only need prefix sums (use Fenwick tree — simpler, less memory)

### Time Complexity Table

| Operation | Segment Tree (standard) | Segment Tree (lazy) |
|-----------|----------------------|-------------------|
| Build | O(n) | O(n) |
| Range Query | O(log n) | O(log n) |
| Point Update | O(log n) | O(log n) |
| Range Update | O(n) naive | O(log n) with lazy |
| Space | O(4n) | O(4n) × 2 |

### Space Complexity
**O(4n)** for the tree array.

### C# Example

`csharp
public class SegmentTree
{
    private readonly int[] _tree;
    private readonly int _n;

    public SegmentTree(int[] arr)
    {
        _n = arr.Length;
        _tree = new int[4 * _n];
        Build(arr, 1, 0, _n - 1);
    }

    private void Build(int[] arr, int node, int l, int r)
    {
        if (l == r) { _tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        Build(arr, node * 2, l, mid);
        Build(arr, node * 2 + 1, mid + 1, r);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1];
    }

    public int Query(int ql, int qr) => Query(1, 0, _n - 1, ql, qr);

    private int Query(int node, int l, int r, int ql, int qr)
    {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return _tree[node];
        int mid = l + (r - l) / 2;
        return Query(node * 2, l, mid, ql, qr)
             + Query(node * 2 + 1, mid + 1, r, ql, qr);
    }

    public void Update(int idx, int val) => Update(1, 0, _n - 1, idx, val);

    private void Update(int node, int l, int r, int idx, int val)
    {
        if (l == r) { _tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid) Update(node * 2, l, mid, idx, val);
        else Update(node * 2 + 1, mid + 1, r, idx, val);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1];
    }
}
`

### Common Interview Questions

| # | Question | LeetCode | Difficulty |
|---|----------|----------|-----------|
| 1 | Range Sum Query - Mutable | [LC 307](https://leetcode.com/problems/range-sum-query-mutable/) | 🟡 Medium |
| 2 | Range Sum Query 2D - Mutable | [LC 308](https://leetcode.com/problems/range-sum-query-2d-mutable/) | 🔴 Hard |
| 3 | Count of Smaller Numbers After Self | [LC 315](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | 🔴 Hard |
| 4 | The Skyline Problem | [LC 218](https://leetcode.com/problems/the-skyline-problem/) | 🔴 Hard |
| 5 | My Calendar I | [LC 729](https://leetcode.com/problems/my-calendar-i/) | 🟡 Medium |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Lazy Propagation (Range Updates)</b></summary>

`csharp
public class LazySegmentTree
{
    private readonly int[] _tree;
    private readonly int[] _lazy;
    private readonly int _n;

    public LazySegmentTree(int[] arr)
    {
        _n = arr.Length;
        _tree = new int[4 * _n];
        _lazy = new int[4 * _n];
        Build(arr, 1, 0, _n - 1);
    }

    private void Build(int[] arr, int node, int l, int r)
    {
        if (l == r) { _tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        Build(arr, node * 2, l, mid);
        Build(arr, node * 2 + 1, mid + 1, r);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1];
    }

    private void Push(int node, int l, int r)
    {
        if (_lazy[node] != 0)
        {
            _tree[node] += (r - l + 1) * _lazy[node];
            if (l != r)
            {
                _lazy[node * 2] += _lazy[node];
                _lazy[node * 2 + 1] += _lazy[node];
            }
            _lazy[node] = 0;
        }
    }

    public void RangeUpdate(int ql, int qr, int delta) =>
        RangeUpdate(1, 0, _n - 1, ql, qr, delta);

    private void RangeUpdate(int node, int l, int r, int ql, int qr, int delta)
    {
        Push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr)
        {
            _lazy[node] += delta;
            Push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        RangeUpdate(node * 2, l, mid, ql, qr, delta);
        RangeUpdate(node * 2 + 1, mid + 1, r, ql, qr, delta);
        _tree[node] = _tree[node * 2] + _tree[node * 2 + 1];
    }

    public int Query(int ql, int qr) => Query(1, 0, _n - 1, ql, qr);

    private int Query(int node, int l, int r, int ql, int qr)
    {
        Push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return _tree[node];
        int mid = l + (r - l) / 2;
        return Query(node * 2, l, mid, ql, qr)
             + Query(node * 2 + 1, mid + 1, r, ql, qr);
    }
}
`
</details>

### Variations
- **Segment Tree (Point Update / Range Query)** — standard version
- **Segment Tree with Lazy Propagation** — efficient range updates
- **2D Segment Tree** — range queries on 2D matrices
- **Persistent Segment Tree** — supports versioning/historical queries
- **Fenwick Tree (BIT)** — simpler alternative for prefix queries

### ELI5 🧒
> A segment tree is like a tournament bracket where each match result shows the total score of all players in that part of the bracket. If you want to know the total score of players 5-10, you combine the brackets that cover exactly those players — no need to add up each player individually. When a player's score changes, you only update the brackets on their path to the top.

---

## 14. Bloom Filters

### What It Is
A **probabilistic** data structure that tests whether an element is **definitely not** in a set or **probably** in a set. Uses multiple hash functions and a bit array.

### Real-World Analogy
A bouncer at a club with a list of banned people. The bouncer has a bad memory (he only remembers approximate faces). He might mistakenly think a good person is banned (false positive), but he never lets a truly banned person in (no false negatives).

### Internal Working
- Create a bit array of size \m\, all zeros.
- Use \k\ independent hash functions.
- **Add:** Compute all \k\ hash values \h1(x), h2(x), ..., hk(x)\, set those bit positions to 1.
- **Check:** Compute all \k\ hash values; if **any** bit is 0, element is **definitely not** in set. If **all** bits are 1, element is **probably** in set.

**False positive probability:** \(1 - (1 - 1/m)^(kn))^k ≈ (1 - e^(-kn/m))^k\

**Optimal k:** \k = (m/n) * ln(2)\ ≈ 0.7 × (m/n)

For 1% false positive rate: need ~9.6 bits per element (m/n ≈ 9.6) and k ≈ 7 hash functions.

**Cannot delete** unless using Counting Bloom Filter (stores counters instead of bits).

### When to Use
- Caching (avoid cache misses for definitely-absent keys)
- Spell checkers (quickly eliminate definitely wrong words)
- Web crawlers (avoid revisiting URLs)
- Databases (Bloom filters in LSM trees — LevelDB, RocksDB, Cassandra)
- Medium deduplication
- Password checkers (""this password has been pwned"")

### When NOT to Use
- When you need exact answers (use hash set)
- When deletions are required (use counting Bloom filter)
- When false positives are unacceptable
- When you have very few elements (hash set is simpler)
- When element count \
\ is known to be large but no space trade-off

### Time Complexity Table

| Operation | Bloom Filter | HashSet |
|-----------|-------------|---------|
| Insert | O(k) | O(1) avg |
| Lookup | O(k) | O(1) avg |
| Delete | ❌ Not supported (unless counting) | O(1) avg |
| Space | Very small | Larger |

> \k\ = number of hash functions (typically 3–10). Does **not** depend on total elements \
\.

### Space Complexity
**O(m)** bits — independent of \
\ (but m is chosen based on desired n and false positive rate). Typically 1–10 bits per element.

### C# Example

`csharp
public class BloomFilter<T>
{
    private readonly BitArray _bits;
    private readonly int _m; // size of bit array
    private readonly int _k; // number of hash functions
    private readonly Func<T, int>[] _hashFunctions;

    public BloomFilter(int expectedItems, double falsePositiveRate = 0.01)
    {
        _m = (int)Math.Ceiling(-expectedItems * Math.Log(falsePositiveRate) / (Math.Log(2) * Math.Log(2)));
        _k = (int)Math.Ceiling((_m / (double)expectedItems) * Math.Log(2));
        _bits = new BitArray(_m);
        _hashFunctions = new Func<T, int>[_k];

        // Create k hash functions using double hashing technique
        for (int i = 0; i < _k; i++)
        {
            int seed = i;
            _hashFunctions[i] = item =>
            {
                int hash = item.GetHashCode();
                // Mix with seed using a simple hash
                int result = hash ^ (seed * 0x9E3779B9);
                result = (result ^ (result >> 16)) * 0x85EBCA6B;
                result = result ^ (result >> 13);
                return Math.Abs(result) % _m;
            };
        }
    }

    public void Add(T item)
    {
        foreach (var hash in _hashFunctions)
        {
            int index = hash(item);
            _bits[index] = true;
        }
    }

    public bool ProbablyContains(T item)
    {
        foreach (var hash in _hashFunctions)
        {
            int index = hash(item);
            if (!_bits[index]) return false;
        }
        return true;
    }
}

// Usage example
public static class BloomFilterExample
{
    public static void Demo()
    {
        var bloom = new BloomFilter<string>(1000, 0.01); // 1% false positive rate
        bloom.Add(""hello"");
        bloom.Add(""world"");

        Console.WriteLine(bloom.ProbablyContains(""hello""));   // True (inserted)
        Console.WriteLine(bloom.ProbablyContains(""world""));   // True (inserted)
        Console.WriteLine(bloom.ProbablyContains(""unknown"")); // Probably false (could be false positive)
    }
}
`

### Common Interview Questions

| # | Question |
|---|----------|
| 1 | Design a spell checker that uses a Bloom filter |
| 2 | How would you implement a Bloom filter for a web crawler to avoid revisiting URLs? |
| 3 | How can Bloom filters be used to optimize database queries? |
| 4 | Compare Bloom filters vs. hash sets in terms of space and accuracy |
| 5 | How would you handle deletions from a Bloom filter? |
| 6 | Design a system to detect if a password has been exposed in a data breach |

### FAANG-Level Deep Dive

<details>
<summary><b>👨‍💻 Counting Bloom Filter (Supporting Deletions)</b></summary>

`csharp
public class CountingBloomFilter<T>
{
    private readonly int[] _counters; // Use int[] instead of BitArray
    private readonly int _m;
    private readonly int _k;
    private readonly Func<T, int>[] _hashFunctions;

    public CountingBloomFilter(int expectedItems, double falsePositiveRate = 0.01)
    {
        _m = (int)Math.Ceiling(-expectedItems * Math.Log(falsePositiveRate) / (Math.Log(2) * Math.Log(2)));
        _k = (int)Math.Ceiling((_m / (double)expectedItems) * Math.Log(2));
        _counters = new int[_m];
        _hashFunctions = new Func<T, int>[_k];
        for (int i = 0; i < _k; i++)
        {
            int seed = i;
            _hashFunctions[i] = item =>
            {
                int hash = item.GetHashCode();
                int result = hash ^ (seed * 0x9E3779B9);
                result = (result ^ (result >> 16)) * 0x85EBCA6B;
                result = result ^ (result >> 13);
                return Math.Abs(result) % _m;
            };
        }
    }

    public void Add(T item)
    {
        foreach (var hash in _hashFunctions)
            _counters[hash(item)]++;
    }

    public bool ProbablyContains(T item)
    {
        foreach (var hash in _hashFunctions)
            if (_counters[hash(item)] == 0) return false;
        return true;
    }

    public void Remove(T item)
    {
        foreach (var hash in _hashFunctions)
        {
            int idx = hash(item);
            if (_counters[idx] > 0) _counters[idx]--;
        }
    }
}
`

**Trade-off:** Uses more space (4 bytes per slot instead of 1 bit) but supports deletions.
</details>

<details>
<summary><b>👨‍💻 Bloom Filters in System Design (Cassandra / LevelDB)</b></summary>

In LSM-tree databases like LevelDB and Cassandra:
- Each SSTable (Sorted String Table) has an associated Bloom filter.
- For a read operation, first check the Bloom filter to see if the key **might** exist.
- If the Bloom filter says ""no,"" skip the SSTable entirely — saving a disk I/O.
- If ""yes,"" check the SSTable (may result in a false positive, wasting one disk read).

This optimization dramatically reduces read amplification (from checking all levels to checking ~1-2 levels on average).

**Real-world numbers:** With 10 bits/element and k=7 hash functions, false positive rate ≈ 1%. For 1 billion keys, the Bloom filter takes only ~1.25 GB of memory.
</details>

### Variations
- **Standard Bloom Filter** — bit array + k hashes, no delete
- **Counting Bloom Filter** — counter array, supports delete
- **Scalable Bloom Filter** — grows as more elements are added
- **Compressed Bloom Filter** — for network transmission
- **Cuckoo Filter** — better space, supports delete, higher insert cost
- **Bloomier Filter** — maps keys to values (not just membership)
- **Partitioned Bloom Filter** — each hash function has dedicated bit zone

### ELI5 🧒
> A Bloom filter is like a checklist with a lazy friend checking it. You give your friend 3 different ways to spell-check a word (3 hash functions). If even one way says the word is NOT on the list, you are 100% sure the word is missing. But if all 3 ways say the word IS on the list, your friend might be wrong sometimes — he says it is there when it is actually not (false positive). The key point: he never misses a word that IS actually on the list (no false negatives). It saves space by not keeping the full list.
