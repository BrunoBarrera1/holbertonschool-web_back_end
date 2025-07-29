# Python - Async Comprehension

This project focuses on learning asynchronous comprehensions and generators in Python.

## Learning Objectives

- How to write an asynchronous generator
- How to use async comprehensions
- How to type-annotate generators

## Files

- `0-async_generator.py`: Async generator that yields random numbers
- `1-async_comprehension.py`: Async comprehension that collects random numbers
- `2-measure_runtime.py`: Measure runtime of parallel async comprehensions

## Requirements

- All files should be executable
- All files must start with `#!/usr/bin/env python3`
- Code should follow pycodestyle (version 2.5.x)
- All functions and coroutines must be type-annotated
- All modules and functions should have documentation

## Notes

The total runtime for four parallel comprehensions is roughly 10 seconds because:
- Each async_generator takes 10 seconds to complete (10 iterations × 1 second each)
- Even though we run four comprehensions in parallel using asyncio.gather, 
  each comprehension still needs to wait for its own async_generator to complete
- The parallel execution allows all four to run concurrently, so the total time
  is approximately the time of one comprehension (10 seconds) rather than 
  four times that (40 seconds)
