# Hooks Cheatsheat (as of 11/28/2018)

## [Offical API Reference](https://reactjs.org/docs/hooks-reference.html)

## Table of Contents  
* [useState](#useState)
* [useEffect](#useEffect)
* [useContext](#useContext)
* [useReducer](#useReducer)
* [useCallback](#useCallback)
* [useMemo](#useMemo)
* [useRef](#useRef)
* [useImperativeMethods](#useImperativeMethods)
* [useMutationEffect](#useMutationEffect)
* [useLayoutEffect](#useLayoutEffect)

### `useState`

```
function useState<S>(initialState: S | (() => S)): [S, S | ((prevState: S) => S)]
```

<details>
<summary>Example</summary>

```tsx
import React, { useState } from 'react';

interface CountProps {
  initialCount: number;
}

const Counter: React.SFC<CountProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
```

</details>

### `useEffect`

```
function useEffect(effect: () => (void | (() => void)), inputs?: ReadonlyArray<any>): void;
```

<details>
<summary>Example</summary>

```tsx
import React, { useEffect } from 'react';

interface MediaProps {
  query: string;
  onChange(matches: boolean): void;
}

const Media: React.SFC<MediaProps> = ({ query, onChange }) => {
  useEffect(
    () => {
      const mql = window.matchMedia(mediaQuery);
      const listener = (e: MediaQueryListEvent) => {
        onChange(e.matches);
      };
      mql.addListener(listener);
      return () => mql.removeListener(listener);
    },
    [mediaQuery, onChange]
  );

  return null;
}
```

</details>

### `useContext`

```
function useContext<T>(context: React.Context<T>): T;
```

<details>
<summary>Example</summary>

```tsx
import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

const LoginStatus: React.SFC = () => {
  const isLoggedIn = useContext(AuthContext);
  return <span>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</span>
}

const App: React.SFC = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogin = useCallback(() => {
    setLogin(true);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <LoginStatus />
        {children}
      </div>
    </AuthContext.Provider>
  );
}

```

</details>

### `useReducer`

```
function useReducer<S, A>(
  reducer: (prevState: S, action: A) => S, 
  initialState: S, 
  initialAction?: A | null
): [S, (value: A) => void];
```

<details>
<summary>Example</summary>

```tsx
import React, { useReducer } from 'react';

interface State {
  count: number;
}

interface Action {
  type: 'reset' | 'increment' | 'decrement';
}

const initialState: State = {
  count: 0
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

interface CounterProps {
  initialCount: number;
}

const Counter: React.SFC<CounterProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer<State, Action>(reducer, {
    count: initialCount,
  });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

```

</details>


### `useCallback`

```
function useCallback<T extends (...args: any[]) => any>(callback: T, inputs: ReadonlyArray<any>): T;
```

<details>
<summary>Example</summary>

```tsx
import React, { useCallback } from 'react';

interface CounterProps {
  currentValue: number;
  onChange(newValue: number):
}

const Counter: React.SFC<CounterProps> = ({ currentValue, onChange }) => {
  const handleIncrement = useCallback(
    () => onChange(currentValue + 1),
    [currentValue, onChange]
  );

  const handleDecrement = useCallback(
    () => onChange(currentValue - 1),
    [currentValue, onChange]
  );

  return (
    <>
      Count: {state.count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

```

</details>

### `useMemo`

```
function useMemo<T>(factory: () => T, inputs: inputs: ReadonlyArray<any>): T;
```

<details>
<summary>Example</summary>

```tsx
import React, { useMemo } from 'react';

interface User {
  id: string;
  name: string;
}

interface UserListProps {
  users: User[];
  search: string;
}

const UserList: React.SFC<UserListProps> = ({ users, search }) => {
  const filteredUsers = useMemo(
    () => users.filter(({ name }) => name.includes(search)),
    [users, search]
  );

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

```

</details>

### `useRef`

```
function useRef<T>(initialValue: T): { current: T; };
```

<details>
<summary>Example</summary>

```tsx
import React, { useRef } from 'react';

const TextInputWithFocusButton: React.SFC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

```

</details>

### `useImperativeMethods`

```
function useImperativeMethods<T, R extends T>(
  ref: Ref<T> | undefined, 
  init: () => R, 
  inputs?: ReadonlyArray<any>
): void;
```

<details>
<summary>Example</summary>

```tsx
import React, { useRef, useImperativeMethods } from 'react';

const FancyInput = React.forwardRef((_, ref) => {
  const inputRef = useRef();
  useImperativeMethods(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
});

const Form: React.SFC = () => {
  const fancyInputRef = useRef(null);
  useEffect(
    () => {
      fancyInputRef.current.focus();
    }
  );
  return <FancyInput ref={fancyInputRef} />;
}
```

</details>

### `useMutationEffect`

```
function useMutationEffect(effect: () => (void | (() => void)), inputs?: ReadonlyArray<any>): void;
```

### `useLayoutEffect`

```
function useLayoutEffect(effect: () => (void | (() => void)), inputs?: ReadonlyArray<any>): void;
```
