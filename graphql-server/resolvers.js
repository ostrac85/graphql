export default {
    User: {
      posts: (parent, args, context, info) => parent.getPosts(),
    },
    Post: {
      user: (parent, args, context, info) => parent.getUser(),
    },
    Query: {
      posts: (parent, args, { db }, info) => db.post.findAll(),
      users: (parent, args, { db }, info) => db.users.findAll(),
      post: (parent, { id }, { db }, info) => db.post.findByPk(id),
      user: (parent, { userid }, { db }, info) => db.users.findByPk(userid) 
    },
    Mutation: {
      createPost: (parent, { title, content, userId }, { db }, info) =>
        db.post.create({
          title: title,
          content: content,
          userId: userId
        }),
      updatePost: (parent, { title, content, id }, { db }, info) =>
        db.post.update({
          title: title,
          content: content
        },
        {
          where: {
            id: id
          }
        }),
      deletePost: (parent, {id}, { db }, info) =>
        db.post.destroy({
          where: {
            id: id
          }
        })
    }
  };