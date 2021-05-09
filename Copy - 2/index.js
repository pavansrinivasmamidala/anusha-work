var fs = require('fs');
var fetch = require('node-fetch');   

var employeeData = fs.readFileSync('Employee.json');
var projectData = fs.readFileSync('Project.json');   
var employeeDetails = JSON.parse(employeeData);
var projectDetails = JSON.parse(projectData);

const express = require("express");
const app = express();
var output = null

const cors=require('cors');
const { response } = require('express');
    
app.listen(3000);
    
app.use(express.static('public'));
app.use(cors());
  

app.get('/getemployeedetails', alldata);
   
function alldata(request, response) {
    const fetchPromise = fetch("http://localhost:3000/employee");
    fetchPromise.then(response => {
        console.log(response);
    });

    
    response.send();
}

app.get('/employee',function (req, res){
    res.send(employeeDetails)
})
app.get('/project',function (req, res){
    res.send(projectDetails)
})

  
app.get('/employee/:id/', searchEmployee);
  
function searchEmployee(request, response) {
    id = request.params.id;

    for (var details of employeeDetails){
        if(details.employeeId === id){
             reply = details
        }
    }
    response.send(reply);
}

app.get('/project/:id/', searchProject);
  
function searchProject(request, response) {
    id = request.params.id;

    for (var project of projectDetails){
        if(project.projectId === id){
             output = project
             
        }
    }
    response.send(output);
}