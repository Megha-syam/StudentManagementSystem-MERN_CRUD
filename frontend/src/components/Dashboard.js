import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaList } from 'react-icons/fa';
import { motion } from 'framer-motion'; // You must install this

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex flex-col justify-between">
      
      {/* Header */}
      <header className="text-center p-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-700"
        >
          🎓 Welcome to the Student Dashboard
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg">Manage your student data beautifully and easily</p>
      </header>

      {/* Operations */}
      <main className="flex flex-col items-center gap-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Add Student */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Add New Student</h3>
            <p className="text-sm text-gray-600 mb-6">Create new student profiles and store information securely.</p>
            <button
              onClick={() => navigate('/create')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-md"
            >
              <FaUserPlus />
              Add Student
            </button>
          </div>

          {/* View Students */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">View All Students</h3>
            <p className="text-sm text-gray-600 mb-6">See the complete list of students and their details.</p>
            <button
              onClick={() => navigate('/list')}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-md"
            >
              <FaList />
              View Students
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-12 p-6">
        © {new Date().getFullYear()} Student Management System. Built with 💜 by Team.
      </footer>
    </div>
  );
}

export default Dashboard;
