import { Avatar, ButtonGroup, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removePost } from "./PostSlice";

const PostComponent = ({ post, getPost }) => {
  const { id, name, username, title, content, date, avatar, mark } = post;
  const dispatch = useDispatch();

  return (
    <div className="post" key={id}>
      <div className="post-title">
        <div className="post-info">
          <Avatar
            src={avatar}
            color="primary"
            variant="soft"
            sx={{ width: 50, height: 50 }}
            size="lg"
          />
          <p>
            {name} <br />
            <span className="username">@{username}</span>
          </p>
        </div>
        <div className="date">
          <span>{date}</span>
          <br />
          {mark !== false && <span className="mark">{mark}</span>}
        </div>
      </div>
      <div className="post-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <ButtonGroup variant="text" sx={{ height: 25 }}>
        <Button
          sx={{ fontSize: 12 }}
          onClick={() => dispatch(removePost({ id }))}
        >
          Delete
        </Button>
        <Button sx={{ fontSize: 12 }} onClick={getPost} id={id}>
          Edit
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PostComponent;