import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';

export default function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const doneTasks = todos.filter(todo => todo.done).length;
  const completionPercent = todos.length > 0 ? (doneTasks / todos.length) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">Todo List</h2>
          <span className="text-sm font-medium text-slate-500">{doneTasks}/{todos.length}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500 rounded-full"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
        <div className="text-xs text-slate-400 mt-2">
          {Math.round(completionPercent)}% complete
        </div>
      </div>

      {/* Add Todo Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new task..."
          className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>

      {/* Todo Items */}
      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-400 text-sm">No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                className="w-5 h-5 text-blue-500 bg-white border-slate-300 rounded cursor-pointer"
              />
              <span
                className={`flex-1 text-sm ${
                  todo.done
                    ? 'text-slate-400 line-through'
                    : 'text-slate-700'
                }`}
              >
                {todo.name}
              </span>
              <button
                onClick={() => onDelete(todo.id)}
                className="flex-shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
