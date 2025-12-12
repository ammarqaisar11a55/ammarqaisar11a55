***

# Projects

## Student Result & GPA Calculator

**Context:** 2nd Semester Project — Programming Fundamentals
**Language:** C++
**Author:** Muhammad Ammar Qaisar

### Project Overview
This is a console-based C++ application designed to simulate a university grading system. The program automates the calculation of Semester Grade Point Average (GPA), overall percentages, and letter grades for a batch of students. It processes academic data for six distinct courses per student, considering both obtained marks and credit hours.

### Key Features
* **Batch Processing:** The user can define the number of students (`n`) at the start, and the system processes records for the entire group in a single run.
* **Automated Grading Logic:**
    * Converts numerical marks (0-100) into Letter Grades (e.g., A, B+, F) based on predefined university criteria.
    * Maps marks to Grade Points (e.g., 85+ maps to 4.0, <50 maps to 0.0).
* **Weighted GPA Calculation:** Implements a weighted average formula to calculate the GPA, ensuring that courses with higher credit hours impact the final score proportionally.
* **Detailed Transcripts:** Generates a comprehensive report for each student, displaying their SAP ID, Name, breakdown of all 6 courses, total percentage, and final GPA.

### Technical Implementation
This project demonstrates mastery of core Programming Fundamentals concepts:
* **Modular Programming:** Utilizes distinct functions for specific tasks (`coursegrade`, `coursepoints`, `GPA_CALCULATOR`, `result`) to improve code readability and reusability.
* **Parallel Arrays:** Manages data using parallel arrays to store synchronized information (IDs, Names, Marks, Credit Hours) for multiple students.
* **Control Structures:** Uses extensive `if-else if` ladders to handle the logic for grade boundaries.
* **Loops:** Implements `for` loops to handle iterative data entry and output generation for the student list.
