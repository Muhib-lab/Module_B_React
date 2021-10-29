import  {useState}  from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, Grid, Button, Box ,Spacing} from '@mui/material';

const questions = [
  {
    question: "HTML stands for _________",
    options:['HyperText Markup Language','HyperType','worng','None of these'],
    answer:'HyperText Markup Language'
  },
  {
    question: "React is a _________",
    options:['two page application','use in backend','single page application','None of these'],
    answer:'single page application'
  },
  {
    question: "JS stands for _________",
    options:['Java','JavaScript','Any of them','None of these'],
    answer:'JavaScript'
  },
  {
    question: "CSS stands for _________",
    options:['Cascading Style Sheet','Cascading Sheet','Any of them','None of these'],
    answer:'Cascading Style Sheet'
  },
  {
    question: "Jaavascript is a ____________  language. ",
    options: ["Coding", "Scripting", "programming", "none of these"],
    answer: "Scripting",
  },
  {
    question: "Is JavaScript and Java same _______________________",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "In HTML hover tag is _________________________",
    options: ["Inline", "Block level", "Pseudo", "None of these"],
    answer: "Pseudo",
  },
  {
    question: "for loop start with _________________________",
    options: ["initialize,increment", "decrement,condition", "initialize,condition,incre/decre", "None of these"],
    answer: "initialize,condition,incre/decre",
  },
  {
    question: "How can we check the last index of an char _________________________",
    options: ["charAt", "IndexOf", "lastIndexOf", "None of these"],
    answer: "lastIndexOf",
  }
]

// let [questionIndex,setQuestionIndex ] = useState('')



function App() {
  
  let [questionIndex,setQuestionIndex ] = useState(0)
  let [marks,setMarks] = useState(0)
  let [finishBtn,setFinishBtn] = useState(false)
  let [result,setResult] = useState(false)
  
  let nextQuestion = (e) =>{

    let a = e.target.value
    
    if(a === questions[questionIndex].answer){
      setMarks(marks+1)
    }

    if(questions.length-1 !== questionIndex){
      setQuestionIndex(questionIndex+1)  
    }
    else{
      setFinishBtn(!finishBtn)
    }
  }
  

  let showResult = () =>{
    setResult(!result)
    console.log('Obtained Marks: ' + marks)
    console.log('Percentage: ' + (marks/questions.length*100) + '%')
  }

  return (
    <div className='main'>

      <div>
        <Typography variant="h3">
          QUIZ APP
        </Typography>
      </div>
      
      <div>
          <Grid container>

          <Grid >
              <Grid  sx={{pt:4}} >
                <Typography  variant='h4'>
                  {questions[questionIndex].question}
              </Typography>
              </Grid>
 
              <Box  textAlign='center'>
              {questions[questionIndex].options.map((option,index)=>{
                return <Button sx={{mx:2,my:3}} key={index} variant="contained" onClick={(e)=>nextQuestion(e)} value={option} >{option}</Button> 

              })}
              </Box>

          
          <div sx={{pt:3}} >

              {finishBtn&&<Button variant="contained" onClick={showResult} >Finish Quiz</Button>}


              {result&&<Box  sx={{pt:3}}>

                <Typography variant='h5' component='div'>

                  Obtained Marks: {marks}
                  <br />
                  Percentage {(marks/questions.length*100)}%

                </Typography>
                
                </Box>}
          
           </div>



          </Grid>
          </Grid>
        </div>

    </div>
  );
}

export default App;
