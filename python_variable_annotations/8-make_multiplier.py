#!/usr/bin/env python3
"""Module for make_multiplier function with type annotations."""
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""
    def multiplier_func(x: float) -> float:
        return x * multiplier
    return multiplier_func
