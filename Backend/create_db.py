import sqlite3

import os

"""
This script initializes and manages the SQLite database for the safety app.
It sets up the required schema and handles database connections.

"""
DB_PATH = 'aurora_app.db'

# backend/create_db.py
import sqlite3
import os

# Define path
DB_PATH = "db/aurora_app.db"
RECORDINGS_DIR = "Audio"

def create_database():
    # Create directory if not exists
    os.makedirs("db", exist_ok=True)
    os.makedirs(RECORDINGS_DIR, exist_ok=True)
    

    # Remove old DB if exists
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
        print("  Removed old database")

    # Connect and create tables
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    print(f"Database created at {DB_PATH}")

    # Create tables for contacts, alerts, settings, and recordings
    cursor.executescript('''
        CREATE TABLE contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            is_primary INTEGER DEFAULT 0
        );

        CREATE TABLE alerts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            message TEXT,
            lat REAL,
            lng REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            session_id TEXT
        );

        CREATE TABLE settings (
            id INTEGER PRIMARY KEY,
            high_contrast INTEGER DEFAULT 0,
            voice_feedback INTEGER DEFAULT 1,
            large_taps INTEGER DEFAULT 1,
            keyword_enabled INTEGER DEFAULT 1,
            keywords TEXT DEFAULT 'help,save me,emergency'
        );
        
        CrEATE TABLE recordings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            session_id TEXT
        );
    ''')

    # Insert default settings
    cursor.execute('''
        INSERT INTO settings (
            id, high_contrast, voice_feedback, large_taps, keyword_enabled, keywords
        ) VALUES (
            1, 0, 1, 1, 1, 'help,save me,emergency'
        )
    ''')

    conn.commit()
    conn.close()
    print(" Database setup complete!")

if __name__ == "__main__":
    create_database()