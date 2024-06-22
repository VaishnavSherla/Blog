import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,
  flask,
  express,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  Stack.go,
  Stack.python,
  Stack.javascript,
  Stack.react,
  Stack.node,
  Stack.django,
  Stack.flask,
  Stack.postgres,
  Stack.mongo,
  Stack.kafka,
  Stack.graphql,
  Stack.redis,
  Stack.express,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.express]: {
    value: 'Express JS',
    color: Colors.express,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.flask]: {
    value: 'Flask',
    color: Colors.flask,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
};
