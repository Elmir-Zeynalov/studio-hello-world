import {defineType, defineField} from 'sanity'

export const plantType = defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'fact',
      title: 'Plant Facts',
      type: 'blockContent',
    }),

    defineField({
      name: 'careGuide',
      title: 'Care Guide',
      type: 'reference',
      to: [{type: 'plantCareGuide'}],
    }),
  ],
})
