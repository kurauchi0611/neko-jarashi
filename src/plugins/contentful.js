import {
  contentfulConfig
} from "../lib/config"

const client = require('contentful').createClient(contentfulConfig)

const entriesPosts = () => client.getEntries().then(response => response.items)

// const getSinglePost = slug =>
//   client
//   .getEntries({
//     'fields.slug': slug,
//     content_type: 'blogPost'
//   })
//   .then(response => response.items)

export {
  entriesPosts,
}
