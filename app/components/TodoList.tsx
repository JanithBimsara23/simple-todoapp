import { ITask } from '@/types/task';
import React from 'react';

interface TodolistProps {
    tasks: ITask[];
}
const TodoList: React.FC<TodolistProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Name</th>
            <th>Favorite Color</th>
        </tr>
        </thead>
        <tbody>
        {tasks.map(task) => (
            <tr key={task.id}>
            <td>Cy Ganderton</td>
            <td>Blue</td>
        </tr>
        )}
        
        {/* row 2 */}
        
        
        </tbody>
    </table>
</div>
  )
}

export default TodoList
