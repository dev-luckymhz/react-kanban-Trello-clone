import React from 'react';
import TaskColumn from './TaskColumn';

const columnsData = [
        {
            "column": "Backlog",
            "numberOfTasks": 2,
            "tasks": [
                {
                    "id": 1,
                    "title": "Draft Initial Project Scope",
                    "description": "Outline the main objectives, features, and limitations of the project.",
                    "comments": 2,
                    "date": "April 25, 2024",
                    "tag": "Planning"
                },
                {
                    "id": 2,
                    "title": "Market Research",
                    "description": "Conduct research on competitor project management tools and identify unique value propositions.",
                    "comments": 3,
                    "date": "April 30, 2024",
                    "tag": "Research"
                }
            ]
        },
        {
            "column": "To Do",
            "numberOfTasks": 3,
            "tasks": [
                {
                    "id": 3,
                    "title": "Define API Specifications",
                    "description": "Create detailed API documentation for backend/frontend communication.",
                    "comments": 1,
                    "date": "May 5, 2024",
                    "tag": "Backend"
                },
                {
                    "id": 4,
                    "title": "Prepare Initial Wireframes",
                    "description": "Sketch wireframes for the main user interface components.",
                    "comments": 4,
                    "date": "May 10, 2024",
                    "tag": "Design"
                },
                {
                    "id": 5,
                    "title": "Environment Setup",
                    "description": "Set up development, testing, and production environments.",
                    "comments": 2,
                    "date": "May 15, 2024",
                    "tag": "DevOps"
                }
            ]
        },
        {
            "column": "In Progress",
            "numberOfTasks": 2,
            "tasks": [
                {
                    "id": 6,
                    "title": "Implement Authentication",
                    "description": "Develop the user authentication module using OAuth 2.0.",
                    "comments": 5,
                    "date": "May 20, 2024",
                    "tag": "Backend"
                },
                {
                    "id": 7,
                    "title": "Frontend Framework Setup",
                    "description": "Set up React with Redux for state management and configure routing.",
                    "comments": 3,
                    "date": "May 25, 2024",
                    "tag": "Frontend"
                }
            ]
        },
        {
            "column": "Review",
            "numberOfTasks": 1,
            "tasks": [
                {
                    "id": 8,
                    "title": "Code Review: Authentication Module",
                    "description": "Perform a thorough code review and security audit of the authentication module.",
                    "comments": 2,
                    "date": "June 1, 2024",
                    "tag": "Review"
                }
            ]
        },
        {
            "column": "Done",
            "numberOfTasks": 2,
            "tasks": [
                {
                    "id": 9,
                    "title": "Database Schema Finalization",
                    "description": "Complete the design and implementation of the database schema.",
                    "comments": 0,
                    "date": "June 5, 2024",
                    "tag": "Backend"
                },
                {
                    "id": 10,
                    "title": "Initial Landing Page Launch",
                    "description": "Deploy the initial version of the landing page with email signup.",
                    "comments": 1,
                    "date": "June 10, 2024",
                    "tag": "Frontend"
                }
            ]
        }
    ];

function TaskTrackerApp() {
    return (
        <><h2>Task Tracker</h2>
        <div className="container">
            {columnsData.map(column => (
                <TaskColumn key={column.column} data={column} />
            ))}
        </div>
        </>
    );
}

export default TaskTrackerApp;
