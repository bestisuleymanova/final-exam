const BASE_URL='http://localhost:8000/users'
const cards=document.querySelector('.cards')

async function getUsers(){
    const res=await axios(BASE_URL)
    const data=await res.data
    cards.innerHTML=''
    data.forEach((el)=>{
        cards.innerHTML+=`
        <div class="col col-3">
        <img src="./images/ss-icon-1 (1).png" alt="">
        <h2>${el.name}</h2>
        <p>${el.usertype}</p>
        <a href="#" class="btn btn-primary">delete</a>
        <a href="#" class="btn btn-danger">GetAll</a>
        <a href="#" class="btn btn-success">Update</a>

      </div>
     `

    })

}

getUsers()


