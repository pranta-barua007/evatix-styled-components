import React, {useState} from "react";
import styled from "styled-components";

import { Button } from "./Button.styled";

const PaginationWrapper = styled.div``;

export const Pagination = ({pages}) => {
    const [current, setCurrent] = useState(pages[0]);
    const first = pages[0]; 
    const last = pages[pages.length-1];
  return (
    <PaginationWrapper pages>
      <Button 
       appearance={`${current === first ? 'disabled' : 'warning'}`} 
       textColor='primary' 
       disabled={current === first} 
       onClick={() => {
           setCurrent(current - 1);        
           console.log('left click');   
       }}>&#5176;</Button>
            {pages.map(data => (
                <Button 
                    key={data}
                    appearance={`${current === data ? 'secondary' : 'primary'}`}
                    textColor={`${current === data ? 'primary' : 'secondary' }`}
                >{data}</Button>
            ))}
      <Button 
        appearance={`${current === last ? 'disabled' : 'warning'}`} 
        textColor='primary' 
        disabled={current === last}
        onClick={() => {
            setCurrent(current+1);
            console.log('right click');     
        }}
      >&#5171;</Button>
    </PaginationWrapper>
  );
};
