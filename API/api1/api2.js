const URL = "https://jsonplaceholder.typicode.com/comments";
const jsondata = document.querySelector("#container");
const button = document.querySelector("#btn");


//using promises

const getcomments=function() {
    // let response=await fetch(URL)
    // let data=await response.json()

     fetch(URL)
     .then((response)=>{
       let daatav= response.json()
       return daatav
     })
     .then((data)=>{
        
    const first50=data.slice(0,201)
    const f_50=first50.map((Comment)=>{
        return {
            ID:Comment.id,
            Name:Comment.name,
            Email: Comment.email,
            Comments:Comment.body
        }
    })

    console.table(f_50)
    jsondata.innerHTML=''
    let HTMLTable=`
    <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
    
   `

    f_50.forEach(Comment => {
        HTMLTable += 
        `
         <tr>
           <td>${Comment.ID}</td>
           <td>${Comment.Name}</td>
           <td>${Comment.Email}</td>
           <td>${Comment.Comments}</td>
         </tr>
        `
    });

    jsondata.innerHTML=HTMLTable
     })
     .catch(()=>{
        jsondata.innerHTML='There are someting error!'
     })


    
}
console.log(getcomments);
//----------------------------------------------------------------------------
//another methods using async wait


// const getcomments = async function () {
//     try {
//         let response = await fetch(URL);
//         let data = await response.json();

//         // Get only the first 50 comments
//         const first50 = data.slice(0, 50);

//         // Map required properties
//         const f_50 = first50.map((Comment) => {
//             return {
//                 ID: Comment.id,
//                 Name: Comment.name,
//                 Email: Comment.email,
//             };
//         });

//         console.table(f_50);
//         jsondata.innerHTML = "";

//         // Start HTML Table
//         let HTMLTable = `
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//         `;

//         // Populate table rows
//         f_50.forEach(Comment => {
//             HTMLTable += `
//                 <tr>
//                     <td>${Comment.ID}</td>
//                     <td>${Comment.Name}</td>
//                     <td>${Comment.Email}</td>
//                 </tr>
//             `;
//         });

//         // Close tbody and table
//         HTMLTable += `
//                 </tbody>
//             </table>
//         `;

//         jsondata.innerHTML = HTMLTable;

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };



button.addEventListener("click",getcomments)