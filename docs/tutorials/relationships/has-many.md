---
sidebar_position: 1
---

# hasMany

## hasMany(Model, foreignKey, localKey)

A one-to-many relationship is used to define relationships where a single model is the parent to one or more child models. For example, a blog post may have an infinite number of comments. Like all other `Mongoloquent` relationships, one-to-many relationships are defined by defining a method on your `Mongoloquent` model.

```js
import { Mongoloquent } from "mongoloquent";
import Comment from "./yourPath/Comment";

class Post extends Mongoloquent {
	static collection = "posts";

	static comments() {
		return this.hasMany(Comment, "postId", "_id");
	}
}

// usage
const post = await Post.where("_id", "65ab7e3d05d58a1ad246ee87")
	.with("comments")
	.first();
```

Also, you can pass collection name as a Model.

> The softDelete is disabled in the target model when you pass the collection name as a model.

```js
import { Mongoloquent } from "mongoloquent";

class Post extends Mongoloquent {
	static collection = "posts";

	static comments() {
		return this.hasMany("comments", "postId", "_id");
	}
}

// usage
const post = await Post.where("_id", "65ab7e3d05d58a1ad246ee87")
	.with("comments")
	.first();
```
