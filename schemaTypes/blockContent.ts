import {defineType} from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Rich text',
  type: 'array',
  of: [{type: 'block'}, {type: 'factBox'} /*custom object*/],
})
