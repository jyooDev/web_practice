
async function fetchData(){
    const dataText = document.getElementById('data');
    const loadingText = document.getElementById('loading');

    loadingText.style.display="block";
    dataText.textContent="";

    try{
        const response = await new Promise((resolve,reject) => {
            setTimeout(() =>
                Math.random() > 0.5 ? resolve("Data loaded successfully") : reject(), 2000);
        });
        dataText.textContent = response; //show data
    }catch(error){
        dataText.textContent = "Error loading data";
        dataText.style.color = 'red';
    } finally{
        loadingText.style.display = "none";
    }
}