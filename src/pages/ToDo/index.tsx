import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { URL } from '../../constants';
import { END_POINT } from '../../constants/endpoint';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { TODO_LIST } from '../../type';
import ToDoAdd from './ToDoAdd';
import { useTodoContext } from './ToDoContext';
import ToDoList from './ToDoList';

const ToDo = () => {
  const navigate = useNavigate();

  const { dispatch } = useTodoContext();
  const { data, fetchData } = useFetch<TODO_LIST>(END_POINT.TODOS);
  const { handleChange, handleSubmit } = useForm({
    initialValues: { todo: '' },
    onSubmit: values => {
      fetchData({
        url: END_POINT.TODOS,
        method: 'POST',
        isGetData: true,
        body: JSON.stringify(values),
        contentsType: { 'Content-Type': 'application/json' },
      });
    },
  });

  useEffect(() => {
    if (data && !Array.isArray(data)) {
      dispatch({ type: 'ADD_TODO', payload: [data] });
    } else if (data && Array.isArray(data)) {
      dispatch({ type: 'SET_TODO', payload: data });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate(URL.SIGN_IN);
    }
  }, []);

  return (
    <Layout>
      <ToDoAdd handleChange={handleChange} handleSubmit={handleSubmit} />
      <ToDoList />
    </Layout>
  );
};

export default ToDo;
