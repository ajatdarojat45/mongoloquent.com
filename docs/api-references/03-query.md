# Query methods

### Query methods table

| Method                                                    | Description                                                                  | Parameters                                           |
| --------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`insert(data)`](<#insert(data)>)                         | Create a new document with the provided data.                                | `data: obj`                                          |
| [`create(data)`](<#create(data)>)                         | Alias for the `insert` method.                                               | `data: obj`                                          |
| [`insertMany(data)`](<#insertmany(data)>)                 | `insertMany` method used to insert documents into the database collection.   | `data: obj[]`                                        |
| [`update(data)`](<#update(data)>)                         | Update a single document that matches a given query.                         | `data: obj`                                          |
| [`updateMany(data)`](<#updatemany(data)>)                 | Update multiple documents that match a given query.                          | `data: obj`                                          |
| [`delete()`](<#delete()>)                                 | Delete a single document that matches a given query.                         | -                                                    |
| [`deleteMany()`](<#deletemany()>)                         | Delete multiple documents that matches a given query.                        | -                                                    |
| [`select(columns)`](<#select(columns)>)                   | Select specific columns to be displayed in the query results.                | `columns: str or str[]`                              |
| [`exclude(columns)`](<#exclude(columns)>)                 | Exclude specific columns from being displayed in the query results.          | `columns: str or str[]`                              |
| [`all()`](<#all()>)                                       | Retrieve all of the records from the model's associated database collection. | -                                                    |
| [`get(columns)`](<#get(columns)>)                         | Get the documents matching the query criteria.                               | `columns: str or str[]`                              |
| [`paginate(page, limit)`](#paginate)                      | Paginate the query results.                                                  | `page: int, limit: int`                              |
| [`first(columns)`](<#first(columns)>)                     | Get the first document matching the query criteria.                          | `columns: str or str[]`                              |
| [`find(id)`](<#find(id)>)                                 | Find a document by its ID.                                                   | `id: str or ObjectId`                                |
| [`pluck(column)`](<#pluck(column)>)                       | Retrieve the values of a specific column from the query results.             | `column: str`                                        |
| [`limit(value)`](<#limit(value)>)                         | Limit the number of documents to be returned by the query.                   | `value: int`                                         |
| [`take(value)`](<#take(value)>)                           | Alias for the `limit` method.                                                | `value: int`                                         |
| [`offset(value)`](<#offset(value)>)                       | Set an offset for the query results.                                         | `value: int`                                         |
| [`skip(value)`](<#skip(value)>)                           | Skip a specified number of documents in the query results.                   | `value: int`                                         |
| [`where(column, operator, value)`](#where)                | Add a WHERE clause to the query.                                             | `column: str`, `operator: str`, `value: any`         |
| [`orWhere(column, operator, value)`](#orwhere)            | Add an OR WHERE clause to the query.                                         | `column: str`, `operator: str`, `value: any`         |
| [`whereIn(column, values)`](#wherein)                     | Add a WHERE IN clause to the query.                                          | `column: str`, `values: any[]`                       |
| [`orWhereIn(column, values)`](#orwherein)                 | Add an OR WHERE IN clause to the query.                                      | `column: str,` `values: any[]`                       |
| [`whereNotIn(column, values)`](#wherenotin)               | Add a WHERE NOT IN clause to the query.                                      | `column: str`, `values: any[]`                       |
| [`orWhereNotIn(column, values)`](#orwherenotin)           | Add an OR WHERE NOT IN clause to the query.                                  | `column: str`, `values: any[]`                       |
| [`whereBetween(column, values)`](#wherebetween)           | Add a WHERE BETWEEN clause to the query.                                     | `column: str`, `values: int[]`                       |
| [`orWhereBetween(column, array values)`](#orwherebetween) | Add an OR WHERE BETWEEN clause to the query.                                 | `column: str`, `values: int[]`                       |
| [`orderBy(column, direction, isSensitive?)`](#orderby)    | Sort the query results by a specific column.                                 | `column: str`, `direction: str`, `isSensitive: bool` |
| [`groupBy(column)`](<#groupby(column)>)                   | Group the query results by specific columns.                                 | `column: str`                                        |
| [`min(column)`](<#min(column)>)                           | Retrieve the minimum value of a specific column.                             | `column: str`                                        |
| [`max(column)`](<#max(column)>)                           | Retrieve the maximum value of a specific column.                             | `column: str`                                        |
| [`sum(column)`](<#sum(column)>)                           | Calculate the sum of values in a specific column.                            | `column: str`                                        |
| [`avg(column)`](<#avg(column)>)                           | Calculate the average value of a specific column.                            | `column: str`                                        |
| [`count()`](<#count()>)                                   | Count the number of documents matching the query criteria.                   | -                                                    |
