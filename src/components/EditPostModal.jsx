import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./PostSlice";
import { Modal, TextField, Button, IconButton, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import Textarea from "@mui/joy/Textarea";

const EditPostModal = ({ handleClose, status, closeForm, id }) => {
  const { posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  const editablePost = posts.filter((post) => post.id === id);
  const { title, content } = editablePost[0];
  const [values, setValues] = useState({
    title,
    content,
  });

  const handleEditPost = () => {
    setValues({ title: "", content: "" });
    dispatch(
      postUpdated({
        id: id,
        title: values.title,
        content: values.content,
      })
    );
    closeForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const readyToSave =
    Boolean(title.trim() !== values.title) ||
    Boolean(content.trim() !== values.content);

  return (
    <div className="add-post">
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
      >
        <Box className="form-modal-add">
          <h2 id="unstyled-modal-title">Відредагувати пост:</h2>
          <IconButton
            aria-label="delete"
            color="primary"
            className="form-close"
            sx={{ position: "absolute", top: 5, right: 5 }}
            size="large"
            onClick={closeForm}
          >
            <ClearIcon />
          </IconButton>

          <form id="unstyled-modal-description" className="form">
            <TextField
              id="postTitle"
              label="Заголовок посту"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              variant="outlined"
            />
            <Textarea
              id="content"
              label="content"
              minRows={8}
              maxRows={20}
              placeholder="Type anything…"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={handleEditPost}
              size="large"
              endIcon={<SendIcon />}
              disabled={!readyToSave}
            >
              Зберегти зміни
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditPostModal;
