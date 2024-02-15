# Soft delete methods

## Soft delete methods table

| Method                          | Description                                                                                                   | Parameters |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| [`restore()`](#restore)         | The `onlyTrashed` method will retrieve only soft deleted models.                                              | -          |
| [`forceDelete()`](#forcedelete) | The `forceDelete` method to permanently remove a soft deleted model from the database collection.             | -          |
| [`withTrashed()`](#withtrashed) | The `withTrashed` method will force soft deleted models to be included soft delete data in a query's results. | -          |
| [`onlyTrashed()`](#onlytrashed) | The `onlyTrashed` method will retrieve only soft deleted models.                                              | -          |
