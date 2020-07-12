import React from 'react';
import './App.css';
import TodaysPlan from './03/todaysPlan';
import MyComponent from './03/MyComponent';

class App extends React.Component {
    render() {
        return (
            <div className="body">
                <TodaysPlan />
                <MyComponent name="손진영"/>
            </div>
        )
    }
}

export default App;

