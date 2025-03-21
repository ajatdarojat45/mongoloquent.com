---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Sponsor from "../sponsor.mdx";

# Query Builder

## Introduction

Mongoloquent's database query builder provides a convenient, fluent interface to creating and running database queries. It can be used to perform most database operations in your application.

## Running Database Queries

#### Retrieving All Rows From a collection

You may use the `query` method provided by the `Mongoloquent` model to begin a query. The `query` method returns a fluent query builder for the given collection, allowing you to chain more constraints onto the query and then finally retrieve the results of the query using the `get` method:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.get();
    ```

  </TabItem>
</Tabs>

The `get` method returns your database `schema`. You may access each column's value by accessing the column as a property of the object:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.get();

    users.forEach((user) => {
      console.log(user.name);
    });
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.get();

    users.forEach((user) => {
      console.log(user.name);
    });
    ```

  </TabItem>
</Tabs>

#### Retrieving a Single Row / Column From a Table

If you just need to retrieve a single row from a database table, you may use the `Mongoloquent`'s `first` method. This method will return a single `schema` object:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const user = await User.where('name', 'John').first();

    return user.name;
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const user = await User.where('name', 'John').first();

    return user.name;
    ```

  </TabItem>
</Tabs>

If you would like to retrieve a single row from a database table, but throw an `NotFoundException` if no matching row is found, you may use the `firstOrFail` method.

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const user = await User.where('name', 'John').firstOrFail();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const user = await User.where('name', 'John').firstOrFail();
    ```

  </TabItem>
</Tabs>

#### Retrieving a List of Column Values

If you would like to retrieve an `collection` containing the values of a single column, you may use the `pluck` method. In this example, we'll retrieve a collection of user titles:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const titles = await User.pluck('title');

    titles.forEach((title) => {
      console.log(title);
    });
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const titles = await User.pluck('title');

    titles.forEach((title) => {
      console.log(title);
    });
    ```

  </TabItem>
</Tabs>

### Aggregates

The query builder also provides a variety of methods for retrieving aggregate values like `count`, `max`, `min`, `avg`, and `sum`. You may call any of these methods after constructing your query:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';
    import Order from './Models/Order';

    const users = await User.count();

    const price = await Order.max('price');
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';
    import Order from './Models/Order';

    const users = await User.count();

    const price = await Order.max('price');
    ```

  </TabItem>
</Tabs>

Of course, you may combine these methods with other clauses to fine-tune how your aggregate value is calculated:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import Order from './Models/Order';

    const price = await Order.where('finalized', true).avg('price');
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import Order from './Models/Order';

    const price = await Order.where('finalized', true).avg('price');
    ```

  </TabItem>
</Tabs>

## Select Statements

#### Specifying a Select Clause

You may not always want to select all columns from a database table. Using the select method, you can specify a custom `select` clause for the query:

<Tabs>
	<TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.select('name').get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.select('name').get();
    ```

  </TabItem>
</Tabs>

#### Multi-Select Statements

You may also specify multiple columns to select:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.select('name').select('email').get();

    // or

    const users = await User.select(['name', 'email']).get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.select('name').select('email').get();

    // or

    const users = await User.select(['name', 'email']).get();
    ```

  </TabItem>
</Tabs>

## Basic Where Clauses

### Where Clauses

You may use the query builder's `where` method to add "where" clauses to the query. The most basic call to the `where` method requires three arguments. The first argument is the name of the column. The second argument is an operator, which can be any of the database's supported operators. The third argument is the value to compare against the column's value.

For example, the following query retrieves users where the value of the `votes` column is equal to `100` and the value of the `age` column is greater than `35`:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .where('votes', 100)
      .where('age', '>', 35)
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .where('votes', 100)
      .where('age', '>', 35)
      .get();
    ```

  </TabItem>
</Tabs>

For convenience, if you want to verify that a column is `=` to a given value, you may pass the value as the second argument to the `where` method. Laravel will assume you would like to use the `=` operator:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.where('votes', 100).get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.where('votes', 100).get();
    ```

  </TabItem>
</Tabs>

As previously mentioned, you may use any operator that is supported by your database system:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User.where('votes', '>=', 100).get();

    const users = await User.where('votes', '<>', 100).get();

    const users = await User.where('name', 'like', 'T').get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User.where('votes', '>=', 100).get();

    const users = await User.where('votes', '<>', 100).get();

    const users = await User.where('name', 'like', 'T').get();
    ```

  </TabItem>
</Tabs>

### Or Where Clauses

When chaining together calls to the query builder's `where` method, the "where" clauses will be joined together using the `and` operator. However, you may use the orWhere method to join a clause to the query using the `or` operator. The `orWhere` method accepts the same arguments as the `where` method:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .where('votes', '>', 100)
      .orWhere('name', 'John')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .where('votes', '>', 100)
      .orWhere('name', 'John')
      .get();
    ```

  </TabItem>
</Tabs>

### Where Not Clauses

The `whereNot` and `orWhereNot` methods may be used to negate a given group of query constraints. For example, the following query excludes products that are on clearance or which have a price that is less than ten:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import Product from './Models/Product';

    const products = await Product
      .whereNot('clearance', true)
      .orWhereNot('price', '<', 10)
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import Product from './Models/Product';

    const products = await Product
      .whereNot('clearance', true)
      .orWhereNot('price', '<', 10)
      .get();
    ```

  </TabItem>
</Tabs>

### Additional Where Clauses

#### whereIn / whereNotIn / orWhereIn / orWhereNotIn

The `whereIn` method verifies that a given column's value is contained within the given array:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereIn('_id', [
        "10ab7e3d05d58a1ad246ee87",
        "10ab7e3d05d58a1ad246ee88",
        "10ab7e3d05d58a1ad246ee89"
      ])
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereIn('_id', [
        "10ab7e3d05d58a1ad246ee87",
        "10ab7e3d05d58a1ad246ee88",
        "10ab7e3d05d58a1ad246ee89"
      ])
      .get();
    ```

  </TabItem>
</Tabs>

The `whereNotIn` method verifies that the given column's value is not contained in the given array:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereNotIn('_id', [
        "10ab7e3d05d58a1ad246ee87",
        "10ab7e3d05d58a1ad246ee88",
        "10ab7e3d05d58a1ad246ee89"
      ])
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereNotIn('_id', [
        "10ab7e3d05d58a1ad246ee87",
        "10ab7e3d05d58a1ad246ee88",
        "10ab7e3d05d58a1ad246ee89"
      ])
      .get();
    ```

  </TabItem>
</Tabs>

#### whereBetween / orWhereBetween

The `whereBetween` method verifies that a column's value is between two values:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereBetween('votes', [1, 100])
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereBetween('votes', [1, 100])
      .get();
    ```

  </TabItem>
</Tabs>

#### whereNotBetween / orWhereNotBetween

The `whereNotBetween` method verifies that a column's value lies outside of two values:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereNotBetween('votes', [1, 100])
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereNotBetween('votes', [1, 100])
      .get();
    ```

  </TabItem>
</Tabs>

#### whereNull / whereNotNull / orWhereNull / orWhereNotNull

The `whereNull` method verifies that the value of the given column is `NULL`:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereNull('updatedAt')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereNull('updatedAt')
      .get();
    ```

  </TabItem>
</Tabs>

The `whereNotNull` method verifies that the column's value is not `NULL`:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .whereNotNull('updatedAt')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .whereNotNull('updatedAt')
      .get();
    ```

  </TabItem>
</Tabs>

## Ordering, Grouping, Limit and Offset

### Ordering

#### The orderBy Method

The `orderBy` method allows you to sort the results of the query by a given column. The first argument accepted by the `orderBy` method should be the column you wish to sort by, while the second argument determines the direction of the sort and may be either `asc` or `desc`:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .orderBy('name', 'desc')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .orderBy('name', 'desc')
      .get();
    ```

  </TabItem>
</Tabs>

To sort by multiple columns, you may simply invoke orderBy as many times as necessary:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .orderBy('name', 'desc')
      .orderBy('email', 'asc')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .orderBy('name', 'desc')
      .orderBy('email', 'asc')
      .get();
    ```

  </TabItem>
</Tabs>

### Grouping

The `groupBy` Method
As you might expect, the `groupBy` method may be used to group the query results. The `groupBy` method returns an array of results, with each result representing a group of rows that share a common value:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .groupBy('account_id')
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .groupBy('account_id')
      .get();
    ```

  </TabItem>
</Tabs>

### Limit and Offset

#### The `skip` and `take` Methods

You may use the `skip` and `take` methods to limit the number of results returned from the query or to skip a given number of results in the query:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .skip(10)
      .take(5)
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .skip(10)
      .take(5)
      .get();
    ```

  </TabItem>
</Tabs>

Alternatively, you may use the `limit` and `offset` methods. These methods are functionally equivalent to the `take` and `skip` methods, respectively:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const users = await User
      .offset(10)
      .limit(5)
      .get();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const users = await User
      .offset(10)
      .limit(5)
      .get();
    ```

  </TabItem>  
</Tabs>

## Insert Statements

The query builder also provides an `insert` method that may be used to insert records into the database table. The `insert` method accepts an array of column names and values:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    await User.insert({
      'email': 'kayla@example.com',
      'votes': 0
    });
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    await User.insert({
      'email': 'kayla@example.com',
      'votes': 0
    });
    ```

  </TabItem>
</Tabs>

You may insert several records at once by passing an array of arrays into `insertMany` method. Each array represents a record that should be inserted into the table:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    await User.insertMany([
      {
        'email': 'picard@example.com',
        'votes': 0
      },
      {
        'email': 'janeway@example.com',
        'votes': 0
      }
    ]);
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    await User.insertMany([
      {
        'email': 'picard@example.com',
        'votes': 0
      },
      {
        'email': 'janeway@example.com',
        'votes': 0
      }
    ]);
    ```

  </TabItem>
</Tabs>

## Update Statements

In addition to inserting records into the database, the query builder can also update existing records using the `update` method. The update `method` returns the updated document. You may constrain the update query using where clauses:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const user = await User
      .where('_id', '10ab7e3d05d58a1ad246ee87')
      .update({
        'votes': 1
      });
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const user = await User
      .where('_id', '10ab7e3d05d58a1ad246ee87')
      .update({
        'votes': 1
      });
    ```

  </TabItem>
</Tabs>

#### Update or Insert

Sometimes you may want to update an existing record in the database or create it if no matching record exists. In this scenario, the `updateOrInsert` method may be used. The `updateOrInsert` method accepts two arguments: an object of conditions by which to find the record, and an object of column and value pairs indicating the columns to be updated.

The `updateOrInsert` method will attempt to locate a matching database record using the first argument's column and value pairs. If the record exists, it will be updated with the values in the second argument. If the record cannot be found, a new record will be inserted with the merged attributes of both arguments:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    await User.updateOrInsert(
      { 'email': 'john@example.com', name: 'John' },
      { 'votes': 1 }
    );
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    await User.updateOrInsert(
      { 'email': 'john@example.com', name: 'John' },
      { 'votes': 1 }
    );
    ```

  </TabItem>
</Tabs>

## Delete Statements

The query builder's `delete` method may be used to delete records from the table. The `delete` method returns the number of affected rows. You may constrain `delete` statements by adding "where" clauses before calling the `delete` method:

<Tabs>
  <TabItem value="Typescript" label="Typescript" default>
    ```typescript
    import User from './Models/User';

    const deleted = await User.delete();

    const deleted = await User.where('votes', '>', 100).delete();
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ```javascript
    import User from './Models/User';

    const deleted = await User.delete();

    const deleted = await User.where('votes', '>', 100).delete();
    ```

  </TabItem>
</Tabs>

---

<Sponsor />
