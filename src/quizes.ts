import oneTeamIcon from './images/value_collaboration_XL.png';
import nPlusOneIcon from './images/value_learn_XL.png';
import giveAShitIcon from './images/value_passionate_XL.png';

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

type Values = 'giveAShit' | 'nPlus1' | 'oneTeam';

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

// Question 3:
// An engineer is discussing improving the process for an implementation he is working on and decides to raise this with his coworkers, what is the most effective way to work through this?
// A). Announce to teammates that they will take care of absolutely everything and not to worry.
// B). Constructively approach questioning the status quo, working collaboratively with teammates to gain insights and document and seek approval for any improvements along the way
// C). Yell aggressively about all the issues with the process, shaking a fist in the air and taking care not to ever attempt to think of potential solutions to the problem at hand
// D). Throw your hands in the air, scream your lungs out and curl up in a ball on the floor crying.

// Its your first day, you are logging into confluence for the first time and you incorrectly setup your personal space, what should your approach be to resolve your issue?
// A). Reach out to your teammates and ask if they are able to assist you. If you’re not making mistakes you are not making progress, N + 1 > N.
// B). Move your personal space to the front page of Confluence for everyone to see
// C). Throw your computer out the window, curl up in a ball on the floor and start crying.
// D). Uninstall Confluence from the internet.

export const auth0Values: Record<Values, Auth0Value> = {
  giveAShit: {
    label: 'We Give a Shit',
    icon: giveAShitIcon,
  },
  nPlus1: {
    label: 'N + 1 > N',
    icon: nPlusOneIcon,
  },
  oneTeam: {
    label: 'One Team, One Score',
    icon: oneTeamIcon,
  },
};

export const auth0ValuesQuiz: Quiz = {
  title: 'Auth0 Values',
  questions: [
    {
      answer: 2,
      answerOptions: [
        'Laugh at them.',
        'Point and laugh at them.',
        'Contribute beyond your own area of responsibility when you can.',
        'Leave the room, pointing and laughing.',
      ],
      text:
        'Another team is reaching out requesting your insight on a particular problem they are working on, What would be the Auth0 way of assisting?',
      value: auth0Values.oneTeam,
    },
    {
      answer: 1,
      answerOptions: [
        'Announce to teammates that they will take care of absolutely everything and not to worry.',
        'Constructively approach questioning the status quo, working collaboratively with teammates to gain insights and document and seek approval for any improvements along the way.',
        'Yell aggressively about all the issues with the process, shaking a fist in the air and taking care not to ever attempt to think of potential solutions to the problem at hand',
        'Throw your hands in the air, scream your lungs out and curl up in a ball on the floor crying.',
      ],
      text:
        'An engineer is discussing improving the process for an implementation he is working on and decides to raise this with his coworkers, what is the most effective way to work through this?',
      value: auth0Values.nPlus1,
    },
    {
      answer: 3,
      answerOptions: [
        'The team failing miserably at completing a task',
        'Achieving individual success at the expense of teammates',
        'Individual accomplishments',
        'Team Success outweighing Individual accomplishments, with both being celebrated.',
      ],
      text: 'What should be valued higher?',
      value: auth0Values.oneTeam,
    },
    {
      answer: 0,
      answerOptions: [
        'Reach out to your teammates and ask if they are able to assist you. If you’re not making mistakes you are not making progress, N + 1 > N.',
        'Move your personal space to the front page of Confluence for everyone to see',
        'Throw your computer out the window, curl up in a ball on the floor and start crying.',
        'Uninstall Confluence from the internet.',
      ],
      text:
        'Its your first day, you are logging into confluence for the first time and you incorrectly setup your personal space, what should your approach be to resolve your issue?',
      value: auth0Values.nPlus1,
    },
  ],
};

export const allQuizes: Quiz[] = [auth0ValuesQuiz];
