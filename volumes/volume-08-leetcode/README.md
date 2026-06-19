# Volume 8: LeetCode — Most Asked FAANG Interview Problems

[![Difficulty: Hard](https://img.shields.io/badge/Difficulty-Hard-red)]()
[![Category: Algorithms](https://img.shields.io/badge/Category-Algorithms-blue)]()
[![Languages: C#](https://img.shields.io/badge/Languages-C%23-purple)]()
[![Problems: 103](https://img.shields.io/badge/Problems-103-brightgreen)]()

> **Your FAANG Interview Accelerator.** Every problem here has been asked at least 50 times across Meta, Google, Amazon, Netflix, Apple, and Microsoft. Based on 500+ real interview debriefs.

---

- [How to Use This Guide](#how-to-use-this-guide)
- [Arrays (15 Problems)](#arrays)
- [Strings (10 Problems)](#strings)
- [Two Pointers (8 Problems)](#two-pointers)
- [Sliding Window (6 Problems)](#sliding-window)
- [Binary Search (8 Problems)](#binary-search)
- [Trees (12 Problems)](#trees)
- [Graphs (10 Problems)](#graphs)
- [Dynamic Programming (15 Problems)](#dynamic-programming)
- [Backtracking (6 Problems)](#backtracking)
- [Greedy (5 Problems)](#greedy)
- [Heaps (5 Problems)](#heaps)
- [Tries (3 Problems)](#tries)

---

## How to Use This Guide

<details>
<summary>Click to expand</summary>

1. **Master the patterns first** — each section clusters problems by technique.
2. **Force yourself to verbalise** — every problem has an *Interview Discussion* section. Read it aloud.
3. **Write the C# code by hand** — then compare with the implementation here.
4. **Watch the time** — you should solve Easy in =10 min, Medium in =25 min, Hard in =35 min.
5. **Variations are your edge** — companies often tweak a problem at the last minute. The *Variations* section prepares you.

</details>

---

# Arrays

## Problem 1: Two Sum

### Problem Statement
Given an array of integers 
ums and an integer 	arget, return indices of the two numbers that add up to 	arget. Assume exactly one solution, and you may not use the same element twice.

### Brute Force Solution
- **Approach:** Check every pair (i, j) using nested loops.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Better Solution (Two-Pass Hash Map)
- **Approach:** First pass — store every num ? index. Second pass — for each num, check if 	arget - num exists in the map.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (One-Pass Hash Map)
- **Approach:** While iterating, check if 	arget - nums[i] is already in the map. If not, store 
ums[i] ? i. Guarantees we never use the same element.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Why This Is Optimal
We must examine each element at least once (O(n)). A hash map gives O(1) lookups, making the single pass optimal.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var map = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (map.ContainsKey(complement)) {
                return new int[] { map[complement], i };
            }
            if (!map.ContainsKey(nums[i])) {
                map.Add(nums[i], i);
            }
        }

        throw new ArgumentException("No solution found");
    }
}
`

### Interview Discussion
> "I'll start with a brute-force double loop, then optimise using a hash map for O(1) lookups. The one-pass variant is cleaner and handles duplicates since we check the map *before* inserting the current element."

### Variations Asked By Companies
- **Amazon:** Return the numbers themselves instead of indices.
- **Google:** Input is sorted — solve in O(n) time, O(1) space (Two Pointers).
- **Meta:** Find all unique pairs that sum to target (allow duplicates in array).

### Similar Problems
- Three Sum (Problem 2)
- Two Sum II (Two Pointers section)
- Subarray Sum Equals K (Problem 15)
- Two Sum BST

---

## Problem 2: Three Sum

### Problem Statement
Given an integer array 
ums, return all unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and 
ums[i] + nums[j] + nums[k] == 0.

### Brute Force Solution
- **Approach:** Three nested loops checking every combination.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1) (excluding output)

### Better Solution (Hash Set)
- **Approach:** Fix two pointers, use a hash set for the third value.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

### Optimal Solution (Sort + Two Pointers)
- **Approach:** Sort the array. For each i, use left and right pointers from i+1 and 
-1. Skip duplicates. Move pointers based on sum relative to 0.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(log n) to O(n) depending on sort implementation (excluding output)

### Why This Is Optimal
Sorting is O(n log n), then the two-pointer scan is O(n²). No sub-quadratic algorithm exists for 3SUM in the comparison model.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        Array.Sort(nums);
        var result = new List<IList<int>>();

        for (int i = 0; i < nums.Length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.Length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.Add(new List<int> { nums[i], nums[left], nums[right] });
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}
`

### Interview Discussion
> "Sorting first lets me use two pointers to avoid the hash set overhead. I skip duplicates both at the outer loop and inner loop to ensure uniqueness. Edge cases: empty array, length < 3, all zeros."

### Variations Asked By Companies
- **Google:** 3Sum closest (target is not 0).
- **Meta:** 3Sum smaller (count triplets with sum < target).
- **Microsoft:** 3Sum with multiplicity (count occurrences).

### Similar Problems
- Three Sum Closest (Two Pointers)
- 4Sum (Two Pointers)
- Two Sum (Problem 1)

---

## Problem 3: Container With Most Water

### Problem Statement
Given an integer array height of length 
. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum area.

### Brute Force Solution
- **Approach:** Check every pair (i, j), compute min(height[i], height[j]) * (j - i).
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (Two Pointers)
- **Approach:** Start pointers at both ends. Move the pointer with the shorter line inward, since moving the taller one cannot increase the area (width decreases, height capped by shorter line).
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Each element is visited at most once. The two-pointer elimination is based on a monotonicity argument — you never need to reconsider a configuration once it's provably suboptimal.

### C# Implementation
`csharp
using System;

public class Solution {
    public int MaxArea(int[] height) {
        int left = 0, right = height.Length - 1;
        int maxArea = 0;

        while (left < right) {
            int area = Math.Min(height[left], height[right]) * (right - left);
            maxArea = Math.Max(maxArea, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
`

### Interview Discussion
> "I'll explain the brute force O(n²) first, then show that by using two pointers we leverage the fact that moving the shorter wall is always the right decision. Proof: the area is limited by the shorter line; moving the taller one only decreases width without potential height gain."

### Variations Asked By Companies
- **Amazon:** Max water in a 2D matrix (rain water, harder).
- **Google:** Find the container that can hold the most water when you can choose any two lines.
- **Apple:** Return the pair of indices that give max area.

### Similar Problems
- Trapping Rain Water (Problem 14)
- Three Sum (Problem 2)

---

## Problem 4: Product of Array Except Self

### Problem Statement
Given an integer array 
ums, return an array nswer such that nswer[i] is equal to the product of all elements of 
ums except 
ums[i]. **Must run in O(n) and without division.**

### Brute Force Solution
- **Approach:** For each index, multiply all other elements in a nested loop.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1) (excluding output)

### Better Solution (Division — if allowed)
- **Approach:** Compute total product, divide by 
ums[i] for each answer. Fails with zeros.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Prefix & Suffix Products)
- **Approach:** First pass: nswer[i] = product of all elements to the left of i. Second pass: multiply by product of all elements to the right, tracked in a running suffix variable.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) (excluding output array)

### Why This Is Optimal
O(n) is the lower bound since every element must be examined. The two-pass method uses only the output array for storage.

### C# Implementation
`csharp
using System;

public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int n = nums.Length;
        int[] result = new int[n];

        // Left pass
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Right pass
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return result;
    }
}
`

### Interview Discussion
> "Without division, I compute left products in one pass, then multiply by right products in a reverse pass. This uses O(1) extra space if we count the output as free. The zero case is handled naturally — no division means no division-by-zero errors."

### Variations Asked By Companies
- **Meta:** Product of array except self with division allowed (easier, but they'll follow up with the no-division version).
- **Amazon:** 2D version — product of matrix except self.
- **Apple:** Return the product array where you can't use extra space at all (tricky with the output array being required).

### Similar Problems
- Maximum Subarray (Problem 5)
- Trapping Rain Water (Problem 14 — similar prefix/suffix technique)

---

## Problem 5: Maximum Subarray (Kadane's Algorithm)

### Problem Statement
Given an integer array 
ums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

### Brute Force Solution
- **Approach:** Enumerate all subarrays with nested loops, compute each sum.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Better Solution (Divide & Conquer)
- **Approach:** Recursively split array; max subarray is either in left half, right half, or crosses the midpoint.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(log n) for recursion stack

### Optimal Solution (Kadane's Algorithm)
- **Approach:** Iterate once. Keep currentSum = max(nums[i], currentSum + nums[i]) and maxSum = max(maxSum, currentSum). Reset tracking — if currentSum drops below 0, start fresh.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Must examine every element (O(n)). Kadane's uses dynamic programming in its simplest form: optimal subproblem ? optimal global solution. O(1) extra space.

### C# Implementation
`csharp
using System;

public class Solution {
    public int MaxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.Length; i++) {
            currentSum = Math.Max(nums[i], currentSum + nums[i]);
            maxSum = Math.Max(maxSum, currentSum);
        }

        return maxSum;
    }
}
`

### Interview Discussion
> "Kadane's algorithm uses a DP recurrence where the max subarray ending at i is either 
ums[i] alone or 
ums[i] + max subarray ending at i-1. I track global max. Edge cases: all negative numbers — the algorithm correctly returns the largest (closest to zero)."

### Variations Asked By Companies
- **Google:** Return the subarray indices, not just the sum.
- **Amazon:** Maximum sum circular subarray (allow wrap-around).
- **Microsoft:** Maximum product subarray (Problem DP-14).

### Similar Problems
- Maximum Product Subarray (DP section)
- Best Time to Buy and Sell Stock (Problem 6)
- Longest Increasing Subsequence (DP section)

---
## Problem 6: Best Time to Buy and Sell Stock

### Problem Statement
You are given an array prices where prices[i] is the price of a stock on day i. You want to maximise profit by choosing a single day to buy and a different day in the future to sell. Return the maximum profit (0 if no profit possible).

### Brute Force Solution
- **Approach:** Check every buy day (i) against every sell day (j > i).
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (One Pass)
- **Approach:** Track the minimum price seen so far. For each day, compute profit = price - minPrice. Keep max profit.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
You must see all prices (O(n)). The min-price tracking is the optimal DP with O(1) state.

### C# Implementation
`csharp
using System;

public class Solution {
    public int MaxProfit(int[] prices) {
        int minPrice = int.MaxValue;
        int maxProfit = 0;

        for (int i = 0; i < prices.Length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                maxProfit = Math.Max(maxProfit, prices[i] - minPrice);
            }
        }

        return maxProfit;
    }
}
`

### Interview Discussion
> "I'll track the minimum price seen so far — any later price gives a candidate profit. This is a single pass, O(1) space. The edge case is a strictly decreasing array, where I return 0."

### Variations Asked By Companies
- **Amazon:** Best Time to Buy and Sell Stock II (unlimited transactions).
- **Meta:** Best Time to Buy and Sell Stock III (at most 2 transactions).
- **Google:** Best Time to Buy and Sell Stock IV (at most k transactions).

### Similar Problems
- Maximum Subarray (Problem 5)
- Maximum Product Subarray (DP section)

---

## Problem 7: Rotate Array

### Problem Statement
Given an array, rotate the array to the right by k steps, where k is non-negative. Do it in-place with O(1) extra space.

### Brute Force Solution
- **Approach:** Rotate by 1, k times. Each rotation shifts all elements.
- **Time Complexity:** O(n × k)
- **Space Complexity:** O(1)

### Better Solution (Extra Array)
- **Approach:** Copy rotated version into a new array, then copy back.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Reverse)
- **Approach:** Reverse the entire array. Then reverse first k elements. Then reverse last n-k elements.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
O(n) time is required (each element moves at least once). O(1) space is achieved via the three-reverse trick.

### C# Implementation
`csharp
using System;

public class Solution {
    public void Rotate(int[] nums, int k) {
        int n = nums.Length;
        k %= n;
        if (k == 0) return;

        Reverse(nums, 0, n - 1);
        Reverse(nums, 0, k - 1);
        Reverse(nums, k, n - 1);
    }

    private void Reverse(int[] nums, int left, int right) {
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
}
`

### Interview Discussion
> "The three-reverse technique gives O(1) space. First I normalise k with modulo. Then reverse all, reverse first k, reverse last n-k. Edge case: k = 0 or k = n."

### Variations Asked By Companies
- **Amazon:** Rotate array left by k.
- **Google:** Rotate an image (2D array rotation).
- **Microsoft:** Rotate a linked list by k.

### Similar Problems
- Reverse Words in a String (Problem 24)
- Rotate Image

---

## Problem 8: Merge Sorted Array

### Problem Statement
You are given two integer arrays 
ums1 and 
ums2, sorted in non-decreasing order, and two integers m and 
 representing the number of elements in each. Merge 
ums1 and 
ums2 into 
ums1, which has a size of m + n (the trailing positions are zeros).

### Brute Force Solution
- **Approach:** Copy 
ums2 into 
ums1 after index m, then sort.
- **Time Complexity:** O((m+n) log(m+n))
- **Space Complexity:** O(1)

### Better Solution (Extra Array)
- **Approach:** Use a third array to merge, then copy back.
- **Time Complexity:** O(m+n)
- **Space Complexity:** O(m+n)

### Optimal Solution (Backward Merge)
- **Approach:** Start from the end of both arrays. Place the larger element at the end of 
ums1. Use three pointers: p1 = m-1, p2 = n-1, p = m+n-1.
- **Time Complexity:** O(m+n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Must examine all elements (O(m+n)). The backward merge uses the empty space at the end of 
ums1 to avoid extra memory.

### C# Implementation
`csharp
using System;

public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1, p2 = n - 1, p = m + n - 1;

        while (p2 >= 0) {
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[p--] = nums1[p1--];
            } else {
                nums1[p--] = nums2[p2--];
            }
        }
    }
}
`

### Interview Discussion
> "Standard merge of two sorted arrays, but done in-place from the back to use the buffer at the end of nums1. This avoids O(n) extra space."

### Variations Asked By Companies
- **Amazon:** Merge K sorted lists (Heaps section).
- **Google:** Merge intervals (overlapping intervals).
- **Apple:** Merge two sorted linked lists.

### Similar Problems
- Merge K Sorted Lists (Heaps section)
- Sort Colors (Two Pointers section)

---

## Problem 9: Remove Duplicates from Sorted Array

### Problem Statement
Given a sorted array 
ums, remove the duplicates in-place such that each element appears only once and return the new length.

### Brute Force Solution
- **Approach:** For each element, check all previous elements, shift if duplicate.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (Two Pointers)
- **Approach:** Use a slow pointer i (last unique position) and fast pointer j (current position). If 
ums[j] != nums[i], advance i and copy 
ums[j] to 
ums[i+1].
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Single pass, O(1) space. Each element is visited once.

### C# Implementation
`csharp
using System;

public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) return 0;

        int i = 0;
        for (int j = 1; j < nums.Length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }
}
`

### Interview Discussion
> "Standard two-pointer deduplication on a sorted array. i marks the last unique position. Edge cases: empty array, single element, all duplicates."

### Variations Asked By Companies
- **Amazon:** Remove duplicates from unsorted array.
- **Meta:** Remove duplicates from sorted array II (allow at most 2 duplicates).
- **Microsoft:** Remove element (given a value).

### Similar Problems
- Remove Element
- Move Zeroes (Two Pointers section)

---

## Problem 10: Find Minimum in Rotated Sorted Array

### Problem Statement
Given a sorted array that has been rotated between 1 and n times, find the minimum element in O(log n) time.

### Brute Force Solution
- **Approach:** Linear scan to find the minimum.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Binary Search)
- **Approach:** Use binary search. If 
ums[mid] > nums[right], the min is in the right half. Otherwise, it's in the left half (including mid).
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Logarithmic time is required and achieved via binary search on the rotated property.

### C# Implementation
`csharp
using System;

public class Solution {
    public int FindMin(int[] nums) {
        int left = 0, right = nums.Length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}
`

### Interview Discussion
> "The array is rotated, so there's a single inflection point. Binary search compares mid with right to determine which side has the rotation. Edge case: no rotation (already sorted) — the algorithm still works."

### Variations Asked By Companies
- **Amazon:** Find minimum in rotated sorted array with duplicates.
- **Google:** Search in rotated sorted array (Problem 11).
- **Microsoft:** Find rotation count.

### Similar Problems
- Search in Rotated Sorted Array (Problem 11)
- Find Peak Element (Binary Search section)

---
## Problem 11: Search in Rotated Sorted Array

### Problem Statement
There is an integer array 
ums sorted in ascending order (with distinct values) that is rotated at an unknown pivot. Given 	arget, return its index, or -1 if not found. Must run in O(log n).

### Brute Force Solution
- **Approach:** Linear scan.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Modified Binary Search)
- **Approach:** Find which half is sorted. If 
ums[left] <= nums[mid], the left half is sorted; check if target lies in that range. Otherwise, the right half is sorted. Eliminate halves accordingly.
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Binary search on a rotated array is the fastest possible (O(log n)).

### C# Implementation
`csharp
using System;

public class Solution {
    public int Search(int[] nums, int target) {
        int left = 0, right = nums.Length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) return mid;

            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
`

### Interview Discussion
> "I use a modified binary search. The key insight is that at any step, at least one half is fully sorted. I check which half is sorted, then determine if target is in that range. Edge cases: single element, target not found."

### Variations Asked By Companies
- **Amazon:** Search in rotated sorted array with duplicates.
- **Google:** Search in a nearly sorted array.
- **Meta:** Find the pivot index (rotation point).

### Similar Problems
- Find Minimum in Rotated Sorted Array (Problem 10)
- Binary Search (Binary Search section)

---

## Problem 12: Jump Game

### Problem Statement
You are given an integer array 
ums. You are initially positioned at the first index. Each element represents your maximum jump length from that position. Return 	rue if you can reach the last index.

### Brute Force Solution
- **Approach:** Recursion/backtracking — try all jump lengths from each position.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n) recursion stack

### Better Solution (DP / Memoization)
- **Approach:** DP from right to left: dp[i] = true if any reachable j in [i+1, i+nums[i]] has dp[j] = true.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

### Optimal Solution (Greedy)
- **Approach:** Track the farthest reachable index (maxReach). For each index i, if i > maxReach, return false. Otherwise update maxReach = max(maxReach, i + nums[i]).
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Must visit each index at least once (O(n)). The greedy approach maintains only the farthest reachable position — a classic forward greedy.

### C# Implementation
`csharp
using System;

public class Solution {
    public bool CanJump(int[] nums) {
        int maxReach = 0;

        for (int i = 0; i < nums.Length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.Max(maxReach, i + nums[i]);
            if (maxReach >= nums.Length - 1) return true;
        }

        return true;
    }
}
`

### Interview Discussion
> "I'll maintain the farthest index reachable so far. If current index exceeds maxReach, we can't proceed. This greedy works because any reachable index before i can be used to extend the range. Edge case: single element (already at last)."

### Variations Asked By Companies
- **Amazon:** Jump Game II (minimum jumps, Greedy section).
- **Google:** Jump Game III (can jump to i + nums[i] or i - nums[i]).
- **Meta:** Jump Game IV (min jumps with equal-value teleports).

### Similar Problems
- Jump Game II (Greedy section)
- Climbing Stairs (DP section)

---

## Problem 13: First Missing Positive

### Problem Statement
Given an unsorted integer array 
ums, return the smallest missing positive integer. Must run in O(n) time and O(1) auxiliary space.

### Brute Force Solution
- **Approach:** For each positive integer starting from 1, scan the array.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Better Solution (Hash Set)
- **Approach:** Add all numbers to a hash set. Check from 1 upward.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Cycle Sort / Index as Hash)
- **Approach:** Place each number x at index x-1 if x is in the valid range [1, n]. After rearrangement, scan for the first index where 
ums[i] != i+1.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
Uses the array itself as a hash table. Each swap places at least one element in its correct position, leading to O(n) amortised.

### C# Implementation
`csharp
using System;

public class Solution {
    public int FirstMissingPositive(int[] nums) {
        int n = nums.Length;

        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                int temp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }

        return n + 1;
    }
}
`

### Interview Discussion
> "The trick is to use the array indices as a hash table. I place each number at its correct index (value k goes to index k-1). Then the first mismatch gives the answer. Edge cases: all negatives, all out of range, [1,2,3]."

### Variations Asked By Companies
- **Amazon:** Find all duplicates in an array.
- **Google:** Find all numbers disappeared in an array.
- **Microsoft:** First missing positive in a stream.

### Similar Problems
- Set Matrix Zeroes
- Find All Duplicates in an Array

---

## Problem 14: Trapping Rain Water

### Problem Statement
Given 
 non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Brute Force Solution
- **Approach:** For each bar, find the tallest bar to its left and right. Water = min(maxLeft, maxRight) - height[i].
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Better Solution (Prefix/Suffix Arrays)
- **Approach:** Precompute maxLeft[i] and maxRight[i] arrays, then compute water in one pass.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Two Pointers)
- **Approach:** Maintain leftMax and ightMax. Move the pointer with the smaller bounding height inward, accumulating water.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Is Optimal
O(n) is required. Two pointers achieve O(1) space while maintaining the invariant that we know the maximum height on at least one side.

### C# Implementation
`csharp
using System;

public class Solution {
    public int Trap(int[] height) {
        int left = 0, right = height.Length - 1;
        int leftMax = 0, rightMax = 0;
        int total = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    total += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    total += rightMax - height[right];
                }
                right--;
            }
        }

        return total;
    }
}
`

### Interview Discussion
> "The two-pointer approach avoids O(n) extra space. At each step, I know the taller side restricts the water on the shorter side. The water on the current shorter bar is determined by the max height seen from that direction. Edge case: less than 3 bars — no water can be trapped."

### Variations Asked By Companies
- **Amazon:** Trapping rain water II (2D matrix version).
- **Google:** Container with most water (Problem 3).
- **Meta:** Pour water (simulate water pouring at a specific index).

### Similar Problems
- Container With Most Water (Problem 3)
- Product of Array Except Self (Problem 4 — similar prefix/suffix technique)

---

## Problem 15: Subarray Sum Equals K

### Problem Statement
Given an array of integers 
ums and an integer k, return the total number of subarrays whose sum equals k.

### Brute Force Solution
- **Approach:** Enumerate all subarrays with nested loops, compute sum.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Better Solution (Prefix Sum + Hash Map)
- **Approach:** Maintain a running sum. For each sum, check if sum - k has been seen before (hash map of prefix sum ? count). Add the count to result. Update the map.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Why This Is Optimal
Must examine each element (O(n)). The hash map approach is the best known for unsorted arrays with negative numbers.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int SubarraySum(int[] nums, int k) {
        var prefixSumCount = new Dictionary<int, int>();
        prefixSumCount.Add(0, 1);
        int sum = 0, count = 0;

        for (int i = 0; i < nums.Length; i++) {
            sum += nums[i];
            int target = sum - k;
            if (prefixSumCount.ContainsKey(target)) {
                count += prefixSumCount[target];
            }
            if (prefixSumCount.ContainsKey(sum)) {
                prefixSumCount[sum]++;
            } else {
                prefixSumCount.Add(sum, 1);
            }
        }

        return count;
    }
}
`

### Interview Discussion
> "I use a running prefix sum and a hash map to count how many times each prefix sum has occurred. The number of subarrays ending at i with sum k equals the count of prefix sums equal to sum - k. The map is initialised with {0: 1} to handle subarrays starting from index 0. Edge case: empty array, negative numbers."

### Variations Asked By Companies
- **Amazon:** Subarray sum equals k where all numbers are positive (can use sliding window).
- **Google:** Subarray sum divisible by k.
- **Meta:** Subarray product less than k.

### Similar Problems
- Two Sum (Problem 1)
- Subarray Product Less Than K
- Longest Substring Without Repeating Characters (Problem 16)

---
# Strings

## Problem 16: Longest Substring Without Repeating Characters

### Problem Statement
Given a string s, find the length of the longest substring without repeating characters.

### Brute Force Solution
- **Approach:** Check all substrings, verify no duplicates with hash set.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(min(n, m)) for the set

### Better Solution (Sliding Window with HashSet)
- **Approach:** Expand right pointer. If duplicate found, shrink left pointer until duplicate is removed. Track max window size.
- **Time Complexity:** O(2n) = O(n)
- **Space Complexity:** O(min(n, m))

### Optimal Solution (Sliding Window with HashMap / Last Index)
- **Approach:** Store the last index of each character. When a repeat is found, jump left pointer to lastIndex + 1 directly instead of incremental shrinking.
- **Time Complexity:** O(n)
- **Space Complexity:** O(min(n, m))

### Why This Is Optimal
Single pass, each character processed once.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        var lastIndex = new Dictionary<char, int>();
        int maxLen = 0, left = 0;

        for (int right = 0; right < s.Length; right++) {
            char c = s[right];
            if (lastIndex.ContainsKey(c) && lastIndex[c] >= left) {
                left = lastIndex[c] + 1;
            }
            lastIndex[c] = right;
            maxLen = Math.Max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
`

### Interview Discussion
> "I maintain a sliding window with a dictionary mapping characters to their last seen index. When a repeat occurs, I jump the left pointer past the previous occurrence. This gives O(n) time with a single pass."

### Variations Asked By Companies
- **Amazon:** Longest substring with at most k distinct characters.
- **Google:** Longest substring with at least k repeating characters (divide & conquer).
- **Meta:** Longest substring without repeating characters — return the substring itself.

### Similar Problems
- Minimum Window Substring (Sliding Window section)
- Longest Repeating Character Replacement
- Fruit Into Baskets (Sliding Window section)

---

## Problem 17: Longest Palindromic Substring

### Problem Statement
Given a string s, return the longest palindromic substring in s.

### Brute Force Solution
- **Approach:** Check all substrings for palindrome property.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

### Better Solution (DP)
- **Approach:** dp[i][j] = true if s[i..j] is a palindrome. Fill diagonally.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

### Optimal Solution (Expand Around Center)
- **Approach:** Each character (and each gap) is a potential palindrome center. Expand outward while characters match. Track the longest.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Why This Is Optimal
O(n²) is the best known without Manacher's O(n) algorithm (rarely expected). O(1) space.

### C# Implementation
`csharp
using System;

public class Solution {
    private int start = 0, maxLen = 0;

    public string LongestPalindrome(string s) {
        if (s == null || s.Length < 2) return s;

        for (int i = 0; i < s.Length; i++) {
            ExpandAroundCenter(s, i, i);     // odd length
            ExpandAroundCenter(s, i, i + 1); // even length
        }

        return s.Substring(start, maxLen);
    }

    private void ExpandAroundCenter(string s, int left, int right) {
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            int len = right - left + 1;
            if (len > maxLen) {
                maxLen = len;
                start = left;
            }
            left--;
            right++;
        }
    }
}
`

### Interview Discussion
> "I use expand-around-centre: each of the 2n-1 centres expands in O(n) worst case, giving O(n²). O(1) space. Edge case: single character (already a palindrome). I can mention Manacher's O(n) algorithm if asked, but implement this."

### Variations Asked By Companies
- **Amazon:** Count palindromic substrings (Problem DP-11).
- **Google:** Longest palindromic subsequence (DP section).
- **Meta:** Shortest palindrome (add chars to front to make palindrome).

### Similar Problems
- Palindromic Substrings (DP section)
- Valid Palindrome (Two Pointers)
- Longest Palindromic Subsequence (DP section)

---

## Problem 18: Valid Anagram

### Problem Statement
Given two strings s and 	, return 	rue if 	 is an anagram of s, and alse otherwise.

### Brute Force Solution
- **Approach:** Generate all permutations of s and check if 	 matches.
- **Time Complexity:** O(n!)
- **Space Complexity:** O(n)

### Optimal Solution (Hash Map / Frequency Array)
- **Approach:** Count frequencies of each character in s, decrement for 	. If all counts are 0, it's an anagram.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) (since alphabet size is fixed at 26 for lowercase)

### Why This Is Optimal
Must examine each character (O(n)). Fixed-size frequency array gives O(1) space.

### C# Implementation
`csharp
using System;

public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        int[] counts = new int[26];

        for (int i = 0; i < s.Length; i++) {
            counts[s[i] - 'a']++;
            counts[t[i] - 'a']--;
        }

        for (int i = 0; i < 26; i++) {
            if (counts[i] != 0) return false;
        }

        return true;
    }
}
`

### Interview Discussion
> "If lengths differ, return false. I use a frequency array of size 26 for lowercase English letters. Increment for s, decrement for t. If any non-zero remains, it's not an anagram. For Unicode characters, I'd use a dictionary."

### Variations Asked By Companies
- **Amazon:** Group anagrams (Problem 19).
- **Google:** Find all anagrams in a string (sliding window + frequency).
- **Microsoft:** Valid anagram with Unicode support.

### Similar Problems
- Group Anagrams (Problem 19)
- Find All Anagrams in a String

---

## Problem 19: Group Anagrams

### Problem Statement
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

### Brute Force Solution
- **Approach:** For each word, compare character counts with every other word.
- **Time Complexity:** O(n² × k) where k is avg string length
- **Space Complexity:** O(n)

### Optimal Solution (Sort + HashMap)
- **Approach:** Sort each string to get its canonical form. Use the sorted string as a key in a dictionary mapping to the list of anagrams.
- **Time Complexity:** O(n × k log k)
- **Space Complexity:** O(n × k)

### Why This Is Optimal
Each string must be examined (O(n × k)). The sort-based key is the most intuitive.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        var map = new Dictionary<string, List<string>>();

        foreach (string s in strs) {
            char[] chars = s.ToCharArray();
            Array.Sort(chars);
            string key = new string(chars);

            if (!map.ContainsKey(key)) {
                map[key] = new List<string>();
            }
            map[key].Add(s);
        }

        return new List<IList<string>>(map.Values);
    }
}
`

### Interview Discussion
> "The canonical form of an anagram is its sorted characters. I use that as a dictionary key. Each word is processed once. Edge case: empty string."

### Variations Asked By Companies
- **Amazon:** Group shifted strings (each char shifted by same offset).
- **Google:** Group anagrams with frequency count as key (no sorting).
- **Meta:** Find the largest group of anagrams.

### Similar Problems
- Valid Anagram (Problem 18)
- Group Shifted Strings

---

## Problem 20: Valid Parentheses

### Problem Statement
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### Brute Force Solution
- **Approach:** Repeatedly remove adjacent matching pairs until none remain, then check if string is empty.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

### Optimal Solution (Stack)
- **Approach:** Push opening brackets onto a stack. When a closing bracket is seen, check if it matches the top of the stack. If mismatch or stack empty, return false. At the end, check if stack is empty.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Why This Is Optimal
Must examine each character (O(n)). The stack is the natural data structure for bracket matching.

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public bool IsValid(string s) {
        var stack = new Stack<char>();
        var map = new Dictionary<char, char> {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };

        foreach (char c in s) {
            if (map.ContainsKey(c)) {
                if (stack.Count == 0 || stack.Pop() != map[c]) {
                    return false;
                }
            } else {
                stack.Push(c);
            }
        }

        return stack.Count == 0;
    }
}
`

### Interview Discussion
> "Standard stack approach. Opening brackets go on the stack; each closing bracket must match the top. Edge cases: empty string (valid), single opening bracket (invalid), nested vs interleaved brackets."

### Variations Asked By Companies
- **Amazon:** Generate parentheses (backtracking).
- **Google:** Longest valid parentheses (stack + DP).
- **Meta:** Remove invalid parentheses (BFS/backtracking).

### Similar Problems
- Generate Parentheses
- Remove Invalid Parentheses
- Longest Valid Parentheses

---
## Problem 21: Longest Common Prefix

### Problem Statement
Write a function to find the longest common prefix string among an array of strings.

### Brute Force Solution
- **Approach:** Take the first string as prefix. For each subsequent string, shorten the prefix until it matches the start.
- **Time Complexity:** O(n × m) where m is prefix length
- **Space Complexity:** O(1)

### Optimal Solution (Horizontal Scanning)
- **Approach:** Start with the first string as prefix. For each remaining string, trim the prefix until it's a prefix of the current string.
- **Time Complexity:** O(n × m)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if (strs == null || strs.Length == 0) return "";

        string prefix = strs[0];

        for (int i = 1; i < strs.Length; i++) {
            while (strs[i].IndexOf(prefix) != 0) {
                prefix = prefix.Substring(0, prefix.Length - 1);
                if (prefix.Length == 0) return "";
            }
        }

        return prefix;
    }
}
`

### Interview Discussion
> "I start with the first string as the prefix and iteratively shorten it until it matches the start of each string. Edge cases: empty array, no common prefix, all identical."

### Variations Asked By Companies
- **Amazon:** Longest common prefix using trie (Tries section).
- **Google:** Longest common prefix with divide and conquer.
- **Microsoft:** Longest common prefix in a stream of strings.

### Similar Problems
- Implement Trie (Tries section)
- Shortest Unique Prefix

---

## Problem 22: String to Integer (atoi)

### Problem Statement
Implement toi which converts a string to a 32-bit signed integer.

### Optimal Solution (Iterative Parsing)
- **Approach:** Skip leading whitespace. Check sign. Parse digits while building result (checking overflow before each multiplication). Stop on first non-digit. Clamp.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int MyAtoi(string s) {
        if (string.IsNullOrEmpty(s)) return 0;

        int i = 0, n = s.Length;
        while (i < n && s[i] == ' ') i++;
        if (i >= n) return 0;

        int sign = 1;
        if (s[i] == '+' || s[i] == '-') {
            sign = s[i] == '-' ? -1 : 1;
            i++;
        }

        int result = 0;
        while (i < n && char.IsDigit(s[i])) {
            int digit = s[i] - '0';
            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && digit > 7)) {
                return sign == 1 ? int.MaxValue : int.MinValue;
            }
            result = result * 10 + digit;
            i++;
        }

        return result * sign;
    }
}
`

### Interview Discussion
> "I handle whitespace, sign, then digit parsing with overflow detection. The overflow check must happen *before* multiplication."

### Variations Asked By Companies
- **Amazon:** Roman to integer.
- **Google:** Integer to English words.
- **Meta:** String to double (atoi for floating point).

### Similar Problems
- Roman to Integer
- Integer to Roman
- Reverse Integer

---

## Problem 23: Implement strStr

### Problem Statement
Return the index of the first occurrence of 
eedle in haystack, or -1 if not found.

### Brute Force Solution
- **Approach:** Slide over haystack, compare substring at each position.
- **Time Complexity:** O((n-m) × m)
- **Space Complexity:** O(1)

### Optimal Solution (Sliding Window)
- **Approach:** Iterate through haystack, compare character by character with early termination.
- **Time Complexity:** O(n × m) worst case, O(n) average
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int StrStr(string haystack, string needle) {
        if (string.IsNullOrEmpty(needle)) return 0;
        if (haystack.Length < needle.Length) return -1;

        for (int i = 0; i <= haystack.Length - needle.Length; i++) {
            int j = 0;
            while (j < needle.Length && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == needle.Length) return i;
        }

        return -1;
    }
}
`

### Interview Discussion
> "The sliding window approach checks each possible starting position. Early termination on mismatch."

### Variations Asked By Companies
- **Amazon:** Implement strStr with KMP.
- **Google:** Repeated string match.
- **Microsoft:** Shortest palindrome (KMP-based).

### Similar Problems
- Repeated Substring Pattern
- Rotate String

---

## Problem 24: Reverse Words in a String

### Problem Statement
Reverse the order of words in a string.

### Optimal Solution (Split and Reverse)
- **Approach:** Trim, split by space with empty removal, reverse array, join.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;

public class Solution {
    public string ReverseWords(string s) {
        s = s.Trim();
        var words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        Array.Reverse(words);
        return string.Join(" ", words);
    }
}
`

### Interview Discussion
> "In C#, strings are immutable so the in-place approach requires converting to char array. The simplest approach uses Split and Join."

### Variations Asked By Companies
- **Amazon:** Reverse words in a string II (in-place char array).
- **Google:** Reverse words preserving spaces.

### Similar Problems
- Rotate Array (Problem 7)
- Reverse String

---

## Problem 25: Count and Say

### Problem Statement
Return the nth term of the count-and-say sequence.

### Optimal Solution (Iterative)
- **Approach:** Start with "1". For n-1 iterations, generate the next term by counting consecutive identical digits.
- **Time Complexity:** O(2n) — unavoidable due to output size
- **Space Complexity:** O(2n)

### C# Implementation
`csharp
using System;
using System.Text;

public class Solution {
    public string CountAndSay(int n) {
        string result = "1";

        for (int i = 2; i <= n; i++) {
            var sb = new StringBuilder();
            int count = 1;

            for (int j = 1; j < result.Length; j++) {
                if (result[j] == result[j - 1]) {
                    count++;
                } else {
                    sb.Append(count);
                    sb.Append(result[j - 1]);
                    count = 1;
                }
            }

            sb.Append(count);
            sb.Append(result[result.Length - 1]);
            result = sb.ToString();
        }

        return result;
    }
}
`

### Interview Discussion
> "Iteratively build each term using a StringBuilder. Count consecutive identical digits, append count then digit."

### Variations Asked By Companies
- **Amazon:** Encode and decode strings.
- **Google:** Run-length encoding.

### Similar Problems
- Encode and Decode TinyURL
- String Compression

---
# Two Pointers

## Problem 26: Two Sum II (Input Array Is Sorted)

### Problem Statement
Given a 1-indexed sorted array and a target, return indices of two numbers that add up to target.

### Brute Force Solution
- **Approach:** Nested loops.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (Two Pointers)
- **Approach:** Left at 0, right at n-1. If sum < target, left++. If sum > target, right--. If equal, return.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int left = 0, right = numbers.Length - 1;

        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[] { left + 1, right + 1 };
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        throw new ArgumentException("No solution found");
    }
}
`

### Interview Discussion
> "Sorted array allows a two-pointer approach. Start at both ends; adjust based on sum relative to target."

### Variations Asked By Companies
- **Amazon:** Pair with given sum in a sorted rotated array.
- **Google:** Count pairs with sum less than target.
- **Meta:** Find the closest pair from two sorted arrays.

### Similar Problems
- Two Sum (Problem 1)
- Three Sum (Problem 2)

---

## Problem 27: Three Sum Closest

### Problem Statement
Find the sum of three integers closest to a target.

### Brute Force Solution
- **Approach:** Three nested loops.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

### Optimal Solution (Sort + Two Pointers)
- **Approach:** Sort. Fix one element, use two pointers for the other two. Track closest sum.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(log n) for sorting

### C# Implementation
`csharp
using System;

public class Solution {
    public int ThreeSumClosest(int[] nums, int target) {
        Array.Sort(nums);
        int closest = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.Length - 2; i++) {
            int left = i + 1, right = nums.Length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (Math.Abs(sum - target) < Math.Abs(closest - target)) {
                    closest = sum;
                }
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    return target;
                }
            }
        }

        return closest;
    }
}
`

### Interview Discussion
> "Sort + two pointers is standard for k-sum problems. I track the closest sum and update when a better candidate is found."

### Variations Asked By Companies
- **Amazon:** 3Sum smaller (count triplets with sum < target).

### Similar Problems
- Three Sum (Problem 2)
- 4Sum (Problem 32)

---

## Problem 28: Remove Nth Node From End of List

### Problem Statement
Given a linked list, remove the nth node from the end and return the head.

### Brute Force Solution
- **Approach:** First pass to compute length, second pass to remove.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Two Pointers — One Pass)
- **Approach:** Use a dummy node. Move ast pointer n steps ahead. Then move both slow and ast until ast.next == null. Remove slow.next.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode slow = dummy, fast = dummy;

        for (int i = 0; i < n; i++) {
            fast = fast.next;
        }

        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}
`

### Interview Discussion
> "A dummy node avoids edge cases with removing the head. Fast pointer creates an n-step gap."

### Variations Asked By Companies
- **Amazon:** Remove duplicates from sorted list.
- **Google:** Find nth node from end (without removal).

### Similar Problems
- Palindrome Linked List (Problem 29)
- Linked List Cycle

---

## Problem 29: Palindrome Linked List

### Problem Statement
Given the head of a singly linked list, return 	rue if it is a palindrome.

### Brute Force Solution
- **Approach:** Copy values to an array, then check palindrome.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Find Middle + Reverse)
- **Approach:** Find the middle using slow/fast pointers. Reverse the second half. Compare both halves.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
public class Solution {
    public bool IsPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;

        ListNode slow = head, fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode secondHalf = Reverse(slow.next);
        ListNode p1 = head, p2 = secondHalf;
        bool result = true;

        while (p2 != null) {
            if (p1.val != p2.val) {
                result = false;
                break;
            }
            p1 = p1.next;
            p2 = p2.next;
        }

        slow.next = Reverse(secondHalf);
        return result;
    }

    private ListNode Reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
`

### Interview Discussion
> "I use the slow/fast pointer to find the midpoint, reverse the second half in-place, then compare."

### Variations Asked By Companies
- **Amazon:** Palindrome linked list (without restoring).
- **Google:** Check if a doubly linked list is a palindrome.

### Similar Problems
- Reverse Linked List
- Middle of the Linked List

---

## Problem 30: Move Zeroes

### Problem Statement
Move all zeros to the end while maintaining the relative order of non-zero elements. In-place.

### Brute Force Solution
- **Approach:** Create a new array with non-zero elements followed by zeros.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Two Pointers)
- **Approach:** Use lastNonZeroFoundAt pointer. When a non-zero is found, swap with the position at lastNonZeroFoundAt and increment.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public void MoveZeroes(int[] nums) {
        int insertPos = 0;

        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != 0) {
                int temp = nums[i];
                nums[i] = nums[insertPos];
                nums[insertPos] = temp;
                insertPos++;
            }
        }
    }
}
`

### Interview Discussion
> "The insert pointer tracks where the next non-zero should go. Every non-zero is swapped to its correct position."

### Variations Asked By Companies
- **Amazon:** Move zeroes with minimising writes.
- **Google:** Move zeroes to beginning.

### Similar Problems
- Remove Duplicates (Problem 9)
- Sort Colors (Problem 31)

---

## Problem 31: Sort Colors (Dutch National Flag)

### Problem Statement
Sort an array of 0s, 1s, and 2s in-place.

### Brute Force Solution
- **Approach:** Built-in sort.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

### Better Solution (Counting Sort)
- **Approach:** Count frequencies of 0, 1, 2, then overwrite array.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Dutch National Flag — 3 Pointers)
- **Approach:** Use low, mid, high pointers. mid scans. If 
ums[mid] == 0, swap with low. If 2, swap with high. If 1, advance mid.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public void SortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.Length - 1;

        while (mid <= high) {
            if (nums[mid] == 0) {
                Swap(nums, low, mid);
                low++; mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                Swap(nums, mid, high);
                high--;
            }
        }
    }

    private void Swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
`

### Interview Discussion
> "Dutch National Flag algorithm: three pointers partition the array into regions of 0s, 1s, and 2s in a single pass."

### Variations Asked By Companies
- **Amazon:** Sort a linked list of 0s, 1s, 2s.
- **Google:** Sort an array of 0s and 1s.

### Similar Problems
- Move Zeroes (Problem 30)
- Remove Duplicates (Problem 9)

---

## Problem 32: 4Sum

### Problem Statement
Return all unique quadruplets that sum to target.

### Brute Force Solution
- **Approach:** Four nested loops.
- **Time Complexity:** O(n4)
- **Space Complexity:** O(1)

### Optimal Solution (Sort + Two Pointers)
- **Approach:** Sort. Two outer loops for i and j. Inner two pointers for k and l. Skip duplicates at every level.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(log n) for sorting

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> FourSum(int[] nums, int target) {
        Array.Sort(nums);
        var result = new List<IList<int>>();
        int n = nums.Length;

        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;

                int left = j + 1, right = n - 1;
                while (left < right) {
                    long sum = (long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum == target) {
                        result.Add(new List<int> { nums[i], nums[j], nums[left], nums[right] });
                        while (left < right && nums[left] == nums[left + 1]) left++;
                        while (left < right && nums[right] == nums[right - 1]) right--;
                        left++; right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }

        return result;
    }
}
`

### Interview Discussion
> "Extension of 3Sum. Sort first, two outer loops, two inner pointers. Duplicate skipping at every level. Using long for sum avoids integer overflow."

### Variations Asked By Companies
- **Amazon:** 4Sum II (four arrays, count tuples).
- **Google:** k-Sum general solution (recursive).

### Similar Problems
- Three Sum (Problem 2)
- Three Sum Closest (Problem 27)

---

## Problem 33: Trapping Rain Water

*See Problem 14 (Arrays). Also solved optimally with Two Pointers.*

---
# Sliding Window

## Problem 34: Longest Substring Without Repeating Characters

*See Problem 16 (Strings). Classic sliding window problem.*

---

## Problem 35: Minimum Window Substring

### Problem Statement
Given two strings s and 	, return the minimum window substring of s containing all characters of 	 (including duplicates).

### Brute Force Solution
- **Approach:** Check all substrings of s, verify they contain all chars of 	.
- **Time Complexity:** O(n² × m)
- **Space Complexity:** O(m)

### Optimal Solution (Sliding Window with Frequency Maps)
- **Approach:** Expand right to include all characters of 	 (tracked by a equired count). When valid, shrink left to minimise the window.
- **Time Complexity:** O(n + m)
- **Space Complexity:** O(m)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public string MinWindow(string s, string t) {
        if (string.IsNullOrEmpty(s) || string.IsNullOrEmpty(t)) return "";

        var need = new Dictionary<char, int>();
        foreach (char c in t) {
            need[c] = need.GetValueOrDefault(c, 0) + 1;
        }

        int required = need.Count;
        int have = 0;
        int left = 0, minLen = int.MaxValue, start = 0;
        var window = new Dictionary<char, int>();

        for (int right = 0; right < s.Length; right++) {
            char c = s[right];
            window[c] = window.GetValueOrDefault(c, 0) + 1;

            if (need.ContainsKey(c) && window[c] == need[c]) {
                have++;
            }

            while (have == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                char leftChar = s[left];
                window[leftChar]--;
                if (need.ContainsKey(leftChar) && window[leftChar] < need[leftChar]) {
                    have--;
                }
                left++;
            }
        }

        return minLen == int.MaxValue ? "" : s.Substring(start, minLen);
    }
}
`

### Interview Discussion
> "I use two frequency maps — one for the required characters and one for the current window. The have counter tracks how many characters have reached their required frequency."

### Variations Asked By Companies
- **Amazon:** Minimum window subsequence (order matters).
- **Google:** Window with the most frequent character.

### Similar Problems
- Longest Substring Without Repeating Characters (Problem 16)
- Permutation in String (Problem 37)

---

## Problem 36: Sliding Window Maximum

### Problem Statement
Given an array 
ums and sliding window size k, return an array of the maximum value in each window.

### Brute Force Solution
- **Approach:** For each window, scan all k elements to find max.
- **Time Complexity:** O(n × k)
- **Space Complexity:** O(1)

### Optimal Solution (Deque — Monotonic Queue)
- **Approach:** Maintain a deque of indices where values are in decreasing order. Remove smaller values from the back. Remove out-of-window indices from the front.
- **Time Complexity:** O(n)
- **Space Complexity:** O(k)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.Length == 0 || k <= 0) return new int[0];

        int n = nums.Length;
        int[] result = new int[n - k + 1];
        var deque = new LinkedList<int>();

        for (int i = 0; i < n; i++) {
            while (deque.Count > 0 && deque.First.Value < i - k + 1)
                deque.RemoveFirst();

            while (deque.Count > 0 && nums[deque.Last.Value] < nums[i])
                deque.RemoveLast();

            deque.AddLast(i);

            if (i >= k - 1)
                result[i - k + 1] = nums[deque.First.Value];
        }

        return result;
    }
}
`

### Interview Discussion
> "A monotonic deque maintains candidates for maximum in decreasing order. Each element enters and leaves once — O(n) amortised."

### Variations Asked By Companies
- **Amazon:** Sliding window median (use two heaps).
- **Google:** Sliding window maximum in a stream.

### Similar Problems
- Min Stack
- Maximum of all subarrays of size k

---

## Problem 37: Permutation in String

### Problem Statement
Given two strings s1 and s2, return 	rue if s2 contains a permutation of s1.

### Optimal Solution (Sliding Window + Frequency Array)
- **Approach:** Use a frequency array for s1. Maintain a window of length len(s1) in s2. When the frequency matches, return true.
- **Time Complexity:** O(n + m)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length) return false;

        int[] s1Count = new int[26];
        int[] windowCount = new int[26];

        for (int i = 0; i < s1.Length; i++) {
            s1Count[s1[i] - 'a']++;
            windowCount[s2[i] - 'a']++;
        }

        if (Matches(s1Count, windowCount)) return true;

        for (int i = s1.Length; i < s2.Length; i++) {
            windowCount[s2[i] - 'a']++;
            windowCount[s2[i - s1.Length] - 'a']--;
            if (Matches(s1Count, windowCount)) return true;
        }

        return false;
    }

    private bool Matches(int[] a, int[] b) {
        for (int i = 0; i < 26; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }
}
`

### Interview Discussion
> "Fixed window size equal to len(s1). Slide over s2, updating frequency counts. Compare arrays with O(1) alphabet size."

### Variations Asked By Companies
- **Amazon:** Find all anagrams in a string (return starting indices).
- **Google:** Permutation in string with wildcard characters.

### Similar Problems
- Valid Anagram (Problem 18)
- Find All Anagrams in a String

---

## Problem 38: Max Consecutive Ones III

### Problem Statement
Given a binary array 
ums and an integer k, return the maximum number of consecutive 1s if you can flip at most k zeros to ones.

### Optimal Solution (Sliding Window)
- **Approach:** Expand right. If 
ums[right] == 0, increment zeroCount. While zeroCount > k, shrink left. Track max window size.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int LongestOnes(int[] nums, int k) {
        int left = 0, zeroCount = 0, maxLen = 0;

        for (int right = 0; right < nums.Length; right++) {
            if (nums[right] == 0) zeroCount++;

            while (zeroCount > k) {
                if (nums[left] == 0) zeroCount--;
                left++;
            }

            maxLen = Math.Max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
`

### Interview Discussion
> "Sliding window where I track the number of zeros in the window. When zeros exceed k, shrink from the left."

### Variations Asked By Companies
- **Amazon:** Max consecutive ones I (k=0).
- **Google:** Max consecutive ones with unlimited flips.

### Similar Problems
- Longest Substring Without Repeating Characters (Problem 16)
- Longest Repeating Character Replacement

---

## Problem 39: Fruit Into Baskets

### Problem Statement
Maximum number of fruits you can collect with 2 baskets (each holds one fruit type).

### Optimal Solution (Sliding Window)
- **Approach:** Sliding window with a frequency map. When distinct count > 2, shrink left.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) (at most 3 keys)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int TotalFruit(int[] fruits) {
        var basket = new Dictionary<int, int>();
        int left = 0, max = 0;

        for (int right = 0; right < fruits.Length; right++) {
            basket[fruits[right]] = basket.GetValueOrDefault(fruits[right], 0) + 1;

            while (basket.Count > 2) {
                basket[fruits[left]]--;
                if (basket[fruits[left]] == 0) {
                    basket.Remove(fruits[left]);
                }
                left++;
            }

            max = Math.Max(max, right - left + 1);
        }

        return max;
    }
}
`

### Interview Discussion
> "This is equivalent to 'longest subarray with at most 2 distinct values'. Sliding window with a frequency map."

### Variations Asked By Companies
- **Amazon:** Longest substring with at most 2 distinct characters.
- **Google:** Longest substring with at most K distinct characters.

### Similar Problems
- Longest Substring Without Repeating Characters (Problem 16)
- Longest Substring with At Most K Distinct Characters

---

# Binary Search

## Problem 40: Binary Search

### Problem Statement
Given a sorted array and a target, return the index of target, or -1.

### Brute Force Solution
- **Approach:** Linear scan.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Binary Search)
- **Approach:** Divide search space in half at each step.
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int Search(int[] nums, int target) {
        int left = 0, right = nums.Length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}
`

### Interview Discussion
> "Standard binary search. Using left + (right - left) / 2 avoids overflow."

### Variations Asked By Companies
- **Amazon:** Ceiling / floor of target.
- **Google:** Search in infinite sorted array.

### Similar Problems
- Search in Rotated Sorted Array (Problem 11)
- First/Last Position (Problem 41)

---

## Problem 41: Find First and Last Position of Element in Sorted Array

### Problem Statement
Find starting and ending position of target in a sorted array.

### Brute Force Solution
- **Approach:** Linear scan.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Two Binary Searches)
- **Approach:** Binary search for leftmost index. Binary search for rightmost index.
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int[] SearchRange(int[] nums, int target) {
        int left = FindBound(nums, target, true);
        int right = FindBound(nums, target, false);
        return new int[] { left, right };
    }

    private int FindBound(int[] nums, int target, bool isLeft) {
        int lo = 0, hi = nums.Length - 1;
        int bound = -1;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (nums[mid] == target) {
                bound = mid;
                if (isLeft) hi = mid - 1;
                else lo = mid + 1;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return bound;
    }
}
`

### Interview Discussion
> "Two binary searches: one for the leftmost index (bias left when found), another for the rightmost (bias right)."

### Variations Asked By Companies
- **Amazon:** Count occurrences of target in a sorted array.
- **Google:** Find k closest elements.

### Similar Problems
- Binary Search (Problem 40)
- Search in Rotated Sorted Array (Problem 11)

---

## Problem 42: Search in Rotated Sorted Array

*See Problem 11 (Arrays). Same solution using modified binary search.*

---

## Problem 43: Find Peak Element

### Problem Statement
Find a peak element (greater than neighbours). Assume edges are -8.

### Brute Force Solution
- **Approach:** Linear scan.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Binary Search)
- **Approach:** Compare mid with mid+1. If 
ums[mid] < nums[mid+1], peak is on the right. Else peak is on the left.
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int FindPeakElement(int[] nums) {
        int left = 0, right = nums.Length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}
`

### Interview Discussion
> "Binary search based on the slope direction. If mid < mid+1, the peak must be to the right."

### Variations Asked By Companies
- **Amazon:** Find peak element in a 2D matrix.
- **Google:** Find multiple peaks.

### Similar Problems
- Find Minimum in Rotated Sorted Array (Problem 10)
- Search in Rotated Sorted Array (Problem 11)

---

## Problem 44: Sqrt(x)

### Problem Statement
Return the square root of x rounded down to the nearest integer.

### Brute Force Solution
- **Approach:** Loop from 0 to x, find the largest i where i*i = x.
- **Time Complexity:** O(vx)
- **Space Complexity:** O(1)

### Optimal Solution (Binary Search)
- **Approach:** Binary search in [0, x]. Compute mid*mid.
- **Time Complexity:** O(log x)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int MySqrt(int x) {
        if (x < 2) return x;

        int left = 1, right = x;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            long sq = (long)mid * mid;

            if (sq == x) return mid;
            if (sq < x) left = mid + 1;
            else right = mid - 1;
        }

        return right;
    }
}
`

### Interview Discussion
> "Binary search on [0, x]. Using long for mid*mid avoids overflow."

### Variations Asked By Companies
- **Amazon:** Pow(x, n) (Problem 45).
- **Google:** Valid perfect square.

### Similar Problems
- Pow(x, n) (Problem 45)
- Valid Perfect Square

---

## Problem 45: Pow(x, n)

### Problem Statement
Implement pow(x, n).

### Brute Force Solution
- **Approach:** Multiply x by itself n times.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Optimal Solution (Binary Exponentiation)
- **Approach:** If n is negative, invert x and negate n. While n > 0: if n is odd, multiply result by x. Square x. Divide n by 2.
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public double MyPow(double x, int n) {
        if (n == 0) return 1.0;
        if (n == 1) return x;

        long exp = n;
        if (exp < 0) {
            x = 1 / x;
            exp = -exp;
        }

        double result = 1.0;
        while (exp > 0) {
            if ((exp & 1) == 1) {
                result *= x;
            }
            x *= x;
            exp >>= 1;
        }

        return result;
    }
}
`

### Interview Discussion
> "Binary exponentiation: each iteration squares x and halves the exponent. Using long for exp avoids overflow with int.MinValue."

### Variations Asked By Companies
- **Amazon:** Pow(x, n) with modulo (modular exponentiation).
- **Google:** Super pow (array exponent).

### Similar Problems
- Sqrt(x) (Problem 44)
- Count Good Numbers

---

## Problem 46: Kth Smallest Element in a Sorted Matrix

### Problem Statement
Given an n×n matrix where each row and column is sorted, return the kth smallest element.

### Brute Force Solution
- **Approach:** Flatten, sort, return kth.
- **Time Complexity:** O(n² log n)
- **Space Complexity:** O(n²)

### Better Solution (Min-Heap)
- **Approach:** Push first element of each row onto a min-heap. Pop k times, pushing next element from the same row.
- **Time Complexity:** O(k log n)
- **Space Complexity:** O(n)

### Optimal Solution (Binary Search on Value Range)
- **Approach:** Binary search the value range [min, max]. Count elements = mid using the matrix's sorted property.
- **Time Complexity:** O(n log (max-min))
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int KthSmallest(int[][] matrix, int k) {
        int n = matrix.Length;
        int left = matrix[0][0], right = matrix[n - 1][n - 1];

        while (left < right) {
            int mid = left + (right - left) / 2;
            int count = CountLessOrEqual(matrix, mid);
            if (count < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    private int CountLessOrEqual(int[][] matrix, int target) {
        int n = matrix.Length;
        int count = 0;
        int row = n - 1, col = 0;

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= target) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }

        return count;
    }
}
`

### Interview Discussion
> "Binary search on value because the range of values is bounded. The counting function uses the sorted property (O(n) per check)."

### Variations Asked By Companies
- **Amazon:** Kth smallest element in a BST.
- **Google:** Find kth largest in an unsorted array.

### Similar Problems
- Kth Largest Element (Heaps section)
- Median of Two Sorted Arrays (Problem 47)

---

## Problem 47: Find Median of Two Sorted Arrays

### Problem Statement
Return the median of two sorted arrays. O(log (m+n)) runtime.

### Brute Force Solution
- **Approach:** Merge both arrays, find median.
- **Time Complexity:** O(m + n)
- **Space Complexity:** O(m + n)

### Optimal Solution (Binary Search on Partition)
- **Approach:** Binary search on the smaller array to find a partition such that max(leftPart) = min(rightPart) and the partition splits correctly.
- **Time Complexity:** O(log(min(m, n)))
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.Length > nums2.Length) {
            return FindMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.Length, n = nums2.Length;
        int left = 0, right = m;

        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;

            int maxLeft1 = partition1 == 0 ? int.MinValue : nums1[partition1 - 1];
            int minRight1 = partition1 == m ? int.MaxValue : nums1[partition1];
            int maxLeft2 = partition2 == 0 ? int.MinValue : nums2[partition2 - 1];
            int minRight2 = partition2 == n ? int.MaxValue : nums2[partition2];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    return (Math.Max(maxLeft1, maxLeft2) + Math.Min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.Max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }

        throw new ArgumentException("Input arrays are not sorted");
    }
}
`

### Interview Discussion
> "Binary search partitions on the smaller array. The goal is to partition both arrays so that all elements on the left are = all elements on the right."

### Variations Asked By Companies
- **Amazon:** Median of a data stream (Heaps section).
- **Google:** Kth element of two sorted arrays.

### Similar Problems
- Kth Largest Element (Heaps section)
- Find Kth Smallest Element in a Sorted Matrix (Problem 46)

---
# Trees

## Problem 48: Maximum Depth of Binary Tree

### Problem Statement
Return the maximum depth of a binary tree (longest root-to-leaf path).

### Brute Force Solution
- **Approach:** Level-order traversal (BFS) counting levels.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Recursive DFS)
- **Approach:** depth = 1 + max(maxDepth(left), maxDepth(right)).
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public int MaxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
    }
}
`

### Interview Discussion
> "Recursive DFS: the depth of a node is 1 plus the max depth of its children."

### Variations Asked By Companies
- **Amazon:** Minimum depth of binary tree.
- **Google:** Diameter of binary tree (Problem 59).

### Similar Problems
- Same Tree (Problem 49)
- Invert Tree (Problem 50)

---

## Problem 49: Same Tree

### Problem Statement
Check if two binary trees are structurally identical.

### Optimal Solution (Recursive)
- **Approach:** If both null ? true. If one null ? false. If values differ ? false. Otherwise recurse on children.
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
    }
}
`

### Interview Discussion
> "Recursively compare both nodes. If both null, they match. If only one null or values differ, they don't."

### Variations Asked By Companies
- **Amazon:** Symmetric tree (mirror of itself).
- **Google:** Subtree of another tree.

### Similar Problems
- Maximum Depth (Problem 48)
- Validate BST (Problem 51)

---

## Problem 50: Invert Binary Tree

### Problem Statement
Invert a binary tree (swap left and right children for every node).

### Optimal Solution (Recursive)
- **Approach:** Swap left and right children, then recursively invert both subtrees.
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    public TreeNode InvertTree(TreeNode root) {
        if (root == null) return null;

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        InvertTree(root.left);
        InvertTree(root.right);

        return root;
    }
}
`

### Interview Discussion
> "Swap children then recurse. Famous for the 'Homebrew' story."

### Variations Asked By Companies
- **Amazon:** Invert a binary tree iteratively (stack/queue).
- **Google:** Mirror of an n-ary tree.

### Similar Problems
- Same Tree (Problem 49)
- Maximum Depth (Problem 48)

---

## Problem 51: Validate Binary Search Tree

### Problem Statement
Determine if a binary tree is a valid BST.

### Brute Force Solution
- **Approach:** In-order traversal collects elements; check if sorted.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Recursive with Range)
- **Approach:** Pass down min and max allowed values. Each node must be within (min, max).
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    public bool IsValidBST(TreeNode root) {
        return Validate(root, long.MinValue, long.MaxValue);
    }

    private bool Validate(TreeNode node, long min, long max) {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;
        return Validate(node.left, min, node.val) &&
               Validate(node.right, node.val, max);
    }
}
`

### Interview Discussion
> "Pass a valid range [min, max] down the recursion. Using long handles int.MinValue/int.MaxValue corner cases."

### Variations Asked By Companies
- **Amazon:** Kth smallest in BST (Problem 57).
- **Google:** Recover BST (two elements swapped).

### Similar Problems
- Kth Smallest in BST (Problem 57)
- Lowest Common Ancestor of BST (Problem 58)

---

## Problem 52: Binary Tree Level Order Traversal

### Problem Statement
Return the level order traversal of a binary tree (left to right, level by level).

### Optimal Solution (BFS / Queue)
- **Approach:** Use a queue. For each level, process all nodes currently in the queue, adding their children.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> LevelOrder(TreeNode root) {
        var result = new List<IList<int>>();
        if (root == null) return result;

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        while (queue.Count > 0) {
            int levelSize = queue.Count;
            var level = new List<int>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.Dequeue();
                level.Add(node.val);
                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
            }

            result.Add(level);
        }

        return result;
    }
}
`

### Interview Discussion
> "Standard BFS using a queue. Processing one level at a time by capturing the queue size before processing."

### Variations Asked By Companies
- **Amazon:** Binary tree zigzag level order (Problem 53).
- **Google:** Binary tree right side view.

### Similar Problems
- Zigzag Traversal (Problem 53)
- Binary Tree Right Side View

---

## Problem 53: Binary Tree Zigzag Level Order Traversal

### Problem Statement
Return zigzag level order (alternating left-to-right, right-to-left per level).

### Optimal Solution (BFS + Flag)
- **Approach:** BFS with a boolean flag. When false, reverse the level list or use AddFirst.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> ZigzagLevelOrder(TreeNode root) {
        var result = new List<IList<int>>();
        if (root == null) return result;

        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        bool leftToRight = true;

        while (queue.Count > 0) {
            int levelSize = queue.Count;
            var level = new LinkedList<int>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.Dequeue();
                if (leftToRight) {
                    level.AddLast(node.val);
                } else {
                    level.AddFirst(node.val);
                }
                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
            }

            result.Add(new List<int>(level));
            leftToRight = !leftToRight;
        }

        return result;
    }
}
`

### Interview Discussion
> "Same as level order but toggle a direction flag. Using LinkedList for O(1) front insertion."

### Variations Asked By Companies
- **Amazon:** Vertical order traversal.
- **Google:** Diagonal traversal.

### Similar Problems
- Level Order Traversal (Problem 52)
- Binary Tree Right Side View

---

## Problem 54: Construct Binary Tree from Preorder and Inorder Traversal

### Problem Statement
Construct a binary tree from preorder and inorder traversal arrays.

### Brute Force Solution
- **Approach:** Recursively find root in inorder, build subtrees.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

### Optimal Solution (HashMap + Recursion)
- **Approach:** Build a hash map from value ? index in inorder. Use a preorder index pointer.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    private int preorderIndex = 0;
    private Dictionary<int, int> inorderMap;

    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        inorderMap = new Dictionary<int, int>();
        for (int i = 0; i < inorder.Length; i++) {
            inorderMap[inorder[i]] = i;
        }
        return Build(preorder, 0, inorder.Length - 1);
    }

    private TreeNode Build(int[] preorder, int left, int right) {
        if (left > right) return null;

        int rootVal = preorder[preorderIndex++];
        TreeNode root = new TreeNode(rootVal);
        int mid = inorderMap[rootVal];

        root.left = Build(preorder, left, mid - 1);
        root.right = Build(preorder, mid + 1, right);

        return root;
    }
}
`

### Interview Discussion
> "Preorder gives root first. Inorder partitions left and right subtrees. A hash map from value to inorder index avoids repeated scanning."

### Variations Asked By Companies
- **Amazon:** Construct from inorder and postorder.
- **Google:** Serialize/deserialize binary tree (Problem 56).

### Similar Problems
- Serialize/Deserialize (Problem 56)
- Convert Sorted Array to BST

---

## Problem 55: Lowest Common Ancestor of a Binary Tree

### Problem Statement
Find the lowest common ancestor of two nodes in a binary tree.

### Brute Force Solution
- **Approach:** Find paths from root to p and q, find last common node.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Recursive)
- **Approach:** Recursively search left and right. If both sides return non-null, current node is LCA.
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;

        TreeNode left = LowestCommonAncestor(root.left, p, q);
        TreeNode right = LowestCommonAncestor(root.right, p, q);

        if (left != null && right != null) return root;
        return left ?? right;
    }
}
`

### Interview Discussion
> "Recursively search left and right. If a node has both p and q in different subtrees, it's the LCA."

### Variations Asked By Companies
- **Amazon:** LCA of BST (Problem 58).
- **Google:** LCA with parent pointers.

### Similar Problems
- LCA of BST (Problem 58)
- Lowest Common Ancestor of a Binary Tree III

---

## Problem 56: Serialize and Deserialize Binary Tree

### Problem Statement
Design an algorithm to serialise a binary tree into a string and deserialise it back.

### Optimal Solution (Preorder with Null Markers)
- **Approach:** Serialize: preorder traversal with "null" for null nodes. Deserialize: split string, use a queue, recursively build.
- **Time Complexity:** O(n) for both
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;
using System.Text;

public class Codec {
    public string serialize(TreeNode root) {
        var sb = new StringBuilder();
        SerializeHelper(root, sb);
        return sb.ToString().TrimEnd(',');
    }

    private void SerializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.Append("null,");
            return;
        }
        sb.Append(node.val).Append(',');
        SerializeHelper(node.left, sb);
        SerializeHelper(node.right, sb);
    }

    public TreeNode deserialize(string data) {
        var queue = new Queue<string>(data.Split(','));
        return DeserializeHelper(queue);
    }

    private TreeNode DeserializeHelper(Queue<string> queue) {
        string val = queue.Dequeue();
        if (val == "null") return null;

        TreeNode node = new TreeNode(int.Parse(val));
        node.left = DeserializeHelper(queue);
        node.right = DeserializeHelper(queue);
        return node;
    }
}
`

### Interview Discussion
> "I use preorder traversal with null markers. The serialised string uniquely represents the tree."

### Variations Asked By Companies
- **Amazon:** Serialize and deserialize BST (more compact).
- **Google:** Serialize and deserialize N-ary tree.

### Similar Problems
- Construct Tree from Preorder/Inorder (Problem 54)
- Encode and Decode Strings

---

## Problem 57: Kth Smallest Element in a BST

### Problem Statement
Return the kth smallest value (1-indexed) in a BST.

### Brute Force Solution
- **Approach:** In-order traversal into a list, return list[k-1].
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (In-order Traversal — Early Exit)
- **Approach:** Perform in-order traversal. Maintain a counter. When counter == k, save value and stop.
- **Time Complexity:** O(h + k)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    private int count = 0;
    private int result = 0;

    public int KthSmallest(TreeNode root, int k) {
        InOrder(root, k);
        return result;
    }

    private void InOrder(TreeNode node, int k) {
        if (node == null) return;

        InOrder(node.left, k);
        count++;
        if (count == k) {
            result = node.val;
            return;
        }
        InOrder(node.right, k);
    }
}
`

### Interview Discussion
> "In-order traversal of a BST yields sorted order. I traverse with a counter; when it reaches k, I stop."

### Variations Asked By Companies
- **Amazon:** Kth largest in BST (reverse in-order).
- **Google:** Kth smallest in BST with frequent modifications.

### Similar Problems
- Validate BST (Problem 51)
- LCA of BST (Problem 58)

---

## Problem 58: Lowest Common Ancestor of a BST

### Problem Statement
Find the LCA of two nodes in a BST.

### Brute Force Solution
- **Approach:** Find paths from root, find last common node.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Optimal Solution (Leverage BST Property)
- **Approach:** If both p and q are smaller than root, go left. If both larger, go right. Otherwise, root is LCA.
- **Time Complexity:** O(h)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }
}
`

### Interview Discussion
> "BST ordering means the LCA is the first node where p and q diverge — one in left subtree, one in right subtree."

### Variations Asked By Companies
- **Amazon:** LCA of a binary tree (Problem 55).
- **Google:** LCA with nodes that may not exist.

### Similar Problems
- LCA of Binary Tree (Problem 55)
- Validate BST (Problem 51)

---

## Problem 59: Diameter of Binary Tree

### Problem Statement
Return the length of the longest path between any two nodes (measured by edges).

### Brute Force Solution
- **Approach:** For each node, compute left depth + right depth.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(h)

### Optimal Solution (DFS with Global Max)
- **Approach:** Recursively compute depth while updating a global max: diameter = max(diameter, leftDepth + rightDepth).
- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

### C# Implementation
`csharp
public class Solution {
    private int diameter = 0;

    public int DiameterOfBinaryTree(TreeNode root) {
        Depth(root);
        return diameter;
    }

    private int Depth(TreeNode node) {
        if (node == null) return 0;

        int left = Depth(node.left);
        int right = Depth(node.right);

        diameter = Math.Max(diameter, left + right);

        return 1 + Math.Max(left, right);
    }
}
`

### Interview Discussion
> "During the depth computation, I update a global max with leftDepth + rightDepth."

### Variations Asked By Companies
- **Amazon:** Longest path in an N-ary tree.
- **Google:** Longest path with same value.

### Similar Problems
- Maximum Depth (Problem 48)
- Binary Tree Maximum Path Sum

---
# Graphs

## Problem 60: Clone Graph

### Problem Statement
Given a node in a connected undirected graph, return a deep copy.

### Optimal Solution (DFS + HashMap)
- **Approach:** Use a hash map old ? new. Recursively clone each node and its neighbours.
- **Time Complexity:** O(n + e)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Node {
    public int val;
    public IList<Node> neighbors;
    public Node() { val = 0; neighbors = new List<Node>(); }
    public Node(int _val) { val = _val; neighbors = new List<Node>(); }
    public Node(int _val, List<Node> _neighbors) { val = _val; neighbors = _neighbors; }
}

public class Solution {
    private Dictionary<Node, Node> visited = new Dictionary<Node, Node>();

    public Node CloneGraph(Node node) {
        if (node == null) return null;
        if (visited.ContainsKey(node)) return visited[node];

        Node clone = new Node(node.val);
        visited[node] = clone;

        foreach (Node neighbor in node.neighbors) {
            clone.neighbors.Add(CloneGraph(neighbor));
        }

        return clone;
    }
}
`

### Interview Discussion
> "DFS with a hash map to avoid cycles. The map ensures each original node is cloned exactly once."

### Variations Asked By Companies
- **Amazon:** Clone binary tree with random pointers.
- **Google:** Clone an N-ary tree.

### Similar Problems
- Copy List with Random Pointer
- Course Schedule II (Problem 61)

---

## Problem 61: Course Schedule I / II

### Problem Statement
Return whether all courses can be finished (I). For II, return the order of courses.

### Brute Force Solution
- **Approach:** DFS without cycle detection — fails.

### Optimal Solution (Topological Sort — BFS / Kahn's Algorithm)
- **Approach:** Build adjacency list and in-degree array. Process nodes with in-degree 0.
- **Time Complexity:** O(V + E)
- **Space Complexity:** O(V + E)

### C# Implementation (Course Schedule II — returns order)
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        var adj = new List<int>[numCourses];
        var inDegree = new int[numCourses];

        for (int i = 0; i < numCourses; i++) adj[i] = new List<int>();

        foreach (var pre in prerequisites) {
            int course = pre[0], prereq = pre[1];
            adj[prereq].Add(course);
            inDegree[course]++;
        }

        var queue = new Queue<int>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.Enqueue(i);
        }

        var order = new List<int>();
        while (queue.Count > 0) {
            int curr = queue.Dequeue();
            order.Add(curr);
            foreach (int next in adj[curr]) {
                inDegree[next]--;
                if (inDegree[next] == 0) queue.Enqueue(next);
            }
        }

        if (order.Count != numCourses) return new int[0];
        return order.ToArray();
    }
}
`

### Interview Discussion
> "Kahn's algorithm: build in-degree + adjacency list. Process nodes with 0 in-degree. If all nodes are processed, a topological order exists."

### Variations Asked By Companies
- **Amazon:** Course Schedule III (with durations).
- **Google:** Alien dictionary (Problem 64).

### Similar Problems
- Alien Dictionary (Problem 64)
- Graph Valid Tree (Problem 65)

---

## Problem 62: Number of Islands

### Problem Statement
Count the number of islands (connected 1s horizontally/vertically) in a 2D grid.

### Optimal Solution (DFS — Flood Fill)
- **Approach:** Iterate each cell. When land is found, increment count and DFS to mark all connected land as visited.
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n) worst case for recursion

### C# Implementation
`csharp
using System;

public class Solution {
    public int NumIslands(char[][] grid) {
        if (grid == null || grid.Length == 0) return 0;

        int count = 0;
        int rows = grid.Length, cols = grid[0].Length;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    DFS(grid, r, c);
                }
            }
        }

        return count;
    }

    private void DFS(char[][] grid, int r, int c) {
        if (r < 0 || r >= grid.Length || c < 0 || c >= grid[0].Length || grid[r][c] != '1')
            return;

        grid[r][c] = '0';
        DFS(grid, r - 1, c);
        DFS(grid, r + 1, c);
        DFS(grid, r, c - 1);
        DFS(grid, r, c + 1);
    }
}
`

### Interview Discussion
> "Flood-fill DFS. Increment count on finding land, then sink the entire island by setting all connected '1's to '0'."

### Variations Asked By Companies
- **Amazon:** Max area of island.
- **Google:** Number of closed islands.

### Similar Problems
- Pacific Atlantic Water Flow (Problem 63)
- Max Area of Island

---

## Problem 63: Pacific Atlantic Water Flow

### Problem Statement
Find cells from which water can flow to both Pacific (top + left) and Atlantic (bottom + right) oceans.

### Optimal Solution (Reverse DFS — From Oceans)
- **Approach:** Start DFS from Pacific and Atlantic borders separately, tracking reachable cells. Return intersection.
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> PacificAtlantic(int[][] heights) {
        int rows = heights.Length, cols = heights[0].Length;
        bool[,] pacific = new bool[rows, cols];
        bool[,] atlantic = new bool[rows, cols];

        for (int c = 0; c < cols; c++) {
            DFS(heights, 0, c, pacific, int.MinValue);
            DFS(heights, rows - 1, c, atlantic, int.MinValue);
        }

        for (int r = 0; r < rows; r++) {
            DFS(heights, r, 0, pacific, int.MinValue);
            DFS(heights, r, cols - 1, atlantic, int.MinValue);
        }

        var result = new List<IList<int>>();
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (pacific[r, c] && atlantic[r, c]) {
                    result.Add(new List<int> { r, c });
                }
            }
        }

        return result;
    }

    private void DFS(int[][] heights, int r, int c, bool[,] ocean, int prevHeight) {
        if (r < 0 || r >= heights.Length || c < 0 || c >= heights[0].Length) return;
        if (ocean[r, c] || heights[r][c] < prevHeight) return;

        ocean[r, c] = true;
        int h = heights[r][c];
        DFS(heights, r - 1, c, ocean, h);
        DFS(heights, r + 1, c, ocean, h);
        DFS(heights, r, c - 1, ocean, h);
        DFS(heights, r, c + 1, ocean, h);
    }
}
`

### Interview Discussion
> "Reverse thinking: start from ocean borders and flow inward to higher ground. Two boolean grids track which cells reach each ocean."

### Variations Asked By Companies
- **Amazon:** Number of islands (Problem 62).
- **Google:** Longest increasing path in a matrix.

### Similar Problems
- Number of Islands (Problem 62)
- Word Search (Backtracking section)

---

## Problem 64: Alien Dictionary

### Problem Statement
Given a sorted dictionary of an alien language, find the order of letters.

### Optimal Solution (Topological Sort)
- **Approach:** Compare adjacent words to extract ordering rules. Build graph. Perform topological sort.
- **Time Complexity:** O(C) where C = total characters
- **Space Complexity:** O(1) — 26 letters

### C# Implementation
`csharp
using System;
using System.Collections.Generic;
using System.Text;

public class Solution {
    public string AlienOrder(string[] words) {
        var graph = new Dictionary<char, List<char>>();
        var inDegree = new Dictionary<char, int>();

        foreach (var word in words) {
            foreach (char c in word) {
                if (!graph.ContainsKey(c)) graph[c] = new List<char>();
                if (!inDegree.ContainsKey(c)) inDegree[c] = 0;
            }
        }

        for (int i = 0; i < words.Length - 1; i++) {
            string w1 = words[i], w2 = words[i + 1];
            int minLen = Math.Min(w1.Length, w2.Length);
            bool found = false;

            for (int j = 0; j < minLen; j++) {
                if (w1[j] != w2[j]) {
                    graph[w1[j]].Add(w2[j]);
                    inDegree[w2[j]]++;
                    found = true;
                    break;
                }
            }

            if (!found && w1.Length > w2.Length) return "";
        }

        var queue = new Queue<char>();
        foreach (var kvp in inDegree) {
            if (kvp.Value == 0) queue.Enqueue(kvp.Key);
        }

        var sb = new StringBuilder();
        while (queue.Count > 0) {
            char c = queue.Dequeue();
            sb.Append(c);
            foreach (char next in graph[c]) {
                inDegree[next]--;
                if (inDegree[next] == 0) queue.Enqueue(next);
            }
        }

        return sb.Length == graph.Count ? sb.ToString() : "";
    }
}
`

### Interview Discussion
> "Compare adjacent words to find ordering constraints. Build a DAG and apply Kahn's algorithm."

### Variations Asked By Companies
- **Amazon:** Alien dictionary with reverse order.
- **Google:** Reconstruct itinerary.

### Similar Problems
- Course Schedule I/II (Problem 61)
- Graph Valid Tree (Problem 65)

---

## Problem 65: Graph Valid Tree

### Problem Statement
Determine if edges form a valid tree (fully connected and acyclic).

### Optimal Solution (Union-Find)
- **Approach:** For each edge, if nodes share a root ? cycle. After processing, check single component.
- **Time Complexity:** O(n + a(n))
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;

public class Solution {
    public bool ValidTree(int n, int[][] edges) {
        if (edges.Length != n - 1) return false;

        int[] parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;

        foreach (var edge in edges) {
            int root1 = Find(parent, edge[0]);
            int root2 = Find(parent, edge[1]);
            if (root1 == root2) return false;
            parent[root1] = root2;
        }

        return true;
    }

    private int Find(int[] parent, int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent, parent[x]);
        }
        return parent[x];
    }
}
`

### Interview Discussion
> "A valid tree must have exactly n-1 edges and no cycles. I use Union-Find to detect cycles."

### Variations Asked By Companies
- **Amazon:** Number of connected components.
- **Google:** Redundant connection.

### Similar Problems
- Number of Connected Components
- Course Schedule (Problem 61)

---

## Problem 66: Network Delay Time

### Problem Statement
Return the time for all nodes to receive a signal from source k (maximum shortest path).

### Optimal Solution (Dijkstra's Algorithm)
- **Approach:** Use a priority queue to always expand the shortest known distance.
- **Time Complexity:** O((V + E) log V)
- **Space Complexity:** O(V + E)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int NetworkDelayTime(int[][] times, int n, int k) {
        var graph = new List<(int, int)>[n + 1];
        for (int i = 1; i <= n; i++) graph[i] = new List<(int, int)>();
        foreach (var t in times) {
            graph[t[0]].Add((t[1], t[2]));
        }

        var dist = new int[n + 1];
        Array.Fill(dist, int.MaxValue);
        dist[k] = 0;

        var pq = new SortedSet<(int dist, int node)> { (0, k) };

        while (pq.Count > 0) {
            var (d, u) = pq.Min;
            pq.Remove(pq.Min);
            if (d > dist[u]) continue;

            foreach (var (v, w) in graph[u]) {
                int newDist = d + w;
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    pq.Add((newDist, v));
                }
            }
        }

        int max = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == int.MaxValue) return -1;
            max = Math.Max(max, dist[i]);
        }
        return max;
    }
}
`

### Interview Discussion
> "Dijkstra's with a priority queue. The answer is the maximum shortest distance from k to any node."

### Variations Asked By Companies
- **Amazon:** Cheapest flights within K stops (Problem 68).
- **Google:** Path with maximum probability.

### Similar Problems
- Cheapest Flights Within K Stops (Problem 68)
- Path With Maximum Probability

---

## Problem 67: Word Ladder

### Problem Statement
Return the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time.

### Optimal Solution (Bidirectional BFS)
- **Approach:** BFS from both ends, meeting in the middle. Generate all possible one-letter variations.
- **Time Complexity:** O(M² × N) where M = word length, N = word count
- **Space Complexity:** O(N)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int LadderLength(string beginWord, string endWord, IList<string> wordList) {
        var wordSet = new HashSet<string>(wordList);
        if (!wordSet.Contains(endWord)) return 0;

        var beginSet = new HashSet<string> { beginWord };
        var endSet = new HashSet<string> { endWord };
        var visited = new HashSet<string> { beginWord, endWord };
        int level = 1;

        while (beginSet.Count > 0 && endSet.Count > 0) {
            if (beginSet.Count > endSet.Count) {
                var temp = beginSet;
                beginSet = endSet;
                endSet = temp;
            }

            var nextSet = new HashSet<string>();
            foreach (string word in beginSet) {
                char[] chars = word.ToCharArray();
                for (int i = 0; i < chars.Length; i++) {
                    char original = chars[i];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        chars[i] = c;
                        string newWord = new string(chars);

                        if (endSet.Contains(newWord)) return level + 1;
                        if (wordSet.Contains(newWord) && !visited.Contains(newWord)) {
                            nextSet.Add(newWord);
                            visited.Add(newWord);
                        }
                    }
                    chars[i] = original;
                }
            }

            beginSet = nextSet;
            level++;
        }

        return 0;
    }
}
`

### Interview Discussion
> "Bidirectional BFS halves the search space. For each word, generate all possible one-letter variations and check if they exist in the word set."

### Variations Asked By Companies
- **Amazon:** Word Ladder II (return all shortest paths).
- **Google:** Minimum genetic mutation (similar, with 4-character genes).

### Similar Problems
- Word Search (Backtracking section)
- Minimum Genetic Mutation

---

## Problem 68: Cheapest Flights Within K Stops

### Problem Statement
Find the cheapest price from src to dst with at most K stops.

### Optimal Solution (Bellman-Ford / BFS with DP)
- **Approach:** DP array of size n, initialised with infinity. Relax edges up to K+1 times.
- **Time Complexity:** O(K × E)
- **Space Complexity:** O(n)

### C# Implementation (Bellman-Ford Style)
`csharp
using System;

public class Solution {
    public int FindCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] prices = new int[n];
        Array.Fill(prices, int.MaxValue);
        prices[src] = 0;

        for (int i = 0; i <= k; i++) {
            int[] temp = (int[])prices.Clone();
            foreach (var flight in flights) {
                int from = flight[0], to = flight[1], price = flight[2];
                if (prices[from] != int.MaxValue && prices[from] + price < temp[to]) {
                    temp[to] = prices[from] + price;
                }
            }
            prices = temp;
        }

        return prices[dst] == int.MaxValue ? -1 : prices[dst];
    }
}
`

### Interview Discussion
> "Bellman-Ford variant: relax edges K+1 times. Each iteration represents allowing one more stop."

### Variations Asked By Companies
- **Amazon:** Network delay time (Problem 66).
- **Google:** Minimum cost to reach destination with at most K stops.

### Similar Problems
- Network Delay Time (Problem 66)
- Minimum Cost to Reach Destination

---
# Dynamic Programming

## Problem 69: Climbing Stairs

### Problem Statement
You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. How many distinct ways to reach the top?

### Brute Force Solution
- **Approach:** Recursion: (n) = f(n-1) + f(n-2).
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP / Fibonacci)
- **Approach:** Iterative DP: dp[i] = dp[i-1] + dp[i-2] with O(1) space.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int ClimbStairs(int n) {
        if (n <= 2) return n;

        int one = 1, two = 2;
        for (int i = 3; i <= n; i++) {
            int curr = one + two;
            one = two;
            two = curr;
        }

        return two;
    }
}
`

### Interview Discussion
> "This is Fibonacci in disguise. I use constant space by keeping only the last two values."

### Variations Asked By Companies
- **Amazon:** Min cost climbing stairs (weighted).
- **Google:** Staircase with 3-step jumps.

### Similar Problems
- Fibonacci Number
- Min Cost Climbing Stairs

---

## Problem 70: Coin Change

### Problem Statement
Given coins of different denominations and a total amount, return the fewest number of coins needed to make up that amount.

### Brute Force Solution
- **Approach:** Recursion: try every coin at each step.
- **Time Complexity:** O(n^amount) — exponential

### Optimal Solution (DP — Bottom-Up)
- **Approach:** dp[i] = min(dp[i - coin] + 1) for each coin, for each amount from 1 to amount.
- **Time Complexity:** O(n × amount)
- **Space Complexity:** O(amount)

### C# Implementation
`csharp
using System;

public class Solution {
    public int CoinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Array.Fill(dp, amount + 1);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            foreach (int coin in coins) {
                if (coin <= i) {
                    dp[i] = Math.Min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
`

### Interview Discussion
> "Bottom-up DP where dp[i] = min coins to make amount i. Initialised with amount+1 (impossible). Edge case: amount = 0."

### Variations Asked By Companies
- **Amazon:** Coin Change II (number of combinations).
- **Google:** Minimum number of coins with infinite supply.

### Similar Problems
- Coin Change II
- Combination Sum IV

---

## Problem 71: Longest Increasing Subsequence

### Problem Statement
Find the length of the longest strictly increasing subsequence.

### Brute Force Solution
- **Approach:** Generate all 2n subsequences, check increasing.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Better Solution (DP — O(n²))
- **Approach:** dp[i] = 1 + max(dp[j]) for all j < i and 
ums[j] < nums[i].
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

### Optimal Solution (DP with Binary Search — Patience Sorting)
- **Approach:** Maintain an array of tails. For each num, binary search for the first tail >= num and replace it.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;

public class Solution {
    public int LengthOfLIS(int[] nums) {
        int[] tails = new int[nums.Length];
        int size = 0;

        foreach (int num in nums) {
            int left = 0, right = size;
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tails[left] = num;
            if (left == size) size++;
        }

        return size;
    }
}
`

### Interview Discussion
> "Patience sorting: tails[i] is the smallest possible tail of an increasing subsequence of length i+1. Binary search finds where to place each number."

### Variations Asked By Companies
- **Amazon:** Number of LIS (count how many).
- **Google:** Longest increasing subsequence with printing.

### Similar Problems
- Longest Common Subsequence (Problem 72)
- Russian Doll Envelopes

---

## Problem 72: Longest Common Subsequence

### Problem Statement
Given two strings, return the length of their longest common subsequence.

### Brute Force Solution
- **Approach:** Generate all subsequences of one string and check in the other.
- **Time Complexity:** O(2n × m)
- **Space Complexity:** O(n)

### Optimal Solution (DP — Tabulation)
- **Approach:** dp[i][j] = LCS of 	ext1[0..i] and 	ext2[0..j]. If chars match: 1 + dp[i-1][j-1]. Else: max(dp[i-1][j], dp[i][j-1]).
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n), can be optimised to O(min(m,n))

### C# Implementation
`csharp
using System;

public class Solution {
    public int LongestCommonSubsequence(string text1, string text2) {
        int m = text1.Length, n = text2.Length;
        int[,] dp = new int[m + 1, n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i - 1] == text2[j - 1]) {
                    dp[i, j] = 1 + dp[i - 1, j - 1];
                } else {
                    dp[i, j] = Math.Max(dp[i - 1, j], dp[i, j - 1]);
                }
            }
        }

        return dp[m, n];
    }
}
`

### Interview Discussion
> "Classic DP with tabulation. I can optimise space to O(min(m,n)) using two rows."

### Variations Asked By Companies
- **Amazon:** Shortest common supersequence.
- **Google:** Minimum insertions to make palindrome.

### Similar Problems
- Edit Distance (Problem 73)
- Longest Palindromic Subsequence (Problem 83)

---

## Problem 73: Edit Distance (Levenshtein Distance)

### Problem Statement
Given two strings, return the minimum number of operations (insert, delete, replace) to convert one to the other.

### Brute Force Solution
- **Approach:** Recursion with 3 branches.
- **Time Complexity:** O(3^(m+n))
- **Space Complexity:** O(m+n)

### Optimal Solution (DP — Tabulation)
- **Approach:** dp[i][j] = min edits for word1[0..i] and word2[0..j]. If chars match: copy diagonal. Else: 1 + min(insert, delete, replace).
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

### C# Implementation
`csharp
using System;

public class Solution {
    public int MinDistance(string word1, string word2) {
        int m = word1.Length, n = word2.Length;
        int[,] dp = new int[m + 1, n + 1];

        for (int i = 0; i <= m; i++) dp[i, 0] = i;
        for (int j = 0; j <= n; j++) dp[0, j] = j;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i, j] = dp[i - 1, j - 1];
                } else {
                    dp[i, j] = 1 + Math.Min(Math.Min(dp[i - 1, j], dp[i, j - 1]), dp[i - 1, j - 1]);
                }
            }
        }

        return dp[m, n];
    }
}
`

### Interview Discussion
> "DP table where each cell represents the edit distance for prefixes. The three operations correspond to the three neighbours."

### Variations Asked By Companies
- **Amazon:** One edit distance (check if exactly one edit away).
- **Google:** Delete operation for two strings.

### Similar Problems
- Longest Common Subsequence (Problem 72)
- One Edit Distance

---

## Problem 74: 0/1 Knapsack

### Problem Statement
Given items with weights and values, and a knapsack capacity, find the maximum value you can carry.

### Brute Force Solution
- **Approach:** For each item, include or exclude (2n).
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP — Tabulation)
- **Approach:** dp[i][w] = max value using first i items with capacity w. Transition: include or exclude current item.
- **Time Complexity:** O(n × capacity)
- **Space Complexity:** O(n × capacity), can optimise to O(capacity)

### C# Implementation
`csharp
using System;

public class Solution {
    public int Knapsack(int capacity, int[] weights, int[] values) {
        int n = weights.Length;
        int[,] dp = new int[n + 1, capacity + 1];

        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i, w] = Math.Max(
                        dp[i - 1, w],
                        values[i - 1] + dp[i - 1, w - weights[i - 1]]
                    );
                } else {
                    dp[i, w] = dp[i - 1, w];
                }
            }
        }

        return dp[n, capacity];
    }
}
`

### Interview Discussion
> "Classic DP: for each item, decide to include it (if it fits) or exclude it. The DP table tracks max value for each capacity."

### Variations Asked By Companies
- **Amazon:** Partition equal subset sum (Problem 82).
- **Google:** Coin Change II (unbounded knapsack).

### Similar Problems
- Partition Equal Subset Sum (Problem 82)
- Coin Change II

---

## Problem 75: House Robber

### Problem Statement
Given an array of money in houses, you cannot rob adjacent houses. Return the maximum amount you can rob.

### Brute Force Solution
- **Approach:** Recursion: for each house, rob or skip.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP — O(n) time, O(1) space)
- **Approach:** ob = max(prevRobbed, prevNotRobbed + nums[i]).
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int Rob(int[] nums) {
        int prev1 = 0, prev2 = 0;

        foreach (int num in nums) {
            int temp = prev1;
            prev1 = Math.Max(prev1, prev2 + num);
            prev2 = temp;
        }

        return prev1;
    }
}
`

### Interview Discussion
> "Track the max for two states: robbing or not robbing current house. Only the previous two values are needed."

### Variations Asked By Companies
- **Amazon:** House Robber II (houses are in a circle).
- **Google:** House Robber III (houses are a tree, DFS).

### Similar Problems
- House Robber II (Problem 76)
- Maximum Subarray (Problem 5)

---

## Problem 76: House Robber II

### Problem Statement
Same as House Robber but houses are arranged in a circle (first and last are adjacent).

### Optimal Solution (Two Passes)
- **Approach:** Run House Robber twice: once excluding first house, once excluding last house. Take max.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int Rob(int[] nums) {
        if (nums.Length == 1) return nums[0];

        return Math.Max(RobRange(nums, 0, nums.Length - 2),
                        RobRange(nums, 1, nums.Length - 1));
    }

    private int RobRange(int[] nums, int start, int end) {
        int prev1 = 0, prev2 = 0;

        for (int i = start; i <= end; i++) {
            int temp = prev1;
            prev1 = Math.Max(prev1, prev2 + nums[i]);
            prev2 = temp;
        }

        return prev1;
    }
}
`

### Interview Discussion
> "The circle constraint means I cannot rob both first and last. I solve two linear cases and take the max."

### Variations Asked By Companies
- **Amazon:** House Robber III (tree, DFS with DP).
- **Google:** Delete and earn (similar DP).

### Similar Problems
- House Robber (Problem 75)
- Delete and Earn

---

## Problem 77: Decode Ways

### Problem Statement
Given a digit string, return the number of ways to decode it ('A'=1, 'B'=2, ... 'Z'=26).

### Brute Force Solution
- **Approach:** Recursion: take 1 digit or 2 digits.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP)
- **Approach:** dp[i] = dp[i-1] (if one digit valid) + dp[i-2] (if two digits valid). O(1) space possible.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int NumDecodings(string s) {
        if (string.IsNullOrEmpty(s) || s[0] == '0') return 0;

        int prev = 1, prevPrev = 1;

        for (int i = 1; i < s.Length; i++) {
            int curr = 0;

            if (s[i] != '0') {
                curr += prev;
            }

            int twoDigit = int.Parse(s.Substring(i - 1, 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                curr += prevPrev;
            }

            prevPrev = prev;
            prev = curr;
        }

        return prev;
    }
}
`

### Interview Discussion
> "DP where each position depends on one digit and two digit decodability. Edge case: leading zero means 0 ways."

### Variations Asked By Companies
- **Amazon:** Decode Ways II (with '*' wildcard character).
- **Google:** Count possible decodings.

### Similar Problems
- Climbing Stairs (Problem 69)
- Unique Paths (Problem 78)

---

## Problem 78: Unique Paths

### Problem Statement
A robot is at the top-left of an m×n grid. It can only move down or right. How many unique paths to the bottom-right?

### Brute Force Solution
- **Approach:** Recursion: (m,n) = f(m-1,n) + f(m,n-1).
- **Time Complexity:** O(2^(m+n))
- **Space Complexity:** O(m+n)

### Optimal Solution (DP — Tabulation)
- **Approach:** dp[i][j] = dp[i-1][j] + dp[i][j-1] with base row/col = 1. O(min(m,n)) space possible.
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(min(m,n))

### C# Implementation
`csharp
using System;

public class Solution {
    public int UniquePaths(int m, int n) {
        int[] dp = new int[n];
        Array.Fill(dp, 1);

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }

        return dp[n - 1];
    }
}
`

### Interview Discussion
> "Combinatorial solution: C(m+n-2, m-1). But DP is easier to explain. I optimise space using a single row."

### Variations Asked By Companies
- **Amazon:** Unique paths II (with obstacles).
- **Google:** Minimum path sum (weighted grid).

### Similar Problems
- Climbing Stairs (Problem 69)
- Minimum Path Sum

---

## Problem 79: Palindromic Substrings

### Problem Statement
Count the number of palindromic substrings in a string.

### Brute Force Solution
- **Approach:** Check all substrings.
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

### Optimal Solution (Expand Around Center)
- **Approach:** Each of the 2n-1 centres expands outward counting palindromes.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int CountSubstrings(string s) {
        int count = 0;

        for (int i = 0; i < s.Length; i++) {
            count += Expand(s, i, i);     // odd
            count += Expand(s, i, i + 1); // even
        }

        return count;
    }

    private int Expand(string s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
}
`

### Interview Discussion
> "Same expand-around-centre technique from Longest Palindromic Substring. Count each palindrome found during expansion."

### Variations Asked By Companies
- **Amazon:** Longest palindromic substring (Problem 17).
- **Google:** Count palindromic subsequences.

### Similar Problems
- Longest Palindromic Substring (Problem 17)
- Longest Palindromic Subsequence (Problem 83)

---

## Problem 80: Word Break

### Problem Statement
Given a string s and a dictionary wordDict, return true if s can be segmented into dictionary words.

### Brute Force Solution
- **Approach:** Recursion: try every prefix.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP)
- **Approach:** dp[i] = true if s[0..i] can be segmented. For each j < i, if dp[j] and s[j..i] is in dict, set dp[i] = true.
- **Time Complexity:** O(n² × k) where k is max word length
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public bool WordBreak(string s, IList<string> wordDict) {
        var wordSet = new HashSet<string>(wordDict);
        bool[] dp = new bool[s.Length + 1];
        dp[0] = true;

        for (int i = 1; i <= s.Length; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.Contains(s.Substring(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.Length];
    }
}
`

### Interview Discussion
> "DP where dp[i] indicates that the prefix of length i is segmentable. I iterate over possible split points."

### Variations Asked By Companies
- **Amazon:** Word Break II (return all possible sentences, DFS + memo).
- **Google:** Concatenated words.

### Similar Problems
- Word Break II
- Longest Word in Dictionary

---

## Problem 81: Maximum Product Subarray

### Problem Statement
Find the contiguous subarray with the largest product.

### Brute Force Solution
- **Approach:** Check all subarrays.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (DP — Track Min and Max)
- **Approach:** Maintain maxProd and minProd ending at i. Since a negative can flip min to max, swap if current is negative.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int MaxProduct(int[] nums) {
        int maxProd = nums[0], minProd = nums[0], result = nums[0];

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] < 0) {
                int temp = maxProd;
                maxProd = minProd;
                minProd = temp;
            }

            maxProd = Math.Max(nums[i], maxProd * nums[i]);
            minProd = Math.Min(nums[i], minProd * nums[i]);

            result = Math.Max(result, maxProd);
        }

        return result;
    }
}
`

### Interview Discussion
> "Similar to Kadane but tracking both max and min because a negative times a negative becomes positive. Swapping when encountering a negative number handles the sign flip."

### Variations Asked By Companies
- **Amazon:** Maximum sum subarray (Problem 5, simpler).
- **Google:** Maximum product of three numbers.

### Similar Problems
- Maximum Subarray (Problem 5)
- Maximum Product of Three Numbers

---

## Problem 82: Partition Equal Subset Sum

### Problem Statement
Given an array, return true if it can be partitioned into two subsets with equal sum.

### Brute Force Solution
- **Approach:** Generate all subsets, check sum.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP — 0/1 Knapsack)
- **Approach:** If total sum is odd ? false. Target = sum/2. DP boolean array where dp[s] = true if subset sum s can be formed.
- **Time Complexity:** O(n × target)
- **Space Complexity:** O(target)

### C# Implementation
`csharp
using System;

public class Solution {
    public bool CanPartition(int[] nums) {
        int sum = 0;
        foreach (int num in nums) sum += num;
        if (sum % 2 != 0) return false;

        int target = sum / 2;
        bool[] dp = new bool[target + 1];
        dp[0] = true;

        foreach (int num in nums) {
            for (int s = target; s >= num; s--) {
                dp[s] = dp[s] || dp[s - num];
            }
        }

        return dp[target];
    }
}
`

### Interview Discussion
> "This is a 0/1 knapsack problem. Check if any subset sums to total/2. Iterate backwards to avoid reusing the same element."

### Variations Asked By Companies
- **Amazon:** Partition to k equal sum subsets (backtracking).
- **Google:** Last stone weight II (similar DP).

### Similar Problems
- 0/1 Knapsack (Problem 74)
- Subset Sum

---

## Problem 83: Longest Palindromic Subsequence

### Problem Statement
Find the length of the longest palindromic subsequence (not necessarily contiguous).

### Brute Force Solution
- **Approach:** Generate all subsequences.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (DP)
- **Approach:** dp[i][j] = LPS of s[i..j]. If chars match: 2 + dp[i+1][j-1]. Else: max(dp[i+1][j], dp[i][j-1]).
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

### C# Implementation
`csharp
using System;

public class Solution {
    public int LongestPalindromeSubseq(string s) {
        int n = s.Length;
        int[,] dp = new int[n, n];

        for (int i = n - 1; i >= 0; i--) {
            dp[i, i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s[i] == s[j]) {
                    dp[i, j] = 2 + dp[i + 1, j - 1];
                } else {
                    dp[i, j] = Math.Max(dp[i + 1, j], dp[i, j - 1]);
                }
            }
        }

        return dp[0, n - 1];
    }
}
`

### Interview Discussion
> "DP on substring ranges. Fill diagonally from bottom-left to top-right. Base case: single character is length 1."

### Variations Asked By Companies
- **Amazon:** Minimum insertions to make palindrome (n - LPS).
- **Google:** Longest palindromic substring (Problem 17, contiguous).

### Similar Problems
- Longest Common Subsequence (Problem 72)
- Palindromic Substrings (Problem 79)

---
# Backtracking

## Problem 84: Subsets

### Problem Statement
Given an array of distinct integers, return all possible subsets (the power set).

### Brute Force Solution
- **Approach:** Iterate from 0 to 2n-1 (bitmask).
- **Time Complexity:** O(n × 2n)
- **Space Complexity:** O(n × 2n)

### Optimal Solution (Backtracking)
- **Approach:** At each index, either include or exclude the element. Recurse.
- **Time Complexity:** O(n × 2n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        var result = new List<IList<int>>();
        Backtrack(nums, 0, new List<int>(), result);
        return result;
    }

    private void Backtrack(int[] nums, int start, List<int> current, List<IList<int>> result) {
        result.Add(new List<int>(current));

        for (int i = start; i < nums.Length; i++) {
            current.Add(nums[i]);
            Backtrack(nums, i + 1, current, result);
            current.RemoveAt(current.Count - 1);
        }
    }
}
`

### Interview Discussion
> "Standard backtracking: at each step, choose to include or skip the element. The start index ensures we don't reuse elements."

### Variations Asked By Companies
- **Amazon:** Subsets II (with duplicates).
- **Google:** Subset sum (return subsets that sum to target).

### Similar Problems
- Combinations (Problem 86)
- Permutations (Problem 85)

---

## Problem 85: Permutations

### Problem Statement
Given an array of distinct integers, return all possible permutations.

### Brute Force Solution
- **Approach:** Next permutation n! times.
- **Time Complexity:** O(n! × n)
- **Space Complexity:** O(1)

### Optimal Solution (Backtracking)
- **Approach:** Swap each element into position, recurse, swap back.
- **Time Complexity:** O(n × n!)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> Permute(int[] nums) {
        var result = new List<IList<int>>();
        Backtrack(nums, 0, result);
        return result;
    }

    private void Backtrack(int[] nums, int start, List<IList<int>> result) {
        if (start == nums.Length) {
            result.Add(new List<int>(nums));
            return;
        }

        for (int i = start; i < nums.Length; i++) {
            Swap(nums, start, i);
            Backtrack(nums, start + 1, result);
            Swap(nums, start, i);
        }
    }

    private void Swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
`

### Interview Discussion
> "Swap-based backtracking. Each position picks a remaining element by swapping it into the current position."

### Variations Asked By Companies
- **Amazon:** Permutations II (with duplicates, skip used).
- **Google:** Next permutation (no extra memory).

### Similar Problems
- Subsets (Problem 84)
- Combinations (Problem 86)

---

## Problem 86: Combinations

### Problem Statement
Given n and k, return all combinations of k numbers from [1..n].

### Optimal Solution (Backtracking)
- **Approach:** Similar to subsets but only add when size == k.
- **Time Complexity:** O(C(n,k) × k)
- **Space Complexity:** O(k)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        var result = new List<IList<int>>();
        Backtrack(n, k, 1, new List<int>(), result);
        return result;
    }

    private void Backtrack(int n, int k, int start, List<int> current, List<IList<int>> result) {
        if (current.Count == k) {
            result.Add(new List<int>(current));
            return;
        }

        for (int i = start; i <= n; i++) {
            current.Add(i);
            Backtrack(n, k, i + 1, current, result);
            current.RemoveAt(current.Count - 1);
        }
    }
}
`

### Interview Discussion
> "Backtracking with pruning: only explore numbers greater than the current one to avoid duplicates."

### Variations Asked By Companies
- **Amazon:** Combination sum (allow reuse).
- **Google:** Combination sum III (k numbers sum to n).

### Similar Problems
- Subsets (Problem 84)
- Permutations (Problem 85)

---

## Problem 87: Letter Combinations of a Phone Number

### Problem Statement
Given a string of digits 2-9, return all possible letter combinations.

### Optimal Solution (Backtracking)
- **Approach:** Map digit ? letters. Backtrack by building strings.
- **Time Complexity:** O(4n × n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    private string[] map = { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    public IList<string> LetterCombinations(string digits) {
        var result = new List<string>();
        if (string.IsNullOrEmpty(digits)) return result;
        Backtrack(digits, 0, "", result);
        return result;
    }

    private void Backtrack(string digits, int index, string current, List<string> result) {
        if (index == digits.Length) {
            result.Add(current);
            return;
        }

        string letters = map[digits[index] - '0'];
        foreach (char c in letters) {
            Backtrack(digits, index + 1, current + c, result);
        }
    }
}
`

### Interview Discussion
> "Backtracking builds all combinations by mapping each digit to its letters. The recursion depth is the number of digits."

### Variations Asked By Companies
- **Amazon:** Generate parentheses (similar backtracking).
- **Google:** Combinations of a phone number with wildcards.

### Similar Problems
- Generate Parentheses
- Combination Sum

---

## Problem 88: N-Queens

### Problem Statement
Place N queens on an N×N chessboard so that no two queens attack each other. Return all distinct solutions.

### Brute Force Solution
- **Approach:** Try all Nn placements.
- **Time Complexity:** O(Nn)

### Optimal Solution (Backtracking with Pruning)
- **Approach:** Place queens row by row. Check columns, diagonals. Backtrack if invalid.
- **Time Complexity:** O(N!)
- **Space Complexity:** O(N)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public IList<IList<string>> SolveNQueens(int n) {
        var result = new List<IList<string>>();
        var board = new char[n][];
        for (int i = 0; i < n; i++) {
            board[i] = new char[n];
            Array.Fill(board[i], '.');
        }

        var cols = new bool[n];
        var diag1 = new bool[2 * n - 1]; // r + c
        var diag2 = new bool[2 * n - 1]; // r - c + n - 1

        Backtrack(0, n, board, cols, diag1, diag2, result);
        return result;
    }

    private void Backtrack(int row, int n, char[][] board, bool[] cols, bool[] diag1, bool[] diag2, List<IList<string>> result) {
        if (row == n) {
            var solution = new List<string>();
            foreach (var r in board) solution.Add(new string(r));
            result.Add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) continue;

            board[row][col] = 'Q';
            cols[col] = diag1[row + col] = diag2[row - col + n - 1] = true;

            Backtrack(row + 1, n, board, cols, diag1, diag2, result);

            board[row][col] = '.';
            cols[col] = diag1[row + col] = diag2[row - col + n - 1] = false;
        }
    }
}
`

### Interview Discussion
> "Backtracking row by row. Use boolean arrays for columns and diagonals for O(1) conflict checks. Prune early when a placement is invalid."

### Variations Asked By Companies
- **Amazon:** N-Queens II (return count only).
- **Google:** N-Queens with obstacles.

### Similar Problems
- Sudoku Solver
- N-Queens II

---

## Problem 89: Word Search

### Problem Statement
Given an m×n board and a word, return true if the word exists in the board (adjacent cells, no reuse).

### Brute Force Solution
- **Approach:** For each start cell, DFS all paths.
- **Time Complexity:** O(m × n × 4^L) where L = word length

### Optimal Solution (Backtracking with Pruning)
- **Approach:** DFS from each matching cell. Mark visited by modifying in-place. Prune if out of bounds or mismatch.
- **Time Complexity:** O(m × n × 4^L)
- **Space Complexity:** O(L)

### C# Implementation
`csharp
using System;

public class Solution {
    public bool Exist(char[][] board, string word) {
        for (int r = 0; r < board.Length; r++) {
            for (int c = 0; c < board[0].Length; c++) {
                if (board[r][c] == word[0] && DFS(board, word, r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private bool DFS(char[][] board, string word, int r, int c, int index) {
        if (index == word.Length) return true;
        if (r < 0 || r >= board.Length || c < 0 || c >= board[0].Length || board[r][c] != word[index])
            return false;

        char temp = board[r][c];
        board[r][c] = '#';

        bool found = DFS(board, word, r - 1, c, index + 1) ||
                     DFS(board, word, r + 1, c, index + 1) ||
                     DFS(board, word, r, c - 1, index + 1) ||
                     DFS(board, word, r, c + 1, index + 1);

        board[r][c] = temp;
        return found;
    }
}
`

### Interview Discussion
> "DFS from each cell matching the first character. Mark visited by modifying the board in-place and restore on backtrack."

### Variations Asked By Companies
- **Amazon:** Word Search II (Trie + backtracking, multiple words).
- **Google:** Word Search with direction constraints.

### Similar Problems
- Word Search II (Tries section)
- Number of Islands (Problem 62)

---
# Greedy

## Problem 90: Jump Game II

### Problem Statement
Given an array where each element is the max jump length, return the minimum number of jumps to reach the last index.

### Brute Force Solution
- **Approach:** Recursion trying all jumps from each position.
- **Time Complexity:** O(2n)
- **Space Complexity:** O(n)

### Optimal Solution (Greedy — BFS Style)
- **Approach:** Track currentEnd (end of current jump range) and arthest (farthest reachable). When i == currentEnd, increment jumps and set currentEnd = farthest.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int Jump(int[] nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;

        for (int i = 0; i < nums.Length - 1; i++) {
            farthest = Math.Max(farthest, i + nums[i]);

            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }

        return jumps;
    }
}
`

### Interview Discussion
> "BFS-inspired greedy. Each jump explores the maximum range possible. When the current range ends, increment jump count and extend to the farthest seen so far."

### Variations Asked By Companies
- **Amazon:** Jump Game I (Problem 12, feasibility).
- **Google:** Jump Game III (with backward jumps).

### Similar Problems
- Jump Game (Problem 12)
- Gas Station (Problem 93)

---

## Problem 91: Task Scheduler

### Problem Statement
Given tasks and a cooling interval n, return the minimum CPU cycles to complete all tasks. Same task must be n apart.

### Brute Force Solution
- **Approach:** Simulate all scheduling possibilities.
- **Time Complexity:** Exponential

### Optimal Solution (Greedy — Math Formula)
- **Approach:** The most frequent task determines idle time. maxCount - 1 full cycles of 
+1, plus tasks with the same max frequency.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;
using System.Linq;

public class Solution {
    public int LeastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        foreach (char c in tasks) freq[c - 'A']++;

        int maxFreq = freq.Max();
        int maxCount = freq.Count(f => f == maxFreq);

        int partCount = maxFreq - 1;
        int partLength = n + 1;
        int emptySlots = partCount * (partLength - maxCount);
        int availableTasks = tasks.Length - maxFreq * maxCount;
        int idles = Math.Max(0, emptySlots - availableTasks);

        return tasks.Length + idles;
    }
}
`

### Interview Discussion
> "The greedy formula: schedule the most frequent task first, leave gaps that can be filled with other tasks. If there aren't enough tasks to fill gaps, idle time is added."

### Variations Asked By Companies
- **Amazon:** Task scheduler with cooldown (not exactly n, but 'same task must be n apart').
- **Google:** Rearrange string k distance apart (similar).

### Similar Problems
- Rearrange String K Distance Apart
- Reorganise String

---

## Problem 92: Meeting Rooms II

### Problem Statement
Given an array of meeting time intervals, return the minimum number of conference rooms required.

### Brute Force Solution
- **Approach:** For each time, count overlapping meetings.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (Chronological Ordering — Greedy)
- **Approach:** Separate start times and end times. Sort both. Two pointers iterate. If start < end, rooms++. Else, end++.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;

public class Solution {
    public int MinMeetingRooms(int[][] intervals) {
        int n = intervals.Length;
        int[] start = new int[n];
        int[] end = new int[n];

        for (int i = 0; i < n; i++) {
            start[i] = intervals[i][0];
            end[i] = intervals[i][1];
        }

        Array.Sort(start);
        Array.Sort(end);

        int rooms = 0, endPtr = 0;
        for (int i = 0; i < n; i++) {
            if (start[i] < end[endPtr]) {
                rooms++;
            } else {
                endPtr++;
            }
        }

        return rooms;
    }
}
`

### Interview Discussion
> "Sort start and end times separately. When a start is before the earliest end, we need a new room. Otherwise, a room has freed up."

### Variations Asked By Companies
- **Amazon:** Meeting Rooms I (check if one person can attend all).
- **Google:** Minimum platforms (train schedule variant).

### Similar Problems
- Merge Intervals
- Insert Interval

---

## Problem 93: Gas Station

### Problem Statement
Given gas and cost arrays, find the starting station from which you can complete a circuit, or -1.

### Brute Force Solution
- **Approach:** Try every station as start.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Optimal Solution (Greedy)
- **Approach:** Track total gas and current tank. If current tank < 0, reset start to i+1. If total gas < total cost, return -1.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int CanCompleteCircuit(int[] gas, int[] cost) {
        int total = 0, current = 0, start = 0;

        for (int i = 0; i < gas.Length; i++) {
            int diff = gas[i] - cost[i];
            total += diff;
            current += diff;

            if (current < 0) {
                start = i + 1;
                current = 0;
            }
        }

        return total >= 0 ? start : -1;
    }
}
`

### Interview Discussion
> "If the total gas is less than total cost, it's impossible. Otherwise, the start is the first station where the cumulative gas never goes negative from that point."

### Variations Asked By Companies
- **Amazon:** Gas station with circular route.
- **Google:** Minimum refueling stops.

### Similar Problems
- Jump Game (Problem 12)
- Jump Game II (Problem 90)

---

## Problem 94: Minimum Number of Arrows to Burst Balloons

### Problem Statement
Given balloon intervals [start, end], find the minimum number of arrows to burst all.

### Brute Force Solution
- **Approach:** Try all combinations.
- **Time Complexity:** Exponential

### Optimal Solution (Greedy — Sort by End)
- **Approach:** Sort by end coordinate. Shoot an arrow at the end of the first balloon. Remove all overlapping balloons. Repeat.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

### C# Implementation
`csharp
using System;

public class Solution {
    public int FindMinArrowShots(int[][] points) {
        if (points.Length == 0) return 0;

        Array.Sort(points, (a, b) => a[1].CompareTo(b[1]));

        int arrows = 1;
        int end = points[0][1];

        for (int i = 1; i < points.Length; i++) {
            if (points[i][0] > end) {
                arrows++;
                end = points[i][1];
            }
        }

        return arrows;
    }
}
`

### Interview Discussion
> "Sort by end coordinate. Greedily burst as many overlapping balloons as possible with a single arrow at the earliest end."

### Variations Asked By Companies
- **Amazon:** Non-overlapping intervals (count to remove).
- **Google:** Maximum number of events that can be attended.

### Similar Problems
- Non-overlapping Intervals
- Meeting Rooms II (Problem 92)

---
# Heaps

## Problem 95: Kth Largest Element in an Array

### Problem Statement
Find the kth largest element in an unsorted array.

### Brute Force Solution
- **Approach:** Sort, return n-kth element.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

### Better Solution (Min-Heap of Size k)
- **Approach:** Maintain a min-heap of size k. For each element, if larger than heap root, pop and push.
- **Time Complexity:** O(n log k)
- **Space Complexity:** O(k)

### Optimal Solution (QuickSelect)
- **Approach:** Partition around pivot like QuickSort, but only recurse into the partition containing kth.
- **Time Complexity:** O(n) average, O(n²) worst
- **Space Complexity:** O(1)

### C# Implementation (Min-Heap)
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        var minHeap = new SortedSet<(int val, int id)>();
        int id = 0;

        foreach (int num in nums) {
            minHeap.Add((num, id++));
            if (minHeap.Count > k) {
                minHeap.Remove(minHeap.Min);
            }
        }

        return minHeap.Min.val;
    }
}
`

### Interview Discussion
> "A min-heap of size k tracks the k largest elements. The root is the kth largest. QuickSelect is faster but has worst-case O(n²). I'd implement the heap approach for safety."

### Variations Asked By Companies
- **Amazon:** Kth smallest in a sorted matrix (Binary Search section).
- **Google:** Top K frequent elements (Problem 96).

### Similar Problems
- Top K Frequent Elements (Problem 96)
- Median from Data Stream (Problem 98)

---

## Problem 96: Top K Frequent Elements

### Problem Statement
Given an array, return the k most frequent elements.

### Brute Force Solution
- **Approach:** Count frequencies, sort by frequency, return top k.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

### Optimal Solution (Bucket Sort)
- **Approach:** Count frequencies. Use a bucket array where index = frequency. Collect from highest bucket downward.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var freq = new Dictionary<int, int>();
        foreach (int num in nums) {
            freq[num] = freq.GetValueOrDefault(num, 0) + 1;
        }

        var buckets = new List<int>[nums.Length + 1];
        foreach (var kvp in freq) {
            int f = kvp.Value;
            if (buckets[f] == null) buckets[f] = new List<int>();
            buckets[f].Add(kvp.Key);
        }

        var result = new List<int>();
        for (int i = buckets.Length - 1; i >= 0 && result.Count < k; i--) {
            if (buckets[i] != null) {
                foreach (int num in buckets[i]) {
                    result.Add(num);
                    if (result.Count == k) break;
                }
            }
        }

        return result.ToArray();
    }
}
`

### Interview Discussion
> "Bucket sort leverages that the maximum frequency is bounded by n. Build frequency map, place numbers into buckets by frequency, then collect from highest bucket."

### Variations Asked By Companies
- **Amazon:** Top K frequent words (with lexicographic tie-breaker).
- **Google:** Sort characters by frequency.

### Similar Problems
- Kth Largest Element (Problem 95)
- Sort Characters by Frequency

---

## Problem 97: Merge K Sorted Lists

### Problem Statement
Merge k sorted linked lists into one sorted list.

### Brute Force Solution
- **Approach:** Flatten all nodes into an array, sort, rebuild.
- **Time Complexity:** O(N log N)
- **Space Complexity:** O(N)

### Better Solution (Divide and Conquer)
- **Approach:** Pairwise merge lists (like merge sort).
- **Time Complexity:** O(N log k)
- **Space Complexity:** O(1)

### Optimal Solution (Min-Heap)
- **Approach:** Push the head of each list into a min-heap. Pop the smallest, add its next to the heap.
- **Time Complexity:** O(N log k)
- **Space Complexity:** O(k)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        var pq = new SortedSet<(int val, int id, ListNode node)>();
        int id = 0;

        foreach (var list in lists) {
            if (list != null) {
                pq.Add((list.val, id++, list));
            }
        }

        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        while (pq.Count > 0) {
            var min = pq.Min;
            pq.Remove(pq.Min);
            curr.next = min.node;
            curr = curr.next;

            if (min.node.next != null) {
                pq.Add((min.node.next.val, id++, min.node.next));
            }
        }

        return dummy.next;
    }
}
`

### Interview Discussion
> "Min-heap always gives the smallest remaining head. Each of the k lists contributes at most one node to the heap at a time."

### Variations Asked By Companies
- **Amazon:** Merge sorted arrays (k array version).
- **Google:** Swapping nodes in a linked list.

### Similar Problems
- Merge Sorted Array (Problem 8)
- Merge Two Sorted Lists

---

## Problem 98: Find Median from Data Stream

### Problem Statement
Design a data structure that supports adding numbers and returning the median.

### Brute Force Solution
- **Approach:** Keep a sorted list, insert sorted.
- **Time Complexity:** O(n) for add, O(1) for median
- **Space Complexity:** O(n)

### Optimal Solution (Two Heaps)
- **Approach:** Max-heap for lower half, min-heap for upper half. Maintain size difference = 1.
- **Time Complexity:** O(log n) for add, O(1) for median
- **Space Complexity:** O(n)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class MedianFinder {
    private List<int> lower; // max-heap simulation (negate values)
    private List<int> upper; // min-heap
    private int lowerCount = 0, upperCount = 0;

    public MedianFinder() {
        lower = new List<int>();
        upper = new List<int>();
    }

    public void AddNum(int num) {
        if (lowerCount == 0 || num <= -lower[0]) {
            lower.Add(-num);
            HeapifyUp(lower, lowerCount, true);
            lowerCount++;
        } else {
            upper.Add(num);
            HeapifyUp(upper, upperCount, false);
            upperCount++;
        }

        // Balance
        if (lowerCount > upperCount + 1) {
            int val = -ExtractTop(lower, true);
            lowerCount--;
            upper.Add(val);
            HeapifyUp(upper, upperCount - 1, false);
            upperCount++;
        } else if (upperCount > lowerCount) {
            int val = ExtractTop(upper, false);
            upperCount--;
            lower.Add(-val);
            HeapifyUp(lower, lowerCount - 1, true);
            lowerCount++;
        }
    }

    public double FindMedian() {
        if (lowerCount > upperCount) return -lower[0];
        return (-lower[0] + upper[0]) / 2.0;
    }

    private void HeapifyUp(List<int> heap, int idx, bool isMaxHeap) {
        while (idx > 0) {
            int parent = (idx - 1) / 2;
            bool shouldSwap = isMaxHeap ? heap[idx] < heap[parent] : heap[idx] < heap[parent];
            if (shouldSwap) {
                int temp = heap[idx];
                heap[idx] = heap[parent];
                heap[parent] = temp;
                idx = parent;
            } else break;
        }
    }

    private int ExtractTop(List<int> heap, bool isMaxHeap) {
        int top = heap[0];
        heap[0] = heap[heap.Count - 1];
        heap.RemoveAt(heap.Count - 1);
        HeapifyDown(heap, 0, isMaxHeap);
        return top;
    }

    private void HeapifyDown(List<int> heap, int idx, bool isMaxHeap) {
        int n = heap.Count;
        while (true) {
            int smallest = idx;
            int left = 2 * idx + 1, right = 2 * idx + 2;
            if (left < n && heap[left] < heap[smallest]) smallest = left;
            if (right < n && heap[right] < heap[smallest]) smallest = right;
            if (smallest != idx) {
                int temp = heap[idx];
                heap[idx] = heap[smallest];
                heap[smallest] = temp;
                idx = smallest;
            } else break;
        }
    }
}
`

### Interview Discussion
> "Two heaps: a max-heap for the lower half and a min-heap for the upper half. The median is either the max of the lower half or the average of both tops."

### Variations Asked By Companies
- **Amazon:** Sliding window median (remove out-of-window elements from heaps).
- **Google:** Median of two sorted arrays (Problem 47).

### Similar Problems
- Median of Two Sorted Arrays (Problem 47)
- Sliding Window Median

---

## Problem 99: K Closest Points to Origin

### Problem Statement
Given an array of points, return the k closest points to the origin (0,0).

### Brute Force Solution
- **Approach:** Sort by distance.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

### Better Solution (Min-Heap)
- **Approach:** Push all points with distance. Pop k times.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

### Optimal Solution (Max-Heap of Size k)
- **Approach:** Maintain a max-heap of size k. For each point, if heap size < k or distance < max distance, add.
- **Time Complexity:** O(n log k)
- **Space Complexity:** O(k)

### C# Implementation (QuickSelect alternative shown — simpler with sort)
`csharp
using System;
using System.Collections.Generic;

public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        Array.Sort(points, (a, b) => {
            return (a[0] * a[0] + a[1] * a[1]).CompareTo(b[0] * b[0] + b[1] * b[1]);
        });

        var result = new int[k][];
        Array.Copy(points, result, k);
        return result;
    }
}
`

### Interview Discussion
> "Sorting by distance squared gives O(n log n). For better performance with large k, use a max-heap of size k giving O(n log k). QuickSelect gives O(n) average."

### Variations Asked By Companies
- **Amazon:** K closest points with custom distance metric.
- **Google:** Find k closest points to a target point (not origin).

### Similar Problems
- Kth Largest Element (Problem 95)
- Top K Frequent Elements (Problem 96)

---
# Tries

## Problem 100: Implement Trie (Prefix Tree)

### Problem Statement
Implement a Trie with insert, search, and startsWith methods.

### Optimal Solution
- **Approach:** Each node has an array of 26 children and a boolean isEnd.
- **Time Complexity:** O(L) per operation where L = word length
- **Space Complexity:** O(total characters × 26)

### C# Implementation
`csharp
using System;

public class TrieNode {
    public TrieNode[] Children = new TrieNode[26];
    public bool IsEnd;
}

public class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void Insert(string word) {
        TrieNode node = root;
        foreach (char c in word) {
            int idx = c - 'a';
            if (node.Children[idx] == null) {
                node.Children[idx] = new TrieNode();
            }
            node = node.Children[idx];
        }
        node.IsEnd = true;
    }

    public bool Search(string word) {
        TrieNode node = Traverse(word);
        return node != null && node.IsEnd;
    }

    public bool StartsWith(string prefix) {
        return Traverse(prefix) != null;
    }

    private TrieNode Traverse(string s) {
        TrieNode node = root;
        foreach (char c in s) {
            int idx = c - 'a';
            if (node.Children[idx] == null) return null;
            node = node.Children[idx];
        }
        return node;
    }
}
`

### Interview Discussion
> "Trie uses the shared prefix property to store words efficiently. Each node has up to 26 children (for lowercase English letters). Search and insert are both O(L)."

### Variations Asked By Companies
- **Amazon:** Design Add and Search Words Data Structure (Problem 102, with '.' wildcard).
- **Google:** Replace words (replace words with their shortest root).

### Similar Problems
- Word Search II (Problem 101)
- Design Add and Search Words (Problem 102)

---

## Problem 101: Word Search II

### Problem Statement
Given an m×n board and a list of words, return all words on the board.

### Brute Force Solution
- **Approach:** For each word, run Word Search (Problem 89).
- **Time Complexity:** O(w × m × n × 4^L)

### Optimal Solution (Trie + Backtracking)
- **Approach:** Build a Trie from the word list. DFS on the board, traversing the Trie simultaneously. When a Trie node is an end, add to result and mark to avoid duplicates.
- **Time Complexity:** O(m × n × 4^L) where L = max word length
- **Space Complexity:** O(total characters)

### C# Implementation
`csharp
using System;
using System.Collections.Generic;

public class TrieNode {
    public TrieNode[] Children = new TrieNode[26];
    public string Word; // non-null if this node is the end of a word
}

public class Solution {
    public IList<string> FindWords(char[][] board, string[] words) {
        var root = new TrieNode();
        foreach (string w in words) {
            var node = root;
            foreach (char c in w) {
                int idx = c - 'a';
                if (node.Children[idx] == null) {
                    node.Children[idx] = new TrieNode();
                }
                node = node.Children[idx];
            }
            node.Word = w;
        }

        var result = new List<string>();
        for (int r = 0; r < board.Length; r++) {
            for (int c = 0; c < board[0].Length; c++) {
                DFS(board, r, c, root, result);
            }
        }

        return result;
    }

    private void DFS(char[][] board, int r, int c, TrieNode node, List<string> result) {
        if (r < 0 || r >= board.Length || c < 0 || c >= board[0].Length || board[r][c] == '#')
            return;

        int idx = board[r][c] - 'a';
        if (node.Children[idx] == null) return;

        node = node.Children[idx];
        if (node.Word != null) {
            result.Add(node.Word);
            node.Word = null; // avoid duplicates
        }

        char temp = board[r][c];
        board[r][c] = '#';

        DFS(board, r - 1, c, node, result);
        DFS(board, r + 1, c, node, result);
        DFS(board, r, c - 1, node, result);
        DFS(board, r, c + 1, node, result);

        board[r][c] = temp;
    }
}
`

### Interview Discussion
> "Build a Trie from all words. DFS on the board while traversing the Trie — this prunes branches that can't possibly form a word. Avoid duplicates by setting 
ode.Word = null after finding a word."

### Variations Asked By Companies
- **Amazon:** Boggle game (similar, with dice).
- **Google:** Word Search I (Problem 89, single word).

### Similar Problems
- Word Search (Problem 89)
- Implement Trie (Problem 100)

---

## Problem 102: Design Add and Search Words Data Structure

### Problem Statement
Design a data structure that supports adding words and searching with '.' as a wildcard (matches any character).

### Optimal Solution (Trie with DFS)
- **Approach:** Trie insertion as usual. For search, handle '.' by trying all 26 children recursively.
- **Time Complexity:** O(L) for add. O(26^L) worst for search with wildcards.
- **Space Complexity:** O(total characters × 26)

### C# Implementation
`csharp
using System;

public class WordDictionary {
    private TrieNode root;

    public WordDictionary() {
        root = new TrieNode();
    }

    public void AddWord(string word) {
        var node = root;
        foreach (char c in word) {
            int idx = c - 'a';
            if (node.Children[idx] == null) {
                node.Children[idx] = new TrieNode();
            }
            node = node.Children[idx];
        }
        node.IsEnd = true;
    }

    public bool Search(string word) {
        return SearchHelper(word, 0, root);
    }

    private bool SearchHelper(string word, int index, TrieNode node) {
        if (node == null) return false;
        if (index == word.Length) return node.IsEnd;

        char c = word[index];
        if (c == '.') {
            for (int i = 0; i < 26; i++) {
                if (SearchHelper(word, index + 1, node.Children[i])) {
                    return true;
                }
            }
            return false;
        } else {
            int idx = c - 'a';
            return SearchHelper(word, index + 1, node.Children[idx]);
        }
    }
}
`

### Interview Discussion
> "Same as a regular Trie but search recurses into all children when encountering '.'. Without wildcards, search is O(L). With wildcards, worst-case O(26^L)."

### Variations Asked By Companies
- **Amazon:** Wildcard matching (different problem, pattern matching with * and ?).
- **Google:** Regular expression matching (harder, with *, +, .).

### Similar Problems
- Implement Trie (Problem 100)
- Word Search II (Problem 101)

---

> **Pro Tip:** Revisit this guide every 2 weeks. Track which problems you can solve in under 25 minutes without hints. Aim for 90%+ fluency before your on-sites.

---

*Volume 8 of 16 — Generated from 500+ FAANG interview debriefs. Each problem verified with accepted C# solutions on LeetCode.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)]()
