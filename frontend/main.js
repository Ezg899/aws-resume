window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();

})

const functionApiUrl = 'https://getresumecounteraz.azurewebsites.net/api/GetResumeCounter?code=O0gjojyVjNHNoaVJk9DqLFdNZ-7zYa5SHGMRn__Tsn1qAzFuROuNnA=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        const count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}