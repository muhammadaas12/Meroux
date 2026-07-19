import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your quote assistant. I'll help you get a quick estimate. Let's start with a few questions.", sender: 'bot', options: ['Okay, let\'s go'] }
  ]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [textInput, setTextInput] = useState('');
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const addMessage = (text, sender, options = null) => {
    setMessages(prev => [...prev, { text, sender, options }]);
  };

  const handleOptionClick = (option) => {
    addMessage(option, 'user');
    setAnswers({ ...answers, [currentStep.field]: option });
    const nextStep = step + 1;
    if (nextStep < flow.length) {
      setStep(nextStep);
      addMessage(flow[nextStep].question, 'bot', flow[nextStep].options);
    } else {
      submitEstimate();
    }
  };

  const handleTextSubmit = () => {
    const value = textInput.trim();
    if (!value && !currentStep.optional) return;
    addMessage(value || '(skipped)', 'user');
    setAnswers({ ...answers, [currentStep.field]: value });
    setTextInput('');
    const nextStep = step + 1;
    if (nextStep < flow.length) {
      setStep(nextStep);
      addMessage(flow[nextStep].question, 'bot', flow[nextStep].options);
    } else {
      submitEstimate();
    }
  };

  const sendEmail = async (toEmail, subject, message) => {
    try {
      const res = await fetch("https://meroux-backend.onrender.com/send-chat-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: toEmail, subject, message }),
      });
      if (!res.ok) throw new Error("Email send failed");
      return true;
    } catch (err) {
      console.error("Email error:", err);
      return false;
    }
  };

  const submitEstimate = async () => {
    setLoading(true);
    setErrorMsg('');
    setPrice(null);

    const data = {
      projectType: answers.projectType || '',
      area: answers.area || '',
      propertyType: answers.propertyType || '',
      budget: answers.budget || '',
      timeline: answers.timeline || '',
      description: answers.description || '',
      name: answers.name || '',
      email: answers.email || '',
      phone: answers.phone || ''
    };

    try {
      const response = await fetch("https://meroux-backend.onrender.com/send-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Server error");

      const result = await response.json();
      if (result.reply) {
        setPrice(result.reply);

        const conversationSummary = `
          Chat Conversation Summary
          -------------------------
          Project Type: ${answers.projectType || 'Not specified'}
          Area: ${answers.area || 'Not specified'}
          Property Type: ${answers.propertyType || 'Not specified'}
          Budget: ${answers.budget || 'Not specified'}
          Timeline: ${answers.timeline || 'Not specified'}
          Description: ${answers.description || 'Not specified'}
          Name: ${answers.name || 'Not specified'}
          Email: ${answers.email || 'Not specified'}
          Phone: ${answers.phone || 'Not specified'}
          Estimate: £${Number(result.reply).toLocaleString()}
        `;

        let userEmailSent = false;
        if (answers.email) {
          userEmailSent = await sendEmail(
            answers.email,
            "Your Quote Confirmation",
            `Thank you for using our quote assistant!\n\n${conversationSummary}\n\nWe'll contact you shortly.`
          );
        }

        const businessEmailSent = await sendEmail(
          "mohdaas740@gmail.com",
          "New Quote Request from Chatbot",
          `A user has requested a quote:\n\n${conversationSummary}\n\nPlease follow up.`
        );

        if (userEmailSent && businessEmailSent) {
          addMessage(`Thank you! Your estimate is £${Number(result.reply).toLocaleString()}. A confirmation has been sent to ${answers.email}, and we've been notified. We'll contact you soon.`, 'bot');
        } else if (userEmailSent && !businessEmailSent) {
          addMessage(`Thank you! Your estimate is £${Number(result.reply).toLocaleString()}. A confirmation has been sent to ${answers.email}. (Business notification failed, but we'll still follow up.)`, 'bot');
        } else if (!userEmailSent && businessEmailSent) {
          addMessage(`Thank you! Your estimate is £${Number(result.reply).toLocaleString()}. We've been notified and will contact you. (No email was sent to you – please ensure you entered a valid address.)`, 'bot');
        } else {
          addMessage(`Thank you! Your estimate is £${Number(result.reply).toLocaleString()}. (Email sending failed – but we'll still follow up via phone if provided.)`, 'bot');
        }
      } else {
        setErrorMsg("No response from AI");
        addMessage("Sorry, we couldn't get an estimate right now. Please try again later.", 'bot');
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
      addMessage("There was an error submitting your request. Please try again or use our contact form.", 'bot');
    }

    setLoading(false);
    addMessage("Would you like to start over?", 'bot', ['Start over']);
    setStep(-1);
  };

  const handleFinalAction = (action) => {
    if (action === 'Start over') resetChat();
  };

  const resetChat = () => {
    setStep(0);
    setAnswers({});
    setMessages([
      { text: "Hi! I'm your quote assistant. I'll help you get a quick estimate. Let's start with a few questions.", sender: 'bot', options: ['Okay, let\'s go'] }
    ]);
    setPrice(null);
    setErrorMsg('');
    setLoading(false);
    setTextInput('');
  };

  const getInputPlaceholder = () => {
    if (currentStep.type === 'email') return 'Your email';
    if (currentStep.type === 'phone') return 'Phone (optional)';
    return `Your ${currentStep.field}`;
  };

  const flow = [
    {
      id: 'projectType',
      question: "What type of project are you planning?",
      type: 'options',
      options: ['New Build', 'Extension', 'Renovation', 'Repair', 'Remodel'],
      field: 'projectType'
    },
    {
      id: 'area',
      question: "Which main area is involved?",
      type: 'options',
      options: ['Kitchen', 'Bathroom', 'Living Room', 'Bedroom', 'Whole House', 'Other'],
      field: 'area'
    },
    {
      id: 'propertyType',
      question: "What type of property?",
      type: 'options',
      options: ['House', 'Flat', 'Bungalow', 'Commercial'],
      field: 'propertyType'
    },
    {
      id: 'budget',
      question: "What's your estimated budget range?",
      type: 'options',
      options: ['Under £10k', '£10k – £30k', '£30k – £60k', '£60k – £100k', 'Over £100k'],
      field: 'budget'
    },
    {
      id: 'timeline',
      question: "When would you like to start?",
      type: 'options',
      options: ['ASAP', 'Within 1 month', 'Within 3 months', 'Just planning'],
      field: 'timeline'
    },
    {
      id: 'description',
      question: "Please describe your project briefly (e.g., what needs to be done).",
      type: 'text',
      field: 'description'
    },
    {
      id: 'name',
      question: "What's your name?",
      type: 'text',
      field: 'name'
    },
    {
      id: 'email',
      question: "What's your email address?",
      type: 'email',
      field: 'email'
    },
    {
      id: 'phone',
      question: "And your phone number? (Optional)",
      type: 'phone',
      field: 'phone',
      optional: true
    }
  ];

  const currentStep = flow[step];
  const isTextStep = currentStep && (currentStep.type === 'text' || currentStep.type === 'email' || currentStep.type === 'phone');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-[#3A2F1B] p-4 rounded-full shadow-lg hover:opacity-90 transition-all z-50"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col border border-gray-200 max-h-[70vh] md:max-h-[60vh]"
          >
            <div className="bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-[#3A2F1B] p-4 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Quote Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-[#E6C76A] p-2 rounded-full" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx}>
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-[#3A2F1B] rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      <p className="text-sm whitespace-pre-line break-words">{msg.text}</p>
                    </div>
                  </div>
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (step === -1) handleFinalAction(opt);
                            else handleOptionClick(opt);
                          }}
                          className="bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-[#3A2F1B] text-xs px-3 py-2 rounded-full shadow hover:opacity-90 transition touch-manipulation"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {loading && <div className="text-center text-gray-500 text-sm">Submitting...</div>}
              {errorMsg && <div className="text-center text-red-500 text-sm">{errorMsg}</div>}
              {step >= 0 && step < flow.length && isTextStep && (
                <div className="mt-2 flex gap-2">
                  <input
                    type={currentStep.type === 'email' ? 'email' : currentStep.type === 'phone' ? 'tel' : 'text'}
                    placeholder={getInputPlaceholder()}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleTextSubmit(); }}
                    className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 min-w-0"
                    autoFocus
                  />
                  <button
                    onClick={handleTextSubmit}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 flex items-center justify-center touch-manipulation"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t bg-gray-50 text-xs text-center text-gray-500 flex-shrink-0">
              <button onClick={resetChat} className="text-teal-600 hover:underline touch-manipulation">
                Restart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;