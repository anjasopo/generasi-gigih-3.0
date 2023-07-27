# MongoDB Basics

In this section, we will cover some essential MongoDB concepts and operations for managing documents in a MongoDB database.

## Table of Contents
- [MongoDB Basics](#mongodb-basics)
  - [Table of Contents](#table-of-contents)
  - [Inserting Documents](#inserting-documents)
    - [Inserting a Single Document](#inserting-a-single-document)
    - [Inserting Multiple Documents](#inserting-multiple-documents)
  - [Removing Documents](#removing-documents)
    - [Removing a Single Document](#removing-a-single-document)
    - [Removing Multiple Documents](#removing-multiple-documents)
    - [Removing All Documents](#removing-all-documents)
  - [Updating Documents](#updating-documents)
    - [Updating a Single Document](#updating-a-single-document)
    - [Updating Multiple Documents](#updating-multiple-documents)
    - [Using the $set Operator](#using-the-set-operator)
    - [Using the $unset Operator](#using-the-unset-operator)
    - [Using the $inc Operator](#using-the-inc-operator)
  - [Array Operators](#array-operators)
    - [Using $push](#using-push)
  - [Indexing](#indexing)
  - [Which Fields to Index?](#which-fields-to-index)
  - [Compound Indexes](#compound-indexes)
  - [Aggregation Framework](#aggregation-framework)

## Inserting Documents

### Inserting a Single Document

To insert a single document into a collection, use the `insertOne` method. It adds a document to the collection and automatically generates an `_id` field if not provided.

```js
db.collection.insertOne(document)
```

### Inserting Multiple Documents

For inserting multiple documents, use the `insertMany` method. It can insert an array of documents into the collection.

```js
db.collection.insertMany([document1, document2, ...])
```

## Removing Documents

### Removing a Single Document

To remove a single document from a collection, use the `deleteOne` method with a filter to specify the document to delete.

```js
db.collection.deleteOne(filter)
```

### Removing Multiple Documents

To remove multiple documents that match a filter, use the `deleteMany` method.

```js
db.collection.deleteMany(filter)
```

### Removing All Documents

To remove all documents from a collection, you can use `deleteMany` without providing a filter.

```js
db.collection.deleteMany({})
```

## Updating Documents

### Updating a Single Document

Use `updateOne` to update a single document in the collection that matches the specified filter.

```js
db.collection.updateOne(filter, update)
```

### Updating Multiple Documents

To update multiple documents that match a filter, use the `updateMany` method.

```js
db.collection.updateMany(filter, update)
```

### Using the $set Operator

The `$set` operator is used to set the value of a field or create it if it does not exist in the document.

```js
db.collection.updateOne(filter, { $set: { field: value } })
```

### Using the $unset Operator

The `$unset` operator removes a specific field from a document.

```js
db.collection.updateOne(filter, { $unset: { field: 1 } })
```

### Using the $inc Operator

The `$inc` operator increments a numeric field's value atomically.

```js
db.collection.updateOne(filter, { $inc: { field: incrementValue } })
```

## Array Operators

MongoDB provides a set of operators for manipulating arrays in documents.

### Using $push

The `$push` operator adds elements to the end of an array if it exists, or creates a new array and adds elements to it.

```js
db.collection.updateOne(filter, { $push: { arrayField: value } })
```

## Indexing

Indexes in MongoDB improve query performance significantly. To create an index on a specific field, use the `createIndex` method.

```js
db.collection.createIndex({ field: 1 })
```

## Which Fields to Index?

To determine which fields to index, consider frequent queries and those that require fast response times.

## Compound Indexes

Compound indexes are useful for query patterns involving multiple keys or sort directions.

## Aggregation Framework

The aggregation framework in MongoDB allows performing analytics on documents within collections. The aggregation pipeline consists of stages that perform various operations on data.

---

This documentation provides an overview of MongoDB basics, covering inserting, removing, and updating documents, using array operators, creating indexes, and utilizing the aggregation framework for analytics.