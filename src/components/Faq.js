import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import {Accordion,Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function Faqs() {
  function ContextAwareToggle({ children, eventKey, callback }) {  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
    return (
      <p
        style={{ fontWeight:"500", textAlign:"left",cursor:"pointer" }}
        onClick={decoratedOnClick}
      >
        {children}
      </p>
    );
  }

  const faq = [
    {
      id: 0,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 1,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 2,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 3,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 4,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 5,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 6,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 7,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 8,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 9,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
  ];

  return (
    <div className="App">
        <h1 style={{textAlign:"center",margin:"3%"}}>Frequently Asked Questions</h1>
        <div style={{width:"100vw",textAlign:"center",display:"flex",justifyContent:"center"}}>
        <Accordion defaultActiveKey="0" style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70vw"}}>
{faq.map(f=>(
          <Card key={f.id} className="m-2 faqCard" style={{background:"white"}}>
          <Card.Header style={{background:"#7FC8A9",color:"white"}}>
            <ContextAwareToggle eventKey={`${f.id}`}>{f.q}</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${f.id}`}>
            <Card.Body style={{textAlign:"left"}}>{f.a}</Card.Body>
          </Accordion.Collapse>
        </Card>
))}
    </Accordion>
    </div>
    </div>
  );
}