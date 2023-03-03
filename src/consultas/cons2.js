import { API,graphqlOperation } from '@aws-amplify/api'
import { Component } from 'react';
//import config from '../../aws-exports' //import { API, graphqlOperation } from 'aws-amplify';
// ID d3j7t1oroqmyl6
class Cons2 extends Component{
  

      
  }

  async function graphql1() {
    try {
      const result = await API.graphql(graphqlOperation(`
        query MyQuery {
          getTeste(id: "2917178f-2cd3-46c2-9c8a-096f036ed219") {
            celular
          }
        }

      `));
      //console.log('Posts', result.data.listPosts.items);
      console.log('Posts', result.data);
    } catch (error) {
      console.log('Error listing posts', error);
    }
  }

graphql1()

