// import '../App.css'
// import Faq from "react-faq-component";
// import { useState } from 'react';
// // import { Container, Row } from 'react-bootstrap';
// function Faqs() {
//     const [selected, setSelected]=useState(null)
//     const toggle = (i) => {
//       if(selected === i){
//         return setSelected(null)
//       }
//       setSelected(i)
//     }
//     return (
  
  
  
//       <div className='wrapper'>
//       <div className='accordion'>
//       {data.map((item, i) => (
//         <div className='item'>
//           <div className='title' onClick={() => toggle(i)}>
//             <span>{item.question}</span>
//             <span>{selected === i ? '-' :'+'}</span>
//           </div>
//           <div className={selected === i ? 'content show' :'content'}>{item.answer}</div>
//         </div>
//         ))}
//       </div>
//       </div>
  
//     )
//   }
  
//   const data =
//    [  
//         {
//             question: "What are the benefits of a cloud-based solution?",
//             answer: "Security & Uptime: Eazio works with top-tier platform providers who follow stringent security rules and agree to a Service Level Agreement that assures 99.99% uptime 24/7!<br/><br/> Backup & Recovery: compared to internal IT infrastructures, Eazio's cloud infrastructure is far more dependable and constant. Your company can gain from a sizable pool of redundant IT resources and a speedy failover mechanism. If a server fails, hosted applications and services can simply be switched to any of the other servers that are still available.<br/><br/> More Frequent Updates: a cloud infrastructure enables us to add new features and improve existing ones whilst causing the least amount of disruption to your regular business activities.<br/><br/> Yes, both the online and mobile versions are available from any location with an Internet connection. <br/><br/>",
//         },
//         {
//           question: "Does Eazio have a mobile application?,",
//           answer: `Coming soon!`,
//       },
//       {
//         question: "Can Eazio be integrated with other systems?",
//         answer: `Yes, of course! You can integrate Eazio natively with virtually any cloud service. `,
//     },
    
  
//     ]
//     return (
        
//                     <div className='pt-lg-5 me-3'>
//                         <Faq
//                             data={data}
//                             config={config}
//                         />
//                     </div>
                
//     )
// }
// const data = {
//     rows: [
//         {
//             title: "What are the benefits of a cloud-based solution?",
//             content: `Security & Uptime: Eazio works with top-tier platform providers who follow stringent security rules and agree to a Service Level Agreement that assures 99.99% uptime 24/7!<br/><br/>
//             Backup & Recovery: compared to internal IT infrastructures, Eazio's cloud infrastructure is far more dependable and constant. Your company can gain from a sizable pool of redundant IT resources and a speedy failover mechanism. If a server fails, hosted applications and services can simply be switched to any of the other servers that are still available.<br/><br/>
//             More Frequent Updates: a cloud infrastructure enables us to add new features and improve existing ones whilst causing the least amount of disruption to your regular business activities.<br/><br/>
//             Yes, both the online and mobile versions are available from any location with an Internet connection.
//             <br/><br/>`,
//         },
//         {
//             title: "How does a cloud-based solution benefit you? ",
//             content: `With Eazio, you get the highest security and uptime standards, backed by a 99.99% Service Level Agreement.<br/><br/>
//             Eazio's cloud infrastructure is more reliable and constant than internal IT infrastructures. You can benefit from a large pool of redundant IT resources. Hosted applications and services can be switched to other servers if a server fails. So don't worry about your IT infrastructure crashing; it's like an angel watching over you! Our cloud infrastructure allows us to add and improve existing features more frequently without disrupting your business operations. Mobile and online versions are accessible anywhere with an Internet connection.
//             <br/><br/>`,
//         },
//         {
//             title: "Does Eazio comply with all UAE payroll and labour laws?",
//             content: `Of course! Eazio complies with all UAE payroll and labour laws.  <br/><br/>`,
//         },
//     ],
// };
// const config = {
//     animate: true,
//     arrowIcon: "V",
//     openOnload: false,
//     expandIcon: "+",
//     collapseIcon: "-",
//      // tabFocus: true
// };

import React from 'react';
import FAQitem from './FAQitems';

const Faq = () => {
  const faqData = [
    {
        title: "What are the benefits of a cloud-based solution?",
        content: `Security & Uptime: Eazio works with top-tier platform providers who follow stringent security rules and agree to a Service Level Agreement that assures 99.99% uptime 24/7!<br/>
        Backup & Recovery: compared to internal IT infrastructures, Eazio's cloud infrastructure is far more dependable and constant. Your company can gain from a sizable pool of redundant IT resources and a speedy failover mechanism. If a server fails, hosted applications and services can simply be switched to any of the other servers that are still available.<br/>
        More Frequent Updates: a cloud infrastructure enables us to add new features and improve existing ones whilst causing the least amount of disruption to your regular business activities.<br/>
        Yes, both the online and mobile versions are available from any location with an Internet connection.
        <br/>`,
    },
    {
        title: "How does a cloud-based solution benefit you? ",
        content: `With Eazio, you get the highest security and uptime standards, backed by a 99.99% Service Level Agreement.<br/>
        Eazio's cloud infrastructure is more reliable and constant than internal IT infrastructures. You can benefit from a large pool of redundant IT resources. Hosted applications and services can be switched to other servers if a server fails. So don't worry about your IT infrastructure crashing; it's like an angel watching over you! Our cloud infrastructure allows us to add and improve existing features more frequently without disrupting your business operations. Mobile and online versions are accessible anywhere with an Internet connection.
        <br/>`,
    },
    {
        title: "Does Eazio comply with all UAE payroll and labour laws?",
        content: `Of course! Eazio complies with all UAE payroll and labour laws.  <br/>`,
    },
];

  return (
    <div className="App">
      <FAQitem data={faqData} />
    </div>
  );
};
export default Faq;