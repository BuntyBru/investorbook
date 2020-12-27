import React from 'react';
import Tabs from './Tabs/Tabs';
import Investor from './Investors';
import Company from './Company';

const FirstPage = () => {


    return  <div>

    <Tabs> 
    <div label="Investors"> 
    <Investor type='investor'/>
    </div> 
    <div label="Companies"> 
    <Company type='companies'/>
    </div> 
   
  </Tabs>
    </div>
 
}


export default FirstPage;