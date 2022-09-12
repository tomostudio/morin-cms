import client from 'part:@sanity/base/client'

export default {
  name: 'recipeList',
  title: 'Recipe List',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Recipe Title - EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title_id',
      title: 'Recipe Title - ID',
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
      title: 'SEO - EN',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_en',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description:
            'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe this article (separated by commas)',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description:
            '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
      ],
    },
    {
      title: 'SEO - ID',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo_id',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description:
            'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe this article (separated by commas)',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description:
            '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
      ],
    },
    {
      name: 'recipeCategory',
      title: 'Recipe Category',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          validation: (Rule) =>
            Rule.custom(async (value, ctx) => {
              if (ctx.parent[ctx.parent.length - 1]._ref) {
                let data = await client.fetch(`*[_type == "recipeTitle"&& !(_id in path("drafts.**"))] {
                  ...,
                  data[]->
                }`)
                let recipeData = ctx.parent.map((items) => {
                  let dataFilter = data.filter((item) => {
                    if (item.data.find((e) => e._id === items._ref)) {
                      return {
                        ...item,
                        data: item.data.find((e) => e._id === items._ref),
                      }
                    }
                  })
                  return {
                    ...dataFilter[0],
                  }
                })

                if (
                  recipeData.filter((e) =>
                    e.data.find((item) => item._id === value._ref),
                  ).length > 1
                ) {
                  return 'Recipe Category Already Exists'
                } else {
                  return true
                }
              } else {
                return true
              }
            }),
          to: [
            {
              type: 'recipeData',
            },
          ],
        },
      ],
    },
    {
      name: 'ingredients_en',
      title: 'Ingredients - EN',
      type: 'array',
      of: [
        {
          title: 'Ingredient',
          name: 'ingredient',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'boolean',
              initialValue: false,
            },
            {
              title: 'Description',
              name: 'description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'ingredients_id',
      title: 'Ingredients - ID',
      type: 'array',
      of: [
        {
          title: 'Ingredient',
          name: 'ingredient',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'boolean',
              initialValue: false,
            },
            {
              title: 'Description',
              name: 'description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Made With',
      name: 'made',
      type: 'array',
      validation: (Rule) => Rule.max(2),
      of: [
        {
          title: 'Product',
          name: 'product',
          type: 'reference',
          to: [{ type: 'productList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Recipe Description - EN',
      name: 'description_en',
      type: 'editorBasic',
    },
    {
      title: 'Recipe Description - ID',
      name: 'description_id',
      type: 'editorBasic',
    },
    {
      name: 'thumbnail',
      description: 'A thumbnail image for this recipe | PNG / JPEG / WEBP',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'alt',
          type: 'string',
          initialValue: 'Morin',
        },
      ],
    },
    {
      name: 'cover',
      description: 'A cover image for this recipe | PNG / JPEG / WEBP',
      title: 'Cover',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'alt',
          type: 'string',
          initialValue: 'Morin',
        },
      ],
    },
    {
      title: 'Steps - EN',
      name: 'steps_en',
      type: 'array',
      of: [
        {
          title: 'Step',
          name: 'step',
          type: 'object',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  fields: [
                    {
                      title: 'Edit Alt Text',
                      name: 'alt',
                      type: 'string',
                      initialValue: 'Morin',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Steps - ID',
      name: 'steps_id',
      type: 'array',
      of: [
        {
          title: 'Step',
          name: 'step',
          type: 'object',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  fields: [
                    {
                      title: 'Edit Alt Text',
                      name: 'alt',
                      type: 'string',
                      initialValue: 'Morin',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
        {
          title: 'Video',
          name: 'video',
          type: 'object',
          fields: [
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'alt',
                  type: 'string',
                  initialValue: 'Morin',
                },
              ],
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
          preview: {
            select: {
              media: 'thumbnail',
            },
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'You may also like',
      name: 'related',
      type: 'object',
      fields: [
        {
          title: 'Manual / Auto',
          name: 'option',
          type: 'boolean',
          initialValue: false,
        },
        {
          title: 'Manual',
          name: 'manual',
          type: 'array',
          hidden: ({ parent }) => !(parent?.option === false),
          of: [
            {
              title: 'Recipes',
              name: 'recipes',
              type: 'reference',
              to: [{ type: 'recipeList' }],
            },
          ],
        },
      ],
    },
    {
      title: 'Set Text Color',
      name: 'textColor',
      type: 'color',
    },
    {
      title: 'Set Background Color',
      name: 'backgroundColor',
      type: 'color',
    },
    {
      title: 'Set Header Color (Black/White)',
      name: 'langColor',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date Published',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  initialValue: async () => ({
    date: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: {
      title: 'title_en',
      media: 'thumbnail',
    },
  },
}
