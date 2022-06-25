import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0u74t1boh01xnczvt8xtj/master',
    cache: new InMemoryCache()
});