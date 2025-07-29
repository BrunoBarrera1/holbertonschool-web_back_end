#!/usr/bin/env python3
"""Module for async generator that yields random numbers."""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields random numbers.

    Loops 10 times, each time asynchronously waits 1 second,
    then yields a random number between 0 and 10.

    Yields:
        float: Random number between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
