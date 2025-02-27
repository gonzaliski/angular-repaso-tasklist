type Task = {
  id: number;
  title: string;
  completed: boolean;
};
type TaskState = 'pending' | 'completed' | 'all' | 'deleted';
