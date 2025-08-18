#!/usr/bin/env python3
""" Change school topics """
def update_topics(mongo_collection, name, topics):
    """Update all topics of a school by name"""
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )

