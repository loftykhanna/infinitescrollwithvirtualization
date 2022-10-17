# React Virtualization with Infinite Scroll

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Start Project

Clone the project - and then
 ```npm install``` and ```npm start```. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

 ## About the project:
 - This project is harcoded for specific company - godaddy.
 - Have implemented infinite scroll for loading list of repos - items per page is 30
 - Have implemented virtualization for list view to enhance performance with large dataset
 ![image](https://user-images.githubusercontent.com/10628479/196141767-8d6a73fe-cc64-4857-a37e-1e647da35440.png)

 - Also has handled the case, while scrolling api call is made for data that is not fetched- Once data is fetched from api,we keep it in memory and dont make the api call again for same page no. 
 - When you click on Repo-name -> it moved to another page in new tab to show details. Details are fetched again from api on new page.
![image](https://user-images.githubusercontent.com/10628479/196140299-c6904647-a0a3-4e9a-9109-0405be7ea7f6.png)
- When we click on show details - no api call is made and details are shown in modal. As we already have required information from ``` https://api.github.com/orgs/godaddy/repos ``, another api call can be avoided as data is shown on same page
![image](https://user-images.githubusercontent.com/10628479/196141042-3b09a411-9765-4f48-9657-656155318c0a.png)

 ## Choices made
 - Only external packages used in repo is react-cool-virtual. I was confused between react-virtualized and react-cool-virtual. Specifically for this usecase react-cool-virtual make more sense its extremely light weight.
 - <img width="1385" alt="image" src="https://user-images.githubusercontent.com/10628479/196144494-fc56ac99-21c0-4727-8cf2-e148d42aed23.png">







