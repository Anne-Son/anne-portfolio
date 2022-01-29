import React, {useState, useEffect} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const url = 'http://localhost:1337/api/jobs?populate=*'


// const query = graphql`
//   {
//     allStrapiApiJobs(sort: {fields: id, order: DESC}) {
//       nodes {
//         data {
//           attributes {
//             company
//             date
//             position
//           }
//         }
//       }
//     }
//   }
// `



const Jobs = () => {
  // const data = useStaticQuery(query)
  // console.log(data)
  const [data, setData] = useState([]);

  const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setData(data);
  };
  
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
  <h2>jobs component</h2>
 <div>
   {data.attributes.map((item, id) => {
     return (
       <div key={id}>{item.company}</div>
     )
   })}
 </div>
  </>
  );
};

export default Jobs
