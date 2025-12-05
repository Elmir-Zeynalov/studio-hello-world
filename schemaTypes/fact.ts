import {defineType, defineField} from 'sanity'

export const factBox = defineType({
  name: 'factBox',
  title: 'Fact box',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
