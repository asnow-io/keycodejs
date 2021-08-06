# KeycodeJS

An enum of frequent keycodes.

## Install

```bash
npm install @asnow-io/keycodejs
```

## Usage

```js
import { Keycode, wasPressed } from '@asnow-io/keycodejs';

const textField = document.getElementById('#text-field');

function sendMessage() {
  // ...
}

textField.addEventListener('keydown', (e) => {
  if (wasPressed(e, Keycode.ENTER)) {
    e.preventDefault();
    sendMessage();
  }

  // `wasPressed(e, Keycode.ENTER)`
  // equals
  // `e.code === Keycode.ENTER`
})
```

## Typings

```typescript
enum Keycode {
  BACKSPACE = 'Backspace',
  TAB = 'Tab',
  ENTER = 'Enter',
  // and others
}

function wasPressed(e: KeyboardEvent, key: string | string[]): boolean;
```
