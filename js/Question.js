class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option....")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- Who is the Prime Minister of India?");
    this.question.position(200,80);
    
    this.option1.html("1. Narendra Modi");
    this.option1.position(200,120);
    
    this.option2.html("2. Rajendra Prasad");
    this.option2.position(200,140);
    
    this.option3.html("3. Jawaharlal Nehru");
    this.option3.position(200,160);
    
    this.option4.html("4. Abdul Kalam");
    this.option4.position(200,180);
    
    this.input1.position(150, 230);
    this.input2.position(400,230);
    this.button.position(290, 300);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(200,360);
    })


  }
}
