import { useState } from "react";
import { PostList } from "./components/PostList";
import AddPostModal from "./components/AddPostModal";
import EditPostModal from "./components/EditPostModal";

function App() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const handleOpen = () => setAdd(true);
  const handleClose = () => setAdd(false);
  const openEdit = () => setEdit(true);

  const closeForm = () => {
    setAdd(false);
    setEdit(false);
  };

  const handleEdit = (id) => {
    setCurrentId(id);
  };

  return (
    <div className="container">
      <AddPostModal
        handleClose={handleClose}
        status={add}
        closeForm={closeForm}
      />
      <PostList
        handleOpen={handleOpen}
        handleEdit={handleEdit}
        openEdit={openEdit}
      />

      {edit !== false && (
        <EditPostModal
          handleClose={handleClose}
          status={edit}
          closeForm={closeForm}
          id={currentId}
        />
      )}
    </div>
  );
}

export default App;