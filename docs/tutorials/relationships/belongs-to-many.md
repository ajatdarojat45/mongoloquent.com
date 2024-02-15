---
sidebar_position: 2
---

# belongsToMany

## belongsToMany(Model, pivotModel, foreignKey, foreignKeyTarget)

Many-to-many relations are slightly more complicated than hasOne and hasMany relationships. An example of a many-to-many relationship is a user that has many roles and those roles are also shared by other users in the application. For example, a user may be assigned the role of "Author" and "Editor"; however, those roles may also be assigned to other users as well. So, a user has many roles and a role has many users.

### Collection structure

To define this relationship, three database collections are needed: `users`, `roles`, and `roleUser`. The `roleUser` collection is derived from the alphabetical order of the related model names and contains `userId` and `roleId` columns. This collection is used as an intermediate collection linking the `users` and `roles`.

```
users
    _id - id
    name - string

roles
    _id - id
    name - string

roleUser
    _id - id
    userId - id
    roleId - id
```

### Model structure

Many-to-many relationships are defined by writing a method that returns the result of the belongsToMany method. For example, let's define a `roles` method on our `User` model. The first argument passed to this method is the name of the related model class:

```js
import { Mongoloquent } from "mongoloquent";
import Role from "./yourPath/Role";
import RoleUser from "./yourPath/RoleUser";

class User extends Mongoloquent {
	static collection = "users";

	static roles() {
		return this.belongsToMany(Role, RoleUser, "userId", "roleId");
	}
}

// usage
const user = await User.where("_id", "65ab7e3d05d58a1ad246ee87")
	.with("roles")
	.first();
```

Also, you can pass collection name as a Model.

> The softDelete is disabled in the target model when you pass the collection name as a model.

```js
import { Mongoloquent } from "mongoloquent";

class User extends Mongoloquent {
	static collection = "users";

	static roles() {
		return this.belongsToMany("roles", "roleUser", "userId", "roleId");
	}
}

// usage
const user = await User.where("_id", "65ab7e3d05d58a1ad246ee87")
	.with("roles")
	.first();
```
