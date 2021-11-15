import styled from 'styled-components'

export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.2rem;
background:transparent;
border:0.1rem solid var(--purpleTwo);
border-color:${props=>props.cart ? "#fff" : "var(--purpleTwo)"};
color:${props=>props.cart ?  "var(--purpleOne)" : "#fff"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
// transition:all 0.5s ease-in-out;
&:hover{
    background:var(--purpleTwo);
    color:var(--purpleOne);
}
&:focus{
    outline:none;
}
`;
export const ButtonContainer2=styled.button`
text-transform:capitalize;
font-size:1.2rem;
background:transparent;
border:none;
color:var(--whiteOne);
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    color:white;
}
&:focus{
    outline:none;
}
a{
    text-decoration:none;
    color:var(--purpleTwo);
}
`;
export const ButtonContainer3=styled.button`
text-transform:capitalize;
font-size:1.2rem;
background:transparent;
border:1px solid #444941;
color:"var(--purpleOne)";
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
// transition:all 0.5s ease-in-out;
&:hover{
    background:"var(--whiteOne)";
}
`;
