// import '../App.css'
// import Faq from "react-faq-component";
// //import { Container, Row } from 'react-bootstrap';
// function Faqright() {
//     return (
        
//                     <div className='pt-lg-5  '>
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
//             title: "Is it possible to test Eazio before deciding whether to use it?",
//             content: `Absolutely! Once you've signed up, a team member will contact you to set up your account.<br/><br/>`,
//         },
//         {
//             title: "Does Eazio have a mobile application?",
//             content: "Coming soon!<br/><br/>",
//         },
//         {
//             title: "Can Eazio be integrated with other systems?",
//             content: `Yes, of course! You can integrate Eazio natively with virtually any cloud service. <br/><br/>`,
//         },

//     ],
// };
// const config = {
//     animate: true,
//     arrowIcon: "V",
//     openOnload: false,
//     expandIcon: "+",
//     collapseIcon: "-",
// };
// export default Faqright;
import React from 'react';
import FAQitem from './FAQitems';

const Faqright = () => {
  const faqData = [
    {
      title: "Is it possible to test Eazio before deciding whether to use it?",
      content: `Absolutely! Once you've signed up, a team member will contact you to set up your account.<br/>`,
    },
    {
      title: "Does Eazio have a mobile application?",
      content: "Coming soon!<br/>",
    },
    {
      title: "Can Eazio be integrated with other systems?",
      content: `Yes, of course! You can integrate Eazio natively with virtually any cloud service. <br/>`,
    },
    // Add more FAQ items here
  ];

  return (
    <div className="App">
      <FAQitem data={faqData} />
    </div>
  );
};
export default Faqright;
