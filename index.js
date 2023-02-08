
var bookName = document.getElementById('siteName');
var bookUrl = document.getElementById('urlName');
var tableBody = document.getElementById('tableBody');
console.log(bookName,bookUrl,tableBody);

bookContainer = [];
if(localStorage.getItem !=null)
{
    bookContainer = JSON.parse(localStorage.getItem('bookmarkers'))
    displayBook ();
}


function addBook()
{
    var bookMarker = 
    {
        name:bookName.value,
        url:bookUrl.value
    }
    bookContainer.push (bookMarker);
    console.log(bookContainer);
    
    localStorage.setItem("bookmarkers",JSON.stringify (bookContainer))
    displayBook ();
}

function displayBook ()
{
    var cartoona =``;
    for ( var i=0;i<bookContainer.length;i++)
    {
        cartoona +=`<tr>
                <td>${bookContainer[i].name}</td>
                <td><a href="${bookContainer[i].url}"> <button class="btn btn-primary my-2">visit</button></a></td>
                <td> <button onclick="deleteBook(${i})" class="btn btn-danger my-2">Delete</button></td>
            
           </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}

function deleteBook(index)
{
    bookContainer.splice(index,1)
    localStorage.setItem("bookmarkers",JSON.stringify (bookContainer))
    displayBook ();
}

var nameRegex = /^[A-Z][a-z]$/
console.log(nameRegex.test("Am"))
function isNameValide()
{
    if(nameRegex,test(bookName.value)){
        return true;
    }
}


// function addBook()
// {
//     var bookMaker =
//     {
//         name:bookName.value,
//         urlLink:bookUrl.value
//     }
//     bookContainer.push(bookMaker);
//     console.log(bookContainer);
//     displayBook ();
// }

// function displayBook ()
// {
//     var cartoona =``;
//     for (var i=0;i<bookContainer.length;i++)
//     {
//         cartoona +=`
//         <tr>
//                <td>${bookContainer[i].name}</td>
//                 <td> <a href="${bookContainer[i].urlLink}"> <button class="btn btn-primary">visit</button></a></td>
//                 <td><button onclick="deleteBook(${i})" class="btn btn-danger  id="">Delete</button></td> 
//      </tr>  
//     `
// }
//   document.getElementById('tableBody').innerHTML = cartoona;

// }
 
// function deleteBook(index)
// {
//     bookContainer.splice(index,1);
//     displayBook ();
// }