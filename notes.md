 - libraries are smaller than framework
 - React is just used for DOM manipulation and page updates and speed of page 
 - there are a lot of things we need 
 - Angluar is a framework
 - Next Js helps react since it is a framework


 - DOM : Document Object Model
 - tree like structure
 - html elements as hierarchy 
 - main purpose of js is to manipulate the Dom 
 - react uses a virtual dom thats why it is very fast
 - compare 2 virtual doms and then update the original according to the changes 

 ### NEXT JS
 - is a frontend framework to use react 
 - linking routing 
 - server size rendering 
 - react suggests using NEXT js 
 - gatspy is best for static websites

### Single page application 
 - only updaed components are rerendered

##### types of css
 - global css
 - scoped css : by page.modules.css

##### page.jsx is a special file in next js 
 - here css is passed in key value pairs in {{ }}
 - fontFamily : 50 means pixels by default


 - login/login.module.css will be a local css file  

 -difference between function pass / function call # in eventHandling
 -- ... is a spread operator used to extract out all the elements of an array 
 -- to have an array and a setArray is called destructuing
10/03/2024
homework for 
 /// create a comment system 
 17/03/2024

 create delete function : use splice method on temp array and ...temp set this in Task array 
#### Conditional rendering 

###### interpolated strings : using backticks `backticks `

## Form Handling 
 - use formik library
 - use either id or name for field name reading in formik
 - handleSubmit is provided handleChange is provided , these provide functionality 
 - Yup is a npm package used for validations

 --latest update in nodeJs for environment variable ".env " is a package




 # connection 
 - create form 
 - fetch request
 - ## Request methods : (http requests)
  - server decides which request will the client send 
   - 1. GET : to fetch / read the data
        - not secured 
        - data is sent in url (history ,bookmark, shown everywhere)
        - only string data not json 

   - 2. POST: to store the data 
        - body or any other format 
   - 3. PUT : to update the data 
   - 4. DELETE : to delete the data 

give url for reqest , 
type of request 
body:values 'what to send'
- send data in json : json.stringify

 . no-CORS : servers at different origin (3000,5000) dont allow cross origin
  for this , npm i cors at backend

  30/03/24

  - add toast for showing all status code responses
     - import in layout of the project
     - add in every request in thenc code 
// then catch for promise async only for either then either catch run s
async await then use try catch  error always try runs 
 

 ### HOOKS 
 to manage lifecycle of components 
 hook is fixed 


#### useEffect ()
 - page open hote hi load ho
 - used for autosave
 - close hone k just phle
 - on every change save
  

  homwork create signup form userRouter crete 

  -- onClick me callback nhi lgae to apne ap run hojata bcz jsx k sare function run hote , onclick me b jo likha hoga to run hojaega , if callback lga hota to onClick me function ka return data store rhta (already run hoke ) and click krne pe chal jata bs 

