let percentagebtn=document.querySelector(".percentage");
let show=document.querySelector(".show");
const cal = () =>{
    const maths=document.querySelector("#maths").value;
    const sci=document.querySelector("#sci").value;
    const eng=document.querySelector("#eng").value;
    const sst=document.querySelector("#sst").value;
    const lang=document.querySelector("#lang").value;
    let percentage=((parseFloat(maths)+parseFloat(sci)+parseFloat(eng)+parseFloat(sst)+parseFloat(lang))/500)*100;
    console.log(percentage);
    

    if (maths=="" || sci=="" || eng=="" || sst=="" || lang=="" || isNaN(maths) || isNaN(sci) || isNaN(eng) || isNaN(sst) || isNaN(lang)){
        show.innerText="Fill up the correct entries";
        show.classList.remove("hide");
        
    }
    else{
        
        let grade="";

        if (percentage<=100 && percentage>=80){
            grade="A";
        }
        else if (percentage<=79 && percentage>=60){
            grade="B";
        }
        else if (percentage<=59 && percentage>=30){
            grade="C";
        }
        else{
            grade="D";
        }
        console.log(grade);
        if (grade=="A" || grade=="B" || grade=="C"){
            show.classList.remove("hide");
            show.innerText=`Percentage: ${percentage}% \nGrade: ${grade} \nStatus: PASS`;
        }
        else{
            show.classList.remove("hide");
            show.innerText=`Percentage: ${percentage}% \nGrade: ${grade} \nStatus: FAIL`;
        }
    }

}

percentagebtn.addEventListener("click",cal);