//your code here
window.onload = start();


async function start(){
    console.log("inside");
     await fetch('https://randomuser.me/api/')
    .then(response=>
response.json()
        
    )
    .then(result=>
        {
            const data = result.results;
            console.log(data);
    const profile = document.getElementById('profile');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const display = document.createElement('p');
    name.innerText = `${data[0].name.title} ${data[0].name.first} ${data[0].name.last}`
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');
    const b3 = document.createElement('button');
    const b4 = document.createElement('button');
    // console.log(data[0].picture.large);
    b1.innerText =`Age`;
    b2.innerText =`Email`;
    b3.innerText =`Phone`;
    b4.innerText =`Get Another User`;
    display.innerText = ``;
    img.src = `${data[0].picture.large}`;
    profile.appendChild(img);
    profile.appendChild(name);
    profile.appendChild(display);
    profile.appendChild(b1);
    profile.appendChild(b2);
    profile.appendChild(b3);
    profile.appendChild(b4);
    profile.appendChild(display);
    b1.addEventListener('click',()=>{

        display.innerText=``;
        display.innerText = `${data[0].dob.age}`
    })
    b2.addEventListener('click',()=>{

        display.innerText=``;
        display.innerText = `${data[0].email}`
    })
    b3.addEventListener('click',()=>{

        display.innerText=``;
        display.innerText = `${data[0].cell}`
    })
    b4.addEventListener('click',()=>{

        profile.removeChild(img);
    profile.removeChild(name);
    profile.removeChild(display);
    profile.removeChild(b1);
    profile.removeChild(b2);
    profile.removeChild(b3);
    profile.removeChild(b4);
    
    
      start();
        
    })

        }
    )
    .catch(error=>
       console.log(error)
    )
    
}

// function app(data){

    // console.log(data);
    // const profile = document.getElementById('profile');
    // const img = document.createElement('img');
    // const name = document.createElement('h2');
    // const display = document.createElement('p');
    // name.innerText = `${data[0].name.title} ${data[0].name.first} ${data[0].name.last}`
    // const b1 = document.createElement('button');
    // const b2 = document.createElement('button');
    // const b3 = document.createElement('button');
    // const b4 = document.createElement('button');
    // // console.log(data[0].picture.large);
    // b1.innerText =`Age`;
    // b2.innerText =`Email`;
    // b3.innerText =`Phone`;
    // b4.innerText =`Get Another User`;
    // display.innerText = ``;
    // img.src = `${data[0].picture.large}`;
    // profile.appendChild(img);
    // profile.appendChild(name);
    // profile.appendChild(display);
    // profile.appendChild(b1);
    // profile.appendChild(b2);
    // profile.appendChild(b3);
    // profile.appendChild(b4);
    // profile.appendChild(display);
    // b1.addEventListener('click',()=>{

    //     display.innerText=``;
    //     display.innerText = `${data[0].dob.age}`
    // })
    // b2.addEventListener('click',()=>{

    //     display.innerText=``;
    //     display.innerText = `${data[0].email}`
    // })
    // b3.addEventListener('click',()=>{

    //     display.innerText=``;
    //     display.innerText = `${data[0].cell}`
    // })
    // b4.addEventListener('click',()=>{


        
    // })

// }

