// const xhr = new XMLHttpRequest()

// /*
// xhr.addEventListener('load', ()=>{
//     console.log(xhr.response)
// })

// xhr.open('GET', 'https://supersimplebackend.dev/greeting')
// xhr.send()

// fetch('https://supersimplebackend.dev/greeting').
// then(response => response.text()).
// then( data => console.log(data))

// async function greeting() {
//     const response = await fetch('https://supersimplebackend.dev/greeting')
//     const data = await response.text()
//     console.log(data)
// }

// greeting()
// */
// // async function postGreeting() {
// //     const request = await fetch('https://supersimplebackend.dev/greeting',{
// //         method: "POST",
// //         body: JSON.stringify({
// //             name: "Parth Kaul"
// //         }),
// //         headers: {
// //             "Content-Type": "application/json",
// //         }
// //     }
// // )
// //     const response = await request.text();
// //     console.log(response)
// // }

// // postGreeting();

// // try {
// //     fetch('https://www.amazon.com') 
// //         .then(response => response.json())
// //         .then(data => console.log(data));
// // } catch(error) {
// //     console.log("CORS error. Your request was blocked by the backend");
// // }


// // async function getAmazon() {
// //     try {
// //       const response = await fetch('https://amazon.com');
// //       const text = await response.text();
// //       console.log(text);

// //     } catch (error) {
// //       console.log('CORS error. You request was blocked by the backend.');
// //     }
// //   }

// // getAmazon();

// async function postGreeting() {
//     try{
//         const response = await fetch('https://supersimplebackend.dev/greeting',{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         }
//     )
//         if(response.status >= 400){
//             throw response;
//         }
    
//         const data = await response.text();
//         console.log(data)
//     }

//     catch(error){

//         if(error.status  === 400){
//             const errorMessage = await error.json();
//             console.log(errorMessage)
//         }
//         else{
//             console.log("Network Error. Please try again")
//         }
//     }

// }

// postGreeting();


