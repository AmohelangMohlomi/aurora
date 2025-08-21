# backend/database.py
from typing import Optional
import sqlite3

# Path to database
DB_PATH = "db/aurora_app.db"
"""
Creates a connection to the SQLite database."""


def get_db_connection() -> Optional[sqlite3.Connection]:   # Returns a sqlite3.Connection object or None if failed.
    
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row  # Access columns by name: row['type']
        return conn
    except sqlite3.Error as e:
        print(f"Database connection error: {e}")
        return None