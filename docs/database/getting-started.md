---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Sponsor from "../sponsor.mdx";

# Getting Started

## Introduction

Almost every modern web application interacts with a database. Mongoloquent makes interacting with MongoDB databases extremely simple.

### Configuration

The configuration for database is located in your application's `.env` configuration file. In this file, you may define all of your database connections, as well as specify which connection should be used by default. Most of the configuration options within this file are driven by the values of your application's environment variables.

```env
MONGOLOQUENT_DATABASE_CONNECTION=your-connection-uri
MONGOLOQUENT_DATABASE_NAME=your-database-name
```

### Using Multiple Database Connections
