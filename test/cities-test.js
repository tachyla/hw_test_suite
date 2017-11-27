/* 

High level positive and negative scenarios with clear test goals and expected results

P0 - User Acceptance(Smoke)
If any of these tests fail, the product should NOT release w/o proper documentation
of a software defect and communication with DEV
ALL these tests should be executed each for each release candidate.

**These tests should be run on the oldest & latest version iOS system that Lyft supports
**These tests should be run on the oldest & latest version android system that Lyft supports


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
        - Clicking on city routes user to lyft.com/cities/cityName || Area (Ex. /greater-toronto-area-on for Ajax)        

IV. City details page (Each city’s details)
        -City Image displays
        -h1 element displays city || region name 
        -Sign Up Now button exists
        -Clicking Sign Up Now leads user to authentication page
        -Description describes selected city||region
        -Selected region highlighted on map is accurate
        -Users can zoom in/out map of selected region

        
V.  The estimate ride cost form on the details page
        -Get ride estimation element exists
        -Add pickup location input element exists
        -Add destination input element exists
        -Price should be consistent regardless of location entered (negative case)
            ex. atlanta page but enters san francisco locations=> price should be the same 
        -Price estimate displays when get estimate element is clicked
        -Sign up and ride button displays when 'Get Estimate' button is clicked
        -Sign up and ride leads user to authentication

VI. Latest software bug fixes(Sanity)

////////////////////////////////////////////////////////////////////////////////

P1 - The most important negative test cases for the future
Software defects found during this testing phase should be recorded. 
**These tests should be run on the oldest & latest version iOS system that Lyft supports
**These tests should be run on the oldest & latest version android system that Lyft supports

I.  City Search Box
        -(Negative) No errors display when typing City, State
        -Gracefully handles special characters in City Search Box
        -Gracefully handles numbers in City Search Box

II. Cities list
        -
        -

III.City details page (Each city’s details)
        -
        -"Use two fingers to move the map" overlay displays on touch
  
IV. The estimate ride cost form on the details page
        -"Fill out this field" Error displays when fields are left blank
        -User cannot proceed if any fields are left blank
        -User can manually enter pickup/destination locations

////////////////////////////////////////////////////////////////////////////////

P2 - other less important negative or corner test cases for the future
Software defects found during this testing phase should be recorded. 
**These tests should be run on the oldest & latest version iOS system that Lyft supports
**These tests should be run on the oldest & latest version android system that Lyft supports

I.  City Search Box
        -City Search Box fits ALL phone viewports
            -iPhone 5c
            -iPhone 8+
            -iPad
            -Nexus
            -Samsung Galaxy 
        -City Search Box displays porportionately sized in Landscape & Portrait views
        
    
II. Cities list
        -Landscape and Portrait viewports clearly display Cities content
        -States, Cities display in one or two alphabetical columns
        -Elegantly handle when user select two cities
        -Translation / spelling is accurate when phone's language is modified
        -Translations maintain accurate meaning when phone's language is modified
            -Spanish
            -German
            -Dutch
            -French
            -English

III.City details page (Each city’s details)
        -Availibility, affordability, & Meet/Airport  elements should resize for Landscape & Portrait views
        -User can zoom in map to view street names & businesses 
        -User can zoom out map for larger contiental view
  
IV. The estimate ride cost form on the details page
        -Map is capable of scrolling beyond bounds of selected city 
        -User can modify pickup/destination location for new Ride Estimation('Get Estimate' button present)
        -Select State A, but search for city in State B
       > -Price should be consistent regardless of location entered (negative case or edge??)
            ex. atlanta page but enters san francisco locations=> price should be the same 


V. -Data displays consisent after  an incoming call
   -Data display consistent after  an incoming text 

        
*/

