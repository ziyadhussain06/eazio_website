import React, { useState } from 'react';

const FAQitems = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleFaqClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="faq-container">
      {data.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button onClick={() => handleFaqClick(index)} className="faq-question">
            {faq.title} <span className='faqicon'>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.content }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQitems;