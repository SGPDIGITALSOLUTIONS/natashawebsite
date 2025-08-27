'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaAngleRight, FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

export default function PricingPage() {
  const [retainerHours, setRetainerHours] = useState(10);
  const [paygoHours, setPaygoHours] = useState(5);
  const [showSurvey, setShowSurvey] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);
  
  // Pricing calculations
  const retainerRates = {
    10: 300,   // 10 hours * £30
    15: 450,   // 15 hours * £30
    20: 600,   // 20 hours * £30
    25: 750,   // 25 hours * £30
    30: 900,   // 30 hours * £30
    35: 1050,  // 35 hours * £30
    40: 1200   // 40 hours * £30
  };
  
  const paygoRate = 35; // £ per hour
  
  const calculateRetainerPrice = () => {
    return retainerRates[retainerHours] || 0;
  };
  
  const calculatePaygoPrice = () => {
    return paygoHours * paygoRate;
  };

  // Survey questions
  const questions = [
    {
      question: "How often do you find yourself handling administrative tasks?",
      options: [
        { text: "A few times a month", value: "occasional" },
        { text: "Weekly", value: "weekly" },
        { text: "Several times a week", value: "frequent" },
        { text: "Daily", value: "daily" }
      ]
    },
    {
      question: "Do you find administrative tasks taking time away from your core business?",
      options: [
        { text: "Not really", value: "no" },
        { text: "Sometimes", value: "sometimes" },
        { text: "Frequently", value: "yes" },
        { text: "Definitely, all the time", value: "definitely" }
      ]
    },
    {
      question: "Would you prefer predictable support costs or variable costs?",
      options: [
        { text: "Definitely variable", value: "variable" },
        { text: "Probably variable", value: "lean_variable" },
        { text: "Probably predictable", value: "lean_predictable" },
        { text: "Definitely predictable", value: "predictable" }
      ]
    },
    {
      question: "How important is having the same assistant handling your tasks?",
      options: [
        { text: "Not important", value: "not_important" },
        { text: "Somewhat important", value: "somewhat" },
        { text: "Very important", value: "very" },
        { text: "Essential", value: "essential" }
      ]
    },
    {
      question: "How quickly do you typically need your tasks completed?",
      options: [
        { text: "No rush, a few days is fine", value: "no_rush" },
        { text: "Within 48 hours", value: "standard" },
        { text: "Within 24 hours", value: "quick" },
        { text: "Same day when possible", value: "urgent" }
      ]
    }
  ];

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendation
      const retainerPoints = calculateRetainerPoints();
      setRecommendedPlan(retainerPoints >= 3 ? "dedicated" : "ondemand");
    }
  };
  
  // Calculate points toward retainer recommendation
  const calculateRetainerPoints = () => {
    let points = 0;
    
    // Question 1: Frequency
    if (answers[0] === "frequent") points += 0.5;
    if (answers[0] === "daily") points += 1;
    
    // Question 2: Time away from core business
    if (answers[1] === "yes") points += 0.5;
    if (answers[1] === "definitely") points += 1;
    
    // Question 3: Predictable costs
    if (answers[2] === "lean_predictable") points += 0.5;
    if (answers[2] === "predictable") points += 1;
    
    // Question 4: Same assistant
    if (answers[3] === "very") points += 0.5;
    if (answers[3] === "essential") points += 1;
    
    // Question 5: Speed
    if (answers[4] === "quick") points += 0.5;
    if (answers[4] === "urgent") points += 1;
    
    return points;
  };
  
  // Reset survey
  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setRecommendedPlan(null);
  };

  // JSX for the survey section
  const renderSurvey = () => {
    if (!showSurvey) {
      return (
        <div className="text-center">
          <button 
            onClick={() => setShowSurvey(true)}
            className="bg-brand-yellow text-brand-navy py-3 px-8 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Take the Quick Assessment
          </button>
        </div>
      );
    }
    
    if (recommendedPlan) {
      return (
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Your Recommendation</h3>
          
          {recommendedPlan === "dedicated" ? (
            <div>
              <div className="mb-6">
                <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">Dedicated Support Plan</h4>
                <p className="text-gray-600 text-center mb-4">
                  Based on your needs, we recommend our Dedicated Support Plan for consistent, reliable assistance.
                </p>
              </div>
              
              <div className="bg-brand-cyan/10 p-4 rounded-lg mb-6">
                <h5 className="font-semibold mb-2">Why this is right for you:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                    <span>You need regular, ongoing assistance with administrative tasks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                    <span>You value having the same assistant who understands your business</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                    <span>You prefer predictable monthly costs</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                    <span>You need quick turnaround times on your tasks</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={resetSurvey}
                  className="text-brand-purple font-medium"
                >
                  Retake Assessment
                </button>
                <a 
                  href="#dedicated-plan"
                  className="bg-brand-yellow text-brand-navy py-2 px-6 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                >
                  View Plan Details
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">On-Demand Support</h4>
                <p className="text-gray-600 text-center mb-4">
                  Based on your needs, our flexible On-Demand Support might be a good starting point.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h5 className="font-semibold mb-2">Why this is right for you:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>You have occasional administrative tasks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>You prefer paying only for what you use</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Your needs vary from month to month</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                <h5 className="font-semibold flex items-center mb-2">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Consider This:
                </h5>
                <p className="text-sm">
                  Many clients who start with On-Demand support often upgrade to a Dedicated Support Plan as they discover the value of regular assistance and consistent support.
                </p>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={resetSurvey}
                  className="text-brand-purple font-medium"
                >
                  Retake Assessment
                </button>
                <a 
                  href="#ondemand-plan"
                  className="bg-brand-yellow text-brand-navy py-2 px-6 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                >
                  View Plan Details
                </a>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-brand-navy">Question {currentQuestion + 1} of {questions.length}</h3>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-8 rounded-full ${index <= currentQuestion ? 'bg-brand-yellow' : 'bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
        
        <h4 className="text-2xl font-semibold mb-6">{questions[currentQuestion].question}</h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option.value)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-brand-purple hover:bg-brand-cyan/10 transition-colors flex justify-between items-center"
            >
              <span>{option.text}</span>
              <FaAngleRight className="text-brand-purple" />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white pt-44">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/" className="inline-block mb-8">
          </Link>
          <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Flexible plans for professional administrative support from real people
          </p>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* On-Demand Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Demand Support</h3>
                
                <div className="mb-6">
                  <label htmlFor="paygo-hours" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimate hours needed:
                  </label>
                  <select 
                    id="paygo-hours"
                    value={paygoHours}
                    onChange={(e) => setPaygoHours(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    {[...Array(38)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>{i + 3} hours</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">£{calculatePaygoPrice()}</span>
                  <span className="text-gray-600 ml-2">total</span>
                </div>
                <p className="text-gray-600 mb-8">
                  Flexible support available when you need it. Perfect for one-off projects or occasional assistance.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>£{paygoRate} per hour</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>No monthly commitment</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>3-hour minimum purchase</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Hours valid for 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Available as needed</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Standard response time</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="block w-full py-3 px-4 rounded-lg text-center font-medium bg-brand-cyan/10 text-brand-navy hover:bg-brand-cyan/20 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Retainer Option */}
            <motion.div
              id="dedicated-plan"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-brand-purple relative"
            >
              <div className="bg-brand-yellow text-brand-navy py-2 text-center font-medium">
                Most Popular
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support Plan</h3>
                
                <div className="mb-6">
                  <label htmlFor="retainer-hours" className="block text-sm font-medium text-gray-700 mb-1">
                    Select hours per month:
                  </label>
                  <select 
                    id="retainer-hours"
                    value={retainerHours}
                    onChange={(e) => setRetainerHours(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  >
                    <option value={10}>10 hours</option>
                    <option value={15}>15 hours</option>
                    <option value={20}>20 hours</option>
                    <option value={25}>25 hours</option>
                    <option value={30}>30 hours</option>
                    <option value={35}>35 hours</option>
                    <option value={40}>40 hours</option>
                  </select>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">£{calculateRetainerPrice()}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>

                <p className="text-gray-600 mb-8">
                  Secure dedicated support hours each month for consistent assistance with your business tasks.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>{retainerHours} hours of support per month</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>15% discount compared to pay-as-you-go</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Unused hours roll over (up to 25%)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>3-month minimum commitment</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Dedicated assistant</span>
                  </li>
                </ul>

                <Link 
                  href="/contact" 
                  className="block w-full py-3 px-4 rounded-lg text-center font-medium bg-brand-yellow text-brand-navy hover:bg-yellow-400 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Project Based Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Based Support</h3>
                <p className="text-gray-600 mb-8">
                  Have a specific project in mind? Let's discuss your requirements and create a custom solution tailored to your needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Custom project scoping</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Fixed project pricing</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Clear deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Regular progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span>Flexible timeline options</span>
                  </li>
                </ul>
                <div className="bg-brand-cyan/10 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Book a Free Consultation</h4>
                  <p className="text-gray-600 mb-6">
                    Schedule a 30-minute call to discuss your project requirements and get a custom quote.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full py-3 px-4 rounded-lg text-center font-medium bg-brand-yellow text-brand-navy hover:bg-yellow-400 transition-colors"
                  >
                    Book Free Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Solutions & Strategic Support */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Quick Solutions & Strategic Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Need something more focused? These targeted services help you tackle specific challenges or gain clarity fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Power Sessions Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">Power Sessions</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Quick, focused support to get you unstuck or supercharge your ideas.
              </p>
              
              <div className="space-y-6">
                {/* Power Hour */}
                <div className="bg-white p-6 rounded-lg border border-cyan-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-brand-navy">Power Hour</h4>
                    <span className="text-2xl font-bold text-brand-purple">£40</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    One focused hour to clarify a problem or make progress fast.
                  </p>
                </div>
                
                {/* Brainstorm Intensive */}
                <div className="bg-white p-6 rounded-lg border border-cyan-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-brand-navy">Brainstorm Intensive</h4>
                    <span className="text-2xl font-bold text-brand-purple">£150</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A 3-hour creative workshop to explore opportunities and map next steps.
                  </p>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="block w-full mt-8 py-3 px-6 rounded-lg text-center font-medium bg-yellow-400 text-yellow-900 hover:bg-yellow-500 transition-colors"
              >
                Book a Power Session
              </Link>
            </motion.div>

            {/* Process Audits Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">Process Audits</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Uncover hidden gaps, opportunities, and practical improvements in your business processes.
              </p>
              
              <div className="space-y-6">
                {/* Audit Review */}
                <div className="bg-white p-6 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-brand-navy">Audit Review</h4>
                    <span className="text-2xl font-bold text-brand-purple">£95</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You complete my structured audit form, I review it, and provide written recommendations.
                  </p>
                </div>
                
                {/* Audit + Strategy Call */}
                <div className="bg-white p-6 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-brand-navy">Audit + Strategy Call</h4>
                    <span className="text-2xl font-bold text-brand-purple">£135</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Includes the audit review plus a 1-hour call to dive deeper into solutions.
                  </p>
                </div>
                
                {/* Full Implementation Package */}
                <div className="bg-white p-6 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-brand-navy">Audit + Report + Implementation</h4>
                    <span className="text-2xl font-bold text-brand-purple">£225</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Includes audit review, full written report, a 1-hour follow-up call, and 2 hours of implementation support.
                  </p>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="block w-full mt-8 py-3 px-6 rounded-lg text-center font-medium bg-brand-purple text-white hover:bg-purple-700 transition-colors"
              >
                Start Process Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Needs Assessment Survey (moved below pricing) */}
      <section className="py-12 px-4 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Not Sure Which Plan Is Right For You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take our quick 5-question assessment to determine whether our Dedicated Support Plan or On-Demand option would better suit your needs.
            </p>
          </div>
          {renderSurvey()}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-brand-cyan/10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-navy mb-12">What's Included</h2>
          

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Administrative Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Email management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Calendar scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Travel arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>File organization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Business Operations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Document preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Basic bookkeeping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Client communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Process documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Project Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Project coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Research assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Reporting & analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Meeting support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to reclaim your time?
          </h2>
          <p className="text-xl mb-8">
            Book a free 30-minute discovery call to discuss your needs and get started.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-brand-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-cyan/10 transition-colors shadow-lg"
          >
            Book Your Free Call
          </Link>
        </div>
      </section>
    </main>
  );
} 