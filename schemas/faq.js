export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      title: "Hide FAQ",
      name: "hide_faq",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
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
            'Enter up to 400 characters to describe the Faq. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe the Faq (separated by commas)',
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
              name: 'name',
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
            'Enter up to 400 characters to describe the Faq. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe the Faq (separated by commas)',
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
              name: 'name',
              type: 'string',
              initialValue: 'Morin',
            },
          ],
        },
      ],
    },
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
      title: 'Set Language Color (Black/White)',
      name: 'langColor',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Faq',
      }
    },
  },
}
