import React, { useState } from 'react';
import { X, Divide, Minus, Plus, Equal, Delete } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleNumber = (num: string) => {
    if (hasResult) {
      setDisplay(num);
      setEquation('');
      setHasResult(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setHasResult(false);
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setHasResult(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-2xl w-full max-w-xs">
        <div className="mb-4">
          <div className="text-gray-300 text-right h-6 text-sm">{equation}</div>
          <div className="text-white text-right text-4xl font-light tracking-wider h-12 overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500/30 hover:bg-red-500/40 text-white p-3 rounded-xl transition-all"
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            className="bg-gray-500/30 hover:bg-gray-500/40 text-white p-3 rounded-xl transition-all"
          >
            <Delete className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-gray-500/30 hover:bg-gray-500/40 text-white p-3 rounded-xl transition-all"
          >
            <Divide className="w-6 h-6 mx-auto" />
          </button>
          
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('*')}
            className="bg-gray-500/30 hover:bg-gray-500/40 text-white p-3 rounded-xl transition-all"
          >
            <X className="w-6 h-6 mx-auto" />
          </button>
          
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-gray-500/30 hover:bg-gray-500/40 text-white p-3 rounded-xl transition-all"
          >
            <Minus className="w-6 h-6 mx-auto" />
          </button>
          
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-gray-500/30 hover:bg-gray-500/40 text-white p-3 rounded-xl transition-all"
          >
            <Plus className="w-6 h-6 mx-auto" />
          </button>
          
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
          >
            .
          </button>
          <button
            onClick={handleEqual}
            className="bg-purple-500/50 hover:bg-purple-500/60 text-white p-3 rounded-xl transition-all"
          >
            <Equal className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;