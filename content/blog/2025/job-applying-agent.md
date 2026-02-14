---
pubDate: 2025-02-06
categories: [llm]
title: Job Applying Agent
description: A project idea, to create an AI Agent which recommends Jobs on the basis of user's CV and Job Description.
icon: mdi:robot
---

> Sagar from CampusX group

## Requirements

| Requirements          | Description                                              | Extra                                                                                          |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Framework             | Langchain                                                | We will eventually try to drop it. But if this is a showcase project then a framework is best. |
| Job Opening Data      | Jobs where agent will apply                              | Maybe agent will fetch data on-the-go by web scraping.                                         |
| User Login (LinkedIn) | Need to login the user on the platform in order to apply |                                                                                                |

## Agent Workflow

- **LinkedIn Profile Scraper:** Scrape LinkedIn profile of user and get relevant info.
- **Parse User's Resume:** Parse info from user's Resume.
- **Retrieve relevant jobs:** On the basis of user's parsed info agent will retrive relevant jobs for user after
  analyzing jobs' description.

| **LLM Agent Task**                             | **Detailed Process**                                                                                                                                                           | **Requirements/Dependencies**                                                                                                     | **Considerations**                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Receive & Parse Job Data**                   | - Accept job listing details (title, description, requirements) via API/webhook or direct scraping.<br>- Parse and structure the data for further analysis.                    | - Access to structured job data.<br>- Data parsing modules (e.g., regex, NLP parsers).                                            | - Handle variations in data format.<br>- Ensure data completeness before processing.                                             |
| **Extract Key Job Attributes**                 | - Analyze job description to identify required skills, qualifications, and responsibilities.<br>- Highlight keywords and competencies to match user profile.                   | - NLP techniques for entity extraction and keyword analysis.<br>- Domain-specific dictionaries or models.                         | - Handle ambiguous or vague descriptions.<br>- Ensure extraction accuracy.                                                       |
| **Align with User Profile & History**          | - Retrieve relevant parts of the user’s resume and past experiences.<br>- Map job requirements with user skills to determine fit and emphasize strengths.                      | - Access to the user’s structured profile data.<br>- Matching algorithms to align job needs with profile attributes.              | - Maintain user data privacy.<br>- Address gaps between job requirements and user profile gracefully.                            |
| **Generate Custom Application Materials**      | - Construct a tailored prompt for generating a cover letter (or resume adjustments) using the extracted job and user information.<br>- Generate draft content via the LLM.     | - Access to a capable LLM (e.g., GPT-4) with prompt engineering.<br>- Template management and customization frameworks.           | - Balance personalization with professionalism.<br>- Verify that generated content is factually consistent with the user’s data. |
| **Iterative Refinement & Quality Check**       | - Run generated content through self-evaluation steps (e.g., re-prompting for clarity, checking for tone, grammar, and job-specific relevance).                                | - Additional LLM prompts for self-review.<br>- External grammar and style-check tools if necessary.                               | - Allow for multiple iterations to refine quality.<br>- Optionally incorporate human feedback or pre-defined quality metrics.    |
| **Simulate Application Interface Integration** | - Prepare the final content to be inserted into LinkedIn’s application forms (e.g., cover letter text, resume attachments).<br>- Format the content to meet form requirements. | - Knowledge of LinkedIn’s input fields and formatting constraints.<br>- Integration layer with the application automation module. | - Ensure compatibility with the LinkedIn interface.<br>- Handle edge cases like character limits or specific formatting needs.   |
| **Execute Automated Submission**               | - Pass the finalized content to the automation module (e.g., Selenium script) for form submission.<br>- Monitor confirmation messages or error responses.                      | - Stable API/web automation scripts.<br>- Communication channel between LLM agent and submission module.                          | - Robust error handling is critical.<br>- Confirm that submission was successful and log the outcome.                            |

_Generated with ChatGPT._

## Problems

### Applying to Jobs in Behalf of User.

If we are going to implement this then this might be the heaviest situation because we have to deal with multiple steps
like:

1. User Login.
2. Migrating to each job listing page.
3. Applying to job by filling the form including uploading user's Resume.

> Due to this problem we should **first focus on creating an AI agent which find relevant jobs for user** by seeing
> their LinkedIn profile and their Resume.

## Agent Flow

- LinkedIn profile URL.
- Resume as PDF
- A tool will extract info like experience, job type, job mode, and more.
- A tool will scrape relevant jobs on the basis of user's extracted data.
- Sort the scraped jobs by most relevant for user.

### LangChain Perception

- How to use messages? (With `.stream` method)
- How to implement async tools? (For profile scraping and resume parsing purpose)

---

# 🔎 Job Finder - Raycast Note

## Current Plan

We planned to provide a platform where both Employee and Employer list their skills and requirements and then we will
provide an interface where both Employee and Employer will finder their match on the basis of their skills and
requirements.

## Problem _(with Current Plan)_

- As we are no one who is going to use product the idea Employer listing is hard to be gain success on, so I decided to
  drop it. _(read next)_
- We can scrape websites like LinkedIn, Naukri, etc. and gather data related to Jobs and make the platform only for
  Employee _(as name suggests ****Job Finder****)._

## Platform Usage

- User will upload its Resume/CV on our website.
- We will parse their CV using OCR and extract a structure information for our use case.
- We will then asks the user to fill a partially filled form to get full info about the user.
- The form is already filled by the info we extracted from user’s CV.
- Then, we will recommend most similar Jobs we got in our database.

## Future Plans

- We may also provide a service to create a resume by filling a simple form.

## References

- [jsonresume.org](https://jsonresume.org/getting-started): For custom resume creation.

## Resourses

- <https://towardsdatascience.com/ai-powered-information-extraction-and-matchmaking-0408c93ec1b9>
- <https://github.com/luillyfe/resume-insights>
