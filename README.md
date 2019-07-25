# @culturehq/hooks

[![Package Version](https://img.shields.io/npm/v/@culturehq/hooks.svg)](https://www.npmjs.com/package/@culturehq/hooks)

A set of reusable hooks extracted from the [CultureHQ](https://www.culturehq.com) application.

## Getting started

Install this package through `npm` (`npm install @culturehq/hooks --save`) or `yarn` (`yarn add @culturehq/hooks`). You can then import and use the hooks from within your app.

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
