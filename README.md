# azure-resume
My Own Azure Resume, follow along

## First steps
- Frontend folder contains the website.
- created main.js that displays a visitor counter code by following a walkthrough.

## Second step

- Started working on back end I had to do a bit of trouble shooting I was having issues with "func host start" so I used the git hub link I posted and I was also having troubles with error NU1101 I followed the first step in the second link I posted and it seemed to fix my issues
- I used these two links to fix the issues I was having https://github.com/Azure/azure-functions-core-tools#installing and https://www.hossambarakat.net/2020/06/24/fix-error-NU1101/ 

- I was also having trouble with CosmosDB being underlined red I found a solution to this by downloading this https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.CosmosDB and changing collectionName to containerName and also instead of ConnectionStringSetting I just did connection

- Another Issue I had was the API not loading the number of visitors on my webpage I changed the code below and it seemed to fix it 
```
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementsById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
```
```
})

const functionApi = 'enter api link';

const getVisitCount = () => {
    fetch(functionApi)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            const count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
}
```
