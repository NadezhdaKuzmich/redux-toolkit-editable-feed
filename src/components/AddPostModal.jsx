import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostSlice";
import { Modal, TextField, Button, IconButton, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import Textarea from "@mui/joy/Textarea";

const initialState = {
  name: "",
  username: "",
  title: "",
  content: "",
};

const AddPostModal = ({ handleClose, status, closeForm }) => {
  const [state, setState] = useState(initialState);
  const { name, username, title, content } = state;
  const dispatch = useDispatch();

  const readyToSave =
    Boolean(name.trim()) &&
    Boolean(username.trim()) &&
    Boolean(title.trim()) &&
    Boolean(content.trim());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const savePost = () => {
    if (readyToSave) {
      dispatch(postAdded(name, username, title, content));
      setState(initialState);
      closeForm();
    }
  };

  return (
    <div className="add-post">
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
      >
        <Box className="form-modal-add">
          <h2 id="unstyled-modal-title">Додати новий пост:</h2>
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
              id="postAuthor"
              label="Ім'я"
              name="name"
              value={name}
              onChange={handleInputChange}
              variant="outlined"
            />
            <TextField
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
              variant="outlined"
            />
            <TextField
              id="postTitle"
              label="Заголовок посту"
              name="title"
              value={title}
              onChange={handleInputChange}
              variant="outlined"
            />
            <Textarea
              id="content"
              label="content"
              minRows={8}
              maxRows={20}
              placeholder="Надрукуй свій котент…"
              name="content"
              value={content}
              onChange={handleInputChange}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={savePost}
              size="large"
              endIcon={<SendIcon />}
              disabled={!readyToSave}
            >
              Додати новину 
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPostModal;