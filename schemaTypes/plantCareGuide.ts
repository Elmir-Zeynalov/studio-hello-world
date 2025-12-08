import {defineType, defineField} from 'sanity'

export const plantCareGuideType = defineType({
  name: 'plantCareGuide',
  title: 'Plant Care Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'wateringInstructions',
      title: 'Watering Instructions',
      type: 'text',
    }),
    defineField({
      name: 'lightRequirements',
      title: 'Light Requirements',
      type: 'string',
      options: {
        list: ['low', 'medium', 'high'],
      },
    }),
    defineField({
      name: 'soilType',
      title: 'Soil Type',
      type: 'string',
    }),
    defineField({
      name: 'fertilizer',
      title: 'Fertilizer',
      type: 'string',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: ['easy', 'medium', 'hard'],
      },
    }),
  ],
})
