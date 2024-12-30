import React from 'react';
import Contact from "./InnerComponent/HelpDesk/contact";
import FAQ from "./InnerComponent/HelpDesk/faq";
import GovtInternship from "./InnerComponent/HelpDesk/govtinternship";
import Internship from "./InnerComponent/HelpDesk/internship";
import HelpDeskComp from './InnerComponent/HelpDesk/HelpDeskComp';
import ImportantLinksSection from './InnerComponent/HelpDesk/ImportantLinksSection';
import { importantLinks } from './InnerComponent/HelpDesk/data';
// import LatestOpportunity from './InnerComponent/HelpDesk/LatestOpportunity';

const HelpDesk = () => (
  <div className='mt-[100px]'>
    <HelpDeskComp/>
    <br />
    {/* <LatestOpportunity/> */}
    <ImportantLinksSection importantLinks={importantLinks}/>
    <br />
    <Internship />
    <br />
    <Contact />
    <br />
    <GovtInternship />
    <br />
    <FAQ />
  </div>
);

export default HelpDesk;
