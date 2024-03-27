import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
const Component = () => {
  const items = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "orange" },
  ];
  const items1 = [
    { id: 1, name: "anitha" },
    { id: 2, name: "anusha" },
    { id: 3, name: "ashiwini" },
  ];
  const items2 = [
    { id: 1, name: "Carrot" },
    { id: 2, name: "Onion" },
    { id: 3, name: "Beetroot" },
  ];
  return (
    <div>
      <TabView>
        <TabPanel header="Header I">
          <p className="m-3">
            <ul>
              {items.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </p>
        </TabPanel>
        <TabPanel header="Header II">
          <p className="m-3">
            <ul>
              {items1.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </p>
        </TabPanel>
        <TabPanel header="Header III">
          <p className="m-3">
            <ul>
              {items2.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Component;
