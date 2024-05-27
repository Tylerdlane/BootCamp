Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Put it in a sample page, load it and check out the network tab in the Devtools.

Provide the test page and image that you used within the answer to this question. Then answer the question.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

<!-- Yes the dog.jpg is being called by a GET request when the page first loads to the HTML file, under the Network tab you can you see the dog.jpg and when clicked on you can the request method of GET under the headers-->

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`

 <!-- Yes the dog.jpg is being called by a GET request when the page first loads to the HTML file, under the Network tab you can you see the dog.jpg and when clicked on you can the request method of GET under the headers-->
