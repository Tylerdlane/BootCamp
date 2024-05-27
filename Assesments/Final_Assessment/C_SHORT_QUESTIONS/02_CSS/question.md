Take a look at this code snippet

  https://jsbin.com/rufarat/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

The span element is inline (you cannot change the top or bottom margins) meaning you set the horizontal margins like margin-right, margin-left, or even just margin to change both left and right.

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

The reason you can't change the margin-top in the head section is because CSS has differnt levels of specificity when it comes to styling.
 I'll start from the least to the most,
 4. Elements (div, h1, p, a)
 3. Classes and attribute selectors (.pic, [href])
 2. IDs (#pic)
 1.75. External styles sheet
 
 <!-- The question being asked? What we are trying to do here! -->
 1.5. Internal styles (like in the head of the html file)

 <!-- This is why the style in the head is being over written! If we take this away we will see the styles take head section for #pic  -->
 1. Inline styling ()  

 