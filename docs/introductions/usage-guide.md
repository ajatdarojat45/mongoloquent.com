---
sidebar_position: 3
---

# Usage Guide

## Setup database name, connection & timezone

Add this code to your .env file.

```

# default: mongodb://localhost:27017
MONGOLOQUENT_URI=

# default: mongoloquent
MONGOLOQUENT_DATABASE=

# used for the test environment or when the NODE_ENV environment variable value = test
# default: MONGOLOQUENT_DATABASE + "_test"
MONGOLOQUENT_DATABASE_TEST=

# default: Asia/Jakarta
MONGOLOQUENT_TIMEZONE=
```

## Extends Mongoloquent to your class or model

```js
// with ES6
import { Mongoloquent } from "mongoloquent";

class User extends Mongoloquent {
	static collection = "users";
	static timestamps = true; // default false
	static softDelete = true; // default false
}
```

```js
// with CommonJS
const { Mongoloquent } = require("mongoloquent");

class User extends Mongoloquent {
	static collection = "users";
	static timestamps = true; // default false
	static softDelete = true; // default false
}
```
