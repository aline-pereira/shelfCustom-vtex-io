// declare module '*.graphql' {
//   import { DocumentNode } from 'graphql'

//   const value: DocumentNode
//   export default value
// }

declare module '*.gql' {
  import type { DocumentNode } from 'graphql'

  const Schema: DocumentNode

  export default Schema
}

declare module '*.graphql' {
  import type { DocumentNode } from 'graphql'

  const schema: DocumentNode

  export default Schema
}
