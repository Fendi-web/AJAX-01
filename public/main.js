
getXML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("GET","/5.json");
    request.onreadystatechange = () =>{
        if(request.readyState===4 && request.status===200){
            const object = JSON.parse(resquest.response)
            myName.textContent= object.name    
        }
    };
    request.send()
};



getXML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = () =>{
        if(request.readyState===4 && request.status===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};

    
    getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        //创建script标签
      const div= document.createElement('div')
      //填写script内容
      div.innerHTML = request.response
      //插到身体里面
      document.body.appendChild(div)   
    }
    request.send()
    }

    getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        //创建script标签
      const script = document.createElement('script')
      //填写script内容
      script.innerHTML = request.response
      //插到身体里面
      document.body.appendChild(script)
       
    }
    request.send()
}

getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
request.open('GET','/style.css');
request.onload = ()=>{
    console.log('request.response')
    console.log(request.response)
    //创建一个style标签
    const style = document.createElement('style')
    //让style等于这个requst.response
    style.innerHTML = request.response
    //把style插入到head里面去
    document.head.appendChild(style)

    console.log("成功了");
    };
    request.onerror=()=>{
        console.log("失败了");
    };
    request.send();

};
