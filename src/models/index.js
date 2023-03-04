// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teste, Diplomas } = initSchema(schema);

export {
  Teste,
  Diplomas
};