bornready
=========

##Born Ready Mobile Application README

Overview:
Born Ready is a mobile application designed to assist expecting parents childproof their homes. The user is provided with a checklist of items, sorted by rooms in the house of things to childproof in the home, as directed by the app. The user can check a box once that element has been childproofed. The program enables users to save their progress.

###Technical Overview:
Born Ready is an app that needed to be coded from scratch. The images, which were provided, were created in PowerPoint, and only needed to be ungrouped and saved as .png files. 

In two weeks, we plan to create a checklist app that can communicate with a server and save users’ results. There are PowerPoint wireframes available for our reference. In addition, the app will likely use HTML5/CSS3 and Javascript to develop the checklist app and then use Ratchet and PhoneGap to convert it to other platforms.

###Deliverables

Completion of this project will allow users to use the Born Ready app to perform the following actions:

	•	Marking items as completed
	•	Marking items as not applicable
	•	Unmarking items
	• 	Save progress 

Aesthetics and UX will be designed on best-effort basis.

###Scope

For this two-week project the following items are in scope:

	•	The user will be able to mark items as completed by checking a relevant checkbox.
	•	The user will be able to mark an already completed item as incomplete by unchecking a relevant checkbox.
	•	The user will be able to mark items as not applicable by checking a relevant box.
	•	Completed items will be shown differently from pending items.

The following items are out of scope:

	•	Multiple user accounts / logging in
	•	Grouping pending items.
	•	Security
	•	Deleting items
	•	QR/Barcode scanner to check for recalls
	•	Social media aspect, i.e. the ability to share the completed checklist via Facebook
	

###Technology Stack

	•	Node.js for server side programming
	•	JavaScript with jQuery for client side programming
	•	Bootstrap for basic styling and responsive layout
	•	Ratchet for mobile app functionality
	•	PhoneGap to support multiple platforms

##How We Developed It

###Overview

This mobile app is a joint project between Venture School and DevIowa. Venture School is an entrepreneurial summer school program, while DevIowa is a 9-week, full-stack coding bootcamp. Both are offered through the University of Iowa's John Pappajohn Entrepreneurial Center.

This app was the brainchild of the Born Ready team at the Venture School. The app is designed to educate expecting parents and help them childproof their home. Through a series of checklists, the app allows users to go from room to room in the home, view items that need to be childproofed and use a checklist to cross those items off a to-do list once completed. 

For example, the guide.html page provides a list of several rooms commonly found in the home, such as kitchen, living room, garage and nursery. Users walk into their kitchen, click on the kitchen link in the app, and a checklist of items to childproof appears. One of the kitchen checklist items is "Remove magnets from refrigerator." Once the user has completed the task, they click the box and it is checkmarked. If the user does not have magnets, they can click again, to a "non-applicable" setting. The app saves the info so users can return to their saved settings at a later time. 

Kelsey Smithart and Nico Aguilar from the Venture School pitched the app idea to the DevIowa class. The greatest strength of the app included:
	• Kelsey has a master's of science degree in occupational safety and ergonomics, wanted to create an app that would not only educate expecting parents on childproofing, but would also provide the lastest scientific research on childproofing and child safety in the home.  
	• Nico (who has a master's degree in health administration and public health policy) meticulously created the images for the app using PowerPoint. Yes, PowerPoint. 
	• The team had a well-developed graphic design, content and wireframe for the project. 

This app was developed by Linda Oyolu and Gigi Wood. Linda did the heavy lifting, working through the most difficult code and solve the most challenging JavaScript issues with our DevIowa instructors. Gigi was more of a co-pilot, who asked a lot of questions and stumbled through CSS and basic JavaScript before banging her head on the wall and finally, asking for assistance.  

###App Development
Linda and Gigi started out by creating all the basic files needed: the index.html page, data.js and data.json pages, package.json file and the css stylesheet, guide-style.css. As they slowly added code to those basic files, Linda spent her free-time taking the PowerPoint images, separating them from the files and saving them as .png files to be used for the app. 

One of our DevIowa instructors suggested we use Ratchet, a Bootstrap mobile app tool, to help us develop the app. We added the Ratchet functionality, which provided some neat UI, but also came with a lot of CSS code built in and had little documentation available online when we ran into questions and problems. 

Some of the first steps we took were to upload the necessary fonts, as well as the images for the app. We also created simple html files for each room in the app, as well as the content for each room's checklist. 

With all of the images ready to go, Linda created the Guide navigation page, with divs for each room button. The Guide navigation page provides graphical links to each room page, where a room-specific checklist page can be found. As she went along, she also worked on creating the title bar element, which includes the Born Ready name and an info button that links to a tutorial. The title bar element is a part of Ratchet. 

Linda's next challenge was to resolve a color issue, where the title bar, background image and background color were not matching up to the same shade of peach. It took a lot of tinkering with the color-picker, Sip, but she finally found a match. 

Next up was the coding for each room page. Before the checklist content was added, there needed to be code for the correct positioning of the title header element, the Born Ready logo and the "card" space within the container, which would eventually hold the checklist items. Once resolved, the checklist content (within the data.js file) was added. 

Next, Linda found and created image files to be used on the checkbox itself: a checkmark and an "x". She also worked on shading for the checkmark row, so it would be greyed out once it had been checked or "x"ed. 

Another challenge was adding the slider capability, allowing users to swipe through the tutorial pages. The slider capability was difficult to get functioning through Ratchet, but with some mentoring and advice from the tutors, it was working. Because of how the slider function works, she linked all the walkthrough images on walkthrough2.html, so they all load together. That is also where the "continue" button can be found.

At that point, several people suggested a "skip" button be added to the index.html page, so users were not forced through a tutorial each time they started the app. So "tutorial" and "skip" buttons were added as buttons over the background image, and the positioning of those two buttons, as well as the "continue" button at the end of the tutorial, proved problematic as we tried to resolve responsiveness through Ratchet, the css stylesheet and the index.html page. 

Linda also created the JavaScript function code for the checklist operation in the checklist.js file, defining which image appeared in the box when it was clicked once, twice and a third time. The checklist.js file also contains the code that allows the data to be stored locally. 

Linda and Gigi created a PhoneGap account and merged the app with PhoneGap to test and debug it, as well as view it on other devices. 

At the end of the two-week project, Gigi and Linda worked on debugging and image positioning/responsiveness. 

It was a great pleasure to contribute to the Born Ready project!

--Gigi Wood




















 






















