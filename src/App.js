import React, { useState, useEffect, useContext } from 'react';
import { getMentorAgenda } from './utils/services';
import useRequest from './hooks/useRequest';

import Calendar from './components/Calendar/Calendar';

import logo from './logo.svg';
import './App.css';

function App() {
    const [content, isLoading, error] = useRequest({
    service: getMentorAgenda,
    serviceArg: 1,
    dependencies: [],
  });
  if(isLoading) {
    return <div>Data is loading...</div>
  }
  if (error) {
    return <div>Sorry, something went wrong.</div>
  }
  return (
    <div className="App">
        {content && 
          <main>
              <Calendar calendarData={content} theme="salmon" />
          </main>
        }
    </div>
  );
}

export default App;
