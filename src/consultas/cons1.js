// top of file
import { API } from '@aws-amplify/api'
import config from './aws-exports'
import { listSomething } from './graphql/queries'

// after your imports
API.configure(config)

// later down in your code
async function list() {
   const response = await API.graphql({
      query: listSomething,
      variables: {
      // <your variables, optional>
      },
   })
console.log(response)
}
list()