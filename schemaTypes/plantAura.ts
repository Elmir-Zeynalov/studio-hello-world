// plantPersonality.ts
import {defineType, defineField} from 'sanity'

export const plantAuraType = defineType({
  name: 'plantAura',
  title: 'Plant Aura',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'summary',
      title: 'What this plant says about you',
      type: 'text',
    }),
    defineField({
      name: 'traits',
      title: 'Personality traits',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
