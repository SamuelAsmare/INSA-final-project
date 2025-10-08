import React, { useState } from 'react';
import "./faq.css";

const faqs =[
  {
    question: "What is Task Nest?",
    answer: "Task Nest is a productivity platform that helps you organize, manage, and track your daily tasks. It’s built for individuals and teams looking to stay focused and efficient."
  },
  {
    question: "How do I sign up and log in?",
    answer: "You can sign up or log in using your email and password. We also support secure authentication through Firebase."
  },
  {
    question: "How can I add a new task?",
    answer: "Simply navigate to the 'Add Task' page from your dashboard. Fill in the task title, description, and due date, then click save."
  },
  {
    question: "Can I track my task progress?",
    answer: "Yes. Tasks are displayed with their current status—completed or pending. You can also mark them as done directly from your dashboard."
  },
  {
    question: "How are tasks organized?",
    answer: "Tasks are grouped by their status: All Tasks, Completed Tasks, and Undone Tasks. You can filter and manage them easily."
  },
  {
    question: "Can I edit or delete a task?",
    answer: "Absolutely. You can click on any task to update its details or delete it permanently from your list."
  },
  {
    question: "Is dark mode supported?",
    answer: "Yes. Task Nest supports dark mode to reduce eye strain and provide a pleasant user experience, especially at night."
  },
  {
    question: "Can I set deadlines or reminders?",
    answer: "You can assign due dates to your tasks, and we’re working on integrating real-time reminders in future updates."
  },
  {
    question: "Is Task Nest mobile-friendly?",
    answer: "Yes, the platform is fully responsive and works seamlessly on mobile, tablet, and desktop devices."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All your data is securely stored using Firebase, and only you can access your task list once logged in."
  },
  {
    question: "Can I view completed tasks?",
    answer: "Yes. There is a dedicated section in your dashboard where all completed tasks are listed and can be reviewed."
  },
  {
    question: "Can I restore deleted tasks?",
    answer: "Currently, once a task is deleted, it cannot be recovered. We're working on a Trash feature for future updates."
  },
  {
    question: "Does Task Nest support collaboration?",
    answer: "Not at the moment. However, team features and shared task boards are planned for future releases."
  },
  {
    question: "Is there a calendar or timeline view?",
    answer: "A visual calendar and timeline view are in development to help you better manage your schedules."
  },
  {
    question: "How do I give feedback or report bugs?",
    answer: "You can contact us via the 'Contact' section or send feedback directly through the platform’s footer form."
  }
];


const Faq = () => {
  const [active, setActive] = useState(null);

  const changeIndex = (index) => {
    setActive(active === index ? null : index); // Toggle on second click
  };

  return (
    <div className="faqcontainer">
      <h1 className="faqtitle">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="eachfaq" onClick={() => changeIndex(index)}>
          <p className="questions">{faq.question}</p>
          <div className={`answer-wrapper ${active === index ? 'open' : 'closed'}`}>
            <p className="questions answers">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
