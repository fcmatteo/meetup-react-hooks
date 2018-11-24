export interface Question {
  text: string;
  answer: number;
  answerOptions: string[];
  description?: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export const reactHooks: Quiz = {
  questions: [
    {
      answer: 1,
      answerOptions: ['v16.6.0', 'v16.7.0', 'v17.0.0'],
      description:
        'Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.',
      text: 'What version of React are hooks available?',
    },
    {
      answer: 0,
      answerOptions: ['Function', 'Class', 'Both'],
      description:
        'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. (We don’t recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you’d like.)',
      text: 'What type of component(s) can hooks be used in?',
    },
    {
      answer: 1,
      answerOptions: ['withState', 'useState', 'createState'],
      description:
        'useState is used inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. ',
      text: 'What hook would you use to replace this.state and this.setState?',
    },
    {
      answer: 2,
      answerOptions: [
        'Classes will be deprecated in v17',
        'Classes will be moved to a new package react-class',
        'Nothing. Classes will stay',
      ],
      description:
        'We intend for Hooks to cover all existing use cases for classes, but we will keep supporting class components for the foreseeable future. At Facebook, we have tens of thousands of components written as classes, and we have absolutely no plans to rewrite them. Instead, we are starting to use Hooks in the new code side by side with classes.',
      text: 'What will happen to class components after hooks are stable?',
    },
    {
      answer: 2,
      answerOptions: ['useImperativeMethods', 'useMemo', 'useObservable'],
      description:
        'React currently includes the following hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo ,useRef, useImperativeMethods, useMutationEffect, and useLayoutEffect.',
      text: 'Which one of these hooks does React not offer?',
    },
    {
      answer: 0,
      answerOptions: [
        'shouldComponentUpdate',
        'componentDidMount',
        'componentWillUnmount',
      ],
      description:
        'The useEffect Hook can express all combinations of componentDidMount, componentDidUpdate, and componentWillUnmount (including less common cases). To express shouldComponentUpdate React.memo can be used.',
      text: 'What lifecycle method can NOT be expressed with a useEffect hook?',
    },
    {
      answer: 1,
      answerOptions: ['useMutationEffect', 'useEffect', 'useLayoutEffect'],
      description:
        'Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event. Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.',
      text: 'Which hook fires asynchronously after layout and paint?',
    },
  ],
  title: 'React Hooks',
};

export const webAccessibility: Quiz = {
  questions: [],
  title: 'Web Accessibility',
};

export const allQuizes = [reactHooks, webAccessibility];
