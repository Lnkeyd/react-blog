import "./write.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className='write'>
      {file && <img className='writeImg' src={URL.createObjectURL(file)} alt='' draggable={false} />}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-cloud-arrow-up'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <input
            className='writeInput'
            type='text'
            placeholder='Заголовок'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='writeSubmit' type='submit'>
            Опубликовать
          </button>
        </div>
        <div className='writeFormGroup'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Основной текст...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
      </form>
    </div>
  );
}
