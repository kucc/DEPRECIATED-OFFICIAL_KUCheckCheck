import axios from 'axios';
import { API_URLS } from '../constants';

const { MAIN_TOTAL,MAIN_SESSION,MAIN_STUDIES } = API_URLS;

export const  mainTotalApi= async (category) => {
    let url = "";
    if(category === 'total'){
        url = MAIN_TOTAL
    }else if(category === 'session'){
        url = MAIN_SESSION
    }else if(category === 'studies'){
        url = MAIN_STUDIES
    }
    const accessToken = localStorage.getItem('accessToken');
    const result = await axios
    .get(url,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }})
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err
    });
    const data = result.data.classes
      return data;
      };

export const DetailApi = async (category,id) =>{
    const accessToken = localStorage.getItem('accessToken');
    const result = await axios
    .get(`http://3.36.95.15:8080/api/${category}/${id}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then((res)=>{
        return res;
      })
      .catch((err)=>{
        return false
      });
      return result.data;
    }

export const AttendApi = async (category,id) =>{
    const accessToken = localStorage.getItem('accessToken');
    const result = await axios
    .get(`http://3.36.95.15:8080/api/${category}/${id}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then((res)=>{
        return res;
        })
        .catch((err)=>{
        return false
        });
        return result.data;
    }

export const feedDetailApi = async (postId) =>{
    const accessToken = localStorage.getItem('accessToken');
    const result = await axios
    .get(`http://3.36.95.15:8080/api/board/${postId}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },cache: true,
    })
    .then((res)=>{
        return res;
        })
        .catch((err)=>{
        return false
        });
        console.log(result)
        return result.data;
}

export const feedEditApi = async ( 
    title,
    dueDate,
    doDate,
    pay,
    time,
    place,
    content,
    phoneNum,
    files,
    postId,) =>{
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('place', place);
    formData.append('pay', pay);
    formData.append('time', time);
    formData.append('files', files);
    
    console.log( title,
        dueDate,
        doDate,
        pay,
        time,
        place,
        content,
        phoneNum,
        files,
        )
    formData.append('phoneNum', phoneNum);
    formData.append('dueDate', dueDate);
    formData.append('doDate', doDate);
    const accessToken = localStorage.getItem('accessToken');  
    console.log(accessToken) 
    const result = await axios.post(
        `http://3.36.95.15:8080/api/board/${postId}`,formData,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        }
    )
    .then((res)=>{
        return res;
        })
        .catch((err)=>{
        return err
        });
        console.log(result)
        return result.data;
}

export const feedlistApi = async (school, date, page, size) =>{
    const accessToken = localStorage.getItem('accessToken');
    console.log(school,date,page,size)
    const result = await axios
    .get(`http://3.36.95.15:8080/api/board/school/${school}/list?date=${date}&page=${page}&size=${size}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then((res)=>{
        return res;
      })
      .catch((err)=>{
        return err
      });
      const data = {
        post : result.data.content,
        endpage : result.data.totalPages,
        totalElement : result.data.totalElements,
      }
      
      return data;
}

