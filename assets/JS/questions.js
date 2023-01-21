let questions = [
    {
        'title': 'How do you write "Hello World" in an alert box?',
        'choices': [': alert("Hello World");', ': msg("Hello World");', ': msgBox("Hello World");', ': alertBox("Hello World");'],
        'answer': ': alert("Hello World");'
    },
    {
        'title': 'How do you add a comment in a JavaScript?',
        'choices': [': //This is a comment', ': #This is a comment', ': <!--This is a comment-->'],
        'answer': ': //This is a comment'
    },
    {
        'title': 'How do you find the number with the highest value of x and y?',
        'choices': [': top(x, y)', ': math.max(x, y)', ': math.ceil(x, y)', ': ceil(x, y)'],
        'answer': ': math.ceil(x, y)'
    },
    {
        'title': 'JavaScript is the same as Java, True or False?', 
        'choices': [': True', ': False'], 
        'answer': ': False'
    },
    {
        'title': 'How can you detect the clients browser name?',
        'choices': [': client.navName', ': navigator.appName', ': browser.name'], 
        'answer': ': navigator.appName'
    },
    {
        'title': 'Which operator is used to assign a value to a variable?', 
        'choices': [': -', ': x', ': =', ': +'], 
        'answer': ': ='
    },
    {
        'title': 'What will the following code return: Boolean(10 > 9)',
        'choices': [': False', ': True', ': NaN'], 
        'answer': ': True'
    },
    {
        'title': 'What is the correct JavaScript syntax to change the content of the HTML element following: <p id="demo">This is a demonstration.</p>',
        'choices': [': #demo.innerHTML = "Hello World!";', ': document.getElementByName("p").innerHTML = "Hello World!";', ': document.getElementById("demo").innerHTML = "Hello World!";', ': document.getElement("p").innerHTML = "Hello World!";'], 
        'answer': ': document.getElementById("demo").innerHTML = "Hello World!";'
    },
    {
        'title': 'How to write an IF statement in JavaScript?',
        'choices': [': if i == 5 then', ': if (i == 5)', ': if i = 5', ': if i = 5 then'], 
        'answer': ': if (i == 5)'
    },
    {
        'title': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'choices': [': if (i <> 5)', ': if (i != 5)', ': if i <> 5', ': if i =! 5 then'], 
        'answer': ': if (i != 5)'
    },
    {
        'title': 'How does a WHILE loop start?',
        'choices': [': while i = 1 to 10 ', ': while (i <= 10; i++)', ': while (i <= 10)'], 
        'answer': ': while (i <= 10)'
    },
    {
        'title': 'How does a FOR loop start?',
        'choices': [': for (i = 0; i <= 5)', ': for (i = 0; i <= 5; i++)', ': for (i <= 5; i++)', ': for i = 1 to 5'], 
        'answer': ': for (i = 0; i <= 5; i++)'
    },
    {
        'title': 'Which event occurs when the user clicks on an HTML element?',
        'choices': [': onmouseover', ': onchange', ': onclick', ': onmouseclick'], 
        'answer': ': onclick'
    },
    {
        'title': 'Is JavaScript case-sensitive?',
        'choices': [': No', ': Yes'], 
        'answer': ': Yes'
    },
    {
        'title': 'How do you call a function named "myFunction"?',
        'choices': [': call function myFunction()', ': call myFunction()', ': myFunction()'], 
        'answer': ': myFunction()'
    }
]