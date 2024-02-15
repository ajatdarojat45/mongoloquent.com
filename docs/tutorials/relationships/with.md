---
sidebar_position: 5
---

# Eager Loading

## with(relation, options?)

The `with` method is used to perform eager loading of a specified relationship. it takes two parameters: `relation: str` and `options: obj`.

Before use this method make sure you have set relationship in your `Model`. For more detail you can see about relationship [here](#relationships).

```js
import { Mongoloquent } from "mongoloquent";
import User from "./yourpath/User";
import Comment from "./yourPath/Comment";

class Post extends Mongoloquent {
	static collection = "posts";

	static user() {
		return this.belongsTo(User, "userid", "_id");
	}

	static comments() {
		return this.hasMany(Comment, "postId", "_id");
	}
}

// usage
const post = await Post.where("_id", "65ab7e3d05d58a1ad246ee87")
	.with("user")
	.with("comments")
	.first();
```

Also, you can pass an option to select some columns of the relation result.

```js
import { Mongoloquent } from "mongoloquent";
import User from "./yourpath/User";

class Post extends Mongoloquent {
	static collection = "posts";

	static user() {
		return this.belongsTo(User, "userid", "_id");
	}
}

// usage
const posts = await Post.where("ispublish", true)
	.with("user", {
		select: ["username", "email"],
	})
	.get();
```

Or, exclude some columns of the relation result.

```js
import { Mongoloquent } from "mongoloquent";
import User from "./yourpath/User";

class Post extends Mongoloquent {
	static collection = "posts";

	static user() {
		return this.belongsTo(User, "userid", "_id");
	}
}

// usage
const posts = await Post.where("ispublish", true)
	.with("user", {
		exclude: ["password", "email"],
	})
	.get();
```

## has(relation, options?)

`has` method is an alias for the [`with`](#withrelation-options) method.
