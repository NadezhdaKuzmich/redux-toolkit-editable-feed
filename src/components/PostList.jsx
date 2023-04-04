import { useSelector } from "react-redux";
import PostComponent from "./PostCompomemt";
import { Button } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export const PostList = ({ handleOpen, openEdit, handleEdit }) => {
  const { posts } = useSelector((state) => state.posts);

  const getPost = (event) => {
    openEdit();
    handleEdit(event.target.id);
  };
  
  const Posts = posts.map(post => <PostComponent key={post.id} post={post} getPost={getPost}/>)

  return (
    <div className="posts">
      <div className="title-posts">
        <h2>Стрічка новин</h2>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="large"
          endIcon={<PlaylistAddIcon />}
        >
          Додати пост
        </Button>
      </div>
      <hr />
      {Posts}
    </div>
  );
};