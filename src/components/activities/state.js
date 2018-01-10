import moment from 'moment';
import uuid from 'uuid';

export default [
  {
    id: uuid(),
    kind: 'DRINK',
    color: '#D6D1B1',
    description: 'water',
    loggedAt: moment().subtract(5, 'hours').format('LT'),
  },
  {
    id: uuid(),
    kind: 'DRINK',
    color: '#D6D1B1',
    description: 'coffee',
    loggedAt: moment().subtract(4, 'hours').format('LT'),
  },
  {
    id: uuid(),
    kind: 'EAT',
    color: '#F0B67F',
    description: 'porkbelly pizza',
    loggedAt: moment().subtract(3, 'hours').format('LT'),
  },
  {
    id: uuid(),
    kind: 'DRINK',
    color: '#D6D1B1',
    description: 'coffee',
    loggedAt: moment().subtract(3, 'hours').format('LT'),
  },
  {
    id: uuid(),
    kind: 'WORKOUT',
    color: '#C7EFCF',
    description: 'hiit',
    loggedAt: moment().subtract(2, 'hours').format('LT'),
  },
  {
    id: uuid(),
    kind: 'READ',
    color: '#261C15',
    description: 'medium radar frontend https://medium.com/@milfont/radar-front-end-2018-51a185f4eb41',
    loggedAt: moment().subtract(1, 'hours').format('LT'),
  },
];