/*
 * @Author: Thomas Léger 
 * @Date: 2019-03-12 15:51:50 
 * @Last Modified by: Thomas Léger
 * @Last Modified time: 2019-03-12 15:53:47
 */

"use strict";

module.exports.get = async (event) => {
	return {
		statusCode: 200,
		body: "Hello! Go Serverless!",
	}
}