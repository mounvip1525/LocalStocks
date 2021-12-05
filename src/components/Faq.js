import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import {Accordion,Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function Faqs() {
  const mTop = {
    margin: "4% 0% 2%",
  };
  function ContextAwareToggle({ children, eventKey, callback }) {
    // const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    // const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <p
        // type="button"
        style={{ color:'#3AD4AF',fontWeight:"500", textAlign:"left",cursor:"pointer" }}
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
      <Jumbotron className="container-fluid">
        <h1 style={mTop}>Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
{faq.map(f=>(
          <Card key={f.id} className="m-2 faqCard">
          <Card.Header>
            <ContextAwareToggle eventKey={`${f.id}`}>{f.q}</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${f.id}`}>
            <Card.Body style={{textAlign:"left"}}>{f.a}</Card.Body>
          </Accordion.Collapse>
        </Card>
))}
    </Accordion>

      </Jumbotron>
    </div>
  );
}