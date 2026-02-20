import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MetricCards from '../components/MetricCards';
import CountdownTimer from '../components/CountdownTimer';
import PackingList from '../components/PackingList';
import TodoList from '../components/TodoList';
import Itinerary from '../components/Itinerary';
import TripDetails from '../components/TripDetails';
import Settings from '../components/Settings';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [packingItems, setPackingItems] = useState([]);
  const [todoItems, setTodoItems] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    loadPackingList();
    loadTodoList();
  }, []);

  // Load packing list from localStorage
  const loadPackingList = () => {
    try {
      const saved = localStorage.getItem('thailand-packing-list');
      if (saved) {
        setPackingItems(JSON.parse(saved));
      } else {
        // Default packing items
        const defaultItems = [
          { id: 1, name: 'Passport', category: 'Documents', packed: false },
          { id: 2, name: 'Travel Insurance Documents', category: 'Documents', packed: false },
          { id: 3, name: 'Flight Confirmations', category: 'Documents', packed: false },
          { id: 4, name: 'Hotel Bookings', category: 'Documents', packed: false },
          { id: 5, name: 'Visa Documentation', category: 'Documents', packed: false },
          
          { id: 6, name: 'Shorts', category: 'Clothes', packed: false },
          { id: 7, name: 'T-shirts', category: 'Clothes', packed: false },
          { id: 8, name: 'Lightweight pants', category: 'Clothes', packed: false },
          { id: 9, name: 'Dresses', category: 'Clothes', packed: false },
          { id: 10, name: 'Swimsuit', category: 'Clothes', packed: false },
          { id: 11, name: 'Underwear', category: 'Clothes', packed: false },
          { id: 12, name: 'Socks', category: 'Clothes', packed: false },
          { id: 13, name: 'Comfortable shoes', category: 'Clothes', packed: false },
          { id: 14, name: 'Sandals', category: 'Clothes', packed: false },
          { id: 15, name: 'Light jacket', category: 'Clothes', packed: false },
          
          { id: 16, name: 'Toothbrush', category: 'Toiletries', packed: false },
          { id: 17, name: 'Toothpaste', category: 'Toiletries', packed: false },
          { id: 18, name: 'Sunscreen', category: 'Toiletries', packed: false },
          { id: 19, name: 'After-sun lotion', category: 'Toiletries', packed: false },
          { id: 20, name: 'Deodorant', category: 'Toiletries', packed: false },
          { id: 21, name: 'Shampoo', category: 'Toiletries', packed: false },
          { id: 22, name: 'Conditioner', category: 'Toiletries', packed: false },
          { id: 23, name: 'Shower gel', category: 'Toiletries', packed: false },
          { id: 24, name: 'Face wash', category: 'Toiletries', packed: false },
          { id: 25, name: 'Skincare products', category: 'Toiletries', packed: false },
          { id: 26, name: 'Medications', category: 'Toiletries', packed: false },
          
          { id: 27, name: 'Phone charger', category: 'Electronics', packed: false },
          { id: 28, name: 'Phone', category: 'Electronics', packed: false },
          { id: 29, name: 'Camera', category: 'Electronics', packed: false },
          { id: 30, name: 'Laptop/Tablet', category: 'Electronics', packed: false },
          { id: 31, name: 'Travel adapter', category: 'Electronics', packed: false },
          { id: 32, name: 'Power bank', category: 'Electronics', packed: false },
          { id: 33, name: 'Headphones', category: 'Electronics', packed: false },
          
          { id: 34, name: 'Snacks', category: 'Misc', packed: false },
          { id: 35, name: 'Reusable water bottle', category: 'Misc', packed: false },
          { id: 36, name: 'Travel pillow', category: 'Misc', packed: false },
          { id: 37, name: 'Eye mask', category: 'Misc', packed: false },
          { id: 38, name: 'Earplugs', category: 'Misc', packed: false },
          { id: 39, name: 'Travel guides', category: 'Misc', packed: false },
          { id: 40, name: 'Luggage tags', category: 'Misc', packed: false },
        ];
        setPackingItems(defaultItems);
        localStorage.setItem('thailand-packing-list', JSON.stringify(defaultItems));
      }
    } catch (error) {
      console.error('Error loading packing list:', error);
    }
  };

  // Load todo list from localStorage
  const loadTodoList = () => {
    try {
      const saved = localStorage.getItem('thailand-todo-list');
      if (saved) {
        setTodoItems(JSON.parse(saved));
      } else {
        const defaultTodos = [
          { id: 1, name: 'Confirm flight reservations', done: false },
          { id: 2, name: 'Check passport expiry date', done: false },
          { id: 3, name: 'Get travel insurance', done: false },
          { id: 4, name: 'Notify bank of travel dates', done: false },
          { id: 5, name: 'Book airport transfers', done: false },
          { id: 6, name: 'Arrange travel companions', done: false },
          { id: 7, name: 'Download offline maps', done: false },
          { id: 8, name: 'Check weather forecast', done: false },
          { id: 9, name: 'Purchase travel essentials', done: false },
          { id: 10, name: 'Confirm all hotel reservations', done: false },
        ];
        setTodoItems(defaultTodos);
        localStorage.setItem('thailand-todo-list', JSON.stringify(defaultTodos));
      }
    } catch (error) {
      console.error('Error loading todo list:', error);
    }
  };

  // Add packing item
  const addPackingItem = (category, name) => {
    const newItem = {
      id: Date.now(),
      name,
      category,
      packed: false,
    };
    const updated = [...packingItems, newItem];
    setPackingItems(updated);
    localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
  };

  // Toggle packing item
  const togglePackingItem = (id) => {
    const updated = packingItems.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setPackingItems(updated);
    localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
  };

  // Delete packing item
  const deletePackingItem = (id) => {
    const updated = packingItems.filter(item => item.id !== id);
    setPackingItems(updated);
    localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
  };

  // Add todo item
  const addTodoItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      done: false,
    };
    const updated = [...todoItems, newItem];
    setTodoItems(updated);
    localStorage.setItem('thailand-todo-list', JSON.stringify(updated));
  };

  // Toggle todo item
  const toggleTodoItem = (id) => {
    const updated = todoItems.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodoItems(updated);
    localStorage.setItem('thailand-todo-list', JSON.stringify(updated));
  };

  // Delete todo item
  const deleteTodoItem = (id) => {
    const updated = todoItems.filter(item => item.id !== id);
    setTodoItems(updated);
    localStorage.setItem('thailand-todo-list', JSON.stringify(updated));
  };

  // Calculate metrics
  const calculateDaysUntil = () => {
    const tripDate = new Date('2026-04-03').getTime();
    const today = new Date().getTime();
    const days = Math.ceil((tripDate - today) / (1000 * 60 * 60 * 24));
    return Math.max(0, days);
  };

  const packedCount = packingItems.filter(item => item.packed).length;
  const totalItems = packingItems.length;
  const doneTasks = todoItems.filter(item => item.done).length;
  const totalTasks = todoItems.length;
  const destinations = 3; // Bangkok, Chiang Mai, Phuket

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <MetricCards
              daysUntil={calculateDaysUntil()}
              packedCount={packedCount}
              totalItems={totalItems}
              tasksDone={doneTasks}
              totalTasks={totalTasks}
              destinations={destinations}
            />
            <CountdownTimer />
            <div className="grid lg:grid-cols-2 gap-8">
              <PackingList
                items={packingItems}
                onAdd={addPackingItem}
                onToggle={togglePackingItem}
                onDelete={deletePackingItem}
              />
              <TodoList
                todos={todoItems}
                onAdd={addTodoItem}
                onToggle={toggleTodoItem}
                onDelete={deleteTodoItem}
              />
            </div>
          </div>
        );
      case 'itinerary':
        return <Itinerary />;
      case 'packing':
        return (
          <PackingList
            items={packingItems}
            onAdd={addPackingItem}
            onToggle={togglePackingItem}
            onDelete={deletePackingItem}
          />
        );
      case 'todo':
        return (
          <TodoList
            todos={todoItems}
            onAdd={addTodoItem}
            onToggle={toggleTodoItem}
            onDelete={deleteTodoItem}
          />
        );
      case 'details':
        return <TripDetails />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <Header
          title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
