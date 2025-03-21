---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Sponsor from "../sponsor.mdx";

# Pagination

## Introduction

In other frameworks, pagination can be very painful. We hope Mongoloquent's approach to pagination will be a breath of fresh air. Mongoloquen's paginator is integrated with the `query builder` and provides convenient, easy-to-use pagination of database records with zero configuration.

## Basic Usage

### Paginating Query Builder Results

There are several ways to paginate items. The simplest is by using the paginate method on the `query builder`.

### Paginating Results

In this example, we will paginate the `./Models/User` model and indicate that we plan to display 15 records per page. As you can see, the syntax is nearly identical to paginating query builder results:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from "./Models/User";

    const users = await User.paginate(1, 15);
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from "./Models/User";

    const users = await User.paginate(1, 15);
    ```

  </TabItem>
</Tabs>

Of course, you may call the `paginate` method after setting other constraints on the query, such as `where` clauses:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from "./Models/User";

    const users = await User.where("votes", ">", 100).paginate(1, 15);
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from "./Models/User";

    const users = await User.where("votes", ">", 100).paginate(1, 15);
    ```

  </TabItem>
</Tabs>

---

<Sponsor/>
