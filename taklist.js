// Tasks/TaskList.js
import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import taskService from '../services/taskService';

const TaskList = () => {
  const tasks = taskService.getTasks(); // Replace with actual data retrieval logic

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;
