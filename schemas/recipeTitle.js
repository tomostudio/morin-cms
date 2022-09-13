export default {
  name: 'recipeTitle',
  title: 'Category Data',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title - EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title_id',
      title: 'Title - ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Data',
      name: 'data',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'recipeData' },
        },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title_en',
    },
  },
}