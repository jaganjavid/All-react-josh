import './App.css';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList";
import { useState } from 'react';
import FeedBackData from './data/FeedBackData';

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => {
       return item.id !== id;
    }))
  }

  return (
    <div className="App">
      <Header/>

      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
