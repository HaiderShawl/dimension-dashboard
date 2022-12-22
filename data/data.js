export default {
  tasks: {
    'task-1': { id: 'task-1', title: 'Moodboards' },
    'task-2': { id: 'task-2', title: 'Dashboard Design' },
    'task-3': { id: 'task-3', title: 'Design System' },
    'task-4': { id: 'task-4', title: 'Presentation' },
    'task-5': { id: 'task-5', title: 'Brainstorming' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3', 'task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Completed',
      taskIds: ['task-5'],
    },
  },
};
