---
title: "Trie in TypeScript"
description: "What, why, and how to implement a Trie in TypeScript"
date: "2024-05-09"
tags:
  - typescript
  - data-structures
  - algorithms
  - trie
  - prefix-tree
  - autocomplete
  - search
  - string-matching
---

## Introduction to Trie

A Trie, also known as a prefix tree, is a tree-like data structure that is used to efficiently store and retrieve keys in a dataset of strings. A common use case of Tries is in implementing dictionaries with predictive text or autocomplete features.

### Why Use a Trie?

- **Efficient Search**: Tries allow for efficient search of words, prefixes, and even pattern matching. The time complexity for search operations is O(m), where m is the length of the word being searched.
- **Prefix Matching**: Tries are particularly useful for prefix-based searches, which makes them ideal for applications like auto-suggestions in search engines or spell checkers.
- **Memory Usage**: While Tries can use a lot of memory in the worst case, they are often more space-efficient than other data structures when storing a large set of strings with common prefixes.

### Structure of a Trie

A Trie consists of nodes and edges. Each node represents a character of the input string, and each edge represents the transition from one character to the next. The root node is empty, and each subsequent level of nodes represents the next character in the strings being inserted.

## Implementing a Trie in TypeScript

Let's dive into the implementation of a Trie in TypeScript.

### Step 1: Define the Trie Node

Each node in the Trie will store its children and a flag to mark the end of a word.

```typescript
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}
```

### Step 2: Implement the Trie Class

The Trie class will contain methods to insert words, search for words, and check for prefixes.

```typescript
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if there is any word in the Trie that starts with the given prefix
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
```

### Step 3: Using the Trie

Let's see how we can use the Trie to insert words, search for words, and check for prefixes.

```typescript
const trie = new Trie();

// Insert words
trie.insert("hello");
trie.insert("world");
trie.insert("hell");
trie.insert("heaven");

// Search for words
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // true
console.log(trie.search("heaven")); // true
console.log(trie.search("goodbye")); // false

// Check for prefixes
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("wor")); // true
console.log(trie.startsWith("goo")); // false
```

## Conclusion

Tries are powerful data structures for managing a large set of strings, especially when prefix searches are required. In this article, we have implemented a basic Trie in TypeScript that supports word insertion, word search, and prefix search. This implementation can be extended and optimized based on specific requirements and use cases.
