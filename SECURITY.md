# Security Policy

We take the security of Railverse and the safety of our users' travel data very seriously. This document outlines our supported versions, reporting procedures, and disclosure policies.

---

## ✦ Supported Versions

Only the latest active major release receives security updates.

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | :white_check_mark: |
| 1.x     | :x:                |

---

## ✦ Reporting a Vulnerability

If you discover a security vulnerability in this application, **please do not open a public issue.** Instead, report it privately to our security team.

### How to Report
1. Email your findings to **`security@travelcore.in`**.
2. Include a detailed description of the vulnerability, steps to reproduce it, and the potential impact.
3. If possible, attach proof-of-concept scripts or screenshots.

### Our Response Process
- **Acknowledgment**: We will acknowledge receipt of your report within 24 hours.
- **Triage**: Our engineering team will investigate and confirm the vulnerability within 3 business days.
- **Fix**: Once confirmed, we will develop and test a hotfix or patch.
- **Disclosure**: We follow responsible disclosure principles. We will coordinate public release details once a patch has been deployed to production.

---

## ✦ Developer Security Standards

All engineers working on the Railverse codebase must adhere to the following baseline rules:
- **No API Keys in source**: Never commit API keys, Redis passwords, or credentials. Use environment variables defined in `.env.local`.
- **Stateless PNR Queries**: Do not store PNR numbers, names, or seat numbers on application servers. If storage is required, encrypt it end-to-end on the client.
- **Dependency Auditing**: Regularly run `npm audit` to check for security vulnerabilities in third-party packages.
