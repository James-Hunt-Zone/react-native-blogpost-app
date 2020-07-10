import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blog_post":
      return action.payload;
    // case "add_blog_post":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "edit_blog_post":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case "delete_blog_post":
      return state.filter((item) => item.id !== action.payload);
    default:
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blog_post", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      const response = await jsonServer.post("/blogposts", { title, content });
      callback();
    } catch (error) {
      console.log("addBlogPost - error");
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/blogposts/${id}`);

      dispatch({ type: "delete_blog_post", payload: id });
    } catch (error) {
      console.log("deleteBlogPost - error");
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      await jsonServer.put(`/blogposts/${id}`, {
        title,
        content,
      });

      dispatch({ type: "edit_blog_post", payload: { id, title, content } });

      callback();
    } catch (error) {
      console.log("editBlogPost - error");
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
