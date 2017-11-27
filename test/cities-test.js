/* 

High level positive and negative scenarios with clear test goals and expected results

P0 - User Acceptance(Smoke)
If any of these tests fail, the product should NOT release w/o proper documentation
of a software defect and communication with DEV
ALL these tests should be executed each for each release candidate. 

I. Page launces Successfully
    -https://www.lyft.com/cities successfully renders /cities page

II. City Search Box
    -City search box element exists
    -Users can type in input box
    -Autocomplete interactivly acknowledges text
    -Users can fully type city, stare & select enter
    -Users can opt to select Google's autocomplete
    -Enter captures input
    -No errors display when typing (Negative)

III. Cities list
    - States are Listed
    - States in alphabetical order
    - Cities are accurately listed under State 
    - Cities are accurately listed under Province
    - Cities in alphabetical order
    - Clicking on city routes user to lyft.com/cities/cityName || Area (Ex. /greater-toronto-area-on for Ajax
    - tab displays correct "cities-city || region"

IV. City details page (Each city’s details)
    -City Image displays
    -h1 el displays city || region name 
    -signup now button exists
    -clicking signup now lead user to authentication
    -description is for selected city||region
    -region of coverate highlighted on map is accurate
    -users can zoom in/out map
    -Get ride estimation element exists
    -Add pickup location input element exists
    -Add destination input element exists
    
V.  The estimate ride cost form on the details page
    -price should be consistent regardless of location entered (negative case)
        ex. atlanta page but enters san francisco locations=> price should be the same 
    -price estimate displays when get estimate element is clicked
    -sign up and ride button displays when 'Get Estimate' button is clicked
    -Signup & ride leads user to authentication

////////////////////////////////////////////////////////////////////////////////

P1 - The most important negative test cases for the future

I.  City Search Box
        -(Negative) No errors display when typing City, State
        -Gracefully handles special characters in City Search Box
        -Gracefully handles numbers in City Search Box

II. Cities list

III.City details page (Each city’s details)
  
IV. The estimate ride cost form on the details page
        -(Negatives) Error when fields are left blank
        -(Negative) cannot proceed when fields are empty

////////////////////////////////////////////////////////////////////////////////

P2 - the most important negative test cases for the future

I.  City Search Box
        -City Search Box displays fits phone viewport 
        -
        -

II. Cities list

III.City details page (Each city’s details)
  
IV. The estimate ride cost form on the details page
        -
        -

*/

