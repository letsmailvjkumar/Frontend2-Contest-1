let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((person)=>{
        if(person.profession=== "developer"){
            console.log(person);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((person) => {
        if (person.profession === "developer") {
          console.log(person);
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter((person)=>person.profession!="admin")
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
        { id: 4, name: "john Doe", age: "28", profession: "designer" },
        { id: 5, name: "jack sparrow", age: "21", profession: "HR" },
        { id: 6, name: "karen bedi", age: "29", profession: "manager" },
    ];
    let concatArray = arr.concat(newArray);
    console.log(concatArray)
  }