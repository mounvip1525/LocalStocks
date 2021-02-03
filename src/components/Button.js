import styled from 'styled-components'

export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.2rem;
background:transparent;
border:0.1rem solid black;
color:black;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
// transition:all 0.5s ease-in-out;
&:hover{
    color:var(--purpleTwo);
    border:1px solid var(--purpleTwo);
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