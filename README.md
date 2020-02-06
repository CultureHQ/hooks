# @culturehq/hooks

[![Build Status](https://github.com/CultureHQ/hooks/workflows/Main/badge.svg)](https://github.com/CultureHQ/hooks/actions)
[![Package Version](https://img.shields.io/npm/v/@culturehq/hooks.svg)](https://www.npmjs.com/package/@culturehq/hooks)

A set of reusable hooks extracted from the [CultureHQ](https://www.culturehq.com) application.

## Getting started

Install this package through `npm` (`npm install @culturehq/hooks --save`) or `yarn` (`yarn add @culturehq/hooks`). You can then import and use the hooks from within your app.

### `useClickOutside`

Use to hook into when a click event occurs outside of a container. For example, the following code tracks when a user clicks outside of a box to close it.

```javascript
import React, { useCallback, useState } from "react";
import { useClickOutside } from "@culturehq/hooks";

const Box = ({ onClose }) => {
  const containerRef = useClickOutside(onClose);

  return <div ref={containerRef}>...</div>;
};

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <button type="button" onClick={onOpen}>Open</button>
      {open && <Box onClose={onClose} />}
    </>
  );
};
```

### `useDocumentEvent`

Use to hook into a `document` event as an effect. For example, the following code tracks when a use hits the spacebar to tell if something should be paused or not.

```javascript
import React, { useCallback, useState } from "react";
import { useDocumentEvent } from "@culturehq/hooks";

const App = () => {
  const [paused, setPaused] = useState(false);

  useDocumentEvent(
    "keydown",
    useCallback(
      event => {
        if (event.key === " ") {
          setPaused(value => !value);
        }
      },
      [setPaused]
    )
  );

  return <p>{paused ? "Paused" : "Playing"}</p>;
};
```

### `useEnterPress`

Use to hook into when the user pressed the enter key, for basic confirmations that do not have focus on a button for whatever reason.

```javascript
import React, { useCallback, useState } from "react";
import { useEnterPress } from "@culturehq/hooks";

const App = () => {
  const [pressed, setPressed] = useState(false);

  useEnterPress(useCallback(() => setPressed(true), []));

  return pressed ? "Thank you." : "Press the enter key to continue.";
};
```

### `useLazyImport`

Use to code split a large module and only import it once a component has mounted. Can be used for example for a component or a utility module that isn't required on first paint.

```javascript
import React from "react";
import { useLazyImport } from "@culturehq/hooks";

import Spinner from "./Spinner";

const App = () => {
  const HeavyComponent = useLazyImport(() => import("./HeavyComponent"));

  return HeavyComponent ? <HeavyComponent /> : <Spinner />;
};
```

### `useWindowEvent`

Use to hook into a `window` event as an effect. For example, the following code tracks changes to the window width.

```javascript
import React, { useCallback, useState } from "react";
import { useWindowEvent } from "@culturehq/hooks";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useWindowEvent(
    "resize",
    useCallback(() => setWidth(window.innerWidth), [setWidth])
  );

  return <p>{width}</p>;
};
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/CultureHQ/hooks.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
