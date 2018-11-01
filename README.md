# Home:
/#/  
in home page use <weather> component and send 6 request from <weather> component for 6 city.

# Weather Details Page:
/#/weather/:woeid  
in details page get woeid from params and load fresh data of forcaste 6 days.

# Search
/#/search/:keyword  
whene user cick on search button app send request and get response, whene result array count is 0, app show a message to user that (No results were found. Try changing the keyword!), and whene result array count is more than 0, save result to localStorage and navigate user to search page.  
in search page first check keyword that bind with search box with keyword from params, if they are equal, load search result from localStorage and if they are not equal send request with new keyword (from params) and get new search result(then save new result to localStorage).  
with this progress app send fewer request to server and show data faster.  
