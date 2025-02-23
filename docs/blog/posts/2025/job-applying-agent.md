---
date: 2025-02-06
authors: [arv-anshul]
categories: [llm]
title: Job Applying Agent
slug: job-applying-agent
icon: material/robot
hide: [toc]
---

# :material-robot:{ title="Sagar from CampusX group" } Job Applying Agent

## Requirements

| Requirements          | Description                                              | Extra                                                                                          |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Framework             | Langchain                                                | We will eventually try to drop it. But if this is a showcase project then a framework is best. |
| Job Opening Data      | Jobs where agent will apply                              | Maybe agent will fetch data on-the-go by web scraping.                                         |
| User Login (LinkedIn) | Need to login the user on the platform in order to apply |                                                                                                |

<!-- more -->

## Agent Workflow

- **LinkedIn Profile Scraper:** Scrape LinkedIn profile of user and get relevant info.
- **Parse User's Resume:** Parse info from user's Resume.
- **Retrive relevant jobs:** On the basis of user's parsed info agent will retrive relevant jobs for user after
  analyzing jobs' description.

| **LLM Agent Task**                             | **Detailed Process**                                                                                                                                                           | **Requirements/Dependencies**                                                                                                     | **Considerations**                                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Receive & Parse Job Data**                   | - Accept job listing details (title, description, requirements) via API/webhook or direct scraping.<br>- Parse and structure the data for further analysis.                    | - Access to structured job data.<br>- Data parsing modules (e.g., regex, NLP parsers).                                            | - Handle variations in data format.<br>- Ensure data completeness before processing.                                                            |
| **Extract Key Job Attributes**                 | - Analyze job description to identify required skills, qualifications, and responsibilities.<br>- Highlight keywords and competencies to match user profile.                   | - NLP techniques for entity extraction and keyword analysis.<br>- Domain-specific dictionaries or models.                         | - Handle ambiguous or vague descriptions.<br>- Ensure extraction accuracy.                                                                      |
| **Align with User Profile & History**          | - Retrieve relevant parts of the user’s resume and past experiences.<br>- Map job requirements with user skills to determine fit and emphasize strengths.                      | - Access to the user’s structured profile data.<br>- Matching algorithms to align job needs with profile attributes.              | - Maintain user data privacy.<br>- Address gaps between job requirements and user profile gracefully.                                           |
| **Generate Custom Application Materials**      | - Construct a tailored prompt for generating a cover letter (or resume adjustments) using the extracted job and user information.<br>- Generate draft content via the LLM.     | - Access to a capable LLM (e.g., GPT-4) with prompt engineering.<br>- Template management and customization frameworks.           | - Balance personalization with professionalism.<br>- Verify that generated content is factually consistent with the user’s data.                |
| **Iterative Refinement & Quality Check**       | - Run generated content through self-evaluation steps (e.g., re-prompting for clarity, checking for tone, grammar, and job-specific relevance).                                | - Additional LLM prompts for self-review.<br>- External grammar and style-check tools if necessary.                               | - Allow for multiple iterations to refine quality.<br>- Optionally incorporate human feedback or pre-defined quality metrics.                   |
| **Simulate Application Interface Integration** | - Prepare the final content to be inserted into LinkedIn’s application forms (e.g., cover letter text, resume attachments).<br>- Format the content to meet form requirements. | - Knowledge of LinkedIn’s input fields and formatting constraints.<br>- Integration layer with the application automation module. | - Ensure compatibility with the LinkedIn interface.<br>- Handle edge cases like character limits or specific formatting needs.                  |
| **Execute Automated Submission**               | - Pass the finalized content to the automation module (e.g., Selenium script) for form submission.<br>- Monitor confirmation messages or error responses.                      | - Stable API/web automation scripts.<br>- Communication channel between LLM agent and submission module.                          | - Robust error handling is critical.<br>- Confirm that submission was successful and log the outcome.                                           |

_Generated with :simple-openai: ChatGPT._{: .secondary }

## Problems

### Applying to Jobs in behalf of user.

If we are going to implement this then this might be the most heavy situation because we have to deal with multiple
steps like:

1. User Login.
2. Migrating to each job listing page.
3. Applying to job by filling the form including uploading user's Resume.

{==

Due to this problem we should **first focus on creating an AI agent which find relevant jobs for user** by seeing their
LinkedIn profile and their Resume.

==}

## Agent Flow

- Linkedin profile URL.
- Resume as PDF
- A tool will extract info like experience, job type, job mode, and more.
- A tool will scrape relevant jobs on the basis of user's extracted data.
- Sort the scraped jobs by most relevant for user.

### LangChain Perception

- How to use messages? (With .stream method)
- How to implement async tools? (For profile scraping and resume parsing purpose)
