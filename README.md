[![NPM](https://nodei.co/npm/@naumandev/react-contextmenu.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@naumandev/react-contextmenu/)

# React Contextmenu for react 18
Forked from vkbansal.github.io/react-contextmenu/
ContextMenu in React with accessibility support. Live Examples can be found [here](//vkbansal.github.io/react-contextmenu/)
updated version for react 18

## Table of contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [API](#api)
 - [FAQs](#faqs)

## Installation

Using npm

```
npm install --save react-contextmenu
```

Using yarn

```
yarn add react-contextmenu
```

## Usage

Simple example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

function handleClick(e, data) {
  console.log(data.foo);
}

function MyApp() {
  return (
    <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

      <ContextMenuTrigger id="same_unique_identifier">
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier">
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>

    </div>
  );
}

ReactDOM.render(<MyApp myProp={12}/>, document.getElementById("main"));
```

see [usage docs](./docs/usage.md) / [examples](./examples) for more details.

## API

[API docs](./docs/api.md)

## FAQs

[ALL FAQs](./docs/faq.md)

