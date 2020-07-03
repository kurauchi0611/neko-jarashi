import { contentfulConfig } from "../lib/config"

export const client = require('contentful').createClient(contentfulConfig)
