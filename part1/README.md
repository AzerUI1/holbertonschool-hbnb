# HBnB Evolution — Part 1 Technical Documentation

This folder contains the UML diagrams and explanatory notes for Part 1 (architecture and business logic) of HBnB Evolution.

## Included
- High-level package diagram (Mermaid)
- Detailed class diagram for Business Logic (Mermaid)
- Sequence diagrams for:
  - User registration
  - Place creation
  - Review submission
  - Fetching list of places
- Explanatory notes and suggested file structure

## How to view
- Use a Markdown viewer that supports Mermaid (VSCode + Mermaid preview, GitLab, GitHub via mermaid extension, or mermaid.live).

## Suggested file structure
part1/
├─ README.md    <-- this file
├─ diagrams/
│  ├─ package_diagram.md
│  ├─ class_diagram.md
│  ├─ sequence_registration.md
│  ├─ sequence_place_creation.md
│  ├─ sequence_review.md
│  └─ sequence_get_places.md
