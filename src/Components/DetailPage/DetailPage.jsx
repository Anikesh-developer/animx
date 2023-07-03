import React, { useEffect, useState }  from 'react';
import './detailpage.css';
import { useParams } from 'react-router-dom';

const DetailPage = () => {

    const {id} = useParams();

    const[content ,setContent] = useState([]);

    const url = 'https://animes5.p.rapidapi.com/anime/${id}';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '0b962ae8fbmshb44ca6de6d23024p1ce422jsnb58d190481cb',
		    'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
	}
};

useEffect(() => {
    async function getData() {
      const response = await fetch(url , options);
      const data = await response.json();
      setContent(data);
    }
    getData();  

    console.log(content);
  },[])

  return (
    <div className='detail'>
      Detail Page
    </div>
  )
}

export default DetailPage;
