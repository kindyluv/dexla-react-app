import React, { useCallback, useEffect, useState } from 'react'
import FirstChild from './FirstChild';

const ParentComponent = () => {

    const[dataFetched, setDataFetched] = useState([]);
    const [value, setValue] = useState()

    const fetchData = useCallback(async () => {
        await fetch('https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI',{
            method: 'get',
            headers: {
                'X-Figma-Token': 'figd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l',
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            const allChildren = extractChildren(json);
            console.log("all child", allChildren)
        })
    },
      [],
    );

    const extractChildren = (fetched) => {
        const children = [];

        const extract = (data) => {
            if (Object.keys(data).includes("children")){
                data.children.map((child) => {
                    children.push({...child, children: null})
                    extract(child);
                });
            }
        }

        extract(fetched.document);
        setDataFetched(children);
        return children;
    }

    const fetc = () => {
        dataFetched.forEach((v)=>{
            if(v.id === "0:1"){
                setValue(v)
            }
        })
    }

    useEffect(()=>{
        fetchData()
        fetc()
    }, [fetchData, fetc]);

  return (
    <div style={{ backgroundColor: `rgba(${value["backgroundColor"]["r"]}, ${value["backgroundColor"]["g"]}, ${value["backgroundColor"]["b"]}, ${value["backgroundColor"]["a"]})` }}>
        <FirstChild dataFetched={dataFetched} />
    </div>
  )
}

export default ParentComponent