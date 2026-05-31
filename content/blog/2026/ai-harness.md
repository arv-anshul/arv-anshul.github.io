---
title: AI Harness
description: Using AI Harness like Claude Code or Pi.dev. Manage their configs and conventions in right opinionated way.
icon: mdi:robot
pubDate: 2026-05-30
categories: [blog, ai, conventions]
---

I have started using Claude Code recently in my projects but I am find it hard to maintain its configurations because
Claude Code has it own set of convention than other AI Harness. Due to that I have to maintain both `.agents/` and
`.claude/` which doesn't looks good. Why do I maintain the same thing at two places _(even a symlink)_.

> I have switched to [`chezmoi`](https://chezmoi.io) just because of this.

Although, Claude Code is known to be as the best in its class but I want a better more acceptable, flexible solution to
this. And there is two in the market [OpenCode](https://opencode.ai) and [Pi Agent](https://pi.dev). OpenCode is more
popular than Pi but Pi is more flexible in nature. I am choosing Pi.

> Even though I will not customize it a lot. It just me who wants to try and stick with Pi.

## Requirements

A coding agent should have these things:

- Community Convention Follower
- Agent Skills
- AGENTS.md
- Plan Mode
- Open Source
- Models Availability (No Vendor Locking)
- Extensibility and Customization

> Recently I have Vertex AI project access through which I can use any models like Gemini, Claude, GPT, etc.

### Agent Skills

The coding agent should support the [Agent Skills](https://agentskills.io). This is a standardized way to give AI agents
new capabilities and expertise.

### AGENTS.md

Think of [AGENTS.md](https://agents.md) as a README for agents: a dedicated, predictable place to provide the context
and instructions to help AI coding agents work on your project.

Many agents follow their own conventions like Claude Code has `CLAUDE.md`, Gemini has `GEMINI.md` (it also supports
`AGENTS.md`) but I want an agent which supports this `AGENTS.md` convention because it is being decided by the
community.

### Plan Mode

I don't know how does Plan Mode works in Claude Code but it is very useful for me to think about a feature
implementation before the actual implementation. I think there is one simple solution to use an Agent Skill for that but
I am also exploring more in community.

I have found [@ifi/pi-plan](https://npmx.dev/package/@ifi/pi-plan) (which is actually inspired from
[`/plan-md`](https://github.com/sids/pi-extensions/tree/main/plan-md)) and I think this is a better tool for planning
task because it has a workflow pipeline which guarantee idempotency over tasks.

### Open Source

There are multiple open source coding agents like Codex CLI, Gemini CLI, OpenCode, Pi Coding Agent, etc. But Codex CLI
and Gemini CLI are vendor locked means you cannot use other provider's model in those CLIs.

OpenCode is the most popular one here but I want to go with Pi Coding Agent due to its extensibility and customization.

### Models Availability

Claude Code, Codex, Gemini are vendor locked but OpenCode and Pi are not. You can use any provider's models in those
coding agents which is very useful.

### Extensibility and Customization

Pi is very minimal coding agent but you can also customize it with extensions, prompts, skills, and themes. See
[Pi.dev](https://pi.dev)

I don't need shiny and bloated features in my workflow. I will keep Pi minimal with aesthetic yet powerful and
performant agent for my workflow. I will maintain a repository where I keep my customization configurations.
