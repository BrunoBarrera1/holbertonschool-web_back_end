#!/usr/bin/env python3
"""Module for concurrent tasks execution."""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute n tasks of wait_random with the specified max_delay.

    Args:
        n: Number of tasks to create
        max_delay: Maximum delay for each task

    Returns:
        List of all delays in ascending order
    """
    delays = []
    tasks = []

    # Create all tasks concurrently
    for _ in range(n):
        task = task_wait_random(max_delay)
        tasks.append(task)

    # Collect results as they complete
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
