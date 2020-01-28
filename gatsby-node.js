const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const WorkTemplate = path.resolve(`./src/templates/work/index.js`)

  /**
   * data.allMarkdownRemark.edges[X].node.frontmatter
   * 
   * page-id: pageid
   * description: description
   * title: title
   * date: date 
   */
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              pageid
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors)
    throw new Error(result.errors) 


  result.data.allMarkdownRemark.edges
    .filter(({node}) => node.frontmatter.category === 'works')
    .forEach(({node}) => 
      createPage({
        path: path.join(`/works/`, `${node.fields.slug}`),
        component: WorkTemplate,
        context: {
          slug: `${node.fields.slug}`,
        }
      })
    )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
