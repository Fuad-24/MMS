const {con}=require('../sql')

const keyMap=(obj,keys)=>{
    let result={}
    keys.map(key=>{
        result[key]=obj[key];
    })
    return result;
}
const getLandingPageCount=(res)=>{
    let counts={}
    let query='SELECT COUNT(email) AS cnt FROM Client;';
    con.query(query,(error,result)=>{
        if(error)
            throw error;
        counts.client=result[0].cnt;
        query='SELECT count(worker_email) AS cnt  FROM ServiceRequest;';
        con.query(query,(error,result)=>{
            if(error)
                throw error;
            counts.work=result[0].cnt;
            query='SELECT count(email) AS cnt  FROM Worker;';
            con.query(query,(error,result)=>{
                if(error)
                    throw error;
                counts.worker=result[0].cnt;
                res.send(counts)
            })
        })
    })
    //res.send('counted')
}
const searchWorker=(res,latitude,longitude,service_name)=>{
    console.log(latitude+"--"+longitude+"--"+service_name)
    let query=`SELECT email,name,profile_pic,longitude,latitude,charge,active_status FROM Worker NATURAL JOIN WorkerService WHERE service_name="${service_name}";`
    con.query(query,(error,result)=>{
        if(error)
            throw error
        const workers=result.filter(worker=>{
            return ((worker.latitude-latitude)*(worker.latitude-latitude)+(worker.longitude-longitude)*(worker.longitude-longitude))<=0.005
        })
        res.send(workers)
    })
    
}
module.exports={keyMap,getLandingPageCount,searchWorker}