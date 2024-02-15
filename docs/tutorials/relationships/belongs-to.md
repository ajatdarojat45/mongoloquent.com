---
sidebar_position: 2
---

# belongsTo

## belongsTo(Model, foreignKey, ownerKey)

Now that we can access all of a post's comments, let's define a relationship to allow a comment to access its parent post. To define the inverse of a `hasMany` relationship, define a relationship method on the child model which calls the `belongsTo` method:

```js
import { Mongoloquent } from "mongoloquent";
import Post from "./yourPath/Post";

class Comment extends Mongoloquent {
	static collection = "comments";

	static post() {
		return this.belongsTo(Post, "postId", "_id");
	}
}

// usage
const comments = await Comment.with("post").get();
```

Also, you can pass collection name as a Model.

> The softDelete is disabled in the target model when you pass the collection name as a model.

```js
import { Mongoloquent } from "mongoloquent";

class Comment extends Mongoloquent {
	static collection = "comments";

	static post() {
		return this.hasMany("posts", "postId", "_id");
	}
}

// usage
const comments = await Comment.with("post").get();
```
