export default {
  name: 'productType',
  title: 'Product Type',
  type: 'document',
  fields: [
    {
      title: 'Title - EN',
      name: 'title_en',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title - ID',
      name: 'title_id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title_en',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
          }
        }),
    },
    {
      title: 'Background',
      name: 'background',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Decor Component - EN',
      name: 'decor_en',
      type: 'object',
      fields: [
        {
          title: 'Decor 1',
          name: 'decor1',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Decor 2',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Decor Component - ID',
      name: 'decor_id',
      type: 'object',
      fields: [
        {
          title: 'Decor 1',
          name: 'decor1',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'decor2',
          title: 'Decor 2',
          type: 'reference',
          to: [{ type: 'decorList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Description - EN',
      name: 'description_en',
      type: 'text',
    },
    {
      title: 'Description - ID',
      name: 'description_id',
      type: 'text',
    },
    {
      title: 'Image 1',
      name: 'image1',
      type: 'image',
    },
    {
      title: 'Image 2',
      name: 'image2',
      type: 'image',
    },
    {
      title: 'Image 3',
      name: 'image3',
      type: 'image',
    },
    {
      name: 'animation',
      title: 'Animation',
      type: 'string',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
        ],
        layout: 'radio',
      },
      initialValue: '1',
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
