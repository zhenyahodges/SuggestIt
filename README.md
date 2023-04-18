# Suggest<span style="color:#F79234">**It**</span>
## **Project Assignment: SPA with ReactJs**


This is a ReactJS project assignment for completing [SoftUni](https://softuni.bg/)
ReactJS Course. Details of the assignment are available [here](https://github.com/zhenyahodges/SoftUni-Courses/blob/main/Front_End/REACT/REACT-PROJECT/ReactJS-Project-Assignment.docx).

 ### **Built with:**

 ReactJS, React Router, React Router DOM, react-share
### **Router:**

 * createBrowserRouter  with v6.4 data APIs like loader and actions
#
## **About**
Suggest<span style="color:#F79234">**It**</span> is a web application which provides a simple interface for receiving feedback and suggestions for improvements for companies.
#

### <span style="color:#c2e2ee">**Welcome**</span>
<br>

![alt text](./readme-res/SuggestIt-Welcome-View.png "Welcome View")

#
### <span style="color:#c2e2ee">Catalog</span>

Guests & Logged Users can view the Catalog with feedback cards.
#
### <span style="color:#c2e2ee">**Card Details**</span>
Guests & Logged Users can view the Details of feedback cards.

Logged users, NOT owners can:
* (Vote for a suggestion.)
* Add a new suggestion.
* Edit suggestion * *if NOT timed out (1min time limit)*
* Delete suggestion * *if NOT timed out (1min time limit)*

Logged users, owners can:
* Edit a card they created. * *if NOT timed out (2min time limit)*
* Delete a card they created. * *if NOT timed out (2min time limit)*
* Print card
* Email card

Guests cannot edit or delete a card, vote for or add a suggestion.
#
### <span style="color:#c2e2ee">**Info Catalog**</span>
Additional Info Catalog.
#
### <span style="color:#c2e2ee">**Info Card Details**</span>
Guests & Logged Users can view the Details of info cards.

Logged users, NOT owners can:
* Print card
* Email card

Logged users, owners can:
* Edit a card they created.
* Delete a card they created.
* Print card
* Email card

Guests cannot edit or delete a card.
#
### <span style="color:#c2e2ee">**Profile**</span>
Logged users can:
* View their details
* View the feedback cards they created, edit & delete them.
* View a list of the suggestions they made, edit & delete them.
* Create new feedback cards


#
## **Validations & Error Handling**

### **Inputs: Register**

### Names
* Names should be between 3 and 64  characters.

### Email
* The email address must start with one or more letters, numbers, dots, underscores, percent signs, plus signs, or hyphens before the "@" symbol.
The "@" symbol must be followed by one or more letters, numbers, dots, or hyphens before the domain extension.
The domain extension must consist of at least two letters.
The email address must not have any spaces, tabs, or other special characters.

### Password
* Min 6 characters
* Must match with repeat password when registering. If no match is found, it alerts: *Passwords do not match*

### **Inputs:  Login**
* Email validation and password as above.
* If not found returns: <span style="color:red">*'Email or password invalid. Please try again.'*</span>

### **Inputs:  Create**
#### **Suggestions**:
* Brand: 30 characters
* Textarea: Max length 150 characters.

####  **Info cards**:
* Text Input: 30 characters
* Textarea: Max length 150 characters.

### **Not Found**
* If the page is not found, returns 404 page Not Found, with link back to the home page.

### **Fetch requests**
* Error handling implemented

### **Loading & Submitting:**
* Buttons show when data is loading or submitting.
#
### **To run**

In the project directory, you can run:

#### `cd client`
#### `npm start`
\
Start the server:
#### `cd server`
#### `node server.js`

\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
#



