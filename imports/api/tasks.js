imports/api/tasks.js »
import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');