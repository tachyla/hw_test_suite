/* 

High level positive and negative scenarios with clear test goals and expected results

Prioritize each test case as follows:
    P0 - most important/happy path test cases 
    P1 - the most important negative test cases for the feature
    P2 - other less important negative or corner test cases for the future


City Search Box
    -City search box element exists
    -Users can type in input box
    -Autocomplete interactivly acknowledges text
    -Users can fully type city, stare & select enter
    -Users can opt to select Google's autocomplete
    -Enter captures input
    -No errors display when typing (Negative)

Cities list
    - States are Listed
    - States in alphabetical order
    - Cities are accurately listed under State 
    - Cities are accurately listed under Province
    - Cities in alphabetical order
    - Clicking on city routes user to lyft.com/cities/cityName || Area (Ex. /greater-toronto-area-on for Ajax
    - tab displays correct "cities-city || region"

City details page (Each city’s details)
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
    
The estimate ride cost form on the details page
    -price should be consistent regardless of location entered (negative case)
        ex. atlanta page but enters san francisco locations=> price should be the same 
    -price estimate displays when get estimate element is clicked
    -sign up and ride button displays when 'Get Estimate' button is clicked
    -Signup & ride leads user to authentication

////////////////////////////////////////////////////////////////////////////////

City Search Box
        -(Negative) No errors display when typing City, State

Cities list

City details page (Each city’s details)

The estimate ride cost form on the details page
        -(Negatives) Error when fields are left blank
        -(Negative) cannot proceed when fields are empty


*/

