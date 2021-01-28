export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{type: "string"}],
    },
  ]
}