


let arr1=[];

function load(){
  async function gets(){
    let response = await fetch('/api/todos');
    const data = await response.json();
    console.log(data);
    for (item of data){
      let par= document.createElement('div');
      par.textContent=`todo: ${item.todo}`;
      document.body.append(par);
    }
  };
  gets();
    

}

function posts(){
  // $("div1").html("<p>hi</p>")
    let a= document.getElementById("submit");
      arr1.push(a.value);
   
    // const options = {
    //     method:'POST',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },

    //     body: JSON.stringify(arr1)
        
       
        
    //  };
    // // console.log(JSON.stringify(arr1));
    // fetch("/api/todos",options);  
    // const options = {
    //     method:'POST',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },

    //     body: JSON.stringify(arr1)
        
       
        
    //  };
    // // console.log(JSON.stringify(arr1));
    // fetch("/api/todos",options);
    let par= document.createElement('div');
    // const options1 = {
    //     method:'GET',
    arr1.pop();
       
      
       
        
    // };
    // fetch("/api/".options1).then(x => x.text()).then(y => myDisplay(y));
   async function gets(){
     let response = await fetch('/api/todos');
     const data = await response.json();
     console.log(data);
     for (item of data){
      let par= document.createElement('div');
       par.textContent=`todo: ${item.todo}`;
       document.body.append(par);
     }
   };
   gets();
     
    // for (let i=0; i<arr1.length;i++)
    // {
        
    //    par.innerHTML=arr1[i];
    //    document.body.appendChild(par);
    // }
    // to delete-------------------
    const options2 = {
      method:'POST',
      headers: {
          'Content-Type':'application/json'
      },

      body: JSON.stringify(arr1)
      
     
      
   };
    par.addEventListener("click",function(){
        par.style.textDecoration="line-through";
        

    })
par.addEventListener("dblclick",function(){
         
          // console.log(par.innerHTML);
          // let y=;
         const myDataObject ={todo: 'JEEVAN' }
          fetch('/api/todos/:del', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(myDataObject)
          }) 
            document.body.removeChild(par);

            // console.log(arr1);
    
        })

};