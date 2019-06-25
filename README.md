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

Use to hook into a `window` event as an effect. For example, the following code tracks changes to the window size.

```javascript
import React, { useCallback, useState } from "react";
import { useWindowEvent } from "@culturehq/hooks";

const getDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const App = () => {
  const [{ width, height }, setDimensions] = useState(getDimensions);

  useWindowEvent(
    "resize",
    useCallback(() => setDimensions(getDimensions()), [setDimensions])
  );

  return (
    <main>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </main>
  );
};
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/CultureHQ/hooks.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
