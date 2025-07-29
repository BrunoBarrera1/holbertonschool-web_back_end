#!/usr/bin/env python3
"""Module for async comprehension that collects random numbers."""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers using async comprehension.

    Uses async comprehension over async_generator to collect
    10 random numbers and return them as a list.

    Returns:
        List[float]: List of 10 random numbers
    """
    return [i async for i in async_generator()]
