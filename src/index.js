import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './graphql/schema'
import {context} from './context'
import {PostsAPI} from './graphql/post/datasources'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postsAPI: new PostsAPI()
    }
  }
})

server.listen(4003).then(({ url }) => console.log(`server listening on ${url}`))
