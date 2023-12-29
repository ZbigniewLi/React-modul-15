import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add a new list
    dispatch(addList({ title, description }));
    // Clear form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}>
    </TextInput>
      <TextInput 
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}>
        </TextInput>
      <Button >Add List</Button>
    </form>
  );
};

export default ListForm;
