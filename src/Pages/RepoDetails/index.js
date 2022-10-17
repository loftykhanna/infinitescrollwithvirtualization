import { useEffect, useState } from "react";
import axios from "axios";
import {  Link, useParams
} from "react-router-dom";

import {RepoCard} from '../../Component'
import './styles.css'



export default function RepoDetails() {
    const  { reponame, orgname } = useParams();
    const [repoDetails, setRepoDetails] = useState({});
useEffect(()=>{
    axios.get(`https://api.github.com/repos/${orgname}/${reponame}`).then(data =>{
        console.log(data)
        setRepoDetails(data.data)
    })
}, [])

console.log('repoDetails', repoDetails)


    return <div className="wrapper-flex"> 
        <RepoCard repoDetails={repoDetails} orgname={orgname}/>
       
        </div>


}