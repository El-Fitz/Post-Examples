/*
 * @Author: Thomas Léger 
 * @Date: 2019-03-06 20:05:11 
 * @Last Modified by: Thomas Léger
 * @Last Modified time: 2019-03-07 00:27:16
 */

"use strict";

const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = "Demo-SomeStage-Table";

module.exports.get = async (event) => {
  const itemId = event.pathParameters.id;
  const sortKey = event.pathParameters.sortKey;
  const params = {
    TableName : tableName,
    Key: {
      hashKey: itemId,
      sortKey: sortKey
    }
  };
  return documentClient.get(params).promise().then((item) => {
    return {
      statusCode: 200,
      body: JSON.stringify(item),
    };
  }).catch((error) => {
    console.log("Error: ", JSON.stringify(error));
    return {
      statusCode: 404,
      body: "Some error occured",
    };
  });
};

module.exports.post = async (event) => {
  const item = JSON.parse(event.body);
  const params = {
    TableName : tableName,
    Item: item
  };
  return documentClient.put(params).promise().then((response) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        hashKey: item.hashKey,
        sortKey: item.sortKey
      }),
    };
  }).catch((error) => {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  });
};
