import React from 'react';
import getAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewsBlog = () => getAPI("posts?_sort=id&_order=asc")
const postNewsBlog = (dataYangDikirim) => PostAPI("posts", dataYangDikirim)
const deleteNewBlog = (dataYgDihapus) => DeleteAPI("posts", dataYgDihapus)

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewBlog
}

export default API;