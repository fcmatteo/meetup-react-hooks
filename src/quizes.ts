export interface Question {
  text: string;
  answer: number;
  answerOptions: string[];
  description?: string;
  value: Auth0Value;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

interface Auth0Value {
  label: string;
  icon: string;
}

type Values = 'giveAShit' | 'n+1' | 'oneTeam';

// Question 1:
// Another team is reaching out requesting your insight on a particular problem they are working on, What would be the Auth0 way of assisting?
// A). Laugh at them.
// B). Point and laugh at them.
// C). Contribute beyond your own area of responsibility when you can.
// D). Leave the room, pointing and laughing.
// Question 2:
// What should be valued higher?
// A). The team failing miserably at completing a task
// B). Achieving individual success at the expense of teammates
// C). Individual accomplishments
// D). Team Success outweighing Individual accomplishments, with both being celebrated.
// One team one score

export const auth0Values: Record<Values, Auth0Value> = {
  giveAShit: {
    label: 'We Give a Shit',
    icon:
      'https://api.media.atlassian.com/file/ec3a828e-5e91-4691-97cd-1dd4f8b386c3/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmVjM2E4MjhlLTVlOTEtNDY5MS05N2NkLTFkZDRmOGIzODZjMyI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM3MDQsIm5iZiI6MTU2OTk1MDM0NH0.jsREQVpQBrfIDJxoElbWq6kL6sHdYGytzKG43vgACck',
  },
  'n+1': {
    label: 'N + 1 > N',
    icon:
      'https://api.media.atlassian.com/file/79ef679d-10ef-4fcc-9483-604452926fae/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjc5ZWY2NzlkLTEwZWYtNGZjYy05NDgzLTYwNDQ1MjkyNmZhZSI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM3NTEsIm5iZiI6MTU2OTk1MDM5MX0.5v0xVYtqau6ZgFU4DJFlcOvnzhH3fwAar8Hhp-TAg30',
  },
  oneTeam: {
    label: 'One Team, One Score',
    icon:
      'https://api.media.atlassian.com/file/162ce290-fd06-4d08-85f5-961b5f9d0809/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjE2MmNlMjkwLWZkMDYtNGQwOC04NWY1LTk2MWI1ZjlkMDgwOSI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM4NDIsIm5iZiI6MTU2OTk1MDQ4Mn0.DEJqGtxpLYYoP5fecAvkrs2jRfdACWsrr9hvdNSabqo',
  },
};

export const auth0ValuesQuiz: Quiz = {
  questions: [
    {
      answer: 2,
      answerOptions: [
        'Laugh at them.',
        'Point and laugh at them.',
        'Contribute beyond your own area of responsibility when you can.',
        'Leave the room, pointing and laughing.',
      ],
      description:
        'Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.',
      text:
        'Another team is reaching out requesting your insight on a particular problem they are working on, What would be the Auth0 way of assisting?',
      value: auth0Values.oneTeam,
    },
  ],
  title: 'Auth0 Values',
};

export const allQuizes: Quiz[] = [auth0ValuesQuiz];
