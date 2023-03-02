// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teste } = initSchema(schema);

export {
  Teste
};