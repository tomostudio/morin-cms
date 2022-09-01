export default {
  name: 'recipeDetail',
  title: 'Recipe Detail',
  type: 'document',
  fields: [
    {
      title: "Language",
      name: "language",
      type: "object",
      fields: [
        {
          title: "Ingredients",
          name: "ingredients",
          type: "object",
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: "Ingredients"
            },
          ],
        },
        {
          title: "Made With",
          name: "made_with",
          type: "object",
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: "Made With"
            },
          ],
        },
        {
          title: "Instructions",
          name: "instructions",
          type: "object",
          fields: [
            {
              title: 'ID',
              name: 'id',
              type: 'string',
            },
            {
              title: 'EN',
              name: 'en',
              type: 'string',
              initialValue: "Instructions"
            },
          ],
        },
        {
          title: "You may also like",
          name: "related",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "object",
              fields: [
                {
                  title: 'ID',
                  name: 'id',
                  type: 'string',
                },
                {
                  title: 'EN',
                  name: 'en',
                  type: 'string',
                  initialValue: "You may also like.."
                },
              ]
            },
            {
              title: "Button",
              name: "btn",
              type: "object",
              fields: [
                {
                  title: 'ID',
                  name: 'id',
                  type: 'string',
                },
                {
                  title: 'EN',
                  name: 'en',
                  type: 'string',
                  initialValue: "See All Recipes"
                },
              ]
            },
          ],
        }
      ]
    },
    {
      title: 'Set Language Color',
      name: 'langColor',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Recipe Detail',
      }
    },
  },
}
