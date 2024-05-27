1. What command would you use to clear the terminal?
clear
    1. What is the shortcut command to open a new tab in your terminal?
ctrl shfit `backtick`
    1. What key would you use to scroll through previous commands you've typed before?
up arrow
    1. You have three txt files and an empty folder in your CLI folder. Write a single line command that will move all three txt files into the folder.
mv file1.txt file2.txt file3.txt folder
    1. You want to inspect the differences between two txt files, file1.txt and file2.txt. Write a command that would display the differences in content between these two files.
diff file1.txt file2.txt
    1. Write a command that would delete this folder and all of the contents inside.
rm -r folder 
    1. What is the command to list all files, including hidden files?  Write a command that displays all .css files in a folder.
ls -al , ls *.css
    1. What is the command to find a file by name on your disk (or some other storage medium)?
find
    1. What is the command to find a file by content
        - in your folder 
        - on the disk?  
          - That is, how do you search for a word or phrase in the file contents?
findstr
    1. Use a bash command to create a file named YourName.txt with no content in it.  Look at the permissions.
        - Now change the permissions so everyone can read it and execute it.  
        - Now change the permissions so only you can read it.
touch YourName.txt
ls -l YourName.txt
chmod a=rx YourName.txt
chmod a-rx YourName.txt && chmod u+r YourName.txt